// progressTrack.js

// Import Classes: Milestone & Badge
import {Milestone} from "./milestone.js"
import {Badge} from "./badge.js"

const MILESTONE_LIST_DOC = document.querySelector("#PT_MilestoneList");

const BUTTON_MILESTONE_CREATE = document.querySelector("#ButtonCreateMilestone");
const BUTTON_MILESTONE_REMOVE = document.querySelector("#ButtonRemoveMilestone");
const BUTTON_BADGE_CREATE = document.querySelector("#ButtonCreateBadge");

function createMilestone(mTitle, mDesc, mIconImg)
{
    // Check if no parameters were passed
    if (arguments.length === 1)
    {
	mTitle = "Test Title";
	mDesc = "Test Description";
	mIconImg = "SampleIcon.jpg";
    }

    // Add milestone to list
    MILESTONE_LIST_DOC.innerHTML += "<li class=\"PT_Milestone\"><h3>" + mTitle +
	"</h3><p class=\"Milestone_Desc\">" + mDesc + "</p><img src=\"" + mIconImg +
	"\" /><p class=\"Milestone_Comp\">Completed: No</p></li>";
}

function removeMilestone()
{
    // Grab all milestones in list
    let allMilestones = document.querySelectorAll(".PT_Milestone");

    // Check if at least one milestone was found
    if (allMilestones.length > 1)
    {
	allMilestones.item(allMilestones.length - 1).remove();
    }
}

function displayMilestone()
{
    // TODO (After HTML/CSS): Display milestone information
}

function getMilestonesOfMember()
{
    // Loop through each milestone available

	// Check if their assigned member is same as given one

	    // Add milestone to member milestone list

    // Return member milestone list
}

function createBadge()
{
    // Ask user for icon to be used

    // Ask user for a description

    // Create new badge based on given data
}

BUTTON_MILESTONE_CREATE.addEventListener("click", createMilestone);
BUTTON_MILESTONE_REMOVE.addEventListener("click", removeMilestone);
BUTTON_BADGE_CREATE.addEventListener("click", createBadge);
