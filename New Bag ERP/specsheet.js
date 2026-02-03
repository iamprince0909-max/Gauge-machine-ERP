function addMat(d={}){
let r=matTable.insertRow();
r.innerHTML=`<td><input value="${d.name||""}"></td>
<td><input type="number" value="${d.qty||""}"></td>`;
}

function addTrim(d={}){
let r=trimTable.insertRow();
r.innerHTML=`<td><input value="${d.name||""}"></td>
<td><input type="number" value="${d.qty||""}"></td>`;
}

function addZip(d={}){
let r=zipTable.insertRow();
r.innerHTML=`<td><input value="${d.name||""}"></td>
<td><input type="number" value="${d.qty||""}"></td>`;
}

function addRein(d={}){
let r=reinTable.insertRow();
r.innerHTML=`<td><input value="${d.name||""}"></td>
<td><input type="number" value="${d.qty||""}"></td>`;
}

function read(table){
let arr=[];
table.querySelectorAll("tr").forEach(r=>{
let i=r.querySelectorAll("input");
if(i.length) arr.push({name:i[0].value, qty:Number(i[1].value)});
});
return arr;
}

function saveStyle(){
let id=styleNo.value.trim();
if(!id) return alert("Style No required");

DB.styles[id]={
materials:read(matTable),
trims:read(trimTable),
zippers:read(zipTable),
reinforcement:read(reinTable)
};

saveDB();
alert("Saved");
}
