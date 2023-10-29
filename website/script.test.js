function main() {
    // initialize variables
    var pageData;
    var groupData;
    var groupName;

    // search the page data for the user submission
    pageData = window.location.search;

    // set the user submission to a variable
    groupData = new URLSearchParams(pageData);

    // set the group name to a variable
    groupName = groupData.get("group-Name");

    // check for a user entry of not null
    if(groupName)
    {
        // set the group display name
        document.getElementById("group").innerHTML = groupName;
        // set the group homepage title with chosen name
        document.getElementById("titleName").innerHTML = "SuperScouts: " + groupName; 
    }
    // otherwise default user input to myGroup
    else
    {
        // set the display name to the default value
        document.getElementById("group").innerHTML = "myGroup";
        // set the group homepage title to default value
        document.getElementById("titleName").innerHTML = "SuperScouts: myGroup";
    }
}

// test code
describe("Main Function", () =>
{
    // set mock DOM values for testing name change values
    beforeAll(() =>
    {
        // create a "group" and a "titleName" within the DOM
        document.body.innerHTML = '<div id="group"></div>' +
                                '<div id="titleName"></div>';
    });

    it('should update group and titleName elements with the expected values', () => 
    {
        // run group function
        main();

        // initialize variables
        var groupName;
        var pageTitle;

        // set expected value variable SPECIFIC TO TEST CODE
        var expectedTestName = "myGroup";

        // set the intended group name
        groupName = document.getElementById("group");

        // set the intended group title
        pageTitle = document.getElementById("titleName");

        // assert what the value will be at function completion with the expected values
        expect(groupName.innerHTML).toBe(expectedTestName);
        expect(pageTitle.innerHTML).toBe("SuperScouts: " + expectedTestName);
    });
});