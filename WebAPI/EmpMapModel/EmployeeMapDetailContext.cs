using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.EmpMapModel
{
    public class EmployeeMapDetailContext:DbContext
    {
        public EmployeeMapDetailContext(DbContextOptions<EmployeeMapDetailContext>options):base(options)
        {

        }
        public DbSet<EmployeeMapDetail> employeeMapDetails { get; set; }
    }
}
