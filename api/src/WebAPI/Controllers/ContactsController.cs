using System.Collections.Generic;
using JumperCables.Model;
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
                    Name = "Brayden Knight",
                    StreetAddress = "1138 Spring Hill Rd",
                    CityAddress = "San Francisco, CA 94103",
                    Phone = "(147)-880-7489"
                }
            };
        }
    }
}