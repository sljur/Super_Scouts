// progressTrack.test.js

// Import CLasses: Badge & Milestone
import Badge from "./badge.js"
import Milestone from "./milestone.js"

// Import Progression Tracker Functions
import * as PT from "./progressTrackDep.js"

// Test "createBadge" function
test("ensures badge object is created and is added to the badge list", () =>
{
    let badgeList = [];
    
    let sampleBadge = new Badge("Test Title", "Test Description",
				"Icons/SampleIcon.jpg");
    let newBadge = PT.createBadge("Test Title", "Test Description",
			          "SampleIcon.jpg", badgeList, null);

    // Ensures created badge matches sample one
    expect(badgeList[0]).toMatchObject(sampleBadge);

    // Ensures created badge is correctly added to list
    expect(badgeList[0]).toBe(newBadge);
});
