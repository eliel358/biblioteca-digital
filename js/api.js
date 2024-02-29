// Google sheet npm package
GoogleSpreadsheet  = require('google-spreadsheet');
JWT = require('google-auth-library');
fs = require('fs')
// File handling package


// spreadsheet key is the long id in the sheets URL
const RESPONSES_SHEET_ID = '1v8Dxzze5tIta4GdfzSzfmszmjZVfZWxpKPUF_xUGyT4';

// Credentials for the service account
const CREDENTIALS = JSON.parse(fs.readFileSync('../credentials.json'));
// Create a new document
const serviceAccountAuth  = new JWT.JWT({
  email: CREDENTIALS.client_email,
  key: CREDENTIALS.private_key,
  scopes: [
      'https://www.googleapis.com/auth/spreadsheets',
  ],
});

const doc = new GoogleSpreadsheet.GoogleSpreadsheet(RESPONSES_SHEET_ID,serviceAccountAuth)

// const serviceAccountAuth  = new JWT(RESPONSES_SHEET_ID);
// const doc = new GoogleSpreadsheet(RESPONSES_SHEET_ID,serviceAccountAuth)

const getRow = async (livro) => {

    // use service account creds

    // load the documents info
    await doc.loadInfo();

    // Index of the sheet
    let sheet = doc.sheetsByIndex[0];

    // Get all the rows
    let rows = await sheet.getRows();
    for(let i = 0; i < rows.length;i++){
      // if(rows[i]['_rawData'][0] == livro){
        console.log(rows[i]['_rawData'])
      // }
    }
};

// getRow();

const addRow = async (rows) => {

  // use service account creds
 4

  await doc.loadInfo();

  // Index of the sheet
  let sheet = doc.sheetsByIndex[0];
  // for (let index = 0; index < rows.length; index++) {
  //     const row = rows[index];
  await sheet.addRow(rows[0]);
  // }
};

//rows = object
// addRow(rows);

const updateRow = async (keyValue, oldValue, newValue) => {

    // use service account creds
    const doc = new GoogleSpreadsheet(RESPONSES_SHEET_ID,serviceAccountAuth)

    await doc.loadInfo();

    // Index of the sheet
    let sheet = doc.sheetsByIndex[0];

    let rows = await sheet.getRows();

    for (let index = 0; index < rows.length; index++) {
        const row = rows[index];
        console.log(row['livro'])
        if (row[keyValue] === oldValue) {
            console.log(key)
            rows[index][keyValue] = newValue;
            await rows[index].save();
            break; 
        }
    };
};

// updateRow('livro', 'senhor dos aneis', 'batata')


//ok
const deleteRow = async (target) => {

    // use service account creds
    
   await doc.loadInfo();

    // Index of the sheet
    let sheet = doc.sheetsByIndex[0];

    let rows = await sheet.getRows();
    for(i in rows){
      console.log(rows[i]['_rawData'][1])
    
      if(rows[i]['_rawData'][1] === target){
        await rows[i].delete()
        break
      }
    }
};

class book{
  constructor(book_name,register,author,student_name,student_class,student_horary,loan_horary,loan_date,devolution_date){
    this.book_name = book_name
    this.register = register
    this.author = author
    this.student_name = student_name
    this.student_class = student_class
    this.student_horary = student_horary
    this.loan_horary = loan_horary
    this.loan_date = loan_date
    this.devolution_date = devolution_date
  }
}

// let book1 = new book('Dom Casmurro', 101, 'Machado de Assis', 'Ana', '2A', 'Tarde', 'Manhã', '28/02/2024', '07/03/2024');
// let book2 = new book('1984', 102, 'George Orwell', 'Carlos', '3B', 'Manhã', 'Tarde', '01/03/2024', '08/03/2024');
// let book3 = new book('Orgulho e Preconceito', 103, 'Jane Austen', 'Mariana', '1C', 'Noite', 'Manhã', '02/03/2024', '09/03/2024');
// let book4 = new book('O Senhor dos Anéis', 104, 'J.R.R. Tolkien', 'Lucas', '4A', 'Manhã', 'Tarde', '03/03/2024', '10/03/2024');
// let book5 = new book('Harry Potter e a Pedra Filosofal', 105, 'J.K. Rowling', 'Isabela', '2B', 'Tarde', 'Manhã', '04/03/2024', '11/03/2024');
// let book6 = new book('A Revolução dos Bichos', 106, 'George Orwell', 'Mateus', '3C', 'Manhã', 'Tarde', '05/03/2024', '12/03/2024');
// let book7 = new book('Crime e Castigo', 107, 'Fiódor Dostoiévski', 'Camila', '1A', 'Noite', 'Manhã', '06/03/2024', '13/03/2024');
// let book8 = new book('Cem Anos de Solidão', 108, 'Gabriel García Márquez', 'Rodrigo', '4B', 'Manhã', 'Tarde', '07/03/2024', '14/03/2024');
// let book9 = new book('O Pequeno Príncipe', 109, 'Antoine de Saint-Exupéry', 'Laura', '2C', 'Tarde', 'Manhã', '08/03/2024', '15/03/2024');
// let book10 = new book('O Hobbit', 110, 'J.R.R. Tolkien', 'Gabriel', '3A', 'Manhã', 'Tarde', '09/03/2024', '16/03/2024');


// addRow([book10])