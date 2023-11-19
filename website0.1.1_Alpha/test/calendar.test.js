//__mocks__/client.js

const { JSDOM } = require("jsdom");
const dom = new JSDOM()
global.document = dom.window.document
global.window = dom.window

function main()
{
// initialize variables
    var pageData;

   // search the page data for the event user submited
    pageData = window.location.search;

    // set the user submission to a variable
    eventData = new URLSearchParams(pageData);

    // set the event passed to the ID to a variable
    eventToAdd = eventData.get("list"); //might need to change ID name 

// check for a user entry not null
    if(eventToAdd)
    {
        // set the event 
        document.getElementById("list").innerHTML = eventToAdd; 
    } 
    else
    {
        // set the event to the default value
        document.getElementById("list").innerHTML = "myEvent"; 
    }  
    
//For adding and removing items from a list
function addEvent() 
{
    var eventToAdd = document.getElementById("list");
    var candidate = document.getElementById("candidate");
    var li = document.createElement("li");
    li.setAttribute('id', candidate.value);
    li.appendChild(document.createTextNode(candidate.value));
    eventToAdd.appendChild(li);
}

// Creating a function to remove item from list
function removeEvent() 
{
 
    // Declaring a variable to get select element
    var eventToRemove = document.getElementById("list");
    var candidate = document.getElementById("candidate");
    var item = document.getElementById(candidate.value);
    eventToRemove.removeChild(item);
}

}


// test code
describe("Main Function", () =>
{
    // set mock DOM values for testing name change values
    beforeAll(() =>
    {
        // create a "list" and a "input text" within the DOM
        document.body.innerHTML = '<div id="list"></div>';
        //document.body.innerHTML = '<div id="candidate"></div>';
    });

    it('should show whats added to the list', () => 
    {
        // run add and remove functions
        main();

        // initialize variables
        var eventToAdd;

        // set expected value variable SPECIFIC TO TEST CODE
        var expectedEventName = 'myEvent';

        // set the intended group name
        eventToAdd = document.getElementById("list");

        // assert what the value will be at function completion with the expected values
        expect(eventToAdd.innerHTML).toBe(expectedEventName);
        
    });
    
    it('should show what can be removed from the list', () => 
    {
        // run add and remove functions
        main();

        // initialize variables
        var eventToRemove;

        // set expected value variable SPECIFIC TO TEST CODE
        var expectedEventName = 'myEvent';

        // set the intended group name
        eventToRemove = document.getElementById("list");

        // assert what the value will be at function completion with the expected values
        expect(eventToRemove.innerHTML).toBe(expectedEventName);
        
    });
});
