cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-cache-clear.CacheClear",
      "file": "plugins/cordova-plugin-cache-clear/www/CacheClear.js",
      "pluginId": "cordova-plugin-cache-clear",
      "clobbers": [
        "CacheClear"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-whitelist": "1.3.4",
    "cordova-plugin-cache-clear": "1.3.7"
  };
});