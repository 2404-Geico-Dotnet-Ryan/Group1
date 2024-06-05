using KittyCity.DTOs;
using KittyCity.Services;
using Microsoft.AspNetCore.Mvc;

namespace KittyCity.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class LoginController : ControllerBase
    {
        // private readonly ILoginService _loginService;
        // public LoginController(ILoginService loginService)
        // {
        //     _loginService = loginService;
        // }

        // [HttpGet]
        // public ActionResult<IEnumerable<LoginDTO>> GetAllLogins()
        // {
        //     var login = _loginService.GetAllLogins();
        //     return Ok(login);
        // }

        // [HttpGet("{LoginId}")]
        // public ActionResult<LoginDTO> GetLoginById(int LoginId)
        // {
        //     var login = _loginService.GetLoginById(LoginId);
        //     return login;
        // }

        // [HttpPost]
        // public ActionResult<LoginDTO> PostLogin(LoginDTO loginDto)
        // {
        //     var login = _loginService.CreateLogin(loginDto);
        //     return CreatedAtAction(nameof(GetLoginById), new { LoginId = login.UserId}, loginDto);
        // }

        // [HttpPut("{LoginId}")]
        // public ActionResult<LoginDTO> UpdateLogin(int LoginId, LoginDTO updatedLogin)
        // {
        //     _loginService.UpdateLogin(LoginId, updatedLogin);
        //     return Ok(updatedLogin);
        // }

        // [HttpDelete("{LoginId}")]
        // public IActionResult DeleteLogin(int LoginId)
        // {
        //     _loginService.DeleteLogin(LoginId);
        //     return Ok();
        // }

    }
}