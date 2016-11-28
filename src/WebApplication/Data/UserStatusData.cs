using System;
using System.Collections.Generic;
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

        public DateTime UpdateTime { get; set; }

        public bool IsHidden { get; set; } // if  personal user visible
        

    }
}
