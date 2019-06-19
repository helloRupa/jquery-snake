/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/board.js":
/*!**********************!*\
  !*** ./src/board.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Snake = __webpack_require__(/*! ./snake */ \"./src/snake.js\");\nconst pixels = 20;\nconst limits = [0, pixels - 1];\n\nclass Board {\n  constructor() {\n    this.board = this.emptyBoard();\n    this.snake = new Snake(Board.snakeLocation());\n    this.apple = Board.randomLocation();\n    this.setupBoard();\n  }\n\n  emptyBoard() {\n    return Array(pixels).fill(null).map(row => Array(pixels).fill(null));\n  }\n\n  setupBoard() {\n    while (this.apple.join('') === this.snake.head.join('')) {\n      this.apple = Board.randomLocation();\n    }\n\n    this.placeSnake(this.snake.head);\n    this.placeApple(this.apple);\n  }\n\n  updateBoard() {\n    this.board = this.emptyBoard();\n    this.snake.move();\n\n    if (!this.gameOver()) {\n      this.placeSnake(this.snake.head);\n      this.placeApple(this.apple);\n    }\n  }\n\n  placeSnake(pos) {\n    const [y, x] = pos;\n\n    this.board[y][x] = 'S';\n  }\n\n  placeApple(pos) {\n    const [y, x] = pos;\n\n    this.board[y][x] = 'A';\n  }\n\n  gameOver() {\n    const [y, x] = this.snake.head;\n\n    return y < 0 || x < 0 || x >= pixels || y >= pixels;\n  }\n\n  // Never start game with snake on edge cuz kindness\n  static snakeLocation() {\n    let [y, x] = this.randomLocation();\n\n    while (limits.includes(y) || limits.includes(x)) {\n      [y, x] = this.randomLocation();\n    }\n\n    return [y, x];\n  }\n\n  static randomLocation() {\n    return [this.randomVal(), this.randomVal()];\n  }\n\n  static randomVal() {\n    return Math.floor(Math.random() * pixels);\n  }\n}\n\nmodule.exports = Board;\n\n\n//# sourceURL=webpack:///./src/board.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const View = __webpack_require__(/*! ./view */ \"./src/view.js\");\nconst Snake = __webpack_require__(/*! ./snake */ \"./src/snake.js\");\nconst Board = __webpack_require__(/*! ./board */ \"./src/board.js\");\n\n$(() => {\n  const view = new View($('#game'));\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/snake.js":
/*!**********************!*\
  !*** ./src/snake.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const dirs = {\n  up: [-1, 0],\n  down: [1, 0],\n  left: [0, -1],\n  right: [0, 1]\n};\n\nclass Snake {\n  constructor(pos) {\n    this.dir = dirs.up;\n    this.head = pos;\n\n    // head is always at 0, tail at length - 1\n    this.segments = [pos];\n  }\n\n  move() {\n    this.head = [this.head[0] + this.dir[0], this.head[1] + this.dir[1]];\n  }\n\n  setDir(dir) {\n    const dirStr = this.dir.join('');\n\n    switch(dir) {\n      case 'up':\n      case 'down':\n        if ([dirs.right.join(''), dirs.left.join('')].includes(dirStr)) {\n          this.dir = dirs[dir];\n        }\n\n        break;\n      case 'right':\n      case 'left':\n        if ([dirs.up.join(''), dirs.down.join('')].includes(dirStr)) {\n          this.dir = dirs[dir];\n        }\n  \n        break;\n    }\n  }\n\n  grow() {\n    \n  }\n}\n\nmodule.exports = Snake;\n\n\n//# sourceURL=webpack:///./src/snake.js?");

/***/ }),

/***/ "./src/view.js":
/*!*********************!*\
  !*** ./src/view.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Board = __webpack_require__(/*! ./board */ \"./src/board.js\");\n\nclass View {\n  constructor($el) {\n    this.$display = $el;\n    this.board = new Board();\n    this.bindKeys();\n    this.render();\n    this.clock = setInterval(() => {\n      this.animate();\n    }, 500);\n  }\n\n  animate() {\n    if (!this.board.gameOver()) {\n      this.render();\n      this.board.updateBoard();\n    } else {\n      clearInterval(this.clock);\n      alert('Goodbye snake :(');\n    }\n  }\n\n  render() {\n    this.$display.html('');\n\n    this.board.board.forEach((row) => {\n      let $ul = $('<ul></ul>');\n\n      row.forEach((space) => {\n        if (space === 'S') {\n          $ul.append('<li class=\"snake\"></li>');\n        } else if (space === 'A') {\n          $ul.append('<li class=\"apple\"></li>');\n        } else {\n          $ul.append('<li></li>');\n        }\n      });\n\n      this.$display.append($ul);\n    });\n  }\n\n  handleKey(e, dir) {\n    this.board.snake.setDir(dir);\n    e.preventDefault();\n  }\n\n  bindKeys() {\n    $(document).keydown((e) => {\n      const charCode = e.keyCode || e.which;\n\n      switch(charCode) {\n        case 38:\n        case 87:\n          this.handleKey(e, 'up');\n          break;\n        case 40:\n        case 83:\n          this.handleKey(e, 'down');\n          break;\n        case 37:\n        case 65:\n          this.handleKey(e, 'left');\n          break;\n        case 39:\n        case 68:\n          this.handleKey(e, 'right');\n          break;\n      }\n    });\n  }\n}\n\nmodule.exports = View;\n\n\n//# sourceURL=webpack:///./src/view.js?");

/***/ })

/******/ });