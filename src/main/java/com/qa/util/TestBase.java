package com.qa.util;

import java.io.FileInputStream;
import java.io.IOException;

import org.openqa.selenium.WebDriver;

import com.googlecode.totallylazy.Properties;

public class TestBase {
	public static WebDriver driver;
	public static Properties prop;
	
	public TestBase() {
		try {
			prop=new Properties();
			FileInputStream fis= new FileInputStream(
					"/D/eclipse/FreeCrmBddFramework/pom.xml"
					+"/D/eclipse/FreeCrmBddFramework/src/main/java/com/qa/config/config.properties");
			prop.load(fis);
		}
		catch (IOException e) {
			e.getMessage();
			
		}
	}}
	


