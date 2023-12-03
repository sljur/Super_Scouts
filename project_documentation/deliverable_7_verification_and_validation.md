# Deliverable 7: Verification and Validation

## Description:
SuperScouts is an intuitive, community-centered website with an emphasis on scouting that allows for group planning and organization with a basis for progression tracking and community events. It is still in early development, but users can sign up for SuperScouts through the web application. Upon accessing the website, users can enter a group name or find a group in which they are a member. Once in the group homepage, there is a navigation bar at the top. At this point, only the Calender, Progress, and Game Hub are the main features that have been implemented.

Calendar will give the members a monthly calendar view. Members can add or remove events within the calendar. Progress is the progression tracker that keeps track of milestones and badges a member receives. It allows for the creation and removal of milestones completed by a member. As well as the creation of badges for a member. Game Hub has a puzzle game called Lights Out, where the goal is to turn off all the lights on the grid. The game is meant to improve participation as it is meant to challenge the members and attract them to visit the site more often. 

[Super Scouts](http://superscouts.site/)

## Verification: 
- ## Name Processing Test
     - **Testing Frame Work:** Jest
     - **Testing File Folder:** [here](https://github.com/sljur/Super_Scouts/tree/main/website0.1.1_Alpha/test)
     - **Test Example:** This test handles the group class, specifically with respect to how names are processed for group creation. For this test to run the framework needs to simulate the parts of an html page that would need to exist for a text submission to be entered, specifically the text box. The link to the class diagram of this project can be found [here](https://github.com/sljur/Super_Scouts/assets/116771608/38b49542-1cf3-4ef9-8ce7-7df92ded5930), and the link to the test file can be found [here](https://github.com/sljur/Super_Scouts/blob/main/website0.1.1_Alpha/test/name.test.js).
     - **Test Output:** <br><img width="675" alt="name_test_pic" src="https://github.com/sljur/Super_Scouts/assets/116771608/6dd73797-46f0-42a9-9f61-2777f26960cd"><br>
- ## Progression Tracker Test - Milestone
     - **Testing Frame Work:** Jest
     - **Testing File Folder:** [here](https://github.com/sljur/Super_Scouts/tree/main/website0.1.1_Alpha/test)
     - **Test Description:** This test file tests the creation and acquisition of the *Milestone* objects that are used in lists, which are available to the *Progression Tracker*. It uses the imported *Badge* and *Milestone* classes, along with functions from the *Progression Tracker Dependency* file, and isolates the *Badge* class via mocking by *Jest*. The *createMilestone* function is tested to see if: the *Badge* provided is only created once (which it was available to do via mocking with *Jest*), the *Milestone* object created matches what it is supposed to look like, and that created *Milestone* is successfully put into the provided list. The *getMilestoneByMember* function is then tested by seeing if each milestone provided is correctly sorted into the proper assigned member.
     - **Class Tested:** The *Milestone* class from [milestone.js](https://github.com/sljur/Super_Scouts/tree/main/website0.1.1_Alpha/public/ProgressionTracker/milestone.js) is indirectly tested through functions from [progressTrackDep.js](https://github.com/sljur/Super_Scouts/tree/main/website0.1.1_Alpha/public/ProgressionTracker/progressTrackDep.js).
     - **Testing File:** [progressTrackDep.test.js](https://github.com/sljur/Super_Scouts/tree/main/website0.1.1_Alpha/test/progressTrackDep.test.js)
     - **Test Output:** <br>![image](https://github.com/sljur/Super_Scouts/assets/102492570/ef6b0423-0579-4fbd-9589-fce6834dc9a8)<br>

 
     
## Acceptance Tests:
- **Testing Framework:** Selenium
- **Link to Acceptance Test Folder:** [Folder](https://github.com/sljur/Super_Scouts/tree/main/website0.1.1_Alpha/test/acceptance_tests)<br>
- **Test Example:** In [this](https://github.com/sljur/Super_Scouts/blob/main/website0.1.1_Alpha/test/acceptance_tests/acceptance_0.1.1AlphaTest.py) test, the automated test first boots up and searches for the SuperScouts.site domain. Once that is done a group name is entered and the group is created. Next the calendar is opened and returned back to the homepage. The progression tracker is then tested where test values are entered to simulate a milestone being created and then finally the milestone is create, then removed before returning back to the home screen. Finally the Game Hub is tested where the driver opens up the game hub, selects a game then resets the game before finally closing the Game Hub, returning home and completing the test.
- **Test Execution Video:** 
https://github.com/sljur/Super_Scouts/assets/116771608/4c574531-8822-4406-8a3e-339f64a9952f


## Validation:
### Interview: 1<br>
**Summary:** Overall, Sonya believes we have an excellent foundation to build off of, but doesn't feel comfortable comparing our work with a competitor's(Scout Book) because of the difference in scale. In her opinion, if we had more time, money, and resources to add the additions to make a functional social media group website, it would be able to compete with ScoutBook. But as of right now, she doesn't consider our website functional for the purpose we intended.<br>
**Interviewer:** Sami Jurado<br>
**Interviewee** Sonya Jurado<br>
**Date:** November 30th, 2023; Thursday at 7:30pm <br>
**Consumer Segments:** Sonya is a den leader of a Cub Scout pack and a committee member of that pack; she did a brief amount of time in Girl Scouts as a kid, but now has her daughters in a Cub Scout pack.<br>

<br>**Key Insights:**<br>
- Likes the fact we can just create whatever group name we want and it remembers it from a prior submission; however, she would prefer is we could see all the members involved in the group, and the ability to check her own profile and see the profiles of others in the group.
- Appreciates that parts of the Progression Trackers work, but remarks that it wouldn't be completely functional as is, and would like the page to match the rest of the website. She did have fun creating her own milestones, though. She was a bit confused as to why she couldn't check them off as completed, but I explained that there should be a verification process that hasn't yet been implemented, so for now we only have checkmarks. Would also like to have a back button that links back to the homepage.
- Sonya enjoyed the Calendar but did not like the fact this page, similar to the Progression Tracker, did not match the rest of the website. She determined the calendar was a bit more functional than some other parts, partly because it does serve its basic function- it tells you the correct date and day of the week it is, and you can see a future date. Although the add/remove function does not work well, it does put the event into a list; she called it a note. However, she still doesn't believe the calendar as it is functional the way it needs to be, just that it works.
- The Game worked the best according to Sonya; her only issue is that she did not understand the point of it's presence in the website. Once I explained the theory behind the participation aspect- (that the more members checked in, they would accrue points, to then spend in the Game Hub and compete with others in their group)- she got what we were trying to accomplish. Her only caveat is that there should have been instructions on how to play present next to the game and that maybe a tutorial should have been created.
  
<br>**Memorable Quotes:**<br>
- [About comparing our website to Scoutbook]"It feels unfair to compare the two; because it’s like comparing a baby to a full grown adult- there’s way more milestones and steps. This obviously takes a lot more work than can be seen on the outside. I know there’s more that goes into this."
- [Question: What can be changed?]"It should have a sense of cohesiveness. You can tell it’s formatted differently. I like the Game Hub page because it feels like it’s meant to be part of the same website."

<br>**Reflection:**<br>
Did the users perform the tasks as you expected? 
- Yes; the functions worked the way I expected them to, BUT ONLY when Sonya’s script blockers on her computer were off. Because of the particular settings she had, parts of the page looked off to what we coded them to be until she fixed it; at first, she couldn’t even get to the main page, and then in the calendar the arrows became script writing instead of actual arrows.<br>

Did the users’ actions produce the results they expected?
- There were parts they clicked on expecting a function to happen, and then surprised when it didn’t, like the calendar, the days lit up, but no event scold be placed inside.<br>

What did the users like the most? 
- She liked the game hub, in the sense that it worked, but didn’t quite see the usefulness of getting people involved in participation; probably because we haven’t set up the participation functions yet. But she also liked the calendar and figured it does serve its basic functions- just hard to add and remove days.<br>

Is your value proposition accomplished? 
- Not entirely; Sonya compared it to being a fledgling program with solid aspects. It doesn't have the communication/social media aspects set up yet, but the foundation is there; there's a vision and remnants of where things can and should go, but it’s still in its infancy. It’s not there yet, but It could go somewhere.<br>

### Interview: 2<br>
**Summary:** Dave believes we have an excellent starting point; but similar to Sonya, believes we only have a solid foundation, not the bells and whistles needed to be functional the way we need it to be used by a wide group of people. He equated comparing our website to a competitor, (like ScoutBook), to comparing apples and oranges; not in the same bracket.<br>
**Interviewer:** Sami Jurado<br>
**Interviewee** David Jurado<br>
**Date:** November 30th, 2023; Thursday at 3:30pm <br>
**Consumer Segments:** David is a parent who is a part of his daughter's Cub Scout committee as an event coordinator.<br>

<br>**Key Insights:**<br>
- Dave thought it was pretty nifty that the website remembered his previous group name and was able to get back to it; there had been an issue where he lost the page within seconds of entering the site because he closed the tab.
- He thought the Progression Tracker was pretty well done; not up to high-spec standards, but you can create milestones and put them into a list, which he appreciates. At one point he made a comment about improving a function for the drop-down tab, only to realize the function already existed, he just hadn't clicked a button; at which point he told me to ignore him because clearly things were working fine.
- Dave enjoyed the Calendar, mostly because it was pretty and looked nice, and told the correct current date. He noted that although it was also nice that he could add and remove events, was disapointed that he couldn't insert them into the selected day. Dave remarked that the 'go back' button needed to be bigger as well.
- The Game Hub Dave had little to discuss, mostly because he was too focused on trying to win. He thought having a game section for members to compete with others in their group was an excellent idea.
  
<br>**Memorable Quotes:**<br>
- [About the Progression Tracker]"This is an html interface, so our aspirations needs to be low- but you can use it; drop down boxes work. It’s a table- as for aesthetics, it works. Right now, I don’t think it’s operational- but as a test environment and something to build off of? Sure. I would use it to make a list. I don’t really have a way to rate it- sure. It’s not professional, but you’re students- you’re not getting a paycheck for this, so I’m not expecting it. Some things work, some things don’t."
- [About the Game] "I feel a small sparking of admiration in my chest. Oh, game page 100% working, not even a question. Damnit, I hate this thing. I can’t win…"
- [About if the Messaging Capabilities were implimented] "If the messaging stuff worked, it would make it better. Without a doubt."

<br>**Reflection:**<br>

Did the users perform the tasks as you expected? <br>
- Yes; actually, Dave seemed to already be way ahead of me in adding and removing stuff, even without my explanations.<br>

Did the users’ actions produce the results they expected?
- Not exactly; because some of the functions, though present, don’t actually work, there were some moments of ‘Why is this not working? It looks like it should work. Where is the action?” A noticeable moment was when Dave clicked the profile button expecting to be linked to a profile page; it was the first thing he checked and was confused when he wasn’t linked, which was a surprise for me. I knew it was an important feature we hadn’t been able to implement, but not how much.<br>

What did the users like the most? 
- The game, because it was fully working; but Dave did appreciate the Calendar (Because it is pretty and showed the date) and liked that the progression tracker did at least create a list of things. But especially the game, because there was something to focus on and do. It wasn’t just a straight-up organizational website.<br>

Is your value proposition accomplished? 
- Not fully; we wanted to be able to facilitate communication between members of a group and allow communication and organization of events, but we weren’t able to implement everything to a standard where it could be fully usable as a website for what we wanted. We have a really good foundation (According to interviewee Dave, at least) but there are a lot of extra things we would need to add to make it workable for the masses.<br>

### Interview: 3<br>
**Summary:** 
The interviewee highlighted glitches in the group landing page, suggested improvements for progression tracking, and wanted the game to be more seasonal. They considered the project promising but felt it looked like a school project and noted the absence of a return link to the group home page from other pages.<br>
**Interviewer:** Evan Palmisano<br>
**Interviewee** Therese Palmisano<br>
**Date:** December 1st, 2023; Thursday at 7:30pm <br>
**Consumer Segments:** Therese is a key member of the Boy Scout community serving as committee chair for Troop 119. She has also served as staff for National Youth Leadership Training for the BSA and has received several awards in scouting such as the Scouter of the Year, and the Distric Award of Merit.<br>

<br>**Key Insights:**<br>
- **User Experience Challenges:** The interview reveals significant user experience challenges, such as encountering glitches with the group landing page due to a space in the group name. This highlights the importance of the error handling and onboarding process to ensure a smooth user experience from the start.

- **Feature Preferences and Game Enhancement:** The interviewee expresses mixed feelings about features, appreciating dark mode's appeal to a younger audience. They commend progression tracking but suggest expanding categories. The desire for a more seasonal and light-hearted approach to the game indicates the importance of aligning features with user preferences to enhance engagement and satisfaction.

- **Perceived Project Maturity:** The interviewee's perception that the project looks more like a school project than a polished product raises concerns about its overall maturity and professionalism. This underscores the need for a refined design and user interface to instill confidence in users and foster trust in the platform's capabilities. Additionally, the absence of a return link to the group home page points to fundamental navigation issues that should be addressed to improve overall user accessibility.
  
<br>**Memorable Quotes:**<br>
- [Final comments]Looks like there was a lot of thought and effort put into this
- [Upon interacting with the progression tracker page]The progression tracker is going to be a really useful tool.

<br>**Reflection:**<br>

Did the users perform the tasks as you expected? <br>
- Yes, Therese is pretty smart and was able to figure out a lot of the stuff without my guidance as the walkthrough was conducted.<br>

Did the users’ actions produce the results they expected?
- Aside from the group name creation, yes.<br>

What did the users like the most? 
- The user enjoyed the progression tracking the most.<br>

Is your value proposition accomplished? 
- No, the project is still in its alpha phase and very incomplete. There is potential and a solid frame for the web app has been made, but it is a long way from becoming a viable product.<br>

### Interview: 4<br>
**Summary:** Overall, Haydn believes we have a great foundation to build off of, but thinks there are still many features that could be added that were mentioned when I first interviewed her in the beginning og the semester. However, she likes the layout of the website and thinks it has pretty easy navigation.<br>
**Interviewer:** Patricia Madrid<br>
**Interviewee** Haydn Halfacre<br>
**Date:** December 1st, 2023; Friday at 3:00pm <br>
**Consumer Segments:** Haydn is the Treasurer on the NAU Dance Team and is also an Executive Officer for the Chi Omega sorority.<br>

<br>**Key Insights:**<br>
- Likes the simple layout of the homepage as it makes it easy to navigate where everything is.
- Enjoys the concept of the Progression Tracker but hopes to have more working features such as milestone completion. She appreciates that you can add multiple milstones, but thinks the design for the page could be better.
- Haydn appreciates the calender and the fact that you can add and remove events. She wishes that the events would stay on the date that was selected and hoped that the events would even show up within the square it was placed in. She likes the size of the Calender as well.
- Haydn thinks the game is a fun addition to the website. She's excited to see more games added within the game hub. On the other hand, she did not think the game was necessarily needed for her personoally because she engages a lot in these types of websites anyway.
  
<br>**Memorable Quotes:**<br>
- [About the website's creation]"It is so exiciting to see how much you have done from when you first interviewed me."
- [About the website navigation]"The website is pretty easy to navigate, but some features, need some instructions."

<br>**Reflection:**<br>
Did the users perform the tasks as you expected? 
- Yes; however, there were some features that she needed help with such as removing an event on the calender when there are multiple events listed. She also needed a some help on creating a milestone and removing a milestone when there are multiple events.

Did the users’ actions produce the results they expected?
- For some features yes. For the calender, Haydn expected the events to be listed on the specific days and for the Progression Tracker, she was satisfied with the creation of the the milestone but expected a way to showcase completion.<br>

What did the users like the most? 
- Haydn enjoyed the Progression Tracker. She thought that it would be really useful to keep track of team progression once the program has completed features.<br>

Is your value proposition accomplished? 
- Not entirely; once again, Haydn thought that the website had a great base, but definitely needed more completed features. She also thought that adding messaging would help a lot in completing our value proposition as one of the main goals was communication.<br>



