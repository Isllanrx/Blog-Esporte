window.addEventListener("load",inicia())

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id')
if(id){
  console.log("teste")
  fetch("https://api.jsonbin.io/v3/b/643442b9ace6f33a22086fe1?meta=false")
  .then(res => res.json())
  .then(data => {   
    
    var i = confirm(`Tem certeza que deseja apagar esta postagem? ${data.titulo}`)
    
    if(i){
       data.splice(id,1)
       var updatedJsonString = JSON.stringify(data)
       fetch('https://api.jsonbin.io/v3/b/643442b9ace6f33a22086fe1',{
      method: 'PUT',
      headers: {
        "Content-Type": "application/json",
        "X-Master-Key": "$2b$10$UAA/Tj7QS96M8XpF7dO1UeYgB2nSMB9x0ERZ6sqYBQ74zoGTwxWv2"
      },
      body: updatedJsonString
    })
    .then(window.location = '/delete/')
    .catch(err=> console.log(err))
  }
    window.location = '/adm/delete/'
  })
  .catch(err=> console.log(err))
}


function inicia(){
  fetch("https://api.jsonbin.io/v3/b/643442b9ace6f33a22086fe1?meta=false")
  .then(response=>response.json())
  .then(dados=>{
    for(var i = 0; i< dados.length;i++){
      
      var hr = document.createElement('hr')
      
      // var categoria = document.createElement('h4')
      // categoria.textContent = dados[i].categoria.toUpperCase()
      
      var titulo = document.createElement('h3')
      titulo.innerHTML = `<a href="/pages/postagens.html?id=${i}">${dados[i].titulo}</a>`
      
      var corpo = document.createElement('button')
      corpo.innerHTML = `<a href="/adm/delete/index.html?id=${i}">APAGAR</a>`
      
      
      // document.getElementById("divNoticias").appendChild(categoria)
      document.getElementById("divNoticias").appendChild(titulo)
      document.getElementById("divNoticias").appendChild(corpo)
      document.getElementById("divNoticias").appendChild(hr)
      
      console.log(dados[i])
    }
  })
}