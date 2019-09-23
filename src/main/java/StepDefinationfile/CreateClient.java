
package StepDefinationfile;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class CreateClient {
	WebDriver driver;

	@Given("^Add Client_User is already on login page$")
	public void Add_user_is_already_on_login_page() {
		System.setProperty("web.driver.chrome", "/D/eclipse/chromedriver");
		driver = new ChromeDriver();
		driver.get("http://stage.landscapper.com/neilslunceford/admin/login");
		driver.manage().window().maximize();
	}

	@When("^Add Client_Title of login page is Login$")
	public void Add_title_of_login_page_is_Login() {

		String title = driver.getTitle();
		System.out.println(title);
		Assert.assertEquals("Login", title);
	}

	@Then("^Add Client_User enter username \"(.*)\"$")
	public void Add_user_enter_username(String username) {

		driver.findElement(By.name("LoginForm[email_address]")).sendKeys(username);

	}

	@Then("^Add Client_User enter password \"(.*)\"$")
	public void Add_user_enter_password(String password) {
		driver.findElement(By.name("LoginForm[password]")).sendKeys(password);
	}

	@Then("^Add Client_User click on Submit button$")
	public void Add_user_click_on_Submit_button() throws Exception {
		driver.findElement(By.xpath("//*[@id=\"login\"]/div[3]/div/button")).click();
		Thread.sleep(10000);
	}

	/*
	 * @Then("^Add Client_Title of dashboard page is Dashboard$") public void
	 * Title_of_dashboard_page_is_Dashboard() { String Title = driver.getTitle();
	 * System.out.print(Title); Assert.assertEquals("Dashboard", Title); }
	 */


	@Then("^Add Client_View client list$")
	public void Add_view_client_list() throws Exception {
		driver.findElement(By.xpath("/html/body/div[2]/aside/div/div/ul/li[2]/a")).click();
		Thread.sleep(1000);
	}

	/*
	 * @Then("^Add Client_User Click on menu$") public void User_menuCLICK() throws
	 * Exception { driver.findElement(By.xpath(
	 * "/html/body/div[2]/header/nav/div/ul/li[4]/a/span")).click();
	 * Thread.sleep(1000); }
	 */
	/*
	 * @Then("^Add Client_Add Client_User logout$") public void User_logout() {
	 * driver.findElement(By.xpath(
	 * "/html/body/div[2]/header/nav/div/ul/li[4]/ul/li[3]/div[2]/form/button")).
	 * click();
	 * 
	 * }
	 */
	@Then("^Add Verify Title of client list page$")
	public void Add_Verify_Title_of_client_list_page() { 
		String expected= driver.findElement(By.xpath("/html/body/div[2]/div/section[1]/h1")).getText();
	  //System.out.print(expected); 
		String actual="Client";
	  Assert.assertEquals(actual,expected);
	 
	 }
	
	 
	/*
	 * String actualTitle = driver.getTitle(); String expectedTitle =
	 * "Title of Page"; assertEquals(expectedTitle,actualTitle);
	 */

	@Then("^Add Client_Close browser$")
	public void Add_Close_browser() {
		driver.close();
	}

}
