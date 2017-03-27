//using System;
//using MongoDB.Bson.Serialization.Conventions;
//using Identity;

//namespace WebApplication.Identity
//{
//	public class RegisterClassMap<TUser, TRole, TKey>
//		where TUser : IdentityUser<TKey>
//		where TRole : IdentityRole<TKey>
//		where TKey : IEquatable<TKey>
//	{

//		private static RegisterClassMap<TUser, TRole, TKey> _thisClassMap;
//		public static void Init()
//		{
//			if (_thisClassMap == null)
//			{
//				_thisClassMap = new RegisterClassMap<TUser, TRole, TKey>();
//			}
//			_thisClassMap.Configure();
//		}


//		public virtual void Configure()
//		{
//			RegisterConventions();

//			RegisterRoleClassMap();
//			RegisterUserClassMap();

//		}
		
//		public virtual void RegisterConventions()
//		{
//			var conv = new ConventionPack();
//			conv.Add(new IgnoreIfDefaultConvention(true));
//			conv.Add(new IgnoreExtraElementsConvention(true));

			
//			ConventionRegistry.Register("Identity.Conventions", 
//                conv, t => t.Namespace.StartsWith(typeof(IdentityRole<TKey>).Namespace) || (t.BaseType != null && t.BaseType.Namespace.StartsWith(typeof(IdentityRole<TKey>).Namespace)));
//		}

//		public virtual void RegisterRoleClassMap() { }
//		public virtual void RegisterUserClassMap() { }
//	}
//}
