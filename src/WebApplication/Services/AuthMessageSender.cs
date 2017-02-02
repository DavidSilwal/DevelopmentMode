using MimeKit;
using System;
using System.Collections.Generic;
using System.Linq;
using MailKit.Net.Smtp;
using System.Text;
using System.Threading.Tasks;
using WebApplication.Data;

namespace WebApplication.Services
{
    public class AuthMessageSender : IEmailSender, ISmsSender
    {
        private readonly IMessageRepository _messageRepository;

        public AuthMessageSender(IMessageRepository messageRepository)
        {
            _messageRepository = messageRepository;
        }

        public Task SendEmailAsync(string email, string subject, string msg)
        {
            var emailMessage = new MimeMessage();
            var     message = new MimeMessage();
            message.From.Add(new MailboxAddress("David Silwal", "msunuwar11@outlook.com"));
            message.To.Add(new MailboxAddress("David Silwal", email));
            message.Subject = subject;
            message.Body = new TextPart("plain")
            {
                Text = msg
            };

            using (var client = new SmtpClient())
            {
                client.Connect("smtp.live.com", 587, false);
                client.AuthenticationMechanisms.Remove("XOAUTH2");
                client.Authenticate("msunuwar11@outlook.com", "9843104350Qwe123");
                client.Send(message);
                client.Disconnect(true);
            }

            return Task.FromResult(0);
        }

        public Task SendEmailMessageTemplate(string TemplateTypeID, string email)
        {

            Task<MessageTemplate> model = _messageRepository.FindByMessageTemplateTypeByID(TemplateTypeID);
           
            var emailMessage = new MimeMessage();
            var message = new MimeMessage();
            message.From.Add(new MailboxAddress("David Silwal", "msunuwar11@outlook.com"));
            message.To.Add(new MailboxAddress("David Silwal", email));
            message.Subject = model.Result.Subject;
            message.Body = new TextPart("plain")
            {
                Text = model.Result.Body
            };

            using (var client = new SmtpClient())
            {
                client.Connect("smtp.live.com", 587, false);
                client.AuthenticationMechanisms.Remove("XOAUTH2");
                client.Authenticate("msunuwar11@outlook.com", "9843104350Qwe123");
                client.Send(message);
                client.Disconnect(true);
            }



            return Task.FromResult(0);
        }
        public Task SendSmsAsync(string number, string message)
        {
            // Plug in your SMS service here to send a text message.
            return Task.FromResult(0);
        }
    }
}
