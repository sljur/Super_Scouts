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

    closeMilestone() {this.hasCompleted = true;}
    openMilestone() {this.hasCompleted = false;}

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
	let iconStr = "<div class=\"Img_Container\">" +
	    "<img width=\"48px\" height=\"48px\" src=\"" + this.badge.icon + "\" />" +
	    "</div>";
	
	let titleStr = "<h3>" + this.title + "</h3>";
	let descriptionStr = "<p class=\"Milestone_Desc\">" + this.description + "</p>";
	let memberStr = "<p class=\"Milestone_Member\">" + this.assignee + "</p>";

	let completionStr = "<label class=\"M_CheckBox\">Completed? " +
	    "<input type=\"checkbox\"></label></li>";
	
	let listItem = "<li class=\"PT_Milestone\">" + iconStr + titleStr +
	    descriptionStr + memberStr + completionStr + "</li>";
	
	return listItem;
    }

    displayOptFormat()
    {
	return "<option value=\"" + this.title + "\">" + this.title + "</option>";
    }
}
