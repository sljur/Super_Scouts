# Deliverable 4: Implementation 1

## Introduction:

## Implemented Requirements:
1. Group Creation:
   - Requirement: As a group leader, I want to create a group so that people in my group can join.
   - Issue: https://github.com/sljur/Super_Scouts/issues/21
   - Pull Request: [Commit #88](https://github.com/sljur/Super_Scouts/commit/b837e3973c6bf75978a8c324bacc62eea403d9ef)
   - Implemented by: Benjamin Huntoon
   - Approved by: Dalton Tippings
     
### Tests:
- Unfornutately we were only able to produce a single  test for this deliverable that being for group creation.
1. Group Creation:
   - The framework chosen to test the "script.js" code for the group name submission was jest with a testing environment of jsdom.
   - Here is a link to the example test which exists when the user enters no submission: [here](https://github.com/sljur/Super_Scouts/blob/main/website/script.test.js)
   - The example test case used in the test code asserts than when a user inputs a name it will be displayed and carried over to produce a unique group page for that name. Currently the default case when there is no user submission, the script.js will produce the same result only with the name "myGroup".
   - Furture releases will focus on requiring user entry and preventing the same group name from being chosen more than once.
   - Upon entering the test command this is the result:
     ![testDemoImageSuperScouts1](https://github.com/sljur/Super_Scouts/assets/116771608/92ba8717-2a6c-4193-a6a8-1f77de5ed1da)


### Adopted Technologies:
- Node.js
- JavaScript, HTML, CSS
- Jest
- Hostwinds

### Learning Training:

## Deployment:
- Our project is located [here](http://superscouts.site/)
- For the project deployment we chose to use a hostwinds server to run our website with Node.js running the backend.
- In the current 0.1.0 Alpha version of our project there is little to no backend code, but we intend to more heavily focus on backend development as the project continues. 

## Licensing:

## Readme File:
- Please refer to the [README.md](https://github.com/sljur/Super_Scouts/blob/main/README.md) file in project files

## Look & Feel:
   - We determined in our first couple of meetings that we wanted the website to be intuitive and clear to understand. A few of our interviewees complained about how ScoutBook was difficult to use, despite being the official app for Scouts; making sure our own website was a least easy to navigate then became a prominent point, even if the website itself was simple in looks. As a group, we settled on a easy to see navigation bar towards the top of the screen, but below the heading of the webpage. The idea was for the heading to pop out, making the navigation bar incredibly easy to find. The tabs that would hosted on the navigation bar would be blunt in this uses; if the tab led to a calendar, the tab should simply be labeled as 'calendar', and the same would go for any features we wanted to add. For the main part of the homepage, we wanted a group's events to be showcased, the very top being whatever pictures were posted from the most recent event, or a reminder for an upcoming event, going backwards; the further down the page you went, the further down the timeline of events you would go.
   - This is what the landing page looks like upon initial URL search:   
![superscouts0 1 0AlphaLandingPage](https://github.com/sljur/Super_Scouts/assets/116771608/5860a250-34e4-4b66-91d2-52b601385132)
- This is what a potential group home page would look like complete with dynamic title and display names for individual groups depending on user entry:
![superscouts0 1 0AlphaGroupPage](https://github.com/sljur/Super_Scouts/assets/116771608/4dc704d3-c2dc-4a1f-98a0-ce7e9741575a)
- This is what the Calendar looks like when you click on the calendar button:
![SS_SUPERSCOUT_CALENDAR_01](https://github.com/sljur/Super_Scouts/assets/116686483/1bc33467-5ce7-43c3-982b-b7d13ca62e1c)


## Lessons Learned:

## Demo:
- Please enjoy our demo of SuperScouts 0.1.0 Alpha


https://github.com/sljur/Super_Scouts/assets/116771608/ab73c2f3-d78e-4e6e-9917-1cbe28514891



