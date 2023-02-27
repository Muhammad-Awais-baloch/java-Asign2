
//Chapter 14/16

// Question: 1
// console.log([]);


// Question: 2
// console.log([]);

// Question: 3
// var Array = ["Ali", "Apple"];
// document.write(Array);

// Question: 4
// var NumArray = [12 , 321, 0.45, 1.22];
// document.write(NumArray);

// Question: 5
// var BooleanArray = [true, false];
// document.write(BooleanArray);

// Question: 6
// var MixedArray = ["Yellow", "Red", 0.67, true, "Purple", 45, 1000];
// document.write(MixedArray);

// Question: 7
// var Qualify = ["Qualification", "<br/>", "1)SSC" ,"<br/>","2)HSC","<br/>","3)BCS","<br/>","4)BS","<br/>","5)BCOM","<br/>","6)MS","<br/>","7)M.PHIL","<br/>","8)PHD"]
// document.write(Qualify)

// Question: 8
// var StdName = ["Ali", "Noman", "Kamran"];
// var StdScore = [420, 360, 300];
// var total = 500;
// var AliPer= (StdScore[0]/total)*100;
// var NomanPer= (StdScore[1]/total)*100;
// var KamranPer= (StdScore[2]/total)*100;
// document.write("Score of"+" "+ StdName[0]+ " "+"is"+" "+ StdScore[0]+" "+".Percentage:"+" "+ AliPer +"%"+"<br/>");
// document.write("Score of"+" "+ StdName[1]+ " "+"is"+" "+ StdScore[1]+" "+".Percentage:"+" "+ NomanPer +"%"+"<br/>");
// document.write("Score of"+" "+ StdName[2]+ " "+"is"+" "+ StdScore[2]+" "+".Percentage:"+" "+ KamranPer +"%");

// Question: 9(a)
// var Colors = ["Black","Red","Green","Yellow"]
// Colors.splice(0,0,"Pink")
// document.write(Colors)

// Question: 9(b)
// var Colors = ["Black","Red","Green","Yellow"]
// Colors.splice(4,0,"Purple")
// document.write(Colors)

// Question: 9(c)
// var Colors = ["Black","Red","Green","Yellow"]
// Colors.splice(0,0,"Gray", "Orange")
// document.write(Colors)

// Question: 9(d)
// var Colors = ["Black","Red","Green","Yellow"]
// Colors.shift()
// document.write(Colors)

// Question: 9(e)
// var Colors = ["Black","Red","Green","Yellow"]
// Colors.pop()
// document.write(Colors)

// Question: 9(f)
// var Colors = ["Black","Red","Green","Yellow"]
// Colors.splice(2,0,"Blue")
// document.write(Colors)

// Question: 9(f)
// var Colors = ["Black","Red","Green","Yellow"]
// Colors.splice(2,0,"Blue")
// document.write(Colors)

// Question: 9(g)
// var Colors = ["Black","Red","Green","Yellow"]
// Colors.splice(1,2)
// document.write(Colors)

// Question: 10
// var StdScore = [420, 360, 300,1200, 10, 18, 190];
// StdScore.sort()
// document.write(StdScore)

// Question: 11
// var Cities = ["Karachi", "Pindi", "Lahore", "Kashmir" ,"Islamabad"];
// document.write("Cities Name:"+" "+ Cities +"<br/>")
// var SelectCities = Cities.slice([1,3])
// document.write("Selected Cities Name:"+" "+ SelectCities)

// Question: 12
// var Str1=["My"]
// var Str2=["Name"]
// var Str3=["Is"]
// var Str4=["Awais"]
// document.write(Str1 +" "+ Str2 +" "+ Str3 +" "+ Str4)

// Question: 13
// var Devices = ["Keyboard","Mouse","Printer","Monitor"]
// document.write("Devices:"+ Devices+"<br/>")
// for(i=0; i<Devices.length; i++){
//     document.write("Output:"+"<br/>"+Devices[i]+"<br/>");
// }

// Question: 14
// var Devices = ["Keyboard","Mouse","Printer","Monitor"]
// document.write("Devices:"+ Devices+"<br/>")
// for(var i= Devices.length-1; i>=0; i--){
//     document.write("Output:"+"<br/>"+Devices[i]+"<br/>");
// }

// Chapter 17-20
// Question: 3
// for(i=1; i<=10; i++){
//     document.write(i+"<br/>")
// }

// Question: 4
// var Table = prompt("Enter Table Number")
// var length =15;
// for(i=1; i<=length; i++){
//     document.write(Table+"X"+i+"="+Table*i+"<br/>")
// }

// Question: 5
// var fruits=["Apple", "Banana", "Kiwi", "Mango", "Grapes"]
// for(i=0; i<fruits.length; i++){
//     document.write("Element at index"+" "+i+" "+"is"+" "+fruits[i]+"<br/>")
// }

// Question: 6(a)
// for(i=1; i<=15; i++){
//     document.write(i+"<br/>")
// }

// Question: 6(b)
// var number=15;
// for(i=number; i>=0; i--){
//     document.write(i+"<br/>")
// }

// Question: 6(c)
// for(i=0; i<=20; i++){
//     document.write(i*2+"<br/>")
// }

// Question: 6(c)
// for(i=0; i<=19; i++){
//     var odd= 2*i+1
//     document.write(odd+"<br/>")
// }

// Question: 6(d)
// for(i=0; i<=10; i++){
//     document.write(i*2+"K"+" ")
// }

// Question: 7
//  var Bakery = prompt("Welcome to our Bakery. What Do you want Order Sir!");
//  var Items= ["Cake", " Butter", "Pastery", "Egg", "Bun", " Donut", "Milk"];
  
// //document.write(Items)

// var isMatch = false

// for (var i = 0; i < Items.length; i++) {
//        if (Items[i] === userInput) {
//              isMatch = true
//              document.write(userInput + " " + "is avaiable at index " + i + " in our bakery <br />")
//              break;
//          }
//      }
    
//      if (isMatch === false) {
//          document.write("We are sorry")
//      }
    

// Question: 8
// LARGEST number
// var num = [24, 53, 78, 91, 12, ]
// var temp = 0


// for (var i = 0; i < num.length; i++) {
//     if (temp < num[i]) {
//         temp = num[i]
//     }
// }

// console.log("largest value of num array is ", temp)



//Question: 10

//  SMALLEST NUMBER
//  var num = [12, 53, 78, 91, 12]
//  var temp = num[0]

//  for (var i = 0; i < num.length; i++) {
//      if (temp > num[i]) {
//          temp = num[i]
//      }
//  }

// console.log("smallest value of num array is ", temp)


Question: 11

// for(var i = 0; i <= 100; i++){
//     document.write(plus+"<br/>")
// }







