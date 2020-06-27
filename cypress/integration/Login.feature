Feature: Login

  I want to log into Conduit

  @smoke
  Scenario: Conduit Login
    Given I open Conduit login page
    When I type in
      | username                  | password                                                                                         |
      | amy.schaplowsky@gmail.com | Mi01ITBOPV47ITUhfDozfjp2Oi4ufGheSjYrKzl4PTpvKl5NRTVTIT0qfD03XyE9OCEtJXxvdDowOnYuLX4rODp6OUE7fF9z |
    And I click on Sign in button
    Then "Your Feed" should be shown