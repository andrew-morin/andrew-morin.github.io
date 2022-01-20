"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkandrews_chess_engine_web"] = self["webpackChunkandrews_chess_engine_web"] || []).push([["src_index_js"],{

/***/ "./node_modules/wasm-andrews-chess-engine/andrews_chess_engine_bg.js":
/*!***************************************************************************!*\
  !*** ./node_modules/wasm-andrews-chess-engine/andrews_chess_engine_bg.js ***!
  \***************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"get_game_state_from_fen\": () => (/* binding */ get_game_state_from_fen),\n/* harmony export */   \"get_initial_game_state\": () => (/* binding */ get_initial_game_state),\n/* harmony export */   \"convert_game_state_to_squares\": () => (/* binding */ convert_game_state_to_squares),\n/* harmony export */   \"get_square_at_index\": () => (/* binding */ get_square_at_index),\n/* harmony export */   \"get_pseudo_legal_moves\": () => (/* binding */ get_pseudo_legal_moves),\n/* harmony export */   \"get_next_legal_game_states\": () => (/* binding */ get_next_legal_game_states),\n/* harmony export */   \"perform_move\": () => (/* binding */ perform_move),\n/* harmony export */   \"in_check\": () => (/* binding */ in_check),\n/* harmony export */   \"InCheckReturn\": () => (/* binding */ InCheckReturn),\n/* harmony export */   \"__wbindgen_object_drop_ref\": () => (/* binding */ __wbindgen_object_drop_ref),\n/* harmony export */   \"__wbindgen_json_parse\": () => (/* binding */ __wbindgen_json_parse),\n/* harmony export */   \"__wbindgen_json_serialize\": () => (/* binding */ __wbindgen_json_serialize),\n/* harmony export */   \"__wbindgen_throw\": () => (/* binding */ __wbindgen_throw)\n/* harmony export */ });\n/* harmony import */ var _andrews_chess_engine_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./andrews_chess_engine_bg.wasm */ \"./node_modules/wasm-andrews-chess-engine/andrews_chess_engine_bg.wasm\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nconst heap = new Array(32).fill(undefined);\n\nheap.push(undefined, null, true, false);\n\nfunction getObject(idx) { return heap[idx]; }\n\nlet heap_next = heap.length;\n\nfunction dropObject(idx) {\n    if (idx < 36) return;\n    heap[idx] = heap_next;\n    heap_next = idx;\n}\n\nfunction takeObject(idx) {\n    const ret = getObject(idx);\n    dropObject(idx);\n    return ret;\n}\n\nconst lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;\n\nlet cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });\n\ncachedTextDecoder.decode();\n\nlet cachegetUint8Memory0 = null;\nfunction getUint8Memory0() {\n    if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== _andrews_chess_engine_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.memory.buffer) {\n        cachegetUint8Memory0 = new Uint8Array(_andrews_chess_engine_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.memory.buffer);\n    }\n    return cachegetUint8Memory0;\n}\n\nfunction getStringFromWasm0(ptr, len) {\n    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));\n}\n\nfunction addHeapObject(obj) {\n    if (heap_next === heap.length) heap.push(heap.length + 1);\n    const idx = heap_next;\n    heap_next = heap[idx];\n\n    heap[idx] = obj;\n    return idx;\n}\n\nlet WASM_VECTOR_LEN = 0;\n\nconst lTextEncoder = typeof TextEncoder === 'undefined' ? (0, module.require)('util').TextEncoder : TextEncoder;\n\nlet cachedTextEncoder = new lTextEncoder('utf-8');\n\nconst encodeString = (typeof cachedTextEncoder.encodeInto === 'function'\n    ? function (arg, view) {\n    return cachedTextEncoder.encodeInto(arg, view);\n}\n    : function (arg, view) {\n    const buf = cachedTextEncoder.encode(arg);\n    view.set(buf);\n    return {\n        read: arg.length,\n        written: buf.length\n    };\n});\n\nfunction passStringToWasm0(arg, malloc, realloc) {\n\n    if (realloc === undefined) {\n        const buf = cachedTextEncoder.encode(arg);\n        const ptr = malloc(buf.length);\n        getUint8Memory0().subarray(ptr, ptr + buf.length).set(buf);\n        WASM_VECTOR_LEN = buf.length;\n        return ptr;\n    }\n\n    let len = arg.length;\n    let ptr = malloc(len);\n\n    const mem = getUint8Memory0();\n\n    let offset = 0;\n\n    for (; offset < len; offset++) {\n        const code = arg.charCodeAt(offset);\n        if (code > 0x7F) break;\n        mem[ptr + offset] = code;\n    }\n\n    if (offset !== len) {\n        if (offset !== 0) {\n            arg = arg.slice(offset);\n        }\n        ptr = realloc(ptr, len, len = offset + arg.length * 3);\n        const view = getUint8Memory0().subarray(ptr + offset, ptr + len);\n        const ret = encodeString(arg, view);\n\n        offset += ret.written;\n    }\n\n    WASM_VECTOR_LEN = offset;\n    return ptr;\n}\n\nlet cachegetInt32Memory0 = null;\nfunction getInt32Memory0() {\n    if (cachegetInt32Memory0 === null || cachegetInt32Memory0.buffer !== _andrews_chess_engine_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.memory.buffer) {\n        cachegetInt32Memory0 = new Int32Array(_andrews_chess_engine_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.memory.buffer);\n    }\n    return cachegetInt32Memory0;\n}\n/**\n* @param {string} fen\n* @returns {any}\n*/\nfunction get_game_state_from_fen(fen) {\n    var ptr0 = passStringToWasm0(fen, _andrews_chess_engine_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_malloc, _andrews_chess_engine_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_realloc);\n    var len0 = WASM_VECTOR_LEN;\n    var ret = _andrews_chess_engine_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.get_game_state_from_fen(ptr0, len0);\n    return takeObject(ret);\n}\n\n/**\n* @returns {any}\n*/\nfunction get_initial_game_state() {\n    var ret = _andrews_chess_engine_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.get_initial_game_state();\n    return takeObject(ret);\n}\n\n/**\n* @param {any} game_state\n* @returns {any}\n*/\nfunction convert_game_state_to_squares(game_state) {\n    var ret = _andrews_chess_engine_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.convert_game_state_to_squares(addHeapObject(game_state));\n    return takeObject(ret);\n}\n\n/**\n* @param {any} game_state\n* @param {number} index\n* @returns {any}\n*/\nfunction get_square_at_index(game_state, index) {\n    var ret = _andrews_chess_engine_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.get_square_at_index(addHeapObject(game_state), index);\n    return takeObject(ret);\n}\n\n/**\n* @param {any} game_state\n* @returns {any}\n*/\nfunction get_pseudo_legal_moves(game_state) {\n    var ret = _andrews_chess_engine_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.get_pseudo_legal_moves(addHeapObject(game_state));\n    return takeObject(ret);\n}\n\n/**\n* @param {any} game_state\n* @returns {any}\n*/\nfunction get_next_legal_game_states(game_state) {\n    var ret = _andrews_chess_engine_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.get_next_legal_game_states(addHeapObject(game_state));\n    return takeObject(ret);\n}\n\n/**\n* @param {any} game_state\n* @param {any} next_move\n* @returns {any}\n*/\nfunction perform_move(game_state, next_move) {\n    var ret = _andrews_chess_engine_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.perform_move(addHeapObject(game_state), addHeapObject(next_move));\n    return takeObject(ret);\n}\n\n/**\n* @param {any} game_state\n* @returns {InCheckReturn}\n*/\nfunction in_check(game_state) {\n    var ret = _andrews_chess_engine_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.in_check(addHeapObject(game_state));\n    return InCheckReturn.__wrap(ret);\n}\n\n/**\n*/\nclass InCheckReturn {\n\n    static __wrap(ptr) {\n        const obj = Object.create(InCheckReturn.prototype);\n        obj.ptr = ptr;\n\n        return obj;\n    }\n\n    __destroy_into_raw() {\n        const ptr = this.ptr;\n        this.ptr = 0;\n\n        return ptr;\n    }\n\n    free() {\n        const ptr = this.__destroy_into_raw();\n        _andrews_chess_engine_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbg_incheckreturn_free(ptr);\n    }\n    /**\n    */\n    get 0() {\n        var ret = _andrews_chess_engine_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbg_get_incheckreturn_0(this.ptr);\n        return ret !== 0;\n    }\n    /**\n    * @param {boolean} arg0\n    */\n    set 0(arg0) {\n        _andrews_chess_engine_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbg_set_incheckreturn_0(this.ptr, arg0);\n    }\n    /**\n    */\n    get 1() {\n        var ret = _andrews_chess_engine_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbg_get_incheckreturn_1(this.ptr);\n        return ret >>> 0;\n    }\n    /**\n    * @param {number} arg0\n    */\n    set 1(arg0) {\n        _andrews_chess_engine_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbg_set_incheckreturn_1(this.ptr, arg0);\n    }\n}\n\nfunction __wbindgen_object_drop_ref(arg0) {\n    takeObject(arg0);\n};\n\nfunction __wbindgen_json_parse(arg0, arg1) {\n    var ret = JSON.parse(getStringFromWasm0(arg0, arg1));\n    return addHeapObject(ret);\n};\n\nfunction __wbindgen_json_serialize(arg0, arg1) {\n    const obj = getObject(arg1);\n    var ret = JSON.stringify(obj === undefined ? null : obj);\n    var ptr0 = passStringToWasm0(ret, _andrews_chess_engine_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_malloc, _andrews_chess_engine_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_realloc);\n    var len0 = WASM_VECTOR_LEN;\n    getInt32Memory0()[arg0 / 4 + 1] = len0;\n    getInt32Memory0()[arg0 / 4 + 0] = ptr0;\n};\n\nfunction __wbindgen_throw(arg0, arg1) {\n    throw new Error(getStringFromWasm0(arg0, arg1));\n};\n\n\n\n//# sourceURL=webpack://andrews-chess-engine-web/./node_modules/wasm-andrews-chess-engine/andrews_chess_engine_bg.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var wasm_andrews_chess_engine__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! wasm-andrews-chess-engine */ \"./node_modules/wasm-andrews-chess-engine/andrews_chess_engine_bg.js\");\n/* harmony import */ var _piece_images_black_pawn_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./piece_images/black_pawn.svg */ \"./src/piece_images/black_pawn.svg\");\n/* harmony import */ var _piece_images_black_bishop_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./piece_images/black_bishop.svg */ \"./src/piece_images/black_bishop.svg\");\n/* harmony import */ var _piece_images_black_knight_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./piece_images/black_knight.svg */ \"./src/piece_images/black_knight.svg\");\n/* harmony import */ var _piece_images_black_rook_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./piece_images/black_rook.svg */ \"./src/piece_images/black_rook.svg\");\n/* harmony import */ var _piece_images_black_queen_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./piece_images/black_queen.svg */ \"./src/piece_images/black_queen.svg\");\n/* harmony import */ var _piece_images_black_king_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./piece_images/black_king.svg */ \"./src/piece_images/black_king.svg\");\n/* harmony import */ var _piece_images_white_pawn_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./piece_images/white_pawn.svg */ \"./src/piece_images/white_pawn.svg\");\n/* harmony import */ var _piece_images_white_bishop_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./piece_images/white_bishop.svg */ \"./src/piece_images/white_bishop.svg\");\n/* harmony import */ var _piece_images_white_knight_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./piece_images/white_knight.svg */ \"./src/piece_images/white_knight.svg\");\n/* harmony import */ var _piece_images_white_rook_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./piece_images/white_rook.svg */ \"./src/piece_images/white_rook.svg\");\n/* harmony import */ var _piece_images_white_queen_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./piece_images/white_queen.svg */ \"./src/piece_images/white_queen.svg\");\n/* harmony import */ var _piece_images_white_king_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./piece_images/white_king.svg */ \"./src/piece_images/white_king.svg\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst SQUARE_IMAGE_MAP = {\r\n  White: {\r\n    Pawn: _piece_images_white_pawn_svg__WEBPACK_IMPORTED_MODULE_6__,\r\n    Bishop: _piece_images_white_bishop_svg__WEBPACK_IMPORTED_MODULE_7__,\r\n    Knight: _piece_images_white_knight_svg__WEBPACK_IMPORTED_MODULE_8__,\r\n    Rook: _piece_images_white_rook_svg__WEBPACK_IMPORTED_MODULE_9__,\r\n    Queen: _piece_images_white_queen_svg__WEBPACK_IMPORTED_MODULE_10__,\r\n    King: _piece_images_white_king_svg__WEBPACK_IMPORTED_MODULE_11__,\r\n  },\r\n  Black: {\r\n    Pawn: _piece_images_black_pawn_svg__WEBPACK_IMPORTED_MODULE_0__,\r\n    Bishop: _piece_images_black_bishop_svg__WEBPACK_IMPORTED_MODULE_1__,\r\n    Knight: _piece_images_black_knight_svg__WEBPACK_IMPORTED_MODULE_2__,\r\n    Rook: _piece_images_black_rook_svg__WEBPACK_IMPORTED_MODULE_3__,\r\n    Queen: _piece_images_black_queen_svg__WEBPACK_IMPORTED_MODULE_4__,\r\n    King: _piece_images_black_king_svg__WEBPACK_IMPORTED_MODULE_5__,\r\n  },\r\n};\r\n\r\nlet gameState = wasm_andrews_chess_engine__WEBPACK_IMPORTED_MODULE_12__.get_initial_game_state();\r\nlet nextLegalGameStates = wasm_andrews_chess_engine__WEBPACK_IMPORTED_MODULE_12__.get_next_legal_game_states(gameState);\r\n\r\nwasm_andrews_chess_engine__WEBPACK_IMPORTED_MODULE_12__.convert_game_state_to_squares(gameState).forEach(([color, piece], index) => {\r\n  const rankIndex = Math.floor(index / 8);\r\n  const row = document.querySelector(`#rankIndex${rankIndex}`);\r\n\r\n  const cell = color === 'Empty' ? document.createElement('td') : getSquareCell(color, piece);\r\n  cell.dataset.index = index;\r\n  cell.addEventListener('click', getOnClick(index));\r\n  row.appendChild(cell);\r\n});\r\n\r\nfunction updateBoard(move) {\r\n  const targetCell = document.querySelector(`[data-index=\"${move.to}\"]`);\r\n  if (targetCell.firstChild) {\r\n    targetCell.removeChild(targetCell.firstChild);\r\n  }\r\n  const sourceCell = document.querySelector(`[data-index=\"${move.from}\"]`);\r\n  targetCell.appendChild(sourceCell.firstChild);\r\n  if (move.castle) {\r\n    let rookFrom;\r\n    let rookTo;\r\n    if (move.to === 2) {\r\n      rookFrom = 0;\r\n      rookTo = 3;\r\n    } else if (move.to === 6) {\r\n      rookFrom = 7;\r\n      rookTo = 5;\r\n    } else if (move.to === 58) {\r\n      rookFrom = 56;\r\n      rookTo = 59;\r\n    } else if (move.to === 62) {\r\n      rookFrom = 63;\r\n      rookTo = 61;\r\n    }\r\n    const sourceRookCell = document.querySelector(`[data-index=\"${rookFrom}\"]`);\r\n    const targetRookCell = document.querySelector(`[data-index=\"${rookTo}\"]`);\r\n    targetRookCell.appendChild(sourceRookCell.firstChild);\r\n    // sourceCell.removeChild(sourceCell.firstChild);\r\n  }\r\n}\r\n\r\nlet selectedPiece = null;\r\nlet validTargetSquares = null;\r\n\r\ndocument.addEventListener('click', () => {\r\n  const oldSelectedPiece = selectedPiece;\r\n  const oldValidTargetSquares = validTargetSquares;\r\n  selectedPiece = null;\r\n  validTargetSquares = null;\r\n  updateCellClasses(oldSelectedPiece, oldValidTargetSquares);\r\n});\r\n\r\nfunction updateGameState(_gameState) {\r\n  gameState = _gameState;\r\n  nextLegalGameStates = wasm_andrews_chess_engine__WEBPACK_IMPORTED_MODULE_12__.get_next_legal_game_states(_gameState);\r\n}\r\n\r\nfunction getPieceImage(color, piece) {\r\n  return SQUARE_IMAGE_MAP[color][piece];\r\n}\r\n\r\nfunction getSquareCell(color, piece) {\r\n  const cell = document.createElement('td');\r\n  const img = document.createElement('img');\r\n  img.src = getPieceImage(color, piece);\r\n  cell.appendChild(img);\r\n\r\n  return cell;\r\n}\r\n\r\nfunction getOnClick(index) {\r\n  return (event) => {\r\n    const [color] = wasm_andrews_chess_engine__WEBPACK_IMPORTED_MODULE_12__.get_square_at_index(gameState, index);\r\n    const oldValidTargetSquares = validTargetSquares;\r\n    const oldSelectedPiece = selectedPiece;\r\n    if (selectedPiece != null && validTargetSquares.includes(index)) {\r\n      const nextGameState = nextLegalGameStates.find(\r\n        (gs) => {\r\n          const { move_list: moveList } = gs;\r\n          const lastMove = moveList[moveList.length - 1];\r\n          return lastMove.from === selectedPiece && lastMove.to === index;\r\n        },\r\n      );\r\n      const { move_list: moveList } = nextGameState;\r\n      const move = moveList[moveList.length - 1];\r\n      gameState = wasm_andrews_chess_engine__WEBPACK_IMPORTED_MODULE_12__.perform_move(gameState, move);\r\n      updateGameState(gameState);\r\n      updateBoard(move);\r\n      selectedPiece = null;\r\n      validTargetSquares = null;\r\n    } else if (color === 'EMPTY' || selectedPiece === index) {\r\n      selectedPiece = null;\r\n      validTargetSquares = null;\r\n    } else {\r\n      updateSelectedPiece(index);\r\n    }\r\n    updateCellClasses(oldSelectedPiece, oldValidTargetSquares, true);\r\n    event.stopPropagation();\r\n  };\r\n}\r\n\r\nfunction updateCellClasses(oldSelectedPiece, oldValidTargetSquares, checkForCheck) {\r\n  if (oldValidTargetSquares != null) {\r\n    oldValidTargetSquares.forEach((index) => {\r\n      const cell = document.querySelector(`[data-index=\"${index}\"]`);\r\n      cell.classList.remove('target_square');\r\n    });\r\n  }\r\n  if (validTargetSquares != null) {\r\n    validTargetSquares.forEach((index) => {\r\n      const cell = document.querySelector(`[data-index=\"${index}\"]`);\r\n      cell.classList.add('target_square');\r\n    });\r\n  }\r\n  if (oldSelectedPiece != null) {\r\n    const cell = document.querySelector(`[data-index=\"${oldSelectedPiece}\"]`);\r\n    cell.classList.remove('source_square');\r\n  }\r\n  if (selectedPiece != null) {\r\n    const cell = document.querySelector(`[data-index=\"${selectedPiece}\"]`);\r\n    cell.classList.add('source_square');\r\n  }\r\n  const checkedKing = document.querySelector('.king_check');\r\n  if (checkedKing) {\r\n    checkedKing.classList.remove('king_check');\r\n  }\r\n  if (checkForCheck) {\r\n    const inCheckReturn = wasm_andrews_chess_engine__WEBPACK_IMPORTED_MODULE_12__.in_check(gameState);\r\n    const inCheck = inCheckReturn[0];\r\n    const kingIndex = inCheckReturn[1];\r\n    if (inCheck) {\r\n      const cell = document.querySelector(`[data-index=\"${kingIndex}\"]`);\r\n      cell.classList.add('king_check');\r\n    }\r\n  }\r\n}\r\n\r\nfunction updateSelectedPiece(index) {\r\n  selectedPiece = index;\r\n  validTargetSquares = [];\r\n  nextLegalGameStates.forEach((gs) => {\r\n    const lastMove = gs.move_list[gs.move_list.length - 1];\r\n    if (lastMove.from === index) {\r\n      validTargetSquares.push(lastMove.to);\r\n    }\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack://andrews-chess-engine-web/./src/index.js?");

/***/ }),

