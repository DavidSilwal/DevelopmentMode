using Identity;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WebApplication.Models
{
    public class ProfileViewModel
    {

        //[Required(ErrorMessage = "Please Upload a Valid Image File")]
        //[DataType(DataType.Upload)]
        //[Display(Name = "Upload Product Image")]
        //[FileExtensions(Extensions = "jpg,png,gif,jpeg,bmp,svg")]
        //public IFormFile Image { get; set; }


        public ProfileViewModel()
        {
            RoleIds = new List<string>();
        }

        public string Id { get; set; }
        public Task<string> UserName { get; set; }
       
        public Task<string> Email { get; set; }
        public Task<string> PhoneNumber { get; set; }
        public Occurrence CreatedOn { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }
      
        public DateTimeOffset? DateOfBirth { get; set; }

        public string BirthCountry { get; set; }

        public string CurrentCountry { get; set; }




        public Task<IList<string>> Roles { get; set; }
            
        public List<string> RoleIds { get; set; }

        public string Image { get; set; }


    }
}
