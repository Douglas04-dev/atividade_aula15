function clique(){

  const nome = document.getElementById("nome").value;
  const hobby = document.getElementById("hobby").value;
  const rede = document.getElementById("rede").value;
  const futebol = document.getElementById("futebol").value;
  
sessionStorage.setItem("nome",nome);
sessionStorage.setItem("hobby",hobby);
sessionStorage.setItem("rede",rede);
sessionStorage.setItem("futebol",futebol);

window.location.href = "pagina.html";

}