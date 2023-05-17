Feature: Keys pressing

# It shows basic manipulations with pressing keys

  Scenario: It should be able to select all entered text and delete it
    Given Open page with provided url "https://the-internet.herokuapp.com/iframe"
    When Select iframe by query "iframe[id=mce_0_ifr]" switch to it
    Then Click on element by query "[id=tinymce]"
    Then Add text "Hello world" to element by query "[id=tinymce]"
    Then Press keys "Meta,A"
    Then Press keys "Delete"
    Then Element by query "[id=tinymce]" should has inner text ""



