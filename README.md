# VALI-PAY
Vali-pay is an electronic platform to validate if a card is valid and this is due to the Luhn algorithm

## Indice
- [VALI-PAY](#vali-pay)
  - [Indice](#indice)
    - [Information:](#information)
    - [Description:](#description)
    - [Design:](#design)
    - [Considerations:](#considerations)
    - [Structure:](#structure)
    - [Technologies used:](#technologies-used)
    - [How to use](#how-to-use)
    - [Final product:](#final-product)
*** 
### Information:
  ***Theme:*** Card Validation  
  ***Autor:*** Andu15  
  ***Created:*** 06/22  
  ***Version:*** 2.0.0  

### Description: 
Web application based on the Luhn algorithm, which allows the user to validate a credit card number, with the added bonus of verifying the type of card entered

### Design:
- [Figma](https://www.figma.com/file/6qpLuaIfT2x3bBOzA4LsIU/CARD-VALIDATION-v2?node-id=0%3A1)

### Considerations:
- isValid: Luhn's algorithm
- maskify: Return only 4 last digits of the credit card
- getIssuer: With regex you can get the brand of the card (American Express, Discover, Visa, Mastercard, etc.)

### Structure:
<pre>
├── coverage/
├── node_modules/
├── src/
|   ├── assets/
|   |   ├── css/
|   |   ├── images/
|   |   └── scss/
|   ├── .htmlhintrc
|   ├── index.html
|   ├── index.js
|   └── validator.js
├── test/
|   ├── .eslintrc
|   └── validator.spec.js
├── .babelrc
├── .editorconfig
├── .eslintrc.js
├── .gitignore
├── package-lock.json
├── package.json
└── README.md
</pre>

### Technologies used:

- Vanilla js
- HTML
- CSS
- Sass
- Jest
- ESLint

### How to use
1. The user clicks 'Ir a Pagar'  
2. Enter the data:
  * ___Número de tarjeta:___ Accepts between 12 to 19 numbers without spaces
  * ___MM:___ Select card expiration month
  * ___YYYY:___ Select card expiration year
  * ___CVV:___ Enter cvv
  * ___Primer Nombre:___ Accept only one name and no spaces
  * ___Primer Apellido:___ Accept only one last name and no spaces
  * ___Correo electrónico:___ Enter a email
3. Wait 2 seconds aprox. while the next screen loads
4. Finally it will show you if the card is valid or not

** OBS: This simple application is a payment simulation, so if the card is valid, it will indicate a transaction code, but it is only so as not to lose the context

### Final product:
  - Desplegado en [gh-pages]()