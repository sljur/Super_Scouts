// badge.js

export class Badge
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
