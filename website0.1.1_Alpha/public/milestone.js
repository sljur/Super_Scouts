// milestone.js

// Import Class: Badge
import {Badge} from "./badge.js"

export class Milestone
{
    constructor(title, description, badge, assignee)
    {
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
	if (assignee != givAssignee)
	{
	    assignee = givAssignee;
	    hasCompleted = false;
	}
    }
}
