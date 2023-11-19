// progressTrack.js

// Import Classes: Milestone & Badge
import {Milestone} from "./milestone.js"
import {Badge} from "./badge.js"

// Sample Icon List
const SAMPLE_ICONS = ["SampleIcon.jpg"];

const MILESTONE_LIST_DOC = document.querySelector("#PT_MilestoneList");

const MILESTONE_OPT_CREATE_TITLE = document.querySelector("#mCreateTitle");
const MILESTONE_OPT_CREATE_DESC = document.querySelector("#mCreateDesc");
const MILESTONE_OPT_CREATE_BSELECT = document.querySelector("#mAssignBadge");
const MILESTONE_OPT_CREATE_MEMBER = document.querySelector("#mAssignMember");

const MILESTONE_OPT_REMOVE_SEL = document.querySelector("#mRemoveSel");

const BADGE_OPT_CREATE_TITLE = document.querySelector("#bCreateTitle");
const BADGE_OPT_CREATE_DESC = document.querySelector("#bCreateDesc");
const BADGE_OPT_CREATE_ICON = document.querySelector("#bAssignIcon");

const BUTTON_MILESTONE_CREATE = document.querySelector("#ButtonCreateMilestone_Submit");
const BUTTON_MILESTONE_REMOVE = document.querySelector("#ButtonRemoveMilestone_Submit");
const BUTTON_BADGE_CREATE = document.querySelector("#ButtonCreateBadge_Submit");

let badgeList = [];
let milestoneList = [];

function createBadge(bTitle, bDesc, bIcon)
{
    // Create new badge based on given data
    let newBIcon = "Icons/" + bIcon;
    let curBadge = new Badge(bTitle, bDesc, newBIcon);

    // Add badge to badge list
    badgeList.push(curBadge);

    // Update badge options
    displayBadgeOptions();

    // Return the create badge
    return curBadge;
}

function createMilestone(mTitle, mDesc, mBadge, mMember)
{
    // Create milestone based off of given parameters
    let curMilestone = new Milestone(mTitle, mDesc, mBadge, mMember);

    // Add milestone to list
    milestoneList.push(curMilestone);

    // Refresh milestone display
    displayMilestones();

    // Return the milestone
    return curMilestone;
}

function createSamples()
{
    // Create a sample badge
    let sampleBadge = createBadge("Test Badge Title",
				  "Test Badge Description",
				  "SampleIcon.jpg");

    // Create a sample milestone
    let sampleMilestone = createMilestone("Test Milestone Title",
					  "Test Milestone Description",
					  sampleBadge,
					  "Test Milestone Member");
}

function displayBadgeOptions()
{
    // Declare & Initialize variables
    let badgeOptsHTML = "";
    let curBadge;
    
    // Loop through each badge available
    for (let bIndex = 0; bIndex < badgeList.length; bIndex++)
    {
	// Assign current badge
	curBadge = badgeList[bIndex];

	// Add badge information to be displayed
	badgeOptsHTML += curBadge.displayOptFormat();
    }

    // Display badge options
    MILESTONE_OPT_CREATE_BSELECT.innerHTML = badgeOptsHTML;
}

function displayIconOptions()
{
    // Declare & Initialize variables
    let iconOptsHTML = "";
    let curIcon;
    
    // Loop through all available icons in list
    for (let iconIndex = 0; iconIndex < SAMPLE_ICONS.length; iconIndex++)
    {
	// Assign current icon location
	curIcon = SAMPLE_ICONS[iconIndex];

	// Add current icon as an available option
	iconOptsHTML += "<option value=\"" + curIcon + "\">" + curIcon + "</option>";
    }

    // Display icon options
    BADGE_OPT_CREATE_ICON.innerHTML = iconOptsHTML;
}

