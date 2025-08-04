fetch("data/startups.json")
  .then((response) => response.json())
  .then((data) => {
    const list = document.getElementById("startups");
    data.forEach((startup) => {
      const item = document.createElement("li");
      item.innerHTML = `
        <strong>${startup.nome}</strong><br/>
        Settore: ${startup.settore}<br/>
        Città: ${startup.città}<br/>
        <a href="${startup.sito}" target="_blank">Visita sito</a>
      `;
      list.appendChild(item);
    });
  })
  .catch((error) => {
    console.error("Errore nel caricamento dei dati:", error);
  });
