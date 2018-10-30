<!-- Testing process
I was able to set up the JSON packages properly and create the js.config file. I used the right command line involving the node_modules and dash-dash-init and got it to run.
I attempted to run a simple 2+2 test and it could not find it.

const functions = require('./functions');

test('Adds 2 + 2 to equal 4',() =>{
	expect(functions.add(2,2)).toBe(4);
});

The testing process was viewed here:

https://www.youtube.com/watch?v=7r4xVDI2vho

I then tried to use the javascript testing w/my code, using the example in class we did below, but changed the following:

const { 'collapsible' } = require ('../js/app.js')

describe('app.js', () => {
	describe('collapsible', () => {
		test('should add a class to a given element', () => {
		//Arrange
		const elem = document.getElementsByClassName('p'),
			classToAdd = 'collapsible'
		
		//Act
		addClass(elem,'collapsible')
			
		//Assert
		expect(elem.getElementsByClassName.contains('collapsible')).toBeTruthy()			
		})
	})	
})

I went to bash, ran "npm test" and they both failed. Am still researching this.
I then saw I had to put the app.js files and apptest.js files in the various folders, in static and test, respectively. I did that and ran the tests again, and failed. 

When I went to commit the changes, including the readme, it was spinning crazy in bash, so I deleted the "node_modules" folder, then recommitted and pushed the master. I was then able to add this readme via drag and drop to the master file. I had to also delete the json package and related files from the eclipse directory b/c it would not let me commit otherwise; it said it was running an instance of the application already. 