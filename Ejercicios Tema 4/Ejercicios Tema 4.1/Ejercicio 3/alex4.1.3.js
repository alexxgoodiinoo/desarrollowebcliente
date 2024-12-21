document.addEventListener("DOMContentLoaded", () => {
  const totalVisits = document.getElementById("totalVisits");
  const firstVisitDate = document.getElementById("firstVisitDate");
  const lastVisitDate = document.getElementById("lastVisitDate");
  const uniqueVisits = document.getElementById("uniqueVisits");

  function updateVisitStats() {
    totalVisits += 1;
    document.cookie = "nombre=totalVisitas;expire=604800;";
    document.cookie = "nombre=firstVisitDate;expire=604800;";
    document.cookie = "nombre=lastVisitDate;expire=604800;";
    totalVisits.textContent = totalVisits;
    firstVisitDate.textContent = firstVisitDate;
    lastVisitDate.textContent = lastVisitDate;
  }

  function resetVisits() { 
    setCookie('totalVisits', '', -1); 
    setCookie('firstVisitDate', '', -1); 
    setCookie('lastVisitDate', '', -1); 
    window.location.reload(); //Sirve para refrescar la pagina sola y que se actualicen los valores sin necesidad de recargar nosotros
    }
    updateVisitStats();
});
