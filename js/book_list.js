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

const createElements = async () => {

  await doc.loadInfo();

  let sheet = doc.sheetsByIndex[0];

  let rows = await sheet.getRows();
  for(i in rows){
    
    table_body = document.getElementById('table-body')
    table_row = document.createElement('tr')
    table_body.appendChild(table_row)
    
    for(e in rows[i]['_rawData']){
      table_column = document.createElement('td')
      table_column.innerHTML = rows[i]['_rawData'][e]
      table_row.appendChild(table_column)
    }
  }
};
createElements()