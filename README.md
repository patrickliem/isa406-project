This repository contains the code that will be used for Purple Blue Team's Spring 2020 ISA 406 project.

# Project Information

## Test files directory
These are sample HTML files that represent what the HTML output should look like after running our function, and before running our function, respectively. inputX.html corrresponds to outputX.html

## driver.js
This file is meant to simulate what FSB's backend might look like. It calls the function in mobileFormatter.js and displays the output to samplePage.html

## samplePage.html
This file is a sample page that shows the output of our function.

## mobileFormatter.js
This is the file that stores the function we wrote that converts desktop-friendly HTML to mobile-friendly HTML, if the screen size is that of a mobile device.

# Important Notes and Dependencies
* The HTML passed to our function must be provided in the form of a string.
* Our solution relies on JQuery, so that should be properly installed.
* Our function should be called each time the window is resized. 
* The solution is dependent on the right column having a specific style, and the first br tag being placed in a specific spot.
This could be changed to be dependent on the right column floating, and there being an h1 that matches a department. This might be
slightly more modular. In any case, having id tags present on both the div and the h3 (or the br below it) would be very helpful.


# Development Support

## How to use GitHub Desktop
In the top bar of GitHub Desktop, you can see a few menus: "Current Repository," "Current Branch," and a third one that says either "Fetch Origin," "Push Origin," or "Publish Branch." When you first start working on some changes, make sure you switch to the correct branch you were working on using the second tab, or create a new branch. If you are picking up where you left off, make sure you click "Fetch Origin," which will ensure your branch is the same as the one on GitHub. If you made a new branch, you just have to click "Publish Branch" to make sure that GitHub knows about the branch you just made on your computer.

After you've made sure you're on the right change, make whatever changes you need using a text editor or IDE or whatever you want. Whenever you finish a batch of changes that seem somewhat related, go back to GitHub Desktop and look at the bottom left corner. Add a name for your batch of changes (something like "added x file" or "added x feature" is fine) in the first box, and then a longer description (if you want) in the second box. Finally, hit the "Commit" button. You can keep making changes and commits until you're done working. Before you finish up, make sure you click the button in the top right that says "Push Origin." This will add all of your commits and changes to the one on GitHub.

## Submitting a Pull Request
The last step to making your changes go on the final product is making a pull request. You can do this from GitHub Desktop or from the website, but basically you switch to the branch you were working on and find a button that says "Create Pull Request." Once you do that, a pull request will be created to merge your branch with the parent branch (probably master). It will wait for someone to review and approve the change, and once it's approved it will merge the two branches together. I'm not sure whether anyone can approve a pull request, or only me (Patrick). I'll look into that later.