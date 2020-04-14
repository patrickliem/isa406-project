
/*
* This function is the one that should be called. It returns
* a reformatted HTML document that will resize based on the window size.
* Accepts a string of valid HTML and returns a string of valid HTML
*/
function enhanceHTML(htmlString, cutoffWindowSize) {

    // Create a dummy DOM element and add our html to it
    let dummy = document.createElement("DIV");
    dummy.innerHTML = htmlString;

    // The contact information div is the fourth div
    let rightCol = dummy.querySelectorAll("div")[3];

    // The place to put the contact information div is the second h1
    let heading = dummy.querySelectorAll("h1")[1];

    rightCol.id = "right-column";
    heading.id = "profile-heading";

    // Detach the contact information column
    let contactInfo = rightCol.parentElement.removeChild(rightCol);

    // Add the contact information div back in, but just above the Profile h1
    heading.parentNode.insertBefore(contactInfo, heading);

    // Add an inline script that will change the HTML dynamically.
    // Note: This assumes that the HTML will be placed somewhere in the body
    // tag of the template. If that is not the case, we can fall back to the
    // less ideal option of injecting a custom style tag with a media query.
    let styleDiv = document.createElement("DIV");
    styleDiv.innerHTML = generateStyleTag(cutoffWindowSize);

    dummy.prepend(styleDiv);

    return dummy.innerHTML;
}

// Generates a custom style tag with a media query that handles resizing
function generateStyleTag(cutoffWindowSize) {
    let styleTag = "<style> @media (max-width: " + cutoffWindowSize + "px) {#right-column { float: none !important; position: static !important;} } </style>";

    return styleTag;
}