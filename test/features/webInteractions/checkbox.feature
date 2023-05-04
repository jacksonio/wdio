Feature: Checkboxes

# It shows basic select manipulations

  Scenario Outline: It should be able to select all checkboxes if it's not selected
    Given Open page with provided url "<navigateUrl>"
    Then Select all elements with query "<query>"
    Then All elements with query "<query>" should be selected
    Examples:
      | query                | navigateUrl                                   |
      | input[type=checkbox] | https://the-internet.herokuapp.com/checkboxes |

