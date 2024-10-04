    //Part 1 

    document.write('<table border=1>');

	for (row = 1; row <= 10; row++)
	{
		document.write('<tr>');

		document.write('<th>' , row , '</th>');

		var col = 1;
        var data;
		while( col <= 10)
		{
			data = col * row
            document.write('<td>' + data + '</td>');
			col++;							
		}

		document.write('</tr>');	}
	document.write('</table>');
    //Part 2

    var first_number = 45
    var second_number = 55

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

