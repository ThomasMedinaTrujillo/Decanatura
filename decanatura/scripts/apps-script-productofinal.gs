// Standalone Apps Script for "Producto Final" submissions.
// Configure SPREADSHEET_ID and SHEET_NAME before deploying.

const SPREADSHEET_ID_FINAL = 'PUT_YOUR_SPREADSHEET_ID_HERE';
const SHEET_NAME_FINAL = 'productoFinal'; // or the exact tab name you use

function doPost(e) {
  try {
    if (!e || !e.postData || !e.postData.contents) {
      return ContentService
        .createTextOutput(JSON.stringify({ status: 'error', message: 'No postData.contents' }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    const data = JSON.parse(e.postData.contents);

    const ss = SpreadsheetApp.openById(SPREADSHEET_ID_FINAL);
    const sheet = ss.getSheetByName(SHEET_NAME_FINAL) || ss.getActiveSheet();

    const timestamp = new Date();

    // Expected columns (order):
    // Fecha, Profesor, Curso, MecanismoEvaluacion, ResultadoAprendizaje, NivelAIAS, QueEvaluar,
    // ComoEvaluar, ConsignaEstudiante, Recursos, NotasObservaciones, Source
    const row = [
      timestamp.toISOString(),
      data.profesor || '',
      data.curso || '',
      data.mecanismoEvaluacion || '',
      data.resultadoAprendizaje || '',
      data.nivelAIAS || '',
      data.queEvaluar || '',
      data.comoEvaluar || '',
      data.consignaEstudiante || '',
      data.recursos || '',
      data.notasObservaciones || '',
      data.source || '',
    ];

    sheet.appendRow(row);

    return ContentService
      .createTextOutput(JSON.stringify({ status: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error', message: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
