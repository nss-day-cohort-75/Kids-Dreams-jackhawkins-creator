# Events and Debugging Assessment

Time to assess how well you have learned to use the debugging tools in Chrome Dev Tools, and writing click event listeners. This application is to show kids with illnesses and the memories the would like to make. Celebrities sign up to help kids make memories.

> 🧨 Make sure you answer the vocabulary and understanding questions at the end of this document before notifying your coaches that you are done with the project

## Event Listeners to Create

1. When the kid name is clicked, it should display their wish.
1. When the celebrity name is clicked, it should display their sport.
1. The pairings list should should contain the pairing in the following format.
    ```html
    {child name} will be making memories with {celebrity name}, a {celebrity sport} star, by {child wish}
    ```

Below is an animation showing how the application should look when complete and how the event listeners should work.

<img src="./images/debugging-events-assessment.gif" width="700px">

## Setup

Your instruction team will provide a link for you to create your assessment repository. Once your repo is created, clone it to your machine.

1. Make sure you are in your `workspace` directory.
1. `git clone {github repo SSH string}`.
1. `cd` into the directory it creates.
1. `code .` to open the project code.
1. Use the `serve` command to start the web server.
1. Open the URL provided in Chrome.

Make sure your Developer Tools are open at all times while working on this project. Use the messages provided in the Console to determine what code needs to be fixed or implemented, and use breakpoints in the Sources tab to step through your code as you debug.

## Vocabulary and Understanding

Before you click the "Complete Assessment" button on the Learning Platform, add your answers below each question and make a commit.

1. When a child is clicked on in the browser, which module contains the code that will execute on that event happening? Can you explain the algorithm of that logic?
   > That code is in the Kids.js module. Specifically, it's the event listener (which starts on line 16). In this event listener, we have it set to run when the user clicks a child from the children list in the browser. How do we know that the user is clicking a child? Simple - we first store the value of the element we clicked in our constant “itemClicked”. Next, we run an “if” statement to see if itemClicked’s “type” data attribute matches the one written in our child list item element (in our case, the type we’re looking for is “child”). Once we know that a child element was clicked, we can pull the child’s id number with the “id” data attribute and store it in the constant “kidId”. Lastly, we run a “for” loop to iterate through child objects in the “children” array (this array was copied and imported from database.js). If the child object’s id matches the clicked child’s id, then we output a window alert message which includes both the child’s name and their wish.
2. In the **Pairings** module, why must the `findCelebrityMatch()` function be invoked inside the `for..of` loop that iterates the kids array?
   > It’s necessary to run findCelebrityMatch() inside our loop because we need it to find each celebrity object who matches each iterated kid object. If we didn’t invoke findCelebrityMatch() inside our loop, we wouldn’t be able to insert the name of the celebrity whose id matches a certain child’s “celebrityId” key. We essentially have a “for” loop function - findCelebrityMatch() - nested inside a “for” loop - the kids array iteration.
3. In the **CelebrityList** module, can you describe how the name of the sport that the celebrity plays can be displayed in the window alert text?
   > This process is mostly identical to what was described in question one. We add a click event listener to run whenever a celebrity list item element is clicked (i.e., any elements with the “celebrity” data type attribute). We then store that clicked element’s id in the constant “celebId” and create a for loop to iterate through celebrity objects from our copied celebrity array. Once we find a celebrity object whose id matches our clicked item’s id, we output a message that includes both our celebrity’s name and their sport.
4. Can you describe, in detail, the algorithm that is in the `main` module?
   > It’s probably easiest to describe main.js’s purpose by breaking it down into four parts. (1) We import our HTML text from other modules - Kids.js, CelebrityList.js, and Pairings.js. (2) We select where to display that HTML text. The querySelector() method locates the first element in our index.html module that has an id equal to ”container”. It’s within this element that we will display our text. (3) We put together our HTML text, including our three functions which output our three lists. (4) We render the HTML to the DOM by using the innerHTML property.
