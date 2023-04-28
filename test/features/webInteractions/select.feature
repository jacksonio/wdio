Feature: Select

# It shows basic select manipulations

  Scenario Outline: It should be able to select options by values
    Given Open page with provided url "<navigateUrl>"
    When Find the select by query "<query>" and select value "<value>"
    Then Element by query "<childQuery>" should has inner text "<compare_value>"
    Examples:
      | query               | navigateUrl                                 | value | compare_value | childQuery                             |
      | select[id=dropdown] | https://the-internet.herokuapp.com/dropdown | 1     | Option 1      | select[id=dropdown] > option[selected] |

  Scenario Outline: It should be able to receive all non disabled option values
    Given Open page with provided url "<navigateUrl>"
    When Find the select by query "<selectQuery>" and select value "<value>"
    Then Non selected option values with parent "<selectQuery>" should match "<nonSelectedOptionValues>"
    Examples:
      | selectQuery         | nonSelectedOptionValues           | value | navigateUrl                                 |
      | select[id=dropdown] | Please select an option, Option 2 | 1     | https://the-internet.herokuapp.com/dropdown |
      | select[id=dropdown] | Please select an option, Option 1 | 2     | https://the-internet.herokuapp.com/dropdown |
