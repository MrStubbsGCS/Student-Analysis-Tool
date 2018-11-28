function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('Lesson Planning Tool')
  .addItem('Analyze Students', 'analyze')
  .addToUi();
}

function analyze(){
  var ss = SpreadsheetApp.getActive(); 
  var sheet = ss.getActiveSheet();
  var aTypeRow = sheet.getRange("3:3").getDisplayValues()[0]; //gets the values to check if AOL
  var aolIndex = [];
  for(x = 0; x<aTypeRow.length; x++){
    if(aTypeRow[x] == "Of"){
      aolIndex.push(x); //adds all column numbers of AOL's to the array
    }
  }  
  
}