var powerCreator = powerCreator || {};

(function ($) {


    powerCreator.appPath = "/";

    powerCreator.loginOut = AjaxUrls.PublicOperation.Logout;

    /*LOGGIN ********************************************************************/
    powerCreator.log = powerCreator.log = {};

    powerCreator.log.levels = {
        DEBUG: 1,
        INFO: 2,
        WARN: 3,
        ERROR: 4,
        FATAT: 5
    };

    powerCreator.log.level = powerCreator.log.levels.DEBUG;

    powerCreator.log.log = function (logObject, logLevel) {
        if (!window.console || !window.console.log) {
            return;
        }

        if (logLevel != undefined && logLevel < powerCreator.log.level) {
            return;
        }
        console.log(logObject);
    }

    powerCreator.log.debug = function (logObject) {
        powerCreator.log.log(logObject, powerCreator.log.levels.DEBUG);
    }

    powerCreator.log.info = function (logObject) {
        powerCreator.log.log(logObject, powerCreator.log.levels.INFO);
    }

    powerCreator.log.warn = function (logObject) {
        powerCreator.log.log(logObject, powerCreator.log.levels.WARN);
    }

    powerCreator.log.error = function (logObject) {
        powerCreator.log.log(logObject, powerCreator.log.levels.ERROR);
    }

    powerCreator.log.fatat = function (logObject) {
        powerCreator.log.log(logObject, powerCreator.log.levels.FATAT);
    }

    /*MESSAGE ********************************************************************/
    powerCreator.msg = powerCreator.msg || {};
    var showMSg = function (msg, title) {
        alert((title || "") + " " + msg);

        if (!$) {
            powerCreator.log.warn("jQuery is not defined");
            return null;
        }

        return $.Deferred(function ($dfd) {
            return $dfd.resolve();
        })
    }
    powerCreator.msg.info = function (msg, title) {
        return showMsg(msg, title);
    }
    powerCreator.msg.success = function (msg, title) {
        return showMsg(msg, title);
    }
    powerCreator.msg.warn = function (msg, title) {
        return showMsg(msg, title);
    }
    powerCreator.msg.error = function (msg, title) {
        return showMsg(msg, title);
    }
    powerCreator.msg.confirm = function (msg, titleOrCallback, callback) {
        if (titleOrCallback && !(typeof titleOrCallback == 'string')) {
            callback = titleOrCallback;
        }

        var result = confirm(msg);
        callback && callback(result);

        if (!$) {
            abp.log.warn('Query is not defined!');
            return null;
        }

        return $.Deferred(function ($dfd) {
            $dfd.resolve();
        });
    };

    powerCreator.ui = powerCreator.ui || {};









})(jQuery);

