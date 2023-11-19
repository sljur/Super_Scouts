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

3. Server: Benjamin Huntoon
   - Requirement: As a group member I would like to be able to access my group info at any time<br>
   - Issue: (https://github.com/sljur/Super_Scouts/issues/1) <br>
   - Pull Request: https://github.com/sljur/Super_Scouts/pull/125 <br>
   - Implemented by: Benjamin Huntoon <br>
   - Approved by: Sami Jurado<br>
   - Description of Server Implementation: <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This is a rather straight forward implementation, the biggest feature the server implementation brought was the inclusion of three processes, one to create groups, one to hold groups, and one to process groups. Originally the intent was to include a database to hold groups as they are created so that they can continue to run, however as no one in the group has significant experience with databases we settled for creating a list of group objects that contain unique group ids for every group. This allows the server to hold each group independantly and serve users a groupage custom to their initally entered group name. Unrelated to group processes, the server file implementation's main goal was to swap the server environment from running via an http-server command to a file so we could begin developing some backend processes.
  
4. Group Creation: Benjamin Huntoon
   - Requirement: As a group member I want to be able to join a group created by my leader so that I can keep up on group activities.<br>
   - Issue: (https://github.com/sljur/Super_Scouts/issues/22) <br>
   - Pull Request: https://github.com/sljur/Super_Scouts/pull/125 <br>
   - Implemented by: Benjamin Huntoon <br>
   - Approved by: Sami Jurado<br>
   - Print Screen: <img width="1436" alt="Screenshot 2023-11-19 at 1 54 11 PM" src="https://github.com/sljur/Super_Scouts/assets/116771608/0fac375a-cd61-4595-bacb-3e5a5e7d1ff0">

   - Description of Group Creation Implementation: <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;With the release of SuperScouts version 0.1.1 Alpha, group creation was overhauled almost entirely from the original implementation. The new group creation process communicates with the server to verify a user's group name to create a new group if the name is valid and has not previously been entered or to join a group if it has already been created by a different user. The other major improvement on the group creation process is groups remain open after exiting the page, meaning that if you create a group from the SuperScouts home page, you can search superscouts.site/groups/(your group name) to be taken back to your group.
     
### Tests:
- Progression Tracker Test Output:<br>
![image](https://github.com/sljur/Super_Scouts/assets/102492570/a6afb965-9c17-4d18-b468-2d2651942cff)<br>
[Progression Tracker Test Code](https://github.com/sljur/Super_Scouts/blob/main/website0.1.1_Alpha/test/progressTrack.test.js)

- Server Implementation Test Output:<br>
<img width="477" alt="server_test_pic" src="https://github.com/sljur/Super_Scouts/assets/116771608/ece1af3c-c2ec-4801-aa8e-b012fe82e772"><br>
[Server Tests](https://github.com/sljur/Super_Scouts/blob/main/website0.1.1_Alpha/test/server.test.js)<br>
- Group Creation Test Output:<br>
<img width="675" alt="name_test_pic" src="https://github.com/sljur/Super_Scouts/assets/116771608/6dd73797-46f0-42a9-9f61-2777f26960cd"><br>
[Group Creation Tests](https://github.com/sljur/Super_Scouts/blob/main/website0.1.1_Alpha/test/name.test.js)<br>



## Demo:
- Please enjoy our demo of SuperScouts 0.1.1 Alpha
  demo should go here

## Code Quality:
- The largest code quality process we have adopted was agreeing to use the Leverington code style, represented as a statement with one curly brace directly under, followed by the code body and the closing curly brace aligned with the first. We understand One-true-brace was taught as the generally accepted professional practice, but seeing as we had already been coding in that style we chose to stick with what we knew. To ensure quality we also adopted a policy of peer reviewing code, meaning no code commited to the main branch would be done so without at least one other person in the group reading and analyzing what had been written. As a more loose rule we tried to keep code under 80 characters a line for readability, with the understanding that for the best efficiency some line might exceed that limit. A lack of test driven development was a criticism of the last deliverable so for this sprint we have adopted a heavier reliance on testing the code as it is written with the exception of html and css files as those are displayed and most conveniently tested via a browser rather than a traditional testing environment.

- Leverington code style example:
  if(someCondition)<br>
  {<br>
      // code goes here<br>
  }<br>

## Lessons Learned:
- We needed to continue sharing information we found out about JEST, along with what tests worked for one person but didn’t for another; and clarifying how the test needed to be written in order to get through the JEST environment.
- Specifically for the Calendar implementation, we learned that just because there is a tool that does something we need, does mean that is the correct tool to use; had more research been done prior to implementing the calendar code, whole sections would not have needed to be modified and replaced, taking up time we could have used to further the implementation.
- With respect to group creation we learned that to implement a data base is not a simple process for the inexperienced programmer and to fully implement would require extra planning as an implentation feature itself.
- With respect to server implementation we learned that Node.js cannot serve static files by itself and the node package express can be used to include them for proper file integration into the server.
