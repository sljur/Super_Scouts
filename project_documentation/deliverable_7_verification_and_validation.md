# Deliverable 7: Verification and Validation

## Description:

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
**Date:** Novemeber 30th, 2023; Thrusday at 7:30pm <br>
**Consumer Segments:** Sonya is a den leader of a cub scout pack and a committee member of that pack; she did a brief amount of time in Girl Scouts as a kid, but now has her daughters in a cub scout pack.<br>

<br>**Key Insights:**<br>
- Likes the fact we an just create whatver group name we want and it remembers it from a prior submission; however, she would prefer is we could see all the memebers involved in the group, and the baility to check her own profile and see the profiels of others in the group.
- Appreciates that parts of the Progression Trackers works, but remarks that it wouldn't be completely functional as is, and would like the page to match the rest of the website. She did have fun creating her own milestones, though. She was a bit confused as to why she couldn't check them off as completed, but I explained that there should be a verification process that hasn't yet been implmeneted, so for now we only have checkmarks.Would also like to have a back button that links back tot he homepage.
- Sonya enjoyed the Calendar, but did not like the fact this page, similar to the Progrssion Tracker, did not match the rest of the website. She determinde the calendar was a bit more functional than some other parts, partly because it does serve it's basic function- it tells you the correct date and day of the week it is, and you can see a future date. And although the add/remove funciton does not work well, it does put the event into a list; she called it a note. However, she still doesn't believe the calendar as it is fucntional the way it needs to be, just that it works.
- The Game worked the best according to Sonya; her only issue is that she did not understand the point of it's presence in the website. Once I explained the theory behind the participation aspect- (that the more a members checked in, they would accur points, to then spend in the Game Hub and compete with others in thier group)- she got what we were trying to accomplish. Her only caveat is that there should have been instructions on how to play present next to the game, and that maybe a tutorial should have been created.
  
<br>**Memorable Quotes:**<br>
- [About comparing our website to Scoutbook]"It feels unfair to compare the two; because it’s like comparing a baby to a full grown adult- there’s way more milestones and steps. This obviously takes a lot more work than can be seen on the outside.I know there’s more that goes into this."
- [Question: What can be changed?]"It should have a sense of cohesiveness. You can tell it’s formatted differently. I like the Game Hub page because it feels like it’s meant to be part of the same website."

<br>**Reflection:**<br>
Did the users perform the tasks as you expected? 
- Yes; the functions worked the way I expected them to, BUT ONLY when Sonya’s script blockers on her computer were off. Because of the particular settings she had, parts of the page looked off to what we coded them to be until she fixed it; at first, she couldn’t even get to the main page, and then in the calendar the arrows became script writing instead of actual arrows.<br>

Did the users’ actions produce the results they expected?
- There were parts they clicked on expecting a function to happen, and then surprised when it didn’t, like the calendar, the days lit up, but no event scold be placed inside.<br>

What did the users like the most? 
- She liked the game hub, in the sense that it worked, but didn’t quite see the usefulness of getting people involved in participation; probably because we haven’t set up the participation functions yet. But she also liked the calendar and figured it does serve it basic functions- just hrd to add and remove days.<br>

Is your value proposition accomplished? 
- Not entirely; Sonya compared it to be a fledgling program with solid aspects. It doesn't have the communication/social media aspects set up yet, but the fondation is there; there's a vision and remnants of where things can and should go, but it’s still in its infancy. It’s not there yet, but It could go somewhere.<br>

### Interview: 2<br>
**Summary:** I will put content here;<br>
**Interviewer:** Sami Jurado<br>
**Interviewee** David Jurado<br>
**Date:** Novemeber 30th, 2023; Thrusday at 3:30pm <br>
**Consumer Segments:** David is a parent who is a part of his daughter's cub scout committee as an event coordinator.<br>

<br>**Key Insights:**<br>
- I will input content here!
  
<br>**Memorable Quotes:**<br>
- I will put content here!

<br>**Reflection:**<br>

Did the users perform the tasks as you expected? <br>
- I will put content here!<br>

Did the users’ actions produce the results they expected?
- Content will be here soon!<br>

What did the users like the most? 
- Content will appear here!<br>

Is your value proposition accomplished? 
- Content will show up eventually!<br>


