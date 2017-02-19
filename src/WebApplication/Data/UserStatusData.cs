using Microsoft.AspNet.DataProtection.KeyManagement;
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
    public class UserStatusData
    {
        public UserStatusData() : base()
        {
            _id = Guid.NewGuid().ToString();
        }

        public string _id { get; set; }

        public string UserID { get; set; }

        public string Type { get; set; }
        [Required]
        public string Status { get; set; }
        [DisplayFormat(DataFormatString = "{0:dd/MM/yyyy}",
               ApplyFormatInEditMode = true)]
        public DateTime UpdateTime { get; set; }

        public bool IsHidden { get; set; } // if  personal user visible

      
        [BsonIgnoreIfNull]
        public virtual IList<string> LikesUserIDs
        {
            get { return _likesUserIDs; }
            set { _likesUserIDs = value ?? new List<string>(); }
        }
        private IList<string> _likesUserIDs = new List<string>();

        [BsonIgnoreIfNull]
        public virtual IList<Comments> Comments
        {
            get { return _comments; }
            set { _comments = value ?? new List<Comments>(); }
        }
        private IList<Comments> _comments = new List<Comments>();

        

        public int LikesCounts {
            get
            {
                return _likesUserIDs.Count;
            } }


        public int CommentsCounts
        {
            get
            {
                return _comments.Count;
            }
        }

     
        public string UpdatedAgo {
            get
            {
                return ((DateTime.Now)- (UpdateTime)).ToString();
            }
         }
    }
}
