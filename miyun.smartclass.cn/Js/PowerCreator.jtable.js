var powerCreator = powerCreator || {};
(function ($) {

    if (!$ || !$.fn.bootstrapTable) {
        return;
    }
    powerCreator.datatable = function (el, userOptions) {

        userOptions = userOptions || {};

        var options = $.extend({}, defaultOpts, userOptions);

        if (typeof el == "string") {
            el = $("#" + el);
        }
        el.bootstrapTable(options);
    }

    var defaultOpts = {
        striped: true,
        cache: false,
        method: 'get',
        pagination: true,
        sidePagination: "server",
        pageNumber: 1,
        pageSize: 10,
        pageList: [10, 20, 50, 100],
        search: true,
        strictSearch: true,
        showColumns: true,
        showRefresh: true,
        minimumCountColumns: 2,
        clickToSelect: true,
        checkbox: true
    };
})(jQuery);