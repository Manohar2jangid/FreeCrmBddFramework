Feature: Login to Landscapper admin

Scenario: 1. To test ro verify login functionality with valid credentials

	Given User is already on login page
	When Title of login page is Login
	Then User enter username "1_land@yopmail.com"
	Then User enter password "admin@1" 
	Then User click on Submit button
	Then Title of dashboard page is Dashboard
	Then User Click on menu
	Then User logout
	Then Close browser
	
Scenario: 2. To test ro verify login functionality with invalid credentials	

	Given User is already on login page
	When Title of login page is Login
	Then User enter username "1646464_land@yopmail.com"
	Then User enter password "admin@1" 
	Then User click on Submit button
	Then verify validation message for invalid user
	Then Close browser