/***/ "./src/piece_images/black_bishop.svg":
/*!*******************************************!*\
  !*** ./src/piece_images/black_bishop.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"629fc0578d37e611ff7c.svg\";\n\n//# sourceURL=webpack://andrews-chess-engine-web/./src/piece_images/black_bishop.svg?");

/***/ }),

/***/ "./src/piece_images/black_king.svg":
/*!*****************************************!*\
  !*** ./src/piece_images/black_king.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"6c8cc8fabe5215cc854d.svg\";\n\n//# sourceURL=webpack://andrews-chess-engine-web/./src/piece_images/black_king.svg?");

/***/ }),

/***/ "./src/piece_images/black_knight.svg":
/*!*******************************************!*\
  !*** ./src/piece_images/black_knight.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d714eeb4f02e04545177.svg\";\n\n//# sourceURL=webpack://andrews-chess-engine-web/./src/piece_images/black_knight.svg?");

/***/ }),

/***/ "./src/piece_images/black_pawn.svg":
/*!*****************************************!*\
  !*** ./src/piece_images/black_pawn.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"be5d44ca5ee868885d21.svg\";\n\n//# sourceURL=webpack://andrews-chess-engine-web/./src/piece_images/black_pawn.svg?");

/***/ }),

/***/ "./src/piece_images/black_queen.svg":
/*!******************************************!*\
  !*** ./src/piece_images/black_queen.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"cf388bf415c0d33ec16f.svg\";\n\n//# sourceURL=webpack://andrews-chess-engine-web/./src/piece_images/black_queen.svg?");

/***/ }),

