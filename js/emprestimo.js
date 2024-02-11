carregar_livro = () =>{
    fetch('../json/livros.json')
    .then(Response => Response.json())
    .then(livros =>{
    ordem_secundaria = []
    ordem_terciaria = []
        for(i in livros){
        
        // "book_name": "o amigo",
        // "author_name": "adriana",
        // "book_code": 1,
        // "status": "Devolução pendente",
        // "data de emprestimo": "01/02/2024",
        // "data de devolução": "06/02/2024",
        // "aluno": "Miguel",
        // "turma": "3 Reg 3",
        // "turno": "manhã"
        
        livro = document.createElement('div')
        book_name = document.createElement('p')
        author_name = document.createElement('p')
        book_code = document.createElement('p')
        book_status = document.createElement('p')
        loan_date = document.createElement('p')
        return_date = document.createElement('p')
        student = document.createElement('p')
        turma = document.createElement('p')
        horary = document.createElement('p')
        
        livro.id = 'livro-'+String(parseInt(i)+1)
        console.log('id:',livro.id)
        book_name.id = 'book-name'
        author_name.id = 'author'
        book_code.id = 'book-code'
        book_name.id = 'book-name'
        book_status.id = 'book-status'
        loan_date.id = 'loan-date'
        return_date.id = 'return-date'
        student.id = 'student'
        turma.id = 'turma'
        horary.id = 'horary'
        
        loan_date.innerHTML = "Data de emprestimo: <br> <br>"+livros[i].loan_date
        book_status.innerHTML = "Situação do livro: <br> <br>"+livros[i].status
        book_name.innerHTML = "Nome do livro: <br> <br>"+livros[i].book_name
        author_name.innerHTML = "Autor(a) do livro: <br> <br>"+livros[i].author_name
        return_date.innerHTML = "Data de devolução: <br> <br>"+livros[i].return_date
        student.innerHTML = "Aluno: <br> <br>"+livros[i].aluno
        book_code.innerHTML = "Código do livro <br> <br>"+parseInt(i)+1
        turma.innerHTML = "Turma de "+livros[i].aluno+":"+"<br> <br>"+livros[i].turma
        horary.innerHTML = "Turno de "+livros[i].aluno+":"+"<br> <br>"+livros[i].turno
        
        livro.className = 'livro'
        if(book_status.innerHTML == 'Situação do livro: <br> <br>Devolução pendente'){
            livro.className = 'livro livro-red'
        }
        switch(book_status.innerHTML){
            case 'Situação do livro: <br> <br>Devolução pendente':
                document.getElementById('lista').appendChild(livro)
        case 'Situação do livro: <br> <br>Emprestado':
            ordem_secundaria.push(livro.id)
        case 'Situação do livro: <br> <br>Na biblioteca':
            ordem_terciaria.push('livro-'+livro.id)
        }
        
        livro.appendChild(book_name)
        livro.appendChild(author_name)
        livro.appendChild(book_code)
        livro.appendChild(book_status)
        
        if(book_status.innerHTML != 'Situação do livro: <br> <br>Na biblioteca'){
            livro.appendChild(loan_date)
            livro.appendChild(return_date)
            livro.appendChild(student)
            livro.appendChild(turma)
            livro.appendChild(horary)
        }
        // console.log(livro)
    }console.log(document.getElementById('lista'))
    
    for(i in ordem_secundaria){
        temp = 'livro-2'
        document.getElementById('lista').appendChild(document.getElementById('livro-3'))
        console.log(document.getElementById('lista'))
    }
}

)
}

voltar = () =>{
    document.location.href='../index.html'
}
carregar_livro()