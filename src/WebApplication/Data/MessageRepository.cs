using MongoDB.Bson;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WebApplication.Data
{
    public class MessageRepository : IMessageRepository
    {
        protected readonly ApplicationDbContext _context;
        public MessageRepository(ApplicationDbContext context)
        {
            _context = context;
        }


        public async Task<MessageTemplate> Get(string id)
        {
            ObjectId _id = ObjectId.Parse(id);
            return await _context.MessageTemplateCollection.FindSync(x => x._id == _id).SingleAsync();
        }

        public async Task Save(MessageTemplate MessageTemplate)
        {
            await _context.MessageTemplateCollection.InsertOneAsync(MessageTemplate);
        }

        public async Task Delete(MessageTemplate MessageTemplate)
        {
            await _context.MessageTemplateCollection.DeleteOneAsync(x => x._id == MessageTemplate._id);
        }

        public async Task Update(MessageTemplate MessageTemplate)
        {
            await _context.MessageTemplateCollection.ReplaceOneAsync(x => x._id == MessageTemplate._id, MessageTemplate);
        }

        public async Task<List<MessageTemplate>> FindAll()
        {
            var MessageTemplates = await _context.MessageTemplateCollection.Find("{}").ToListAsync();
            return MessageTemplates;
        }



    }
}
