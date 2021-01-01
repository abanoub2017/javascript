
var userDetails = {}

var allUsers = []
// Add User Function
 function addUser(event) {
    //  Remove the bahiver btn
     event.preventDefault();
    //  Store input value
    var name = document.getElementById('name')
    var email = document.getElementById('email')
    var mobile = document.getElementById('mobile')
    var password = document.getElementById('password')

    // Bind the input value in userDetails Object
    userDetails.name = name.value
    userDetails.email = email.value
    userDetails.mobile = mobile.value
    userDetails.password = password.value

    // Add User Details on Array
    allUsers.push(userDetails)

    // Looping
    var table = ''
    for (var user of allUsers) {
        table += `
            <tr>
                <td scope="row">${user.name}</td>
                <td>${user.email}</td>
                <td>${user.mobile}</td>
                <td>${user.password}</td>
            </tr>
        `
    }
    document.getElementById('tbody').innerHTML = table

    userDetails = {}
    name.value = ''
    email.value = ''
    mobile.value = ''
    password.value = ''
    

 }

//  Use Add Class and Remove Class
var changeStatus = false
function changeStyle(event) {
    event.preventDefault();
    changeStatus = !changeStatus
    var p = document.getElementById('p')
    
    if (changeStatus) {
        p.classList.add('style-p')
    } else {
        p.classList.remove('style-p')
    }
   
}

// Toggle Menu
function toggleMenu(event){
    event.preventDefault();
    var sideMenu =  document.getElementById('sideMenu')
    sideMenu.classList.toggle('hiden-menu')
}