/***/ "./src/piece_images/black_rook.svg":
/*!*****************************************!*\
  !*** ./src/piece_images/black_rook.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"fd4e01f573d1bc3eaab3.svg\";\n\n//# sourceURL=webpack://andrews-chess-engine-web/./src/piece_images/black_rook.svg?");

/***/ }),

/***/ "./src/piece_images/white_bishop.svg":
/*!*******************************************!*\
  !*** ./src/piece_images/white_bishop.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"8333f40f6a469e7e5802.svg\";\n\n//# sourceURL=webpack://andrews-chess-engine-web/./src/piece_images/white_bishop.svg?");

/***/ }),

/***/ "./src/piece_images/white_king.svg":
/*!*****************************************!*\
  !*** ./src/piece_images/white_king.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3f959aab36df6290a8e0.svg\";\n\n//# sourceURL=webpack://andrews-chess-engine-web/./src/piece_images/white_king.svg?");

/***/ }),

/***/ "./src/piece_images/white_knight.svg":
/*!*******************************************!*\
  !*** ./src/piece_images/white_knight.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"145b8796b11b8d78677d.svg\";\n\n//# sourceURL=webpack://andrews-chess-engine-web/./src/piece_images/white_knight.svg?");

/***/ }),

/***/ "./src/piece_images/white_pawn.svg":
/*!*****************************************!*\
  !*** ./src/piece_images/white_pawn.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"50273cc6d86861932d0a.svg\";\n\n//# sourceURL=webpack://andrews-chess-engine-web/./src/piece_images/white_pawn.svg?");

/***/ }),

