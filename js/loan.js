GoogleSpreadsheet  = require('google-spreadsheet');
JWT = require('google-auth-library');
fs = require('fs')
const RESPONSES_SHEET_ID = '1v8Dxzze5tIta4GdfzSzfmszmjZVfZWxpKPUF_xUGyT4';

const CREDENTIALS = JSON.parse(fs.readFileSync('./credentials.json'));

const serviceAccountAuth  = new JWT.JWT({
  email: CREDENTIALS.client_email,
  key: CREDENTIALS.private_key,
  scopes: [
      'https://www.googleapis.com/auth/spreadsheets',
  ],
});

const doc = new GoogleSpreadsheet.GoogleSpreadsheet(RESPONSES_SHEET_ID,serviceAccountAuth)

const addRow = async (rows) => {

  await doc.loadInfo();

  let sheet = doc.sheetsByIndex[0];
  for (let index = 0; index < rows.length; index++) {
      await sheet.addRow(rows[index]);
      alert("O livro foi adicionado")
      return
  }
};

class book{
  constructor(book_name,register,author,student_name,student_class,student_horary,loan_horary,loan_date,devolution_date,status){
    this.book_name = book_name
    this.register = register
    this.author = author
    this.student_name = student_name
    this.student_class = student_class
    this.student_horary = student_horary
    this.loan_horary = loan_horary
    this.loan_date = loan_date
    this.devolution_date = devolution_date
    this.status = status
  }
}

document.getElementById('goto_home').addEventListener('click',()=>{
  document.location.href='../index.html'
})

document.getElementById('loan').addEventListener('click',()=>{
  
  non_validated = [
  document.getElementById('book_name'),
  document.getElementById('book_register'),
  document.getElementById('book_author'),
  document.getElementById('student_name'),
  document.getElementById('student_class'),
  document.getElementById('student_horary'),
  document.getElementById('loan_horary'),
  document.getElementById('loan_date'),
  document.getElementById('devolution_date')]

  required_alert = false
  
  for(i in non_validated){
    if(non_validated[i].value == ""){
      required_alert = true
    }
  }
  if(required_alert){
    alert('Atenção, preencha todos os campos para emprestar o livro')
  }

  if(required_alert == false){
    new_book = new book(
        document.getElementById('book_name').value,
        document.getElementById('book_register').value,
        document.getElementById('book_author').value,
        document.getElementById('student_name').value,
        document.getElementById('student_class').value,
        document.getElementById('student_horary').value,
        document.getElementById('loan_horary').value,
        document.getElementById('loan_date').value,
        document.getElementById('devolution_date').value,
        'emprestado'
        )
        console.log(new_book)
      }
      new_book = [new_book]
      addRow(new_book)
})