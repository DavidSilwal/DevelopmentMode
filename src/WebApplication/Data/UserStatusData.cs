using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WebApplication.Data
{
    public class UserStatusData
    {
        public Guid _id { get; set; }

        public string Type { get; set; }
        
        public string Status { get; set; }

        [DisplayFormat(DataFormatString = "{0:dd/MM/yyyy}")]
        public DateTime UpdateTime { get; set; }

        public bool IsHidden { get; set; } // if  personal user visible
        
    }
}
