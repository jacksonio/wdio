Feature: Inputs

# It shows basic interactions with inputs

  Scenario Outline: It should be able to enter number values to input type number
    Given Open page with provided url "<navigateUrl>"
    When Find the input by query "<query>" and enter value "<value>"
    Then Element by query "<query>" should has value "<compare_value>"
    Examples:
      | query              | navigateUrl                               | value   | compare_value |
      | input[type=number] | https://the-internet.herokuapp.com/inputs | 12345   | 12345         |
      | input[type=number] | https://the-internet.herokuapp.com/inputs | adgdfgf |               |
