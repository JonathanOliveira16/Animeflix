using Microsoft.AspNetCore.Mvc;
using Animeflix.Data;
using Animeflix.Models;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace Animeflix.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly AnimeflixContext _context;

        public UsersController(AnimeflixContext context)
        {
            _context = context;
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] User user)
        {
            var existingUser = await _context.Users
                .FirstOrDefaultAsync(u => u.Email == user.Email && u.Senha == user.Senha);

            if (existingUser == null)
                return Unauthorized(new { message = "Email ou senha incorretos." });

            return Ok(new { usuario = existingUser });
        }

        [HttpPost("cadastro")]
        public async Task<IActionResult> Register([FromBody] User user)
        {
            var existingUser = await _context.Users.AnyAsync(u => u.Email == user.Email);

            if (existingUser)
                return BadRequest(new { message = "Email já cadastrado." });

            _context.Users.Add(user);
            await _context.SaveChangesAsync();

            return Ok(new { message = "Usuário cadastrado com sucesso!" });
        }
    }
}
