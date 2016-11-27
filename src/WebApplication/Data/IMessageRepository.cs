using System.Collections.Generic;
using System.Threading.Tasks;
using MongoDB.Bson;
using System;

namespace WebApplication.Data
{
    public interface IMessageRepository
    {
        Task Delete(MessageTemplate MessageTemplate);
        Task<List<MessageTemplate>> FindAll();
        Task<MessageTemplate> Get(Guid? _id);
        Task Save(MessageTemplate MessageTemplate);
        Task Update(MessageTemplate MessageTemplate);
   
        Task UpdateMsg(MessageTemplate msg);
    }
}