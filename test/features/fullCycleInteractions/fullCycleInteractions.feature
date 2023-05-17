Feature: Full cycle interactions

  Scenario: Login, validate items count, validate items price
    Given Open page with provided url "https://www.saucedemo.com"
    When User login to the site
    Then Url should match "https://www.saucedemo.com/inventory.html"
    Then Should be "6" items on the page by selector ".inventory_item"

