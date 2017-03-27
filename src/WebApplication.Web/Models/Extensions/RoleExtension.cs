using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebApplication.Identity;

namespace WebApplication.Models.Extensions
{
    public static partial class Extensions
    {
        public static IdentityRole ToEntity(this RoleViewModel source)
        {
            var destination = new IdentityRole();

            destination.Name = source.Name;

          
            return destination;
        }

        public static RoleViewModel ToViewModel(this IdentityRole source)
        {
            var destination = new RoleViewModel();

            destination.Id = source.Id;
            destination.Name = source.Name;
            destination.ConcurrencyStamp = source.ConcurrencyStamp;
            return destination;
        }

        public static List<RoleViewModel> ToListViewModel(this List<IdentityRole> source)
        {
            var destination = new List<RoleViewModel>();

            if (source != null)
            {
                foreach (var item in source)
                {
                    destination.Add(item.ToViewModel());
                }
            }

            return destination;
        }


        public static IdentityRole UpdateEntity(this RoleViewModel source, IdentityRole destination)
        {
            destination.Id = source.Id;
            destination.Name = source.Name;
            destination.ConcurrencyStamp = source.ConcurrencyStamp;
    
         
            return destination;
        }













    }
}
