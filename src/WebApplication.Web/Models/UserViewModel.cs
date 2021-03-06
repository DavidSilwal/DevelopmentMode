﻿using MongoDB.Bson;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebApplication.Data;

namespace WebApplication.Models
{
    public class UserViewModel
    {

        public UserViewModel()
        {
            Ids = new List<string>();
            RoleNames = new List<string>();
        }


        public string Id { get; set; }

      
        [Display(Name = "User Name")]
        public string UserName { get; set; }

     
        [Display(Name = "Email Address")]
        public string Email { get; set; }

        [Display(Name = "Password")]
        public string Password { get; set; }

        public List<string> RoleNames { get; set; }

        public List<string> Ids { get; set; }
        
    }

    public class UserChangePasswordViewModel
    {
        public string Id { get; set; }

        [Display(Name = "Password")]
        public string Password { get; set; }

        [Display(Name = "Confirm Password")]
        public string ConfirmPassword { get; set; }
    }
}
