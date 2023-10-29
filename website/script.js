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

    // check for group entry of not null
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

// main function call
main();
