(async () => {
    const stations = (await (await fetch("./data/station.json")).json()).sort((a, b) => Number.parseInt(a.id) - Number.parseInt(b.id));
    const destSelect = document.getElementById("dest-select");
    let str = "";
    stations.forEach(sta => {
        if (sta.name == "") {
            return;
        }
        if (sta.name === "_") {
            sta.name = "(無表示)";
        }
        str += `<option value="${sta.id}" data-id="${sta.id}" data-name="${sta.name}">${sta.name}</option>`;
    });
    destSelect.innerHTML = str;
})();

(async () => {
    const types = (await (await fetch("./data/type.json")).json()).sort((a, b) => Number.parseInt(a.id) - Number.parseInt(b.id));
    const destSelect = document.getElementById("type-select");
    let str = "";
    types.forEach(type => {
        if (type.name == "") {
            return;
        }
        if (type.name === "_") {
            type.name = "(無表示)";
        }
        str += `<option value="${type.id}" data-id="${type.id}" data-name="${type.name}">${type.name}</option>`;
    });
    destSelect.innerHTML = str;
})();