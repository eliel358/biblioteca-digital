// document.getElementById('goto_home').addEventListener('click',()=>{
//   document.location.href='../index.html'
// })
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

const updateRow = async (register, oldValue, newValue) => {
  
  await doc.loadInfo();
  register = String(register)
  let sheet = doc.sheetsByIndex[0];

  let rows = await sheet.getRows();
    
  for(i in rows){
    if(rows[i]['_rawData'][1] === register){
      for(a in rows[i]['_rawData']){
        if(rows[i]['_rawData'][a] === oldValue){
          rows[i]['_rawData'][a] = newValue
          await rows[i].save();
          return
        }
      }
    }
  }
};
const createTable = async () => {
  
  await doc.loadInfo()

  let sheet = doc.sheetsByIndex[0];
  let rows = await sheet.getRows();
  for(i in rows){
    newRow = document.createElement('tr')
    document.getElementById('table-body').appendChild(newRow)
    for(a in rows[i]['_rawData']){
      newCell = document.createElement('td')
      newRow.appendChild(newCell)
      newCell.innerHTML = rows[i]['_rawData'][a]
    }
    buttonConteiner = document.createElement('td')
    newRow.appendChild(buttonConteiner)
    button = document.createElement('button')
    buttonConteiner.appendChild(button)
    button.innerHTML = 'Devolução'
    button.className = 'loan-button'
  }

}

createTable()
// document.getElementById('devolution').addEventListener('click',()=>{
// if(document.getElementById('register_devolution').value == ''){
//   alert('Atenção, preencha todos os campos para devolver o livro')
// }
// console.log(document.getElementById('register_devolution').value)
// updateRow(document.getElementById('register_devolution').value,"Emprestado","Em estoque")
// })