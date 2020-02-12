
/*
* This function is the one that should be called. It calls the chain of helper functions to eventually
* return a reformatted HTML document (if the window size is mobile-sized).
* Accepts a string of valid HTML and returns a string of valid HTML
*/
function conditionallyConvertToMobile(htmlString) {
    // If the window size is mobile-sized. 1024 is the width of the Amazon Kindle Fire. Subject to change.
    if ($( window ).width() <= 1024) {

        // Create a dummy DOM element and add our html to it
        let dummy = $("<div></div>");
        $(dummy).append(htmlString);

        // The contact information div is the third div
        let col2 = $(dummy).find("div")[3];
        console.log(col2);

        // The place to put the contact information div is the first (and only) br
        let heading = $(dummy).find("br")[0];
        console.log(heading);

        // Detach the contact information column and adjust the CSS to make it not float
        let contactInfo = $(col2).detach();
        $(contactInfo).css("float", "none");
        $(contactInfo).css("position", "static");

        // Add the contact information div back in
        $(heading).after(contactInfo);

        return $(dummy).html();
    }

    return htmlString;
}
