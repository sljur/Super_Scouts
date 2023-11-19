// exported data from server file
const request = require( "supertest" );
const { server } = require('./server');
const { PORT } = require('./server');

// describe the test suites
describe("Server file tests", () => 
{
    // test the port
    test("Verify the server is running on port 80", () =>
    {
        //check for the correct port being used
        expect( PORT ).toBe( 80 );
    });

    // test the groupNameId to be set to the correct value
    test('should set groupNameId to be equal to groupName', async () => 
    {
        // create a test name
        const groupName = 'TestGroup';

        // run the /makeGroup process to set a test id
        const response = await request( server )
        .get('/makeGroup')
        .query({ groupName: groupName })

        // test for correct id being set
        expect( response.body.groupNameId ).toBe( encodeURIComponent( groupName ) );
    });

    // test that an invalid name entry results in a error
    test( "invalid name entries should be rejected", async () => 
    {
        // create a test invalid name
        const invalidName = "test group";

        // ask the server to check for the invalid name as an id
        const response = await request ( server )
        .get( `/groups/${invalidName}` )
        // check for error
        .expect( 404 )

    });
});
