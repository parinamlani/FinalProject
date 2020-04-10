using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebAPI.EmpMapModel;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeMapDetailController : ControllerBase
    {
        private readonly EmployeeMapDetailContext _context;

        public EmployeeMapDetailController(EmployeeMapDetailContext context)
        {
            _context = context;
        }

        // GET: api/EmployeeMapDetail
        [HttpGet]
        public async Task<ActionResult<IEnumerable<EmployeeMapDetail>>> GetemployeeMapDetails()
        {
            return await _context.employeeMapDetails.ToListAsync();
        }

        // PUT: api/EmployeeMapDetail/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutEmployeeMapDetail(int id, EmployeeMapDetail employeeMapDetail)
        {
            if (id != employeeMapDetail.eid)
            {
                return BadRequest();
            }

            _context.Entry(employeeMapDetail).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EmployeeMapDetailExists(id))
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

        // POST: api/EmployeeMapDetail
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPost]
        public async Task<ActionResult<EmployeeMapDetail>> PostEmployeeMapDetail(EmployeeMapDetail employeeMapDetail)
        {
            _context.employeeMapDetails.Add(employeeMapDetail);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetEmployeeMapDetail", new { id = employeeMapDetail.eid }, employeeMapDetail);
        }

        // DELETE: api/EmployeeMapDetail/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<EmployeeMapDetail>> DeleteEmployeeMapDetail(int id)
        {
            var employeeMapDetail = await _context.employeeMapDetails.FindAsync(id);
            if (employeeMapDetail == null)
            {
                return NotFound();
            }

            _context.employeeMapDetails.Remove(employeeMapDetail);
            await _context.SaveChangesAsync();

            return employeeMapDetail;
        }

        private bool EmployeeMapDetailExists(int id)
        {
            return _context.employeeMapDetails.Any(e => e.eid == id);
        }
    }
}
