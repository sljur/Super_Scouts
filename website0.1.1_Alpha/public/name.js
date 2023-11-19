// export the verification function for testing purposes
module.exports = { verifyInput };

// collect data from index.html
document.addEventListener( "DOMContentLoaded", () => 
{
  // read user entry from page
  const nameEntryForm = document.getElementById( "nameEntryForm" );

  // watch for user submission of group name
  nameEntryForm.addEventListener( "submit", ( event ) => 
  {
    // prevent the webpage from reloading and loosing the entered name
    event.preventDefault();
    const enteredName = document.getElementById( "groupName" ).value;

    // call the verification function to verify the group Url
    verifyInput(enteredName)
    // after group creation redirect the user to the correct group page
    .then( ( url ) => 
    {
      // set the url to the newly created group url
        window.location.href = url;
    });
  });

});

// name inpput verification function
function verifyInput(enteredName) 
{
  // validate the user input before group creation
  const validatedGroupName = encodeURIComponent(enteredName);
  // set the name validation flag
  nameValidationFlag = true;

  // tell the server to make the group
  return fetch(`/makeGroup?groupName=${validatedGroupName}`)
  // parse the server response as a json object
  .then(( response ) => response.json())
  // display a group page with the desired name
  .then(( data ) => 
  {
    // return the url to the newly created group page.
    return `/groups/${data.groupNameId}`;
  });
}
