
using KittyCity.Data;
using KittyCity.DTOs;
using KittyCity.Models;

namespace KittyCity.Services
{
    public class VisitService : IVisitService
    {

        private readonly AppDbContext _context;


          public VisitService(AppDbContext context) //changed to private because of the error
        {
            _context = context;
        }

        public Visit CreateVisit(VisitDTO VisitDto)
        {
            throw new NotImplementedException();
        }

        public void DeleteVisit(int VisitId)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<VisitDTO> GetAllVisits()
        {
            throw new NotImplementedException();
        }

        public VisitDTO GetVisitById(int VisitId)
        {
            throw new NotImplementedException();
        }

        public void UpdateVisit(int VisitId, VisitDTO UpdatedVisit)
        {
            throw new NotImplementedException();
        }
    }



}