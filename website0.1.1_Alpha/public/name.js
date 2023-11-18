// script file that serves the user entered name to the server for storage and display


// collect data from index.html
document.addEventListener( 'DOMContentLoaded', () => 
{
  // read user entry from page
  const nameEntryForm = document.getElementById( "nameEntryForm" )

  // watch for user submission of group name
  nameEntryForm.addEventListener( "submit", ( event ) => 
  {
    // prevent the webpage from reloading and loosing the entered name
    event.preventDefault();
    const enteredName = document.getElementById( "groupName" ).value;
    // validate the user input before groupo creation
    const validatedGroupName = encodeURIComponent( enteredName );

    // tell the server to make the group
    fetch( `/makeGroup?groupName=${validatedGroupName}` )
      // parse the server response as a json object
      .then( response => response.json() )
      // display a group page with the desired name
      .then( data => 
      {
        // after group creation redirect the user to the correct group page
        window.location.href = `/groups/${ data.groupNameId }`;
      })
  });
});
