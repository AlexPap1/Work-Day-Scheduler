# Work Day Scheduler Starter Code

User Story
---------------------------------------------------------------------------------------------------------------
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively

Acceptance Criteria
---------------------------------------------------------------------------------------------------------------
GIVEN I am using a daily planner to create a schedule
<br />
WHEN I open the planner
<br />
THEN the current day is displayed at the top of the calendar
<br />
-  I added the date using the moment.js function with a Month, date, and year format. I also included text to specify that the date displayed is the current date.

---------------------------------------------------------------------------------------------------------------

WHEN I scroll down
THEN I am presented with time blocks for standard business hours

WHEN I view the time blocks for that day
THEN each time block is color-coded to indicate whether it is in the past, present, or future

WHEN I click into a time block
THEN I can enter an event

WHEN I click the save button for that time block
THEN the text for that event is saved in local storage

WHEN I refresh the page
THEN the saved events persist