using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Net.Http;

namespace AusrytPhoto.WEB.Controllers
{
    public class HomeController : Controller
    {
        private readonly IConfigurationRoot _configuration;
        private static readonly HttpClient HttpClient;

        public HomeController(IConfigurationRoot configuration)
        {
            _configuration = configuration;
        }

        static HomeController()
        {
            HttpClient = new HttpClient();
        }

        public IActionResult Index()
        {
            if (!Request.Cookies.ContainsKey("lang") || string.IsNullOrEmpty(Request.Cookies["lang"]))
            {
                Response.Cookies.Append("lang", GetUserContryCode());
            }

            return View();
        }


        private string GetUserContryCode()
        {
            string countryCode = string.Empty;

            try
            {
                var stringResponse = HttpClient.GetAsync($"{_configuration["ApiUrls:locationAPI"]}{ResolveIp()}").Result.Content.ReadAsStringAsync().Result;
                var response = JsonConvert.DeserializeObject<JObject>(stringResponse);

                countryCode = response.GetValue("countryCode").ToString();

                switch (countryCode)
                {
                    case "LT":
                        break;
                    default:
                        countryCode = "EN";
                        break;
                }
            }
            catch (Exception)
            {
                //do nothing
            }

            return countryCode;
        }

        private string ResolveIp()
        {
            var ip = HttpContext.Connection.RemoteIpAddress.ToString();

            //localhost matters only when call from same machine.
            if (ip == "::1")
            {
                ip = string.Empty;
            }

            return ip;
        }
    }
}
