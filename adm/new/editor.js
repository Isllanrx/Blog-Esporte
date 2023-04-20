window.addEventListener('load', function(){
    document.querySelector('.text-zone').setAttribute('contenteditable', 'true');
  document.querySelector('.text-zone').focus();
});


function format(command, value){

    document.execCommand(command, false, value);

};

function link(){
    let url = window.prompt("Digite a URL");
    let selectedText = document.getSelection();

    document.execCommand('createLink', false, url);
};

function quote(){
    let selectedText = document.getSelection();

    document.execCommand('insertText', false, '"' + selectedText + '"');
};


function Postar(){
  
  
  if(validaPost()){
    fetch('https://api.jsonbin.io/v3/b/643442b9ace6f33a22086fe1?meta=false')
  .then(response => response.json())
  .then((data)=>{
      
      document.querySelector("button#b_postar").disabled = true
      
      
      var id = parseInt(data.length)-1
      var date = new Date();
      var dia = String(date.getDate()).padStart(2, '0');
      var mes = String(date.getMonth() + 1).padStart(2, '0');
      var ano = date.getFullYear();
      var dataAtual = dia + '/' + mes + '/' + ano;
      
      
      var posts = []
      
      for(let i = 0; i < data.length; i++){
        posts.push(data[i])
      }
      
      posts.push({
        "data": dataAtual,
        "titulo": document.getElementById('titulo').value,
        "categoria":document.getElementById('categoria').value,
        "conteudo": document.querySelector('.text-zone').innerHTML
      })
     var updatedJsonString = JSON.stringify(posts);
    
    fetch('https://api.jsonbin.io/v3/b/643442b9ace6f33a22086fe1',{
      method: 'PUT',
      headers: {
        "Content-Type": "application/json",
        "X-Master-Key": "$2b$10$UAA/Tj7QS96M8XpF7dO1UeYgB2nSMB9x0ERZ6sqYBQ74zoGTwxWv2"
      },
      body: updatedJsonString
    }).then(data=>{ alert("Post Enviado")
           window.location = `/pages/postagens.html?id=${parseInt(id)+1}`
                  console.log(id)
                  console.log(updatedJsonString)})
    .catch(err=>console.log(err))
  })
  .catch(error =>{
      console.error(error)
      document.querySelector("button#b_postar").disabled = false
    } );
    
  }
  
}



function validaPost(){
  let valido
  if(document.getElementById('titulo').value && document.querySelector('.text-zone').innerText && document.getElementById('titulo').value){
    return true
  }else{
    confirm("O título, o corpo e a categoria do post precisam estar preenchidos")
    return false
}
}