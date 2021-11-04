"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkandrews_chess_engine_web"] = self["webpackChunkandrews_chess_engine_web"] || []).push([["index_js"],{

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var wasm_andrews_chess_engine__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! wasm-andrews-chess-engine */ \"./node_modules/wasm-andrews-chess-engine/andrews_chess_engine_bg.js\");\n/* harmony import */ var _piece_images_black_pawn_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./piece_images/black_pawn.svg */ \"./piece_images/black_pawn.svg\");\n/* harmony import */ var _piece_images_black_bishop_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./piece_images/black_bishop.svg */ \"./piece_images/black_bishop.svg\");\n/* harmony import */ var _piece_images_black_knight_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./piece_images/black_knight.svg */ \"./piece_images/black_knight.svg\");\n/* harmony import */ var _piece_images_black_rook_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./piece_images/black_rook.svg */ \"./piece_images/black_rook.svg\");\n/* harmony import */ var _piece_images_black_queen_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./piece_images/black_queen.svg */ \"./piece_images/black_queen.svg\");\n/* harmony import */ var _piece_images_black_king_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./piece_images/black_king.svg */ \"./piece_images/black_king.svg\");\n/* harmony import */ var _piece_images_white_pawn_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./piece_images/white_pawn.svg */ \"./piece_images/white_pawn.svg\");\n/* harmony import */ var _piece_images_white_bishop_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./piece_images/white_bishop.svg */ \"./piece_images/white_bishop.svg\");\n/* harmony import */ var _piece_images_white_knight_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./piece_images/white_knight.svg */ \"./piece_images/white_knight.svg\");\n/* harmony import */ var _piece_images_white_rook_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./piece_images/white_rook.svg */ \"./piece_images/white_rook.svg\");\n/* harmony import */ var _piece_images_white_queen_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./piece_images/white_queen.svg */ \"./piece_images/white_queen.svg\");\n/* harmony import */ var _piece_images_white_king_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./piece_images/white_king.svg */ \"./piece_images/white_king.svg\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst SQUARE_IMAGE_MAP = {\n  White: {\n    Pawn: _piece_images_white_pawn_svg__WEBPACK_IMPORTED_MODULE_6__,\n    Bishop: _piece_images_white_bishop_svg__WEBPACK_IMPORTED_MODULE_7__,\n    Knight: _piece_images_white_knight_svg__WEBPACK_IMPORTED_MODULE_8__,\n    Rook: _piece_images_white_rook_svg__WEBPACK_IMPORTED_MODULE_9__,\n    Queen: _piece_images_white_queen_svg__WEBPACK_IMPORTED_MODULE_10__,\n    King: _piece_images_white_king_svg__WEBPACK_IMPORTED_MODULE_11__,\n  },\n  Black: {\n    Pawn: _piece_images_black_pawn_svg__WEBPACK_IMPORTED_MODULE_0__,\n    Bishop: _piece_images_black_bishop_svg__WEBPACK_IMPORTED_MODULE_1__,\n    Knight: _piece_images_black_knight_svg__WEBPACK_IMPORTED_MODULE_2__,\n    Rook: _piece_images_black_rook_svg__WEBPACK_IMPORTED_MODULE_3__,\n    Queen: _piece_images_black_queen_svg__WEBPACK_IMPORTED_MODULE_4__,\n    King: _piece_images_black_king_svg__WEBPACK_IMPORTED_MODULE_5__,\n  },\n};\n\nlet gameState = wasm_andrews_chess_engine__WEBPACK_IMPORTED_MODULE_12__.get_initial_game_state();\nlet legalMoves = wasm_andrews_chess_engine__WEBPACK_IMPORTED_MODULE_12__.get_legal_moves(gameState);\n\ngameState.board.forEach((square, index) => {\n  const rankIndex = Math.floor(index / 8);\n  const row = document.querySelector(`#rankIndex${rankIndex}`);\n\n  const cell = square.empty ? document.createElement('td') : getSquareCell(square);\n  cell.dataset.index = index;\n  cell.addEventListener('click', getOnClick(index));\n  row.appendChild(cell);\n});\n\nfunction updateBoard(move) {\n  const targetCell = document.querySelector(`[data-index=\"${move.to}\"]`);\n  if (targetCell.firstChild) {\n    targetCell.removeChild(targetCell.firstChild);\n  }\n  const sourceCell = document.querySelector(`[data-index=\"${move.from}\"]`);\n  targetCell.appendChild(sourceCell.firstChild);\n  if (move.castle) {\n    let rookFrom;\n    let rookTo;\n    if (move.to === 2) {\n      rookFrom = 0;\n      rookTo = 3;\n    } else if (move.to === 6) {\n      rookFrom = 7;\n      rookTo = 5;\n    } else if (move.to === 58) {\n      rookFrom = 56;\n      rookTo = 59;\n    } else if (move.to === 62) {\n      rookFrom = 63;\n      rookTo = 61;\n    }\n    const sourceRookCell = document.querySelector(`[data-index=\"${rookFrom}\"]`);\n    const targetRookCell = document.querySelector(`[data-index=\"${rookTo}\"]`);\n    targetRookCell.appendChild(sourceRookCell.firstChild);\n    // sourceCell.removeChild(sourceCell.firstChild);\n  }\n}\n\nlet selectedPiece = null;\nlet validTargetSquares = null;\n\ndocument.addEventListener('click', () => {\n  const oldSelectedPiece = selectedPiece;\n  const oldValidTargetSquares = validTargetSquares;\n  selectedPiece = null;\n  validTargetSquares = null;\n  updateCellClasses(oldSelectedPiece, oldValidTargetSquares);\n});\n\nfunction updateGameState(_gameState) {\n  gameState = _gameState;\n  legalMoves = wasm_andrews_chess_engine__WEBPACK_IMPORTED_MODULE_12__.get_legal_moves(_gameState);\n}\n\nfunction getPieceImage(square) {\n  return SQUARE_IMAGE_MAP[square.color][square.piece];\n}\n\nfunction getSquareCell(square) {\n  const cell = document.createElement('td');\n  const img = document.createElement('img');\n  img.src = getPieceImage(square);\n  cell.appendChild(img);\n\n  return cell;\n}\n\nfunction getOnClick(index) {\n  return (event) => {\n    const square = gameState.board[index];\n    const oldValidTargetSquares = validTargetSquares;\n    const oldSelectedPiece = selectedPiece;\n    if (selectedPiece != null && validTargetSquares.includes(index)) {\n      const move = legalMoves.find(\n        (_move) => _move.from === selectedPiece && _move.to === index,\n      );\n      gameState = wasm_andrews_chess_engine__WEBPACK_IMPORTED_MODULE_12__.perform_move(gameState, move);\n      updateGameState(gameState);\n      updateBoard(move);\n      selectedPiece = null;\n      validTargetSquares = null;\n    } else if (square.empty || selectedPiece === index) {\n      selectedPiece = null;\n      validTargetSquares = null;\n    } else {\n      updateSelectedPiece(index);\n    }\n    updateCellClasses(oldSelectedPiece, oldValidTargetSquares, true);\n    event.stopPropagation();\n  };\n}\n\nfunction updateCellClasses(oldSelectedPiece, oldValidTargetSquares, checkForCheck) {\n  if (oldValidTargetSquares != null) {\n    oldValidTargetSquares.forEach((index) => {\n      const cell = document.querySelector(`[data-index=\"${index}\"]`);\n      cell.classList.remove('target_square');\n    });\n  }\n  if (validTargetSquares != null) {\n    validTargetSquares.forEach((index) => {\n      const cell = document.querySelector(`[data-index=\"${index}\"]`);\n      cell.classList.add('target_square');\n    });\n  }\n  if (oldSelectedPiece != null) {\n    const cell = document.querySelector(`[data-index=\"${oldSelectedPiece}\"]`);\n    cell.classList.remove('source_square');\n  }\n  if (selectedPiece != null) {\n    const cell = document.querySelector(`[data-index=\"${selectedPiece}\"]`);\n    cell.classList.add('source_square');\n  }\n  const checkedKing = document.querySelector('.king_check');\n  if (checkedKing) {\n    checkedKing.classList.remove('king_check');\n  }\n  if (checkForCheck) {\n    const inCheckReturn = wasm_andrews_chess_engine__WEBPACK_IMPORTED_MODULE_12__.in_check(gameState);\n    const inCheck = inCheckReturn[0];\n    const kingIndex = inCheckReturn[1];\n    if (inCheck) {\n      const cell = document.querySelector(`[data-index=\"${kingIndex}\"]`);\n      cell.classList.add('king_check');\n    }\n  }\n}\n\nfunction updateSelectedPiece(index) {\n  selectedPiece = index;\n  validTargetSquares = [];\n  legalMoves.forEach((move) => {\n    if (move.from === index) {\n      validTargetSquares.push(move.to);\n    }\n  });\n}\n\n\n//# sourceURL=webpack://andrews-chess-engine-web/./index.js?");

/***/ }),