function displayMilestoneOptions()
{
    // Declare & Initialize variables
    let milestoneHTML = "";
    let curMilestone;
    
    // For every milestone in list
    for (let mIndex = 0; mIndex < milestoneList.length; mIndex++)
    {
	// Assign current milestone
	curMilestone = milestoneList[mIndex];
	
	// Add milestone title to be displayed
	milestoneHTML += curMilestone.displayOptFormat();
    }

    // Display milestone option
    MILESTONE_OPT_REMOVE_SEL.innerHTML = milestoneHTML;
}

function displayMilestones()
{
    // Declare & Initialize variables
    let milestoneHTML = "";
    let curMilestone;
    
    // For every milestone in list
    for (let mIndex = 0; mIndex < milestoneList.length; mIndex++)
    {
	// Assign current milestone
	curMilestone = milestoneList[mIndex];
	
	// Add milestone information to be displayed
	milestoneHTML += curMilestone.displayListFormat();
    }

    // Display milestone information in HTML
    MILESTONE_LIST_DOC.innerHTML = "<h2>Milestone List</h2>" + milestoneHTML;

    // Refresh milestone options
    displayMilestoneOptions();
}

function getBadgeByTitle(bTitle)
{
    // Declare & Initialize variables
    let curBadge;
    
    // Loop through each badge in badge list
    for (let bIndex = 0; bIndex < badgeList.length; bIndex++)
    {
	// Assign current badge
	curBadge = badgeList[bIndex];
	
	// Check if current badge title matches
	if (curBadge.title === bTitle)
	{
	    // Return current badge
	    return curBadge;
	}
    }

    // TODO: Implement no badge return or error message
}

function getMilestoneIndexByTitle(givTitle)
{
    // Declare & Initialize variables
    let curMilestone;
    
    // For every milestone in list
    for (let mIndex = 0; mIndex < milestoneList.length; mIndex++)
    {
	// Assign current milestone
	curMilestone = milestoneList[mIndex];

	// Check if current milestone matches title
	if (curMilestone.title === givTitle)
	{
	    // Return current milestone's index
	    return mIndex;
	}
    }

    // TODO: Implement no badge return or error message
}

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

function userCreateBadge()
{
    // Assign user values to variables
    let userTitle = BADGE_OPT_CREATE_TITLE.value;
    let userDesc = BADGE_OPT_CREATE_DESC.value;
    let userIcon = BADGE_OPT_CREATE_ICON.value;

    // Check that the values are not default and TODO: title is not already in list
    if (userTitle !== "" && userDesc !== "")
    {
	// Create milestone based off user inputs
	createBadge(userTitle, userDesc, userIcon);
    }
    
    // TODO: Implement feedback for incorrect input
}

function userCreateMilestone()
{
    // Assign user values to variables
    let userTitle = MILESTONE_OPT_CREATE_TITLE.value;
    let userDesc = MILESTONE_OPT_CREATE_DESC.value;
    let userBadge = getBadgeByTitle(MILESTONE_OPT_CREATE_BSELECT.value);
    let userMember = MILESTONE_OPT_CREATE_MEMBER.value;

    // Check that the values are not default
    if (userTitle !== "" && userDesc !== "" && userMember !== "")
    {
	// Create milestone based off user inputs
	createMilestone(userTitle, userDesc, userBadge, userMember);
    }
    
    // TODO: Implement feedback for incorrect input
}

function userRemoveMilestone()
{
    // Assign user values to variables
    let userMilestoneSel = MILESTONE_OPT_REMOVE_SEL.value;

    // Acquire index of selected milestone
    let milestoneIndex = getMilestoneIndexByTitle(userMilestoneSel);

    // Remove user's selectedd milestone
    removeMilestone(milestoneIndex);
}

function removeMilestone(mRemoveIndex)
{
    // Remove milestone from list
    milestoneList.splice(mRemoveIndex, 1);

    // Refresh milestone display
    displayMilestones();
}

BUTTON_MILESTONE_CREATE.addEventListener("click", userCreateMilestone);
BUTTON_MILESTONE_REMOVE.addEventListener("click", userRemoveMilestone);
BUTTON_BADGE_CREATE.addEventListener("click", userCreateBadge);

displayIconOptions();
createSamples();
