/*
Next Steps:
- read in top student row for testing
- add button for every student (or figure out better way)
- add new sheet for student that holds only AOL data, weightings, graphs of weightings (bar and line)

*/


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
  
  var studentRow = sheet.getRange("6:6").getDisplayValues()[0];
 //[Assignmentname, KICA, Mark]
  
  for(i in aolIndex){
    //access each of the students indexes here
  }
  
}