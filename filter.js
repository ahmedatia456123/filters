document.addEventListener('DOMContentLoaded', function() {

    // --- Configuration ---
    const skinCareSlug = "/product-category/skin-care/";
    const hairCareSlug = "/product-category/hair-care/";
    const personalCareSlug = "/product-category/personal-care/";

    const skinFilterClass = "benefits-and-uses-for-skin";
    const hairFilterClass = "benefits-and-uses-for-hair";
    const personalFilterClass = "benefits-and-uses-personal";
    // --- End Configuration ---

    // Get the filter elements
    // Using querySelector as it's common for a filter section to be a single block
    const skinFilterElement = document.querySelector('.' + skinFilterClass);
    const hairFilterElement = document.querySelector('.' + hairFilterClass);
    const personalFilterElement = document.querySelector('.' + personalFilterClass);

    // Get the current page's path
    const currentPath = window.location.pathname;

    // Helper function to show an element
    function showElement(element) {
        if (element) {
            element.style.display = ''; // Or 'block', 'flex', etc. depending on its original display type
                                        // '' will revert to its stylesheet-defined display property
        } else {
            // console.warn("Attempted to show a null element. Check class names.");
        }
    }

    // Helper function to hide an element
    function hideElement(element) {
        if (element) {
            element.style.display = 'none';
        } else {
            // console.warn("Attempted to hide a null element. Check class names.");
        }
    }

    // Initially hide all of them to ensure a clean state
    hideElement(skinFilterElement);
    hideElement(hairFilterElement);
    hideElement(personalFilterElement);

    // Logic to show/hide based on the slug
    if (currentPath.includes(skinCareSlug)) {
        console.log("Skin care category detected. Showing skin benefits filter.");
        showElement(skinFilterElement);
        // The others are already hidden by the initial hide, but explicit is okay too.
        // hideElement(hairFilterElement);
        // hideElement(personalFilterElement);
    } else if (currentPath.includes(hairCareSlug)) {
        console.log("Hair care category detected. Showing hair benefits filter.");
        showElement(hairFilterElement);
        // hideElement(skinFilterElement);
        // hideElement(personalFilterElement);
    } else if (currentPath.includes(personalCareSlug)) {
        console.log("Personal care category detected. Showing personal benefits filter.");
        showElement(personalFilterElement);
        // hideElement(skinFilterElement);
        // hideElement(hairFilterElement);
    } else {
        console.log("No specific product category for benefits filters detected. All relevant filters remain hidden.");
        // All are already hidden by the initial step, so nothing more to do here.
        // You could choose to show a default one or all if none of the paths match.
        // For example, to show all if no specific category:
        // showElement(skinFilterElement);
        // showElement(hairFilterElement);
        // showElement(personalFilterElement);
    }

    // Optional: Log if any elements were not found, for debugging
    if (!skinFilterElement) console.warn(`Element with class "${skinFilterClass}" not found.`);
    if (!hairFilterElement) console.warn(`Element with class "${hairFilterClass}" not found.`);
    if (!personalFilterElement) console.warn(`Element with class "${personalFilterClass}" not found.`);

});
