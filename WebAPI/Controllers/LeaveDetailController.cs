using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebAPI.Model;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LeaveDetailController : ControllerBase
    {
        private readonly LeaveDetailContext _context;

        public LeaveDetailController(LeaveDetailContext context)
        {
            _context = context;
        }

        // GET: api/LeaveDetail
        [HttpGet]
        public async Task<ActionResult<IEnumerable<LeaveDetail>>> GetLeaveDetails()
        {
            return await _context.LeaveDetails.ToListAsync();
        }

        // PUT: api/LeaveDetail/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutLeaveDetail(int id, LeaveDetail leaveDetail)
        {
            if (id != leaveDetail.id)
            {
                return BadRequest();
            }

            _context.Entry(leaveDetail).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!LeaveDetailExists(id))
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

        // POST: api/LeaveDetail
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPost]
        public async Task<ActionResult<LeaveDetail>> PostLeaveDetail(LeaveDetail leaveDetail)
        {
            _context.LeaveDetails.Add(leaveDetail);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetLeaveDetail", new { id = leaveDetail.id }, leaveDetail);
        }

        // DELETE: api/LeaveDetail/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<LeaveDetail>> DeleteLeaveDetail(int id)
        {
            var leaveDetail = await _context.LeaveDetails.FindAsync(id);
            if (leaveDetail == null)
            {
                return NotFound();
            }

            _context.LeaveDetails.Remove(leaveDetail);
            await _context.SaveChangesAsync();

            return leaveDetail;
        }

        private bool LeaveDetailExists(int id)
        {
            return _context.LeaveDetails.Any(e => e.id == id);
        }
    }
}
