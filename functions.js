'use strict';


const isHometown = (town) => {
    // Given a `town`, return `True` if `town` is 'San Francisco'.

    // Arguments:
    //     town (str): A town

    // Returns:
    //     bool: True if `town` is 'San Francisco'

    return town === "San Francisco"

};

console.log(isHometown("San Francisco"));




const getFullName = (firstName, lastName) => {

//  Given `first_name` and `last_name`, return a full name.

//  Arguments:
//     first_name (str): A first name
//     last_name (str): A last name

//  Returns:
//     str: A full name

    return `${firstName} ${lastName}`

};

console.log(getFullName("Suelen", "Matos"));





const calculateTotal = (basePrice, state, tax=0.05) => {
    // Return the total price of an item, figuring in state taxes and fees.

    // Arguments:
    //     base_price (float): Base price of an item
    //     state (str): Two-letter abbreviation of a U.S. state
    //     tax (float): Tax rate. Defaults to 0.05

    // Returns:
    //     float: The total price of an item

    const subtotal = basePrice * (1 + tax);

    let fee = 0;

    if (state === 'CA') {
        fee = 0.03 * subtotal;
    } else if (state === 'PA') {
        fee = 2;
    } else if (state === 'MA') {
        if (basePrice <= 100) {
            fee = 1;
        } else {
            fee = 3;
        }
    }

    return subtotal + fee;

};

console.log(calculateTotal(10, 'MA'));