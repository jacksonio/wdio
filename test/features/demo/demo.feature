Feature: Demo feature

  Scenario Outline: Run first demo case
    Given Open page with provided url "<navigateUrl>"
    When Search with <searchItem>
    Then Click on the <compareUrl>
    Then Url should match "<compareUrl>"
    Examples:
      | searchItem | compareUrl            | navigateUrl        |
      | WDIO       | https://webdriver.io/ | https://google.com |
