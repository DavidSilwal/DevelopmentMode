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

        public string UserActivityCollectionName { get; set; } = "UserActivities";

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


        //public virtual IMongoCollection<UserActivityModel> UserActivityCollection
        //{
        //    get
        //    {
        //        if (_userActivityCollection == null)
        //        {

        //            _userActivityCollection = Database.GetCollection<UserActivityModel>(UserActivityCollectionName, CollectionSettings);
        //        }
        //        return _userActivityCollection;
        //    }
        //    set { _userActivityCollection = value; }
        //}
        //private IMongoCollection<UserActivityModel> _userActivityCollection;

    }
}
