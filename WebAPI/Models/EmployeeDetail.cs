using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Models
{
    public class EmployeeDetail
    {
        [Key]
        public int id { get; set; }

        [Required]
        [Column(TypeName ="varchar(40)")]
        public string name { get; set; }

        [Required]
        [Column(TypeName = "varchar(50)")]
        public string email { get; set; }

        [Required]
        [Column(TypeName = "varchar(15)")]
        public string password { get; set; }

        [Required]
        [Column(TypeName = "varchar(10)")]
        public string dob { get; set; }

        [Required]
        [Column(TypeName = "varchar(10)")]

        public string doj { get; set; }
    }
}
