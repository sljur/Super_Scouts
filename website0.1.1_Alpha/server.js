// first draft of the server file using express node library to use static files.
// this version is complete with group creation without the use of a database.

// TODO: implementing a database is the next step for group creation.
// currently stores groups created so that they can be displayed and kept open after exiting.

// TODO: modify group creation process so whitespace can be present in a group name.

// TODO: Implement API support for messaging/posts for group communication.

// create the server and specify the port.
const express = require( 'express' );
const server = express();
var PORT = 80;

// connect static files to eachother inside of the public directory
server.use( express.static( 'public' ) );

// group storage (this is where we will implement a datastructure to handle group features)
const storedGroups = {};

// group creation process
server.get('/makeGroup', ( request, response ) =>
{
  // collect the group name the user entered.
  const groupName = request.query.groupName;

  // validate user input before setting the group into storage
  const groupNameId = encodeURIComponent( groupName );

  // set the group id to be the group name
  storedGroups[ groupNameId ] = { groupName: groupName };

  // generate the group as a json object
  response.json({ groupNameId: groupNameId });
});

// display group pages
server.get( '/groups/:groupNameId', ( request, response ) => 
{
  // collect the group id of the group being searched for from the client
  const groupNameId = request.params.groupNameId;

  // verify desired group has been previously registered
  if( storedGroups[ groupNameId ] ) 
  {
    // display the correct group page
    response.sendFile( __dirname + '/public/groupHome.html' );
  }
  // inform the user of an invalid input 
  else 
  {
    // TODO: add a failure to display page to replace error message
    response.status(404).send( 'Invalid name entry' );
  }
});

// This function is only used to indicate the server is running as expected.
server.listen(PORT, () =>
{
  console.log(`Running on port: ${PORT}`);
});