/***/ "./node_modules/wasm-andrews-chess-engine/andrews_chess_engine_bg.js":
/*!***************************************************************************!*\
  !*** ./node_modules/wasm-andrews-chess-engine/andrews_chess_engine_bg.js ***!
  \***************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"get_game_state_from_fen\": () => (/* binding */ get_game_state_from_fen),\n/* harmony export */   \"get_initial_game_state\": () => (/* binding */ get_initial_game_state),\n/* harmony export */   \"get_pseudo_legal_moves\": () => (/* binding */ get_pseudo_legal_moves),\n/* harmony export */   \"get_legal_moves\": () => (/* binding */ get_legal_moves),\n/* harmony export */   \"perform_move\": () => (/* binding */ perform_move),\n/* harmony export */   \"in_check\": () => (/* binding */ in_check),\n/* harmony export */   \"InCheckReturn\": () => (/* binding */ InCheckReturn),\n/* harmony export */   \"__wbindgen_json_parse\": () => (/* binding */ __wbindgen_json_parse),\n/* harmony export */   \"__wbindgen_json_serialize\": () => (/* binding */ __wbindgen_json_serialize),\n/* harmony export */   \"__wbindgen_object_drop_ref\": () => (/* binding */ __wbindgen_object_drop_ref),\n/* harmony export */   \"__wbindgen_throw\": () => (/* binding */ __wbindgen_throw)\n/* harmony export */ });\n/* harmony import */ var _andrews_chess_engine_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./andrews_chess_engine_bg.wasm */ \"./node_modules/wasm-andrews-chess-engine/andrews_chess_engine_bg.wasm\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nconst lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;\n\nlet cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });\n\ncachedTextDecoder.decode();\n\nlet cachegetUint8Memory0 = null;\nfunction getUint8Memory0() {\n    if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== _andrews_chess_engine_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.memory.buffer) {\n        cachegetUint8Memory0 = new Uint8Array(_andrews_chess_engine_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.memory.buffer);\n    }\n    return cachegetUint8Memory0;\n}\n\nfunction getStringFromWasm0(ptr, len) {\n    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));\n}\n\nconst heap = new Array(32).fill(undefined);\n\nheap.push(undefined, null, true, false);\n\nlet heap_next = heap.length;\n\nfunction addHeapObject(obj) {\n    if (heap_next === heap.length) heap.push(heap.length + 1);\n    const idx = heap_next;\n    heap_next = heap[idx];\n\n    heap[idx] = obj;\n    return idx;\n}\n\nfunction getObject(idx) { return heap[idx]; }\n\nlet WASM_VECTOR_LEN = 0;\n\nconst lTextEncoder = typeof TextEncoder === 'undefined' ? (0, module.require)('util').TextEncoder : TextEncoder;\n\nlet cachedTextEncoder = new lTextEncoder('utf-8');\n\nconst encodeString = (typeof cachedTextEncoder.encodeInto === 'function'\n    ? function (arg, view) {\n    return cachedTextEncoder.encodeInto(arg, view);\n}\n    : function (arg, view) {\n    const buf = cachedTextEncoder.encode(arg);\n    view.set(buf);\n    return {\n        read: arg.length,\n        written: buf.length\n    };\n});\n\nfunction passStringToWasm0(arg, malloc, realloc) {\n\n    if (realloc === undefined) {\n        const buf = cachedTextEncoder.encode(arg);\n        const ptr = malloc(buf.length);\n        getUint8Memory0().subarray(ptr, ptr + buf.length).set(buf);\n        WASM_VECTOR_LEN = buf.length;\n        return ptr;\n    }\n\n    let len = arg.length;\n    let ptr = malloc(len);\n\n    const mem = getUint8Memory0();\n\n    let offset = 0;\n\n    for (; offset < len; offset++) {\n        const code = arg.charCodeAt(offset);\n        if (code > 0x7F) break;\n        mem[ptr + offset] = code;\n    }\n\n    if (offset !== len) {\n        if (offset !== 0) {\n            arg = arg.slice(offset);\n        }\n        ptr = realloc(ptr, len, len = offset + arg.length * 3);\n        const view = getUint8Memory0().subarray(ptr + offset, ptr + len);\n        const ret = encodeString(arg, view);\n\n        offset += ret.written;\n    }\n\n    WASM_VECTOR_LEN = offset;\n    return ptr;\n}\n\nlet cachegetInt32Memory0 = null;\nfunction getInt32Memory0() {\n    if (cachegetInt32Memory0 === null || cachegetInt32Memory0.buffer !== _andrews_chess_engine_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.memory.buffer) {\n        cachegetInt32Memory0 = new Int32Array(_andrews_chess_engine_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.memory.buffer);\n    }\n    return cachegetInt32Memory0;\n}\n\nfunction dropObject(idx) {\n    if (idx < 36) return;\n    heap[idx] = heap_next;\n    heap_next = idx;\n}\n\nfunction takeObject(idx) {\n    const ret = getObject(idx);\n    dropObject(idx);\n    return ret;\n}\n/**\n* @param {string} fen\n* @returns {any}\n*/\nfunction get_game_state_from_fen(fen) {\n    var ptr0 = passStringToWasm0(fen, _andrews_chess_engine_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_malloc, _andrews_chess_engine_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_realloc);\n    var len0 = WASM_VECTOR_LEN;\n    var ret = _andrews_chess_engine_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.get_game_state_from_fen(ptr0, len0);\n    return takeObject(ret);\n}\n\n/**\n* @returns {any}\n*/\nfunction get_initial_game_state() {\n    var ret = _andrews_chess_engine_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.get_initial_game_state();\n    return takeObject(ret);\n}\n\n/**\n* @param {any} game_state\n* @returns {any}\n*/\nfunction get_pseudo_legal_moves(game_state) {\n    var ret = _andrews_chess_engine_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.get_pseudo_legal_moves(addHeapObject(game_state));\n    return takeObject(ret);\n}\n\n/**\n* @param {any} game_state\n* @returns {any}\n*/\nfunction get_legal_moves(game_state) {\n    var ret = _andrews_chess_engine_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.get_legal_moves(addHeapObject(game_state));\n    return takeObject(ret);\n}\n\n/**\n* @param {any} game_state\n* @param {any} next_move\n* @returns {any}\n*/\nfunction perform_move(game_state, next_move) {\n    var ret = _andrews_chess_engine_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.perform_move(addHeapObject(game_state), addHeapObject(next_move));\n    return takeObject(ret);\n}\n\n/**\n* @param {any} game_state\n* @returns {InCheckReturn}\n*/\nfunction in_check(game_state) {\n    var ret = _andrews_chess_engine_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.in_check(addHeapObject(game_state));\n    return InCheckReturn.__wrap(ret);\n}\n\n/**\n*/\nclass InCheckReturn {\n\n    static __wrap(ptr) {\n        const obj = Object.create(InCheckReturn.prototype);\n        obj.ptr = ptr;\n\n        return obj;\n    }\n\n    __destroy_into_raw() {\n        const ptr = this.ptr;\n        this.ptr = 0;\n\n        return ptr;\n    }\n\n    free() {\n        const ptr = this.__destroy_into_raw();\n        _andrews_chess_engine_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbg_incheckreturn_free(ptr);\n    }\n    /**\n    */\n    get 0() {\n        var ret = _andrews_chess_engine_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbg_get_incheckreturn_0(this.ptr);\n        return ret !== 0;\n    }\n    /**\n    * @param {boolean} arg0\n    */\n    set 0(arg0) {\n        _andrews_chess_engine_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbg_set_incheckreturn_0(this.ptr, arg0);\n    }\n    /**\n    */\n    get 1() {\n        var ret = _andrews_chess_engine_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbg_get_incheckreturn_1(this.ptr);\n        return ret >>> 0;\n    }\n    /**\n    * @param {number} arg0\n    */\n    set 1(arg0) {\n        _andrews_chess_engine_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbg_set_incheckreturn_1(this.ptr, arg0);\n    }\n}\n\nfunction __wbindgen_json_parse(arg0, arg1) {\n    var ret = JSON.parse(getStringFromWasm0(arg0, arg1));\n    return addHeapObject(ret);\n};\n\nfunction __wbindgen_json_serialize(arg0, arg1) {\n    const obj = getObject(arg1);\n    var ret = JSON.stringify(obj === undefined ? null : obj);\n    var ptr0 = passStringToWasm0(ret, _andrews_chess_engine_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_malloc, _andrews_chess_engine_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_realloc);\n    var len0 = WASM_VECTOR_LEN;\n    getInt32Memory0()[arg0 / 4 + 1] = len0;\n    getInt32Memory0()[arg0 / 4 + 0] = ptr0;\n};\n\nfunction __wbindgen_object_drop_ref(arg0) {\n    takeObject(arg0);\n};\n\nfunction __wbindgen_throw(arg0, arg1) {\n    throw new Error(getStringFromWasm0(arg0, arg1));\n};\n\n\n\n//# sourceURL=webpack://andrews-chess-engine-web/./node_modules/wasm-andrews-chess-engine/andrews_chess_engine_bg.js?");

