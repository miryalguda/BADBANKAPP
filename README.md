# BADBANKAPP

Badbank Readme:

1. This Badbankapp is the first time created front end application of Banking website.
2. Tried to add the following user  options in this app, briefly:
a) Home page allows the user to login button.
b) opens the login form with username and password and submit. and after  successful submission of user info, sends the code  to user's email.
c) code  screen opens.  After  entering the code, accounts page opens up.
d) accounts  page has 7 buttons to allow different transactions .
e) create account form allows  the  user to register new  users with some validation.
f) transfers  page  allows  the user  to transfer  the money between two internal accounts.  
g) Usersdata button  saves  all login info, code info, registration info and transfers  info in a tabulated form and also JSON format.
h) Deposit form allows the user  to deposit (minimum of $1). If user  deposits less than 0, -1 vlaues, NaN  values, user  will get an window alert. unless the right amount is deposited, submit button gets disabled.
g)  withdraw page allows  the user to withdraw  maximum of $300 only.  If user tries to withdraw more  than $300 or more  than his total balance (if total balance is less   than 300), user will get window alert that he cannot process.
h) Both validated deposit and withdraw transactions will be displayed successfully in tabulated  form  as well as JSON format individually. 
i) finally, logout button allows the user to lgout of the account and opens the home page to relogin.
j) A sticky footer  is added  at  the bottom with bank  locations, careets, email info.
k) all buttons in the accounts  page  has tooltip describing about that button.
l) A button is added  in every page to go back to accounts  page  easily using useNavigate hook.
m)  a small bank image  is added  in appropriate pages.
n) tried to use  formik and Yup libraries to add more  validation.   Because  of more  validation rules,  formik and yup couldnot be used.  However, on a seperate  file, i could demonstrate the validations by formik and yup.  in future, they can be combines.
o) tried Mongo DB/express/cors/ node/react together  to create  back end database and get  the dat  back into website.  However, axiosdis did not work with any get  or put requests. Still I am trying to find out the reason for axios/ fetch apis to work with MERN. 
