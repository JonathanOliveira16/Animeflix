using Microsoft.AspNetCore.Mvc;
using Animeflix.Data;
using Animeflix.Models;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace Animeflix.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AnimesController : ControllerBase
    {
        private readonly AnimeflixContext _context;

        public AnimesController(AnimeflixContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Anime>>> GetAnimes()
        {
            return await _context.Animes.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Anime>> GetAnime(int id)
        {
            var anime = await _context.Animes.FindAsync(id);

            if (anime == null)
            {
                return NotFound();
            }

            return anime;
        }

        [HttpPost]
        public async Task<ActionResult<Anime>> PostAnime(Anime anime)
        {
            _context.Animes.Add(anime);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetAnime), new { id = anime.Id }, anime);
        }
    }
}
