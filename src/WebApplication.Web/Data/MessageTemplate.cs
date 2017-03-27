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
        [Required]
        public string MessageTemplateTypeID { get; set; }
        public string Subject { get; set; }

        public string Body { get; set; }

        [EmailAddress]
        public string MailFrom { get; set; }
        public bool IsActive { get; set; }

        public bool IsDeleted { get; set; }
        public bool IsModifield { get; set; }
        [DisplayFormat(DataFormatString = "{0:dd/MM/yyyy}")]
        public DateTimeOffset AddedOn { get; set; }
        [DisplayFormat(DataFormatString = "{0:dd/MM/yyyy}")]
        public DateTimeOffset UpdatedOn { get; set; }

        public string AddedBy { get; set; }
        public string UpdatedBy { get; set; }


    }
}
