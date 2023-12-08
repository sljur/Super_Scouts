// progressTrack.js

// Import Classes: Milestone & Badge
import Milestone from "./milestone.js"
import Badge from "./badge.js"

import * as PT from "./progressTrackDep.js"

// Sample Icon List
const SAMPLE_ICONS = ["SampleIcon2.jpg", "SampleIcon3.jpg", "SampleIcon.jpg"];

// HTML Document Items
const MILESTONE_LIST_DOC = document.querySelector("#PT_MilestoneList");

const MILESTONE_INFO = document.querySelector("#PT_Info ul");

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
	PT.createBadge(userTitle, userDesc, userIcon, badgeList,
		       MILESTONE_OPT_CREATE_BSELECT);
    }
    
    // TODO: Implement feedback for incorrect input
}

function userCreateMilestone()
{
    // Assign user values to variables
    let userTitle = MILESTONE_OPT_CREATE_TITLE.value;
    let userDesc = MILESTONE_OPT_CREATE_DESC.value;
    let userBadge = PT.getBadgeByTitle(MILESTONE_OPT_CREATE_BSELECT.value, badgeList);
    let userMember = MILESTONE_OPT_CREATE_MEMBER.value;

    // Check that the values are not default
    if (userTitle !== "" && userDesc !== "" && userMember !== "")
    {
	// Create milestone based off user inputs
	PT.createMilestone(userTitle, userDesc, userBadge, userMember, milestoneList,
			   MILESTONE_LIST_DOC, MILESTONE_OPT_REMOVE_SEL, MILESTONE_INFO);
    }
    
    // TODO: Implement feedback for incorrect input
}

function userRemoveMilestone()
{
    // Assign user values to variables
    let userMilestoneSel = MILESTONE_OPT_REMOVE_SEL.value;

    if (userMilestoneSel !== "")
    {
	// Acquire index of selected milestone
	let milestoneIndex = PT.getMilestoneIndexByTitle(userMilestoneSel, milestoneList);

	// Remove user's selected milestone
	PT.removeMilestone(milestoneIndex, milestoneList,
		       MILESTONE_LIST_DOC, MILESTONE_OPT_REMOVE_SEL, MILESTONE_INFO);
    }
}

function createSamples()
{
    // Declare & Initialize variables
    let badgeTitle = "Test Badge";
    let badgeDesc = "This is a sample description for the test badge.";

    let mTitle = "Test Milestone";
    let mDesc = "This is a sample description for the test milestone.";
    let mMember = "John Doe";
    
    let recentBadge;
    
    // For each sample icon
    for (let iconIndex = 0; iconIndex < SAMPLE_ICONS.length; iconIndex++)
    {
	// Create a sample badge
        recentBadge = PT.createBadge(badgeTitle + " " + (iconIndex + 1),
				     badgeDesc,	SAMPLE_ICONS[iconIndex], badgeList,
				     MILESTONE_OPT_CREATE_BSELECT);
    }

    // Create a sample milestone
    let sampleMilestone = PT.createMilestone(mTitle, mDesc, recentBadge,
					     mMember, milestoneList,
					     MILESTONE_LIST_DOC, MILESTONE_OPT_REMOVE_SEL,
					     MILESTONE_INFO);
}

BUTTON_MILESTONE_CREATE.addEventListener("click", userCreateMilestone);
BUTTON_MILESTONE_REMOVE.addEventListener("click", userRemoveMilestone);
BUTTON_BADGE_CREATE.addEventListener("click", userCreateBadge);

PT.displayIconOptions(SAMPLE_ICONS, BADGE_OPT_CREATE_ICON);
createSamples();
