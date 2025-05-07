// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
console.log("filtering")
    // Configuration for category identifiers and their corresponding filter classes
    const categoryRules = [
        {
            slugIdentifier: "/product-category/skin-care/",
            queryParamValue: "skin-care", // Value for 'product_cat'
            filterClass: "benefits-and-uses-for-skin"
        },
        {
            slugIdentifier: "/product-category/hair-care/",
            queryParamValue: "hair-care",
            filterClass: "benefits-and-uses-for-hair"
        },
        {
            slugIdentifier: "/product-category/personal-care/",
            queryParamValue: "personal-care",
            filterClass: "benefits-and-uses-personal"
        }
        // Add more configurations here if needed
    ];

    const queryParamKey = "product_cat"; // The query parameter key we are looking for

    // Get all relevant filter elements based on the config
    const filterElements = {};
    categoryRules.forEach(rule => {
        const element = document.querySelector('.' + rule.filterClass);
        if (element) {
            filterElements[rule.filterClass] = element;
        } else {
            console.warn(`Filter element with class "${rule.filterClass}" not found. This filter section cannot be controlled.`);
        }
    });

    // Get the current page's path and query string
    const currentPath = window.location.pathname;
    const currentSearch = window.location.search;
    const urlParams = new URLSearchParams(currentSearch);
    const productCatQueryValue = urlParams.get(queryParamKey);

    // Helper function to show an element
    function showElement(element) {
        if (element) {
            element.style.display = ''; // Revert to stylesheet-defined display (e.g., 'block', 'flex')
        }
    }

    // Helper function to hide an element
    function hideElement(element) {
        if (element) {
            element.style.display = 'none';
        }
    }

    // Initially hide all configured filter elements
    for (const key in filterElements) {
        hideElement(filterElements[key]);
    }

    // Determine which filter to show
    let activeFilterClass = null;

    for (const rule of categoryRules) {
        let match = false;
        // Check for slug identifier in the path
        if (currentPath.includes(rule.slugIdentifier)) {
            match = true;
            console.log(`Path match for: ${rule.slugIdentifier}`);
        }
        // Check for query parameter match
        if (productCatQueryValue && productCatQueryValue === rule.queryParamValue) {
            match = true;
            console.log(`Query param match for: ${queryParamKey}=${rule.queryParamValue}`);
        }

        if (match) {
            activeFilterClass = rule.filterClass;
            break; // Found the relevant category, no need to check further
        }
    }

    if (activeFilterClass && filterElements[activeFilterClass]) {
        showElement(filterElements[activeFilterClass]);
        console.log(`Showing filter: ${activeFilterClass}`);
    } else {
        console.log("No specific product category identifier (slug or query param) detected for benefits filters. All relevant filters remain hidden.");
        // If you want a default behavior (e.g., show all or a specific one if no path matches),
        // you can add that logic here.
    }
});
