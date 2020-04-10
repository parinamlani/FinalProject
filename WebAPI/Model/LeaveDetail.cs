using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Model
{
    public class LeaveDetail
    {
        [Key]
        public int id { get; set; }

        [Required]
        [Column(TypeName ="varchar(25)")]
        public string leavename { get; set; }

        [Required]
        [Column(TypeName ="int(2)")]
        public int numberOfDays { get; set; }
    }
}
