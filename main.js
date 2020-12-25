// String
//  var test = 'test',
//      test2 = "test2"


// //  Array (0,1,2,3)
//  var cars = ['BMW','Volo' , 'New car']
//  console.log(cars);
// //  Length (1,2,3,4)
//  console.log(cars.length);
// // Acces any value by index
// console.log(cars[0]);

// // Remove last elemnt on array
// cars.pop()
// console.log(cars);

// // Remove First element on array
// console.log(cars.shift());
// console.log(cars);

// //  Add new element to Array
// cars.push('Toyta')
// console.log(cars);


// Join Array
// var listUser = ['ahmed' , 'khaled' , 'rehab']
//  document.getElementById('demo').innerHTML = listUser.join(' ')

//     var userDetails = {
//         firstName : "Omina",
//         age : 25
//     }

//     listUser.push(userDetails.firstName)

//     console.log(listUser);


// Ex

//  concat (Merge between two arrays)
//   var firstArray = [1 , 2 , 3]
//   var secArray = [4 , 5 , 6]

//   var fullArray = firstArray.concat(secArray)

//   console.log(fullArray);

// For Loop
// for
// var listUsers = ['Ahmed', 'Othman', 'Omina', 'Rehab', 'nada']
// var text = ''
// for (var i = 0; i < listUsers.length; i++) {
//     text += listUsers[i]
// }
// document.getElementById('demo').innerHTML = text

// IF condation
var userList = [
    {
        firstName: 'Abanoub',
        age: 28,
        role: 'admin'
    },
    {
        firstName: 'Abanoub',
        age: 28,
        role: 'user'
    }
]

for (var user of userList) {
   console.log(user.role);
}

var listOfNewUser = []

function generalAddUser(){
    var item = ''
    for(x of listOfNewUser){
        item += `<p>${x} </p> `
    }
    document.getElementById('userName').innerHTML = item
}
function addUser(){
  var test =  document.getElementById('inputFiled').value
  
    document.getElementById('userName').innerHTML = test
    // make empty after add 
    document.getElementById('inputFiled').value = ''
    // Add user
    listOfNewUser.push(test)
    // Loop and in html
    generalAddUser()
}
