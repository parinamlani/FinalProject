using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.EmpMapModel
{
    public class EmployeeMapDetail
    {
        [Key]

        public int eid { get; set; }

        [Required]
        [Column(TypeName ="varchar(2)")]
        public string empid { get; set; }

        [Required]
        [Column(TypeName = "varchar(2)")]
        public string Levid { get; set; }

        [Required]
        [Column(TypeName = "varchar(10)")]
        public string LevStartdt { get; set; }

        [Required]
        [Column(TypeName = "varchar(10)")]
        public string LevEnddt { get; set; }

        [Required]
        [Column(TypeName = "varchar(15)")]
        public string status { get; set; }


    }
}
