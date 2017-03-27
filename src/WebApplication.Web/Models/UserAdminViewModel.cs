using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WebApplication.Models
{
    public class UserAdminViewModel
    {
        public virtual string Id { get; set; }
        
        [Display(Name = "User Name")]
        public virtual string UserName { get; set; }


        [Display(Name = "Email Address")]
        public virtual string Email { get; set; }

        public virtual bool EmailConfirmed { get; set; }

        public virtual DateTime  CreatedOn { get;  set; }
        
        public virtual List<string> RoleNames { get; set; }
    }
}
