using Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebApplication.Data;

namespace WebApplication.Models.Extensions
{
    public static partial class Extensions
    {
        public static IdentityUser UpdateEntity(this UserViewModel source, IdentityUser destination)
        {

            var oldRoles = new List<IdentityRole<string>>();

            foreach (var userRole in destination.Roles)
            {
                oldRoles.Add(userRole);
            }

            foreach (var oldRole in oldRoles)
            {
                if (!source.Ids.Contains(oldRole.Id))
                {
                    destination.Roles.Remove(oldRole);
                }
                else
                {
                    source.Ids.Remove(oldRole.Id);

                }
            }

            if (source.Ids != null)
            {
                foreach (var Id in source.Ids)
                {
                    var userRole = new IdentityRole<string>();

                    userRole.Id = Id;

                    destination.Roles.Add(userRole);
                }
            }

            return destination;
        }

        public static IdentityUser ToEntity(this UserViewModel source)
        {
            var destination = new IdentityUser();

            destination.Email = source.Email;
            destination.UserName = source.UserName;

            if (source.Ids != null)
            {
                foreach (var Id in source.Ids)
                {
                    var userRole = new IdentityRole<string>() { Id = Id };

                    destination.Roles.Add(userRole);
                }
            }

            return destination;
        }

        public static UserViewModel ToViewModel(this IdentityUser source)
        {
            var destination = new UserViewModel();
   
            destination.Id = source.Id;
            destination.Email = source.Email;
            destination.UserName = source.UserName;

            if (source.Roles != null)
            {
                foreach (var userRole in source.Roles)
                {
                    destination.Ids.Add(userRole.Id);
                                     
                }
            }

            return destination;
        }


        public static UserAdminViewModel UserAdminViewModel(this IdentityUser source)
        {
            var destination = new UserAdminViewModel();

            destination.Id = source.Id;
            destination.UserName = source.UserName;
            destination.Email = source.Email;
            destination.EmailConfirmed = source.EmailConfirmed;

           
            if(source.Roles != null)
             {
                //foreach (var userRole in source.Roles)
                //{
                //    destination.RoleNames.Add(userRole.Name);

                //}

            }
            return destination;
        }


        public static List<UserAdminViewModel> ToListUserAdminViewModel(this List<IdentityUser> source)
        {
            var destination = new List<UserAdminViewModel>();

            if (source != null)
            {
                foreach (var item in source)
                {
                    destination.Add(item.UserAdminViewModel());

                }
            }

            return destination;
        }

        public static List<UserViewModel> ToListViewModel(this List<IdentityUser> source)
        {
            var destination = new List<UserViewModel>();

            if (source != null)
            {
                foreach (var item in source)
                {
                    destination.Add(item.ToViewModel());

                }
               }

            return destination;
        }





    }
}
