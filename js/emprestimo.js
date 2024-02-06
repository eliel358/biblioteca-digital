carregar_livro = () =>{
    fetch('../json/livros.json')
    .then(Response => Response.json())
    .then(livros =>{
    for(i in livros){
        console.log(livros[i])

        livro = document.createElement('div')
        book_name = document.createElement('p')
        author_name = document.createElement('p')
        book_code = document.createElement('p')
        button_emprestar = document.createElement('button')
        
        livro.className = 'livro'

        button_emprestar.id = 'button-emprestar'
        book_name.id = 'book-name'
        author_name.id = 'author'
        book_code.id = 'book-code'
        book_name.id = 'book-name'
        
        book_name.innerHTML = livros[i].book_name
        author_name.innerHTML = livros[i].author_name
        book_code.innerHTML = parseInt(i)+1
        button_emprestar.innerHTML = 'Emprestar'

        document.getElementById('lista').appendChild(livro)
        livro.appendChild(book_name)
        livro.appendChild(author_name)
        livro.appendChild(book_code)
        livro.appendChild(button_emprestar)
        console.log(livro)
    }
    })
}

voltar = () =>{
    document.location.href='../index.html'
}
carregar_livro()