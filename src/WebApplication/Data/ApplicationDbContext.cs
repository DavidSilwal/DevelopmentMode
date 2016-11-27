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

        public string UserDataCollectionName { get; set; } = "UserData";


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


        public virtual IMongoCollection<UserData> UserDataCollection
        {
            get
            {
                if (_userDataCollection == null)
                {

                    _userDataCollection = Database.GetCollection<UserData>(UserDataCollectionName, CollectionSettings);
                }
                return _userDataCollection;
            }
            set { _userDataCollection = value; }
        }
        private IMongoCollection<UserData> _userDataCollection;




    }
}
