function show(a) {
  if (a === "f") {
    document.getElementById("pr1").style.visibility = "visible";
  } else if (a === "s"){
    document.getElementById("pr2").style.visibility = "visible";
  } else {
    const h = document.getElementById("h");
    if (h.style.visibility === "hidden") {
      h.style.visibility = "visible";
    } else {
      h.style.visibility = "hidden";
    }
  }
}

function hide(a) {
  if (a === "f") {
    document.getElementById("pr1").style.visibility = "hidden";
  } else if (a === "s"){
    document.getElementById("pr2").style.visibility = "hidden";
  }
}
