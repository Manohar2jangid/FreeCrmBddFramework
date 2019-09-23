/*
 * package StepDefinationfile;
 * 
 * import org.openqa.selenium.By; import org.openqa.selenium.WebDriver; //import
 * org.openqa.selenium.WebElement; import
 * org.openqa.selenium.chrome.ChromeDriver; import org.testng.Assert;
 * 
 * import cucumber.api.java.en.Given; import cucumber.api.java.en.Then; import
 * cucumber.api.java.en.When;
 * 
 * public class LoginStepDef { WebDriver driver;
 * 
 * @Given("^User is already on login page$") public void
 * user_is_already_on_login_page() { System.setProperty("web.driver.chrome",
 * "/D/eclipse/chromedriver"); driver= new ChromeDriver();
 * driver.get("http://stage.landscapper.com/neilslunceford/admin/login");
 * driver.manage().window().maximize(); }
 * 
 * 
 * @When("^Title of login page is Login$") public void
 * title_of_login_page_is_Login() {
 * 
 * String title=driver.getTitle(); // System.out.println(title);
 * Assert.assertEquals("Login", title); }
 * 
 * @Then("^User enter username \"(.*)\"$") public void
 * user_enter_username(String username) {
 * 
 * 
 * driver.findElement(By.name("LoginForm[email_address]")).sendKeys(username);
 * 
 * }
 * 
 * 
 * @Then("^User enter password \"(.*)\"$") public void
 * user_enter_password(String password) {
 * driver.findElement(By.name("LoginForm[password]")).sendKeys(password); }
 * 
 * @Then("^User click on Submit button$") public void
 * user_click_on_Submit_button() throws Exception {
 * driver.findElement(By.xpath("//*[@id=\"login\"]/div[3]/div/button")).click();
 * Thread.sleep(10000);}
 * 
 * @Then ("^Title of dashboard page is Dashboard$") public void
 * Title_of_dashboard_page_is_Dashboard() { String Title=driver.getTitle();
 * //System.out.print(Title); Assert.assertEquals("Dashboard", Title); }
 * 
 * 
 * @Then("^verify validation message for invalid user$") public void
 * verify_validation_message_for_invalid_user() { String expected=
 * driver.findElement(By.xpath("//*[@id=\"login\"]/div[1]/p")).getText();
 * //System.out.print(expected); String
 * actual="Sorry, Landscapper doesn't recognize that email address.";
 * Assert.assertEquals(actual,expected);
 * 
 * }
 * 
 * 
 * @Then("^User Click on menu$") public void User_menuCLICK() throws Exception {
 * driver.findElement(By.xpath(
 * "/html/body/div[2]/header/nav/div/ul/li[4]/a/span")).click();
 * Thread.sleep(1000); }
 * 
 * 
 * 
 * 
 * @Then("^User logout$") public void User_logout() {
 * driver.findElement(By.xpath(
 * "/html/body/div[2]/header/nav/div/ul/li[4]/ul/li[3]/div[2]/form/button")).
 * click();
 * 
 * }
 * 
 * @Then ("^Close browser$") public void Close_browser() { driver.quit(); }
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * }
 */