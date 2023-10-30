# Deliverable 4: Implementation 1

## Introduction:
SuperScouts is an intuitive, community-centered website with an emphasis on scouting that allows for group planning and organization with a basis for progression tracking and community events. By consolidating an activity calendar, discussion posts, and other important information for day-to-day operations, SuperScouts effectively combats disorganization by keeping every piece of information a group needs in a single place. Once accessing the website, you are able to log into your profile and view the mentioned website features that are specific to your group. From the homepage, a timeline of events would be displayed at the side of the screen while media from recent events would be posted on the top. The navigation bar is settled towards the top of the screen which can be accessible whilst being on any page. On the left of the navigation bar contains the Homepage, the Calendar, the Chat, the Files, and the Settings while the right of the navigation bar contains the User’s Profile. Finally, to keep the engagement of the users, there will be an interactive game to monitor a user’s activity.

[Super Scouts](http://superscouts.site/)

## Implemented Requirements:
1. Group Creation:
   - Requirement: As a group leader, I want to create a group so that people in my group can join.
   - Issue: https://github.com/sljur/Super_Scouts/issues/21
   - Pull Request: [Commit #88](https://github.com/sljur/Super_Scouts/commit/b837e3973c6bf75978a8c324bacc62eea403d9ef)
   - Implemented by: Benjamin Huntoon
   - Approved by: Dalton Tippings
2. Calendar
    - Requirement:  As a group member, I want to be able to check what events are upcoming so I can organize my schedule.
    - Issue: https://github.com/sljur/Super_Scouts/issues/28
    - Pull Request: [Commit #90](https://github.com/sljur/Super_Scouts/commits/bf3a78035a971aa97358af10c7a064235e1f8ae3).
    - Implemented by: Sami Jurado
    - Approved by: Dalton Tippings 
     
### Tests:
- Unfortunately, we were only able to produce a single  test for this deliverable that being for group creation.
1. Group Creation:
   - The framework chosen to test the "script.js" code for the group name submission was jest with a testing environment of jsdom.
   - Here is a link to the example test that exists when the user enters no submission: [here](https://github.com/sljur/Super_Scouts/blob/main/website/script.test.js)
   - The example test case used in the test code asserts that when a user inputs a name it will be displayed and carried over to produce a unique group page for that name. Currently the default case when there is no user submission, the script.js will produce the same result only with the name "myGroup".
   - Future releases will focus on requiring user entry and preventing the same group name from being chosen more than once.
   - Upon entering the test command this is the result:
     ![testDemoImageSuperScouts1](https://github.com/sljur/Super_Scouts/assets/116771608/92ba8717-2a6c-4193-a6a8-1f77de5ed1da)

### Adopted Technologies:
- **JavaScript**: Javascript has a vast ecosystem of libraries, frameworks, and tools. It can be used for both front-end and back-end development, making it a versatile choice for building our web application. JavaScript also enables the creation of dynamic, interactive user interfaces that will help enhance our user experience. It is also a programming language that most of us in the group are familiar with. 
- **HTML**: HTML is the foundational markup language for creating web content and applications. It provides a structured way to organize the content which will enhance the accessibility and readability of our web content. HTML can be used in conjunction with CSS and JavaScript to create responsive web designs that adapt to different screen sizes. HTML will allow us to create hyperlinks that connect web pages and enable navigation within the website. 
- **CSS**: CSS allows us to control the visual appearance of web content. We are able to make the web application visually appealing and user-friendly. It separates the presentation layer from the content and structure of a web page. This separation enhances maintainability by allowing us to make changes to the styling without altering the HTML structure or JavaScript functionality. 
- **Jest**: We chose to use Jest to test our JavaScript. Jest is straightforward to set up and use. It provides built-in support for test runners and assertion libraries which has simplified the testing process. Jest is also fast and efficient as it has features like parallel test execution and smart test selection that enable rapid feedback. It has been a valuable tool for our group to ensure the quality of our JavaScript.
- **Node.js**: Node.js is built on the V8 JavaScript engine by Google, known for its speed and efficiency. It allows for the use of JavaScript for both server-side and client-side development. Node.js has cross-platform compatibility making it a versatile choice for developing applications that need to run on diverse server environments like ours. Node.js makes it relatively easy to horizontally scale applications by adding more instances to a cluster or load balancing, which will be needed to handle varying levels of web traffic.
- **Hostwinds**: Hostwinds is a popular choice as our web hosting provider. Hostwinds provides high-performance hosting solutions with a focus on speed and uptime. The cost was relatively cheap making it a cost-effective choice. Hostwinds provides an easy-to-use control panel, simplifying the management of hosting resources and configurations. It also promises a high level of uptime, ensuring our web application will be available to our users consistently.
  
### Learning Training:

## Deployment:
- Our project is located [here](http://superscouts.site/)
- For the project deployment we chose to use a hostwinds server to run our website with Node.js running the backend.
- In the current 0.1.0 Alpha version of our project there is little to no backend code, but we intend to more heavily focus on backend development as the project continues. 

## Licensing:
For our project, we decided to use the Apache License. The Apache License, often referred to as the Apache License 2.0, is a permissive open-source software license that allows developers to use, modify, and distribute the covered software under certain terms and conditions. It may work well with web-related applications and elements that we utilize for our website, which is why we chose it. It allows permissive nature, compatibility, patent grant, commercial use, has no Copyleft clause, and is community-friendly.

## Readme File:
- Please refer to the [README.md](https://github.com/sljur/Super_Scouts/blob/main/README.md) file in project files
- Other files: [CODE_OF_CONDUCT.md](https://github.com/sljur/Super_Scouts/blob/main/CODE_OF_CONDUCT.md), [CONTRIBUTING.md](https://github.com/sljur/Super_Scouts/blob/main/CONTRIBUTING.md)

## Look & Feel:
   - We determined in our first couple of meetings that we wanted the website to be intuitive and clear to understand. A few of our interviewees complained about how ScoutBook was difficult to use, despite being the official app for Scouts; making sure our own website was the least easy to navigate then became a prominent point, even if the website itself was simple in looks. As a group, we settled on an easy-to-see to see navigation bar towards the top of the screen, but below the heading of the webpage. The idea was for the heading to pop out, making the navigation bar incredibly easy to find. The tabs that would hosted on the navigation bar would be blunt in this use; if the tab led to a calendar, the tab should simply be labeled as 'calendar', and the same would go for any features we wanted to add. For the main part of the homepage, we wanted a group's events to be showcased, the very top being whatever pictures were posted from the most recent event, or a reminder for an upcoming event, going backward; the further down the page you went, the further down the timeline of events you would go.
   - This is what the landing page looks like upon initial URL search:   
![superscouts0 1 0AlphaLandingPage](https://github.com/sljur/Super_Scouts/assets/116771608/5860a250-34e4-4b66-91d2-52b601385132)
- This is what a potential group home page would look like complete with a dynamic title and display names for individual groups depending on user entry:
![superscouts0 1 0AlphaGroupPage](https://github.com/sljur/Super_Scouts/assets/116771608/4dc704d3-c2dc-4a1f-98a0-ce7e9741575a)
- This is what the Calendar looks like when you click on the calendar button:
![SS_SUPERSCOUT_CALENDAR_01](https://github.com/sljur/Super_Scouts/assets/116686483/1bc33467-5ce7-43c3-982b-b7d13ca62e1c)


## Lessons Learned:

## Demo:
- Please enjoy our demo of SuperScouts 0.1.0 Alpha


https://github.com/sljur/Super_Scouts/assets/116771608/ab73c2f3-d78e-4e6e-9917-1cbe28514891



