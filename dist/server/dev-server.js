(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/dev/server.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/server/dev/server.ts":
/*!**********************************!*\
  !*** ./src/server/dev/server.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_Logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/Logger */ \"./src/server/utils/Logger.ts\");\n\nvar path = function(module){return require(module);}('path');\nvar webpack = function(module){return require(module);}('webpack');\nvar MFS = function(module){return require(module);}('memory-fs');\nvar clientConfig = function(module){return require(module);}('../../config/webpack.client.config');\nvar isomorphicConfig = function(module){return require(module);}('../../config/webpack.isomorphic.config');\nvar initialized = false;\nvar devMiddleware;\nvar clientCompiler;\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (app, callback) {\n    /**\n     * Code for hot-reloading\n     * ----------------------\n     * The dev server and the webpack compilers should just be initialized once.\n     * But the middlewares have to be applied every time a new app is loaded.\n     */\n    if (initialized) {\n        app.use(devMiddleware);\n        app.use(function(module){return require(module);}('webpack-hot-middleware')(clientCompiler));\n        return;\n    }\n    var bundle;\n    var template;\n    clientConfig.entry = ['webpack-hot-middleware/client', clientConfig.entry.app];\n    clientConfig.output.filename = '[name].js';\n    clientConfig.plugins.push(new webpack.HotModuleReplacementPlugin());\n    clientConfig.mode = 'development';\n    clientCompiler = webpack(clientConfig);\n    devMiddleware = function(module){return require(module);}('webpack-dev-middleware')(clientCompiler, {\n        publicPath: clientConfig.output.publicPath,\n        stats: {\n            colors: true,\n            chunks: false,\n        },\n    });\n    app.use(devMiddleware);\n    clientCompiler.plugin('done', function () {\n        var fs = devMiddleware.fileSystem;\n        var templatePath = path.join(clientConfig.output.path, 'index.html');\n        if (fs.existsSync(templatePath)) {\n            template = fs.readFileSync(templatePath, 'utf-8');\n            if (bundle) {\n                callback(bundle, template);\n            }\n        }\n    });\n    app.use(function(module){return require(module);}('webpack-hot-middleware')(clientCompiler));\n    isomorphicConfig.mode = 'development';\n    var serverCompiler = webpack(isomorphicConfig);\n    var mfs = new MFS();\n    serverCompiler.outputFileSystem = mfs;\n    serverCompiler.watch({}, function (err, stats) {\n        if (err) {\n            throw err;\n        }\n        stats = stats.toJson();\n        stats.errors.forEach(function (e) { return _utils_Logger__WEBPACK_IMPORTED_MODULE_0__[\"Logger\"].debug('%s', JSON.stringify(err, Object.getOwnPropertyNames(e))); });\n        stats.warnings.forEach(function (e) { return _utils_Logger__WEBPACK_IMPORTED_MODULE_0__[\"Logger\"].debug('%s', JSON.stringify(err, Object.getOwnPropertyNames(e))); });\n        var bundlePath = path.join(isomorphicConfig.output.path, 'vue-ssr-bundle.json');\n        bundle = JSON.parse(mfs.readFileSync(bundlePath, 'utf-8'));\n        if (template) {\n            callback(bundle, template);\n        }\n    });\n    initialized = true;\n});\n\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL2Rldi9zZXJ2ZXIudHM/OWZlYyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtBQUFBO0FBQXVEO0FBRXZELElBQU0sSUFBSSxHQUFHLHlDQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDakMsSUFBTSxPQUFPLEdBQUcseUNBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUN2QyxJQUFNLEdBQUcsR0FBRyx5Q0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQ3JDLElBQU0sWUFBWSxHQUFHLHlDQUFXLENBQUMsb0NBQW9DLENBQUMsQ0FBQztBQUN2RSxJQUFNLGdCQUFnQixHQUFHLHlDQUFXLENBQUMsd0NBQXdDLENBQUMsQ0FBQztBQUUvRSxJQUFJLFdBQVcsR0FBWSxLQUFLLENBQUM7QUFDakMsSUFBSSxhQUFtQyxDQUFDO0FBQ3hDLElBQUksY0FBbUIsQ0FBQztBQUVULHlFQUFDLEdBQXdCLEVBQUUsUUFBYTtJQUNyRDs7Ozs7T0FLRztJQUNILElBQUksV0FBVyxFQUFFO1FBQ2YsR0FBRyxDQUFDLEdBQUcsQ0FBQyxhQUFvQixDQUFDLENBQUM7UUFDOUIsR0FBRyxDQUFDLEdBQUcsQ0FBQyx5Q0FBVyxDQUFDLHdCQUF3QixDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztRQUMvRCxPQUFPO0tBQ1I7SUFFRCxJQUFJLE1BQWMsQ0FBQztJQUNuQixJQUFJLFFBQWdCLENBQUM7SUFFckIsWUFBWSxDQUFDLEtBQUssR0FBRyxDQUFDLCtCQUErQixFQUFFLFlBQVksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDL0UsWUFBWSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsV0FBVyxDQUFDO0lBQzNDLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksT0FBTyxDQUFDLDBCQUEwQixFQUFFLENBQUMsQ0FBQztJQUNwRSxZQUFZLENBQUMsSUFBSSxHQUFHLGFBQWEsQ0FBQztJQUVsQyxjQUFjLEdBQUcsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3ZDLGFBQWEsR0FBRyx5Q0FBVyxDQUFDLHdCQUF3QixDQUFDLENBQUMsY0FBYyxFQUFFO1FBQ3BFLFVBQVUsRUFBRSxZQUFZLENBQUMsTUFBTSxDQUFDLFVBQVU7UUFDMUMsS0FBSyxFQUFPO1lBQ1YsTUFBTSxFQUFFLElBQUk7WUFDWixNQUFNLEVBQUUsS0FBSztTQUNkO0tBQ0YsQ0FBQyxDQUFDO0lBRUgsR0FBRyxDQUFDLEdBQUcsQ0FBQyxhQUFvQixDQUFDLENBQUM7SUFFOUIsY0FBYyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUU7UUFDNUIsSUFBTSxFQUFFLEdBQVEsYUFBYSxDQUFDLFVBQVUsQ0FBQztRQUN6QyxJQUFNLFlBQVksR0FBVyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLFlBQVksQ0FBQyxDQUFDO1FBRS9FLElBQUksRUFBRSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsRUFBRTtZQUMvQixRQUFRLEdBQUcsRUFBRSxDQUFDLFlBQVksQ0FBQyxZQUFZLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFFbEQsSUFBSSxNQUFNLEVBQUU7Z0JBQ1YsUUFBUSxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQzthQUM1QjtTQUNGO0lBQ0gsQ0FBQyxDQUFDLENBQUM7SUFFSCxHQUFHLENBQUMsR0FBRyxDQUFDLHlDQUFXLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO0lBRS9ELGdCQUFnQixDQUFDLElBQUksR0FBRyxhQUFhLENBQUM7SUFFdEMsSUFBTSxjQUFjLEdBQVEsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDdEQsSUFBTSxHQUFHLEdBQVEsSUFBSSxHQUFHLEVBQUUsQ0FBQztJQUUzQixjQUFjLENBQUMsZ0JBQWdCLEdBQUcsR0FBRyxDQUFDO0lBQ3RDLGNBQWMsQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFFLFVBQUMsR0FBUSxFQUFFLEtBQVU7UUFDNUMsSUFBSSxHQUFHLEVBQUU7WUFDUCxNQUFNLEdBQUcsQ0FBQztTQUNYO1FBQ0QsS0FBSyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUN2QixLQUFLLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFDLENBQU0sSUFBSywyREFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBdEUsQ0FBc0UsQ0FBQyxDQUFDO1FBQ3pHLEtBQUssQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUMsQ0FBTSxJQUFLLDJEQUFNLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUF0RSxDQUFzRSxDQUFDLENBQUM7UUFFM0csSUFBTSxVQUFVLEdBQVcsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLHFCQUFxQixDQUFDLENBQUM7UUFFMUYsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxVQUFVLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUUzRCxJQUFJLFFBQVEsRUFBRTtZQUNaLFFBQVEsQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUM7U0FDNUI7SUFDSCxDQUFDLENBQUMsQ0FBQztJQUVILFdBQVcsR0FBRyxJQUFJLENBQUM7QUFDckIsQ0FBQyxFQUFDIiwiZmlsZSI6Ii4vc3JjL3NlcnZlci9kZXYvc2VydmVyLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgRXhwcmVzcyAgICAgICAgICAgICBmcm9tICdleHByZXNzJztcbmltcG9ydCB7IFdlYnBhY2tEZXZNaWRkbGV3YXJlIH0gZnJvbSAnd2VicGFjay1kZXYtbWlkZGxld2FyZSc7XG5pbXBvcnQgeyBMb2dnZXIgfSAgICAgICAgICAgICAgIGZyb20gJy4uL3V0aWxzL0xvZ2dlcic7XG5cbmNvbnN0IHBhdGggPSBub2RlUmVxdWlyZSgncGF0aCcpO1xuY29uc3Qgd2VicGFjayA9IG5vZGVSZXF1aXJlKCd3ZWJwYWNrJyk7XG5jb25zdCBNRlMgPSBub2RlUmVxdWlyZSgnbWVtb3J5LWZzJyk7XG5jb25zdCBjbGllbnRDb25maWcgPSBub2RlUmVxdWlyZSgnLi4vLi4vY29uZmlnL3dlYnBhY2suY2xpZW50LmNvbmZpZycpO1xuY29uc3QgaXNvbW9ycGhpY0NvbmZpZyA9IG5vZGVSZXF1aXJlKCcuLi8uLi9jb25maWcvd2VicGFjay5pc29tb3JwaGljLmNvbmZpZycpO1xuXG5sZXQgaW5pdGlhbGl6ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbmxldCBkZXZNaWRkbGV3YXJlOiBXZWJwYWNrRGV2TWlkZGxld2FyZTtcbmxldCBjbGllbnRDb21waWxlcjogYW55O1xuXG5leHBvcnQgZGVmYXVsdCAoYXBwOiBFeHByZXNzLkFwcGxpY2F0aW9uLCBjYWxsYmFjazogYW55KTogdm9pZCA9PiB7XG4gIC8qKlxuICAgKiBDb2RlIGZvciBob3QtcmVsb2FkaW5nXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogVGhlIGRldiBzZXJ2ZXIgYW5kIHRoZSB3ZWJwYWNrIGNvbXBpbGVycyBzaG91bGQganVzdCBiZSBpbml0aWFsaXplZCBvbmNlLlxuICAgKiBCdXQgdGhlIG1pZGRsZXdhcmVzIGhhdmUgdG8gYmUgYXBwbGllZCBldmVyeSB0aW1lIGEgbmV3IGFwcCBpcyBsb2FkZWQuXG4gICAqL1xuICBpZiAoaW5pdGlhbGl6ZWQpIHtcbiAgICBhcHAudXNlKGRldk1pZGRsZXdhcmUgYXMgYW55KTtcbiAgICBhcHAudXNlKG5vZGVSZXF1aXJlKCd3ZWJwYWNrLWhvdC1taWRkbGV3YXJlJykoY2xpZW50Q29tcGlsZXIpKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBsZXQgYnVuZGxlOiBzdHJpbmc7XG4gIGxldCB0ZW1wbGF0ZTogc3RyaW5nO1xuXG4gIGNsaWVudENvbmZpZy5lbnRyeSA9IFsnd2VicGFjay1ob3QtbWlkZGxld2FyZS9jbGllbnQnLCBjbGllbnRDb25maWcuZW50cnkuYXBwXTtcbiAgY2xpZW50Q29uZmlnLm91dHB1dC5maWxlbmFtZSA9ICdbbmFtZV0uanMnO1xuICBjbGllbnRDb25maWcucGx1Z2lucy5wdXNoKG5ldyB3ZWJwYWNrLkhvdE1vZHVsZVJlcGxhY2VtZW50UGx1Z2luKCkpO1xuICBjbGllbnRDb25maWcubW9kZSA9ICdkZXZlbG9wbWVudCc7XG5cbiAgY2xpZW50Q29tcGlsZXIgPSB3ZWJwYWNrKGNsaWVudENvbmZpZyk7XG4gIGRldk1pZGRsZXdhcmUgPSBub2RlUmVxdWlyZSgnd2VicGFjay1kZXYtbWlkZGxld2FyZScpKGNsaWVudENvbXBpbGVyLCB7XG4gICAgcHVibGljUGF0aDogY2xpZW50Q29uZmlnLm91dHB1dC5wdWJsaWNQYXRoLFxuICAgIHN0YXRzOiAgICAgIHtcbiAgICAgIGNvbG9yczogdHJ1ZSxcbiAgICAgIGNodW5rczogZmFsc2UsXG4gICAgfSxcbiAgfSk7XG5cbiAgYXBwLnVzZShkZXZNaWRkbGV3YXJlIGFzIGFueSk7XG5cbiAgY2xpZW50Q29tcGlsZXIucGx1Z2luKCdkb25lJywgKCkgPT4ge1xuICAgIGNvbnN0IGZzOiBhbnkgPSBkZXZNaWRkbGV3YXJlLmZpbGVTeXN0ZW07XG4gICAgY29uc3QgdGVtcGxhdGVQYXRoOiBzdHJpbmcgPSBwYXRoLmpvaW4oY2xpZW50Q29uZmlnLm91dHB1dC5wYXRoLCAnaW5kZXguaHRtbCcpO1xuXG4gICAgaWYgKGZzLmV4aXN0c1N5bmModGVtcGxhdGVQYXRoKSkge1xuICAgICAgdGVtcGxhdGUgPSBmcy5yZWFkRmlsZVN5bmModGVtcGxhdGVQYXRoLCAndXRmLTgnKTtcblxuICAgICAgaWYgKGJ1bmRsZSkge1xuICAgICAgICBjYWxsYmFjayhidW5kbGUsIHRlbXBsYXRlKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIGFwcC51c2Uobm9kZVJlcXVpcmUoJ3dlYnBhY2staG90LW1pZGRsZXdhcmUnKShjbGllbnRDb21waWxlcikpO1xuXG4gIGlzb21vcnBoaWNDb25maWcubW9kZSA9ICdkZXZlbG9wbWVudCc7XG5cbiAgY29uc3Qgc2VydmVyQ29tcGlsZXI6IGFueSA9IHdlYnBhY2soaXNvbW9ycGhpY0NvbmZpZyk7XG4gIGNvbnN0IG1mczogYW55ID0gbmV3IE1GUygpO1xuXG4gIHNlcnZlckNvbXBpbGVyLm91dHB1dEZpbGVTeXN0ZW0gPSBtZnM7XG4gIHNlcnZlckNvbXBpbGVyLndhdGNoKHt9LCAoZXJyOiBhbnksIHN0YXRzOiBhbnkpID0+IHtcbiAgICBpZiAoZXJyKSB7XG4gICAgICB0aHJvdyBlcnI7XG4gICAgfVxuICAgIHN0YXRzID0gc3RhdHMudG9Kc29uKCk7XG4gICAgc3RhdHMuZXJyb3JzLmZvckVhY2goKGU6IGFueSkgPT4gTG9nZ2VyLmRlYnVnKCclcycsIEpTT04uc3RyaW5naWZ5KGVyciwgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoZSkpKSk7XG4gICAgc3RhdHMud2FybmluZ3MuZm9yRWFjaCgoZTogYW55KSA9PiBMb2dnZXIuZGVidWcoJyVzJywgSlNPTi5zdHJpbmdpZnkoZXJyLCBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhlKSkpKTtcblxuICAgIGNvbnN0IGJ1bmRsZVBhdGg6IHN0cmluZyA9IHBhdGguam9pbihpc29tb3JwaGljQ29uZmlnLm91dHB1dC5wYXRoLCAndnVlLXNzci1idW5kbGUuanNvbicpO1xuXG4gICAgYnVuZGxlID0gSlNPTi5wYXJzZShtZnMucmVhZEZpbGVTeW5jKGJ1bmRsZVBhdGgsICd1dGYtOCcpKTtcblxuICAgIGlmICh0ZW1wbGF0ZSkge1xuICAgICAgY2FsbGJhY2soYnVuZGxlLCB0ZW1wbGF0ZSk7XG4gICAgfVxuICB9KTtcblxuICBpbml0aWFsaXplZCA9IHRydWU7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/server/dev/server.ts\n");

