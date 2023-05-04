Feature: Tabs

# It shows basic tabs navigation

  Scenario Outline: It should be able to navigate between browser tabs. Open and close tabs.
    Given Open page with provided url "<navigateUrl>"
    Then Click on the <linkUrl>
    Then Navigate to the browser tab with title "<tabTitle>"
    Then Close current browser tab
    Then Navigate to the browser tab with title "<mainTabTitle>"
    Then Should be "<tabsCount>" open tabs
    Then Current tab should has title "<mainTabTitle>"
    Examples:
      | navigateUrl                                | linkUrl                       | tabTitle                                                                    | tabsCount | mainTabTitle |
      | https://the-internet.herokuapp.com/windows | /windows/new                  | New Window                                                                  | 1         | The Internet |
      | https://the-internet.herokuapp.com/windows | http://elementalselenium.com/ | Elemental Selenium: Receive a Free, Weekly Tip on Using Selenium like a Pro | 1         | The Internet |

