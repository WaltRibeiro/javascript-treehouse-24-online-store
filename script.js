// https://teamtreehouse.com/library/useful-array-methods

/* var inStock = [ 'apples', 'eggs', 'milk', 'cookies', 'cheese', 'bread', 'lettuce', 'carrot', 'broccoli', 'pizza', 'potato', 'crackers', 'onion', 'tofu', 'frozen dinner', 'cucumber'];
var search;

function print(message) {
  document.write( '<p>' + message + '</p>');
}

while (true) {
    search = prompt("Search for a product in our store. Type 'list' to show all of the produce and 'quit' to exit");
      search = search.toLowerCase();
      if (search === 'quit') {
       break;   
      } else if ( search === 'list') {
        print(inStock.join(', ') );
      } else {
        if ( inStock. indexOf( search ) > -1) {
          print( 'Yes, we have ' + search + 'in the store');
        } else {
          print( search + ' is not in stock.');
        }
      }
} */

function print(message) {
  var capture1 = document.getElementById('idee');
  capture1.innerHTML = message  
}

for (var i = 0; i < students.length; i += 1) {
  student = student[i];
  message += '<h2>Student: ' + student.name + '</h2>';
}