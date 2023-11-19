# Deliverable 6: Implementation 2

## Introduction:
- <this is where the intro will go 1-2 paragraphs>
  
[Super Scouts](http://superscouts.site/)

## Implemented Requirements:
1. Calendar: Sami Jurado
   - Requirement: As a group leader I want to be able to input events so members know when to meet. <br>
   - Issue: https://github.com/sljur/Super_Scouts/issues/27 <br>
   - Pull Request: https://github.com/sljur/Super_Scouts/pull/130 <br>
   - Implemented by: Sami Jurado <br>
   - Approved by: Beatriz Ortega <br>
   - Description of Calendar Implementation: <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The idea for this particular implementation was for us to have a large enough calendar to be easily read instead of our initial one which was smaller in size. We hoped that with a larger calendar, we could also implement an add and remove event function and be able to place those events on a specific day. However, creating a popup that appears when a member clicks the calendar and disappears on another click took far longer than expected, so only the modal popups, along with the add and remove functions are stable enough to present. Also, as of right now, I can only make the events that are added appear in a list inside the modal popup itself. Although it won’t be ready for this implementation, my next step is to move the events from the modal into the calendar itself. 

2. Progression Tracker: Dalton Tippings
   - Requirement: As a group leader, I want to put tasks that lead to milestones for each member, so I am able to cater to each member's track. <br>
   - Issue: https://github.com/sljur/Super_Scouts/issues/17 <br>
   - Pull Request: https://github.com/sljur/Super_Scouts/pull/136 <br>
   - Implemented by: Dalton Tippings <br>
   - Approved by:  <br>
   - Description of Progression Tracker Implementation: <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;For the progression tracker implementation, we wanted to focus on the functionality of the milestones inside it and allow for user customization of them. This was accomplished with the newly added options: "Create Milestone", "Remove Milestone", and "Create Badge". For the creation of a milestone, it allows for the user (acting as the group leader) to input a custom title and description, choose from created badges to be displayed with it, and input a member to be associated with it. Similarly with the creation of badges, the user can input a custom title and description, and then for the meantime select a sample icon to be used. After the milestone is created, it shows up under "Milestone Lists" for the user to see. Once a badge is created, it shows up as a badge option in the milestone creation to be used. Removing milestones is as easy as selecting the milestone title from the drop-down menu, and clicking "Remove Milestone". Though there is not much in the presentation department, we achieved the functionality that we wanted which is far more important to us. The next step following this implementation is to improve the user interface and presentation of the progression tracker.
     
### Tests:
- Progression Tracker Test Output:<br>
![image](https://github.com/sljur/Super_Scouts/assets/102492570/a6afb965-9c17-4d18-b468-2d2651942cff)<br>
![Progression Tracker Test Code](https://github.com/sljur/Super_Scouts/blob/main/website0.1.1_Alpha/test/progressTrack.test.js)

## Demo:
- Please enjoy our demo of SuperScouts 0.1.1 Alpha
  demo should go here

## Code Quality:
- Quality Assurance decisions should be made here

## Lessons Learned:
- We needed to continue sharing information we found out about JEST, along with what tests worked for one person but didn’t for another; and clarifying how the test needed to be written in order to get through the JEST environment.
- Specifically for the Calendar implementation, we learned that just because there is a tool that does something we need, does mean that is the correct tool to use; had more research been done prior to implementing the calendar code, whole sections would not have needed to be modified and replaced, taking up time we could have used to further the implementation.
