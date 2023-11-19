// progressTrack.test.js
/* NOTE: Testing with JEST won't allow functions and class to be imported as
         modules; therefore they must be manually put in this file
*/

let badgeList = [];
let milestoneList = [];

// Badge class
class Badge
{
    constructor(title, desc, icon)
    {
	this.title = title;
	this.desc = desc;
	this.icon = icon;
    }

    displayOptFormat()
    {
	return "<option value=\"" + this.title + "\">"
	    + this.title + "</option>";
    }
}

// Milestone class
class Milestone
{
    constructor(title, description, badge, assignee)
    {
	// Assign attributes to given parameters
	this.title = title;
	this.description = description;
	this.badge = badge;
	this.assignee = assignee;
	this.hasCompleted = false;
    }

    getTitle() {return title};
    getDescription() {return description;}

    closeMilestone() {hascompleted = true;}

    reassignMember(givAssignee)
    {
	// Check if given member is not current member
	if (assignee !== givAssignee)
	{
	    // Assign new member
	    this.assignee = givAssignee;

	    // Set completion to false
	    this.hasCompleted = false;
	}
    }

    displayListFormat()
    {
	return "<li class=\"PT_Milestone\"><h3>" + this.title +
	    "</h3><p class=\"Milestone_Desc\">" + this.description +
	    "</p><img src=\"" + this.badge.icon +
	    "\" /><p class=\"Milestone_Comp\">Completed: No</p></li>";
    }

    displayOptFormat()
    {
	return "<option value=\"" + this.title + "\">" + this.title + "</option>";
    }
}

// "createBadge" function
function createBadge(bTitle, bDesc, bIcon)
{
    // Create new badge based on given data
    let newBIcon = "Icons/" + bIcon;
    let curBadge = new Badge(bTitle, bDesc, newBIcon);

    // Add badge to badge list
    badgeList.push(curBadge);

    // Return the create badge
    return curBadge;
}

// "createMilestone" function
function createMilestone(mTitle, mDesc, mBadge, mMember)
{
    // Create milestone based off of given parameters
    let curMilestone = new Milestone(mTitle, mDesc, mBadge, mMember);

    // Add milestone to list
    milestoneList.push(curMilestone);

    // Return the milestone
    return curMilestone;
}

// "getMilestonesOfMember" function
function getMilestonesOfMember(mMember)
{
    // Declare & Initialize variables
    let milestonesMember = [];
    let curMilestone;
    
    // Loop through each milestone available
    for (let mIndex = 0; mIndex < milestoneList.length; mIndex++)
    {
	// Assign current milestone
	curMilestone = milestoneList[mIndex];
	
	// Check if their assigned member is same as given one
	if (curMilestone.assignee === mMember)
        {
	    // Add milestone to member milestone list
	    milestonesMember.push(curMilestone);
	}
    }
    
    // Return member milestone list
    return milestonesMember;
}

// Test "createBadge" function
test("ensures badge object is created and is added to the badge list", () =>
{
    let sampleBadge = new Badge("Test Title", "Test Description",
				"Icons/SampleIcon.jpg");
    let newBadge = createBadge("Test Title", "Test Description",
			       "SampleIcon.jpg");

    expect(newBadge).toStrictEqual(sampleBadge);
    expect(badgeList[0]).toBe(newBadge);
});

// Test "createMilestone" function
test("ensures milestone object is created and is added to the milestone list", () =>
{
    let sampleBadge = createBadge("Test Title", "Test Description",
			          "SampleIcon.jpg");

    let sampleMilestone = new Milestone("Test Title", "Test Description",
					sampleBadge, "Test Member");
    let newMilestone = createMilestone("Test Title", "Test Description",
				       sampleBadge, "Test Member");

    expect(newMilestone).toStrictEqual(sampleMilestone);
    expect(milestoneList[0]).toBe(newMilestone);
});

// Test "getMilestonesOfMember" function
test("ensures correct milestones of certain member are grabbed from milestone list", () =>
{
    milestoneList = [];

    let sampleBadge = createBadge("Test Title", "Test Description",
			          "SampleIcon.jpg");

    let newMilestone1 = createMilestone("Test Title", "Test Description",
					sampleBadge, "Member 1");
    let newMilestone2 = createMilestone("Test Title", "Test Description",
					sampleBadge, "Member 3");
    let newMilestone3 = createMilestone("Test Title", "Test Description",
					sampleBadge, "Member 2");
    let newMilestone4 = createMilestone("Test Title", "Test Description",
					sampleBadge, "Member 1");
    let newMilestone5 = createMilestone("Test Title", "Test Description",
				        sampleBadge, "Member 3");

    let member1Milestones = getMilestonesOfMember("Member 1");
    let member2Milestones = getMilestonesOfMember("Member 2");
    let member3Milestones = getMilestonesOfMember("Member 3");

    expect(member1Milestones).toStrictEqual([newMilestone1, newMilestone4]);
    expect(member2Milestones).toStrictEqual([newMilestone3]);
    expect(member3Milestones).toStrictEqual([newMilestone2, newMilestone5]);
});
