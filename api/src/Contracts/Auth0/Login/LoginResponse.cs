using Newtonsoft.Json;

namespace JumperCables.Contracts.Auth0.Login
{
    public class LoginResponse
    {
        [JsonProperty("id_token")]
        public string TokenId { get; set; }

        [JsonProperty("access_token")]
        public string AccessToken { get; set; }

        [JsonProperty("token_type")]
        public string TokenType { get; set; }
    }
}
