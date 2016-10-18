using System.Collections.Generic;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace JumperCables.Controllers
{
    [Route("api")]
    public class ContactsController : Controller
    {
        [HttpGet]
        [Route("contacts")]
        [EnableCors("AllowAnyOrigin")]
        public IEnumerable<Contact> Get()
        {
            return new[]
            {
                new Contact
                {
                    Name = "awd",
                    StreetAddress = "awdawd",
                    CityAddress = "awaw1211e"
                },
                new Contact
                {
                    Name = "awd",
                    CityAddress = "awaw1211e"
                }
            };
        }
    }
}