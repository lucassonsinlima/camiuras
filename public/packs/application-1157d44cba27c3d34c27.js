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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/packs/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 67);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!*****************************************!*\
  !*** ./node_modules/jquery/src/core.js ***!
  \*****************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ./var/arr */ 16),
	__webpack_require__(/*! ./var/document */ 2),
	__webpack_require__(/*! ./var/getProto */ 73),
	__webpack_require__(/*! ./var/slice */ 21),
	__webpack_require__(/*! ./var/concat */ 40),
	__webpack_require__(/*! ./var/push */ 41),
	__webpack_require__(/*! ./var/indexOf */ 24),
	__webpack_require__(/*! ./var/class2type */ 20),
	__webpack_require__(/*! ./var/toString */ 42),
	__webpack_require__(/*! ./var/hasOwn */ 23),
	__webpack_require__(/*! ./var/fnToString */ 43),
	__webpack_require__(/*! ./var/ObjectFunctionString */ 74),
	__webpack_require__(/*! ./var/support */ 7),
	__webpack_require__(/*! ./var/isFunction */ 1),
	__webpack_require__(/*! ./var/isWindow */ 17),
	__webpack_require__(/*! ./core/DOMEval */ 44),
	__webpack_require__(/*! ./core/toType */ 10)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( arr, document, getProto, slice, concat, push, indexOf,
	class2type, toString, hasOwn, fnToString, ObjectFunctionString,
	support, isFunction, isWindow, DOMEval, toType ) {

"use strict";

var
	version = "3.3.1",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	},

	// Support: Android <=4.0 only
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				src = target[ name ];
				copy = options[ name ];

				// Prevent never-ending loop
				if ( target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = Array.isArray( copy ) ) ) ) {

					if ( copyIsArray ) {
						copyIsArray = false;
						clone = src && Array.isArray( src ) ? src : [];

					} else {
						clone = src && jQuery.isPlainObject( src ) ? src : {};
					}

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {

		/* eslint-disable no-unused-vars */
		// See https://github.com/eslint/eslint/issues/6125
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	// Evaluates a script in a global context
	globalEval: function( code ) {
		DOMEval( code );
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// Support: Android <=4.0 only
	trim: function( text ) {
		return text == null ?
			"" :
			( text + "" ).replace( rtrim, "" );
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( i, name ) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = toType( obj );

	if ( isFunction( obj ) || isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}

return jQuery;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! jquery */ 19)))

/***/ }),
/* 1 */
/*!***************************************************!*\
  !*** ./node_modules/jquery/src/var/isFunction.js ***!
  \***************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
	"use strict";

	return function isFunction( obj ) {

      // Support: Chrome <=57, Firefox <=52
      // In some browsers, typeof returns "function" for HTML <object> elements
      // (i.e., `typeof document.createElement( "object" ) === "function"`).
      // We don't want to classify *any* DOM node as a function.
      return typeof obj === "function" && typeof obj.nodeType !== "number";
  };

}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 2 */
/*!*************************************************!*\
  !*** ./node_modules/jquery/src/var/document.js ***!
  \*************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
	"use strict";

	return window.document;
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 3 */
/*!*********************************************!*\
  !*** ./node_modules/jquery/src/selector.js ***!
  \*********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(/*! ./selector-sizzle */ 76) ], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
	"use strict";
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 4 */
/*!**********************************************!*\
  !*** ./node_modules/jquery/src/core/init.js ***!
  \**********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// Initialize a jQuery object
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ../core */ 0),
	__webpack_require__(/*! ../var/document */ 2),
	__webpack_require__(/*! ../var/isFunction */ 1),
	__webpack_require__(/*! ./var/rsingleTag */ 49),

	__webpack_require__(/*! ../traversing/findFilter */ 50)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery, document, isFunction, rsingleTag ) {

"use strict";

// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );

return init;

}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 5 */
/*!******************************************************!*\
  !*** ./node_modules/jquery/src/data/var/dataPriv.js ***!
  \******************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ../Data */ 53)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( Data ) {
	"use strict";

	return new Data();
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 6 */
/*!******************************************************!*\
  !*** ./node_modules/jquery/src/var/rnothtmlwhite.js ***!
  \******************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
	"use strict";

	// Only count HTML whitespace
	// Other whitespace should count in values
	// https://infra.spec.whatwg.org/#ascii-whitespace
	return ( /[^\x20\t\r\n\f]+/g );
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 7 */
/*!************************************************!*\
  !*** ./node_modules/jquery/src/var/support.js ***!
  \************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
	"use strict";

	// All support tests are defined in their respective modules.
	return {};
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 8 */
/*!************************************************!*\
  !*** ./node_modules/jquery/src/core/access.js ***!
  \************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ../core */ 0),
	__webpack_require__(/*! ../core/toType */ 10),
	__webpack_require__(/*! ../var/isFunction */ 1)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery, toType, isFunction ) {

"use strict";

// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( toType( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
					value :
					value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};

return access;

}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 9 */
/*!**************************************************!*\
  !*** ./node_modules/jquery/src/core/nodeName.js ***!
  \**************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {

"use strict";

function nodeName( elem, name ) {

  return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

};

return nodeName;

}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 10 */
/*!************************************************!*\
  !*** ./node_modules/jquery/src/core/toType.js ***!
  \************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ../var/class2type */ 20),
	__webpack_require__(/*! ../var/toString */ 42)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( class2type, toString ) {

"use strict";

function toType( obj ) {
	if ( obj == null ) {
		return obj + "";
	}

	// Support: Android <=2.3 only (functionish RegExp)
	return typeof obj === "object" || typeof obj === "function" ?
		class2type[ toString.call( obj ) ] || "object" :
		typeof obj;
}

return toType;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 11 */
/*!*********************************************!*\
  !*** ./node_modules/jquery/src/deferred.js ***!
  \*********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ./core */ 0),
	__webpack_require__(/*! ./var/isFunction */ 1),
	__webpack_require__(/*! ./var/slice */ 21),
	__webpack_require__(/*! ./callbacks */ 31)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery, isFunction, slice ) {

"use strict";

function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject, noValue ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
			// * false: [ value ].slice( 0 ) => resolve( value )
			// * true: [ value ].slice( 1 ) => resolve()
			resolve.apply( undefined, [ value ].slice( noValue ) );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.apply( undefined, [ value ] );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// rejected_handlers.disable
					// fulfilled_handlers.disable
					tuples[ 3 - i ][ 3 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock,

					// progress_handlers.lock
					tuples[ 0 ][ 3 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the master Deferred
			master = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						master.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject,
				!remaining );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( master.state() === "pending" ||
				isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return master.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
		}

		return master.promise();
	}
} );

return jQuery;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 12 */
/*!***********************************************!*\
  !*** ./node_modules/jquery/src/traversing.js ***!
  \***********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ./core */ 0),
	__webpack_require__(/*! ./var/indexOf */ 24),
	__webpack_require__(/*! ./traversing/var/dir */ 79),
	__webpack_require__(/*! ./traversing/var/siblings */ 80),
	__webpack_require__(/*! ./traversing/var/rneedsContext */ 51),
	__webpack_require__(/*! ./core/nodeName */ 9),

	__webpack_require__(/*! ./core/init */ 4),
	__webpack_require__(/*! ./traversing/findFilter */ 50),
	__webpack_require__(/*! ./selector */ 3)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery, indexOf, dir, siblings, rneedsContext, nodeName ) {

"use strict";

var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
        if ( nodeName( elem, "iframe" ) ) {
            return elem.contentDocument;
        }

        // Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
        // Treat the template element as a regular one in browsers that
        // don't support it.
        if ( nodeName( elem, "template" ) ) {
            elem = elem.content || elem;
        }

        return jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );

return jQuery;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 13 */
/*!******************************************!*\
  !*** ./node_modules/jquery/src/event.js ***!
  \******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ./core */ 0),
	__webpack_require__(/*! ./var/document */ 2),
	__webpack_require__(/*! ./var/documentElement */ 30),
	__webpack_require__(/*! ./var/isFunction */ 1),
	__webpack_require__(/*! ./var/rnothtmlwhite */ 6),
	__webpack_require__(/*! ./var/slice */ 21),
	__webpack_require__(/*! ./data/var/dataPriv */ 5),
	__webpack_require__(/*! ./core/nodeName */ 9),

	__webpack_require__(/*! ./core/init */ 4),
	__webpack_require__(/*! ./selector */ 3)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery, document, documentElement, isFunction, rnothtmlwhite,
	slice, dataPriv, nodeName ) {

"use strict";

var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 only
// See #13393 for more info
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = {};
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		// Make a writable jQuery.Event from the native event object
		var event = jQuery.event.fix( nativeEvent );

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),
			handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// Triggered event must either 1) have no namespace, or 2) have namespace(s)
				// a subset or equal to those in the bound event (both can have no namespace).
				if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
							return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
							return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		focus: {

			// Fire native event if possible so blur/focus sequence is correct
			trigger: function() {
				if ( this !== safeActiveElement() && this.focus ) {
					this.focus();
					return false;
				}
			},
			delegateType: "focusin"
		},
		blur: {
			trigger: function() {
				if ( this === safeActiveElement() && this.blur ) {
					this.blur();
					return false;
				}
			},
			delegateType: "focusout"
		},
		click: {

			// For checkbox, fire native event so checked state will be right
			trigger: function() {
				if ( this.type === "checkbox" && this.click && nodeName( this, "input" ) ) {
					this.click();
					return false;
				}
			},

			// For cross-browser consistency, don't fire native .click() on links
			_default: function( event ) {
				return nodeName( event.target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || Date.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,

	which: function( event ) {
		var button = event.button;

		// Add which for key events
		if ( event.which == null && rkeyEvent.test( event.type ) ) {
			return event.charCode != null ? event.charCode : event.keyCode;
		}

		// Add which for click: 1 === left; 2 === middle; 3 === right
		if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
			if ( button & 1 ) {
				return 1;
			}

			if ( button & 2 ) {
				return 3;
			}

			if ( button & 4 ) {
				return 2;
			}

			return 0;
		}

		return event.which;
	}
}, jQuery.event.addProp );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );

return jQuery;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 14 */
/*!*****************************************!*\
  !*** ./node_modules/jquery/src/ajax.js ***!
  \*****************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ./core */ 0),
	__webpack_require__(/*! ./var/document */ 2),
	__webpack_require__(/*! ./var/isFunction */ 1),
	__webpack_require__(/*! ./var/rnothtmlwhite */ 6),
	__webpack_require__(/*! ./ajax/var/location */ 94),
	__webpack_require__(/*! ./ajax/var/nonce */ 65),
	__webpack_require__(/*! ./ajax/var/rquery */ 64),

	__webpack_require__(/*! ./core/init */ 4),
	__webpack_require__(/*! ./ajax/parseXML */ 95),
	__webpack_require__(/*! ./event/trigger */ 37),
	__webpack_require__(/*! ./deferred */ 11),
	__webpack_require__(/*! ./serialize */ 66) // jQuery.param
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery, document, isFunction, rnothtmlwhite, location, nonce, rquery ) {

"use strict";

var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );
	originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
							}
						}
						match = responseHeaders[ key.toLowerCase() ];
					}
					return match == null ? null : match;
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 15
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available and should be processed, append data to url
			if ( s.data && ( s.processData || typeof s.data === "string" ) ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce++ ) + uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );

return jQuery;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 15 */
/*!****************************************!*\
  !*** ./node_modules/jquery/src/css.js ***!
  \****************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ./core */ 0),
	__webpack_require__(/*! ./var/pnum */ 26),
	__webpack_require__(/*! ./core/access */ 8),
	__webpack_require__(/*! ./core/camelCase */ 18),
	__webpack_require__(/*! ./var/document */ 2),
	__webpack_require__(/*! ./var/rcssNum */ 25),
	__webpack_require__(/*! ./css/var/rnumnonpx */ 27),
	__webpack_require__(/*! ./css/var/cssExpand */ 28),
	__webpack_require__(/*! ./css/var/getStyles */ 45),
	__webpack_require__(/*! ./css/var/swap */ 39),
	__webpack_require__(/*! ./css/curCSS */ 46),
	__webpack_require__(/*! ./css/adjustCSS */ 47),
	__webpack_require__(/*! ./css/addGetHookIf */ 48),
	__webpack_require__(/*! ./css/support */ 29),

	__webpack_require__(/*! ./core/init */ 4),
	__webpack_require__(/*! ./core/ready */ 52),
	__webpack_require__(/*! ./selector */ 3) // contains
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery, pnum, access, camelCase, document, rcssNum, rnumnonpx, cssExpand,
	getStyles, swap, curCSS, adjustCSS, addGetHookIf, support ) {

"use strict";

var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rcustomProp = /^--/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	},

	cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style;

// Return a css property mapped to a potentially vendor prefixed property
function vendorPropName( name ) {

	// Shortcut for names that are not vendor prefixed
	if ( name in emptyStyle ) {
		return name;
	}

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a property mapped along what jQuery.cssProps suggests or to
// a vendor prefixed property.
function finalPropName( name ) {
	var ret = jQuery.cssProps[ name ];
	if ( !ret ) {
		ret = jQuery.cssProps[ name ] = vendorPropName( name ) || name;
	}
	return ret;
}

function setPositiveNumber( elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function boxModelAdjustment( elem, dimension, box, isBorderBox, styles, computedVal ) {
	var i = dimension === "width" ? 1 : 0,
		extra = 0,
		delta = 0;

	// Adjustment may not be necessary
	if ( box === ( isBorderBox ? "border" : "content" ) ) {
		return 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin
		if ( box === "margin" ) {
			delta += jQuery.css( elem, box + cssExpand[ i ], true, styles );
		}

		// If we get here with a content-box, we're seeking "padding" or "border" or "margin"
		if ( !isBorderBox ) {

			// Add padding
			delta += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// For "border" or "margin", add border
			if ( box !== "padding" ) {
				delta += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );

			// But still keep track of it otherwise
			} else {
				extra += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}

		// If we get here with a border-box (content + padding + border), we're seeking "content" or
		// "padding" or "margin"
		} else {

			// For "content", subtract padding
			if ( box === "content" ) {
				delta -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// For "content" or "padding", subtract border
			if ( box !== "margin" ) {
				delta -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	// Account for positive content-box scroll gutter when requested by providing computedVal
	if ( !isBorderBox && computedVal >= 0 ) {

		// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
		// Assuming integer scroll gutter, subtract the rest and round down
		delta += Math.max( 0, Math.ceil(
			elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
			computedVal -
			delta -
			extra -
			0.5
		) );
	}

	return delta;
}

function getWidthOrHeight( elem, dimension, extra ) {

	// Start with computed style
	var styles = getStyles( elem ),
		val = curCSS( elem, dimension, styles ),
		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
		valueIsBorderBox = isBorderBox;

	// Support: Firefox <=54
	// Return a confounding non-pixel value or feign ignorance, as appropriate.
	if ( rnumnonpx.test( val ) ) {
		if ( !extra ) {
			return val;
		}
		val = "auto";
	}

	// Check for style in case a browser which returns unreliable values
	// for getComputedStyle silently falls back to the reliable elem.style
	valueIsBorderBox = valueIsBorderBox &&
		( support.boxSizingReliable() || val === elem.style[ dimension ] );

	// Fall back to offsetWidth/offsetHeight when value is "auto"
	// This happens for inline elements with no explicit setting (gh-3571)
	// Support: Android <=4.1 - 4.3 only
	// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
	if ( val === "auto" ||
		!parseFloat( val ) && jQuery.css( elem, "display", false, styles ) === "inline" ) {

		val = elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ];

		// offsetWidth/offsetHeight provide border-box values
		valueIsBorderBox = true;
	}

	// Normalize "" and auto
	val = parseFloat( val ) || 0;

	// Adjust for the element's box model
	return ( val +
		boxModelAdjustment(
			elem,
			dimension,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles,

			// Provide the current computed size to request scroll gutter calculation (gh-3589)
			val
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			if ( type === "number" ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( i, dimension ) {
	jQuery.cssHooks[ dimension ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, dimension, extra );
						} ) :
						getWidthOrHeight( elem, dimension, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = getStyles( elem ),
				isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
				subtract = extra && boxModelAdjustment(
					elem,
					dimension,
					extra,
					isBorderBox,
					styles
				);

			// Account for unreliable border-box dimensions by comparing offset* to computed and
			// faking a content-box to get border and padding (gh-3699)
			if ( isBorderBox && support.scrollboxSize() === styles.position ) {
				subtract -= Math.ceil(
					elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
					parseFloat( styles[ dimension ] ) -
					boxModelAdjustment( elem, dimension, "border", false, styles ) -
					0.5
				);
			}

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ dimension ] = value;
				value = jQuery.css( elem, dimension );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
				) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( prefix !== "margin" ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );

return jQuery;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 16 */
/*!********************************************!*\
  !*** ./node_modules/jquery/src/var/arr.js ***!
  \********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
	"use strict";

	return [];
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 17 */
/*!*************************************************!*\
  !*** ./node_modules/jquery/src/var/isWindow.js ***!
  \*************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
	"use strict";

	return function isWindow( obj ) {
		return obj != null && obj === obj.window;
	};

}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 18 */
/*!***************************************************!*\
  !*** ./node_modules/jquery/src/core/camelCase.js ***!
  \***************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {

"use strict";

// Matches dashed string for camelizing
var rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g;

// Used by camelCase as callback to replace()
function fcamelCase( all, letter ) {
	return letter.toUpperCase();
}

// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 15
// Microsoft forgot to hump their vendor prefix (#9572)
function camelCase( string ) {
	return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
}

return camelCase;

}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 19 */
/*!*******************************************!*\
  !*** ./node_modules/jquery/src/jquery.js ***!
  \*******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ./core */ 0),
	__webpack_require__(/*! ./selector */ 3),
	__webpack_require__(/*! ./traversing */ 12),
	__webpack_require__(/*! ./callbacks */ 31),
	__webpack_require__(/*! ./deferred */ 11),
	__webpack_require__(/*! ./deferred/exceptionHook */ 81),
	__webpack_require__(/*! ./core/ready */ 52),
	__webpack_require__(/*! ./data */ 82),
	__webpack_require__(/*! ./queue */ 33),
	__webpack_require__(/*! ./queue/delay */ 83),
	__webpack_require__(/*! ./attributes */ 87),
	__webpack_require__(/*! ./event */ 13),
	__webpack_require__(/*! ./event/focusin */ 91),
	__webpack_require__(/*! ./manipulation */ 22),
	__webpack_require__(/*! ./manipulation/_evalUrl */ 93),
	__webpack_require__(/*! ./wrap */ 96),
	__webpack_require__(/*! ./css */ 15),
	__webpack_require__(/*! ./css/hiddenVisibleSelectors */ 97),
	__webpack_require__(/*! ./serialize */ 66),
	__webpack_require__(/*! ./ajax */ 14),
	__webpack_require__(/*! ./ajax/xhr */ 98),
	__webpack_require__(/*! ./ajax/script */ 99),
	__webpack_require__(/*! ./ajax/jsonp */ 100),
	__webpack_require__(/*! ./ajax/load */ 101),
	__webpack_require__(/*! ./event/ajax */ 104),
	__webpack_require__(/*! ./effects */ 34),
	__webpack_require__(/*! ./effects/animatedSelector */ 105),
	__webpack_require__(/*! ./offset */ 106),
	__webpack_require__(/*! ./dimensions */ 107),
	__webpack_require__(/*! ./deprecated */ 108),
	__webpack_require__(/*! ./exports/amd */ 110),
	__webpack_require__(/*! ./exports/global */ 111)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery ) {

"use strict";

return jQuery;

}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 20 */
/*!***************************************************!*\
  !*** ./node_modules/jquery/src/var/class2type.js ***!
  \***************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
	"use strict";

	// [[Class]] -> type pairs
	return {};
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 21 */
/*!**********************************************!*\
  !*** ./node_modules/jquery/src/var/slice.js ***!
  \**********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ./arr */ 16)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( arr ) {
	"use strict";

	return arr.slice;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 22 */
/*!*************************************************!*\
  !*** ./node_modules/jquery/src/manipulation.js ***!
  \*************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ./core */ 0),
	__webpack_require__(/*! ./var/concat */ 40),
	__webpack_require__(/*! ./var/isFunction */ 1),
	__webpack_require__(/*! ./var/push */ 41),
	__webpack_require__(/*! ./core/access */ 8),
	__webpack_require__(/*! ./manipulation/var/rcheckableType */ 62),
	__webpack_require__(/*! ./manipulation/var/rtagName */ 57),
	__webpack_require__(/*! ./manipulation/var/rscriptType */ 58),
	__webpack_require__(/*! ./manipulation/wrapMap */ 59),
	__webpack_require__(/*! ./manipulation/getAll */ 60),
	__webpack_require__(/*! ./manipulation/setGlobalEval */ 61),
	__webpack_require__(/*! ./manipulation/buildFragment */ 56),
	__webpack_require__(/*! ./manipulation/support */ 85),

	__webpack_require__(/*! ./data/var/dataPriv */ 5),
	__webpack_require__(/*! ./data/var/dataUser */ 54),
	__webpack_require__(/*! ./data/var/acceptData */ 32),
	__webpack_require__(/*! ./core/DOMEval */ 44),
	__webpack_require__(/*! ./core/nodeName */ 9),

	__webpack_require__(/*! ./core/init */ 4),
	__webpack_require__(/*! ./traversing */ 12),
	__webpack_require__(/*! ./selector */ 3),
	__webpack_require__(/*! ./event */ 13)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery, concat, isFunction, push, access,
	rcheckableType, rtagName, rscriptType,
	wrapMap, getAll, setGlobalEval, buildFragment, support,
	dataPriv, dataUser, acceptData, DOMEval, nodeName ) {

"use strict";

var

	/* eslint-disable max-len */

	// See https://github.com/eslint/eslint/issues/3229
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,

	/* eslint-enable */

	// Support: IE <=10 - 11, Edge 12 - 13 only
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( elem ).children( "tbody" )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	if ( ( elem.type || "" ).slice( 0, 5 ) === "true/" ) {
		elem.type = elem.type.slice( 5 );
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.access( src );
		pdataCur = dataPriv.set( dest, pdataOld );
		events = pdataOld.events;

		if ( events ) {
			delete pdataCur.handle;
			pdataCur.events = {};

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = concat.apply( [], args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		valueIsFunction = isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( valueIsFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( valueIsFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src && ( node.type || "" ).toLowerCase()  !== "module" ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl ) {
								jQuery._evalUrl( node.src );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), doc, node );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html.replace( rxhtmlTag, "<$1></$2>" );
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = jQuery.contains( elem.ownerDocument, elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );

return jQuery;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 23 */
/*!***********************************************!*\
  !*** ./node_modules/jquery/src/var/hasOwn.js ***!
  \***********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ./class2type */ 20)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( class2type ) {
	"use strict";

	return class2type.hasOwnProperty;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 24 */
/*!************************************************!*\
  !*** ./node_modules/jquery/src/var/indexOf.js ***!
  \************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ./arr */ 16)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( arr ) {
	"use strict";

	return arr.indexOf;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 25 */
/*!************************************************!*\
  !*** ./node_modules/jquery/src/var/rcssNum.js ***!
  \************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ../var/pnum */ 26)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( pnum ) {

"use strict";

return new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );

}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 26 */
/*!*********************************************!*\
  !*** ./node_modules/jquery/src/var/pnum.js ***!
  \*********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
	"use strict";

	return ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 27 */
/*!******************************************************!*\
  !*** ./node_modules/jquery/src/css/var/rnumnonpx.js ***!
  \******************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ../../var/pnum */ 26)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( pnum ) {
	"use strict";

	return new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 28 */
/*!******************************************************!*\
  !*** ./node_modules/jquery/src/css/var/cssExpand.js ***!
  \******************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
	"use strict";

	return [ "Top", "Right", "Bottom", "Left" ];
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 29 */
/*!************************************************!*\
  !*** ./node_modules/jquery/src/css/support.js ***!
  \************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ../core */ 0),
	__webpack_require__(/*! ../var/document */ 2),
	__webpack_require__(/*! ../var/documentElement */ 30),
	__webpack_require__(/*! ../var/support */ 7)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery, document, documentElement, support ) {

"use strict";

( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		container.style.cssText = "position:absolute;left:-11111px;width:60px;" +
			"margin-top:1px;padding:0;border:0";
		div.style.cssText =
			"position:relative;display:block;box-sizing:border-box;overflow:scroll;" +
			"margin:auto;border:1px;padding:1px;" +
			"width:60%;top:1%";
		documentElement.appendChild( container ).appendChild( div );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = roundPixelMeasures( divStyle.marginLeft ) === 12;

		// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
		// Some styles come back with percentage values, even though they shouldn't
		div.style.right = "60%";
		pixelBoxStylesVal = roundPixelMeasures( divStyle.right ) === 36;

		// Support: IE 9 - 11 only
		// Detect misreporting of content dimensions for box-sizing:border-box elements
		boxSizingReliableVal = roundPixelMeasures( divStyle.width ) === 36;

		// Support: IE 9 only
		// Detect overflow:scroll screwiness (gh-3699)
		div.style.position = "absolute";
		scrollboxSizeVal = div.offsetWidth === 36 || "absolute";

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	function roundPixelMeasures( measure ) {
		return Math.round( parseFloat( measure ) );
	}

	var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
		reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	jQuery.extend( support, {
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelBoxStyles: function() {
			computeStyleTests();
			return pixelBoxStylesVal;
		},
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		},
		scrollboxSize: function() {
			computeStyleTests();
			return scrollboxSizeVal;
		}
	} );
} )();

return support;

}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 30 */
/*!********************************************************!*\
  !*** ./node_modules/jquery/src/var/documentElement.js ***!
  \********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ./document */ 2)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( document ) {
	"use strict";

	return document.documentElement;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 31 */
/*!**********************************************!*\
  !*** ./node_modules/jquery/src/callbacks.js ***!
  \**********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ./core */ 0),
	__webpack_require__(/*! ./core/toType */ 10),
	__webpack_require__(/*! ./var/isFunction */ 1),
	__webpack_require__(/*! ./var/rnothtmlwhite */ 6)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery, toType, isFunction, rnothtmlwhite ) {

"use strict";

// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = locked || options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && toType( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};

return jQuery;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 32 */
/*!********************************************************!*\
  !*** ./node_modules/jquery/src/data/var/acceptData.js ***!
  \********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {

"use strict";

/**
 * Determines whether an object can have data
 */
return function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};

}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 33 */
/*!******************************************!*\
  !*** ./node_modules/jquery/src/queue.js ***!
  \******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ./core */ 0),
	__webpack_require__(/*! ./data/var/dataPriv */ 5),
	__webpack_require__(/*! ./deferred */ 11),
	__webpack_require__(/*! ./callbacks */ 31)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery, dataPriv ) {

"use strict";

jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || Array.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );

return jQuery;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 34 */
/*!********************************************!*\
  !*** ./node_modules/jquery/src/effects.js ***!
  \********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ./core */ 0),
	__webpack_require__(/*! ./core/camelCase */ 18),
	__webpack_require__(/*! ./var/document */ 2),
	__webpack_require__(/*! ./var/isFunction */ 1),
	__webpack_require__(/*! ./var/rcssNum */ 25),
	__webpack_require__(/*! ./var/rnothtmlwhite */ 6),
	__webpack_require__(/*! ./css/var/cssExpand */ 28),
	__webpack_require__(/*! ./css/var/isHiddenWithinTree */ 55),
	__webpack_require__(/*! ./css/var/swap */ 39),
	__webpack_require__(/*! ./css/adjustCSS */ 47),
	__webpack_require__(/*! ./data/var/dataPriv */ 5),
	__webpack_require__(/*! ./css/showHide */ 84),

	__webpack_require__(/*! ./core/init */ 4),
	__webpack_require__(/*! ./queue */ 33),
	__webpack_require__(/*! ./deferred */ 11),
	__webpack_require__(/*! ./traversing */ 12),
	__webpack_require__(/*! ./manipulation */ 22),
	__webpack_require__(/*! ./css */ 15),
	__webpack_require__(/*! ./effects/Tween */ 86)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery, camelCase, document, isFunction, rcssNum, rnothtmlwhite, cssExpand,
	isHiddenWithinTree, swap, adjustCSS, dataPriv, showHide ) {

"use strict";

var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = Date.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 15
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY and Edge just mirrors
		// the overflowX value there.
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

			/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( Array.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			// If there's more to do, yield
			if ( percent < 1 && length ) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );
			return false;
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					result.stop.bind( result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	// Attach callbacks from options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !isFunction( easing ) && easing
	};

	// Go to the end state if fx are off
	if ( jQuery.fx.off ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = Date.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Run the timer and safely remove it when done (allowing for external removal)
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};

return jQuery;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 35 */
/*!*******************************************************!*\
  !*** ./node_modules/jquery/src/attributes/support.js ***!
  \*******************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ../var/document */ 2),
	__webpack_require__(/*! ../var/support */ 7)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( document, support ) {

"use strict";

( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();

return support;

}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 36 */
/*!**********************************************************!*\
  !*** ./node_modules/jquery/src/core/stripAndCollapse.js ***!
  \**********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ../var/rnothtmlwhite */ 6)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( rnothtmlwhite ) {
	"use strict";

	// Strip and collapse whitespace according to HTML spec
	// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}

	return stripAndCollapse;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 37 */
/*!**************************************************!*\
  !*** ./node_modules/jquery/src/event/trigger.js ***!
  \**************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ../core */ 0),
	__webpack_require__(/*! ../var/document */ 2),
	__webpack_require__(/*! ../data/var/dataPriv */ 5),
	__webpack_require__(/*! ../data/var/acceptData */ 32),
	__webpack_require__(/*! ../var/hasOwn */ 23),
	__webpack_require__(/*! ../var/isFunction */ 1),
	__webpack_require__(/*! ../var/isWindow */ 17),
	__webpack_require__(/*! ../event */ 13)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery, document, dataPriv, acceptData, hasOwn, isFunction, isWindow ) {

"use strict";

var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	stopPropagationCallback = function( e ) {
		e.stopPropagation();
	};

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = lastElement = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
			lastElement = cur;
			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && isFunction( elem[ type ] ) && !isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;

					if ( event.isPropagationStopped() ) {
						lastElement.addEventListener( type, stopPropagationCallback );
					}

					elem[ type ]();

					if ( event.isPropagationStopped() ) {
						lastElement.removeEventListener( type, stopPropagationCallback );
					}

					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );

return jQuery;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 38 */
/*!****************************************!*\
  !*** (webpack)/buildin/amd-options.js ***!
  \****************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ }),
/* 39 */
/*!*************************************************!*\
  !*** ./node_modules/jquery/src/css/var/swap.js ***!
  \*************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {

"use strict";

// A method for quickly swapping in/out CSS properties to get correct calculations.
return function( elem, options, callback, args ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.apply( elem, args || [] );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};

}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 40 */
/*!***********************************************!*\
  !*** ./node_modules/jquery/src/var/concat.js ***!
  \***********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ./arr */ 16)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( arr ) {
	"use strict";

	return arr.concat;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 41 */
/*!*********************************************!*\
  !*** ./node_modules/jquery/src/var/push.js ***!
  \*********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ./arr */ 16)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( arr ) {
	"use strict";

	return arr.push;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 42 */
/*!*************************************************!*\
  !*** ./node_modules/jquery/src/var/toString.js ***!
  \*************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ./class2type */ 20)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( class2type ) {
	"use strict";

	return class2type.toString;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 43 */
/*!***************************************************!*\
  !*** ./node_modules/jquery/src/var/fnToString.js ***!
  \***************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ./hasOwn */ 23)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( hasOwn ) {
	"use strict";

	return hasOwn.toString;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 44 */
/*!*************************************************!*\
  !*** ./node_modules/jquery/src/core/DOMEval.js ***!
  \*************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ../var/document */ 2)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( document ) {
	"use strict";

	var preservedScriptAttributes = {
		type: true,
		src: true,
		noModule: true
	};

	function DOMEval( code, doc, node ) {
		doc = doc || document;

		var i,
			script = doc.createElement( "script" );

		script.text = code;
		if ( node ) {
			for ( i in preservedScriptAttributes ) {
				if ( node[ i ] ) {
					script[ i ] = node[ i ];
				}
			}
		}
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}

	return DOMEval;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 45 */
/*!******************************************************!*\
  !*** ./node_modules/jquery/src/css/var/getStyles.js ***!
  \******************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
	"use strict";

	return function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 46 */
/*!***********************************************!*\
  !*** ./node_modules/jquery/src/css/curCSS.js ***!
  \***********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ../core */ 0),
	__webpack_require__(/*! ./var/rboxStyle */ 75),
	__webpack_require__(/*! ./var/rnumnonpx */ 27),
	__webpack_require__(/*! ./var/getStyles */ 45),
	__webpack_require__(/*! ./support */ 29),
	__webpack_require__(/*! ../selector */ 3) // Get jQuery.contains
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery, rboxStyle, rnumnonpx, getStyles, support ) {

"use strict";

function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, #12537)
	//   .css('--customProperty) (#3144)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelBoxStyles() && rnumnonpx.test( ret ) && rboxStyle.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}

return curCSS;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 47 */
/*!**************************************************!*\
  !*** ./node_modules/jquery/src/css/adjustCSS.js ***!
  \**************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ../core */ 0),
	__webpack_require__(/*! ../var/rcssNum */ 25)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery, rcssNum ) {

"use strict";

function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted, scale,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Support: Firefox <=54
		// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
		initial = initial / 2;

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		while ( maxIterations-- ) {

			// Evaluate and update our best guess (doubling guesses that zero out).
			// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
			jQuery.style( elem, prop, initialInUnit + unit );
			if ( ( 1 - scale ) * ( 1 - ( scale = currentValue() / initial || 0.5 ) ) <= 0 ) {
				maxIterations = 0;
			}
			initialInUnit = initialInUnit / scale;

		}

		initialInUnit = initialInUnit * 2;
		jQuery.style( elem, prop, initialInUnit + unit );

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}

return adjustCSS;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 48 */
/*!*****************************************************!*\
  !*** ./node_modules/jquery/src/css/addGetHookIf.js ***!
  \*****************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {

"use strict";

function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}

return addGetHookIf;

}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 49 */
/*!********************************************************!*\
  !*** ./node_modules/jquery/src/core/var/rsingleTag.js ***!
  \********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
	"use strict";

	// Match a standalone tag
	return ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 50 */
/*!**********************************************************!*\
  !*** ./node_modules/jquery/src/traversing/findFilter.js ***!
  \**********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ../core */ 0),
	__webpack_require__(/*! ../var/indexOf */ 24),
	__webpack_require__(/*! ../var/isFunction */ 1),
	__webpack_require__(/*! ./var/rneedsContext */ 51),
	__webpack_require__(/*! ../selector */ 3)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery, indexOf, isFunction, rneedsContext ) {

"use strict";

// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Filtered directly for both simple and complex selectors
	return jQuery.filter( qualifier, elements, not );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );

}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 51 */
/*!*****************************************************************!*\
  !*** ./node_modules/jquery/src/traversing/var/rneedsContext.js ***!
  \*****************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ../../core */ 0),
	__webpack_require__(/*! ../../selector */ 3)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery ) {
	"use strict";

	return jQuery.expr.match.needsContext;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 52 */
/*!***********************************************!*\
  !*** ./node_modules/jquery/src/core/ready.js ***!
  \***********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ../core */ 0),
	__webpack_require__(/*! ../var/document */ 2),
	__webpack_require__(/*! ../core/readyException */ 78),
	__webpack_require__(/*! ../deferred */ 11)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery, document ) {

"use strict";

// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}

}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 53 */
/*!**********************************************!*\
  !*** ./node_modules/jquery/src/data/Data.js ***!
  \**********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ../core */ 0),
	__webpack_require__(/*! ../core/camelCase */ 18),
	__webpack_require__(/*! ../var/rnothtmlwhite */ 6),
	__webpack_require__(/*! ./var/acceptData */ 32)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery, camelCase, rnothtmlwhite, acceptData ) {

"use strict";

function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( Array.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( camelCase );
			} else {
				key = camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};

return Data;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 54 */
/*!******************************************************!*\
  !*** ./node_modules/jquery/src/data/var/dataUser.js ***!
  \******************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ../Data */ 53)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( Data ) {
	"use strict";

	return new Data();
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 55 */
/*!***************************************************************!*\
  !*** ./node_modules/jquery/src/css/var/isHiddenWithinTree.js ***!
  \***************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ../../core */ 0),
	__webpack_require__(/*! ../../selector */ 3)

	// css is assumed
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery ) {
	"use strict";

	// isHiddenWithinTree reports if an element has a non-"none" display style (inline and/or
	// through the CSS cascade), which is useful in deciding whether or not to make it visible.
	// It differs from the :hidden selector (jQuery.expr.pseudos.hidden) in two important ways:
	// * A hidden ancestor does not force an element to be classified as hidden.
	// * Being disconnected from the document does not force an element to be classified as hidden.
	// These differences improve the behavior of .toggle() et al. when applied to elements that are
	// detached or contained within hidden ancestors (gh-2404, gh-2863).
	return function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			jQuery.contains( elem.ownerDocument, elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 56 */
/*!***************************************************************!*\
  !*** ./node_modules/jquery/src/manipulation/buildFragment.js ***!
  \***************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ../core */ 0),
	__webpack_require__(/*! ../core/toType */ 10),
	__webpack_require__(/*! ./var/rtagName */ 57),
	__webpack_require__(/*! ./var/rscriptType */ 58),
	__webpack_require__(/*! ./wrapMap */ 59),
	__webpack_require__(/*! ./getAll */ 60),
	__webpack_require__(/*! ./setGlobalEval */ 61)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery, toType, rtagName, rscriptType, wrapMap, getAll, setGlobalEval ) {

"use strict";

var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, contains, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( toType( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		contains = jQuery.contains( elem.ownerDocument, elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( contains ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}

return buildFragment;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 57 */
/*!**************************************************************!*\
  !*** ./node_modules/jquery/src/manipulation/var/rtagName.js ***!
  \**************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
	"use strict";

	return ( /<([a-z][^\/\0>\x20\t\r\n\f]+)/i );
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 58 */
/*!*****************************************************************!*\
  !*** ./node_modules/jquery/src/manipulation/var/rscriptType.js ***!
  \*****************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
	"use strict";

	return ( /^$|^module$|\/(?:java|ecma)script/i );
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 59 */
/*!*********************************************************!*\
  !*** ./node_modules/jquery/src/manipulation/wrapMap.js ***!
  \*********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {

"use strict";

// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// Support: IE <=9 only
	option: [ 1, "<select multiple='multiple'>", "</select>" ],

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

// Support: IE <=9 only
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;

return wrapMap;
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 60 */
/*!********************************************************!*\
  !*** ./node_modules/jquery/src/manipulation/getAll.js ***!
  \********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ../core */ 0),
	__webpack_require__(/*! ../core/nodeName */ 9)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery, nodeName ) {

"use strict";

function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}

return getAll;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 61 */
/*!***************************************************************!*\
  !*** ./node_modules/jquery/src/manipulation/setGlobalEval.js ***!
  \***************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ../data/var/dataPriv */ 5)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( dataPriv ) {

"use strict";

// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}

return setGlobalEval;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 62 */
/*!********************************************************************!*\
  !*** ./node_modules/jquery/src/manipulation/var/rcheckableType.js ***!
  \********************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
	"use strict";

	return ( /^(?:checkbox|radio)$/i );
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 63 */
/*!****************************************************!*\
  !*** ./node_modules/jquery/src/attributes/prop.js ***!
  \****************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ../core */ 0),
	__webpack_require__(/*! ../core/access */ 8),
	__webpack_require__(/*! ./support */ 35),
	__webpack_require__(/*! ../selector */ 3)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery, access, support ) {

"use strict";

var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );

}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 64 */
/*!****************************************************!*\
  !*** ./node_modules/jquery/src/ajax/var/rquery.js ***!
  \****************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
	"use strict";

	return ( /\?/ );
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 65 */
/*!***************************************************!*\
  !*** ./node_modules/jquery/src/ajax/var/nonce.js ***!
  \***************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
	"use strict";

	return Date.now();
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 66 */
/*!**********************************************!*\
  !*** ./node_modules/jquery/src/serialize.js ***!
  \**********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ./core */ 0),
	__webpack_require__(/*! ./core/toType */ 10),
	__webpack_require__(/*! ./manipulation/var/rcheckableType */ 62),
	__webpack_require__(/*! ./var/isFunction */ 1),
	__webpack_require__(/*! ./core/init */ 4),
	__webpack_require__(/*! ./traversing */ 12), // filter
	__webpack_require__(/*! ./attributes/prop */ 63)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery, toType, rcheckableType, isFunction ) {

"use strict";

var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && toType( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );

return jQuery;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 67 */
/*!*********************************************!*\
  !*** ./app/javascript/packs/application.js ***!
  \*********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb
console.log("app js");
__webpack_require__(/*! ../libs/blotter.min.js */ 68);
__webpack_require__(/*! ../libs/channelSplitMaterial.js */ 71);
__webpack_require__(/*! ../libs/jquery.pagepiling.min.js */ 72);
__webpack_require__(/*! ../libs/slick.min.js */ 112);

var index = __webpack_require__(/*! ../modules/index */ 113);

index.init();

/***/ }),
/* 68 */
/*!********************************************!*\
  !*** ./app/javascript/libs/blotter.min.js ***!
  \********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, module) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var require;var require;var require;var __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*!
// ███   █    ████▄    ▄▄▄▄▀ ▄▄▄▄▀ ▄███▄   █▄▄▄▄
// █  █  █    █   █ ▀▀▀ █ ▀▀▀ █    █▀   ▀  █  ▄▀
// █ ▀ ▄ █    █   █     █     █    ██▄▄    █▀▀▌
// █  ▄▀ ███▄ ▀████    █     █     █▄   ▄▀ █  █
// ███       ▀        ▀     ▀      ▀███▀     █
//                                          ▀
// The MIT License
//
// Copyright © 1986 - ∞, Blotter / Bradley Griffith / http://bradley.computer
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.
*/
!function () {
  var a = "object" == (typeof self === "undefined" ? "undefined" : _typeof(self)) && self.self === self && self || "object" == (typeof global === "undefined" ? "undefined" : _typeof(global)) && global.global === global && global || this,
      b = a._,
      c = Array.prototype,
      d = Object.prototype,
      e = "undefined" != typeof Symbol ? Symbol.prototype : null,
      f = c.push,
      g = c.slice,
      h = d.toString,
      i = d.hasOwnProperty,
      j = Array.isArray,
      k = Object.keys,
      l = Object.create,
      m = function m() {},
      n = function n(a) {
    return a instanceof n ? a : this instanceof n ? void (this._wrapped = a) : new n(a);
  };"undefined" == typeof exports || exports.nodeType ? a._ = n : ("undefined" != typeof module && !module.nodeType && module.exports && (exports = module.exports = n), exports._ = n), n.VERSION = "1.8.3";var o,
      p = function p(a, b, c) {
    if (void 0 === b) return a;switch (null == c ? 3 : c) {case 1:
        return function (c) {
          return a.call(b, c);
        };case 3:
        return function (c, d, e) {
          return a.call(b, c, d, e);
        };case 4:
        return function (c, d, e, f) {
          return a.call(b, c, d, e, f);
        };}return function () {
      return a.apply(b, arguments);
    };
  },
      q = function q(a, b, c) {
    return n.iteratee !== o ? n.iteratee(a, b) : null == a ? n.identity : n.isFunction(a) ? p(a, b, c) : n.isObject(a) ? n.matcher(a) : n.property(a);
  };n.iteratee = o = function o(a, b) {
    return q(a, b, 1 / 0);
  };var r = function r(a, b) {
    return b = null == b ? a.length - 1 : +b, function () {
      for (var c = Math.max(arguments.length - b, 0), d = Array(c), e = 0; e < c; e++) {
        d[e] = arguments[e + b];
      }switch (b) {case 0:
          return a.call(this, d);case 1:
          return a.call(this, arguments[0], d);case 2:
          return a.call(this, arguments[0], arguments[1], d);}var f = Array(b + 1);for (e = 0; e < b; e++) {
        f[e] = arguments[e];
      }return f[b] = d, a.apply(this, f);
    };
  },
      s = function s(a) {
    if (!n.isObject(a)) return {};if (l) return l(a);m.prototype = a;var b = new m();return m.prototype = null, b;
  },
      t = function t(a) {
    return function (b) {
      return null == b ? void 0 : b[a];
    };
  },
      u = Math.pow(2, 53) - 1,
      v = t("length"),
      w = function w(a) {
    var b = v(a);return "number" == typeof b && b >= 0 && b <= u;
  };n.each = n.forEach = function (a, b, c) {
    b = p(b, c);var d, e;if (w(a)) for (d = 0, e = a.length; d < e; d++) {
      b(a[d], d, a);
    } else {
      var f = n.keys(a);for (d = 0, e = f.length; d < e; d++) {
        b(a[f[d]], f[d], a);
      }
    }return a;
  }, n.map = n.collect = function (a, b, c) {
    b = q(b, c);for (var d = !w(a) && n.keys(a), e = (d || a).length, f = Array(e), g = 0; g < e; g++) {
      var h = d ? d[g] : g;f[g] = b(a[h], h, a);
    }return f;
  };var x = function x(a) {
    var b = function b(_b2, c, d, e) {
      var f = !w(_b2) && n.keys(_b2),
          g = (f || _b2).length,
          h = a > 0 ? 0 : g - 1;for (e || (d = _b2[f ? f[h] : h], h += a); h >= 0 && h < g; h += a) {
        var i = f ? f[h] : h;d = c(d, _b2[i], i, _b2);
      }return d;
    };return function (a, c, d, e) {
      var f = arguments.length >= 3;return b(a, p(c, e, 4), d, f);
    };
  };n.reduce = n.foldl = n.inject = x(1), n.reduceRight = n.foldr = x(-1), n.find = n.detect = function (a, b, c) {
    var d = w(a) ? n.findIndex : n.findKey,
        e = d(a, b, c);if (void 0 !== e && -1 !== e) return a[e];
  }, n.filter = n.select = function (a, b, c) {
    var d = [];return b = q(b, c), n.each(a, function (a, c, e) {
      b(a, c, e) && d.push(a);
    }), d;
  }, n.reject = function (a, b, c) {
    return n.filter(a, n.negate(q(b)), c);
  }, n.every = n.all = function (a, b, c) {
    b = q(b, c);for (var d = !w(a) && n.keys(a), e = (d || a).length, f = 0; f < e; f++) {
      var g = d ? d[f] : f;if (!b(a[g], g, a)) return !1;
    }return !0;
  }, n.some = n.any = function (a, b, c) {
    b = q(b, c);for (var d = !w(a) && n.keys(a), e = (d || a).length, f = 0; f < e; f++) {
      var g = d ? d[f] : f;if (b(a[g], g, a)) return !0;
    }return !1;
  }, n.contains = n.includes = n.include = function (a, b, c, d) {
    return w(a) || (a = n.values(a)), ("number" != typeof c || d) && (c = 0), n.indexOf(a, b, c) >= 0;
  }, n.invoke = r(function (a, b, c) {
    var d = n.isFunction(b);return n.map(a, function (a) {
      var e = d ? b : a[b];return null == e ? e : e.apply(a, c);
    });
  }), n.pluck = function (a, b) {
    return n.map(a, n.property(b));
  }, n.where = function (a, b) {
    return n.filter(a, n.matcher(b));
  }, n.findWhere = function (a, b) {
    return n.find(a, n.matcher(b));
  }, n.max = function (a, b, c) {
    var d,
        e,
        f = -1 / 0,
        g = -1 / 0;if (null == b || "number" == typeof b && "object" != _typeof(a[0]) && null != a) {
      a = w(a) ? a : n.values(a);for (var h = 0, i = a.length; h < i; h++) {
        null != (d = a[h]) && d > f && (f = d);
      }
    } else b = q(b, c), n.each(a, function (a, c, d) {
      ((e = b(a, c, d)) > g || e === -1 / 0 && f === -1 / 0) && (f = a, g = e);
    });return f;
  }, n.min = function (a, b, c) {
    var d,
        e,
        f = 1 / 0,
        g = 1 / 0;if (null == b || "number" == typeof b && "object" != _typeof(a[0]) && null != a) {
      a = w(a) ? a : n.values(a);for (var h = 0, i = a.length; h < i; h++) {
        null != (d = a[h]) && d < f && (f = d);
      }
    } else b = q(b, c), n.each(a, function (a, c, d) {
      ((e = b(a, c, d)) < g || e === 1 / 0 && f === 1 / 0) && (f = a, g = e);
    });return f;
  }, n.shuffle = function (a) {
    return n.sample(a, 1 / 0);
  }, n.sample = function (a, b, c) {
    if (null == b || c) return w(a) || (a = n.values(a)), a[n.random(a.length - 1)];var d = w(a) ? n.clone(a) : n.values(a),
        e = v(d);b = Math.max(Math.min(b, e), 0);for (var f = e - 1, g = 0; g < b; g++) {
      var h = n.random(g, f),
          i = d[g];d[g] = d[h], d[h] = i;
    }return d.slice(0, b);
  }, n.sortBy = function (a, b, c) {
    var d = 0;return b = q(b, c), n.pluck(n.map(a, function (a, c, e) {
      return { value: a, index: d++, criteria: b(a, c, e) };
    }).sort(function (a, b) {
      var c = a.criteria,
          d = b.criteria;if (c !== d) {
        if (c > d || void 0 === c) return 1;if (c < d || void 0 === d) return -1;
      }return a.index - b.index;
    }), "value");
  };var y = function y(a, b) {
    return function (c, d, e) {
      var f = b ? [[], []] : {};return d = q(d, e), n.each(c, function (b, e) {
        var g = d(b, e, c);a(f, b, g);
      }), f;
    };
  };n.groupBy = y(function (a, b, c) {
    n.has(a, c) ? a[c].push(b) : a[c] = [b];
  }), n.indexBy = y(function (a, b, c) {
    a[c] = b;
  }), n.countBy = y(function (a, b, c) {
    n.has(a, c) ? a[c]++ : a[c] = 1;
  });var z = /[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g;n.toArray = function (a) {
    return a ? n.isArray(a) ? g.call(a) : n.isString(a) ? a.match(z) : w(a) ? n.map(a, n.identity) : n.values(a) : [];
  }, n.size = function (a) {
    return null == a ? 0 : w(a) ? a.length : n.keys(a).length;
  }, n.partition = y(function (a, b, c) {
    a[c ? 0 : 1].push(b);
  }, !0), n.first = n.head = n.take = function (a, b, c) {
    if (null != a) return null == b || c ? a[0] : n.initial(a, a.length - b);
  }, n.initial = function (a, b, c) {
    return g.call(a, 0, Math.max(0, a.length - (null == b || c ? 1 : b)));
  }, n.last = function (a, b, c) {
    if (null != a) return null == b || c ? a[a.length - 1] : n.rest(a, Math.max(0, a.length - b));
  }, n.rest = n.tail = n.drop = function (a, b, c) {
    return g.call(a, null == b || c ? 1 : b);
  }, n.compact = function (a) {
    return n.filter(a, Boolean);
  };var A = function A(a, b, c, d) {
    d = d || [];for (var e = d.length, f = 0, g = v(a); f < g; f++) {
      var h = a[f];if (w(h) && (n.isArray(h) || n.isArguments(h))) {
        if (b) for (var i = 0, j = h.length; i < j;) {
          d[e++] = h[i++];
        } else A(h, b, c, d), e = d.length;
      } else c || (d[e++] = h);
    }return d;
  };n.flatten = function (a, b) {
    return A(a, b, !1);
  }, n.without = r(function (a, b) {
    return n.difference(a, b);
  }), n.uniq = n.unique = function (a, b, c, d) {
    n.isBoolean(b) || (d = c, c = b, b = !1), null != c && (c = q(c, d));for (var e = [], f = [], g = 0, h = v(a); g < h; g++) {
      var i = a[g],
          j = c ? c(i, g, a) : i;b ? (g && f === j || e.push(i), f = j) : c ? n.contains(f, j) || (f.push(j), e.push(i)) : n.contains(e, i) || e.push(i);
    }return e;
  }, n.union = r(function (a) {
    return n.uniq(A(a, !0, !0));
  }), n.intersection = function (a) {
    for (var b = [], c = arguments.length, d = 0, e = v(a); d < e; d++) {
      var f = a[d];if (!n.contains(b, f)) {
        var g;for (g = 1; g < c && n.contains(arguments[g], f); g++) {}g === c && b.push(f);
      }
    }return b;
  }, n.difference = r(function (a, b) {
    return b = A(b, !0, !0), n.filter(a, function (a) {
      return !n.contains(b, a);
    });
  }), n.unzip = function (a) {
    for (var b = a && n.max(a, v).length || 0, c = Array(b), d = 0; d < b; d++) {
      c[d] = n.pluck(a, d);
    }return c;
  }, n.zip = r(n.unzip), n.object = function (a, b) {
    for (var c = {}, d = 0, e = v(a); d < e; d++) {
      b ? c[a[d]] = b[d] : c[a[d][0]] = a[d][1];
    }return c;
  };var B = function B(a) {
    return function (b, c, d) {
      c = q(c, d);for (var e = v(b), f = a > 0 ? 0 : e - 1; f >= 0 && f < e; f += a) {
        if (c(b[f], f, b)) return f;
      }return -1;
    };
  };n.findIndex = B(1), n.findLastIndex = B(-1), n.sortedIndex = function (a, b, c, d) {
    c = q(c, d, 1);for (var e = c(b), f = 0, g = v(a); f < g;) {
      var h = Math.floor((f + g) / 2);c(a[h]) < e ? f = h + 1 : g = h;
    }return f;
  };var C = function C(a, b, c) {
    return function (d, e, f) {
      var h = 0,
          i = v(d);if ("number" == typeof f) a > 0 ? h = f >= 0 ? f : Math.max(f + i, h) : i = f >= 0 ? Math.min(f + 1, i) : f + i + 1;else if (c && f && i) return f = c(d, e), d[f] === e ? f : -1;if (e !== e) return f = b(g.call(d, h, i), n.isNaN), f >= 0 ? f + h : -1;for (f = a > 0 ? h : i - 1; f >= 0 && f < i; f += a) {
        if (d[f] === e) return f;
      }return -1;
    };
  };n.indexOf = C(1, n.findIndex, n.sortedIndex), n.lastIndexOf = C(-1, n.findLastIndex), n.range = function (a, b, c) {
    null == b && (b = a || 0, a = 0), c || (c = b < a ? -1 : 1);for (var d = Math.max(Math.ceil((b - a) / c), 0), e = Array(d), f = 0; f < d; f++, a += c) {
      e[f] = a;
    }return e;
  }, n.chunk = function (a, b) {
    if (null == b || b < 1) return [];for (var c = [], d = 0, e = a.length; d < e;) {
      c.push(g.call(a, d, d += b));
    }return c;
  };var D = function D(a, b, c, d, e) {
    if (!(d instanceof b)) return a.apply(c, e);var f = s(a.prototype),
        g = a.apply(f, e);return n.isObject(g) ? g : f;
  };n.bind = r(function (a, b, c) {
    if (!n.isFunction(a)) throw new TypeError("Bind must be called on a function");var d = r(function (e) {
      return D(a, d, b, this, c.concat(e));
    });return d;
  }), n.partial = r(function (a, b) {
    var c = n.partial.placeholder,
        d = function d() {
      for (var e = 0, f = b.length, g = Array(f), h = 0; h < f; h++) {
        g[h] = b[h] === c ? arguments[e++] : b[h];
      }for (; e < arguments.length;) {
        g.push(arguments[e++]);
      }return D(a, d, this, this, g);
    };return d;
  }), n.partial.placeholder = n, n.bindAll = r(function (a, b) {
    b = A(b, !1, !1);var c = b.length;if (c < 1) throw new Error("bindAll must be passed function names");for (; c--;) {
      var d = b[c];a[d] = n.bind(a[d], a);
    }
  }), n.memoize = function (a, b) {
    var c = function c(d) {
      var e = c.cache,
          f = "" + (b ? b.apply(this, arguments) : d);return n.has(e, f) || (e[f] = a.apply(this, arguments)), e[f];
    };return c.cache = {}, c;
  }, n.delay = r(function (a, b, c) {
    return setTimeout(function () {
      return a.apply(null, c);
    }, b);
  }), n.defer = n.partial(n.delay, n, 1), n.throttle = function (a, b, c) {
    var d,
        e,
        f,
        g,
        h = 0;c || (c = {});var i = function i() {
      h = !1 === c.leading ? 0 : n.now(), d = null, g = a.apply(e, f), d || (e = f = null);
    },
        j = function j() {
      var j = n.now();h || !1 !== c.leading || (h = j);var k = b - (j - h);return e = this, f = arguments, k <= 0 || k > b ? (d && (clearTimeout(d), d = null), h = j, g = a.apply(e, f), d || (e = f = null)) : d || !1 === c.trailing || (d = setTimeout(i, k)), g;
    };return j.cancel = function () {
      clearTimeout(d), h = 0, d = e = f = null;
    }, j;
  }, n.debounce = function (a, b, c) {
    var d,
        e,
        f = function f(b, c) {
      d = null, c && (e = a.apply(b, c));
    },
        g = r(function (g) {
      if (d && clearTimeout(d), c) {
        var h = !d;d = setTimeout(f, b), h && (e = a.apply(this, g));
      } else d = n.delay(f, b, this, g);return e;
    });return g.cancel = function () {
      clearTimeout(d), d = null;
    }, g;
  }, n.wrap = function (a, b) {
    return n.partial(b, a);
  }, n.negate = function (a) {
    return function () {
      return !a.apply(this, arguments);
    };
  }, n.compose = function () {
    var a = arguments,
        b = a.length - 1;return function () {
      for (var c = b, d = a[b].apply(this, arguments); c--;) {
        d = a[c].call(this, d);
      }return d;
    };
  }, n.after = function (a, b) {
    return function () {
      if (--a < 1) return b.apply(this, arguments);
    };
  }, n.before = function (a, b) {
    var c;return function () {
      return --a > 0 && (c = b.apply(this, arguments)), a <= 1 && (b = null), c;
    };
  }, n.once = n.partial(n.before, 2), n.restArgs = r;var E = !{ toString: null }.propertyIsEnumerable("toString"),
      F = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"],
      G = function G(a, b) {
    var c = F.length,
        e = a.constructor,
        f = n.isFunction(e) && e.prototype || d,
        g = "constructor";for (n.has(a, g) && !n.contains(b, g) && b.push(g); c--;) {
      (g = F[c]) in a && a[g] !== f[g] && !n.contains(b, g) && b.push(g);
    }
  };n.keys = function (a) {
    if (!n.isObject(a)) return [];if (k) return k(a);var b = [];for (var c in a) {
      n.has(a, c) && b.push(c);
    }return E && G(a, b), b;
  }, n.allKeys = function (a) {
    if (!n.isObject(a)) return [];var b = [];for (var c in a) {
      b.push(c);
    }return E && G(a, b), b;
  }, n.values = function (a) {
    for (var b = n.keys(a), c = b.length, d = Array(c), e = 0; e < c; e++) {
      d[e] = a[b[e]];
    }return d;
  }, n.mapObject = function (a, b, c) {
    b = q(b, c);for (var d = n.keys(a), e = d.length, f = {}, g = 0; g < e; g++) {
      var h = d[g];f[h] = b(a[h], h, a);
    }return f;
  }, n.pairs = function (a) {
    for (var b = n.keys(a), c = b.length, d = Array(c), e = 0; e < c; e++) {
      d[e] = [b[e], a[b[e]]];
    }return d;
  }, n.invert = function (a) {
    for (var b = {}, c = n.keys(a), d = 0, e = c.length; d < e; d++) {
      b[a[c[d]]] = c[d];
    }return b;
  }, n.functions = n.methods = function (a) {
    var b = [];for (var c in a) {
      n.isFunction(a[c]) && b.push(c);
    }return b.sort();
  };var H = function H(a, b) {
    return function (c) {
      var d = arguments.length;if (b && (c = Object(c)), d < 2 || null == c) return c;for (var e = 1; e < d; e++) {
        for (var f = arguments[e], g = a(f), h = g.length, i = 0; i < h; i++) {
          var j = g[i];b && void 0 !== c[j] || (c[j] = f[j]);
        }
      }return c;
    };
  };n.extend = H(n.allKeys), n.extendOwn = n.assign = H(n.keys), n.findKey = function (a, b, c) {
    b = q(b, c);for (var d, e = n.keys(a), f = 0, g = e.length; f < g; f++) {
      if (d = e[f], b(a[d], d, a)) return d;
    }
  };var I = function I(a, b, c) {
    return b in c;
  };n.pick = r(function (a, b) {
    var c = {},
        d = b[0];if (null == a) return c;n.isFunction(d) ? (b.length > 1 && (d = p(d, b[1])), b = n.allKeys(a)) : (d = I, b = A(b, !1, !1), a = Object(a));for (var e = 0, f = b.length; e < f; e++) {
      var g = b[e],
          h = a[g];d(h, g, a) && (c[g] = h);
    }return c;
  }), n.omit = r(function (a, b) {
    var c,
        d = b[0];return n.isFunction(d) ? (d = n.negate(d), b.length > 1 && (c = b[1])) : (b = n.map(A(b, !1, !1), String), d = function d(a, c) {
      return !n.contains(b, c);
    }), n.pick(a, d, c);
  }), n.defaults = H(n.allKeys, !0), n.create = function (a, b) {
    var c = s(a);return b && n.extendOwn(c, b), c;
  }, n.clone = function (a) {
    return n.isObject(a) ? n.isArray(a) ? a.slice() : n.extend({}, a) : a;
  }, n.tap = function (a, b) {
    return b(a), a;
  }, n.isMatch = function (a, b) {
    var c = n.keys(b),
        d = c.length;if (null == a) return !d;for (var e = Object(a), f = 0; f < d; f++) {
      var g = c[f];if (b[g] !== e[g] || !(g in e)) return !1;
    }return !0;
  };var J, K;J = function J(a, b, c, d) {
    if (a === b) return 0 !== a || 1 / a == 1 / b;if (null == a || null == b) return a === b;if (a !== a) return b !== b;var e = typeof a === "undefined" ? "undefined" : _typeof(a);return ("function" === e || "object" === e || "object" == (typeof b === "undefined" ? "undefined" : _typeof(b))) && K(a, b, c, d);
  }, K = function K(a, b, c, d) {
    a instanceof n && (a = a._wrapped), b instanceof n && (b = b._wrapped);var f = h.call(a);if (f !== h.call(b)) return !1;switch (f) {case "[object RegExp]":case "[object String]":
        return "" + a == "" + b;case "[object Number]":
        return +a != +a ? +b != +b : 0 == +a ? 1 / +a == 1 / b : +a == +b;case "[object Date]":case "[object Boolean]":
        return +a == +b;case "[object Symbol]":
        return e.valueOf.call(a) === e.valueOf.call(b);}var g = "[object Array]" === f;if (!g) {
      if ("object" != (typeof a === "undefined" ? "undefined" : _typeof(a)) || "object" != (typeof b === "undefined" ? "undefined" : _typeof(b))) return !1;var i = a.constructor,
          j = b.constructor;if (i !== j && !(n.isFunction(i) && i instanceof i && n.isFunction(j) && j instanceof j) && "constructor" in a && "constructor" in b) return !1;
    }c = c || [], d = d || [];for (var k = c.length; k--;) {
      if (c[k] === a) return d[k] === b;
    }if (c.push(a), d.push(b), g) {
      if ((k = a.length) !== b.length) return !1;for (; k--;) {
        if (!J(a[k], b[k], c, d)) return !1;
      }
    } else {
      var l,
          m = n.keys(a);if (k = m.length, n.keys(b).length !== k) return !1;for (; k--;) {
        if (l = m[k], !n.has(b, l) || !J(a[l], b[l], c, d)) return !1;
      }
    }return c.pop(), d.pop(), !0;
  }, n.isEqual = function (a, b) {
    return J(a, b);
  }, n.isEmpty = function (a) {
    return null == a || (w(a) && (n.isArray(a) || n.isString(a) || n.isArguments(a)) ? 0 === a.length : 0 === n.keys(a).length);
  }, n.isElement = function (a) {
    return !(!a || 1 !== a.nodeType);
  }, n.isArray = j || function (a) {
    return "[object Array]" === h.call(a);
  }, n.isObject = function (a) {
    var b = typeof a === "undefined" ? "undefined" : _typeof(a);return "function" === b || "object" === b && !!a;
  }, n.each(["Arguments", "Function", "String", "Number", "Date", "RegExp", "Error", "Symbol", "Map", "WeakMap", "Set", "WeakSet"], function (a) {
    n["is" + a] = function (b) {
      return h.call(b) === "[object " + a + "]";
    };
  }), n.isArguments(arguments) || (n.isArguments = function (a) {
    return n.has(a, "callee");
  });var L = a.document && a.document.childNodes;"function" != typeof /./ && "object" != (typeof Int8Array === "undefined" ? "undefined" : _typeof(Int8Array)) && "function" != typeof L && (n.isFunction = function (a) {
    return "function" == typeof a || !1;
  }), n.isFinite = function (a) {
    return !n.isSymbol(a) && isFinite(a) && !isNaN(parseFloat(a));
  }, n.isNaN = function (a) {
    return isNaN(a) && n.isNumber(a);
  }, n.isBoolean = function (a) {
    return !0 === a || !1 === a || "[object Boolean]" === h.call(a);
  }, n.isNull = function (a) {
    return null === a;
  }, n.isUndefined = function (a) {
    return void 0 === a;
  }, n.has = function (a, b) {
    return null != a && i.call(a, b);
  }, n.noConflict = function () {
    return a._ = b, this;
  }, n.identity = function (a) {
    return a;
  }, n.constant = function (a) {
    return function () {
      return a;
    };
  }, n.noop = function () {}, n.property = t, n.propertyOf = function (a) {
    return null == a ? function () {} : function (b) {
      return a[b];
    };
  }, n.matcher = n.matches = function (a) {
    return a = n.extendOwn({}, a), function (b) {
      return n.isMatch(b, a);
    };
  }, n.times = function (a, b, c) {
    var d = Array(Math.max(0, a));b = p(b, c, 1);for (var e = 0; e < a; e++) {
      d[e] = b(e);
    }return d;
  }, n.random = function (a, b) {
    return null == b && (b = a, a = 0), a + Math.floor(Math.random() * (b - a + 1));
  }, n.now = Date.now || function () {
    return new Date().getTime();
  };var M = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#x27;", "`": "&#x60;" },
      N = n.invert(M),
      O = function O(a) {
    var b = function b(_b3) {
      return a[_b3];
    },
        c = "(?:" + n.keys(a).join("|") + ")",
        d = RegExp(c),
        e = RegExp(c, "g");return function (a) {
      return a = null == a ? "" : "" + a, d.test(a) ? a.replace(e, b) : a;
    };
  };n.escape = O(M), n.unescape = O(N), n.result = function (a, b, c) {
    var d = null == a ? void 0 : a[b];return void 0 === d && (d = c), n.isFunction(d) ? d.call(a) : d;
  };var P = 0;n.uniqueId = function (a) {
    var b = ++P + "";return a ? a + b : b;
  }, n.templateSettings = { evaluate: /<%([\s\S]+?)%>/g, interpolate: /<%=([\s\S]+?)%>/g, escape: /<%-([\s\S]+?)%>/g };var Q = /(.)^/,
      R = { "'": "'", "\\": "\\", "\r": "r", "\n": "n", "\u2028": "u2028", "\u2029": "u2029" },
      S = /\\|'|\r|\n|\u2028|\u2029/g,
      T = function T(a) {
    return "\\" + R[a];
  };n.template = function (a, b, c) {
    !b && c && (b = c), b = n.defaults({}, b, n.templateSettings);var d = RegExp([(b.escape || Q).source, (b.interpolate || Q).source, (b.evaluate || Q).source].join("|") + "|$", "g"),
        e = 0,
        f = "__p+='";a.replace(d, function (b, c, d, g, h) {
      return f += a.slice(e, h).replace(S, T), e = h + b.length, c ? f += "'+\n((__t=(" + c + "))==null?'':_.escape(__t))+\n'" : d ? f += "'+\n((__t=(" + d + "))==null?'':__t)+\n'" : g && (f += "';\n" + g + "\n__p+='"), b;
    }), f += "';\n", b.variable || (f = "with(obj||{}){\n" + f + "}\n"), f = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + f + "return __p;\n";var g;try {
      g = new Function(b.variable || "obj", "_", f);
    } catch (a) {
      throw a.source = f, a;
    }var h = function h(a) {
      return g.call(this, a, n);
    },
        i = b.variable || "obj";return h.source = "function(" + i + "){\n" + f + "}", h;
  }, n.chain = function (a) {
    var b = n(a);return b._chain = !0, b;
  };var U = function U(a, b) {
    return a._chain ? n(b).chain() : b;
  };n.mixin = function (a) {
    return n.each(n.functions(a), function (b) {
      var c = n[b] = a[b];n.prototype[b] = function () {
        var a = [this._wrapped];return f.apply(a, arguments), U(this, c.apply(n, a));
      };
    }), n;
  }, n.mixin(n), n.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function (a) {
    var b = c[a];n.prototype[a] = function () {
      var c = this._wrapped;return b.apply(c, arguments), "shift" !== a && "splice" !== a || 0 !== c.length || delete c[0], U(this, c);
    };
  }), n.each(["concat", "join", "slice"], function (a) {
    var b = c[a];n.prototype[a] = function () {
      return U(this, b.apply(this._wrapped, arguments));
    };
  }), n.prototype.value = function () {
    return this._wrapped;
  }, n.prototype.valueOf = n.prototype.toJSON = n.prototype.value, n.prototype.toString = function () {
    return "" + this._wrapped;
  }, "function" == "function" && __webpack_require__(/*! !webpack amd options */ 38) && !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
    return n;
  }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}(), function (a, b) {
  "object" == ( false ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? b(exports) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (b),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : b(a.THREE = {});
}(this, function (a) {
  "use strict";
  function b() {}function c(a, b) {
    this.x = a || 0, this.y = b || 0;
  }function d() {
    this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], arguments.length > 0 && console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.");
  }function e(a, b, c, d) {
    this._x = a || 0, this._y = b || 0, this._z = c || 0, this._w = void 0 !== d ? d : 1;
  }function f(a, b, c) {
    this.x = a || 0, this.y = b || 0, this.z = c || 0;
  }function g() {
    this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1], arguments.length > 0 && console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.");
  }function h(a, b, d, e, f, i, j, k, l, m) {
    Object.defineProperty(this, "id", { value: zd++ }), this.uuid = yd.generateUUID(), this.name = "", this.image = void 0 !== a ? a : h.DEFAULT_IMAGE, this.mipmaps = [], this.mapping = void 0 !== b ? b : h.DEFAULT_MAPPING, this.wrapS = void 0 !== d ? d : Ec, this.wrapT = void 0 !== e ? e : Ec, this.magFilter = void 0 !== f ? f : Jc, this.minFilter = void 0 !== i ? i : Lc, this.anisotropy = void 0 !== l ? l : 1, this.format = void 0 !== j ? j : $c, this.type = void 0 !== k ? k : Mc, this.offset = new c(0, 0), this.repeat = new c(1, 1), this.center = new c(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new g(), this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.encoding = void 0 !== m ? m : pd, this.version = 0, this.onUpdate = null;
  }function i(a, b, c, d) {
    this.x = a || 0, this.y = b || 0, this.z = c || 0, this.w = void 0 !== d ? d : 1;
  }function j(a, b, c) {
    this.uuid = yd.generateUUID(), this.width = a, this.height = b, this.scissor = new i(0, 0, a, b), this.scissorTest = !1, this.viewport = new i(0, 0, a, b), c = c || {}, void 0 === c.minFilter && (c.minFilter = Jc), this.texture = new h(void 0, void 0, c.wrapS, c.wrapT, c.magFilter, c.minFilter, c.format, c.type, c.anisotropy, c.encoding), this.depthBuffer = void 0 === c.depthBuffer || c.depthBuffer, this.stencilBuffer = void 0 === c.stencilBuffer || c.stencilBuffer, this.depthTexture = void 0 !== c.depthTexture ? c.depthTexture : null;
  }function k(a, b, c, d, e, f, g, i, j, k, l, m) {
    h.call(this, null, f, g, i, j, k, d, e, l, m), this.image = { data: a, width: b, height: c }, this.magFilter = void 0 !== j ? j : Gc, this.minFilter = void 0 !== k ? k : Gc, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }function l(a, b, c, d, e, f, g, i, j, k) {
    a = void 0 !== a ? a : [], b = void 0 !== b ? b : wc, h.call(this, a, b, c, d, e, f, g, i, j, k), this.flipY = !1;
  }function m() {
    this.seq = [], this.map = {};
  }function n(a, b, c) {
    var d = a[0];if (d <= 0 || d > 0) return a;var e = b * c,
        f = Cd[e];if (void 0 === f && (f = new Float32Array(e), Cd[e] = f), 0 !== b) {
      d.toArray(f, 0);for (var g = 1, h = 0; g !== b; ++g) {
        h += c, a[g].toArray(f, h);
      }
    }return f;
  }function o(a, b) {
    var c = Dd[b];void 0 === c && (c = new Int32Array(b), Dd[b] = c);for (var d = 0; d !== b; ++d) {
      c[d] = a.allocTextureUnit();
    }return c;
  }function p(a, b) {
    a.uniform1f(this.addr, b);
  }function q(a, b) {
    a.uniform1i(this.addr, b);
  }function r(a, b) {
    void 0 === b.x ? a.uniform2fv(this.addr, b) : a.uniform2f(this.addr, b.x, b.y);
  }function s(a, b) {
    void 0 !== b.x ? a.uniform3f(this.addr, b.x, b.y, b.z) : void 0 !== b.r ? a.uniform3f(this.addr, b.r, b.g, b.b) : a.uniform3fv(this.addr, b);
  }function t(a, b) {
    void 0 === b.x ? a.uniform4fv(this.addr, b) : a.uniform4f(this.addr, b.x, b.y, b.z, b.w);
  }function u(a, b) {
    a.uniformMatrix2fv(this.addr, !1, b.elements || b);
  }function v(a, b) {
    void 0 === b.elements ? a.uniformMatrix3fv(this.addr, !1, b) : (Fd.set(b.elements), a.uniformMatrix3fv(this.addr, !1, Fd));
  }function w(a, b) {
    void 0 === b.elements ? a.uniformMatrix4fv(this.addr, !1, b) : (Ed.set(b.elements), a.uniformMatrix4fv(this.addr, !1, Ed));
  }function x(a, b, c) {
    var d = c.allocTextureUnit();a.uniform1i(this.addr, d), c.setTexture2D(b || Ad, d);
  }function y(a, b, c) {
    var d = c.allocTextureUnit();a.uniform1i(this.addr, d), c.setTextureCube(b || Bd, d);
  }function z(a, b) {
    a.uniform2iv(this.addr, b);
  }function A(a, b) {
    a.uniform3iv(this.addr, b);
  }function B(a, b) {
    a.uniform4iv(this.addr, b);
  }function C(a) {
    switch (a) {case 5126:
        return p;case 35664:
        return r;case 35665:
        return s;case 35666:
        return t;case 35674:
        return u;case 35675:
        return v;case 35676:
        return w;case 35678:case 36198:
        return x;case 35680:
        return y;case 5124:case 35670:
        return q;case 35667:case 35671:
        return z;case 35668:case 35672:
        return A;case 35669:case 35673:
        return B;}
  }function D(a, b) {
    a.uniform1fv(this.addr, b);
  }function E(a, b) {
    a.uniform1iv(this.addr, b);
  }function F(a, b) {
    a.uniform2fv(this.addr, n(b, this.size, 2));
  }function G(a, b) {
    a.uniform3fv(this.addr, n(b, this.size, 3));
  }function H(a, b) {
    a.uniform4fv(this.addr, n(b, this.size, 4));
  }function I(a, b) {
    a.uniformMatrix2fv(this.addr, !1, n(b, this.size, 4));
  }function J(a, b) {
    a.uniformMatrix3fv(this.addr, !1, n(b, this.size, 9));
  }function K(a, b) {
    a.uniformMatrix4fv(this.addr, !1, n(b, this.size, 16));
  }function L(a, b, c) {
    var d = b.length,
        e = o(c, d);a.uniform1iv(this.addr, e);for (var f = 0; f !== d; ++f) {
      c.setTexture2D(b[f] || Ad, e[f]);
    }
  }function M(a, b, c) {
    var d = b.length,
        e = o(c, d);a.uniform1iv(this.addr, e);for (var f = 0; f !== d; ++f) {
      c.setTextureCube(b[f] || Bd, e[f]);
    }
  }function N(a) {
    switch (a) {case 5126:
        return D;case 35664:
        return F;case 35665:
        return G;case 35666:
        return H;case 35674:
        return I;case 35675:
        return J;case 35676:
        return K;case 35678:
        return L;case 35680:
        return M;case 5124:case 35670:
        return E;case 35667:case 35671:
        return z;case 35668:case 35672:
        return A;case 35669:case 35673:
        return B;}
  }function O(a, b, c) {
    this.id = a, this.addr = c, this.setValue = C(b.type);
  }function P(a, b, c) {
    this.id = a, this.addr = c, this.size = b.size, this.setValue = N(b.type);
  }function Q(a) {
    this.id = a, m.call(this);
  }function R(a, b) {
    a.seq.push(b), a.map[b.id] = b;
  }function S(a, b, c) {
    var d = a.name,
        e = d.length;for (Gd.lastIndex = 0;;) {
      var f = Gd.exec(d),
          g = Gd.lastIndex,
          h = f[1],
          i = "]" === f[2],
          j = f[3];if (i && (h |= 0), void 0 === j || "[" === j && g + 2 === e) {
        R(c, void 0 === j ? new O(h, a, b) : new P(h, a, b));break;
      }var k = c.map,
          l = k[h];void 0 === l && (l = new Q(h), R(c, l)), c = l;
    }
  }function T(a, b, c) {
    m.call(this), this.renderer = c;for (var d = a.getProgramParameter(b, a.ACTIVE_UNIFORMS), e = 0; e < d; ++e) {
      var f = a.getActiveUniform(b, e),
          g = f.name;S(f, a.getUniformLocation(b, g), this);
    }
  }function U(a, b, c) {
    return void 0 === b && void 0 === c ? this.set(a) : this.setRGB(a, b, c);
  }function V(a, b) {
    this.min = void 0 !== a ? a : new c(1 / 0, 1 / 0), this.max = void 0 !== b ? b : new c(-1 / 0, -1 / 0);
  }function W(a, b, d, e, g) {
    function h() {
      var a = new Float32Array([-1, -1, 0, 0, 1, -1, 1, 0, 1, 1, 1, 1, -1, 1, 0, 1]),
          c = new Uint16Array([0, 1, 2, 0, 2, 3]);j = b.createBuffer(), k = b.createBuffer(), b.bindBuffer(b.ARRAY_BUFFER, j), b.bufferData(b.ARRAY_BUFFER, a, b.STATIC_DRAW), b.bindBuffer(b.ELEMENT_ARRAY_BUFFER, k), b.bufferData(b.ELEMENT_ARRAY_BUFFER, c, b.STATIC_DRAW), p = b.createTexture(), q = b.createTexture(), d.bindTexture(b.TEXTURE_2D, p), b.texImage2D(b.TEXTURE_2D, 0, b.RGB, 16, 16, 0, b.RGB, b.UNSIGNED_BYTE, null), b.texParameteri(b.TEXTURE_2D, b.TEXTURE_WRAP_S, b.CLAMP_TO_EDGE), b.texParameteri(b.TEXTURE_2D, b.TEXTURE_WRAP_T, b.CLAMP_TO_EDGE), b.texParameteri(b.TEXTURE_2D, b.TEXTURE_MAG_FILTER, b.NEAREST), b.texParameteri(b.TEXTURE_2D, b.TEXTURE_MIN_FILTER, b.NEAREST), d.bindTexture(b.TEXTURE_2D, q), b.texImage2D(b.TEXTURE_2D, 0, b.RGBA, 16, 16, 0, b.RGBA, b.UNSIGNED_BYTE, null), b.texParameteri(b.TEXTURE_2D, b.TEXTURE_WRAP_S, b.CLAMP_TO_EDGE), b.texParameteri(b.TEXTURE_2D, b.TEXTURE_WRAP_T, b.CLAMP_TO_EDGE), b.texParameteri(b.TEXTURE_2D, b.TEXTURE_MAG_FILTER, b.NEAREST), b.texParameteri(b.TEXTURE_2D, b.TEXTURE_MIN_FILTER, b.NEAREST), l = { vertexShader: ["uniform lowp int renderType;", "uniform vec3 screenPosition;", "uniform vec2 scale;", "uniform float rotation;", "uniform sampler2D occlusionMap;", "attribute vec2 position;", "attribute vec2 uv;", "varying vec2 vUV;", "varying float vVisibility;", "void main() {", "\tvUV = uv;", "\tvec2 pos = position;", "\tif ( renderType == 2 ) {", "\t\tvec4 visibility = texture2D( occlusionMap, vec2( 0.1, 0.1 ) );", "\t\tvisibility += texture2D( occlusionMap, vec2( 0.5, 0.1 ) );", "\t\tvisibility += texture2D( occlusionMap, vec2( 0.9, 0.1 ) );", "\t\tvisibility += texture2D( occlusionMap, vec2( 0.9, 0.5 ) );", "\t\tvisibility += texture2D( occlusionMap, vec2( 0.9, 0.9 ) );", "\t\tvisibility += texture2D( occlusionMap, vec2( 0.5, 0.9 ) );", "\t\tvisibility += texture2D( occlusionMap, vec2( 0.1, 0.9 ) );", "\t\tvisibility += texture2D( occlusionMap, vec2( 0.1, 0.5 ) );", "\t\tvisibility += texture2D( occlusionMap, vec2( 0.5, 0.5 ) );", "\t\tvVisibility =        visibility.r / 9.0;", "\t\tvVisibility *= 1.0 - visibility.g / 9.0;", "\t\tvVisibility *=       visibility.b / 9.0;", "\t\tvVisibility *= 1.0 - visibility.a / 9.0;", "\t\tpos.x = cos( rotation ) * position.x - sin( rotation ) * position.y;", "\t\tpos.y = sin( rotation ) * position.x + cos( rotation ) * position.y;", "\t}", "\tgl_Position = vec4( ( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );", "}"].join("\n"), fragmentShader: ["uniform lowp int renderType;", "uniform sampler2D map;", "uniform float opacity;", "uniform vec3 color;", "varying vec2 vUV;", "varying float vVisibility;", "void main() {", "\tif ( renderType == 0 ) {", "\t\tgl_FragColor = vec4( 1.0, 0.0, 1.0, 0.0 );", "\t} else if ( renderType == 1 ) {", "\t\tgl_FragColor = texture2D( map, vUV );", "\t} else {", "\t\tvec4 texture = texture2D( map, vUV );", "\t\ttexture.a *= opacity * vVisibility;", "\t\tgl_FragColor = texture;", "\t\tgl_FragColor.rgb *= color;", "\t}", "}"].join("\n") }, m = i(l), n = { vertex: b.getAttribLocation(m, "position"), uv: b.getAttribLocation(m, "uv") }, o = { renderType: b.getUniformLocation(m, "renderType"), map: b.getUniformLocation(m, "map"), occlusionMap: b.getUniformLocation(m, "occlusionMap"), opacity: b.getUniformLocation(m, "opacity"), color: b.getUniformLocation(m, "color"), scale: b.getUniformLocation(m, "scale"), rotation: b.getUniformLocation(m, "rotation"), screenPosition: b.getUniformLocation(m, "screenPosition") };
    }function i(a) {
      var c = b.createProgram(),
          d = b.createShader(b.FRAGMENT_SHADER),
          e = b.createShader(b.VERTEX_SHADER),
          f = "precision " + g.precision + " float;\n";return b.shaderSource(d, f + a.fragmentShader), b.shaderSource(e, f + a.vertexShader), b.compileShader(d), b.compileShader(e), b.attachShader(c, d), b.attachShader(c, e), b.linkProgram(c), c;
    }var j, k, l, m, n, o, p, q;this.render = function (a, g, i, l) {
      if (0 !== a.length) {
        var r = new f(),
            s = l.w / l.z,
            t = .5 * l.z,
            u = .5 * l.w,
            v = 16 / l.w,
            w = new c(v * s, v),
            x = new f(1, 1, 0),
            y = new c(1, 1),
            z = new V();z.min.set(l.x, l.y), z.max.set(l.x + (l.z - 16), l.y + (l.w - 16)), void 0 === m && h(), d.useProgram(m), d.initAttributes(), d.enableAttribute(n.vertex), d.enableAttribute(n.uv), d.disableUnusedAttributes(), b.uniform1i(o.occlusionMap, 0), b.uniform1i(o.map, 1), b.bindBuffer(b.ARRAY_BUFFER, j), b.vertexAttribPointer(n.vertex, 2, b.FLOAT, !1, 16, 0), b.vertexAttribPointer(n.uv, 2, b.FLOAT, !1, 16, 8), b.bindBuffer(b.ELEMENT_ARRAY_BUFFER, k), d.disable(b.CULL_FACE), d.buffers.depth.setMask(!1);for (var A = 0, B = a.length; A < B; A++) {
          v = 16 / l.w, w.set(v * s, v);var C = a[A];if (r.set(C.matrixWorld.elements[12], C.matrixWorld.elements[13], C.matrixWorld.elements[14]), r.applyMatrix4(i.matrixWorldInverse), r.applyMatrix4(i.projectionMatrix), x.copy(r), y.x = l.x + x.x * t + t - 8, y.y = l.y + x.y * u + u - 8, !0 === z.containsPoint(y)) {
            d.activeTexture(b.TEXTURE0), d.bindTexture(b.TEXTURE_2D, null), d.activeTexture(b.TEXTURE1), d.bindTexture(b.TEXTURE_2D, p), b.copyTexImage2D(b.TEXTURE_2D, 0, b.RGB, y.x, y.y, 16, 16, 0), b.uniform1i(o.renderType, 0), b.uniform2f(o.scale, w.x, w.y), b.uniform3f(o.screenPosition, x.x, x.y, x.z), d.disable(b.BLEND), d.enable(b.DEPTH_TEST), b.drawElements(b.TRIANGLES, 6, b.UNSIGNED_SHORT, 0), d.activeTexture(b.TEXTURE0), d.bindTexture(b.TEXTURE_2D, q), b.copyTexImage2D(b.TEXTURE_2D, 0, b.RGBA, y.x, y.y, 16, 16, 0), b.uniform1i(o.renderType, 1), d.disable(b.DEPTH_TEST), d.activeTexture(b.TEXTURE1), d.bindTexture(b.TEXTURE_2D, p), b.drawElements(b.TRIANGLES, 6, b.UNSIGNED_SHORT, 0), C.positionScreen.copy(x), C.customUpdateCallback ? C.customUpdateCallback(C) : C.updateLensFlares(), b.uniform1i(o.renderType, 2), d.enable(b.BLEND);for (var D = 0, E = C.lensFlares.length; D < E; D++) {
              var F = C.lensFlares[D];F.opacity > .001 && F.scale > .001 && (x.x = F.x, x.y = F.y, x.z = F.z, v = F.size * F.scale / l.w, w.x = v * s, w.y = v, b.uniform3f(o.screenPosition, x.x, x.y, x.z), b.uniform2f(o.scale, w.x, w.y), b.uniform1f(o.rotation, F.rotation), b.uniform1f(o.opacity, F.opacity), b.uniform3f(o.color, F.color.r, F.color.g, F.color.b), d.setBlending(F.blending, F.blendEquation, F.blendSrc, F.blendDst), e.setTexture2D(F.texture, 1), b.drawElements(b.TRIANGLES, 6, b.UNSIGNED_SHORT, 0));
            }
          }
        }d.enable(b.CULL_FACE), d.enable(b.DEPTH_TEST), d.buffers.depth.setMask(!0), d.reset();
      }
    };
  }function X(a, b, c, d, e, f, g, i, j) {
    h.call(this, a, b, c, d, e, f, g, i, j), this.needsUpdate = !0;
  }function Y(a, b, c, d, g) {
    function h() {
      var a = new Float32Array([-.5, -.5, 0, 0, .5, -.5, 1, 0, .5, .5, 1, 1, -.5, .5, 0, 1]),
          c = new Uint16Array([0, 1, 2, 0, 2, 3]);k = b.createBuffer(), l = b.createBuffer(), b.bindBuffer(b.ARRAY_BUFFER, k), b.bufferData(b.ARRAY_BUFFER, a, b.STATIC_DRAW), b.bindBuffer(b.ELEMENT_ARRAY_BUFFER, l), b.bufferData(b.ELEMENT_ARRAY_BUFFER, c, b.STATIC_DRAW), m = i(), n = { position: b.getAttribLocation(m, "position"), uv: b.getAttribLocation(m, "uv") }, o = { uvOffset: b.getUniformLocation(m, "uvOffset"), uvScale: b.getUniformLocation(m, "uvScale"), rotation: b.getUniformLocation(m, "rotation"), scale: b.getUniformLocation(m, "scale"), color: b.getUniformLocation(m, "color"), map: b.getUniformLocation(m, "map"), opacity: b.getUniformLocation(m, "opacity"), modelViewMatrix: b.getUniformLocation(m, "modelViewMatrix"), projectionMatrix: b.getUniformLocation(m, "projectionMatrix"), fogType: b.getUniformLocation(m, "fogType"), fogDensity: b.getUniformLocation(m, "fogDensity"), fogNear: b.getUniformLocation(m, "fogNear"), fogFar: b.getUniformLocation(m, "fogFar"), fogColor: b.getUniformLocation(m, "fogColor"), fogDepth: b.getUniformLocation(m, "fogDepth"), alphaTest: b.getUniformLocation(m, "alphaTest") };var d = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas");d.width = 8, d.height = 8;var e = d.getContext("2d");e.fillStyle = "white", e.fillRect(0, 0, 8, 8), p = new X(d);
    }function i() {
      var a = b.createProgram(),
          c = b.createShader(b.VERTEX_SHADER),
          d = b.createShader(b.FRAGMENT_SHADER);return b.shaderSource(c, ["precision " + g.precision + " float;", "#define SHADER_NAME SpriteMaterial", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform float rotation;", "uniform vec2 scale;", "uniform vec2 uvOffset;", "uniform vec2 uvScale;", "attribute vec2 position;", "attribute vec2 uv;", "varying vec2 vUV;", "varying float fogDepth;", "void main() {", "\tvUV = uvOffset + uv * uvScale;", "\tvec2 alignedPosition = position * scale;", "\tvec2 rotatedPosition;", "\trotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;", "\trotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;", "\tvec4 mvPosition;", "\tmvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );", "\tmvPosition.xy += rotatedPosition;", "\tgl_Position = projectionMatrix * mvPosition;", "\tfogDepth = - mvPosition.z;", "}"].join("\n")), b.shaderSource(d, ["precision " + g.precision + " float;", "#define SHADER_NAME SpriteMaterial", "uniform vec3 color;", "uniform sampler2D map;", "uniform float opacity;", "uniform int fogType;", "uniform vec3 fogColor;", "uniform float fogDensity;", "uniform float fogNear;", "uniform float fogFar;", "uniform float alphaTest;", "varying vec2 vUV;", "varying float fogDepth;", "void main() {", "\tvec4 texture = texture2D( map, vUV );", "\tgl_FragColor = vec4( color * texture.xyz, texture.a * opacity );", "\tif ( gl_FragColor.a < alphaTest ) discard;", "\tif ( fogType > 0 ) {", "\t\tfloat fogFactor = 0.0;", "\t\tif ( fogType == 1 ) {", "\t\t\tfogFactor = smoothstep( fogNear, fogFar, fogDepth );", "\t\t} else {", "\t\t\tconst float LOG2 = 1.442695;", "\t\t\tfogFactor = exp2( - fogDensity * fogDensity * fogDepth * fogDepth * LOG2 );", "\t\t\tfogFactor = 1.0 - clamp( fogFactor, 0.0, 1.0 );", "\t\t}", "\t\tgl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );", "\t}", "}"].join("\n")), b.compileShader(c), b.compileShader(d), b.attachShader(a, c), b.attachShader(a, d), b.linkProgram(a), a;
    }function j(a, b) {
      return a.renderOrder !== b.renderOrder ? a.renderOrder - b.renderOrder : a.z !== b.z ? b.z - a.z : b.id - a.id;
    }var k,
        l,
        m,
        n,
        o,
        p,
        q = new f(),
        r = new e(),
        s = new f();this.render = function (e, f, g) {
      if (0 !== e.length) {
        void 0 === m && h(), c.useProgram(m), c.initAttributes(), c.enableAttribute(n.position), c.enableAttribute(n.uv), c.disableUnusedAttributes(), c.disable(b.CULL_FACE), c.enable(b.BLEND), b.bindBuffer(b.ARRAY_BUFFER, k), b.vertexAttribPointer(n.position, 2, b.FLOAT, !1, 16, 0), b.vertexAttribPointer(n.uv, 2, b.FLOAT, !1, 16, 8), b.bindBuffer(b.ELEMENT_ARRAY_BUFFER, l), b.uniformMatrix4fv(o.projectionMatrix, !1, g.projectionMatrix.elements), c.activeTexture(b.TEXTURE0), b.uniform1i(o.map, 0);var i = 0,
            t = 0,
            u = f.fog;u ? (b.uniform3f(o.fogColor, u.color.r, u.color.g, u.color.b), u.isFog ? (b.uniform1f(o.fogNear, u.near), b.uniform1f(o.fogFar, u.far), b.uniform1i(o.fogType, 1), i = 1, t = 1) : u.isFogExp2 && (b.uniform1f(o.fogDensity, u.density), b.uniform1i(o.fogType, 2), i = 2, t = 2)) : (b.uniform1i(o.fogType, 0), i = 0, t = 0);for (var v = 0, w = e.length; v < w; v++) {
          var x = e[v];x.modelViewMatrix.multiplyMatrices(g.matrixWorldInverse, x.matrixWorld), x.z = -x.modelViewMatrix.elements[14];
        }e.sort(j);for (var y = [], v = 0, w = e.length; v < w; v++) {
          var x = e[v],
              z = x.material;if (!1 !== z.visible) {
            x.onBeforeRender(a, f, g, void 0, z, void 0), b.uniform1f(o.alphaTest, z.alphaTest), b.uniformMatrix4fv(o.modelViewMatrix, !1, x.modelViewMatrix.elements), x.matrixWorld.decompose(q, r, s), y[0] = s.x, y[1] = s.y;var A = 0;f.fog && z.fog && (A = t), i !== A && (b.uniform1i(o.fogType, A), i = A), null !== z.map ? (b.uniform2f(o.uvOffset, z.map.offset.x, z.map.offset.y), b.uniform2f(o.uvScale, z.map.repeat.x, z.map.repeat.y)) : (b.uniform2f(o.uvOffset, 0, 0), b.uniform2f(o.uvScale, 1, 1)), b.uniform1f(o.opacity, z.opacity), b.uniform3f(o.color, z.color.r, z.color.g, z.color.b), b.uniform1f(o.rotation, z.rotation), b.uniform2fv(o.scale, y), c.setBlending(z.blending, z.blendEquation, z.blendSrc, z.blendDst, z.blendEquationAlpha, z.blendSrcAlpha, z.blendDstAlpha, z.premultipliedAlpha), c.buffers.depth.setTest(z.depthTest), c.buffers.depth.setMask(z.depthWrite), c.buffers.color.setMask(z.colorWrite), d.setTexture2D(z.map || p, 0), b.drawElements(b.TRIANGLES, 6, b.UNSIGNED_SHORT, 0), x.onAfterRender(a, f, g, void 0, z, void 0);
          }
        }c.enable(b.CULL_FACE), c.reset();
      }
    };
  }function Z() {
    Object.defineProperty(this, "id", { value: Of++ }), this.uuid = yd.generateUUID(), this.name = "", this.type = "Material", this.fog = !0, this.lights = !0, this.blending = Mb, this.side = Gb, this.flatShading = !1, this.vertexColors = Kb, this.opacity = 1, this.transparent = !1, this.blendSrc = $b, this.blendDst = _b, this.blendEquation = Rb, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.depthFunc = ic, this.depthTest = !0, this.depthWrite = !0, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaTest = 0, this.premultipliedAlpha = !1, this.overdraw = 0, this.visible = !0, this.userData = {}, this.needsUpdate = !0;
  }function $(a) {
    Z.call(this), this.type = "MeshDepthMaterial", this.depthPacking = wd, this.skinning = !1, this.morphTargets = !1, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.setValues(a);
  }function _(a) {
    Z.call(this), this.type = "MeshDistanceMaterial", this.referencePosition = new f(), this.nearDistance = 1, this.farDistance = 1e3, this.skinning = !1, this.morphTargets = !1, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.fog = !1, this.lights = !1, this.setValues(a);
  }function aa(a, b) {
    this.min = void 0 !== a ? a : new f(1 / 0, 1 / 0, 1 / 0), this.max = void 0 !== b ? b : new f(-1 / 0, -1 / 0, -1 / 0);
  }function ba(a, b) {
    this.center = void 0 !== a ? a : new f(), this.radius = void 0 !== b ? b : 0;
  }function ca(a, b) {
    this.normal = void 0 !== a ? a : new f(1, 0, 0), this.constant = void 0 !== b ? b : 0;
  }function da(a, b, c, d, e, f) {
    this.planes = [void 0 !== a ? a : new ca(), void 0 !== b ? b : new ca(), void 0 !== c ? c : new ca(), void 0 !== d ? d : new ca(), void 0 !== e ? e : new ca(), void 0 !== f ? f : new ca()];
  }function ea(a, b, e) {
    function g(b, c, d, e, f, g) {
      var h = b.geometry,
          i = null,
          j = t,
          k = b.customDepthMaterial;if (d && (j = u, k = b.customDistanceMaterial), k) i = k;else {
        var l = !1;c.morphTargets && (h && h.isBufferGeometry ? l = h.morphAttributes && h.morphAttributes.position && h.morphAttributes.position.length > 0 : h && h.isGeometry && (l = h.morphTargets && h.morphTargets.length > 0)), b.isSkinnedMesh && !1 === c.skinning && console.warn("THREE.WebGLShadowMap: THREE.SkinnedMesh with material.skinning set to false:", b);var m = b.isSkinnedMesh && c.skinning,
            n = 0;l && (n |= q), m && (n |= r), i = j[n];
      }if (a.localClippingEnabled && !0 === c.clipShadows && 0 !== c.clippingPlanes.length) {
        var o = i.uuid,
            p = c.uuid,
            s = v[o];void 0 === s && (s = {}, v[o] = s);var w = s[p];void 0 === w && (w = i.clone(), s[p] = w), i = w;
      }i.visible = c.visible, i.wireframe = c.wireframe;var x = c.side;return E.renderSingleSided && x == Ib && (x = Gb), E.renderReverseSided && (x === Gb ? x = Hb : x === Hb && (x = Gb)), i.side = x, i.clipShadows = c.clipShadows, i.clippingPlanes = c.clippingPlanes, i.clipIntersection = c.clipIntersection, i.wireframeLinewidth = c.wireframeLinewidth, i.linewidth = c.linewidth, d && i.isMeshDistanceMaterial && (i.referencePosition.copy(e), i.nearDistance = f, i.farDistance = g), i;
    }function h(c, d, e, f) {
      if (!1 !== c.visible) {
        if (c.layers.test(d.layers) && (c.isMesh || c.isLine || c.isPoints) && c.castShadow && (!c.frustumCulled || k.intersectsObject(c))) {
          c.modelViewMatrix.multiplyMatrices(e.matrixWorldInverse, c.matrixWorld);var i = b.update(c),
              j = c.material;if (Array.isArray(j)) for (var l = i.groups, m = 0, n = l.length; m < n; m++) {
            var o = l[m],
                q = j[o.materialIndex];if (q && q.visible) {
              var r = g(c, q, f, p, e.near, e.far);a.renderBufferDirect(e, null, i, r, c, o);
            }
          } else if (j.visible) {
            var r = g(c, j, f, p, e.near, e.far);a.renderBufferDirect(e, null, i, r, c, null);
          }
        }for (var s = c.children, t = 0, u = s.length; t < u; t++) {
          h(s[t], d, e, f);
        }
      }
    }for (var k = new da(), l = new d(), m = new c(), n = new c(e, e), o = new f(), p = new f(), q = 1, r = 2, s = 1 + (q | r), t = new Array(s), u = new Array(s), v = {}, w = [new f(1, 0, 0), new f(-1, 0, 0), new f(0, 0, 1), new f(0, 0, -1), new f(0, 1, 0), new f(0, -1, 0)], x = [new f(0, 1, 0), new f(0, 1, 0), new f(0, 1, 0), new f(0, 1, 0), new f(0, 0, 1), new f(0, 0, -1)], y = [new i(), new i(), new i(), new i(), new i(), new i()], z = 0; z !== s; ++z) {
      var A = 0 != (z & q),
          B = 0 != (z & r),
          C = new $({ depthPacking: xd, morphTargets: A, skinning: B });t[z] = C;var D = new _({ morphTargets: A, skinning: B });u[z] = D;
    }var E = this;this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = Eb, this.renderReverseSided = !0, this.renderSingleSided = !0, this.render = function (b, c, d) {
      if (!1 !== E.enabled && (!1 !== E.autoUpdate || !1 !== E.needsUpdate) && 0 !== b.length) {
        var e = a.context,
            f = a.state;f.disable(e.BLEND), f.buffers.color.setClear(1, 1, 1, 1), f.buffers.depth.setTest(!0), f.setScissorTest(!1);for (var g, i = 0, q = b.length; i < q; i++) {
          var r = b[i],
              s = r.shadow,
              t = r && r.isPointLight;if (void 0 !== s) {
            var u = s.camera;if (m.copy(s.mapSize), m.min(n), t) {
              var v = m.x,
                  z = m.y;y[0].set(2 * v, z, v, z), y[1].set(0, z, v, z), y[2].set(3 * v, z, v, z), y[3].set(v, z, v, z), y[4].set(3 * v, 0, v, z), y[5].set(v, 0, v, z), m.x *= 4, m.y *= 2;
            }if (null === s.map) {
              var A = { minFilter: Gc, magFilter: Gc, format: $c };s.map = new j(m.x, m.y, A), s.map.texture.name = r.name + ".shadowMap", u.updateProjectionMatrix();
            }s.isSpotLightShadow && s.update(r);var B = s.map,
                C = s.matrix;p.setFromMatrixPosition(r.matrixWorld), u.position.copy(p), t ? (g = 6, C.makeTranslation(-p.x, -p.y, -p.z)) : (g = 1, o.setFromMatrixPosition(r.target.matrixWorld), u.lookAt(o), u.updateMatrixWorld(), C.set(.5, 0, 0, .5, 0, .5, 0, .5, 0, 0, .5, .5, 0, 0, 0, 1), C.multiply(u.projectionMatrix), C.multiply(u.matrixWorldInverse)), a.setRenderTarget(B), a.clear();for (var D = 0; D < g; D++) {
              if (t) {
                o.copy(u.position), o.add(w[D]), u.up.copy(x[D]), u.lookAt(o), u.updateMatrixWorld();var F = y[D];f.viewport(F);
              }l.multiplyMatrices(u.projectionMatrix, u.matrixWorldInverse), k.setFromMatrix(l), h(c, d, u, t);
            }
          } else console.warn("THREE.WebGLShadowMap:", r, "has no shadow.");
        }E.needsUpdate = !1;
      }
    };
  }function fa(a) {
    function b(b, c) {
      var d = b.array,
          e = b.dynamic ? a.DYNAMIC_DRAW : a.STATIC_DRAW,
          f = a.createBuffer();a.bindBuffer(c, f), a.bufferData(c, d, e), b.onUploadCallback();var g = a.FLOAT;return d instanceof Float32Array ? g = a.FLOAT : d instanceof Float64Array ? console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array.") : d instanceof Uint16Array ? g = a.UNSIGNED_SHORT : d instanceof Int16Array ? g = a.SHORT : d instanceof Uint32Array ? g = a.UNSIGNED_INT : d instanceof Int32Array ? g = a.INT : d instanceof Int8Array ? g = a.BYTE : d instanceof Uint8Array && (g = a.UNSIGNED_BYTE), { buffer: f, type: g, bytesPerElement: d.BYTES_PER_ELEMENT, version: b.version };
    }function c(b, c, d) {
      var e = c.array,
          f = c.updateRange;a.bindBuffer(d, b), !1 === c.dynamic ? a.bufferData(d, e, a.STATIC_DRAW) : -1 === f.count ? a.bufferSubData(d, 0, e) : 0 === f.count ? console.error("THREE.WebGLObjects.updateBuffer: dynamic THREE.BufferAttribute marked as needsUpdate but updateRange.count is 0, ensure you are using set methods or updating manually.") : (a.bufferSubData(d, f.offset * e.BYTES_PER_ELEMENT, e.subarray(f.offset, f.offset + f.count)), f.count = -1);
    }function d(a) {
      return a.isInterleavedBufferAttribute && (a = a.data), g[a.uuid];
    }function e(b) {
      b.isInterleavedBufferAttribute && (b = b.data);var c = g[b.uuid];c && (a.deleteBuffer(c.buffer), delete g[b.uuid]);
    }function f(a, d) {
      a.isInterleavedBufferAttribute && (a = a.data);var e = g[a.uuid];void 0 === e ? g[a.uuid] = b(a, d) : e.version < a.version && (c(e.buffer, a, d), e.version = a.version);
    }var g = {};return { get: d, remove: e, update: f };
  }function ga(a, b, c, d) {
    this._x = a || 0, this._y = b || 0, this._z = c || 0, this._order = d || ga.DefaultOrder;
  }function ha() {
    this.mask = 1;
  }function ia() {
    function a() {
      i.setFromEuler(h, !1);
    }function b() {
      h.setFromQuaternion(i, void 0, !1);
    }Object.defineProperty(this, "id", { value: Pf++ }), this.uuid = yd.generateUUID(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = ia.DefaultUp.clone();var c = new f(),
        h = new ga(),
        i = new e(),
        j = new f(1, 1, 1);h.onChange(a), i.onChange(b), Object.defineProperties(this, { position: { enumerable: !0, value: c }, rotation: { enumerable: !0, value: h }, quaternion: { enumerable: !0, value: i }, scale: { enumerable: !0, value: j }, modelViewMatrix: { value: new d() }, normalMatrix: { value: new g() } }), this.matrix = new d(), this.matrixWorld = new d(), this.matrixAutoUpdate = ia.DefaultMatrixAutoUpdate, this.matrixWorldNeedsUpdate = !1, this.layers = new ha(), this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.userData = {};
  }function ja() {
    ia.call(this), this.type = "Camera", this.matrixWorldInverse = new d(), this.projectionMatrix = new d();
  }function ka(a, b, c, d, e, f) {
    ja.call(this), this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = a, this.right = b, this.top = c, this.bottom = d, this.near = void 0 !== e ? e : .1, this.far = void 0 !== f ? f : 2e3, this.updateProjectionMatrix();
  }function la(a, b, c, d, e, g) {
    this.a = a, this.b = b, this.c = c, this.normal = d && d.isVector3 ? d : new f(), this.vertexNormals = Array.isArray(d) ? d : [], this.color = e && e.isColor ? e : new U(), this.vertexColors = Array.isArray(e) ? e : [], this.materialIndex = void 0 !== g ? g : 0;
  }function ma() {
    Object.defineProperty(this, "id", { value: Qf += 2 }), this.uuid = yd.generateUUID(), this.name = "", this.type = "Geometry", this.vertices = [], this.colors = [], this.faces = [], this.faceVertexUvs = [[]], this.morphTargets = [], this.morphNormals = [], this.skinWeights = [], this.skinIndices = [], this.lineDistances = [], this.boundingBox = null, this.boundingSphere = null, this.elementsNeedUpdate = !1, this.verticesNeedUpdate = !1, this.uvsNeedUpdate = !1, this.normalsNeedUpdate = !1, this.colorsNeedUpdate = !1, this.lineDistancesNeedUpdate = !1, this.groupsNeedUpdate = !1;
  }function na(a, b, c) {
    if (Array.isArray(a)) throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.uuid = yd.generateUUID(), this.name = "", this.array = a, this.itemSize = b, this.count = void 0 !== a ? a.length / b : 0, this.normalized = !0 === c, this.dynamic = !1, this.updateRange = { offset: 0, count: -1 }, this.onUploadCallback = function () {}, this.version = 0;
  }function oa(a, b, c) {
    na.call(this, new Int8Array(a), b, c);
  }function pa(a, b, c) {
    na.call(this, new Uint8Array(a), b, c);
  }function qa(a, b, c) {
    na.call(this, new Uint8ClampedArray(a), b, c);
  }function ra(a, b, c) {
    na.call(this, new Int16Array(a), b, c);
  }function sa(a, b, c) {
    na.call(this, new Uint16Array(a), b, c);
  }function ta(a, b, c) {
    na.call(this, new Int32Array(a), b, c);
  }function ua(a, b, c) {
    na.call(this, new Uint32Array(a), b, c);
  }function va(a, b, c) {
    na.call(this, new Float32Array(a), b, c);
  }function wa(a, b, c) {
    na.call(this, new Float64Array(a), b, c);
  }function xa() {
    this.indices = [], this.vertices = [], this.normals = [], this.colors = [], this.uvs = [], this.uvs2 = [], this.groups = [], this.morphTargets = {}, this.skinWeights = [], this.skinIndices = [], this.boundingBox = null, this.boundingSphere = null, this.verticesNeedUpdate = !1, this.normalsNeedUpdate = !1, this.colorsNeedUpdate = !1, this.uvsNeedUpdate = !1, this.groupsNeedUpdate = !1;
  }function ya(a) {
    if (0 === a.length) return -1 / 0;for (var b = a[0], c = 1, d = a.length; c < d; ++c) {
      a[c] > b && (b = a[c]);
    }return b;
  }function za() {
    Object.defineProperty(this, "id", { value: Rf += 2 }), this.uuid = yd.generateUUID(), this.name = "", this.type = "BufferGeometry", this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = { start: 0, count: 1 / 0 };
  }function Aa(a, b, c, d, e, f) {
    ma.call(this), this.type = "BoxGeometry", this.parameters = { width: a, height: b, depth: c, widthSegments: d, heightSegments: e, depthSegments: f }, this.fromBufferGeometry(new Ba(a, b, c, d, e, f)), this.mergeVertices();
  }function Ba(a, b, c, d, e, g) {
    function h(a, b, c, d, e, g, h, p, q, r, s) {
      var t,
          u,
          v = g / q,
          w = h / r,
          x = g / 2,
          y = h / 2,
          z = p / 2,
          A = q + 1,
          B = r + 1,
          C = 0,
          D = 0,
          E = new f();for (u = 0; u < B; u++) {
        var F = u * w - y;for (t = 0; t < A; t++) {
          var G = t * v - x;E[a] = G * d, E[b] = F * e, E[c] = z, k.push(E.x, E.y, E.z), E[a] = 0, E[b] = 0, E[c] = p > 0 ? 1 : -1, l.push(E.x, E.y, E.z), m.push(t / q), m.push(1 - u / r), C += 1;
        }
      }for (u = 0; u < r; u++) {
        for (t = 0; t < q; t++) {
          var H = n + t + A * u,
              I = n + t + A * (u + 1),
              J = n + (t + 1) + A * (u + 1),
              K = n + (t + 1) + A * u;j.push(H, I, K), j.push(I, J, K), D += 6;
        }
      }i.addGroup(o, D, s), o += D, n += C;
    }za.call(this), this.type = "BoxBufferGeometry", this.parameters = { width: a, height: b, depth: c, widthSegments: d, heightSegments: e, depthSegments: g };var i = this;a = a || 1, b = b || 1, c = c || 1, d = Math.floor(d) || 1, e = Math.floor(e) || 1, g = Math.floor(g) || 1;var j = [],
        k = [],
        l = [],
        m = [],
        n = 0,
        o = 0;h("z", "y", "x", -1, -1, c, b, a, g, e, 0), h("z", "y", "x", 1, -1, c, b, -a, g, e, 1), h("x", "z", "y", 1, 1, a, c, b, d, g, 2), h("x", "z", "y", 1, -1, a, c, -b, d, g, 3), h("x", "y", "z", 1, -1, a, b, c, d, e, 4), h("x", "y", "z", -1, -1, a, b, -c, d, e, 5), this.setIndex(j), this.addAttribute("position", new va(k, 3)), this.addAttribute("normal", new va(l, 3)), this.addAttribute("uv", new va(m, 2));
  }function Ca(a, b, c, d) {
    ma.call(this), this.type = "PlaneGeometry", this.parameters = { width: a, height: b, widthSegments: c, heightSegments: d }, this.fromBufferGeometry(new Da(a, b, c, d)), this.mergeVertices();
  }function Da(a, b, c, d) {
    za.call(this), this.type = "PlaneBufferGeometry", this.parameters = { width: a, height: b, widthSegments: c, heightSegments: d }, a = a || 1, b = b || 1;var e,
        f,
        g = a / 2,
        h = b / 2,
        i = Math.floor(c) || 1,
        j = Math.floor(d) || 1,
        k = i + 1,
        l = j + 1,
        m = a / i,
        n = b / j,
        o = [],
        p = [],
        q = [],
        r = [];for (f = 0; f < l; f++) {
      var s = f * n - h;for (e = 0; e < k; e++) {
        var t = e * m - g;p.push(t, -s, 0), q.push(0, 0, 1), r.push(e / i), r.push(1 - f / j);
      }
    }for (f = 0; f < j; f++) {
      for (e = 0; e < i; e++) {
        var u = e + k * f,
            v = e + k * (f + 1),
            w = e + 1 + k * (f + 1),
            x = e + 1 + k * f;o.push(u, v, x), o.push(v, w, x);
      }
    }this.setIndex(o), this.addAttribute("position", new va(p, 3)), this.addAttribute("normal", new va(q, 3)), this.addAttribute("uv", new va(r, 2));
  }function Ea(a) {
    Z.call(this), this.type = "MeshBasicMaterial", this.color = new U(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = nc, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.skinning = !1, this.morphTargets = !1, this.lights = !1, this.setValues(a);
  }function Fa(a) {
    Z.call(this), this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.vertexShader = "void main() {\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}", this.fragmentShader = "void main() {\n\tgl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}", this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.extensions = { derivatives: !1, fragDepth: !1, drawBuffers: !1, shaderTextureLOD: !1 }, this.defaultAttributeValues = { color: [1, 1, 1], uv: [0, 0], uv2: [0, 0] }, this.index0AttributeName = void 0, void 0 !== a && (void 0 !== a.attributes && console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."), this.setValues(a));
  }function Ga(a, b) {
    this.origin = void 0 !== a ? a : new f(), this.direction = void 0 !== b ? b : new f();
  }function Ha(a, b) {
    this.start = void 0 !== a ? a : new f(), this.end = void 0 !== b ? b : new f();
  }function Ia(a, b, c) {
    this.a = void 0 !== a ? a : new f(), this.b = void 0 !== b ? b : new f(), this.c = void 0 !== c ? c : new f();
  }function Ja(a, b) {
    ia.call(this), this.type = "Mesh", this.geometry = void 0 !== a ? a : new za(), this.material = void 0 !== b ? b : new Ea({ color: 16777215 * Math.random() }), this.drawMode = md, this.updateMorphTargets();
  }function Ka(a, b, c, d) {
    function e(b, d, e, l) {
      var m = d.background;null === m ? f(j, k) : m && m.isColor && (f(m, 1), l = !0), (a.autoClear || l) && a.clear(a.autoClearColor, a.autoClearDepth, a.autoClearStencil), m && m.isCubeTexture ? (void 0 === i && (i = new Ja(new Ba(1, 1, 1), new Fa({ uniforms: Nf.cube.uniforms, vertexShader: Nf.cube.vertexShader, fragmentShader: Nf.cube.fragmentShader, side: Hb, depthTest: !0, depthWrite: !1, fog: !1 })), i.geometry.removeAttribute("normal"), i.geometry.removeAttribute("uv"), i.onBeforeRender = function (a, b, c) {
        this.matrixWorld.copyPosition(c.matrixWorld);
      }, c.update(i.geometry)), i.material.uniforms.tCube.value = m, b.push(i, i.geometry, i.material, 0, null)) : m && m.isTexture && (void 0 === g && (g = new ka(-1, 1, 1, -1, 0, 1), h = new Ja(new Da(2, 2), new Ea({ depthTest: !1, depthWrite: !1, fog: !1 })), c.update(h.geometry)), h.material.map = m, a.renderBufferDirect(g, null, h.geometry, h.material, h, null));
    }function f(a, c) {
      b.buffers.color.setClear(a.r, a.g, a.b, c, d);
    }var g,
        h,
        i,
        j = new U(0),
        k = 0;return { getClearColor: function getClearColor() {
        return j;
      }, setClearColor: function setClearColor(a, b) {
        j.set(a), k = void 0 !== b ? b : 1, f(j, k);
      }, getClearAlpha: function getClearAlpha() {
        return k;
      }, setClearAlpha: function setClearAlpha(a) {
        k = a, f(j, k);
      }, render: e };
  }function La(a, b) {
    return a.renderOrder !== b.renderOrder ? a.renderOrder - b.renderOrder : a.program && b.program && a.program !== b.program ? a.program.id - b.program.id : a.material.id !== b.material.id ? a.material.id - b.material.id : a.z !== b.z ? a.z - b.z : a.id - b.id;
  }function Ma(a, b) {
    return a.renderOrder !== b.renderOrder ? a.renderOrder - b.renderOrder : a.z !== b.z ? b.z - a.z : a.id - b.id;
  }function Na() {
    function a() {
      e = 0, f.length = 0, g.length = 0;
    }function b(a, b, c, h, i) {
      var j = d[e];void 0 === j ? (j = { id: a.id, object: a, geometry: b, material: c, program: c.program, renderOrder: a.renderOrder, z: h, group: i }, d[e] = j) : (j.id = a.id, j.object = a, j.geometry = b, j.material = c, j.program = c.program, j.renderOrder = a.renderOrder, j.z = h, j.group = i), (!0 === c.transparent ? g : f).push(j), e++;
    }function c() {
      f.length > 1 && f.sort(La), g.length > 1 && g.sort(Ma);
    }var d = [],
        e = 0,
        f = [],
        g = [];return { opaque: f, transparent: g, init: a, push: b, sort: c };
  }function Oa() {
    function a(a, b) {
      var d = a.id + "," + b.id,
          e = c[d];return void 0 === e && (e = new Na(), c[d] = e), e;
    }function b() {
      c = {};
    }var c = {};return { get: a, dispose: b };
  }function Pa(a, b) {
    return Math.abs(b[1]) - Math.abs(a[1]);
  }function Qa(a) {
    function b(b, e, f, g) {
      var h = b.morphTargetInfluences,
          i = h.length,
          j = c[e.id];if (void 0 === j) {
        j = [];for (var k = 0; k < i; k++) {
          j[k] = [k, 0];
        }c[e.id] = j;
      }for (var l = f.morphTargets && e.morphAttributes.position, m = f.morphNormals && e.morphAttributes.normal, k = 0; k < i; k++) {
        var n = j[k];0 !== n[1] && (l && e.removeAttribute("morphTarget" + k), m && e.removeAttribute("morphNormal" + k));
      }for (var k = 0; k < i; k++) {
        var n = j[k];n[0] = k, n[1] = h[k];
      }j.sort(Pa);for (var k = 0; k < 8; k++) {
        var n = j[k];if (n) {
          var o = n[0],
              p = n[1];if (p) {
            l && e.addAttribute("morphTarget" + k, l[o]), m && e.addAttribute("morphNormal" + k, m[o]), d[k] = p;continue;
          }
        }d[k] = 0;
      }g.getUniforms().setValue(a, "morphTargetInfluences", d);
    }var c = {},
        d = new Float32Array(8);return { update: b };
  }function Ra(a, b, c) {
    function d(a) {
      h = a;
    }function e(a) {
      i = a.type, j = a.bytesPerElement;
    }function f(b, d) {
      a.drawElements(h, d, i, b * j), c.calls++, c.vertices += d, h === a.TRIANGLES ? c.faces += d / 3 : h === a.POINTS && (c.points += d);
    }function g(d, e, f) {
      var g = b.get("ANGLE_instanced_arrays");if (null === g) return void console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");g.drawElementsInstancedANGLE(h, f, i, e * j, d.maxInstancedCount), c.calls++, c.vertices += f * d.maxInstancedCount, h === a.TRIANGLES ? c.faces += d.maxInstancedCount * f / 3 : h === a.POINTS && (c.points += d.maxInstancedCount * f);
    }var h, i, j;this.setMode = d, this.setIndex = e, this.render = f, this.renderInstances = g;
  }function Sa(a, b, c) {
    function d(a) {
      g = a;
    }function e(b, d) {
      a.drawArrays(g, b, d), c.calls++, c.vertices += d, g === a.TRIANGLES ? c.faces += d / 3 : g === a.POINTS && (c.points += d);
    }function f(d, e, f) {
      var h = b.get("ANGLE_instanced_arrays");if (null === h) return void console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");var i = d.attributes.position;i.isInterleavedBufferAttribute ? (f = i.data.count, h.drawArraysInstancedANGLE(g, 0, f, d.maxInstancedCount)) : h.drawArraysInstancedANGLE(g, e, f, d.maxInstancedCount), c.calls++, c.vertices += f * d.maxInstancedCount, g === a.TRIANGLES ? c.faces += d.maxInstancedCount * f / 3 : g === a.POINTS && (c.points += d.maxInstancedCount * f);
    }var g;this.setMode = d, this.render = e, this.renderInstances = f;
  }function Ta(a, b, c) {
    function d(a) {
      var e = a.target,
          f = h[e.id];null !== f.index && b.remove(f.index);for (var g in f.attributes) {
        b.remove(f.attributes[g]);
      }e.removeEventListener("dispose", d), delete h[e.id];var j = i[e.id];j && (b.remove(j), delete i[e.id]), j = i[f.id], j && (b.remove(j), delete i[f.id]), c.geometries--;
    }function e(a, b) {
      var e = h[b.id];return e || (b.addEventListener("dispose", d), b.isBufferGeometry ? e = b : b.isGeometry && (void 0 === b._bufferGeometry && (b._bufferGeometry = new za().setFromObject(a)), e = b._bufferGeometry), h[b.id] = e, c.geometries++, e);
    }function f(c) {
      var d = c.index,
          e = c.attributes;null !== d && b.update(d, a.ELEMENT_ARRAY_BUFFER);for (var f in e) {
        b.update(e[f], a.ARRAY_BUFFER);
      }var g = c.morphAttributes;for (var f in g) {
        for (var h = g[f], i = 0, j = h.length; i < j; i++) {
          b.update(h[i], a.ARRAY_BUFFER);
        }
      }
    }function g(c) {
      var d = i[c.id];if (d) return d;var e = [],
          f = c.index,
          g = c.attributes;if (null !== f) for (var h = f.array, j = 0, k = h.length; j < k; j += 3) {
        var l = h[j + 0],
            m = h[j + 1],
            n = h[j + 2];e.push(l, m, m, n, n, l);
      } else for (var h = g.position.array, j = 0, k = h.length / 3 - 1; j < k; j += 3) {
        var l = j + 0,
            m = j + 1,
            n = j + 2;e.push(l, m, m, n, n, l);
      }return d = new (ya(e) > 65535 ? ua : sa)(e, 1), b.update(d, a.ELEMENT_ARRAY_BUFFER), i[c.id] = d, d;
    }var h = {},
        i = {};return { get: e, update: f, getWireframeAttribute: g };
  }function Ua() {
    var a = {};return { get: function get(b) {
        if (void 0 !== a[b.id]) return a[b.id];var d;switch (b.type) {case "DirectionalLight":
            d = { direction: new f(), color: new U(), shadow: !1, shadowBias: 0, shadowRadius: 1, shadowMapSize: new c() };break;case "SpotLight":
            d = { position: new f(), direction: new f(), color: new U(), distance: 0, coneCos: 0, penumbraCos: 0, decay: 0, shadow: !1, shadowBias: 0, shadowRadius: 1, shadowMapSize: new c() };break;case "PointLight":
            d = { position: new f(), color: new U(), distance: 0, decay: 0, shadow: !1, shadowBias: 0, shadowRadius: 1, shadowMapSize: new c(), shadowCameraNear: 1, shadowCameraFar: 1e3 };break;case "HemisphereLight":
            d = { direction: new f(), skyColor: new U(), groundColor: new U() };break;case "RectAreaLight":
            d = { color: new U(), position: new f(), halfWidth: new f(), halfHeight: new f() };}return a[b.id] = d, d;
      } };
  }function Va() {
    function a(a, d, f) {
      for (var i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = f.matrixWorldInverse, r = 0, s = a.length; r < s; r++) {
        var t = a[r],
            u = t.color,
            v = t.intensity,
            w = t.distance,
            x = t.shadow && t.shadow.map ? t.shadow.map.texture : null;if (t.isAmbientLight) i += u.r * v, j += u.g * v, k += u.b * v;else if (t.isDirectionalLight) {
          var y = b.get(t);if (y.color.copy(t.color).multiplyScalar(t.intensity), y.direction.setFromMatrixPosition(t.matrixWorld), e.setFromMatrixPosition(t.target.matrixWorld), y.direction.sub(e), y.direction.transformDirection(q), y.shadow = t.castShadow, t.castShadow) {
            var z = t.shadow;y.shadowBias = z.bias, y.shadowRadius = z.radius, y.shadowMapSize = z.mapSize;
          }c.directionalShadowMap[l] = x, c.directionalShadowMatrix[l] = t.shadow.matrix, c.directional[l] = y, l++;
        } else if (t.isSpotLight) {
          var y = b.get(t);if (y.position.setFromMatrixPosition(t.matrixWorld), y.position.applyMatrix4(q), y.color.copy(u).multiplyScalar(v), y.distance = w, y.direction.setFromMatrixPosition(t.matrixWorld), e.setFromMatrixPosition(t.target.matrixWorld), y.direction.sub(e), y.direction.transformDirection(q), y.coneCos = Math.cos(t.angle), y.penumbraCos = Math.cos(t.angle * (1 - t.penumbra)), y.decay = 0 === t.distance ? 0 : t.decay, y.shadow = t.castShadow, t.castShadow) {
            var z = t.shadow;y.shadowBias = z.bias, y.shadowRadius = z.radius, y.shadowMapSize = z.mapSize;
          }c.spotShadowMap[n] = x, c.spotShadowMatrix[n] = t.shadow.matrix, c.spot[n] = y, n++;
        } else if (t.isRectAreaLight) {
          var y = b.get(t);y.color.copy(u).multiplyScalar(v / (t.width * t.height)), y.position.setFromMatrixPosition(t.matrixWorld), y.position.applyMatrix4(q), h.identity(), g.copy(t.matrixWorld), g.premultiply(q), h.extractRotation(g), y.halfWidth.set(.5 * t.width, 0, 0), y.halfHeight.set(0, .5 * t.height, 0), y.halfWidth.applyMatrix4(h), y.halfHeight.applyMatrix4(h), c.rectArea[o] = y, o++;
        } else if (t.isPointLight) {
          var y = b.get(t);if (y.position.setFromMatrixPosition(t.matrixWorld), y.position.applyMatrix4(q), y.color.copy(t.color).multiplyScalar(t.intensity), y.distance = t.distance, y.decay = 0 === t.distance ? 0 : t.decay, y.shadow = t.castShadow, t.castShadow) {
            var z = t.shadow;y.shadowBias = z.bias, y.shadowRadius = z.radius, y.shadowMapSize = z.mapSize, y.shadowCameraNear = z.camera.near, y.shadowCameraFar = z.camera.far;
          }c.pointShadowMap[m] = x, c.pointShadowMatrix[m] = t.shadow.matrix, c.point[m] = y, m++;
        } else if (t.isHemisphereLight) {
          var y = b.get(t);y.direction.setFromMatrixPosition(t.matrixWorld), y.direction.transformDirection(q), y.direction.normalize(), y.skyColor.copy(t.color).multiplyScalar(v), y.groundColor.copy(t.groundColor).multiplyScalar(v), c.hemi[p] = y, p++;
        }
      }c.ambient[0] = i, c.ambient[1] = j, c.ambient[2] = k, c.directional.length = l, c.spot.length = n, c.rectArea.length = o, c.point.length = m, c.hemi.length = p, c.hash = l + "," + m + "," + n + "," + o + "," + p + "," + d.length;
    }var b = new Ua(),
        c = { hash: "", ambient: [0, 0, 0], directional: [], directionalShadowMap: [], directionalShadowMatrix: [], spot: [], spotShadowMap: [], spotShadowMatrix: [], rectArea: [], point: [], pointShadowMap: [], pointShadowMatrix: [], hemi: [] },
        e = new f(),
        g = new d(),
        h = new d();return { setup: a, state: c };
  }function Wa(a, b) {
    function c(c) {
      var d = b.frame,
          f = c.geometry,
          g = a.get(c, f);return e[g.id] !== d && (f.isGeometry && g.updateFromObject(c), a.update(g), e[g.id] = d), g;
    }function d() {
      e = {};
    }var e = {};return { update: c, clear: d };
  }function Xa(a) {
    for (var b = a.split("\n"), c = 0; c < b.length; c++) {
      b[c] = c + 1 + ": " + b[c];
    }return b.join("\n");
  }function Ya(a, b, c) {
    var d = a.createShader(b);return a.shaderSource(d, c), a.compileShader(d), !1 === a.getShaderParameter(d, a.COMPILE_STATUS) && console.error("THREE.WebGLShader: Shader couldn't compile."), "" !== a.getShaderInfoLog(d) && console.warn("THREE.WebGLShader: gl.getShaderInfoLog()", b === a.VERTEX_SHADER ? "vertex" : "fragment", a.getShaderInfoLog(d), Xa(c)), d;
  }function Za(a) {
    switch (a) {case pd:
        return ["Linear", "( value )"];case qd:
        return ["sRGB", "( value )"];case sd:
        return ["RGBE", "( value )"];case td:
        return ["RGBM", "( value, 7.0 )"];case ud:
        return ["RGBM", "( value, 16.0 )"];case vd:
        return ["RGBD", "( value, 256.0 )"];case rd:
        return ["Gamma", "( value, float( GAMMA_FACTOR ) )"];default:
        throw new Error("unsupported encoding: " + a);}
  }function $a(a, b) {
    var c = Za(b);return "vec4 " + a + "( vec4 value ) { return " + c[0] + "ToLinear" + c[1] + "; }";
  }function _a(a, b) {
    var c = Za(b);return "vec4 " + a + "( vec4 value ) { return LinearTo" + c[0] + c[1] + "; }";
  }function ab(a, b) {
    var c;switch (b) {case rc:
        c = "Linear";break;case sc:
        c = "Reinhard";break;case tc:
        c = "Uncharted2";break;case uc:
        c = "OptimizedCineon";break;default:
        throw new Error("unsupported toneMapping: " + b);}return "vec3 " + a + "( vec3 color ) { return " + c + "ToneMapping( color ); }";
  }function bb(a, b, c) {
    return a = a || {}, [a.derivatives || b.envMapCubeUV || b.bumpMap || b.normalMap || b.flatShading ? "#extension GL_OES_standard_derivatives : enable" : "", (a.fragDepth || b.logarithmicDepthBuffer) && c.get("EXT_frag_depth") ? "#extension GL_EXT_frag_depth : enable" : "", a.drawBuffers && c.get("WEBGL_draw_buffers") ? "#extension GL_EXT_draw_buffers : require" : "", (a.shaderTextureLOD || b.envMap) && c.get("EXT_shader_texture_lod") ? "#extension GL_EXT_shader_texture_lod : enable" : ""].filter(eb).join("\n");
  }function cb(a) {
    var b = [];for (var c in a) {
      var d = a[c];!1 !== d && b.push("#define " + c + " " + d);
    }return b.join("\n");
  }function db(a, b) {
    for (var c = {}, d = a.getProgramParameter(b, a.ACTIVE_ATTRIBUTES), e = 0; e < d; e++) {
      var f = a.getActiveAttrib(b, e),
          g = f.name;c[g] = a.getAttribLocation(b, g);
    }return c;
  }function eb(a) {
    return "" !== a;
  }function fb(a, b) {
    return a.replace(/NUM_DIR_LIGHTS/g, b.numDirLights).replace(/NUM_SPOT_LIGHTS/g, b.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g, b.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, b.numPointLights).replace(/NUM_HEMI_LIGHTS/g, b.numHemiLights);
  }function gb(a) {
    function b(a, b) {
      var c = Mf[b];if (void 0 === c) throw new Error("Can not resolve #include <" + b + ">");return gb(c);
    }var c = /^[ \t]*#include +<([\w\d.]+)>/gm;return a.replace(c, b);
  }function hb(a) {
    function b(a, b, c, d) {
      for (var e = "", f = parseInt(b); f < parseInt(c); f++) {
        e += d.replace(/\[ i \]/g, "[ " + f + " ]");
      }return e;
    }var c = /for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g;return a.replace(c, b);
  }function ib(a, b, c, d, e, f) {
    var g = a.context,
        h = d.defines,
        i = e.vertexShader,
        j = e.fragmentShader,
        k = "SHADOWMAP_TYPE_BASIC";f.shadowMapType === Eb ? k = "SHADOWMAP_TYPE_PCF" : f.shadowMapType === Fb && (k = "SHADOWMAP_TYPE_PCF_SOFT");var l = "ENVMAP_TYPE_CUBE",
        m = "ENVMAP_MODE_REFLECTION",
        n = "ENVMAP_BLENDING_MULTIPLY";if (f.envMap) {
      switch (d.envMap.mapping) {case wc:case xc:
          l = "ENVMAP_TYPE_CUBE";break;case Bc:case Cc:
          l = "ENVMAP_TYPE_CUBE_UV";break;case yc:case zc:
          l = "ENVMAP_TYPE_EQUIREC";break;case Ac:
          l = "ENVMAP_TYPE_SPHERE";}switch (d.envMap.mapping) {case xc:case zc:
          m = "ENVMAP_MODE_REFRACTION";}switch (d.combine) {case nc:
          n = "ENVMAP_BLENDING_MULTIPLY";break;case oc:
          n = "ENVMAP_BLENDING_MIX";break;case pc:
          n = "ENVMAP_BLENDING_ADD";}
    }var o,
        p,
        q = a.gammaFactor > 0 ? a.gammaFactor : 1,
        r = bb(d.extensions, f, b),
        s = cb(h),
        t = g.createProgram();d.isRawShaderMaterial ? (o = [s].filter(eb).join("\n"), o.length > 0 && (o += "\n"), p = [r, s].filter(eb).join("\n"), p.length > 0 && (p += "\n")) : (o = ["precision " + f.precision + " float;", "precision " + f.precision + " int;", "#define SHADER_NAME " + e.name, s, f.supportsVertexTextures ? "#define VERTEX_TEXTURES" : "", "#define GAMMA_FACTOR " + q, "#define MAX_BONES " + f.maxBones, f.useFog && f.fog ? "#define USE_FOG" : "", f.useFog && f.fogExp ? "#define FOG_EXP2" : "", f.map ? "#define USE_MAP" : "", f.envMap ? "#define USE_ENVMAP" : "", f.envMap ? "#define " + m : "", f.lightMap ? "#define USE_LIGHTMAP" : "", f.aoMap ? "#define USE_AOMAP" : "", f.emissiveMap ? "#define USE_EMISSIVEMAP" : "", f.bumpMap ? "#define USE_BUMPMAP" : "", f.normalMap ? "#define USE_NORMALMAP" : "", f.displacementMap && f.supportsVertexTextures ? "#define USE_DISPLACEMENTMAP" : "", f.specularMap ? "#define USE_SPECULARMAP" : "", f.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", f.metalnessMap ? "#define USE_METALNESSMAP" : "", f.alphaMap ? "#define USE_ALPHAMAP" : "", f.vertexColors ? "#define USE_COLOR" : "", f.flatShading ? "#define FLAT_SHADED" : "", f.skinning ? "#define USE_SKINNING" : "", f.useVertexTexture ? "#define BONE_TEXTURE" : "", f.morphTargets ? "#define USE_MORPHTARGETS" : "", f.morphNormals && !1 === f.flatShading ? "#define USE_MORPHNORMALS" : "", f.doubleSided ? "#define DOUBLE_SIDED" : "", f.flipSided ? "#define FLIP_SIDED" : "", "#define NUM_CLIPPING_PLANES " + f.numClippingPlanes, f.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", f.shadowMapEnabled ? "#define " + k : "", f.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", f.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", f.logarithmicDepthBuffer && b.get("EXT_frag_depth") ? "#define USE_LOGDEPTHBUF_EXT" : "", "uniform mat4 modelMatrix;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;", "uniform vec3 cameraPosition;", "attribute vec3 position;", "attribute vec3 normal;", "attribute vec2 uv;", "#ifdef USE_COLOR", "\tattribute vec3 color;", "#endif", "#ifdef USE_MORPHTARGETS", "\tattribute vec3 morphTarget0;", "\tattribute vec3 morphTarget1;", "\tattribute vec3 morphTarget2;", "\tattribute vec3 morphTarget3;", "\t#ifdef USE_MORPHNORMALS", "\t\tattribute vec3 morphNormal0;", "\t\tattribute vec3 morphNormal1;", "\t\tattribute vec3 morphNormal2;", "\t\tattribute vec3 morphNormal3;", "\t#else", "\t\tattribute vec3 morphTarget4;", "\t\tattribute vec3 morphTarget5;", "\t\tattribute vec3 morphTarget6;", "\t\tattribute vec3 morphTarget7;", "\t#endif", "#endif", "#ifdef USE_SKINNING", "\tattribute vec4 skinIndex;", "\tattribute vec4 skinWeight;", "#endif", "\n"].filter(eb).join("\n"), p = [r, "precision " + f.precision + " float;", "precision " + f.precision + " int;", "#define SHADER_NAME " + e.name, s, f.alphaTest ? "#define ALPHATEST " + f.alphaTest : "", "#define GAMMA_FACTOR " + q, f.useFog && f.fog ? "#define USE_FOG" : "", f.useFog && f.fogExp ? "#define FOG_EXP2" : "", f.map ? "#define USE_MAP" : "", f.envMap ? "#define USE_ENVMAP" : "", f.envMap ? "#define " + l : "", f.envMap ? "#define " + m : "", f.envMap ? "#define " + n : "", f.lightMap ? "#define USE_LIGHTMAP" : "", f.aoMap ? "#define USE_AOMAP" : "", f.emissiveMap ? "#define USE_EMISSIVEMAP" : "", f.bumpMap ? "#define USE_BUMPMAP" : "", f.normalMap ? "#define USE_NORMALMAP" : "", f.specularMap ? "#define USE_SPECULARMAP" : "", f.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", f.metalnessMap ? "#define USE_METALNESSMAP" : "", f.alphaMap ? "#define USE_ALPHAMAP" : "", f.vertexColors ? "#define USE_COLOR" : "", f.gradientMap ? "#define USE_GRADIENTMAP" : "", f.flatShading ? "#define FLAT_SHADED" : "", f.doubleSided ? "#define DOUBLE_SIDED" : "", f.flipSided ? "#define FLIP_SIDED" : "", "#define NUM_CLIPPING_PLANES " + f.numClippingPlanes, "#define UNION_CLIPPING_PLANES " + (f.numClippingPlanes - f.numClipIntersection), f.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", f.shadowMapEnabled ? "#define " + k : "", f.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "", f.physicallyCorrectLights ? "#define PHYSICALLY_CORRECT_LIGHTS" : "", f.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", f.logarithmicDepthBuffer && b.get("EXT_frag_depth") ? "#define USE_LOGDEPTHBUF_EXT" : "", f.envMap && b.get("EXT_shader_texture_lod") ? "#define TEXTURE_LOD_EXT" : "", "uniform mat4 viewMatrix;", "uniform vec3 cameraPosition;", f.toneMapping !== qc ? "#define TONE_MAPPING" : "", f.toneMapping !== qc ? Mf.tonemapping_pars_fragment : "", f.toneMapping !== qc ? ab("toneMapping", f.toneMapping) : "", f.dithering ? "#define DITHERING" : "", f.outputEncoding || f.mapEncoding || f.envMapEncoding || f.emissiveMapEncoding ? Mf.encodings_pars_fragment : "", f.mapEncoding ? $a("mapTexelToLinear", f.mapEncoding) : "", f.envMapEncoding ? $a("envMapTexelToLinear", f.envMapEncoding) : "", f.emissiveMapEncoding ? $a("emissiveMapTexelToLinear", f.emissiveMapEncoding) : "", f.outputEncoding ? _a("linearToOutputTexel", f.outputEncoding) : "", f.depthPacking ? "#define DEPTH_PACKING " + d.depthPacking : "", "\n"].filter(eb).join("\n")), i = gb(i), i = fb(i, f), j = gb(j), j = fb(j, f), d.isShaderMaterial || (i = hb(i), j = hb(j));var u = o + i,
        v = p + j,
        w = Ya(g, g.VERTEX_SHADER, u),
        x = Ya(g, g.FRAGMENT_SHADER, v);g.attachShader(t, w), g.attachShader(t, x), void 0 !== d.index0AttributeName ? g.bindAttribLocation(t, 0, d.index0AttributeName) : !0 === f.morphTargets && g.bindAttribLocation(t, 0, "position"), g.linkProgram(t);var y = g.getProgramInfoLog(t),
        z = g.getShaderInfoLog(w),
        A = g.getShaderInfoLog(x),
        B = !0,
        C = !0;!1 === g.getProgramParameter(t, g.LINK_STATUS) ? (B = !1, console.error("THREE.WebGLProgram: shader error: ", g.getError(), "gl.VALIDATE_STATUS", g.getProgramParameter(t, g.VALIDATE_STATUS), "gl.getProgramInfoLog", y, z, A)) : "" !== y ? console.warn("THREE.WebGLProgram: gl.getProgramInfoLog()", y) : "" !== z && "" !== A || (C = !1), C && (this.diagnostics = { runnable: B, material: d, programLog: y, vertexShader: { log: z, prefix: o }, fragmentShader: { log: A, prefix: p } }), g.deleteShader(w), g.deleteShader(x);var D;this.getUniforms = function () {
      return void 0 === D && (D = new T(g, t, a)), D;
    };var E;return this.getAttributes = function () {
      return void 0 === E && (E = db(g, t)), E;
    }, this.destroy = function () {
      g.deleteProgram(t), this.program = void 0;
    }, Object.defineProperties(this, { uniforms: { get: function get() {
          return console.warn("THREE.WebGLProgram: .uniforms is now .getUniforms()."), this.getUniforms();
        } }, attributes: { get: function get() {
          return console.warn("THREE.WebGLProgram: .attributes is now .getAttributes()."), this.getAttributes();
        } } }), this.id = Sf++, this.code = c, this.usedTimes = 1, this.program = t, this.vertexShader = w, this.fragmentShader = x, this;
  }function jb(a, b, c) {
    function d(a) {
      var b = a.skeleton,
          d = b.bones;if (c.floatVertexTextures) return 1024;var e = c.maxVertexUniforms,
          f = Math.floor((e - 20) / 4),
          g = Math.min(f, d.length);return g < d.length ? (console.warn("THREE.WebGLRenderer: Skeleton has " + d.length + " bones. This GPU supports " + g + "."), 0) : g;
    }function e(a, b) {
      var c;return a ? a.isTexture ? c = a.encoding : a.isWebGLRenderTarget && (console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."), c = a.texture.encoding) : c = pd, c === pd && b && (c = rd), c;
    }var f = [],
        g = { MeshDepthMaterial: "depth", MeshDistanceMaterial: "distanceRGBA", MeshNormalMaterial: "normal", MeshBasicMaterial: "basic", MeshLambertMaterial: "lambert", MeshPhongMaterial: "phong", MeshToonMaterial: "phong", MeshStandardMaterial: "physical", MeshPhysicalMaterial: "physical", LineBasicMaterial: "basic", LineDashedMaterial: "dashed", PointsMaterial: "points", ShadowMaterial: "shadow" },
        h = ["precision", "supportsVertexTextures", "map", "mapEncoding", "envMap", "envMapMode", "envMapEncoding", "lightMap", "aoMap", "emissiveMap", "emissiveMapEncoding", "bumpMap", "normalMap", "displacementMap", "specularMap", "roughnessMap", "metalnessMap", "gradientMap", "alphaMap", "combine", "vertexColors", "fog", "useFog", "fogExp", "flatShading", "sizeAttenuation", "logarithmicDepthBuffer", "skinning", "maxBones", "useVertexTexture", "morphTargets", "morphNormals", "maxMorphTargets", "maxMorphNormals", "premultipliedAlpha", "numDirLights", "numPointLights", "numSpotLights", "numHemiLights", "numRectAreaLights", "shadowMapEnabled", "shadowMapType", "toneMapping", "physicallyCorrectLights", "alphaTest", "doubleSided", "flipSided", "numClippingPlanes", "numClipIntersection", "depthPacking", "dithering"];this.getParameters = function (b, f, h, i, j, k, l) {
      var m = g[b.type],
          n = l.isSkinnedMesh ? d(l) : 0,
          o = c.precision;null !== b.precision && (o = c.getMaxPrecision(b.precision)) !== b.precision && console.warn("THREE.WebGLProgram.getParameters:", b.precision, "not supported, using", o, "instead.");var p = a.getRenderTarget();return { shaderID: m, precision: o, supportsVertexTextures: c.vertexTextures, outputEncoding: e(p ? p.texture : null, a.gammaOutput), map: !!b.map, mapEncoding: e(b.map, a.gammaInput), envMap: !!b.envMap, envMapMode: b.envMap && b.envMap.mapping, envMapEncoding: e(b.envMap, a.gammaInput), envMapCubeUV: !!b.envMap && (b.envMap.mapping === Bc || b.envMap.mapping === Cc), lightMap: !!b.lightMap, aoMap: !!b.aoMap, emissiveMap: !!b.emissiveMap, emissiveMapEncoding: e(b.emissiveMap, a.gammaInput), bumpMap: !!b.bumpMap, normalMap: !!b.normalMap, displacementMap: !!b.displacementMap, roughnessMap: !!b.roughnessMap, metalnessMap: !!b.metalnessMap, specularMap: !!b.specularMap, alphaMap: !!b.alphaMap, gradientMap: !!b.gradientMap, combine: b.combine, vertexColors: b.vertexColors, fog: !!i, useFog: b.fog, fogExp: i && i.isFogExp2, flatShading: b.flatShading, sizeAttenuation: b.sizeAttenuation, logarithmicDepthBuffer: c.logarithmicDepthBuffer, skinning: b.skinning && n > 0, maxBones: n, useVertexTexture: c.floatVertexTextures, morphTargets: b.morphTargets, morphNormals: b.morphNormals, maxMorphTargets: a.maxMorphTargets, maxMorphNormals: a.maxMorphNormals, numDirLights: f.directional.length, numPointLights: f.point.length, numSpotLights: f.spot.length, numRectAreaLights: f.rectArea.length, numHemiLights: f.hemi.length, numClippingPlanes: j, numClipIntersection: k, dithering: b.dithering, shadowMapEnabled: a.shadowMap.enabled && l.receiveShadow && h.length > 0, shadowMapType: a.shadowMap.type, toneMapping: a.toneMapping, physicallyCorrectLights: a.physicallyCorrectLights, premultipliedAlpha: b.premultipliedAlpha, alphaTest: b.alphaTest, doubleSided: b.side === Ib, flipSided: b.side === Hb, depthPacking: void 0 !== b.depthPacking && b.depthPacking };
    }, this.getProgramCode = function (b, c) {
      var d = [];if (c.shaderID ? d.push(c.shaderID) : (d.push(b.fragmentShader), d.push(b.vertexShader)), void 0 !== b.defines) for (var e in b.defines) {
        d.push(e), d.push(b.defines[e]);
      }for (var f = 0; f < h.length; f++) {
        d.push(c[h[f]]);
      }return d.push(b.onBeforeCompile.toString()), d.push(a.gammaOutput), d.join();
    }, this.acquireProgram = function (c, d, e, g) {
      for (var h, i = 0, j = f.length; i < j; i++) {
        var k = f[i];if (k.code === g) {
          h = k, ++h.usedTimes;break;
        }
      }return void 0 === h && (h = new ib(a, b, g, c, d, e), f.push(h)), h;
    }, this.releaseProgram = function (a) {
      if (0 == --a.usedTimes) {
        var b = f.indexOf(a);f[b] = f[f.length - 1], f.pop(), a.destroy();
      }
    }, this.programs = f;
  }function kb(a, b, c, d, e, f, g) {
    function h(a, b) {
      if (a.width > b || a.height > b) {
        var c = b / Math.max(a.width, a.height),
            d = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas");d.width = Math.floor(a.width * c), d.height = Math.floor(a.height * c);return d.getContext("2d").drawImage(a, 0, 0, a.width, a.height, 0, 0, d.width, d.height), console.warn("THREE.WebGLRenderer: image is too big (" + a.width + "x" + a.height + "). Resized to " + d.width + "x" + d.height, a), d;
      }return a;
    }function i(a) {
      return yd.isPowerOfTwo(a.width) && yd.isPowerOfTwo(a.height);
    }function j(a) {
      if (a instanceof HTMLImageElement || a instanceof HTMLCanvasElement || a instanceof ImageBitmap) {
        var b = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas");b.width = yd.floorPowerOfTwo(a.width), b.height = yd.floorPowerOfTwo(a.height);return b.getContext("2d").drawImage(a, 0, 0, b.width, b.height), console.warn("THREE.WebGLRenderer: image is not power of two (" + a.width + "x" + a.height + "). Resized to " + b.width + "x" + b.height, a), b;
      }return a;
    }function k(a) {
      return a.wrapS !== Ec || a.wrapT !== Ec || a.minFilter !== Gc && a.minFilter !== Jc;
    }function l(a, b) {
      return a.generateMipmaps && b && a.minFilter !== Gc && a.minFilter !== Jc;
    }function m(b) {
      return b === Gc || b === Hc || b === Ic ? a.NEAREST : a.LINEAR;
    }function n(a) {
      var b = a.target;b.removeEventListener("dispose", n), p(b), b.isVideoTexture && delete E[b.id], g.textures--;
    }function o(a) {
      var b = a.target;b.removeEventListener("dispose", o), q(b), g.textures--;
    }function p(b) {
      var c = d.get(b);if (b.image && c.__image__webglTextureCube) a.deleteTexture(c.__image__webglTextureCube);else {
        if (void 0 === c.__webglInit) return;a.deleteTexture(c.__webglTexture);
      }d.remove(b);
    }function q(b) {
      var c = d.get(b),
          e = d.get(b.texture);if (b) {
        if (void 0 !== e.__webglTexture && a.deleteTexture(e.__webglTexture), b.depthTexture && b.depthTexture.dispose(), b.isWebGLRenderTargetCube) for (var f = 0; f < 6; f++) {
          a.deleteFramebuffer(c.__webglFramebuffer[f]), c.__webglDepthbuffer && a.deleteRenderbuffer(c.__webglDepthbuffer[f]);
        } else a.deleteFramebuffer(c.__webglFramebuffer), c.__webglDepthbuffer && a.deleteRenderbuffer(c.__webglDepthbuffer);d.remove(b.texture), d.remove(b);
      }
    }function r(b, e) {
      var f = d.get(b);if (b.version > 0 && f.__version !== b.version) {
        var g = b.image;if (void 0 === g) console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined", b);else {
          if (!1 !== g.complete) return void v(f, b, e);console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete", b);
        }
      }c.activeTexture(a.TEXTURE0 + e), c.bindTexture(a.TEXTURE_2D, f.__webglTexture);
    }function s(b, j) {
      var k = d.get(b);if (6 === b.image.length) if (b.version > 0 && k.__version !== b.version) {
        k.__image__webglTextureCube || (b.addEventListener("dispose", n), k.__image__webglTextureCube = a.createTexture(), g.textures++), c.activeTexture(a.TEXTURE0 + j), c.bindTexture(a.TEXTURE_CUBE_MAP, k.__image__webglTextureCube), a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL, b.flipY);for (var m = b && b.isCompressedTexture, o = b.image[0] && b.image[0].isDataTexture, p = [], q = 0; q < 6; q++) {
          p[q] = m || o ? o ? b.image[q].image : b.image[q] : h(b.image[q], e.maxCubemapSize);
        }var r = p[0],
            s = i(r),
            t = f.convert(b.format),
            v = f.convert(b.type);u(a.TEXTURE_CUBE_MAP, b, s);for (var q = 0; q < 6; q++) {
          if (m) for (var w, x = p[q].mipmaps, y = 0, z = x.length; y < z; y++) {
            w = x[y], b.format !== $c && b.format !== Zc ? c.getCompressedTextureFormats().indexOf(t) > -1 ? c.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X + q, y, t, w.width, w.height, 0, w.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : c.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X + q, y, t, w.width, w.height, 0, t, v, w.data);
          } else o ? c.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X + q, 0, t, p[q].width, p[q].height, 0, t, v, p[q].data) : c.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X + q, 0, t, t, v, p[q]);
        }l(b, s) && a.generateMipmap(a.TEXTURE_CUBE_MAP), k.__version = b.version, b.onUpdate && b.onUpdate(b);
      } else c.activeTexture(a.TEXTURE0 + j), c.bindTexture(a.TEXTURE_CUBE_MAP, k.__image__webglTextureCube);
    }function t(b, e) {
      c.activeTexture(a.TEXTURE0 + e), c.bindTexture(a.TEXTURE_CUBE_MAP, d.get(b).__webglTexture);
    }function u(c, g, h) {
      var i;if (h ? (a.texParameteri(c, a.TEXTURE_WRAP_S, f.convert(g.wrapS)), a.texParameteri(c, a.TEXTURE_WRAP_T, f.convert(g.wrapT)), a.texParameteri(c, a.TEXTURE_MAG_FILTER, f.convert(g.magFilter)), a.texParameteri(c, a.TEXTURE_MIN_FILTER, f.convert(g.minFilter))) : (a.texParameteri(c, a.TEXTURE_WRAP_S, a.CLAMP_TO_EDGE), a.texParameteri(c, a.TEXTURE_WRAP_T, a.CLAMP_TO_EDGE), g.wrapS === Ec && g.wrapT === Ec || console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping.", g), a.texParameteri(c, a.TEXTURE_MAG_FILTER, m(g.magFilter)), a.texParameteri(c, a.TEXTURE_MIN_FILTER, m(g.minFilter)), g.minFilter !== Gc && g.minFilter !== Jc && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.", g)), i = b.get("EXT_texture_filter_anisotropic")) {
        if (g.type === Sc && null === b.get("OES_texture_float_linear")) return;if (g.type === Tc && null === b.get("OES_texture_half_float_linear")) return;(g.anisotropy > 1 || d.get(g).__currentAnisotropy) && (a.texParameterf(c, i.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(g.anisotropy, e.getMaxAnisotropy())), d.get(g).__currentAnisotropy = g.anisotropy);
      }
    }function v(b, d, m) {
      void 0 === b.__webglInit && (b.__webglInit = !0, d.addEventListener("dispose", n), b.__webglTexture = a.createTexture(), d.isVideoTexture && (E[d.id] = d), g.textures++), c.activeTexture(a.TEXTURE0 + m), c.bindTexture(a.TEXTURE_2D, b.__webglTexture), a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL, d.flipY), a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL, d.premultiplyAlpha), a.pixelStorei(a.UNPACK_ALIGNMENT, d.unpackAlignment);var o = h(d.image, e.maxTextureSize);k(d) && !1 === i(o) && (o = j(o));var p = i(o),
          q = f.convert(d.format),
          r = f.convert(d.type);u(a.TEXTURE_2D, d, p);var s,
          t = d.mipmaps;if (d.isDepthTexture) {
        var v = a.DEPTH_COMPONENT;if (d.type === Sc) {
          if (!D) throw new Error("Float Depth Texture only supported in WebGL2.0");v = a.DEPTH_COMPONENT32F;
        } else D && (v = a.DEPTH_COMPONENT16);d.format === bd && v === a.DEPTH_COMPONENT && d.type !== Pc && d.type !== Rc && (console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."), d.type = Pc, r = f.convert(d.type)), d.format === cd && (v = a.DEPTH_STENCIL, d.type !== Xc && (console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."), d.type = Xc, r = f.convert(d.type))), c.texImage2D(a.TEXTURE_2D, 0, v, o.width, o.height, 0, q, r, null);
      } else if (d.isDataTexture) {
        if (t.length > 0 && p) {
          for (var w = 0, x = t.length; w < x; w++) {
            s = t[w], c.texImage2D(a.TEXTURE_2D, w, q, s.width, s.height, 0, q, r, s.data);
          }d.generateMipmaps = !1;
        } else c.texImage2D(a.TEXTURE_2D, 0, q, o.width, o.height, 0, q, r, o.data);
      } else if (d.isCompressedTexture) for (var w = 0, x = t.length; w < x; w++) {
        s = t[w], d.format !== $c && d.format !== Zc ? c.getCompressedTextureFormats().indexOf(q) > -1 ? c.compressedTexImage2D(a.TEXTURE_2D, w, q, s.width, s.height, 0, s.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : c.texImage2D(a.TEXTURE_2D, w, q, s.width, s.height, 0, q, r, s.data);
      } else if (t.length > 0 && p) {
        for (var w = 0, x = t.length; w < x; w++) {
          s = t[w], c.texImage2D(a.TEXTURE_2D, w, q, q, r, s);
        }d.generateMipmaps = !1;
      } else c.texImage2D(a.TEXTURE_2D, 0, q, q, r, o);l(d, p) && a.generateMipmap(a.TEXTURE_2D), b.__version = d.version, d.onUpdate && d.onUpdate(d);
    }function w(b, e, g, h) {
      var i = f.convert(e.texture.format),
          j = f.convert(e.texture.type);c.texImage2D(h, 0, i, e.width, e.height, 0, i, j, null), a.bindFramebuffer(a.FRAMEBUFFER, b), a.framebufferTexture2D(a.FRAMEBUFFER, g, h, d.get(e.texture).__webglTexture, 0), a.bindFramebuffer(a.FRAMEBUFFER, null);
    }function x(b, c) {
      a.bindRenderbuffer(a.RENDERBUFFER, b), c.depthBuffer && !c.stencilBuffer ? (a.renderbufferStorage(a.RENDERBUFFER, a.DEPTH_COMPONENT16, c.width, c.height), a.framebufferRenderbuffer(a.FRAMEBUFFER, a.DEPTH_ATTACHMENT, a.RENDERBUFFER, b)) : c.depthBuffer && c.stencilBuffer ? (a.renderbufferStorage(a.RENDERBUFFER, a.DEPTH_STENCIL, c.width, c.height), a.framebufferRenderbuffer(a.FRAMEBUFFER, a.DEPTH_STENCIL_ATTACHMENT, a.RENDERBUFFER, b)) : a.renderbufferStorage(a.RENDERBUFFER, a.RGBA4, c.width, c.height), a.bindRenderbuffer(a.RENDERBUFFER, null);
    }function y(b, c) {
      if (c && c.isWebGLRenderTargetCube) throw new Error("Depth Texture with cube render targets is not supported");if (a.bindFramebuffer(a.FRAMEBUFFER, b), !c.depthTexture || !c.depthTexture.isDepthTexture) throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");d.get(c.depthTexture).__webglTexture && c.depthTexture.image.width === c.width && c.depthTexture.image.height === c.height || (c.depthTexture.image.width = c.width, c.depthTexture.image.height = c.height, c.depthTexture.needsUpdate = !0), r(c.depthTexture, 0);var e = d.get(c.depthTexture).__webglTexture;if (c.depthTexture.format === bd) a.framebufferTexture2D(a.FRAMEBUFFER, a.DEPTH_ATTACHMENT, a.TEXTURE_2D, e, 0);else {
        if (c.depthTexture.format !== cd) throw new Error("Unknown depthTexture format");a.framebufferTexture2D(a.FRAMEBUFFER, a.DEPTH_STENCIL_ATTACHMENT, a.TEXTURE_2D, e, 0);
      }
    }function z(b) {
      var c = d.get(b),
          e = !0 === b.isWebGLRenderTargetCube;if (b.depthTexture) {
        if (e) throw new Error("target.depthTexture not supported in Cube render targets");y(c.__webglFramebuffer, b);
      } else if (e) {
        c.__webglDepthbuffer = [];for (var f = 0; f < 6; f++) {
          a.bindFramebuffer(a.FRAMEBUFFER, c.__webglFramebuffer[f]), c.__webglDepthbuffer[f] = a.createRenderbuffer(), x(c.__webglDepthbuffer[f], b);
        }
      } else a.bindFramebuffer(a.FRAMEBUFFER, c.__webglFramebuffer), c.__webglDepthbuffer = a.createRenderbuffer(), x(c.__webglDepthbuffer, b);a.bindFramebuffer(a.FRAMEBUFFER, null);
    }function A(b) {
      var e = d.get(b),
          f = d.get(b.texture);b.addEventListener("dispose", o), f.__webglTexture = a.createTexture(), g.textures++;var h = !0 === b.isWebGLRenderTargetCube,
          j = i(b);if (h) {
        e.__webglFramebuffer = [];for (var k = 0; k < 6; k++) {
          e.__webglFramebuffer[k] = a.createFramebuffer();
        }
      } else e.__webglFramebuffer = a.createFramebuffer();if (h) {
        c.bindTexture(a.TEXTURE_CUBE_MAP, f.__webglTexture), u(a.TEXTURE_CUBE_MAP, b.texture, j);for (var k = 0; k < 6; k++) {
          w(e.__webglFramebuffer[k], b, a.COLOR_ATTACHMENT0, a.TEXTURE_CUBE_MAP_POSITIVE_X + k);
        }l(b.texture, j) && a.generateMipmap(a.TEXTURE_CUBE_MAP), c.bindTexture(a.TEXTURE_CUBE_MAP, null);
      } else c.bindTexture(a.TEXTURE_2D, f.__webglTexture), u(a.TEXTURE_2D, b.texture, j), w(e.__webglFramebuffer, b, a.COLOR_ATTACHMENT0, a.TEXTURE_2D), l(b.texture, j) && a.generateMipmap(a.TEXTURE_2D), c.bindTexture(a.TEXTURE_2D, null);b.depthBuffer && z(b);
    }function B(b) {
      var e = b.texture;if (l(e, i(b))) {
        var f = b.isWebGLRenderTargetCube ? a.TEXTURE_CUBE_MAP : a.TEXTURE_2D,
            g = d.get(e).__webglTexture;c.bindTexture(f, g), a.generateMipmap(f), c.bindTexture(f, null);
      }
    }function C() {
      for (var a in E) {
        E[a].update();
      }
    }var D = "undefined" != typeof WebGL2RenderingContext && a instanceof window.WebGL2RenderingContext,
        E = {};this.setTexture2D = r, this.setTextureCube = s, this.setTextureCubeDynamic = t, this.setupRenderTarget = A, this.updateRenderTargetMipmap = B, this.updateVideoTextures = C;
  }function lb() {
    function a(a) {
      var b = a.uuid,
          c = d[b];return void 0 === c && (c = {}, d[b] = c), c;
    }function b(a) {
      delete d[a.uuid];
    }function c() {
      d = {};
    }var d = {};return { get: a, remove: b, clear: c };
  }function mb(a, b, c) {
    function d() {
      var b = !1,
          c = new i(),
          d = null,
          e = new i(0, 0, 0, 0);return { setMask: function setMask(c) {
          d === c || b || (a.colorMask(c, c, c, c), d = c);
        }, setLocked: function setLocked(a) {
          b = a;
        }, setClear: function setClear(b, d, f, g, h) {
          !0 === h && (b *= g, d *= g, f *= g), c.set(b, d, f, g), !1 === e.equals(c) && (a.clearColor(b, d, f, g), e.copy(c));
        }, reset: function reset() {
          b = !1, d = null, e.set(-1, 0, 0, 0);
        } };
    }function e() {
      var b = !1,
          c = null,
          d = null,
          e = null;return { setTest: function setTest(b) {
          b ? m(a.DEPTH_TEST) : n(a.DEPTH_TEST);
        }, setMask: function setMask(d) {
          c === d || b || (a.depthMask(d), c = d);
        }, setFunc: function setFunc(b) {
          if (d !== b) {
            if (b) switch (b) {case fc:
                a.depthFunc(a.NEVER);break;case gc:
                a.depthFunc(a.ALWAYS);break;case hc:
                a.depthFunc(a.LESS);break;case ic:
                a.depthFunc(a.LEQUAL);break;case jc:
                a.depthFunc(a.EQUAL);break;case kc:
                a.depthFunc(a.GEQUAL);break;case lc:
                a.depthFunc(a.GREATER);break;case mc:
                a.depthFunc(a.NOTEQUAL);break;default:
                a.depthFunc(a.LEQUAL);} else a.depthFunc(a.LEQUAL);d = b;
          }
        }, setLocked: function setLocked(a) {
          b = a;
        }, setClear: function setClear(b) {
          e !== b && (a.clearDepth(b), e = b);
        }, reset: function reset() {
          b = !1, c = null, d = null, e = null;
        } };
    }function f() {
      var b = !1,
          c = null,
          d = null,
          e = null,
          f = null,
          g = null,
          h = null,
          i = null,
          j = null;return { setTest: function setTest(b) {
          b ? m(a.STENCIL_TEST) : n(a.STENCIL_TEST);
        }, setMask: function setMask(d) {
          c === d || b || (a.stencilMask(d), c = d);
        }, setFunc: function setFunc(b, c, g) {
          d === b && e === c && f === g || (a.stencilFunc(b, c, g), d = b, e = c, f = g);
        }, setOp: function setOp(b, c, d) {
          g === b && h === c && i === d || (a.stencilOp(b, c, d), g = b, h = c, i = d);
        }, setLocked: function setLocked(a) {
          b = a;
        }, setClear: function setClear(b) {
          j !== b && (a.clearStencil(b), j = b);
        }, reset: function reset() {
          b = !1, c = null, d = null, e = null, f = null, g = null, h = null, i = null, j = null;
        } };
    }function g(b, c, d) {
      var e = new Uint8Array(4),
          f = a.createTexture();a.bindTexture(b, f), a.texParameteri(b, a.TEXTURE_MIN_FILTER, a.NEAREST), a.texParameteri(b, a.TEXTURE_MAG_FILTER, a.NEAREST);for (var g = 0; g < d; g++) {
        a.texImage2D(c + g, 0, a.RGBA, 1, 1, 0, a.RGBA, a.UNSIGNED_BYTE, e);
      }return f;
    }function h() {
      for (var a = 0, b = I.length; a < b; a++) {
        I[a] = 0;
      }
    }function j(c) {
      if (I[c] = 1, 0 === J[c] && (a.enableVertexAttribArray(c), J[c] = 1), 0 !== K[c]) {
        b.get("ANGLE_instanced_arrays").vertexAttribDivisorANGLE(c, 0), K[c] = 0;
      }
    }function k(c, d) {
      if (I[c] = 1, 0 === J[c] && (a.enableVertexAttribArray(c), J[c] = 1), K[c] !== d) {
        b.get("ANGLE_instanced_arrays").vertexAttribDivisorANGLE(c, d), K[c] = d;
      }
    }function l() {
      for (var b = 0, c = J.length; b !== c; ++b) {
        J[b] !== I[b] && (a.disableVertexAttribArray(b), J[b] = 0);
      }
    }function m(b) {
      !0 !== L[b] && (a.enable(b), L[b] = !0);
    }function n(b) {
      !1 !== L[b] && (a.disable(b), L[b] = !1);
    }function o() {
      if (null === M && (M = [], b.get("WEBGL_compressed_texture_pvrtc") || b.get("WEBGL_compressed_texture_s3tc") || b.get("WEBGL_compressed_texture_etc1"))) for (var c = a.getParameter(a.COMPRESSED_TEXTURE_FORMATS), d = 0; d < c.length; d++) {
        M.push(c[d]);
      }return M;
    }function p(b) {
      return N !== b && (a.useProgram(b), N = b, !0);
    }function q(b, d, e, f, g, h, i, j) {
      if (b !== Lb ? m(a.BLEND) : n(a.BLEND), b !== Qb) {
        if (b !== O || j !== V) switch (b) {case Nb:
            j ? (a.blendEquationSeparate(a.FUNC_ADD, a.FUNC_ADD), a.blendFuncSeparate(a.ONE, a.ONE, a.ONE, a.ONE)) : (a.blendEquation(a.FUNC_ADD), a.blendFunc(a.SRC_ALPHA, a.ONE));break;case Ob:
            j ? (a.blendEquationSeparate(a.FUNC_ADD, a.FUNC_ADD), a.blendFuncSeparate(a.ZERO, a.ZERO, a.ONE_MINUS_SRC_COLOR, a.ONE_MINUS_SRC_ALPHA)) : (a.blendEquation(a.FUNC_ADD), a.blendFunc(a.ZERO, a.ONE_MINUS_SRC_COLOR));break;case Pb:
            j ? (a.blendEquationSeparate(a.FUNC_ADD, a.FUNC_ADD), a.blendFuncSeparate(a.ZERO, a.SRC_COLOR, a.ZERO, a.SRC_ALPHA)) : (a.blendEquation(a.FUNC_ADD), a.blendFunc(a.ZERO, a.SRC_COLOR));break;default:
            j ? (a.blendEquationSeparate(a.FUNC_ADD, a.FUNC_ADD), a.blendFuncSeparate(a.ONE, a.ONE_MINUS_SRC_ALPHA, a.ONE, a.ONE_MINUS_SRC_ALPHA)) : (a.blendEquationSeparate(a.FUNC_ADD, a.FUNC_ADD), a.blendFuncSeparate(a.SRC_ALPHA, a.ONE_MINUS_SRC_ALPHA, a.ONE, a.ONE_MINUS_SRC_ALPHA));}P = null, Q = null, R = null, S = null, T = null, U = null;
      } else g = g || d, h = h || e, i = i || f, d === P && g === S || (a.blendEquationSeparate(c.convert(d), c.convert(g)), P = d, S = g), e === Q && f === R && h === T && i === U || (a.blendFuncSeparate(c.convert(e), c.convert(f), c.convert(h), c.convert(i)), Q = e, R = f, T = h, U = i);O = b, V = j;
    }function r(b, c) {
      b.side === Ib ? n(a.CULL_FACE) : m(a.CULL_FACE);var d = b.side === Hb;c && (d = !d), s(d), !0 === b.transparent ? q(b.blending, b.blendEquation, b.blendSrc, b.blendDst, b.blendEquationAlpha, b.blendSrcAlpha, b.blendDstAlpha, b.premultipliedAlpha) : q(Lb), F.setFunc(b.depthFunc), F.setTest(b.depthTest), F.setMask(b.depthWrite), E.setMask(b.colorWrite), v(b.polygonOffset, b.polygonOffsetFactor, b.polygonOffsetUnits);
    }function s(b) {
      W !== b && (b ? a.frontFace(a.CW) : a.frontFace(a.CCW), W = b);
    }function t(b) {
      b !== Ab ? (m(a.CULL_FACE), b !== X && (b === Bb ? a.cullFace(a.BACK) : b === Cb ? a.cullFace(a.FRONT) : a.cullFace(a.FRONT_AND_BACK))) : n(a.CULL_FACE), X = b;
    }function u(b) {
      b !== Y && (ba && a.lineWidth(b), Y = b);
    }function v(b, c, d) {
      b ? (m(a.POLYGON_OFFSET_FILL), Z === c && $ === d || (a.polygonOffset(c, d), Z = c, $ = d)) : n(a.POLYGON_OFFSET_FILL);
    }function w(b) {
      b ? m(a.SCISSOR_TEST) : n(a.SCISSOR_TEST);
    }function x(b) {
      void 0 === b && (b = a.TEXTURE0 + _ - 1), ca !== b && (a.activeTexture(b), ca = b);
    }function y(b, c) {
      null === ca && x();var d = da[ca];void 0 === d && (d = { type: void 0, texture: void 0 }, da[ca] = d), d.type === b && d.texture === c || (a.bindTexture(b, c || ga[b]), d.type = b, d.texture = c);
    }function z() {
      try {
        a.compressedTexImage2D.apply(a, arguments);
      } catch (a) {
        console.error("THREE.WebGLState:", a);
      }
    }function A() {
      try {
        a.texImage2D.apply(a, arguments);
      } catch (a) {
        console.error("THREE.WebGLState:", a);
      }
    }function B(b) {
      !1 === ea.equals(b) && (a.scissor(b.x, b.y, b.z, b.w), ea.copy(b));
    }function C(b) {
      !1 === fa.equals(b) && (a.viewport(b.x, b.y, b.z, b.w), fa.copy(b));
    }function D() {
      for (var b = 0; b < J.length; b++) {
        1 === J[b] && (a.disableVertexAttribArray(b), J[b] = 0);
      }L = {}, M = null, ca = null, da = {}, N = null, O = null, W = null, X = null, E.reset(), F.reset(), G.reset();
    }var E = new d(),
        F = new e(),
        G = new f(),
        H = a.getParameter(a.MAX_VERTEX_ATTRIBS),
        I = new Uint8Array(H),
        J = new Uint8Array(H),
        K = new Uint8Array(H),
        L = {},
        M = null,
        N = null,
        O = null,
        P = null,
        Q = null,
        R = null,
        S = null,
        T = null,
        U = null,
        V = !1,
        W = null,
        X = null,
        Y = null,
        Z = null,
        $ = null,
        _ = a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS),
        aa = parseFloat(/^WebGL\ ([0-9])/.exec(a.getParameter(a.VERSION))[1]),
        ba = parseFloat(aa) >= 1,
        ca = null,
        da = {},
        ea = new i(),
        fa = new i(),
        ga = {};return ga[a.TEXTURE_2D] = g(a.TEXTURE_2D, a.TEXTURE_2D, 1), ga[a.TEXTURE_CUBE_MAP] = g(a.TEXTURE_CUBE_MAP, a.TEXTURE_CUBE_MAP_POSITIVE_X, 6), E.setClear(0, 0, 0, 1), F.setClear(1), G.setClear(0), m(a.DEPTH_TEST), F.setFunc(ic), s(!1), t(Bb), m(a.CULL_FACE), m(a.BLEND), q(Mb), { buffers: { color: E, depth: F, stencil: G }, initAttributes: h, enableAttribute: j, enableAttributeAndDivisor: k, disableUnusedAttributes: l, enable: m, disable: n, getCompressedTextureFormats: o, useProgram: p, setBlending: q, setMaterial: r, setFlipSided: s, setCullFace: t, setLineWidth: u, setPolygonOffset: v, setScissorTest: w, activeTexture: x, bindTexture: y, compressedTexImage2D: z, texImage2D: A, scissor: B, viewport: C, reset: D };
  }function nb(a, b, c) {
    function d() {
      if (void 0 !== f) return f;var c = b.get("EXT_texture_filter_anisotropic");return f = null !== c ? a.getParameter(c.MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 0;
    }function e(b) {
      if ("highp" === b) {
        if (a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.HIGH_FLOAT).precision > 0 && a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.HIGH_FLOAT).precision > 0) return "highp";b = "mediump";
      }return "mediump" === b && a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.MEDIUM_FLOAT).precision > 0 && a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.MEDIUM_FLOAT).precision > 0 ? "mediump" : "lowp";
    }var f,
        g = void 0 !== c.precision ? c.precision : "highp",
        h = e(g);h !== g && (console.warn("THREE.WebGLRenderer:", g, "not supported, using", h, "instead."), g = h);var i = !0 === c.logarithmicDepthBuffer,
        j = a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),
        k = a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),
        l = a.getParameter(a.MAX_TEXTURE_SIZE),
        m = a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),
        n = a.getParameter(a.MAX_VERTEX_ATTRIBS),
        o = a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),
        p = a.getParameter(a.MAX_VARYING_VECTORS),
        q = a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),
        r = k > 0,
        s = !!b.get("OES_texture_float");return { getMaxAnisotropy: d, getMaxPrecision: e, precision: g, logarithmicDepthBuffer: i, maxTextures: j, maxVertexTextures: k, maxTextureSize: l, maxCubemapSize: m, maxAttributes: n, maxVertexUniforms: o, maxVaryings: p, maxFragmentUniforms: q, vertexTextures: r, floatFragmentTextures: s, floatVertexTextures: r && s };
  }function ob(a, b, c, d) {
    ja.call(this), this.type = "PerspectiveCamera", this.fov = void 0 !== a ? a : 50, this.zoom = 1, this.near = void 0 !== c ? c : .1, this.far = void 0 !== d ? d : 2e3, this.focus = 10, this.aspect = void 0 !== b ? b : 1, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix();
  }function pb(a) {
    ob.call(this), this.cameras = a || [];
  }function qb(a) {
    function b() {
      if (null !== e && e.isPresenting) {
        var b = e.getEyeParameters("left"),
            d = b.renderWidth,
            f = b.renderHeight;n = a.getPixelRatio(), m = a.getSize(), a.setDrawingBufferSize(2 * d, f, 1);
      } else c.enabled && a.setDrawingBufferSize(m.width, m.height, n);
    }var c = this,
        e = null,
        f = null,
        g = null;"undefined" != typeof window && "VRFrameData" in window && (f = new window.VRFrameData());var h = new d(),
        j = new ob();j.bounds = new i(0, 0, .5, 1), j.layers.enable(1);var k = new ob();k.bounds = new i(.5, 0, .5, 1), k.layers.enable(2);var l = new pb([j, k]);l.layers.enable(1), l.layers.enable(2);var m, n;"undefined" != typeof window && window.addEventListener("vrdisplaypresentchange", b, !1), this.enabled = !1, this.getDevice = function () {
      return e;
    }, this.setDevice = function (a) {
      void 0 !== a && (e = a);
    }, this.setPoseTarget = function (a) {
      void 0 !== a && (g = a);
    }, this.getCamera = function (a) {
      if (null === e) return a;e.depthNear = a.near, e.depthFar = a.far, e.getFrameData(f);var b = f.pose,
          c = null !== g ? g : a;if (null !== b.position ? c.position.fromArray(b.position) : c.position.set(0, 0, 0), null !== b.orientation && c.quaternion.fromArray(b.orientation), c.updateMatrixWorld(), !1 === e.isPresenting) return a;j.near = a.near, k.near = a.near, j.far = a.far, k.far = a.far, l.matrixWorld.copy(a.matrixWorld), l.matrixWorldInverse.copy(a.matrixWorldInverse), j.matrixWorldInverse.fromArray(f.leftViewMatrix), k.matrixWorldInverse.fromArray(f.rightViewMatrix);var d = c.parent;null !== d && (h.getInverse(d.matrixWorld), j.matrixWorldInverse.multiply(h), k.matrixWorldInverse.multiply(h)), j.matrixWorld.getInverse(j.matrixWorldInverse), k.matrixWorld.getInverse(k.matrixWorldInverse), j.projectionMatrix.fromArray(f.leftProjectionMatrix), k.projectionMatrix.fromArray(f.rightProjectionMatrix), l.projectionMatrix.copy(j.projectionMatrix);var i = e.getLayers();if (i.length) {
        var m = i[0];null !== m.leftBounds && 4 === m.leftBounds.length && j.bounds.fromArray(m.leftBounds), null !== m.rightBounds && 4 === m.rightBounds.length && k.bounds.fromArray(m.rightBounds);
      }return l;
    }, this.submitFrame = function () {
      e && e.isPresenting && e.submitFrame();
    }, this.dispose = function () {
      "undefined" != typeof window && window.removeEventListener("vrdisplaypresentchange", b);
    };
  }function rb(a) {
    var b = {};return { get: function get(c) {
        if (void 0 !== b[c]) return b[c];var d;switch (c) {case "WEBGL_depth_texture":
            d = a.getExtension("WEBGL_depth_texture") || a.getExtension("MOZ_WEBGL_depth_texture") || a.getExtension("WEBKIT_WEBGL_depth_texture");break;case "EXT_texture_filter_anisotropic":
            d = a.getExtension("EXT_texture_filter_anisotropic") || a.getExtension("MOZ_EXT_texture_filter_anisotropic") || a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case "WEBGL_compressed_texture_s3tc":
            d = a.getExtension("WEBGL_compressed_texture_s3tc") || a.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case "WEBGL_compressed_texture_pvrtc":
            d = a.getExtension("WEBGL_compressed_texture_pvrtc") || a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;case "WEBGL_compressed_texture_etc1":
            d = a.getExtension("WEBGL_compressed_texture_etc1");break;default:
            d = a.getExtension(c);}return null === d && console.warn("THREE.WebGLRenderer: " + c + " extension not supported."), b[c] = d, d;
      } };
  }function sb() {
    function a() {
      k.value !== d && (k.value = d, k.needsUpdate = e > 0), c.numPlanes = e, c.numIntersection = 0;
    }function b(a, b, d, e) {
      var f = null !== a ? a.length : 0,
          g = null;if (0 !== f) {
        if (g = k.value, !0 !== e || null === g) {
          var h = d + 4 * f,
              l = b.matrixWorldInverse;j.getNormalMatrix(l), (null === g || g.length < h) && (g = new Float32Array(h));for (var m = 0, n = d; m !== f; ++m, n += 4) {
            i.copy(a[m]).applyMatrix4(l, j), i.normal.toArray(g, n), g[n + 3] = i.constant;
          }
        }k.value = g, k.needsUpdate = !0;
      }return c.numPlanes = f, g;
    }var c = this,
        d = null,
        e = 0,
        f = !1,
        h = !1,
        i = new ca(),
        j = new g(),
        k = { value: null, needsUpdate: !1 };this.uniform = k, this.numPlanes = 0, this.numIntersection = 0, this.init = function (a, c, g) {
      var h = 0 !== a.length || c || 0 !== e || f;return f = c, d = b(a, g, 0), e = a.length, h;
    }, this.beginShadows = function () {
      h = !0, b(null);
    }, this.endShadows = function () {
      h = !1, a();
    }, this.setState = function (c, g, i, j, l, m) {
      if (!f || null === c || 0 === c.length || h && !i) h ? b(null) : a();else {
        var n = h ? 0 : e,
            o = 4 * n,
            p = l.clippingState || null;k.value = p, p = b(c, j, o, m);for (var q = 0; q !== o; ++q) {
          p[q] = d[q];
        }l.clippingState = p, this.numIntersection = g ? this.numPlanes : 0, this.numPlanes += n;
      }
    };
  }function tb(a, b) {
    function c(c) {
      var d;if (c === Dc) return a.REPEAT;if (c === Ec) return a.CLAMP_TO_EDGE;if (c === Fc) return a.MIRRORED_REPEAT;if (c === Gc) return a.NEAREST;if (c === Hc) return a.NEAREST_MIPMAP_NEAREST;if (c === Ic) return a.NEAREST_MIPMAP_LINEAR;if (c === Jc) return a.LINEAR;if (c === Kc) return a.LINEAR_MIPMAP_NEAREST;if (c === Lc) return a.LINEAR_MIPMAP_LINEAR;if (c === Mc) return a.UNSIGNED_BYTE;if (c === Uc) return a.UNSIGNED_SHORT_4_4_4_4;if (c === Vc) return a.UNSIGNED_SHORT_5_5_5_1;if (c === Wc) return a.UNSIGNED_SHORT_5_6_5;if (c === Nc) return a.BYTE;if (c === Oc) return a.SHORT;if (c === Pc) return a.UNSIGNED_SHORT;if (c === Qc) return a.INT;if (c === Rc) return a.UNSIGNED_INT;if (c === Sc) return a.FLOAT;if (c === Tc && null !== (d = b.get("OES_texture_half_float"))) return d.HALF_FLOAT_OES;if (c === Yc) return a.ALPHA;if (c === Zc) return a.RGB;if (c === $c) return a.RGBA;if (c === _c) return a.LUMINANCE;if (c === ad) return a.LUMINANCE_ALPHA;if (c === bd) return a.DEPTH_COMPONENT;if (c === cd) return a.DEPTH_STENCIL;if (c === Rb) return a.FUNC_ADD;if (c === Sb) return a.FUNC_SUBTRACT;if (c === Tb) return a.FUNC_REVERSE_SUBTRACT;if (c === Wb) return a.ZERO;if (c === Xb) return a.ONE;if (c === Yb) return a.SRC_COLOR;if (c === Zb) return a.ONE_MINUS_SRC_COLOR;if (c === $b) return a.SRC_ALPHA;if (c === _b) return a.ONE_MINUS_SRC_ALPHA;if (c === ac) return a.DST_ALPHA;if (c === bc) return a.ONE_MINUS_DST_ALPHA;if (c === cc) return a.DST_COLOR;if (c === dc) return a.ONE_MINUS_DST_COLOR;if (c === ec) return a.SRC_ALPHA_SATURATE;if ((c === dd || c === ed || c === fd || c === gd) && null !== (d = b.get("WEBGL_compressed_texture_s3tc"))) {
        if (c === dd) return d.COMPRESSED_RGB_S3TC_DXT1_EXT;if (c === ed) return d.COMPRESSED_RGBA_S3TC_DXT1_EXT;if (c === fd) return d.COMPRESSED_RGBA_S3TC_DXT3_EXT;if (c === gd) return d.COMPRESSED_RGBA_S3TC_DXT5_EXT;
      }if ((c === hd || c === id || c === jd || c === kd) && null !== (d = b.get("WEBGL_compressed_texture_pvrtc"))) {
        if (c === hd) return d.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if (c === id) return d.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if (c === jd) return d.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if (c === kd) return d.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
      }if (c === ld && null !== (d = b.get("WEBGL_compressed_texture_etc1"))) return d.COMPRESSED_RGB_ETC1_WEBGL;if ((c === Ub || c === Vb) && null !== (d = b.get("EXT_blend_minmax"))) {
        if (c === Ub) return d.MIN_EXT;if (c === Vb) return d.MAX_EXT;
      }return c === Xc && null !== (d = b.get("WEBGL_depth_texture")) ? d.UNSIGNED_INT_24_8_WEBGL : 0;
    }return { convert: c };
  }function ub(a) {
    function b() {
      return null === ba ? qa : 1;
    }function c() {
      Ea = new rb(Ca), Ea.get("WEBGL_depth_texture"), Ea.get("OES_texture_float"), Ea.get("OES_texture_float_linear"), Ea.get("OES_texture_half_float"), Ea.get("OES_texture_half_float_linear"), Ea.get("OES_standard_derivatives"), Ea.get("OES_element_index_uint"), Ea.get("ANGLE_instanced_arrays"), bb = new tb(Ca, Ea), Fa = new nb(Ca, Ea, a), Ga = new mb(Ca, Ea, bb), Ga.scissor(la.copy(sa).multiplyScalar(qa)), Ga.viewport(ka.copy(ra).multiplyScalar(qa)), Ha = new lb(), Ia = new kb(Ca, Ea, Ga, Ha, Fa, bb, Aa), Ja = new fa(Ca), La = new Ta(Ca, Ja, Aa), Ma = new Wa(La, Ba), Ya = new Qa(Ca), Pa = new jb(_, Ea, Fa), Na = new Va(), Ua = new Oa(), Xa = new Ka(_, Ga, La, Q), Za = new Sa(Ca, Ea, Ba), $a = new Ra(Ca, Ea, Ba), _a = new W(_, Ca, Ga, Ia, Fa), ab = new Y(_, Ca, Ga, Ia, Fa), _.info.programs = Pa.programs, _.context = Ca, _.capabilities = Fa, _.extensions = Ea, _.properties = Ha, _.renderLists = Ua, _.state = Ga;
    }function e(a) {
      a.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), aa = !0;
    }function g() {
      console.log("THREE.WebGLRenderer: Context Restored."), aa = !1, c();
    }function h(a) {
      var b = a.target;b.removeEventListener("dispose", h), j(b);
    }function j(a) {
      l(a), Ha.remove(a);
    }function l(a) {
      var b = Ha.get(a).program;a.program = void 0, void 0 !== b && Pa.releaseProgram(b);
    }function m(a, b, c) {
      a.render(function (a) {
        _.renderBufferImmediate(a, b, c);
      });
    }function n(a, b, c, d) {
      if (c && c.isInstancedBufferGeometry && null === Ea.get("ANGLE_instanced_arrays")) return void console.error("THREE.WebGLRenderer.setupVertexAttributes: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");void 0 === d && (d = 0), Ga.initAttributes();var e = c.attributes,
          f = b.getAttributes(),
          g = a.defaultAttributeValues;for (var h in f) {
        var i = f[h];if (i >= 0) {
          var j = e[h];if (void 0 !== j) {
            var k = j.normalized,
                l = j.itemSize,
                m = Ja.get(j);if (void 0 === m) continue;var n = m.buffer,
                o = m.type,
                p = m.bytesPerElement;if (j.isInterleavedBufferAttribute) {
              var q = j.data,
                  r = q.stride,
                  s = j.offset;q && q.isInstancedInterleavedBuffer ? (Ga.enableAttributeAndDivisor(i, q.meshPerAttribute), void 0 === c.maxInstancedCount && (c.maxInstancedCount = q.meshPerAttribute * q.count)) : Ga.enableAttribute(i), Ca.bindBuffer(Ca.ARRAY_BUFFER, n), Ca.vertexAttribPointer(i, l, o, k, r * p, (d * r + s) * p);
            } else j.isInstancedBufferAttribute ? (Ga.enableAttributeAndDivisor(i, j.meshPerAttribute), void 0 === c.maxInstancedCount && (c.maxInstancedCount = j.meshPerAttribute * j.count)) : Ga.enableAttribute(i), Ca.bindBuffer(Ca.ARRAY_BUFFER, n), Ca.vertexAttribPointer(i, l, o, k, 0, d * l * p);
          } else if (void 0 !== g) {
            var t = g[h];if (void 0 !== t) switch (t.length) {case 2:
                Ca.vertexAttrib2fv(i, t);break;case 3:
                Ca.vertexAttrib3fv(i, t);break;case 4:
                Ca.vertexAttrib4fv(i, t);break;default:
                Ca.vertexAttrib1fv(i, t);}
          }
        }
      }Ga.disableUnusedAttributes();
    }function o() {
      if (!eb) {
        var a = cb.getDevice();a && a.isPresenting ? a.requestAnimationFrame(p) : window.requestAnimationFrame(p), eb = !0;
      }
    }function p(a) {
      null !== fb && fb(a);var b = cb.getDevice();b && b.isPresenting ? b.requestAnimationFrame(p) : window.requestAnimationFrame(p);
    }function q(a, b, c) {
      if (!1 !== a.visible) {
        if (a.layers.test(b.layers)) if (a.isLight) U.push(a), a.castShadow && V.push(a);else if (a.isSprite) a.frustumCulled && !ua.intersectsSprite(a) || Z.push(a);else if (a.isLensFlare) $.push(a);else if (a.isImmediateRenderObject) c && za.setFromMatrixPosition(a.matrixWorld).applyMatrix4(ya), X.push(a, null, a.material, za.z, null);else if ((a.isMesh || a.isLine || a.isPoints) && (a.isSkinnedMesh && a.skeleton.update(), !a.frustumCulled || ua.intersectsObject(a))) {
          c && za.setFromMatrixPosition(a.matrixWorld).applyMatrix4(ya);var d = Ma.update(a),
              e = a.material;if (Array.isArray(e)) for (var f = d.groups, g = 0, h = f.length; g < h; g++) {
            var i = f[g],
                j = e[i.materialIndex];j && j.visible && X.push(a, d, j, za.z, i);
          } else e.visible && X.push(a, d, e, za.z, null);
        }for (var k = a.children, g = 0, h = k.length; g < h; g++) {
          q(k[g], b, c);
        }
      }
    }function r(a, b, c, d) {
      for (var e = 0, f = a.length; e < f; e++) {
        var g = a[e],
            h = g.object,
            i = g.geometry,
            j = void 0 === d ? g.material : d,
            k = g.group;if (c.isArrayCamera) {
          ja = c;for (var l = c.cameras, m = 0, n = l.length; m < n; m++) {
            var o = l[m];if (h.layers.test(o.layers)) {
              var p = o.bounds,
                  q = p.x * oa,
                  r = p.y * pa,
                  t = p.z * oa,
                  u = p.w * pa;Ga.viewport(ka.set(q, r, t, u).multiplyScalar(qa)), s(h, b, o, i, j, k);
            }
          }
        } else ja = null, s(h, b, c, i, j, k);
      }
    }function s(a, b, c, d, e, f) {
      if (a.onBeforeRender(_, b, c, d, e, f), a.modelViewMatrix.multiplyMatrices(c.matrixWorldInverse, a.matrixWorld), a.normalMatrix.getNormalMatrix(a.modelViewMatrix), a.isImmediateRenderObject) {
        var g = a.isMesh && a.matrixWorld.determinant() < 0;Ga.setMaterial(e, g);var h = u(c, b.fog, e, a);ha = "", m(a, h, e);
      } else _.renderBufferDirect(c, b.fog, d, e, a, f);a.onAfterRender(_, b, c, d, e, f);
    }function t(a, b, c) {
      var d = Ha.get(a),
          e = Pa.getParameters(a, Na.state, V, b, va.numPlanes, va.numIntersection, c),
          f = Pa.getProgramCode(a, e),
          g = d.program,
          i = !0;if (void 0 === g) a.addEventListener("dispose", h);else if (g.code !== f) l(a);else {
        if (void 0 !== e.shaderID) return;i = !1;
      }if (i) {
        if (e.shaderID) {
          var j = Nf[e.shaderID];d.shader = { name: a.type, uniforms: Jd.clone(j.uniforms), vertexShader: j.vertexShader, fragmentShader: j.fragmentShader };
        } else d.shader = { name: a.type, uniforms: a.uniforms, vertexShader: a.vertexShader, fragmentShader: a.fragmentShader };a.onBeforeCompile(d.shader), g = Pa.acquireProgram(a, d.shader, e, f), d.program = g, a.program = g;
      }var k = g.getAttributes();if (a.morphTargets) {
        a.numSupportedMorphTargets = 0;for (var m = 0; m < _.maxMorphTargets; m++) {
          k["morphTarget" + m] >= 0 && a.numSupportedMorphTargets++;
        }
      }if (a.morphNormals) {
        a.numSupportedMorphNormals = 0;for (var m = 0; m < _.maxMorphNormals; m++) {
          k["morphNormal" + m] >= 0 && a.numSupportedMorphNormals++;
        }
      }var n = d.shader.uniforms;(a.isShaderMaterial || a.isRawShaderMaterial) && !0 !== a.clipping || (d.numClippingPlanes = va.numPlanes, d.numIntersection = va.numIntersection, n.clippingPlanes = va.uniform), d.fog = b, d.lightsHash = Na.state.hash, a.lights && (n.ambientLightColor.value = Na.state.ambient, n.directionalLights.value = Na.state.directional, n.spotLights.value = Na.state.spot, n.rectAreaLights.value = Na.state.rectArea, n.pointLights.value = Na.state.point, n.hemisphereLights.value = Na.state.hemi, n.directionalShadowMap.value = Na.state.directionalShadowMap, n.directionalShadowMatrix.value = Na.state.directionalShadowMatrix, n.spotShadowMap.value = Na.state.spotShadowMap, n.spotShadowMatrix.value = Na.state.spotShadowMatrix, n.pointShadowMap.value = Na.state.pointShadowMap, n.pointShadowMatrix.value = Na.state.pointShadowMatrix);var o = d.program.getUniforms(),
          p = T.seqWithValue(o.seq, n);d.uniformsList = p;
    }function u(a, b, c, d) {
      na = 0;var e = Ha.get(c);if (wa && (xa || a !== ia)) {
        var f = a === ia && c.id === ga;va.setState(c.clippingPlanes, c.clipIntersection, c.clipShadows, a, e, f);
      }!1 === c.needsUpdate && (void 0 === e.program ? c.needsUpdate = !0 : c.fog && e.fog !== b ? c.needsUpdate = !0 : c.lights && e.lightsHash !== Na.state.hash ? c.needsUpdate = !0 : void 0 === e.numClippingPlanes || e.numClippingPlanes === va.numPlanes && e.numIntersection === va.numIntersection || (c.needsUpdate = !0)), c.needsUpdate && (t(c, b, d), c.needsUpdate = !1);var g = !1,
          h = !1,
          i = !1,
          j = e.program,
          l = j.getUniforms(),
          m = e.shader.uniforms;if (Ga.useProgram(j.program) && (g = !0, h = !0, i = !0), c.id !== ga && (ga = c.id, h = !0), g || a !== ia) {
        if (l.setValue(Ca, "projectionMatrix", a.projectionMatrix), Fa.logarithmicDepthBuffer && l.setValue(Ca, "logDepthBufFC", 2 / (Math.log(a.far + 1) / Math.LN2)), ia !== (ja || a) && (ia = ja || a, h = !0, i = !0), c.isShaderMaterial || c.isMeshPhongMaterial || c.isMeshStandardMaterial || c.envMap) {
          var n = l.map.cameraPosition;void 0 !== n && n.setValue(Ca, za.setFromMatrixPosition(a.matrixWorld));
        }(c.isMeshPhongMaterial || c.isMeshLambertMaterial || c.isMeshBasicMaterial || c.isMeshStandardMaterial || c.isShaderMaterial || c.skinning) && l.setValue(Ca, "viewMatrix", a.matrixWorldInverse);
      }if (c.skinning) {
        l.setOptional(Ca, d, "bindMatrix"), l.setOptional(Ca, d, "bindMatrixInverse");var o = d.skeleton;if (o) {
          var p = o.bones;if (Fa.floatVertexTextures) {
            if (void 0 === o.boneTexture) {
              var q = Math.sqrt(4 * p.length);q = yd.ceilPowerOfTwo(q), q = Math.max(q, 4);var r = new Float32Array(q * q * 4);r.set(o.boneMatrices);var s = new k(r, q, q, $c, Sc);o.boneMatrices = r, o.boneTexture = s, o.boneTextureSize = q;
            }l.setValue(Ca, "boneTexture", o.boneTexture), l.setValue(Ca, "boneTextureSize", o.boneTextureSize);
          } else l.setOptional(Ca, o, "boneMatrices");
        }
      }return h && (l.setValue(Ca, "toneMappingExposure", _.toneMappingExposure), l.setValue(Ca, "toneMappingWhitePoint", _.toneMappingWhitePoint), c.lights && I(m, i), b && c.fog && z(m, b), c.isMeshBasicMaterial ? v(m, c) : c.isMeshLambertMaterial ? (v(m, c), A(m, c)) : c.isMeshPhongMaterial ? (v(m, c), c.isMeshToonMaterial ? C(m, c) : B(m, c)) : c.isMeshStandardMaterial ? (v(m, c), c.isMeshPhysicalMaterial ? E(m, c) : D(m, c)) : c.isMeshDepthMaterial ? (v(m, c), F(m, c)) : c.isMeshDistanceMaterial ? (v(m, c), G(m, c)) : c.isMeshNormalMaterial ? (v(m, c), H(m, c)) : c.isLineBasicMaterial ? (w(m, c), c.isLineDashedMaterial && x(m, c)) : c.isPointsMaterial ? y(m, c) : c.isShadowMaterial && (m.color.value = c.color, m.opacity.value = c.opacity), void 0 !== m.ltcMat && (m.ltcMat.value = Id.LTC_MAT_TEXTURE), void 0 !== m.ltcMag && (m.ltcMag.value = Id.LTC_MAG_TEXTURE), T.upload(Ca, e.uniformsList, m, _)), l.setValue(Ca, "modelViewMatrix", d.modelViewMatrix), l.setValue(Ca, "normalMatrix", d.normalMatrix), l.setValue(Ca, "modelMatrix", d.matrixWorld), j;
    }function v(a, b) {
      a.opacity.value = b.opacity, b.color && (a.diffuse.value = b.color), b.emissive && a.emissive.value.copy(b.emissive).multiplyScalar(b.emissiveIntensity), b.map && (a.map.value = b.map), b.alphaMap && (a.alphaMap.value = b.alphaMap), b.specularMap && (a.specularMap.value = b.specularMap), b.envMap && (a.envMap.value = b.envMap, a.flipEnvMap.value = b.envMap && b.envMap.isCubeTexture ? -1 : 1, a.reflectivity.value = b.reflectivity, a.refractionRatio.value = b.refractionRatio), b.lightMap && (a.lightMap.value = b.lightMap, a.lightMapIntensity.value = b.lightMapIntensity), b.aoMap && (a.aoMap.value = b.aoMap, a.aoMapIntensity.value = b.aoMapIntensity);var c;if (b.map ? c = b.map : b.specularMap ? c = b.specularMap : b.displacementMap ? c = b.displacementMap : b.normalMap ? c = b.normalMap : b.bumpMap ? c = b.bumpMap : b.roughnessMap ? c = b.roughnessMap : b.metalnessMap ? c = b.metalnessMap : b.alphaMap ? c = b.alphaMap : b.emissiveMap && (c = b.emissiveMap), void 0 !== c) {
        if (c.isWebGLRenderTarget && (c = c.texture), !0 === c.matrixAutoUpdate) {
          var d = c.offset,
              e = c.repeat,
              f = c.rotation,
              g = c.center;c.matrix.setUvTransform(d.x, d.y, e.x, e.y, f, g.x, g.y);
        }a.uvTransform.value.copy(c.matrix);
      }
    }function w(a, b) {
      a.diffuse.value = b.color, a.opacity.value = b.opacity;
    }function x(a, b) {
      a.dashSize.value = b.dashSize, a.totalSize.value = b.dashSize + b.gapSize, a.scale.value = b.scale;
    }function y(a, b) {
      if (a.diffuse.value = b.color, a.opacity.value = b.opacity, a.size.value = b.size * qa, a.scale.value = .5 * pa, a.map.value = b.map, null !== b.map) {
        if (!0 === b.map.matrixAutoUpdate) {
          var c = b.map.offset,
              d = b.map.repeat,
              e = b.map.rotation,
              f = b.map.center;b.map.matrix.setUvTransform(c.x, c.y, d.x, d.y, e, f.x, f.y);
        }a.uvTransform.value.copy(b.map.matrix);
      }
    }function z(a, b) {
      a.fogColor.value = b.color, b.isFog ? (a.fogNear.value = b.near, a.fogFar.value = b.far) : b.isFogExp2 && (a.fogDensity.value = b.density);
    }function A(a, b) {
      b.emissiveMap && (a.emissiveMap.value = b.emissiveMap);
    }function B(a, b) {
      a.specular.value = b.specular, a.shininess.value = Math.max(b.shininess, 1e-4), b.emissiveMap && (a.emissiveMap.value = b.emissiveMap), b.bumpMap && (a.bumpMap.value = b.bumpMap, a.bumpScale.value = b.bumpScale), b.normalMap && (a.normalMap.value = b.normalMap, a.normalScale.value.copy(b.normalScale)), b.displacementMap && (a.displacementMap.value = b.displacementMap, a.displacementScale.value = b.displacementScale, a.displacementBias.value = b.displacementBias);
    }function C(a, b) {
      B(a, b), b.gradientMap && (a.gradientMap.value = b.gradientMap);
    }function D(a, b) {
      a.roughness.value = b.roughness, a.metalness.value = b.metalness, b.roughnessMap && (a.roughnessMap.value = b.roughnessMap), b.metalnessMap && (a.metalnessMap.value = b.metalnessMap), b.emissiveMap && (a.emissiveMap.value = b.emissiveMap), b.bumpMap && (a.bumpMap.value = b.bumpMap, a.bumpScale.value = b.bumpScale), b.normalMap && (a.normalMap.value = b.normalMap, a.normalScale.value.copy(b.normalScale)), b.displacementMap && (a.displacementMap.value = b.displacementMap, a.displacementScale.value = b.displacementScale, a.displacementBias.value = b.displacementBias), b.envMap && (a.envMapIntensity.value = b.envMapIntensity);
    }function E(a, b) {
      a.clearCoat.value = b.clearCoat, a.clearCoatRoughness.value = b.clearCoatRoughness, D(a, b);
    }function F(a, b) {
      b.displacementMap && (a.displacementMap.value = b.displacementMap, a.displacementScale.value = b.displacementScale, a.displacementBias.value = b.displacementBias);
    }function G(a, b) {
      b.displacementMap && (a.displacementMap.value = b.displacementMap, a.displacementScale.value = b.displacementScale, a.displacementBias.value = b.displacementBias), a.referencePosition.value.copy(b.referencePosition), a.nearDistance.value = b.nearDistance, a.farDistance.value = b.farDistance;
    }function H(a, b) {
      b.bumpMap && (a.bumpMap.value = b.bumpMap, a.bumpScale.value = b.bumpScale), b.normalMap && (a.normalMap.value = b.normalMap, a.normalScale.value.copy(b.normalScale)), b.displacementMap && (a.displacementMap.value = b.displacementMap, a.displacementScale.value = b.displacementScale, a.displacementBias.value = b.displacementBias);
    }function I(a, b) {
      a.ambientLightColor.needsUpdate = b, a.directionalLights.needsUpdate = b, a.pointLights.needsUpdate = b, a.spotLights.needsUpdate = b, a.rectAreaLights.needsUpdate = b, a.hemisphereLights.needsUpdate = b;
    }function J() {
      var a = na;return a >= Fa.maxTextures && console.warn("THREE.WebGLRenderer: Trying to use " + a + " texture units while this GPU supports only " + Fa.maxTextures), na += 1, a;
    }console.log("THREE.WebGLRenderer", zb), a = a || {};var K = void 0 !== a.canvas ? a.canvas : document.createElementNS("http://www.w3.org/1999/xhtml", "canvas"),
        L = void 0 !== a.context ? a.context : null,
        M = void 0 !== a.alpha && a.alpha,
        N = void 0 === a.depth || a.depth,
        O = void 0 === a.stencil || a.stencil,
        P = void 0 !== a.antialias && a.antialias,
        Q = void 0 === a.premultipliedAlpha || a.premultipliedAlpha,
        R = void 0 !== a.preserveDrawingBuffer && a.preserveDrawingBuffer,
        S = void 0 !== a.powerPreference ? a.powerPreference : "default",
        U = [],
        V = [],
        X = null,
        Z = [],
        $ = [];this.domElement = K, this.context = null, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this.gammaFactor = 2, this.gammaInput = !1, this.gammaOutput = !1, this.physicallyCorrectLights = !1, this.toneMapping = rc, this.toneMappingExposure = 1, this.toneMappingWhitePoint = 1, this.maxMorphTargets = 8, this.maxMorphNormals = 4;var _ = this,
        aa = !1,
        ba = null,
        ca = null,
        ga = -1,
        ha = "",
        ia = null,
        ja = null,
        ka = new i(),
        la = new i(),
        ma = null,
        na = 0,
        oa = K.width,
        pa = K.height,
        qa = 1,
        ra = new i(0, 0, oa, pa),
        sa = new i(0, 0, oa, pa),
        ta = !1,
        ua = new da(),
        va = new sb(),
        wa = !1,
        xa = !1,
        ya = new d(),
        za = new f(),
        Aa = { geometries: 0, textures: 0 },
        Ba = { frame: 0, calls: 0, vertices: 0, faces: 0, points: 0 };this.info = { render: Ba, memory: Aa, programs: null };var Ca;try {
      var Da = { alpha: M, depth: N, stencil: O, antialias: P, premultipliedAlpha: Q, preserveDrawingBuffer: R, powerPreference: S };if (K.addEventListener("webglcontextlost", e, !1), K.addEventListener("webglcontextrestored", g, !1), null === (Ca = L || K.getContext("webgl", Da) || K.getContext("experimental-webgl", Da))) throw null !== K.getContext("webgl") ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");void 0 === Ca.getShaderPrecisionFormat && (Ca.getShaderPrecisionFormat = function () {
        return { rangeMin: 1, rangeMax: 1, precision: 1 };
      });
    } catch (a) {
      console.error("THREE.WebGLRenderer: " + a.message);
    }var Ea, Fa, Ga, Ha, Ia, Ja, La, Ma, Na, Pa, Ua, Xa, Ya, Za, $a, _a, ab, bb;c();var cb = new qb(_);this.vr = cb;var db = new ea(_, Ma, Fa.maxTextureSize);this.shadowMap = db, this.getContext = function () {
      return Ca;
    }, this.getContextAttributes = function () {
      return Ca.getContextAttributes();
    }, this.forceContextLoss = function () {
      var a = Ea.get("WEBGL_lose_context");a && a.loseContext();
    }, this.forceContextRestore = function () {
      var a = Ea.get("WEBGL_lose_context");a && a.restoreContext();
    }, this.getPixelRatio = function () {
      return qa;
    }, this.setPixelRatio = function (a) {
      void 0 !== a && (qa = a, this.setSize(oa, pa, !1));
    }, this.getSize = function () {
      return { width: oa, height: pa };
    }, this.setSize = function (a, b, c) {
      var d = cb.getDevice();if (d && d.isPresenting) return void console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");oa = a, pa = b, K.width = a * qa, K.height = b * qa, !1 !== c && (K.style.width = a + "px", K.style.height = b + "px"), this.setViewport(0, 0, a, b);
    }, this.getDrawingBufferSize = function () {
      return { width: oa * qa, height: pa * qa };
    }, this.setDrawingBufferSize = function (a, b, c) {
      oa = a, pa = b, qa = c, K.width = a * c, K.height = b * c, this.setViewport(0, 0, a, b);
    }, this.setViewport = function (a, b, c, d) {
      ra.set(a, pa - b - d, c, d), Ga.viewport(ka.copy(ra).multiplyScalar(qa));
    }, this.setScissor = function (a, b, c, d) {
      sa.set(a, pa - b - d, c, d), Ga.scissor(la.copy(sa).multiplyScalar(qa));
    }, this.setScissorTest = function (a) {
      Ga.setScissorTest(ta = a);
    }, this.getClearColor = function () {
      return Xa.getClearColor();
    }, this.setClearColor = function () {
      Xa.setClearColor.apply(Xa, arguments);
    }, this.getClearAlpha = function () {
      return Xa.getClearAlpha();
    }, this.setClearAlpha = function () {
      Xa.setClearAlpha.apply(Xa, arguments);
    }, this.clear = function (a, b, c) {
      var d = 0;(void 0 === a || a) && (d |= Ca.COLOR_BUFFER_BIT), (void 0 === b || b) && (d |= Ca.DEPTH_BUFFER_BIT), (void 0 === c || c) && (d |= Ca.STENCIL_BUFFER_BIT), Ca.clear(d);
    }, this.clearColor = function () {
      this.clear(!0, !1, !1);
    }, this.clearDepth = function () {
      this.clear(!1, !0, !1);
    }, this.clearStencil = function () {
      this.clear(!1, !1, !0);
    }, this.clearTarget = function (a, b, c, d) {
      this.setRenderTarget(a), this.clear(b, c, d);
    }, this.dispose = function () {
      K.removeEventListener("webglcontextlost", e, !1), K.removeEventListener("webglcontextrestored", g, !1), Ua.dispose(), cb.dispose();
    }, this.renderBufferImmediate = function (a, b, c) {
      Ga.initAttributes();var d = Ha.get(a);a.hasPositions && !d.position && (d.position = Ca.createBuffer()), a.hasNormals && !d.normal && (d.normal = Ca.createBuffer()), a.hasUvs && !d.uv && (d.uv = Ca.createBuffer()), a.hasColors && !d.color && (d.color = Ca.createBuffer());var e = b.getAttributes();if (a.hasPositions && (Ca.bindBuffer(Ca.ARRAY_BUFFER, d.position), Ca.bufferData(Ca.ARRAY_BUFFER, a.positionArray, Ca.DYNAMIC_DRAW), Ga.enableAttribute(e.position), Ca.vertexAttribPointer(e.position, 3, Ca.FLOAT, !1, 0, 0)), a.hasNormals) {
        if (Ca.bindBuffer(Ca.ARRAY_BUFFER, d.normal), !c.isMeshPhongMaterial && !c.isMeshStandardMaterial && !c.isMeshNormalMaterial && !0 === c.flatShading) for (var f = 0, g = 3 * a.count; f < g; f += 9) {
          var h = a.normalArray,
              i = (h[f + 0] + h[f + 3] + h[f + 6]) / 3,
              j = (h[f + 1] + h[f + 4] + h[f + 7]) / 3,
              k = (h[f + 2] + h[f + 5] + h[f + 8]) / 3;h[f + 0] = i, h[f + 1] = j, h[f + 2] = k, h[f + 3] = i, h[f + 4] = j, h[f + 5] = k, h[f + 6] = i, h[f + 7] = j, h[f + 8] = k;
        }Ca.bufferData(Ca.ARRAY_BUFFER, a.normalArray, Ca.DYNAMIC_DRAW), Ga.enableAttribute(e.normal), Ca.vertexAttribPointer(e.normal, 3, Ca.FLOAT, !1, 0, 0);
      }a.hasUvs && c.map && (Ca.bindBuffer(Ca.ARRAY_BUFFER, d.uv), Ca.bufferData(Ca.ARRAY_BUFFER, a.uvArray, Ca.DYNAMIC_DRAW), Ga.enableAttribute(e.uv), Ca.vertexAttribPointer(e.uv, 2, Ca.FLOAT, !1, 0, 0)), a.hasColors && c.vertexColors !== Kb && (Ca.bindBuffer(Ca.ARRAY_BUFFER, d.color), Ca.bufferData(Ca.ARRAY_BUFFER, a.colorArray, Ca.DYNAMIC_DRAW), Ga.enableAttribute(e.color), Ca.vertexAttribPointer(e.color, 3, Ca.FLOAT, !1, 0, 0)), Ga.disableUnusedAttributes(), Ca.drawArrays(Ca.TRIANGLES, 0, a.count), a.count = 0;
    }, this.renderBufferDirect = function (a, c, d, e, f, g) {
      var h = f.isMesh && f.matrixWorld.determinant() < 0;Ga.setMaterial(e, h);var i = u(a, c, e, f),
          j = d.id + "_" + i.id + "_" + (!0 === e.wireframe),
          k = !1;j !== ha && (ha = j, k = !0), f.morphTargetInfluences && (Ya.update(f, d, e, i), k = !0);var l = d.index,
          m = d.attributes.position,
          o = 1;!0 === e.wireframe && (l = La.getWireframeAttribute(d), o = 2);var p,
          q = Za;null !== l && (p = Ja.get(l), q = $a, q.setIndex(p)), k && (n(e, i, d), null !== l && Ca.bindBuffer(Ca.ELEMENT_ARRAY_BUFFER, p.buffer));var r = 0;null !== l ? r = l.count : void 0 !== m && (r = m.count);var s = d.drawRange.start * o,
          t = d.drawRange.count * o,
          v = null !== g ? g.start * o : 0,
          w = null !== g ? g.count * o : 1 / 0,
          x = Math.max(s, v),
          y = Math.min(r, s + t, v + w) - 1,
          z = Math.max(0, y - x + 1);if (0 !== z) {
        if (f.isMesh) {
          if (!0 === e.wireframe) Ga.setLineWidth(e.wireframeLinewidth * b()), q.setMode(Ca.LINES);else switch (f.drawMode) {case md:
              q.setMode(Ca.TRIANGLES);break;case nd:
              q.setMode(Ca.TRIANGLE_STRIP);break;case od:
              q.setMode(Ca.TRIANGLE_FAN);}
        } else if (f.isLine) {
          var A = e.linewidth;void 0 === A && (A = 1), Ga.setLineWidth(A * b()), f.isLineSegments ? q.setMode(Ca.LINES) : f.isLineLoop ? q.setMode(Ca.LINE_LOOP) : q.setMode(Ca.LINE_STRIP);
        } else f.isPoints && q.setMode(Ca.POINTS);d && d.isInstancedBufferGeometry ? d.maxInstancedCount > 0 && q.renderInstances(d, x, z) : q.render(x, z);
      }
    }, this.compile = function (a, b) {
      U.length = 0, V.length = 0, a.traverse(function (a) {
        a.isLight && (U.push(a), a.castShadow && V.push(a));
      }), Na.setup(U, V, b), a.traverse(function (b) {
        if (b.material) if (Array.isArray(b.material)) for (var c = 0; c < b.material.length; c++) {
          t(b.material[c], a.fog, b);
        } else t(b.material, a.fog, b);
      });
    };var eb = !1,
        fb = null;this.animate = function (a) {
      fb = a, o();
    }, this.render = function (a, b, c, d) {
      if (!b || !b.isCamera) return void console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");if (!aa) {
        ha = "", ga = -1, ia = null, !0 === a.autoUpdate && a.updateMatrixWorld(), null === b.parent && b.updateMatrixWorld(), cb.enabled && (b = cb.getCamera(b)), ya.multiplyMatrices(b.projectionMatrix, b.matrixWorldInverse), ua.setFromMatrix(ya), U.length = 0, V.length = 0, Z.length = 0, $.length = 0, xa = this.localClippingEnabled, wa = va.init(this.clippingPlanes, xa, b), X = Ua.get(a, b), X.init(), q(a, b, _.sortObjects), !0 === _.sortObjects && X.sort(), Ia.updateVideoTextures(), wa && va.beginShadows(), db.render(V, a, b), Na.setup(U, V, b), wa && va.endShadows(), Ba.frame++, Ba.calls = 0, Ba.vertices = 0, Ba.faces = 0, Ba.points = 0, void 0 === c && (c = null), this.setRenderTarget(c), Xa.render(X, a, b, d);var e = X.opaque,
            f = X.transparent;if (a.overrideMaterial) {
          var g = a.overrideMaterial;e.length && r(e, a, b, g), f.length && r(f, a, b, g);
        } else e.length && r(e, a, b), f.length && r(f, a, b);ab.render(Z, a, b), _a.render($, a, b, ka), c && Ia.updateRenderTargetMipmap(c), Ga.buffers.depth.setTest(!0), Ga.buffers.depth.setMask(!0), Ga.buffers.color.setMask(!0), Ga.setPolygonOffset(!1), cb.enabled && cb.submitFrame();
      }
    }, this.setFaceCulling = function (a, b) {
      Ga.setCullFace(a), Ga.setFlipSided(b === Db);
    }, this.allocTextureUnit = J, this.setTexture2D = function () {
      var a = !1;return function (b, c) {
        b && b.isWebGLRenderTarget && (a || (console.warn("THREE.WebGLRenderer.setTexture2D: don't use render targets as textures. Use their .texture property instead."), a = !0), b = b.texture), Ia.setTexture2D(b, c);
      };
    }(), this.setTexture = function () {
      var a = !1;return function (b, c) {
        a || (console.warn("THREE.WebGLRenderer: .setTexture is deprecated, use setTexture2D instead."), a = !0), Ia.setTexture2D(b, c);
      };
    }(), this.setTextureCube = function () {
      var a = !1;return function (b, c) {
        b && b.isWebGLRenderTargetCube && (a || (console.warn("THREE.WebGLRenderer.setTextureCube: don't use cube render targets as textures. Use their .texture property instead."), a = !0), b = b.texture), b && b.isCubeTexture || Array.isArray(b.image) && 6 === b.image.length ? Ia.setTextureCube(b, c) : Ia.setTextureCubeDynamic(b, c);
      };
    }(), this.getRenderTarget = function () {
      return ba;
    }, this.setRenderTarget = function (a) {
      ba = a, a && void 0 === Ha.get(a).__webglFramebuffer && Ia.setupRenderTarget(a);var b = null,
          c = !1;if (a) {
        var d = Ha.get(a).__webglFramebuffer;a.isWebGLRenderTargetCube ? (b = d[a.activeCubeFace], c = !0) : b = d, ka.copy(a.viewport), la.copy(a.scissor), ma = a.scissorTest;
      } else ka.copy(ra).multiplyScalar(qa), la.copy(sa).multiplyScalar(qa), ma = ta;if (ca !== b && (Ca.bindFramebuffer(Ca.FRAMEBUFFER, b), ca = b), Ga.viewport(ka), Ga.scissor(la), Ga.setScissorTest(ma), c) {
        var e = Ha.get(a.texture);Ca.framebufferTexture2D(Ca.FRAMEBUFFER, Ca.COLOR_ATTACHMENT0, Ca.TEXTURE_CUBE_MAP_POSITIVE_X + a.activeCubeFace, e.__webglTexture, a.activeMipMapLevel);
      }
    }, this.readRenderTargetPixels = function (a, b, c, d, e, f) {
      if (!a || !a.isWebGLRenderTarget) return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");var g = Ha.get(a).__webglFramebuffer;if (g) {
        var h = !1;g !== ca && (Ca.bindFramebuffer(Ca.FRAMEBUFFER, g), h = !0);try {
          var i = a.texture,
              j = i.format,
              k = i.type;if (j !== $c && bb.convert(j) !== Ca.getParameter(Ca.IMPLEMENTATION_COLOR_READ_FORMAT)) return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");if (!(k === Mc || bb.convert(k) === Ca.getParameter(Ca.IMPLEMENTATION_COLOR_READ_TYPE) || k === Sc && (Ea.get("OES_texture_float") || Ea.get("WEBGL_color_buffer_float")) || k === Tc && Ea.get("EXT_color_buffer_half_float"))) return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");Ca.checkFramebufferStatus(Ca.FRAMEBUFFER) === Ca.FRAMEBUFFER_COMPLETE ? b >= 0 && b <= a.width - d && c >= 0 && c <= a.height - e && Ca.readPixels(b, c, d, e, bb.convert(j), bb.convert(k), f) : console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.");
        } finally {
          h && Ca.bindFramebuffer(Ca.FRAMEBUFFER, ca);
        }
      }
    };
  }function vb() {
    ia.call(this), this.type = "Scene", this.background = null, this.fog = null, this.overrideMaterial = null, this.autoUpdate = !0;
  }function wb(a, b, c) {
    var d = this,
        e = !1,
        f = 0,
        g = 0,
        h = void 0;this.onStart = void 0, this.onLoad = a, this.onProgress = b, this.onError = c, this.itemStart = function (a) {
      g++, !1 === e && void 0 !== d.onStart && d.onStart(a, f, g), e = !0;
    }, this.itemEnd = function (a) {
      f++, void 0 !== d.onProgress && d.onProgress(a, f, g), f === g && (e = !1, void 0 !== d.onLoad && d.onLoad());
    }, this.itemError = function (a) {
      void 0 !== d.onError && d.onError(a);
    }, this.resolveURL = function (a) {
      return h ? h(a) : a;
    }, this.setURLModifier = function (a) {
      return h = a, this;
    };
  }function xb(a) {
    this.manager = void 0 !== a ? a : Uf;
  }function yb(a) {
    this.manager = void 0 !== a ? a : Uf;
  }void 0 === Number.EPSILON && (Number.EPSILON = Math.pow(2, -52)), void 0 === Number.isInteger && (Number.isInteger = function (a) {
    return "number" == typeof a && isFinite(a) && Math.floor(a) === a;
  }), void 0 === Math.sign && (Math.sign = function (a) {
    return a < 0 ? -1 : a > 0 ? 1 : +a;
  }), "name" in Function.prototype == !1 && Object.defineProperty(Function.prototype, "name", { get: function get() {
      return this.toString().match(/^\s*function\s*([^\(\s]*)/)[1];
    } }), void 0 === Object.assign && function () {
    Object.assign = function (a) {
      if (void 0 === a || null === a) throw new TypeError("Cannot convert undefined or null to object");for (var b = Object(a), c = 1; c < arguments.length; c++) {
        var d = arguments[c];if (void 0 !== d && null !== d) for (var e in d) {
          Object.prototype.hasOwnProperty.call(d, e) && (b[e] = d[e]);
        }
      }return b;
    };
  }(), Object.assign(b.prototype, { addEventListener: function addEventListener(a, b) {
      void 0 === this._listeners && (this._listeners = {});var c = this._listeners;void 0 === c[a] && (c[a] = []), -1 === c[a].indexOf(b) && c[a].push(b);
    }, hasEventListener: function hasEventListener(a, b) {
      if (void 0 === this._listeners) return !1;var c = this._listeners;return void 0 !== c[a] && -1 !== c[a].indexOf(b);
    }, removeEventListener: function removeEventListener(a, b) {
      if (void 0 !== this._listeners) {
        var c = this._listeners,
            d = c[a];if (void 0 !== d) {
          var e = d.indexOf(b);-1 !== e && d.splice(e, 1);
        }
      }
    }, dispatchEvent: function dispatchEvent(a) {
      if (void 0 !== this._listeners) {
        var b = this._listeners,
            c = b[a.type];if (void 0 !== c) {
          a.target = this;for (var d = c.slice(0), e = 0, f = d.length; e < f; e++) {
            d[e].call(this, a);
          }
        }
      }
    } });var zb = "89",
      Ab = 0,
      Bb = 1,
      Cb = 2,
      Db = 0,
      Eb = 1,
      Fb = 2,
      Gb = 0,
      Hb = 1,
      Ib = 2,
      Jb = 1,
      Kb = 0,
      Lb = 0,
      Mb = 1,
      Nb = 2,
      Ob = 3,
      Pb = 4,
      Qb = 5,
      Rb = 100,
      Sb = 101,
      Tb = 102,
      Ub = 103,
      Vb = 104,
      Wb = 200,
      Xb = 201,
      Yb = 202,
      Zb = 203,
      $b = 204,
      _b = 205,
      ac = 206,
      bc = 207,
      cc = 208,
      dc = 209,
      ec = 210,
      fc = 0,
      gc = 1,
      hc = 2,
      ic = 3,
      jc = 4,
      kc = 5,
      lc = 6,
      mc = 7,
      nc = 0,
      oc = 1,
      pc = 2,
      qc = 0,
      rc = 1,
      sc = 2,
      tc = 3,
      uc = 4,
      vc = 300,
      wc = 301,
      xc = 302,
      yc = 303,
      zc = 304,
      Ac = 305,
      Bc = 306,
      Cc = 307,
      Dc = 1e3,
      Ec = 1001,
      Fc = 1002,
      Gc = 1003,
      Hc = 1004,
      Ic = 1005,
      Jc = 1006,
      Kc = 1007,
      Lc = 1008,
      Mc = 1009,
      Nc = 1010,
      Oc = 1011,
      Pc = 1012,
      Qc = 1013,
      Rc = 1014,
      Sc = 1015,
      Tc = 1016,
      Uc = 1017,
      Vc = 1018,
      Wc = 1019,
      Xc = 1020,
      Yc = 1021,
      Zc = 1022,
      $c = 1023,
      _c = 1024,
      ad = 1025,
      bd = 1026,
      cd = 1027,
      dd = 2001,
      ed = 2002,
      fd = 2003,
      gd = 2004,
      hd = 2100,
      id = 2101,
      jd = 2102,
      kd = 2103,
      ld = 2151,
      md = 0,
      nd = 1,
      od = 2,
      pd = 3e3,
      qd = 3001,
      rd = 3007,
      sd = 3002,
      td = 3004,
      ud = 3005,
      vd = 3006,
      wd = 3200,
      xd = 3201,
      yd = { DEG2RAD: Math.PI / 180, RAD2DEG: 180 / Math.PI, generateUUID: function () {
      for (var a = [], b = 0; b < 256; b++) {
        a[b] = (b < 16 ? "0" : "") + b.toString(16).toUpperCase();
      }return function () {
        var b = 4294967295 * Math.random() | 0,
            c = 4294967295 * Math.random() | 0,
            d = 4294967295 * Math.random() | 0,
            e = 4294967295 * Math.random() | 0;return a[255 & b] + a[b >> 8 & 255] + a[b >> 16 & 255] + a[b >> 24 & 255] + "-" + a[255 & c] + a[c >> 8 & 255] + "-" + a[c >> 16 & 15 | 64] + a[c >> 24 & 255] + "-" + a[63 & d | 128] + a[d >> 8 & 255] + "-" + a[d >> 16 & 255] + a[d >> 24 & 255] + a[255 & e] + a[e >> 8 & 255] + a[e >> 16 & 255] + a[e >> 24 & 255];
      };
    }(), clamp: function clamp(a, b, c) {
      return Math.max(b, Math.min(c, a));
    }, euclideanModulo: function euclideanModulo(a, b) {
      return (a % b + b) % b;
    }, mapLinear: function mapLinear(a, b, c, d, e) {
      return d + (a - b) * (e - d) / (c - b);
    }, lerp: function lerp(a, b, c) {
      return (1 - c) * a + c * b;
    }, smoothstep: function smoothstep(a, b, c) {
      return a <= b ? 0 : a >= c ? 1 : (a = (a - b) / (c - b)) * a * (3 - 2 * a);
    }, smootherstep: function smootherstep(a, b, c) {
      return a <= b ? 0 : a >= c ? 1 : (a = (a - b) / (c - b)) * a * a * (a * (6 * a - 15) + 10);
    }, randInt: function randInt(a, b) {
      return a + Math.floor(Math.random() * (b - a + 1));
    }, randFloat: function randFloat(a, b) {
      return a + Math.random() * (b - a);
    }, randFloatSpread: function randFloatSpread(a) {
      return a * (.5 - Math.random());
    }, degToRad: function degToRad(a) {
      return a * yd.DEG2RAD;
    }, radToDeg: function radToDeg(a) {
      return a * yd.RAD2DEG;
    }, isPowerOfTwo: function isPowerOfTwo(a) {
      return 0 == (a & a - 1) && 0 !== a;
    }, ceilPowerOfTwo: function ceilPowerOfTwo(a) {
      return Math.pow(2, Math.ceil(Math.log(a) / Math.LN2));
    }, floorPowerOfTwo: function floorPowerOfTwo(a) {
      return Math.pow(2, Math.floor(Math.log(a) / Math.LN2));
    } };Object.defineProperties(c.prototype, { width: { get: function get() {
        return this.x;
      }, set: function set(a) {
        this.x = a;
      } }, height: { get: function get() {
        return this.y;
      }, set: function set(a) {
        this.y = a;
      } } }), Object.assign(c.prototype, { isVector2: !0, set: function set(a, b) {
      return this.x = a, this.y = b, this;
    }, setScalar: function setScalar(a) {
      return this.x = a, this.y = a, this;
    }, setX: function setX(a) {
      return this.x = a, this;
    }, setY: function setY(a) {
      return this.y = a, this;
    }, setComponent: function setComponent(a, b) {
      switch (a) {case 0:
          this.x = b;break;case 1:
          this.y = b;break;default:
          throw new Error("index is out of range: " + a);}return this;
    }, getComponent: function getComponent(a) {
      switch (a) {case 0:
          return this.x;case 1:
          return this.y;default:
          throw new Error("index is out of range: " + a);}
    }, clone: function clone() {
      return new this.constructor(this.x, this.y);
    }, copy: function copy(a) {
      return this.x = a.x, this.y = a.y, this;
    }, add: function add(a, b) {
      return void 0 !== b ? (console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(a, b)) : (this.x += a.x, this.y += a.y, this);
    }, addScalar: function addScalar(a) {
      return this.x += a, this.y += a, this;
    }, addVectors: function addVectors(a, b) {
      return this.x = a.x + b.x, this.y = a.y + b.y, this;
    }, addScaledVector: function addScaledVector(a, b) {
      return this.x += a.x * b, this.y += a.y * b, this;
    }, sub: function sub(a, b) {
      return void 0 !== b ? (console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(a, b)) : (this.x -= a.x, this.y -= a.y, this);
    }, subScalar: function subScalar(a) {
      return this.x -= a, this.y -= a, this;
    }, subVectors: function subVectors(a, b) {
      return this.x = a.x - b.x, this.y = a.y - b.y, this;
    }, multiply: function multiply(a) {
      return this.x *= a.x, this.y *= a.y, this;
    }, multiplyScalar: function multiplyScalar(a) {
      return this.x *= a, this.y *= a, this;
    }, divide: function divide(a) {
      return this.x /= a.x, this.y /= a.y, this;
    }, divideScalar: function divideScalar(a) {
      return this.multiplyScalar(1 / a);
    }, applyMatrix3: function applyMatrix3(a) {
      var b = this.x,
          c = this.y,
          d = a.elements;return this.x = d[0] * b + d[3] * c + d[6], this.y = d[1] * b + d[4] * c + d[7], this;
    }, min: function min(a) {
      return this.x = Math.min(this.x, a.x), this.y = Math.min(this.y, a.y), this;
    }, max: function max(a) {
      return this.x = Math.max(this.x, a.x), this.y = Math.max(this.y, a.y), this;
    }, clamp: function clamp(a, b) {
      return this.x = Math.max(a.x, Math.min(b.x, this.x)), this.y = Math.max(a.y, Math.min(b.y, this.y)), this;
    }, clampScalar: function () {
      var a = new c(),
          b = new c();return function (c, d) {
        return a.set(c, c), b.set(d, d), this.clamp(a, b);
      };
    }(), clampLength: function clampLength(a, b) {
      var c = this.length();return this.divideScalar(c || 1).multiplyScalar(Math.max(a, Math.min(b, c)));
    }, floor: function floor() {
      return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
    }, ceil: function ceil() {
      return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this;
    }, round: function round() {
      return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
    }, roundToZero: function roundToZero() {
      return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this;
    }, negate: function negate() {
      return this.x = -this.x, this.y = -this.y, this;
    }, dot: function dot(a) {
      return this.x * a.x + this.y * a.y;
    }, lengthSq: function lengthSq() {
      return this.x * this.x + this.y * this.y;
    }, length: function length() {
      return Math.sqrt(this.x * this.x + this.y * this.y);
    }, manhattanLength: function manhattanLength() {
      return Math.abs(this.x) + Math.abs(this.y);
    }, normalize: function normalize() {
      return this.divideScalar(this.length() || 1);
    }, angle: function angle() {
      var a = Math.atan2(this.y, this.x);return a < 0 && (a += 2 * Math.PI), a;
    }, distanceTo: function distanceTo(a) {
      return Math.sqrt(this.distanceToSquared(a));
    }, distanceToSquared: function distanceToSquared(a) {
      var b = this.x - a.x,
          c = this.y - a.y;return b * b + c * c;
    }, manhattanDistanceTo: function manhattanDistanceTo(a) {
      return Math.abs(this.x - a.x) + Math.abs(this.y - a.y);
    }, setLength: function setLength(a) {
      return this.normalize().multiplyScalar(a);
    }, lerp: function lerp(a, b) {
      return this.x += (a.x - this.x) * b, this.y += (a.y - this.y) * b, this;
    }, lerpVectors: function lerpVectors(a, b, c) {
      return this.subVectors(b, a).multiplyScalar(c).add(a);
    }, equals: function equals(a) {
      return a.x === this.x && a.y === this.y;
    }, fromArray: function fromArray(a, b) {
      return void 0 === b && (b = 0), this.x = a[b], this.y = a[b + 1], this;
    }, toArray: function toArray(a, b) {
      return void 0 === a && (a = []), void 0 === b && (b = 0), a[b] = this.x, a[b + 1] = this.y, a;
    }, fromBufferAttribute: function fromBufferAttribute(a, b, c) {
      return void 0 !== c && console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."), this.x = a.getX(b), this.y = a.getY(b), this;
    }, rotateAround: function rotateAround(a, b) {
      var c = Math.cos(b),
          d = Math.sin(b),
          e = this.x - a.x,
          f = this.y - a.y;return this.x = e * c - f * d + a.x, this.y = e * d + f * c + a.y, this;
    } }), Object.assign(d.prototype, { isMatrix4: !0, set: function set(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p) {
      var q = this.elements;return q[0] = a, q[4] = b, q[8] = c, q[12] = d, q[1] = e, q[5] = f, q[9] = g, q[13] = h, q[2] = i, q[6] = j, q[10] = k, q[14] = l, q[3] = m, q[7] = n, q[11] = o, q[15] = p, this;
    }, identity: function identity() {
      return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
    }, clone: function clone() {
      return new d().fromArray(this.elements);
    }, copy: function copy(a) {
      var b = this.elements,
          c = a.elements;return b[0] = c[0], b[1] = c[1], b[2] = c[2], b[3] = c[3], b[4] = c[4], b[5] = c[5], b[6] = c[6], b[7] = c[7], b[8] = c[8], b[9] = c[9], b[10] = c[10], b[11] = c[11], b[12] = c[12], b[13] = c[13], b[14] = c[14], b[15] = c[15], this;
    }, copyPosition: function copyPosition(a) {
      var b = this.elements,
          c = a.elements;return b[12] = c[12], b[13] = c[13], b[14] = c[14], this;
    }, extractBasis: function extractBasis(a, b, c) {
      return a.setFromMatrixColumn(this, 0), b.setFromMatrixColumn(this, 1), c.setFromMatrixColumn(this, 2), this;
    }, makeBasis: function makeBasis(a, b, c) {
      return this.set(a.x, b.x, c.x, 0, a.y, b.y, c.y, 0, a.z, b.z, c.z, 0, 0, 0, 0, 1), this;
    }, extractRotation: function () {
      var a = new f();return function (b) {
        var c = this.elements,
            d = b.elements,
            e = 1 / a.setFromMatrixColumn(b, 0).length(),
            f = 1 / a.setFromMatrixColumn(b, 1).length(),
            g = 1 / a.setFromMatrixColumn(b, 2).length();return c[0] = d[0] * e, c[1] = d[1] * e, c[2] = d[2] * e, c[4] = d[4] * f, c[5] = d[5] * f, c[6] = d[6] * f, c[8] = d[8] * g, c[9] = d[9] * g, c[10] = d[10] * g, this;
      };
    }(), makeRotationFromEuler: function makeRotationFromEuler(a) {
      a && a.isEuler || console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");var b = this.elements,
          c = a.x,
          d = a.y,
          e = a.z,
          f = Math.cos(c),
          g = Math.sin(c),
          h = Math.cos(d),
          i = Math.sin(d),
          j = Math.cos(e),
          k = Math.sin(e);if ("XYZ" === a.order) {
        var l = f * j,
            m = f * k,
            n = g * j,
            o = g * k;b[0] = h * j, b[4] = -h * k, b[8] = i, b[1] = m + n * i, b[5] = l - o * i, b[9] = -g * h, b[2] = o - l * i, b[6] = n + m * i, b[10] = f * h;
      } else if ("YXZ" === a.order) {
        var p = h * j,
            q = h * k,
            r = i * j,
            s = i * k;b[0] = p + s * g, b[4] = r * g - q, b[8] = f * i, b[1] = f * k, b[5] = f * j, b[9] = -g, b[2] = q * g - r, b[6] = s + p * g, b[10] = f * h;
      } else if ("ZXY" === a.order) {
        var p = h * j,
            q = h * k,
            r = i * j,
            s = i * k;b[0] = p - s * g, b[4] = -f * k, b[8] = r + q * g, b[1] = q + r * g, b[5] = f * j, b[9] = s - p * g, b[2] = -f * i, b[6] = g, b[10] = f * h;
      } else if ("ZYX" === a.order) {
        var l = f * j,
            m = f * k,
            n = g * j,
            o = g * k;b[0] = h * j, b[4] = n * i - m, b[8] = l * i + o, b[1] = h * k, b[5] = o * i + l, b[9] = m * i - n, b[2] = -i, b[6] = g * h, b[10] = f * h;
      } else if ("YZX" === a.order) {
        var t = f * h,
            u = f * i,
            v = g * h,
            w = g * i;b[0] = h * j, b[4] = w - t * k, b[8] = v * k + u, b[1] = k, b[5] = f * j, b[9] = -g * j, b[2] = -i * j, b[6] = u * k + v, b[10] = t - w * k;
      } else if ("XZY" === a.order) {
        var t = f * h,
            u = f * i,
            v = g * h,
            w = g * i;b[0] = h * j, b[4] = -k, b[8] = i * j, b[1] = t * k + w, b[5] = f * j, b[9] = u * k - v, b[2] = v * k - u, b[6] = g * j, b[10] = w * k + t;
      }return b[3] = 0, b[7] = 0, b[11] = 0, b[12] = 0, b[13] = 0, b[14] = 0, b[15] = 1, this;
    }, makeRotationFromQuaternion: function makeRotationFromQuaternion(a) {
      var b = this.elements,
          c = a._x,
          d = a._y,
          e = a._z,
          f = a._w,
          g = c + c,
          h = d + d,
          i = e + e,
          j = c * g,
          k = c * h,
          l = c * i,
          m = d * h,
          n = d * i,
          o = e * i,
          p = f * g,
          q = f * h,
          r = f * i;return b[0] = 1 - (m + o), b[4] = k - r, b[8] = l + q, b[1] = k + r, b[5] = 1 - (j + o), b[9] = n - p, b[2] = l - q, b[6] = n + p, b[10] = 1 - (j + m), b[3] = 0, b[7] = 0, b[11] = 0, b[12] = 0, b[13] = 0, b[14] = 0, b[15] = 1, this;
    }, lookAt: function () {
      var a = new f(),
          b = new f(),
          c = new f();return function (d, e, f) {
        var g = this.elements;return c.subVectors(d, e), 0 === c.lengthSq() && (c.z = 1), c.normalize(), a.crossVectors(f, c), 0 === a.lengthSq() && (1 === Math.abs(f.z) ? c.x += 1e-4 : c.z += 1e-4, c.normalize(), a.crossVectors(f, c)), a.normalize(), b.crossVectors(c, a), g[0] = a.x, g[4] = b.x, g[8] = c.x, g[1] = a.y, g[5] = b.y, g[9] = c.y, g[2] = a.z, g[6] = b.z, g[10] = c.z, this;
      };
    }(), multiply: function multiply(a, b) {
      return void 0 !== b ? (console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."), this.multiplyMatrices(a, b)) : this.multiplyMatrices(this, a);
    }, premultiply: function premultiply(a) {
      return this.multiplyMatrices(a, this);
    }, multiplyMatrices: function multiplyMatrices(a, b) {
      var c = a.elements,
          d = b.elements,
          e = this.elements,
          f = c[0],
          g = c[4],
          h = c[8],
          i = c[12],
          j = c[1],
          k = c[5],
          l = c[9],
          m = c[13],
          n = c[2],
          o = c[6],
          p = c[10],
          q = c[14],
          r = c[3],
          s = c[7],
          t = c[11],
          u = c[15],
          v = d[0],
          w = d[4],
          x = d[8],
          y = d[12],
          z = d[1],
          A = d[5],
          B = d[9],
          C = d[13],
          D = d[2],
          E = d[6],
          F = d[10],
          G = d[14],
          H = d[3],
          I = d[7],
          J = d[11],
          K = d[15];return e[0] = f * v + g * z + h * D + i * H, e[4] = f * w + g * A + h * E + i * I, e[8] = f * x + g * B + h * F + i * J, e[12] = f * y + g * C + h * G + i * K, e[1] = j * v + k * z + l * D + m * H, e[5] = j * w + k * A + l * E + m * I, e[9] = j * x + k * B + l * F + m * J, e[13] = j * y + k * C + l * G + m * K, e[2] = n * v + o * z + p * D + q * H, e[6] = n * w + o * A + p * E + q * I, e[10] = n * x + o * B + p * F + q * J, e[14] = n * y + o * C + p * G + q * K, e[3] = r * v + s * z + t * D + u * H, e[7] = r * w + s * A + t * E + u * I, e[11] = r * x + s * B + t * F + u * J, e[15] = r * y + s * C + t * G + u * K, this;
    }, multiplyScalar: function multiplyScalar(a) {
      var b = this.elements;return b[0] *= a, b[4] *= a, b[8] *= a, b[12] *= a, b[1] *= a, b[5] *= a, b[9] *= a, b[13] *= a, b[2] *= a, b[6] *= a, b[10] *= a, b[14] *= a, b[3] *= a, b[7] *= a, b[11] *= a, b[15] *= a, this;
    }, applyToBufferAttribute: function () {
      var a = new f();return function (b) {
        for (var c = 0, d = b.count; c < d; c++) {
          a.x = b.getX(c), a.y = b.getY(c), a.z = b.getZ(c), a.applyMatrix4(this), b.setXYZ(c, a.x, a.y, a.z);
        }return b;
      };
    }(), determinant: function determinant() {
      var a = this.elements,
          b = a[0],
          c = a[4],
          d = a[8],
          e = a[12],
          f = a[1],
          g = a[5],
          h = a[9],
          i = a[13],
          j = a[2],
          k = a[6],
          l = a[10],
          m = a[14];return a[3] * (+e * h * k - d * i * k - e * g * l + c * i * l + d * g * m - c * h * m) + a[7] * (+b * h * m - b * i * l + e * f * l - d * f * m + d * i * j - e * h * j) + a[11] * (+b * i * k - b * g * m - e * f * k + c * f * m + e * g * j - c * i * j) + a[15] * (-d * g * j - b * h * k + b * g * l + d * f * k - c * f * l + c * h * j);
    }, transpose: function transpose() {
      var a,
          b = this.elements;return a = b[1], b[1] = b[4], b[4] = a, a = b[2], b[2] = b[8], b[8] = a, a = b[6], b[6] = b[9], b[9] = a, a = b[3], b[3] = b[12], b[12] = a, a = b[7], b[7] = b[13], b[13] = a, a = b[11], b[11] = b[14], b[14] = a, this;
    }, setPosition: function setPosition(a) {
      var b = this.elements;return b[12] = a.x, b[13] = a.y, b[14] = a.z, this;
    }, getInverse: function getInverse(a, b) {
      var c = this.elements,
          d = a.elements,
          e = d[0],
          f = d[1],
          g = d[2],
          h = d[3],
          i = d[4],
          j = d[5],
          k = d[6],
          l = d[7],
          m = d[8],
          n = d[9],
          o = d[10],
          p = d[11],
          q = d[12],
          r = d[13],
          s = d[14],
          t = d[15],
          u = n * s * l - r * o * l + r * k * p - j * s * p - n * k * t + j * o * t,
          v = q * o * l - m * s * l - q * k * p + i * s * p + m * k * t - i * o * t,
          w = m * r * l - q * n * l + q * j * p - i * r * p - m * j * t + i * n * t,
          x = q * n * k - m * r * k - q * j * o + i * r * o + m * j * s - i * n * s,
          y = e * u + f * v + g * w + h * x;if (0 === y) {
        var z = "THREE.Matrix4: .getInverse() can't invert matrix, determinant is 0";if (!0 === b) throw new Error(z);return console.warn(z), this.identity();
      }var A = 1 / y;return c[0] = u * A, c[1] = (r * o * h - n * s * h - r * g * p + f * s * p + n * g * t - f * o * t) * A, c[2] = (j * s * h - r * k * h + r * g * l - f * s * l - j * g * t + f * k * t) * A, c[3] = (n * k * h - j * o * h - n * g * l + f * o * l + j * g * p - f * k * p) * A, c[4] = v * A, c[5] = (m * s * h - q * o * h + q * g * p - e * s * p - m * g * t + e * o * t) * A, c[6] = (q * k * h - i * s * h - q * g * l + e * s * l + i * g * t - e * k * t) * A, c[7] = (i * o * h - m * k * h + m * g * l - e * o * l - i * g * p + e * k * p) * A, c[8] = w * A, c[9] = (q * n * h - m * r * h - q * f * p + e * r * p + m * f * t - e * n * t) * A, c[10] = (i * r * h - q * j * h + q * f * l - e * r * l - i * f * t + e * j * t) * A, c[11] = (m * j * h - i * n * h - m * f * l + e * n * l + i * f * p - e * j * p) * A, c[12] = x * A, c[13] = (m * r * g - q * n * g + q * f * o - e * r * o - m * f * s + e * n * s) * A, c[14] = (q * j * g - i * r * g - q * f * k + e * r * k + i * f * s - e * j * s) * A, c[15] = (i * n * g - m * j * g + m * f * k - e * n * k - i * f * o + e * j * o) * A, this;
    }, scale: function scale(a) {
      var b = this.elements,
          c = a.x,
          d = a.y,
          e = a.z;return b[0] *= c, b[4] *= d, b[8] *= e, b[1] *= c, b[5] *= d, b[9] *= e, b[2] *= c, b[6] *= d, b[10] *= e, b[3] *= c, b[7] *= d, b[11] *= e, this;
    }, getMaxScaleOnAxis: function getMaxScaleOnAxis() {
      var a = this.elements,
          b = a[0] * a[0] + a[1] * a[1] + a[2] * a[2],
          c = a[4] * a[4] + a[5] * a[5] + a[6] * a[6],
          d = a[8] * a[8] + a[9] * a[9] + a[10] * a[10];return Math.sqrt(Math.max(b, c, d));
    }, makeTranslation: function makeTranslation(a, b, c) {
      return this.set(1, 0, 0, a, 0, 1, 0, b, 0, 0, 1, c, 0, 0, 0, 1), this;
    }, makeRotationX: function makeRotationX(a) {
      var b = Math.cos(a),
          c = Math.sin(a);return this.set(1, 0, 0, 0, 0, b, -c, 0, 0, c, b, 0, 0, 0, 0, 1), this;
    }, makeRotationY: function makeRotationY(a) {
      var b = Math.cos(a),
          c = Math.sin(a);return this.set(b, 0, c, 0, 0, 1, 0, 0, -c, 0, b, 0, 0, 0, 0, 1), this;
    }, makeRotationZ: function makeRotationZ(a) {
      var b = Math.cos(a),
          c = Math.sin(a);return this.set(b, -c, 0, 0, c, b, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
    }, makeRotationAxis: function makeRotationAxis(a, b) {
      var c = Math.cos(b),
          d = Math.sin(b),
          e = 1 - c,
          f = a.x,
          g = a.y,
          h = a.z,
          i = e * f,
          j = e * g;return this.set(i * f + c, i * g - d * h, i * h + d * g, 0, i * g + d * h, j * g + c, j * h - d * f, 0, i * h - d * g, j * h + d * f, e * h * h + c, 0, 0, 0, 0, 1), this;
    }, makeScale: function makeScale(a, b, c) {
      return this.set(a, 0, 0, 0, 0, b, 0, 0, 0, 0, c, 0, 0, 0, 0, 1), this;
    }, makeShear: function makeShear(a, b, c) {
      return this.set(1, b, c, 0, a, 1, c, 0, a, b, 1, 0, 0, 0, 0, 1), this;
    }, compose: function compose(a, b, c) {
      return this.makeRotationFromQuaternion(b), this.scale(c), this.setPosition(a), this;
    }, decompose: function () {
      var a = new f(),
          b = new d();return function (c, d, e) {
        var f = this.elements,
            g = a.set(f[0], f[1], f[2]).length(),
            h = a.set(f[4], f[5], f[6]).length(),
            i = a.set(f[8], f[9], f[10]).length();this.determinant() < 0 && (g = -g), c.x = f[12], c.y = f[13], c.z = f[14], b.copy(this);var j = 1 / g,
            k = 1 / h,
            l = 1 / i;return b.elements[0] *= j, b.elements[1] *= j, b.elements[2] *= j, b.elements[4] *= k, b.elements[5] *= k, b.elements[6] *= k, b.elements[8] *= l, b.elements[9] *= l, b.elements[10] *= l, d.setFromRotationMatrix(b), e.x = g, e.y = h, e.z = i, this;
      };
    }(), makePerspective: function makePerspective(a, b, c, d, e, f) {
      void 0 === f && console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");var g = this.elements,
          h = 2 * e / (b - a),
          i = 2 * e / (c - d),
          j = (b + a) / (b - a),
          k = (c + d) / (c - d),
          l = -(f + e) / (f - e),
          m = -2 * f * e / (f - e);return g[0] = h, g[4] = 0, g[8] = j, g[12] = 0, g[1] = 0, g[5] = i, g[9] = k, g[13] = 0, g[2] = 0, g[6] = 0, g[10] = l, g[14] = m, g[3] = 0, g[7] = 0, g[11] = -1, g[15] = 0, this;
    }, makeOrthographic: function makeOrthographic(a, b, c, d, e, f) {
      var g = this.elements,
          h = 1 / (b - a),
          i = 1 / (c - d),
          j = 1 / (f - e),
          k = (b + a) * h,
          l = (c + d) * i,
          m = (f + e) * j;return g[0] = 2 * h, g[4] = 0, g[8] = 0, g[12] = -k, g[1] = 0, g[5] = 2 * i, g[9] = 0, g[13] = -l, g[2] = 0, g[6] = 0, g[10] = -2 * j, g[14] = -m, g[3] = 0, g[7] = 0, g[11] = 0, g[15] = 1, this;
    }, equals: function equals(a) {
      for (var b = this.elements, c = a.elements, d = 0; d < 16; d++) {
        if (b[d] !== c[d]) return !1;
      }return !0;
    }, fromArray: function fromArray(a, b) {
      void 0 === b && (b = 0);for (var c = 0; c < 16; c++) {
        this.elements[c] = a[c + b];
      }return this;
    }, toArray: function toArray(a, b) {
      void 0 === a && (a = []), void 0 === b && (b = 0);var c = this.elements;return a[b] = c[0], a[b + 1] = c[1], a[b + 2] = c[2], a[b + 3] = c[3], a[b + 4] = c[4], a[b + 5] = c[5], a[b + 6] = c[6], a[b + 7] = c[7], a[b + 8] = c[8], a[b + 9] = c[9], a[b + 10] = c[10], a[b + 11] = c[11], a[b + 12] = c[12], a[b + 13] = c[13], a[b + 14] = c[14], a[b + 15] = c[15], a;
    } }), Object.assign(e, { slerp: function slerp(a, b, c, d) {
      return c.copy(a).slerp(b, d);
    }, slerpFlat: function slerpFlat(a, b, c, d, e, f, g) {
      var h = c[d + 0],
          i = c[d + 1],
          j = c[d + 2],
          k = c[d + 3],
          l = e[f + 0],
          m = e[f + 1],
          n = e[f + 2],
          o = e[f + 3];if (k !== o || h !== l || i !== m || j !== n) {
        var p = 1 - g,
            q = h * l + i * m + j * n + k * o,
            r = q >= 0 ? 1 : -1,
            s = 1 - q * q;if (s > Number.EPSILON) {
          var t = Math.sqrt(s),
              u = Math.atan2(t, q * r);p = Math.sin(p * u) / t, g = Math.sin(g * u) / t;
        }var v = g * r;if (h = h * p + l * v, i = i * p + m * v, j = j * p + n * v, k = k * p + o * v, p === 1 - g) {
          var w = 1 / Math.sqrt(h * h + i * i + j * j + k * k);h *= w, i *= w, j *= w, k *= w;
        }
      }a[b] = h, a[b + 1] = i, a[b + 2] = j, a[b + 3] = k;
    } }), Object.defineProperties(e.prototype, { x: { get: function get() {
        return this._x;
      }, set: function set(a) {
        this._x = a, this.onChangeCallback();
      } }, y: { get: function get() {
        return this._y;
      }, set: function set(a) {
        this._y = a, this.onChangeCallback();
      } }, z: { get: function get() {
        return this._z;
      }, set: function set(a) {
        this._z = a, this.onChangeCallback();
      } }, w: { get: function get() {
        return this._w;
      }, set: function set(a) {
        this._w = a, this.onChangeCallback();
      } } }), Object.assign(e.prototype, { set: function set(a, b, c, d) {
      return this._x = a, this._y = b, this._z = c, this._w = d, this.onChangeCallback(), this;
    }, clone: function clone() {
      return new this.constructor(this._x, this._y, this._z, this._w);
    }, copy: function copy(a) {
      return this._x = a.x, this._y = a.y, this._z = a.z, this._w = a.w, this.onChangeCallback(), this;
    }, setFromEuler: function setFromEuler(a, b) {
      if (!a || !a.isEuler) throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");var c = a._x,
          d = a._y,
          e = a._z,
          f = a.order,
          g = Math.cos,
          h = Math.sin,
          i = g(c / 2),
          j = g(d / 2),
          k = g(e / 2),
          l = h(c / 2),
          m = h(d / 2),
          n = h(e / 2);return "XYZ" === f ? (this._x = l * j * k + i * m * n, this._y = i * m * k - l * j * n, this._z = i * j * n + l * m * k, this._w = i * j * k - l * m * n) : "YXZ" === f ? (this._x = l * j * k + i * m * n, this._y = i * m * k - l * j * n, this._z = i * j * n - l * m * k, this._w = i * j * k + l * m * n) : "ZXY" === f ? (this._x = l * j * k - i * m * n, this._y = i * m * k + l * j * n, this._z = i * j * n + l * m * k, this._w = i * j * k - l * m * n) : "ZYX" === f ? (this._x = l * j * k - i * m * n, this._y = i * m * k + l * j * n, this._z = i * j * n - l * m * k, this._w = i * j * k + l * m * n) : "YZX" === f ? (this._x = l * j * k + i * m * n, this._y = i * m * k + l * j * n, this._z = i * j * n - l * m * k, this._w = i * j * k - l * m * n) : "XZY" === f && (this._x = l * j * k - i * m * n, this._y = i * m * k - l * j * n, this._z = i * j * n + l * m * k, this._w = i * j * k + l * m * n), !1 !== b && this.onChangeCallback(), this;
    }, setFromAxisAngle: function setFromAxisAngle(a, b) {
      var c = b / 2,
          d = Math.sin(c);return this._x = a.x * d, this._y = a.y * d, this._z = a.z * d, this._w = Math.cos(c), this.onChangeCallback(), this;
    }, setFromRotationMatrix: function setFromRotationMatrix(a) {
      var b,
          c = a.elements,
          d = c[0],
          e = c[4],
          f = c[8],
          g = c[1],
          h = c[5],
          i = c[9],
          j = c[2],
          k = c[6],
          l = c[10],
          m = d + h + l;return m > 0 ? (b = .5 / Math.sqrt(m + 1), this._w = .25 / b, this._x = (k - i) * b, this._y = (f - j) * b, this._z = (g - e) * b) : d > h && d > l ? (b = 2 * Math.sqrt(1 + d - h - l), this._w = (k - i) / b, this._x = .25 * b, this._y = (e + g) / b, this._z = (f + j) / b) : h > l ? (b = 2 * Math.sqrt(1 + h - d - l), this._w = (f - j) / b, this._x = (e + g) / b, this._y = .25 * b, this._z = (i + k) / b) : (b = 2 * Math.sqrt(1 + l - d - h), this._w = (g - e) / b, this._x = (f + j) / b, this._y = (i + k) / b, this._z = .25 * b), this.onChangeCallback(), this;
    }, setFromUnitVectors: function () {
      var a,
          b = new f();return function (c, d) {
        return void 0 === b && (b = new f()), a = c.dot(d) + 1, a < 1e-6 ? (a = 0, Math.abs(c.x) > Math.abs(c.z) ? b.set(-c.y, c.x, 0) : b.set(0, -c.z, c.y)) : b.crossVectors(c, d), this._x = b.x, this._y = b.y, this._z = b.z, this._w = a, this.normalize();
      };
    }(), inverse: function inverse() {
      return this.conjugate().normalize();
    }, conjugate: function conjugate() {
      return this._x *= -1, this._y *= -1, this._z *= -1, this.onChangeCallback(), this;
    }, dot: function dot(a) {
      return this._x * a._x + this._y * a._y + this._z * a._z + this._w * a._w;
    }, lengthSq: function lengthSq() {
      return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
    }, length: function length() {
      return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
    }, normalize: function normalize() {
      var a = this.length();return 0 === a ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (a = 1 / a, this._x = this._x * a, this._y = this._y * a, this._z = this._z * a, this._w = this._w * a), this.onChangeCallback(), this;
    }, multiply: function multiply(a, b) {
      return void 0 !== b ? (console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."), this.multiplyQuaternions(a, b)) : this.multiplyQuaternions(this, a);
    }, premultiply: function premultiply(a) {
      return this.multiplyQuaternions(a, this);
    }, multiplyQuaternions: function multiplyQuaternions(a, b) {
      var c = a._x,
          d = a._y,
          e = a._z,
          f = a._w,
          g = b._x,
          h = b._y,
          i = b._z,
          j = b._w;return this._x = c * j + f * g + d * i - e * h, this._y = d * j + f * h + e * g - c * i, this._z = e * j + f * i + c * h - d * g, this._w = f * j - c * g - d * h - e * i, this.onChangeCallback(), this;
    }, slerp: function slerp(a, b) {
      if (0 === b) return this;if (1 === b) return this.copy(a);var c = this._x,
          d = this._y,
          e = this._z,
          f = this._w,
          g = f * a._w + c * a._x + d * a._y + e * a._z;if (g < 0 ? (this._w = -a._w, this._x = -a._x, this._y = -a._y, this._z = -a._z, g = -g) : this.copy(a), g >= 1) return this._w = f, this._x = c, this._y = d, this._z = e, this;var h = Math.sqrt(1 - g * g);if (Math.abs(h) < .001) return this._w = .5 * (f + this._w), this._x = .5 * (c + this._x), this._y = .5 * (d + this._y), this._z = .5 * (e + this._z), this;var i = Math.atan2(h, g),
          j = Math.sin((1 - b) * i) / h,
          k = Math.sin(b * i) / h;return this._w = f * j + this._w * k, this._x = c * j + this._x * k, this._y = d * j + this._y * k, this._z = e * j + this._z * k, this.onChangeCallback(), this;
    }, equals: function equals(a) {
      return a._x === this._x && a._y === this._y && a._z === this._z && a._w === this._w;
    }, fromArray: function fromArray(a, b) {
      return void 0 === b && (b = 0), this._x = a[b], this._y = a[b + 1], this._z = a[b + 2], this._w = a[b + 3], this.onChangeCallback(), this;
    }, toArray: function toArray(a, b) {
      return void 0 === a && (a = []), void 0 === b && (b = 0), a[b] = this._x, a[b + 1] = this._y, a[b + 2] = this._z, a[b + 3] = this._w, a;
    }, onChange: function onChange(a) {
      return this.onChangeCallback = a, this;
    }, onChangeCallback: function onChangeCallback() {} }), Object.assign(f.prototype, { isVector3: !0, set: function set(a, b, c) {
      return this.x = a, this.y = b, this.z = c, this;
    }, setScalar: function setScalar(a) {
      return this.x = a, this.y = a, this.z = a, this;
    }, setX: function setX(a) {
      return this.x = a, this;
    }, setY: function setY(a) {
      return this.y = a, this;
    }, setZ: function setZ(a) {
      return this.z = a, this;
    }, setComponent: function setComponent(a, b) {
      switch (a) {case 0:
          this.x = b;break;case 1:
          this.y = b;break;case 2:
          this.z = b;break;default:
          throw new Error("index is out of range: " + a);}return this;
    }, getComponent: function getComponent(a) {
      switch (a) {case 0:
          return this.x;case 1:
          return this.y;case 2:
          return this.z;default:
          throw new Error("index is out of range: " + a);}
    }, clone: function clone() {
      return new this.constructor(this.x, this.y, this.z);
    }, copy: function copy(a) {
      return this.x = a.x, this.y = a.y, this.z = a.z, this;
    }, add: function add(a, b) {
      return void 0 !== b ? (console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(a, b)) : (this.x += a.x, this.y += a.y, this.z += a.z, this);
    }, addScalar: function addScalar(a) {
      return this.x += a, this.y += a, this.z += a, this;
    }, addVectors: function addVectors(a, b) {
      return this.x = a.x + b.x, this.y = a.y + b.y, this.z = a.z + b.z, this;
    }, addScaledVector: function addScaledVector(a, b) {
      return this.x += a.x * b, this.y += a.y * b, this.z += a.z * b, this;
    }, sub: function sub(a, b) {
      return void 0 !== b ? (console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(a, b)) : (this.x -= a.x, this.y -= a.y, this.z -= a.z, this);
    }, subScalar: function subScalar(a) {
      return this.x -= a, this.y -= a, this.z -= a, this;
    }, subVectors: function subVectors(a, b) {
      return this.x = a.x - b.x, this.y = a.y - b.y, this.z = a.z - b.z, this;
    }, multiply: function multiply(a, b) {
      return void 0 !== b ? (console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."), this.multiplyVectors(a, b)) : (this.x *= a.x, this.y *= a.y, this.z *= a.z, this);
    }, multiplyScalar: function multiplyScalar(a) {
      return this.x *= a, this.y *= a, this.z *= a, this;
    }, multiplyVectors: function multiplyVectors(a, b) {
      return this.x = a.x * b.x, this.y = a.y * b.y, this.z = a.z * b.z, this;
    }, applyEuler: function () {
      var a = new e();return function (b) {
        return b && b.isEuler || console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."), this.applyQuaternion(a.setFromEuler(b));
      };
    }(), applyAxisAngle: function () {
      var a = new e();return function (b, c) {
        return this.applyQuaternion(a.setFromAxisAngle(b, c));
      };
    }(), applyMatrix3: function applyMatrix3(a) {
      var b = this.x,
          c = this.y,
          d = this.z,
          e = a.elements;return this.x = e[0] * b + e[3] * c + e[6] * d, this.y = e[1] * b + e[4] * c + e[7] * d, this.z = e[2] * b + e[5] * c + e[8] * d, this;
    }, applyMatrix4: function applyMatrix4(a) {
      var b = this.x,
          c = this.y,
          d = this.z,
          e = a.elements,
          f = 1 / (e[3] * b + e[7] * c + e[11] * d + e[15]);return this.x = (e[0] * b + e[4] * c + e[8] * d + e[12]) * f, this.y = (e[1] * b + e[5] * c + e[9] * d + e[13]) * f, this.z = (e[2] * b + e[6] * c + e[10] * d + e[14]) * f, this;
    }, applyQuaternion: function applyQuaternion(a) {
      var b = this.x,
          c = this.y,
          d = this.z,
          e = a.x,
          f = a.y,
          g = a.z,
          h = a.w,
          i = h * b + f * d - g * c,
          j = h * c + g * b - e * d,
          k = h * d + e * c - f * b,
          l = -e * b - f * c - g * d;return this.x = i * h + l * -e + j * -g - k * -f, this.y = j * h + l * -f + k * -e - i * -g, this.z = k * h + l * -g + i * -f - j * -e, this;
    }, project: function () {
      var a = new d();return function (b) {
        return a.multiplyMatrices(b.projectionMatrix, a.getInverse(b.matrixWorld)), this.applyMatrix4(a);
      };
    }(), unproject: function () {
      var a = new d();return function (b) {
        return a.multiplyMatrices(b.matrixWorld, a.getInverse(b.projectionMatrix)), this.applyMatrix4(a);
      };
    }(), transformDirection: function transformDirection(a) {
      var b = this.x,
          c = this.y,
          d = this.z,
          e = a.elements;return this.x = e[0] * b + e[4] * c + e[8] * d, this.y = e[1] * b + e[5] * c + e[9] * d, this.z = e[2] * b + e[6] * c + e[10] * d, this.normalize();
    }, divide: function divide(a) {
      return this.x /= a.x, this.y /= a.y, this.z /= a.z, this;
    }, divideScalar: function divideScalar(a) {
      return this.multiplyScalar(1 / a);
    }, min: function min(a) {
      return this.x = Math.min(this.x, a.x), this.y = Math.min(this.y, a.y), this.z = Math.min(this.z, a.z), this;
    }, max: function max(a) {
      return this.x = Math.max(this.x, a.x), this.y = Math.max(this.y, a.y), this.z = Math.max(this.z, a.z), this;
    }, clamp: function clamp(a, b) {
      return this.x = Math.max(a.x, Math.min(b.x, this.x)), this.y = Math.max(a.y, Math.min(b.y, this.y)), this.z = Math.max(a.z, Math.min(b.z, this.z)), this;
    }, clampScalar: function () {
      var a = new f(),
          b = new f();return function (c, d) {
        return a.set(c, c, c), b.set(d, d, d), this.clamp(a, b);
      };
    }(), clampLength: function clampLength(a, b) {
      var c = this.length();return this.divideScalar(c || 1).multiplyScalar(Math.max(a, Math.min(b, c)));
    }, floor: function floor() {
      return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this;
    }, ceil: function ceil() {
      return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this;
    }, round: function round() {
      return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this;
    }, roundToZero: function roundToZero() {
      return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this;
    }, negate: function negate() {
      return this.x = -this.x, this.y = -this.y, this.z = -this.z, this;
    }, dot: function dot(a) {
      return this.x * a.x + this.y * a.y + this.z * a.z;
    }, lengthSq: function lengthSq() {
      return this.x * this.x + this.y * this.y + this.z * this.z;
    }, length: function length() {
      return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
    }, manhattanLength: function manhattanLength() {
      return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
    }, normalize: function normalize() {
      return this.divideScalar(this.length() || 1);
    }, setLength: function setLength(a) {
      return this.normalize().multiplyScalar(a);
    }, lerp: function lerp(a, b) {
      return this.x += (a.x - this.x) * b, this.y += (a.y - this.y) * b, this.z += (a.z - this.z) * b, this;
    }, lerpVectors: function lerpVectors(a, b, c) {
      return this.subVectors(b, a).multiplyScalar(c).add(a);
    }, cross: function cross(a, b) {
      return void 0 !== b ? (console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."), this.crossVectors(a, b)) : this.crossVectors(this, a);
    }, crossVectors: function crossVectors(a, b) {
      var c = a.x,
          d = a.y,
          e = a.z,
          f = b.x,
          g = b.y,
          h = b.z;return this.x = d * h - e * g, this.y = e * f - c * h, this.z = c * g - d * f, this;
    }, projectOnVector: function projectOnVector(a) {
      var b = a.dot(this) / a.lengthSq();return this.copy(a).multiplyScalar(b);
    }, projectOnPlane: function () {
      var a = new f();return function (b) {
        return a.copy(this).projectOnVector(b), this.sub(a);
      };
    }(), reflect: function () {
      var a = new f();return function (b) {
        return this.sub(a.copy(b).multiplyScalar(2 * this.dot(b)));
      };
    }(), angleTo: function angleTo(a) {
      var b = this.dot(a) / Math.sqrt(this.lengthSq() * a.lengthSq());return Math.acos(yd.clamp(b, -1, 1));
    }, distanceTo: function distanceTo(a) {
      return Math.sqrt(this.distanceToSquared(a));
    }, distanceToSquared: function distanceToSquared(a) {
      var b = this.x - a.x,
          c = this.y - a.y,
          d = this.z - a.z;return b * b + c * c + d * d;
    }, manhattanDistanceTo: function manhattanDistanceTo(a) {
      return Math.abs(this.x - a.x) + Math.abs(this.y - a.y) + Math.abs(this.z - a.z);
    }, setFromSpherical: function setFromSpherical(a) {
      var b = Math.sin(a.phi) * a.radius;return this.x = b * Math.sin(a.theta), this.y = Math.cos(a.phi) * a.radius, this.z = b * Math.cos(a.theta), this;
    }, setFromCylindrical: function setFromCylindrical(a) {
      return this.x = a.radius * Math.sin(a.theta), this.y = a.y, this.z = a.radius * Math.cos(a.theta), this;
    }, setFromMatrixPosition: function setFromMatrixPosition(a) {
      var b = a.elements;return this.x = b[12], this.y = b[13], this.z = b[14], this;
    }, setFromMatrixScale: function setFromMatrixScale(a) {
      var b = this.setFromMatrixColumn(a, 0).length(),
          c = this.setFromMatrixColumn(a, 1).length(),
          d = this.setFromMatrixColumn(a, 2).length();return this.x = b, this.y = c, this.z = d, this;
    }, setFromMatrixColumn: function setFromMatrixColumn(a, b) {
      return this.fromArray(a.elements, 4 * b);
    }, equals: function equals(a) {
      return a.x === this.x && a.y === this.y && a.z === this.z;
    }, fromArray: function fromArray(a, b) {
      return void 0 === b && (b = 0), this.x = a[b], this.y = a[b + 1], this.z = a[b + 2], this;
    }, toArray: function toArray(a, b) {
      return void 0 === a && (a = []), void 0 === b && (b = 0), a[b] = this.x, a[b + 1] = this.y, a[b + 2] = this.z, a;
    }, fromBufferAttribute: function fromBufferAttribute(a, b, c) {
      return void 0 !== c && console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."), this.x = a.getX(b), this.y = a.getY(b), this.z = a.getZ(b), this;
    } }), Object.assign(g.prototype, { isMatrix3: !0, set: function set(a, b, c, d, e, f, g, h, i) {
      var j = this.elements;return j[0] = a, j[1] = d, j[2] = g, j[3] = b, j[4] = e, j[5] = h, j[6] = c, j[7] = f, j[8] = i, this;
    }, identity: function identity() {
      return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this;
    }, clone: function clone() {
      return new this.constructor().fromArray(this.elements);
    }, copy: function copy(a) {
      var b = this.elements,
          c = a.elements;return b[0] = c[0], b[1] = c[1], b[2] = c[2], b[3] = c[3], b[4] = c[4], b[5] = c[5], b[6] = c[6], b[7] = c[7], b[8] = c[8], this;
    }, setFromMatrix4: function setFromMatrix4(a) {
      var b = a.elements;return this.set(b[0], b[4], b[8], b[1], b[5], b[9], b[2], b[6], b[10]), this;
    }, applyToBufferAttribute: function () {
      var a = new f();return function (b) {
        for (var c = 0, d = b.count; c < d; c++) {
          a.x = b.getX(c), a.y = b.getY(c), a.z = b.getZ(c), a.applyMatrix3(this), b.setXYZ(c, a.x, a.y, a.z);
        }return b;
      };
    }(), multiply: function multiply(a) {
      return this.multiplyMatrices(this, a);
    }, premultiply: function premultiply(a) {
      return this.multiplyMatrices(a, this);
    }, multiplyMatrices: function multiplyMatrices(a, b) {
      var c = a.elements,
          d = b.elements,
          e = this.elements,
          f = c[0],
          g = c[3],
          h = c[6],
          i = c[1],
          j = c[4],
          k = c[7],
          l = c[2],
          m = c[5],
          n = c[8],
          o = d[0],
          p = d[3],
          q = d[6],
          r = d[1],
          s = d[4],
          t = d[7],
          u = d[2],
          v = d[5],
          w = d[8];return e[0] = f * o + g * r + h * u, e[3] = f * p + g * s + h * v, e[6] = f * q + g * t + h * w, e[1] = i * o + j * r + k * u, e[4] = i * p + j * s + k * v, e[7] = i * q + j * t + k * w, e[2] = l * o + m * r + n * u, e[5] = l * p + m * s + n * v, e[8] = l * q + m * t + n * w, this;
    }, multiplyScalar: function multiplyScalar(a) {
      var b = this.elements;return b[0] *= a, b[3] *= a, b[6] *= a, b[1] *= a, b[4] *= a, b[7] *= a, b[2] *= a, b[5] *= a, b[8] *= a, this;
    }, determinant: function determinant() {
      var a = this.elements,
          b = a[0],
          c = a[1],
          d = a[2],
          e = a[3],
          f = a[4],
          g = a[5],
          h = a[6],
          i = a[7],
          j = a[8];return b * f * j - b * g * i - c * e * j + c * g * h + d * e * i - d * f * h;
    }, getInverse: function getInverse(a, b) {
      a && a.isMatrix4 && console.error("THREE.Matrix3: .getInverse() no longer takes a Matrix4 argument.");var c = a.elements,
          d = this.elements,
          e = c[0],
          f = c[1],
          g = c[2],
          h = c[3],
          i = c[4],
          j = c[5],
          k = c[6],
          l = c[7],
          m = c[8],
          n = m * i - j * l,
          o = j * k - m * h,
          p = l * h - i * k,
          q = e * n + f * o + g * p;if (0 === q) {
        var r = "THREE.Matrix3: .getInverse() can't invert matrix, determinant is 0";if (!0 === b) throw new Error(r);return console.warn(r), this.identity();
      }var s = 1 / q;return d[0] = n * s, d[1] = (g * l - m * f) * s, d[2] = (j * f - g * i) * s, d[3] = o * s, d[4] = (m * e - g * k) * s, d[5] = (g * h - j * e) * s, d[6] = p * s, d[7] = (f * k - l * e) * s, d[8] = (i * e - f * h) * s, this;
    }, transpose: function transpose() {
      var a,
          b = this.elements;return a = b[1], b[1] = b[3], b[3] = a, a = b[2], b[2] = b[6], b[6] = a, a = b[5], b[5] = b[7], b[7] = a, this;
    }, getNormalMatrix: function getNormalMatrix(a) {
      return this.setFromMatrix4(a).getInverse(this).transpose();
    }, transposeIntoArray: function transposeIntoArray(a) {
      var b = this.elements;return a[0] = b[0], a[1] = b[3], a[2] = b[6], a[3] = b[1], a[4] = b[4], a[5] = b[7], a[6] = b[2], a[7] = b[5], a[8] = b[8], this;
    }, setUvTransform: function setUvTransform(a, b, c, d, e, f, g) {
      var h = Math.cos(e),
          i = Math.sin(e);this.set(c * h, c * i, -c * (h * f + i * g) + f + a, -d * i, d * h, -d * (-i * f + h * g) + g + b, 0, 0, 1);
    }, scale: function scale(a, b) {
      var c = this.elements;return c[0] *= a, c[3] *= a, c[6] *= a, c[1] *= b, c[4] *= b, c[7] *= b, this;
    }, rotate: function rotate(a) {
      var b = Math.cos(a),
          c = Math.sin(a),
          d = this.elements,
          e = d[0],
          f = d[3],
          g = d[6],
          h = d[1],
          i = d[4],
          j = d[7];return d[0] = b * e + c * h, d[3] = b * f + c * i, d[6] = b * g + c * j, d[1] = -c * e + b * h, d[4] = -c * f + b * i, d[7] = -c * g + b * j, this;
    }, translate: function translate(a, b) {
      var c = this.elements;return c[0] += a * c[2], c[3] += a * c[5], c[6] += a * c[8], c[1] += b * c[2], c[4] += b * c[5], c[7] += b * c[8], this;
    }, equals: function equals(a) {
      for (var b = this.elements, c = a.elements, d = 0; d < 9; d++) {
        if (b[d] !== c[d]) return !1;
      }return !0;
    }, fromArray: function fromArray(a, b) {
      void 0 === b && (b = 0);for (var c = 0; c < 9; c++) {
        this.elements[c] = a[c + b];
      }return this;
    }, toArray: function toArray(a, b) {
      void 0 === a && (a = []), void 0 === b && (b = 0);var c = this.elements;return a[b] = c[0], a[b + 1] = c[1], a[b + 2] = c[2], a[b + 3] = c[3], a[b + 4] = c[4], a[b + 5] = c[5], a[b + 6] = c[6], a[b + 7] = c[7], a[b + 8] = c[8], a;
    } });var zd = 0;h.DEFAULT_IMAGE = void 0, h.DEFAULT_MAPPING = vc, h.prototype = Object.assign(Object.create(b.prototype), { constructor: h, isTexture: !0, clone: function clone() {
      return new this.constructor().copy(this);
    }, copy: function copy(a) {
      return this.name = a.name, this.image = a.image, this.mipmaps = a.mipmaps.slice(0), this.mapping = a.mapping, this.wrapS = a.wrapS, this.wrapT = a.wrapT, this.magFilter = a.magFilter, this.minFilter = a.minFilter, this.anisotropy = a.anisotropy, this.format = a.format, this.type = a.type, this.offset.copy(a.offset), this.repeat.copy(a.repeat), this.center.copy(a.center), this.rotation = a.rotation, this.matrixAutoUpdate = a.matrixAutoUpdate, this.matrix.copy(a.matrix), this.generateMipmaps = a.generateMipmaps, this.premultiplyAlpha = a.premultiplyAlpha, this.flipY = a.flipY, this.unpackAlignment = a.unpackAlignment, this.encoding = a.encoding, this;
    }, toJSON: function toJSON(a) {
      function b(a) {
        var b;if (a instanceof HTMLCanvasElement) b = a;else {
          b = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas"), b.width = a.width, b.height = a.height;var c = b.getContext("2d");a instanceof ImageData ? c.putImageData(a, 0, 0) : c.drawImage(a, 0, 0, a.width, a.height);
        }return b.width > 2048 || b.height > 2048 ? b.toDataURL("image/jpeg", .6) : b.toDataURL("image/png");
      }var c = void 0 === a || "string" == typeof a;if (!c && void 0 !== a.textures[this.uuid]) return a.textures[this.uuid];var d = { metadata: { version: 4.5, type: "Texture", generator: "Texture.toJSON" }, uuid: this.uuid, name: this.name, mapping: this.mapping, repeat: [this.repeat.x, this.repeat.y], offset: [this.offset.x, this.offset.y], center: [this.center.x, this.center.y], rotation: this.rotation, wrap: [this.wrapS, this.wrapT], minFilter: this.minFilter, magFilter: this.magFilter, anisotropy: this.anisotropy, flipY: this.flipY };if (void 0 !== this.image) {
        var e = this.image;void 0 === e.uuid && (e.uuid = yd.generateUUID()), c || void 0 !== a.images[e.uuid] || (a.images[e.uuid] = { uuid: e.uuid, url: b(e) }), d.image = e.uuid;
      }return c || (a.textures[this.uuid] = d), d;
    }, dispose: function dispose() {
      this.dispatchEvent({ type: "dispose" });
    }, transformUv: function transformUv(a) {
      if (this.mapping === vc) {
        if (a.applyMatrix3(this.matrix), a.x < 0 || a.x > 1) switch (this.wrapS) {case Dc:
            a.x = a.x - Math.floor(a.x);break;case Ec:
            a.x = a.x < 0 ? 0 : 1;break;case Fc:
            1 === Math.abs(Math.floor(a.x) % 2) ? a.x = Math.ceil(a.x) - a.x : a.x = a.x - Math.floor(a.x);}if (a.y < 0 || a.y > 1) switch (this.wrapT) {case Dc:
            a.y = a.y - Math.floor(a.y);break;case Ec:
            a.y = a.y < 0 ? 0 : 1;break;case Fc:
            1 === Math.abs(Math.floor(a.y) % 2) ? a.y = Math.ceil(a.y) - a.y : a.y = a.y - Math.floor(a.y);}this.flipY && (a.y = 1 - a.y);
      }
    } }), Object.defineProperty(h.prototype, "needsUpdate", { set: function set(a) {
      !0 === a && this.version++;
    } }), Object.assign(i.prototype, { isVector4: !0, set: function set(a, b, c, d) {
      return this.x = a, this.y = b, this.z = c, this.w = d, this;
    }, setScalar: function setScalar(a) {
      return this.x = a, this.y = a, this.z = a, this.w = a, this;
    }, setX: function setX(a) {
      return this.x = a, this;
    }, setY: function setY(a) {
      return this.y = a, this;
    }, setZ: function setZ(a) {
      return this.z = a, this;
    }, setW: function setW(a) {
      return this.w = a, this;
    }, setComponent: function setComponent(a, b) {
      switch (a) {case 0:
          this.x = b;break;case 1:
          this.y = b;break;case 2:
          this.z = b;break;case 3:
          this.w = b;break;default:
          throw new Error("index is out of range: " + a);}return this;
    }, getComponent: function getComponent(a) {
      switch (a) {case 0:
          return this.x;case 1:
          return this.y;case 2:
          return this.z;case 3:
          return this.w;default:
          throw new Error("index is out of range: " + a);}
    }, clone: function clone() {
      return new this.constructor(this.x, this.y, this.z, this.w);
    }, copy: function copy(a) {
      return this.x = a.x, this.y = a.y, this.z = a.z, this.w = void 0 !== a.w ? a.w : 1, this;
    }, add: function add(a, b) {
      return void 0 !== b ? (console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(a, b)) : (this.x += a.x, this.y += a.y, this.z += a.z, this.w += a.w, this);
    }, addScalar: function addScalar(a) {
      return this.x += a, this.y += a, this.z += a, this.w += a, this;
    }, addVectors: function addVectors(a, b) {
      return this.x = a.x + b.x, this.y = a.y + b.y, this.z = a.z + b.z, this.w = a.w + b.w, this;
    }, addScaledVector: function addScaledVector(a, b) {
      return this.x += a.x * b, this.y += a.y * b, this.z += a.z * b, this.w += a.w * b, this;
    }, sub: function sub(a, b) {
      return void 0 !== b ? (console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(a, b)) : (this.x -= a.x, this.y -= a.y, this.z -= a.z, this.w -= a.w, this);
    }, subScalar: function subScalar(a) {
      return this.x -= a, this.y -= a, this.z -= a, this.w -= a, this;
    }, subVectors: function subVectors(a, b) {
      return this.x = a.x - b.x, this.y = a.y - b.y, this.z = a.z - b.z, this.w = a.w - b.w, this;
    }, multiplyScalar: function multiplyScalar(a) {
      return this.x *= a, this.y *= a, this.z *= a, this.w *= a, this;
    }, applyMatrix4: function applyMatrix4(a) {
      var b = this.x,
          c = this.y,
          d = this.z,
          e = this.w,
          f = a.elements;return this.x = f[0] * b + f[4] * c + f[8] * d + f[12] * e, this.y = f[1] * b + f[5] * c + f[9] * d + f[13] * e, this.z = f[2] * b + f[6] * c + f[10] * d + f[14] * e, this.w = f[3] * b + f[7] * c + f[11] * d + f[15] * e, this;
    }, divideScalar: function divideScalar(a) {
      return this.multiplyScalar(1 / a);
    }, setAxisAngleFromQuaternion: function setAxisAngleFromQuaternion(a) {
      this.w = 2 * Math.acos(a.w);var b = Math.sqrt(1 - a.w * a.w);return b < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = a.x / b, this.y = a.y / b, this.z = a.z / b), this;
    }, setAxisAngleFromRotationMatrix: function setAxisAngleFromRotationMatrix(a) {
      var b,
          c,
          d,
          e,
          f = .01,
          g = .1,
          h = a.elements,
          i = h[0],
          j = h[4],
          k = h[8],
          l = h[1],
          m = h[5],
          n = h[9],
          o = h[2],
          p = h[6],
          q = h[10];if (Math.abs(j - l) < f && Math.abs(k - o) < f && Math.abs(n - p) < f) {
        if (Math.abs(j + l) < g && Math.abs(k + o) < g && Math.abs(n + p) < g && Math.abs(i + m + q - 3) < g) return this.set(1, 0, 0, 0), this;b = Math.PI;var r = (i + 1) / 2,
            s = (m + 1) / 2,
            t = (q + 1) / 2,
            u = (j + l) / 4,
            v = (k + o) / 4,
            w = (n + p) / 4;return r > s && r > t ? r < f ? (c = 0, d = .707106781, e = .707106781) : (c = Math.sqrt(r), d = u / c, e = v / c) : s > t ? s < f ? (c = .707106781, d = 0, e = .707106781) : (d = Math.sqrt(s), c = u / d, e = w / d) : t < f ? (c = .707106781, d = .707106781, e = 0) : (e = Math.sqrt(t), c = v / e, d = w / e), this.set(c, d, e, b), this;
      }var x = Math.sqrt((p - n) * (p - n) + (k - o) * (k - o) + (l - j) * (l - j));return Math.abs(x) < .001 && (x = 1), this.x = (p - n) / x, this.y = (k - o) / x, this.z = (l - j) / x, this.w = Math.acos((i + m + q - 1) / 2), this;
    }, min: function min(a) {
      return this.x = Math.min(this.x, a.x), this.y = Math.min(this.y, a.y), this.z = Math.min(this.z, a.z), this.w = Math.min(this.w, a.w), this;
    }, max: function max(a) {
      return this.x = Math.max(this.x, a.x), this.y = Math.max(this.y, a.y), this.z = Math.max(this.z, a.z), this.w = Math.max(this.w, a.w), this;
    }, clamp: function clamp(a, b) {
      return this.x = Math.max(a.x, Math.min(b.x, this.x)), this.y = Math.max(a.y, Math.min(b.y, this.y)), this.z = Math.max(a.z, Math.min(b.z, this.z)), this.w = Math.max(a.w, Math.min(b.w, this.w)), this;
    }, clampScalar: function () {
      var a, b;return function (c, d) {
        return void 0 === a && (a = new i(), b = new i()), a.set(c, c, c, c), b.set(d, d, d, d), this.clamp(a, b);
      };
    }(), clampLength: function clampLength(a, b) {
      var c = this.length();return this.divideScalar(c || 1).multiplyScalar(Math.max(a, Math.min(b, c)));
    }, floor: function floor() {
      return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this;
    }, ceil: function ceil() {
      return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this;
    }, round: function round() {
      return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this;
    }, roundToZero: function roundToZero() {
      return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this.w = this.w < 0 ? Math.ceil(this.w) : Math.floor(this.w), this;
    }, negate: function negate() {
      return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this;
    }, dot: function dot(a) {
      return this.x * a.x + this.y * a.y + this.z * a.z + this.w * a.w;
    }, lengthSq: function lengthSq() {
      return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
    }, length: function length() {
      return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
    }, manhattanLength: function manhattanLength() {
      return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w);
    }, normalize: function normalize() {
      return this.divideScalar(this.length() || 1);
    }, setLength: function setLength(a) {
      return this.normalize().multiplyScalar(a);
    }, lerp: function lerp(a, b) {
      return this.x += (a.x - this.x) * b, this.y += (a.y - this.y) * b, this.z += (a.z - this.z) * b, this.w += (a.w - this.w) * b, this;
    }, lerpVectors: function lerpVectors(a, b, c) {
      return this.subVectors(b, a).multiplyScalar(c).add(a);
    }, equals: function equals(a) {
      return a.x === this.x && a.y === this.y && a.z === this.z && a.w === this.w;
    }, fromArray: function fromArray(a, b) {
      return void 0 === b && (b = 0), this.x = a[b], this.y = a[b + 1], this.z = a[b + 2], this.w = a[b + 3], this;
    }, toArray: function toArray(a, b) {
      return void 0 === a && (a = []), void 0 === b && (b = 0), a[b] = this.x, a[b + 1] = this.y, a[b + 2] = this.z, a[b + 3] = this.w, a;
    }, fromBufferAttribute: function fromBufferAttribute(a, b, c) {
      return void 0 !== c && console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."), this.x = a.getX(b), this.y = a.getY(b), this.z = a.getZ(b), this.w = a.getW(b), this;
    } }), j.prototype = Object.assign(Object.create(b.prototype), { constructor: j, isWebGLRenderTarget: !0, setSize: function setSize(a, b) {
      this.width === a && this.height === b || (this.width = a, this.height = b, this.dispose()), this.viewport.set(0, 0, a, b), this.scissor.set(0, 0, a, b);
    }, clone: function clone() {
      return new this.constructor().copy(this);
    }, copy: function copy(a) {
      return this.width = a.width, this.height = a.height, this.viewport.copy(a.viewport), this.texture = a.texture.clone(), this.depthBuffer = a.depthBuffer, this.stencilBuffer = a.stencilBuffer, this.depthTexture = a.depthTexture, this;
    }, dispose: function dispose() {
      this.dispatchEvent({ type: "dispose" });
    } }), k.prototype = Object.create(h.prototype), k.prototype.constructor = k, k.prototype.isDataTexture = !0, l.prototype = Object.create(h.prototype), l.prototype.constructor = l, l.prototype.isCubeTexture = !0, Object.defineProperty(l.prototype, "images", { get: function get() {
      return this.image;
    }, set: function set(a) {
      this.image = a;
    } });var Ad = new h(),
      Bd = new l(),
      Cd = [],
      Dd = [],
      Ed = new Float32Array(16),
      Fd = new Float32Array(9);Q.prototype.setValue = function (a, b) {
    for (var c = this.seq, d = 0, e = c.length; d !== e; ++d) {
      var f = c[d];f.setValue(a, b[f.id]);
    }
  };var Gd = /([\w\d_]+)(\])?(\[|\.)?/g;T.prototype.setValue = function (a, b, c) {
    var d = this.map[b];void 0 !== d && d.setValue(a, c, this.renderer);
  }, T.prototype.setOptional = function (a, b, c) {
    var d = b[c];void 0 !== d && this.setValue(a, c, d);
  }, T.upload = function (a, b, c, d) {
    for (var e = 0, f = b.length; e !== f; ++e) {
      var g = b[e],
          h = c[g.id];!1 !== h.needsUpdate && g.setValue(a, h.value, d);
    }
  }, T.seqWithValue = function (a, b) {
    for (var c = [], d = 0, e = a.length; d !== e; ++d) {
      var f = a[d];f.id in b && c.push(f);
    }return c;
  };var Hd = { aliceblue: 15792383, antiquewhite: 16444375, aqua: 65535, aquamarine: 8388564, azure: 15794175, beige: 16119260, bisque: 16770244, black: 0, blanchedalmond: 16772045, blue: 255, blueviolet: 9055202, brown: 10824234, burlywood: 14596231, cadetblue: 6266528, chartreuse: 8388352, chocolate: 13789470, coral: 16744272, cornflowerblue: 6591981, cornsilk: 16775388, crimson: 14423100, cyan: 65535, darkblue: 139, darkcyan: 35723, darkgoldenrod: 12092939, darkgray: 11119017, darkgreen: 25600, darkgrey: 11119017, darkkhaki: 12433259, darkmagenta: 9109643, darkolivegreen: 5597999, darkorange: 16747520, darkorchid: 10040012, darkred: 9109504, darksalmon: 15308410, darkseagreen: 9419919, darkslateblue: 4734347, darkslategray: 3100495, darkslategrey: 3100495, darkturquoise: 52945, darkviolet: 9699539, deeppink: 16716947, deepskyblue: 49151, dimgray: 6908265, dimgrey: 6908265, dodgerblue: 2003199, firebrick: 11674146, floralwhite: 16775920, forestgreen: 2263842, fuchsia: 16711935, gainsboro: 14474460, ghostwhite: 16316671, gold: 16766720, goldenrod: 14329120, gray: 8421504, green: 32768, greenyellow: 11403055, grey: 8421504, honeydew: 15794160, hotpink: 16738740, indianred: 13458524, indigo: 4915330, ivory: 16777200, khaki: 15787660, lavender: 15132410, lavenderblush: 16773365, lawngreen: 8190976, lemonchiffon: 16775885, lightblue: 11393254, lightcoral: 15761536, lightcyan: 14745599, lightgoldenrodyellow: 16448210, lightgray: 13882323, lightgreen: 9498256, lightgrey: 13882323, lightpink: 16758465, lightsalmon: 16752762, lightseagreen: 2142890, lightskyblue: 8900346, lightslategray: 7833753, lightslategrey: 7833753, lightsteelblue: 11584734, lightyellow: 16777184, lime: 65280, limegreen: 3329330, linen: 16445670, magenta: 16711935, maroon: 8388608, mediumaquamarine: 6737322, mediumblue: 205, mediumorchid: 12211667, mediumpurple: 9662683, mediumseagreen: 3978097, mediumslateblue: 8087790, mediumspringgreen: 64154, mediumturquoise: 4772300, mediumvioletred: 13047173, midnightblue: 1644912, mintcream: 16121850, mistyrose: 16770273, moccasin: 16770229, navajowhite: 16768685, navy: 128, oldlace: 16643558, olive: 8421376, olivedrab: 7048739, orange: 16753920, orangered: 16729344, orchid: 14315734, palegoldenrod: 15657130, palegreen: 10025880, paleturquoise: 11529966, palevioletred: 14381203, papayawhip: 16773077, peachpuff: 16767673, peru: 13468991, pink: 16761035, plum: 14524637, powderblue: 11591910, purple: 8388736, rebeccapurple: 6697881, red: 16711680, rosybrown: 12357519, royalblue: 4286945, saddlebrown: 9127187, salmon: 16416882, sandybrown: 16032864, seagreen: 3050327, seashell: 16774638, sienna: 10506797, silver: 12632256, skyblue: 8900331, slateblue: 6970061, slategray: 7372944, slategrey: 7372944, snow: 16775930, springgreen: 65407, steelblue: 4620980, tan: 13808780, teal: 32896, thistle: 14204888, tomato: 16737095, turquoise: 4251856, violet: 15631086, wheat: 16113331, white: 16777215, whitesmoke: 16119285, yellow: 16776960, yellowgreen: 10145074 };Object.assign(U.prototype, { isColor: !0, r: 1, g: 1, b: 1, set: function set(a) {
      return a && a.isColor ? this.copy(a) : "number" == typeof a ? this.setHex(a) : "string" == typeof a && this.setStyle(a), this;
    }, setScalar: function setScalar(a) {
      return this.r = a, this.g = a, this.b = a, this;
    }, setHex: function setHex(a) {
      return a = Math.floor(a), this.r = (a >> 16 & 255) / 255, this.g = (a >> 8 & 255) / 255, this.b = (255 & a) / 255, this;
    }, setRGB: function setRGB(a, b, c) {
      return this.r = a, this.g = b, this.b = c, this;
    }, setHSL: function () {
      function a(a, b, c) {
        return c < 0 && (c += 1), c > 1 && (c -= 1), c < 1 / 6 ? a + 6 * (b - a) * c : c < .5 ? b : c < 2 / 3 ? a + 6 * (b - a) * (2 / 3 - c) : a;
      }return function (b, c, d) {
        if (b = yd.euclideanModulo(b, 1), c = yd.clamp(c, 0, 1), d = yd.clamp(d, 0, 1), 0 === c) this.r = this.g = this.b = d;else {
          var e = d <= .5 ? d * (1 + c) : d + c - d * c,
              f = 2 * d - e;this.r = a(f, e, b + 1 / 3), this.g = a(f, e, b), this.b = a(f, e, b - 1 / 3);
        }return this;
      };
    }(), setStyle: function setStyle(a) {
      function b(b) {
        void 0 !== b && parseFloat(b) < 1 && console.warn("THREE.Color: Alpha component of " + a + " will be ignored.");
      }var c;if (c = /^((?:rgb|hsl)a?)\(\s*([^\)]*)\)/.exec(a)) {
        var d,
            e = c[1],
            f = c[2];switch (e) {case "rgb":case "rgba":
            if (d = /^(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(f)) return this.r = Math.min(255, parseInt(d[1], 10)) / 255, this.g = Math.min(255, parseInt(d[2], 10)) / 255, this.b = Math.min(255, parseInt(d[3], 10)) / 255, b(d[5]), this;if (d = /^(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(f)) return this.r = Math.min(100, parseInt(d[1], 10)) / 100, this.g = Math.min(100, parseInt(d[2], 10)) / 100, this.b = Math.min(100, parseInt(d[3], 10)) / 100, b(d[5]), this;break;case "hsl":case "hsla":
            if (d = /^([0-9]*\.?[0-9]+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(f)) {
              var g = parseFloat(d[1]) / 360,
                  h = parseInt(d[2], 10) / 100,
                  i = parseInt(d[3], 10) / 100;return b(d[5]), this.setHSL(g, h, i);
            }}
      } else if (c = /^\#([A-Fa-f0-9]+)$/.exec(a)) {
        var j = c[1],
            k = j.length;if (3 === k) return this.r = parseInt(j.charAt(0) + j.charAt(0), 16) / 255, this.g = parseInt(j.charAt(1) + j.charAt(1), 16) / 255, this.b = parseInt(j.charAt(2) + j.charAt(2), 16) / 255, this;if (6 === k) return this.r = parseInt(j.charAt(0) + j.charAt(1), 16) / 255, this.g = parseInt(j.charAt(2) + j.charAt(3), 16) / 255, this.b = parseInt(j.charAt(4) + j.charAt(5), 16) / 255, this;
      }if (a && a.length > 0) {
        var j = Hd[a];void 0 !== j ? this.setHex(j) : console.warn("THREE.Color: Unknown color " + a);
      }return this;
    }, clone: function clone() {
      return new this.constructor(this.r, this.g, this.b);
    }, copy: function copy(a) {
      return this.r = a.r, this.g = a.g, this.b = a.b, this;
    }, copyGammaToLinear: function copyGammaToLinear(a, b) {
      return void 0 === b && (b = 2), this.r = Math.pow(a.r, b), this.g = Math.pow(a.g, b), this.b = Math.pow(a.b, b), this;
    }, copyLinearToGamma: function copyLinearToGamma(a, b) {
      void 0 === b && (b = 2);var c = b > 0 ? 1 / b : 1;return this.r = Math.pow(a.r, c), this.g = Math.pow(a.g, c), this.b = Math.pow(a.b, c), this;
    }, convertGammaToLinear: function convertGammaToLinear() {
      var a = this.r,
          b = this.g,
          c = this.b;return this.r = a * a, this.g = b * b, this.b = c * c, this;
    }, convertLinearToGamma: function convertLinearToGamma() {
      return this.r = Math.sqrt(this.r), this.g = Math.sqrt(this.g), this.b = Math.sqrt(this.b), this;
    }, getHex: function getHex() {
      return 255 * this.r << 16 ^ 255 * this.g << 8 ^ 255 * this.b << 0;
    }, getHexString: function getHexString() {
      return ("000000" + this.getHex().toString(16)).slice(-6);
    }, getHSL: function getHSL(a) {
      var b,
          c,
          d = a || { h: 0, s: 0, l: 0 },
          e = this.r,
          f = this.g,
          g = this.b,
          h = Math.max(e, f, g),
          i = Math.min(e, f, g),
          j = (i + h) / 2;if (i === h) b = 0, c = 0;else {
        var k = h - i;switch (c = j <= .5 ? k / (h + i) : k / (2 - h - i), h) {case e:
            b = (f - g) / k + (f < g ? 6 : 0);break;case f:
            b = (g - e) / k + 2;break;case g:
            b = (e - f) / k + 4;}b /= 6;
      }return d.h = b, d.s = c, d.l = j, d;
    }, getStyle: function getStyle() {
      return "rgb(" + (255 * this.r | 0) + "," + (255 * this.g | 0) + "," + (255 * this.b | 0) + ")";
    }, offsetHSL: function offsetHSL(a, b, c) {
      var d = this.getHSL();return d.h += a, d.s += b, d.l += c, this.setHSL(d.h, d.s, d.l), this;
    }, add: function add(a) {
      return this.r += a.r, this.g += a.g, this.b += a.b, this;
    }, addColors: function addColors(a, b) {
      return this.r = a.r + b.r, this.g = a.g + b.g, this.b = a.b + b.b, this;
    }, addScalar: function addScalar(a) {
      return this.r += a, this.g += a, this.b += a, this;
    }, sub: function sub(a) {
      return this.r = Math.max(0, this.r - a.r), this.g = Math.max(0, this.g - a.g), this.b = Math.max(0, this.b - a.b), this;
    }, multiply: function multiply(a) {
      return this.r *= a.r, this.g *= a.g, this.b *= a.b, this;
    }, multiplyScalar: function multiplyScalar(a) {
      return this.r *= a, this.g *= a, this.b *= a, this;
    }, lerp: function lerp(a, b) {
      return this.r += (a.r - this.r) * b, this.g += (a.g - this.g) * b, this.b += (a.b - this.b) * b, this;
    }, equals: function equals(a) {
      return a.r === this.r && a.g === this.g && a.b === this.b;
    }, fromArray: function fromArray(a, b) {
      return void 0 === b && (b = 0), this.r = a[b], this.g = a[b + 1], this.b = a[b + 2], this;
    }, toArray: function toArray(a, b) {
      return void 0 === a && (a = []), void 0 === b && (b = 0), a[b] = this.r, a[b + 1] = this.g, a[b + 2] = this.b, a;
    }, toJSON: function toJSON() {
      return this.getHex();
    } });var Id = { common: { diffuse: { value: new U(15658734) }, opacity: { value: 1 }, map: { value: null }, uvTransform: { value: new g() }, alphaMap: { value: null } }, specularmap: { specularMap: { value: null } }, envmap: { envMap: { value: null }, flipEnvMap: { value: -1 }, reflectivity: { value: 1 }, refractionRatio: { value: .98 } }, aomap: { aoMap: { value: null }, aoMapIntensity: { value: 1 } }, lightmap: { lightMap: { value: null }, lightMapIntensity: { value: 1 } }, emissivemap: { emissiveMap: { value: null } }, bumpmap: { bumpMap: { value: null }, bumpScale: { value: 1 } }, normalmap: { normalMap: { value: null }, normalScale: { value: new c(1, 1) } }, displacementmap: { displacementMap: { value: null }, displacementScale: { value: 1 }, displacementBias: { value: 0 } }, roughnessmap: { roughnessMap: { value: null } }, metalnessmap: { metalnessMap: { value: null } }, gradientmap: { gradientMap: { value: null } }, fog: { fogDensity: { value: 25e-5 }, fogNear: { value: 1 }, fogFar: { value: 2e3 }, fogColor: { value: new U(16777215) } }, lights: { ambientLightColor: { value: [] }, directionalLights: { value: [], properties: { direction: {}, color: {}, shadow: {}, shadowBias: {}, shadowRadius: {}, shadowMapSize: {} } }, directionalShadowMap: { value: [] }, directionalShadowMatrix: { value: [] }, spotLights: { value: [], properties: { color: {}, position: {}, direction: {}, distance: {}, coneCos: {}, penumbraCos: {}, decay: {}, shadow: {}, shadowBias: {}, shadowRadius: {}, shadowMapSize: {} } }, spotShadowMap: { value: [] }, spotShadowMatrix: { value: [] }, pointLights: { value: [], properties: { color: {}, position: {}, decay: {}, distance: {}, shadow: {}, shadowBias: {}, shadowRadius: {}, shadowMapSize: {}, shadowCameraNear: {}, shadowCameraFar: {} } }, pointShadowMap: { value: [] }, pointShadowMatrix: { value: [] }, hemisphereLights: { value: [], properties: { direction: {}, skyColor: {}, groundColor: {} } }, rectAreaLights: { value: [], properties: { color: {}, position: {}, width: {}, height: {} } } }, points: { diffuse: { value: new U(15658734) }, opacity: { value: 1 }, size: { value: 1 }, scale: { value: 1 }, map: { value: null }, uvTransform: { value: new g() } } },
      Jd = { merge: function merge(a) {
      for (var b = {}, c = 0; c < a.length; c++) {
        var d = this.clone(a[c]);for (var e in d) {
          b[e] = d[e];
        }
      }return b;
    }, clone: function clone(a) {
      var b = {};for (var c in a) {
        b[c] = {};for (var d in a[c]) {
          var e = a[c][d];e && (e.isColor || e.isMatrix3 || e.isMatrix4 || e.isVector2 || e.isVector3 || e.isVector4 || e.isTexture) ? b[c][d] = e.clone() : Array.isArray(e) ? b[c][d] = e.slice() : b[c][d] = e;
        }
      }return b;
    } },
      Kd = "#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, vUv ).g;\n#endif\n",
      Ld = "#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif\n",
      Md = "#ifdef ALPHATEST\n\tif ( diffuseColor.a < ALPHATEST ) discard;\n#endif\n",
      Nd = "#ifdef USE_AOMAP\n\tfloat ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;\n\treflectedLight.indirectDiffuse *= ambientOcclusion;\n\t#if defined( USE_ENVMAP ) && defined( PHYSICAL )\n\t\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\t\treflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );\n\t#endif\n#endif\n",
      Od = "#ifdef USE_AOMAP\n\tuniform sampler2D aoMap;\n\tuniform float aoMapIntensity;\n#endif",
      Pd = "\nvec3 transformed = vec3( position );\n",
      Qd = "\nvec3 objectNormal = vec3( normal );\n",
      Rd = "float punctualLightIntensityToIrradianceFactor( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n\tif( decayExponent > 0.0 ) {\n#if defined ( PHYSICALLY_CORRECT_LIGHTS )\n\t\tfloat distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n\t\tfloat maxDistanceCutoffFactor = pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n\t\treturn distanceFalloff * maxDistanceCutoffFactor;\n#else\n\t\treturn pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );\n#endif\n\t}\n\treturn 1.0;\n}\nvec3 BRDF_Diffuse_Lambert( const in vec3 diffuseColor ) {\n\treturn RECIPROCAL_PI * diffuseColor;\n}\nvec3 F_Schlick( const in vec3 specularColor, const in float dotLH ) {\n\tfloat fresnel = exp2( ( -5.55473 * dotLH - 6.98316 ) * dotLH );\n\treturn ( 1.0 - specularColor ) * fresnel + specularColor;\n}\nfloat G_GGX_Smith( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gl = dotNL + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\tfloat gv = dotNV + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\treturn 1.0 / ( gl * gv );\n}\nfloat G_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\tfloat gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\treturn 0.5 / max( gv + gl, EPSILON );\n}\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n\tfloat a2 = pow2( alpha );\n\tfloat denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;\n\treturn RECIPROCAL_PI * a2 / pow2( denom );\n}\nvec3 BRDF_Specular_GGX( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float roughness ) {\n\tfloat alpha = pow2( roughness );\n\tvec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );\n\tfloat dotNL = saturate( dot( geometry.normal, incidentLight.direction ) );\n\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\tfloat dotNH = saturate( dot( geometry.normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n\tfloat D = D_GGX( alpha, dotNH );\n\treturn F * ( G * D );\n}\nvec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {\n\tconst float LUT_SIZE  = 64.0;\n\tconst float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;\n\tconst float LUT_BIAS  = 0.5 / LUT_SIZE;\n\tfloat theta = acos( dot( N, V ) );\n\tvec2 uv = vec2(\n\t\tsqrt( saturate( roughness ) ),\n\t\tsaturate( theta / ( 0.5 * PI ) ) );\n\tuv = uv * LUT_SCALE + LUT_BIAS;\n\treturn uv;\n}\nfloat LTC_ClippedSphereFormFactor( const in vec3 f ) {\n\tfloat l = length( f );\n\treturn max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );\n}\nvec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {\n\tfloat x = dot( v1, v2 );\n\tfloat y = abs( x );\n\tfloat a = 0.86267 + (0.49788 + 0.01436 * y ) * y;\n\tfloat b = 3.45068 + (4.18814 + y) * y;\n\tfloat v = a / b;\n\tfloat theta_sintheta = (x > 0.0) ? v : 0.5 * inversesqrt( 1.0 - x * x ) - v;\n\treturn cross( v1, v2 ) * theta_sintheta;\n}\nvec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {\n\tvec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];\n\tvec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];\n\tvec3 lightNormal = cross( v1, v2 );\n\tif( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );\n\tvec3 T1, T2;\n\tT1 = normalize( V - N * dot( V, N ) );\n\tT2 = - cross( N, T1 );\n\tmat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );\n\tvec3 coords[ 4 ];\n\tcoords[ 0 ] = mat * ( rectCoords[ 0 ] - P );\n\tcoords[ 1 ] = mat * ( rectCoords[ 1 ] - P );\n\tcoords[ 2 ] = mat * ( rectCoords[ 2 ] - P );\n\tcoords[ 3 ] = mat * ( rectCoords[ 3 ] - P );\n\tcoords[ 0 ] = normalize( coords[ 0 ] );\n\tcoords[ 1 ] = normalize( coords[ 1 ] );\n\tcoords[ 2 ] = normalize( coords[ 2 ] );\n\tcoords[ 3 ] = normalize( coords[ 3 ] );\n\tvec3 vectorFormFactor = vec3( 0.0 );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );\n\tvec3 result = vec3( LTC_ClippedSphereFormFactor( vectorFormFactor ) );\n\treturn result;\n}\nvec3 BRDF_Specular_GGX_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness ) {\n\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\tconst vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );\n\tconst vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );\n\tvec4 r = roughness * c0 + c1;\n\tfloat a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;\n\tvec2 AB = vec2( -1.04, 1.04 ) * a004 + r.zw;\n\treturn specularColor * AB.x + AB.y;\n}\nfloat G_BlinnPhong_Implicit( ) {\n\treturn 0.25;\n}\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n\treturn RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nvec3 BRDF_Specular_BlinnPhong( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess ) {\n\tvec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );\n\tfloat dotNH = saturate( dot( geometry.normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_BlinnPhong_Implicit( );\n\tfloat D = D_BlinnPhong( shininess, dotNH );\n\treturn F * ( G * D );\n}\nfloat GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {\n\treturn ( 2.0 / pow2( ggxRoughness + 0.0001 ) - 2.0 );\n}\nfloat BlinnExponentToGGXRoughness( const in float blinnExponent ) {\n\treturn sqrt( 2.0 / ( blinnExponent + 2.0 ) );\n}\n",
      Sd = "#ifdef USE_BUMPMAP\n\tuniform sampler2D bumpMap;\n\tuniform float bumpScale;\n\tvec2 dHdxy_fwd() {\n\t\tvec2 dSTdx = dFdx( vUv );\n\t\tvec2 dSTdy = dFdy( vUv );\n\t\tfloat Hll = bumpScale * texture2D( bumpMap, vUv ).x;\n\t\tfloat dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;\n\t\tfloat dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;\n\t\treturn vec2( dBx, dBy );\n\t}\n\tvec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy ) {\n\t\tvec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );\n\t\tvec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );\n\t\tvec3 vN = surf_norm;\n\t\tvec3 R1 = cross( vSigmaY, vN );\n\t\tvec3 R2 = cross( vN, vSigmaX );\n\t\tfloat fDet = dot( vSigmaX, R1 );\n\t\tvec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n\t\treturn normalize( abs( fDet ) * surf_norm - vGrad );\n\t}\n#endif\n",
      Td = "#if NUM_CLIPPING_PLANES > 0\n\tfor ( int i = 0; i < UNION_CLIPPING_PLANES; ++ i ) {\n\t\tvec4 plane = clippingPlanes[ i ];\n\t\tif ( dot( vViewPosition, plane.xyz ) > plane.w ) discard;\n\t}\n\t\t\n\t#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n\t\tbool clipped = true;\n\t\tfor ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; ++ i ) {\n\t\t\tvec4 plane = clippingPlanes[ i ];\n\t\t\tclipped = ( dot( vViewPosition, plane.xyz ) > plane.w ) && clipped;\n\t\t}\n\t\tif ( clipped ) discard;\n\t\n\t#endif\n#endif\n",
      Ud = "#if NUM_CLIPPING_PLANES > 0\n\t#if ! defined( PHYSICAL ) && ! defined( PHONG )\n\t\tvarying vec3 vViewPosition;\n\t#endif\n\tuniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n#endif\n",
      Vd = "#if NUM_CLIPPING_PLANES > 0 && ! defined( PHYSICAL ) && ! defined( PHONG )\n\tvarying vec3 vViewPosition;\n#endif\n",
      Wd = "#if NUM_CLIPPING_PLANES > 0 && ! defined( PHYSICAL ) && ! defined( PHONG )\n\tvViewPosition = - mvPosition.xyz;\n#endif\n",
      Xd = "#ifdef USE_COLOR\n\tdiffuseColor.rgb *= vColor;\n#endif",
      Yd = "#ifdef USE_COLOR\n\tvarying vec3 vColor;\n#endif\n",
      Zd = "#ifdef USE_COLOR\n\tvarying vec3 vColor;\n#endif",
      $d = "#ifdef USE_COLOR\n\tvColor.xyz = color.xyz;\n#endif",
      _d = "#define PI 3.14159265359\n#define PI2 6.28318530718\n#define PI_HALF 1.5707963267949\n#define RECIPROCAL_PI 0.31830988618\n#define RECIPROCAL_PI2 0.15915494\n#define LOG2 1.442695\n#define EPSILON 1e-6\n#define saturate(a) clamp( a, 0.0, 1.0 )\n#define whiteCompliment(a) ( 1.0 - saturate( a ) )\nfloat pow2( const in float x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }\nhighp float rand( const in vec2 uv ) {\n\tconst highp float a = 12.9898, b = 78.233, c = 43758.5453;\n\thighp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n\treturn fract(sin(sn) * c);\n}\nstruct IncidentLight {\n\tvec3 color;\n\tvec3 direction;\n\tbool visible;\n};\nstruct ReflectedLight {\n\tvec3 directDiffuse;\n\tvec3 directSpecular;\n\tvec3 indirectDiffuse;\n\tvec3 indirectSpecular;\n};\nstruct GeometricContext {\n\tvec3 position;\n\tvec3 normal;\n\tvec3 viewDir;\n};\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n}\nvec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\tfloat distance = dot( planeNormal, point - pointOnPlane );\n\treturn - distance * planeNormal + point;\n}\nfloat sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn sign( dot( point - pointOnPlane, planeNormal ) );\n}\nvec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;\n}\nmat3 transposeMat3( const in mat3 m ) {\n\tmat3 tmp;\n\ttmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );\n\ttmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );\n\ttmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );\n\treturn tmp;\n}\nfloat linearToRelativeLuminance( const in vec3 color ) {\n\tvec3 weights = vec3( 0.2126, 0.7152, 0.0722 );\n\treturn dot( weights, color.rgb );\n}\n",
      ae = "#ifdef ENVMAP_TYPE_CUBE_UV\n#define cubeUV_textureSize (1024.0)\nint getFaceFromDirection(vec3 direction) {\n\tvec3 absDirection = abs(direction);\n\tint face = -1;\n\tif( absDirection.x > absDirection.z ) {\n\t\tif(absDirection.x > absDirection.y )\n\t\t\tface = direction.x > 0.0 ? 0 : 3;\n\t\telse\n\t\t\tface = direction.y > 0.0 ? 1 : 4;\n\t}\n\telse {\n\t\tif(absDirection.z > absDirection.y )\n\t\t\tface = direction.z > 0.0 ? 2 : 5;\n\t\telse\n\t\t\tface = direction.y > 0.0 ? 1 : 4;\n\t}\n\treturn face;\n}\n#define cubeUV_maxLods1  (log2(cubeUV_textureSize*0.25) - 1.0)\n#define cubeUV_rangeClamp (exp2((6.0 - 1.0) * 2.0))\nvec2 MipLevelInfo( vec3 vec, float roughnessLevel, float roughness ) {\n\tfloat scale = exp2(cubeUV_maxLods1 - roughnessLevel);\n\tfloat dxRoughness = dFdx(roughness);\n\tfloat dyRoughness = dFdy(roughness);\n\tvec3 dx = dFdx( vec * scale * dxRoughness );\n\tvec3 dy = dFdy( vec * scale * dyRoughness );\n\tfloat d = max( dot( dx, dx ), dot( dy, dy ) );\n\td = clamp(d, 1.0, cubeUV_rangeClamp);\n\tfloat mipLevel = 0.5 * log2(d);\n\treturn vec2(floor(mipLevel), fract(mipLevel));\n}\n#define cubeUV_maxLods2 (log2(cubeUV_textureSize*0.25) - 2.0)\n#define cubeUV_rcpTextureSize (1.0 / cubeUV_textureSize)\nvec2 getCubeUV(vec3 direction, float roughnessLevel, float mipLevel) {\n\tmipLevel = roughnessLevel > cubeUV_maxLods2 - 3.0 ? 0.0 : mipLevel;\n\tfloat a = 16.0 * cubeUV_rcpTextureSize;\n\tvec2 exp2_packed = exp2( vec2( roughnessLevel, mipLevel ) );\n\tvec2 rcp_exp2_packed = vec2( 1.0 ) / exp2_packed;\n\tfloat powScale = exp2_packed.x * exp2_packed.y;\n\tfloat scale = rcp_exp2_packed.x * rcp_exp2_packed.y * 0.25;\n\tfloat mipOffset = 0.75*(1.0 - rcp_exp2_packed.y) * rcp_exp2_packed.x;\n\tbool bRes = mipLevel == 0.0;\n\tscale =  bRes && (scale < a) ? a : scale;\n\tvec3 r;\n\tvec2 offset;\n\tint face = getFaceFromDirection(direction);\n\tfloat rcpPowScale = 1.0 / powScale;\n\tif( face == 0) {\n\t\tr = vec3(direction.x, -direction.z, direction.y);\n\t\toffset = vec2(0.0+mipOffset,0.75 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? a : offset.y;\n\t}\n\telse if( face == 1) {\n\t\tr = vec3(direction.y, direction.x, direction.z);\n\t\toffset = vec2(scale+mipOffset, 0.75 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? a : offset.y;\n\t}\n\telse if( face == 2) {\n\t\tr = vec3(direction.z, direction.x, direction.y);\n\t\toffset = vec2(2.0*scale+mipOffset, 0.75 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? a : offset.y;\n\t}\n\telse if( face == 3) {\n\t\tr = vec3(direction.x, direction.z, direction.y);\n\t\toffset = vec2(0.0+mipOffset,0.5 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? 0.0 : offset.y;\n\t}\n\telse if( face == 4) {\n\t\tr = vec3(direction.y, direction.x, -direction.z);\n\t\toffset = vec2(scale+mipOffset, 0.5 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? 0.0 : offset.y;\n\t}\n\telse {\n\t\tr = vec3(direction.z, -direction.x, direction.y);\n\t\toffset = vec2(2.0*scale+mipOffset, 0.5 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? 0.0 : offset.y;\n\t}\n\tr = normalize(r);\n\tfloat texelOffset = 0.5 * cubeUV_rcpTextureSize;\n\tvec2 s = ( r.yz / abs( r.x ) + vec2( 1.0 ) ) * 0.5;\n\tvec2 base = offset + vec2( texelOffset );\n\treturn base + s * ( scale - 2.0 * texelOffset );\n}\n#define cubeUV_maxLods3 (log2(cubeUV_textureSize*0.25) - 3.0)\nvec4 textureCubeUV(vec3 reflectedDirection, float roughness ) {\n\tfloat roughnessVal = roughness* cubeUV_maxLods3;\n\tfloat r1 = floor(roughnessVal);\n\tfloat r2 = r1 + 1.0;\n\tfloat t = fract(roughnessVal);\n\tvec2 mipInfo = MipLevelInfo(reflectedDirection, r1, roughness);\n\tfloat s = mipInfo.y;\n\tfloat level0 = mipInfo.x;\n\tfloat level1 = level0 + 1.0;\n\tlevel1 = level1 > 5.0 ? 5.0 : level1;\n\tlevel0 += min( floor( s + 0.5 ), 5.0 );\n\tvec2 uv_10 = getCubeUV(reflectedDirection, r1, level0);\n\tvec4 color10 = envMapTexelToLinear(texture2D(envMap, uv_10));\n\tvec2 uv_20 = getCubeUV(reflectedDirection, r2, level0);\n\tvec4 color20 = envMapTexelToLinear(texture2D(envMap, uv_20));\n\tvec4 result = mix(color10, color20, t);\n\treturn vec4(result.rgb, 1.0);\n}\n#endif\n",
      be = "vec3 transformedNormal = normalMatrix * objectNormal;\n#ifdef FLIP_SIDED\n\ttransformedNormal = - transformedNormal;\n#endif\n",
      ce = "#ifdef USE_DISPLACEMENTMAP\n\tuniform sampler2D displacementMap;\n\tuniform float displacementScale;\n\tuniform float displacementBias;\n#endif\n",
      de = "#ifdef USE_DISPLACEMENTMAP\n\ttransformed += normalize( objectNormal ) * ( texture2D( displacementMap, uv ).x * displacementScale + displacementBias );\n#endif\n",
      ee = "#ifdef USE_EMISSIVEMAP\n\tvec4 emissiveColor = texture2D( emissiveMap, vUv );\n\temissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;\n\ttotalEmissiveRadiance *= emissiveColor.rgb;\n#endif\n",
      fe = "#ifdef USE_EMISSIVEMAP\n\tuniform sampler2D emissiveMap;\n#endif\n",
      ge = "  gl_FragColor = linearToOutputTexel( gl_FragColor );\n",
      he = "\nvec4 LinearToLinear( in vec4 value ) {\n\treturn value;\n}\nvec4 GammaToLinear( in vec4 value, in float gammaFactor ) {\n\treturn vec4( pow( value.xyz, vec3( gammaFactor ) ), value.w );\n}\nvec4 LinearToGamma( in vec4 value, in float gammaFactor ) {\n\treturn vec4( pow( value.xyz, vec3( 1.0 / gammaFactor ) ), value.w );\n}\nvec4 sRGBToLinear( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.w );\n}\nvec4 LinearTosRGB( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.w );\n}\nvec4 RGBEToLinear( in vec4 value ) {\n\treturn vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );\n}\nvec4 LinearToRGBE( in vec4 value ) {\n\tfloat maxComponent = max( max( value.r, value.g ), value.b );\n\tfloat fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );\n\treturn vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );\n}\nvec4 RGBMToLinear( in vec4 value, in float maxRange ) {\n\treturn vec4( value.xyz * value.w * maxRange, 1.0 );\n}\nvec4 LinearToRGBM( in vec4 value, in float maxRange ) {\n\tfloat maxRGB = max( value.x, max( value.g, value.b ) );\n\tfloat M      = clamp( maxRGB / maxRange, 0.0, 1.0 );\n\tM            = ceil( M * 255.0 ) / 255.0;\n\treturn vec4( value.rgb / ( M * maxRange ), M );\n}\nvec4 RGBDToLinear( in vec4 value, in float maxRange ) {\n\treturn vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );\n}\nvec4 LinearToRGBD( in vec4 value, in float maxRange ) {\n\tfloat maxRGB = max( value.x, max( value.g, value.b ) );\n\tfloat D      = max( maxRange / maxRGB, 1.0 );\n\tD            = min( floor( D ) / 255.0, 1.0 );\n\treturn vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );\n}\nconst mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );\nvec4 LinearToLogLuv( in vec4 value )  {\n\tvec3 Xp_Y_XYZp = value.rgb * cLogLuvM;\n\tXp_Y_XYZp = max(Xp_Y_XYZp, vec3(1e-6, 1e-6, 1e-6));\n\tvec4 vResult;\n\tvResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;\n\tfloat Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;\n\tvResult.w = fract(Le);\n\tvResult.z = (Le - (floor(vResult.w*255.0))/255.0)/255.0;\n\treturn vResult;\n}\nconst mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );\nvec4 LogLuvToLinear( in vec4 value ) {\n\tfloat Le = value.z * 255.0 + value.w;\n\tvec3 Xp_Y_XYZp;\n\tXp_Y_XYZp.y = exp2((Le - 127.0) / 2.0);\n\tXp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;\n\tXp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;\n\tvec3 vRGB = Xp_Y_XYZp.rgb * cLogLuvInverseM;\n\treturn vec4( max(vRGB, 0.0), 1.0 );\n}\n",
      ie = "#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\tvec3 cameraToVertex = normalize( vWorldPosition - cameraPosition );\n\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( cameraToVertex, worldNormal );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( cameraToVertex, worldNormal, refractionRatio );\n\t\t#endif\n\t#else\n\t\tvec3 reflectVec = vReflect;\n\t#endif\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tvec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n\t#elif defined( ENVMAP_TYPE_EQUIREC )\n\t\tvec2 sampleUV;\n\t\treflectVec = normalize( reflectVec );\n\t\tsampleUV.y = asin( clamp( reflectVec.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\t\tsampleUV.x = atan( reflectVec.z, reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n\t\tvec4 envColor = texture2D( envMap, sampleUV );\n\t#elif defined( ENVMAP_TYPE_SPHERE )\n\t\treflectVec = normalize( reflectVec );\n\t\tvec3 reflectView = normalize( ( viewMatrix * vec4( reflectVec, 0.0 ) ).xyz + vec3( 0.0, 0.0, 1.0 ) );\n\t\tvec4 envColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5 );\n\t#else\n\t\tvec4 envColor = vec4( 0.0 );\n\t#endif\n\tenvColor = envMapTexelToLinear( envColor );\n\t#ifdef ENVMAP_BLENDING_MULTIPLY\n\t\toutgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_MIX )\n\t\toutgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_ADD )\n\t\toutgoingLight += envColor.xyz * specularStrength * reflectivity;\n\t#endif\n#endif\n",
      je = "#if defined( USE_ENVMAP ) || defined( PHYSICAL )\n\tuniform float reflectivity;\n\tuniform float envMapIntensity;\n#endif\n#ifdef USE_ENVMAP\n\t#if ! defined( PHYSICAL ) && ( defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) )\n\t\tvarying vec3 vWorldPosition;\n\t#endif\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tuniform samplerCube envMap;\n\t#else\n\t\tuniform sampler2D envMap;\n\t#endif\n\tuniform float flipEnvMap;\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( PHYSICAL )\n\t\tuniform float refractionRatio;\n\t#else\n\t\tvarying vec3 vReflect;\n\t#endif\n#endif\n",
      ke = "#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\tvarying vec3 vWorldPosition;\n\t#else\n\t\tvarying vec3 vReflect;\n\t\tuniform float refractionRatio;\n\t#endif\n#endif\n",
      le = "#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\tvWorldPosition = worldPosition.xyz;\n\t#else\n\t\tvec3 cameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n\t\tvec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvReflect = reflect( cameraToVertex, worldNormal );\n\t\t#else\n\t\t\tvReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n\t\t#endif\n\t#endif\n#endif\n",
      me = "\n#ifdef USE_FOG\nfogDepth = -mvPosition.z;\n#endif",
      ne = "#ifdef USE_FOG\n  varying float fogDepth;\n#endif\n",
      oe = "#ifdef USE_FOG\n\t#ifdef FOG_EXP2\n\t\tfloat fogFactor = whiteCompliment( exp2( - fogDensity * fogDensity * fogDepth * fogDepth * LOG2 ) );\n\t#else\n\t\tfloat fogFactor = smoothstep( fogNear, fogFar, fogDepth );\n\t#endif\n\tgl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n#endif\n",
      pe = "#ifdef USE_FOG\n\tuniform vec3 fogColor;\n\tvarying float fogDepth;\n\t#ifdef FOG_EXP2\n\t\tuniform float fogDensity;\n\t#else\n\t\tuniform float fogNear;\n\t\tuniform float fogFar;\n\t#endif\n#endif\n",
      qe = "#ifdef TOON\n\tuniform sampler2D gradientMap;\n\tvec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {\n\t\tfloat dotNL = dot( normal, lightDirection );\n\t\tvec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );\n\t\t#ifdef USE_GRADIENTMAP\n\t\t\treturn texture2D( gradientMap, coord ).rgb;\n\t\t#else\n\t\t\treturn ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );\n\t\t#endif\n\t}\n#endif\n",
      re = "#ifdef USE_LIGHTMAP\n\treflectedLight.indirectDiffuse += PI * texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n#endif\n",
      se = "#ifdef USE_LIGHTMAP\n\tuniform sampler2D lightMap;\n\tuniform float lightMapIntensity;\n#endif",
      te = "vec3 diffuse = vec3( 1.0 );\nGeometricContext geometry;\ngeometry.position = mvPosition.xyz;\ngeometry.normal = normalize( transformedNormal );\ngeometry.viewDir = normalize( -mvPosition.xyz );\nGeometricContext backGeometry;\nbackGeometry.position = geometry.position;\nbackGeometry.normal = -geometry.normal;\nbackGeometry.viewDir = geometry.viewDir;\nvLightFront = vec3( 0.0 );\n#ifdef DOUBLE_SIDED\n\tvLightBack = vec3( 0.0 );\n#endif\nIncidentLight directLight;\nfloat dotNL;\nvec3 directLightColor_Diffuse;\n#if NUM_POINT_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tgetPointDirectLightIrradiance( pointLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tgetSpotDirectLightIrradiance( spotLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_DIR_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tgetDirectionalDirectLightIrradiance( directionalLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\tvLightFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry );\n\t\t#endif\n\t}\n#endif\n",
      ue = "uniform vec3 ambientLightColor;\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n\tvec3 irradiance = ambientLightColor;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treturn irradiance;\n}\n#if NUM_DIR_LIGHTS > 0\n\tstruct DirectionalLight {\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t};\n\tuniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n\tvoid getDirectionalDirectLightIrradiance( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tdirectLight.color = directionalLight.color;\n\t\tdirectLight.direction = directionalLight.direction;\n\t\tdirectLight.visible = true;\n\t}\n#endif\n#if NUM_POINT_LIGHTS > 0\n\tstruct PointLight {\n\t\tvec3 position;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t\tfloat shadowCameraNear;\n\t\tfloat shadowCameraFar;\n\t};\n\tuniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n\tvoid getPointDirectLightIrradiance( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tvec3 lVector = pointLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tdirectLight.color = pointLight.color;\n\t\tdirectLight.color *= punctualLightIntensityToIrradianceFactor( lightDistance, pointLight.distance, pointLight.decay );\n\t\tdirectLight.visible = ( directLight.color != vec3( 0.0 ) );\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\tstruct SpotLight {\n\t\tvec3 position;\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tfloat coneCos;\n\t\tfloat penumbraCos;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t};\n\tuniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n\tvoid getSpotDirectLightIrradiance( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight directLight  ) {\n\t\tvec3 lVector = spotLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tfloat angleCos = dot( directLight.direction, spotLight.direction );\n\t\tif ( angleCos > spotLight.coneCos ) {\n\t\t\tfloat spotEffect = smoothstep( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n\t\t\tdirectLight.color = spotLight.color;\n\t\t\tdirectLight.color *= spotEffect * punctualLightIntensityToIrradianceFactor( lightDistance, spotLight.distance, spotLight.decay );\n\t\t\tdirectLight.visible = true;\n\t\t} else {\n\t\t\tdirectLight.color = vec3( 0.0 );\n\t\t\tdirectLight.visible = false;\n\t\t}\n\t}\n#endif\n#if NUM_RECT_AREA_LIGHTS > 0\n\tstruct RectAreaLight {\n\t\tvec3 color;\n\t\tvec3 position;\n\t\tvec3 halfWidth;\n\t\tvec3 halfHeight;\n\t};\n\tuniform sampler2D ltcMat;\tuniform sampler2D ltcMag;\n\tuniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\tstruct HemisphereLight {\n\t\tvec3 direction;\n\t\tvec3 skyColor;\n\t\tvec3 groundColor;\n\t};\n\tuniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n\tvec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in GeometricContext geometry ) {\n\t\tfloat dotNL = dot( geometry.normal, hemiLight.direction );\n\t\tfloat hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n\t\tvec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tirradiance *= PI;\n\t\t#endif\n\t\treturn irradiance;\n\t}\n#endif\n#if defined( USE_ENVMAP ) && defined( PHYSICAL )\n\tvec3 getLightProbeIndirectIrradiance( const in GeometricContext geometry, const in int maxMIPLevel ) {\n\t\tvec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n\t\t\tvec4 envMapColor = textureCubeUV( queryVec, 1.0 );\n\t\t#else\n\t\t\tvec4 envMapColor = vec4( 0.0 );\n\t\t#endif\n\t\treturn PI * envMapColor.rgb * envMapIntensity;\n\t}\n\tfloat getSpecularMIPLevel( const in float blinnShininessExponent, const in int maxMIPLevel ) {\n\t\tfloat maxMIPLevelScalar = float( maxMIPLevel );\n\t\tfloat desiredMIPLevel = maxMIPLevelScalar + 0.79248 - 0.5 * log2( pow2( blinnShininessExponent ) + 1.0 );\n\t\treturn clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );\n\t}\n\tvec3 getLightProbeIndirectRadiance( const in GeometricContext geometry, const in float blinnShininessExponent, const in int maxMIPLevel ) {\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( -geometry.viewDir, geometry.normal );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( -geometry.viewDir, geometry.normal, refractionRatio );\n\t\t#endif\n\t\treflectVec = inverseTransformDirection( reflectVec, viewMatrix );\n\t\tfloat specularMIPLevel = getSpecularMIPLevel( blinnShininessExponent, maxMIPLevel );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n\t\t\tvec4 envMapColor = textureCubeUV(queryReflectVec, BlinnExponentToGGXRoughness(blinnShininessExponent));\n\t\t#elif defined( ENVMAP_TYPE_EQUIREC )\n\t\t\tvec2 sampleUV;\n\t\t\tsampleUV.y = asin( clamp( reflectVec.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\t\t\tsampleUV.x = atan( reflectVec.z, reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = texture2DLodEXT( envMap, sampleUV, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = texture2D( envMap, sampleUV, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_SPHERE )\n\t\t\tvec3 reflectView = normalize( ( viewMatrix * vec4( reflectVec, 0.0 ) ).xyz + vec3( 0.0,0.0,1.0 ) );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = texture2DLodEXT( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#endif\n\t\treturn envMapColor.rgb * envMapIntensity;\n\t}\n#endif\n",
      ve = "BlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;\n",
      we = "varying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\nstruct BlinnPhongMaterial {\n\tvec3\tdiffuseColor;\n\tvec3\tspecularColor;\n\tfloat\tspecularShininess;\n\tfloat\tspecularStrength;\n};\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\t#ifdef TOON\n\t\tvec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;\n\t#else\n\t\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\t\tvec3 irradiance = dotNL * directLight.color;\n\t#endif\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n\treflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_BlinnPhong\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_BlinnPhong\n#define Material_LightProbeLOD( material )\t(0)\n",
      xe = "PhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );\nmaterial.specularRoughness = clamp( roughnessFactor, 0.04, 1.0 );\n#ifdef STANDARD\n\tmaterial.specularColor = mix( vec3( DEFAULT_SPECULAR_COEFFICIENT ), diffuseColor.rgb, metalnessFactor );\n#else\n\tmaterial.specularColor = mix( vec3( MAXIMUM_SPECULAR_COEFFICIENT * pow2( reflectivity ) ), diffuseColor.rgb, metalnessFactor );\n\tmaterial.clearCoat = saturate( clearCoat );\tmaterial.clearCoatRoughness = clamp( clearCoatRoughness, 0.04, 1.0 );\n#endif\n",
      ye = "struct PhysicalMaterial {\n\tvec3\tdiffuseColor;\n\tfloat\tspecularRoughness;\n\tvec3\tspecularColor;\n\t#ifndef STANDARD\n\t\tfloat clearCoat;\n\t\tfloat clearCoatRoughness;\n\t#endif\n};\n#define MAXIMUM_SPECULAR_COEFFICIENT 0.16\n#define DEFAULT_SPECULAR_COEFFICIENT 0.04\nfloat clearCoatDHRApprox( const in float roughness, const in float dotNL ) {\n\treturn DEFAULT_SPECULAR_COEFFICIENT + ( 1.0 - DEFAULT_SPECULAR_COEFFICIENT ) * ( pow( 1.0 - dotNL, 5.0 ) * pow( 1.0 - roughness, 2.0 ) );\n}\n#if NUM_RECT_AREA_LIGHTS > 0\n\tvoid RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\t\tvec3 normal = geometry.normal;\n\t\tvec3 viewDir = geometry.viewDir;\n\t\tvec3 position = geometry.position;\n\t\tvec3 lightPos = rectAreaLight.position;\n\t\tvec3 halfWidth = rectAreaLight.halfWidth;\n\t\tvec3 halfHeight = rectAreaLight.halfHeight;\n\t\tvec3 lightColor = rectAreaLight.color;\n\t\tfloat roughness = material.specularRoughness;\n\t\tvec3 rectCoords[ 4 ];\n\t\trectCoords[ 0 ] = lightPos - halfWidth - halfHeight;\t\trectCoords[ 1 ] = lightPos + halfWidth - halfHeight;\n\t\trectCoords[ 2 ] = lightPos + halfWidth + halfHeight;\n\t\trectCoords[ 3 ] = lightPos - halfWidth + halfHeight;\n\t\tvec2 uv = LTC_Uv( normal, viewDir, roughness );\n\t\tfloat norm = texture2D( ltcMag, uv ).a;\n\t\tvec4 t = texture2D( ltcMat, uv );\n\t\tmat3 mInv = mat3(\n\t\t\tvec3(   1,   0, t.y ),\n\t\t\tvec3(   0, t.z,   0 ),\n\t\t\tvec3( t.w,   0, t.x )\n\t\t);\n\t\treflectedLight.directSpecular += lightColor * material.specularColor * norm * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );\n\t\treflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1 ), rectCoords );\n\t}\n#endif\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\t#ifndef STANDARD\n\t\tfloat clearCoatDHR = material.clearCoat * clearCoatDHRApprox( material.clearCoatRoughness, dotNL );\n\t#else\n\t\tfloat clearCoatDHR = 0.0;\n\t#endif\n\treflectedLight.directSpecular += ( 1.0 - clearCoatDHR ) * irradiance * BRDF_Specular_GGX( directLight, geometry, material.specularColor, material.specularRoughness );\n\treflectedLight.directDiffuse += ( 1.0 - clearCoatDHR ) * irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n\t#ifndef STANDARD\n\t\treflectedLight.directSpecular += irradiance * material.clearCoat * BRDF_Specular_GGX( directLight, geometry, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearCoatRoughness );\n\t#endif\n}\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 clearCoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\t#ifndef STANDARD\n\t\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\t\tfloat dotNL = dotNV;\n\t\tfloat clearCoatDHR = material.clearCoat * clearCoatDHRApprox( material.clearCoatRoughness, dotNL );\n\t#else\n\t\tfloat clearCoatDHR = 0.0;\n\t#endif\n\treflectedLight.indirectSpecular += ( 1.0 - clearCoatDHR ) * radiance * BRDF_Specular_GGX_Environment( geometry, material.specularColor, material.specularRoughness );\n\t#ifndef STANDARD\n\t\treflectedLight.indirectSpecular += clearCoatRadiance * material.clearCoat * BRDF_Specular_GGX_Environment( geometry, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearCoatRoughness );\n\t#endif\n}\n#define RE_Direct\t\t\t\tRE_Direct_Physical\n#define RE_Direct_RectArea\t\tRE_Direct_RectArea_Physical\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular\t\tRE_IndirectSpecular_Physical\n#define Material_BlinnShininessExponent( material )   GGXRoughnessToBlinnExponent( material.specularRoughness )\n#define Material_ClearCoat_BlinnShininessExponent( material )   GGXRoughnessToBlinnExponent( material.clearCoatRoughness )\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n\treturn saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n}\n",
      ze = "\nGeometricContext geometry;\ngeometry.position = - vViewPosition;\ngeometry.normal = normal;\ngeometry.viewDir = normalize( vViewPosition );\nIncidentLight directLight;\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n\tPointLight pointLight;\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tgetPointDirectLightIrradiance( pointLight, geometry, directLight );\n\t\t#ifdef USE_SHADOWMAP\n\t\tdirectLight.color *= all( bvec2( pointLight.shadow, directLight.visible ) ) ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n\tSpotLight spotLight;\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tgetSpotDirectLightIrradiance( spotLight, geometry, directLight );\n\t\t#ifdef USE_SHADOWMAP\n\t\tdirectLight.color *= all( bvec2( spotLight.shadow, directLight.visible ) ) ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n\tDirectionalLight directionalLight;\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tgetDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );\n\t\t#ifdef USE_SHADOWMAP\n\t\tdirectLight.color *= all( bvec2( directionalLight.shadow, directLight.visible ) ) ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )\n\tRectAreaLight rectAreaLight;\n\tfor ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\n\t\trectAreaLight = rectAreaLights[ i ];\n\t\tRE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if defined( RE_IndirectDiffuse )\n\tvec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n\t#ifdef USE_LIGHTMAP\n\t\tvec3 lightMapIrradiance = texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tlightMapIrradiance *= PI;\n\t\t#endif\n\t\tirradiance += lightMapIrradiance;\n\t#endif\n\t#if ( NUM_HEMI_LIGHTS > 0 )\n\t\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\t\tirradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t}\n\t#endif\n\t#if defined( USE_ENVMAP ) && defined( PHYSICAL ) && defined( ENVMAP_TYPE_CUBE_UV )\n\t\tirradiance += getLightProbeIndirectIrradiance( geometry, 8 );\n\t#endif\n\tRE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );\n#endif\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n\tvec3 radiance = getLightProbeIndirectRadiance( geometry, Material_BlinnShininessExponent( material ), 8 );\n\t#ifndef STANDARD\n\t\tvec3 clearCoatRadiance = getLightProbeIndirectRadiance( geometry, Material_ClearCoat_BlinnShininessExponent( material ), 8 );\n\t#else\n\t\tvec3 clearCoatRadiance = vec3( 0.0 );\n\t#endif\n\tRE_IndirectSpecular( radiance, clearCoatRadiance, geometry, material, reflectedLight );\n#endif\n",
      Ae = "#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\tgl_FragDepthEXT = log2( vFragDepth ) * logDepthBufFC * 0.5;\n#endif",
      Be = "#ifdef USE_LOGDEPTHBUF\n\tuniform float logDepthBufFC;\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvarying float vFragDepth;\n\t#endif\n#endif\n",
      Ce = "#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvarying float vFragDepth;\n\t#endif\n\tuniform float logDepthBufFC;\n#endif",
      De = "#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvFragDepth = 1.0 + gl_Position.w;\n\t#else\n\t\tgl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;\n\t\tgl_Position.z *= gl_Position.w;\n\t#endif\n#endif\n",
      Ee = "#ifdef USE_MAP\n\tvec4 texelColor = texture2D( map, vUv );\n\ttexelColor = mapTexelToLinear( texelColor );\n\tdiffuseColor *= texelColor;\n#endif\n",
      Fe = "#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif\n",
      Ge = "#ifdef USE_MAP\n\tvec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;\n\tvec4 mapTexel = texture2D( map, uv );\n\tdiffuseColor *= mapTexelToLinear( mapTexel );\n#endif\n",
      He = "#ifdef USE_MAP\n\tuniform mat3 uvTransform;\n\tuniform sampler2D map;\n#endif\n",
      Ie = "float metalnessFactor = metalness;\n#ifdef USE_METALNESSMAP\n\tvec4 texelMetalness = texture2D( metalnessMap, vUv );\n\tmetalnessFactor *= texelMetalness.b;\n#endif\n",
      Je = "#ifdef USE_METALNESSMAP\n\tuniform sampler2D metalnessMap;\n#endif",
      Ke = "#ifdef USE_MORPHNORMALS\n\tobjectNormal += ( morphNormal0 - normal ) * morphTargetInfluences[ 0 ];\n\tobjectNormal += ( morphNormal1 - normal ) * morphTargetInfluences[ 1 ];\n\tobjectNormal += ( morphNormal2 - normal ) * morphTargetInfluences[ 2 ];\n\tobjectNormal += ( morphNormal3 - normal ) * morphTargetInfluences[ 3 ];\n#endif\n",
      Le = "#ifdef USE_MORPHTARGETS\n\t#ifndef USE_MORPHNORMALS\n\tuniform float morphTargetInfluences[ 8 ];\n\t#else\n\tuniform float morphTargetInfluences[ 4 ];\n\t#endif\n#endif",
      Me = "#ifdef USE_MORPHTARGETS\n\ttransformed += ( morphTarget0 - position ) * morphTargetInfluences[ 0 ];\n\ttransformed += ( morphTarget1 - position ) * morphTargetInfluences[ 1 ];\n\ttransformed += ( morphTarget2 - position ) * morphTargetInfluences[ 2 ];\n\ttransformed += ( morphTarget3 - position ) * morphTargetInfluences[ 3 ];\n\t#ifndef USE_MORPHNORMALS\n\ttransformed += ( morphTarget4 - position ) * morphTargetInfluences[ 4 ];\n\ttransformed += ( morphTarget5 - position ) * morphTargetInfluences[ 5 ];\n\ttransformed += ( morphTarget6 - position ) * morphTargetInfluences[ 6 ];\n\ttransformed += ( morphTarget7 - position ) * morphTargetInfluences[ 7 ];\n\t#endif\n#endif\n",
      Ne = "#ifdef FLAT_SHADED\n\tvec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );\n\tvec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );\n\tvec3 normal = normalize( cross( fdx, fdy ) );\n#else\n\tvec3 normal = normalize( vNormal );\n\t#ifdef DOUBLE_SIDED\n\t\tnormal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t#endif\n#endif\n#ifdef USE_NORMALMAP\n\tnormal = perturbNormal2Arb( -vViewPosition, normal );\n#elif defined( USE_BUMPMAP )\n\tnormal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );\n#endif\n",
      Oe = "#ifdef USE_NORMALMAP\n\tuniform sampler2D normalMap;\n\tuniform vec2 normalScale;\n\tvec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm ) {\n\t\tvec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );\n\t\tvec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );\n\t\tvec2 st0 = dFdx( vUv.st );\n\t\tvec2 st1 = dFdy( vUv.st );\n\t\tvec3 S = normalize( q0 * st1.t - q1 * st0.t );\n\t\tvec3 T = normalize( -q0 * st1.s + q1 * st0.s );\n\t\tvec3 N = normalize( surf_norm );\n\t\tvec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\t\tmapN.xy = normalScale * mapN.xy;\n\t\tmat3 tsn = mat3( S, T, N );\n\t\treturn normalize( tsn * mapN );\n\t}\n#endif\n",
      Pe = "vec3 packNormalToRGB( const in vec3 normal ) {\n\treturn normalize( normal ) * 0.5 + 0.5;\n}\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n\treturn 2.0 * rgb.xyz - 1.0;\n}\nconst float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;\nconst vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256.,  256. );\nconst vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );\nconst float ShiftRight8 = 1. / 256.;\nvec4 packDepthToRGBA( const in float v ) {\n\tvec4 r = vec4( fract( v * PackFactors ), v );\n\tr.yzw -= r.xyz * ShiftRight8;\treturn r * PackUpscale;\n}\nfloat unpackRGBAToDepth( const in vec4 v ) {\n\treturn dot( v, UnpackFactors );\n}\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {\n\treturn linearClipZ * ( near - far ) - near;\n}\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn (( near + viewZ ) * far ) / (( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {\n\treturn ( near * far ) / ( ( far - near ) * invClipZ - far );\n}\n",
      Qe = "#ifdef PREMULTIPLIED_ALPHA\n\tgl_FragColor.rgb *= gl_FragColor.a;\n#endif\n",
      Re = "vec4 mvPosition = modelViewMatrix * vec4( transformed, 1.0 );\ngl_Position = projectionMatrix * mvPosition;\n",
      Se = "#if defined( DITHERING )\n  gl_FragColor.rgb = dithering( gl_FragColor.rgb );\n#endif\n",
      Te = "#if defined( DITHERING )\n\tvec3 dithering( vec3 color ) {\n\t\tfloat grid_position = rand( gl_FragCoord.xy );\n\t\tvec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );\n\t\tdither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );\n\t\treturn color + dither_shift_RGB;\n\t}\n#endif\n",
      Ue = "float roughnessFactor = roughness;\n#ifdef USE_ROUGHNESSMAP\n\tvec4 texelRoughness = texture2D( roughnessMap, vUv );\n\troughnessFactor *= texelRoughness.g;\n#endif\n",
      Ve = "#ifdef USE_ROUGHNESSMAP\n\tuniform sampler2D roughnessMap;\n#endif",
      We = "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\t\tuniform sampler2D directionalShadowMap[ NUM_DIR_LIGHTS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHTS ];\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\t\tuniform sampler2D spotShadowMap[ NUM_SPOT_LIGHTS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHTS ];\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\t\tuniform sampler2D pointShadowMap[ NUM_POINT_LIGHTS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHTS ];\n\t#endif\n\tfloat texture2DCompare( sampler2D depths, vec2 uv, float compare ) {\n\t\treturn step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );\n\t}\n\tfloat texture2DShadowLerp( sampler2D depths, vec2 size, vec2 uv, float compare ) {\n\t\tconst vec2 offset = vec2( 0.0, 1.0 );\n\t\tvec2 texelSize = vec2( 1.0 ) / size;\n\t\tvec2 centroidUV = floor( uv * size + 0.5 ) / size;\n\t\tfloat lb = texture2DCompare( depths, centroidUV + texelSize * offset.xx, compare );\n\t\tfloat lt = texture2DCompare( depths, centroidUV + texelSize * offset.xy, compare );\n\t\tfloat rb = texture2DCompare( depths, centroidUV + texelSize * offset.yx, compare );\n\t\tfloat rt = texture2DCompare( depths, centroidUV + texelSize * offset.yy, compare );\n\t\tvec2 f = fract( uv * size + 0.5 );\n\t\tfloat a = mix( lb, lt, f.y );\n\t\tfloat b = mix( rb, rt, f.y );\n\t\tfloat c = mix( a, b, f.x );\n\t\treturn c;\n\t}\n\tfloat getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n\t\tfloat shadow = 1.0;\n\t\tshadowCoord.xyz /= shadowCoord.w;\n\t\tshadowCoord.z += shadowBias;\n\t\tbvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );\n\t\tbool inFrustum = all( inFrustumVec );\n\t\tbvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );\n\t\tbool frustumTest = all( frustumTestVec );\n\t\tif ( frustumTest ) {\n\t\t#if defined( SHADOWMAP_TYPE_PCF )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\tshadow = (\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#else\n\t\t\tshadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#endif\n\t\t}\n\t\treturn shadow;\n\t}\n\tvec2 cubeToUV( vec3 v, float texelSizeY ) {\n\t\tvec3 absV = abs( v );\n\t\tfloat scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );\n\t\tabsV *= scaleToCube;\n\t\tv *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );\n\t\tvec2 planar = v.xy;\n\t\tfloat almostATexel = 1.5 * texelSizeY;\n\t\tfloat almostOne = 1.0 - almostATexel;\n\t\tif ( absV.z >= almostOne ) {\n\t\t\tif ( v.z > 0.0 )\n\t\t\t\tplanar.x = 4.0 - v.x;\n\t\t} else if ( absV.x >= almostOne ) {\n\t\t\tfloat signX = sign( v.x );\n\t\t\tplanar.x = v.z * signX + 2.0 * signX;\n\t\t} else if ( absV.y >= almostOne ) {\n\t\t\tfloat signY = sign( v.y );\n\t\t\tplanar.x = v.x + 2.0 * signY + 2.0;\n\t\t\tplanar.y = v.z * signY - 2.0;\n\t\t}\n\t\treturn vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );\n\t}\n\tfloat getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {\n\t\tvec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );\n\t\tvec3 lightToPosition = shadowCoord.xyz;\n\t\tfloat dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );\t\tdp += shadowBias;\n\t\tvec3 bd3D = normalize( lightToPosition );\n\t\t#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT )\n\t\t\tvec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;\n\t\t\treturn (\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#else\n\t\t\treturn texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );\n\t\t#endif\n\t}\n#endif\n",
      Xe = "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\t\tuniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHTS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHTS ];\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\t\tuniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHTS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHTS ];\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\t\tuniform mat4 pointShadowMatrix[ NUM_POINT_LIGHTS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHTS ];\n\t#endif\n#endif\n",
      Ye = "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tvDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tvSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tvPointShadowCoord[ i ] = pointShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n#endif\n",
      Ze = "float getShadowMask() {\n\tfloat shadow = 1.0;\n\t#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\tDirectionalLight directionalLight;\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tshadow *= bool( directionalLight.shadow ) ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t}\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\tSpotLight spotLight;\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tshadow *= bool( spotLight.shadow ) ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t}\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\tPointLight pointLight;\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tshadow *= bool( pointLight.shadow ) ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n\t}\n\t#endif\n\t#endif\n\treturn shadow;\n}\n",
      $e = "#ifdef USE_SKINNING\n\tmat4 boneMatX = getBoneMatrix( skinIndex.x );\n\tmat4 boneMatY = getBoneMatrix( skinIndex.y );\n\tmat4 boneMatZ = getBoneMatrix( skinIndex.z );\n\tmat4 boneMatW = getBoneMatrix( skinIndex.w );\n#endif",
      _e = "#ifdef USE_SKINNING\n\tuniform mat4 bindMatrix;\n\tuniform mat4 bindMatrixInverse;\n\t#ifdef BONE_TEXTURE\n\t\tuniform sampler2D boneTexture;\n\t\tuniform int boneTextureSize;\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tfloat j = i * 4.0;\n\t\t\tfloat x = mod( j, float( boneTextureSize ) );\n\t\t\tfloat y = floor( j / float( boneTextureSize ) );\n\t\t\tfloat dx = 1.0 / float( boneTextureSize );\n\t\t\tfloat dy = 1.0 / float( boneTextureSize );\n\t\t\ty = dy * ( y + 0.5 );\n\t\t\tvec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\n\t\t\tvec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\n\t\t\tvec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\n\t\t\tvec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\n\t\t\tmat4 bone = mat4( v1, v2, v3, v4 );\n\t\t\treturn bone;\n\t\t}\n\t#else\n\t\tuniform mat4 boneMatrices[ MAX_BONES ];\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tmat4 bone = boneMatrices[ int(i) ];\n\t\t\treturn bone;\n\t\t}\n\t#endif\n#endif\n",
      af = "#ifdef USE_SKINNING\n\tvec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n\tvec4 skinned = vec4( 0.0 );\n\tskinned += boneMatX * skinVertex * skinWeight.x;\n\tskinned += boneMatY * skinVertex * skinWeight.y;\n\tskinned += boneMatZ * skinVertex * skinWeight.z;\n\tskinned += boneMatW * skinVertex * skinWeight.w;\n\ttransformed = ( bindMatrixInverse * skinned ).xyz;\n#endif\n",
      bf = "#ifdef USE_SKINNING\n\tmat4 skinMatrix = mat4( 0.0 );\n\tskinMatrix += skinWeight.x * boneMatX;\n\tskinMatrix += skinWeight.y * boneMatY;\n\tskinMatrix += skinWeight.z * boneMatZ;\n\tskinMatrix += skinWeight.w * boneMatW;\n\tskinMatrix  = bindMatrixInverse * skinMatrix * bindMatrix;\n\tobjectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n#endif\n",
      cf = "float specularStrength;\n#ifdef USE_SPECULARMAP\n\tvec4 texelSpecular = texture2D( specularMap, vUv );\n\tspecularStrength = texelSpecular.r;\n#else\n\tspecularStrength = 1.0;\n#endif",
      df = "#ifdef USE_SPECULARMAP\n\tuniform sampler2D specularMap;\n#endif",
      ef = "#if defined( TONE_MAPPING )\n  gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n#endif\n",
      ff = "#ifndef saturate\n\t#define saturate(a) clamp( a, 0.0, 1.0 )\n#endif\nuniform float toneMappingExposure;\nuniform float toneMappingWhitePoint;\nvec3 LinearToneMapping( vec3 color ) {\n\treturn toneMappingExposure * color;\n}\nvec3 ReinhardToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( color / ( vec3( 1.0 ) + color ) );\n}\n#define Uncharted2Helper( x ) max( ( ( x * ( 0.15 * x + 0.10 * 0.50 ) + 0.20 * 0.02 ) / ( x * ( 0.15 * x + 0.50 ) + 0.20 * 0.30 ) ) - 0.02 / 0.30, vec3( 0.0 ) )\nvec3 Uncharted2ToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( Uncharted2Helper( color ) / Uncharted2Helper( vec3( toneMappingWhitePoint ) ) );\n}\nvec3 OptimizedCineonToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\tcolor = max( vec3( 0.0 ), color - 0.004 );\n\treturn pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n}\n",
      gf = "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n\tvarying vec2 vUv;\n#endif",
      hf = "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n\tvarying vec2 vUv;\n\tuniform mat3 uvTransform;\n#endif\n",
      jf = "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n#endif",
      kf = "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvarying vec2 vUv2;\n#endif",
      lf = "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tattribute vec2 uv2;\n\tvarying vec2 vUv2;\n#endif",
      mf = "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvUv2 = uv2;\n#endif",
      nf = "#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP )\n\tvec4 worldPosition = modelMatrix * vec4( transformed, 1.0 );\n#endif\n",
      of = "uniform samplerCube tCube;\nuniform float tFlip;\nuniform float opacity;\nvarying vec3 vWorldPosition;\nvoid main() {\n\tgl_FragColor = textureCube( tCube, vec3( tFlip * vWorldPosition.x, vWorldPosition.yz ) );\n\tgl_FragColor.a *= opacity;\n}\n",
      pf = "varying vec3 vWorldPosition;\n#include <common>\nvoid main() {\n\tvWorldPosition = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\tgl_Position.z = gl_Position.w;\n}\n",
      qf = "#if DEPTH_PACKING == 3200\n\tuniform float opacity;\n#endif\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#if DEPTH_PACKING == 3200\n\t\tdiffuseColor.a = opacity;\n\t#endif\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <logdepthbuf_fragment>\n\t#if DEPTH_PACKING == 3200\n\t\tgl_FragColor = vec4( vec3( gl_FragCoord.z ), opacity );\n\t#elif DEPTH_PACKING == 3201\n\t\tgl_FragColor = packDepthToRGBA( gl_FragCoord.z );\n\t#endif\n}\n",
      rf = "#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n}\n",
      sf = "#define DISTANCE\nuniform vec3 referencePosition;\nuniform float nearDistance;\nuniform float farDistance;\nvarying vec3 vWorldPosition;\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main () {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\tfloat dist = length( vWorldPosition - referencePosition );\n\tdist = ( dist - nearDistance ) / ( farDistance - nearDistance );\n\tdist = saturate( dist );\n\tgl_FragColor = packDepthToRGBA( dist );\n}\n",
      tf = "#define DISTANCE\nvarying vec3 vWorldPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\tvWorldPosition = worldPosition.xyz;\n}\n",
      uf = "uniform sampler2D tEquirect;\nvarying vec3 vWorldPosition;\n#include <common>\nvoid main() {\n\tvec3 direction = normalize( vWorldPosition );\n\tvec2 sampleUV;\n\tsampleUV.y = asin( clamp( direction.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\tsampleUV.x = atan( direction.z, direction.x ) * RECIPROCAL_PI2 + 0.5;\n\tgl_FragColor = texture2D( tEquirect, sampleUV );\n}\n",
      vf = "varying vec3 vWorldPosition;\n#include <common>\nvoid main() {\n\tvWorldPosition = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n}\n",
      wf = "uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tif ( mod( vLineDistance, totalSize ) > dashSize ) {\n\t\tdiscard;\n\t}\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <color_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n",
      xf = "uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <color_vertex>\n\tvLineDistance = scale * lineDistance;\n\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n\tgl_Position = projectionMatrix * mvPosition;\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}\n",
      yf = "uniform vec3 diffuse;\nuniform float opacity;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\t#ifdef USE_LIGHTMAP\n\t\treflectedLight.indirectDiffuse += texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n\t#else\n\t\treflectedLight.indirectDiffuse += vec3( 1.0 );\n\t#endif\n\t#include <aomap_fragment>\n\treflectedLight.indirectDiffuse *= diffuseColor.rgb;\n\tvec3 outgoingLight = reflectedLight.indirectDiffuse;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n",
      zf = "#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_ENVMAP\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <envmap_vertex>\n\t#include <fog_vertex>\n}\n",
      Af = "uniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\nvarying vec3 vLightFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <bsdfs>\n#include <lights_pars>\n#include <fog_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <emissivemap_fragment>\n\treflectedLight.indirectDiffuse = getAmbientLightIrradiance( ambientLightColor );\n\t#include <lightmap_fragment>\n\treflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );\n\t#ifdef DOUBLE_SIDED\n\t\treflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;\n\t#else\n\t\treflectedLight.directDiffuse = vLightFront;\n\t#endif\n\treflectedLight.directDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb ) * getShadowMask();\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}\n",
      Bf = "#define LAMBERT\nvarying vec3 vLightFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <bsdfs>\n#include <lights_pars>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <lights_lambert_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}\n",
      Cf = "#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <gradientmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <normal_fragment>\n\t#include <emissivemap_fragment>\n\t#include <lights_phong_fragment>\n\t#include <lights_template>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}\n",
      Df = "#define PHONG\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}\n",
      Ef = "#define PHYSICAL\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n#ifndef STANDARD\n\tuniform float clearCoat;\n\tuniform float clearCoatRoughness;\n#endif\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <cube_uv_reflection_fragment>\n#include <lights_pars>\n#include <lights_physical_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <roughnessmap_fragment>\n\t#include <metalnessmap_fragment>\n\t#include <normal_fragment>\n\t#include <emissivemap_fragment>\n\t#include <lights_physical_fragment>\n\t#include <lights_template>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}\n",
      Ff = "#define PHYSICAL\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}\n",
      Gf = "#define NORMAL\nuniform float opacity;\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP )\n\tvarying vec3 vViewPosition;\n#endif\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <packing>\n#include <uv_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\nvoid main() {\n\t#include <logdepthbuf_fragment>\n\t#include <normal_fragment>\n\tgl_FragColor = vec4( packNormalToRGB( normal ), opacity );\n}\n",
      Hf = "#define NORMAL\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP )\n\tvarying vec3 vViewPosition;\n#endif\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP )\n\tvViewPosition = - mvPosition.xyz;\n#endif\n}\n",
      If = "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <fog_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_particle_fragment>\n\t#include <color_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n",
      Jf = "uniform float size;\nuniform float scale;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <color_vertex>\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\t#ifdef USE_SIZEATTENUATION\n\t\tgl_PointSize = size * ( scale / - mvPosition.z );\n\t#else\n\t\tgl_PointSize = size;\n\t#endif\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}\n",
      Kf = "uniform vec3 color;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\nvoid main() {\n\tgl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );\n\t#include <fog_fragment>\n}\n",
      Lf = "#include <fog_pars_vertex>\n#include <shadowmap_pars_vertex>\nvoid main() {\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}\n",
      Mf = { alphamap_fragment: Kd, alphamap_pars_fragment: Ld, alphatest_fragment: Md, aomap_fragment: Nd, aomap_pars_fragment: Od, begin_vertex: Pd, beginnormal_vertex: Qd, bsdfs: Rd, bumpmap_pars_fragment: Sd, clipping_planes_fragment: Td, clipping_planes_pars_fragment: Ud, clipping_planes_pars_vertex: Vd, clipping_planes_vertex: Wd, color_fragment: Xd, color_pars_fragment: Yd, color_pars_vertex: Zd, color_vertex: $d, common: _d, cube_uv_reflection_fragment: ae, defaultnormal_vertex: be, displacementmap_pars_vertex: ce, displacementmap_vertex: de, emissivemap_fragment: ee, emissivemap_pars_fragment: fe, encodings_fragment: ge, encodings_pars_fragment: he, envmap_fragment: ie, envmap_pars_fragment: je, envmap_pars_vertex: ke, envmap_vertex: le, fog_vertex: me, fog_pars_vertex: ne, fog_fragment: oe, fog_pars_fragment: pe, gradientmap_pars_fragment: qe, lightmap_fragment: re, lightmap_pars_fragment: se, lights_lambert_vertex: te, lights_pars: ue, lights_phong_fragment: ve, lights_phong_pars_fragment: we, lights_physical_fragment: xe, lights_physical_pars_fragment: ye, lights_template: ze, logdepthbuf_fragment: Ae, logdepthbuf_pars_fragment: Be, logdepthbuf_pars_vertex: Ce, logdepthbuf_vertex: De, map_fragment: Ee, map_pars_fragment: Fe, map_particle_fragment: Ge, map_particle_pars_fragment: He, metalnessmap_fragment: Ie, metalnessmap_pars_fragment: Je, morphnormal_vertex: Ke, morphtarget_pars_vertex: Le, morphtarget_vertex: Me, normal_fragment: Ne, normalmap_pars_fragment: Oe, packing: Pe, premultiplied_alpha_fragment: Qe, project_vertex: Re, dithering_fragment: Se, dithering_pars_fragment: Te, roughnessmap_fragment: Ue, roughnessmap_pars_fragment: Ve, shadowmap_pars_fragment: We, shadowmap_pars_vertex: Xe, shadowmap_vertex: Ye, shadowmask_pars_fragment: Ze, skinbase_vertex: $e, skinning_pars_vertex: _e, skinning_vertex: af, skinnormal_vertex: bf, specularmap_fragment: cf, specularmap_pars_fragment: df, tonemapping_fragment: ef, tonemapping_pars_fragment: ff, uv_pars_fragment: gf, uv_pars_vertex: hf, uv_vertex: jf, uv2_pars_fragment: kf, uv2_pars_vertex: lf, uv2_vertex: mf, worldpos_vertex: nf, cube_frag: of, cube_vert: pf, depth_frag: qf, depth_vert: rf, distanceRGBA_frag: sf, distanceRGBA_vert: tf, equirect_frag: uf, equirect_vert: vf, linedashed_frag: wf, linedashed_vert: xf, meshbasic_frag: yf, meshbasic_vert: zf, meshlambert_frag: Af, meshlambert_vert: Bf, meshphong_frag: Cf, meshphong_vert: Df, meshphysical_frag: Ef, meshphysical_vert: Ff, normal_frag: Gf, normal_vert: Hf, points_frag: If, points_vert: Jf, shadow_frag: Kf, shadow_vert: Lf },
      Nf = { basic: { uniforms: Jd.merge([Id.common, Id.specularmap, Id.envmap, Id.aomap, Id.lightmap, Id.fog]), vertexShader: Mf.meshbasic_vert, fragmentShader: Mf.meshbasic_frag }, lambert: { uniforms: Jd.merge([Id.common, Id.specularmap, Id.envmap, Id.aomap, Id.lightmap, Id.emissivemap, Id.fog, Id.lights, { emissive: { value: new U(0) } }]), vertexShader: Mf.meshlambert_vert, fragmentShader: Mf.meshlambert_frag }, phong: { uniforms: Jd.merge([Id.common, Id.specularmap, Id.envmap, Id.aomap, Id.lightmap, Id.emissivemap, Id.bumpmap, Id.normalmap, Id.displacementmap, Id.gradientmap, Id.fog, Id.lights, { emissive: { value: new U(0) }, specular: { value: new U(1118481) }, shininess: { value: 30 } }]), vertexShader: Mf.meshphong_vert, fragmentShader: Mf.meshphong_frag }, standard: { uniforms: Jd.merge([Id.common, Id.envmap, Id.aomap, Id.lightmap, Id.emissivemap, Id.bumpmap, Id.normalmap, Id.displacementmap, Id.roughnessmap, Id.metalnessmap, Id.fog, Id.lights, { emissive: { value: new U(0) }, roughness: { value: .5 }, metalness: { value: .5 }, envMapIntensity: { value: 1 } }]), vertexShader: Mf.meshphysical_vert, fragmentShader: Mf.meshphysical_frag }, points: { uniforms: Jd.merge([Id.points, Id.fog]), vertexShader: Mf.points_vert, fragmentShader: Mf.points_frag }, dashed: { uniforms: Jd.merge([Id.common, Id.fog, { scale: { value: 1 }, dashSize: { value: 1 }, totalSize: { value: 2 } }]), vertexShader: Mf.linedashed_vert, fragmentShader: Mf.linedashed_frag }, depth: { uniforms: Jd.merge([Id.common, Id.displacementmap]), vertexShader: Mf.depth_vert, fragmentShader: Mf.depth_frag }, normal: { uniforms: Jd.merge([Id.common, Id.bumpmap, Id.normalmap, Id.displacementmap, { opacity: { value: 1 } }]), vertexShader: Mf.normal_vert, fragmentShader: Mf.normal_frag }, cube: { uniforms: { tCube: { value: null }, tFlip: { value: -1 }, opacity: { value: 1 } }, vertexShader: Mf.cube_vert, fragmentShader: Mf.cube_frag }, equirect: { uniforms: { tEquirect: { value: null } }, vertexShader: Mf.equirect_vert, fragmentShader: Mf.equirect_frag }, distanceRGBA: { uniforms: Jd.merge([Id.common, Id.displacementmap, { referencePosition: { value: new f() }, nearDistance: { value: 1 }, farDistance: { value: 1e3 } }]), vertexShader: Mf.distanceRGBA_vert, fragmentShader: Mf.distanceRGBA_frag }, shadow: { uniforms: Jd.merge([Id.lights, Id.fog, { color: { value: new U(0) }, opacity: { value: 1 } }]), vertexShader: Mf.shadow_vert, fragmentShader: Mf.shadow_frag } };Nf.physical = { uniforms: Jd.merge([Nf.standard.uniforms, { clearCoat: { value: 0 }, clearCoatRoughness: { value: 0 } }]), vertexShader: Mf.meshphysical_vert, fragmentShader: Mf.meshphysical_frag }, Object.assign(V.prototype, { set: function set(a, b) {
      return this.min.copy(a), this.max.copy(b), this;
    }, setFromPoints: function setFromPoints(a) {
      this.makeEmpty();for (var b = 0, c = a.length; b < c; b++) {
        this.expandByPoint(a[b]);
      }return this;
    }, setFromCenterAndSize: function () {
      var a = new c();return function (b, c) {
        var d = a.copy(c).multiplyScalar(.5);return this.min.copy(b).sub(d), this.max.copy(b).add(d), this;
      };
    }(), clone: function clone() {
      return new this.constructor().copy(this);
    }, copy: function copy(a) {
      return this.min.copy(a.min), this.max.copy(a.max), this;
    }, makeEmpty: function makeEmpty() {
      return this.min.x = this.min.y = 1 / 0, this.max.x = this.max.y = -1 / 0, this;
    }, isEmpty: function isEmpty() {
      return this.max.x < this.min.x || this.max.y < this.min.y;
    }, getCenter: function getCenter(a) {
      var b = a || new c();return this.isEmpty() ? b.set(0, 0) : b.addVectors(this.min, this.max).multiplyScalar(.5);
    }, getSize: function getSize(a) {
      var b = a || new c();return this.isEmpty() ? b.set(0, 0) : b.subVectors(this.max, this.min);
    }, expandByPoint: function expandByPoint(a) {
      return this.min.min(a), this.max.max(a), this;
    }, expandByVector: function expandByVector(a) {
      return this.min.sub(a), this.max.add(a), this;
    }, expandByScalar: function expandByScalar(a) {
      return this.min.addScalar(-a), this.max.addScalar(a), this;
    }, containsPoint: function containsPoint(a) {
      return !(a.x < this.min.x || a.x > this.max.x || a.y < this.min.y || a.y > this.max.y);
    }, containsBox: function containsBox(a) {
      return this.min.x <= a.min.x && a.max.x <= this.max.x && this.min.y <= a.min.y && a.max.y <= this.max.y;
    }, getParameter: function getParameter(a, b) {
      return (b || new c()).set((a.x - this.min.x) / (this.max.x - this.min.x), (a.y - this.min.y) / (this.max.y - this.min.y));
    }, intersectsBox: function intersectsBox(a) {
      return !(a.max.x < this.min.x || a.min.x > this.max.x || a.max.y < this.min.y || a.min.y > this.max.y);
    }, clampPoint: function clampPoint(a, b) {
      return (b || new c()).copy(a).clamp(this.min, this.max);
    }, distanceToPoint: function () {
      var a = new c();return function (b) {
        return a.copy(b).clamp(this.min, this.max).sub(b).length();
      };
    }(), intersect: function intersect(a) {
      return this.min.max(a.min), this.max.min(a.max), this;
    }, union: function union(a) {
      return this.min.min(a.min), this.max.max(a.max), this;
    }, translate: function translate(a) {
      return this.min.add(a), this.max.add(a), this;
    }, equals: function equals(a) {
      return a.min.equals(this.min) && a.max.equals(this.max);
    } }), X.prototype = Object.create(h.prototype), X.prototype.constructor = X;var Of = 0;Z.prototype = Object.assign(Object.create(b.prototype), { constructor: Z, isMaterial: !0, onBeforeCompile: function onBeforeCompile() {}, setValues: function setValues(a) {
      if (void 0 !== a) for (var b in a) {
        var c = a[b];if (void 0 !== c) {
          if ("shading" !== b) {
            var d = this[b];void 0 !== d ? d && d.isColor ? d.set(c) : d && d.isVector3 && c && c.isVector3 ? d.copy(c) : this[b] = "overdraw" === b ? Number(c) : c : console.warn("THREE." + this.type + ": '" + b + "' is not a property of this material.");
          } else console.warn("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead."), this.flatShading = c === Jb;
        } else console.warn("THREE.Material: '" + b + "' parameter is undefined.");
      }
    }, toJSON: function toJSON(a) {
      function b(a) {
        var b = [];for (var c in a) {
          var d = a[c];delete d.metadata, b.push(d);
        }return b;
      }var c = void 0 === a || "string" == typeof a;c && (a = { textures: {}, images: {} });var d = { metadata: { version: 4.5, type: "Material", generator: "Material.toJSON" } };if (d.uuid = this.uuid, d.type = this.type, "" !== this.name && (d.name = this.name), this.color && this.color.isColor && (d.color = this.color.getHex()), void 0 !== this.roughness && (d.roughness = this.roughness), void 0 !== this.metalness && (d.metalness = this.metalness), this.emissive && this.emissive.isColor && (d.emissive = this.emissive.getHex()), 1 !== this.emissiveIntensity && (d.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (d.specular = this.specular.getHex()), void 0 !== this.shininess && (d.shininess = this.shininess), void 0 !== this.clearCoat && (d.clearCoat = this.clearCoat), void 0 !== this.clearCoatRoughness && (d.clearCoatRoughness = this.clearCoatRoughness), this.map && this.map.isTexture && (d.map = this.map.toJSON(a).uuid), this.alphaMap && this.alphaMap.isTexture && (d.alphaMap = this.alphaMap.toJSON(a).uuid), this.lightMap && this.lightMap.isTexture && (d.lightMap = this.lightMap.toJSON(a).uuid), this.bumpMap && this.bumpMap.isTexture && (d.bumpMap = this.bumpMap.toJSON(a).uuid, d.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (d.normalMap = this.normalMap.toJSON(a).uuid, d.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (d.displacementMap = this.displacementMap.toJSON(a).uuid, d.displacementScale = this.displacementScale, d.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (d.roughnessMap = this.roughnessMap.toJSON(a).uuid), this.metalnessMap && this.metalnessMap.isTexture && (d.metalnessMap = this.metalnessMap.toJSON(a).uuid), this.emissiveMap && this.emissiveMap.isTexture && (d.emissiveMap = this.emissiveMap.toJSON(a).uuid), this.specularMap && this.specularMap.isTexture && (d.specularMap = this.specularMap.toJSON(a).uuid), this.envMap && this.envMap.isTexture && (d.envMap = this.envMap.toJSON(a).uuid, d.reflectivity = this.reflectivity), this.gradientMap && this.gradientMap.isTexture && (d.gradientMap = this.gradientMap.toJSON(a).uuid), void 0 !== this.size && (d.size = this.size), void 0 !== this.sizeAttenuation && (d.sizeAttenuation = this.sizeAttenuation), this.blending !== Mb && (d.blending = this.blending), !0 === this.flatShading && (d.flatShading = this.flatShading), this.side !== Gb && (d.side = this.side), this.vertexColors !== Kb && (d.vertexColors = this.vertexColors), this.opacity < 1 && (d.opacity = this.opacity), !0 === this.transparent && (d.transparent = this.transparent), d.depthFunc = this.depthFunc, d.depthTest = this.depthTest, d.depthWrite = this.depthWrite, 0 !== this.rotation && (d.rotation = this.rotation), 1 !== this.linewidth && (d.linewidth = this.linewidth), void 0 !== this.dashSize && (d.dashSize = this.dashSize), void 0 !== this.gapSize && (d.gapSize = this.gapSize), void 0 !== this.scale && (d.scale = this.scale), !0 === this.dithering && (d.dithering = !0), this.alphaTest > 0 && (d.alphaTest = this.alphaTest), !0 === this.premultipliedAlpha && (d.premultipliedAlpha = this.premultipliedAlpha), !0 === this.wireframe && (d.wireframe = this.wireframe), this.wireframeLinewidth > 1 && (d.wireframeLinewidth = this.wireframeLinewidth), "round" !== this.wireframeLinecap && (d.wireframeLinecap = this.wireframeLinecap), "round" !== this.wireframeLinejoin && (d.wireframeLinejoin = this.wireframeLinejoin), !0 === this.morphTargets && (d.morphTargets = !0), !0 === this.skinning && (d.skinning = !0), !1 === this.visible && (d.visible = !1), "{}" !== JSON.stringify(this.userData) && (d.userData = this.userData), c) {
        var e = b(a.textures),
            f = b(a.images);e.length > 0 && (d.textures = e), f.length > 0 && (d.images = f);
      }return d;
    }, clone: function clone() {
      return new this.constructor().copy(this);
    }, copy: function copy(a) {
      this.name = a.name, this.fog = a.fog, this.lights = a.lights, this.blending = a.blending, this.side = a.side, this.flatShading = a.flatShading, this.vertexColors = a.vertexColors, this.opacity = a.opacity, this.transparent = a.transparent, this.blendSrc = a.blendSrc, this.blendDst = a.blendDst, this.blendEquation = a.blendEquation, this.blendSrcAlpha = a.blendSrcAlpha, this.blendDstAlpha = a.blendDstAlpha, this.blendEquationAlpha = a.blendEquationAlpha, this.depthFunc = a.depthFunc, this.depthTest = a.depthTest, this.depthWrite = a.depthWrite, this.colorWrite = a.colorWrite, this.precision = a.precision, this.polygonOffset = a.polygonOffset, this.polygonOffsetFactor = a.polygonOffsetFactor, this.polygonOffsetUnits = a.polygonOffsetUnits, this.dithering = a.dithering, this.alphaTest = a.alphaTest, this.premultipliedAlpha = a.premultipliedAlpha, this.overdraw = a.overdraw, this.visible = a.visible, this.userData = JSON.parse(JSON.stringify(a.userData)), this.clipShadows = a.clipShadows, this.clipIntersection = a.clipIntersection;var b = a.clippingPlanes,
          c = null;if (null !== b) {
        var d = b.length;c = new Array(d);for (var e = 0; e !== d; ++e) {
          c[e] = b[e].clone();
        }
      }return this.clippingPlanes = c, this;
    }, dispose: function dispose() {
      this.dispatchEvent({ type: "dispose" });
    } }), $.prototype = Object.create(Z.prototype), $.prototype.constructor = $, $.prototype.isMeshDepthMaterial = !0, $.prototype.copy = function (a) {
    return Z.prototype.copy.call(this, a), this.depthPacking = a.depthPacking, this.skinning = a.skinning, this.morphTargets = a.morphTargets, this.map = a.map, this.alphaMap = a.alphaMap, this.displacementMap = a.displacementMap, this.displacementScale = a.displacementScale, this.displacementBias = a.displacementBias, this.wireframe = a.wireframe, this.wireframeLinewidth = a.wireframeLinewidth, this;
  }, _.prototype = Object.create(Z.prototype), _.prototype.constructor = _, _.prototype.isMeshDistanceMaterial = !0, _.prototype.copy = function (a) {
    return Z.prototype.copy.call(this, a), this.referencePosition.copy(a.referencePosition), this.nearDistance = a.nearDistance, this.farDistance = a.farDistance, this.skinning = a.skinning, this.morphTargets = a.morphTargets, this.map = a.map, this.alphaMap = a.alphaMap, this.displacementMap = a.displacementMap, this.displacementScale = a.displacementScale, this.displacementBias = a.displacementBias, this;
  }, Object.assign(aa.prototype, { isBox3: !0, set: function set(a, b) {
      return this.min.copy(a), this.max.copy(b), this;
    }, setFromArray: function setFromArray(a) {
      for (var b = 1 / 0, c = 1 / 0, d = 1 / 0, e = -1 / 0, f = -1 / 0, g = -1 / 0, h = 0, i = a.length; h < i; h += 3) {
        var j = a[h],
            k = a[h + 1],
            l = a[h + 2];j < b && (b = j), k < c && (c = k), l < d && (d = l), j > e && (e = j), k > f && (f = k), l > g && (g = l);
      }return this.min.set(b, c, d), this.max.set(e, f, g), this;
    }, setFromBufferAttribute: function setFromBufferAttribute(a) {
      for (var b = 1 / 0, c = 1 / 0, d = 1 / 0, e = -1 / 0, f = -1 / 0, g = -1 / 0, h = 0, i = a.count; h < i; h++) {
        var j = a.getX(h),
            k = a.getY(h),
            l = a.getZ(h);j < b && (b = j), k < c && (c = k), l < d && (d = l), j > e && (e = j), k > f && (f = k), l > g && (g = l);
      }return this.min.set(b, c, d), this.max.set(e, f, g), this;
    }, setFromPoints: function setFromPoints(a) {
      this.makeEmpty();for (var b = 0, c = a.length; b < c; b++) {
        this.expandByPoint(a[b]);
      }return this;
    }, setFromCenterAndSize: function () {
      var a = new f();return function (b, c) {
        var d = a.copy(c).multiplyScalar(.5);return this.min.copy(b).sub(d), this.max.copy(b).add(d), this;
      };
    }(), setFromObject: function setFromObject(a) {
      return this.makeEmpty(), this.expandByObject(a);
    }, clone: function clone() {
      return new this.constructor().copy(this);
    }, copy: function copy(a) {
      return this.min.copy(a.min), this.max.copy(a.max), this;
    }, makeEmpty: function makeEmpty() {
      return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this;
    }, isEmpty: function isEmpty() {
      return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
    }, getCenter: function getCenter(a) {
      var b = a || new f();return this.isEmpty() ? b.set(0, 0, 0) : b.addVectors(this.min, this.max).multiplyScalar(.5);
    }, getSize: function getSize(a) {
      var b = a || new f();return this.isEmpty() ? b.set(0, 0, 0) : b.subVectors(this.max, this.min);
    }, expandByPoint: function expandByPoint(a) {
      return this.min.min(a), this.max.max(a), this;
    }, expandByVector: function expandByVector(a) {
      return this.min.sub(a), this.max.add(a), this;
    }, expandByScalar: function expandByScalar(a) {
      return this.min.addScalar(-a), this.max.addScalar(a), this;
    }, expandByObject: function () {
      function a(a) {
        var f = a.geometry;if (void 0 !== f) if (f.isGeometry) {
          var g = f.vertices;for (c = 0, d = g.length; c < d; c++) {
            e.copy(g[c]), e.applyMatrix4(a.matrixWorld), b.expandByPoint(e);
          }
        } else if (f.isBufferGeometry) {
          var h = f.attributes.position;if (void 0 !== h) for (c = 0, d = h.count; c < d; c++) {
            e.fromBufferAttribute(h, c).applyMatrix4(a.matrixWorld), b.expandByPoint(e);
          }
        }
      }var b,
          c,
          d,
          e = new f();return function (c) {
        return b = this, c.updateMatrixWorld(!0), c.traverse(a), this;
      };
    }(), containsPoint: function containsPoint(a) {
      return !(a.x < this.min.x || a.x > this.max.x || a.y < this.min.y || a.y > this.max.y || a.z < this.min.z || a.z > this.max.z);
    }, containsBox: function containsBox(a) {
      return this.min.x <= a.min.x && a.max.x <= this.max.x && this.min.y <= a.min.y && a.max.y <= this.max.y && this.min.z <= a.min.z && a.max.z <= this.max.z;
    }, getParameter: function getParameter(a, b) {
      return (b || new f()).set((a.x - this.min.x) / (this.max.x - this.min.x), (a.y - this.min.y) / (this.max.y - this.min.y), (a.z - this.min.z) / (this.max.z - this.min.z));
    }, intersectsBox: function intersectsBox(a) {
      return !(a.max.x < this.min.x || a.min.x > this.max.x || a.max.y < this.min.y || a.min.y > this.max.y || a.max.z < this.min.z || a.min.z > this.max.z);
    }, intersectsSphere: function () {
      var a = new f();return function (b) {
        return this.clampPoint(b.center, a), a.distanceToSquared(b.center) <= b.radius * b.radius;
      };
    }(), intersectsPlane: function intersectsPlane(a) {
      var b, c;return a.normal.x > 0 ? (b = a.normal.x * this.min.x, c = a.normal.x * this.max.x) : (b = a.normal.x * this.max.x, c = a.normal.x * this.min.x), a.normal.y > 0 ? (b += a.normal.y * this.min.y, c += a.normal.y * this.max.y) : (b += a.normal.y * this.max.y, c += a.normal.y * this.min.y), a.normal.z > 0 ? (b += a.normal.z * this.min.z, c += a.normal.z * this.max.z) : (b += a.normal.z * this.max.z, c += a.normal.z * this.min.z), b <= a.constant && c >= a.constant;
    }, clampPoint: function clampPoint(a, b) {
      return (b || new f()).copy(a).clamp(this.min, this.max);
    }, distanceToPoint: function () {
      var a = new f();return function (b) {
        return a.copy(b).clamp(this.min, this.max).sub(b).length();
      };
    }(), getBoundingSphere: function () {
      var a = new f();return function (b) {
        var c = b || new ba();return this.getCenter(c.center), c.radius = .5 * this.getSize(a).length(), c;
      };
    }(), intersect: function intersect(a) {
      return this.min.max(a.min), this.max.min(a.max), this.isEmpty() && this.makeEmpty(), this;
    }, union: function union(a) {
      return this.min.min(a.min), this.max.max(a.max), this;
    }, applyMatrix4: function () {
      var a = [new f(), new f(), new f(), new f(), new f(), new f(), new f(), new f()];return function (b) {
        return this.isEmpty() ? this : (a[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(b), a[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(b), a[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(b), a[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(b), a[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(b), a[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(b), a[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(b), a[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(b), this.setFromPoints(a), this);
      };
    }(), translate: function translate(a) {
      return this.min.add(a), this.max.add(a), this;
    }, equals: function equals(a) {
      return a.min.equals(this.min) && a.max.equals(this.max);
    } }), Object.assign(ba.prototype, { set: function set(a, b) {
      return this.center.copy(a), this.radius = b, this;
    }, setFromPoints: function () {
      var a = new aa();return function (b, c) {
        var d = this.center;void 0 !== c ? d.copy(c) : a.setFromPoints(b).getCenter(d);for (var e = 0, f = 0, g = b.length; f < g; f++) {
          e = Math.max(e, d.distanceToSquared(b[f]));
        }return this.radius = Math.sqrt(e), this;
      };
    }(), clone: function clone() {
      return new this.constructor().copy(this);
    }, copy: function copy(a) {
      return this.center.copy(a.center), this.radius = a.radius, this;
    }, empty: function empty() {
      return this.radius <= 0;
    }, containsPoint: function containsPoint(a) {
      return a.distanceToSquared(this.center) <= this.radius * this.radius;
    }, distanceToPoint: function distanceToPoint(a) {
      return a.distanceTo(this.center) - this.radius;
    }, intersectsSphere: function intersectsSphere(a) {
      var b = this.radius + a.radius;return a.center.distanceToSquared(this.center) <= b * b;
    }, intersectsBox: function intersectsBox(a) {
      return a.intersectsSphere(this);
    }, intersectsPlane: function intersectsPlane(a) {
      return Math.abs(a.distanceToPoint(this.center)) <= this.radius;
    }, clampPoint: function clampPoint(a, b) {
      var c = this.center.distanceToSquared(a),
          d = b || new f();return d.copy(a), c > this.radius * this.radius && (d.sub(this.center).normalize(), d.multiplyScalar(this.radius).add(this.center)), d;
    }, getBoundingBox: function getBoundingBox(a) {
      var b = a || new aa();return b.set(this.center, this.center), b.expandByScalar(this.radius), b;
    }, applyMatrix4: function applyMatrix4(a) {
      return this.center.applyMatrix4(a), this.radius = this.radius * a.getMaxScaleOnAxis(), this;
    }, translate: function translate(a) {
      return this.center.add(a), this;
    }, equals: function equals(a) {
      return a.center.equals(this.center) && a.radius === this.radius;
    } }), Object.assign(ca.prototype, { set: function set(a, b) {
      return this.normal.copy(a), this.constant = b, this;
    }, setComponents: function setComponents(a, b, c, d) {
      return this.normal.set(a, b, c), this.constant = d, this;
    }, setFromNormalAndCoplanarPoint: function setFromNormalAndCoplanarPoint(a, b) {
      return this.normal.copy(a), this.constant = -b.dot(this.normal), this;
    }, setFromCoplanarPoints: function () {
      var a = new f(),
          b = new f();return function (c, d, e) {
        var f = a.subVectors(e, d).cross(b.subVectors(c, d)).normalize();return this.setFromNormalAndCoplanarPoint(f, c), this;
      };
    }(), clone: function clone() {
      return new this.constructor().copy(this);
    }, copy: function copy(a) {
      return this.normal.copy(a.normal), this.constant = a.constant, this;
    }, normalize: function normalize() {
      var a = 1 / this.normal.length();return this.normal.multiplyScalar(a), this.constant *= a, this;
    }, negate: function negate() {
      return this.constant *= -1, this.normal.negate(), this;
    }, distanceToPoint: function distanceToPoint(a) {
      return this.normal.dot(a) + this.constant;
    }, distanceToSphere: function distanceToSphere(a) {
      return this.distanceToPoint(a.center) - a.radius;
    }, projectPoint: function projectPoint(a, b) {
      return (b || new f()).copy(this.normal).multiplyScalar(-this.distanceToPoint(a)).add(a);
    }, intersectLine: function () {
      var a = new f();return function (b, c) {
        var d = c || new f(),
            e = b.delta(a),
            g = this.normal.dot(e);if (0 !== g) {
          var h = -(b.start.dot(this.normal) + this.constant) / g;if (!(h < 0 || h > 1)) return d.copy(e).multiplyScalar(h).add(b.start);
        } else if (0 === this.distanceToPoint(b.start)) return d.copy(b.start);
      };
    }(), intersectsLine: function intersectsLine(a) {
      var b = this.distanceToPoint(a.start),
          c = this.distanceToPoint(a.end);return b < 0 && c > 0 || c < 0 && b > 0;
    }, intersectsBox: function intersectsBox(a) {
      return a.intersectsPlane(this);
    }, intersectsSphere: function intersectsSphere(a) {
      return a.intersectsPlane(this);
    }, coplanarPoint: function coplanarPoint(a) {
      return (a || new f()).copy(this.normal).multiplyScalar(-this.constant);
    }, applyMatrix4: function () {
      var a = new f(),
          b = new g();return function (c, d) {
        var e = d || b.getNormalMatrix(c),
            f = this.coplanarPoint(a).applyMatrix4(c),
            g = this.normal.applyMatrix3(e).normalize();return this.constant = -f.dot(g), this;
      };
    }(), translate: function translate(a) {
      return this.constant -= a.dot(this.normal), this;
    }, equals: function equals(a) {
      return a.normal.equals(this.normal) && a.constant === this.constant;
    } }), Object.assign(da.prototype, { set: function set(a, b, c, d, e, f) {
      var g = this.planes;return g[0].copy(a), g[1].copy(b), g[2].copy(c), g[3].copy(d), g[4].copy(e), g[5].copy(f), this;
    }, clone: function clone() {
      return new this.constructor().copy(this);
    }, copy: function copy(a) {
      for (var b = this.planes, c = 0; c < 6; c++) {
        b[c].copy(a.planes[c]);
      }return this;
    }, setFromMatrix: function setFromMatrix(a) {
      var b = this.planes,
          c = a.elements,
          d = c[0],
          e = c[1],
          f = c[2],
          g = c[3],
          h = c[4],
          i = c[5],
          j = c[6],
          k = c[7],
          l = c[8],
          m = c[9],
          n = c[10],
          o = c[11],
          p = c[12],
          q = c[13],
          r = c[14],
          s = c[15];return b[0].setComponents(g - d, k - h, o - l, s - p).normalize(), b[1].setComponents(g + d, k + h, o + l, s + p).normalize(), b[2].setComponents(g + e, k + i, o + m, s + q).normalize(), b[3].setComponents(g - e, k - i, o - m, s - q).normalize(), b[4].setComponents(g - f, k - j, o - n, s - r).normalize(), b[5].setComponents(g + f, k + j, o + n, s + r).normalize(), this;
    }, intersectsObject: function () {
      var a = new ba();return function (b) {
        var c = b.geometry;return null === c.boundingSphere && c.computeBoundingSphere(), a.copy(c.boundingSphere).applyMatrix4(b.matrixWorld), this.intersectsSphere(a);
      };
    }(), intersectsSprite: function () {
      var a = new ba();return function (b) {
        return a.center.set(0, 0, 0), a.radius = .7071067811865476, a.applyMatrix4(b.matrixWorld), this.intersectsSphere(a);
      };
    }(), intersectsSphere: function intersectsSphere(a) {
      for (var b = this.planes, c = a.center, d = -a.radius, e = 0; e < 6; e++) {
        if (b[e].distanceToPoint(c) < d) return !1;
      }return !0;
    }, intersectsBox: function () {
      var a = new f(),
          b = new f();return function (c) {
        for (var d = this.planes, e = 0; e < 6; e++) {
          var f = d[e];a.x = f.normal.x > 0 ? c.min.x : c.max.x, b.x = f.normal.x > 0 ? c.max.x : c.min.x, a.y = f.normal.y > 0 ? c.min.y : c.max.y, b.y = f.normal.y > 0 ? c.max.y : c.min.y, a.z = f.normal.z > 0 ? c.min.z : c.max.z, b.z = f.normal.z > 0 ? c.max.z : c.min.z;var g = f.distanceToPoint(a),
              h = f.distanceToPoint(b);if (g < 0 && h < 0) return !1;
        }return !0;
      };
    }(), containsPoint: function containsPoint(a) {
      for (var b = this.planes, c = 0; c < 6; c++) {
        if (b[c].distanceToPoint(a) < 0) return !1;
      }return !0;
    } }), ga.RotationOrders = ["XYZ", "YZX", "ZXY", "XZY", "YXZ", "ZYX"], ga.DefaultOrder = "XYZ", Object.defineProperties(ga.prototype, { x: { get: function get() {
        return this._x;
      }, set: function set(a) {
        this._x = a, this.onChangeCallback();
      } }, y: { get: function get() {
        return this._y;
      }, set: function set(a) {
        this._y = a, this.onChangeCallback();
      } }, z: { get: function get() {
        return this._z;
      }, set: function set(a) {
        this._z = a, this.onChangeCallback();
      } }, order: { get: function get() {
        return this._order;
      }, set: function set(a) {
        this._order = a, this.onChangeCallback();
      } } }), Object.assign(ga.prototype, { isEuler: !0, set: function set(a, b, c, d) {
      return this._x = a, this._y = b, this._z = c, this._order = d || this._order, this.onChangeCallback(), this;
    }, clone: function clone() {
      return new this.constructor(this._x, this._y, this._z, this._order);
    }, copy: function copy(a) {
      return this._x = a._x, this._y = a._y, this._z = a._z, this._order = a._order, this.onChangeCallback(), this;
    }, setFromRotationMatrix: function setFromRotationMatrix(a, b, c) {
      var d = yd.clamp,
          e = a.elements,
          f = e[0],
          g = e[4],
          h = e[8],
          i = e[1],
          j = e[5],
          k = e[9],
          l = e[2],
          m = e[6],
          n = e[10];return b = b || this._order, "XYZ" === b ? (this._y = Math.asin(d(h, -1, 1)), Math.abs(h) < .99999 ? (this._x = Math.atan2(-k, n), this._z = Math.atan2(-g, f)) : (this._x = Math.atan2(m, j), this._z = 0)) : "YXZ" === b ? (this._x = Math.asin(-d(k, -1, 1)), Math.abs(k) < .99999 ? (this._y = Math.atan2(h, n), this._z = Math.atan2(i, j)) : (this._y = Math.atan2(-l, f), this._z = 0)) : "ZXY" === b ? (this._x = Math.asin(d(m, -1, 1)), Math.abs(m) < .99999 ? (this._y = Math.atan2(-l, n), this._z = Math.atan2(-g, j)) : (this._y = 0, this._z = Math.atan2(i, f))) : "ZYX" === b ? (this._y = Math.asin(-d(l, -1, 1)), Math.abs(l) < .99999 ? (this._x = Math.atan2(m, n), this._z = Math.atan2(i, f)) : (this._x = 0, this._z = Math.atan2(-g, j))) : "YZX" === b ? (this._z = Math.asin(d(i, -1, 1)), Math.abs(i) < .99999 ? (this._x = Math.atan2(-k, j), this._y = Math.atan2(-l, f)) : (this._x = 0, this._y = Math.atan2(h, n))) : "XZY" === b ? (this._z = Math.asin(-d(g, -1, 1)), Math.abs(g) < .99999 ? (this._x = Math.atan2(m, j), this._y = Math.atan2(h, f)) : (this._x = Math.atan2(-k, n), this._y = 0)) : console.warn("THREE.Euler: .setFromRotationMatrix() given unsupported order: " + b), this._order = b, !1 !== c && this.onChangeCallback(), this;
    }, setFromQuaternion: function () {
      var a = new d();return function (b, c, d) {
        return a.makeRotationFromQuaternion(b), this.setFromRotationMatrix(a, c, d);
      };
    }(), setFromVector3: function setFromVector3(a, b) {
      return this.set(a.x, a.y, a.z, b || this._order);
    }, reorder: function () {
      var a = new e();return function (b) {
        return a.setFromEuler(this), this.setFromQuaternion(a, b);
      };
    }(), equals: function equals(a) {
      return a._x === this._x && a._y === this._y && a._z === this._z && a._order === this._order;
    }, fromArray: function fromArray(a) {
      return this._x = a[0], this._y = a[1], this._z = a[2], void 0 !== a[3] && (this._order = a[3]), this.onChangeCallback(), this;
    }, toArray: function toArray(a, b) {
      return void 0 === a && (a = []), void 0 === b && (b = 0), a[b] = this._x, a[b + 1] = this._y, a[b + 2] = this._z, a[b + 3] = this._order, a;
    }, toVector3: function toVector3(a) {
      return a ? a.set(this._x, this._y, this._z) : new f(this._x, this._y, this._z);
    }, onChange: function onChange(a) {
      return this.onChangeCallback = a, this;
    }, onChangeCallback: function onChangeCallback() {} }), Object.assign(ha.prototype, { set: function set(a) {
      this.mask = 1 << a | 0;
    }, enable: function enable(a) {
      this.mask |= 1 << a | 0;
    }, toggle: function toggle(a) {
      this.mask ^= 1 << a | 0;
    }, disable: function disable(a) {
      this.mask &= ~(1 << a | 0);
    }, test: function test(a) {
      return 0 != (this.mask & a.mask);
    } });var Pf = 0;ia.DefaultUp = new f(0, 1, 0), ia.DefaultMatrixAutoUpdate = !0, ia.prototype = Object.assign(Object.create(b.prototype), { constructor: ia, isObject3D: !0, onBeforeRender: function onBeforeRender() {}, onAfterRender: function onAfterRender() {}, applyMatrix: function applyMatrix(a) {
      this.matrix.multiplyMatrices(a, this.matrix), this.matrix.decompose(this.position, this.quaternion, this.scale);
    }, applyQuaternion: function applyQuaternion(a) {
      return this.quaternion.premultiply(a), this;
    }, setRotationFromAxisAngle: function setRotationFromAxisAngle(a, b) {
      this.quaternion.setFromAxisAngle(a, b);
    }, setRotationFromEuler: function setRotationFromEuler(a) {
      this.quaternion.setFromEuler(a, !0);
    }, setRotationFromMatrix: function setRotationFromMatrix(a) {
      this.quaternion.setFromRotationMatrix(a);
    }, setRotationFromQuaternion: function setRotationFromQuaternion(a) {
      this.quaternion.copy(a);
    }, rotateOnAxis: function () {
      var a = new e();return function (b, c) {
        return a.setFromAxisAngle(b, c), this.quaternion.multiply(a), this;
      };
    }(), rotateOnWorldAxis: function () {
      var a = new e();return function (b, c) {
        return a.setFromAxisAngle(b, c), this.quaternion.premultiply(a), this;
      };
    }(), rotateX: function () {
      var a = new f(1, 0, 0);return function (b) {
        return this.rotateOnAxis(a, b);
      };
    }(), rotateY: function () {
      var a = new f(0, 1, 0);return function (b) {
        return this.rotateOnAxis(a, b);
      };
    }(), rotateZ: function () {
      var a = new f(0, 0, 1);return function (b) {
        return this.rotateOnAxis(a, b);
      };
    }(), translateOnAxis: function () {
      var a = new f();return function (b, c) {
        return a.copy(b).applyQuaternion(this.quaternion), this.position.add(a.multiplyScalar(c)), this;
      };
    }(), translateX: function () {
      var a = new f(1, 0, 0);return function (b) {
        return this.translateOnAxis(a, b);
      };
    }(), translateY: function () {
      var a = new f(0, 1, 0);return function (b) {
        return this.translateOnAxis(a, b);
      };
    }(), translateZ: function () {
      var a = new f(0, 0, 1);return function (b) {
        return this.translateOnAxis(a, b);
      };
    }(), localToWorld: function localToWorld(a) {
      return a.applyMatrix4(this.matrixWorld);
    }, worldToLocal: function () {
      var a = new d();return function (b) {
        return b.applyMatrix4(a.getInverse(this.matrixWorld));
      };
    }(), lookAt: function () {
      var a = new d(),
          b = new f();return function (c, d, e) {
        c.isVector3 ? b.copy(c) : b.set(c, d, e), this.isCamera ? a.lookAt(this.position, b, this.up) : a.lookAt(b, this.position, this.up), this.quaternion.setFromRotationMatrix(a);
      };
    }(), add: function add(a) {
      if (arguments.length > 1) {
        for (var b = 0; b < arguments.length; b++) {
          this.add(arguments[b]);
        }return this;
      }return a === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", a), this) : (a && a.isObject3D ? (null !== a.parent && a.parent.remove(a), a.parent = this, a.dispatchEvent({ type: "added" }), this.children.push(a)) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", a), this);
    }, remove: function remove(a) {
      if (arguments.length > 1) {
        for (var b = 0; b < arguments.length; b++) {
          this.remove(arguments[b]);
        }return this;
      }var c = this.children.indexOf(a);return -1 !== c && (a.parent = null, a.dispatchEvent({ type: "removed" }), this.children.splice(c, 1)), this;
    }, getObjectById: function getObjectById(a) {
      return this.getObjectByProperty("id", a);
    }, getObjectByName: function getObjectByName(a) {
      return this.getObjectByProperty("name", a);
    }, getObjectByProperty: function getObjectByProperty(a, b) {
      if (this[a] === b) return this;for (var c = 0, d = this.children.length; c < d; c++) {
        var e = this.children[c],
            f = e.getObjectByProperty(a, b);if (void 0 !== f) return f;
      }
    }, getWorldPosition: function getWorldPosition(a) {
      var b = a || new f();return this.updateMatrixWorld(!0), b.setFromMatrixPosition(this.matrixWorld);
    }, getWorldQuaternion: function () {
      var a = new f(),
          b = new f();return function (c) {
        var d = c || new e();return this.updateMatrixWorld(!0), this.matrixWorld.decompose(a, d, b), d;
      };
    }(), getWorldRotation: function () {
      var a = new e();return function (b) {
        var c = b || new ga();return this.getWorldQuaternion(a), c.setFromQuaternion(a, this.rotation.order, !1);
      };
    }(), getWorldScale: function () {
      var a = new f(),
          b = new e();return function (c) {
        var d = c || new f();return this.updateMatrixWorld(!0), this.matrixWorld.decompose(a, b, d), d;
      };
    }(), getWorldDirection: function () {
      var a = new e();return function (b) {
        var c = b || new f();return this.getWorldQuaternion(a), c.set(0, 0, 1).applyQuaternion(a);
      };
    }(), raycast: function raycast() {}, traverse: function traverse(a) {
      a(this);for (var b = this.children, c = 0, d = b.length; c < d; c++) {
        b[c].traverse(a);
      }
    }, traverseVisible: function traverseVisible(a) {
      if (!1 !== this.visible) {
        a(this);for (var b = this.children, c = 0, d = b.length; c < d; c++) {
          b[c].traverseVisible(a);
        }
      }
    }, traverseAncestors: function traverseAncestors(a) {
      var b = this.parent;null !== b && (a(b), b.traverseAncestors(a));
    }, updateMatrix: function updateMatrix() {
      this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = !0;
    }, updateMatrixWorld: function updateMatrixWorld(a) {
      this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || a) && (null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), this.matrixWorldNeedsUpdate = !1, a = !0);for (var b = this.children, c = 0, d = b.length; c < d; c++) {
        b[c].updateMatrixWorld(a);
      }
    }, toJSON: function toJSON(a) {
      function b(b, c) {
        return void 0 === b[c.uuid] && (b[c.uuid] = c.toJSON(a)), c.uuid;
      }function c(a) {
        var b = [];for (var c in a) {
          var d = a[c];delete d.metadata, b.push(d);
        }return b;
      }var d = void 0 === a || "string" == typeof a,
          e = {};d && (a = { geometries: {}, materials: {}, textures: {}, images: {}, shapes: {} }, e.metadata = { version: 4.5, type: "Object", generator: "Object3D.toJSON" });var f = {};if (f.uuid = this.uuid, f.type = this.type, "" !== this.name && (f.name = this.name), !0 === this.castShadow && (f.castShadow = !0), !0 === this.receiveShadow && (f.receiveShadow = !0), !1 === this.visible && (f.visible = !1), "{}" !== JSON.stringify(this.userData) && (f.userData = this.userData), f.matrix = this.matrix.toArray(), void 0 !== this.geometry) {
        f.geometry = b(a.geometries, this.geometry);var g = this.geometry.parameters;if (void 0 !== g && void 0 !== g.shapes) {
          var h = g.shapes;if (Array.isArray(h)) for (var i = 0, j = h.length; i < j; i++) {
            var k = h[i];b(a.shapes, k);
          } else b(a.shapes, h);
        }
      }if (void 0 !== this.material) if (Array.isArray(this.material)) {
        for (var l = [], i = 0, j = this.material.length; i < j; i++) {
          l.push(b(a.materials, this.material[i]));
        }f.material = l;
      } else f.material = b(a.materials, this.material);if (this.children.length > 0) {
        f.children = [];for (var i = 0; i < this.children.length; i++) {
          f.children.push(this.children[i].toJSON(a).object);
        }
      }if (d) {
        var m = c(a.geometries),
            n = c(a.materials),
            o = c(a.textures),
            p = c(a.images),
            h = c(a.shapes);m.length > 0 && (e.geometries = m), n.length > 0 && (e.materials = n), o.length > 0 && (e.textures = o), p.length > 0 && (e.images = p), h.length > 0 && (e.shapes = h);
      }return e.object = f, e;
    }, clone: function clone(a) {
      return new this.constructor().copy(this, a);
    }, copy: function copy(a, b) {
      if (void 0 === b && (b = !0), this.name = a.name, this.up.copy(a.up), this.position.copy(a.position), this.quaternion.copy(a.quaternion), this.scale.copy(a.scale), this.matrix.copy(a.matrix), this.matrixWorld.copy(a.matrixWorld), this.matrixAutoUpdate = a.matrixAutoUpdate, this.matrixWorldNeedsUpdate = a.matrixWorldNeedsUpdate, this.layers.mask = a.layers.mask, this.visible = a.visible, this.castShadow = a.castShadow, this.receiveShadow = a.receiveShadow, this.frustumCulled = a.frustumCulled, this.renderOrder = a.renderOrder, this.userData = JSON.parse(JSON.stringify(a.userData)), !0 === b) for (var c = 0; c < a.children.length; c++) {
        var d = a.children[c];this.add(d.clone());
      }return this;
    } }), ja.prototype = Object.assign(Object.create(ia.prototype), { constructor: ja, isCamera: !0, copy: function copy(a, b) {
      return ia.prototype.copy.call(this, a, b), this.matrixWorldInverse.copy(a.matrixWorldInverse), this.projectionMatrix.copy(a.projectionMatrix), this;
    }, getWorldDirection: function () {
      var a = new e();return function (b) {
        var c = b || new f();return this.getWorldQuaternion(a), c.set(0, 0, -1).applyQuaternion(a);
      };
    }(), updateMatrixWorld: function updateMatrixWorld(a) {
      ia.prototype.updateMatrixWorld.call(this, a), this.matrixWorldInverse.getInverse(this.matrixWorld);
    }, clone: function clone() {
      return new this.constructor().copy(this);
    } }), ka.prototype = Object.assign(Object.create(ja.prototype), { constructor: ka, isOrthographicCamera: !0, copy: function copy(a, b) {
      return ja.prototype.copy.call(this, a, b), this.left = a.left, this.right = a.right, this.top = a.top, this.bottom = a.bottom, this.near = a.near, this.far = a.far, this.zoom = a.zoom, this.view = null === a.view ? null : Object.assign({}, a.view), this;
    }, setViewOffset: function setViewOffset(a, b, c, d, e, f) {
      null === this.view && (this.view = { enabled: !0, fullWidth: 1, fullHeight: 1, offsetX: 0, offsetY: 0, width: 1, height: 1 }), this.view.enabled = !0, this.view.fullWidth = a, this.view.fullHeight = b, this.view.offsetX = c, this.view.offsetY = d, this.view.width = e, this.view.height = f, this.updateProjectionMatrix();
    }, clearViewOffset: function clearViewOffset() {
      null !== this.view && (this.view.enabled = !1), this.updateProjectionMatrix();
    }, updateProjectionMatrix: function updateProjectionMatrix() {
      var a = (this.right - this.left) / (2 * this.zoom),
          b = (this.top - this.bottom) / (2 * this.zoom),
          c = (this.right + this.left) / 2,
          d = (this.top + this.bottom) / 2,
          e = c - a,
          f = c + a,
          g = d + b,
          h = d - b;if (null !== this.view && this.view.enabled) {
        var i = this.zoom / (this.view.width / this.view.fullWidth),
            j = this.zoom / (this.view.height / this.view.fullHeight),
            k = (this.right - this.left) / this.view.width,
            l = (this.top - this.bottom) / this.view.height;e += k * (this.view.offsetX / i), f = e + k * (this.view.width / i), g -= l * (this.view.offsetY / j), h = g - l * (this.view.height / j);
      }this.projectionMatrix.makeOrthographic(e, f, g, h, this.near, this.far);
    }, toJSON: function toJSON(a) {
      var b = ia.prototype.toJSON.call(this, a);return b.object.zoom = this.zoom, b.object.left = this.left, b.object.right = this.right, b.object.top = this.top, b.object.bottom = this.bottom, b.object.near = this.near, b.object.far = this.far, null !== this.view && (b.object.view = Object.assign({}, this.view)), b;
    } }), Object.assign(la.prototype, { clone: function clone() {
      return new this.constructor().copy(this);
    }, copy: function copy(a) {
      this.a = a.a, this.b = a.b, this.c = a.c, this.normal.copy(a.normal), this.color.copy(a.color), this.materialIndex = a.materialIndex;for (var b = 0, c = a.vertexNormals.length; b < c; b++) {
        this.vertexNormals[b] = a.vertexNormals[b].clone();
      }for (var b = 0, c = a.vertexColors.length; b < c; b++) {
        this.vertexColors[b] = a.vertexColors[b].clone();
      }return this;
    } });var Qf = 0;ma.prototype = Object.assign(Object.create(b.prototype), { constructor: ma, isGeometry: !0, applyMatrix: function applyMatrix(a) {
      for (var b = new g().getNormalMatrix(a), c = 0, d = this.vertices.length; c < d; c++) {
        this.vertices[c].applyMatrix4(a);
      }for (var c = 0, d = this.faces.length; c < d; c++) {
        var e = this.faces[c];e.normal.applyMatrix3(b).normalize();for (var f = 0, h = e.vertexNormals.length; f < h; f++) {
          e.vertexNormals[f].applyMatrix3(b).normalize();
        }
      }return null !== this.boundingBox && this.computeBoundingBox(), null !== this.boundingSphere && this.computeBoundingSphere(), this.verticesNeedUpdate = !0, this.normalsNeedUpdate = !0, this;
    }, rotateX: function () {
      var a = new d();return function (b) {
        return a.makeRotationX(b), this.applyMatrix(a), this;
      };
    }(), rotateY: function () {
      var a = new d();return function (b) {
        return a.makeRotationY(b), this.applyMatrix(a), this;
      };
    }(), rotateZ: function () {
      var a = new d();return function (b) {
        return a.makeRotationZ(b), this.applyMatrix(a), this;
      };
    }(), translate: function () {
      var a = new d();return function (b, c, d) {
        return a.makeTranslation(b, c, d), this.applyMatrix(a), this;
      };
    }(), scale: function () {
      var a = new d();return function (b, c, d) {
        return a.makeScale(b, c, d), this.applyMatrix(a), this;
      };
    }(), lookAt: function () {
      var a = new ia();return function (b) {
        a.lookAt(b), a.updateMatrix(), this.applyMatrix(a.matrix);
      };
    }(), fromBufferGeometry: function fromBufferGeometry(a) {
      function b(a, b, c, e) {
        var f = void 0 !== i ? [m[a].clone(), m[b].clone(), m[c].clone()] : [],
            g = void 0 !== j ? [d.colors[a].clone(), d.colors[b].clone(), d.colors[c].clone()] : [],
            h = new la(a, b, c, f, g, e);d.faces.push(h), void 0 !== k && d.faceVertexUvs[0].push([n[a].clone(), n[b].clone(), n[c].clone()]), void 0 !== l && d.faceVertexUvs[1].push([o[a].clone(), o[b].clone(), o[c].clone()]);
      }var d = this,
          e = null !== a.index ? a.index.array : void 0,
          g = a.attributes,
          h = g.position.array,
          i = void 0 !== g.normal ? g.normal.array : void 0,
          j = void 0 !== g.color ? g.color.array : void 0,
          k = void 0 !== g.uv ? g.uv.array : void 0,
          l = void 0 !== g.uv2 ? g.uv2.array : void 0;void 0 !== l && (this.faceVertexUvs[1] = []);for (var m = [], n = [], o = [], p = 0, q = 0; p < h.length; p += 3, q += 2) {
        d.vertices.push(new f(h[p], h[p + 1], h[p + 2])), void 0 !== i && m.push(new f(i[p], i[p + 1], i[p + 2])), void 0 !== j && d.colors.push(new U(j[p], j[p + 1], j[p + 2])), void 0 !== k && n.push(new c(k[q], k[q + 1])), void 0 !== l && o.push(new c(l[q], l[q + 1]));
      }var r = a.groups;if (r.length > 0) for (var p = 0; p < r.length; p++) {
        for (var s = r[p], t = s.start, u = s.count, q = t, v = t + u; q < v; q += 3) {
          void 0 !== e ? b(e[q], e[q + 1], e[q + 2], s.materialIndex) : b(q, q + 1, q + 2, s.materialIndex);
        }
      } else if (void 0 !== e) for (var p = 0; p < e.length; p += 3) {
        b(e[p], e[p + 1], e[p + 2]);
      } else for (var p = 0; p < h.length / 3; p += 3) {
        b(p, p + 1, p + 2);
      }return this.computeFaceNormals(), null !== a.boundingBox && (this.boundingBox = a.boundingBox.clone()), null !== a.boundingSphere && (this.boundingSphere = a.boundingSphere.clone()), this;
    }, center: function center() {
      this.computeBoundingBox();var a = this.boundingBox.getCenter().negate();return this.translate(a.x, a.y, a.z), a;
    }, normalize: function normalize() {
      this.computeBoundingSphere();var a = this.boundingSphere.center,
          b = this.boundingSphere.radius,
          c = 0 === b ? 1 : 1 / b,
          e = new d();return e.set(c, 0, 0, -c * a.x, 0, c, 0, -c * a.y, 0, 0, c, -c * a.z, 0, 0, 0, 1), this.applyMatrix(e), this;
    }, computeFaceNormals: function computeFaceNormals() {
      for (var a = new f(), b = new f(), c = 0, d = this.faces.length; c < d; c++) {
        var e = this.faces[c],
            g = this.vertices[e.a],
            h = this.vertices[e.b],
            i = this.vertices[e.c];a.subVectors(i, h), b.subVectors(g, h), a.cross(b), a.normalize(), e.normal.copy(a);
      }
    }, computeVertexNormals: function computeVertexNormals(a) {
      void 0 === a && (a = !0);var b, c, d, e, g, h;for (h = new Array(this.vertices.length), b = 0, c = this.vertices.length; b < c; b++) {
        h[b] = new f();
      }if (a) {
        var i,
            j,
            k,
            l = new f(),
            m = new f();for (d = 0, e = this.faces.length; d < e; d++) {
          g = this.faces[d], i = this.vertices[g.a], j = this.vertices[g.b], k = this.vertices[g.c], l.subVectors(k, j), m.subVectors(i, j), l.cross(m), h[g.a].add(l), h[g.b].add(l), h[g.c].add(l);
        }
      } else for (this.computeFaceNormals(), d = 0, e = this.faces.length; d < e; d++) {
        g = this.faces[d], h[g.a].add(g.normal), h[g.b].add(g.normal), h[g.c].add(g.normal);
      }for (b = 0, c = this.vertices.length; b < c; b++) {
        h[b].normalize();
      }for (d = 0, e = this.faces.length; d < e; d++) {
        g = this.faces[d];var n = g.vertexNormals;3 === n.length ? (n[0].copy(h[g.a]), n[1].copy(h[g.b]), n[2].copy(h[g.c])) : (n[0] = h[g.a].clone(), n[1] = h[g.b].clone(), n[2] = h[g.c].clone());
      }this.faces.length > 0 && (this.normalsNeedUpdate = !0);
    }, computeFlatVertexNormals: function computeFlatVertexNormals() {
      var a, b, c;for (this.computeFaceNormals(), a = 0, b = this.faces.length; a < b; a++) {
        c = this.faces[a];var d = c.vertexNormals;3 === d.length ? (d[0].copy(c.normal), d[1].copy(c.normal), d[2].copy(c.normal)) : (d[0] = c.normal.clone(), d[1] = c.normal.clone(), d[2] = c.normal.clone());
      }this.faces.length > 0 && (this.normalsNeedUpdate = !0);
    }, computeMorphNormals: function computeMorphNormals() {
      var a, b, c, d, e;for (c = 0, d = this.faces.length; c < d; c++) {
        for (e = this.faces[c], e.__originalFaceNormal ? e.__originalFaceNormal.copy(e.normal) : e.__originalFaceNormal = e.normal.clone(), e.__originalVertexNormals || (e.__originalVertexNormals = []), a = 0, b = e.vertexNormals.length; a < b; a++) {
          e.__originalVertexNormals[a] ? e.__originalVertexNormals[a].copy(e.vertexNormals[a]) : e.__originalVertexNormals[a] = e.vertexNormals[a].clone();
        }
      }var g = new ma();for (g.faces = this.faces, a = 0, b = this.morphTargets.length; a < b; a++) {
        if (!this.morphNormals[a]) {
          this.morphNormals[a] = {}, this.morphNormals[a].faceNormals = [], this.morphNormals[a].vertexNormals = [];var h,
              i,
              j = this.morphNormals[a].faceNormals,
              k = this.morphNormals[a].vertexNormals;for (c = 0, d = this.faces.length; c < d; c++) {
            h = new f(), i = { a: new f(), b: new f(), c: new f() }, j.push(h), k.push(i);
          }
        }var l = this.morphNormals[a];g.vertices = this.morphTargets[a].vertices, g.computeFaceNormals(), g.computeVertexNormals();var h, i;for (c = 0, d = this.faces.length; c < d; c++) {
          e = this.faces[c], h = l.faceNormals[c], i = l.vertexNormals[c], h.copy(e.normal), i.a.copy(e.vertexNormals[0]), i.b.copy(e.vertexNormals[1]), i.c.copy(e.vertexNormals[2]);
        }
      }for (c = 0, d = this.faces.length; c < d; c++) {
        e = this.faces[c], e.normal = e.__originalFaceNormal, e.vertexNormals = e.__originalVertexNormals;
      }
    }, computeLineDistances: function computeLineDistances() {
      for (var a = 0, b = this.vertices, c = 0, d = b.length; c < d; c++) {
        c > 0 && (a += b[c].distanceTo(b[c - 1])), this.lineDistances[c] = a;
      }
    }, computeBoundingBox: function computeBoundingBox() {
      null === this.boundingBox && (this.boundingBox = new aa()), this.boundingBox.setFromPoints(this.vertices);
    }, computeBoundingSphere: function computeBoundingSphere() {
      null === this.boundingSphere && (this.boundingSphere = new ba()), this.boundingSphere.setFromPoints(this.vertices);
    }, merge: function merge(a, b, c) {
      if (!a || !a.isGeometry) return void console.error("THREE.Geometry.merge(): geometry not an instance of THREE.Geometry.", a);var d,
          e = this.vertices.length,
          f = this.vertices,
          h = a.vertices,
          i = this.faces,
          j = a.faces,
          k = this.faceVertexUvs[0],
          l = a.faceVertexUvs[0],
          m = this.colors,
          n = a.colors;void 0 === c && (c = 0), void 0 !== b && (d = new g().getNormalMatrix(b));for (var o = 0, p = h.length; o < p; o++) {
        var q = h[o],
            r = q.clone();void 0 !== b && r.applyMatrix4(b), f.push(r);
      }for (var o = 0, p = n.length; o < p; o++) {
        m.push(n[o].clone());
      }for (o = 0, p = j.length; o < p; o++) {
        var s,
            t,
            u,
            v = j[o],
            w = v.vertexNormals,
            x = v.vertexColors;s = new la(v.a + e, v.b + e, v.c + e), s.normal.copy(v.normal), void 0 !== d && s.normal.applyMatrix3(d).normalize();for (var y = 0, z = w.length; y < z; y++) {
          t = w[y].clone(), void 0 !== d && t.applyMatrix3(d).normalize(), s.vertexNormals.push(t);
        }s.color.copy(v.color);for (var y = 0, z = x.length; y < z; y++) {
          u = x[y], s.vertexColors.push(u.clone());
        }s.materialIndex = v.materialIndex + c, i.push(s);
      }for (o = 0, p = l.length; o < p; o++) {
        var A = l[o],
            B = [];if (void 0 !== A) {
          for (var y = 0, z = A.length; y < z; y++) {
            B.push(A[y].clone());
          }k.push(B);
        }
      }
    }, mergeMesh: function mergeMesh(a) {
      if (!a || !a.isMesh) return void console.error("THREE.Geometry.mergeMesh(): mesh not an instance of THREE.Mesh.", a);a.matrixAutoUpdate && a.updateMatrix(), this.merge(a.geometry, a.matrix);
    }, mergeVertices: function mergeVertices() {
      var a,
          b,
          c,
          d,
          e,
          f,
          g,
          h,
          i = {},
          j = [],
          k = [],
          l = 4,
          m = Math.pow(10, l);for (c = 0, d = this.vertices.length; c < d; c++) {
        a = this.vertices[c], b = Math.round(a.x * m) + "_" + Math.round(a.y * m) + "_" + Math.round(a.z * m), void 0 === i[b] ? (i[b] = c, j.push(this.vertices[c]), k[c] = j.length - 1) : k[c] = k[i[b]];
      }var n = [];for (c = 0, d = this.faces.length; c < d; c++) {
        e = this.faces[c], e.a = k[e.a], e.b = k[e.b], e.c = k[e.c], f = [e.a, e.b, e.c];for (var o = 0; o < 3; o++) {
          if (f[o] === f[(o + 1) % 3]) {
            n.push(c);break;
          }
        }
      }for (c = n.length - 1; c >= 0; c--) {
        var p = n[c];for (this.faces.splice(p, 1), g = 0, h = this.faceVertexUvs.length; g < h; g++) {
          this.faceVertexUvs[g].splice(p, 1);
        }
      }var q = this.vertices.length - j.length;return this.vertices = j, q;
    }, setFromPoints: function setFromPoints(a) {
      this.vertices = [];for (var b = 0, c = a.length; b < c; b++) {
        var d = a[b];this.vertices.push(new f(d.x, d.y, d.z || 0));
      }return this;
    }, sortFacesByMaterialIndex: function sortFacesByMaterialIndex() {
      function a(a, b) {
        return a.materialIndex - b.materialIndex;
      }for (var b = this.faces, c = b.length, d = 0; d < c; d++) {
        b[d]._id = d;
      }b.sort(a);var e,
          f,
          g = this.faceVertexUvs[0],
          h = this.faceVertexUvs[1];g && g.length === c && (e = []), h && h.length === c && (f = []);for (var d = 0; d < c; d++) {
        var i = b[d]._id;e && e.push(g[i]), f && f.push(h[i]);
      }e && (this.faceVertexUvs[0] = e), f && (this.faceVertexUvs[1] = f);
    }, toJSON: function toJSON() {
      function a(a, b, c) {
        return c ? a | 1 << b : a & ~(1 << b);
      }function b(a) {
        var b = a.x.toString() + a.y.toString() + a.z.toString();return void 0 !== m[b] ? m[b] : (m[b] = l.length / 3, l.push(a.x, a.y, a.z), m[b]);
      }function c(a) {
        var b = a.r.toString() + a.g.toString() + a.b.toString();return void 0 !== o[b] ? o[b] : (o[b] = n.length, n.push(a.getHex()), o[b]);
      }function d(a) {
        var b = a.x.toString() + a.y.toString();return void 0 !== q[b] ? q[b] : (q[b] = p.length / 2, p.push(a.x, a.y), q[b]);
      }var e = { metadata: { version: 4.5, type: "Geometry", generator: "Geometry.toJSON" } };if (e.uuid = this.uuid, e.type = this.type, "" !== this.name && (e.name = this.name), void 0 !== this.parameters) {
        var f = this.parameters;for (var g in f) {
          void 0 !== f[g] && (e[g] = f[g]);
        }return e;
      }for (var h = [], i = 0; i < this.vertices.length; i++) {
        var j = this.vertices[i];h.push(j.x, j.y, j.z);
      }for (var k = [], l = [], m = {}, n = [], o = {}, p = [], q = {}, i = 0; i < this.faces.length; i++) {
        var r = this.faces[i],
            s = void 0 !== this.faceVertexUvs[0][i],
            t = r.normal.length() > 0,
            u = r.vertexNormals.length > 0,
            v = 1 !== r.color.r || 1 !== r.color.g || 1 !== r.color.b,
            w = r.vertexColors.length > 0,
            x = 0;if (x = a(x, 0, 0), x = a(x, 1, !0), x = a(x, 2, !1), x = a(x, 3, s), x = a(x, 4, t), x = a(x, 5, u), x = a(x, 6, v), x = a(x, 7, w), k.push(x), k.push(r.a, r.b, r.c), k.push(r.materialIndex), s) {
          var y = this.faceVertexUvs[0][i];k.push(d(y[0]), d(y[1]), d(y[2]));
        }if (t && k.push(b(r.normal)), u) {
          var z = r.vertexNormals;k.push(b(z[0]), b(z[1]), b(z[2]));
        }if (v && k.push(c(r.color)), w) {
          var A = r.vertexColors;k.push(c(A[0]), c(A[1]), c(A[2]));
        }
      }return e.data = {}, e.data.vertices = h, e.data.normals = l, n.length > 0 && (e.data.colors = n), p.length > 0 && (e.data.uvs = [p]), e.data.faces = k, e;
    }, clone: function clone() {
      return new ma().copy(this);
    }, copy: function copy(a) {
      var b, c, d, e, f, g;this.vertices = [], this.colors = [], this.faces = [], this.faceVertexUvs = [[]], this.morphTargets = [], this.morphNormals = [], this.skinWeights = [], this.skinIndices = [], this.lineDistances = [], this.boundingBox = null, this.boundingSphere = null, this.name = a.name;var h = a.vertices;for (b = 0, c = h.length; b < c; b++) {
        this.vertices.push(h[b].clone());
      }var i = a.colors;for (b = 0, c = i.length; b < c; b++) {
        this.colors.push(i[b].clone());
      }var j = a.faces;for (b = 0, c = j.length; b < c; b++) {
        this.faces.push(j[b].clone());
      }for (b = 0, c = a.faceVertexUvs.length; b < c; b++) {
        var k = a.faceVertexUvs[b];for (void 0 === this.faceVertexUvs[b] && (this.faceVertexUvs[b] = []), d = 0, e = k.length; d < e; d++) {
          var l = k[d],
              m = [];for (f = 0, g = l.length; f < g; f++) {
            var n = l[f];m.push(n.clone());
          }this.faceVertexUvs[b].push(m);
        }
      }var o = a.morphTargets;for (b = 0, c = o.length; b < c; b++) {
        var p = {};if (p.name = o[b].name, void 0 !== o[b].vertices) for (p.vertices = [], d = 0, e = o[b].vertices.length; d < e; d++) {
          p.vertices.push(o[b].vertices[d].clone());
        }if (void 0 !== o[b].normals) for (p.normals = [], d = 0, e = o[b].normals.length; d < e; d++) {
          p.normals.push(o[b].normals[d].clone());
        }this.morphTargets.push(p);
      }var q = a.morphNormals;for (b = 0, c = q.length; b < c; b++) {
        var r = {};if (void 0 !== q[b].vertexNormals) for (r.vertexNormals = [], d = 0, e = q[b].vertexNormals.length; d < e; d++) {
          var s = q[b].vertexNormals[d],
              t = {};t.a = s.a.clone(), t.b = s.b.clone(), t.c = s.c.clone(), r.vertexNormals.push(t);
        }if (void 0 !== q[b].faceNormals) for (r.faceNormals = [], d = 0, e = q[b].faceNormals.length; d < e; d++) {
          r.faceNormals.push(q[b].faceNormals[d].clone());
        }this.morphNormals.push(r);
      }var u = a.skinWeights;for (b = 0, c = u.length; b < c; b++) {
        this.skinWeights.push(u[b].clone());
      }var v = a.skinIndices;for (b = 0, c = v.length; b < c; b++) {
        this.skinIndices.push(v[b].clone());
      }var w = a.lineDistances;for (b = 0, c = w.length; b < c; b++) {
        this.lineDistances.push(w[b]);
      }var x = a.boundingBox;null !== x && (this.boundingBox = x.clone());var y = a.boundingSphere;return null !== y && (this.boundingSphere = y.clone()), this.elementsNeedUpdate = a.elementsNeedUpdate, this.verticesNeedUpdate = a.verticesNeedUpdate, this.uvsNeedUpdate = a.uvsNeedUpdate, this.normalsNeedUpdate = a.normalsNeedUpdate, this.colorsNeedUpdate = a.colorsNeedUpdate, this.lineDistancesNeedUpdate = a.lineDistancesNeedUpdate, this.groupsNeedUpdate = a.groupsNeedUpdate, this;
    }, dispose: function dispose() {
      this.dispatchEvent({ type: "dispose" });
    } }), Object.defineProperty(na.prototype, "needsUpdate", { set: function set(a) {
      !0 === a && this.version++;
    } }), Object.assign(na.prototype, { isBufferAttribute: !0, setArray: function setArray(a) {
      if (Array.isArray(a)) throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.count = void 0 !== a ? a.length / this.itemSize : 0, this.array = a;
    }, setDynamic: function setDynamic(a) {
      return this.dynamic = a, this;
    }, copy: function copy(a) {
      return this.array = new a.array.constructor(a.array), this.itemSize = a.itemSize, this.count = a.count, this.normalized = a.normalized, this.dynamic = a.dynamic, this;
    }, copyAt: function copyAt(a, b, c) {
      a *= this.itemSize, c *= b.itemSize;for (var d = 0, e = this.itemSize; d < e; d++) {
        this.array[a + d] = b.array[c + d];
      }return this;
    }, copyArray: function copyArray(a) {
      return this.array.set(a), this;
    }, copyColorsArray: function copyColorsArray(a) {
      for (var b = this.array, c = 0, d = 0, e = a.length; d < e; d++) {
        var f = a[d];void 0 === f && (console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined", d), f = new U()), b[c++] = f.r, b[c++] = f.g, b[c++] = f.b;
      }return this;
    }, copyIndicesArray: function copyIndicesArray(a) {
      for (var b = this.array, c = 0, d = 0, e = a.length; d < e; d++) {
        var f = a[d];b[c++] = f.a, b[c++] = f.b, b[c++] = f.c;
      }return this;
    }, copyVector2sArray: function copyVector2sArray(a) {
      for (var b = this.array, d = 0, e = 0, f = a.length; e < f; e++) {
        var g = a[e];void 0 === g && (console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined", e), g = new c()), b[d++] = g.x, b[d++] = g.y;
      }return this;
    }, copyVector3sArray: function copyVector3sArray(a) {
      for (var b = this.array, c = 0, d = 0, e = a.length; d < e; d++) {
        var g = a[d];void 0 === g && (console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined", d), g = new f()), b[c++] = g.x, b[c++] = g.y, b[c++] = g.z;
      }return this;
    }, copyVector4sArray: function copyVector4sArray(a) {
      for (var b = this.array, c = 0, d = 0, e = a.length; d < e; d++) {
        var f = a[d];void 0 === f && (console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined", d), f = new i()), b[c++] = f.x, b[c++] = f.y, b[c++] = f.z, b[c++] = f.w;
      }return this;
    }, set: function set(a, b) {
      return void 0 === b && (b = 0), this.array.set(a, b), this;
    }, getX: function getX(a) {
      return this.array[a * this.itemSize];
    }, setX: function setX(a, b) {
      return this.array[a * this.itemSize] = b, this;
    }, getY: function getY(a) {
      return this.array[a * this.itemSize + 1];
    }, setY: function setY(a, b) {
      return this.array[a * this.itemSize + 1] = b, this;
    }, getZ: function getZ(a) {
      return this.array[a * this.itemSize + 2];
    }, setZ: function setZ(a, b) {
      return this.array[a * this.itemSize + 2] = b, this;
    }, getW: function getW(a) {
      return this.array[a * this.itemSize + 3];
    }, setW: function setW(a, b) {
      return this.array[a * this.itemSize + 3] = b, this;
    }, setXY: function setXY(a, b, c) {
      return a *= this.itemSize, this.array[a + 0] = b, this.array[a + 1] = c, this;
    }, setXYZ: function setXYZ(a, b, c, d) {
      return a *= this.itemSize, this.array[a + 0] = b, this.array[a + 1] = c, this.array[a + 2] = d, this;
    }, setXYZW: function setXYZW(a, b, c, d, e) {
      return a *= this.itemSize, this.array[a + 0] = b, this.array[a + 1] = c, this.array[a + 2] = d, this.array[a + 3] = e, this;
    }, onUpload: function onUpload(a) {
      return this.onUploadCallback = a, this;
    }, clone: function clone() {
      return new this.constructor(this.array, this.itemSize).copy(this);
    } }), oa.prototype = Object.create(na.prototype), oa.prototype.constructor = oa, pa.prototype = Object.create(na.prototype), pa.prototype.constructor = pa, qa.prototype = Object.create(na.prototype), qa.prototype.constructor = qa, ra.prototype = Object.create(na.prototype), ra.prototype.constructor = ra, sa.prototype = Object.create(na.prototype), sa.prototype.constructor = sa, ta.prototype = Object.create(na.prototype), ta.prototype.constructor = ta, ua.prototype = Object.create(na.prototype), ua.prototype.constructor = ua, va.prototype = Object.create(na.prototype), va.prototype.constructor = va, wa.prototype = Object.create(na.prototype), wa.prototype.constructor = wa, Object.assign(xa.prototype, { computeGroups: function computeGroups(a) {
      for (var b, c = [], d = void 0, e = a.faces, f = 0; f < e.length; f++) {
        var g = e[f];g.materialIndex !== d && (d = g.materialIndex, void 0 !== b && (b.count = 3 * f - b.start, c.push(b)), b = { start: 3 * f, materialIndex: d });
      }void 0 !== b && (b.count = 3 * f - b.start, c.push(b)), this.groups = c;
    }, fromGeometry: function fromGeometry(a) {
      var b,
          d = a.faces,
          e = a.vertices,
          f = a.faceVertexUvs,
          g = f[0] && f[0].length > 0,
          h = f[1] && f[1].length > 0,
          i = a.morphTargets,
          j = i.length;if (j > 0) {
        b = [];for (var k = 0; k < j; k++) {
          b[k] = [];
        }this.morphTargets.position = b;
      }var l,
          m = a.morphNormals,
          n = m.length;if (n > 0) {
        l = [];for (var k = 0; k < n; k++) {
          l[k] = [];
        }this.morphTargets.normal = l;
      }for (var o = a.skinIndices, p = a.skinWeights, q = o.length === e.length, r = p.length === e.length, k = 0; k < d.length; k++) {
        var s = d[k];this.vertices.push(e[s.a], e[s.b], e[s.c]);var t = s.vertexNormals;if (3 === t.length) this.normals.push(t[0], t[1], t[2]);else {
          var u = s.normal;this.normals.push(u, u, u);
        }var v = s.vertexColors;if (3 === v.length) this.colors.push(v[0], v[1], v[2]);else {
          var w = s.color;this.colors.push(w, w, w);
        }if (!0 === g) {
          var x = f[0][k];void 0 !== x ? this.uvs.push(x[0], x[1], x[2]) : (console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv ", k), this.uvs.push(new c(), new c(), new c()));
        }if (!0 === h) {
          var x = f[1][k];void 0 !== x ? this.uvs2.push(x[0], x[1], x[2]) : (console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv2 ", k), this.uvs2.push(new c(), new c(), new c()));
        }for (var y = 0; y < j; y++) {
          var z = i[y].vertices;b[y].push(z[s.a], z[s.b], z[s.c]);
        }for (var y = 0; y < n; y++) {
          var A = m[y].vertexNormals[k];l[y].push(A.a, A.b, A.c);
        }q && this.skinIndices.push(o[s.a], o[s.b], o[s.c]), r && this.skinWeights.push(p[s.a], p[s.b], p[s.c]);
      }return this.computeGroups(a), this.verticesNeedUpdate = a.verticesNeedUpdate, this.normalsNeedUpdate = a.normalsNeedUpdate, this.colorsNeedUpdate = a.colorsNeedUpdate, this.uvsNeedUpdate = a.uvsNeedUpdate, this.groupsNeedUpdate = a.groupsNeedUpdate, this;
    } });var Rf = 1;za.prototype = Object.assign(Object.create(b.prototype), { constructor: za, isBufferGeometry: !0, getIndex: function getIndex() {
      return this.index;
    }, setIndex: function setIndex(a) {
      Array.isArray(a) ? this.index = new (ya(a) > 65535 ? ua : sa)(a, 1) : this.index = a;
    }, addAttribute: function addAttribute(a, b) {
      return b && b.isBufferAttribute || b && b.isInterleavedBufferAttribute ? "index" === a ? (console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."), void this.setIndex(b)) : (this.attributes[a] = b, this) : (console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."), void this.addAttribute(a, new na(arguments[1], arguments[2])));
    }, getAttribute: function getAttribute(a) {
      return this.attributes[a];
    }, removeAttribute: function removeAttribute(a) {
      return delete this.attributes[a], this;
    }, addGroup: function addGroup(a, b, c) {
      this.groups.push({ start: a, count: b, materialIndex: void 0 !== c ? c : 0 });
    }, clearGroups: function clearGroups() {
      this.groups = [];
    }, setDrawRange: function setDrawRange(a, b) {
      this.drawRange.start = a, this.drawRange.count = b;
    }, applyMatrix: function applyMatrix(a) {
      var b = this.attributes.position;void 0 !== b && (a.applyToBufferAttribute(b), b.needsUpdate = !0);var c = this.attributes.normal;if (void 0 !== c) {
        new g().getNormalMatrix(a).applyToBufferAttribute(c), c.needsUpdate = !0;
      }return null !== this.boundingBox && this.computeBoundingBox(), null !== this.boundingSphere && this.computeBoundingSphere(), this;
    }, rotateX: function () {
      var a = new d();return function (b) {
        return a.makeRotationX(b), this.applyMatrix(a), this;
      };
    }(), rotateY: function () {
      var a = new d();return function (b) {
        return a.makeRotationY(b), this.applyMatrix(a), this;
      };
    }(), rotateZ: function () {
      var a = new d();return function (b) {
        return a.makeRotationZ(b), this.applyMatrix(a), this;
      };
    }(), translate: function () {
      var a = new d();return function (b, c, d) {
        return a.makeTranslation(b, c, d), this.applyMatrix(a), this;
      };
    }(), scale: function () {
      var a = new d();return function (b, c, d) {
        return a.makeScale(b, c, d), this.applyMatrix(a), this;
      };
    }(), lookAt: function () {
      var a = new ia();return function (b) {
        a.lookAt(b), a.updateMatrix(), this.applyMatrix(a.matrix);
      };
    }(), center: function center() {
      this.computeBoundingBox();var a = this.boundingBox.getCenter().negate();return this.translate(a.x, a.y, a.z), a;
    }, setFromObject: function setFromObject(a) {
      var b = a.geometry;if (a.isPoints || a.isLine) {
        var c = new va(3 * b.vertices.length, 3),
            d = new va(3 * b.colors.length, 3);if (this.addAttribute("position", c.copyVector3sArray(b.vertices)), this.addAttribute("color", d.copyColorsArray(b.colors)), b.lineDistances && b.lineDistances.length === b.vertices.length) {
          var e = new va(b.lineDistances.length, 1);this.addAttribute("lineDistance", e.copyArray(b.lineDistances));
        }null !== b.boundingSphere && (this.boundingSphere = b.boundingSphere.clone()), null !== b.boundingBox && (this.boundingBox = b.boundingBox.clone());
      } else a.isMesh && b && b.isGeometry && this.fromGeometry(b);return this;
    }, setFromPoints: function setFromPoints(a) {
      for (var b = [], c = 0, d = a.length; c < d; c++) {
        var e = a[c];b.push(e.x, e.y, e.z || 0);
      }return this.addAttribute("position", new va(b, 3)), this;
    }, updateFromObject: function updateFromObject(a) {
      var b = a.geometry;if (a.isMesh) {
        var c = b.__directGeometry;if (!0 === b.elementsNeedUpdate && (c = void 0, b.elementsNeedUpdate = !1), void 0 === c) return this.fromGeometry(b);c.verticesNeedUpdate = b.verticesNeedUpdate, c.normalsNeedUpdate = b.normalsNeedUpdate, c.colorsNeedUpdate = b.colorsNeedUpdate, c.uvsNeedUpdate = b.uvsNeedUpdate, c.groupsNeedUpdate = b.groupsNeedUpdate, b.verticesNeedUpdate = !1, b.normalsNeedUpdate = !1, b.colorsNeedUpdate = !1, b.uvsNeedUpdate = !1, b.groupsNeedUpdate = !1, b = c;
      }var d;return !0 === b.verticesNeedUpdate && (d = this.attributes.position, void 0 !== d && (d.copyVector3sArray(b.vertices), d.needsUpdate = !0), b.verticesNeedUpdate = !1), !0 === b.normalsNeedUpdate && (d = this.attributes.normal, void 0 !== d && (d.copyVector3sArray(b.normals), d.needsUpdate = !0), b.normalsNeedUpdate = !1), !0 === b.colorsNeedUpdate && (d = this.attributes.color, void 0 !== d && (d.copyColorsArray(b.colors), d.needsUpdate = !0), b.colorsNeedUpdate = !1), b.uvsNeedUpdate && (d = this.attributes.uv, void 0 !== d && (d.copyVector2sArray(b.uvs), d.needsUpdate = !0), b.uvsNeedUpdate = !1), b.lineDistancesNeedUpdate && (d = this.attributes.lineDistance, void 0 !== d && (d.copyArray(b.lineDistances), d.needsUpdate = !0), b.lineDistancesNeedUpdate = !1), b.groupsNeedUpdate && (b.computeGroups(a.geometry), this.groups = b.groups, b.groupsNeedUpdate = !1), this;
    }, fromGeometry: function fromGeometry(a) {
      return a.__directGeometry = new xa().fromGeometry(a), this.fromDirectGeometry(a.__directGeometry);
    }, fromDirectGeometry: function fromDirectGeometry(a) {
      var b = new Float32Array(3 * a.vertices.length);if (this.addAttribute("position", new na(b, 3).copyVector3sArray(a.vertices)), a.normals.length > 0) {
        var c = new Float32Array(3 * a.normals.length);this.addAttribute("normal", new na(c, 3).copyVector3sArray(a.normals));
      }if (a.colors.length > 0) {
        var d = new Float32Array(3 * a.colors.length);this.addAttribute("color", new na(d, 3).copyColorsArray(a.colors));
      }if (a.uvs.length > 0) {
        var e = new Float32Array(2 * a.uvs.length);this.addAttribute("uv", new na(e, 2).copyVector2sArray(a.uvs));
      }if (a.uvs2.length > 0) {
        var f = new Float32Array(2 * a.uvs2.length);this.addAttribute("uv2", new na(f, 2).copyVector2sArray(a.uvs2));
      }if (a.indices.length > 0) {
        var g = ya(a.indices) > 65535 ? Uint32Array : Uint16Array,
            h = new g(3 * a.indices.length);this.setIndex(new na(h, 1).copyIndicesArray(a.indices));
      }this.groups = a.groups;for (var i in a.morphTargets) {
        for (var j = [], k = a.morphTargets[i], l = 0, m = k.length; l < m; l++) {
          var n = k[l],
              o = new va(3 * n.length, 3);j.push(o.copyVector3sArray(n));
        }this.morphAttributes[i] = j;
      }if (a.skinIndices.length > 0) {
        var p = new va(4 * a.skinIndices.length, 4);this.addAttribute("skinIndex", p.copyVector4sArray(a.skinIndices));
      }if (a.skinWeights.length > 0) {
        var q = new va(4 * a.skinWeights.length, 4);this.addAttribute("skinWeight", q.copyVector4sArray(a.skinWeights));
      }return null !== a.boundingSphere && (this.boundingSphere = a.boundingSphere.clone()), null !== a.boundingBox && (this.boundingBox = a.boundingBox.clone()), this;
    }, computeBoundingBox: function computeBoundingBox() {
      null === this.boundingBox && (this.boundingBox = new aa());var a = this.attributes.position;void 0 !== a ? this.boundingBox.setFromBufferAttribute(a) : this.boundingBox.makeEmpty(), (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox: Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
    }, computeBoundingSphere: function () {
      var a = new aa(),
          b = new f();return function () {
        null === this.boundingSphere && (this.boundingSphere = new ba());var c = this.attributes.position;if (c) {
          var d = this.boundingSphere.center;a.setFromBufferAttribute(c), a.getCenter(d);for (var e = 0, f = 0, g = c.count; f < g; f++) {
            b.x = c.getX(f), b.y = c.getY(f), b.z = c.getZ(f), e = Math.max(e, d.distanceToSquared(b));
          }this.boundingSphere.radius = Math.sqrt(e), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this);
        }
      };
    }(), computeFaceNormals: function computeFaceNormals() {}, computeVertexNormals: function computeVertexNormals() {
      var a = this.index,
          b = this.attributes,
          c = this.groups;if (b.position) {
        var d = b.position.array;if (void 0 === b.normal) this.addAttribute("normal", new na(new Float32Array(d.length), 3));else for (var e = b.normal.array, g = 0, h = e.length; g < h; g++) {
          e[g] = 0;
        }var i,
            j,
            k,
            l = b.normal.array,
            m = new f(),
            n = new f(),
            o = new f(),
            p = new f(),
            q = new f();if (a) {
          var r = a.array;0 === c.length && this.addGroup(0, r.length);for (var s = 0, t = c.length; s < t; ++s) {
            for (var u = c[s], v = u.start, w = u.count, g = v, h = v + w; g < h; g += 3) {
              i = 3 * r[g + 0], j = 3 * r[g + 1], k = 3 * r[g + 2], m.fromArray(d, i), n.fromArray(d, j), o.fromArray(d, k), p.subVectors(o, n), q.subVectors(m, n), p.cross(q), l[i] += p.x, l[i + 1] += p.y, l[i + 2] += p.z, l[j] += p.x, l[j + 1] += p.y, l[j + 2] += p.z, l[k] += p.x, l[k + 1] += p.y, l[k + 2] += p.z;
            }
          }
        } else for (var g = 0, h = d.length; g < h; g += 9) {
          m.fromArray(d, g), n.fromArray(d, g + 3), o.fromArray(d, g + 6), p.subVectors(o, n), q.subVectors(m, n), p.cross(q), l[g] = p.x, l[g + 1] = p.y, l[g + 2] = p.z, l[g + 3] = p.x, l[g + 4] = p.y, l[g + 5] = p.z, l[g + 6] = p.x, l[g + 7] = p.y, l[g + 8] = p.z;
        }this.normalizeNormals(), b.normal.needsUpdate = !0;
      }
    }, merge: function merge(a, b) {
      if (!a || !a.isBufferGeometry) return void console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.", a);void 0 === b && (b = 0);var c = this.attributes;for (var d in c) {
        if (void 0 !== a.attributes[d]) for (var e = c[d], f = e.array, g = a.attributes[d], h = g.array, i = g.itemSize, j = 0, k = i * b; j < h.length; j++, k++) {
          f[k] = h[j];
        }
      }return this;
    }, normalizeNormals: function () {
      var a = new f();return function () {
        for (var b = this.attributes.normal, c = 0, d = b.count; c < d; c++) {
          a.x = b.getX(c), a.y = b.getY(c), a.z = b.getZ(c), a.normalize(), b.setXYZ(c, a.x, a.y, a.z);
        }
      };
    }(), toNonIndexed: function toNonIndexed() {
      if (null === this.index) return console.warn("THREE.BufferGeometry.toNonIndexed(): Geometry is already non-indexed."), this;var a = new za(),
          b = this.index.array,
          c = this.attributes;for (var d in c) {
        for (var e = c[d], f = e.array, g = e.itemSize, h = new f.constructor(b.length * g), i = 0, j = 0, k = 0, l = b.length; k < l; k++) {
          i = b[k] * g;for (var m = 0; m < g; m++) {
            h[j++] = f[i++];
          }
        }a.addAttribute(d, new na(h, g));
      }return a;
    }, toJSON: function toJSON() {
      var a = { metadata: { version: 4.5, type: "BufferGeometry", generator: "BufferGeometry.toJSON" } };if (a.uuid = this.uuid, a.type = this.type, "" !== this.name && (a.name = this.name), void 0 !== this.parameters) {
        var b = this.parameters;for (var c in b) {
          void 0 !== b[c] && (a[c] = b[c]);
        }return a;
      }a.data = { attributes: {} };var d = this.index;if (null !== d) {
        var e = Array.prototype.slice.call(d.array);a.data.index = { type: d.array.constructor.name, array: e };
      }var f = this.attributes;for (var c in f) {
        var g = f[c],
            e = Array.prototype.slice.call(g.array);a.data.attributes[c] = { itemSize: g.itemSize, type: g.array.constructor.name, array: e, normalized: g.normalized };
      }var h = this.groups;h.length > 0 && (a.data.groups = JSON.parse(JSON.stringify(h)));var i = this.boundingSphere;return null !== i && (a.data.boundingSphere = { center: i.center.toArray(), radius: i.radius }), a;
    }, clone: function clone() {
      return new za().copy(this);
    }, copy: function copy(a) {
      var b, c, d;this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.name = a.name;var e = a.index;null !== e && this.setIndex(e.clone());var f = a.attributes;for (b in f) {
        var g = f[b];this.addAttribute(b, g.clone());
      }var h = a.morphAttributes;for (b in h) {
        var i = [],
            j = h[b];for (c = 0, d = j.length; c < d; c++) {
          i.push(j[c].clone());
        }this.morphAttributes[b] = i;
      }var k = a.groups;for (c = 0, d = k.length; c < d; c++) {
        var l = k[c];this.addGroup(l.start, l.count, l.materialIndex);
      }var m = a.boundingBox;null !== m && (this.boundingBox = m.clone());var n = a.boundingSphere;return null !== n && (this.boundingSphere = n.clone()), this.drawRange.start = a.drawRange.start, this.drawRange.count = a.drawRange.count, this;
    }, dispose: function dispose() {
      this.dispatchEvent({ type: "dispose" });
    } }), Aa.prototype = Object.create(ma.prototype), Aa.prototype.constructor = Aa, Ba.prototype = Object.create(za.prototype), Ba.prototype.constructor = Ba, Ca.prototype = Object.create(ma.prototype), Ca.prototype.constructor = Ca, Da.prototype = Object.create(za.prototype), Da.prototype.constructor = Da, Ea.prototype = Object.create(Z.prototype), Ea.prototype.constructor = Ea, Ea.prototype.isMeshBasicMaterial = !0, Ea.prototype.copy = function (a) {
    return Z.prototype.copy.call(this, a), this.color.copy(a.color), this.map = a.map, this.lightMap = a.lightMap, this.lightMapIntensity = a.lightMapIntensity, this.aoMap = a.aoMap, this.aoMapIntensity = a.aoMapIntensity, this.specularMap = a.specularMap, this.alphaMap = a.alphaMap, this.envMap = a.envMap, this.combine = a.combine, this.reflectivity = a.reflectivity, this.refractionRatio = a.refractionRatio, this.wireframe = a.wireframe, this.wireframeLinewidth = a.wireframeLinewidth, this.wireframeLinecap = a.wireframeLinecap, this.wireframeLinejoin = a.wireframeLinejoin, this.skinning = a.skinning, this.morphTargets = a.morphTargets, this;
  }, Fa.prototype = Object.create(Z.prototype), Fa.prototype.constructor = Fa, Fa.prototype.isShaderMaterial = !0, Fa.prototype.copy = function (a) {
    return Z.prototype.copy.call(this, a), this.fragmentShader = a.fragmentShader, this.vertexShader = a.vertexShader, this.uniforms = Jd.clone(a.uniforms), this.defines = a.defines, this.wireframe = a.wireframe, this.wireframeLinewidth = a.wireframeLinewidth, this.lights = a.lights, this.clipping = a.clipping, this.skinning = a.skinning, this.morphTargets = a.morphTargets, this.morphNormals = a.morphNormals, this.extensions = a.extensions, this;
  }, Fa.prototype.toJSON = function (a) {
    var b = Z.prototype.toJSON.call(this, a);return b.uniforms = this.uniforms, b.vertexShader = this.vertexShader, b.fragmentShader = this.fragmentShader, b;
  }, Object.assign(Ga.prototype, { set: function set(a, b) {
      return this.origin.copy(a), this.direction.copy(b), this;
    }, clone: function clone() {
      return new this.constructor().copy(this);
    }, copy: function copy(a) {
      return this.origin.copy(a.origin), this.direction.copy(a.direction), this;
    }, at: function at(a, b) {
      return (b || new f()).copy(this.direction).multiplyScalar(a).add(this.origin);
    }, lookAt: function lookAt(a) {
      return this.direction.copy(a).sub(this.origin).normalize(), this;
    }, recast: function () {
      var a = new f();return function (b) {
        return this.origin.copy(this.at(b, a)), this;
      };
    }(), closestPointToPoint: function closestPointToPoint(a, b) {
      var c = b || new f();c.subVectors(a, this.origin);var d = c.dot(this.direction);return d < 0 ? c.copy(this.origin) : c.copy(this.direction).multiplyScalar(d).add(this.origin);
    }, distanceToPoint: function distanceToPoint(a) {
      return Math.sqrt(this.distanceSqToPoint(a));
    }, distanceSqToPoint: function () {
      var a = new f();return function (b) {
        var c = a.subVectors(b, this.origin).dot(this.direction);return c < 0 ? this.origin.distanceToSquared(b) : (a.copy(this.direction).multiplyScalar(c).add(this.origin), a.distanceToSquared(b));
      };
    }(), distanceSqToSegment: function () {
      var a = new f(),
          b = new f(),
          c = new f();return function (d, e, f, g) {
        a.copy(d).add(e).multiplyScalar(.5), b.copy(e).sub(d).normalize(), c.copy(this.origin).sub(a);var h,
            i,
            j,
            k,
            l = .5 * d.distanceTo(e),
            m = -this.direction.dot(b),
            n = c.dot(this.direction),
            o = -c.dot(b),
            p = c.lengthSq(),
            q = Math.abs(1 - m * m);if (q > 0) {
          if (h = m * o - n, i = m * n - o, k = l * q, h >= 0) {
            if (i >= -k) {
              if (i <= k) {
                var r = 1 / q;h *= r, i *= r, j = h * (h + m * i + 2 * n) + i * (m * h + i + 2 * o) + p;
              } else i = l, h = Math.max(0, -(m * i + n)), j = -h * h + i * (i + 2 * o) + p;
            } else i = -l, h = Math.max(0, -(m * i + n)), j = -h * h + i * (i + 2 * o) + p;
          } else i <= -k ? (h = Math.max(0, -(-m * l + n)), i = h > 0 ? -l : Math.min(Math.max(-l, -o), l), j = -h * h + i * (i + 2 * o) + p) : i <= k ? (h = 0, i = Math.min(Math.max(-l, -o), l), j = i * (i + 2 * o) + p) : (h = Math.max(0, -(m * l + n)), i = h > 0 ? l : Math.min(Math.max(-l, -o), l), j = -h * h + i * (i + 2 * o) + p);
        } else i = m > 0 ? -l : l, h = Math.max(0, -(m * i + n)), j = -h * h + i * (i + 2 * o) + p;return f && f.copy(this.direction).multiplyScalar(h).add(this.origin), g && g.copy(b).multiplyScalar(i).add(a), j;
      };
    }(), intersectSphere: function () {
      var a = new f();return function (b, c) {
        a.subVectors(b.center, this.origin);var d = a.dot(this.direction),
            e = a.dot(a) - d * d,
            f = b.radius * b.radius;if (e > f) return null;var g = Math.sqrt(f - e),
            h = d - g,
            i = d + g;return h < 0 && i < 0 ? null : h < 0 ? this.at(i, c) : this.at(h, c);
      };
    }(), intersectsSphere: function intersectsSphere(a) {
      return this.distanceToPoint(a.center) <= a.radius;
    }, distanceToPlane: function distanceToPlane(a) {
      var b = a.normal.dot(this.direction);if (0 === b) return 0 === a.distanceToPoint(this.origin) ? 0 : null;var c = -(this.origin.dot(a.normal) + a.constant) / b;return c >= 0 ? c : null;
    }, intersectPlane: function intersectPlane(a, b) {
      var c = this.distanceToPlane(a);return null === c ? null : this.at(c, b);
    }, intersectsPlane: function intersectsPlane(a) {
      var b = a.distanceToPoint(this.origin);return 0 === b || a.normal.dot(this.direction) * b < 0;
    }, intersectBox: function intersectBox(a, b) {
      var c,
          d,
          e,
          f,
          g,
          h,
          i = 1 / this.direction.x,
          j = 1 / this.direction.y,
          k = 1 / this.direction.z,
          l = this.origin;return i >= 0 ? (c = (a.min.x - l.x) * i, d = (a.max.x - l.x) * i) : (c = (a.max.x - l.x) * i, d = (a.min.x - l.x) * i), j >= 0 ? (e = (a.min.y - l.y) * j, f = (a.max.y - l.y) * j) : (e = (a.max.y - l.y) * j, f = (a.min.y - l.y) * j), c > f || e > d ? null : ((e > c || c !== c) && (c = e), (f < d || d !== d) && (d = f), k >= 0 ? (g = (a.min.z - l.z) * k, h = (a.max.z - l.z) * k) : (g = (a.max.z - l.z) * k, h = (a.min.z - l.z) * k), c > h || g > d ? null : ((g > c || c !== c) && (c = g), (h < d || d !== d) && (d = h), d < 0 ? null : this.at(c >= 0 ? c : d, b)));
    }, intersectsBox: function () {
      var a = new f();return function (b) {
        return null !== this.intersectBox(b, a);
      };
    }(), intersectTriangle: function () {
      var a = new f(),
          b = new f(),
          c = new f(),
          d = new f();return function (e, f, g, h, i) {
        b.subVectors(f, e), c.subVectors(g, e), d.crossVectors(b, c);var j,
            k = this.direction.dot(d);if (k > 0) {
          if (h) return null;j = 1;
        } else {
          if (!(k < 0)) return null;j = -1, k = -k;
        }a.subVectors(this.origin, e);var l = j * this.direction.dot(c.crossVectors(a, c));if (l < 0) return null;var m = j * this.direction.dot(b.cross(a));if (m < 0) return null;if (l + m > k) return null;var n = -j * a.dot(d);return n < 0 ? null : this.at(n / k, i);
      };
    }(), applyMatrix4: function applyMatrix4(a) {
      return this.origin.applyMatrix4(a), this.direction.transformDirection(a), this;
    }, equals: function equals(a) {
      return a.origin.equals(this.origin) && a.direction.equals(this.direction);
    } }), Object.assign(Ha.prototype, { set: function set(a, b) {
      return this.start.copy(a), this.end.copy(b), this;
    }, clone: function clone() {
      return new this.constructor().copy(this);
    }, copy: function copy(a) {
      return this.start.copy(a.start), this.end.copy(a.end), this;
    }, getCenter: function getCenter(a) {
      return (a || new f()).addVectors(this.start, this.end).multiplyScalar(.5);
    }, delta: function delta(a) {
      return (a || new f()).subVectors(this.end, this.start);
    }, distanceSq: function distanceSq() {
      return this.start.distanceToSquared(this.end);
    }, distance: function distance() {
      return this.start.distanceTo(this.end);
    }, at: function at(a, b) {
      var c = b || new f();return this.delta(c).multiplyScalar(a).add(this.start);
    }, closestPointToPointParameter: function () {
      var a = new f(),
          b = new f();return function (c, d) {
        a.subVectors(c, this.start), b.subVectors(this.end, this.start);var e = b.dot(b),
            f = b.dot(a),
            g = f / e;return d && (g = yd.clamp(g, 0, 1)), g;
      };
    }(), closestPointToPoint: function closestPointToPoint(a, b, c) {
      var d = this.closestPointToPointParameter(a, b),
          e = c || new f();return this.delta(e).multiplyScalar(d).add(this.start);
    }, applyMatrix4: function applyMatrix4(a) {
      return this.start.applyMatrix4(a), this.end.applyMatrix4(a), this;
    }, equals: function equals(a) {
      return a.start.equals(this.start) && a.end.equals(this.end);
    } }), Object.assign(Ia, { normal: function () {
      var a = new f();return function (b, c, d, e) {
        var g = e || new f();g.subVectors(d, c), a.subVectors(b, c), g.cross(a);var h = g.lengthSq();return h > 0 ? g.multiplyScalar(1 / Math.sqrt(h)) : g.set(0, 0, 0);
      };
    }(), barycoordFromPoint: function () {
      var a = new f(),
          b = new f(),
          c = new f();return function (d, e, g, h, i) {
        a.subVectors(h, e), b.subVectors(g, e), c.subVectors(d, e);var j = a.dot(a),
            k = a.dot(b),
            l = a.dot(c),
            m = b.dot(b),
            n = b.dot(c),
            o = j * m - k * k,
            p = i || new f();if (0 === o) return p.set(-2, -1, -1);var q = 1 / o,
            r = (m * l - k * n) * q,
            s = (j * n - k * l) * q;return p.set(1 - r - s, s, r);
      };
    }(), containsPoint: function () {
      var a = new f();return function (b, c, d, e) {
        var f = Ia.barycoordFromPoint(b, c, d, e, a);return f.x >= 0 && f.y >= 0 && f.x + f.y <= 1;
      };
    }() }), Object.assign(Ia.prototype, { set: function set(a, b, c) {
      return this.a.copy(a), this.b.copy(b), this.c.copy(c), this;
    }, setFromPointsAndIndices: function setFromPointsAndIndices(a, b, c, d) {
      return this.a.copy(a[b]), this.b.copy(a[c]), this.c.copy(a[d]), this;
    }, clone: function clone() {
      return new this.constructor().copy(this);
    }, copy: function copy(a) {
      return this.a.copy(a.a), this.b.copy(a.b), this.c.copy(a.c), this;
    }, area: function () {
      var a = new f(),
          b = new f();return function () {
        return a.subVectors(this.c, this.b), b.subVectors(this.a, this.b), .5 * a.cross(b).length();
      };
    }(), midpoint: function midpoint(a) {
      return (a || new f()).addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
    }, normal: function normal(a) {
      return Ia.normal(this.a, this.b, this.c, a);
    }, plane: function plane(a) {
      return (a || new ca()).setFromCoplanarPoints(this.a, this.b, this.c);
    }, barycoordFromPoint: function barycoordFromPoint(a, b) {
      return Ia.barycoordFromPoint(a, this.a, this.b, this.c, b);
    }, containsPoint: function containsPoint(a) {
      return Ia.containsPoint(a, this.a, this.b, this.c);
    }, closestPointToPoint: function () {
      var a = new ca(),
          b = [new Ha(), new Ha(), new Ha()],
          c = new f(),
          d = new f();return function (e, g) {
        var h = g || new f(),
            i = 1 / 0;if (a.setFromCoplanarPoints(this.a, this.b, this.c), a.projectPoint(e, c), !0 === this.containsPoint(c)) h.copy(c);else {
          b[0].set(this.a, this.b), b[1].set(this.b, this.c), b[2].set(this.c, this.a);for (var j = 0; j < b.length; j++) {
            b[j].closestPointToPoint(c, !0, d);var k = c.distanceToSquared(d);k < i && (i = k, h.copy(d));
          }
        }return h;
      };
    }(), equals: function equals(a) {
      return a.a.equals(this.a) && a.b.equals(this.b) && a.c.equals(this.c);
    } }), Ja.prototype = Object.assign(Object.create(ia.prototype), { constructor: Ja, isMesh: !0, setDrawMode: function setDrawMode(a) {
      this.drawMode = a;
    }, copy: function copy(a) {
      return ia.prototype.copy.call(this, a), this.drawMode = a.drawMode, void 0 !== a.morphTargetInfluences && (this.morphTargetInfluences = a.morphTargetInfluences.slice()), void 0 !== a.morphTargetDictionary && (this.morphTargetDictionary = Object.assign({}, a.morphTargetDictionary)), this;
    }, updateMorphTargets: function updateMorphTargets() {
      var a,
          b,
          c,
          d = this.geometry;if (d.isBufferGeometry) {
        var e = d.morphAttributes,
            f = Object.keys(e);if (f.length > 0) {
          var g = e[f[0]];if (void 0 !== g) for (this.morphTargetInfluences = [], this.morphTargetDictionary = {}, a = 0, b = g.length; a < b; a++) {
            c = g[a].name || String(a), this.morphTargetInfluences.push(0), this.morphTargetDictionary[c] = a;
          }
        }
      } else {
        var h = d.morphTargets;if (void 0 !== h && h.length > 0) for (this.morphTargetInfluences = [], this.morphTargetDictionary = {}, a = 0, b = h.length; a < b; a++) {
          c = h[a].name || String(a), this.morphTargetInfluences.push(0), this.morphTargetDictionary[c] = a;
        }
      }
    }, raycast: function () {
      function a(a, b, c, d, e, f, g) {
        return Ia.barycoordFromPoint(a, b, c, d, s), e.multiplyScalar(s.x), f.multiplyScalar(s.y), g.multiplyScalar(s.z), e.add(f).add(g), e.clone();
      }function b(a, b, c, d, e, f, g, h) {
        if (null === (b.side === Hb ? d.intersectTriangle(g, f, e, !0, h) : d.intersectTriangle(e, f, g, b.side !== Ib, h))) return null;u.copy(h), u.applyMatrix4(a.matrixWorld);var i = c.ray.origin.distanceTo(u);return i < c.near || i > c.far ? null : { distance: i, point: u.clone(), object: a };
      }function e(c, d, e, f, g, h, i, m) {
        j.fromBufferAttribute(f, h), k.fromBufferAttribute(f, i), l.fromBufferAttribute(f, m);var n = b(c, c.material, d, e, j, k, l, t);return n && (g && (p.fromBufferAttribute(g, h), q.fromBufferAttribute(g, i), r.fromBufferAttribute(g, m), n.uv = a(t, j, k, l, p, q, r)), n.face = new la(h, i, m, Ia.normal(j, k, l)), n.faceIndex = h), n;
      }var g = new d(),
          h = new Ga(),
          i = new ba(),
          j = new f(),
          k = new f(),
          l = new f(),
          m = new f(),
          n = new f(),
          o = new f(),
          p = new c(),
          q = new c(),
          r = new c(),
          s = new f(),
          t = new f(),
          u = new f();return function (c, d) {
        var f = this.geometry,
            s = this.material,
            u = this.matrixWorld;if (void 0 !== s && (null === f.boundingSphere && f.computeBoundingSphere(), i.copy(f.boundingSphere), i.applyMatrix4(u), !1 !== c.ray.intersectsSphere(i) && (g.getInverse(u), h.copy(c.ray).applyMatrix4(g), null === f.boundingBox || !1 !== h.intersectsBox(f.boundingBox)))) {
          var v;if (f.isBufferGeometry) {
            var w,
                x,
                y,
                z,
                A,
                B = f.index,
                C = f.attributes.position,
                D = f.attributes.uv;if (null !== B) for (z = 0, A = B.count; z < A; z += 3) {
              w = B.getX(z), x = B.getX(z + 1), y = B.getX(z + 2), (v = e(this, c, h, C, D, w, x, y)) && (v.faceIndex = Math.floor(z / 3), d.push(v));
            } else if (void 0 !== C) for (z = 0, A = C.count; z < A; z += 3) {
              w = z, x = z + 1, y = z + 2, (v = e(this, c, h, C, D, w, x, y)) && (v.index = w, d.push(v));
            }
          } else if (f.isGeometry) {
            var E,
                F,
                G,
                H,
                I = Array.isArray(s),
                J = f.vertices,
                K = f.faces,
                L = f.faceVertexUvs[0];L.length > 0 && (H = L);for (var M = 0, N = K.length; M < N; M++) {
              var O = K[M],
                  P = I ? s[O.materialIndex] : s;if (void 0 !== P) {
                if (E = J[O.a], F = J[O.b], G = J[O.c], !0 === P.morphTargets) {
                  var Q = f.morphTargets,
                      R = this.morphTargetInfluences;j.set(0, 0, 0), k.set(0, 0, 0), l.set(0, 0, 0);for (var S = 0, T = Q.length; S < T; S++) {
                    var U = R[S];if (0 !== U) {
                      var V = Q[S].vertices;j.addScaledVector(m.subVectors(V[O.a], E), U), k.addScaledVector(n.subVectors(V[O.b], F), U), l.addScaledVector(o.subVectors(V[O.c], G), U);
                    }
                  }j.add(E), k.add(F), l.add(G), E = j, F = k, G = l;
                }if (v = b(this, P, c, h, E, F, G, t)) {
                  if (H && H[M]) {
                    var W = H[M];p.copy(W[0]), q.copy(W[1]), r.copy(W[2]), v.uv = a(t, E, F, G, p, q, r);
                  }v.face = O, v.faceIndex = M, d.push(v);
                }
              }
            }
          }
        }
      };
    }(), clone: function clone() {
      return new this.constructor(this.geometry, this.material).copy(this);
    } });var Sf = 0;ob.prototype = Object.assign(Object.create(ja.prototype), { constructor: ob, isPerspectiveCamera: !0, copy: function copy(a, b) {
      return ja.prototype.copy.call(this, a, b), this.fov = a.fov, this.zoom = a.zoom, this.near = a.near, this.far = a.far, this.focus = a.focus, this.aspect = a.aspect, this.view = null === a.view ? null : Object.assign({}, a.view), this.filmGauge = a.filmGauge, this.filmOffset = a.filmOffset, this;
    }, setFocalLength: function setFocalLength(a) {
      var b = .5 * this.getFilmHeight() / a;this.fov = 2 * yd.RAD2DEG * Math.atan(b), this.updateProjectionMatrix();
    }, getFocalLength: function getFocalLength() {
      var a = Math.tan(.5 * yd.DEG2RAD * this.fov);return .5 * this.getFilmHeight() / a;
    }, getEffectiveFOV: function getEffectiveFOV() {
      return 2 * yd.RAD2DEG * Math.atan(Math.tan(.5 * yd.DEG2RAD * this.fov) / this.zoom);
    }, getFilmWidth: function getFilmWidth() {
      return this.filmGauge * Math.min(this.aspect, 1);
    }, getFilmHeight: function getFilmHeight() {
      return this.filmGauge / Math.max(this.aspect, 1);
    }, setViewOffset: function setViewOffset(a, b, c, d, e, f) {
      this.aspect = a / b, null === this.view && (this.view = { enabled: !0, fullWidth: 1, fullHeight: 1, offsetX: 0, offsetY: 0, width: 1, height: 1 }), this.view.enabled = !0, this.view.fullWidth = a, this.view.fullHeight = b, this.view.offsetX = c, this.view.offsetY = d, this.view.width = e, this.view.height = f, this.updateProjectionMatrix();
    }, clearViewOffset: function clearViewOffset() {
      null !== this.view && (this.view.enabled = !1), this.updateProjectionMatrix();
    }, updateProjectionMatrix: function updateProjectionMatrix() {
      var a = this.near,
          b = a * Math.tan(.5 * yd.DEG2RAD * this.fov) / this.zoom,
          c = 2 * b,
          d = this.aspect * c,
          e = -.5 * d,
          f = this.view;if (null !== this.view && this.view.enabled) {
        var g = f.fullWidth,
            h = f.fullHeight;e += f.offsetX * d / g, b -= f.offsetY * c / h, d *= f.width / g, c *= f.height / h;
      }var i = this.filmOffset;0 !== i && (e += a * i / this.getFilmWidth()), this.projectionMatrix.makePerspective(e, e + d, b, b - c, a, this.far);
    }, toJSON: function toJSON(a) {
      var b = ia.prototype.toJSON.call(this, a);return b.object.fov = this.fov, b.object.zoom = this.zoom, b.object.near = this.near, b.object.far = this.far, b.object.focus = this.focus, b.object.aspect = this.aspect, null !== this.view && (b.object.view = Object.assign({}, this.view)), b.object.filmGauge = this.filmGauge, b.object.filmOffset = this.filmOffset, b;
    } }), pb.prototype = Object.assign(Object.create(ob.prototype), { constructor: pb, isArrayCamera: !0 }), vb.prototype = Object.assign(Object.create(ia.prototype), { constructor: vb, copy: function copy(a, b) {
      return ia.prototype.copy.call(this, a, b), null !== a.background && (this.background = a.background.clone()), null !== a.fog && (this.fog = a.fog.clone()), null !== a.overrideMaterial && (this.overrideMaterial = a.overrideMaterial.clone()), this.autoUpdate = a.autoUpdate, this.matrixAutoUpdate = a.matrixAutoUpdate, this;
    }, toJSON: function toJSON(a) {
      var b = ia.prototype.toJSON.call(this, a);return null !== this.background && (b.object.background = this.background.toJSON(a)), null !== this.fog && (b.object.fog = this.fog.toJSON()), b;
    } });var Tf = { enabled: !1, files: {}, add: function add(a, b) {
      !1 !== this.enabled && (this.files[a] = b);
    }, get: function get(a) {
      if (!1 !== this.enabled) return this.files[a];
    }, remove: function remove(a) {
      delete this.files[a];
    }, clear: function clear() {
      this.files = {};
    } },
      Uf = new wb();Object.assign(xb.prototype, { crossOrigin: "Anonymous", load: function load(a, b, c, d) {
      void 0 === a && (a = ""), void 0 !== this.path && (a = this.path + a), a = this.manager.resolveURL(a);var e = this,
          f = Tf.get(a);if (void 0 !== f) return e.manager.itemStart(a), setTimeout(function () {
        b && b(f), e.manager.itemEnd(a);
      }, 0), f;var g = document.createElementNS("http://www.w3.org/1999/xhtml", "img");return g.addEventListener("load", function () {
        Tf.add(a, this), b && b(this), e.manager.itemEnd(a);
      }, !1), g.addEventListener("error", function (b) {
        d && d(b), e.manager.itemEnd(a), e.manager.itemError(a);
      }, !1), "data:" !== a.substr(0, 5) && void 0 !== this.crossOrigin && (g.crossOrigin = this.crossOrigin), e.manager.itemStart(a), g.src = a, g;
    }, setCrossOrigin: function setCrossOrigin(a) {
      return this.crossOrigin = a, this;
    }, setPath: function setPath(a) {
      return this.path = a, this;
    } }), Object.assign(yb.prototype, { crossOrigin: "Anonymous", load: function load(a, b, c, d) {
      var e = new h(),
          f = new xb(this.manager);return f.setCrossOrigin(this.crossOrigin), f.setPath(this.path), f.load(a, function (c) {
        e.image = c;var d = a.search(/\.(jpg|jpeg)$/) > 0 || 0 === a.search(/^data\:image\/jpeg/);e.format = d ? Zc : $c, e.needsUpdate = !0, void 0 !== b && b(e);
      }, c, d), e;
    }, setCrossOrigin: function setCrossOrigin(a) {
      return this.crossOrigin = a, this;
    }, setPath: function setPath(a) {
      return this.path = a, this;
    } }), a.WebGLRenderTarget = j, a.WebGLRenderer = ub, a.Scene = vb, a.Mesh = Ja, a.DataTexture = k, a.PlaneGeometry = Ca, a.ShaderMaterial = Fa, a.MeshBasicMaterial = Ea, a.Material = Z, a.TextureLoader = yb, a.OrthographicCamera = ka, a.ClampToEdgeWrapping = Ec, a.FloatType = Sc, a.LinearFilter = Jc, a.NearestFilter = Gc, a.NearestMipMapNearestFilter = Hc, a.RepeatWrapping = Dc, a.RGBAFormat = $c, a.UnsignedByteType = Mc, Object.defineProperty(a, "__esModule", { value: !0 });
}), require = function a(b, c, d) {
  function e(g, h) {
    if (!c[g]) {
      if (!b[g]) {
        var i = "function" == typeof require && require;if (!h && i) return require(g, !0);if (f) return f(g, !0);var j = new Error("Cannot find module '" + g + "'");throw j.code = "MODULE_NOT_FOUND", j;
      }var k = c[g] = { exports: {} };b[g][0].call(k.exports, function (a) {
        var c = b[g][1][a];return e(c || a);
      }, k, k.exports, a, b, c, d);
    }return c[g].exports;
  }for (var f = "function" == typeof require && require, g = 0; g < d.length; g++) {
    e(d[g]);
  }return e;
}({ 1: [function (a, b, c) {
    (function (b) {
      b.THREE = a("three"), THREE = { ClampToEdgeWrapping: THREE.ClampToEdgeWrapping, DataTexture: THREE.DataTexture, FloatType: THREE.FloatType, LinearFilter: THREE.LinearFilter, Material: THREE.Material, Mesh: THREE.Mesh, MeshBasicMaterial: THREE.MeshBasicMaterial, NearestFilter: THREE.NearestFilter, NearestMipMapNearestFilter: THREE.NearestMipMapNearestFilter, OrthographicCamera: THREE.OrthographicCamera, PlaneGeometry: THREE.PlaneGeometry, RepeatWrapping: THREE.RepeatWrapping, RGBAFormat: THREE.RGBAFormat, Scene: THREE.Scene, ShaderMaterial: THREE.ShaderMaterial, TextureLoader: THREE.TextureLoader, UnsignedByteType: THREE.UnsignedByteType, WebGLRenderer: THREE.WebGLRenderer, WebGLRenderTarget: THREE.WebGLRenderTarget };
    }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
  }, { three: "three" }], three: [function (a, b, c) {
    b.exports = window.THREE;
  }, {}] }, {}, [1]);var Detector = { canvas: !!window.CanvasRenderingContext2D, webgl: function () {
    try {
      var a = document.createElement("canvas");return !(!window.WebGLRenderingContext || !a.getContext("webgl") && !a.getContext("experimental-webgl"));
    } catch (a) {
      return !1;
    }
  }(), workers: !!window.Worker, fileapi: window.File && window.FileReader && window.FileList && window.Blob, getWebGLErrorMessage: function getWebGLErrorMessage() {
    var a = document.createElement("div");return a.id = "webgl-error-message", a.style.fontFamily = "monospace", a.style.fontSize = "13px", a.style.fontWeight = "normal", a.style.textAlign = "center", a.style.background = "#fff", a.style.color = "#000", a.style.padding = "1.5em", a.style.width = "400px", a.style.margin = "5em auto 0", this.webgl || (a.innerHTML = window.WebGLRenderingContext ? ['Your graphics card does not seem to support <a href="http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation" style="color:#000">WebGL</a>.<br />', 'Find out how to get it <a href="http://get.webgl.org/" style="color:#000">here</a>.'].join("\n") : ['Your browser does not seem to support <a href="http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation" style="color:#000">WebGL</a>.<br/>', 'Find out how to get it <a href="http://get.webgl.org/" style="color:#000">here</a>.'].join("\n")), a;
  }, addGetWebGLMessage: function addGetWebGLMessage(a) {
    var b, c, d;a = a || {}, b = void 0 !== a.parent ? a.parent : document.body, c = void 0 !== a.id ? a.id : "oldie", d = Detector.getWebGLErrorMessage(), d.id = c, b.appendChild(d);
  } };"object" == ( false ? "undefined" : _typeof(module)) && (module.exports = Detector), function (a, b) {
  "use strict";
  function c() {
    if (a.postMessage && !a.importScripts) {
      var b = !0,
          c = a.onmessage;return a.onmessage = function () {
        b = !1;
      }, a.postMessage("", "*"), a.onmessage = c, b;
    }
  }function d() {
    return a.navigator && /Trident/.test(a.navigator.userAgent);
  }if (!d() && (a.msSetImmediate || a.setImmediate)) return void (a.setImmediate || (a.setImmediate = a.msSetImmediate, a.clearImmediate = a.msClearImmediate));var e = a.document,
      f = Array.prototype.slice,
      g = Object.prototype.toString,
      h = {};h.polifill = {}, h.nextId = 1, h.tasks = {}, h.lock = !1, h.run = function (b) {
    if (h.lock) a.setTimeout(h.wrap(h.run, b), 0);else {
      var c = h.tasks[b];if (c) {
        h.lock = !0;try {
          c();
        } finally {
          h.clear(b), h.lock = !1;
        }
      }
    }
  }, h.wrap = function (a) {
    var c = f.call(arguments, 1);return function () {
      a.apply(b, c);
    };
  }, h.create = function (a) {
    return h.tasks[h.nextId] = h.wrap.apply(b, a), h.nextId++;
  }, h.clear = function (a) {
    delete h.tasks[a];
  }, h.polifill.messageChannel = function () {
    var b = new a.MessageChannel();return b.port1.onmessage = function (a) {
      h.run(Number(a.data));
    }, function () {
      var a = h.create(arguments);return b.port2.postMessage(a), a;
    };
  }, h.polifill.nextTick = function () {
    return function () {
      var b = h.create(arguments);return a.process.nextTick(h.wrap(h.run, b)), b;
    };
  }, h.polifill.postMessage = function () {
    var b = "setImmediate$" + Math.random() + "$",
        c = function c(_c2) {
      _c2.source === a && "string" == typeof _c2.data && 0 === _c2.data.indexOf(b) && h.run(Number(_c2.data.slice(b.length)));
    };return a.addEventListener ? a.addEventListener("message", c, !1) : a.attachEvent("onmessage", c), function () {
      var c = h.create(arguments);return a.postMessage(b + c, "*"), c;
    };
  }, h.polifill.readyStateChange = function () {
    var a = e.documentElement;return function () {
      var b = h.create(arguments),
          c = e.createElement("script");return c.onreadystatechange = function () {
        h.run(b), c.onreadystatechange = null, a.removeChild(c), c = null;
      }, a.appendChild(c), b;
    };
  }, h.polifill.setTimeout = function () {
    return function () {
      var b = h.create(arguments);return a.setTimeout(h.wrap(h.run, b), 0), b;
    };
  };var i;i = d() ? "setTimeout" : "[object process]" === g.call(a.process) ? "nextTick" : c() ? "postMessage" : a.MessageChannel ? "messageChannel" : e && "onreadystatechange" in e.createElement("script") ? "readyStateChange" : "setTimeout";var j = Object.getPrototypeOf && Object.getPrototypeOf(a);j = j && j.setTimeout ? j : a, j.setImmediate = h.polifill[i](), j.setImmediate.usePolifill = i, j.msSetImmediate = j.setImmediate, j.clearImmediate = h.clear, j.msClearImmediate = h.clear;
}(function () {
  return this || (0, eval)("this");
}()), function () {
  "use strict";
  function a() {}function b(a, b) {
    for (var c = a.length; c--;) {
      if (a[c].listener === b) return c;
    }return -1;
  }function c(a) {
    return function () {
      return this[a].apply(this, arguments);
    };
  }var d = a.prototype,
      e = this,
      f = e.EventEmitter;d.getListeners = function (a) {
    var b,
        c,
        d = this._getEvents();if (a instanceof RegExp) {
      b = {};for (c in d) {
        d.hasOwnProperty(c) && a.test(c) && (b[c] = d[c]);
      }
    } else b = d[a] || (d[a] = []);return b;
  }, d.flattenListeners = function (a) {
    var b,
        c = [];for (b = 0; b < a.length; b += 1) {
      c.push(a[b].listener);
    }return c;
  }, d.getListenersAsObject = function (a) {
    var b,
        c = this.getListeners(a);return c instanceof Array && (b = {}, b[a] = c), b || c;
  }, d.addListener = function (a, c) {
    var d,
        e = this.getListenersAsObject(a),
        f = "object" == (typeof c === "undefined" ? "undefined" : _typeof(c));for (d in e) {
      e.hasOwnProperty(d) && -1 === b(e[d], c) && e[d].push(f ? c : { listener: c, once: !1 });
    }return this;
  }, d.on = c("addListener"), d.addOnceListener = function (a, b) {
    return this.addListener(a, { listener: b, once: !0 });
  }, d.once = c("addOnceListener"), d.defineEvent = function (a) {
    return this.getListeners(a), this;
  }, d.defineEvents = function (a) {
    for (var b = 0; b < a.length; b += 1) {
      this.defineEvent(a[b]);
    }return this;
  }, d.removeListener = function (a, c) {
    var d,
        e,
        f = this.getListenersAsObject(a);for (e in f) {
      f.hasOwnProperty(e) && -1 !== (d = b(f[e], c)) && f[e].splice(d, 1);
    }return this;
  }, d.off = c("removeListener"), d.addListeners = function (a, b) {
    return this.manipulateListeners(!1, a, b);
  }, d.removeListeners = function (a, b) {
    return this.manipulateListeners(!0, a, b);
  }, d.manipulateListeners = function (a, b, c) {
    var d,
        e,
        f = a ? this.removeListener : this.addListener,
        g = a ? this.removeListeners : this.addListeners;if ("object" != (typeof b === "undefined" ? "undefined" : _typeof(b)) || b instanceof RegExp) for (d = c.length; d--;) {
      f.call(this, b, c[d]);
    } else for (d in b) {
      b.hasOwnProperty(d) && (e = b[d]) && ("function" == typeof e ? f.call(this, d, e) : g.call(this, d, e));
    }return this;
  }, d.removeEvent = function (a) {
    var b,
        c = typeof a === "undefined" ? "undefined" : _typeof(a),
        d = this._getEvents();if ("string" === c) delete d[a];else if (a instanceof RegExp) for (b in d) {
      d.hasOwnProperty(b) && a.test(b) && delete d[b];
    } else delete this._events;return this;
  }, d.removeAllListeners = c("removeEvent"), d.emitEvent = function (a, b) {
    var c,
        d,
        e,
        f,
        g = this.getListenersAsObject(a);for (f in g) {
      if (g.hasOwnProperty(f)) for (c = g[f].slice(0), e = c.length; e--;) {
        d = c[e], !0 === d.once && this.removeListener(a, d.listener), d.listener.apply(this, b || []) === this._getOnceReturnValue() && this.removeListener(a, d.listener);
      }
    }return this;
  }, d.trigger = c("emitEvent"), d.emit = function (a) {
    var b = Array.prototype.slice.call(arguments, 1);return this.emitEvent(a, b);
  }, d.setOnceReturnValue = function (a) {
    return this._onceReturnValue = a, this;
  }, d._getOnceReturnValue = function () {
    return !this.hasOwnProperty("_onceReturnValue") || this._onceReturnValue;
  }, d._getEvents = function () {
    return this._events || (this._events = {});
  }, a.noConflict = function () {
    return e.EventEmitter = f, a;
  },  true ? !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
    return a;
  }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = a : e.EventEmitter = a;
}.call(this), GrowingPacker = function GrowingPacker() {}, GrowingPacker.prototype = { fit: function fit(a) {
    var b,
        c,
        d,
        e = a.length,
        f = e > 0 ? a[0].w : 0,
        g = e > 0 ? a[0].h : 0;for (this.root = { x: 0, y: 0, w: f, h: g }, b = 0; b < e; b++) {
      d = a[b], (c = this.findNode(this.root, d.w, d.h)) ? d.fit = this.splitNode(c, d.w, d.h) : d.fit = this.growNode(d.w, d.h);
    }
  }, findNode: function findNode(a, b, c) {
    return a.used ? this.findNode(a.right, b, c) || this.findNode(a.down, b, c) : b <= a.w && c <= a.h ? a : null;
  }, splitNode: function splitNode(a, b, c) {
    return a.used = !0, a.down = { x: a.x, y: a.y + c, w: a.w, h: a.h - c }, a.right = { x: a.x + b, y: a.y, w: a.w - b, h: c }, a;
  }, growNode: function growNode(a, b) {
    var c = a <= this.root.w,
        d = b <= this.root.h,
        e = d && this.root.h >= this.root.w + a,
        f = c && this.root.w >= this.root.h + b;return e ? this.growRight(a, b) : f ? this.growDown(a, b) : d ? this.growRight(a, b) : c ? this.growDown(a, b) : null;
  }, growRight: function growRight(a, b) {
    this.root = { used: !0, x: 0, y: 0, w: this.root.w + a, h: this.root.h, down: this.root, right: { x: this.root.w, y: 0, w: a, h: this.root.h } };var c = this.findNode(this.root, a, b);return c ? this.splitNode(c, a, b) : null;
  }, growDown: function growDown(a, b) {
    this.root = { used: !0, x: 0, y: 0, w: this.root.w, h: this.root.h + b, down: { x: 0, y: this.root.h, w: this.root.w, h: b }, right: this.root };var c = this.findNode(this.root, a, b);return c ? this.splitNode(c, a, b) : null;
  } }, function () {
  function a(a, d) {
    var e = new Date().getTime(),
        f = Math.max(0, 16 - (e - c)),
        g = b.setTimeout(function () {
      a(e + f);
    }, f);return c = e + f, g;
  }for (var b = this, c = 0, d = ["ms", "moz", "webkit", "o"], e = 0; e < d.length && !b.requestAnimationFrame; ++e) {
    b.requestAnimationFrame = b[d[e] + "RequestAnimationFrame"], b.cancelAnimationFrame = b[d[e] + "CancelAnimationFrame"] || b[d[e] + "CancelRequestAnimationFrame"];
  }b.requestAnimationFrame || (b.requestAnimationFrame = a), b.cancelAnimationFrame || (b.cancelAnimationFrame = function (a) {
    clearTimeout(a);
  }),  true ? ("undefined" != typeof module && module.exports && (exports = module.exports = b.requestAnimationFrame), exports.requestAnimationFrame = b.requestAnimationFrame) : b.requestAnimationFrame = b.requestAnimationFrame, "function" == "function" && __webpack_require__(/*! !webpack amd options */ 38) && !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
    return b.requestAnimationFrame;
  }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}(), function (a, b, c, d, e) {
  var f = this,
      g = f.Blotter = a = function a(_a2, b) {
    d.webgl || g.Messaging.throwError("Blotter", !1, "device does not support webgl"), this._texts = [], this._textEventBindings = {}, this._scopes = {}, this._scopeEventBindings = {}, this._renderer = new g.Renderer(), this._startTime = 0, this._lastDrawTime = 0, this.init.apply(this, arguments);
  };g.prototype = function () {
    function a() {
      var a = Date.now();this._material.uniforms.uTimeDelta.value = (a - (this._lastDrawTime || a)) / 1e3, this._material.uniforms.uGlobalTime.value = (a - this._startTime) / 1e3, this._lastDrawTime = a;
    }function c() {
      a.call(this), b.each(this._scopes, b.bind(function (a) {
        a.playing && a.render(), this.trigger("render");
      }, this));
    }function d(a) {
      if (this.mappingMaterial) {
        var b = this._material.uniforms[a].value;this.mappingMaterial.uniformInterface[a].value = b;
      }
    }function e(a, b) {
      if (this.mappingMaterial) {
        var c = this._scopes[a],
            d = c.material.uniforms[b].value;this.mappingMaterial.textUniformInterface[a][b].value = d;
      }
    }function f() {
      var a, c, d;a = b.bind(function () {
        return b.bind(function (a) {
          g.MappingBuilder.build(this._texts, b.bind(function (b) {
            this._mapping = b, this._mapping.ratio = this.ratio, a();
          }, this));
        }, this);
      }, this), c = b.bind(function () {
        return b.bind(function (a) {
          g.MappingMaterialBuilder.build(this._mapping, this._material, b.bind(function (b) {
            this.mappingMaterial = b, a();
          }, this));
        }, this);
      }, this), d = [a(), c()], b(d).reduceRight(b.wrap, b.bind(function () {
        this._renderer.stop(), b.each(this._scopes, b.bind(function (a, b) {
          a.mappingMaterial = this.mappingMaterial, a.needsUpdate = !0;
        }, this)), this._renderer.material = this.mappingMaterial.shaderMaterial, this._renderer.width = this._mapping.width, this._renderer.height = this._mapping.height, this.autostart && this.start(), this.trigger(this.lastUpdated ? "update" : "ready"), this.lastUpdated = Date.now();
      }, this))();
    }return { constructor: g, get needsUpdate() {}, set needsUpdate(a) {
        !0 === a && f.call(this);
      }, get material() {
        return this._material;
      }, set material(a) {
        this.setMaterial(a);
      }, get texts() {
        return this._texts;
      }, set texts(a) {
        this.removeTexts(this._texts), this.addTexts(a);
      }, get imageData() {
        return this._renderer.imageData;
      }, init: function init(a, d) {
        d = d || {}, b.defaults(this, d, { ratio: g.CanvasUtils.pixelRatio, autobuild: !0, autostart: !0, autoplay: !0 }), this.setMaterial(a), this.addTexts(d.texts), this._renderer.on("render", b.bind(c, this)), this.autobuild && (this.needsUpdate = !0), this.autostart && this.start();
      }, start: function start() {
        this.autostart = !0, this._startTime = Date.now(), this._renderer.start();
      }, stop: function stop() {
        this.autostart = !1, this._renderer.stop();
      }, teardown: function teardown() {
        this._renderer.teardown();
      }, setMaterial: function setMaterial(a) {
        g.Messaging.ensureInstanceOf(a, g.Material, "Blotter.Material", "Blotter", "setMaterial"), this._material = a, this._materialEventBinding && this._materialEventBinding.unsetEventCallbacks(), this._materialEventBinding = new g.ModelEventBinding(a, { update: b.bind(function () {
            f.call(this);
          }, this), updateUniform: b.bind(function (a) {
            d.call(this, a);
          }, this) }), a.on("update", this._materialEventBinding.eventCallbacks.update), a.on("update:uniform", this._materialEventBinding.eventCallbacks.updateUniform);
      }, addText: function addText(a) {
        this.addTexts(a);
      }, addTexts: function addTexts(a) {
        var c = g.TextUtils.filterTexts(a),
            d = b.difference(c, this._texts);b.each(d, b.bind(function (a) {
          this._texts.push(a), this._textEventBindings[a.id] = new g.ModelEventBinding(a, { update: b.bind(function () {
              f.call(this);
            }, this) }), a.on("update", this._textEventBindings[a.id].eventCallbacks.update), this._scopes[a.id] = new g.RenderScope(a, this), this._scopeEventBindings[a.id] = new g.ModelEventBinding(this._scopes[a.id], { updateUniform: b.bind(function (b) {
              e.call(this, a.id, b);
            }, this) }), this._scopes[a.id].on("update:uniform", this._scopeEventBindings[a.id].eventCallbacks.updateUniform);
        }, this));
      }, removeText: function removeText(a) {
        this.removeTexts(a);
      }, removeTexts: function removeTexts(a) {
        var c = g.TextUtils.filterTexts(a),
            d = b.intersection(this._texts, c);b.each(d, b.bind(function (a) {
          this._texts = b.without(this._texts, a), this._textEventBindings[a.id].unsetEventCallbacks(), this._scopeEventBindings[a.id].unsetEventCallbacks(), delete this._textEventBindings[a.id], delete this._scopeEventBindings[a.id], delete this._scopes[a.id];
        }, this));
      }, forText: function forText(a) {
        return g.Messaging.ensureInstanceOf(a, g.Text, "Blotter.Text", "Blotter", "forText"), this._scopes[a.id] ? this._scopes[a.id] : void g.Messaging.logError("Blotter", "forText", "Blotter.Text object not found in blotter");
      }, boundsForText: function boundsForText(a) {
        return g.Messaging.ensureInstanceOf(a, g.Text, "Blotter.Text", "Blotter", "boundsForText"), this._scopes[a.id] ? this._mapping ? this.mappingMaterial.boundsForText(a) : void 0 : void g.Messaging.logError("Blotter", "boundsForText", "Blotter.Text object not found in blotter");
      } };
  }(), b.extend(g.prototype, e.prototype), g.Version = "v0.1.0", g.webglRenderer = g.webglRenderer || new c.WebGLRenderer({ antialias: !0, alpha: !0, premultipliedAlpha: !1 }), g.Assets = g.Assets || {}, g.Assets.Shaders = g.Assets.Shaders || {};
}(this.Blotter, this._, this.THREE, this.Detector, this.EventEmitter), function (a) {
  a.Math = { generateUUID: function () {
      for (var a = [], b = 0; b < 256; b++) {
        a[b] = (b < 16 ? "0" : "") + b.toString(16).toUpperCase();
      }return function () {
        var b = 4294967295 * Math.random() | 0,
            c = 4294967295 * Math.random() | 0,
            d = 4294967295 * Math.random() | 0,
            e = 4294967295 * Math.random() | 0;return a[255 & b] + a[b >> 8 & 255] + a[b >> 16 & 255] + a[b >> 24 & 255] + "-" + a[255 & c] + a[c >> 8 & 255] + "-" + a[c >> 16 & 15 | 64] + a[c >> 24 & 255] + "-" + a[63 & d | 128] + a[d >> 8 & 255] + "-" + a[d >> 16 & 255] + a[d >> 24 & 255] + a[255 & e] + a[e >> 8 & 255] + a[e >> 16 & 255] + a[e >> 24 & 255];
      };
    }() };
}(this.Blotter), function (a) {
  a.Messaging = function () {
    function a(a, b, c) {
      return a + (b ? "#" + b : "") + ": " + c;
    }return { ensureInstanceOf: function ensureInstanceOf(a, b, c, d, e) {
        if (!(a instanceof b)) return void this.logError(d, e, "argument must be instanceof " + c);
      }, logError: function logError(b, c, d) {
        var e = a(b, c, d);console.error(e);
      }, logWarning: function logWarning(b, c, d) {
        var e = a(b, c, d);console.warn(e);
      }, throwError: function throwError(b, c, d) {
        throw a(b, c, d);
      } };
  }();
}(this.Blotter), function (a, b) {
  a._extendWithGettersSetters = function (a) {
    return b.each(Array.prototype.slice.call(arguments, 1), function (b) {
      if (b) for (var c in b) {
        a[c] && Object.getOwnPropertyDescriptor(a, c) && Object.getOwnPropertyDescriptor(a, c).set ? Object.getOwnPropertyDescriptor(a, c).set(b[c]) : a[c] = b[c];
      }
    }), a;
  };
}(this.Blotter, this._), function (a) {
  a.VendorPrefixes = ["ms", "moz", "webkit", "o"];
}(this.Blotter), function (a, b) {
  a.ModelEventBinding = function (a, b) {
    this.model = a, this.eventCallbacks = b || {};
  }, a.ModelEventBinding.prototype = { constructor: a.ModelEventBinding, unsetEventCallbacks: function unsetEventCallbacks() {
      b.each(this.eventCallbacks, b.bind(function (a, b) {
        this.model.off(b, a);
      }, this));
    } };
}(this.Blotter, this._), function (a) {
  a.CanvasUtils = { canvas: function canvas(a, b, c) {
      c = c || {};var d = document.createElement("canvas");return d.className = c.class, d.innerHTML = c.html, d.width = a, d.height = b, d;
    }, hiDpiCanvas: function hiDpiCanvas(a, b, c, d) {
      c = c || this.pixelRatio, d = d || {};var e = document.createElement("canvas");return e.className = d.class, e.innerHTML = d.html, this.updateCanvasSize(e, a, b, c), e;
    }, updateCanvasSize: function updateCanvasSize(a, b, c, d) {
      d = d || 1, a.width = b * d, a.height = c * d, a.style.width = b + "px", a.style.height = c + "px", a.getContext("2d").setTransform(d, 0, 0, d, 0, 0);
    }, pixelRatio: function () {
      for (var b = document.createElement("canvas").getContext("2d"), c = window.devicePixelRatio || 1, d = b.backingStorePixelRatio, e = 0; e < a.VendorPrefixes.length && !d; ++e) {
        d = b[a.VendorPrefixes[e] + "BackingStorePixelRatio"];
      }return d = d || 1, c / d;
    }(), mousePosition: function mousePosition(a, b) {
      var c = a.getBoundingClientRect();return { x: b.clientX - c.left, y: b.clientY - c.top };
    }, normalizedMousePosition: function normalizedMousePosition(a, b) {
      var c = a.getBoundingClientRect(),
          d = this.mousePosition(a, b);return { x: d.x / c.width, y: d.y / c.height };
    } };
}(this.Blotter), function (a, b) {
  a.PropertyDefaults = { family: "sans-serif", size: 12, leading: 1.5, fill: "#000", style: "normal", weight: 400, padding: 0, paddingTop: 0, paddingRight: 0, paddingBottom: 0, paddingLeft: 0 }, a.TextUtils = { Properties: b.keys(a.PropertyDefaults), ensurePropertyValues: function ensurePropertyValues(c) {
      return c = b.defaults(c || {}, a.PropertyDefaults);
    }, filterTexts: function filterTexts(c) {
      return c = c instanceof a.Text ? [c] : b.toArray(c), b.filter(c, b.bind(function (b) {
        var c = b instanceof a.Text;return c || a.Messaging.logWarning("Blotter.TextUtils", "filterTexts", "object must be instance of Blotter.Text"), c;
      }, this));
    }, stringifiedPadding: function stringifiedPadding(a) {
      var b = a || this.ensurePropertyValues();return (a.paddingTop || b.padding) + "px " + (b.paddingRight || b.padding) + "px " + (b.paddingBottom || b.padding) + "px " + (b.paddingLeft || b.padding) + "px";
    }, sizeForText: function sizeForText(a, b) {
      var c,
          d = document.createElement("span");return b = this.ensurePropertyValues(b), d.innerHTML = a, d.style.display = "inline-block", d.style.fontFamily = b.family, d.style.fontSize = b.size + "px", d.style.fontWeight = b.weight, d.style.fontStyle = b.style, d.style.lineHeight = b.leading, d.style.maxWidth = "none", d.style.padding = this.stringifiedPadding(b), d.style.position = "absolute", d.style.width = "auto", d.style.visibility = "hidden", document.body.appendChild(d), c = { w: d.offsetWidth, h: d.offsetHeight }, document.body.removeChild(d), c;
    } };
}(this.Blotter, this._), function (a, b) {
  a.UniformUtils = { UniformTypes: ["1f", "2f", "3f", "4f"], defaultUniforms: { uResolution: { type: "2f", value: [0, 0] }, uGlobalTime: { type: "1f", value: 0 }, uTimeDelta: { type: "1f", value: 0 }, uBlendColor: { type: "4f", value: [1, 1, 1, 1] }, uPixelRatio: { type: "1f", value: a.CanvasUtils.pixelRatio } }, validValueForUniformType: function validValueForUniformType(a, c) {
      var d = !1,
          e = function e(a) {
        return !isNaN(a);
      };switch (a) {case "1f":
          d = !isNaN(c) && [c].every(e);break;case "2f":
          d = b.isArray(c) && 2 == c.length && c.every(e);break;case "3f":
          d = b.isArray(c) && 3 == c.length && c.every(e);break;case "4f":
          d = b.isArray(c) && 4 == c.length && c.every(e);}return d;
    }, glslDataTypeForUniformType: function glslDataTypeForUniformType(a) {
      var b;switch (a) {case "1f":
          b = "float";break;case "2f":
          b = "vec2";break;case "3f":
          b = "vec3";break;case "4f":
          b = "vec4";}return b;
    }, fullSwizzleStringForUniformType: function fullSwizzleStringForUniformType(a) {
      var b;switch (a) {case "1f":
          b = "x";break;case "2f":
          b = "xy";break;case "3f":
          b = "xyz";break;case "4f":
          b = "xyzw";}return b;
    }, extractValidUniforms: function extractValidUniforms(c) {
      return c = c || {}, b.reduce(c, function (c, d, e) {
        return -1 == a.UniformUtils.UniformTypes.indexOf(d.type) ? (a.Messaging.logError("Blotter.UniformUtils", "extractValidUniforms", "uniforms must be one of type: " + a.UniformUtils.UniformTypes.join(", ")), c) : a.UniformUtils.validValueForUniformType(d.type, d.value) ? (c[e] = b.pick(d, "type", "value"), c) : (a.Messaging.logError("Blotter.UniformUtils", "extractValidUniforms", "uniform value for " + e + " is incorrect for type: " + d.type), c);
      }, {});
    }, ensureHasRequiredDefaultUniforms: function ensureHasRequiredDefaultUniforms(b, c, d) {
      if (!a.UniformUtils.hasRequiredDefaultUniforms(b)) return void this.logError(c, d, "uniforms object is missing required default uniforms defined in Blotter.UniformUtils.defaultUniforms");
    }, hasRequiredDefaultUniforms: function hasRequiredDefaultUniforms(c) {
      return !b.difference(b.allKeys(a.UniformUtils.defaultUniforms), b.allKeys(c)).length;
    } };
}(this.Blotter, this._), function (a, b, c, d) {
  a.Text = function (b, c) {
    this.id = a.Math.generateUUID(), this.value = b, this.properties = c;
  }, a.Text.prototype = { constructor: a.Text, get needsUpdate() {}, set needsUpdate(a) {
      !0 === a && this.trigger("update");
    }, get properties() {
      return this._properties;
    }, set properties(b) {
      this._properties = a.TextUtils.ensurePropertyValues(b);
    } }, a._extendWithGettersSetters(a.Text.prototype, d.prototype);
}(this.Blotter, this._, this.THREE, this.EventEmitter), function (a, b) {
  a.Assets.Shaders.Blending = ["//", "// Author : Bradley Griffith", "// License : Distributed under the MIT License.", "//", "", "// Returns the resulting blend color by blending a top color over a base color", "highp vec4 normalBlend(highp vec4 topColor, highp vec4 baseColor) {", "  highp vec4 blend = vec4(0.0);", "  // HACK", "  // Cant divide by 0 (see the 'else' alpha) and after a lot of attempts", "  // this simply seems like the only solution Im going to be able to come up with to get alpha back.", "  if (baseColor.a == 1.0) {", "    baseColor.a = 0.9999999;", "  };", "  if (topColor.a >= 1.0) {", "    blend.a = topColor.a;", "    blend.r = topColor.r;", "    blend.g = topColor.g;", "    blend.b = topColor.b;", "  } else if (topColor.a == 0.0) {", "    blend.a = baseColor.a;", "    blend.r = baseColor.r;", "    blend.g = baseColor.g;", "    blend.b = baseColor.b;", "  } else {", "    blend.a = 1.0 - (1.0 - topColor.a) * (1.0 - baseColor.a); // alpha", "    blend.r = (topColor.r * topColor.a / blend.a) + (baseColor.r * baseColor.a * (1.0 - topColor.a) / blend.a);", "    blend.g = (topColor.g * topColor.a / blend.a) + (baseColor.g * baseColor.a * (1.0 - topColor.a) / blend.a);", "    blend.b = (topColor.b * topColor.a / blend.a) + (baseColor.b * baseColor.a * (1.0 - topColor.a) / blend.a);", "  }", "  return blend;", "}", "// Returns a vec4 representing the original top color that would have been needed to blend", "//  against a passed in base color in order to result in the passed in blend color.", "highp vec4 normalUnblend(highp vec4 blendColor, highp vec4 baseColor) {", "  highp vec4 unblend = vec4(0.0);", "  // HACKY", "  // Cant divide by 0 (see alpha) and after a lot of attempts", "  // this simply seems like the only solution Im going to be able to come up with to get alpha back.", "  if (baseColor.a == 1.0) {", "    baseColor.a = 0.9999999;", "  }", "  unblend.a = 1.0 - ((1.0 - blendColor.a) / (1.0 - baseColor.a));", "  // Round to two decimal places", "  unblend.a = (sign(100.0 * unblend.a) * floor(abs(100.0 * unblend.a) + 0.5)) / 100.0;", "  if (unblend.a >= 1.0) {", "    unblend.r = blendColor.r;", "    unblend.g = blendColor.g;", "    unblend.b = blendColor.b;", "  } else if (unblend.a == 0.0) {", "    unblend.r = baseColor.r;", "    unblend.g = baseColor.g;", "    unblend.b = baseColor.b;", "  } else {", "    unblend.r = (blendColor.r - (baseColor.r * baseColor.a * (1.0 - unblend.a) / blendColor.a)) / (unblend.a / blendColor.a);", "    unblend.g = (blendColor.g - (baseColor.g * baseColor.a * (1.0 - unblend.a) / blendColor.a)) / (unblend.a / blendColor.a);", "    unblend.b = (blendColor.b - (baseColor.b * baseColor.a * (1.0 - unblend.a) / blendColor.a)) / (unblend.a / blendColor.a);", "  }", "  return unblend;", "}"].join("\n");
}(this.Blotter, this._), function (a, b) {
  a.Assets.Shaders.Inf = ["//", "// Author : Bradley Griffith", "// License : Distributed under the MIT License.", "//", "bool isinf(float val) {", "    return (val != 0.0 && val * 2.0 == val) ? true : false;", "}"].join("\n");
}(this.Blotter, this._), function (a, b) {
  a.Assets.Shaders.LineMath = [a.Assets.Shaders.Inf, "", "//", "// Author : Bradley Griffith", "// License : Distributed under the MIT License.", "//", "", "// Returns the slope of a line given the degrees of the angle on which that line is rotated;", "float slopeForDegrees(float deg) {", "    // Ensure degrees stay withing 0.0 - 360.0", "    deg = mod(deg, 360.0);", "    float radians = deg * (PI / 180.0);", "    return tan(radians);", "}", "// Given x, a slope, and another point, find y for x.", "float yForXOnSlope(float x, float slope, vec2 p2) {", "    return -1.0 * ((slope * (p2.x - x)) - p2.y);", "}", "// Given y, a slope, and another point, find x for y.", "float xForYOnSlope(float y, float slope, vec2 p2) {", "    return ((y - p2.y) + (slope * p2.x)) / slope;", "}", "// Returns slope adjusted for screen ratio.", "float normalizedSlope(float slope, vec2 resolution) {", "    vec2 p = vec2(1.0) / resolution;", "    return ((slope * 100.0) / p.x) / (100.0 / p.x);", "}", "// Returns offsets (+/-) for any coordinate at distance given slope.", "//   Note: This function does not normalize distance.", "//   Note: This function does not adjust slope for screen ratio.", "vec2 offsetsForCoordAtDistanceOnSlope(float d, float slope) {", "    return vec2(", "        (d * cos(atan(slope))),", "        (d * sin(atan(slope)))", "    );", "}", "// Returns a boolean designating whether or not an infinite line intersects with an infinite line, and sets an `out` variable for the intersection point if it is found.", "//   Note: This function does not adjust slope for screen ratio.", "bool lineLineIntersection (out vec2 intersect, in vec2 p1, in float m1, in vec2 p2, in float m2) {", "    // See: http://gamedev.stackexchange.com/questions/44720/line-intersection-from-parametric-equation", "    //      http://stackoverflow.com/questions/41687083/formula-to-determine-if-an-infinite-line-and-a-line-segment-intersect/41687904#41687904", "    bool isIntersecting = false;", "    float dx = 1.0;", "    float dy = m1;", "    float dxx = 1.0;", "    float dyy = m2;", "    float denominator = ((dxx * dy) - (dyy * dx));", "    if (denominator == 0.0) {", "        // Lines are parallel", "        return isIntersecting;", "    }", "    if (isinf(dy)) {", "        float y = yForXOnSlope(p1.x, m2, p2);", "        isIntersecting = true;", "        intersect = vec2(p1.x, y);", "        return isIntersecting;", "    }", "    if (isinf(dyy)) {", "        float y = yForXOnSlope(p2.x, m1, p1);", "        isIntersecting = true;", "        intersect = vec2(p2.x, y);", "        return isIntersecting;", "    }", "    float u = ((dx * (p2.y - p1.y)) + (dy * (p1.x - p2.x))) / denominator;", "    isIntersecting = true;", "    intersect = p2 + (u * vec2(dxx, dyy));", "    return isIntersecting;", "}", "// Returns a boolean designating whether or not an infinite line intersects with a line segment, and sets an `out` variable for the intersection point if it is found.", "//   Note: This function does not adjust slope for screen ratio.", "bool lineLineSegmentIntersection (out vec2 intersect, in vec2 point, in float m, in vec2 pA, in vec2 pB) {", "    // See: http://gamedev.stackexchange.com/questions/44720/line-intersection-from-parametric-equation", "    //      http://stackoverflow.com/questions/41687083/formula-to-determine-if-an-infinite-line-and-a-line-segment-intersect/41687904#41687904", "    bool isIntersecting = false;", "    float dx = 1.0;", "    float dy = m;", "    float dxx = pB.x - pA.x;", "    float dyy = pB.y - pA.y;", "    float denominator = ((dxx * dy) - (dyy * dx));", "    if (denominator == 0.0 || (isinf(dyy / dxx) && isinf(dy))) {", "        // Lines are parallel", "        return isIntersecting;", "    }", "    if (isinf(dy)) {", "        float m2 = dyy / dxx;", "        float y = yForXOnSlope(point.x, m2, pB);", "        isIntersecting = true;", "        intersect = vec2(point.x, y);", "        return isIntersecting;", "    }", "    float u = ((dx * (pA.y - point.y)) + (dy * (point.x - pA.x))) / denominator;", "    if (u >= 0.0 && u <= 1.0) {", "        // Intersection occured on line segment", "        isIntersecting = true;", "        intersect = pA + (u * vec2(dxx, dyy));", "    }", "    return isIntersecting;", "}", "// Dev Note: Terrible code. Needs refactor. Just trying to find ", "//   which two edges of the rect the intersections occur at.", "void intersectsOnRectForLine(out vec2 iA, out vec2 iB, in vec2 rMinXY, in vec2 rMaxXY, in vec2 point, in float slope) {", "    bool firstIntersectFound = false;", "    vec2 intersectLeft = vec2(0.0);", "    vec2 intersectTop = vec2(0.0);", "    vec2 intersectRight = vec2(0.0);", "    vec2 intersectBottom = vec2(0.0);", "    bool intersectsLeft = lineLineSegmentIntersection(intersectLeft, point, slope, rMinXY, vec2(rMinXY.x, rMaxXY.y));", "    bool intersectsTop = lineLineSegmentIntersection(intersectTop, point, slope, vec2(rMinXY.x, rMaxXY.y), rMaxXY);", "    bool intersectsRight = lineLineSegmentIntersection(intersectRight, point, slope, rMaxXY, vec2(rMaxXY.x, rMinXY.y));", "    bool intersectsBottom = lineLineSegmentIntersection(intersectBottom, point, slope, rMinXY, vec2(rMaxXY.x, rMinXY.y));", "    if (intersectsLeft) {", "        if (firstIntersectFound) {", "            iB = intersectLeft;", "        }", "        else {", "            iA = intersectLeft;", "            firstIntersectFound = true;", "        }", "    }", "    if (intersectsTop) {", "        if (firstIntersectFound) {", "            iB = intersectTop;", "        }", "        else {", "            iA = intersectTop;", "            firstIntersectFound = true;", "        }", "    }", "    if (intersectsRight) {", "        if (firstIntersectFound) {", "            iB = intersectRight;", "        }", "        else {", "            iA = intersectRight;", "            firstIntersectFound = true;", "        }", "    }", "    if (intersectsBottom) {", "        if (firstIntersectFound) {", "            iB = intersectBottom;", "        }", "        else {", "            iA = intersectBottom;", "        }", "    }", "}"].join("\n");
}(this.Blotter, this._), function (a, b) {
  a.Assets.Shaders.BlinnPhongSpecular = ["//", "// Author : Reza Ali", "// License : Distributed under the MIT License.", "//", "", "float blinnPhongSpecular( vec3 lightDirection, vec3 viewDirection, vec3 surfaceNormal, float shininess ) {", "", "  //Calculate Blinn-Phong power", "  vec3 H = normalize(viewDirection + lightDirection);", "  return pow(max(0.0, dot(surfaceNormal, H)), shininess);", "}"].join("\n");
}(this.Blotter, this._), function (a, b) {
  a.Assets.Shaders.Easing = ["//", "// Author : Reza Ali", "// License : Distributed under the MIT License.", "//", "", "float linear( float t, float b, float c, float d )", "{", "    return t * ( c / d ) + b;", "}", "", "float linear( float t )", "{", "    return t;", "}", "", "float inQuad( float t, float b, float c, float d )", "{", "    return c * ( t /= d ) * t + b;", "}", "", "float inQuad( float t )", "{", "    return t * t;", "}", "", "float outQuad( float t, float b, float c, float d )", "{", "    return -c * ( t /= d ) * ( t - 2.0 ) + b;", "}", "", "float outQuad( float t )", "{", "    return - ( t -= 1.0 ) * t + 1.0;", "}", "", "float inOutQuad( float t, float b, float c, float d )", "{", "    if( ( t /= d / 2.0 ) < 1.0 ) {", "      return c / 2.0 * t * t + b;", "    }", "    return - c / 2.0 * ( ( --t ) * ( t - 2.0 ) - 1.0 ) + b;", "}", "", "float inOutQuad( float t )", "{", "    if( ( t /= 0.5 ) < 1.0 ) return 0.5 * t * t;", "    return -0.5 * ( ( --t ) * ( t-2 ) - 1 );", "}", "", "float inCubic( float t, float b, float c, float d )", "{", "    return c * ( t /= d ) * t * t + b;", "}", "", "float inCubic( float t )", "{", "    return t * t * t;", "}", "", "float outCubic( float t, float b, float c, float d )", "{", "    return c * ( ( t = t/d - 1.0 ) * t * t + 1.0 ) + b;", "}", "", "float outCubic( float t )", "{", "    return ( ( --t ) * t * t + 1.0 );", "}", "", "float inOutCubic( float t, float b, float c, float d )", "{", "    if( ( t /= d / 2.0 ) < 1.0 ) return  c / 2.0 * t * t * t + b;", "    return c / 2.0 * ( ( t -= 2.0 ) * t * t + 2.0 ) + b;", "}", "", "float inOutCubic( float t )", "{", "    if( ( t /= 0.5 ) < 1.0 ) return 0.5 * t * t * t;", "    return 0.5 * ( ( t -= 2.0 ) * t * t + 2.0 );", "}", "", "float inQuart( float t, float b, float c, float d )", "{", "    return c * ( t /= d ) * t * t * t + b;", "}", "", "float inQuart( float t )", "{", "    return t * t * t * t;", "}", "", "float outQuart( float t, float b, float c, float d )", "{", "    return -c * ( ( t = t/d - 1.0 ) * t * t * t - 1.0 ) + b;", "}", "", "float outQuart( float t )", "{", "    return - ( ( --t ) * t * t * t - 1.0 );", "}", "", "float inOutQuart( float t, float b, float c, float d )", "{", "    if ( ( t /= d / 2.0 ) < 1.0 ) return c / 2.0 * t * t * t * t + b;", "    return -c / 2.0 * ( ( t -= 2.0 ) * t * t * t - 2.0 ) + b;", "}", "", "float inOutQuart( float t )", "{", "    if ( (t /= 0.5 ) < 1.0 ) return 0.5 * t * t * t * t;", "    return -0.5 * ( ( t -= 2.0 ) * t * t * t - 2.0 );", "}", "", "float inQuint( float t, float b, float c, float d )", "{", "    return c * ( t /= d ) * t * t * t * t + b;", "}", "", "float inQuint( float t )", "{", "    return t * t * t * t * t;", "}", "", "float outQuint( float t, float b, float c, float d )", "{", "    return c * ( ( t = t/d - 1.0) * t * t * t * t + 1.0 ) + b;", "}", "", "float outQuint( float t )", "{", "    return ( ( --t ) * t * t * t * t + 1.0 );", "}", "", "float inOutQuint( float t, float b, float c, float d )", "{", "    if( ( t /= d /2.0 ) < 1.0 ) return  c / 2.0 * t * t * t * t * t + b;", "    return c / 2.0 * ( ( t -= 2.0 ) * t * t * t * t + 2.0) + b;", "}", "", "float inOutQuint( float t )", "{", "    if ( ( t /= 0.5 ) < 1.0 ) return 0.5 * t * t * t * t * t;", "    return 0.5 * ( ( t -= 2 ) * t * t * t * t + 2.0 );", "}", "", "float inSine( float t, float b, float c, float d )", "{", "    return -c * cos( t / d * ( 1.5707963268 ) ) + c + b;", "}", "", "float inSine( float t )", "{", "    return -1.0 * cos( t * ( 1.5707963268 ) ) + 1.0;", "}", "", "float outSine( float t, float b, float c, float d )", "{", "    return c * sin( t / d * ( 1.5707963268 ) ) + b;", "}", "", "float outSine( float t )", "{", "    return sin( t * ( 1.5707963268 ) );", "}", "", "float inOutSine( float t, float b, float c, float d )", "{", "    return - c / 2.0 * ( cos( 3.1415926536 * t / d ) - 1.0 ) + b;", "}", "", "float inOutSine( float t )", "{", "    return -0.5 * ( cos( 3.1415926536 * t ) - 1.0 );", "}", "", "float inExpo( float t, float b, float c, float d )", "{", "    return ( t == 0.0 ) ? b : c * pow( 2.0, 10.0 * ( t / d - 1.0 ) ) + b;", "}", "", "float inExpo( float t )", "{", "    return ( t == 0 ) ? 0.0 : pow( 2.0, 10.0 * ( t - 1.0 ) );", "}", "", "float outExpo( float t, float b, float c, float d )", "{", "    return ( t == d ) ? b + c : c * ( - pow( 2.0, -10.0 * t / d ) + 1.0 ) + b;", "}", "", "float outExpo( float t )", "{", "    return ( t == 1.0 ) ? 1.0 : ( - pow( 2.0, -10.0 * t ) + 1.0 );", "}", "", "float inOutExpo( float t, float b, float c, float d )", "{", "    if( t == 0 ) return b;", "    if( t == d ) return b + c;", "    if(( t /= d / 2.0 ) < 1.0 ) return c / 2.0 * pow( 2.0, 10.0 * ( t - 1.0 ) ) + b;", "    return c / 2.0 * ( - pow( 2.0, -10.0 * --t ) + 2.0 ) + b;", "}", "", "float inOutExpo( float t )", "{", "    if( t == 0.0 ) return 0.0;", "    if( t == 1.0 ) return 1.0;", "    if( ( t /= 0.5 ) < 1.0 ) return 0.5 * pow( 2.0, 10.0 * ( t - 1.0 ) );", "    return 0.5 * ( - pow( 2.0, -10.0 * --t ) + 2.0 );", "}", "", "float inCirc( float t, float b, float c, float d )", "{", "    return -c * ( sqrt( 1.0 - (t/=d)*t) - 1) + b;", "}", "", "float inCirc( float t )", "{", "    return - ( sqrt( 1.0 - t*t) - 1);", "}", "", "float outCirc( float t, float b, float c, float d )", "{", "    return c * sqrt( 1.0 - (t=t/d-1)*t) + b;", "}", "", "float outCirc( float t )", "{", "    return sqrt( 1.0 - (--t)*t);", "}", "", "float inOutCirc( float t, float b, float c, float d )", "{", "    if ( ( t /= d / 2.0 ) < 1 ) return - c / 2.0 * ( sqrt( 1.0 - t * t ) - 1.0 ) + b;", "    return c / 2.0 * ( sqrt( 1.0 - ( t -= 2.0 ) * t ) + 1.0 ) + b;", "}", "", "float inOutCirc( float t )", "{", "    if( ( t /= 0.5 ) < 1.0 ) return -0.5 * ( sqrt( 1.0 - t * t ) - 1.0 );", "    return 0.5 * ( sqrt( 1.0 - ( t -= 2.0 ) * t ) + 1.0 );", "}", "", "float inElastic( float t, float b, float c, float d )", "{", "    float s = 1.70158; float p = 0.0; float a = c;", "    if( t == 0 ) return b;  if( ( t /= d ) == 1 ) return b + c;", "    p = d * 0.3;", "    if( a < abs( c ) ) { a = c; float s = p / 4.0; }", "    else s = 0.1591549431 * p / ( 6.2831853072 ) * asin( c / a );", "    return -( a * pow( 2.0, 10.0 * ( t -= 1.0 ) ) * sin( ( t * d - s ) * ( 6.2831853072 ) / p ) )  + b;", "}", "", "float inElastic( float t )", "{", "    float s = 1.70158; float p = 0.0; float a = 1.0;", "    if( t == 0.0 ) return 0.0;", "    if( t == 1.0 ) return 1.0;", "    p = 0.3;", "    s = p / ( 6.2831853072 ) * asin( 1.0 / a );", "    return -( a * pow( 2.0, 10.0 * ( t -= 1.0 ) ) * sin( ( t - s ) * ( 6.2831853072 ) / p ) );", "}", "", "float outElastic( float t, float b, float c, float d )", "{", "    float s = 1.70158; float p = 0.0; float a = c;", "    if( t == 0.0 ) return b;", "    if( (t /= d ) == 1.0 ) return b + c;", "    p = d * 0.3;", "    if( a < abs( c ) ) { a = c; s = p / 4.0; }", "    else { s = p / ( 6.2831853072 ) * asin( c / a ); }", "    return a * pow( 2.0, -10.0 * t ) * sin( ( t * d - s ) * ( 6.2831853072 ) / p ) + c + b;", "}", "", "float outElastic( float t )", "{", "    float s = 1.70158; float p = 0.0 ; float a = 1.0;", "    if( t == 0.0 ) return 0.0;  if( t == 1.0 ) return 1.0;", "    p = 0.3;", "    s = p / ( 6.2831853072 ) * asin( 1.0 / a );", "    return a * pow( 2.0, -10.0 * t ) * sin( ( t - s ) * ( 6.2831853072 ) / p ) + 1.0;", "}", "", "float inOutElastic( float t, float b, float c, float d )", "{", "    float s = 1.70158; float p = 0.0; float a = c;", "    if( t == 0.0 ) return b;", "    if( ( t /= d / 2.0 ) == 2.0 ) return b + c;", "    p = d * ( 0.3 * 1.5 );", "    if( a < abs( c ) ) { a = c; s = p / 4.0; }", "    else { s = p / ( 6.2831853072 ) * asin( c / a ); }", "    if( t < 1.0 ) return -0.5 * ( a * pow( 2.0, 10.0 * ( t -= 1.0 ) ) * sin( ( t * d - s ) * ( 6.2831853072 ) / p ) ) + b;", "    return a * pow( 2.0, -10.0 * ( t -= 1.0 ) ) * sin( ( t * d - s ) * ( 6.2831853072 ) / p ) * 0.5 + c + b;", "}", "", "float inOutElastic( float t )", "{", "    float s = 1.70158; float p = 0; float a = 1.0;", "    if( t == 0 ) return 0.0;", "    if( ( t /= 0.5 ) == 2.0 ) return 1.0;", "    p = ( 0.3 * 1.5 );", "    s = p / ( 6.2831853072 ) * asin( 1.0 / a );", "    if( t < 1.0 ) return -0.5 * ( a * pow( 2.0, 10.0 * ( t -= 1.0 ) ) * sin( ( t - s ) * ( 6.2831853072 ) / p ) );", "    return a * pow( 2.0, -10.0 * ( t -= 1.0 ) ) * sin( ( t - s ) * ( 6.2831853072 ) / p ) * 0.5 + 1.0;", "}", "", "float inBack( float t, float b, float c, float d )", "{", "    float s = 1.70158;", "    return c * ( t /= d ) * t * ( ( s + 1.0 ) * t - s ) + b;", "}", "", "float inBack( float t )", "{", "    float s = 1.70158;", "    return t * t * ( ( s + 1.0 ) * t - s);", "}", "", "float outBack( float t,  float b,  float c,  float d )", "{", "    float s = 1.70158;", "    return c * ( ( t = t / d - 1.0 ) * t * ( ( s + 1.0 ) * t + s ) + 1.0 ) + b;", "}", "", "float outBack( float t )", "{", "    float s = 1.70158;", "    return ( ( --t ) * t * ( ( s + 1.0 ) * t + s ) + 1.0);", "}", "", "float inOutBack( float t, float b, float c, float d )", "{", "    float s = 1.70158;", "    if( ( t /= d / 2.0 ) < 1.0 ) return c / 2.0 * ( t * t * ( ( ( s *= 1.525 ) + 1.0 ) * t - s ) ) + b;", "    return c / 2.0 * ( ( t -= 2.0 ) * t * ( ( ( s *= ( 1.525 ) ) + 1.0 ) * t + s ) + 2.0 ) + b;", "}", "", "float inOutBack( float t )", "{", "    float s = 1.70158;", "    if( ( t /= 0.5 ) < 1.0 ) return 0.5 * ( t * t * ( ( ( s *= 1.525 ) + 1.0 ) * t - s ) );", "    return 0.5 * ( ( t -= 2 ) * t * ( ( ( s *= ( 1.525 ) ) + 1.0 ) * t + s ) + 2.0 );", "}", "", "float outBounce( float t, float b, float c, float d )", "{", "    if( ( t /= d ) < ( 1.0 / 2.75 ) ) {", "        return c * ( 7.5625 * t * t ) + b;", "    } else if ( t < ( 2.0 / 2.75 ) ) {", "        return c * ( 7.5625 * ( t -= ( 1.5 / 2.75 ) ) * t + 0.75 ) + b;", "    } else if ( t < ( 2.5 / 2.75 ) ) {", "        return c * ( 7.5625 * ( t -= ( 2.25 / 2.75 ) ) * t + 0.9375 ) + b;", "    } else {", "        return c * ( 7.5625 * ( t -= ( 2.625 / 2.75 ) ) * t + 0.984375 ) + b;", "    }", "}", "", "float outBounce( float t )", "{", "    if( t < ( 1.0 / 2.75 ) ) {", "        return ( 7.5625 * t * t );", "    } else if ( t < ( 2.0 / 2.75 ) ) {", "        return ( 7.5625 * ( t-= ( 1.5 / 2.75 ) ) * t + .75 );", "    } else if ( t < ( 2.5 / 2.75 ) ) {", "        return ( 7.5625 * ( t -= ( 2.25 / 2.75 ) ) * t + 0.9375 );", "    } else {", "        return ( 7.5625 * ( t -= ( 2.625 / 2.75 ) ) * t + 0.984375 );", "    }", "}", "", "float inBounce( float t, float b, float c, float d )", "{", "    return c - outBounce( d - t, 0.0, c, d ) + b;", "}", "", "float inBounce( float t )", "{", "    return 1.0 - outBounce( 1.0 - t);", "}", "", "float inOutBounce( float t, float b, float c, float d )", "{", "    if ( t < d /2.0 ) return inBounce ( t * 2.0, 0.0, c, d ) * 0.5 + b;", "    return outBounce ( t * 2.0 - d, 0, c, d ) * 0.5 + c * 0.5 + b;", "}", "", "float inOutBounce( float t )", "{", "    if ( t < 0.5 ) return inBounce( t * 2.0 ) * 0.5;", "    return outBounce( t * 2.0 - 1.0 ) * 0.5 + 0.5;", "}"].join("\n");
}(this.Blotter, this._), function (a, b) {
  a.Assets.Shaders.Gamma = ["//", "// Author : Reza Ali", "// License : Distributed under the MIT License.", "//", "", "const vec3 cGammaCorrection = vec3( 0.4545454545 );", "", "vec3 gamma( in vec3 color )", "{", "  return pow( color, cGammaCorrection );", "}", "", "vec4 gamma( in vec4 color )", "{", "  return vec4( gamma( color.rgb ), color.a );", "}"].join("\n");
}(this.Blotter, this._), function (a, b) {
  a.Assets.Shaders.Map = ["//", "// Author : Reza Ali", "// License : Distributed under the MIT License.", "//", "", "float map( float value, float inMin, float inMax, float outMin, float outMax )", "{", "    return ( (value - inMin) / ( inMax - inMin ) * ( outMax - outMin ) ) + outMin;", "}"].join("\n");
}(this.Blotter, this._), function (a, b) {
  a.Assets.Shaders.Noise = ["//", "// Author : Patricio Gonzalez Vivo and Jen Lowe", "// License : Distributed under the MIT License.", "// Source : https://github.com/patriciogonzalezvivo/thebookofshaders", "//", "float random (in float _x) {", "    return fract(sin(_x)*1e4);", "}", "", "float random (in vec2 co) {", "    return fract(sin(dot(co.xy,vec2(12.9898,78.233)))*43758.5453);", "}", "", "float noise (in float _x) {", "    float i = floor(_x);", "    float f = fract(_x);", "    float u = f * f * (3.0 - 2.0 * f);", "    return mix(random(i), random(i + 1.0), u);", "}", "", "float noise (in vec2 _st) {", "    vec2 i = floor(_st);", "    vec2 f = fract(_st);", "    // Four corners in 2D of a tile", "    float a = random(i);", "    float b = random(i + vec2(1.0, 0.0));", "    float c = random(i + vec2(0.0, 1.0));", "    float d = random(i + vec2(1.0, 1.0));", "    vec2 u = f * f * (3.0 - 2.0 * f);", "    return mix(a, b, u.x) + ", "            (c - a)* u.y * (1.0 - u.x) + ", "            (d - b) * u.x * u.y;", "}"].join("\n");
}(this.Blotter, this._), function (a, b) {
  a.Assets.Shaders.Noise2D = ["//", "// Description : Array and textureless GLSL 2D simplex noise function.", "//      Author : Ian McEwan, Ashima Arts.", "//  Maintainer : ijm", "//     Lastmod : 20110822 (ijm)", "//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.", "//               Distributed under the MIT License. See LICENSE file.", "//               https://github.com/ashima/webgl-noise", "//", "", "vec2 n2mod289(vec2 x) {", "  return x - floor(x * (1.0 / 289.0)) * 289.0;", "}", "", "vec3 n2mod289(vec3 x) {", "  return x - floor(x * (1.0 / 289.0)) * 289.0;", "}", "", "vec4 n2mod289(vec4 x) {", "  return x - floor(x * (1.0 / 289.0)) * 289.0;", "}", "", "vec3 permute(vec3 x) {", "  return n2mod289(((x*34.0)+1.0)*x);", "}", "", "float snoise(vec2 v)", "  {", "  const vec4 C = vec4(0.211324865405187,  // (3.0-sqrt(3.0))/6.0", "                      0.366025403784439,  // 0.5*(sqrt(3.0)-1.0)", "                     -0.577350269189626,  // -1.0 + 2.0 * C.x", "                      0.024390243902439); // 1.0 / 41.0", "// First corner", "  vec2 i  = floor(v + dot(v, C.yy) );", "  vec2 x0 = v -   i + dot(i, C.xx);", "", "// Other corners", "  vec2 i1;", "  //i1.x = step( x0.y, x0.x ); // x0.x > x0.y ? 1.0 : 0.0", "  //i1.y = 1.0 - i1.x;", "  i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);", "  // x0 = x0 - 0.0 + 0.0 * C.xx ;", "  // x1 = x0 - i1 + 1.0 * C.xx ;", "  // x2 = x0 - 1.0 + 2.0 * C.xx ;", "  vec4 x12 = x0.xyxy + C.xxzz;", "  x12.xy -= i1;", "", "// Permutations", "  i = n2mod289(i); // Avoid truncation effects in permutation", "  vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))", "   + i.x + vec3(0.0, i1.x, 1.0 ));", "", "  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);", "  m = m*m ;", "  m = m*m ;", "", "// Gradients: 41 points uniformly over a line, mapped onto a diamond.", "// The ring size 17*17 = 289 is close to a multiple of 41 (41*7 = 287)", "", "  vec3 x = 2.0 * fract(p * C.www) - 1.0;", "  vec3 h = abs(x) - 0.5;", "  vec3 ox = floor(x + 0.5);", "  vec3 a0 = x - ox;", "", "// Normalise gradients implicitly by scaling m", "// Approximation of: m *= inversesqrt( a0*a0 + h*h );", "  m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );", "", "// Compute final noise value at P", "  vec3 g;", "  g.x  = a0.x  * x0.x  + h.x  * x0.y;", "  g.yz = a0.yz * x12.xz + h.yz * x12.yw;", "  return 130.0 * dot(m, g);", "}"].join("\n");
}(this.Blotter, this._), function (a, b) {
  a.Assets.Shaders.Noise3D = ["//", "// Description : Array and textureless GLSL 2D/3D/4D simplex", "//               noise functions.", "//      Author : Ian McEwan, Ashima Arts.", "//  Maintainer : ijm", "//     Lastmod : 20110822 (ijm)", "//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.", "//               Distributed under the MIT License. See LICENSE file.", "//               https://github.com/ashima/webgl-noise", "//", "", "vec2 n3mod289(vec2 x) {", "  return x - floor(x * (1.0 / 289.0)) * 289.0;", "}", "", "vec3 n3mod289(vec3 x) {", "  return x - floor(x * (1.0 / 289.0)) * 289.0;", "}", "", "vec4 n3mod289(vec4 x) {", "  return x - floor(x * (1.0 / 289.0)) * 289.0;", "}", "", "vec4 permute(vec4 x) {", "     return n3mod289(((x*34.0)+1.0)*x);", "}", "", "vec4 taylorInvSqrt(vec4 r)", "{", "  return 1.79284291400159 - 0.85373472095314 * r;", "}", "", "float snoise(vec3 v)", "  {", "  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;", "  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);", "", "// First corner", "  vec3 i  = floor(v + dot(v, C.yyy) );", "  vec3 x0 =   v - i + dot(i, C.xxx) ;", "", "// Other corners", "  vec3 g = step(x0.yzx, x0.xyz);", "  vec3 l = 1.0 - g;", "  vec3 i1 = min( g.xyz, l.zxy );", "  vec3 i2 = max( g.xyz, l.zxy );", "", "  //   x0 = x0 - 0.0 + 0.0 * C.xxx;", "  //   x1 = x0 - i1  + 1.0 * C.xxx;", "  //   x2 = x0 - i2  + 2.0 * C.xxx;", "  //   x3 = x0 - 1.0 + 3.0 * C.xxx;", "  vec3 x1 = x0 - i1 + C.xxx;", "  vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y", "  vec3 x3 = x0 - D.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y", "", "// Permutations", "  i = n3mod289(i);", "  vec4 p = permute( permute( permute(", "             i.z + vec4(0.0, i1.z, i2.z, 1.0 ))", "           + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))", "           + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));", "", "// Gradients: 7x7 points over a square, mapped onto an octahedron.", "// The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)", "  float n_ = 0.142857142857; // 1.0/7.0", "  vec3  ns = n_ * D.wyz - D.xzx;", "", "  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)", "", "  vec4 x_ = floor(j * ns.z);", "  vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)", "", "  vec4 x = x_ *ns.x + ns.yyyy;", "  vec4 y = y_ *ns.x + ns.yyyy;", "  vec4 h = 1.0 - abs(x) - abs(y);", "", "  vec4 b0 = vec4( x.xy, y.xy );", "  vec4 b1 = vec4( x.zw, y.zw );", "", "  //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;", "  //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;", "  vec4 s0 = floor(b0)*2.0 + 1.0;", "  vec4 s1 = floor(b1)*2.0 + 1.0;", "  vec4 sh = -step(h, vec4(0.0));", "", "  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;", "  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;", "", "  vec3 p0 = vec3(a0.xy,h.x);", "  vec3 p1 = vec3(a0.zw,h.y);", "  vec3 p2 = vec3(a1.xy,h.z);", "  vec3 p3 = vec3(a1.zw,h.w);", "", "//Normalise gradients", "  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));", "  p0 *= norm.x;", "  p1 *= norm.y;", "  p2 *= norm.z;", "  p3 *= norm.w;", "", "// Mix final noise value", "  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);", "  m = m * m;", "  return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),", "                                dot(p2,x2), dot(p3,x3) ) );", "  }"].join("\n");
}(this.Blotter, this._), function (a, b) {
  a.Assets.Shaders.Noise4D = ["//", "// Description : Array and textureless GLSL 2D/3D/4D simplex", "//               noise functions.", "//      Author : Ian McEwan, Ashima Arts.", "//  Maintainer : ijm", "//     Lastmod : 20110822 (ijm)", "//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.", "//               Distributed under the MIT License. See LICENSE file.", "//               https://github.com/ashima/webgl-noise", "//", "", "vec4 mod289(vec4 x) {", "  return x - floor(x * (1.0 / 289.0)) * 289.0; }", "", "float mod289(float x) {", "  return x - floor(x * (1.0 / 289.0)) * 289.0; }", "", "vec4 permute(vec4 x) {", "     return mod289(((x*34.0)+1.0)*x);", "}", "", "float permute(float x) {", "     return mod289(((x*34.0)+1.0)*x);", "}", "", "vec4 taylorInvSqrt(vec4 r)", "{", "  return 1.79284291400159 - 0.85373472095314 * r;", "}", "", "float taylorInvSqrt(float r)", "{", "  return 1.79284291400159 - 0.85373472095314 * r;", "}", "", "vec4 grad4(float j, vec4 ip)", "  {", "  const vec4 ones = vec4(1.0, 1.0, 1.0, -1.0);", "  vec4 p,s;", "", "  p.xyz = floor( fract (vec3(j) * ip.xyz) * 7.0) * ip.z - 1.0;", "  p.w = 1.5 - dot(abs(p.xyz), ones.xyz);", "  s = vec4(lessThan(p, vec4(0.0)));", "  p.xyz = p.xyz + (s.xyz*2.0 - 1.0) * s.www;", "", "  return p;", "  }", "", "// (sqrt(5) - 1)/4 = F4, used once below", "#define F4 0.309016994374947451", "", "float snoise(vec4 v)", "  {", "  const vec4  C = vec4( 0.138196601125011,  // (5 - sqrt(5))/20  G4", "                        0.276393202250021,  // 2 * G4", "                        0.414589803375032,  // 3 * G4", "                       -0.447213595499958); // -1 + 4 * G4", "", "// First corner", "  vec4 i  = floor(v + dot(v, vec4(F4)) );", "  vec4 x0 = v -   i + dot(i, C.xxxx);", "", "// Other corners", "", "// Rank sorting originally contributed by Bill Licea-Kane, AMD (formerly ATI)", "  vec4 i0;", "  vec3 isX = step( x0.yzw, x0.xxx );", "  vec3 isYZ = step( x0.zww, x0.yyz );", "//  i0.x = dot( isX, vec3( 1.0 ) );", "  i0.x = isX.x + isX.y + isX.z;", "  i0.yzw = 1.0 - isX;", "//  i0.y += dot( isYZ.xy, vec2( 1.0 ) );", "  i0.y += isYZ.x + isYZ.y;", "  i0.zw += 1.0 - isYZ.xy;", "  i0.z += isYZ.z;", "  i0.w += 1.0 - isYZ.z;", "", "  // i0 now contains the unique values 0,1,2,3 in each channel", "  vec4 i3 = clamp( i0, 0.0, 1.0 );", "  vec4 i2 = clamp( i0-1.0, 0.0, 1.0 );", "  vec4 i1 = clamp( i0-2.0, 0.0, 1.0 );", "", "  //  x0 = x0 - 0.0 + 0.0 * C.xxxx", "  //  x1 = x0 - i1  + 1.0 * C.xxxx", "  //  x2 = x0 - i2  + 2.0 * C.xxxx", "  //  x3 = x0 - i3  + 3.0 * C.xxxx", "  //  x4 = x0 - 1.0 + 4.0 * C.xxxx", "  vec4 x1 = x0 - i1 + C.xxxx;", "  vec4 x2 = x0 - i2 + C.yyyy;", "  vec4 x3 = x0 - i3 + C.zzzz;", "  vec4 x4 = x0 + C.wwww;", "", "// Permutations", "  i = mod289(i);", "  float j0 = permute( permute( permute( permute(i.w) + i.z) + i.y) + i.x);", "  vec4 j1 = permute( permute( permute( permute (", "             i.w + vec4(i1.w, i2.w, i3.w, 1.0 ))", "           + i.z + vec4(i1.z, i2.z, i3.z, 1.0 ))", "           + i.y + vec4(i1.y, i2.y, i3.y, 1.0 ))", "           + i.x + vec4(i1.x, i2.x, i3.x, 1.0 ));", "", "// Gradients: 7x7x6 points over a cube, mapped onto a 4-cross polytope", "// 7*7*6 = 294, which is close to the ring size 17*17 = 289.", "  vec4 ip = vec4(1.0/294.0, 1.0/49.0, 1.0/7.0, 0.0) ;", "", "  vec4 p0 = grad4(j0,   ip);", "  vec4 p1 = grad4(j1.x, ip);", "  vec4 p2 = grad4(j1.y, ip);", "  vec4 p3 = grad4(j1.z, ip);", "  vec4 p4 = grad4(j1.w, ip);", "", "// Normalise gradients", "  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));", "  p0 *= norm.x;", "  p1 *= norm.y;", "  p2 *= norm.z;", "  p3 *= norm.w;", "  p4 *= taylorInvSqrt(dot(p4,p4));", "", "// Mix contributions from the five corners", "  vec3 m0 = max(0.6 - vec3(dot(x0,x0), dot(x1,x1), dot(x2,x2)), 0.0);", "  vec2 m1 = max(0.6 - vec2(dot(x3,x3), dot(x4,x4)            ), 0.0);", "  m0 = m0 * m0;", "  m1 = m1 * m1;", "  return 49.0 * ( dot(m0*m0, vec3( dot( p0, x0 ), dot( p1, x1 ), dot( p2, x2 )))", "               + dot(m1*m1, vec2( dot( p3, x3 ), dot( p4, x4 ) ) ) ) ;", "", "  }"].join("\n");
}(this.Blotter, this._), function (a, b) {
  a.Assets.Shaders.PI = ["//", "// Author : Reza Ali", "// License : Distributed under the MIT License.", "//", "", "#define TWO_PI 6.2831853072", "#define PI 3.14159265359", "#define HALF_PI 1.57079632679"].join("\n");
}(this.Blotter, this._), function (a, b) {
  a.Assets.Shaders.Random = ["//", "// Author : Patricio Gonzalez Vivo and Jen Lowe", "// License : Distributed under the MIT License.", "// Source : https://github.com/patriciogonzalezvivo/thebookofshaders", "//", "", "float random (in float _x) {", "    return fract(sin(_x)*1e4);", "}", "", "float random (in vec2 co) {", "    return fract(sin(dot(co.xy,vec2(12.9898,78.233)))*43758.5453);", "}"].join("\n");
}(this.Blotter, this._), function (a, b) {
  a.Mapping = function (a, b, c, d) {
    this.texts = a, this._textBounds = b, this._width = c, this._height = d, this._ratio = 1;
  }, a.Mapping.prototype = function () {
    function c(b, c) {
      return c = c || a.TextUtils.ensurePropertyValues().leading, isNaN(c) ? -1 !== c.toString().indexOf("px") ? c = parseInt(c) : -1 !== c.toString().indexOf("%") && (c = parseInt(c) / 100 * b) : c *= b, c;
    }return { constructor: a.Mapping, get ratio() {
        return this._ratio;
      }, set ratio(a) {
        this._ratio = a || 1;
      }, get width() {
        return this._width * this._ratio;
      }, get height() {
        return this._height * this._ratio;
      }, boundsForText: function boundsForText(b) {
        a.Messaging.ensureInstanceOf(b, a.Text, "Blotter.Text", "Blotter.Mapping", "boundsForText");var c = this._textBounds[b.id];return c && (c = { w: c.w * this._ratio, h: c.h * this._ratio, x: c.x * this._ratio, y: c.y * this._ratio }), c;
      }, toCanvas: function toCanvas(d) {
        var e = a.CanvasUtils.hiDpiCanvas(this._width, this._height, this._ratio),
            f = e.getContext("2d", { alpha: !1 }),
            g = new Image();f.textBaseline = "middle";for (var h = 0; h < this.texts.length; h++) {
          var i = this.texts[h],
              j = this._textBounds[i.id],
              k = c.call(this, i.properties.size, i.properties.leading) / 2;f.font = i.properties.style + " " + i.properties.weight + " " + i.properties.size + "px " + i.properties.family, f.save(), f.translate(j.x + i.properties.paddingLeft, this._height - (j.y + j.h) + i.properties.paddingTop), f.fillStyle = i.properties.fill, f.fillText(i.value, 0, Math.round(k)), f.restore();
        }g.onload = b.bind(function () {
          f.save(), f.scale(1, -1), f.clearRect(0, -1 * this._height, this._width, this._height), f.drawImage(g, 0, -1 * this._height, this._width, this._height), f.restore(), d(e);
        }, this), g.src = e.toDataURL("image/png");
      } };
  }();
}(this.Blotter, this._), function (a, b, c) {
  a.MappingMaterial = function (a, b, c, d) {
    this.mapping = a, this.material = b, this.shaderMaterial = c, this._userUniformDataTextureObjects = d, this.init.apply(this, arguments);
  }, a.MappingMaterial.prototype = function () {
    function d(a, b, c, d) {
      var e = d.type;"1f" == e ? (c[4 * b] = a, c[4 * b + 1] = 0, c[4 * b + 2] = 0, c[4 * b + 3] = 0) : "2f" == e ? (c[4 * b] = a[0], c[4 * b + 1] = a[1], c[4 * b + 2] = 0, c[4 * b + 3] = 0) : "3f" == e ? (c[4 * b] = a[0], c[4 * b + 1] = a[1], c[4 * b + 2] = a[2], c[4 * b + 3] = 0) : "4f" == e ? (c[4 * b] = a[0], c[4 * b + 1] = a[1], c[4 * b + 2] = a[2], c[4 * b + 3] = a[3]) : (c[4 * b] = 0, c[4 * b + 1] = 0, c[4 * b + 2] = 0, c[4 * b + 3] = 0);
    }function e(d) {
      var e = { _type: d.userUniform.type, _value: d.userUniform.value, get value() {
          return this._value;
        }, set value(b) {
          if (!a.UniformUtils.validValueForUniformType(this._type, b)) return void a.Messaging.logError("Blotter.MappingMaterial", !1, "uniform value not valid for uniform type: " + this._type);this._value = b, this.trigger("update");
        } };return b.extend(e, c.prototype), e;
    }function f(a, c) {
      return b.reduce(a.texts, function (a, f, g) {
        return a[f.id] = b.reduce(c.userUniforms, function (a, b, f) {
          var h = b.position + g;return a[f] = e(b), a[f].on("update", function () {
            d(a[f].value, h, c.data, b.userUniform), c.texture.needsUpdate = !0;
          }), a[f].value = b.userUniform.value, a;
        }, {}), a;
      }, {});
    }function g(a, c, d) {
      return b.reduce(c.userUniforms, function (f, g, h) {
        return f[h] = e(g), f[h].on("update", function () {
          b.each(a.texts, function (a) {
            d[a.id][h].value = f[h].value;
          }), c.texture.needsUpdate = !0;
        }), f;
      }, {});
    }return { constructor: a.MappingMaterial, get uniforms() {
        return this.material.uniforms;
      }, get mainImage() {
        return this.material.mainImage;
      }, get width() {
        return this.mapping.width;
      }, get height() {
        return this.mapping.height;
      }, get ratio() {
        return this.mapping.ratio;
      }, init: function init(a, b, c, d) {
        this.textUniformInterface = f(this.mapping, this._userUniformDataTextureObjects), this.uniformInterface = g(this.mapping, this._userUniformDataTextureObjects, this.textUniformInterface);
      }, boundsForText: function boundsForText(b) {
        return a.Messaging.ensureInstanceOf(b, a.Text, "Blotter.Text", "Blotter.MappingMaterial", "boundsForText"), this.mapping.boundsForText(b);
      } };
  }();
}(this.Blotter, this._, this.EventEmitter), function (a, b, c) {
  a.Material = function () {
    this.init.apply(this, arguments);
  }, a.Material.prototype = function () {
    function d() {
      return ["void mainImage( out vec4 mainImage, in vec2 fragCoord ) {", "mainImage = textTexture(fragCoord / uResolution);", "}"].join("\n");
    }function e(d) {
      var e = { _type: d.type, _value: d.value, get type() {
          return this._type;
        }, set type(a) {
          this._type = a;
        }, get value() {
          return this._value;
        }, set value(b) {
          if (!a.UniformUtils.validValueForUniformType(this._type, b)) return void a.Messaging.logError("Blotter.Material", !1, "uniform value not valid for uniform type: " + this._type);this._value = b, this.trigger("update");
        } };return b.extend(e, c.prototype), e;
    }function f(a) {
      return b.reduce(a, b.bind(function (a, c, d) {
        return a[d] = e(c), a[d].on("update", b.bind(function () {
          this.trigger("update:uniform", [d]);
        }, this)), a;
      }, this), {});
    }return { constructor: a.Material, get needsUpdate() {}, set needsUpdate(a) {
        !0 === a && this.trigger("update");
      }, get mainImage() {
        return this._mainImage;
      }, set mainImage(a) {
        this._mainImage = a || d();
      }, get uniforms() {
        return this._uniforms;
      }, set uniforms(c) {
        this._uniforms = f.call(this, a.UniformUtils.extractValidUniforms(b.extend(c, a.UniformUtils.defaultUniforms)));
      }, init: function init() {
        this.mainImage = d(), this.uniforms = {};
      } };
  }(), a._extendWithGettersSetters(a.Material.prototype, c.prototype);
}(this.Blotter, this._, this.EventEmitter), function (a, b) {
  a.ShaderMaterial = function (b, c) {
    a.Material.apply(this, arguments);
  }, a.ShaderMaterial.prototype = Object.create(a.Material.prototype), a._extendWithGettersSetters(a.ShaderMaterial.prototype, function () {
    return { constructor: a.ShaderMaterial, init: function init(a, c) {
        b.defaults(this, c), this.mainImage = a;
      } };
  }());
}(this.Blotter, this._), function (a, b, c) {
  a.RenderScope = function (b, c) {
    this.text = b, this.blotter = c, this.material = { mainImage: this.blotter.material.mainImage }, this._mappingMaterial = c.mappingMaterial, this.playing = this.blotter.autoplay, this.timeDelta = 0, this.lastDrawTime = !1, this.frameCount = 0, this.domElement = a.CanvasUtils.hiDpiCanvas(0, 0, this.blotter.ratio, { class: "b-canvas", html: b.value }), this.context = this.domElement.getContext("2d");
  }, a.RenderScope.prototype = function () {
    function d() {
      function b(b) {
        c.domElement.addEventListener(b, function (d) {
          var e = a.CanvasUtils.normalizedMousePosition(c.domElement, d);c.emit(b, e);
        }, !1);
      }for (var c = this, d = ["mousedown", "mouseup", "mousemove", "mouseenter", "mouseleave"], e = 0; e < d.length; e++) {
        b(d[e]);
      }
    }function e(a, b) {
      var c = a.boundsForText(b);if (c) return { w: c.w, h: c.h, x: -1 * Math.floor(c.x), y: -1 * Math.floor(a.height - (c.y + c.h)) };
    }function f(a, c) {
      b.each(a, function (a, b) {
        var d = c[b];if (d) {
          var e = d.type == a.type,
              f = d.value == a.value;e && !f && (d.value = a.value);
        }
      });
    }function g(d) {
      var e = { _type: d.type, _value: d.value, get type() {
          return this._type;
        }, set type(b) {
          a.Messaging.logError("Blotter.RenderScope", !1, "uniform types may not be updated through a text scope");
        }, get value() {
          return this._value;
        }, set value(b) {
          if (!a.UniformUtils.validValueForUniformType(this._type, b)) return void a.Messaging.logError("Blotter.RenderScope", !1, "uniform value not valid for uniform type: " + this._type);this._value = b, this.trigger("update");
        } };return b.extend(e, c.prototype), e;
    }function h(a) {
      return b.reduce(a, b.bind(function (a, c, d) {
        return a[d] = g(c), a[d].on("update", b.bind(function () {
          this.trigger("update:uniform", [d]);
        }, this)), a;
      }, this), {});
    }function i() {
      var b = this._mappingMaterial,
          c = b && e(b, this.text),
          d = this.material.uniforms;b && c && (a.CanvasUtils.updateCanvasSize(this.domElement, c.w / this.blotter.ratio, c.h / this.blotter.ratio, this.blotter.ratio), this.domElement.innerHTML = this.text.value, this.bounds = c, this.material.uniforms = h.call(this, b.uniforms), this.material.mainImage = b.mainImage, d && f(d, this.material.uniforms), this.trigger(this.lastUpdated ? "update" : "ready"), this.lastUpdated = Date.now());
    }return { constructor: a.RenderScope, get needsUpdate() {}, set needsUpdate(a) {
        !0 === a && i.call(this);
      }, get mappingMaterial() {}, set mappingMaterial(a) {
        this._mappingMaterial = a;
      }, play: function play() {
        this.playing = !0;
      }, pause: function pause() {
        this.playing = !1;
      }, render: function render() {
        if (this.bounds) {
          var a = Date.now();this.frameCount += 1, this.timeDelta = (a - (this.lastDrawTime || a)) / 1e3, this.lastDrawTime = a, this.context.clearRect(0, 0, this.domElement.width, this.domElement.height), this.context.putImageData(this.blotter.imageData, this.bounds.x, this.bounds.y), this.trigger("render", [this.frameCount]);
        }
      }, appendTo: function appendTo(a) {
        return "function" == typeof a.append ? a.append(this.domElement) : a.appendChild(this.domElement), d.call(this), this;
      } };
  }(), a._extendWithGettersSetters(a.RenderScope.prototype, c.prototype);
}(this.Blotter, this._, this.EventEmitter), function (a, b, c, d) {
  var e = this;a.Renderer = function () {
    this._currentAnimationLoop = !1, this._scene = new c.Scene(), this._plane = new c.PlaneGeometry(1, 1), this._material = new c.MeshBasicMaterial(), this._mesh = new c.Mesh(this._plane, this._material), this._scene.add(this._mesh), this._camera = new c.OrthographicCamera(.5, .5, .5, .5, 0, 100), this.init.apply(this, arguments);
  }, a.Renderer.prototype = function () {
    function d(a, b) {
      var d = new c.WebGLRenderTarget(a, b, { minFilter: c.LinearFilter, magFilter: c.LinearFilter, format: c.RGBAFormat, type: c.UnsignedByteType });return d.texture.generateMipmaps = !1, d.width = a, d.height = b, d;
    }function f() {
      a.webglRenderer.render(this._scene, this._camera, this._renderTarget), a.webglRenderer.readRenderTargetPixels(this._renderTarget, 0, 0, this._renderTarget.width, this._renderTarget.height, this._imageDataArray), this.trigger("render"), this._currentAnimationLoop = e.requestAnimationFrame(b.bind(f, this));
    }return { constructor: a.Renderer, get material() {}, set material(a) {
        a instanceof c.Material && (this._material = a, this._mesh.material = a);
      }, get width() {
        return this._width;
      }, set width(a) {
        this.setSize(a, this._height);
      }, get height() {
        return this._height;
      }, set height(a) {
        this.setSize(this._width, a);
      }, init: function init() {
        this.setSize(1, 1);
      }, start: function start() {
        this._currentAnimationLoop || f.call(this);
      }, stop: function stop() {
        this._currentAnimationLoop && (e.cancelAnimationFrame(this._currentAnimationLoop), this._currentAnimationLoop = void 0);
      }, setSize: function setSize(a, b) {
        this._width = a || 1, this._height = b || 1, this._mesh.scale.set(this._width, this._height, 1), this._camera.left = this._width / -2, this._camera.right = this._width / 2, this._camera.top = this._height / 2, this._camera.bottom = this._height / -2, this._camera.updateProjectionMatrix(), this._renderTarget = d(this._width, this._height), this._viewBuffer = new ArrayBuffer(this._width * this._height * 4), this._imageDataArray = new Uint8Array(this._viewBuffer), this._clampedImageDataArray = new Uint8ClampedArray(this._viewBuffer), this.imageData = new ImageData(this._clampedImageDataArray, this._width, this._height);
      }, teardown: function teardown() {
        this.stop();
      } };
  }(), a._extendWithGettersSetters(a.Renderer.prototype, d.prototype);
}(this.Blotter, this._, this.THREE, this.EventEmitter), function (a, b, c, d) {
  a.BoundsDataTextureBuilder = function () {
    function a(a) {
      for (var b = a.texts, c = new Float32Array(4 * b.length), d = 0; d < b.length; d++) {
        var e = b[d],
            f = a.boundsForText(e);c[4 * d] = f.x, c[4 * d + 1] = a.height - (f.y + f.h), c[4 * d + 2] = f.w, c[4 * d + 3] = f.h;
      }return c;
    }return { build: function build(b, e) {
        d(function () {
          var d = a(b),
              f = new c.DataTexture(d, b.texts.length, 1, c.RGBAFormat, c.FloatType);f.needsUpdate = !0, e(f);
        });
      } };
  }();
}(this.Blotter, this._, this.THREE, this.setImmediate), function (a, b, c, d) {
  a.IndicesDataTextureBuilder = function () {
    function a(a, b, c, d) {
      for (var e = a.ratio, f = new Float32Array(c * b * 4), g = b % 1, h = 1 / a.texts.length / 2, i = 1; i < f.length / 4; i++) {
        for (var j = Math.ceil(i / (b - g)), k = i - (b - g) * (j - 1), l = 0, m = 0, n = 0, o = 0; o < a.texts.length; o++) {
          var p = a.texts[o],
              q = a.boundsForText(p),
              r = q.w / e * d,
              s = q.h / e * d,
              t = q.x / e * d,
              u = q.y / e * d;if (j >= u && j <= u + s && k >= t && k <= t + r) {
            l = o / a.texts.length + h, n = 1;break;
          }
        }var v = i - 1;f[4 * v + 0] = l, f[4 * v + 1] = m, f[4 * v + 2] = m, f[4 * v + 3] = n;
      }return f;
    }return { build: function build(b, e) {
        var f = .5;d(function () {
          var d = b.width / b.ratio * f,
              g = b.height / b.ratio * f,
              h = a(b, d, g, f),
              i = new c.DataTexture(h, d, g, c.RGBAFormat, c.FloatType);i.flipY = !0, i.needsUpdate = !0, e(i);
        });
      } };
  }();
}(this.Blotter, this._, this.THREE, this.setImmediate), function (a, b, c) {
  a.TextTextureBuilder = function () {
    return { build: function build(a, d) {
        var e,
            f = new c.TextureLoader();a.toCanvas(b.bind(function (a) {
          e = a.toDataURL(), f.load(e, b.bind(function (a) {
            a.minFilter = c.LinearFilter, a.magFilter = c.LinearFilter, a.generateMipmaps = !0, a.needsUpdate = !0, d(a);
          }, this));
        }, this));
      } };
  }();
}(this.Blotter, this._, this.THREE), function (a, b, c, d, e) {
  a.MappingBuilder = function () {
    function c(a, b) {
      var c = a.w * a.h;return b.w * b.h - c;
    }function f(c) {
      return b.reduce(c, function (b, c) {
        var d = a.TextUtils.sizeForText(c.value, c.properties);return b[c.id] = d, b;
      }, []);
    }return { build: function build(b, g) {
        e(function () {
          var e = a.TextUtils.filterTexts(b),
              h = f(e),
              i = new d(),
              j = [],
              k = {};for (var l in h) {
            if (h.hasOwnProperty(l)) {
              var m = h[l];m.referenceId = l, j.push(m);
            }
          }i.fit(j.sort(c));for (var n = 0; n < j.length; n++) {
            var o = j[n];k[o.referenceId] = { w: o.w, h: o.h, x: o.fit.x, y: i.root.h - (o.fit.y + o.h) };
          }g(new a.Mapping(e, k, i.root.w, i.root.h));
        });
      } };
  }();
}(this.Blotter, this._, this.THREE, this.GrowingPacker, this.setImmediate), function (a, b, c) {
  a.MappingMaterialBuilder = function () {
    function d() {
      return ["varying vec2 _vTexCoord;", "void main() {", "  _vTexCoord = uv;", "  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);", "}"].join("\n");
    }function e(c, d, e) {
      var f,
          g = { publicUniformDeclarations: "", publicUniformDefinitions: "" },
          h = (1 / c.data.length / 2).toFixed(20),
          i = c.texture.image.width.toFixed(1);return b.reduce(c.userUniforms, function (b, c, e) {
        var f = a.UniformUtils.fullSwizzleStringForUniformType(c.userUniform.type),
            g = a.UniformUtils.glslDataTypeForUniformType(c.userUniform.type),
            j = "((" + c.position.toFixed(1) + " + ((textIndex - ((1.0 / " + d.toFixed(1) + ") / 2.0)) * " + d.toFixed(1) + ")) / " + i + ") + " + h;return b.publicUniformDeclarations += g + " " + e + ";\n", b.publicUniformDefinitions += "   " + e + " = texture2D(_userUniformsTexture, vec2(" + j + ", 0.5))." + f + ";\n", b;
      }, g), f = [a.Assets.Shaders.Blending, a.Assets.Shaders.TextTexture, "uniform sampler2D _uSampler;", "uniform vec2 _uCanvasResolution;", "uniform sampler2D _uTextIndicesTexture;", "uniform sampler2D _uTextBoundsTexture;", "varying vec2 _vTexCoord;", "vec4 _textBounds;", "uniform sampler2D _userUniformsTexture;", g.publicUniformDeclarations, "// Helper function used by user programs to retrieve texel color information within the bounds of", "// any given text. This is to be used instead of `texture2D` in the fragment sources for all Blotter materials.", "vec4 textTexture(vec2 coord) {", "   vec2 adjustedFragCoord = _textBounds.xy + vec2((_textBounds.z * coord.x), (_textBounds.w * coord.y));", "   vec2 uv = adjustedFragCoord.xy / _uCanvasResolution;", "   //  If adjustedFragCoord falls outside the bounds of the current texel's text, return `vec4(0.0)`.", "   if (adjustedFragCoord.x < _textBounds.x ||", "       adjustedFragCoord.x > _textBounds.x + _textBounds.z ||", "       adjustedFragCoord.y < _textBounds.y ||", "       adjustedFragCoord.y > _textBounds.y + _textBounds.w) {", "     return vec4(0.0);", "   }", "   return texture2D(_uSampler, uv);", "}", "void mainImage(out vec4 mainImage, in vec2 fragCoord);", e, "void main(void) {", "   vec4 textIndexData = texture2D(_uTextIndicesTexture, _vTexCoord);", "   float textIndex = textIndexData.r;", "   float textAlpha = textIndexData.a;", "   _textBounds = texture2D(_uTextBoundsTexture, vec2(textIndex, 0.5));", g.publicUniformDefinitions, "   uResolution = _textBounds.zw;", "   vec2 fragCoord = gl_FragCoord.xy - _textBounds.xy;", "   vec4 outColor;", "   mainImage(outColor, fragCoord);", "   outColor.a = outColor.a * textAlpha;", "   gl_FragColor = outColor;", "}"], f.join("\n");
    }function f(b, c) {
      a.TextTextureBuilder.build(b, function (a) {
        c(a);
      });
    }function g(c, d) {
      var e,
          f,
          g,
          h = [];e = function e() {
        return function (b) {
          a.IndicesDataTextureBuilder.build(c, function (a) {
            h.push({ uniformName: "_uTextIndicesTexture", texture: a }), b();
          });
        };
      }, f = function f() {
        return function (b) {
          a.BoundsDataTextureBuilder.build(c, function (a) {
            h.push({ uniformName: "_uTextBoundsTexture", texture: a }), b();
          });
        };
      }, g = [e(), f()], b(g).reduceRight(b.wrap, function () {
        d(h);
      })();
    }function h(d, e, f) {
      a.UniformUtils.ensureHasRequiredDefaultUniforms(d, "Blotter.MappingMaterialBuilder", "_buildUserUniformDataTextureObjects"), d = a.UniformUtils.extractValidUniforms(d);var g = Object.keys(d).length * e,
          h = new Float32Array(4 * g),
          i = new c.DataTexture(h, g, 1, c.RGBAFormat, c.FloatType),
          j = { data: h, texture: i, userUniforms: {} };b.reduce(d, function (a, b, c) {
        var f = Object.keys(d).indexOf(c) * e;return a.userUniforms[c] = { userUniform: b, position: f }, a;
      }, j), f(j);
    }function i(a) {
      return b.reduce(a, function (a, b) {
        return a[b.uniformName] = { type: "t", value: b.texture }, a;
      }, {});
    }function j(a) {
      return { _userUniformsTexture: { type: "t", value: a.texture } };
    }function k(a, c, d, e, f) {
      var g = { _uSampler: { type: "t", value: d }, _uCanvasResolution: { type: "2f", value: [a, c] } };return b.extend(g, i(e)), b.extend(g, j(f)), g;
    }function l(a, b, d) {
      var e = new c.ShaderMaterial({ vertexShader: a, fragmentShader: b, uniforms: d });return e.depthTest = !1, e.depthWrite = !1, e.premultipliedAlpha = !1, e;
    }return { build: function build(c, i, j) {
        var m, n, o, p, q;m = function m() {
          return function (a) {
            f(c, function (b) {
              o = b, a();
            });
          };
        }, n = function n() {
          return function (a) {
            g(c, function (b) {
              p = b, a();
            });
          };
        }, buildUserUniformDataTextureObjects = function buildUserUniformDataTextureObjects() {
          return function (a) {
            h(i.uniforms, c.texts.length, function (b) {
              userUniformDataTextureObjects = b, a();
            });
          };
        }, q = [m(), n(), buildUserUniformDataTextureObjects()], b(q).reduceRight(b.wrap, function () {
          var f = k(c.width, c.height, o, p, userUniformDataTextureObjects),
              g = (b.omit(f, "_uCanvasResolution", "_uSampler", "_uTextBoundsTexture", "_uTextIndicesTexture"), l(d(), e(userUniformDataTextureObjects, c.texts.length, i.mainImage), f));j(new a.MappingMaterial(c, i, g, userUniformDataTextureObjects));
        })();
      } };
  }();
}(this.Blotter, this._, this.THREE);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/global.js */ 69), __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ 70)(module)))

/***/ }),
/* 69 */
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 70 */
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 71 */
/*!*****************************************************!*\
  !*** ./app/javascript/libs/channelSplitMaterial.js ***!
  \*****************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

(function (Blotter) {

        Blotter.ChannelSplitMaterial = function () {
                Blotter.Material.apply(this, arguments);
        };

        Blotter.ChannelSplitMaterial.prototype = Object.create(Blotter.Material.prototype);

        Blotter._extendWithGettersSetters(Blotter.ChannelSplitMaterial.prototype, function () {

                function _mainImageSrc() {
                        var mainImageSrc = [Blotter.Assets.Shaders.PI, Blotter.Assets.Shaders.LineMath, Blotter.Assets.Shaders.Random, "const int MAX_STEPS = 200;", "// Fix a floating point number to two decimal places", "float toFixedTwo(float f) {", "    return float(int(f * 100.0)) / 100.0;", "}", "vec2 motionBlurOffsets(vec2 fragCoord, float deg, float spread) {", "    // Setup", "    // -------------------------------", "    vec2 centerUv = vec2(0.5);", "    vec2 centerCoord = uResolution.xy * centerUv;", "    deg = toFixedTwo(deg);", "    float slope = normalizedSlope(slopeForDegrees(deg), uResolution.xy);", "    // Find offsets", "    // -------------------------------", "    vec2 k = offsetsForCoordAtDistanceOnSlope(spread, slope);", "    if (deg <= 90.0 || deg >= 270.0) {", "        k *= -1.0;", "    }", "    return k;", "}", "float noiseWithWidthAtUv(float width, vec2 uv) {", "    float noiseModifier = 1.0;", "    if (uAnimateNoise > 0.0) {", "        noiseModifier = sin(uGlobalTime);", "    }", "    vec2 noiseRowCol = floor((uv * uResolution.xy) / width);", "    vec2 noiseFragCoord = ((noiseRowCol * width) + (width / 2.0));", "    vec2 noiseUv = noiseFragCoord / uResolution.xy;", "    return random(noiseUv * noiseModifier) * 0.125;", "}", "vec4 motionBlur(vec2 uv, vec2 blurOffset, float maxOffset) {", "    float noiseWidth = 3.0;", "    float randNoise = noiseWithWidthAtUv(noiseWidth, uv);", "    vec4 result = textTexture(uv);", "    float maxStepsReached = 0.0;", "    // Note: Step by 2 to optimize performance. We conceal lossiness here via applied noise.", "    //   If you do want maximum fidelity, change `i += 2` to `i += 1` below.", "    for (int i = 1; i <= MAX_STEPS; i += 2) {", "        if (abs(float(i)) > maxOffset) { break; }", "        maxStepsReached += 1.0;", "        // Divide blurOffset by 2.0 so that motion blur starts half way behind itself", "        //   preventing blur from shoving samples in any direction", "        vec2 offset = (blurOffset / 2.0) - (blurOffset * (float(i) / maxOffset));", "        vec4 stepSample = textTexture(uv + (offset / uResolution.xy));",, "        result += stepSample;", "    }", "    if (maxOffset >= 1.0) {", "        result /= maxStepsReached;", "        //result.a = pow(result.a, 2.0); // Apply logarithmic smoothing to alpha", "        result.a -= (randNoise * (1.0 - result.a)); // Apply noise to smoothed alpha", "    }", "    return result;", "}", "void mainImage( out vec4 mainImage, in vec2 fragCoord ) {", "    // Setup", "    // -------------------------------", "    vec2 uv = fragCoord.xy / uResolution.xy;", "    float offset = min(float(MAX_STEPS), uResolution.y * uOffset);", "    float slope = normalizedSlope(slopeForDegrees(uRotation), uResolution);", "    // We want the blur to be the full offset amount in each direction", "    //   and to adjust with our logarithmic adjustment made later, so multiply by 4", "    float adjustedOffset = offset;// * 4.0;", "    vec2 blurOffset = motionBlurOffsets(fragCoord, uRotation, adjustedOffset);", "    // Set Starting Points", "    // -------------------------------", "    vec2 rUv = uv;", "    vec2 gUv = uv;", "    vec2 bUv = uv;", "    vec2 k = offsetsForCoordAtDistanceOnSlope(offset, slope) / uResolution;", "    if (uRotation <= 90.0 || uRotation >= 270.0) {", "        rUv += k;", "        bUv -= k;", "    }", "    else {", "        rUv -= k;", "        bUv += k;", "    }", "    // Blur and Split Channels", "    // -------------------------------", "    vec4 resultR = vec4(0.0);", "    vec4 resultG = vec4(0.0);", "    vec4 resultB = vec4(0.0);", "    if (uApplyBlur > 0.0) {", "        resultR = motionBlur(rUv, blurOffset, adjustedOffset);", "        resultG = motionBlur(gUv, blurOffset, adjustedOffset);", "        resultB = motionBlur(bUv, blurOffset, adjustedOffset);", "    } else {", "        resultR = textTexture(rUv);", "        resultG = textTexture(gUv);", "        resultB = textTexture(bUv);", "    }", "    float a = resultR.a + resultG.a + resultB.a;", "    resultR = normalBlend(resultR, uBlendColor);", "    resultG = normalBlend(resultG, uBlendColor);", "    resultB = normalBlend(resultB, uBlendColor);", "    mainImage = vec4(resultR.r, resultG.g, resultB.b, a);", "}"].join("\n");

                        return mainImageSrc;
                }

                return {

                        constructor: Blotter.ChannelSplitMaterial,

                        init: function init() {
                                this.mainImage = _mainImageSrc();
                                this.uniforms = {
                                        uOffset: { type: "1f", value: 0.05 },
                                        uRotation: { type: "1f", value: 45.0 },
                                        uApplyBlur: { type: "1f", value: 1.0 },
                                        uAnimateNoise: { type: "1f", value: 1.0 }
                                };
                        }
                };
        }());
})(this.Blotter);

/***/ }),
/* 72 */
/*!******************************************************!*\
  !*** ./app/javascript/libs/jquery.pagepiling.min.js ***!
  \******************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {/*!
 * pagepiling.js 1.5.4
 *
 * https://github.com/alvarotrigo/pagePiling.js
 * @license MIT licensed
 *
 * Copyright (C) 2016 alvarotrigo.com - A project by Alvaro Trigo
 */
!function (e, n, t, o) {
  "use strict";
  e.fn.pagepiling = function (i) {
    function a(e) {
      e.addClass("pp-table").wrapInner('<div class="pp-tableCell" style="height:100%" />');
    }function s(n) {
      var t = e(".pp-section.active").index(".pp-section"),
          o = n.index(".pp-section");return t > o ? "up" : "down";
    }function c(n, t) {
      var o = { destination: n, animated: t, activeSection: e(".pp-section.active"), anchorLink: n.data("anchor"), sectionIndex: n.index(".pp-section"), toMove: n, yMovement: s(n), leavingSection: e(".pp-section.active").index(".pp-section") + 1 };if (!o.activeSection.is(n)) {
        "undefined" == typeof o.animated && (o.animated = !0), "undefined" != typeof o.anchorLink && v(o.anchorLink, o.sectionIndex), o.destination.addClass("active").siblings().removeClass("active"), o.sectionsToMove = p(o), "down" === o.yMovement ? (o.translate3d = U(), o.scrolling = "-100%", Z.css3 || o.sectionsToMove.each(function (n) {
          n != o.activeSection.index(".pp-section") && e(this).css(u(o.scrolling));
        }), o.animateSection = o.activeSection) : (o.translate3d = "translate3d(0px, 0px, 0px)", o.scrolling = "0", o.animateSection = n), e.isFunction(Z.onLeave) && Z.onLeave.call(this, o.leavingSection, o.sectionIndex + 1, o.yMovement), r(o), A(o.anchorLink), z(o.anchorLink, o.sectionIndex), W = o.anchorLink;var i = new Date().getTime();Q = i;
      }
    }function r(n) {
      Z.css3 ? (w(n.animateSection, n.translate3d, n.animated), n.sectionsToMove.each(function () {
        w(e(this), n.translate3d, n.animated);
      }), setTimeout(function () {
        l(n);
      }, Z.scrollingSpeed)) : (n.scrollOptions = u(n.scrolling), n.animated ? n.animateSection.animate(n.scrollOptions, Z.scrollingSpeed, Z.easing, function () {
        d(n), l(n);
      }) : (n.animateSection.css(u(n.scrolling)), setTimeout(function () {
        d(n), l(n);
      }, 400)));
    }function l(n) {
      e.isFunction(Z.afterLoad) && Z.afterLoad.call(this, n.anchorLink, n.sectionIndex + 1);
    }function p(n) {
      var t;return t = "down" === n.yMovement ? e(".pp-section").map(function (t) {
        if (t < n.destination.index(".pp-section")) return e(this);
      }) : e(".pp-section").map(function (t) {
        if (t > n.destination.index(".pp-section")) return e(this);
      });
    }function d(n) {
      "up" === n.yMovement && n.sectionsToMove.each(function (t) {
        e(this).css(u(n.scrolling));
      });
    }function u(e) {
      return "vertical" === Z.direction ? { top: e } : { left: e };
    }function v(e, n) {
      Z.anchors.length ? (location.hash = e, f(location.hash)) : f(String(n));
    }function f(n) {
      n = n.replace("#", ""), e("body")[0].className = e("body")[0].className.replace(/\b\s?pp-viewing-[^\s]+\b/g, ""), e("body").addClass("pp-viewing-" + n);
    }function h() {
      var o = t.location.hash.replace("#", ""),
          i = o,
          a = e(n).find('.pp-section[data-anchor="' + i + '"]');a.length > 0 && c(a, Z.animateAnchor);
    }function m() {
      var e = new Date().getTime();return e - Q < J + Z.scrollingSpeed;
    }function g() {
      var o = t.location.hash.replace("#", "").split("/"),
          i = o[0];if (i.length && i && i !== W) {
        var a;a = isNaN(i) ? e(n).find('[data-anchor="' + i + '"]') : e(".pp-section").eq(i - 1), c(a);
      }
    }function S(e) {
      return { "-webkit-transform": e, "-moz-transform": e, "-ms-transform": e, transform: e };
    }function w(e, n, t) {
      e.toggleClass("pp-easing", t), e.css(S(n));
    }function b(n) {
      var o = new Date().getTime();n = n || t.event;var i = n.wheelDelta || -n.deltaY || -n.detail,
          a = Math.max(-1, Math.min(1, i)),
          s = "undefined" != typeof n.wheelDeltaX || "undefined" != typeof n.deltaX,
          c = Math.abs(n.wheelDeltaX) < Math.abs(n.wheelDelta) || Math.abs(n.deltaX) < Math.abs(n.deltaY) || !s;G.length > 149 && G.shift(), G.push(Math.abs(i));var r = o - _;if (_ = o, r > 200 && (G = []), !m()) {
        var l = e(".pp-section.active"),
            p = T(l),
            d = y(G, 10),
            u = y(G, 70),
            v = d >= u;return v && c && (a < 0 ? x("down", p) : a > 0 && x("up", p)), !1;
      }
    }function y(e, n) {
      for (var t = 0, o = e.slice(Math.max(e.length - n, 1)), i = 0; i < o.length; i++) {
        t += o[i];
      }return Math.ceil(t / n);
    }function x(e, n) {
      var t, o;if ("down" == e ? (t = "bottom", o = B.moveSectionDown) : (t = "top", o = B.moveSectionUp), n.length > 0) {
        if (!M(t, n)) return !0;o();
      } else o();
    }function M(e, n) {
      return "top" === e ? !n.scrollTop() : "bottom" === e ? n.scrollTop() + 1 + n.innerHeight() >= n[0].scrollHeight : void 0;
    }function T(e) {
      return e.filter(".pp-scrollable");
    }function C() {
      F.get(0).addEventListener ? (F.get(0).removeEventListener("mousewheel", b, !1), F.get(0).removeEventListener("wheel", b, !1)) : F.get(0).detachEvent("onmousewheel", b);
    }function k() {
      F.get(0).addEventListener ? (F.get(0).addEventListener("mousewheel", b, !1), F.get(0).addEventListener("wheel", b, !1)) : F.get(0).attachEvent("onmousewheel", b);
    }function E() {
      if (R) {
        var e = D();F.off("touchstart " + e.down).on("touchstart " + e.down, P), F.off("touchmove " + e.move).on("touchmove " + e.move, Y);
      }
    }function L() {
      if (R) {
        var e = D();F.off("touchstart " + e.down), F.off("touchmove " + e.move);
      }
    }function D() {
      var e;return e = t.PointerEvent ? { down: "pointerdown", move: "pointermove", up: "pointerup" } : { down: "MSPointerDown", move: "MSPointerMove", up: "MSPointerUp" };
    }function I(e) {
      var n = new Array();return n.y = "undefined" != typeof e.pageY && (e.pageY || e.pageX) ? e.pageY : e.touches[0].pageY, n.x = "undefined" != typeof e.pageX && (e.pageY || e.pageX) ? e.pageX : e.touches[0].pageX, n;
    }function X(e) {
      return "undefined" == typeof e.pointerType || "mouse" != e.pointerType;
    }function P(e) {
      var n = e.originalEvent;if (X(n)) {
        var t = I(n);j = t.y, H = t.x;
      }
    }function Y(n) {
      var t = n.originalEvent;if (!N(n.target) && X(t)) {
        var o = e(".pp-section.active"),
            i = T(o);if (i.length || n.preventDefault(), !m()) {
          var a = I(t);K = a.y, V = a.x, "horizontal" === Z.direction && Math.abs(H - V) > Math.abs(j - K) ? Math.abs(H - V) > F.width() / 100 * Z.touchSensitivity && (H > V ? x("down", i) : V > H && x("up", i)) : Math.abs(j - K) > F.height() / 100 * Z.touchSensitivity && (j > K ? x("down", i) : K > j && x("up", i));
        }
      }
    }function N(n, t) {
      t = t || 0;var o = e(n).parent();return !!(t < Z.normalScrollElementTouchThreshold && o.is(Z.normalScrollElements)) || t != Z.normalScrollElementTouchThreshold && N(o, ++t);
    }function q() {
      e("body").append('<div id="pp-nav"><ul></ul></div>');var n = e("#pp-nav");n.css("color", Z.navigation.textColor), n.addClass(Z.navigation.position);for (var t = 0; t < e(".pp-section").length; t++) {
        var o = "";if (Z.anchors.length && (o = Z.anchors[t]), "undefined" !== Z.navigation.tooltips) {
          var i = Z.navigation.tooltips[t];"undefined" == typeof i && (i = "");
        }n.find("ul").append('<li data-tooltip="' + i + '"><a href="#' + o + '"><span></span></a></li>');
      }n.find("span").css("border-color", Z.navigation.bulletsColor);
    }function z(n, t) {
      Z.navigation && (e("#pp-nav").find(".active").removeClass("active"), n ? e("#pp-nav").find('a[href="#' + n + '"]').addClass("active") : e("#pp-nav").find("li").eq(t).find("a").addClass("active"));
    }function A(n) {
      Z.menu && (e(Z.menu).find(".active").removeClass("active"), e(Z.menu).find('[data-menuanchor="' + n + '"]').addClass("active"));
    }function O() {
      var e,
          i = n.createElement("p"),
          a = { webkitTransform: "-webkit-transform", OTransform: "-o-transform", msTransform: "-ms-transform", MozTransform: "-moz-transform", transform: "transform" };n.body.insertBefore(i, null);for (var s in a) {
        i.style[s] !== o && (i.style[s] = "translate3d(1px,1px,1px)", e = t.getComputedStyle(i).getPropertyValue(a[s]));
      }return n.body.removeChild(i), e !== o && e.length > 0 && "none" !== e;
    }function U() {
      return "vertical" !== Z.direction ? "translate3d(-100%, 0px, 0px)" : "translate3d(0px, -100%, 0px)";
    }var W,
        B = e.fn.pagepiling,
        F = e(this),
        Q = 0,
        R = "ontouchstart" in t || navigator.msMaxTouchPoints > 0 || navigator.maxTouchPoints,
        j = 0,
        H = 0,
        K = 0,
        V = 0,
        G = [],
        J = 600,
        Z = e.extend(!0, { direction: "vertical", menu: null, verticalCentered: !0, sectionsColor: [], anchors: [], scrollingSpeed: 700, easing: "easeInQuart", loopBottom: !1, loopTop: !1, css3: !0, navigation: { textColor: "#000", bulletsColor: "#000", position: "right", tooltips: [] }, normalScrollElements: null, normalScrollElementTouchThreshold: 5, touchSensitivity: 5, keyboardScrolling: !0, sectionSelector: ".section", animateAnchor: !1, afterLoad: null, onLeave: null, afterRender: null }, i);e.extend(e.easing, { easeInQuart: function easeInQuart(e, n, t, o, i) {
        return o * (n /= i) * n * n * n + t;
      } }), B.setScrollingSpeed = function (e) {
      Z.scrollingSpeed = e;
    }, B.setMouseWheelScrolling = function (e) {
      e ? k() : C();
    }, B.setAllowScrolling = function (e) {
      e ? (B.setMouseWheelScrolling(!0), E()) : (B.setMouseWheelScrolling(!1), L());
    }, B.setKeyboardScrolling = function (e) {
      Z.keyboardScrolling = e;
    }, B.moveSectionUp = function () {
      var n = e(".pp-section.active").prev(".pp-section");!n.length && Z.loopTop && (n = e(".pp-section").last()), n.length && c(n);
    }, B.moveSectionDown = function () {
      var n = e(".pp-section.active").next(".pp-section");!n.length && Z.loopBottom && (n = e(".pp-section").first()), n.length && c(n);
    }, B.moveTo = function (t) {
      var o = "";o = isNaN(t) ? e(n).find('[data-anchor="' + t + '"]') : e(".pp-section").eq(t - 1), o.length > 0 && c(o);
    }, e(Z.sectionSelector).each(function () {
      e(this).addClass("pp-section");
    }), Z.css3 && (Z.css3 = O()), e(F).css({ overflow: "hidden", "-ms-touch-action": "none", "touch-action": "none" }), B.setAllowScrolling(!0), e.isEmptyObject(Z.navigation) || q();var $ = e(".pp-section").length;e(".pp-section").each(function (n) {
      e(this).data("data-index", n), e(this).css("z-index", $), n || 0 !== e(".pp-section.active").length || e(this).addClass("active"), "undefined" != typeof Z.anchors[n] && e(this).attr("data-anchor", Z.anchors[n]), "undefined" != typeof Z.sectionsColor[n] && e(this).css("background-color", Z.sectionsColor[n]), Z.verticalCentered && !e(this).hasClass("pp-scrollable") && a(e(this)), $ -= 1;
    }).promise().done(function () {
      Z.navigation && (e("#pp-nav").css("margin-top", "-" + e("#pp-nav").height() / 2 + "px"), e("#pp-nav").find("li").eq(e(".pp-section.active").index(".pp-section")).find("a").addClass("active")), e(t).on("load", function () {
        h();
      }), e.isFunction(Z.afterRender) && Z.afterRender.call(this);
    }), e(t).on("hashchange", g), e(n).keydown(function (n) {
      if (Z.keyboardScrolling && !m()) switch (n.which) {case 38:case 33:
          B.moveSectionUp();break;case 40:case 34:
          B.moveSectionDown();break;case 36:
          B.moveTo(1);break;case 35:
          B.moveTo(e(".pp-section").length);break;case 37:
          B.moveSectionUp();break;case 39:
          B.moveSectionDown();break;default:
          return;}
    }), Z.normalScrollElements && (e(n).on("mouseenter", Z.normalScrollElements, function () {
      B.setMouseWheelScrolling(!1);
    }), e(n).on("mouseleave", Z.normalScrollElements, function () {
      B.setMouseWheelScrolling(!0);
    }));var _ = new Date().getTime();e(n).on("click touchstart", "#pp-nav a", function (n) {
      n.preventDefault();var t = e(this).parent().index();c(e(".pp-section").eq(t));
    }), e(n).on({ mouseenter: function mouseenter() {
        var n = e(this).data("tooltip");e('<div class="pp-tooltip ' + Z.navigation.position + '">' + n + "</div>").hide().appendTo(e(this)).fadeIn(200);
      }, mouseleave: function mouseleave() {
        e(this).find(".pp-tooltip").fadeOut(200, function () {
          e(this).remove();
        });
      } }, "#pp-nav li");
  };
}(jQuery, document, window);
//# sourceMappingURL=jquery.pagepiling.min.js.map
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! jquery */ 19)))

/***/ }),
/* 73 */
/*!*************************************************!*\
  !*** ./node_modules/jquery/src/var/getProto.js ***!
  \*************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
	"use strict";

	return Object.getPrototypeOf;
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 74 */
/*!*************************************************************!*\
  !*** ./node_modules/jquery/src/var/ObjectFunctionString.js ***!
  \*************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ./fnToString */ 43)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( fnToString ) {
	"use strict";

	return fnToString.call( Object );
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 75 */
/*!******************************************************!*\
  !*** ./node_modules/jquery/src/css/var/rboxStyle.js ***!
  \******************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ./cssExpand */ 28)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( cssExpand ) {
	"use strict";

	return new RegExp( cssExpand.join( "|" ), "i" );
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 76 */
/*!****************************************************!*\
  !*** ./node_modules/jquery/src/selector-sizzle.js ***!
  \****************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ./core */ 0),
	__webpack_require__(/*! ../external/sizzle/dist/sizzle */ 77)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery, Sizzle ) {

"use strict";

jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;

}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 77 */
/*!************************************************************!*\
  !*** ./node_modules/jquery/external/sizzle/dist/sizzle.js ***!
  \************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * Sizzle CSS Selector Engine v2.3.3
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-08-08
 */
(function( window ) {

var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ({}).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[i] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
		"*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

	rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox<24
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			high < 0 ?
				// BMP codepoint
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	disabledAncestor = addCombinator(
		function( elem ) {
			return elem.disabled === true && ("form" in elem || "label" in elem);
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		(arr = slice.call( preferredDoc.childNodes )),
		preferredDoc.childNodes
	);
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++] = els[i++]) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {

		if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
			setDocument( context );
		}
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

				// ID selector
				if ( (m = match[1]) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( (elem = context.getElementById( m )) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && (elem = newContext.getElementById( m )) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[2] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( (m = match[3]) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!compilerCache[ selector + " " ] &&
				(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {

				if ( nodeType !== 1 ) {
					newContext = context;
					newSelector = selector;

				// qSA looks outside Element context, which is not what we want
				// Thanks to Andrew Dupont for this workaround technique
				// Support: IE <=8
				// Exclude object elements
				} else if ( context.nodeName.toLowerCase() !== "object" ) {

					// Capture the context ID, setting it first if necessary
					if ( (nid = context.getAttribute( "id" )) ) {
						nid = nid.replace( rcssescape, fcssescape );
					} else {
						context.setAttribute( "id", (nid = expando) );
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[i] = "#" + nid + " " + toSelector( groups[i] );
					}
					newSelector = groups.join( "," );

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;
				}

				if ( newSelector ) {
					try {
						push.apply( results,
							newContext.querySelectorAll( newSelector )
						);
						return results;
					} catch ( qsaError ) {
					} finally {
						if ( nid === expando ) {
							context.removeAttribute( "id" );
						}
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key + " " ] = value);
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement("fieldset");

	try {
		return !!fn( el );
	} catch (e) {
		return false;
	} finally {
		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}
		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split("|"),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[i] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
						disabledAncestor( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	// documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833)
	var documentElement = elem && (elem.ownerDocument || elem).documentElement;
	return documentElement ? documentElement.nodeName !== "HTML" : false;
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9-11, Edge
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	if ( preferredDoc !== document &&
		(subWindow = document.defaultView) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert(function( el ) {
		el.className = "i";
		return !el.getAttribute("className");
	});

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function( el ) {
		el.appendChild( document.createComment("") );
		return !el.getElementsByTagName("*").length;
	});

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	});

	// ID filter and find
	if ( support.getById ) {
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode("id");
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( (elem = elems[i++]) ) {
						node = elem.getAttributeNode("id");
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find["TAG"] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( el ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll("[msallowcapture^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push("~=");
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push(".#.+[+~]");
			}
		});

		assert(function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement("input");
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll("[name=d]").length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll(":enabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll(":disabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( el ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

			// Choose the first element that is related to our preferred document
			if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
				return -1;
			}
			if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {
		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {
			return a === document ? -1 :
				b === document ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	// Make sure that attribute selectors are quoted
	expr = expr.replace( rattributeQuotes, "='$1']" );

	if ( support.matchesSelector && documentIsHTML &&
		!compilerCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch (e) {}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],
		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			(val = elem.getAttributeNode(name)) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return (sel + "").replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( (elem = results[i++]) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		while ( (node = elem[i++]) ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[6] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[3] ) {
				match[2] = match[4] || match[5] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() { return true; } :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || (node[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								(outerCache[ node.uniqueID ] = {});

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {
							// Use previously-cached element index if available
							if ( useCache ) {
								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {
								// Use the same loop as above to seek `elem` from the start
								while ( (node = ++nodeIndex && node && node[ dir ] ||
									(diff = nodeIndex = 0) || start.pop()) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] || (node[ expando ] = {});

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												(outerCache[ node.uniqueID ] = {});

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					// Don't keep the element (issue #299)
					input[0] = null;
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifier
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( (tokens = []) );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push({
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			});
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					type: type,
					matches: match
				});
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( (oldCache = uniqueCache[ key ]) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return (newCache[ 2 ] = oldCache[ 2 ]);
						} else {
							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,
				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
				len = elems.length;

			if ( outermost ) {
				outermostContext = context === document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					if ( !context && elem.ownerDocument !== document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context || document, xml) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( (selector = compiled.selector || selector) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[0] = match[0].slice( 0 );
		if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
				context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[1].type ] ) {

			context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[i];

			// Abort if we hit a combinator
			if ( Expr.relative[ (type = token.type) ] ) {
				break;
			}
			if ( (find = Expr.find[ type ]) ) {
				// Search, expanding context for leading sibling combinators
				if ( (seed = find(
					token.matches[0].replace( runescape, funescape ),
					rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
				)) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( el ) {
	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement("fieldset") ) & 1;
});

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute("href") === "#" ;
}) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	});
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
}) ) {
	addHandle( "value", function( elem, name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	});
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( el ) {
	return el.getAttribute("disabled") == null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
					(val = elem.getAttributeNode( name )) && val.specified ?
					val.value :
				null;
		}
	});
}

// EXPOSE
var _sizzle = window.Sizzle;

Sizzle.noConflict = function() {
	if ( window.Sizzle === Sizzle ) {
		window.Sizzle = _sizzle;
	}

	return Sizzle;
};

if ( true ) {
	!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() { return Sizzle; }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
// Sizzle requires that there be a global window in Common-JS like environments
} else if ( typeof module !== "undefined" && module.exports ) {
	module.exports = Sizzle;
} else {
	window.Sizzle = Sizzle;
}
// EXPOSE

})( window );


/***/ }),
/* 78 */
/*!********************************************************!*\
  !*** ./node_modules/jquery/src/core/readyException.js ***!
  \********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ../core */ 0)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery ) {

"use strict";

jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};

}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 79 */
/*!*******************************************************!*\
  !*** ./node_modules/jquery/src/traversing/var/dir.js ***!
  \*******************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ../../core */ 0)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery ) {

"use strict";

return function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};

}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 80 */
/*!************************************************************!*\
  !*** ./node_modules/jquery/src/traversing/var/siblings.js ***!
  \************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {

"use strict";

return function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};

}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 81 */
/*!***********************************************************!*\
  !*** ./node_modules/jquery/src/deferred/exceptionHook.js ***!
  \***********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ../core */ 0),
	__webpack_require__(/*! ../deferred */ 11)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery ) {

"use strict";

// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};

}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 82 */
/*!*****************************************!*\
  !*** ./node_modules/jquery/src/data.js ***!
  \*****************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ./core */ 0),
	__webpack_require__(/*! ./core/access */ 8),
	__webpack_require__(/*! ./core/camelCase */ 18),
	__webpack_require__(/*! ./data/var/dataPriv */ 5),
	__webpack_require__(/*! ./data/var/dataUser */ 54)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery, access, camelCase, dataPriv, dataUser ) {

"use strict";

//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );

return jQuery;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 83 */
/*!************************************************!*\
  !*** ./node_modules/jquery/src/queue/delay.js ***!
  \************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ../core */ 0),
	__webpack_require__(/*! ../queue */ 33),
	__webpack_require__(/*! ../effects */ 34) // Delay is optional because of this dependency
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery ) {

"use strict";

// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};

return jQuery.fn.delay;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 84 */
/*!*************************************************!*\
  !*** ./node_modules/jquery/src/css/showHide.js ***!
  \*************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ../core */ 0),
	__webpack_require__(/*! ../data/var/dataPriv */ 5),
	__webpack_require__(/*! ../css/var/isHiddenWithinTree */ 55)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery, dataPriv, isHiddenWithinTree ) {

"use strict";

var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );

return showHide;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 85 */
/*!*********************************************************!*\
  !*** ./node_modules/jquery/src/manipulation/support.js ***!
  \*********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ../var/document */ 2),
	__webpack_require__(/*! ../var/support */ 7)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( document, support ) {

"use strict";

( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
} )();

return support;

}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 86 */
/*!**************************************************!*\
  !*** ./node_modules/jquery/src/effects/Tween.js ***!
  \**************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ../core */ 0),
	__webpack_require__(/*! ../css */ 15)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery ) {

"use strict";

function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 &&
				( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
					jQuery.cssHooks[ tween.prop ] ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};

}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 87 */
/*!***********************************************!*\
  !*** ./node_modules/jquery/src/attributes.js ***!
  \***********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ./core */ 0),
	__webpack_require__(/*! ./attributes/attr */ 88),
	__webpack_require__(/*! ./attributes/prop */ 63),
	__webpack_require__(/*! ./attributes/classes */ 89),
	__webpack_require__(/*! ./attributes/val */ 90)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery ) {

"use strict";

// Return jQuery for attributes-only inclusion
return jQuery;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 88 */
/*!****************************************************!*\
  !*** ./node_modules/jquery/src/attributes/attr.js ***!
  \****************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ../core */ 0),
	__webpack_require__(/*! ../core/access */ 8),
	__webpack_require__(/*! ../core/nodeName */ 9),
	__webpack_require__(/*! ./support */ 35),
	__webpack_require__(/*! ../var/rnothtmlwhite */ 6),
	__webpack_require__(/*! ../selector */ 3)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery, access, nodeName, support, rnothtmlwhite ) {

"use strict";

var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );

}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 89 */
/*!*******************************************************!*\
  !*** ./node_modules/jquery/src/attributes/classes.js ***!
  \*******************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ../core */ 0),
	__webpack_require__(/*! ../core/stripAndCollapse */ 36),
	__webpack_require__(/*! ../var/isFunction */ 1),
	__webpack_require__(/*! ../var/rnothtmlwhite */ 6),
	__webpack_require__(/*! ../data/var/dataPriv */ 5),
	__webpack_require__(/*! ../core/init */ 4)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery, stripAndCollapse, isFunction, rnothtmlwhite, dataPriv ) {

"use strict";

function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

function classesToArray( value ) {
	if ( Array.isArray( value ) ) {
		return value;
	}
	if ( typeof value === "string" ) {
		return value.match( rnothtmlwhite ) || [];
	}
	return [];
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value,
			isValidValue = type === "string" || Array.isArray( value );

		if ( typeof stateVal === "boolean" && isValidValue ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( isValidValue ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = classesToArray( value );

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
						"" :
						dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
					return true;
			}
		}

		return false;
	}
} );

}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 90 */
/*!***************************************************!*\
  !*** ./node_modules/jquery/src/attributes/val.js ***!
  \***************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ../core */ 0),
	__webpack_require__(/*! ../core/stripAndCollapse */ 36),
	__webpack_require__(/*! ./support */ 35),
	__webpack_require__(/*! ../core/nodeName */ 9),
	__webpack_require__(/*! ../var/isFunction */ 1),

	__webpack_require__(/*! ../core/init */ 4)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery, stripAndCollapse, support, nodeName, isFunction ) {

"use strict";

var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, valueIsFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		valueIsFunction = isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( valueIsFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );

}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 91 */
/*!**************************************************!*\
  !*** ./node_modules/jquery/src/event/focusin.js ***!
  \**************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ../core */ 0),
	__webpack_require__(/*! ../data/var/dataPriv */ 5),
	__webpack_require__(/*! ./support */ 92),

	__webpack_require__(/*! ../event */ 13),
	__webpack_require__(/*! ./trigger */ 37)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery, dataPriv, support ) {

"use strict";

// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}

return jQuery;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 92 */
/*!**************************************************!*\
  !*** ./node_modules/jquery/src/event/support.js ***!
  \**************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ../var/support */ 7)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( support ) {

"use strict";

support.focusin = "onfocusin" in window;

return support;

}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 93 */
/*!**********************************************************!*\
  !*** ./node_modules/jquery/src/manipulation/_evalUrl.js ***!
  \**********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ../ajax */ 14)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery ) {

"use strict";

jQuery._evalUrl = function( url ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,
		"throws": true
	} );
};

return jQuery._evalUrl;

}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 94 */
/*!******************************************************!*\
  !*** ./node_modules/jquery/src/ajax/var/location.js ***!
  \******************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
	"use strict";

	return window.location;
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 95 */
/*!**************************************************!*\
  !*** ./node_modules/jquery/src/ajax/parseXML.js ***!
  \**************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ../core */ 0)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery ) {

"use strict";

// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};

return jQuery.parseXML;

}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 96 */
/*!*****************************************!*\
  !*** ./node_modules/jquery/src/wrap.js ***!
  \*****************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ./core */ 0),
	__webpack_require__(/*! ./var/isFunction */ 1),
	__webpack_require__(/*! ./core/init */ 4),
	__webpack_require__(/*! ./manipulation */ 22), // clone
	__webpack_require__(/*! ./traversing */ 12) // parent, contents
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery, isFunction ) {

"use strict";

jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var htmlIsFunction = isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );

return jQuery;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 97 */
/*!***************************************************************!*\
  !*** ./node_modules/jquery/src/css/hiddenVisibleSelectors.js ***!
  \***************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ../core */ 0),
	__webpack_require__(/*! ../selector */ 3)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery ) {

"use strict";

jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};

}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 98 */
/*!*********************************************!*\
  !*** ./node_modules/jquery/src/ajax/xhr.js ***!
  \*********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ../core */ 0),
	__webpack_require__(/*! ../var/support */ 7),
	__webpack_require__(/*! ../ajax */ 14)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery, support ) {

"use strict";

jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.ontimeout =
									xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = xhr.ontimeout = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );

}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 99 */
/*!************************************************!*\
  !*** ./node_modules/jquery/src/ajax/script.js ***!
  \************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ../core */ 0),
	__webpack_require__(/*! ../var/document */ 2),
	__webpack_require__(/*! ../ajax */ 14)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery, document ) {

"use strict";

// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain requests
	if ( s.crossDomain ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" ).prop( {
					charset: s.scriptCharset,
					src: s.url
				} ).on(
					"load error",
					callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					}
				);

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );

}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 100 */
/*!***********************************************!*\
  !*** ./node_modules/jquery/src/ajax/jsonp.js ***!
  \***********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ../core */ 0),
	__webpack_require__(/*! ../var/isFunction */ 1),
	__webpack_require__(/*! ./var/nonce */ 65),
	__webpack_require__(/*! ./var/rquery */ 64),
	__webpack_require__(/*! ../ajax */ 14)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery, isFunction, nonce, rquery ) {

"use strict";

var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );

}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 101 */
/*!**********************************************!*\
  !*** ./node_modules/jquery/src/ajax/load.js ***!
  \**********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ../core */ 0),
	__webpack_require__(/*! ../core/stripAndCollapse */ 36),
	__webpack_require__(/*! ../var/isFunction */ 1),
	__webpack_require__(/*! ../core/parseHTML */ 102),
	__webpack_require__(/*! ../ajax */ 14),
	__webpack_require__(/*! ../traversing */ 12),
	__webpack_require__(/*! ../manipulation */ 22),
	__webpack_require__(/*! ../selector */ 3)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery, stripAndCollapse, isFunction ) {

"use strict";

/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};

}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 102 */
/*!***************************************************!*\
  !*** ./node_modules/jquery/src/core/parseHTML.js ***!
  \***************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ../core */ 0),
	__webpack_require__(/*! ../var/document */ 2),
	__webpack_require__(/*! ./var/rsingleTag */ 49),
	__webpack_require__(/*! ../manipulation/buildFragment */ 56),

	// This is the only module that needs core/support
	__webpack_require__(/*! ./support */ 103)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery, document, rsingleTag, buildFragment, support ) {

"use strict";

// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};

return jQuery.parseHTML;

}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 103 */
/*!*************************************************!*\
  !*** ./node_modules/jquery/src/core/support.js ***!
  \*************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ../var/document */ 2),
	__webpack_require__(/*! ../var/support */ 7)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( document, support ) {

"use strict";

// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();

return support;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 104 */
/*!***********************************************!*\
  !*** ./node_modules/jquery/src/event/ajax.js ***!
  \***********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ../core */ 0),
	__webpack_require__(/*! ../event */ 13)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery ) {

"use strict";

// Attach a bunch of functions for handling common AJAX events
jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );

}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 105 */
/*!*************************************************************!*\
  !*** ./node_modules/jquery/src/effects/animatedSelector.js ***!
  \*************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ../core */ 0),
	__webpack_require__(/*! ../selector */ 3),
	__webpack_require__(/*! ../effects */ 34)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery ) {

"use strict";

jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};

}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 106 */
/*!*******************************************!*\
  !*** ./node_modules/jquery/src/offset.js ***!
  \*******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ./core */ 0),
	__webpack_require__(/*! ./core/access */ 8),
	__webpack_require__(/*! ./var/document */ 2),
	__webpack_require__(/*! ./var/documentElement */ 30),
	__webpack_require__(/*! ./var/isFunction */ 1),
	__webpack_require__(/*! ./css/var/rnumnonpx */ 27),
	__webpack_require__(/*! ./css/curCSS */ 46),
	__webpack_require__(/*! ./css/addGetHookIf */ 48),
	__webpack_require__(/*! ./css/support */ 29),
	__webpack_require__(/*! ./var/isWindow */ 17),
	__webpack_require__(/*! ./core/init */ 4),
	__webpack_require__(/*! ./css */ 15),
	__webpack_require__(/*! ./selector */ 3) // contains
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery, access, document, documentElement, isFunction, rnumnonpx,
             curCSS, addGetHookIf, support, isWindow ) {

"use strict";

jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {

	// offset() relates an element's border box to the document origin
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		// Get document-relative position by adding viewport scroll to viewport-relative gBCR
		rect = elem.getBoundingClientRect();
		win = elem.ownerDocument.defaultView;
		return {
			top: rect.top + win.pageYOffset,
			left: rect.left + win.pageXOffset
		};
	},

	// position() relates an element's margin box to its offset parent's padding box
	// This corresponds to the behavior of CSS absolute positioning
	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset, doc,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// position:fixed elements are offset from the viewport, which itself always has zero offset
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume position:fixed implies availability of getBoundingClientRect
			offset = elem.getBoundingClientRect();

		} else {
			offset = this.offset();

			// Account for the *real* offset parent, which can be the document or its root element
			// when a statically positioned element is identified
			doc = elem.ownerDocument;
			offsetParent = elem.offsetParent || doc.documentElement;
			while ( offsetParent &&
				( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
				jQuery.css( offsetParent, "position" ) === "static" ) {

				offsetParent = offsetParent.parentNode;
			}
			if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {

				// Incorporate borders into its offset, since they are outside its content origin
				parentOffset = jQuery( offsetParent ).offset();
				parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", true );
			}
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );

return jQuery;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 107 */
/*!***********************************************!*\
  !*** ./node_modules/jquery/src/dimensions.js ***!
  \***********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ./core */ 0),
	__webpack_require__(/*! ./core/access */ 8),
	__webpack_require__(/*! ./var/isWindow */ 17),
	__webpack_require__(/*! ./css */ 15)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery, access, isWindow ) {

"use strict";

// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );

return jQuery;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 108 */
/*!***********************************************!*\
  !*** ./node_modules/jquery/src/deprecated.js ***!
  \***********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ./core */ 0),
	__webpack_require__(/*! ./core/nodeName */ 9),
	__webpack_require__(/*! ./core/camelCase */ 18),
	__webpack_require__(/*! ./core/toType */ 10),
	__webpack_require__(/*! ./var/isFunction */ 1),
	__webpack_require__(/*! ./var/isWindow */ 17),
	__webpack_require__(/*! ./var/slice */ 21),

	__webpack_require__(/*! ./event/alias */ 109)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery, nodeName, camelCase, toType, isFunction, isWindow, slice ) {

"use strict";

jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	}
} );

// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
jQuery.proxy = function( fn, context ) {
	var tmp, args, proxy;

	if ( typeof context === "string" ) {
		tmp = fn[ context ];
		context = fn;
		fn = tmp;
	}

	// Quick check to determine if target is callable, in the spec
	// this throws a TypeError, but we will just return undefined.
	if ( !isFunction( fn ) ) {
		return undefined;
	}

	// Simulated bind
	args = slice.call( arguments, 2 );
	proxy = function() {
		return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
	};

	// Set the guid of unique handler to the same of original handler, so it can be removed
	proxy.guid = fn.guid = fn.guid || jQuery.guid++;

	return proxy;
};

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;
jQuery.isFunction = isFunction;
jQuery.isWindow = isWindow;
jQuery.camelCase = camelCase;
jQuery.type = toType;

jQuery.now = Date.now;

jQuery.isNumeric = function( obj ) {

	// As of jQuery 3.0, isNumeric is limited to
	// strings and numbers (primitives or objects)
	// that can be coerced to finite numbers (gh-2662)
	var type = jQuery.type( obj );
	return ( type === "number" || type === "string" ) &&

		// parseFloat NaNs numeric-cast false positives ("")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		!isNaN( obj - parseFloat( obj ) );
};

}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 109 */
/*!************************************************!*\
  !*** ./node_modules/jquery/src/event/alias.js ***!
  \************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ../core */ 0),

	__webpack_require__(/*! ../event */ 13),
	__webpack_require__(/*! ./trigger */ 37)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery ) {

"use strict";

jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
} );

jQuery.fn.extend( {
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );

}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 110 */
/*!************************************************!*\
  !*** ./node_modules/jquery/src/exports/amd.js ***!
  \************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ../core */ 0)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery ) {

"use strict";

// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( true ) {
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
		return jQuery;
	}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}

}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 111 */
/*!***************************************************!*\
  !*** ./node_modules/jquery/src/exports/global.js ***!
  \***************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ../core */ 0)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery, noGlobal ) {

"use strict";

var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( !noGlobal ) {
	window.jQuery = window.$ = jQuery;
}

}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 112 */
/*!******************************************!*\
  !*** ./app/javascript/libs/slick.min.js ***!
  \******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

!function (i) {
  "use strict";
   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ 19)], __WEBPACK_AMD_DEFINE_FACTORY__ = (i),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : "undefined" != typeof exports ? module.exports = i(require("jquery")) : i(jQuery);
}(function (i) {
  "use strict";
  var e = window.Slick || {};(e = function () {
    var e = 0;return function (t, o) {
      var s,
          n = this;n.defaults = { accessibility: !0, adaptiveHeight: !1, appendArrows: i(t), appendDots: i(t), arrows: !0, asNavFor: null, prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>', nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>', autoplay: !1, autoplaySpeed: 3e3, centerMode: !1, centerPadding: "50px", cssEase: "ease", customPaging: function customPaging(e, t) {
          return i('<button type="button" />').text(t + 1);
        }, dots: !1, dotsClass: "slick-dots", draggable: !0, easing: "linear", edgeFriction: .35, fade: !1, focusOnSelect: !1, focusOnChange: !1, infinite: !0, initialSlide: 0, lazyLoad: "ondemand", mobileFirst: !1, pauseOnHover: !0, pauseOnFocus: !0, pauseOnDotsHover: !1, respondTo: "window", responsive: null, rows: 1, rtl: !1, slide: "", slidesPerRow: 1, slidesToShow: 1, slidesToScroll: 1, speed: 500, swipe: !0, swipeToSlide: !1, touchMove: !0, touchThreshold: 5, useCSS: !0, useTransform: !0, variableWidth: !1, vertical: !1, verticalSwiping: !1, waitForAnimate: !0, zIndex: 1e3 }, n.initials = { animating: !1, dragging: !1, autoPlayTimer: null, currentDirection: 0, currentLeft: null, currentSlide: 0, direction: 1, $dots: null, listWidth: null, listHeight: null, loadIndex: 0, $nextArrow: null, $prevArrow: null, scrolling: !1, slideCount: null, slideWidth: null, $slideTrack: null, $slides: null, sliding: !1, slideOffset: 0, swipeLeft: null, swiping: !1, $list: null, touchObject: {}, transformsEnabled: !1, unslicked: !1 }, i.extend(n, n.initials), n.activeBreakpoint = null, n.animType = null, n.animProp = null, n.breakpoints = [], n.breakpointSettings = [], n.cssTransitions = !1, n.focussed = !1, n.interrupted = !1, n.hidden = "hidden", n.paused = !0, n.positionProp = null, n.respondTo = null, n.rowCount = 1, n.shouldClick = !0, n.$slider = i(t), n.$slidesCache = null, n.transformType = null, n.transitionType = null, n.visibilityChange = "visibilitychange", n.windowWidth = 0, n.windowTimer = null, s = i(t).data("slick") || {}, n.options = i.extend({}, n.defaults, o, s), n.currentSlide = n.options.initialSlide, n.originalSettings = n.options, void 0 !== document.mozHidden ? (n.hidden = "mozHidden", n.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (n.hidden = "webkitHidden", n.visibilityChange = "webkitvisibilitychange"), n.autoPlay = i.proxy(n.autoPlay, n), n.autoPlayClear = i.proxy(n.autoPlayClear, n), n.autoPlayIterator = i.proxy(n.autoPlayIterator, n), n.changeSlide = i.proxy(n.changeSlide, n), n.clickHandler = i.proxy(n.clickHandler, n), n.selectHandler = i.proxy(n.selectHandler, n), n.setPosition = i.proxy(n.setPosition, n), n.swipeHandler = i.proxy(n.swipeHandler, n), n.dragHandler = i.proxy(n.dragHandler, n), n.keyHandler = i.proxy(n.keyHandler, n), n.instanceUid = e++, n.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, n.registerBreakpoints(), n.init(!0);
    };
  }()).prototype.activateADA = function () {
    this.$slideTrack.find(".slick-active").attr({ "aria-hidden": "false" }).find("a, input, button, select").attr({ tabindex: "0" });
  }, e.prototype.addSlide = e.prototype.slickAdd = function (e, t, o) {
    var s = this;if ("boolean" == typeof t) o = t, t = null;else if (t < 0 || t >= s.slideCount) return !1;s.unload(), "number" == typeof t ? 0 === t && 0 === s.$slides.length ? i(e).appendTo(s.$slideTrack) : o ? i(e).insertBefore(s.$slides.eq(t)) : i(e).insertAfter(s.$slides.eq(t)) : !0 === o ? i(e).prependTo(s.$slideTrack) : i(e).appendTo(s.$slideTrack), s.$slides = s.$slideTrack.children(this.options.slide), s.$slideTrack.children(this.options.slide).detach(), s.$slideTrack.append(s.$slides), s.$slides.each(function (e, t) {
      i(t).attr("data-slick-index", e);
    }), s.$slidesCache = s.$slides, s.reinit();
  }, e.prototype.animateHeight = function () {
    var i = this;if (1 === i.options.slidesToShow && !0 === i.options.adaptiveHeight && !1 === i.options.vertical) {
      var e = i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.animate({ height: e }, i.options.speed);
    }
  }, e.prototype.animateSlide = function (e, t) {
    var o = {},
        s = this;s.animateHeight(), !0 === s.options.rtl && !1 === s.options.vertical && (e = -e), !1 === s.transformsEnabled ? !1 === s.options.vertical ? s.$slideTrack.animate({ left: e }, s.options.speed, s.options.easing, t) : s.$slideTrack.animate({ top: e }, s.options.speed, s.options.easing, t) : !1 === s.cssTransitions ? (!0 === s.options.rtl && (s.currentLeft = -s.currentLeft), i({ animStart: s.currentLeft }).animate({ animStart: e }, { duration: s.options.speed, easing: s.options.easing, step: function step(i) {
        i = Math.ceil(i), !1 === s.options.vertical ? (o[s.animType] = "translate(" + i + "px, 0px)", s.$slideTrack.css(o)) : (o[s.animType] = "translate(0px," + i + "px)", s.$slideTrack.css(o));
      }, complete: function complete() {
        t && t.call();
      } })) : (s.applyTransition(), e = Math.ceil(e), !1 === s.options.vertical ? o[s.animType] = "translate3d(" + e + "px, 0px, 0px)" : o[s.animType] = "translate3d(0px," + e + "px, 0px)", s.$slideTrack.css(o), t && setTimeout(function () {
      s.disableTransition(), t.call();
    }, s.options.speed));
  }, e.prototype.getNavTarget = function () {
    var e = this,
        t = e.options.asNavFor;return t && null !== t && (t = i(t).not(e.$slider)), t;
  }, e.prototype.asNavFor = function (e) {
    var t = this.getNavTarget();null !== t && "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && t.each(function () {
      var t = i(this).slick("getSlick");t.unslicked || t.slideHandler(e, !0);
    });
  }, e.prototype.applyTransition = function (i) {
    var e = this,
        t = {};!1 === e.options.fade ? t[e.transitionType] = e.transformType + " " + e.options.speed + "ms " + e.options.cssEase : t[e.transitionType] = "opacity " + e.options.speed + "ms " + e.options.cssEase, !1 === e.options.fade ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t);
  }, e.prototype.autoPlay = function () {
    var i = this;i.autoPlayClear(), i.slideCount > i.options.slidesToShow && (i.autoPlayTimer = setInterval(i.autoPlayIterator, i.options.autoplaySpeed));
  }, e.prototype.autoPlayClear = function () {
    var i = this;i.autoPlayTimer && clearInterval(i.autoPlayTimer);
  }, e.prototype.autoPlayIterator = function () {
    var i = this,
        e = i.currentSlide + i.options.slidesToScroll;i.paused || i.interrupted || i.focussed || (!1 === i.options.infinite && (1 === i.direction && i.currentSlide + 1 === i.slideCount - 1 ? i.direction = 0 : 0 === i.direction && (e = i.currentSlide - i.options.slidesToScroll, i.currentSlide - 1 == 0 && (i.direction = 1))), i.slideHandler(e));
  }, e.prototype.buildArrows = function () {
    var e = this;!0 === e.options.arrows && (e.$prevArrow = i(e.options.prevArrow).addClass("slick-arrow"), e.$nextArrow = i(e.options.nextArrow).addClass("slick-arrow"), e.slideCount > e.options.slidesToShow ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows), e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows), !0 !== e.options.infinite && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({ "aria-disabled": "true", tabindex: "-1" }));
  }, e.prototype.buildDots = function () {
    var e,
        t,
        o = this;if (!0 === o.options.dots) {
      for (o.$slider.addClass("slick-dotted"), t = i("<ul />").addClass(o.options.dotsClass), e = 0; e <= o.getDotCount(); e += 1) {
        t.append(i("<li />").append(o.options.customPaging.call(this, o, e)));
      }o.$dots = t.appendTo(o.options.appendDots), o.$dots.find("li").first().addClass("slick-active");
    }
  }, e.prototype.buildOut = function () {
    var e = this;e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), e.slideCount = e.$slides.length, e.$slides.each(function (e, t) {
      i(t).attr("data-slick-index", e).data("originalStyling", i(t).attr("style") || "");
    }), e.$slider.addClass("slick-slider"), e.$slideTrack = 0 === e.slideCount ? i('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent(), e.$list = e.$slideTrack.wrap('<div class="slick-list"/>').parent(), e.$slideTrack.css("opacity", 0), !0 !== e.options.centerMode && !0 !== e.options.swipeToSlide || (e.options.slidesToScroll = 1), i("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"), e.setupInfinite(), e.buildArrows(), e.buildDots(), e.updateDots(), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), !0 === e.options.draggable && e.$list.addClass("draggable");
  }, e.prototype.buildRows = function () {
    var i,
        e,
        t,
        o,
        s,
        n,
        r,
        l = this;if (o = document.createDocumentFragment(), n = l.$slider.children(), l.options.rows > 1) {
      for (r = l.options.slidesPerRow * l.options.rows, s = Math.ceil(n.length / r), i = 0; i < s; i++) {
        var d = document.createElement("div");for (e = 0; e < l.options.rows; e++) {
          var a = document.createElement("div");for (t = 0; t < l.options.slidesPerRow; t++) {
            var c = i * r + (e * l.options.slidesPerRow + t);n.get(c) && a.appendChild(n.get(c));
          }d.appendChild(a);
        }o.appendChild(d);
      }l.$slider.empty().append(o), l.$slider.children().children().children().css({ width: 100 / l.options.slidesPerRow + "%", display: "inline-block" });
    }
  }, e.prototype.checkResponsive = function (e, t) {
    var o,
        s,
        n,
        r = this,
        l = !1,
        d = r.$slider.width(),
        a = window.innerWidth || i(window).width();if ("window" === r.respondTo ? n = a : "slider" === r.respondTo ? n = d : "min" === r.respondTo && (n = Math.min(a, d)), r.options.responsive && r.options.responsive.length && null !== r.options.responsive) {
      s = null;for (o in r.breakpoints) {
        r.breakpoints.hasOwnProperty(o) && (!1 === r.originalSettings.mobileFirst ? n < r.breakpoints[o] && (s = r.breakpoints[o]) : n > r.breakpoints[o] && (s = r.breakpoints[o]));
      }null !== s ? null !== r.activeBreakpoint ? (s !== r.activeBreakpoint || t) && (r.activeBreakpoint = s, "unslick" === r.breakpointSettings[s] ? r.unslick(s) : (r.options = i.extend({}, r.originalSettings, r.breakpointSettings[s]), !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e)), l = s) : (r.activeBreakpoint = s, "unslick" === r.breakpointSettings[s] ? r.unslick(s) : (r.options = i.extend({}, r.originalSettings, r.breakpointSettings[s]), !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e)), l = s) : null !== r.activeBreakpoint && (r.activeBreakpoint = null, r.options = r.originalSettings, !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e), l = s), e || !1 === l || r.$slider.trigger("breakpoint", [r, l]);
    }
  }, e.prototype.changeSlide = function (e, t) {
    var o,
        s,
        n,
        r = this,
        l = i(e.currentTarget);switch (l.is("a") && e.preventDefault(), l.is("li") || (l = l.closest("li")), n = r.slideCount % r.options.slidesToScroll != 0, o = n ? 0 : (r.slideCount - r.currentSlide) % r.options.slidesToScroll, e.data.message) {case "previous":
        s = 0 === o ? r.options.slidesToScroll : r.options.slidesToShow - o, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide - s, !1, t);break;case "next":
        s = 0 === o ? r.options.slidesToScroll : o, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide + s, !1, t);break;case "index":
        var d = 0 === e.data.index ? 0 : e.data.index || l.index() * r.options.slidesToScroll;r.slideHandler(r.checkNavigable(d), !1, t), l.children().trigger("focus");break;default:
        return;}
  }, e.prototype.checkNavigable = function (i) {
    var e, t;if (e = this.getNavigableIndexes(), t = 0, i > e[e.length - 1]) i = e[e.length - 1];else for (var o in e) {
      if (i < e[o]) {
        i = t;break;
      }t = e[o];
    }return i;
  }, e.prototype.cleanUpEvents = function () {
    var e = this;e.options.dots && null !== e.$dots && (i("li", e.$dots).off("click.slick", e.changeSlide).off("mouseenter.slick", i.proxy(e.interrupt, e, !0)).off("mouseleave.slick", i.proxy(e.interrupt, e, !1)), !0 === e.options.accessibility && e.$dots.off("keydown.slick", e.keyHandler)), e.$slider.off("focus.slick blur.slick"), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide), e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide), !0 === e.options.accessibility && (e.$prevArrow && e.$prevArrow.off("keydown.slick", e.keyHandler), e.$nextArrow && e.$nextArrow.off("keydown.slick", e.keyHandler))), e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler), e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler), e.$list.off("touchend.slick mouseup.slick", e.swipeHandler), e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler), e.$list.off("click.slick", e.clickHandler), i(document).off(e.visibilityChange, e.visibility), e.cleanUpSlideEvents(), !0 === e.options.accessibility && e.$list.off("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && i(e.$slideTrack).children().off("click.slick", e.selectHandler), i(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange), i(window).off("resize.slick.slick-" + e.instanceUid, e.resize), i("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault), i(window).off("load.slick.slick-" + e.instanceUid, e.setPosition);
  }, e.prototype.cleanUpSlideEvents = function () {
    var e = this;e.$list.off("mouseenter.slick", i.proxy(e.interrupt, e, !0)), e.$list.off("mouseleave.slick", i.proxy(e.interrupt, e, !1));
  }, e.prototype.cleanUpRows = function () {
    var i,
        e = this;e.options.rows > 1 && ((i = e.$slides.children().children()).removeAttr("style"), e.$slider.empty().append(i));
  }, e.prototype.clickHandler = function (i) {
    !1 === this.shouldClick && (i.stopImmediatePropagation(), i.stopPropagation(), i.preventDefault());
  }, e.prototype.destroy = function (e) {
    var t = this;t.autoPlayClear(), t.touchObject = {}, t.cleanUpEvents(), i(".slick-cloned", t.$slider).detach(), t.$dots && t.$dots.remove(), t.$prevArrow && t.$prevArrow.length && (t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove()), t.$nextArrow && t.$nextArrow.length && (t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove()), t.$slides && (t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function () {
      i(this).attr("style", i(this).data("originalStyling"));
    }), t.$slideTrack.children(this.options.slide).detach(), t.$slideTrack.detach(), t.$list.detach(), t.$slider.append(t.$slides)), t.cleanUpRows(), t.$slider.removeClass("slick-slider"), t.$slider.removeClass("slick-initialized"), t.$slider.removeClass("slick-dotted"), t.unslicked = !0, e || t.$slider.trigger("destroy", [t]);
  }, e.prototype.disableTransition = function (i) {
    var e = this,
        t = {};t[e.transitionType] = "", !1 === e.options.fade ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t);
  }, e.prototype.fadeSlide = function (i, e) {
    var t = this;!1 === t.cssTransitions ? (t.$slides.eq(i).css({ zIndex: t.options.zIndex }), t.$slides.eq(i).animate({ opacity: 1 }, t.options.speed, t.options.easing, e)) : (t.applyTransition(i), t.$slides.eq(i).css({ opacity: 1, zIndex: t.options.zIndex }), e && setTimeout(function () {
      t.disableTransition(i), e.call();
    }, t.options.speed));
  }, e.prototype.fadeSlideOut = function (i) {
    var e = this;!1 === e.cssTransitions ? e.$slides.eq(i).animate({ opacity: 0, zIndex: e.options.zIndex - 2 }, e.options.speed, e.options.easing) : (e.applyTransition(i), e.$slides.eq(i).css({ opacity: 0, zIndex: e.options.zIndex - 2 }));
  }, e.prototype.filterSlides = e.prototype.slickFilter = function (i) {
    var e = this;null !== i && (e.$slidesCache = e.$slides, e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.filter(i).appendTo(e.$slideTrack), e.reinit());
  }, e.prototype.focusHandler = function () {
    var e = this;e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", function (t) {
      t.stopImmediatePropagation();var o = i(this);setTimeout(function () {
        e.options.pauseOnFocus && (e.focussed = o.is(":focus"), e.autoPlay());
      }, 0);
    });
  }, e.prototype.getCurrent = e.prototype.slickCurrentSlide = function () {
    return this.currentSlide;
  }, e.prototype.getDotCount = function () {
    var i = this,
        e = 0,
        t = 0,
        o = 0;if (!0 === i.options.infinite) {
      if (i.slideCount <= i.options.slidesToShow) ++o;else for (; e < i.slideCount;) {
        ++o, e = t + i.options.slidesToScroll, t += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow;
      }
    } else if (!0 === i.options.centerMode) o = i.slideCount;else if (i.options.asNavFor) for (; e < i.slideCount;) {
      ++o, e = t + i.options.slidesToScroll, t += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow;
    } else o = 1 + Math.ceil((i.slideCount - i.options.slidesToShow) / i.options.slidesToScroll);return o - 1;
  }, e.prototype.getLeft = function (i) {
    var e,
        t,
        o,
        s,
        n = this,
        r = 0;return n.slideOffset = 0, t = n.$slides.first().outerHeight(!0), !0 === n.options.infinite ? (n.slideCount > n.options.slidesToShow && (n.slideOffset = n.slideWidth * n.options.slidesToShow * -1, s = -1, !0 === n.options.vertical && !0 === n.options.centerMode && (2 === n.options.slidesToShow ? s = -1.5 : 1 === n.options.slidesToShow && (s = -2)), r = t * n.options.slidesToShow * s), n.slideCount % n.options.slidesToScroll != 0 && i + n.options.slidesToScroll > n.slideCount && n.slideCount > n.options.slidesToShow && (i > n.slideCount ? (n.slideOffset = (n.options.slidesToShow - (i - n.slideCount)) * n.slideWidth * -1, r = (n.options.slidesToShow - (i - n.slideCount)) * t * -1) : (n.slideOffset = n.slideCount % n.options.slidesToScroll * n.slideWidth * -1, r = n.slideCount % n.options.slidesToScroll * t * -1))) : i + n.options.slidesToShow > n.slideCount && (n.slideOffset = (i + n.options.slidesToShow - n.slideCount) * n.slideWidth, r = (i + n.options.slidesToShow - n.slideCount) * t), n.slideCount <= n.options.slidesToShow && (n.slideOffset = 0, r = 0), !0 === n.options.centerMode && n.slideCount <= n.options.slidesToShow ? n.slideOffset = n.slideWidth * Math.floor(n.options.slidesToShow) / 2 - n.slideWidth * n.slideCount / 2 : !0 === n.options.centerMode && !0 === n.options.infinite ? n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2) - n.slideWidth : !0 === n.options.centerMode && (n.slideOffset = 0, n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2)), e = !1 === n.options.vertical ? i * n.slideWidth * -1 + n.slideOffset : i * t * -1 + r, !0 === n.options.variableWidth && (o = n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite ? n.$slideTrack.children(".slick-slide").eq(i) : n.$slideTrack.children(".slick-slide").eq(i + n.options.slidesToShow), e = !0 === n.options.rtl ? o[0] ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0, !0 === n.options.centerMode && (o = n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite ? n.$slideTrack.children(".slick-slide").eq(i) : n.$slideTrack.children(".slick-slide").eq(i + n.options.slidesToShow + 1), e = !0 === n.options.rtl ? o[0] ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0, e += (n.$list.width() - o.outerWidth()) / 2)), e;
  }, e.prototype.getOption = e.prototype.slickGetOption = function (i) {
    return this.options[i];
  }, e.prototype.getNavigableIndexes = function () {
    var i,
        e = this,
        t = 0,
        o = 0,
        s = [];for (!1 === e.options.infinite ? i = e.slideCount : (t = -1 * e.options.slidesToScroll, o = -1 * e.options.slidesToScroll, i = 2 * e.slideCount); t < i;) {
      s.push(t), t = o + e.options.slidesToScroll, o += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
    }return s;
  }, e.prototype.getSlick = function () {
    return this;
  }, e.prototype.getSlideCount = function () {
    var e,
        t,
        o = this;return t = !0 === o.options.centerMode ? o.slideWidth * Math.floor(o.options.slidesToShow / 2) : 0, !0 === o.options.swipeToSlide ? (o.$slideTrack.find(".slick-slide").each(function (s, n) {
      if (n.offsetLeft - t + i(n).outerWidth() / 2 > -1 * o.swipeLeft) return e = n, !1;
    }), Math.abs(i(e).attr("data-slick-index") - o.currentSlide) || 1) : o.options.slidesToScroll;
  }, e.prototype.goTo = e.prototype.slickGoTo = function (i, e) {
    this.changeSlide({ data: { message: "index", index: parseInt(i) } }, e);
  }, e.prototype.init = function (e) {
    var t = this;i(t.$slider).hasClass("slick-initialized") || (i(t.$slider).addClass("slick-initialized"), t.buildRows(), t.buildOut(), t.setProps(), t.startLoad(), t.loadSlider(), t.initializeEvents(), t.updateArrows(), t.updateDots(), t.checkResponsive(!0), t.focusHandler()), e && t.$slider.trigger("init", [t]), !0 === t.options.accessibility && t.initADA(), t.options.autoplay && (t.paused = !1, t.autoPlay());
  }, e.prototype.initADA = function () {
    var e = this,
        t = Math.ceil(e.slideCount / e.options.slidesToShow),
        o = e.getNavigableIndexes().filter(function (i) {
      return i >= 0 && i < e.slideCount;
    });e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({ "aria-hidden": "true", tabindex: "-1" }).find("a, input, button, select").attr({ tabindex: "-1" }), null !== e.$dots && (e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function (t) {
      var s = o.indexOf(t);i(this).attr({ role: "tabpanel", id: "slick-slide" + e.instanceUid + t, tabindex: -1 }), -1 !== s && i(this).attr({ "aria-describedby": "slick-slide-control" + e.instanceUid + s });
    }), e.$dots.attr("role", "tablist").find("li").each(function (s) {
      var n = o[s];i(this).attr({ role: "presentation" }), i(this).find("button").first().attr({ role: "tab", id: "slick-slide-control" + e.instanceUid + s, "aria-controls": "slick-slide" + e.instanceUid + n, "aria-label": s + 1 + " of " + t, "aria-selected": null, tabindex: "-1" });
    }).eq(e.currentSlide).find("button").attr({ "aria-selected": "true", tabindex: "0" }).end());for (var s = e.currentSlide, n = s + e.options.slidesToShow; s < n; s++) {
      e.$slides.eq(s).attr("tabindex", 0);
    }e.activateADA();
  }, e.prototype.initArrowEvents = function () {
    var i = this;!0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.off("click.slick").on("click.slick", { message: "previous" }, i.changeSlide), i.$nextArrow.off("click.slick").on("click.slick", { message: "next" }, i.changeSlide), !0 === i.options.accessibility && (i.$prevArrow.on("keydown.slick", i.keyHandler), i.$nextArrow.on("keydown.slick", i.keyHandler)));
  }, e.prototype.initDotEvents = function () {
    var e = this;!0 === e.options.dots && (i("li", e.$dots).on("click.slick", { message: "index" }, e.changeSlide), !0 === e.options.accessibility && e.$dots.on("keydown.slick", e.keyHandler)), !0 === e.options.dots && !0 === e.options.pauseOnDotsHover && i("li", e.$dots).on("mouseenter.slick", i.proxy(e.interrupt, e, !0)).on("mouseleave.slick", i.proxy(e.interrupt, e, !1));
  }, e.prototype.initSlideEvents = function () {
    var e = this;e.options.pauseOnHover && (e.$list.on("mouseenter.slick", i.proxy(e.interrupt, e, !0)), e.$list.on("mouseleave.slick", i.proxy(e.interrupt, e, !1)));
  }, e.prototype.initializeEvents = function () {
    var e = this;e.initArrowEvents(), e.initDotEvents(), e.initSlideEvents(), e.$list.on("touchstart.slick mousedown.slick", { action: "start" }, e.swipeHandler), e.$list.on("touchmove.slick mousemove.slick", { action: "move" }, e.swipeHandler), e.$list.on("touchend.slick mouseup.slick", { action: "end" }, e.swipeHandler), e.$list.on("touchcancel.slick mouseleave.slick", { action: "end" }, e.swipeHandler), e.$list.on("click.slick", e.clickHandler), i(document).on(e.visibilityChange, i.proxy(e.visibility, e)), !0 === e.options.accessibility && e.$list.on("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && i(e.$slideTrack).children().on("click.slick", e.selectHandler), i(window).on("orientationchange.slick.slick-" + e.instanceUid, i.proxy(e.orientationChange, e)), i(window).on("resize.slick.slick-" + e.instanceUid, i.proxy(e.resize, e)), i("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault), i(window).on("load.slick.slick-" + e.instanceUid, e.setPosition), i(e.setPosition);
  }, e.prototype.initUI = function () {
    var i = this;!0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.show(), i.$nextArrow.show()), !0 === i.options.dots && i.slideCount > i.options.slidesToShow && i.$dots.show();
  }, e.prototype.keyHandler = function (i) {
    var e = this;i.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === i.keyCode && !0 === e.options.accessibility ? e.changeSlide({ data: { message: !0 === e.options.rtl ? "next" : "previous" } }) : 39 === i.keyCode && !0 === e.options.accessibility && e.changeSlide({ data: { message: !0 === e.options.rtl ? "previous" : "next" } }));
  }, e.prototype.lazyLoad = function () {
    function e(e) {
      i("img[data-lazy]", e).each(function () {
        var e = i(this),
            t = i(this).attr("data-lazy"),
            o = i(this).attr("data-srcset"),
            s = i(this).attr("data-sizes") || n.$slider.attr("data-sizes"),
            r = document.createElement("img");r.onload = function () {
          e.animate({ opacity: 0 }, 100, function () {
            o && (e.attr("srcset", o), s && e.attr("sizes", s)), e.attr("src", t).animate({ opacity: 1 }, 200, function () {
              e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading");
            }), n.$slider.trigger("lazyLoaded", [n, e, t]);
          });
        }, r.onerror = function () {
          e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), n.$slider.trigger("lazyLoadError", [n, e, t]);
        }, r.src = t;
      });
    }var t,
        o,
        s,
        n = this;if (!0 === n.options.centerMode ? !0 === n.options.infinite ? s = (o = n.currentSlide + (n.options.slidesToShow / 2 + 1)) + n.options.slidesToShow + 2 : (o = Math.max(0, n.currentSlide - (n.options.slidesToShow / 2 + 1)), s = n.options.slidesToShow / 2 + 1 + 2 + n.currentSlide) : (o = n.options.infinite ? n.options.slidesToShow + n.currentSlide : n.currentSlide, s = Math.ceil(o + n.options.slidesToShow), !0 === n.options.fade && (o > 0 && o--, s <= n.slideCount && s++)), t = n.$slider.find(".slick-slide").slice(o, s), "anticipated" === n.options.lazyLoad) for (var r = o - 1, l = s, d = n.$slider.find(".slick-slide"), a = 0; a < n.options.slidesToScroll; a++) {
      r < 0 && (r = n.slideCount - 1), t = (t = t.add(d.eq(r))).add(d.eq(l)), r--, l++;
    }e(t), n.slideCount <= n.options.slidesToShow ? e(n.$slider.find(".slick-slide")) : n.currentSlide >= n.slideCount - n.options.slidesToShow ? e(n.$slider.find(".slick-cloned").slice(0, n.options.slidesToShow)) : 0 === n.currentSlide && e(n.$slider.find(".slick-cloned").slice(-1 * n.options.slidesToShow));
  }, e.prototype.loadSlider = function () {
    var i = this;i.setPosition(), i.$slideTrack.css({ opacity: 1 }), i.$slider.removeClass("slick-loading"), i.initUI(), "progressive" === i.options.lazyLoad && i.progressiveLazyLoad();
  }, e.prototype.next = e.prototype.slickNext = function () {
    this.changeSlide({ data: { message: "next" } });
  }, e.prototype.orientationChange = function () {
    var i = this;i.checkResponsive(), i.setPosition();
  }, e.prototype.pause = e.prototype.slickPause = function () {
    var i = this;i.autoPlayClear(), i.paused = !0;
  }, e.prototype.play = e.prototype.slickPlay = function () {
    var i = this;i.autoPlay(), i.options.autoplay = !0, i.paused = !1, i.focussed = !1, i.interrupted = !1;
  }, e.prototype.postSlide = function (e) {
    var t = this;t.unslicked || (t.$slider.trigger("afterChange", [t, e]), t.animating = !1, t.slideCount > t.options.slidesToShow && t.setPosition(), t.swipeLeft = null, t.options.autoplay && t.autoPlay(), !0 === t.options.accessibility && (t.initADA(), t.options.focusOnChange && i(t.$slides.get(t.currentSlide)).attr("tabindex", 0).focus()));
  }, e.prototype.prev = e.prototype.slickPrev = function () {
    this.changeSlide({ data: { message: "previous" } });
  }, e.prototype.preventDefault = function (i) {
    i.preventDefault();
  }, e.prototype.progressiveLazyLoad = function (e) {
    e = e || 1;var t,
        o,
        s,
        n,
        r,
        l = this,
        d = i("img[data-lazy]", l.$slider);d.length ? (t = d.first(), o = t.attr("data-lazy"), s = t.attr("data-srcset"), n = t.attr("data-sizes") || l.$slider.attr("data-sizes"), (r = document.createElement("img")).onload = function () {
      s && (t.attr("srcset", s), n && t.attr("sizes", n)), t.attr("src", o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"), !0 === l.options.adaptiveHeight && l.setPosition(), l.$slider.trigger("lazyLoaded", [l, t, o]), l.progressiveLazyLoad();
    }, r.onerror = function () {
      e < 3 ? setTimeout(function () {
        l.progressiveLazyLoad(e + 1);
      }, 500) : (t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), l.$slider.trigger("lazyLoadError", [l, t, o]), l.progressiveLazyLoad());
    }, r.src = o) : l.$slider.trigger("allImagesLoaded", [l]);
  }, e.prototype.refresh = function (e) {
    var t,
        o,
        s = this;o = s.slideCount - s.options.slidesToShow, !s.options.infinite && s.currentSlide > o && (s.currentSlide = o), s.slideCount <= s.options.slidesToShow && (s.currentSlide = 0), t = s.currentSlide, s.destroy(!0), i.extend(s, s.initials, { currentSlide: t }), s.init(), e || s.changeSlide({ data: { message: "index", index: t } }, !1);
  }, e.prototype.registerBreakpoints = function () {
    var e,
        t,
        o,
        s = this,
        n = s.options.responsive || null;if ("array" === i.type(n) && n.length) {
      s.respondTo = s.options.respondTo || "window";for (e in n) {
        if (o = s.breakpoints.length - 1, n.hasOwnProperty(e)) {
          for (t = n[e].breakpoint; o >= 0;) {
            s.breakpoints[o] && s.breakpoints[o] === t && s.breakpoints.splice(o, 1), o--;
          }s.breakpoints.push(t), s.breakpointSettings[t] = n[e].settings;
        }
      }s.breakpoints.sort(function (i, e) {
        return s.options.mobileFirst ? i - e : e - i;
      });
    }
  }, e.prototype.reinit = function () {
    var e = this;e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide"), e.slideCount = e.$slides.length, e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll), e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0), e.registerBreakpoints(), e.setProps(), e.setupInfinite(), e.buildArrows(), e.updateArrows(), e.initArrowEvents(), e.buildDots(), e.updateDots(), e.initDotEvents(), e.cleanUpSlideEvents(), e.initSlideEvents(), e.checkResponsive(!1, !0), !0 === e.options.focusOnSelect && i(e.$slideTrack).children().on("click.slick", e.selectHandler), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), e.setPosition(), e.focusHandler(), e.paused = !e.options.autoplay, e.autoPlay(), e.$slider.trigger("reInit", [e]);
  }, e.prototype.resize = function () {
    var e = this;i(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay), e.windowDelay = window.setTimeout(function () {
      e.windowWidth = i(window).width(), e.checkResponsive(), e.unslicked || e.setPosition();
    }, 50));
  }, e.prototype.removeSlide = e.prototype.slickRemove = function (i, e, t) {
    var o = this;if (i = "boolean" == typeof i ? !0 === (e = i) ? 0 : o.slideCount - 1 : !0 === e ? --i : i, o.slideCount < 1 || i < 0 || i > o.slideCount - 1) return !1;o.unload(), !0 === t ? o.$slideTrack.children().remove() : o.$slideTrack.children(this.options.slide).eq(i).remove(), o.$slides = o.$slideTrack.children(this.options.slide), o.$slideTrack.children(this.options.slide).detach(), o.$slideTrack.append(o.$slides), o.$slidesCache = o.$slides, o.reinit();
  }, e.prototype.setCSS = function (i) {
    var e,
        t,
        o = this,
        s = {};!0 === o.options.rtl && (i = -i), e = "left" == o.positionProp ? Math.ceil(i) + "px" : "0px", t = "top" == o.positionProp ? Math.ceil(i) + "px" : "0px", s[o.positionProp] = i, !1 === o.transformsEnabled ? o.$slideTrack.css(s) : (s = {}, !1 === o.cssTransitions ? (s[o.animType] = "translate(" + e + ", " + t + ")", o.$slideTrack.css(s)) : (s[o.animType] = "translate3d(" + e + ", " + t + ", 0px)", o.$slideTrack.css(s)));
  }, e.prototype.setDimensions = function () {
    var i = this;!1 === i.options.vertical ? !0 === i.options.centerMode && i.$list.css({ padding: "0px " + i.options.centerPadding }) : (i.$list.height(i.$slides.first().outerHeight(!0) * i.options.slidesToShow), !0 === i.options.centerMode && i.$list.css({ padding: i.options.centerPadding + " 0px" })), i.listWidth = i.$list.width(), i.listHeight = i.$list.height(), !1 === i.options.vertical && !1 === i.options.variableWidth ? (i.slideWidth = Math.ceil(i.listWidth / i.options.slidesToShow), i.$slideTrack.width(Math.ceil(i.slideWidth * i.$slideTrack.children(".slick-slide").length))) : !0 === i.options.variableWidth ? i.$slideTrack.width(5e3 * i.slideCount) : (i.slideWidth = Math.ceil(i.listWidth), i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0) * i.$slideTrack.children(".slick-slide").length)));var e = i.$slides.first().outerWidth(!0) - i.$slides.first().width();!1 === i.options.variableWidth && i.$slideTrack.children(".slick-slide").width(i.slideWidth - e);
  }, e.prototype.setFade = function () {
    var e,
        t = this;t.$slides.each(function (o, s) {
      e = t.slideWidth * o * -1, !0 === t.options.rtl ? i(s).css({ position: "relative", right: e, top: 0, zIndex: t.options.zIndex - 2, opacity: 0 }) : i(s).css({ position: "relative", left: e, top: 0, zIndex: t.options.zIndex - 2, opacity: 0 });
    }), t.$slides.eq(t.currentSlide).css({ zIndex: t.options.zIndex - 1, opacity: 1 });
  }, e.prototype.setHeight = function () {
    var i = this;if (1 === i.options.slidesToShow && !0 === i.options.adaptiveHeight && !1 === i.options.vertical) {
      var e = i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.css("height", e);
    }
  }, e.prototype.setOption = e.prototype.slickSetOption = function () {
    var e,
        t,
        o,
        s,
        n,
        r = this,
        l = !1;if ("object" === i.type(arguments[0]) ? (o = arguments[0], l = arguments[1], n = "multiple") : "string" === i.type(arguments[0]) && (o = arguments[0], s = arguments[1], l = arguments[2], "responsive" === arguments[0] && "array" === i.type(arguments[1]) ? n = "responsive" : void 0 !== arguments[1] && (n = "single")), "single" === n) r.options[o] = s;else if ("multiple" === n) i.each(o, function (i, e) {
      r.options[i] = e;
    });else if ("responsive" === n) for (t in s) {
      if ("array" !== i.type(r.options.responsive)) r.options.responsive = [s[t]];else {
        for (e = r.options.responsive.length - 1; e >= 0;) {
          r.options.responsive[e].breakpoint === s[t].breakpoint && r.options.responsive.splice(e, 1), e--;
        }r.options.responsive.push(s[t]);
      }
    }l && (r.unload(), r.reinit());
  }, e.prototype.setPosition = function () {
    var i = this;i.setDimensions(), i.setHeight(), !1 === i.options.fade ? i.setCSS(i.getLeft(i.currentSlide)) : i.setFade(), i.$slider.trigger("setPosition", [i]);
  }, e.prototype.setProps = function () {
    var i = this,
        e = document.body.style;i.positionProp = !0 === i.options.vertical ? "top" : "left", "top" === i.positionProp ? i.$slider.addClass("slick-vertical") : i.$slider.removeClass("slick-vertical"), void 0 === e.WebkitTransition && void 0 === e.MozTransition && void 0 === e.msTransition || !0 === i.options.useCSS && (i.cssTransitions = !0), i.options.fade && ("number" == typeof i.options.zIndex ? i.options.zIndex < 3 && (i.options.zIndex = 3) : i.options.zIndex = i.defaults.zIndex), void 0 !== e.OTransform && (i.animType = "OTransform", i.transformType = "-o-transform", i.transitionType = "OTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (i.animType = !1)), void 0 !== e.MozTransform && (i.animType = "MozTransform", i.transformType = "-moz-transform", i.transitionType = "MozTransition", void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (i.animType = !1)), void 0 !== e.webkitTransform && (i.animType = "webkitTransform", i.transformType = "-webkit-transform", i.transitionType = "webkitTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (i.animType = !1)), void 0 !== e.msTransform && (i.animType = "msTransform", i.transformType = "-ms-transform", i.transitionType = "msTransition", void 0 === e.msTransform && (i.animType = !1)), void 0 !== e.transform && !1 !== i.animType && (i.animType = "transform", i.transformType = "transform", i.transitionType = "transition"), i.transformsEnabled = i.options.useTransform && null !== i.animType && !1 !== i.animType;
  }, e.prototype.setSlideClasses = function (i) {
    var e,
        t,
        o,
        s,
        n = this;if (t = n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), n.$slides.eq(i).addClass("slick-current"), !0 === n.options.centerMode) {
      var r = n.options.slidesToShow % 2 == 0 ? 1 : 0;e = Math.floor(n.options.slidesToShow / 2), !0 === n.options.infinite && (i >= e && i <= n.slideCount - 1 - e ? n.$slides.slice(i - e + r, i + e + 1).addClass("slick-active").attr("aria-hidden", "false") : (o = n.options.slidesToShow + i, t.slice(o - e + 1 + r, o + e + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === i ? t.eq(t.length - 1 - n.options.slidesToShow).addClass("slick-center") : i === n.slideCount - 1 && t.eq(n.options.slidesToShow).addClass("slick-center")), n.$slides.eq(i).addClass("slick-center");
    } else i >= 0 && i <= n.slideCount - n.options.slidesToShow ? n.$slides.slice(i, i + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : t.length <= n.options.slidesToShow ? t.addClass("slick-active").attr("aria-hidden", "false") : (s = n.slideCount % n.options.slidesToShow, o = !0 === n.options.infinite ? n.options.slidesToShow + i : i, n.options.slidesToShow == n.options.slidesToScroll && n.slideCount - i < n.options.slidesToShow ? t.slice(o - (n.options.slidesToShow - s), o + s).addClass("slick-active").attr("aria-hidden", "false") : t.slice(o, o + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"));"ondemand" !== n.options.lazyLoad && "anticipated" !== n.options.lazyLoad || n.lazyLoad();
  }, e.prototype.setupInfinite = function () {
    var e,
        t,
        o,
        s = this;if (!0 === s.options.fade && (s.options.centerMode = !1), !0 === s.options.infinite && !1 === s.options.fade && (t = null, s.slideCount > s.options.slidesToShow)) {
      for (o = !0 === s.options.centerMode ? s.options.slidesToShow + 1 : s.options.slidesToShow, e = s.slideCount; e > s.slideCount - o; e -= 1) {
        t = e - 1, i(s.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t - s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");
      }for (e = 0; e < o + s.slideCount; e += 1) {
        t = e, i(s.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t + s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");
      }s.$slideTrack.find(".slick-cloned").find("[id]").each(function () {
        i(this).attr("id", "");
      });
    }
  }, e.prototype.interrupt = function (i) {
    var e = this;i || e.autoPlay(), e.interrupted = i;
  }, e.prototype.selectHandler = function (e) {
    var t = this,
        o = i(e.target).is(".slick-slide") ? i(e.target) : i(e.target).parents(".slick-slide"),
        s = parseInt(o.attr("data-slick-index"));s || (s = 0), t.slideCount <= t.options.slidesToShow ? t.slideHandler(s, !1, !0) : t.slideHandler(s);
  }, e.prototype.slideHandler = function (i, e, t) {
    var o,
        s,
        n,
        r,
        l,
        d = null,
        a = this;if (e = e || !1, !(!0 === a.animating && !0 === a.options.waitForAnimate || !0 === a.options.fade && a.currentSlide === i)) if (!1 === e && a.asNavFor(i), o = i, d = a.getLeft(o), r = a.getLeft(a.currentSlide), a.currentLeft = null === a.swipeLeft ? r : a.swipeLeft, !1 === a.options.infinite && !1 === a.options.centerMode && (i < 0 || i > a.getDotCount() * a.options.slidesToScroll)) !1 === a.options.fade && (o = a.currentSlide, !0 !== t ? a.animateSlide(r, function () {
      a.postSlide(o);
    }) : a.postSlide(o));else if (!1 === a.options.infinite && !0 === a.options.centerMode && (i < 0 || i > a.slideCount - a.options.slidesToScroll)) !1 === a.options.fade && (o = a.currentSlide, !0 !== t ? a.animateSlide(r, function () {
      a.postSlide(o);
    }) : a.postSlide(o));else {
      if (a.options.autoplay && clearInterval(a.autoPlayTimer), s = o < 0 ? a.slideCount % a.options.slidesToScroll != 0 ? a.slideCount - a.slideCount % a.options.slidesToScroll : a.slideCount + o : o >= a.slideCount ? a.slideCount % a.options.slidesToScroll != 0 ? 0 : o - a.slideCount : o, a.animating = !0, a.$slider.trigger("beforeChange", [a, a.currentSlide, s]), n = a.currentSlide, a.currentSlide = s, a.setSlideClasses(a.currentSlide), a.options.asNavFor && (l = (l = a.getNavTarget()).slick("getSlick")).slideCount <= l.options.slidesToShow && l.setSlideClasses(a.currentSlide), a.updateDots(), a.updateArrows(), !0 === a.options.fade) return !0 !== t ? (a.fadeSlideOut(n), a.fadeSlide(s, function () {
        a.postSlide(s);
      })) : a.postSlide(s), void a.animateHeight();!0 !== t ? a.animateSlide(d, function () {
        a.postSlide(s);
      }) : a.postSlide(s);
    }
  }, e.prototype.startLoad = function () {
    var i = this;!0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.hide(), i.$nextArrow.hide()), !0 === i.options.dots && i.slideCount > i.options.slidesToShow && i.$dots.hide(), i.$slider.addClass("slick-loading");
  }, e.prototype.swipeDirection = function () {
    var i,
        e,
        t,
        o,
        s = this;return i = s.touchObject.startX - s.touchObject.curX, e = s.touchObject.startY - s.touchObject.curY, t = Math.atan2(e, i), (o = Math.round(180 * t / Math.PI)) < 0 && (o = 360 - Math.abs(o)), o <= 45 && o >= 0 ? !1 === s.options.rtl ? "left" : "right" : o <= 360 && o >= 315 ? !1 === s.options.rtl ? "left" : "right" : o >= 135 && o <= 225 ? !1 === s.options.rtl ? "right" : "left" : !0 === s.options.verticalSwiping ? o >= 35 && o <= 135 ? "down" : "up" : "vertical";
  }, e.prototype.swipeEnd = function (i) {
    var e,
        t,
        o = this;if (o.dragging = !1, o.swiping = !1, o.scrolling) return o.scrolling = !1, !1;if (o.interrupted = !1, o.shouldClick = !(o.touchObject.swipeLength > 10), void 0 === o.touchObject.curX) return !1;if (!0 === o.touchObject.edgeHit && o.$slider.trigger("edge", [o, o.swipeDirection()]), o.touchObject.swipeLength >= o.touchObject.minSwipe) {
      switch (t = o.swipeDirection()) {case "left":case "down":
          e = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide + o.getSlideCount()) : o.currentSlide + o.getSlideCount(), o.currentDirection = 0;break;case "right":case "up":
          e = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide - o.getSlideCount()) : o.currentSlide - o.getSlideCount(), o.currentDirection = 1;}"vertical" != t && (o.slideHandler(e), o.touchObject = {}, o.$slider.trigger("swipe", [o, t]));
    } else o.touchObject.startX !== o.touchObject.curX && (o.slideHandler(o.currentSlide), o.touchObject = {});
  }, e.prototype.swipeHandler = function (i) {
    var e = this;if (!(!1 === e.options.swipe || "ontouchend" in document && !1 === e.options.swipe || !1 === e.options.draggable && -1 !== i.type.indexOf("mouse"))) switch (e.touchObject.fingerCount = i.originalEvent && void 0 !== i.originalEvent.touches ? i.originalEvent.touches.length : 1, e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold, !0 === e.options.verticalSwiping && (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold), i.data.action) {case "start":
        e.swipeStart(i);break;case "move":
        e.swipeMove(i);break;case "end":
        e.swipeEnd(i);}
  }, e.prototype.swipeMove = function (i) {
    var e,
        t,
        o,
        s,
        n,
        r,
        l = this;return n = void 0 !== i.originalEvent ? i.originalEvent.touches : null, !(!l.dragging || l.scrolling || n && 1 !== n.length) && (e = l.getLeft(l.currentSlide), l.touchObject.curX = void 0 !== n ? n[0].pageX : i.clientX, l.touchObject.curY = void 0 !== n ? n[0].pageY : i.clientY, l.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(l.touchObject.curX - l.touchObject.startX, 2))), r = Math.round(Math.sqrt(Math.pow(l.touchObject.curY - l.touchObject.startY, 2))), !l.options.verticalSwiping && !l.swiping && r > 4 ? (l.scrolling = !0, !1) : (!0 === l.options.verticalSwiping && (l.touchObject.swipeLength = r), t = l.swipeDirection(), void 0 !== i.originalEvent && l.touchObject.swipeLength > 4 && (l.swiping = !0, i.preventDefault()), s = (!1 === l.options.rtl ? 1 : -1) * (l.touchObject.curX > l.touchObject.startX ? 1 : -1), !0 === l.options.verticalSwiping && (s = l.touchObject.curY > l.touchObject.startY ? 1 : -1), o = l.touchObject.swipeLength, l.touchObject.edgeHit = !1, !1 === l.options.infinite && (0 === l.currentSlide && "right" === t || l.currentSlide >= l.getDotCount() && "left" === t) && (o = l.touchObject.swipeLength * l.options.edgeFriction, l.touchObject.edgeHit = !0), !1 === l.options.vertical ? l.swipeLeft = e + o * s : l.swipeLeft = e + o * (l.$list.height() / l.listWidth) * s, !0 === l.options.verticalSwiping && (l.swipeLeft = e + o * s), !0 !== l.options.fade && !1 !== l.options.touchMove && (!0 === l.animating ? (l.swipeLeft = null, !1) : void l.setCSS(l.swipeLeft))));
  }, e.prototype.swipeStart = function (i) {
    var e,
        t = this;if (t.interrupted = !0, 1 !== t.touchObject.fingerCount || t.slideCount <= t.options.slidesToShow) return t.touchObject = {}, !1;void 0 !== i.originalEvent && void 0 !== i.originalEvent.touches && (e = i.originalEvent.touches[0]), t.touchObject.startX = t.touchObject.curX = void 0 !== e ? e.pageX : i.clientX, t.touchObject.startY = t.touchObject.curY = void 0 !== e ? e.pageY : i.clientY, t.dragging = !0;
  }, e.prototype.unfilterSlides = e.prototype.slickUnfilter = function () {
    var i = this;null !== i.$slidesCache && (i.unload(), i.$slideTrack.children(this.options.slide).detach(), i.$slidesCache.appendTo(i.$slideTrack), i.reinit());
  }, e.prototype.unload = function () {
    var e = this;i(".slick-cloned", e.$slider).remove(), e.$dots && e.$dots.remove(), e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(), e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(), e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "");
  }, e.prototype.unslick = function (i) {
    var e = this;e.$slider.trigger("unslick", [e, i]), e.destroy();
  }, e.prototype.updateArrows = function () {
    var i = this;Math.floor(i.options.slidesToShow / 2), !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && !i.options.infinite && (i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === i.currentSlide ? (i.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : i.currentSlide >= i.slideCount - i.options.slidesToShow && !1 === i.options.centerMode ? (i.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : i.currentSlide >= i.slideCount - 1 && !0 === i.options.centerMode && (i.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")));
  }, e.prototype.updateDots = function () {
    var i = this;null !== i.$dots && (i.$dots.find("li").removeClass("slick-active").end(), i.$dots.find("li").eq(Math.floor(i.currentSlide / i.options.slidesToScroll)).addClass("slick-active"));
  }, e.prototype.visibility = function () {
    var i = this;i.options.autoplay && (document[i.hidden] ? i.interrupted = !0 : i.interrupted = !1);
  }, i.fn.slick = function () {
    var i,
        t,
        o = this,
        s = arguments[0],
        n = Array.prototype.slice.call(arguments, 1),
        r = o.length;for (i = 0; i < r; i++) {
      if ("object" == (typeof s === "undefined" ? "undefined" : _typeof(s)) || void 0 === s ? o[i].slick = new e(o[i], s) : t = o[i].slick[s].apply(o[i].slick, n), void 0 !== t) return t;
    }return o;
  };
});

/***/ }),
/* 113 */
/*!*****************************************!*\
  !*** ./app/javascript/modules/index.js ***!
  \*****************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {module.exports = {

  init: function init() {
    this.carousel();
    this.nav_handler();
    this.piling();
    this.blotterjs();
  },

  carousel: function carousel() {
    $('.slider-for').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      asNavFor: '.slider-for',
      dots: false,
      variableWidth: false,
      prevArrow: '<button class="slick-prev slick-arrow text__lighter--orange text--bordered" aria-label="Previous" type="button" style="">Prev</button>',
      nextArrow: '<button class="slick-next slick-arrow text__lighter--orange text--bordered" aria-label="Next" type="button" style="">Next</button>'

    });
  },

  nav_handler: function nav_handler() {
    var menuNavItem = $('.b-section__nav');
    var nav_item = $('[data-go]');
    var container = $('[data-content]');

    nav_item.on("click", function () {
      if (!$(this).hasClass("is--active")) {
        nav_item.removeClass("is--active");
        $(this).addClass('is--active');
        var curr_value = $(this).attr("data-go");
        $('[data-content]').removeClass("is--active");
        $('[data-content=' + curr_value + ']').addClass("is--active");
      }
    });
  },
  piling: function piling() {
    $('#pagepiling').pagepiling({
      menu: null,
      direction: 'horizontal',
      verticalCentered: true,
      sectionsColor: ["#f9f9f9", "#f9f9f9", "#f9f9f9", "#f9f9f9", "#f9f9f9"],
      anchors: ['home', 'home2', 'about', 'works'],
      scrollingSpeed: 400,
      easing: 'swing',
      loopBottom: false,
      loopTop: false,
      css3: true,
      navigation: false,
      normalScrollElements: null,
      normalScrollElementTouchThreshold: 5,
      touchSensitivity: 5,
      keyboardScrolling: true,
      sectionSelector: '.section',
      animateAnchor: true,

      onLeave: function onLeave(index, nextIndex, direction) {},
      afterLoad: function afterLoad(anchorLink, index) {
        var hash = "#" + anchorLink;
        var allNavItems = $('.b-section__nav').find("a");
        var navItem = $('.b-section__nav').find("a[href='" + hash + "']");
        allNavItems.removeClass('is--active');
        navItem.addClass('is--active');
      },
      afterRender: function afterRender() {}
    });
  },
  blotterjs: function blotterjs() {
    var text = new Blotter.Text("uras", {
      family: "'Swiss', sans-serif",
      size: 290,
      fill: "#171717",
      style: 'normal',
      weight: 500,
      paddingRight: 100,
      paddingLeft: 100
    });

    var container = $(".l-section__welcome--container.container");

    var material = new Blotter.ChannelSplitMaterial();
    var blotter = new Blotter(material, { texts: text });
    material.needsUpdate = true;
    blotter.needsUpdate = true;

    function _event() {
      $(document).mousemove(function (event) {
        _handleMousemove(event);
      });
    }

    function tang(a, b, c, d) {
      var e = 180 * Math.atan2(d - b, c - a) / Math.PI;
      return e = 180 + e;
    }

    function raiz(a, b, c, d) {
      var e = a - c,
          f = b - d;
      return Math.sqrt(e * e + f * f);
    }

    function _setInitialCenter(el) {
      var a = $(document).width(),
          b = $(document).height(),
          c = el.width(),
          d = el.height();
      var examplePosition = el.offset();
      _handleNewCenter((examplePosition.left + c / 2) / a, (examplePosition.top + d / 2) / b);
    }

    function _handleNewCenter(c, d) {
      var e = $(document).width(),
          f = $(document).height();

      var h = container,
          i = h.offset(),
          j = (i.left + h.width() / 2) / e,
          k = (i.top + h.height() / 2) / f,
          l = tang(j, k, c, d),
          m = Math.min(.2, raiz(j, k, c, d));

      material.uniforms.uRotation.value = l;
      material.uniforms.uOffset.value = m;
    }

    function _handleMousemove(a) {
      var domWidth = $(document).width(),
          domHeight = $(document).height(),
          d = a.pageX / domWidth,
          e = a.pageY / domHeight;
      _handleNewCenter(d, e);
    }
    blotter.on("ready", function (e) {
      var textID = this._texts[0].id;
      var canvasClass = this._scopes[textID].domElement.className;
      var $el = $('.' + canvasClass + '');
      _setInitialCenter($el[0]);
    });
    _event();
    var scope = blotter.forText(text);
    scope.appendTo(container);
  }
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! jquery */ 19)))

/***/ })
/******/ ]);
//# sourceMappingURL=application-1157d44cba27c3d34c27.js.map