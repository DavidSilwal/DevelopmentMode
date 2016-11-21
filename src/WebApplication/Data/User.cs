using Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WebApplication.Data
{
    public class User : IdentityUser<string>
    {
        public User() : base()
        {

        }


        //public string FirstName { get; set; }


        //public string LastName { get; set; }


        //public DateTimeOffset? DateOfBirth { get; set; }


        //public string BirthCountry { get; set; }


        //public string CurrentCountry { get; set; }


        //public string Image { get; set; }


        //public Occurrence CreatedOn { get; private set; }
        //public Occurrence DeletedOn { get; private set; }

    }
}
