    // String
        var stringValue = 'String' // Single Quote
        var stringValue2 = "String 2" // double Quote
        var stringValue3 = "'String 3'" 

    // String Methos 
        var newValueString = 'Hello world to world'
     
        //  document.getElementById('demo').innerHTML = newValueString.length // 1,2,3,3
        //  document.getElementById('demo').innerHTML = newValueString.indexOf('world') // 0,1,2,3,4
        //  document.getElementById('demo').innerHTML = newValueString.lastIndexOf('world') // 0,1,2,3,4

    /***************************    Arrays   ******************************************/

    var cars = ['BMM', 'Volvo' , 'Kiya']

    console.log(cars); // list all cars
    console.log(cars[0]); // car by index 0,1,2,3

    cars[0] = 'new car' // change name of elemet on array

    console.log(cars.length); // lenght

    // Array Methods 
        var listName = ['Ahmed' , 'omia' , 'rehab' , 'mohmed']
     //Push
        listName.push('Ali')
        document.getElementById('demo').innerHTML = listName
    // Join
        document.getElementById('demo').innerHTML = listName.join('*') // add * between every elemet
    //pop
        listName.pop()
        document.getElementById('demo').innerHTML = listName // remove last element
    // shif
        listName.shift()
        document.getElementById('demo').innerHTML = listName // remove first element
    // concat (Merge to Array)
     var firstList =['one' , ' two' , 'three']
     var secList =['four' , ' five' , 'six']
     var merge = firstList.concat(secList)
     console.log(merge);
     document.getElementById('demo').innerHTML = merge.join(' ')

     /***************************    For Loop   ******************************************/

      // For loop  For Array (old way)
       var cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
       var text = ''
       var i;

        for(i = 0 ; i < cars.length ; i++) {
            // console.log(cars[i]);
            text += cars[i] +  '</br>'
        }
        document.getElementById('demo').innerHTML =  text

     // For Of for Array (new way)
      for ( var car of cars) {
          console.log(car);
      }
    //  For in for Object (new way)
     var newObj = {firstName:'test' , age:55}
     for(var x in newObj){
         console.log(x);  // print Kye
         console.log(newObj[x]); // print value
     }

    /***************************    If Condation   ******************************************/
      //  If condation  
        var age = 25
        if ( age < 20) {
            console.log('You are young');
        } else if(age > 25) {
            console.log('you are good');
        }  else{
            // alert('what your age')
        }
    // new way
      age < 20 ? console.log('You are young') : console.log( 'you are good');

    /******   Ex     *****/
   
    var userInfo = {}

    function addUser(){
        var firstName = document.getElementById("firstName").value
        var lastName = document.getElementById("lastName").value

        userInfo.firstname = firstName
        userInfo.lastName = lastName
    }

