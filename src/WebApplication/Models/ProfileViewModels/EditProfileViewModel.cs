using Identity;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WebApplication.Models.ProfileViewModels
{
    public class EditProfileViewModel
    {

        public string Id { get; set; }

        public Task<string> UserName { get; set; }

        public Task<string> Email { get; set; }
        public Task<string> PhoneNumber { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }

        public DateTimeOffset? DateOfBirth { get; set; }

        public string BirthCountry { get; set; }

        public string CurrentCountry { get; set; }




        public Task<IList<string>> Roles { get; set; }

    
        public IFormFile Image { get; set; }

    }
}
