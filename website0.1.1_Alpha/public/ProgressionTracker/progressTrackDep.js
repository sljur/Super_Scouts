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
	displayBadgeOptions(bList, optBadgeDisplay);
    }

    // Return the create badge
    return curBadge;
}

export function createMilestone(mTitle, mDesc, mBadge, mMember,
				mList, mListDisplay, mOptRemSel)
{
    // Create milestone based off of given parameters
    let curMilestone = new Milestone(mTitle, mDesc, mBadge, mMember);

    // Add milestone to list
    mList.push(curMilestone);

    // Refresh milestone display
    if (mListDisplay !== null && mOptRemSel !== null)
    {
	displayMilestones(mList, mListDisplay, mOptRemSel)
    }

    // Return the milestone
    return curMilestone;
}

export function displayBadgeOptions(bList, optBadgeDisplay)
{
    // Declare & Initialize variables
    let badgeOptsHTML = "";
    let curBadge;
    
    // Loop through each badge available
    for (let bIndex = 0; bIndex < bList.length; bIndex++)
    {
	// Assign current badge
	curBadge = bList[bIndex];

	// Add badge information to be displayed
	badgeOptsHTML += curBadge.displayOptFormat();
    }

    // Display badge options
    optBadgeDisplay.innerHTML = badgeOptsHTML;
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
	iconOptsHTML += "<option value=\"" + curIcon + "\">" + curIcon + "</option>";
    }

    // Display icon options
    optIconDisplay.innerHTML = iconOptsHTML;
}

export function displayMilestoneOptions(mList, mOptRemSel)
{
    // Declare & Initialize variables
    let milestoneHTML = "";
    let curMilestone;
    
    // For every milestone in list
    for (let mIndex = 0; mIndex < mList.length; mIndex++)
    {
	// Assign current milestone
	curMilestone = mList[mIndex];
	
	// Add milestone title to be displayed
	milestoneHTML += curMilestone.displayOptFormat();
    }

    // Display milestone option
    mOptRemSel.innerHTML = milestoneHTML;
}

export function displayMilestones(mList, mListDisplay, mOptRemSel)
{
    // Declare & Initialize variables
    let milestoneHTML = "";
    let curMilestone;
    
    // For every milestone in list
    for (let mIndex = 0; mIndex < mList.length; mIndex++)
    {
	// Assign current milestone
	curMilestone = mList[mIndex];
	
	// Add milestone information to be displayed
	milestoneHTML += curMilestone.displayListFormat();
    }

    // Display milestone information in HTML
    mListDisplay.innerHTML = "<h2>Milestone List</h2>" + milestoneHTML;

    // Refresh milestone options
    displayMilestoneOptions(mList, mOptRemSel);
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

export function removeMilestone(mRemoveIndex, mList, mListDisplay, mOptRemSel)
{
    // Remove milestone from list
    mList.splice(mRemoveIndex, 1);

    // Refresh milestone display
    displayMilestones(mList, mListDisplay, mOptRemSel)
}
