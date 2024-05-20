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

document.getElementById('go_back').addEventListener('click',()=>{
  document.getElementById('remove_book_conteiner').style.display = 'flex'
  document.getElementById('remove_confirm').style.display = 'none'
})


document.getElementById('RemoveBook').addEventListener('click',removeBook = async ()=>{
  await doc.loadInfo();
  
  let sheet = doc.sheetsByIndex[0];

  let rows = await sheet.getRows();
  
  target = String(document.getElementById('RegisterInput').value)
  
  for(i in rows){
    
    if(rows[i]['_rawData'][1] === target){
      document.getElementById('remove_book_conteiner').style.display = 'none'
      document.getElementById('remove_confirm').style.display = 'flex'
      document.getElementById('book_name').innerHTML = "Nome do livro: " + rows[i]['_rawData'][0]
      document.getElementById('book_register').innerHTML = "Registro do livro: "+ rows[i]['_rawData'][1]
      document.getElementById('book_author').innerHTML = "Autor do livro: " + rows[i]['_rawData'][2]
      alertRequest = false
      document.getElementById('RemoveBookConfirm').addEventListener('click',confirmDeleteBook = async () =>{
        alert("O livro ("+ rows[i]['_rawData'][0]+") foi removido")
        await rows[i].delete()
      })
      return
    }else{
      alertRequest = true
    }
  }
  if(alertRequest){
    alert('Este livro não existe ou o registro está incorreto')
  }
})