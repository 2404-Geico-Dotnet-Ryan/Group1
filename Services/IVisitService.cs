
using KittyCity.DTOs;
using KittyCity.Models;

namespace KittyCity.Services
{
 public interface IVisitService
 {
    IEnumerable<VisitDTO> GetAllVisits();

    VisitDTO GetVisitById(int VisitId);

     Visit CreateVisit(VisitDTO VisitDto);

     void UpdateVisit(int VisitId, VisitDTO UpdatedVisit);

      void DeleteVisit(int VisitId);

 }




}