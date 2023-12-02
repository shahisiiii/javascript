// console.log("welcome to javascripts")
// window.alert("alert box")
// document.write("from write method")
// document.getElementById("id1").innerHTML="javascript2"

// function hello(){
//     document.write("welcome to java script")
// }
// console.log("welcome")

// var x=3

// {
//     x=5
//     document.write("inside block:"+x+"<br>")
// }

// document.write("inside block:"+x+"<br>")


//  let x=3  //re-declairation not possible

// {
//     let x=5
//     document.write("inside block:"+x+"<br>")
// }

// document.write("inside block:"+x+"<br>")

// const x=3

// {
//     x=5
//     document.write("inside block:"+x+"<br>")
// }

// document.write("inside block:"+x+"<br>")


// data types in java scripts


// x=10.44
// document.write(typeof(x)+"<br>")

// s="java scripts"
// document.write(typeof(s)+"<br>")

// b=true
// document.write(typeof(b)+"<br>")

// var z 
// document.write(typeof(z)+"<br>")

// i=[1,2,3,"hello"]
// document.write(typeof(i)+"<br>")

// d={"name":"shahis","age":"kk"}
// document.write(typeof(d)+g"<br>")


// opertions in java script

// arithematic operation
// assignment 

// x=10
// y=3

// alert(x**3)


// if (contidition){
//     statements
// }

// else if(condition){
//     statements
// }
// else{
//     else_statements



// let x=3
//     y=5
//     z=8

//     if (x>y && x>z){
//         console.log(`${x} is large`);
//     }

//     else if (y>z){
//         console.log(`${y} is large`);
//     }

//     else {
//         console.log(`${z} is large`);
//     }


// switch (condition){
//     case vlue1:
//         statement1
//         break;

//     case vlue1:
//         statement1
//         break;

//     default:
//         default_statement

// }

// x=1
// switch (x){
//     case 1:
//         console.log("value is 1")
//         break;
//     case 2:
//         console.log("value is 2")
//         break;
//     default:
//         console.log("some other number")
// }


// for/

// for(initialize;condition;increament/decrement){
//     statemets

// }

// for(i=5;i<=25;i++){
//     
// }
// num=[1,4,5,8]
// for( i in num){
//     console.log(i)
// }

// num=[1,3,6,9,8,6]
// for(i of num){
//     if (i%2==0){
//         console.log(i)
//     }
// }


// initialization;
// while (condition){
//     body_of_loop
//     increment/decrement
// }
    

// i=1;
// while (i<=10){
//     // ;
//     i++;
// }

// x=6
// f=1
// for (let i=1;i<=x;i=i++){
//     f=f*i
// }
// console.log(f)

// let i=1
// do{
//     
//     i++
// }
// while(i<=10)


// let n=7
// prime=true
// for(i=2;i<n;i++){
//     if (n%i==0){

//         prime=false
//         break
//     }
// }
// if(prime){
//     console.log("is prime")
// }
// else{
//     console.log('not prime')

// }


// n=parseInt(prompt("enter the number:"))  //123
// temp=n
// rev=0

// while(n!=0){
//     rem=n%10  //1  //2  //3
//     rev=(rev*10)+rem
//     n=parseInt(n/10)
// }
// document.write(rev)
// if(temp==rev){
//     document.write("palindrome")
// }

// else{
//     document.write("not a palindrome")
// }\

// obj={
//     name:"shahis",
//     place:"tanur",
// }
// console.log(obj["name","place"])

// for(let i of obj){
//     console.log(obj[i])
// }

// s="shahis"

// console.log(s.startsWith("sh"));
// console.log(s.endsWith("sh"));
// console.log(s.slice(0,3));
// console.log(s.split(""));

// s="shahis"
// // console.log(s.split(""));
// count=0
// for(let i in s){
//     count=
    
// }
// console.log(count)

// s="hello hello hi hi welcome"
// array=s.split(" ")

// obj={}

// for(let i of array){
//     if(i in obj){
//         obj[i]+=1;

//     }
//     else{
//         obj[i]=1;
//     }

// }

// console.log(obj)


// let obj=(x,y)=>x+y
// console.log(obj(2,3))


// let obj=(x)=>x**3
// console.log(obj(2))

// MaP FILTER REDUCE

// arry=[1,2,3,4,5,6]
// x=arry.map(i=>i**2)
// console.log(x)

// arry=[1,2,3,4,5,6]
// x=arry.reduce((i,j)=>i+j)
// console.log(x)


// function validate(){
//     username=document.getElementById("uname").value 
//     pattern=/^(\+91[\-\s])?(91[\s])[6-9][0-9]{9}$/
//     if(pattern.test(username)){
//         alert("valid phnone number")
//     }
//     else{
//         alert("invlid mobile number")
//     }
// }

// function validate(){
//     uname=document.getElementById("uname").value 
//     psw=document.getElementById("psw").value
//     if((uname.trim()=="")||(psw.trim()=="")){
//         alert("No blank values allowed")
//         return false
//     }
//     else if(psw.length>5){
//         alert("password too long")
//         return flase

//     }
//     else{
//         return true
//     }
// }


// exception handling(error handling)   ===>  try , catch , finally , throw


try{
    // document.write(a)
    throw new error("Userdefined error")
}
catch (e){
    // document.write("An error occured ",e.message,"<br>")
    document.write(e)
}
finally{
    document.write("finally block")
 }



