

using Microsoft.AspNetCore.Mvc;
using KittyCity.DTOs;
using KittyCity.Services;

namespace KittyCity.Controllers
{
    [Route("[controller]")]
    [ApiController]

    public class VisitsController : ControllerBase
    {
        private readonly IVisitService _visitService;

        // Constructor to inject the visit service
        public VisitsController(IVisitService visitService)
        {
            _visitService = visitService;
        }

        // GET: Visits
        //Action method to handle GET requests to retrieve all users

        [HttpGet]
        public ActionResult<IEnumerable<VisitDTO>> GetVisits()
        {
            var visits = _visitService.GetAllVisits();

            return Ok(visits);
        }

        [HttpGet("{VisitId}")]
        public ActionResult<VisitDTO> GetVisitById(int VisitId)
        {
            var visit = _visitService.GetVisitById(VisitId);
            return visit;

        }


        [HttpPost]
        public ActionResult<VisitDTO> PostVisit(VisitDTO visitDto)
        {
            var visit = _visitService.CreateVisit(visitDto);
            return CreatedAtAction(nameof(GetVisitById), new { VisitId = visit.VisitId }, visitDto);

        }

        [HttpPut("{VisitId}")]
        public ActionResult<VisitDTO> UpdateProfile(int VisitId, VisitDTO UpdatedVisit)
        {
            _visitService.UpdateVisit(VisitId, UpdatedVisit);
            return Ok(UpdatedVisit);
        }

        [HttpDelete("{VisitId}")]
        public IActionResult DeleteVisit(int VisitId)
        {
            _visitService.DeleteVisit(VisitId);

            return Ok();
        }

    }
}