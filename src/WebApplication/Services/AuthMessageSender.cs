using MimeKit;
using System;
using System.Collections.Generic;
using System.Linq;
using MailKit.Net.Smtp;
using System.Text;
using System.Threading.Tasks;

namespace WebApplication.Services
{
    public class AuthMessageSender : IEmailSender, ISmsSender
    {
        public Task SendEmailAsync(string email, string subject, string msg)
        {
            var emailMessage = new MimeMessage();
            var     message = new MimeMessage();
            message.From.Add(new MailboxAddress("David Silwal", "de.davidsilwal@hotmail.com"));
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
                client.Authenticate("example@hotmail.com", "password");
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
