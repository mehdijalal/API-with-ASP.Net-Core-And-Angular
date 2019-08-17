using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PriceAPI.Models
{
    public class PriceDbContext:DbContext
    {
        public PriceDbContext(DbContextOptions<PriceDbContext> options) : base(options)
        {

        }
        public DbSet<Price> MyPrice { get; set; }
    }
}
