function addMaterial(data = {}) {
  const t = document.getElementById("materialTable");
  const r = t.insertRow();

  r.innerHTML = `
    <td><input value="${data.name||""}"></td>
    <td><input value="${data.desc||""}"></td>
    <td><input type="number" value="${data.usage||""}"></td>
    <td><input value="${data.unit||""}"></td>
    <td><input type="number" value="${data.cost||""}"></td>
    <td class="auto"></td>
  `;
}

function saveStyle() {
  const styleNo = styleNoInput();
  if (!styleNo) return alert("Style No required");

  const rows = document.querySelectorAll("#materialTable tr");
  let materials = [];

  rows.forEach((r, i) => {
    if (i === 0) return;
    const c = r.querySelectorAll("input");
    materials.push({
      name: c[0].value,
      desc: c[1].value,
      usage: Number(c[2].value),
      unit: c[3].value,
      cost: Number(c[4].value)
    });
  });

  DB.styles[styleNo] = {
    header: {
      brand: brand.value,
      buyer: buyer.value,
      colour: colour.value,
      finish: finish.value
    },
    materials
  };

  saveDB();
  alert("Style saved");
}

function styleNoInput() {
  return document.getElementById("styleNo").value.trim();
}