/***/ }),

/***/ "./piece_images/black_bishop.svg":
/*!***************************************!*\
  !*** ./piece_images/black_bishop.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"629fc0578d37e611ff7c.svg\";\n\n//# sourceURL=webpack://andrews-chess-engine-web/./piece_images/black_bishop.svg?");

/***/ }),

/***/ "./piece_images/black_king.svg":
/*!*************************************!*\
  !*** ./piece_images/black_king.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"6c8cc8fabe5215cc854d.svg\";\n\n//# sourceURL=webpack://andrews-chess-engine-web/./piece_images/black_king.svg?");

/***/ }),

/***/ "./piece_images/black_knight.svg":
/*!***************************************!*\
  !*** ./piece_images/black_knight.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d714eeb4f02e04545177.svg\";\n\n//# sourceURL=webpack://andrews-chess-engine-web/./piece_images/black_knight.svg?");

/***/ }),

/***/ "./piece_images/black_pawn.svg":
/*!*************************************!*\
  !*** ./piece_images/black_pawn.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"be5d44ca5ee868885d21.svg\";\n\n//# sourceURL=webpack://andrews-chess-engine-web/./piece_images/black_pawn.svg?");

/***/ }),

/***/ "./piece_images/black_queen.svg":
/*!**************************************!*\
  !*** ./piece_images/black_queen.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"cf388bf415c0d33ec16f.svg\";\n\n//# sourceURL=webpack://andrews-chess-engine-web/./piece_images/black_queen.svg?");

/***/ }),

