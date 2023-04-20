window.addEventListener("load",inicia())

function inicia(){
  fetch("https://api.jsonbin.io/v3/b/643442b9ace6f33a22086fe1?meta=false")
  .then(response=>response.json())
  .then(dados=>{
    for(var i = 0; i< dados.length;i++){
      
      var hr = document.createElement('hr')
      
      // var categoria = document.createElement('h4')
      // categoria.textContent = dados[i].categoria.toUpperCase()
      
      var titulo = document.createElement('h3')
      titulo.innerHTML = `<a style="text-decoration: none" href="/pages/postagens.html?id=${i}">${dados[i].titulo}</a>`
      
      var corpo = document.createElement('p')
      corpo.innerHTML = dados[i].conteudo
      
      
      // document.getElementById("divNoticias").appendChild(categoria)
      document.getElementById("divNoticias").appendChild(titulo)
      document.getElementById("divNoticias").appendChild(corpo)
      i + 1 < dados.length && document.getElementById("divNoticias").appendChild(hr)
      
      console.log(dados[i])
    }
  })
}