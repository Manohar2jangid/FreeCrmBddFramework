$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("/D/eclipse/FreeCrmBddFramework/src/main/java/Featurefile/Addclient.feature");
formatter.feature({
  "line": 2,
  "name": "Login to Landscapper admin",
  "description": "",
  "id": "login-to-landscapper-admin",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Smoke"
    }
  ]
});
formatter.scenario({
  "line": 4,
  "name": "1. To test or verify to view client list",
  "description": "",
  "id": "login-to-landscapper-admin;1.-to-test-or-verify-to-view-client-list",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "Add Client_User is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Add Client_Title of login page is Login",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Add Client_User enter username \"1_land@yopmail.com\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Add Client_User enter password \"admin@1\"",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Add Client_User click on Submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Add Client_View client list",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Add Client_Close browser",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateClient.Add_user_is_already_on_login_page()"
});
formatter.result({
  "duration": 4479904847,
  "error_message": "org.openqa.selenium.SessionNotCreatedException: session not created: This version of ChromeDriver only supports Chrome version 75\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Cgt-Jod-Lin-ManoharJ\u0027, ip: \u0027127.0.1.1\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00274.15.0-64-generic\u0027, java.version: \u00271.8.0_222\u0027\nDriver info: driver.version: ChromeDriver\nremote stacktrace: #0 0x55884e85b7a9 \u003cunknown\u003e\n\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$errorHandler$0(W3CHandshakeResponse.java:62)\n\tat org.openqa.selenium.remote.HandshakeResponse.lambda$getResponseFunction$0(HandshakeResponse.java:30)\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:126)\n\tat java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:193)\n\tat java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:958)\n\tat java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:126)\n\tat java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:499)\n\tat java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:486)\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:472)\n\tat java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:152)\n\tat java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\n\tat java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:531)\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:128)\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:74)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:136)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:213)\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\n\tat StepDefinationfile.CreateClient.Add_user_is_already_on_login_page(CreateClient.java:19)\n\tat ✽.Given Add Client_User is already on login page(/D/eclipse/FreeCrmBddFramework/src/main/java/Featurefile/Addclient.feature:6)\n",
  "status": "failed"
});
formatter.match({
  "location": "CreateClient.Add_title_of_login_page_is_Login()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1_land@yopmail.com",
      "offset": 32
    }
  ],
  "location": "CreateClient.Add_user_enter_username(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "admin@1",
      "offset": 32
    }
  ],
  "location": "CreateClient.Add_user_enter_password(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CreateClient.Add_user_click_on_Submit_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CreateClient.Add_view_client_list()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CreateClient.Add_Close_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 15,
  "name": "2. To test or verify client listining page",
  "description": "",
  "id": "login-to-landscapper-admin;2.-to-test-or-verify-client-listining-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 14,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "Add Client_User enter username \"1_land@yopmail.com\"",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "Add Client_User enter password \"admin@1\"",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "Add Client_User click on Submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "Add Client_View client list",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "Add Verify Title of client list page",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Add Client_Close browser",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "1_land@yopmail.com",
      "offset": 32
    }
  ],
  "location": "CreateClient.Add_user_enter_username(String)"
});
formatter.result({
  "duration": 24755659,
  "error_message": "java.lang.NullPointerException\n\tat StepDefinationfile.CreateClient.Add_user_enter_username(CreateClient.java:35)\n\tat ✽.Then Add Client_User enter username \"1_land@yopmail.com\"(/D/eclipse/FreeCrmBddFramework/src/main/java/Featurefile/Addclient.feature:18)\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin@1",
      "offset": 32
    }
  ],
  "location": "CreateClient.Add_user_enter_password(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CreateClient.Add_user_click_on_Submit_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CreateClient.Add_view_client_list()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CreateClient.Add_Verify_Title_of_client_list_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CreateClient.Add_Close_browser()"
});
formatter.result({
  "status": "skipped"
});
});