// There are many ways to manipulate arrays.

//   One common task is filtering arrays to only contain certain values.

//   For this we can use the .filter() method.

//   Here is an example:

//      var pets = ['cat', 'dog', 'elephant'];

//      var filtered = pets.filter(function (pet) {
//        return (pet !== 'elephant');
//      });

//   The filtered variable will now only contain cat and dog.

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var filtered = numbers.filter(function evenNumbers(number) {
	return number % 2 === 0 ;
});
console.log(filtered);