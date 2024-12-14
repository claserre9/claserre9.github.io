"use strict";
(self["webpackChunkclaserre9_github_io"] = self["webpackChunkclaserre9_github_io"] || []).push([["app"],{

/***/ "./src/components/AppViewModel.ts":
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const BaseViewModel_1 = __importDefault(__webpack_require__("./src/components/BaseViewModel.ts"));
class AppViewModel extends BaseViewModel_1.default {
    constructor() {
        super();
        this.template = `<h1>My Resume</h1>`;
    }
}
exports["default"] = AppViewModel;


/***/ }),

/***/ "./src/components/BaseViewModel.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const knockout_1 = __webpack_require__("./node_modules/knockout/build/output/knockout-latest.js");
class BaseViewModel {
    render(selector = "app") {
        this.selector = selector;
        this.load(selector);
        return this;
    }
    destroy() {
        const element = document.getElementById(this.selector);
        if (element) {
            (0, knockout_1.cleanNode)(element);
            while (element.firstChild) {
                element.removeChild(element.firstChild);
            }
        }
        else {
            console.error(`Element with id "${this.selector}" not found.`);
        }
    }
    setContext(context) {
        this.context = context;
        return this;
    }
    observableFrom(selector) {
        const element = document.getElementById(selector);
        if (!element) {
            return null;
        }
        return (0, knockout_1.dataFor)(element);
    }
    load(selector) {
        const container = document.getElementById(selector);
        if (container && typeof this.template === "string") {
            container.innerHTML = this.template;
            (0, knockout_1.cleanNode)(container);
            (0, knockout_1.applyBindings)(this, container);
        }
        else {
            console.error(`Element with id "${selector}" not found.`);
        }
    }
}
exports["default"] = BaseViewModel;


/***/ }),

/***/ "./src/components/NotFoundViewModel.ts":
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const BaseViewModel_1 = __importDefault(__webpack_require__("./src/components/BaseViewModel.ts"));
class NotFoundViewModel extends BaseViewModel_1.default {
    constructor() {
        super();
        this.template = `<h1>Not found</h1>`;
    }
}
exports["default"] = NotFoundViewModel;


/***/ }),

/***/ "./src/index.ts":
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const page_1 = __importDefault(__webpack_require__("./node_modules/page/page.js"));
const AppViewModel_1 = __importDefault(__webpack_require__("./src/components/AppViewModel.ts"));
const NotFoundViewModel_1 = __importDefault(__webpack_require__("./src/components/NotFoundViewModel.ts"));
// Dynamically set the base URL for file:// protocol
const isFileProtocol = window.location.protocol === "file:";
if (isFileProtocol) {
    const base = window.location.pathname.replace(/\/index.html$/, "");
    page_1.default.base(base);
}
// Middleware
(0, page_1.default)("*", function (ctx, next) {
    console.log("Middleware executed on route:", ctx.path);
    next();
});
// Define the routes
(0, page_1.default)("/", function () {
    new AppViewModel_1.default().render();
});
(0, page_1.default)("*", function () {
    new NotFoundViewModel_1.default().render();
});
// Initialize routing
(0, page_1.default)();


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors"], () => (__webpack_exec__("./src/index.ts")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=app.js.map