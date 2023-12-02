// milestone.js

// Import Class: Badge
import Badge from "./badge.js"

export default class Milestone
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
