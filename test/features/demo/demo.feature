Feature: Demo feature

Feature description

  Scenario Outline: Run first demo case
    Given Google page is opened
    When Search with <searchItem>
    Then Click on the <compareUrl>
    Then Url should match <compareUrl>
    Examples:
      | searchItem | compareUrl            |
      | WDIO       | https://webdriver.io/ |
