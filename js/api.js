GoogleSpreadsheet  = require('google-spreadsheet');
JWT = require('google-auth-library');
fs = require('fs')
const RESPONSES_SHEET_ID = '1v8Dxzze5tIta4GdfzSzfmszmjZVfZWxpKPUF_xUGyT4';

const CREDENTIALS = JSON.parse(fs.readFileSync('../credentials.json'));
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
    for(let i = 0; i < rows.length;i++){
        console.log(rows[i]['_rawData'])
    }
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

x = [
book1 = new book('Dom Casmurro', 101, 'Machado de Assis', 'Ana', '2A', 'Tarde', 'Manhã', '28/02/2024', '07/03/2024'),
book2 = new book('1984', 102, 'George Orwell', 'Carlos', '3B', 'Manhã', 'Tarde', '01/03/2024', '08/03/2024'),
book3 = new book('Orgulho e Preconceito', 103, 'Jane Austen', 'Mariana', '1C', 'Noite', 'Manhã', '02/03/2024', '09/03/2024'),
book4 = new book('O Senhor dos Anéis', 104, 'J.R.R. Tolkien', 'Lucas', '4A', 'Manhã', 'Tarde', '03/03/2024', '10/03/2024'),
book5 = new book('Harry Potter e a Pedra Filosofal', 105, 'J.K. Rowling', 'Isabela', '2B', 'Tarde', 'Manhã', '04/03/2024', '11/03/2024'),
book6 = new book('A Revolução dos Bichos', 106, 'George Orwell', 'Mateus', '3C', 'Manhã', 'Tarde', '05/03/2024', '12/03/2024'),
book7 = new book('Crime e Castigo', 107, 'Fiódor Dostoiévski', 'Camila', '1A', 'Noite', 'Manhã', '06/03/2024', '13/03/2024'),
book8 = new book('Cem Anos de Solidão', 108, 'Gabriel García Márquez', 'Rodrigo', '4B', 'Manhã', 'Tarde', '07/03/2024', '14/03/2024'),
book9 = new book('O Pequeno Príncipe', 109, 'Antoine de Saint-Exupéry', 'Laura', '2C', 'Tarde', 'Manhã', '08/03/2024', '15/03/2024'),
book10 = new book('O Hobbit', 110, 'J.R.R. Tolkien', 'Gabriel', '3A', 'Manhã', 'Tarde', '09/03/2024', '16/03/2024')
]
addRow(x)