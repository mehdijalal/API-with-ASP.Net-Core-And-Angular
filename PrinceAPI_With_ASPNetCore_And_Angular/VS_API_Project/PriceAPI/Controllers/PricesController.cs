using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PriceAPI.Models;

namespace PriceAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PricesController : ControllerBase
    {
        private readonly PriceDbContext _context;

        public PricesController(PriceDbContext context)
        {
            _context = context;
        }

        // GET: api/Prices
        [HttpGet]
        public IEnumerable<Price> GetMyPrice()
        {
            return _context.MyPrice;
        }

        // GET: api/Prices/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetPrice([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var price = await _context.MyPrice.FindAsync(id);

            if (price == null)
            {
                return NotFound();
            }

            return Ok(price);
        }

        // PUT: api/Prices/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPrice([FromRoute] int id, [FromBody] Price price)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != price.PId)
            {
                return BadRequest();
            }

            _context.Entry(price).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PriceExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Prices
        [HttpPost]
        public async Task<IActionResult> PostPrice([FromBody] Price price)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.MyPrice.Add(price);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetPrice", new { id = price.PId }, price);
        }

        // DELETE: api/Prices/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePrice([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var price = await _context.MyPrice.FindAsync(id);
            if (price == null)
            {
                return NotFound();
            }

            _context.MyPrice.Remove(price);
            await _context.SaveChangesAsync();

            return Ok(price);
        }

        private bool PriceExists(int id)
        {
            return _context.MyPrice.Any(e => e.PId == id);
        }
    }
}