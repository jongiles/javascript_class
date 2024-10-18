
//Part 1     


maxRow = Math.random();
maxCol = Math.random();
maxRow = maxRow * 10 + 1;
maxCol = maxCol * 10 + 1;


function makeMyTable(numRows, numCols){

    document.write('<table border=1>');
    document.write('<tr>');
    document.write('<th bgcolor=cyan>X </th>');
    
    for (header = 1; header <= numCols; header++){
            
        document.write('<th bgcolor=cyan>' + header + '</th>');           
    
    }
    
    document.write('</tr>');
    
    for (row = 1; row <= numRows; row++){
    
        document.write('<tr>');
        document.write('<th <td bgcolor=cyan>' , row , '</th>');
    
        var col = 1;
        var data;
    
        while( col <= numCols){
    
            data = col * row
            document.write('<td>' + data + '</td>');
            col++;			
    
        }
    
        document.write('</tr>');
    
    }
    
    document.write('</table>');
    

}

document.write('<br></br>')
makeMyTable(10,10)

document.write('<br></br>')
makeMyTable(maxRow,maxCol)
