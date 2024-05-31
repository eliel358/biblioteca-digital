document.getElementById('goto_home').addEventListener('click',()=>{
  document.location.href='../index.html'
})
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

const addBook = async (bookName,bookRegister,bookAuthor) => {

  await doc.loadInfo();
  registerisunique = true
  let sheet = doc.sheetsByIndex[0];
  rows = await sheet.getRows()
  
  for(i in rows){
    if(rows[i]["_rawData"][1] == bookRegister){
      registerisunique = false
      break
    }else{
      registerisunique = true
    }
  }
  if(registerisunique){
    await sheet.addRow([bookName,bookRegister,bookAuthor]); 
    document.getElementById('bookName').value = document.getElementById('bookRegister').value = document.getElementById('bookAuthor').value = ""
    msg = "O livro de nome " + bookName + ", registro " + bookRegister + ", e autor " + bookAuthor + " foi adicionado"
    alert(msg)
    return
  }
  alert(bookRegister+" é um registro já existente no sistema")
};
document.getElementById('addBook').addEventListener('click',()=>{
  addBook(document.getElementById('bookName').value,document.getElementById('bookRegister').value,document.getElementById('bookAuthor').value)
})