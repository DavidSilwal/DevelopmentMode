using Microsoft.AspNetCore.Mvc.Rendering;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WebApplication.Models
{
    public class SendEmailViewModel
    {
        public string Email { get; set; }
        public string MessageTypeID { get; set; }
    }
}
