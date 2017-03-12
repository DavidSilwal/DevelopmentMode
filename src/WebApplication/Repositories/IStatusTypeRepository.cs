using System.Collections.Generic;
using System.Threading.Tasks;
using WebApplication.Data;

namespace WebApplication.Repositories
{
    public interface IStatusTypeRepository
    {
        Task Delete(StatusType statusType);
        Task<List<StatusType>> FindAll();
        Task<StatusType> Get(string _id);
        Task Save(StatusType statusType);
        Task Update(StatusType statusType);


    }
}