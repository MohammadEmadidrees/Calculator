// // Initialize a loop counter
// var i = 0;

// // Initialize an array to store the input numbers
// var numbers = [];

// // Ask the user for numbers until they enter "done"
// while (true) {
//   // Ask the user for a number
//   var input = prompt("Enter a number or 'done' to finish:");

//   // Check if the user has finished entering numbers
//   if (input.toLowerCase() == "done") {
//     break;
//   }

//   // Convert the input to a number (since prompt returns a string)
//   var num = Number(input);

//   // Add the number to the array
//   numbers.push(num);

//   // Increment the loop counter
//   i++;
// }

// // Loop through the array of numbers and print whether they are even or odd
// for (i = 0; i < numbers.length; i++) {
//   var num = numbers[i];
//   if (num % 2 == 0) {
//     console.log(num + " is even");
//   } else {
//     console.log(num + " is odd");
//   }
// }
// alert("Error ! Please enter a valid password" + "\n"+ "happy Coding");
// alert("Error ! Please enter a valid password" + "\n"+ "happy Coding");
// alert("Error ! Please enter a valid password" + "\n"+ "happy Coding");

// var email="emadidrees99@gmail.com";
// var book="A smarter way to learn JS";

// alert("My email is " + email);
// alert("I am learning JS from " + book);

// document.write("My email is " + email," I am learning JS from " + book )

// var name=prompt("Enter your name");
// var product_title=prompt("Enter your product");
// var quan=prompt("Enter the amount of product you wants to order?");

// document.write("User name is " + name  + name, "product title is " + product_title," user ordered 1 gaming pc from Navi Store" + quan)

// var cost=500;
// var curr="pkr"
// alert("The cost of per person is "+ cost +curr);
// var person= +prompt("How many persons you are?");
// var result= cost*person;
// alert("The price of your tickets will be " +result +curr);

// var number=2;
// for(var i=1; i<11;i++)
// {
//   document.write("2" + "x" + i + "=" + 2*i +"<br>")
// }

// var cel=25;
// var result=(cel*9/5)+32;
// document.write("25C is " +result + "F" );

// var city= prompt("Enter your city name to find if its clean or not");
// var firstchar = city.slice(0,1);
// var firstchar= firstchar.toUpperCase();
// var otherchar = city.slice(1);
// var otherchar= otherchar.toLowerCase();
// var final=firstchar + otherchar;

// var cities=["Karachi","Islamabad","Lahore"];
// for( var i=0; i<cities.length;i++)
// {
//     if(cities[i]=== final)
//     {
//         alert("Your city has been found in cleanest city");
//         break
//     }
// }

// function getname()
// {
//     var name=document.getElementById("namee")
//     // alert(name.value); 
//     name.value="Emad"
//     // name.value=""
// }
// getname();

function getnum(num)
{  var result=document.getElementById("userinput");
    result.value +=num; //ye jo hmne function banaya hai is se hm input field jo hai usmein jo cheez enter horhai hai hm usko get kr rhy hai id k zariye jo k maine userinput rkhi hai.
    //aur ye jo +=num likha hai iska mtlb hai agr main aese likhun var c= "a"; aur mein likhun c +=b tw a ki value hogi cb agr plus nh lagaunga tw a ki pichli remove hojayegi aur new value save hojayegi tw agr purani vlue bhi rkhni hai aur new bhi rkhwani hai tw c+=b aese likhty hein.
}

function getclear()
{
    var result=document.getElementById("userinput");
    result.value="0"; // ye jo hmne function banaya hai is se hm input ki jo field hai usko clear kr rhy hein jb clear k button pe click ho tw.
}

function result()
{
    var result=document.getElementById("userinput");
    result.value= eval(result.value); //ye jo function hai is se hum input ki field mein jo cheezien hai usko eval k function se result nikal kr result.value mein save krwa kr show krwarhy hein.
}