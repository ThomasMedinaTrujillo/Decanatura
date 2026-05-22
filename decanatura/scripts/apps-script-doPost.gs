// Update this constant with your spreadsheet ID before deploying
const SPREADSHEET_ID = 'PUT_YOUR_SPREADSHEET_ID_HERE';

function doPost(e) {
  try {
    if (!e || !e.postData || !e.postData.contents) {
      return ContentService
        .createTextOutput(JSON.stringify({ status: 'error', message: 'No postData.contents' }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    const data = JSON.parse(e.postData.contents);
    const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    const sheetName = data.sheetName || 'Sheet1';
    const sheet = ss.getSheetByName(sheetName) || ss.getActiveSheet();

    const timestamp = new Date();
    const normalizedSheet = String(sheetName).toLowerCase();
    let row;

    if (normalizedSheet === 'producto1') {
      // Fecha, Profesor, Curso, Resultado, Clasificacion, Justificacion, Ajuste, Source
      row = [
        timestamp.toISOString(),
        data.profesor || '',
        data.curso || '',
        data.resultadoAprendizaje || '',
        data.clasificacion || '',
        data.justificacion || '',
        data.ajuste || '',
        data.source || '',
      ];
    } else if (normalizedSheet === 'producto2') {
      // Fecha, Profesor, Curso, Mecanismo, ResultadoActividad, ProblemaPrincipal, Recomendacion, Source
      row = [
        timestamp.toISOString(),
        data.profesor || '',
        data.curso || '',
        data.mecanismo || '',
        data.resultadoActividad || '',
        data.problemaPrincipal || '',
        data.recomendacion || '',
        data.source || '',
      ];
    } else if (normalizedSheet === 'producto3') {
      // Fecha, Profesor, Curso, ActividadEvaluativa, ResultadoP3, NivelAIAS, JustificacionBreveP3, Source
      row = [
        timestamp.toISOString(),
        data.profesor || '',
        data.curso || '',
        data.actividadEvaluativa || '',
        data.resultadoProducto3 || '',
        data.nivelAIAS || '',
        data.justificacionBreve3 || '',
        data.source || '',
      ];
    } else if (normalizedSheet === 'productofinal') {
      // Fecha, MecanismoEvaluacion, ResultadoAprendizaje, NivelAIAS, QueEvaluar,
      // ComoEvaluar, ConsignaEstudiante, Recursos, NotasObservaciones, Source
      row = [
        timestamp.toISOString(),
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
    } else {
      // Fallback for any other sheet name.
      row = [
        timestamp.toISOString(),
        data.profesor || '',
        data.curso || '',
        data.resultadoAprendizaje || '',
        data.clasificacion || '',
        data.justificacion || '',
        data.ajuste || '',
        data.mecanismo || '',
        data.resultadoActividad || '',
        data.problemaPrincipal || '',
        data.recomendacion || '',
        data.actividadEvaluativa || '',
        data.resultadoProducto3 || '',
        data.nivelAIAS || '',
        data.justificacionBreve3 || '',
        data.source || '',
      ];
    }

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
