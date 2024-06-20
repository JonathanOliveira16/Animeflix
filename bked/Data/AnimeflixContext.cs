using Microsoft.EntityFrameworkCore;
using Animeflix.Models;

namespace Animeflix.Data
{
    public class AnimeflixContext : DbContext
    {
        public AnimeflixContext(DbContextOptions<AnimeflixContext> options) : base(options) { }

        public DbSet<User> Users { get; set; }
        public DbSet<Anime> Animes { get; set; }
    }
}
