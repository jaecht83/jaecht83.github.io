readme.md
<!-- This is the documentation of how I did my testing -->

<!-- $ npm init -y
Wrote to C:\Users\WeCanCodeIT\wcci\code\jaecht83.github.io\package.json:
(got the files loaded and the package.json created using the one w/the node modules)

 ./node_modules/jest/bin/jest.js --init

The following questions will help Jest to create a suitable configuration for your project

? Would you like to use Jest when running "test" script in "package.json"? » (Y/n)y
√ Would you like to use Jest when running "test" script in "package.json"? ... yes
? Choose the test environment that will be used for testing » - Use arrow-keys. Return to submit.
√ Choose the test environment that will be used for testing » jsdom (browser-like)
? Do you want Jest to add coverage reports? » (y/N)y
√ Do you want Jest to add coverage reports? ... yes
? Automatically clear mock calls and instances between every test? » (y/N)y
√ Automatically clear mock calls and instances between every test? ... yes

✏️  Modified C:\Users\WeCanCodeIT\wcci\code\jaecht83.github.io\package.json

📝  Configuration file created at C:\Users\WeCanCodeIT\wcci\code\jaecht83.github.io\jest.config.js


✏️  Modified C:\Users\WeCanCodeIT\wcci\code\jaecht83.github.io\package.json

📝  Configuration file created at C:\Users\WeCanCodeIT\wcci\code\jaecht83.github.io\jest.config.js

}  

I was able to properly set up the config file. I then used a video for help on running each test, then ran npm test at the bash command line. 

I first used an example test to get used to the idea of testing.
const functions = require ('./functions');

test('Adds 2 _2 to equal 4',()=>{
	expect(functions.add(2,2)).toBe(4);
})

It did not recognize it, as I had not created the static files with the js and test folders. I then put the app.js and apptest.js in the right folders. I did that and re-ran it but got the same error.

Next, I tried a second test with actual code in JS.

//tried second test to see if it would work//
describe('app.jps', () => {
	describe('showSlides', () => {
		test('should show the slides in the carousel', () => {
		
			//Arrange we are testing to see if the slides (theActualSlides) are = showSlides class//
		const elem = document.getElementsByClassName('p'),
		showSlides = 'theActualSlides'
		
		//Act is showing the actual element of this being added to the class
		addClass(elem,'showSlides')
			
		//Assert that this slideIndex contains the function showSlides// 
		expect(elem.slideIndex.contains('showSlides')).toBeTruthy()			
		})
	})	

$ npm test

> jaecht83.github.io@1.0.0 test C:\Users\WeCanCodeIT\wcci\code\jaecht83.github.io
> jest

No tests found
In C:\Users\WeCanCodeIT\wcci\code\jaecht83.github.io
  7 files checked.
  testMatch: **/__tests__/**/*.js?(x),**/?(*.)+(spec|test).js?(x) - 0 matches
  testPathIgnorePatterns: \\node_modules\\ - 7 matches
Pattern:  - 0 matches
npm ERR! Test failed.  See above for more details.

-->


