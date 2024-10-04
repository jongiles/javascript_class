    //Part 1 

    document.getElementById("r0h0").innerHTML = "X"
    document.getElementById("r0h1").innerHTML = "1"
    document.getElementById("r0h2").innerHTML = "2"
    document.getElementById("r0h3").innerHTML = "3"
    document.getElementById("r0h4").innerHTML = "4"
    document.getElementById("r0h5").innerHTML = "5"
    
    document.getElementById("r1h0").innerHTML = "1"
    document.getElementById("r1d1").innerHTML = "1"
    document.getElementById("r1d2").innerHTML = "2"
    document.getElementById("r1d3").innerHTML = "3"
    document.getElementById("r1d4").innerHTML = "4"
    document.getElementById("r1d5").innerHTML = "5"

    document.getElementById("r2h0").innerHTML = "2"
    document.getElementById("r2d1").innerHTML = "2"
    document.getElementById("r2d2").innerHTML = "4"
    document.getElementById("r2d3").innerHTML = "6"
    document.getElementById("r2d4").innerHTML = "8"
    document.getElementById("r2d5").innerHTML = "10"

    document.getElementById("r3h0").innerHTML = "3"
    document.getElementById("r3d1").innerHTML = "3"
    document.getElementById("r3d2").innerHTML = "6"
    document.getElementById("r3d3").innerHTML = "9"
    document.getElementById("r3d4").innerHTML = "12"
    document.getElementById("r3d5").innerHTML = "15"

    document.getElementById("r4h0").innerHTML = "4"
    document.getElementById("r4d1").innerHTML = "4"
    document.getElementById("r4d2").innerHTML = "8"
    document.getElementById("r4d3").innerHTML = "12"
    document.getElementById("r4d4").innerHTML = "16"
    document.getElementById("r4d5").innerHTML = "20"

    document.getElementById("r5h0").innerHTML = "5"
    document.getElementById("r5d1").innerHTML = "5"
    document.getElementById("r5d2").innerHTML = "10"
    document.getElementById("r5d3").innerHTML = "15"
    document.getElementById("r5d4").innerHTML = "20"
    document.getElementById("r5d5").innerHTML = "25"

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

