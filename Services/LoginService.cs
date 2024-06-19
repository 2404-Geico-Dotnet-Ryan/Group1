using KittyCity.Data;
using KittyCity.DTOs;
using KittyCity.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace KittyCity.Services
{
    public class LoginService : ILoginService
    {
        private readonly AppDbContext _context;

        public LoginService(AppDbContext context)
        {
            _context = context;
        }
        public IEnumerable<LoginDTO> GetAllLogins()
        {
            var logins = _context.Logins
                    .Select(l => new LoginDTO
                    {
                        UserName = l.UserName,
                        UserPassword = HidePassword(l.UserPassword),
                        PersonId = l.PersonId
                    }).ToList();

            return logins;
        }

        public static string HidePassword(string password)
        {
            Random encrypt = new Random();
            string letters = "************ABCDE12345";
            string hidePassWord = "";
            
            for (int i = 0; i<=8; i++)
            {
                int pick = encrypt.Next(letters.Length);
                hidePassWord += letters[pick];
            }
            return hidePassWord;
        }

        public LoginDTO GetLoginById(int LoginId)
        {
            var login = _context.Logins.Find(LoginId);
            var loginDto = new LoginDTO{
                UserName = login.UserName,
                UserPassword = login.UserPassword,
                PersonId = login.PersonId
            };

            return loginDto;
        }

        public Login CreateLogin(LoginDTO loginDto)
        {
            if (ValidateNewLogin(loginDto))
            {
                var login = new Login
                {
                    UserName = loginDto.UserName,
                    UserPassword = loginDto.UserPassword,
                    PersonId = loginDto.PersonId,
                    // AccessLevel = loginDto.AccessLevel // Is this defaulted? may not need this.
                };
                _context.Logins.Add(login);
                _context.SaveChanges();

                return login;
            }
            else
            {
                throw new Exception("Invalid User");
            }
        }

        private bool ValidateNewLogin(LoginDTO loginDto)
        {
            if(loginDto.UserName.Trim().Length == 0)
            {
                return false;
            }
            return true;
        }

        public void UpdateLogin(int LoginId, LoginDTO updatedLogin)
        {
            var login = _context.Logins.FirstOrDefault(l => l.LoginId == LoginId);
            login.UserName = updatedLogin.UserName;
            login.UserPassword = updatedLogin.UserPassword;

            _context.Logins.Update(login);
            _context.SaveChanges();
        }

        public void DeleteLogin(int LoginId)
        {
            var login = _context.Logins.FirstOrDefault(l => l.LoginId == LoginId);

            _context.Logins.Remove(login);
            _context.SaveChanges();
        }

        public async Task<ActionResult<LoginDTO>> LoginUser(LoginDTO userLogin)
        {
            // Find the user by username and password
            var login = await _context.Logins.FirstOrDefaultAsync(l => l.UserName == userLogin.UserName && l.UserPassword == userLogin.UserPassword);

            if (login == null)
            {
                return null; // Indicate failure to find the user
            }

            var loginDto = new LoginDTO{
                UserName = login.UserName,
                UserPassword = login.UserPassword,
                PersonId = login.PersonId,
                AccessLevel = login.AccessLevel
            };

            return loginDto;
        }
    }
}