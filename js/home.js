
document.getElementById('goto_add_book').addEventListener('click',()=>{
  document.location.href = './pages/add_book.html'
})
document.getElementById('goto_remove_book').addEventListener('click',()=>{
  document.location.href = './pages/remove_book.html'
})
document.getElementById('goto_loan').addEventListener('click',()=>{
  document.location.href = './pages/loan.html'
})
document.getElementById('goto_devolution').addEventListener('click',()=>{
  document.location.href = './pages/devolution.html'
})
document.getElementById('goto_book_list').addEventListener('click',()=>{
  document.location.href = './pages/book_list.html'
})

document.getElementById('theme-change').addEventListener('click',()=>{

  if(document.getElementById('theme-change').value == 'white'){

    document.getElementById('theme-change').innerHTML = 'Tema claro'
    document.getElementById('theme-change').value = 'dark'
    
    document.getElementById('body').className = 'body-dark'
    
    document.getElementById('goto_add_book').className = 'button-dark non-border'
    document.getElementById('goto_remove_book').className = 'button-dark non-border'
    document.getElementById('goto_loan').className = 'button-dark non-border'
    document.getElementById('goto_devolution').className = 'button-dark non-border'
    document.getElementById('goto_book_list').className = 'button-dark non-border'
    document.getElementById('theme-change').className = 'theme-button button-dark'
  }else{
    
    document.getElementById('theme-change').innerHTML = 'Tema escuro'
    document.getElementById('theme-change').className = 'theme-button'
    document.getElementById('body').className = 'body'
    document.getElementById('theme-change').value = 'white'
    document.getElementById('goto_add_book').className = 'non-border'
    document.getElementById('goto_remove_book').className = 'non-border'
    document.getElementById('goto_loan').className = 'non-border'
    document.getElementById('goto_devolution').className = 'non-border'
    document.getElementById('goto_book_list').className = 'non-border'
  }
})
