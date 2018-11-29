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
  for(var x = 0; x<aTypeRow.length; x++){
    if(aTypeRow[x] == "Of"){
      aolIndex.push(x); //adds all column numbers of AOL's to the array
    }
  }  
  
  var studentRow = sheet.getRange("6:6").getDisplayValues()[0];
  var kicaRow = sheet.getRange("2:2").getDisplayValues()[0];
  var nameRow = sheet.getRange("1:1").getDisplayValues()[0];
  var maxRow = sheet.getRange("4:4").getDisplayValues()[0];


 //[Assignmentname, KICA, Mark, Max]
  var studentData = [[["Assignment", "KICA", "Mark /100%"]],[["Assignment", "KICA", "Mark /100%"]],[["Assignment", "KICA", "Mark /100%"]],[["Assignment", "KICA", "Mark /100%"]]];
  
  for(var i = 0; i<aolIndex.length; i++){
    //access each of the students indexes here
    
    if(kicaRow[aolIndex[i]] == "K"){
      studentData[0].push([nameRow[aolIndex[i]],kicaRow[aolIndex[i]],(Number(studentRow[aolIndex[i]])/Number(maxRow[aolIndex[i]])*100)]);

    }
    else if(kicaRow[aolIndex[i]] == "T"){
      studentData[1].push([nameRow[aolIndex[i]],kicaRow[aolIndex[i]],(Number(studentRow[aolIndex[i]])/Number(maxRow[aolIndex[i]])*100)]);
    }
    else if(kicaRow[aolIndex[i]] == "C"){
      studentData[2].push([nameRow[aolIndex[i]],kicaRow[aolIndex[i]],(Number(studentRow[aolIndex[i]])/Number(maxRow[aolIndex[i]])*100)]);
    }
    else if(kicaRow[aolIndex[i]] == "A"){
      studentData[3].push([nameRow[aolIndex[i]],kicaRow[aolIndex[i]],(Number(studentRow[aolIndex[i]])/Number(maxRow[aolIndex[i]])*100)]);
    }
    
    
  }
  
  var studentSheet = ss.insertSheet("test");
  studentSheet.getRange(1,1, studentData[0].length, studentData[0][0].length).setValues(studentData[0]);
  studentSheet.getRange(1,4, studentData[1].length, studentData[1][0].length).setValues(studentData[1]);
  studentSheet.getRange(1,7, studentData[2].length, studentData[2][0].length).setValues(studentData[2]);
  studentSheet.getRange(1,10, studentData[3].length, studentData[3][0].length).setValues(studentData[3]);
  
}