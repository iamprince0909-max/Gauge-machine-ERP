let DB = JSON.parse(localStorage.getItem("BAG_ERP_DB")) || {
  styles: {},
  cuttingJobs: {}
};

function saveDB() {
  localStorage.setItem("BAG_ERP_DB", JSON.stringify(DB));
}

function resetDB() {
  if (confirm("Clear all ERP data?")) {
    localStorage.removeItem("BAG_ERP_DB");
    location.reload();
  }
}
