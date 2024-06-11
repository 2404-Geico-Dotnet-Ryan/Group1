
using KittyCity.Data;
using KittyCity.DTOs;
using KittyCity.Models;

namespace KittyCity.Services
{
    public class VisitService : IVisitService
    {
        private readonly AppDbContext _context;

        public VisitService(AppDbContext context)
        {
            _context = context;
        }

        public Visit CreateVisit(VisitDTO VisitDto)
        {
            if (ValidateNewVisit(VisitDto))
            {
                var visit = new Visit
                {
                    VisitId = VisitDto.VisitId,
                    PetId = VisitDto.PetId,
                    PersonId = VisitDto.PersonId,
                    Weight = VisitDto.Weight,
                    Age = VisitDto.Age,
                    InSidePet = VisitDto.InSidePet,
                    AppointmentDate = DateTime.Now,
                    SeenBy = VisitDto.SeenBy
                };

                _context.Visits.Add(visit);
                _context.SaveChanges();

                return visit;
            }
            else
            {
                throw new Exception("Invalid Visit");
            }
        }

        private bool ValidateNewVisit(VisitDTO visitDto)
        {
           return !string.IsNullOrWhiteSpace(visitDto.SeenBy);
        }

        public void DeleteVisit(int VisitId)
        {
           var visit = _context.Visits.FirstOrDefault(u => u.VisitId == VisitId);

            if (visit!= null)
            {
                _context.Visits.Remove(visit);
                _context.SaveChanges();
            }
            else
            {
                throw new Exception("Visit not found");
            }
        }

        public IEnumerable<VisitDTO> GetAllVisits()
        {
             var visits = _context.Visits
                .Select(u => new VisitDTO
                {
                    VisitId = u.VisitId,
                    PetId = u.PetId,
                    PersonId = u.PersonId,
                    Weight = u.Weight,
                    Age = u.Age,
                    InSidePet = u.InSidePet,
                    AppointmentDate = u.AppointmentDate,
                    SeenBy = u.SeenBy
                }).ToList();

            return visits;
        }

        public VisitDTO GetVisitById(int VisitId)
        {
             var visit = _context.Visits.Find(VisitId);

            if (visit != null)
            {
                var visitDto = new VisitDTO
                {
                    VisitId = visit.VisitId,
                    PetId = visit.PetId,
                    PersonId = visit.PersonId,
                    Weight = visit.Weight,
                    Age = visit.Age,
                    InSidePet = visit.InSidePet,
                    AppointmentDate = visit.AppointmentDate,
                    SeenBy = visit.SeenBy
                };

                return visitDto;
            }
            else
            {
                throw new Exception("Visit not found");
            }
        }

        public void UpdateVisit(int VisitId, VisitDTO UpdatedVisit)
        {
            var visit = _context.Visits.FirstOrDefault(u => u.VisitId == VisitId);

            if (visit != null)
            {
                visit.VisitId = UpdatedVisit.VisitId;
                visit.PetId = UpdatedVisit.PetId;
                visit.PersonId = UpdatedVisit.PersonId;
                visit.Weight = UpdatedVisit.Weight;
                visit.Age = UpdatedVisit.Age;
                visit.InSidePet = UpdatedVisit.InSidePet;
                visit.AppointmentDate = DateTime.Now;
                visit.SeenBy = UpdatedVisit.SeenBy;

                _context.Visits.Update(visit);
                _context.SaveChanges();
            }
            else
            {
                throw new Exception("Visit not found");
            }
        }
    }



}