using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Model
{
    public class LeaveDetailContext :DbContext
    {
        public LeaveDetailContext(DbContextOptions<LeaveDetailContext> options) : base(options)
        {

        }
        public DbSet<LeaveDetail> LeaveDetails { get; set; }
    }
}
