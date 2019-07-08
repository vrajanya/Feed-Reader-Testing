# Feed Reader Testing Project

In this project you are given a web-based application that reads RSS feeds. The original developer of this application clearly saw the value in testing, they've already included [Jasmine](http://jasmine.github.io/) and even started writing their first test suite! Unfortunately, they decided to move on to start their own company and we're now left with an application with an incomplete test suite. 

# About the tests

## Test Suite "The Menu"
* test to make sure that the allFeeds variable has been defined and that it is not empty   
* a test that loops through each feed in the allFeeds object and ensures it has a URL defined and that the URL is not empty.
* test that loops through each feed in the allFeeds object and ensures it has a name defined and that the name is not empty.
* test that ensures the menu element is hidden by default.
* test that ensures the menu changes visibility when the menu icon is clicked.

## Test Suite "Initial Entries"

* test ensures when the loadFeed function is called & completes its work,there is at least a 1 .entry element within the .feed container
* The loadFeed() is asynchronous so that the test should run beforeEach() and done() to ensure the loadFeed() runs in the test. 

## Test Suite "New Feed Selection"
* Test that ensures when a new feed is loaded by the loadFeed function that the content actually changes.
* There are more than one feed in the allFeeds. The loadFeed() function load specified feed with the id(index).
* The second feed content should be different from the first feed. So that by comparing the rendered HTML content, we can check if the program loads a different feed with the function instead the same one. 

# Resources
[JavaScript Testing](https://www.udacity.com/course/javascript-testing--ud549). 

# Contributing
Starter code is from Udacity which contains the first test "RSS Feeds"

# How to run tests
* Click "Clone or download" / "Download ZIP".
* Open the folder and open index.html in browser.
* Test results are available at the bottom of the screen. Specs with passing tests show as green; specs with failing tests show as red.
* open jasmine/spec/feedreader.js file to start editing the test suites.
