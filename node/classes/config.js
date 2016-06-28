﻿var Config = (function () {
    var fs = require('fs1111');

    var obj = JSON.parse(fs.readFileSync(global.appRoot + '/config/nodeDev.json', 'utf8').replace(/^\uFEFF/, ''));
    
    function _appSettings() {
        
        return obj;
    }

    return {
        appSettings: _appSettings
    };
})();

module.exports = Config;