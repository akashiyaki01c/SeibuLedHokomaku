(async () => {
    const stations = await (await fetch("./station.json")).json();
    const destSelect = document.getElementById("dest-select");
    let str = "";
    stations.forEach(sta => {
        str += `<option value="${sta.id}">${sta.name}</option>`;
    });
    destSelect.innerHTML = str;
})();

(async () => {
    const types = await (await fetch("./type.json")).json();
    const destSelect = document.getElementById("type-select");
    let str = "";
    types.forEach(type => {
        str += `<option value="${type.id}">${type.name}</option>`;
    });
    destSelect.innerHTML = str;
})();