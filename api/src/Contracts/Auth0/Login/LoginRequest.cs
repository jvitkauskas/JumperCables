using JumperCables.Contracts.Auth0.Base;
using Newtonsoft.Json;

namespace JumperCables.Contracts.Auth0.Login
{
    public class LoginRequest : Auth0RequestBase
    {
        public string Username { get; set; }

        public string Password { get; set; }

        [JsonProperty("id_token")]
        public string TokenId { get; set; }

        [JsonProperty("grant_type")]
        public string GrantType { get; set; }

        public string Scope { get; set; }

        public string Device { get; set; }
    }
}
