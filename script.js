// Tandai menu aktif
var file=location.pathname.split("/").pop()||"index.html";
document.querySelectorAll("nav a").forEach(function(a){
  if(a.getAttribute("href")===file)a.classList.add("on");
});
// Foto diperbesar
var lb=document.getElementById("lb");
if(lb){
  var big=lb.querySelector("img");
  document.querySelectorAll(".gallery img").forEach(function(i){
    i.addEventListener("click",function(){big.src=i.src;lb.classList.add("on")});
  });
  lb.addEventListener("click",function(){lb.classList.remove("on")});
}
