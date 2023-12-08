// progressTrackDep.js

// Import Classes: Badge & Milestone
import Milestone from "./milestone.js"
import Badge from "./badge.js"

export function createBadge(bTitle, bDesc, bIcon, bList, optBadgeDisplay)
{
    // Create new badge based on given data
    let newBIcon = "Icons/" + bIcon;
    let curBadge = new Badge(bTitle, bDesc, newBIcon);

    // Add badge to badge list
    bList.push(curBadge);

    // Update badge options
    if (optBadgeDisplay !== null)
    {
	// Add created badge as an option
	addBadgeOption(curBadge, optBadgeDisplay);
    }

    // Return the create badge
    return curBadge;
}

export function createMilestone(mTitle, mDesc, mBadge, mMember,
				mList, mListDisplay, mOptRemSel,
				mInfoDisplay)
{
    // Create milestone based off of given parameters
    let curMilestone = new Milestone(mTitle, mDesc, mBadge, mMember);

    // Add milestone to list
    mList.push(curMilestone);

    // Add milestone to display
    if (mListDisplay !== null && mOptRemSel !== null)
    {
	displayMilestone(curMilestone, mListDisplay, mOptRemSel, mInfoDisplay);
    }

    // Return the milestone
    return curMilestone;
}

export function updateMilestoneInfo(mInfoDisplay, mListDisplay)
{
    // Declare & Initialize variables
    let mCount = 0, mComplCount = 0;

    // For every milestone in the list display
    for (const milestone of mListDisplay.children)
    {
	// Increment completion count if completed
	if (milestone.classList.contains("opaque"))
	{
	    mComplCount++;
	}
	
	// Increment milestone count
	mCount++;
    }
    
    // Set milestone count string
    let mCountStr = "<li>Milestone Count: " + mCount + "</li>";

    // Set milestone completion string
    let mComplStr = "<li>Milestone Completions: " + mComplCount + "</li>";
    
    // Add milestone count to the information display
    mInfoDisplay.innerHTML = mCountStr + mComplStr;
}

export function addBadgeOption(badge, optBadgeDisplay)
{
    // Display badge options
    optBadgeDisplay.innerHTML += badge.displayOptFormat();
}

export function displayIconOptions(iconList, optIconDisplay)
{
    // Declare & Initialize variables
    let iconOptsHTML = "";
    let curIcon;
    
    // Loop through all available icons in list
    for (let iconIndex = 0; iconIndex < iconList.length; iconIndex++)
    {
	// Assign current icon location
	curIcon = iconList[iconIndex];

	// Add current icon as an available option
	iconOptsHTML +=  "<option value=\"" + curIcon + "\">" + curIcon + "</option>";
    }

    // Display icon options
    optIconDisplay.innerHTML = iconOptsHTML;
}

export function addMilestoneOption(milestone, mOptRemSel)
{
    // Display milestone option
    mOptRemSel.innerHTML += milestone.displayOptFormat();
}

export function displayMilestone(milestone, mListDisplay, mOptRemSel, mInfoDisplay)
{
    // Display milestone information in HTML
    mListDisplay.innerHTML += milestone.displayListFormat();

    // Add milestone's checkbox functionality to all milestones
    addCheckboxFunctionality(milestone, mInfoDisplay, mListDisplay);

    // Add milestone as an option to remove
    addMilestoneOption(milestone, mOptRemSel);

    // Update milestone info
    updateMilestoneInfo(mInfoDisplay, mListDisplay);
}

export function addCheckboxFunctionality(milestone, mInfoDisplay, mListDisplay)
{
    // For each milestone in display
    for (let mDisplay of mListDisplay.children)
    {
	// Get checkbox of last milestone (newly created one)
	let checkbox = mDisplay.children[4];

	// Add event listener for checkCompletion
	checkbox.addEventListener("click",
	    function() { checkCompletion(milestone, mDisplay, checkbox, mInfoDisplay, mListDisplay); });
    }
}

export function checkCompletion(milestone, mDisplay, checkbox, mInfoDisplay, mListDisplay)
{
    // Check that the checkbox value does not match milestone's completion
    let boxChecked = checkbox.children[0].checked;

    // Check if checkbox was checked
    if (boxChecked)
    {
	// Close the milestone
	milestone.closeMilestone();

	// Add opaque nature to milestone's display
	mDisplay.classList.add("opaque");
    }

    // Otherwise, assume it was unchecked
    else
    {
	// Open the milestone
	milestone.openMilestone();

	// Remove opaque nature from milestone's display
	mDisplay.classList.remove("opaque");
    }

    // Update the milestone info
    updateMilestoneInfo(mInfoDisplay, mListDisplay);
}

export function getBadgeByTitle(bTitle, bList)
{
    // Declare & Initialize variables
    let curBadge;
    
    // Loop through each badge in badge list
    for (let bIndex = 0; bIndex < bList.length; bIndex++)
    {
	// Assign current badge
	curBadge = bList[bIndex];
	
	// Check if current badge title matches
	if (curBadge.title === bTitle)
	{
	    // Return current badge
	    return curBadge;
	}
    }

    // TODO: Implement no badge return or error message
}

export function getMilestoneIndexByTitle(givTitle, mList)
{
    // Declare & Initialize variables
    let curMilestone;
    
    // For every milestone in list
    for (let mIndex = 0; mIndex < mList.length; mIndex++)
    {
	// Assign current milestone
	curMilestone = mList[mIndex];

	// Check if current milestone matches title
	if (curMilestone.title === givTitle)
	{
	    // Return current milestone's index
	    return mIndex;
	}
    }

    // TODO: Implement no badge return or error message
}

export function getMilestonesOfMember(mMember, mList)
{
    // Declare & Initialize variables
    let milestonesMember = [];
    let curMilestone;
    
    // Loop through each milestone available
    for (let mIndex = 0; mIndex < mList.length; mIndex++)
    {
	// Assign current milestone
	curMilestone = mList[mIndex];
	
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

export function removeMilestone(mRemoveIndex, mList, mListDisplay, mOptRemSel, mInfoDisplay)
{
    // Remove milestone from list
    mList.splice(mRemoveIndex, 1);

    // Remove milestone from milestone display
    let milestoneDisp = mListDisplay.children[mRemoveIndex];
    mListDisplay.removeChild(milestoneDisp);

    // Remove milestone from remove selection
    let milestoneOpt = mOptRemSel.children[mRemoveIndex];
    mOptRemSel.removeChild(milestoneOpt);

    // Update the milestone info
    updateMilestoneInfo(mInfoDisplay, mListDisplay);
}
