const express = require('express')
const { google } = require('googleapis');
const {
    getSpreadSheet,
    getSpreadSheetValues
} = require('./googleSheetsService.js');

const app = express(express.json())
const PORT = 4000;

const spreadsheetId = "";
const sheetName = "";


// function main() {
//     testGetSpreadSheet();
//     testGetSpreadSheetValues();
// }

app.get('/', async (req, res) => {
    const response = await getSpreadSheetValues({
        spreadsheetId,
        sheetName,
        keyFile: 'key.json',
        scopes: ['https://www.googleapis.com/auth/spreadsheets']
    });
    res.send(response?.data?.values);
});

app.listen(PORT, () => {
    console.log(`Express with Typescript! http://localhost:${PORT}`);
});

