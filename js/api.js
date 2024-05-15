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

//ok

const getTable = async () => {

    await doc.loadInfo();

    let sheet = doc.sheetsByIndex[0];

    let rows = await sheet.getRows();
    array = []
    for(i in rows){
      array.push(rows[i]['_rawData'])
    }
    console.table(array)
};

const getBookbyregister = async (register) => {

    register = String(register)
    await doc.loadInfo();

    let sheet = doc.sheetsByIndex[0];

    let rows = await sheet.getRows();
    for(let i = 0; i < rows.length;i++){
      if(rows[i]['_rawData'][1] == register){
        console.log(rows[i]['_rawData'])
      }
    }
};


const deleteRow = async (target) => {

  target = String(target) 
  await doc.loadInfo();

  let sheet = doc.sheetsByIndex[0];

  let rows = await sheet.getRows();
  for(i in rows){
  
    if(rows[i]['_rawData'][1] === target){
      await rows[i].delete()
      return
    }
  }
};

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

const addRow = async (rows) => {

  await doc.loadInfo();

  let sheet = doc.sheetsByIndex[0];

  for(i in rows){
    await sheet.addRow(rows[i]);
  }
  
};
