Feature: Tables

# It shows basic tables interactions

  Scenario Outline: <testId>:It should be able to collect all table data based on query
    Given Open page with provided url "https://the-internet.herokuapp.com/tables"
    Then Collect all table data by query "<tableQuery>"
    Examples:
      | testId   | tableQuery       |
      | 1_TABLES | table[id=table1] |
      | 2_TABLES | table[id=table2] |

