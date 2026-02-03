let jobName=localStorage.getItem("ACTIVE_JOB");
title.innerText="Planning: "+jobName;

let job=DB.cuttingJobs[jobName];

function calc(field, table){
let sum={};

job.styles.forEach(s=>{
let st=DB.styles[s.style];
if(!st) return;

st[field].forEach(i=>{
if(!sum[i.name]) sum[i.name]=0;
sum[i.name]+=i.qty*s.qty;
});
});

Object.entries(sum).forEach(([n,q])=>{
let r=table.insertRow();
r.innerHTML=`<td>${n}</td><td>${q}</td>`;
});
}

calc("materials",matOut);
calc("trims",trimOut);
calc("zippers",zipOut);
calc("reinforcement",reinOut);
