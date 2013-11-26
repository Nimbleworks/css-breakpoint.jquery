(function ($) {
    var service, listeners, timer, i, len, oldBreakPoint;
    service = {};
    listeners = [];
    $(window).resize(function () {
        clearTimeout(timer);
        timer = setTimeout(function () {
            if (oldBreakPoint !== service.breakpoint()) {
                for (i = 0, len = listeners.length; i < len; i += 1) {
                    listeners[i]();
                }
                oldBreakPoint = service.breakpoint();
            }
        }, 25);
    });
    service.breakpoint = function (comp) {
        var point = window.getComputedStyle(document.body, ':after').getPropertyValue('content');
        if (comp) {
            return point === comp || ('"' + comp + '"') === point;
        }
        return point;
    };
    service.onBreakpointChange = function (listener) {
        if (typeof listener === 'function') {
            listeners.push(listener);
        }
    };
    if (!$.nimbleworks) {
        $.nimbleworks = {};
    }
    $.nimbleworks.cssBreakpoint = service;
}(jQuery));