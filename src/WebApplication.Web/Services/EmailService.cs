using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebApplication.Data;

namespace WebApplication.Services
{
    public class EmailService : IEmailService
    {
        private readonly IMessageRepository _messageRepository;

        public EmailService(IMessageRepository imessageRepository)
        {
            _messageRepository = imessageRepository;
        }

    }
}
