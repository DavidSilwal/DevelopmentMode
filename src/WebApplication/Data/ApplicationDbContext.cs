using Identity;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WebApplication.Data
{
    public class ApplicationDbContext : IdentityDatabaseContext<IdentityUser, IdentityRole, string>
    {

        public string MessageTemplateCollectionName { get; set; } = "MessageTemplates";

        public string UserStatusDataCollectionName { get; set; } = "UserStatusData";


        public virtual IMongoCollection<MessageTemplate> MessageTemplateCollection
        {
            get
            {
                if (_messageTemplateCollection == null)
                {
                   
                    _messageTemplateCollection = Database.GetCollection<MessageTemplate>(MessageTemplateCollectionName, CollectionSettings);
                }
                return _messageTemplateCollection;
            }
            set { _messageTemplateCollection = value; }
        }
        private IMongoCollection<MessageTemplate> _messageTemplateCollection;


        public virtual IMongoCollection<UserStatusData> UserStatusDataCollection
        {
            get
            {
                if (_UserStatusDataCollection == null)
                {

                    _UserStatusDataCollection = Database.GetCollection<UserStatusData>(UserStatusDataCollectionName, CollectionSettings);
                }
                return _UserStatusDataCollection;
            }
            set { _UserStatusDataCollection = value; }
        }
        private IMongoCollection<UserStatusData> _UserStatusDataCollection;






    }
}
