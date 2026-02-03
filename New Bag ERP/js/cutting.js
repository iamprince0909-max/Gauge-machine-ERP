function addRow(){
let r=cutTable.insertRow();
let sel=document.createElement("select");

Object.keys(DB.styles).forEach(s=>{
let o=document.createElement("option");
o.textContent=s;
sel.appendChild(o);
});

r.innerHTML="<td></td><td><input></td><td><input type=number></td>";
r.cells[0].appendChild(sel);
}

function saveJob(){
let name=jobName.value.trim();
if(!name) return alert("Name required");

let arr=[];
cutTable.querySelectorAll("tr").forEach(r=>{
let sel=r.querySelector("select");
let inp=r.querySelectorAll("input");
if(sel)
arr.push({style:sel.value, colour:inp[0].value, qty:Number(inp[1].value)});
});

DB.cuttingJobs[name]={styles:arr};
saveDB();
render();
}

function render(){
jobs.innerHTML="";
Object.keys(DB.cuttingJobs).forEach(j=>{
let d=document.createElement("div");
d.innerHTML=`${j} <button onclick="openPlan('${j}')">Open</button>`;
jobs.appendChild(d);
});
}

function openPlan(j){
localStorage.setItem("ACTIVE_JOB",j);
location="planning.html";
}

render();
addRow();
