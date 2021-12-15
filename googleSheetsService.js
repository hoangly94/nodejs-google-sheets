const { google } = require('googleapis');
const sheets = google.sheets('v4');

async function getAuthToken(keyFile, scopes ) {
    const auth = new google.auth.GoogleAuth({
        keyFile,
        scopes
    });
    const authToken = await auth.getClient();
    return authToken;
}

async function getSpreadSheet({ spreadsheetId, keyFile }) {
    const res = await sheets.spreadsheets.get({
        spreadsheetId,
        auth: await getAuthToken(keyFile, scopes),
    });
    return res;
}

async function getSpreadSheetValues({ spreadsheetId, sheetName, keyFile }) {
    const res = await sheets.spreadsheets.values.get({
        spreadsheetId,
        auth: await getAuthToken(keyFile, scopes),
        range: sheetName
    });
    return res;
}


module.exports = {
    getSpreadSheet,
    getSpreadSheetValues
}