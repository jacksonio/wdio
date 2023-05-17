Feature: File upload

# It shows basic file upload manipulations

  Scenario Outline: It should be able to select file for file upload input
    Given Open page with provided url "<navigateUrl>"
    Then Select iframe by query "<iframeQuery>" switch to it
    Then Click on element by query "<clickButtonQuery>"
    Then Element by query "<checkResultQuery>" should has inner text "<fileName>"
    Examples:
      | navigateUrl                               | iframeQuery                 | fileName  | clickButtonQuery      | checkResultQuery       |
      | https://the-internet.herokuapp.com/upload | input[id=file-upload] | dummy.txt | input[id=file-submit] | div[id=uploaded-files] |
