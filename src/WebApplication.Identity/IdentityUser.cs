using Microsoft.AspNetCore.Identity;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using WebApplication.Data;

namespace WebApplication.Identity
{
    [BsonIgnoreExtraElements]
    public class IdentityUser : IdentityUser<string>
    {
        [BsonConstructor]
        public IdentityUser() : base()
        {
            Id = Guid.NewGuid().ToString();
        }
        [BsonConstructor]
        public IdentityUser(string userName) : this()
        {
            UserName = userName;
        }
    }
    [BsonIgnoreExtraElements]
    public class IdentityUser<TKey> : IdentityUser<IdentityRole<TKey>, TKey>
        where TKey : IEquatable<TKey>
    {
        [BsonConstructor]
        public IdentityUser() : base()
        {
        }
        [BsonConstructor]
        public IdentityUser(string userName) : base(userName)
        {
        }
    }
    [BsonIgnoreExtraElements]

    public class IdentityUser<TRole, TKey>
        where TRole : IdentityRole<TKey>
        where TKey : IEquatable<TKey>
    {

        [BsonConstructor]
        public IdentityUser() { }
        [BsonConstructor]
        public IdentityUser(string userName) : this()
        {
            UserName = userName;
        }

        public virtual TKey Id { get; set; }
        [BsonIgnoreIfNull]
        public virtual string UserName { get; set; }

        /// /// <summary>
        /// NOTE: should not be used except when extending SaanSoft.AspNet.Identity3.MongoDB. 
        /// Value will be overridden by RoleStore.
        /// Used to store the username that is formatted in a case insensitive way so can do searches on it
        /// </summary>
        [BsonIgnoreIfNull]
        public virtual string NormalizedUserName { get; set; }

        /// <summary>
        /// Email
        /// </summary>
      [BsonIgnoreIfNull]
        public virtual string Email { get; set; }

        /// /// <summary>
        /// NOTE: should not be used except when extending SaanSoft.AspNet.Identity3.MongoDB. 
        /// Value will be overridden by RoleStore.
        /// Used to store the email that is formatted in a case insensitive way so can do searches on it
        /// </summary>
        [BsonIgnoreIfNull]
        public virtual string NormalizedEmail { get; set; }

        /// <summary>
        /// True if the email is confirmed, default is false
        /// </summary>
        public virtual bool EmailConfirmed { get; set; }

        /// <summary>
        /// The salted/hashed form of the user password
        /// </summary>
        public virtual string PasswordHash { get; set; }

        /// <summary>
        /// A random value that should change whenever a user's credentials change (ie, password changed, login removed)
        /// </summary>
        /// 
        [BsonIgnoreIfNull]
        public virtual string SecurityStamp { get; set; }
        [BsonIgnoreIfNull]
        /// <summary>
        /// PhoneNumber for the user
        /// </summary>
        public virtual string PhoneNumber { get; set; }


        public virtual bool PhoneNumberConfirmed { get; set; }


        public virtual bool TwoFactorEnabled { get; set; }
        [BsonIgnoreIfNull]

        public virtual DateTimeOffset? LockoutEnd { get; set; }
        [BsonIgnoreIfNull]

        public virtual bool LockoutEnabled { get; set; }
        [BsonIgnoreIfNull]

        public virtual int AccessFailedCount { get; set; }

        [BsonIgnoreIfNull]
        public virtual string FirstName { get; set; }
        [BsonIgnoreIfNull]

        public virtual string LastName { get; set; }
        [BsonIgnoreIfNull]

        public virtual DateTimeOffset? DateOfBirth { get; set; }
        [BsonIgnoreIfNull]

        public virtual string BirthCountry { get; set; }
        [BsonIgnoreIfNull]

        public virtual string CurrentCountry { get; set; }

        [BsonIgnoreIfNull]
        public virtual string Image { get; set; }
        [BsonIgnoreIfNull]

        public virtual Occurrence CreatedOn { get; private set; }
        [BsonIgnoreIfNull]
        public virtual Occurrence DeletedOn { get; private set; }

        [BsonIgnoreIfNull]

        public string AboutMe { get; set; }
        [BsonIgnoreIfNull]

        public GenderType Gender { get; set; }
             
     
        [BsonIgnoreIfNull]
        public virtual IList<TRole> Roles
        {
            get { return _roles; }
            set { _roles = value ?? new List<TRole>(); }
        }

        [BsonIgnoreIfNull]
        private IList<TRole> _roles = new List<TRole>();


        [BsonIgnoreIfNull]
        public virtual IList<UserActivity> UserActivities
        {
            get { return _userActivities; }
            set { _userActivities = value ?? new List<UserActivity>(); }
        }
        [BsonIgnoreIfNull]
        private IList<UserActivity> _userActivities = new List<UserActivity>();


        [BsonIgnoreIfNull]

        public virtual IList<IdentityClaim> Claims
        {
            get { return _claims; }
            set { _claims = value ?? new List<IdentityClaim>(); }
        }
        [BsonIgnoreIfNull]
        private IList<IdentityClaim> _claims = new List<IdentityClaim>();

        [BsonIgnoreIfNull]
      
        public virtual IList<IdentityClaim> AllClaims
        {
            get
            {
                // as Claims and Roles are virtual and could be overridden with an implementation that allows nulls
                //	- make sure they aren't null just in case
                var clms = Claims ?? new List<IdentityClaim>();
                var rls = Roles ?? new List<TRole>();

                return clms.Concat(rls.Where(r => r.Claims != null).SelectMany(r => r.Claims)).Distinct().ToList();
            }
        }


        // if we didnt ingore this users/index will render but external login provider work
        [BsonIgnoreIfNull]
        public virtual IList<UserLoginInfo> Logins
        {
            get { return _logins; }
            set { _logins = value ?? new List<UserLoginInfo>(); }
        }
        [BsonIgnoreIfNull]
        private IList<UserLoginInfo> _logins = new List<UserLoginInfo>();


        public override string ToString()
        {
            return UserName;
        }


        #region IEquatable<TKey> (Equals, GetHashCode(), ==, !=)

        public override bool Equals(object obj)
        {
            if (!(obj is IdentityUser<TRole, TKey>)) return false;

            var thisObj = (IdentityUser<TRole, TKey>)obj;
            return this.Equals(thisObj);
        }

        public virtual bool Equals(IdentityUser<TRole, TKey> obj)
        {
            if (obj == null) return false;

            return this.Id.Equals(obj.Id);
        }

        public static bool operator ==(IdentityUser<TRole, TKey> left, IdentityUser<TRole, TKey> right)
        {
            return Equals(left, right);
        }

        public static bool operator !=(IdentityUser<TRole, TKey> left, IdentityUser<TRole, TKey> right)
        {
            return !Equals(left, right);
        }

        public override int GetHashCode()
        {
            unchecked
            {

                return StringComparer.OrdinalIgnoreCase.GetHashCode(this.Id.ToString());
            }
        }

        #endregion
    }

    public enum GenderType
    {
        MALE,
        FEMALE
       
    }
}
