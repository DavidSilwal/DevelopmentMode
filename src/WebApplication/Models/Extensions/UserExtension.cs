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
                if (!source.RoleIds.Contains(oldRole.RoleId))
                {
                    destination.Roles.Remove(oldRole);
                }
                else
                {
                    source.RoleIds.Remove(oldRole.RoleId);
                }
            }

            if (source.RoleIds != null)
            {
                foreach (var roleId in source.RoleIds)
                {
                    var userRole = new IdentityRole<string>();

                    userRole.RoleId = roleId;

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

            if (source.RoleIds != null)
            {
                foreach (var roleId in source.RoleIds)
                {
                    var userRole = new IdentityRole<string>() { RoleId = roleId };

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
                    destination.RoleIds.Add(userRole.RoleId);
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
