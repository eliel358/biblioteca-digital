document.getElementById('goto_home').addEventListener('click',()=>{
  document.location.href='../index.html'
})
GoogleSpreadsheet  = require('google-spreadsheet');
JWT = require('google-auth-library');
fs = require('fs')
const RESPONSES_SHEET_ID = '1v8Dxzze5tIta4GdfzSzfmszmjZVfZWxpKPUF_xUGyT4';

try{
  const CREDENTIALS = JSON.parse(fs.readFileSync('./credentials.json'));
}catch(error){
  console.error(error)
  alert(error)
}
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

  let sheet = doc.sheetsByIndex[0];

  await sheet.addRow([bookName,bookRegister,bookAuthor]); 
  
};
document.getElementById('addBook').addEventListener('click',()=>{
  addBook(document.getElementById('bookName').value,document.getElementById('bookRegister').value,document.getElementById('bookAuthor').value)
})