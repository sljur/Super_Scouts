# Deliverable 5: Design

## Description:
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; The main overview of our system starts with the homepage; it should welcome users to the website, encourage them to create their group if they are not part of one already, or to sign in to a group they are already apart of. Once an action is taken- whether it's because they created a group or signed in the next page should be the homepage of their particular group instead of the main website's. This will open up the tabs and links to the rest of the site's features; the Calender, Progression Tracker, Media, and their profile page. The group's homepage should also have a timeline that shows previous or upcoming events of that particular group. <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Currently, we only have the main website page up with a small group creation feature without login abilities, and on the individual groups page we only have the link to the Calendar working. This was because we as a group realized the main aspects of our website needed to be group creation and the calendar; if we want people to use our website, at the minimum users would need to be able to create their group, and they needed to keep track of events for that group. The more we work on it, the more was can continue to add necessary aspects to make the website more functional, like the Progression Tracker and Media abilities.<br>
## Architecture:
Our system design consists of three layers: data, business logic, and presentation layer. Data includes datatypes such as Calendar, Badge, and Milestones. The business logic includes Members, Group Leader (who can create the calendar and give permission), and  Progression Tracker (that creates the badges and milestones). The presentation is comprised of a website that runs on a web server.   

<img width="464" alt="Screenshot 2023-11-12 at 1 17 34 PM" src="https://github.com/sljur/Super_Scouts/assets/70121541/30271690-5d0e-47ed-8600-73a058abdf71">

## Class Diagram:
<img width="642" alt="Del5ClassDiagram" src="https://github.com/sljur/Super_Scouts/assets/125594817/6794a6b5-945e-4e99-bafd-5138abbe0d7e">

## Sequence Diagram:

## Design Patterns:

### Design Pattern 1:
- The first Design Pattern chosen (Observer) is from the Behavioral category; this was chosen because our 'Group Leader' is in charge of the 'Group' that every member will be linked to. When the 'Group Leader' makes an update to the calendar, every group member should be able to see the updated events.
    
![ObserverDesignPattern](https://github.com/sljur/Super_Scouts/assets/116686483/7b2f470f-e395-4ff1-9cfb-583e264e233f)
   
Group Leader: https://github.com/sljur/Super_Scouts/blob/main/website/grouphome.html <br>
Calendar: https://github.com/sljur/Super_Scouts/blob/main/website/Calendar/script.js <br>

### Design Pattern 2:
- The second Design Pattern chosen (Facade) is from the Structural category; this was chosen because the user only needs to interact with the PT (Progression Tracker) and does not need to worry about the interworkings of both the milestones and badges if the options needed for them are present in the PT interface directly.

![FacadeDesignPattern](https://github.com/sljur/Super_Scouts/assets/102492570/27a1d436-63f5-4137-be5d-49d48c88913a)

Progression Tracker: https://github.com/sljur/Super_Scouts/blob/main/website/ProgressionTracker/progressTrack.js <br>
Milestone (Class): https://github.com/sljur/Super_Scouts/blob/main/website/ProgressionTracker/milestone.js <br>
Badge (Class): https://github.com/sljur/Super_Scouts/blob/main/website/ProgressionTracker/badge.js <br>

## Design Principles:
