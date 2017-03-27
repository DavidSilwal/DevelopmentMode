using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebApplication.Identity;
using WebApplication.Models;

namespace WebApplication.Services
{
    public class ViewModelService : IViewModelService
    {
        protected readonly UserStore<IdentityUser, IdentityRole> _userStore;
        public ViewModelService(UserStore<IdentityUser, IdentityRole> userStore)
        {
            _userStore = userStore;
        }


        public TileViewModel GetUserDashboardViewModel()
        {
            return new TileViewModel
            {
                Title = "User Info",
                Value = _userStore.Users.Count(),
                ColorCssClass = "panel-primary",
                IconCssClass = "fa-slider",

            };

        }
    }
}
