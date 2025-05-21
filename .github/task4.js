let age=Number(prompt("Enter your age"))

if(age >= 18){
    console.log("you can vote")
}

else{
    console.log("you can vote in " + (18-age) + " year")
}