/***/ "./piece_images/black_rook.svg":
/*!*************************************!*\
  !*** ./piece_images/black_rook.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"fd4e01f573d1bc3eaab3.svg\";\n\n//# sourceURL=webpack://andrews-chess-engine-web/./piece_images/black_rook.svg?");

/***/ }),

/***/ "./piece_images/white_bishop.svg":
/*!***************************************!*\
  !*** ./piece_images/white_bishop.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"8333f40f6a469e7e5802.svg\";\n\n//# sourceURL=webpack://andrews-chess-engine-web/./piece_images/white_bishop.svg?");

/***/ }),

/***/ "./piece_images/white_king.svg":
/*!*************************************!*\
  !*** ./piece_images/white_king.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3f959aab36df6290a8e0.svg\";\n\n//# sourceURL=webpack://andrews-chess-engine-web/./piece_images/white_king.svg?");

/***/ }),

/***/ "./piece_images/white_knight.svg":
/*!***************************************!*\
  !*** ./piece_images/white_knight.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"145b8796b11b8d78677d.svg\";\n\n//# sourceURL=webpack://andrews-chess-engine-web/./piece_images/white_knight.svg?");

/***/ }),

/***/ "./piece_images/white_pawn.svg":
/*!*************************************!*\
  !*** ./piece_images/white_pawn.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"50273cc6d86861932d0a.svg\";\n\n//# sourceURL=webpack://andrews-chess-engine-web/./piece_images/white_pawn.svg?");

/***/ }),

