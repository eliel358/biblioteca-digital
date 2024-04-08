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

document.getElementById('goto_home').addEventListener('click',()=>{
  document.location.href='../index.html'
})

const createTable = async () => {
  await doc.loadInfo();

  let sheet = doc.sheetsByIndex[0];
  let rows = await sheet.getRows();
  for(i in rows){
      newRow = document.createElement('tr')
      document.getElementById('table-body').appendChild(newRow)
      for(a=0;a<4;a++){
        newCell = document.createElement('td')
        newRow.appendChild(newCell)
        newCell.innerHTML = rows[i]['_rawData'][a]
      }
      newCell = document.createElement('td')
      newRow.appendChild(newCell)
      buttonRemove = document.createElement('button')
      buttonRemove.innerHTML = 'Remover'
      newCell.appendChild(buttonRemove)
  }
}
createTable()