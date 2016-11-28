using WebApplication.Models;

namespace WebApplication.Services
{
    public interface IViewModelService
    {
        TileViewModel GetUserDashboardViewModel();
    }
}