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


document.getElementById('RemoveBook').addEventListener('click',async ()=>{
  target = String(document.getElementById('RegisterInput').value) 
  await doc.loadInfo();

  let sheet = doc.sheetsByIndex[0];

  let rows = await sheet.getRows();
  for(i in rows){
    
    if(rows[i]['_rawData'][1] === target){
      await rows[i].delete()
      return
    }
  }

})