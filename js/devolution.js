document.getElementById('goto_home').addEventListener('click',()=>{
  document.location.href='../index.html'
})
document.getElementById('devolution').addEventListener('click',()=>{
  if(document.getElementById('register_devolution').value == ''){
  
    alert('Atenção, preencha todos os campos para devolver o livro')
  }
  console.log(document.getElementById('register_devolution').value)

})