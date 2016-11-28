using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace WebApplication.Data
{
    public interface IUserStatusDataRepository
    {
        Task Delete(UserStatusData item);
        Task<List<UserStatusData>> FindAll();
        Task<UserStatusData> Get(Guid? _id);
        Task Save(UserStatusData MessageTemplate);
        Task Update(UserStatusData item);
        Task UpdateMsg(UserStatusData item);
    }
}