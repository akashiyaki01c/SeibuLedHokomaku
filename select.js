(async () => {
    const stations = await (await fetch("./data/station.json")).json();
    const destSelect = document.getElementById("dest-select");
    let str = "";
    stations.forEach(sta => {
        if (sta.name == "") {
            return;
        }
        str += `<option value="${sta.id}">[${sta.id}] ${sta.name}</option>`;
    });
    destSelect.innerHTML = str;
})();

(async () => {
    const types = await (await fetch("./data/type.json")).json();
    const destSelect = document.getElementById("type-select");
    let str = "";
    types.forEach(type => {
        if (type.name == "") {
            return;
        }
        str += `<option value="${type.id}">[${type.id}] ${type.name}</option>`;
    });
    destSelect.innerHTML = str;
})();