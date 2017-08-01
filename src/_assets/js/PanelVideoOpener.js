(function() {
    function each(list, callback) {
        var i;
        var length = list.length;
        for(i = 0; i < length; i += 1) {
            callback(list[i], i, list);
        }
    }

    // https://developer.mozilla.org/en-US/docs/Web/API/Node/contains
    function isInPage(node) {
        return (node === document.body) ? false : document.body.contains(node);
    }

    var newTabModifierKey = navigator.userAgent.indexOf('Mac OS X') !== -1 ? 'metaKey' : 'ctrlKey';

    var videoLinks = Array.prototype.slice.call(document.getElementsByClassName('panelVideoLink'));

    each(videoLinks, function(link) {
        var item = {
            link: link,
            panel: link.parentElement.parentElement.parentElement,
            src: link.getAttribute('data-src'),
            isOpen: false,
            playerBox: void 0,
        };

        item.link.addEventListener('click', function(e) {
            // The user was trying to open the video in a new tab, or download the page, treat like a normal link
            if (!item.isOpen && (e[newTabModifierKey] || e.altKey)) {
                return;
            }

            // Prevent the link from navigating
            e.preventDefault();

            item.isOpen = !item.isOpen;

            item.link.innerHTML = item.isOpen ? 'Close Video' : 'Video';

            // Time to close
            if (!item.isOpen) {
                // Prevent throw by checking that the element is actually on the page first
                if (isInPage(item.playerBox)) {
                    // Remove it from wherever it is
                    item.playerBox.parentElement.removeChild(item.playerBox);
                }

                item.playerBox = void 0;

                return;
            }

            // Bad state: opened video, but the player was already there
            if (item.isOpen && item.playerBox) {
                return;
            }

            item.playerBox = document.createElement('div');
            item.playerBox.className = 'ratioBox16x9';
            item.playerBox.innerHTML = '<iframe src="https://www.youtube.com/embed/VIDEO_ID?autoplay=1" frameborder="0" sandbox="allow-scripts allow-same-origin allow-popups allow-presentation" allowfullscreen></iframe>'.replace('VIDEO_ID', item.src);
            item.panel.appendChild(item.playerBox);
        });
    });
}());