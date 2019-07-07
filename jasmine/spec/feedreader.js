/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* test suite just contains related set of RSS feeds variable definitions */
    describe('RSS Feeds', function() {

        /* test to make sure that the allFeeds variable has been defined and that it is not empty*/
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* a test that loops through each feed in the allFeeds object and ensures it has a URL defined and that the URL is not empty.*/
        it('url defined & its not empty', function() {
            for(feed of allFeeds) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            }
        });

        /* test that loops through each feed in the allFeeds object and ensures it has a name defined and that the name is not empty. */
        it('name defined & its not empty', function() {
            for(feed of allFeeds) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            }

        });
    });

    /*test suite named "The menu" */
    describe('The Menu', function() {

        var menuClassList = document.querySelector('body').classList;

        /* test that ensures the menu element is hidden by default.*/
        it('menu is hidden by default', function() {
           menuOnload = menuClassList.contains('menu-hidden');
           expect(menuOnload).toBe(true);
        });

        /* test that ensures the menu changes visibility when the menu icon is clicked.*/
        it('menu changes visibility when the menu icon is clicked', function() {
            let menuHamIcon = document.querySelector('.menu-icon-link');
            menuHamIcon.click();
            expect(menuClassList.contains('menu-hidden')).toBe(false);
            menuHamIcon.click();
            expect(menuClassList.contains('menu-hidden')).toBe(true);
        });
    });

    /* test suite named "Initial Entries" */
    describe('Initial Entries', function() {

        beforeEach(function(done) {
            setTimeout(function() {
                loadFeed(0, done);
                done();
            }, 1000);
        });
 /* test ensures when the loadFeed function is called & completes its work,there is at least a 1 .entry element within the .feed container*/
        it('check if there are entries in the feed container', function(done) {

            let feedContainer = document.querySelector('.feed');
            let articleEntry = feedContainer.querySelectorAll('article.entry');
            expect(articleEntry.length).toBeGreaterThan(0);
            done();
        });
    });

    /* test suite named "New Feed Selection" */
    describe('New Feed Selection', function() {

        var firstFeed,
            secondFeed,
            feedContainer = document.querySelector('.feed');

        beforeEach(function(done) {
            loadFeed(0, function(){
                firstFeed = feedContainer.innerHTML;
                done();
            });

            loadFeed(1, function(){
                secondFeed = feedContainer.innerHTML;
                done();
            });
        });

        /* test that ensures when a new feed is loaded by the loadFeed function that the content actually changes.*/

        it('check if the content actually changes with a new feed', function(done) {
            expect(firstFeed).not.toBe(secondFeed);
            loadFeed(0, function() {
                done();
            });
        });
    });
}());
