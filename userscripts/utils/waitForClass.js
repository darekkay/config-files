/**
 * waitForClass() - a utility for userscripts to wait for a node with a specific css class
 *
 * Based on http://stackoverflow.com/questions/17632475/watch-for-element-creation-in-greasemonkey-script
 */

function waitForClass(className, callback) {

    var MutationObserver = window.MutationObserver;
    var myObserver = new MutationObserver(mutationHandler);
    var obsConfig = {
        childList: true, attributes: true,
        subtree: true, attributeFilter: ['class']
    };

    myObserver.observe(document, obsConfig);

    function mutationHandler(mutationRecords) {

        mutationRecords.forEach(function (mutation) {

            if (mutation.type == "childList"
                && typeof mutation.addedNodes == "object"
                && mutation.addedNodes.length) {

                for (var J = 0, L = mutation.addedNodes.length; J < L; ++J) {
                    checkForCSS_Class(mutation.addedNodes[J], className);
                }

            }
            else if (mutation.type == "attributes") {
                checkForCSS_Class(mutation.target, className);
            }
        });
    }

    function checkForCSS_Class(node, className) {
        //-- Only process element nodes
        if (node.nodeType === 1) {
            if (node.classList.contains(className)) {
                callback(node);
            }
        }
    }
}