/***/ "./piece_images/white_queen.svg":
/*!**************************************!*\
  !*** ./piece_images/white_queen.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"7a1aecff0f22ff68c43f.svg\";\n\n//# sourceURL=webpack://andrews-chess-engine-web/./piece_images/white_queen.svg?");

/***/ }),

/***/ "./piece_images/white_rook.svg":
/*!*************************************!*\
  !*** ./piece_images/white_rook.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ba9ac487118f903a9b31.svg\";\n\n//# sourceURL=webpack://andrews-chess-engine-web/./piece_images/white_rook.svg?");

/***/ }),

/***/ "./node_modules/wasm-andrews-chess-engine/andrews_chess_engine_bg.wasm":
/*!*****************************************************************************!*\
  !*** ./node_modules/wasm-andrews-chess-engine/andrews_chess_engine_bg.wasm ***!
  \*****************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

eval("\"use strict\";\n// Instantiate WebAssembly module\nvar wasmExports = __webpack_require__.w[module.id];\n__webpack_require__.r(exports);\n// export exports from WebAssembly module\nfor(var name in wasmExports) if(name) exports[name] = wasmExports[name];\n// exec imports from WebAssembly module (for esm order)\n/* harmony import */ var m0 = __webpack_require__(/*! ./andrews_chess_engine_bg.js */ \"./node_modules/wasm-andrews-chess-engine/andrews_chess_engine_bg.js\");\n\n\n// exec wasm module\nwasmExports[\"\"]()\n\n//# sourceURL=webpack://andrews-chess-engine-web/./node_modules/wasm-andrews-chess-engine/andrews_chess_engine_bg.wasm?");

/***/ })

}]);