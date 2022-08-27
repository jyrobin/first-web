function sayHello() {
	//alert('Hello, World!');
	printRandom();
}

var count = 0;
function printRandom() {
  count++;
  console.log('Random: ', count, Math.random());
}