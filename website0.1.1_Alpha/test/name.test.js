// import the form verification function from the name file
const { verifyInput } = require('./name');

// mimic the fetch function to simulate communication with the server
global.fetch = jest.fn(() => Promise.resolve({ json: () => ({ groupNameId: "testName" }) }));

// test 1
test( "Check for the names flag to be set to true after the name has been set", async () => 
{
  // create a mock object of the name entry form
  const nameEntryForm = document.createElement( "form" );
  nameEntryForm.id = 'nameEntryForm';
  // set the test input value
  const inputName = document.createElement( "input" );
  inputName.id = "groupName";
  inputName.value = "testInput";
  // input the test data into the mock form
  nameEntryForm.appendChild( inputName );

  // process the name input and update the flag
  await verifyInput( "testInput" );

  // verify correct output
  expect( nameValidationFlag ).toBe( true );
});

// test 2
test('should return correct URL with enteredName equal to data.groupNameId', async () => 
{
  // create a mock object of the name entry form
  const nameEntryForm = document.createElement( "form" );
  nameEntryForm.id = 'nameEntryForm';
  // set the test input value
  const groupNameInput = document.createElement( "input" );
  groupNameInput.id = 'groupName';
  groupNameInput.value = "testInput";
  // input the test data into the mock form
  nameEntryForm.appendChild( groupNameInput );

  // process the name input
  const groupPageUrl = await verifyInput( "testInput" );

  // check that the entered name was properly set as the groupId
  expect( groupPageUrl ).toBe( "/groups/testName" );
});
