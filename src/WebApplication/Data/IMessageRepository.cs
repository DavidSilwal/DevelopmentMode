using System.Collections.Generic;
using System.Threading.Tasks;
using MongoDB.Bson;

namespace WebApplication.Data
{
    public interface IMessageRepository
    {
        Task Delete(MessageTemplate MessageTemplate);
        Task<List<MessageTemplate>> FindAll();
        Task<MessageTemplate> Get(string _id);
        Task Save(MessageTemplate MessageTemplate);
        Task Update(MessageTemplate MessageTemplate);
    }
}