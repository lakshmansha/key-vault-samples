using Microsoft.AspNetCore.Mvc;

namespace DOTNET7KVTApi.Controllers;

[ApiController]
[Route("[controller]")]
public class KeyvaultController : ControllerBase
{    
    private readonly ILogger<WeatherForecastController> _logger;
    private readonly IConfiguration _configuration;

    public KeyvaultController(ILogger<WeatherForecastController> logger, IConfiguration configuration)
    {
        _logger = logger;
        _configuration = configuration;
    }

    [HttpGet(Name = "GetMessage")]
    public IActionResult Get()
    {
        return Ok(_configuration["KVT-MESSAGE"]);
    }
}
