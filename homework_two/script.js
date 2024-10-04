
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

//Part 2

var first_number = 45
var second_number = 55

// <tr>
//             <th bgcolor=cyan><div id="r0h0"></div></th> 
//             <th bgcolor=cyan><div id="r0h1"></div></th> 
//             <th bgcolor=cyan><div id="r0h2"></div></th> 
//             <th bgcolor=cyan><div id="r0h3"></div></th>
//             <th bgcolor=cyan><div id="r0h4"></div></th>
//             <th bgcolor=cyan><div id="r0h5"></div></th>
// </tr>


document.getElementById("part-2").innerHTML = first_number * second_number

//Part 3

colors = ["red", "green", "blue", "yellow", "orange"]
document.getElementById("part-3").innerHTML = colors[2]

//Part 4

books_authors = {"The Republic": "Plato", "Ulysses": "Joyce", "Ficciones": "Borges", "Gravity's Rainbow": "Pynchon", "Queer": "Burroughs"}
books_authors_keys = Object.keys(books_authors)
document.getElementById("part-4").innerHTML = books_authors_keys[3] + " by " + books_authors[books_authors_keys[3]]

//Part 5

shopping_cart = [
    {
        "prod_code": "001", 
        "description": "Nutella", 
        "price": 5.99, 
        "quantity": 2 
    },
    {
        "prod_code": "002", 
        "description": "Grape Jelly", 
        "price": 7.99, 
        "quantity": 1 
    },
    {
        "prod_code": "003", 
        "description": "Bread", 
        "price": 4.99, 
        "quantity": 1 
    }
]

shopping_cart_keys = Object.keys(shopping_cart)

document.getElementById("part-5").innerHTML = 
    shopping_cart[1]["prod_code"] + "&nbsp" + 
    shopping_cart[1]["description"] + "&nbsp" + 
    shopping_cart[1]["price"] + "&nbsp" +
    shopping_cart[1]["quantity"]

