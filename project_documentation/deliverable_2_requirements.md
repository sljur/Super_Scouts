# Deliverable 2: Requirements

## 1. Positioning

**Problem Statement**

The problem with disorganization of pertinent information in a group setting affects the group members, the impact of which is inefficiency and loss of time.

**Product Position Statement**

For users who desire to have all the information about their organization in one place the
Super Scout Website is an organizational website that keeps all of the organization's day-to-day workings in the same location and unlike ScoutBook, BAND, Discord, TeamSnap, Facebook, Messenger, or email our product has a streamlined approach to activity planning for organizations. 

**Value proposition and customer segment**

## 2. Stakeholders

**List of Stakeholders**

1. Users: Our users are inclusive to many kinds of people who need an organizational application such as tech-savvy people, non-tech savvy people, parents, kids, group leaders, group members, clubs and scouts.

2. Clients: Our clients mainly include group leaders and organizations that want to have effective communication with their members.

3. Competitors: Our competitors include other organizational and communicative websites that are similar to ours such as ScoutBook, BAND, TeamSnap, Facebook Messenger, and Email.

4. Detractors: Our detractors can include people against organized groups and people against technology in general, but we have no true detractors.

5. Develoeprs: Our developers are Ben Huntoon, Samantha Jurado, Patricia Madrid, Beatriz Ortega, Evan Palmisano, Dalton Tippings, and the Huntoons as they offered to aid in our server.

## 3. Functional requirements (features)

## 4. Non-functional requirements

## 5. Minimum Viable Product
Our Minimmum Viable Product will consist of an online environment where
users can create an account to host a group where community discourse and activity
planning can be conducted. Prototyping will be the main method for testing our product,
where we will create faux accounts and create community forums as an early test,
eventually allowing us to produce a suitable environment for consumer testing.

Future Features should include:<br>
- Calendar; can be validated by the people we've interviewed that expressed strong interrest in this feature, to see if it works the way they envisioned it.
- Points Of Intrest; can be shared by members or a leader to allow for landmarks, buildings and other places to be marked as important for a group, this was validated as an interesting idea in interviews and was requested by several participants.
- Photos/Media Implementation; can be shared by anyone for the sake of fun or education and was one of the most requested features for this product.
- Messaging; standard messaging to allow forum discussion in groups created, this was a core feature we wanted at inception and was validated by several review responses.
- Progression Tracking; a nice to have feature intended to make the overall product more interactive and engaging, group leaders will set up milestones or achievements to allow members to earn them like badges, this was validated as important for scouting, but an interesting general idea in interviews.

## 6. Use cases

![SS_Deliverable_UserCase_02](https://github.com/sljur/Super_Scouts/assets/116686483/088cd4df-fb91-4001-99e8-768fab9ad733)
<br>
**Use Case:** Calendar <br>
**Actor:** Group Leader<br>
**Description:** The Group Leader will create an event in the calendar<br>
**Preconditions:** The have a laptop, internet, an account, and a group created.<br>
**Postconditions:** An event will have been created in a group shared calendar<br>
**Main Flow:**<br>
    1. The Group Leader clicks on the 'Calender' tab that is shared with their group.<br>
    2. Group Leader clicks on the day they want to add the event in, and a pop up should appear that will allow them to enter the time,
location, and description of the event.<br>
    **Alternative Flow:**<br>
    3. Group Leader realizes the event has been entered wrong, and they should be able to click on the event in the calender, and have the previous pop up that will allow them to edit the time, location, and the event description.<br>
    4. Group Leader determines the event itself must be deleted, in which case they will have to click the event again, and click the 'delete' button.<br>

![groupCreation](https://github.com/sljur/Super_Scouts/assets/116771608/b4069ed6-f1a0-46a5-8ebb-f5a3e2e5d26c)<br>

**Use Case:** Group Creation<br>
**Actor:** User/Group Leader<br>
**Description:** User decides to create a group.<br>
**Preconditions:** Group of same name has not been taken.<br>
**Postconditions:** Account has been made<br>

**Main Flow:**<br>
1. User requests a custom name.<br>
2. Site confirms group name is free.<br>
3. User confirms group creation.<br>
4. Successful group creation.<br>
5. A unique join code is given to group creator to allow for others to join.<br>

**Alternative Flow:**<br>
1. User requests a custom name.<br>
2. Site confirms name is taken.<br>
4. Site asks User to try again.<br>

![Progression Tracker Use Case Diagram](https://github.com/sljur/Super_Scouts/assets/102492570/ea1b45d7-14c4-4cf8-ba00-b6a686e1d2d5)<br>

**Use Case:** Close Group Member's task in Progression Tracker<br>
**Actor:** Group Leader<br>
**Description:** Group Leader wants to close a Group Member's task.<br>
**Preconditions:** Group Leader has access to Progression Tracker, at least one task is present in Progression Tracker.<br>
**Postconditions:** A Group Member's task is closed.<br>

**Main Flow:**<br>
1. Group Leader selects a task in the Progression Tracker.<br>
2. Group Leader selects to close that task.<br>
3. Progression Tracker System closes task. (task is still present somewhere else as a receipt though)<br>

**Alternative Flow:**<br>
1. Group Leader selected a task that was already closed, PT system does not allow Group Leader to close task.<br>
2. Task closure ran into some error, PT system leaves task open and informs Group Leader of failed task closure.<br>

![Messaging](https://github.com/sljur/Super_Scouts/assets/125594817/879e650f-3d16-484f-9d5a-04c01c88eab5)<br>

**Use Case:** Messaging<br>
**Actor:** Group Leader/Group Members<br>
**Description:** Group leader can create chat where group members can send text messages to communicate.<br>
**Preconditions:** The have a laptop, internet, an account, and a group created.<br>
**Postconditions:** All members can send messages.<br>

**Main Flow:**<br>
1. Group Leader can create a group chat.<br>
2. Group leader can add/delete members in the chat.<br>
3. Group leader can change the name of the chat.<br>
4. Successful chat creation.<br>
5. All members in the chat can send messages.<br>

**Alternative Flow:**<br>
1. Members can react to other messages.<br>
2. Members can leave the chat if they choose.<br>

## 7. User stories

### Group Creation: Very Important

- As a group leader I want to be able to create groups so that people in my group can join.
- As a group member I want to be able to join a group created by my leader so that I can keep up on group activities
- This should take around a week to acomplish
  
### Calendar: Moderatly Important, Estimated Time: 2 weeks 

 - As a group leader I want to be able to input events so members know when to meet. <br>
 - As a group member, I want to be able to check what events are upcoming so I can organize my schedule. Priority Level:Estimated Time:<br>

### Progression Tracker: Mildly Important, Estimated Time: 1 week

 - As a group leader, I want to put tasks that lead to milestones for each member, so I am able to cater to each member's track.
 - As a group member, I want to be able to notify my group leader of a task completion, so they can close the task if they haven't already.

### Messaging: Very Important, Estimated Time: 2-3 Weeks
- As a group leader, I want to be able to communicate with the group members so that everyone is informed.
- As a group member, I want to be able to communicate with the group leader and other group members so that I know about events and other details.

## 8. Issue Tracker



