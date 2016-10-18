using Newtonsoft.Json;

namespace JumperCables.Contracts.Auth0.Base
{
    public class Auth0RequestBase
    {
        [JsonProperty("client_id")]
        public string ClientId { get; set; }

        public string Connection { get; set; }
    }
}
