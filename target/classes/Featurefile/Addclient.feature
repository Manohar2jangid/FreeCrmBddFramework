 @Smoke
Feature: Login to Landscapper admin

Scenario: 1. To test or verify to view client list

	Given Add Client_User is already on login page
	When Add Client_Title of login page is Login
	Then Add Client_User enter username "1_land@yopmail.com"
	Then Add Client_User enter password "admin@1" 
	Then Add Client_User click on Submit button
	Then Add Client_View client list
	Then Add Client_Close browser
	
	@Smoke
Scenario: 2. To test or verify client listining page

	
	Then Add Client_User enter username "1_land@yopmail.com"
	Then Add Client_User enter password "admin@1" 
	Then Add Client_User click on Submit button
	Then Add Client_View client list
	Then Add Verify Title of client list page
	Then Add Client_Close browser
