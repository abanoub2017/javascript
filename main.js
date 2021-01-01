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



// Add User to Table
let userDetails = {}
let listUser = []

function addListUser(event){
  event.preventDefault()
    //   
    let name = document.getElementById('name');
    let email = document.getElementById('email');
    let mobile = document.getElementById('mobile');
    let password = document.getElementById('password');
    //   
    userDetails.name = name.value;
    userDetails.email = email.value;
    userDetails.mobile = mobile.value;
    userDetails.password = password.value;

    //
    listUser.push(userDetails)  
    
    // 
     let table = ''
      // your loop here
      for (var user of listUser) {
          table += 
            `
            <tr>
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>${user.mobile}</td>
                <td>${user.password}</td>
            </tr>

            `
      }
      document.getElementById('tbody').innerHTML = table
    

    // 
    console.log(listUser)
    console.log(userDetails)
    userDetails = {}
    name.value = ''
    email.value = ''
    mobile.value= ''
    password.value = ''
}

// Sec Ex (classList.remove)
var p = document.getElementById('p')
var changeStatus = false

function toggleColor(event) {
  event.preventDefault()
  changeStatus = !changeStatus
  if (changeStatus) {
    p.classList.add('mystyle')
    console.log('enter');
  } else {
    console.log('out');
    p.classList.remove('mystyle')
  }  
}


// Therd Ex (Side menu)
var menu = document.getElementById('menu')
var changeMenu = false

function toggelMenu(event) {
  event.preventDefault()
  menu.classList.toggle('show')
}