/***/ "./src/piece_images/white_queen.svg":
/*!******************************************!*\
  !*** ./src/piece_images/white_queen.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"7a1aecff0f22ff68c43f.svg\";\n\n//# sourceURL=webpack://andrews-chess-engine-web/./src/piece_images/white_queen.svg?");

/***/ }),

/***/ "./src/piece_images/white_rook.svg":
/*!*****************************************!*\
  !*** ./src/piece_images/white_rook.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ba9ac487118f903a9b31.svg\";\n\n//# sourceURL=webpack://andrews-chess-engine-web/./src/piece_images/white_rook.svg?");

/***/ }),

/***/ "./node_modules/wasm-andrews-chess-engine/andrews_chess_engine_bg.wasm":
/*!*****************************************************************************!*\
  !*** ./node_modules/wasm-andrews-chess-engine/andrews_chess_engine_bg.wasm ***!
  \*****************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

eval("\"use strict\";\n// Instantiate WebAssembly module\nvar wasmExports = __webpack_require__.w[module.id];\n__webpack_require__.r(exports);\n// export exports from WebAssembly module\nfor(var name in wasmExports) if(name) exports[name] = wasmExports[name];\n// exec imports from WebAssembly module (for esm order)\n/* harmony import */ var m0 = __webpack_require__(/*! ./andrews_chess_engine_bg.js */ \"./node_modules/wasm-andrews-chess-engine/andrews_chess_engine_bg.js\");\n\n\n// exec wasm module\nwasmExports[\"\"]()\n\n//# sourceURL=webpack://andrews-chess-engine-web/./node_modules/wasm-andrews-chess-engine/andrews_chess_engine_bg.wasm?");

/***/ })

}]);