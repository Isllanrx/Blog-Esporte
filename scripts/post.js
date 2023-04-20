fetch('https://api.jsonbin.io/v3/b/643442b9ace6f33a22086fe1?meta=false')
  .then(response => response.json())
  .then((data)=>{

    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id')
    
    const categoria = document.getElementById("categoria")
    const titulo = document.getElementById("titulo")
    const corpo = document.getElementById("corpo")
       
    
    var title = data[parseInt(id)].titulo
    var category = data[parseInt(id)].categoria
    var body = data[parseInt(id)].conteudo
    
    categoria.innerHTML = category
    titulo.innerHTML = title
    corpo.innerHTML = body
    
  })
  .catch(error => console.error(error));
  
  