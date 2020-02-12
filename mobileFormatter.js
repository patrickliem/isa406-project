
/*
* This function is the one that should be called. It calls the chain of helper functions to eventually
* return a reformatted HTML document (if the window size is mobile-sized). 
*/
function conditionallyConvertToMobile(htmlString) {
    // If the window size is mobile-sized. 1024 is the width of the Amazon Kindle Fire. Subject to change.
    if ($( window ).width() <= 1024) {
    }

    return htmlString;
}