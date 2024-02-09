NPM -> Package Manager

package.json -> Configiration for NPM it keep track on what version package install in system

package-lock.json -> Keep track on all the exact version of Dependencies

node_modules -> Database for those Dependencies Dependency Management

Bundlers ->  A bundler is a tool that takes all your JavaScript code, along with any other assets like CSS or images, and combines them into a single file (or a few files) that can be served to the browser.

Dependencies -> Dev Dependencies, Normal Dependencies

~version “Approximately equivalent to version”, will update you to all future patch versions, without incrementing the minor version. ~1.2.3 will use releases from 1.2.3 to <1.3.0.

^version “Compatible with version”, will update you to all future minor/patch versions, without incrementing the major version. ^1.2.3 will use releases from 1.2.3 to <2.0.0.

whatever you regenerate dont push it on git // node_module

gitignore - contain file that dont need to go on git

NPX -> The primary purpose of npx is to execute Node.js packages. It allows you to run Node.js-based tools and scripts without having to install them globally on your system.

Parcel =>
	Dev Build
	Local Server
	HMR => Hot Module Replacement
	File Watching Algorthm - Written in C++
	Caching - faster builds
	Image Optimization
	Minification
	Bundling
	Compress
	Consistent Hashing
	Code Splitting
	Differential Bundling - Support older browers
	Diagnostic
	Error Handling
	HTTPs
	Tree Shaking - remove unused code
	Dev & Prod

Core React =>
	
	React.createElement -> ReactElement(JS Object) -> HTMLElement(render)

JSX => 
	JSX is not HTML inside JS. HTML like Syntax

	JSX (transplied before it reaches the JS) - Parcel -> Babel is a JS compiler

	JSX -> React.createElement -> ReactElement(JS Object) -> HTMLElement(render)

React Functional Component =>

	Function return some peice of JSX

props =>

	passing props to the components is just like passing agument to the function
	when you want to pass dynamic data to component pass it as props

Confic Driven UI 

	Controling UI using data

Two types of Export/Import =>

  -> Default Export/Import
	export default Component;
	import Component from "path";

  -> Named Export/Import
	export const Component; 
	import (Component) from "path";	

useState() => 
	
	it is use to create local state veriable inside functional component.
	whenever you change local state variable react rerender the component.
	
Reconciliation Algorithm (Fiber as a Reconciliation Algorithm) =>

	The core of React Fiber involves reconciling the virtual DOM tree with the actual DOM tree. The algorithm determines the minimal set of changes needed to update the UI efficiently.	

Monolithic Architecture =>

		Definition: In a monolithic architecture, the entire application is developed as a single, tightly integrated unit. All components and modules are interconnected and depend on each other.

Microservices Architecture =>

		Definition: Microservices architecture is an approach where an application is divided into a collection of small, independent services, each running in its own process and communicating with lightweight mechanisms such as HTTP APIs.

useEffect() => 

	dependency array changes the behaiver or its render.

	if no dependency array -> useEffect is called on every render
	if dependency array is empty=[] -> useEffect is called on initial render (just once)
	if dependency array is [btnNameReact] -> called everytime btnNameReact is updated

Client-Side Routing =>

		In client-side routing, the routing logic is handled on the client (in the user's browser) using JavaScript.

		When a user clicks on a link or enters a URL, the browser updates the URL and uses JavaScript to manipulate the DOM (Document Object Model) to load the appropriate content without making a full page refresh.

		Client-side routing is commonly used in single-page applications (SPAs) where the initial HTML is loaded, and subsequent interactions are handled dynamically without fetching complete HTML pages from the server.

Server-Side Routing =>

		In server-side routing, the routing logic is handled by the server. When a user requests a new page, the server processes the request and returns the entire HTML page for that route.

		Each time the user navigates to a different part of the application, a new request is made to the server, and the server generates and returns the appropriate HTML page.

React Lifecycle Diagram => 

	https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/


// Chunking
// Code Splitting
// Dynamic Bundling
// lazy Loading
// on demand loading
// dynamix import

All the React application have two layers

	UI Layer   -> JSX - UI Layer is powered by data Layer
	Data Layer -> State , props, local variyable

Controled and UnControled Component

lifting state up
 
	 
Redux => 

	Store -> Big JS Object kept in global centeral place
		- Slices -> we can create multiple slices inside redux store
			    Eg : Cart Slice , Theme Slice

        Write Data =>

	    Button Clicked -> It Dispatch (Action) -> calls Reducer Fn() -> Update the Card Slice in Store

	Read Data => 

	   	Card Slice in Store -> Selector (Subscribing to the Store) -> Card Component Update	


	Write Reducer function corresponding to those action

	Never Subscribe to whole Store in Component . Subscribe to paticular Slice in Store

	  const cartItems = useSelector ((store) store.cart.items)) -> Correct Way

          const store=useSelector ((store) ⇒ store); -> Worng Way
          const cartItems = store.cart.items;

	Reducers -> reducer is the combination of small reducers

	Key Note => Use Selector and reducers , reducer very carefully
		

	Vanialla (older) Redux ⇒ DON'T MUTATE STATE
	const newState = [...state];
	newState.items.push(action.payload);
	return newState;

	Redux Toolkit - Immer liabery
	We HAVE to mutate the state


Type of Testing =>

	Unit Testing -> Testing one Component in isolation
	Integration Testing -> flow testing between component
	End to End Testing -> User flow in webpage from entering the site to leaving the site. 

	-> React Testing Library builds on top of DOM Testing Library by adding APIs for working with React components.

	-> Jsdom (browerlike) - runtime environment for jest

	-> __test__ Dunder method


	Whenever you testing UI component in React you will have to render the component on to the jsDom 
 
	Install @bable/preset-react - to  make  JSX  work  in  test  cases
	Include preset in bable config
	
	bable preset is convert JSX to HTML for pass test cases

	Install React Testing Library
	Installed jest
	Installed Babel dependencies
	Configure Babel
	Configure Parcel Config file to disable default babel transpilation
	Jest - npx jest --init
	Install jsdom library
	Install @babel/preset-react - to  make JSX  work in test cases
	Include @babel/preset-react inside my babel config
	npm i -D @testing-library/jest-dom

	console.log() -> return react element(JSX)

	-> Querying , Assertion

  "scripts": {
    "test": "jest",
    "watch-test": "jest --watch" 
  },

npm run watch-test

	whenever you have async fetch, state update in your component wrap component in act function. act fn returns a promise 

	Helper Functions => 
			beforeAll()
			beforeEach()
			afterAll()
			afterEach()
	






	
