
/*
* This function is the one that should be called. It returns
* a reformatted HTML document that will resize based on the window size.
* Accepts a string of valid HTML and returns a string of valid HTML
*/
function enhanceHTML(htmlString, cutoffWindowSize) {

    // Create a dummy DOM element and add our html to it
    let dummy = $("<div></div>");
    $(dummy).append(htmlString);

    // The contact information div is the fourth div
    let rightCol = $(dummy).find("div")[3];

    // The place to put the contact information div is the second h1
    let heading = $(dummy).find("h1")[1];

    $(rightCol).attr("id", "right-column");
    $(heading).attr("id", "profile-heading");

    // Detach the contact information column
    let contactInfo = $(rightCol).detach();

    // Add the contact information div back in, but just above the Profile h1
    $(heading).before(contactInfo);

    // Add an inline script that will change the HTML dynamically.
    // Note: This assumes that the HTML will be placed somewhere in the body
    // tag of the template. If that is not the case, we can fall back to the
    // less ideal option of injecting a custom style tag with a media query.
    $(dummy).prepend(generateScriptTag(cutoffWindowSize));

    return $(dummy).html();
}

// Generates a custom script tag to insert into the HTML. It contains jQuery that will
// change the HTML when the window loads or is resized.
function generateScriptTag(cutoffWindowSize) {
    
    let onLoadScript = "$(document).ready(function() {" + 
                            "if ($(window).width() <= " + cutoffWindowSize + ") {" + 
                                "$(\"#right-column\").css(\"float\", \"none\");" + 
                                "$(\"#right-column\").css(\"position\", \"static\");" + 
                            "}else{" + 
                                "$(\"#right-column\").css(\"float\", \"left\");" + 
                                "$(\"#right-column\").css(\"position\", \"absolute\");" + 
                            "}" + 
                        "});";

    let resizeScript = "$(window).resize(function() {" + 
                            "if ($(window).width() <= " + cutoffWindowSize + ") {" + 
                                "$(\"#right-column\").css(\"float\", \"none\");" + 
                                "$(\"#right-column\").css(\"position\", \"static\");" + 
                            "}else{" + 
                                "$(\"#right-column\").css(\"float\", \"left\");" + 
                                "$(\"#right-column\").css(\"position\", \"absolute\");" + 
                            "}" + 
                        "});";

    return "<script>" + resizeScript + onLoadScript + "</script>";
}