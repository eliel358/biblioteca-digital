livros = []
fs.readFileSync()
class livro{
    constructor(book_name,author_name,book_code){
        this.book_name = book_name 
        this.author_name = author_name 
        this.book_code = book_code 
     }
}
add_book = (book_name,author_name)=>{
    //puxa do arquivo
    livros = JSON.parse('[{"book_name":"biblia","author_name":"varios","book_code":1}]')
    const temp = new livro(book_name,author_name)
    livros.push(temp)
    // livros = JSON.stringify(livros)
    //manda pro arquivo
}

console.log(livros)