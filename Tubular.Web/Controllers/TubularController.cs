using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Tubular.Web.Utils;
using Unosquare.Tubular;
using Unosquare.Tubular.ObjectModel;

namespace Tubular.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TubularController : ControllerBase
    {
        [HttpPost]
        [Route("paged")]
        public IActionResult Post(GridDataRequest request)
        {

            return Ok(request.CreateGridDataResponse(OrdersList.Orders.AsQueryable()));
        }
    }
}