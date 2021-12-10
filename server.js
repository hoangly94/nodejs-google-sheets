const express = require('express')
const { google } = require('googleapis');


const app = express(express.json())
const PORT = 3000;

const spreadsheetId = "";

const sheets = google.sheets('v4');

app.get('/', async (req, res) => {
    try {
        const authCient = new authorize();
        const sheets = google.sheets({
            version: 'v4',
            auth: client,
        })
        const response = await sheets.spreadsheets.values.get({
            spreadsheetId: spreadsheetId,
            range: 'test',
        });
        res.send(response.data);
    } catch (e) {
        console.log(e);
    }
});

app.listen(PORT, () => {
    console.log(`Express with Typescript! http://localhost:${PORT}`);
});



const authorize = async () => {
    const auth = new google.auth.GoogleAuth({
        keyFile: 'key.json',
        scopes: 'https://www.googleapis.com/auth/spreadsheets',
    });

    return await auth.getClient();
}