using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WebApplication.Data
{
    [BsonIgnoreExtraElements]
    public class MessageTemplate
    {

        public MessageTemplate()
        {
            IsActive = true;
            AddedOn = DateTime.UtcNow;
            IsActive = true;
            IsDeleted = false;

        }

      
        public Guid _id { get; set; }

        public int MessageTemplateTypeID { get; set; }
        public string Subject { get; set; }

        [DataType(DataType.MultilineText)]
        public string Body { get; set; }

        [EmailAddress]
        public string MailFrom { get; set; }
        public bool IsActive { get; set; }

        public bool IsDeleted { get; set; }
        public bool IsModifield { get; set; }
        public DateTimeOffset AddedOn { get; set; }
        public DateTimeOffset UpdatedOn { get; set; }

        public string AddedBy { get; set; }
        public string UpdatedBy { get; set; }


    }
}
