# Work Day Scheduler Starter Code

User Story
-------------------------------------------------------------------------------------------------------------
AS AN employee with a busy schedule
<br />
I WANT to add important events to a daily planner
<br />
SO THAT I can manage my time effectively

Acceptance Criteria: GIVEN I am using a daily planner to create a schedule
-------------------------------------------------------------------------------------------------------------
WHEN I open the planner
<br />
THEN the current day is displayed at the top of the calendar
<br />
-  I added the date using the moment.js function with a Month, date, and year format. I also included text to specify that the date displayed is the current date.

-------------------------------------------------------------------------------------------------------------
WHEN I scroll down
<br />
THEN I am presented with time blocks for standard business hours
<br />
-  I created a div with a unique ID for each time between 8 and 5. I used the css to tie the classes to make the time block presentable.

-------------------------------------------------------------------------------------------------------------
WHEN I view the time blocks for that day
THEN each time block is color-coded to indicate whether it is in the past, present, or future

WHEN I click into a time block
<br />
THEN I can enter an event
<br />
-  I used the '< textarea >' in html along with tying it to the css in order to make task inputting possible.

-------------------------------------------------------------------------------------------------------------
WHEN I click the save button for that time block
THEN the text for that event is saved in local storage

WHEN I refresh the page
THEN the saved events persist