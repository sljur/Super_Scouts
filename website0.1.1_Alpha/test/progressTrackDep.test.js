// progressTrack.test.js

// Import CLasses: Badge & Milestone
import Badge from "./badge.js"
import Milestone from "./milestone.js"

// Import Progression Tracker Functions
import * as PT from "./progressTrackDep.js"

// Mock Object: Badge
jest.mock("./badge.js");

// Mock Testing: Clear all instances and calls to constructor and
//               all methods before each test
beforeEach(() =>
{
    Badge.mockClear();
});

// Random Number Function
function getRandInt(min, max)
{
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Test "createMilestone" function
test("ensures milestone object is created and is added to the milestone list", () =>
{
    let badgeList = [];
    let milestoneList = [];
    
    let sampleBadge = PT.createBadge("Test Title", "Test Description",
			             "SampleIcon.jpg", badgeList, null);

    let sampleMilestone = new Milestone("Test Title", "Test Description",
					sampleBadge, "Test Member");
    let newMilestone = PT.createMilestone("Test Title", "Test Description",
					  sampleBadge, "Test Member", milestoneList,
					  null, null);

    // Ensures constructor for badge is called only one time here
    expect(Badge).toHaveBeenCalledTimes(1);

    // Ensures created milestone matches sample one
    expect(newMilestone).toMatchObject(sampleMilestone);

    // Ensures created milestone is correctly added to list
    expect(milestoneList[0]).toBe(newMilestone);
});

// Test "getMilestonesOfMember" function
test("ensures correct milestones of certain member are grabbed from milestone list", () =>
{
    let badgeList = [];
    let milestoneList = [];
    let numMilestones = 10;
    let milestoneCount = 0;

    let sampleBadge = PT.createBadge("Test Title", "Test Description",
			             "SampleIcon.jpg", badgeList, null);

    for (let curMIndex = 0; curMIndex < numMilestones; curMIndex++)
    {
	let curMemberNum = getRandInt(1, 5);
	PT.createMilestone("Test Title", "Test Description",
		           sampleBadge, "Member " + curMemberNum,
			   milestoneList, null, null);
    }

    for (let curMemberNum = 1; curMemberNum <= 5; curMemberNum++)
    {
	let curMemberMilestones = PT.getMilestonesOfMember("Member " + curMemberNum,
							   milestoneList);
	milestoneCount += curMemberMilestones.length;
	
	for (let curMIndex = 0; curMIndex < curMemberMilestones.length; curMIndex++)
	{
	    expect(curMemberMilestones[curMIndex].assignee).toMatch("Member " + curMemberNum);
	}
    }

    // NOTE: Test here ensures that only badge is created and is used for all
    //       of the milestones instead a copy being created each time
    expect(Badge).toHaveBeenCalledTimes(1);

    // All of the milestones tested should be all of the ones that were created
    expect(milestoneCount).toBe(numMilestones);
});
