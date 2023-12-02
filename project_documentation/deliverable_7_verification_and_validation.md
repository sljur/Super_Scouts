# Deliverable 7: Verification and Validation

## Description:

## Verification: 
- ## Name Processing Test
     - **Testing Frame Work:** Jest
     - **Testing File Folder:** [here](https://github.com/sljur/Super_Scouts/tree/main/website0.1.1_Alpha/test)
     - **Test Example:** This test handles the group class, specifically with respect to how names are processed for group creation. For this test to run the framework needs to simulate the parts of an html page that would need to exist for a text submission to be entered, specifically the text box. The link to the class diagram of this project can be found [here](https://github.com/sljur/Super_Scouts/assets/116771608/38b49542-1cf3-4ef9-8ce7-7df92ded5930), and the link to the test file can be found [here](https://github.com/sljur/Super_Scouts/blob/main/website0.1.1_Alpha/test/name.test.js).
     - **Test Output:**<br><img width="675" alt="name_test_pic" src="https://github.com/sljur/Super_Scouts/assets/116771608/6dd73797-46f0-42a9-9f61-2777f26960cd"><br>
 
     
## Acceptance Tests:
- **Testing Framework:** Selenuim
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
**Summary:** Dave believes we hve an excellent starting point; but similar to Sonya, believes we only have a solid fondation, not the bells and whistles needed to be functional the way we need it to be to be used by a wide group of people. He equated comparing our website to a competitor, (like ScoutBook), to be comparing apples and oranges; not in the same bracket.<br>
**Interviewer:** Sami Jurado<br>
**Interviewee** David Jurado<br>
**Date:** Novemeber 30th, 2023; Thrusday at 3:30pm <br>
**Consumer Segments:** David is a parent who is a part of his daughter's cub scout committee as an event coordinator.<br>

<br>**Key Insights:**<br>
- Dave thought it was pretty nifty that the website remmbered his previous group name and was able to get back to it; there had been an issue where he lost the page within seconds of entering the site because he clsoed the tab.
- He though the Progression Tracker was pretty well done; not up to high-spec standards, but you can create milestones and put them into a list, which he appreciates. At one point he made a comment about imporving a fucntion fro the drop-down tab, only to realize the function already existed, he just hadn't clicked a button; at which point he told me to ignore him because clearly things were working fine.
- Dave enjoyed the Calendar, mostly because it was pretty and looked nice, and told the correct current date. He noted that although it was also nice that he could add and remove events, was dissapointed that he couldn't insert them into the selected day. Dave remarked that the 'go back' button needed to be bigger as well.
- The Game Hub Dave had little to discuss, mostly because he was too focused on trying to win. He thought having a game section for memebers to compete with other's in their group was an excellent idea.
  
<br>**Memorable Quotes:**<br>
- [About the Progression Tracker]"This is an html interface, so our aspirations needs to be low- but you can use it; drop down boxes work. It’s a table- as for aesthetics, it works. Right now, I don’t think it’s operational- but as a test environment and something to build off of? Sure. I would use it to make a list. I don’t really have a way to rate it- sure. It’s not professional, but you’re students- you’re not getting a paycheck for this, so I’m not expecting it. Some things work, some things don’t."
- [About the Game] "I feel a small sparking of admiration in my chest. Oh, game page 100% working, not even a question. Damnit, I hate this thing. I can’t win…"
- [About if the Messaging Capabilities were implimented] "If the messaging stuff worked, it work make it better. Without a doubt."

<br>**Reflection:**<br>

Did the users perform the tasks as you expected? <br>
- Yes; actually, Dave seemed to already be way ahead of me in adding and removing stuff, even without my explanations.<br>

Did the users’ actions produce the results they expected?
- Not exactly; because some of the functions, though present, don’t actually work, they were some moments of ‘Why is this not working? It looks like it should work. Where is the action?” A noticeable moment was when Dave clicked the profile button expecting to be linked to a profile page; it was the first thing he checked for, and was confused when he wasn’t linked, which was a surprise for me. I knew it was an important feature we hadn’t been able to implement, but not how much.<br>

What did the users like the most? 
-  The game, because it was fully working; but Dave did appreciate the Calendar (Because it is pretty and showed the date) and liked that the progression tracker did at least create a list of things. But especially the game, because there was something to focus on and do. It wasn’t just a straight up organizational website.<br>

Is your value proposition accomplished? 
- Not fully; we wanted to be able to facilitate communication between members of a group and allow communication and organization of events, but we weren’t able to implement everything to a standard where it could be fully usable as a website for what we wanted. We have a really good foundation (According to interviewee Dave, at least) but there’ a lot of extra things we would need to add in order to make it workable fro the masses.<br>


