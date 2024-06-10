using KittyCity.DTOs;
using KittyCity.Models;
using Microsoft.AspNetCore.Mvc;

namespace KittyCity.Services
{
    public interface ILoginService
    {
        IEnumerable<LoginDTO> GetAllLogins();

        LoginDTO GetLoginById(int LoginId);

        Login CreateLogin(LoginDTO loginDto);

        void UpdateLogin(int LoginId, LoginDTO updatedLogin);

        void DeleteLogin(int LoginId);
        Task<ActionResult<LoginDTO>> LoginUser(LoginDTO userLogin);
    }
}