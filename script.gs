
function doPost(e) {
  var sheet = SpreadsheetApp.openById('ID_DA_SUA_PLANILHA').getSheetByName('Página1');
  var data = JSON.parse(e.postData.contents);
  sheet.appendRow([new Date(), data.nome, data.telefone, data.email, data.numeros.join(", ")]);
  return ContentService.createTextOutput('Success').setMimeType(ContentService.MimeType.TEXT);
}

function doGet() {
  var sheet = SpreadsheetApp.openById('ID_DA_SUA_PLANILHA').getSheetByName('Página1');
  var data = sheet.getDataRange().getValues();
  
  var numerosVendidos = [];
  
  for (var i = 1; i < data.length; i++) {
    var numeros = data[i][4]; // coluna E
    if (numeros) {
      numeros.split(",").forEach(function(n) {
        numerosVendidos.push(n.trim());
      });
    }
  }
  
  return ContentService.createTextOutput(JSON.stringify(numerosVendidos))
                       .setMimeType(ContentService.MimeType.JSON);
}