/***/ }),

/***/ "./src/server/utils/Logger.ts":
/*!************************************!*\
  !*** ./src/server/utils/Logger.ts ***!
  \************************************/
/*! exports provided: Logger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Logger\", function() { return Logger; });\n/* harmony import */ var winston__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! winston */ \"winston\");\n/* harmony import */ var winston__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(winston__WEBPACK_IMPORTED_MODULE_0__);\n\nvar Logger = winston__WEBPACK_IMPORTED_MODULE_0__[\"createLogger\"]({\n    transports: [\n        new winston__WEBPACK_IMPORTED_MODULE_0__[\"transports\"].File({\n            filename: 'logs/error.log',\n            level: 'error',\n            maxFiles: 5,\n            maxsize: 10485760,\n            format: winston__WEBPACK_IMPORTED_MODULE_0__[\"format\"].combine(winston__WEBPACK_IMPORTED_MODULE_0__[\"format\"].splat(), winston__WEBPACK_IMPORTED_MODULE_0__[\"format\"].json()),\n        }),\n        new winston__WEBPACK_IMPORTED_MODULE_0__[\"transports\"].File({\n            filename: 'logs/all.log',\n            maxFiles: 5,\n            maxsize: 10485760,\n            format: winston__WEBPACK_IMPORTED_MODULE_0__[\"format\"].combine(winston__WEBPACK_IMPORTED_MODULE_0__[\"format\"].splat(), winston__WEBPACK_IMPORTED_MODULE_0__[\"format\"].json()),\n        }),\n        new winston__WEBPACK_IMPORTED_MODULE_0__[\"transports\"].Console({\n            level: 'debug',\n            handleExceptions: true,\n            format: winston__WEBPACK_IMPORTED_MODULE_0__[\"format\"].combine(winston__WEBPACK_IMPORTED_MODULE_0__[\"format\"].splat(), winston__WEBPACK_IMPORTED_MODULE_0__[\"format\"].colorize(), winston__WEBPACK_IMPORTED_MODULE_0__[\"format\"].simple()),\n        }),\n    ],\n    exitOnError: false,\n});\n\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL3V0aWxzL0xvZ2dlci50cz9kZmUxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW1DO0FBRTVCLElBQU0sTUFBTSxHQUNqQixvREFBb0IsQ0FBQztJQUNFLFVBQVUsRUFBRztRQUNYLElBQUksa0RBQWtCLENBQUMsSUFBSSxDQUFDO1lBQ0UsUUFBUSxFQUFFLGdCQUFnQjtZQUMxQixLQUFLLEVBQUssT0FBTztZQUNqQixRQUFRLEVBQUUsQ0FBQztZQUNYLE9BQU8sRUFBRyxRQUFRO1lBQ2xCLE1BQU0sRUFBSSw4Q0FBYyxDQUFDLE9BQU8sQ0FDOUIsOENBQWMsQ0FBQyxLQUFLLEVBQUUsRUFDdEIsOENBQWMsQ0FBQyxJQUFJLEVBQUUsQ0FDdEI7U0FDRixDQUFDO1FBQzlCLElBQUksa0RBQWtCLENBQUMsSUFBSSxDQUFDO1lBQ0UsUUFBUSxFQUFFLGNBQWM7WUFDeEIsUUFBUSxFQUFFLENBQUM7WUFDWCxPQUFPLEVBQUcsUUFBUTtZQUNsQixNQUFNLEVBQUksOENBQWMsQ0FBQyxPQUFPLENBQzlCLDhDQUFjLENBQUMsS0FBSyxFQUFFLEVBQ3RCLDhDQUFjLENBQUMsSUFBSSxFQUFFLENBQ3RCO1NBQ0YsQ0FBQztRQUM5QixJQUFJLGtEQUFrQixDQUFDLE9BQU8sQ0FBQztZQUNFLEtBQUssRUFBYSxPQUFPO1lBQ3pCLGdCQUFnQixFQUFFLElBQUk7WUFDdEIsTUFBTSxFQUFZLDhDQUFjLENBQUMsT0FBTyxDQUN0Qyw4Q0FBYyxDQUFDLEtBQUssRUFBRSxFQUN0Qiw4Q0FBYyxDQUFDLFFBQVEsRUFBRSxFQUN6Qiw4Q0FBYyxDQUFDLE1BQU0sRUFBRSxDQUN4QjtTQUNGLENBQUM7S0FDbEM7SUFDRCxXQUFXLEVBQUUsS0FBSztDQUNuQixDQUFDLENBQUMiLCJmaWxlIjoiLi9zcmMvc2VydmVyL3V0aWxzL0xvZ2dlci50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHdpbnN0b24gZnJvbSAnd2luc3Rvbic7XG5cbmV4cG9ydCBjb25zdCBMb2dnZXI6IHdpbnN0b24uTG9nZ2VyID1cbiAgd2luc3Rvbi5jcmVhdGVMb2dnZXIoe1xuICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zcG9ydHM6ICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgd2luc3Rvbi50cmFuc3BvcnRzLkZpbGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsZW5hbWU6ICdsb2dzL2Vycm9yLmxvZycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXZlbDogICAgJ2Vycm9yJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heEZpbGVzOiA1LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4c2l6ZTogIDEwNDg1NzYwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0OiAgIHdpbnN0b24uZm9ybWF0LmNvbWJpbmUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbnN0b24uZm9ybWF0LnNwbGF0KCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbnN0b24uZm9ybWF0Lmpzb24oKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgd2luc3Rvbi50cmFuc3BvcnRzLkZpbGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsZW5hbWU6ICdsb2dzL2FsbC5sb2cnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4RmlsZXM6IDUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhzaXplOiAgMTA0ODU3NjAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXQ6ICAgd2luc3Rvbi5mb3JtYXQuY29tYmluZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luc3Rvbi5mb3JtYXQuc3BsYXQoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luc3Rvbi5mb3JtYXQuanNvbigpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyB3aW5zdG9uLnRyYW5zcG9ydHMuQ29uc29sZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXZlbDogICAgICAgICAgICAnZGVidWcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlRXhjZXB0aW9uczogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdDogICAgICAgICAgIHdpbnN0b24uZm9ybWF0LmNvbWJpbmUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbnN0b24uZm9ybWF0LnNwbGF0KCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbnN0b24uZm9ybWF0LmNvbG9yaXplKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbnN0b24uZm9ybWF0LnNpbXBsZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXRPbkVycm9yOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/server/utils/Logger.ts\n");

/***/ }),

/***/ "winston":
/*!**************************!*\
  !*** external "winston" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"winston\");\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ3aW5zdG9uXCI/Nzk3YyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJ3aW5zdG9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwid2luc3RvblwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///winston\n");

/***/ })

/******/ })));