document.addEventListener("DOMContentLoaded", function () {
  var tableau = []; // tableau vide avant appel à l'api

  const func = () => fetch("https://swapi.dev/api/people");

  func()
    .then((response) => response.json())
    .then((response) => {
      for (let person of response.results) {
        tableau.push({
          name: person.name,
          height: person.height,
          mass: person.mass,
        });
      }
      return tableau;
    })
    .then((data) => {
      const tableBody = document.querySelector("#peopleTable tbody");
      data.forEach((item) => {
        // on cree une ligne dans le corps
        const row = document.createElement("tr");

        Object.values(item).forEach((value) => {
          // on cree des champs de données pour chaque ligne
          const td = document.createElement("td");
          td.textContent = value;
          // on insert les donnees dans la ligne
          row.appendChild(td);
        });
        // on fait apparaitre la ligne dans le corps de la table
        tableBody.appendChild(row);
      });
    });
});
