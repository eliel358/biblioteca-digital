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
  // console.log(rows[0])
  for(i in rows){
    console.log(rows[i]['_rawData'])
    display = document.createElement('div')
    display.className = 'row book-display'
    document.getElementById('conteiner').insertBefore(display,document.getElementById('goto_home'))
    console.log(document.getElementById('conteiner'))
    for(e in rows[i]['_rawData']){
      temp = document.createElement('p')
      temp.innerHTML = rows[i]['_rawData'][e]
      display.appendChild(temp)
    }
  }
};

createElements()