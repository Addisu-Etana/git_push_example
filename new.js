let firstname ='addisu'
let secondname ='Etana'
let fullname =firstname + ' ' + secondname
console.log(fullname)

 function fname(){
    let name = 'linda'
    let greeting = 'Hi there!'
    console.log(name + ','+ greeting)
    console.log(greeting + ''+ name)
 }
 fname()
 let mypoints = 3
 function add3points(){
    mypoints =mypoints + 3
 }
 function remove1points(){
    mypoints = mypoints-1
 }
 add3points()
 add3points()
 add3points()
 remove1points()
 remove1points()
 console.log(mypoints)
 console.log(remove1points)
 console.log('2'+ 2)
 console.log(2+2)

 var train1 = ['wheat','barely','potato','sorghum','salt']
 console.log(train1[0])
 console.log(train1[1])
 console.log(train1[2])
 console.log(train1[3])
 console.log(train1[4])
 console.log(train1.length)
 
  
 let x= 100;
 let y = 0;
 let z = 1.3;
 function convertcurrency(){
        y = x*z
 }
    convertcurrency(x,y)
    console.log(y)
let user
console.log(user)
user = 'anna'
console.log(user)
var purchase1={
   shoes:100,
   statetax:1.2,
   totalprice: function(){
      var calculation = purchase1.shoes * purchase1.statetax
      console.log('total price:',calculation)
   }
}
purchase1.totalprice()

var bird={
   haswings: true,
   canfly: true,
   hasfeathers: true,
}
  var eagle1 = Object.create(bird)
  console.log('eagle1:',eagle1)
  console.log('eagel1 has wings:',eagle1.haswings)
  console.log('eagel1 canfly:',eagle1.canfly)
  console.log('eagel1 hasfeathers:',eagle1.hasfeathers)
  var pungine1= Object.create(bird)
  pungine1.canfly = false;
    console.log('pungine1:',pungine1)

const grades = [75,95,90,85,80,85]
let gradesum = 0
for(i=0;i< grades.length;i++){
   gradesum += grades[i]
}
console.log(gradesum/grades.length)
console.log(gradesum)
h2.innerText = 'this is h2 text'




























