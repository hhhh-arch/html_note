var ContentBundle = (() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
    get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
  }) : x)(function(x) {
    if (typeof require !== "undefined") return require.apply(this, arguments);
    throw Error('Dynamic require of "' + x + '" is not supported');
  });
  var __commonJS = (cb, mod) => function __require2() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to2, from2, except, desc) => {
    if (from2 && typeof from2 === "object" || typeof from2 === "function") {
      for (let key of __getOwnPropNames(from2))
        if (!__hasOwnProp.call(to2, key) && key !== except)
          __defProp(to2, key, { get: () => from2[key], enumerable: !(desc = __getOwnPropDesc(from2, key)) || desc.enumerable });
    }
    return to2;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // libs/crypto-js.min.js
  var require_crypto_js_min = __commonJS({
    "libs/crypto-js.min.js"(exports, module) {
      !function(t, e) {
        "object" == typeof exports ? module.exports = exports = e() : "function" == typeof define && define.amd ? define([], e) : t.CryptoJS = e();
      }(exports, function() {
        var t, e, r, i, n, o, s, a, c = c || function(t2, e2) {
          var r2;
          if ("undefined" != typeof window && window.crypto && (r2 = window.crypto), "undefined" != typeof self && self.crypto && (r2 = self.crypto), "undefined" != typeof globalThis && globalThis.crypto && (r2 = globalThis.crypto), !r2 && "undefined" != typeof window && window.msCrypto && (r2 = window.msCrypto), !r2 && "undefined" != typeof global && global.crypto && (r2 = global.crypto), !r2 && "function" == typeof __require) try {
            r2 = __require("crypto");
          } catch (t3) {
          }
          var i2 = function() {
            if (r2) {
              if ("function" == typeof r2.getRandomValues) try {
                return r2.getRandomValues(new Uint32Array(1))[0];
              } catch (t3) {
              }
              if ("function" == typeof r2.randomBytes) try {
                return r2.randomBytes(4).readInt32LE();
              } catch (t3) {
              }
            }
            throw new Error("Native crypto module could not be used to get secure random number.");
          }, n2 = Object.create || /* @__PURE__ */ function() {
            function t3() {
            }
            return function(e3) {
              var r3;
              return t3.prototype = e3, r3 = new t3(), t3.prototype = null, r3;
            };
          }(), o2 = {}, s2 = o2.lib = {}, a2 = s2.Base = { extend: function(t3) {
            var e3 = n2(this);
            return t3 && e3.mixIn(t3), e3.hasOwnProperty("init") && this.init !== e3.init || (e3.init = function() {
              e3.$super.init.apply(this, arguments);
            }), e3.init.prototype = e3, e3.$super = this, e3;
          }, create: function() {
            var t3 = this.extend();
            return t3.init.apply(t3, arguments), t3;
          }, init: function() {
          }, mixIn: function(t3) {
            for (var e3 in t3) t3.hasOwnProperty(e3) && (this[e3] = t3[e3]);
            t3.hasOwnProperty("toString") && (this.toString = t3.toString);
          }, clone: function() {
            return this.init.prototype.extend(this);
          } }, c2 = s2.WordArray = a2.extend({ init: function(t3, e3) {
            t3 = this.words = t3 || [], this.sigBytes = null != e3 ? e3 : 4 * t3.length;
          }, toString: function(t3) {
            return (t3 || l).stringify(this);
          }, concat: function(t3) {
            var e3 = this.words, r3 = t3.words, i3 = this.sigBytes, n3 = t3.sigBytes;
            if (this.clamp(), i3 % 4) for (var o3 = 0; o3 < n3; o3++) {
              var s3 = r3[o3 >>> 2] >>> 24 - o3 % 4 * 8 & 255;
              e3[i3 + o3 >>> 2] |= s3 << 24 - (i3 + o3) % 4 * 8;
            }
            else for (var a3 = 0; a3 < n3; a3 += 4) e3[i3 + a3 >>> 2] = r3[a3 >>> 2];
            return this.sigBytes += n3, this;
          }, clamp: function() {
            var e3 = this.words, r3 = this.sigBytes;
            e3[r3 >>> 2] &= 4294967295 << 32 - r3 % 4 * 8, e3.length = t2.ceil(r3 / 4);
          }, clone: function() {
            var t3 = a2.clone.call(this);
            return t3.words = this.words.slice(0), t3;
          }, random: function(t3) {
            for (var e3 = [], r3 = 0; r3 < t3; r3 += 4) e3.push(i2());
            return new c2.init(e3, t3);
          } }), h = o2.enc = {}, l = h.Hex = { stringify: function(t3) {
            for (var e3 = t3.words, r3 = t3.sigBytes, i3 = [], n3 = 0; n3 < r3; n3++) {
              var o3 = e3[n3 >>> 2] >>> 24 - n3 % 4 * 8 & 255;
              i3.push((o3 >>> 4).toString(16)), i3.push((15 & o3).toString(16));
            }
            return i3.join("");
          }, parse: function(t3) {
            for (var e3 = t3.length, r3 = [], i3 = 0; i3 < e3; i3 += 2) r3[i3 >>> 3] |= parseInt(t3.substr(i3, 2), 16) << 24 - i3 % 8 * 4;
            return new c2.init(r3, e3 / 2);
          } }, f = h.Latin1 = { stringify: function(t3) {
            for (var e3 = t3.words, r3 = t3.sigBytes, i3 = [], n3 = 0; n3 < r3; n3++) {
              var o3 = e3[n3 >>> 2] >>> 24 - n3 % 4 * 8 & 255;
              i3.push(String.fromCharCode(o3));
            }
            return i3.join("");
          }, parse: function(t3) {
            for (var e3 = t3.length, r3 = [], i3 = 0; i3 < e3; i3++) r3[i3 >>> 2] |= (255 & t3.charCodeAt(i3)) << 24 - i3 % 4 * 8;
            return new c2.init(r3, e3);
          } }, u = h.Utf8 = { stringify: function(t3) {
            try {
              return decodeURIComponent(escape(f.stringify(t3)));
            } catch (t4) {
              throw new Error("Malformed UTF-8 data");
            }
          }, parse: function(t3) {
            return f.parse(unescape(encodeURIComponent(t3)));
          } }, d = s2.BufferedBlockAlgorithm = a2.extend({ reset: function() {
            this._data = new c2.init(), this._nDataBytes = 0;
          }, _append: function(t3) {
            "string" == typeof t3 && (t3 = u.parse(t3)), this._data.concat(t3), this._nDataBytes += t3.sigBytes;
          }, _process: function(e3) {
            var r3, i3 = this._data, n3 = i3.words, o3 = i3.sigBytes, s3 = this.blockSize, a3 = o3 / (4 * s3), h2 = (a3 = e3 ? t2.ceil(a3) : t2.max((0 | a3) - this._minBufferSize, 0)) * s3, l2 = t2.min(4 * h2, o3);
            if (h2) {
              for (var f2 = 0; f2 < h2; f2 += s3) this._doProcessBlock(n3, f2);
              r3 = n3.splice(0, h2), i3.sigBytes -= l2;
            }
            return new c2.init(r3, l2);
          }, clone: function() {
            var t3 = a2.clone.call(this);
            return t3._data = this._data.clone(), t3;
          }, _minBufferSize: 0 }), p = (s2.Hasher = d.extend({ cfg: a2.extend(), init: function(t3) {
            this.cfg = this.cfg.extend(t3), this.reset();
          }, reset: function() {
            d.reset.call(this), this._doReset();
          }, update: function(t3) {
            return this._append(t3), this._process(), this;
          }, finalize: function(t3) {
            return t3 && this._append(t3), this._doFinalize();
          }, blockSize: 16, _createHelper: function(t3) {
            return function(e3, r3) {
              return new t3.init(r3).finalize(e3);
            };
          }, _createHmacHelper: function(t3) {
            return function(e3, r3) {
              return new p.HMAC.init(t3, r3).finalize(e3);
            };
          } }), o2.algo = {});
          return o2;
        }(Math);
        return e = (t = c).lib, r = e.Base, i = e.WordArray, (n = t.x64 = {}).Word = r.extend({ init: function(t2, e2) {
          this.high = t2, this.low = e2;
        } }), n.WordArray = r.extend({ init: function(t2, e2) {
          t2 = this.words = t2 || [], this.sigBytes = null != e2 ? e2 : 8 * t2.length;
        }, toX32: function() {
          for (var t2 = this.words, e2 = t2.length, r2 = [], n2 = 0; n2 < e2; n2++) {
            var o2 = t2[n2];
            r2.push(o2.high), r2.push(o2.low);
          }
          return i.create(r2, this.sigBytes);
        }, clone: function() {
          for (var t2 = r.clone.call(this), e2 = t2.words = this.words.slice(0), i2 = e2.length, n2 = 0; n2 < i2; n2++) e2[n2] = e2[n2].clone();
          return t2;
        } }), function() {
          if ("function" == typeof ArrayBuffer) {
            var t2 = c.lib.WordArray, e2 = t2.init, r2 = t2.init = function(t3) {
              if (t3 instanceof ArrayBuffer && (t3 = new Uint8Array(t3)), (t3 instanceof Int8Array || "undefined" != typeof Uint8ClampedArray && t3 instanceof Uint8ClampedArray || t3 instanceof Int16Array || t3 instanceof Uint16Array || t3 instanceof Int32Array || t3 instanceof Uint32Array || t3 instanceof Float32Array || t3 instanceof Float64Array) && (t3 = new Uint8Array(t3.buffer, t3.byteOffset, t3.byteLength)), t3 instanceof Uint8Array) {
                for (var r3 = t3.byteLength, i2 = [], n2 = 0; n2 < r3; n2++) i2[n2 >>> 2] |= t3[n2] << 24 - n2 % 4 * 8;
                e2.call(this, i2, r3);
              } else e2.apply(this, arguments);
            };
            r2.prototype = t2;
          }
        }(), function() {
          var t2 = c, e2 = t2.lib.WordArray, r2 = t2.enc;
          r2.Utf16 = r2.Utf16BE = { stringify: function(t3) {
            for (var e3 = t3.words, r3 = t3.sigBytes, i3 = [], n2 = 0; n2 < r3; n2 += 2) {
              var o2 = e3[n2 >>> 2] >>> 16 - n2 % 4 * 8 & 65535;
              i3.push(String.fromCharCode(o2));
            }
            return i3.join("");
          }, parse: function(t3) {
            for (var r3 = t3.length, i3 = [], n2 = 0; n2 < r3; n2++) i3[n2 >>> 1] |= t3.charCodeAt(n2) << 16 - n2 % 2 * 16;
            return e2.create(i3, 2 * r3);
          } };
          function i2(t3) {
            return t3 << 8 & 4278255360 | t3 >>> 8 & 16711935;
          }
          r2.Utf16LE = { stringify: function(t3) {
            for (var e3 = t3.words, r3 = t3.sigBytes, n2 = [], o2 = 0; o2 < r3; o2 += 2) {
              var s2 = i2(e3[o2 >>> 2] >>> 16 - o2 % 4 * 8 & 65535);
              n2.push(String.fromCharCode(s2));
            }
            return n2.join("");
          }, parse: function(t3) {
            for (var r3 = t3.length, n2 = [], o2 = 0; o2 < r3; o2++) n2[o2 >>> 1] |= i2(t3.charCodeAt(o2) << 16 - o2 % 2 * 16);
            return e2.create(n2, 2 * r3);
          } };
        }(), function() {
          var t2 = c, e2 = t2.lib.WordArray;
          t2.enc.Base64 = { stringify: function(t3) {
            var e3 = t3.words, r2 = t3.sigBytes, i2 = this._map;
            t3.clamp();
            for (var n2 = [], o2 = 0; o2 < r2; o2 += 3) for (var s2 = (e3[o2 >>> 2] >>> 24 - o2 % 4 * 8 & 255) << 16 | (e3[o2 + 1 >>> 2] >>> 24 - (o2 + 1) % 4 * 8 & 255) << 8 | e3[o2 + 2 >>> 2] >>> 24 - (o2 + 2) % 4 * 8 & 255, a2 = 0; a2 < 4 && o2 + 0.75 * a2 < r2; a2++) n2.push(i2.charAt(s2 >>> 6 * (3 - a2) & 63));
            var c2 = i2.charAt(64);
            if (c2) for (; n2.length % 4; ) n2.push(c2);
            return n2.join("");
          }, parse: function(t3) {
            var r2 = t3.length, i2 = this._map, n2 = this._reverseMap;
            if (!n2) {
              n2 = this._reverseMap = [];
              for (var o2 = 0; o2 < i2.length; o2++) n2[i2.charCodeAt(o2)] = o2;
            }
            var s2 = i2.charAt(64);
            if (s2) {
              var a2 = t3.indexOf(s2);
              -1 !== a2 && (r2 = a2);
            }
            return function(t4, r3, i3) {
              for (var n3 = [], o3 = 0, s3 = 0; s3 < r3; s3++) if (s3 % 4) {
                var a3 = i3[t4.charCodeAt(s3 - 1)] << s3 % 4 * 2 | i3[t4.charCodeAt(s3)] >>> 6 - s3 % 4 * 2;
                n3[o3 >>> 2] |= a3 << 24 - o3 % 4 * 8, o3++;
              }
              return e2.create(n3, o3);
            }(t3, r2, n2);
          }, _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" };
        }(), function() {
          var t2 = c, e2 = t2.lib.WordArray;
          t2.enc.Base64url = { stringify: function(t3, e3 = true) {
            var r2 = t3.words, i2 = t3.sigBytes, n2 = e3 ? this._safe_map : this._map;
            t3.clamp();
            for (var o2 = [], s2 = 0; s2 < i2; s2 += 3) for (var a2 = (r2[s2 >>> 2] >>> 24 - s2 % 4 * 8 & 255) << 16 | (r2[s2 + 1 >>> 2] >>> 24 - (s2 + 1) % 4 * 8 & 255) << 8 | r2[s2 + 2 >>> 2] >>> 24 - (s2 + 2) % 4 * 8 & 255, c2 = 0; c2 < 4 && s2 + 0.75 * c2 < i2; c2++) o2.push(n2.charAt(a2 >>> 6 * (3 - c2) & 63));
            var h = n2.charAt(64);
            if (h) for (; o2.length % 4; ) o2.push(h);
            return o2.join("");
          }, parse: function(t3, r2 = true) {
            var i2 = t3.length, n2 = r2 ? this._safe_map : this._map, o2 = this._reverseMap;
            if (!o2) {
              o2 = this._reverseMap = [];
              for (var s2 = 0; s2 < n2.length; s2++) o2[n2.charCodeAt(s2)] = s2;
            }
            var a2 = n2.charAt(64);
            if (a2) {
              var c2 = t3.indexOf(a2);
              -1 !== c2 && (i2 = c2);
            }
            return function(t4, r3, i3) {
              for (var n3 = [], o3 = 0, s3 = 0; s3 < r3; s3++) if (s3 % 4) {
                var a3 = i3[t4.charCodeAt(s3 - 1)] << s3 % 4 * 2 | i3[t4.charCodeAt(s3)] >>> 6 - s3 % 4 * 2;
                n3[o3 >>> 2] |= a3 << 24 - o3 % 4 * 8, o3++;
              }
              return e2.create(n3, o3);
            }(t3, i2, o2);
          }, _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", _safe_map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_" };
        }(), function(t2) {
          var e2 = c, r2 = e2.lib, i2 = r2.WordArray, n2 = r2.Hasher, o2 = e2.algo, s2 = [];
          !function() {
            for (var e3 = 0; e3 < 64; e3++) s2[e3] = 4294967296 * t2.abs(t2.sin(e3 + 1)) | 0;
          }();
          var a2 = o2.MD5 = n2.extend({ _doReset: function() {
            this._hash = new i2.init([1732584193, 4023233417, 2562383102, 271733878]);
          }, _doProcessBlock: function(t3, e3) {
            for (var r3 = 0; r3 < 16; r3++) {
              var i3 = e3 + r3, n3 = t3[i3];
              t3[i3] = 16711935 & (n3 << 8 | n3 >>> 24) | 4278255360 & (n3 << 24 | n3 >>> 8);
            }
            var o3 = this._hash.words, a3 = t3[e3 + 0], c2 = t3[e3 + 1], d = t3[e3 + 2], p = t3[e3 + 3], _2 = t3[e3 + 4], v = t3[e3 + 5], y = t3[e3 + 6], g = t3[e3 + 7], B = t3[e3 + 8], w = t3[e3 + 9], k = t3[e3 + 10], m = t3[e3 + 11], S = t3[e3 + 12], x = t3[e3 + 13], b = t3[e3 + 14], A2 = t3[e3 + 15], H2 = o3[0], z2 = o3[1], C = o3[2], D2 = o3[3];
            H2 = h(H2, z2, C, D2, a3, 7, s2[0]), D2 = h(D2, H2, z2, C, c2, 12, s2[1]), C = h(C, D2, H2, z2, d, 17, s2[2]), z2 = h(z2, C, D2, H2, p, 22, s2[3]), H2 = h(H2, z2, C, D2, _2, 7, s2[4]), D2 = h(D2, H2, z2, C, v, 12, s2[5]), C = h(C, D2, H2, z2, y, 17, s2[6]), z2 = h(z2, C, D2, H2, g, 22, s2[7]), H2 = h(H2, z2, C, D2, B, 7, s2[8]), D2 = h(D2, H2, z2, C, w, 12, s2[9]), C = h(C, D2, H2, z2, k, 17, s2[10]), z2 = h(z2, C, D2, H2, m, 22, s2[11]), H2 = h(H2, z2, C, D2, S, 7, s2[12]), D2 = h(D2, H2, z2, C, x, 12, s2[13]), C = h(C, D2, H2, z2, b, 17, s2[14]), H2 = l(H2, z2 = h(z2, C, D2, H2, A2, 22, s2[15]), C, D2, c2, 5, s2[16]), D2 = l(D2, H2, z2, C, y, 9, s2[17]), C = l(C, D2, H2, z2, m, 14, s2[18]), z2 = l(z2, C, D2, H2, a3, 20, s2[19]), H2 = l(H2, z2, C, D2, v, 5, s2[20]), D2 = l(D2, H2, z2, C, k, 9, s2[21]), C = l(C, D2, H2, z2, A2, 14, s2[22]), z2 = l(z2, C, D2, H2, _2, 20, s2[23]), H2 = l(H2, z2, C, D2, w, 5, s2[24]), D2 = l(D2, H2, z2, C, b, 9, s2[25]), C = l(C, D2, H2, z2, p, 14, s2[26]), z2 = l(z2, C, D2, H2, B, 20, s2[27]), H2 = l(H2, z2, C, D2, x, 5, s2[28]), D2 = l(D2, H2, z2, C, d, 9, s2[29]), C = l(C, D2, H2, z2, g, 14, s2[30]), H2 = f(H2, z2 = l(z2, C, D2, H2, S, 20, s2[31]), C, D2, v, 4, s2[32]), D2 = f(D2, H2, z2, C, B, 11, s2[33]), C = f(C, D2, H2, z2, m, 16, s2[34]), z2 = f(z2, C, D2, H2, b, 23, s2[35]), H2 = f(H2, z2, C, D2, c2, 4, s2[36]), D2 = f(D2, H2, z2, C, _2, 11, s2[37]), C = f(C, D2, H2, z2, g, 16, s2[38]), z2 = f(z2, C, D2, H2, k, 23, s2[39]), H2 = f(H2, z2, C, D2, x, 4, s2[40]), D2 = f(D2, H2, z2, C, a3, 11, s2[41]), C = f(C, D2, H2, z2, p, 16, s2[42]), z2 = f(z2, C, D2, H2, y, 23, s2[43]), H2 = f(H2, z2, C, D2, w, 4, s2[44]), D2 = f(D2, H2, z2, C, S, 11, s2[45]), C = f(C, D2, H2, z2, A2, 16, s2[46]), H2 = u(H2, z2 = f(z2, C, D2, H2, d, 23, s2[47]), C, D2, a3, 6, s2[48]), D2 = u(D2, H2, z2, C, g, 10, s2[49]), C = u(C, D2, H2, z2, b, 15, s2[50]), z2 = u(z2, C, D2, H2, v, 21, s2[51]), H2 = u(H2, z2, C, D2, S, 6, s2[52]), D2 = u(D2, H2, z2, C, p, 10, s2[53]), C = u(C, D2, H2, z2, k, 15, s2[54]), z2 = u(z2, C, D2, H2, c2, 21, s2[55]), H2 = u(H2, z2, C, D2, B, 6, s2[56]), D2 = u(D2, H2, z2, C, A2, 10, s2[57]), C = u(C, D2, H2, z2, y, 15, s2[58]), z2 = u(z2, C, D2, H2, x, 21, s2[59]), H2 = u(H2, z2, C, D2, _2, 6, s2[60]), D2 = u(D2, H2, z2, C, m, 10, s2[61]), C = u(C, D2, H2, z2, d, 15, s2[62]), z2 = u(z2, C, D2, H2, w, 21, s2[63]), o3[0] = o3[0] + H2 | 0, o3[1] = o3[1] + z2 | 0, o3[2] = o3[2] + C | 0, o3[3] = o3[3] + D2 | 0;
          }, _doFinalize: function() {
            var e3 = this._data, r3 = e3.words, i3 = 8 * this._nDataBytes, n3 = 8 * e3.sigBytes;
            r3[n3 >>> 5] |= 128 << 24 - n3 % 32;
            var o3 = t2.floor(i3 / 4294967296), s3 = i3;
            r3[15 + (n3 + 64 >>> 9 << 4)] = 16711935 & (o3 << 8 | o3 >>> 24) | 4278255360 & (o3 << 24 | o3 >>> 8), r3[14 + (n3 + 64 >>> 9 << 4)] = 16711935 & (s3 << 8 | s3 >>> 24) | 4278255360 & (s3 << 24 | s3 >>> 8), e3.sigBytes = 4 * (r3.length + 1), this._process();
            for (var a3 = this._hash, c2 = a3.words, h2 = 0; h2 < 4; h2++) {
              var l2 = c2[h2];
              c2[h2] = 16711935 & (l2 << 8 | l2 >>> 24) | 4278255360 & (l2 << 24 | l2 >>> 8);
            }
            return a3;
          }, clone: function() {
            var t3 = n2.clone.call(this);
            return t3._hash = this._hash.clone(), t3;
          } });
          function h(t3, e3, r3, i3, n3, o3, s3) {
            var a3 = t3 + (e3 & r3 | ~e3 & i3) + n3 + s3;
            return (a3 << o3 | a3 >>> 32 - o3) + e3;
          }
          function l(t3, e3, r3, i3, n3, o3, s3) {
            var a3 = t3 + (e3 & i3 | r3 & ~i3) + n3 + s3;
            return (a3 << o3 | a3 >>> 32 - o3) + e3;
          }
          function f(t3, e3, r3, i3, n3, o3, s3) {
            var a3 = t3 + (e3 ^ r3 ^ i3) + n3 + s3;
            return (a3 << o3 | a3 >>> 32 - o3) + e3;
          }
          function u(t3, e3, r3, i3, n3, o3, s3) {
            var a3 = t3 + (r3 ^ (e3 | ~i3)) + n3 + s3;
            return (a3 << o3 | a3 >>> 32 - o3) + e3;
          }
          e2.MD5 = n2._createHelper(a2), e2.HmacMD5 = n2._createHmacHelper(a2);
        }(Math), function() {
          var t2 = c, e2 = t2.lib, r2 = e2.WordArray, i2 = e2.Hasher, n2 = t2.algo, o2 = [], s2 = n2.SHA1 = i2.extend({ _doReset: function() {
            this._hash = new r2.init([1732584193, 4023233417, 2562383102, 271733878, 3285377520]);
          }, _doProcessBlock: function(t3, e3) {
            for (var r3 = this._hash.words, i3 = r3[0], n3 = r3[1], s3 = r3[2], a2 = r3[3], c2 = r3[4], h = 0; h < 80; h++) {
              if (h < 16) o2[h] = 0 | t3[e3 + h];
              else {
                var l = o2[h - 3] ^ o2[h - 8] ^ o2[h - 14] ^ o2[h - 16];
                o2[h] = l << 1 | l >>> 31;
              }
              var f = (i3 << 5 | i3 >>> 27) + c2 + o2[h];
              f += h < 20 ? 1518500249 + (n3 & s3 | ~n3 & a2) : h < 40 ? 1859775393 + (n3 ^ s3 ^ a2) : h < 60 ? (n3 & s3 | n3 & a2 | s3 & a2) - 1894007588 : (n3 ^ s3 ^ a2) - 899497514, c2 = a2, a2 = s3, s3 = n3 << 30 | n3 >>> 2, n3 = i3, i3 = f;
            }
            r3[0] = r3[0] + i3 | 0, r3[1] = r3[1] + n3 | 0, r3[2] = r3[2] + s3 | 0, r3[3] = r3[3] + a2 | 0, r3[4] = r3[4] + c2 | 0;
          }, _doFinalize: function() {
            var t3 = this._data, e3 = t3.words, r3 = 8 * this._nDataBytes, i3 = 8 * t3.sigBytes;
            return e3[i3 >>> 5] |= 128 << 24 - i3 % 32, e3[14 + (i3 + 64 >>> 9 << 4)] = Math.floor(r3 / 4294967296), e3[15 + (i3 + 64 >>> 9 << 4)] = r3, t3.sigBytes = 4 * e3.length, this._process(), this._hash;
          }, clone: function() {
            var t3 = i2.clone.call(this);
            return t3._hash = this._hash.clone(), t3;
          } });
          t2.SHA1 = i2._createHelper(s2), t2.HmacSHA1 = i2._createHmacHelper(s2);
        }(), function(t2) {
          var e2 = c, r2 = e2.lib, i2 = r2.WordArray, n2 = r2.Hasher, o2 = e2.algo, s2 = [], a2 = [];
          !function() {
            function e3(e4) {
              for (var r4 = t2.sqrt(e4), i4 = 2; i4 <= r4; i4++) if (!(e4 % i4)) return false;
              return true;
            }
            function r3(t3) {
              return 4294967296 * (t3 - (0 | t3)) | 0;
            }
            for (var i3 = 2, n3 = 0; n3 < 64; ) e3(i3) && (n3 < 8 && (s2[n3] = r3(t2.pow(i3, 0.5))), a2[n3] = r3(t2.pow(i3, 1 / 3)), n3++), i3++;
          }();
          var h = [], l = o2.SHA256 = n2.extend({ _doReset: function() {
            this._hash = new i2.init(s2.slice(0));
          }, _doProcessBlock: function(t3, e3) {
            for (var r3 = this._hash.words, i3 = r3[0], n3 = r3[1], o3 = r3[2], s3 = r3[3], c2 = r3[4], l2 = r3[5], f = r3[6], u = r3[7], d = 0; d < 64; d++) {
              if (d < 16) h[d] = 0 | t3[e3 + d];
              else {
                var p = h[d - 15], _2 = (p << 25 | p >>> 7) ^ (p << 14 | p >>> 18) ^ p >>> 3, v = h[d - 2], y = (v << 15 | v >>> 17) ^ (v << 13 | v >>> 19) ^ v >>> 10;
                h[d] = _2 + h[d - 7] + y + h[d - 16];
              }
              var g = i3 & n3 ^ i3 & o3 ^ n3 & o3, B = (i3 << 30 | i3 >>> 2) ^ (i3 << 19 | i3 >>> 13) ^ (i3 << 10 | i3 >>> 22), w = u + ((c2 << 26 | c2 >>> 6) ^ (c2 << 21 | c2 >>> 11) ^ (c2 << 7 | c2 >>> 25)) + (c2 & l2 ^ ~c2 & f) + a2[d] + h[d];
              u = f, f = l2, l2 = c2, c2 = s3 + w | 0, s3 = o3, o3 = n3, n3 = i3, i3 = w + (B + g) | 0;
            }
            r3[0] = r3[0] + i3 | 0, r3[1] = r3[1] + n3 | 0, r3[2] = r3[2] + o3 | 0, r3[3] = r3[3] + s3 | 0, r3[4] = r3[4] + c2 | 0, r3[5] = r3[5] + l2 | 0, r3[6] = r3[6] + f | 0, r3[7] = r3[7] + u | 0;
          }, _doFinalize: function() {
            var e3 = this._data, r3 = e3.words, i3 = 8 * this._nDataBytes, n3 = 8 * e3.sigBytes;
            return r3[n3 >>> 5] |= 128 << 24 - n3 % 32, r3[14 + (n3 + 64 >>> 9 << 4)] = t2.floor(i3 / 4294967296), r3[15 + (n3 + 64 >>> 9 << 4)] = i3, e3.sigBytes = 4 * r3.length, this._process(), this._hash;
          }, clone: function() {
            var t3 = n2.clone.call(this);
            return t3._hash = this._hash.clone(), t3;
          } });
          e2.SHA256 = n2._createHelper(l), e2.HmacSHA256 = n2._createHmacHelper(l);
        }(Math), function() {
          var t2 = c, e2 = t2.lib.WordArray, r2 = t2.algo, i2 = r2.SHA256, n2 = r2.SHA224 = i2.extend({ _doReset: function() {
            this._hash = new e2.init([3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025, 1694076839, 3204075428]);
          }, _doFinalize: function() {
            var t3 = i2._doFinalize.call(this);
            return t3.sigBytes -= 4, t3;
          } });
          t2.SHA224 = i2._createHelper(n2), t2.HmacSHA224 = i2._createHmacHelper(n2);
        }(), function() {
          var t2 = c, e2 = t2.lib.Hasher, r2 = t2.x64, i2 = r2.Word, n2 = r2.WordArray, o2 = t2.algo;
          function s2() {
            return i2.create.apply(i2, arguments);
          }
          var a2 = [s2(1116352408, 3609767458), s2(1899447441, 602891725), s2(3049323471, 3964484399), s2(3921009573, 2173295548), s2(961987163, 4081628472), s2(1508970993, 3053834265), s2(2453635748, 2937671579), s2(2870763221, 3664609560), s2(3624381080, 2734883394), s2(310598401, 1164996542), s2(607225278, 1323610764), s2(1426881987, 3590304994), s2(1925078388, 4068182383), s2(2162078206, 991336113), s2(2614888103, 633803317), s2(3248222580, 3479774868), s2(3835390401, 2666613458), s2(4022224774, 944711139), s2(264347078, 2341262773), s2(604807628, 2007800933), s2(770255983, 1495990901), s2(1249150122, 1856431235), s2(1555081692, 3175218132), s2(1996064986, 2198950837), s2(2554220882, 3999719339), s2(2821834349, 766784016), s2(2952996808, 2566594879), s2(3210313671, 3203337956), s2(3336571891, 1034457026), s2(3584528711, 2466948901), s2(113926993, 3758326383), s2(338241895, 168717936), s2(666307205, 1188179964), s2(773529912, 1546045734), s2(1294757372, 1522805485), s2(1396182291, 2643833823), s2(1695183700, 2343527390), s2(1986661051, 1014477480), s2(2177026350, 1206759142), s2(2456956037, 344077627), s2(2730485921, 1290863460), s2(2820302411, 3158454273), s2(3259730800, 3505952657), s2(3345764771, 106217008), s2(3516065817, 3606008344), s2(3600352804, 1432725776), s2(4094571909, 1467031594), s2(275423344, 851169720), s2(430227734, 3100823752), s2(506948616, 1363258195), s2(659060556, 3750685593), s2(883997877, 3785050280), s2(958139571, 3318307427), s2(1322822218, 3812723403), s2(1537002063, 2003034995), s2(1747873779, 3602036899), s2(1955562222, 1575990012), s2(2024104815, 1125592928), s2(2227730452, 2716904306), s2(2361852424, 442776044), s2(2428436474, 593698344), s2(2756734187, 3733110249), s2(3204031479, 2999351573), s2(3329325298, 3815920427), s2(3391569614, 3928383900), s2(3515267271, 566280711), s2(3940187606, 3454069534), s2(4118630271, 4000239992), s2(116418474, 1914138554), s2(174292421, 2731055270), s2(289380356, 3203993006), s2(460393269, 320620315), s2(685471733, 587496836), s2(852142971, 1086792851), s2(1017036298, 365543100), s2(1126000580, 2618297676), s2(1288033470, 3409855158), s2(1501505948, 4234509866), s2(1607167915, 987167468), s2(1816402316, 1246189591)], h = [];
          !function() {
            for (var t3 = 0; t3 < 80; t3++) h[t3] = s2();
          }();
          var l = o2.SHA512 = e2.extend({ _doReset: function() {
            this._hash = new n2.init([new i2.init(1779033703, 4089235720), new i2.init(3144134277, 2227873595), new i2.init(1013904242, 4271175723), new i2.init(2773480762, 1595750129), new i2.init(1359893119, 2917565137), new i2.init(2600822924, 725511199), new i2.init(528734635, 4215389547), new i2.init(1541459225, 327033209)]);
          }, _doProcessBlock: function(t3, e3) {
            for (var r3 = this._hash.words, i3 = r3[0], n3 = r3[1], o3 = r3[2], s3 = r3[3], c2 = r3[4], l2 = r3[5], f = r3[6], u = r3[7], d = i3.high, p = i3.low, _2 = n3.high, v = n3.low, y = o3.high, g = o3.low, B = s3.high, w = s3.low, k = c2.high, m = c2.low, S = l2.high, x = l2.low, b = f.high, A2 = f.low, H2 = u.high, z2 = u.low, C = d, D2 = p, E = _2, R = v, M2 = y, F2 = g, P = B, W2 = w, O2 = k, I2 = m, U2 = S, K2 = x, X2 = b, L2 = A2, j2 = H2, T2 = z2, N2 = 0; N2 < 80; N2++) {
              var q2, Z2, V2 = h[N2];
              if (N2 < 16) Z2 = V2.high = 0 | t3[e3 + 2 * N2], q2 = V2.low = 0 | t3[e3 + 2 * N2 + 1];
              else {
                var G2 = h[N2 - 15], J2 = G2.high, Q2 = G2.low, Y2 = (J2 >>> 1 | Q2 << 31) ^ (J2 >>> 8 | Q2 << 24) ^ J2 >>> 7, $2 = (Q2 >>> 1 | J2 << 31) ^ (Q2 >>> 8 | J2 << 24) ^ (Q2 >>> 7 | J2 << 25), tt2 = h[N2 - 2], et2 = tt2.high, rt2 = tt2.low, it2 = (et2 >>> 19 | rt2 << 13) ^ (et2 << 3 | rt2 >>> 29) ^ et2 >>> 6, nt2 = (rt2 >>> 19 | et2 << 13) ^ (rt2 << 3 | et2 >>> 29) ^ (rt2 >>> 6 | et2 << 26), ot2 = h[N2 - 7], st2 = ot2.high, at2 = ot2.low, ct2 = h[N2 - 16], ht2 = ct2.high, lt2 = ct2.low;
                Z2 = (Z2 = (Z2 = Y2 + st2 + ((q2 = $2 + at2) >>> 0 < $2 >>> 0 ? 1 : 0)) + it2 + ((q2 += nt2) >>> 0 < nt2 >>> 0 ? 1 : 0)) + ht2 + ((q2 += lt2) >>> 0 < lt2 >>> 0 ? 1 : 0), V2.high = Z2, V2.low = q2;
              }
              var ft2, ut2 = O2 & U2 ^ ~O2 & X2, dt2 = I2 & K2 ^ ~I2 & L2, pt2 = C & E ^ C & M2 ^ E & M2, _t2 = D2 & R ^ D2 & F2 ^ R & F2, vt2 = (C >>> 28 | D2 << 4) ^ (C << 30 | D2 >>> 2) ^ (C << 25 | D2 >>> 7), yt2 = (D2 >>> 28 | C << 4) ^ (D2 << 30 | C >>> 2) ^ (D2 << 25 | C >>> 7), gt2 = (O2 >>> 14 | I2 << 18) ^ (O2 >>> 18 | I2 << 14) ^ (O2 << 23 | I2 >>> 9), Bt2 = (I2 >>> 14 | O2 << 18) ^ (I2 >>> 18 | O2 << 14) ^ (I2 << 23 | O2 >>> 9), wt2 = a2[N2], kt2 = wt2.high, mt2 = wt2.low, St2 = j2 + gt2 + ((ft2 = T2 + Bt2) >>> 0 < T2 >>> 0 ? 1 : 0), xt2 = yt2 + _t2;
              j2 = X2, T2 = L2, X2 = U2, L2 = K2, U2 = O2, K2 = I2, O2 = P + (St2 = (St2 = (St2 = St2 + ut2 + ((ft2 = ft2 + dt2) >>> 0 < dt2 >>> 0 ? 1 : 0)) + kt2 + ((ft2 = ft2 + mt2) >>> 0 < mt2 >>> 0 ? 1 : 0)) + Z2 + ((ft2 = ft2 + q2) >>> 0 < q2 >>> 0 ? 1 : 0)) + ((I2 = W2 + ft2 | 0) >>> 0 < W2 >>> 0 ? 1 : 0) | 0, P = M2, W2 = F2, M2 = E, F2 = R, E = C, R = D2, C = St2 + (vt2 + pt2 + (xt2 >>> 0 < yt2 >>> 0 ? 1 : 0)) + ((D2 = ft2 + xt2 | 0) >>> 0 < ft2 >>> 0 ? 1 : 0) | 0;
            }
            p = i3.low = p + D2, i3.high = d + C + (p >>> 0 < D2 >>> 0 ? 1 : 0), v = n3.low = v + R, n3.high = _2 + E + (v >>> 0 < R >>> 0 ? 1 : 0), g = o3.low = g + F2, o3.high = y + M2 + (g >>> 0 < F2 >>> 0 ? 1 : 0), w = s3.low = w + W2, s3.high = B + P + (w >>> 0 < W2 >>> 0 ? 1 : 0), m = c2.low = m + I2, c2.high = k + O2 + (m >>> 0 < I2 >>> 0 ? 1 : 0), x = l2.low = x + K2, l2.high = S + U2 + (x >>> 0 < K2 >>> 0 ? 1 : 0), A2 = f.low = A2 + L2, f.high = b + X2 + (A2 >>> 0 < L2 >>> 0 ? 1 : 0), z2 = u.low = z2 + T2, u.high = H2 + j2 + (z2 >>> 0 < T2 >>> 0 ? 1 : 0);
          }, _doFinalize: function() {
            var t3 = this._data, e3 = t3.words, r3 = 8 * this._nDataBytes, i3 = 8 * t3.sigBytes;
            return e3[i3 >>> 5] |= 128 << 24 - i3 % 32, e3[30 + (i3 + 128 >>> 10 << 5)] = Math.floor(r3 / 4294967296), e3[31 + (i3 + 128 >>> 10 << 5)] = r3, t3.sigBytes = 4 * e3.length, this._process(), this._hash.toX32();
          }, clone: function() {
            var t3 = e2.clone.call(this);
            return t3._hash = this._hash.clone(), t3;
          }, blockSize: 32 });
          t2.SHA512 = e2._createHelper(l), t2.HmacSHA512 = e2._createHmacHelper(l);
        }(), function() {
          var t2 = c, e2 = t2.x64, r2 = e2.Word, i2 = e2.WordArray, n2 = t2.algo, o2 = n2.SHA512, s2 = n2.SHA384 = o2.extend({ _doReset: function() {
            this._hash = new i2.init([new r2.init(3418070365, 3238371032), new r2.init(1654270250, 914150663), new r2.init(2438529370, 812702999), new r2.init(355462360, 4144912697), new r2.init(1731405415, 4290775857), new r2.init(2394180231, 1750603025), new r2.init(3675008525, 1694076839), new r2.init(1203062813, 3204075428)]);
          }, _doFinalize: function() {
            var t3 = o2._doFinalize.call(this);
            return t3.sigBytes -= 16, t3;
          } });
          t2.SHA384 = o2._createHelper(s2), t2.HmacSHA384 = o2._createHmacHelper(s2);
        }(), function(t2) {
          var e2 = c, r2 = e2.lib, i2 = r2.WordArray, n2 = r2.Hasher, o2 = e2.x64.Word, s2 = e2.algo, a2 = [], h = [], l = [];
          !function() {
            for (var t3 = 1, e3 = 0, r3 = 0; r3 < 24; r3++) {
              a2[t3 + 5 * e3] = (r3 + 1) * (r3 + 2) / 2 % 64;
              var i3 = (2 * t3 + 3 * e3) % 5;
              t3 = e3 % 5, e3 = i3;
            }
            for (t3 = 0; t3 < 5; t3++) for (e3 = 0; e3 < 5; e3++) h[t3 + 5 * e3] = e3 + (2 * t3 + 3 * e3) % 5 * 5;
            for (var n3 = 1, s3 = 0; s3 < 24; s3++) {
              for (var c2 = 0, f2 = 0, u2 = 0; u2 < 7; u2++) {
                if (1 & n3) {
                  var d = (1 << u2) - 1;
                  d < 32 ? f2 ^= 1 << d : c2 ^= 1 << d - 32;
                }
                128 & n3 ? n3 = n3 << 1 ^ 113 : n3 <<= 1;
              }
              l[s3] = o2.create(c2, f2);
            }
          }();
          var f = [];
          !function() {
            for (var t3 = 0; t3 < 25; t3++) f[t3] = o2.create();
          }();
          var u = s2.SHA3 = n2.extend({ cfg: n2.cfg.extend({ outputLength: 512 }), _doReset: function() {
            for (var t3 = this._state = [], e3 = 0; e3 < 25; e3++) t3[e3] = new o2.init();
            this.blockSize = (1600 - 2 * this.cfg.outputLength) / 32;
          }, _doProcessBlock: function(t3, e3) {
            for (var r3 = this._state, i3 = this.blockSize / 2, n3 = 0; n3 < i3; n3++) {
              var o3 = t3[e3 + 2 * n3], s3 = t3[e3 + 2 * n3 + 1];
              o3 = 16711935 & (o3 << 8 | o3 >>> 24) | 4278255360 & (o3 << 24 | o3 >>> 8), s3 = 16711935 & (s3 << 8 | s3 >>> 24) | 4278255360 & (s3 << 24 | s3 >>> 8), (z2 = r3[n3]).high ^= s3, z2.low ^= o3;
            }
            for (var c2 = 0; c2 < 24; c2++) {
              for (var u2 = 0; u2 < 5; u2++) {
                for (var d = 0, p = 0, _2 = 0; _2 < 5; _2++) {
                  d ^= (z2 = r3[u2 + 5 * _2]).high, p ^= z2.low;
                }
                var v = f[u2];
                v.high = d, v.low = p;
              }
              for (u2 = 0; u2 < 5; u2++) {
                var y = f[(u2 + 4) % 5], g = f[(u2 + 1) % 5], B = g.high, w = g.low;
                for (d = y.high ^ (B << 1 | w >>> 31), p = y.low ^ (w << 1 | B >>> 31), _2 = 0; _2 < 5; _2++) {
                  (z2 = r3[u2 + 5 * _2]).high ^= d, z2.low ^= p;
                }
              }
              for (var k = 1; k < 25; k++) {
                var m = (z2 = r3[k]).high, S = z2.low, x = a2[k];
                x < 32 ? (d = m << x | S >>> 32 - x, p = S << x | m >>> 32 - x) : (d = S << x - 32 | m >>> 64 - x, p = m << x - 32 | S >>> 64 - x);
                var b = f[h[k]];
                b.high = d, b.low = p;
              }
              var A2 = f[0], H2 = r3[0];
              A2.high = H2.high, A2.low = H2.low;
              for (u2 = 0; u2 < 5; u2++) for (_2 = 0; _2 < 5; _2++) {
                var z2 = r3[k = u2 + 5 * _2], C = f[k], D2 = f[(u2 + 1) % 5 + 5 * _2], E = f[(u2 + 2) % 5 + 5 * _2];
                z2.high = C.high ^ ~D2.high & E.high, z2.low = C.low ^ ~D2.low & E.low;
              }
              z2 = r3[0];
              var R = l[c2];
              z2.high ^= R.high, z2.low ^= R.low;
            }
          }, _doFinalize: function() {
            var e3 = this._data, r3 = e3.words, n3 = (this._nDataBytes, 8 * e3.sigBytes), o3 = 32 * this.blockSize;
            r3[n3 >>> 5] |= 1 << 24 - n3 % 32, r3[(t2.ceil((n3 + 1) / o3) * o3 >>> 5) - 1] |= 128, e3.sigBytes = 4 * r3.length, this._process();
            for (var s3 = this._state, a3 = this.cfg.outputLength / 8, c2 = a3 / 8, h2 = [], l2 = 0; l2 < c2; l2++) {
              var f2 = s3[l2], u2 = f2.high, d = f2.low;
              u2 = 16711935 & (u2 << 8 | u2 >>> 24) | 4278255360 & (u2 << 24 | u2 >>> 8), d = 16711935 & (d << 8 | d >>> 24) | 4278255360 & (d << 24 | d >>> 8), h2.push(d), h2.push(u2);
            }
            return new i2.init(h2, a3);
          }, clone: function() {
            for (var t3 = n2.clone.call(this), e3 = t3._state = this._state.slice(0), r3 = 0; r3 < 25; r3++) e3[r3] = e3[r3].clone();
            return t3;
          } });
          e2.SHA3 = n2._createHelper(u), e2.HmacSHA3 = n2._createHmacHelper(u);
        }(Math), /** @preserve
        	(c) 2012 by Cédric Mesnil. All rights reserved.
        
        	Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
        
        	    - Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
        	    - Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
        
        	THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
        	*/
        function(t2) {
          var e2 = c, r2 = e2.lib, i2 = r2.WordArray, n2 = r2.Hasher, o2 = e2.algo, s2 = i2.create([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13]), a2 = i2.create([5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11]), h = i2.create([11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6]), l = i2.create([8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11]), f = i2.create([0, 1518500249, 1859775393, 2400959708, 2840853838]), u = i2.create([1352829926, 1548603684, 1836072691, 2053994217, 0]), d = o2.RIPEMD160 = n2.extend({ _doReset: function() {
            this._hash = i2.create([1732584193, 4023233417, 2562383102, 271733878, 3285377520]);
          }, _doProcessBlock: function(t3, e3) {
            for (var r3 = 0; r3 < 16; r3++) {
              var i3 = e3 + r3, n3 = t3[i3];
              t3[i3] = 16711935 & (n3 << 8 | n3 >>> 24) | 4278255360 & (n3 << 24 | n3 >>> 8);
            }
            var o3, c2, d2, w, k, m, S, x, b, A2, H2, z2 = this._hash.words, C = f.words, D2 = u.words, E = s2.words, R = a2.words, M2 = h.words, F2 = l.words;
            m = o3 = z2[0], S = c2 = z2[1], x = d2 = z2[2], b = w = z2[3], A2 = k = z2[4];
            for (r3 = 0; r3 < 80; r3 += 1) H2 = o3 + t3[e3 + E[r3]] | 0, H2 += r3 < 16 ? p(c2, d2, w) + C[0] : r3 < 32 ? _2(c2, d2, w) + C[1] : r3 < 48 ? v(c2, d2, w) + C[2] : r3 < 64 ? y(c2, d2, w) + C[3] : g(c2, d2, w) + C[4], H2 = (H2 = B(H2 |= 0, M2[r3])) + k | 0, o3 = k, k = w, w = B(d2, 10), d2 = c2, c2 = H2, H2 = m + t3[e3 + R[r3]] | 0, H2 += r3 < 16 ? g(S, x, b) + D2[0] : r3 < 32 ? y(S, x, b) + D2[1] : r3 < 48 ? v(S, x, b) + D2[2] : r3 < 64 ? _2(S, x, b) + D2[3] : p(S, x, b) + D2[4], H2 = (H2 = B(H2 |= 0, F2[r3])) + A2 | 0, m = A2, A2 = b, b = B(x, 10), x = S, S = H2;
            H2 = z2[1] + d2 + b | 0, z2[1] = z2[2] + w + A2 | 0, z2[2] = z2[3] + k + m | 0, z2[3] = z2[4] + o3 + S | 0, z2[4] = z2[0] + c2 + x | 0, z2[0] = H2;
          }, _doFinalize: function() {
            var t3 = this._data, e3 = t3.words, r3 = 8 * this._nDataBytes, i3 = 8 * t3.sigBytes;
            e3[i3 >>> 5] |= 128 << 24 - i3 % 32, e3[14 + (i3 + 64 >>> 9 << 4)] = 16711935 & (r3 << 8 | r3 >>> 24) | 4278255360 & (r3 << 24 | r3 >>> 8), t3.sigBytes = 4 * (e3.length + 1), this._process();
            for (var n3 = this._hash, o3 = n3.words, s3 = 0; s3 < 5; s3++) {
              var a3 = o3[s3];
              o3[s3] = 16711935 & (a3 << 8 | a3 >>> 24) | 4278255360 & (a3 << 24 | a3 >>> 8);
            }
            return n3;
          }, clone: function() {
            var t3 = n2.clone.call(this);
            return t3._hash = this._hash.clone(), t3;
          } });
          function p(t3, e3, r3) {
            return t3 ^ e3 ^ r3;
          }
          function _2(t3, e3, r3) {
            return t3 & e3 | ~t3 & r3;
          }
          function v(t3, e3, r3) {
            return (t3 | ~e3) ^ r3;
          }
          function y(t3, e3, r3) {
            return t3 & r3 | e3 & ~r3;
          }
          function g(t3, e3, r3) {
            return t3 ^ (e3 | ~r3);
          }
          function B(t3, e3) {
            return t3 << e3 | t3 >>> 32 - e3;
          }
          e2.RIPEMD160 = n2._createHelper(d), e2.HmacRIPEMD160 = n2._createHmacHelper(d);
        }(Math), function() {
          var t2 = c, e2 = t2.lib.Base, r2 = t2.enc.Utf8;
          t2.algo.HMAC = e2.extend({ init: function(t3, e3) {
            t3 = this._hasher = new t3.init(), "string" == typeof e3 && (e3 = r2.parse(e3));
            var i2 = t3.blockSize, n2 = 4 * i2;
            e3.sigBytes > n2 && (e3 = t3.finalize(e3)), e3.clamp();
            for (var o2 = this._oKey = e3.clone(), s2 = this._iKey = e3.clone(), a2 = o2.words, c2 = s2.words, h = 0; h < i2; h++) a2[h] ^= 1549556828, c2[h] ^= 909522486;
            o2.sigBytes = s2.sigBytes = n2, this.reset();
          }, reset: function() {
            var t3 = this._hasher;
            t3.reset(), t3.update(this._iKey);
          }, update: function(t3) {
            return this._hasher.update(t3), this;
          }, finalize: function(t3) {
            var e3 = this._hasher, r3 = e3.finalize(t3);
            return e3.reset(), e3.finalize(this._oKey.clone().concat(r3));
          } });
        }(), function() {
          var t2 = c, e2 = t2.lib, r2 = e2.Base, i2 = e2.WordArray, n2 = t2.algo, o2 = n2.SHA1, s2 = n2.HMAC, a2 = n2.PBKDF2 = r2.extend({ cfg: r2.extend({ keySize: 4, hasher: o2, iterations: 1 }), init: function(t3) {
            this.cfg = this.cfg.extend(t3);
          }, compute: function(t3, e3) {
            for (var r3 = this.cfg, n3 = s2.create(r3.hasher, t3), o3 = i2.create(), a3 = i2.create([1]), c2 = o3.words, h = a3.words, l = r3.keySize, f = r3.iterations; c2.length < l; ) {
              var u = n3.update(e3).finalize(a3);
              n3.reset();
              for (var d = u.words, p = d.length, _2 = u, v = 1; v < f; v++) {
                _2 = n3.finalize(_2), n3.reset();
                for (var y = _2.words, g = 0; g < p; g++) d[g] ^= y[g];
              }
              o3.concat(u), h[0]++;
            }
            return o3.sigBytes = 4 * l, o3;
          } });
          t2.PBKDF2 = function(t3, e3, r3) {
            return a2.create(r3).compute(t3, e3);
          };
        }(), function() {
          var t2 = c, e2 = t2.lib, r2 = e2.Base, i2 = e2.WordArray, n2 = t2.algo, o2 = n2.MD5, s2 = n2.EvpKDF = r2.extend({ cfg: r2.extend({ keySize: 4, hasher: o2, iterations: 1 }), init: function(t3) {
            this.cfg = this.cfg.extend(t3);
          }, compute: function(t3, e3) {
            for (var r3, n3 = this.cfg, o3 = n3.hasher.create(), s3 = i2.create(), a2 = s3.words, c2 = n3.keySize, h = n3.iterations; a2.length < c2; ) {
              r3 && o3.update(r3), r3 = o3.update(t3).finalize(e3), o3.reset();
              for (var l = 1; l < h; l++) r3 = o3.finalize(r3), o3.reset();
              s3.concat(r3);
            }
            return s3.sigBytes = 4 * c2, s3;
          } });
          t2.EvpKDF = function(t3, e3, r3) {
            return s2.create(r3).compute(t3, e3);
          };
        }(), c.lib.Cipher || function(t2) {
          var e2 = c, r2 = e2.lib, i2 = r2.Base, n2 = r2.WordArray, o2 = r2.BufferedBlockAlgorithm, s2 = e2.enc, a2 = (s2.Utf8, s2.Base64), h = e2.algo.EvpKDF, l = r2.Cipher = o2.extend({ cfg: i2.extend(), createEncryptor: function(t3, e3) {
            return this.create(this._ENC_XFORM_MODE, t3, e3);
          }, createDecryptor: function(t3, e3) {
            return this.create(this._DEC_XFORM_MODE, t3, e3);
          }, init: function(t3, e3, r3) {
            this.cfg = this.cfg.extend(r3), this._xformMode = t3, this._key = e3, this.reset();
          }, reset: function() {
            o2.reset.call(this), this._doReset();
          }, process: function(t3) {
            return this._append(t3), this._process();
          }, finalize: function(t3) {
            return t3 && this._append(t3), this._doFinalize();
          }, keySize: 4, ivSize: 4, _ENC_XFORM_MODE: 1, _DEC_XFORM_MODE: 2, _createHelper: /* @__PURE__ */ function() {
            function t3(t4) {
              return "string" == typeof t4 ? B : y;
            }
            return function(e3) {
              return { encrypt: function(r3, i3, n3) {
                return t3(i3).encrypt(e3, r3, i3, n3);
              }, decrypt: function(r3, i3, n3) {
                return t3(i3).decrypt(e3, r3, i3, n3);
              } };
            };
          }() }), f = (r2.StreamCipher = l.extend({ _doFinalize: function() {
            return this._process(true);
          }, blockSize: 1 }), e2.mode = {}), u = r2.BlockCipherMode = i2.extend({ createEncryptor: function(t3, e3) {
            return this.Encryptor.create(t3, e3);
          }, createDecryptor: function(t3, e3) {
            return this.Decryptor.create(t3, e3);
          }, init: function(t3, e3) {
            this._cipher = t3, this._iv = e3;
          } }), d = f.CBC = function() {
            var t3 = u.extend();
            function e3(t4, e4, r3) {
              var i3, n3 = this._iv;
              n3 ? (i3 = n3, this._iv = void 0) : i3 = this._prevBlock;
              for (var o3 = 0; o3 < r3; o3++) t4[e4 + o3] ^= i3[o3];
            }
            return t3.Encryptor = t3.extend({ processBlock: function(t4, r3) {
              var i3 = this._cipher, n3 = i3.blockSize;
              e3.call(this, t4, r3, n3), i3.encryptBlock(t4, r3), this._prevBlock = t4.slice(r3, r3 + n3);
            } }), t3.Decryptor = t3.extend({ processBlock: function(t4, r3) {
              var i3 = this._cipher, n3 = i3.blockSize, o3 = t4.slice(r3, r3 + n3);
              i3.decryptBlock(t4, r3), e3.call(this, t4, r3, n3), this._prevBlock = o3;
            } }), t3;
          }(), p = (e2.pad = {}).Pkcs7 = { pad: function(t3, e3) {
            for (var r3 = 4 * e3, i3 = r3 - t3.sigBytes % r3, o3 = i3 << 24 | i3 << 16 | i3 << 8 | i3, s3 = [], a3 = 0; a3 < i3; a3 += 4) s3.push(o3);
            var c2 = n2.create(s3, i3);
            t3.concat(c2);
          }, unpad: function(t3) {
            var e3 = 255 & t3.words[t3.sigBytes - 1 >>> 2];
            t3.sigBytes -= e3;
          } }, _2 = (r2.BlockCipher = l.extend({ cfg: l.cfg.extend({ mode: d, padding: p }), reset: function() {
            var t3;
            l.reset.call(this);
            var e3 = this.cfg, r3 = e3.iv, i3 = e3.mode;
            this._xformMode == this._ENC_XFORM_MODE ? t3 = i3.createEncryptor : (t3 = i3.createDecryptor, this._minBufferSize = 1), this._mode && this._mode.__creator == t3 ? this._mode.init(this, r3 && r3.words) : (this._mode = t3.call(i3, this, r3 && r3.words), this._mode.__creator = t3);
          }, _doProcessBlock: function(t3, e3) {
            this._mode.processBlock(t3, e3);
          }, _doFinalize: function() {
            var t3, e3 = this.cfg.padding;
            return this._xformMode == this._ENC_XFORM_MODE ? (e3.pad(this._data, this.blockSize), t3 = this._process(true)) : (t3 = this._process(true), e3.unpad(t3)), t3;
          }, blockSize: 4 }), r2.CipherParams = i2.extend({ init: function(t3) {
            this.mixIn(t3);
          }, toString: function(t3) {
            return (t3 || this.formatter).stringify(this);
          } })), v = (e2.format = {}).OpenSSL = { stringify: function(t3) {
            var e3 = t3.ciphertext, r3 = t3.salt;
            return (r3 ? n2.create([1398893684, 1701076831]).concat(r3).concat(e3) : e3).toString(a2);
          }, parse: function(t3) {
            var e3, r3 = a2.parse(t3), i3 = r3.words;
            return 1398893684 == i3[0] && 1701076831 == i3[1] && (e3 = n2.create(i3.slice(2, 4)), i3.splice(0, 4), r3.sigBytes -= 16), _2.create({ ciphertext: r3, salt: e3 });
          } }, y = r2.SerializableCipher = i2.extend({ cfg: i2.extend({ format: v }), encrypt: function(t3, e3, r3, i3) {
            i3 = this.cfg.extend(i3);
            var n3 = t3.createEncryptor(r3, i3), o3 = n3.finalize(e3), s3 = n3.cfg;
            return _2.create({ ciphertext: o3, key: r3, iv: s3.iv, algorithm: t3, mode: s3.mode, padding: s3.padding, blockSize: t3.blockSize, formatter: i3.format });
          }, decrypt: function(t3, e3, r3, i3) {
            return i3 = this.cfg.extend(i3), e3 = this._parse(e3, i3.format), t3.createDecryptor(r3, i3).finalize(e3.ciphertext);
          }, _parse: function(t3, e3) {
            return "string" == typeof t3 ? e3.parse(t3, this) : t3;
          } }), g = (e2.kdf = {}).OpenSSL = { execute: function(t3, e3, r3, i3) {
            i3 || (i3 = n2.random(8));
            var o3 = h.create({ keySize: e3 + r3 }).compute(t3, i3), s3 = n2.create(o3.words.slice(e3), 4 * r3);
            return o3.sigBytes = 4 * e3, _2.create({ key: o3, iv: s3, salt: i3 });
          } }, B = r2.PasswordBasedCipher = y.extend({ cfg: y.cfg.extend({ kdf: g }), encrypt: function(t3, e3, r3, i3) {
            var n3 = (i3 = this.cfg.extend(i3)).kdf.execute(r3, t3.keySize, t3.ivSize);
            i3.iv = n3.iv;
            var o3 = y.encrypt.call(this, t3, e3, n3.key, i3);
            return o3.mixIn(n3), o3;
          }, decrypt: function(t3, e3, r3, i3) {
            i3 = this.cfg.extend(i3), e3 = this._parse(e3, i3.format);
            var n3 = i3.kdf.execute(r3, t3.keySize, t3.ivSize, e3.salt);
            return i3.iv = n3.iv, y.decrypt.call(this, t3, e3, n3.key, i3);
          } });
        }(), c.mode.CFB = function() {
          var t2 = c.lib.BlockCipherMode.extend();
          function e2(t3, e3, r2, i2) {
            var n2, o2 = this._iv;
            o2 ? (n2 = o2.slice(0), this._iv = void 0) : n2 = this._prevBlock, i2.encryptBlock(n2, 0);
            for (var s2 = 0; s2 < r2; s2++) t3[e3 + s2] ^= n2[s2];
          }
          return t2.Encryptor = t2.extend({ processBlock: function(t3, r2) {
            var i2 = this._cipher, n2 = i2.blockSize;
            e2.call(this, t3, r2, n2, i2), this._prevBlock = t3.slice(r2, r2 + n2);
          } }), t2.Decryptor = t2.extend({ processBlock: function(t3, r2) {
            var i2 = this._cipher, n2 = i2.blockSize, o2 = t3.slice(r2, r2 + n2);
            e2.call(this, t3, r2, n2, i2), this._prevBlock = o2;
          } }), t2;
        }(), c.mode.CTR = (o = c.lib.BlockCipherMode.extend(), s = o.Encryptor = o.extend({ processBlock: function(t2, e2) {
          var r2 = this._cipher, i2 = r2.blockSize, n2 = this._iv, o2 = this._counter;
          n2 && (o2 = this._counter = n2.slice(0), this._iv = void 0);
          var s2 = o2.slice(0);
          r2.encryptBlock(s2, 0), o2[i2 - 1] = o2[i2 - 1] + 1 | 0;
          for (var a2 = 0; a2 < i2; a2++) t2[e2 + a2] ^= s2[a2];
        } }), o.Decryptor = s, o), /** @preserve
        	 * Counter block mode compatible with  Dr Brian Gladman fileenc.c
        	 * derived from CryptoJS.mode.CTR
        	 * Jan Hruby jhruby.web@gmail.com
        	 */
        c.mode.CTRGladman = function() {
          var t2 = c.lib.BlockCipherMode.extend();
          function e2(t3) {
            if (255 == (t3 >> 24 & 255)) {
              var e3 = t3 >> 16 & 255, r3 = t3 >> 8 & 255, i2 = 255 & t3;
              255 === e3 ? (e3 = 0, 255 === r3 ? (r3 = 0, 255 === i2 ? i2 = 0 : ++i2) : ++r3) : ++e3, t3 = 0, t3 += e3 << 16, t3 += r3 << 8, t3 += i2;
            } else t3 += 1 << 24;
            return t3;
          }
          var r2 = t2.Encryptor = t2.extend({ processBlock: function(t3, r3) {
            var i2 = this._cipher, n2 = i2.blockSize, o2 = this._iv, s2 = this._counter;
            o2 && (s2 = this._counter = o2.slice(0), this._iv = void 0), function(t4) {
              0 === (t4[0] = e2(t4[0])) && (t4[1] = e2(t4[1]));
            }(s2);
            var a2 = s2.slice(0);
            i2.encryptBlock(a2, 0);
            for (var c2 = 0; c2 < n2; c2++) t3[r3 + c2] ^= a2[c2];
          } });
          return t2.Decryptor = r2, t2;
        }(), c.mode.OFB = function() {
          var t2 = c.lib.BlockCipherMode.extend(), e2 = t2.Encryptor = t2.extend({ processBlock: function(t3, e3) {
            var r2 = this._cipher, i2 = r2.blockSize, n2 = this._iv, o2 = this._keystream;
            n2 && (o2 = this._keystream = n2.slice(0), this._iv = void 0), r2.encryptBlock(o2, 0);
            for (var s2 = 0; s2 < i2; s2++) t3[e3 + s2] ^= o2[s2];
          } });
          return t2.Decryptor = e2, t2;
        }(), c.mode.ECB = ((a = c.lib.BlockCipherMode.extend()).Encryptor = a.extend({ processBlock: function(t2, e2) {
          this._cipher.encryptBlock(t2, e2);
        } }), a.Decryptor = a.extend({ processBlock: function(t2, e2) {
          this._cipher.decryptBlock(t2, e2);
        } }), a), c.pad.AnsiX923 = { pad: function(t2, e2) {
          var r2 = t2.sigBytes, i2 = 4 * e2, n2 = i2 - r2 % i2, o2 = r2 + n2 - 1;
          t2.clamp(), t2.words[o2 >>> 2] |= n2 << 24 - o2 % 4 * 8, t2.sigBytes += n2;
        }, unpad: function(t2) {
          var e2 = 255 & t2.words[t2.sigBytes - 1 >>> 2];
          t2.sigBytes -= e2;
        } }, c.pad.Iso10126 = { pad: function(t2, e2) {
          var r2 = 4 * e2, i2 = r2 - t2.sigBytes % r2;
          t2.concat(c.lib.WordArray.random(i2 - 1)).concat(c.lib.WordArray.create([i2 << 24], 1));
        }, unpad: function(t2) {
          var e2 = 255 & t2.words[t2.sigBytes - 1 >>> 2];
          t2.sigBytes -= e2;
        } }, c.pad.Iso97971 = { pad: function(t2, e2) {
          t2.concat(c.lib.WordArray.create([2147483648], 1)), c.pad.ZeroPadding.pad(t2, e2);
        }, unpad: function(t2) {
          c.pad.ZeroPadding.unpad(t2), t2.sigBytes--;
        } }, c.pad.ZeroPadding = { pad: function(t2, e2) {
          var r2 = 4 * e2;
          t2.clamp(), t2.sigBytes += r2 - (t2.sigBytes % r2 || r2);
        }, unpad: function(t2) {
          var e2 = t2.words, r2 = t2.sigBytes - 1;
          for (r2 = t2.sigBytes - 1; r2 >= 0; r2--) if (e2[r2 >>> 2] >>> 24 - r2 % 4 * 8 & 255) {
            t2.sigBytes = r2 + 1;
            break;
          }
        } }, c.pad.NoPadding = { pad: function() {
        }, unpad: function() {
        } }, function(t2) {
          var e2 = c, r2 = e2.lib.CipherParams, i2 = e2.enc.Hex;
          e2.format.Hex = { stringify: function(t3) {
            return t3.ciphertext.toString(i2);
          }, parse: function(t3) {
            var e3 = i2.parse(t3);
            return r2.create({ ciphertext: e3 });
          } };
        }(), function() {
          var t2 = c, e2 = t2.lib.BlockCipher, r2 = t2.algo, i2 = [], n2 = [], o2 = [], s2 = [], a2 = [], h = [], l = [], f = [], u = [], d = [];
          !function() {
            for (var t3 = [], e3 = 0; e3 < 256; e3++) t3[e3] = e3 < 128 ? e3 << 1 : e3 << 1 ^ 283;
            var r3 = 0, c2 = 0;
            for (e3 = 0; e3 < 256; e3++) {
              var p2 = c2 ^ c2 << 1 ^ c2 << 2 ^ c2 << 3 ^ c2 << 4;
              p2 = p2 >>> 8 ^ 255 & p2 ^ 99, i2[r3] = p2, n2[p2] = r3;
              var _3 = t3[r3], v = t3[_3], y = t3[v], g = 257 * t3[p2] ^ 16843008 * p2;
              o2[r3] = g << 24 | g >>> 8, s2[r3] = g << 16 | g >>> 16, a2[r3] = g << 8 | g >>> 24, h[r3] = g;
              g = 16843009 * y ^ 65537 * v ^ 257 * _3 ^ 16843008 * r3;
              l[p2] = g << 24 | g >>> 8, f[p2] = g << 16 | g >>> 16, u[p2] = g << 8 | g >>> 24, d[p2] = g, r3 ? (r3 = _3 ^ t3[t3[t3[y ^ _3]]], c2 ^= t3[t3[c2]]) : r3 = c2 = 1;
            }
          }();
          var p = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54], _2 = r2.AES = e2.extend({ _doReset: function() {
            if (!this._nRounds || this._keyPriorReset !== this._key) {
              for (var t3 = this._keyPriorReset = this._key, e3 = t3.words, r3 = t3.sigBytes / 4, n3 = 4 * ((this._nRounds = r3 + 6) + 1), o3 = this._keySchedule = [], s3 = 0; s3 < n3; s3++) s3 < r3 ? o3[s3] = e3[s3] : (h2 = o3[s3 - 1], s3 % r3 ? r3 > 6 && s3 % r3 == 4 && (h2 = i2[h2 >>> 24] << 24 | i2[h2 >>> 16 & 255] << 16 | i2[h2 >>> 8 & 255] << 8 | i2[255 & h2]) : (h2 = i2[(h2 = h2 << 8 | h2 >>> 24) >>> 24] << 24 | i2[h2 >>> 16 & 255] << 16 | i2[h2 >>> 8 & 255] << 8 | i2[255 & h2], h2 ^= p[s3 / r3 | 0] << 24), o3[s3] = o3[s3 - r3] ^ h2);
              for (var a3 = this._invKeySchedule = [], c2 = 0; c2 < n3; c2++) {
                s3 = n3 - c2;
                if (c2 % 4) var h2 = o3[s3];
                else h2 = o3[s3 - 4];
                a3[c2] = c2 < 4 || s3 <= 4 ? h2 : l[i2[h2 >>> 24]] ^ f[i2[h2 >>> 16 & 255]] ^ u[i2[h2 >>> 8 & 255]] ^ d[i2[255 & h2]];
              }
            }
          }, encryptBlock: function(t3, e3) {
            this._doCryptBlock(t3, e3, this._keySchedule, o2, s2, a2, h, i2);
          }, decryptBlock: function(t3, e3) {
            var r3 = t3[e3 + 1];
            t3[e3 + 1] = t3[e3 + 3], t3[e3 + 3] = r3, this._doCryptBlock(t3, e3, this._invKeySchedule, l, f, u, d, n2);
            r3 = t3[e3 + 1];
            t3[e3 + 1] = t3[e3 + 3], t3[e3 + 3] = r3;
          }, _doCryptBlock: function(t3, e3, r3, i3, n3, o3, s3, a3) {
            for (var c2 = this._nRounds, h2 = t3[e3] ^ r3[0], l2 = t3[e3 + 1] ^ r3[1], f2 = t3[e3 + 2] ^ r3[2], u2 = t3[e3 + 3] ^ r3[3], d2 = 4, p2 = 1; p2 < c2; p2++) {
              var _3 = i3[h2 >>> 24] ^ n3[l2 >>> 16 & 255] ^ o3[f2 >>> 8 & 255] ^ s3[255 & u2] ^ r3[d2++], v = i3[l2 >>> 24] ^ n3[f2 >>> 16 & 255] ^ o3[u2 >>> 8 & 255] ^ s3[255 & h2] ^ r3[d2++], y = i3[f2 >>> 24] ^ n3[u2 >>> 16 & 255] ^ o3[h2 >>> 8 & 255] ^ s3[255 & l2] ^ r3[d2++], g = i3[u2 >>> 24] ^ n3[h2 >>> 16 & 255] ^ o3[l2 >>> 8 & 255] ^ s3[255 & f2] ^ r3[d2++];
              h2 = _3, l2 = v, f2 = y, u2 = g;
            }
            _3 = (a3[h2 >>> 24] << 24 | a3[l2 >>> 16 & 255] << 16 | a3[f2 >>> 8 & 255] << 8 | a3[255 & u2]) ^ r3[d2++], v = (a3[l2 >>> 24] << 24 | a3[f2 >>> 16 & 255] << 16 | a3[u2 >>> 8 & 255] << 8 | a3[255 & h2]) ^ r3[d2++], y = (a3[f2 >>> 24] << 24 | a3[u2 >>> 16 & 255] << 16 | a3[h2 >>> 8 & 255] << 8 | a3[255 & l2]) ^ r3[d2++], g = (a3[u2 >>> 24] << 24 | a3[h2 >>> 16 & 255] << 16 | a3[l2 >>> 8 & 255] << 8 | a3[255 & f2]) ^ r3[d2++];
            t3[e3] = _3, t3[e3 + 1] = v, t3[e3 + 2] = y, t3[e3 + 3] = g;
          }, keySize: 8 });
          t2.AES = e2._createHelper(_2);
        }(), function() {
          var t2 = c, e2 = t2.lib, r2 = e2.WordArray, i2 = e2.BlockCipher, n2 = t2.algo, o2 = [57, 49, 41, 33, 25, 17, 9, 1, 58, 50, 42, 34, 26, 18, 10, 2, 59, 51, 43, 35, 27, 19, 11, 3, 60, 52, 44, 36, 63, 55, 47, 39, 31, 23, 15, 7, 62, 54, 46, 38, 30, 22, 14, 6, 61, 53, 45, 37, 29, 21, 13, 5, 28, 20, 12, 4], s2 = [14, 17, 11, 24, 1, 5, 3, 28, 15, 6, 21, 10, 23, 19, 12, 4, 26, 8, 16, 7, 27, 20, 13, 2, 41, 52, 31, 37, 47, 55, 30, 40, 51, 45, 33, 48, 44, 49, 39, 56, 34, 53, 46, 42, 50, 36, 29, 32], a2 = [1, 2, 4, 6, 8, 10, 12, 14, 15, 17, 19, 21, 23, 25, 27, 28], h = [{ 0: 8421888, 268435456: 32768, 536870912: 8421378, 805306368: 2, 1073741824: 512, 1342177280: 8421890, 1610612736: 8389122, 1879048192: 8388608, 2147483648: 514, 2415919104: 8389120, 2684354560: 33280, 2952790016: 8421376, 3221225472: 32770, 3489660928: 8388610, 3758096384: 0, 4026531840: 33282, 134217728: 0, 402653184: 8421890, 671088640: 33282, 939524096: 32768, 1207959552: 8421888, 1476395008: 512, 1744830464: 8421378, 2013265920: 2, 2281701376: 8389120, 2550136832: 33280, 2818572288: 8421376, 3087007744: 8389122, 3355443200: 8388610, 3623878656: 32770, 3892314112: 514, 4160749568: 8388608, 1: 32768, 268435457: 2, 536870913: 8421888, 805306369: 8388608, 1073741825: 8421378, 1342177281: 33280, 1610612737: 512, 1879048193: 8389122, 2147483649: 8421890, 2415919105: 8421376, 2684354561: 8388610, 2952790017: 33282, 3221225473: 514, 3489660929: 8389120, 3758096385: 32770, 4026531841: 0, 134217729: 8421890, 402653185: 8421376, 671088641: 8388608, 939524097: 512, 1207959553: 32768, 1476395009: 8388610, 1744830465: 2, 2013265921: 33282, 2281701377: 32770, 2550136833: 8389122, 2818572289: 514, 3087007745: 8421888, 3355443201: 8389120, 3623878657: 0, 3892314113: 33280, 4160749569: 8421378 }, { 0: 1074282512, 16777216: 16384, 33554432: 524288, 50331648: 1074266128, 67108864: 1073741840, 83886080: 1074282496, 100663296: 1073758208, 117440512: 16, 134217728: 540672, 150994944: 1073758224, 167772160: 1073741824, 184549376: 540688, 201326592: 524304, 218103808: 0, 234881024: 16400, 251658240: 1074266112, 8388608: 1073758208, 25165824: 540688, 41943040: 16, 58720256: 1073758224, 75497472: 1074282512, 92274688: 1073741824, 109051904: 524288, 125829120: 1074266128, 142606336: 524304, 159383552: 0, 176160768: 16384, 192937984: 1074266112, 209715200: 1073741840, 226492416: 540672, 243269632: 1074282496, 260046848: 16400, 268435456: 0, 285212672: 1074266128, 301989888: 1073758224, 318767104: 1074282496, 335544320: 1074266112, 352321536: 16, 369098752: 540688, 385875968: 16384, 402653184: 16400, 419430400: 524288, 436207616: 524304, 452984832: 1073741840, 469762048: 540672, 486539264: 1073758208, 503316480: 1073741824, 520093696: 1074282512, 276824064: 540688, 293601280: 524288, 310378496: 1074266112, 327155712: 16384, 343932928: 1073758208, 360710144: 1074282512, 377487360: 16, 394264576: 1073741824, 411041792: 1074282496, 427819008: 1073741840, 444596224: 1073758224, 461373440: 524304, 478150656: 0, 494927872: 16400, 511705088: 1074266128, 528482304: 540672 }, { 0: 260, 1048576: 0, 2097152: 67109120, 3145728: 65796, 4194304: 65540, 5242880: 67108868, 6291456: 67174660, 7340032: 67174400, 8388608: 67108864, 9437184: 67174656, 10485760: 65792, 11534336: 67174404, 12582912: 67109124, 13631488: 65536, 14680064: 4, 15728640: 256, 524288: 67174656, 1572864: 67174404, 2621440: 0, 3670016: 67109120, 4718592: 67108868, 5767168: 65536, 6815744: 65540, 7864320: 260, 8912896: 4, 9961472: 256, 11010048: 67174400, 12058624: 65796, 13107200: 65792, 14155776: 67109124, 15204352: 67174660, 16252928: 67108864, 16777216: 67174656, 17825792: 65540, 18874368: 65536, 19922944: 67109120, 20971520: 256, 22020096: 67174660, 23068672: 67108868, 24117248: 0, 25165824: 67109124, 26214400: 67108864, 27262976: 4, 28311552: 65792, 29360128: 67174400, 30408704: 260, 31457280: 65796, 32505856: 67174404, 17301504: 67108864, 18350080: 260, 19398656: 67174656, 20447232: 0, 21495808: 65540, 22544384: 67109120, 23592960: 256, 24641536: 67174404, 25690112: 65536, 26738688: 67174660, 27787264: 65796, 28835840: 67108868, 29884416: 67109124, 30932992: 67174400, 31981568: 4, 33030144: 65792 }, { 0: 2151682048, 65536: 2147487808, 131072: 4198464, 196608: 2151677952, 262144: 0, 327680: 4198400, 393216: 2147483712, 458752: 4194368, 524288: 2147483648, 589824: 4194304, 655360: 64, 720896: 2147487744, 786432: 2151678016, 851968: 4160, 917504: 4096, 983040: 2151682112, 32768: 2147487808, 98304: 64, 163840: 2151678016, 229376: 2147487744, 294912: 4198400, 360448: 2151682112, 425984: 0, 491520: 2151677952, 557056: 4096, 622592: 2151682048, 688128: 4194304, 753664: 4160, 819200: 2147483648, 884736: 4194368, 950272: 4198464, 1015808: 2147483712, 1048576: 4194368, 1114112: 4198400, 1179648: 2147483712, 1245184: 0, 1310720: 4160, 1376256: 2151678016, 1441792: 2151682048, 1507328: 2147487808, 1572864: 2151682112, 1638400: 2147483648, 1703936: 2151677952, 1769472: 4198464, 1835008: 2147487744, 1900544: 4194304, 1966080: 64, 2031616: 4096, 1081344: 2151677952, 1146880: 2151682112, 1212416: 0, 1277952: 4198400, 1343488: 4194368, 1409024: 2147483648, 1474560: 2147487808, 1540096: 64, 1605632: 2147483712, 1671168: 4096, 1736704: 2147487744, 1802240: 2151678016, 1867776: 4160, 1933312: 2151682048, 1998848: 4194304, 2064384: 4198464 }, { 0: 128, 4096: 17039360, 8192: 262144, 12288: 536870912, 16384: 537133184, 20480: 16777344, 24576: 553648256, 28672: 262272, 32768: 16777216, 36864: 537133056, 40960: 536871040, 45056: 553910400, 49152: 553910272, 53248: 0, 57344: 17039488, 61440: 553648128, 2048: 17039488, 6144: 553648256, 10240: 128, 14336: 17039360, 18432: 262144, 22528: 537133184, 26624: 553910272, 30720: 536870912, 34816: 537133056, 38912: 0, 43008: 553910400, 47104: 16777344, 51200: 536871040, 55296: 553648128, 59392: 16777216, 63488: 262272, 65536: 262144, 69632: 128, 73728: 536870912, 77824: 553648256, 81920: 16777344, 86016: 553910272, 90112: 537133184, 94208: 16777216, 98304: 553910400, 102400: 553648128, 106496: 17039360, 110592: 537133056, 114688: 262272, 118784: 536871040, 122880: 0, 126976: 17039488, 67584: 553648256, 71680: 16777216, 75776: 17039360, 79872: 537133184, 83968: 536870912, 88064: 17039488, 92160: 128, 96256: 553910272, 100352: 262272, 104448: 553910400, 108544: 0, 112640: 553648128, 116736: 16777344, 120832: 262144, 124928: 537133056, 129024: 536871040 }, { 0: 268435464, 256: 8192, 512: 270532608, 768: 270540808, 1024: 268443648, 1280: 2097152, 1536: 2097160, 1792: 268435456, 2048: 0, 2304: 268443656, 2560: 2105344, 2816: 8, 3072: 270532616, 3328: 2105352, 3584: 8200, 3840: 270540800, 128: 270532608, 384: 270540808, 640: 8, 896: 2097152, 1152: 2105352, 1408: 268435464, 1664: 268443648, 1920: 8200, 2176: 2097160, 2432: 8192, 2688: 268443656, 2944: 270532616, 3200: 0, 3456: 270540800, 3712: 2105344, 3968: 268435456, 4096: 268443648, 4352: 270532616, 4608: 270540808, 4864: 8200, 5120: 2097152, 5376: 268435456, 5632: 268435464, 5888: 2105344, 6144: 2105352, 6400: 0, 6656: 8, 6912: 270532608, 7168: 8192, 7424: 268443656, 7680: 270540800, 7936: 2097160, 4224: 8, 4480: 2105344, 4736: 2097152, 4992: 268435464, 5248: 268443648, 5504: 8200, 5760: 270540808, 6016: 270532608, 6272: 270540800, 6528: 270532616, 6784: 8192, 7040: 2105352, 7296: 2097160, 7552: 0, 7808: 268435456, 8064: 268443656 }, { 0: 1048576, 16: 33555457, 32: 1024, 48: 1049601, 64: 34604033, 80: 0, 96: 1, 112: 34603009, 128: 33555456, 144: 1048577, 160: 33554433, 176: 34604032, 192: 34603008, 208: 1025, 224: 1049600, 240: 33554432, 8: 34603009, 24: 0, 40: 33555457, 56: 34604032, 72: 1048576, 88: 33554433, 104: 33554432, 120: 1025, 136: 1049601, 152: 33555456, 168: 34603008, 184: 1048577, 200: 1024, 216: 34604033, 232: 1, 248: 1049600, 256: 33554432, 272: 1048576, 288: 33555457, 304: 34603009, 320: 1048577, 336: 33555456, 352: 34604032, 368: 1049601, 384: 1025, 400: 34604033, 416: 1049600, 432: 1, 448: 0, 464: 34603008, 480: 33554433, 496: 1024, 264: 1049600, 280: 33555457, 296: 34603009, 312: 1, 328: 33554432, 344: 1048576, 360: 1025, 376: 34604032, 392: 33554433, 408: 34603008, 424: 0, 440: 34604033, 456: 1049601, 472: 1024, 488: 33555456, 504: 1048577 }, { 0: 134219808, 1: 131072, 2: 134217728, 3: 32, 4: 131104, 5: 134350880, 6: 134350848, 7: 2048, 8: 134348800, 9: 134219776, 10: 133120, 11: 134348832, 12: 2080, 13: 0, 14: 134217760, 15: 133152, 2147483648: 2048, 2147483649: 134350880, 2147483650: 134219808, 2147483651: 134217728, 2147483652: 134348800, 2147483653: 133120, 2147483654: 133152, 2147483655: 32, 2147483656: 134217760, 2147483657: 2080, 2147483658: 131104, 2147483659: 134350848, 2147483660: 0, 2147483661: 134348832, 2147483662: 134219776, 2147483663: 131072, 16: 133152, 17: 134350848, 18: 32, 19: 2048, 20: 134219776, 21: 134217760, 22: 134348832, 23: 131072, 24: 0, 25: 131104, 26: 134348800, 27: 134219808, 28: 134350880, 29: 133120, 30: 2080, 31: 134217728, 2147483664: 131072, 2147483665: 2048, 2147483666: 134348832, 2147483667: 133152, 2147483668: 32, 2147483669: 134348800, 2147483670: 134217728, 2147483671: 134219808, 2147483672: 134350880, 2147483673: 134217760, 2147483674: 134219776, 2147483675: 0, 2147483676: 133120, 2147483677: 2080, 2147483678: 131104, 2147483679: 134350848 }], l = [4160749569, 528482304, 33030144, 2064384, 129024, 8064, 504, 2147483679], f = n2.DES = i2.extend({ _doReset: function() {
            for (var t3 = this._key.words, e3 = [], r3 = 0; r3 < 56; r3++) {
              var i3 = o2[r3] - 1;
              e3[r3] = t3[i3 >>> 5] >>> 31 - i3 % 32 & 1;
            }
            for (var n3 = this._subKeys = [], c2 = 0; c2 < 16; c2++) {
              var h2 = n3[c2] = [], l2 = a2[c2];
              for (r3 = 0; r3 < 24; r3++) h2[r3 / 6 | 0] |= e3[(s2[r3] - 1 + l2) % 28] << 31 - r3 % 6, h2[4 + (r3 / 6 | 0)] |= e3[28 + (s2[r3 + 24] - 1 + l2) % 28] << 31 - r3 % 6;
              h2[0] = h2[0] << 1 | h2[0] >>> 31;
              for (r3 = 1; r3 < 7; r3++) h2[r3] = h2[r3] >>> 4 * (r3 - 1) + 3;
              h2[7] = h2[7] << 5 | h2[7] >>> 27;
            }
            var f2 = this._invSubKeys = [];
            for (r3 = 0; r3 < 16; r3++) f2[r3] = n3[15 - r3];
          }, encryptBlock: function(t3, e3) {
            this._doCryptBlock(t3, e3, this._subKeys);
          }, decryptBlock: function(t3, e3) {
            this._doCryptBlock(t3, e3, this._invSubKeys);
          }, _doCryptBlock: function(t3, e3, r3) {
            this._lBlock = t3[e3], this._rBlock = t3[e3 + 1], u.call(this, 4, 252645135), u.call(this, 16, 65535), d.call(this, 2, 858993459), d.call(this, 8, 16711935), u.call(this, 1, 1431655765);
            for (var i3 = 0; i3 < 16; i3++) {
              for (var n3 = r3[i3], o3 = this._lBlock, s3 = this._rBlock, a3 = 0, c2 = 0; c2 < 8; c2++) a3 |= h[c2][((s3 ^ n3[c2]) & l[c2]) >>> 0];
              this._lBlock = s3, this._rBlock = o3 ^ a3;
            }
            var f2 = this._lBlock;
            this._lBlock = this._rBlock, this._rBlock = f2, u.call(this, 1, 1431655765), d.call(this, 8, 16711935), d.call(this, 2, 858993459), u.call(this, 16, 65535), u.call(this, 4, 252645135), t3[e3] = this._lBlock, t3[e3 + 1] = this._rBlock;
          }, keySize: 2, ivSize: 2, blockSize: 2 });
          function u(t3, e3) {
            var r3 = (this._lBlock >>> t3 ^ this._rBlock) & e3;
            this._rBlock ^= r3, this._lBlock ^= r3 << t3;
          }
          function d(t3, e3) {
            var r3 = (this._rBlock >>> t3 ^ this._lBlock) & e3;
            this._lBlock ^= r3, this._rBlock ^= r3 << t3;
          }
          t2.DES = i2._createHelper(f);
          var p = n2.TripleDES = i2.extend({ _doReset: function() {
            var t3 = this._key.words;
            if (2 !== t3.length && 4 !== t3.length && t3.length < 6) throw new Error("Invalid key length - 3DES requires the key length to be 64, 128, 192 or >192.");
            var e3 = t3.slice(0, 2), i3 = t3.length < 4 ? t3.slice(0, 2) : t3.slice(2, 4), n3 = t3.length < 6 ? t3.slice(0, 2) : t3.slice(4, 6);
            this._des1 = f.createEncryptor(r2.create(e3)), this._des2 = f.createEncryptor(r2.create(i3)), this._des3 = f.createEncryptor(r2.create(n3));
          }, encryptBlock: function(t3, e3) {
            this._des1.encryptBlock(t3, e3), this._des2.decryptBlock(t3, e3), this._des3.encryptBlock(t3, e3);
          }, decryptBlock: function(t3, e3) {
            this._des3.decryptBlock(t3, e3), this._des2.encryptBlock(t3, e3), this._des1.decryptBlock(t3, e3);
          }, keySize: 6, ivSize: 2, blockSize: 2 });
          t2.TripleDES = i2._createHelper(p);
        }(), function() {
          var t2 = c, e2 = t2.lib.StreamCipher, r2 = t2.algo, i2 = r2.RC4 = e2.extend({ _doReset: function() {
            for (var t3 = this._key, e3 = t3.words, r3 = t3.sigBytes, i3 = this._S = [], n3 = 0; n3 < 256; n3++) i3[n3] = n3;
            n3 = 0;
            for (var o3 = 0; n3 < 256; n3++) {
              var s2 = n3 % r3, a2 = e3[s2 >>> 2] >>> 24 - s2 % 4 * 8 & 255;
              o3 = (o3 + i3[n3] + a2) % 256;
              var c2 = i3[n3];
              i3[n3] = i3[o3], i3[o3] = c2;
            }
            this._i = this._j = 0;
          }, _doProcessBlock: function(t3, e3) {
            t3[e3] ^= n2.call(this);
          }, keySize: 8, ivSize: 0 });
          function n2() {
            for (var t3 = this._S, e3 = this._i, r3 = this._j, i3 = 0, n3 = 0; n3 < 4; n3++) {
              r3 = (r3 + t3[e3 = (e3 + 1) % 256]) % 256;
              var o3 = t3[e3];
              t3[e3] = t3[r3], t3[r3] = o3, i3 |= t3[(t3[e3] + t3[r3]) % 256] << 24 - 8 * n3;
            }
            return this._i = e3, this._j = r3, i3;
          }
          t2.RC4 = e2._createHelper(i2);
          var o2 = r2.RC4Drop = i2.extend({ cfg: i2.cfg.extend({ drop: 192 }), _doReset: function() {
            i2._doReset.call(this);
            for (var t3 = this.cfg.drop; t3 > 0; t3--) n2.call(this);
          } });
          t2.RC4Drop = e2._createHelper(o2);
        }(), function() {
          var t2 = c, e2 = t2.lib.StreamCipher, r2 = t2.algo, i2 = [], n2 = [], o2 = [], s2 = r2.Rabbit = e2.extend({ _doReset: function() {
            for (var t3 = this._key.words, e3 = this.cfg.iv, r3 = 0; r3 < 4; r3++) t3[r3] = 16711935 & (t3[r3] << 8 | t3[r3] >>> 24) | 4278255360 & (t3[r3] << 24 | t3[r3] >>> 8);
            var i3 = this._X = [t3[0], t3[3] << 16 | t3[2] >>> 16, t3[1], t3[0] << 16 | t3[3] >>> 16, t3[2], t3[1] << 16 | t3[0] >>> 16, t3[3], t3[2] << 16 | t3[1] >>> 16], n3 = this._C = [t3[2] << 16 | t3[2] >>> 16, 4294901760 & t3[0] | 65535 & t3[1], t3[3] << 16 | t3[3] >>> 16, 4294901760 & t3[1] | 65535 & t3[2], t3[0] << 16 | t3[0] >>> 16, 4294901760 & t3[2] | 65535 & t3[3], t3[1] << 16 | t3[1] >>> 16, 4294901760 & t3[3] | 65535 & t3[0]];
            this._b = 0;
            for (r3 = 0; r3 < 4; r3++) a2.call(this);
            for (r3 = 0; r3 < 8; r3++) n3[r3] ^= i3[r3 + 4 & 7];
            if (e3) {
              var o3 = e3.words, s3 = o3[0], c2 = o3[1], h = 16711935 & (s3 << 8 | s3 >>> 24) | 4278255360 & (s3 << 24 | s3 >>> 8), l = 16711935 & (c2 << 8 | c2 >>> 24) | 4278255360 & (c2 << 24 | c2 >>> 8), f = h >>> 16 | 4294901760 & l, u = l << 16 | 65535 & h;
              n3[0] ^= h, n3[1] ^= f, n3[2] ^= l, n3[3] ^= u, n3[4] ^= h, n3[5] ^= f, n3[6] ^= l, n3[7] ^= u;
              for (r3 = 0; r3 < 4; r3++) a2.call(this);
            }
          }, _doProcessBlock: function(t3, e3) {
            var r3 = this._X;
            a2.call(this), i2[0] = r3[0] ^ r3[5] >>> 16 ^ r3[3] << 16, i2[1] = r3[2] ^ r3[7] >>> 16 ^ r3[5] << 16, i2[2] = r3[4] ^ r3[1] >>> 16 ^ r3[7] << 16, i2[3] = r3[6] ^ r3[3] >>> 16 ^ r3[1] << 16;
            for (var n3 = 0; n3 < 4; n3++) i2[n3] = 16711935 & (i2[n3] << 8 | i2[n3] >>> 24) | 4278255360 & (i2[n3] << 24 | i2[n3] >>> 8), t3[e3 + n3] ^= i2[n3];
          }, blockSize: 4, ivSize: 2 });
          function a2() {
            for (var t3 = this._X, e3 = this._C, r3 = 0; r3 < 8; r3++) n2[r3] = e3[r3];
            e3[0] = e3[0] + 1295307597 + this._b | 0, e3[1] = e3[1] + 3545052371 + (e3[0] >>> 0 < n2[0] >>> 0 ? 1 : 0) | 0, e3[2] = e3[2] + 886263092 + (e3[1] >>> 0 < n2[1] >>> 0 ? 1 : 0) | 0, e3[3] = e3[3] + 1295307597 + (e3[2] >>> 0 < n2[2] >>> 0 ? 1 : 0) | 0, e3[4] = e3[4] + 3545052371 + (e3[3] >>> 0 < n2[3] >>> 0 ? 1 : 0) | 0, e3[5] = e3[5] + 886263092 + (e3[4] >>> 0 < n2[4] >>> 0 ? 1 : 0) | 0, e3[6] = e3[6] + 1295307597 + (e3[5] >>> 0 < n2[5] >>> 0 ? 1 : 0) | 0, e3[7] = e3[7] + 3545052371 + (e3[6] >>> 0 < n2[6] >>> 0 ? 1 : 0) | 0, this._b = e3[7] >>> 0 < n2[7] >>> 0 ? 1 : 0;
            for (r3 = 0; r3 < 8; r3++) {
              var i3 = t3[r3] + e3[r3], s3 = 65535 & i3, a3 = i3 >>> 16, c2 = ((s3 * s3 >>> 17) + s3 * a3 >>> 15) + a3 * a3, h = ((4294901760 & i3) * i3 | 0) + ((65535 & i3) * i3 | 0);
              o2[r3] = c2 ^ h;
            }
            t3[0] = o2[0] + (o2[7] << 16 | o2[7] >>> 16) + (o2[6] << 16 | o2[6] >>> 16) | 0, t3[1] = o2[1] + (o2[0] << 8 | o2[0] >>> 24) + o2[7] | 0, t3[2] = o2[2] + (o2[1] << 16 | o2[1] >>> 16) + (o2[0] << 16 | o2[0] >>> 16) | 0, t3[3] = o2[3] + (o2[2] << 8 | o2[2] >>> 24) + o2[1] | 0, t3[4] = o2[4] + (o2[3] << 16 | o2[3] >>> 16) + (o2[2] << 16 | o2[2] >>> 16) | 0, t3[5] = o2[5] + (o2[4] << 8 | o2[4] >>> 24) + o2[3] | 0, t3[6] = o2[6] + (o2[5] << 16 | o2[5] >>> 16) + (o2[4] << 16 | o2[4] >>> 16) | 0, t3[7] = o2[7] + (o2[6] << 8 | o2[6] >>> 24) + o2[5] | 0;
          }
          t2.Rabbit = e2._createHelper(s2);
        }(), function() {
          var t2 = c, e2 = t2.lib.StreamCipher, r2 = t2.algo, i2 = [], n2 = [], o2 = [], s2 = r2.RabbitLegacy = e2.extend({ _doReset: function() {
            var t3 = this._key.words, e3 = this.cfg.iv, r3 = this._X = [t3[0], t3[3] << 16 | t3[2] >>> 16, t3[1], t3[0] << 16 | t3[3] >>> 16, t3[2], t3[1] << 16 | t3[0] >>> 16, t3[3], t3[2] << 16 | t3[1] >>> 16], i3 = this._C = [t3[2] << 16 | t3[2] >>> 16, 4294901760 & t3[0] | 65535 & t3[1], t3[3] << 16 | t3[3] >>> 16, 4294901760 & t3[1] | 65535 & t3[2], t3[0] << 16 | t3[0] >>> 16, 4294901760 & t3[2] | 65535 & t3[3], t3[1] << 16 | t3[1] >>> 16, 4294901760 & t3[3] | 65535 & t3[0]];
            this._b = 0;
            for (var n3 = 0; n3 < 4; n3++) a2.call(this);
            for (n3 = 0; n3 < 8; n3++) i3[n3] ^= r3[n3 + 4 & 7];
            if (e3) {
              var o3 = e3.words, s3 = o3[0], c2 = o3[1], h = 16711935 & (s3 << 8 | s3 >>> 24) | 4278255360 & (s3 << 24 | s3 >>> 8), l = 16711935 & (c2 << 8 | c2 >>> 24) | 4278255360 & (c2 << 24 | c2 >>> 8), f = h >>> 16 | 4294901760 & l, u = l << 16 | 65535 & h;
              i3[0] ^= h, i3[1] ^= f, i3[2] ^= l, i3[3] ^= u, i3[4] ^= h, i3[5] ^= f, i3[6] ^= l, i3[7] ^= u;
              for (n3 = 0; n3 < 4; n3++) a2.call(this);
            }
          }, _doProcessBlock: function(t3, e3) {
            var r3 = this._X;
            a2.call(this), i2[0] = r3[0] ^ r3[5] >>> 16 ^ r3[3] << 16, i2[1] = r3[2] ^ r3[7] >>> 16 ^ r3[5] << 16, i2[2] = r3[4] ^ r3[1] >>> 16 ^ r3[7] << 16, i2[3] = r3[6] ^ r3[3] >>> 16 ^ r3[1] << 16;
            for (var n3 = 0; n3 < 4; n3++) i2[n3] = 16711935 & (i2[n3] << 8 | i2[n3] >>> 24) | 4278255360 & (i2[n3] << 24 | i2[n3] >>> 8), t3[e3 + n3] ^= i2[n3];
          }, blockSize: 4, ivSize: 2 });
          function a2() {
            for (var t3 = this._X, e3 = this._C, r3 = 0; r3 < 8; r3++) n2[r3] = e3[r3];
            e3[0] = e3[0] + 1295307597 + this._b | 0, e3[1] = e3[1] + 3545052371 + (e3[0] >>> 0 < n2[0] >>> 0 ? 1 : 0) | 0, e3[2] = e3[2] + 886263092 + (e3[1] >>> 0 < n2[1] >>> 0 ? 1 : 0) | 0, e3[3] = e3[3] + 1295307597 + (e3[2] >>> 0 < n2[2] >>> 0 ? 1 : 0) | 0, e3[4] = e3[4] + 3545052371 + (e3[3] >>> 0 < n2[3] >>> 0 ? 1 : 0) | 0, e3[5] = e3[5] + 886263092 + (e3[4] >>> 0 < n2[4] >>> 0 ? 1 : 0) | 0, e3[6] = e3[6] + 1295307597 + (e3[5] >>> 0 < n2[5] >>> 0 ? 1 : 0) | 0, e3[7] = e3[7] + 3545052371 + (e3[6] >>> 0 < n2[6] >>> 0 ? 1 : 0) | 0, this._b = e3[7] >>> 0 < n2[7] >>> 0 ? 1 : 0;
            for (r3 = 0; r3 < 8; r3++) {
              var i3 = t3[r3] + e3[r3], s3 = 65535 & i3, a3 = i3 >>> 16, c2 = ((s3 * s3 >>> 17) + s3 * a3 >>> 15) + a3 * a3, h = ((4294901760 & i3) * i3 | 0) + ((65535 & i3) * i3 | 0);
              o2[r3] = c2 ^ h;
            }
            t3[0] = o2[0] + (o2[7] << 16 | o2[7] >>> 16) + (o2[6] << 16 | o2[6] >>> 16) | 0, t3[1] = o2[1] + (o2[0] << 8 | o2[0] >>> 24) + o2[7] | 0, t3[2] = o2[2] + (o2[1] << 16 | o2[1] >>> 16) + (o2[0] << 16 | o2[0] >>> 16) | 0, t3[3] = o2[3] + (o2[2] << 8 | o2[2] >>> 24) + o2[1] | 0, t3[4] = o2[4] + (o2[3] << 16 | o2[3] >>> 16) + (o2[2] << 16 | o2[2] >>> 16) | 0, t3[5] = o2[5] + (o2[4] << 8 | o2[4] >>> 24) + o2[3] | 0, t3[6] = o2[6] + (o2[5] << 16 | o2[5] >>> 16) + (o2[4] << 16 | o2[4] >>> 16) | 0, t3[7] = o2[7] + (o2[6] << 8 | o2[6] >>> 24) + o2[5] | 0;
          }
          t2.RabbitLegacy = e2._createHelper(s2);
        }(), c;
      });
    }
  });

  // node_modules/orderedmap/dist/index.js
  function OrderedMap(content) {
    this.content = content;
  }
  OrderedMap.prototype = {
    constructor: OrderedMap,
    find: function(key) {
      for (var i = 0; i < this.content.length; i += 2)
        if (this.content[i] === key) return i;
      return -1;
    },
    // :: (string) → ?any
    // Retrieve the value stored under `key`, or return undefined when
    // no such key exists.
    get: function(key) {
      var found2 = this.find(key);
      return found2 == -1 ? void 0 : this.content[found2 + 1];
    },
    // :: (string, any, ?string) → OrderedMap
    // Create a new map by replacing the value of `key` with a new
    // value, or adding a binding to the end of the map. If `newKey` is
    // given, the key of the binding will be replaced with that key.
    update: function(key, value, newKey) {
      var self2 = newKey && newKey != key ? this.remove(newKey) : this;
      var found2 = self2.find(key), content = self2.content.slice();
      if (found2 == -1) {
        content.push(newKey || key, value);
      } else {
        content[found2 + 1] = value;
        if (newKey) content[found2] = newKey;
      }
      return new OrderedMap(content);
    },
    // :: (string) → OrderedMap
    // Return a map with the given key removed, if it existed.
    remove: function(key) {
      var found2 = this.find(key);
      if (found2 == -1) return this;
      var content = this.content.slice();
      content.splice(found2, 2);
      return new OrderedMap(content);
    },
    // :: (string, any) → OrderedMap
    // Add a new key to the start of the map.
    addToStart: function(key, value) {
      return new OrderedMap([key, value].concat(this.remove(key).content));
    },
    // :: (string, any) → OrderedMap
    // Add a new key to the end of the map.
    addToEnd: function(key, value) {
      var content = this.remove(key).content.slice();
      content.push(key, value);
      return new OrderedMap(content);
    },
    // :: (string, string, any) → OrderedMap
    // Add a key after the given key. If `place` is not found, the new
    // key is added to the end.
    addBefore: function(place, key, value) {
      var without = this.remove(key), content = without.content.slice();
      var found2 = without.find(place);
      content.splice(found2 == -1 ? content.length : found2, 0, key, value);
      return new OrderedMap(content);
    },
    // :: ((key: string, value: any))
    // Call the given function for each key/value pair in the map, in
    // order.
    forEach: function(f) {
      for (var i = 0; i < this.content.length; i += 2)
        f(this.content[i], this.content[i + 1]);
    },
    // :: (union<Object, OrderedMap>) → OrderedMap
    // Create a new map by prepending the keys in this map that don't
    // appear in `map` before the keys in `map`.
    prepend: function(map2) {
      map2 = OrderedMap.from(map2);
      if (!map2.size) return this;
      return new OrderedMap(map2.content.concat(this.subtract(map2).content));
    },
    // :: (union<Object, OrderedMap>) → OrderedMap
    // Create a new map by appending the keys in this map that don't
    // appear in `map` after the keys in `map`.
    append: function(map2) {
      map2 = OrderedMap.from(map2);
      if (!map2.size) return this;
      return new OrderedMap(this.subtract(map2).content.concat(map2.content));
    },
    // :: (union<Object, OrderedMap>) → OrderedMap
    // Create a map containing all the keys in this map that don't
    // appear in `map`.
    subtract: function(map2) {
      var result = this;
      map2 = OrderedMap.from(map2);
      for (var i = 0; i < map2.content.length; i += 2)
        result = result.remove(map2.content[i]);
      return result;
    },
    // :: () → Object
    // Turn ordered map into a plain object.
    toObject: function() {
      var result = {};
      this.forEach(function(key, value) {
        result[key] = value;
      });
      return result;
    },
    // :: number
    // The amount of keys in this map.
    get size() {
      return this.content.length >> 1;
    }
  };
  OrderedMap.from = function(value) {
    if (value instanceof OrderedMap) return value;
    var content = [];
    if (value) for (var prop in value) content.push(prop, value[prop]);
    return new OrderedMap(content);
  };
  var dist_default = OrderedMap;

  // node_modules/prosemirror-model/dist/index.js
  function findDiffStart(a, b, pos) {
    for (let i = 0; ; i++) {
      if (i == a.childCount || i == b.childCount)
        return a.childCount == b.childCount ? null : pos;
      let childA = a.child(i), childB = b.child(i);
      if (childA == childB) {
        pos += childA.nodeSize;
        continue;
      }
      if (!childA.sameMarkup(childB))
        return pos;
      if (childA.isText && childA.text != childB.text) {
        for (let j2 = 0; childA.text[j2] == childB.text[j2]; j2++)
          pos++;
        return pos;
      }
      if (childA.content.size || childB.content.size) {
        let inner = findDiffStart(childA.content, childB.content, pos + 1);
        if (inner != null)
          return inner;
      }
      pos += childA.nodeSize;
    }
  }
  function findDiffEnd(a, b, posA, posB) {
    for (let iA = a.childCount, iB = b.childCount; ; ) {
      if (iA == 0 || iB == 0)
        return iA == iB ? null : { a: posA, b: posB };
      let childA = a.child(--iA), childB = b.child(--iB), size = childA.nodeSize;
      if (childA == childB) {
        posA -= size;
        posB -= size;
        continue;
      }
      if (!childA.sameMarkup(childB))
        return { a: posA, b: posB };
      if (childA.isText && childA.text != childB.text) {
        let same = 0, minSize = Math.min(childA.text.length, childB.text.length);
        while (same < minSize && childA.text[childA.text.length - same - 1] == childB.text[childB.text.length - same - 1]) {
          same++;
          posA--;
          posB--;
        }
        return { a: posA, b: posB };
      }
      if (childA.content.size || childB.content.size) {
        let inner = findDiffEnd(childA.content, childB.content, posA - 1, posB - 1);
        if (inner)
          return inner;
      }
      posA -= size;
      posB -= size;
    }
  }
  var Fragment = class _Fragment {
    /**
    @internal
    */
    constructor(content, size) {
      this.content = content;
      this.size = size || 0;
      if (size == null)
        for (let i = 0; i < content.length; i++)
          this.size += content[i].nodeSize;
    }
    /**
    Invoke a callback for all descendant nodes between the given two
    positions (relative to start of this fragment). Doesn't descend
    into a node when the callback returns `false`.
    */
    nodesBetween(from2, to2, f, nodeStart = 0, parent) {
      for (let i = 0, pos = 0; pos < to2; i++) {
        let child = this.content[i], end = pos + child.nodeSize;
        if (end > from2 && f(child, nodeStart + pos, parent || null, i) !== false && child.content.size) {
          let start = pos + 1;
          child.nodesBetween(Math.max(0, from2 - start), Math.min(child.content.size, to2 - start), f, nodeStart + start);
        }
        pos = end;
      }
    }
    /**
    Call the given callback for every descendant node. `pos` will be
    relative to the start of the fragment. The callback may return
    `false` to prevent traversal of a given node's children.
    */
    descendants(f) {
      this.nodesBetween(0, this.size, f);
    }
    /**
    Extract the text between `from` and `to`. See the same method on
    [`Node`](https://prosemirror.net/docs/ref/#model.Node.textBetween).
    */
    textBetween(from2, to2, blockSeparator, leafText) {
      let text = "", first = true;
      this.nodesBetween(from2, to2, (node, pos) => {
        let nodeText = node.isText ? node.text.slice(Math.max(from2, pos) - pos, to2 - pos) : !node.isLeaf ? "" : leafText ? typeof leafText === "function" ? leafText(node) : leafText : node.type.spec.leafText ? node.type.spec.leafText(node) : "";
        if (node.isBlock && (node.isLeaf && nodeText || node.isTextblock) && blockSeparator) {
          if (first)
            first = false;
          else
            text += blockSeparator;
        }
        text += nodeText;
      }, 0);
      return text;
    }
    /**
    Create a new fragment containing the combined content of this
    fragment and the other.
    */
    append(other) {
      if (!other.size)
        return this;
      if (!this.size)
        return other;
      let last = this.lastChild, first = other.firstChild, content = this.content.slice(), i = 0;
      if (last.isText && last.sameMarkup(first)) {
        content[content.length - 1] = last.withText(last.text + first.text);
        i = 1;
      }
      for (; i < other.content.length; i++)
        content.push(other.content[i]);
      return new _Fragment(content, this.size + other.size);
    }
    /**
    Cut out the sub-fragment between the two given positions.
    */
    cut(from2, to2 = this.size) {
      if (from2 == 0 && to2 == this.size)
        return this;
      let result = [], size = 0;
      if (to2 > from2)
        for (let i = 0, pos = 0; pos < to2; i++) {
          let child = this.content[i], end = pos + child.nodeSize;
          if (end > from2) {
            if (pos < from2 || end > to2) {
              if (child.isText)
                child = child.cut(Math.max(0, from2 - pos), Math.min(child.text.length, to2 - pos));
              else
                child = child.cut(Math.max(0, from2 - pos - 1), Math.min(child.content.size, to2 - pos - 1));
            }
            result.push(child);
            size += child.nodeSize;
          }
          pos = end;
        }
      return new _Fragment(result, size);
    }
    /**
    @internal
    */
    cutByIndex(from2, to2) {
      if (from2 == to2)
        return _Fragment.empty;
      if (from2 == 0 && to2 == this.content.length)
        return this;
      return new _Fragment(this.content.slice(from2, to2));
    }
    /**
    Create a new fragment in which the node at the given index is
    replaced by the given node.
    */
    replaceChild(index, node) {
      let current = this.content[index];
      if (current == node)
        return this;
      let copy2 = this.content.slice();
      let size = this.size + node.nodeSize - current.nodeSize;
      copy2[index] = node;
      return new _Fragment(copy2, size);
    }
    /**
    Create a new fragment by prepending the given node to this
    fragment.
    */
    addToStart(node) {
      return new _Fragment([node].concat(this.content), this.size + node.nodeSize);
    }
    /**
    Create a new fragment by appending the given node to this
    fragment.
    */
    addToEnd(node) {
      return new _Fragment(this.content.concat(node), this.size + node.nodeSize);
    }
    /**
    Compare this fragment to another one.
    */
    eq(other) {
      if (this.content.length != other.content.length)
        return false;
      for (let i = 0; i < this.content.length; i++)
        if (!this.content[i].eq(other.content[i]))
          return false;
      return true;
    }
    /**
    The first child of the fragment, or `null` if it is empty.
    */
    get firstChild() {
      return this.content.length ? this.content[0] : null;
    }
    /**
    The last child of the fragment, or `null` if it is empty.
    */
    get lastChild() {
      return this.content.length ? this.content[this.content.length - 1] : null;
    }
    /**
    The number of child nodes in this fragment.
    */
    get childCount() {
      return this.content.length;
    }
    /**
    Get the child node at the given index. Raise an error when the
    index is out of range.
    */
    child(index) {
      let found2 = this.content[index];
      if (!found2)
        throw new RangeError("Index " + index + " out of range for " + this);
      return found2;
    }
    /**
    Get the child node at the given index, if it exists.
    */
    maybeChild(index) {
      return this.content[index] || null;
    }
    /**
    Call `f` for every child node, passing the node, its offset
    into this parent node, and its index.
    */
    forEach(f) {
      for (let i = 0, p = 0; i < this.content.length; i++) {
        let child = this.content[i];
        f(child, p, i);
        p += child.nodeSize;
      }
    }
    /**
    Find the first position at which this fragment and another
    fragment differ, or `null` if they are the same.
    */
    findDiffStart(other, pos = 0) {
      return findDiffStart(this, other, pos);
    }
    /**
    Find the first position, searching from the end, at which this
    fragment and the given fragment differ, or `null` if they are
    the same. Since this position will not be the same in both
    nodes, an object with two separate positions is returned.
    */
    findDiffEnd(other, pos = this.size, otherPos = other.size) {
      return findDiffEnd(this, other, pos, otherPos);
    }
    /**
    Find the index and inner offset corresponding to a given relative
    position in this fragment. The result object will be reused
    (overwritten) the next time the function is called. @internal
    */
    findIndex(pos) {
      if (pos == 0)
        return retIndex(0, pos);
      if (pos == this.size)
        return retIndex(this.content.length, pos);
      if (pos > this.size || pos < 0)
        throw new RangeError(`Position ${pos} outside of fragment (${this})`);
      for (let i = 0, curPos = 0; ; i++) {
        let cur = this.child(i), end = curPos + cur.nodeSize;
        if (end >= pos) {
          if (end == pos)
            return retIndex(i + 1, end);
          return retIndex(i, curPos);
        }
        curPos = end;
      }
    }
    /**
    Return a debugging string that describes this fragment.
    */
    toString() {
      return "<" + this.toStringInner() + ">";
    }
    /**
    @internal
    */
    toStringInner() {
      return this.content.join(", ");
    }
    /**
    Create a JSON-serializeable representation of this fragment.
    */
    toJSON() {
      return this.content.length ? this.content.map((n) => n.toJSON()) : null;
    }
    /**
    Deserialize a fragment from its JSON representation.
    */
    static fromJSON(schema2, value) {
      if (!value)
        return _Fragment.empty;
      if (!Array.isArray(value))
        throw new RangeError("Invalid input for Fragment.fromJSON");
      return new _Fragment(value.map(schema2.nodeFromJSON));
    }
    /**
    Build a fragment from an array of nodes. Ensures that adjacent
    text nodes with the same marks are joined together.
    */
    static fromArray(array) {
      if (!array.length)
        return _Fragment.empty;
      let joined, size = 0;
      for (let i = 0; i < array.length; i++) {
        let node = array[i];
        size += node.nodeSize;
        if (i && node.isText && array[i - 1].sameMarkup(node)) {
          if (!joined)
            joined = array.slice(0, i);
          joined[joined.length - 1] = node.withText(joined[joined.length - 1].text + node.text);
        } else if (joined) {
          joined.push(node);
        }
      }
      return new _Fragment(joined || array, size);
    }
    /**
    Create a fragment from something that can be interpreted as a
    set of nodes. For `null`, it returns the empty fragment. For a
    fragment, the fragment itself. For a node or array of nodes, a
    fragment containing those nodes.
    */
    static from(nodes2) {
      if (!nodes2)
        return _Fragment.empty;
      if (nodes2 instanceof _Fragment)
        return nodes2;
      if (Array.isArray(nodes2))
        return this.fromArray(nodes2);
      if (nodes2.attrs)
        return new _Fragment([nodes2], nodes2.nodeSize);
      throw new RangeError("Can not convert " + nodes2 + " to a Fragment" + (nodes2.nodesBetween ? " (looks like multiple versions of prosemirror-model were loaded)" : ""));
    }
  };
  Fragment.empty = new Fragment([], 0);
  var found = { index: 0, offset: 0 };
  function retIndex(index, offset) {
    found.index = index;
    found.offset = offset;
    return found;
  }
  function compareDeep(a, b) {
    if (a === b)
      return true;
    if (!(a && typeof a == "object") || !(b && typeof b == "object"))
      return false;
    let array = Array.isArray(a);
    if (Array.isArray(b) != array)
      return false;
    if (array) {
      if (a.length != b.length)
        return false;
      for (let i = 0; i < a.length; i++)
        if (!compareDeep(a[i], b[i]))
          return false;
    } else {
      for (let p in a)
        if (!(p in b) || !compareDeep(a[p], b[p]))
          return false;
      for (let p in b)
        if (!(p in a))
          return false;
    }
    return true;
  }
  var Mark = class _Mark {
    /**
    @internal
    */
    constructor(type, attrs) {
      this.type = type;
      this.attrs = attrs;
    }
    /**
    Given a set of marks, create a new set which contains this one as
    well, in the right position. If this mark is already in the set,
    the set itself is returned. If any marks that are set to be
    [exclusive](https://prosemirror.net/docs/ref/#model.MarkSpec.excludes) with this mark are present,
    those are replaced by this one.
    */
    addToSet(set) {
      let copy2, placed = false;
      for (let i = 0; i < set.length; i++) {
        let other = set[i];
        if (this.eq(other))
          return set;
        if (this.type.excludes(other.type)) {
          if (!copy2)
            copy2 = set.slice(0, i);
        } else if (other.type.excludes(this.type)) {
          return set;
        } else {
          if (!placed && other.type.rank > this.type.rank) {
            if (!copy2)
              copy2 = set.slice(0, i);
            copy2.push(this);
            placed = true;
          }
          if (copy2)
            copy2.push(other);
        }
      }
      if (!copy2)
        copy2 = set.slice();
      if (!placed)
        copy2.push(this);
      return copy2;
    }
    /**
    Remove this mark from the given set, returning a new set. If this
    mark is not in the set, the set itself is returned.
    */
    removeFromSet(set) {
      for (let i = 0; i < set.length; i++)
        if (this.eq(set[i]))
          return set.slice(0, i).concat(set.slice(i + 1));
      return set;
    }
    /**
    Test whether this mark is in the given set of marks.
    */
    isInSet(set) {
      for (let i = 0; i < set.length; i++)
        if (this.eq(set[i]))
          return true;
      return false;
    }
    /**
    Test whether this mark has the same type and attributes as
    another mark.
    */
    eq(other) {
      return this == other || this.type == other.type && compareDeep(this.attrs, other.attrs);
    }
    /**
    Convert this mark to a JSON-serializeable representation.
    */
    toJSON() {
      let obj = { type: this.type.name };
      for (let _2 in this.attrs) {
        obj.attrs = this.attrs;
        break;
      }
      return obj;
    }
    /**
    Deserialize a mark from JSON.
    */
    static fromJSON(schema2, json) {
      if (!json)
        throw new RangeError("Invalid input for Mark.fromJSON");
      let type = schema2.marks[json.type];
      if (!type)
        throw new RangeError(`There is no mark type ${json.type} in this schema`);
      let mark = type.create(json.attrs);
      type.checkAttrs(mark.attrs);
      return mark;
    }
    /**
    Test whether two sets of marks are identical.
    */
    static sameSet(a, b) {
      if (a == b)
        return true;
      if (a.length != b.length)
        return false;
      for (let i = 0; i < a.length; i++)
        if (!a[i].eq(b[i]))
          return false;
      return true;
    }
    /**
    Create a properly sorted mark set from null, a single mark, or an
    unsorted array of marks.
    */
    static setFrom(marks2) {
      if (!marks2 || Array.isArray(marks2) && marks2.length == 0)
        return _Mark.none;
      if (marks2 instanceof _Mark)
        return [marks2];
      let copy2 = marks2.slice();
      copy2.sort((a, b) => a.type.rank - b.type.rank);
      return copy2;
    }
  };
  Mark.none = [];
  var ReplaceError = class extends Error {
  };
  var Slice = class _Slice {
    /**
    Create a slice. When specifying a non-zero open depth, you must
    make sure that there are nodes of at least that depth at the
    appropriate side of the fragment—i.e. if the fragment is an
    empty paragraph node, `openStart` and `openEnd` can't be greater
    than 1.
    
    It is not necessary for the content of open nodes to conform to
    the schema's content constraints, though it should be a valid
    start/end/middle for such a node, depending on which sides are
    open.
    */
    constructor(content, openStart, openEnd) {
      this.content = content;
      this.openStart = openStart;
      this.openEnd = openEnd;
    }
    /**
    The size this slice would add when inserted into a document.
    */
    get size() {
      return this.content.size - this.openStart - this.openEnd;
    }
    /**
    @internal
    */
    insertAt(pos, fragment) {
      let content = insertInto(this.content, pos + this.openStart, fragment);
      return content && new _Slice(content, this.openStart, this.openEnd);
    }
    /**
    @internal
    */
    removeBetween(from2, to2) {
      return new _Slice(removeRange(this.content, from2 + this.openStart, to2 + this.openStart), this.openStart, this.openEnd);
    }
    /**
    Tests whether this slice is equal to another slice.
    */
    eq(other) {
      return this.content.eq(other.content) && this.openStart == other.openStart && this.openEnd == other.openEnd;
    }
    /**
    @internal
    */
    toString() {
      return this.content + "(" + this.openStart + "," + this.openEnd + ")";
    }
    /**
    Convert a slice to a JSON-serializable representation.
    */
    toJSON() {
      if (!this.content.size)
        return null;
      let json = { content: this.content.toJSON() };
      if (this.openStart > 0)
        json.openStart = this.openStart;
      if (this.openEnd > 0)
        json.openEnd = this.openEnd;
      return json;
    }
    /**
    Deserialize a slice from its JSON representation.
    */
    static fromJSON(schema2, json) {
      if (!json)
        return _Slice.empty;
      let openStart = json.openStart || 0, openEnd = json.openEnd || 0;
      if (typeof openStart != "number" || typeof openEnd != "number")
        throw new RangeError("Invalid input for Slice.fromJSON");
      return new _Slice(Fragment.fromJSON(schema2, json.content), openStart, openEnd);
    }
    /**
    Create a slice from a fragment by taking the maximum possible
    open value on both side of the fragment.
    */
    static maxOpen(fragment, openIsolating = true) {
      let openStart = 0, openEnd = 0;
      for (let n = fragment.firstChild; n && !n.isLeaf && (openIsolating || !n.type.spec.isolating); n = n.firstChild)
        openStart++;
      for (let n = fragment.lastChild; n && !n.isLeaf && (openIsolating || !n.type.spec.isolating); n = n.lastChild)
        openEnd++;
      return new _Slice(fragment, openStart, openEnd);
    }
  };
  Slice.empty = new Slice(Fragment.empty, 0, 0);
  function removeRange(content, from2, to2) {
    let { index, offset } = content.findIndex(from2), child = content.maybeChild(index);
    let { index: indexTo, offset: offsetTo } = content.findIndex(to2);
    if (offset == from2 || child.isText) {
      if (offsetTo != to2 && !content.child(indexTo).isText)
        throw new RangeError("Removing non-flat range");
      return content.cut(0, from2).append(content.cut(to2));
    }
    if (index != indexTo)
      throw new RangeError("Removing non-flat range");
    return content.replaceChild(index, child.copy(removeRange(child.content, from2 - offset - 1, to2 - offset - 1)));
  }
  function insertInto(content, dist, insert, parent) {
    let { index, offset } = content.findIndex(dist), child = content.maybeChild(index);
    if (offset == dist || child.isText) {
      if (parent && !parent.canReplace(index, index, insert))
        return null;
      return content.cut(0, dist).append(insert).append(content.cut(dist));
    }
    let inner = insertInto(child.content, dist - offset - 1, insert, child);
    return inner && content.replaceChild(index, child.copy(inner));
  }
  function replace($from, $to, slice2) {
    if (slice2.openStart > $from.depth)
      throw new ReplaceError("Inserted content deeper than insertion position");
    if ($from.depth - slice2.openStart != $to.depth - slice2.openEnd)
      throw new ReplaceError("Inconsistent open depths");
    return replaceOuter($from, $to, slice2, 0);
  }
  function replaceOuter($from, $to, slice2, depth) {
    let index = $from.index(depth), node = $from.node(depth);
    if (index == $to.index(depth) && depth < $from.depth - slice2.openStart) {
      let inner = replaceOuter($from, $to, slice2, depth + 1);
      return node.copy(node.content.replaceChild(index, inner));
    } else if (!slice2.content.size) {
      return close(node, replaceTwoWay($from, $to, depth));
    } else if (!slice2.openStart && !slice2.openEnd && $from.depth == depth && $to.depth == depth) {
      let parent = $from.parent, content = parent.content;
      return close(parent, content.cut(0, $from.parentOffset).append(slice2.content).append(content.cut($to.parentOffset)));
    } else {
      let { start, end } = prepareSliceForReplace(slice2, $from);
      return close(node, replaceThreeWay($from, start, end, $to, depth));
    }
  }
  function checkJoin(main, sub) {
    if (!sub.type.compatibleContent(main.type))
      throw new ReplaceError("Cannot join " + sub.type.name + " onto " + main.type.name);
  }
  function joinable($before, $after, depth) {
    let node = $before.node(depth);
    checkJoin(node, $after.node(depth));
    return node;
  }
  function addNode(child, target) {
    let last = target.length - 1;
    if (last >= 0 && child.isText && child.sameMarkup(target[last]))
      target[last] = child.withText(target[last].text + child.text);
    else
      target.push(child);
  }
  function addRange($start, $end, depth, target) {
    let node = ($end || $start).node(depth);
    let startIndex = 0, endIndex = $end ? $end.index(depth) : node.childCount;
    if ($start) {
      startIndex = $start.index(depth);
      if ($start.depth > depth) {
        startIndex++;
      } else if ($start.textOffset) {
        addNode($start.nodeAfter, target);
        startIndex++;
      }
    }
    for (let i = startIndex; i < endIndex; i++)
      addNode(node.child(i), target);
    if ($end && $end.depth == depth && $end.textOffset)
      addNode($end.nodeBefore, target);
  }
  function close(node, content) {
    node.type.checkContent(content);
    return node.copy(content);
  }
  function replaceThreeWay($from, $start, $end, $to, depth) {
    let openStart = $from.depth > depth && joinable($from, $start, depth + 1);
    let openEnd = $to.depth > depth && joinable($end, $to, depth + 1);
    let content = [];
    addRange(null, $from, depth, content);
    if (openStart && openEnd && $start.index(depth) == $end.index(depth)) {
      checkJoin(openStart, openEnd);
      addNode(close(openStart, replaceThreeWay($from, $start, $end, $to, depth + 1)), content);
    } else {
      if (openStart)
        addNode(close(openStart, replaceTwoWay($from, $start, depth + 1)), content);
      addRange($start, $end, depth, content);
      if (openEnd)
        addNode(close(openEnd, replaceTwoWay($end, $to, depth + 1)), content);
    }
    addRange($to, null, depth, content);
    return new Fragment(content);
  }
  function replaceTwoWay($from, $to, depth) {
    let content = [];
    addRange(null, $from, depth, content);
    if ($from.depth > depth) {
      let type = joinable($from, $to, depth + 1);
      addNode(close(type, replaceTwoWay($from, $to, depth + 1)), content);
    }
    addRange($to, null, depth, content);
    return new Fragment(content);
  }
  function prepareSliceForReplace(slice2, $along) {
    let extra = $along.depth - slice2.openStart, parent = $along.node(extra);
    let node = parent.copy(slice2.content);
    for (let i = extra - 1; i >= 0; i--)
      node = $along.node(i).copy(Fragment.from(node));
    return {
      start: node.resolveNoCache(slice2.openStart + extra),
      end: node.resolveNoCache(node.content.size - slice2.openEnd - extra)
    };
  }
  var ResolvedPos = class _ResolvedPos {
    /**
    @internal
    */
    constructor(pos, path, parentOffset) {
      this.pos = pos;
      this.path = path;
      this.parentOffset = parentOffset;
      this.depth = path.length / 3 - 1;
    }
    /**
    @internal
    */
    resolveDepth(val) {
      if (val == null)
        return this.depth;
      if (val < 0)
        return this.depth + val;
      return val;
    }
    /**
    The parent node that the position points into. Note that even if
    a position points into a text node, that node is not considered
    the parent—text nodes are ‘flat’ in this model, and have no content.
    */
    get parent() {
      return this.node(this.depth);
    }
    /**
    The root node in which the position was resolved.
    */
    get doc() {
      return this.node(0);
    }
    /**
    The ancestor node at the given level. `p.node(p.depth)` is the
    same as `p.parent`.
    */
    node(depth) {
      return this.path[this.resolveDepth(depth) * 3];
    }
    /**
    The index into the ancestor at the given level. If this points
    at the 3rd node in the 2nd paragraph on the top level, for
    example, `p.index(0)` is 1 and `p.index(1)` is 2.
    */
    index(depth) {
      return this.path[this.resolveDepth(depth) * 3 + 1];
    }
    /**
    The index pointing after this position into the ancestor at the
    given level.
    */
    indexAfter(depth) {
      depth = this.resolveDepth(depth);
      return this.index(depth) + (depth == this.depth && !this.textOffset ? 0 : 1);
    }
    /**
    The (absolute) position at the start of the node at the given
    level.
    */
    start(depth) {
      depth = this.resolveDepth(depth);
      return depth == 0 ? 0 : this.path[depth * 3 - 1] + 1;
    }
    /**
    The (absolute) position at the end of the node at the given
    level.
    */
    end(depth) {
      depth = this.resolveDepth(depth);
      return this.start(depth) + this.node(depth).content.size;
    }
    /**
    The (absolute) position directly before the wrapping node at the
    given level, or, when `depth` is `this.depth + 1`, the original
    position.
    */
    before(depth) {
      depth = this.resolveDepth(depth);
      if (!depth)
        throw new RangeError("There is no position before the top-level node");
      return depth == this.depth + 1 ? this.pos : this.path[depth * 3 - 1];
    }
    /**
    The (absolute) position directly after the wrapping node at the
    given level, or the original position when `depth` is `this.depth + 1`.
    */
    after(depth) {
      depth = this.resolveDepth(depth);
      if (!depth)
        throw new RangeError("There is no position after the top-level node");
      return depth == this.depth + 1 ? this.pos : this.path[depth * 3 - 1] + this.path[depth * 3].nodeSize;
    }
    /**
    When this position points into a text node, this returns the
    distance between the position and the start of the text node.
    Will be zero for positions that point between nodes.
    */
    get textOffset() {
      return this.pos - this.path[this.path.length - 1];
    }
    /**
    Get the node directly after the position, if any. If the position
    points into a text node, only the part of that node after the
    position is returned.
    */
    get nodeAfter() {
      let parent = this.parent, index = this.index(this.depth);
      if (index == parent.childCount)
        return null;
      let dOff = this.pos - this.path[this.path.length - 1], child = parent.child(index);
      return dOff ? parent.child(index).cut(dOff) : child;
    }
    /**
    Get the node directly before the position, if any. If the
    position points into a text node, only the part of that node
    before the position is returned.
    */
    get nodeBefore() {
      let index = this.index(this.depth);
      let dOff = this.pos - this.path[this.path.length - 1];
      if (dOff)
        return this.parent.child(index).cut(0, dOff);
      return index == 0 ? null : this.parent.child(index - 1);
    }
    /**
    Get the position at the given index in the parent node at the
    given depth (which defaults to `this.depth`).
    */
    posAtIndex(index, depth) {
      depth = this.resolveDepth(depth);
      let node = this.path[depth * 3], pos = depth == 0 ? 0 : this.path[depth * 3 - 1] + 1;
      for (let i = 0; i < index; i++)
        pos += node.child(i).nodeSize;
      return pos;
    }
    /**
    Get the marks at this position, factoring in the surrounding
    marks' [`inclusive`](https://prosemirror.net/docs/ref/#model.MarkSpec.inclusive) property. If the
    position is at the start of a non-empty node, the marks of the
    node after it (if any) are returned.
    */
    marks() {
      let parent = this.parent, index = this.index();
      if (parent.content.size == 0)
        return Mark.none;
      if (this.textOffset)
        return parent.child(index).marks;
      let main = parent.maybeChild(index - 1), other = parent.maybeChild(index);
      if (!main) {
        let tmp = main;
        main = other;
        other = tmp;
      }
      let marks2 = main.marks;
      for (var i = 0; i < marks2.length; i++)
        if (marks2[i].type.spec.inclusive === false && (!other || !marks2[i].isInSet(other.marks)))
          marks2 = marks2[i--].removeFromSet(marks2);
      return marks2;
    }
    /**
    Get the marks after the current position, if any, except those
    that are non-inclusive and not present at position `$end`. This
    is mostly useful for getting the set of marks to preserve after a
    deletion. Will return `null` if this position is at the end of
    its parent node or its parent node isn't a textblock (in which
    case no marks should be preserved).
    */
    marksAcross($end) {
      let after = this.parent.maybeChild(this.index());
      if (!after || !after.isInline)
        return null;
      let marks2 = after.marks, next = $end.parent.maybeChild($end.index());
      for (var i = 0; i < marks2.length; i++)
        if (marks2[i].type.spec.inclusive === false && (!next || !marks2[i].isInSet(next.marks)))
          marks2 = marks2[i--].removeFromSet(marks2);
      return marks2;
    }
    /**
    The depth up to which this position and the given (non-resolved)
    position share the same parent nodes.
    */
    sharedDepth(pos) {
      for (let depth = this.depth; depth > 0; depth--)
        if (this.start(depth) <= pos && this.end(depth) >= pos)
          return depth;
      return 0;
    }
    /**
    Returns a range based on the place where this position and the
    given position diverge around block content. If both point into
    the same textblock, for example, a range around that textblock
    will be returned. If they point into different blocks, the range
    around those blocks in their shared ancestor is returned. You can
    pass in an optional predicate that will be called with a parent
    node to see if a range into that parent is acceptable.
    */
    blockRange(other = this, pred) {
      if (other.pos < this.pos)
        return other.blockRange(this);
      for (let d = this.depth - (this.parent.inlineContent || this.pos == other.pos ? 1 : 0); d >= 0; d--)
        if (other.pos <= this.end(d) && (!pred || pred(this.node(d))))
          return new NodeRange(this, other, d);
      return null;
    }
    /**
    Query whether the given position shares the same parent node.
    */
    sameParent(other) {
      return this.pos - this.parentOffset == other.pos - other.parentOffset;
    }
    /**
    Return the greater of this and the given position.
    */
    max(other) {
      return other.pos > this.pos ? other : this;
    }
    /**
    Return the smaller of this and the given position.
    */
    min(other) {
      return other.pos < this.pos ? other : this;
    }
    /**
    @internal
    */
    toString() {
      let str = "";
      for (let i = 1; i <= this.depth; i++)
        str += (str ? "/" : "") + this.node(i).type.name + "_" + this.index(i - 1);
      return str + ":" + this.parentOffset;
    }
    /**
    @internal
    */
    static resolve(doc3, pos) {
      if (!(pos >= 0 && pos <= doc3.content.size))
        throw new RangeError("Position " + pos + " out of range");
      let path = [];
      let start = 0, parentOffset = pos;
      for (let node = doc3; ; ) {
        let { index, offset } = node.content.findIndex(parentOffset);
        let rem = parentOffset - offset;
        path.push(node, index, start + offset);
        if (!rem)
          break;
        node = node.child(index);
        if (node.isText)
          break;
        parentOffset = rem - 1;
        start += offset + 1;
      }
      return new _ResolvedPos(pos, path, parentOffset);
    }
    /**
    @internal
    */
    static resolveCached(doc3, pos) {
      let cache = resolveCache.get(doc3);
      if (cache) {
        for (let i = 0; i < cache.elts.length; i++) {
          let elt = cache.elts[i];
          if (elt.pos == pos)
            return elt;
        }
      } else {
        resolveCache.set(doc3, cache = new ResolveCache());
      }
      let result = cache.elts[cache.i] = _ResolvedPos.resolve(doc3, pos);
      cache.i = (cache.i + 1) % resolveCacheSize;
      return result;
    }
  };
  var ResolveCache = class {
    constructor() {
      this.elts = [];
      this.i = 0;
    }
  };
  var resolveCacheSize = 12;
  var resolveCache = /* @__PURE__ */ new WeakMap();
  var NodeRange = class {
    /**
    Construct a node range. `$from` and `$to` should point into the
    same node until at least the given `depth`, since a node range
    denotes an adjacent set of nodes in a single parent node.
    */
    constructor($from, $to, depth) {
      this.$from = $from;
      this.$to = $to;
      this.depth = depth;
    }
    /**
    The position at the start of the range.
    */
    get start() {
      return this.$from.before(this.depth + 1);
    }
    /**
    The position at the end of the range.
    */
    get end() {
      return this.$to.after(this.depth + 1);
    }
    /**
    The parent node that the range points into.
    */
    get parent() {
      return this.$from.node(this.depth);
    }
    /**
    The start index of the range in the parent node.
    */
    get startIndex() {
      return this.$from.index(this.depth);
    }
    /**
    The end index of the range in the parent node.
    */
    get endIndex() {
      return this.$to.indexAfter(this.depth);
    }
  };
  var emptyAttrs = /* @__PURE__ */ Object.create(null);
  var Node2 = class _Node {
    /**
    @internal
    */
    constructor(type, attrs, content, marks2 = Mark.none) {
      this.type = type;
      this.attrs = attrs;
      this.marks = marks2;
      this.content = content || Fragment.empty;
    }
    /**
    The array of this node's child nodes.
    */
    get children() {
      return this.content.content;
    }
    /**
    The size of this node, as defined by the integer-based [indexing
    scheme](https://prosemirror.net/docs/guide/#doc.indexing). For text nodes, this is the
    amount of characters. For other leaf nodes, it is one. For
    non-leaf nodes, it is the size of the content plus two (the
    start and end token).
    */
    get nodeSize() {
      return this.isLeaf ? 1 : 2 + this.content.size;
    }
    /**
    The number of children that the node has.
    */
    get childCount() {
      return this.content.childCount;
    }
    /**
    Get the child node at the given index. Raises an error when the
    index is out of range.
    */
    child(index) {
      return this.content.child(index);
    }
    /**
    Get the child node at the given index, if it exists.
    */
    maybeChild(index) {
      return this.content.maybeChild(index);
    }
    /**
    Call `f` for every child node, passing the node, its offset
    into this parent node, and its index.
    */
    forEach(f) {
      this.content.forEach(f);
    }
    /**
    Invoke a callback for all descendant nodes recursively between
    the given two positions that are relative to start of this
    node's content. The callback is invoked with the node, its
    position relative to the original node (method receiver),
    its parent node, and its child index. When the callback returns
    false for a given node, that node's children will not be
    recursed over. The last parameter can be used to specify a
    starting position to count from.
    */
    nodesBetween(from2, to2, f, startPos = 0) {
      this.content.nodesBetween(from2, to2, f, startPos, this);
    }
    /**
    Call the given callback for every descendant node. Doesn't
    descend into a node when the callback returns `false`.
    */
    descendants(f) {
      this.nodesBetween(0, this.content.size, f);
    }
    /**
    Concatenates all the text nodes found in this fragment and its
    children.
    */
    get textContent() {
      return this.isLeaf && this.type.spec.leafText ? this.type.spec.leafText(this) : this.textBetween(0, this.content.size, "");
    }
    /**
    Get all text between positions `from` and `to`. When
    `blockSeparator` is given, it will be inserted to separate text
    from different block nodes. If `leafText` is given, it'll be
    inserted for every non-text leaf node encountered, otherwise
    [`leafText`](https://prosemirror.net/docs/ref/#model.NodeSpec.leafText) will be used.
    */
    textBetween(from2, to2, blockSeparator, leafText) {
      return this.content.textBetween(from2, to2, blockSeparator, leafText);
    }
    /**
    Returns this node's first child, or `null` if there are no
    children.
    */
    get firstChild() {
      return this.content.firstChild;
    }
    /**
    Returns this node's last child, or `null` if there are no
    children.
    */
    get lastChild() {
      return this.content.lastChild;
    }
    /**
    Test whether two nodes represent the same piece of document.
    */
    eq(other) {
      return this == other || this.sameMarkup(other) && this.content.eq(other.content);
    }
    /**
    Compare the markup (type, attributes, and marks) of this node to
    those of another. Returns `true` if both have the same markup.
    */
    sameMarkup(other) {
      return this.hasMarkup(other.type, other.attrs, other.marks);
    }
    /**
    Check whether this node's markup correspond to the given type,
    attributes, and marks.
    */
    hasMarkup(type, attrs, marks2) {
      return this.type == type && compareDeep(this.attrs, attrs || type.defaultAttrs || emptyAttrs) && Mark.sameSet(this.marks, marks2 || Mark.none);
    }
    /**
    Create a new node with the same markup as this node, containing
    the given content (or empty, if no content is given).
    */
    copy(content = null) {
      if (content == this.content)
        return this;
      return new _Node(this.type, this.attrs, content, this.marks);
    }
    /**
    Create a copy of this node, with the given set of marks instead
    of the node's own marks.
    */
    mark(marks2) {
      return marks2 == this.marks ? this : new _Node(this.type, this.attrs, this.content, marks2);
    }
    /**
    Create a copy of this node with only the content between the
    given positions. If `to` is not given, it defaults to the end of
    the node.
    */
    cut(from2, to2 = this.content.size) {
      if (from2 == 0 && to2 == this.content.size)
        return this;
      return this.copy(this.content.cut(from2, to2));
    }
    /**
    Cut out the part of the document between the given positions, and
    return it as a `Slice` object.
    */
    slice(from2, to2 = this.content.size, includeParents = false) {
      if (from2 == to2)
        return Slice.empty;
      let $from = this.resolve(from2), $to = this.resolve(to2);
      let depth = includeParents ? 0 : $from.sharedDepth(to2);
      let start = $from.start(depth), node = $from.node(depth);
      let content = node.content.cut($from.pos - start, $to.pos - start);
      return new Slice(content, $from.depth - depth, $to.depth - depth);
    }
    /**
    Replace the part of the document between the given positions with
    the given slice. The slice must 'fit', meaning its open sides
    must be able to connect to the surrounding content, and its
    content nodes must be valid children for the node they are placed
    into. If any of this is violated, an error of type
    [`ReplaceError`](https://prosemirror.net/docs/ref/#model.ReplaceError) is thrown.
    */
    replace(from2, to2, slice2) {
      return replace(this.resolve(from2), this.resolve(to2), slice2);
    }
    /**
    Find the node directly after the given position.
    */
    nodeAt(pos) {
      for (let node = this; ; ) {
        let { index, offset } = node.content.findIndex(pos);
        node = node.maybeChild(index);
        if (!node)
          return null;
        if (offset == pos || node.isText)
          return node;
        pos -= offset + 1;
      }
    }
    /**
    Find the (direct) child node after the given offset, if any,
    and return it along with its index and offset relative to this
    node.
    */
    childAfter(pos) {
      let { index, offset } = this.content.findIndex(pos);
      return { node: this.content.maybeChild(index), index, offset };
    }
    /**
    Find the (direct) child node before the given offset, if any,
    and return it along with its index and offset relative to this
    node.
    */
    childBefore(pos) {
      if (pos == 0)
        return { node: null, index: 0, offset: 0 };
      let { index, offset } = this.content.findIndex(pos);
      if (offset < pos)
        return { node: this.content.child(index), index, offset };
      let node = this.content.child(index - 1);
      return { node, index: index - 1, offset: offset - node.nodeSize };
    }
    /**
    Resolve the given position in the document, returning an
    [object](https://prosemirror.net/docs/ref/#model.ResolvedPos) with information about its context.
    */
    resolve(pos) {
      return ResolvedPos.resolveCached(this, pos);
    }
    /**
    @internal
    */
    resolveNoCache(pos) {
      return ResolvedPos.resolve(this, pos);
    }
    /**
    Test whether a given mark or mark type occurs in this document
    between the two given positions.
    */
    rangeHasMark(from2, to2, type) {
      let found2 = false;
      if (to2 > from2)
        this.nodesBetween(from2, to2, (node) => {
          if (type.isInSet(node.marks))
            found2 = true;
          return !found2;
        });
      return found2;
    }
    /**
    True when this is a block (non-inline node)
    */
    get isBlock() {
      return this.type.isBlock;
    }
    /**
    True when this is a textblock node, a block node with inline
    content.
    */
    get isTextblock() {
      return this.type.isTextblock;
    }
    /**
    True when this node allows inline content.
    */
    get inlineContent() {
      return this.type.inlineContent;
    }
    /**
    True when this is an inline node (a text node or a node that can
    appear among text).
    */
    get isInline() {
      return this.type.isInline;
    }
    /**
    True when this is a text node.
    */
    get isText() {
      return this.type.isText;
    }
    /**
    True when this is a leaf node.
    */
    get isLeaf() {
      return this.type.isLeaf;
    }
    /**
    True when this is an atom, i.e. when it does not have directly
    editable content. This is usually the same as `isLeaf`, but can
    be configured with the [`atom` property](https://prosemirror.net/docs/ref/#model.NodeSpec.atom)
    on a node's spec (typically used when the node is displayed as
    an uneditable [node view](https://prosemirror.net/docs/ref/#view.NodeView)).
    */
    get isAtom() {
      return this.type.isAtom;
    }
    /**
    Return a string representation of this node for debugging
    purposes.
    */
    toString() {
      if (this.type.spec.toDebugString)
        return this.type.spec.toDebugString(this);
      let name = this.type.name;
      if (this.content.size)
        name += "(" + this.content.toStringInner() + ")";
      return wrapMarks(this.marks, name);
    }
    /**
    Get the content match in this node at the given index.
    */
    contentMatchAt(index) {
      let match = this.type.contentMatch.matchFragment(this.content, 0, index);
      if (!match)
        throw new Error("Called contentMatchAt on a node with invalid content");
      return match;
    }
    /**
    Test whether replacing the range between `from` and `to` (by
    child index) with the given replacement fragment (which defaults
    to the empty fragment) would leave the node's content valid. You
    can optionally pass `start` and `end` indices into the
    replacement fragment.
    */
    canReplace(from2, to2, replacement = Fragment.empty, start = 0, end = replacement.childCount) {
      let one = this.contentMatchAt(from2).matchFragment(replacement, start, end);
      let two = one && one.matchFragment(this.content, to2);
      if (!two || !two.validEnd)
        return false;
      for (let i = start; i < end; i++)
        if (!this.type.allowsMarks(replacement.child(i).marks))
          return false;
      return true;
    }
    /**
    Test whether replacing the range `from` to `to` (by index) with
    a node of the given type would leave the node's content valid.
    */
    canReplaceWith(from2, to2, type, marks2) {
      if (marks2 && !this.type.allowsMarks(marks2))
        return false;
      let start = this.contentMatchAt(from2).matchType(type);
      let end = start && start.matchFragment(this.content, to2);
      return end ? end.validEnd : false;
    }
    /**
    Test whether the given node's content could be appended to this
    node. If that node is empty, this will only return true if there
    is at least one node type that can appear in both nodes (to avoid
    merging completely incompatible nodes).
    */
    canAppend(other) {
      if (other.content.size)
        return this.canReplace(this.childCount, this.childCount, other.content);
      else
        return this.type.compatibleContent(other.type);
    }
    /**
    Check whether this node and its descendants conform to the
    schema, and raise an exception when they do not.
    */
    check() {
      this.type.checkContent(this.content);
      this.type.checkAttrs(this.attrs);
      let copy2 = Mark.none;
      for (let i = 0; i < this.marks.length; i++) {
        let mark = this.marks[i];
        mark.type.checkAttrs(mark.attrs);
        copy2 = mark.addToSet(copy2);
      }
      if (!Mark.sameSet(copy2, this.marks))
        throw new RangeError(`Invalid collection of marks for node ${this.type.name}: ${this.marks.map((m) => m.type.name)}`);
      this.content.forEach((node) => node.check());
    }
    /**
    Return a JSON-serializeable representation of this node.
    */
    toJSON() {
      let obj = { type: this.type.name };
      for (let _2 in this.attrs) {
        obj.attrs = this.attrs;
        break;
      }
      if (this.content.size)
        obj.content = this.content.toJSON();
      if (this.marks.length)
        obj.marks = this.marks.map((n) => n.toJSON());
      return obj;
    }
    /**
    Deserialize a node from its JSON representation.
    */
    static fromJSON(schema2, json) {
      if (!json)
        throw new RangeError("Invalid input for Node.fromJSON");
      let marks2 = void 0;
      if (json.marks) {
        if (!Array.isArray(json.marks))
          throw new RangeError("Invalid mark data for Node.fromJSON");
        marks2 = json.marks.map(schema2.markFromJSON);
      }
      if (json.type == "text") {
        if (typeof json.text != "string")
          throw new RangeError("Invalid text node in JSON");
        return schema2.text(json.text, marks2);
      }
      let content = Fragment.fromJSON(schema2, json.content);
      let node = schema2.nodeType(json.type).create(json.attrs, content, marks2);
      node.type.checkAttrs(node.attrs);
      return node;
    }
  };
  Node2.prototype.text = void 0;
  var TextNode = class _TextNode extends Node2 {
    /**
    @internal
    */
    constructor(type, attrs, content, marks2) {
      super(type, attrs, null, marks2);
      if (!content)
        throw new RangeError("Empty text nodes are not allowed");
      this.text = content;
    }
    toString() {
      if (this.type.spec.toDebugString)
        return this.type.spec.toDebugString(this);
      return wrapMarks(this.marks, JSON.stringify(this.text));
    }
    get textContent() {
      return this.text;
    }
    textBetween(from2, to2) {
      return this.text.slice(from2, to2);
    }
    get nodeSize() {
      return this.text.length;
    }
    mark(marks2) {
      return marks2 == this.marks ? this : new _TextNode(this.type, this.attrs, this.text, marks2);
    }
    withText(text) {
      if (text == this.text)
        return this;
      return new _TextNode(this.type, this.attrs, text, this.marks);
    }
    cut(from2 = 0, to2 = this.text.length) {
      if (from2 == 0 && to2 == this.text.length)
        return this;
      return this.withText(this.text.slice(from2, to2));
    }
    eq(other) {
      return this.sameMarkup(other) && this.text == other.text;
    }
    toJSON() {
      let base2 = super.toJSON();
      base2.text = this.text;
      return base2;
    }
  };
  function wrapMarks(marks2, str) {
    for (let i = marks2.length - 1; i >= 0; i--)
      str = marks2[i].type.name + "(" + str + ")";
    return str;
  }
  var ContentMatch = class _ContentMatch {
    /**
    @internal
    */
    constructor(validEnd) {
      this.validEnd = validEnd;
      this.next = [];
      this.wrapCache = [];
    }
    /**
    @internal
    */
    static parse(string, nodeTypes) {
      let stream = new TokenStream(string, nodeTypes);
      if (stream.next == null)
        return _ContentMatch.empty;
      let expr = parseExpr(stream);
      if (stream.next)
        stream.err("Unexpected trailing text");
      let match = dfa(nfa(expr));
      checkForDeadEnds(match, stream);
      return match;
    }
    /**
    Match a node type, returning a match after that node if
    successful.
    */
    matchType(type) {
      for (let i = 0; i < this.next.length; i++)
        if (this.next[i].type == type)
          return this.next[i].next;
      return null;
    }
    /**
    Try to match a fragment. Returns the resulting match when
    successful.
    */
    matchFragment(frag, start = 0, end = frag.childCount) {
      let cur = this;
      for (let i = start; cur && i < end; i++)
        cur = cur.matchType(frag.child(i).type);
      return cur;
    }
    /**
    @internal
    */
    get inlineContent() {
      return this.next.length != 0 && this.next[0].type.isInline;
    }
    /**
    Get the first matching node type at this match position that can
    be generated.
    */
    get defaultType() {
      for (let i = 0; i < this.next.length; i++) {
        let { type } = this.next[i];
        if (!(type.isText || type.hasRequiredAttrs()))
          return type;
      }
      return null;
    }
    /**
    @internal
    */
    compatible(other) {
      for (let i = 0; i < this.next.length; i++)
        for (let j2 = 0; j2 < other.next.length; j2++)
          if (this.next[i].type == other.next[j2].type)
            return true;
      return false;
    }
    /**
    Try to match the given fragment, and if that fails, see if it can
    be made to match by inserting nodes in front of it. When
    successful, return a fragment of inserted nodes (which may be
    empty if nothing had to be inserted). When `toEnd` is true, only
    return a fragment if the resulting match goes to the end of the
    content expression.
    */
    fillBefore(after, toEnd = false, startIndex = 0) {
      let seen = [this];
      function search(match, types) {
        let finished = match.matchFragment(after, startIndex);
        if (finished && (!toEnd || finished.validEnd))
          return Fragment.from(types.map((tp) => tp.createAndFill()));
        for (let i = 0; i < match.next.length; i++) {
          let { type, next } = match.next[i];
          if (!(type.isText || type.hasRequiredAttrs()) && seen.indexOf(next) == -1) {
            seen.push(next);
            let found2 = search(next, types.concat(type));
            if (found2)
              return found2;
          }
        }
        return null;
      }
      return search(this, []);
    }
    /**
    Find a set of wrapping node types that would allow a node of the
    given type to appear at this position. The result may be empty
    (when it fits directly) and will be null when no such wrapping
    exists.
    */
    findWrapping(target) {
      for (let i = 0; i < this.wrapCache.length; i += 2)
        if (this.wrapCache[i] == target)
          return this.wrapCache[i + 1];
      let computed = this.computeWrapping(target);
      this.wrapCache.push(target, computed);
      return computed;
    }
    /**
    @internal
    */
    computeWrapping(target) {
      let seen = /* @__PURE__ */ Object.create(null), active = [{ match: this, type: null, via: null }];
      while (active.length) {
        let current = active.shift(), match = current.match;
        if (match.matchType(target)) {
          let result = [];
          for (let obj = current; obj.type; obj = obj.via)
            result.push(obj.type);
          return result.reverse();
        }
        for (let i = 0; i < match.next.length; i++) {
          let { type, next } = match.next[i];
          if (!type.isLeaf && !type.hasRequiredAttrs() && !(type.name in seen) && (!current.type || next.validEnd)) {
            active.push({ match: type.contentMatch, type, via: current });
            seen[type.name] = true;
          }
        }
      }
      return null;
    }
    /**
    The number of outgoing edges this node has in the finite
    automaton that describes the content expression.
    */
    get edgeCount() {
      return this.next.length;
    }
    /**
    Get the _n_​th outgoing edge from this node in the finite
    automaton that describes the content expression.
    */
    edge(n) {
      if (n >= this.next.length)
        throw new RangeError(`There's no ${n}th edge in this content match`);
      return this.next[n];
    }
    /**
    @internal
    */
    toString() {
      let seen = [];
      function scan(m) {
        seen.push(m);
        for (let i = 0; i < m.next.length; i++)
          if (seen.indexOf(m.next[i].next) == -1)
            scan(m.next[i].next);
      }
      scan(this);
      return seen.map((m, i) => {
        let out = i + (m.validEnd ? "*" : " ") + " ";
        for (let i2 = 0; i2 < m.next.length; i2++)
          out += (i2 ? ", " : "") + m.next[i2].type.name + "->" + seen.indexOf(m.next[i2].next);
        return out;
      }).join("\n");
    }
  };
  ContentMatch.empty = new ContentMatch(true);
  var TokenStream = class {
    constructor(string, nodeTypes) {
      this.string = string;
      this.nodeTypes = nodeTypes;
      this.inline = null;
      this.pos = 0;
      this.tokens = string.split(/\s*(?=\b|\W|$)/);
      if (this.tokens[this.tokens.length - 1] == "")
        this.tokens.pop();
      if (this.tokens[0] == "")
        this.tokens.shift();
    }
    get next() {
      return this.tokens[this.pos];
    }
    eat(tok) {
      return this.next == tok && (this.pos++ || true);
    }
    err(str) {
      throw new SyntaxError(str + " (in content expression '" + this.string + "')");
    }
  };
  function parseExpr(stream) {
    let exprs = [];
    do {
      exprs.push(parseExprSeq(stream));
    } while (stream.eat("|"));
    return exprs.length == 1 ? exprs[0] : { type: "choice", exprs };
  }
  function parseExprSeq(stream) {
    let exprs = [];
    do {
      exprs.push(parseExprSubscript(stream));
    } while (stream.next && stream.next != ")" && stream.next != "|");
    return exprs.length == 1 ? exprs[0] : { type: "seq", exprs };
  }
  function parseExprSubscript(stream) {
    let expr = parseExprAtom(stream);
    for (; ; ) {
      if (stream.eat("+"))
        expr = { type: "plus", expr };
      else if (stream.eat("*"))
        expr = { type: "star", expr };
      else if (stream.eat("?"))
        expr = { type: "opt", expr };
      else if (stream.eat("{"))
        expr = parseExprRange(stream, expr);
      else
        break;
    }
    return expr;
  }
  function parseNum(stream) {
    if (/\D/.test(stream.next))
      stream.err("Expected number, got '" + stream.next + "'");
    let result = Number(stream.next);
    stream.pos++;
    return result;
  }
  function parseExprRange(stream, expr) {
    let min = parseNum(stream), max = min;
    if (stream.eat(",")) {
      if (stream.next != "}")
        max = parseNum(stream);
      else
        max = -1;
    }
    if (!stream.eat("}"))
      stream.err("Unclosed braced range");
    return { type: "range", min, max, expr };
  }
  function resolveName(stream, name) {
    let types = stream.nodeTypes, type = types[name];
    if (type)
      return [type];
    let result = [];
    for (let typeName in types) {
      let type2 = types[typeName];
      if (type2.isInGroup(name))
        result.push(type2);
    }
    if (result.length == 0)
      stream.err("No node type or group '" + name + "' found");
    return result;
  }
  function parseExprAtom(stream) {
    if (stream.eat("(")) {
      let expr = parseExpr(stream);
      if (!stream.eat(")"))
        stream.err("Missing closing paren");
      return expr;
    } else if (!/\W/.test(stream.next)) {
      let exprs = resolveName(stream, stream.next).map((type) => {
        if (stream.inline == null)
          stream.inline = type.isInline;
        else if (stream.inline != type.isInline)
          stream.err("Mixing inline and block content");
        return { type: "name", value: type };
      });
      stream.pos++;
      return exprs.length == 1 ? exprs[0] : { type: "choice", exprs };
    } else {
      stream.err("Unexpected token '" + stream.next + "'");
    }
  }
  function nfa(expr) {
    let nfa2 = [[]];
    connect(compile(expr, 0), node());
    return nfa2;
    function node() {
      return nfa2.push([]) - 1;
    }
    function edge(from2, to2, term) {
      let edge2 = { term, to: to2 };
      nfa2[from2].push(edge2);
      return edge2;
    }
    function connect(edges, to2) {
      edges.forEach((edge2) => edge2.to = to2);
    }
    function compile(expr2, from2) {
      if (expr2.type == "choice") {
        return expr2.exprs.reduce((out, expr3) => out.concat(compile(expr3, from2)), []);
      } else if (expr2.type == "seq") {
        for (let i = 0; ; i++) {
          let next = compile(expr2.exprs[i], from2);
          if (i == expr2.exprs.length - 1)
            return next;
          connect(next, from2 = node());
        }
      } else if (expr2.type == "star") {
        let loop = node();
        edge(from2, loop);
        connect(compile(expr2.expr, loop), loop);
        return [edge(loop)];
      } else if (expr2.type == "plus") {
        let loop = node();
        connect(compile(expr2.expr, from2), loop);
        connect(compile(expr2.expr, loop), loop);
        return [edge(loop)];
      } else if (expr2.type == "opt") {
        return [edge(from2)].concat(compile(expr2.expr, from2));
      } else if (expr2.type == "range") {
        let cur = from2;
        for (let i = 0; i < expr2.min; i++) {
          let next = node();
          connect(compile(expr2.expr, cur), next);
          cur = next;
        }
        if (expr2.max == -1) {
          connect(compile(expr2.expr, cur), cur);
        } else {
          for (let i = expr2.min; i < expr2.max; i++) {
            let next = node();
            edge(cur, next);
            connect(compile(expr2.expr, cur), next);
            cur = next;
          }
        }
        return [edge(cur)];
      } else if (expr2.type == "name") {
        return [edge(from2, void 0, expr2.value)];
      } else {
        throw new Error("Unknown expr type");
      }
    }
  }
  function cmp(a, b) {
    return b - a;
  }
  function nullFrom(nfa2, node) {
    let result = [];
    scan(node);
    return result.sort(cmp);
    function scan(node2) {
      let edges = nfa2[node2];
      if (edges.length == 1 && !edges[0].term)
        return scan(edges[0].to);
      result.push(node2);
      for (let i = 0; i < edges.length; i++) {
        let { term, to: to2 } = edges[i];
        if (!term && result.indexOf(to2) == -1)
          scan(to2);
      }
    }
  }
  function dfa(nfa2) {
    let labeled = /* @__PURE__ */ Object.create(null);
    return explore(nullFrom(nfa2, 0));
    function explore(states) {
      let out = [];
      states.forEach((node) => {
        nfa2[node].forEach(({ term, to: to2 }) => {
          if (!term)
            return;
          let set;
          for (let i = 0; i < out.length; i++)
            if (out[i][0] == term)
              set = out[i][1];
          nullFrom(nfa2, to2).forEach((node2) => {
            if (!set)
              out.push([term, set = []]);
            if (set.indexOf(node2) == -1)
              set.push(node2);
          });
        });
      });
      let state = labeled[states.join(",")] = new ContentMatch(states.indexOf(nfa2.length - 1) > -1);
      for (let i = 0; i < out.length; i++) {
        let states2 = out[i][1].sort(cmp);
        state.next.push({ type: out[i][0], next: labeled[states2.join(",")] || explore(states2) });
      }
      return state;
    }
  }
  function checkForDeadEnds(match, stream) {
    for (let i = 0, work = [match]; i < work.length; i++) {
      let state = work[i], dead = !state.validEnd, nodes2 = [];
      for (let j2 = 0; j2 < state.next.length; j2++) {
        let { type, next } = state.next[j2];
        nodes2.push(type.name);
        if (dead && !(type.isText || type.hasRequiredAttrs()))
          dead = false;
        if (work.indexOf(next) == -1)
          work.push(next);
      }
      if (dead)
        stream.err("Only non-generatable nodes (" + nodes2.join(", ") + ") in a required position (see https://prosemirror.net/docs/guide/#generatable)");
    }
  }
  function defaultAttrs(attrs) {
    let defaults = /* @__PURE__ */ Object.create(null);
    for (let attrName in attrs) {
      let attr = attrs[attrName];
      if (!attr.hasDefault)
        return null;
      defaults[attrName] = attr.default;
    }
    return defaults;
  }
  function computeAttrs(attrs, value) {
    let built = /* @__PURE__ */ Object.create(null);
    for (let name in attrs) {
      let given = value && value[name];
      if (given === void 0) {
        let attr = attrs[name];
        if (attr.hasDefault)
          given = attr.default;
        else
          throw new RangeError("No value supplied for attribute " + name);
      }
      built[name] = given;
    }
    return built;
  }
  function checkAttrs(attrs, values, type, name) {
    for (let name2 in values)
      if (!(name2 in attrs))
        throw new RangeError(`Unsupported attribute ${name2} for ${type} of type ${name2}`);
    for (let name2 in attrs) {
      let attr = attrs[name2];
      if (attr.validate)
        attr.validate(values[name2]);
    }
  }
  function initAttrs(typeName, attrs) {
    let result = /* @__PURE__ */ Object.create(null);
    if (attrs)
      for (let name in attrs)
        result[name] = new Attribute(typeName, name, attrs[name]);
    return result;
  }
  var NodeType = class _NodeType {
    /**
    @internal
    */
    constructor(name, schema2, spec) {
      this.name = name;
      this.schema = schema2;
      this.spec = spec;
      this.markSet = null;
      this.groups = spec.group ? spec.group.split(" ") : [];
      this.attrs = initAttrs(name, spec.attrs);
      this.defaultAttrs = defaultAttrs(this.attrs);
      this.contentMatch = null;
      this.inlineContent = null;
      this.isBlock = !(spec.inline || name == "text");
      this.isText = name == "text";
    }
    /**
    True if this is an inline type.
    */
    get isInline() {
      return !this.isBlock;
    }
    /**
    True if this is a textblock type, a block that contains inline
    content.
    */
    get isTextblock() {
      return this.isBlock && this.inlineContent;
    }
    /**
    True for node types that allow no content.
    */
    get isLeaf() {
      return this.contentMatch == ContentMatch.empty;
    }
    /**
    True when this node is an atom, i.e. when it does not have
    directly editable content.
    */
    get isAtom() {
      return this.isLeaf || !!this.spec.atom;
    }
    /**
    Return true when this node type is part of the given
    [group](https://prosemirror.net/docs/ref/#model.NodeSpec.group).
    */
    isInGroup(group) {
      return this.groups.indexOf(group) > -1;
    }
    /**
    The node type's [whitespace](https://prosemirror.net/docs/ref/#model.NodeSpec.whitespace) option.
    */
    get whitespace() {
      return this.spec.whitespace || (this.spec.code ? "pre" : "normal");
    }
    /**
    Tells you whether this node type has any required attributes.
    */
    hasRequiredAttrs() {
      for (let n in this.attrs)
        if (this.attrs[n].isRequired)
          return true;
      return false;
    }
    /**
    Indicates whether this node allows some of the same content as
    the given node type.
    */
    compatibleContent(other) {
      return this == other || this.contentMatch.compatible(other.contentMatch);
    }
    /**
    @internal
    */
    computeAttrs(attrs) {
      if (!attrs && this.defaultAttrs)
        return this.defaultAttrs;
      else
        return computeAttrs(this.attrs, attrs);
    }
    /**
    Create a `Node` of this type. The given attributes are
    checked and defaulted (you can pass `null` to use the type's
    defaults entirely, if no required attributes exist). `content`
    may be a `Fragment`, a node, an array of nodes, or
    `null`. Similarly `marks` may be `null` to default to the empty
    set of marks.
    */
    create(attrs = null, content, marks2) {
      if (this.isText)
        throw new Error("NodeType.create can't construct text nodes");
      return new Node2(this, this.computeAttrs(attrs), Fragment.from(content), Mark.setFrom(marks2));
    }
    /**
    Like [`create`](https://prosemirror.net/docs/ref/#model.NodeType.create), but check the given content
    against the node type's content restrictions, and throw an error
    if it doesn't match.
    */
    createChecked(attrs = null, content, marks2) {
      content = Fragment.from(content);
      this.checkContent(content);
      return new Node2(this, this.computeAttrs(attrs), content, Mark.setFrom(marks2));
    }
    /**
    Like [`create`](https://prosemirror.net/docs/ref/#model.NodeType.create), but see if it is
    necessary to add nodes to the start or end of the given fragment
    to make it fit the node. If no fitting wrapping can be found,
    return null. Note that, due to the fact that required nodes can
    always be created, this will always succeed if you pass null or
    `Fragment.empty` as content.
    */
    createAndFill(attrs = null, content, marks2) {
      attrs = this.computeAttrs(attrs);
      content = Fragment.from(content);
      if (content.size) {
        let before = this.contentMatch.fillBefore(content);
        if (!before)
          return null;
        content = before.append(content);
      }
      let matched = this.contentMatch.matchFragment(content);
      let after = matched && matched.fillBefore(Fragment.empty, true);
      if (!after)
        return null;
      return new Node2(this, attrs, content.append(after), Mark.setFrom(marks2));
    }
    /**
    Returns true if the given fragment is valid content for this node
    type.
    */
    validContent(content) {
      let result = this.contentMatch.matchFragment(content);
      if (!result || !result.validEnd)
        return false;
      for (let i = 0; i < content.childCount; i++)
        if (!this.allowsMarks(content.child(i).marks))
          return false;
      return true;
    }
    /**
    Throws a RangeError if the given fragment is not valid content for this
    node type.
    @internal
    */
    checkContent(content) {
      if (!this.validContent(content))
        throw new RangeError(`Invalid content for node ${this.name}: ${content.toString().slice(0, 50)}`);
    }
    /**
    @internal
    */
    checkAttrs(attrs) {
      checkAttrs(this.attrs, attrs, "node", this.name);
    }
    /**
    Check whether the given mark type is allowed in this node.
    */
    allowsMarkType(markType) {
      return this.markSet == null || this.markSet.indexOf(markType) > -1;
    }
    /**
    Test whether the given set of marks are allowed in this node.
    */
    allowsMarks(marks2) {
      if (this.markSet == null)
        return true;
      for (let i = 0; i < marks2.length; i++)
        if (!this.allowsMarkType(marks2[i].type))
          return false;
      return true;
    }
    /**
    Removes the marks that are not allowed in this node from the given set.
    */
    allowedMarks(marks2) {
      if (this.markSet == null)
        return marks2;
      let copy2;
      for (let i = 0; i < marks2.length; i++) {
        if (!this.allowsMarkType(marks2[i].type)) {
          if (!copy2)
            copy2 = marks2.slice(0, i);
        } else if (copy2) {
          copy2.push(marks2[i]);
        }
      }
      return !copy2 ? marks2 : copy2.length ? copy2 : Mark.none;
    }
    /**
    @internal
    */
    static compile(nodes2, schema2) {
      let result = /* @__PURE__ */ Object.create(null);
      nodes2.forEach((name, spec) => result[name] = new _NodeType(name, schema2, spec));
      let topType = schema2.spec.topNode || "doc";
      if (!result[topType])
        throw new RangeError("Schema is missing its top node type ('" + topType + "')");
      if (!result.text)
        throw new RangeError("Every schema needs a 'text' type");
      for (let _2 in result.text.attrs)
        throw new RangeError("The text node type should not have attributes");
      return result;
    }
  };
  function validateType(typeName, attrName, type) {
    let types = type.split("|");
    return (value) => {
      let name = value === null ? "null" : typeof value;
      if (types.indexOf(name) < 0)
        throw new RangeError(`Expected value of type ${types} for attribute ${attrName} on type ${typeName}, got ${name}`);
    };
  }
  var Attribute = class {
    constructor(typeName, attrName, options) {
      this.hasDefault = Object.prototype.hasOwnProperty.call(options, "default");
      this.default = options.default;
      this.validate = typeof options.validate == "string" ? validateType(typeName, attrName, options.validate) : options.validate;
    }
    get isRequired() {
      return !this.hasDefault;
    }
  };
  var MarkType = class _MarkType {
    /**
    @internal
    */
    constructor(name, rank, schema2, spec) {
      this.name = name;
      this.rank = rank;
      this.schema = schema2;
      this.spec = spec;
      this.attrs = initAttrs(name, spec.attrs);
      this.excluded = null;
      let defaults = defaultAttrs(this.attrs);
      this.instance = defaults ? new Mark(this, defaults) : null;
    }
    /**
    Create a mark of this type. `attrs` may be `null` or an object
    containing only some of the mark's attributes. The others, if
    they have defaults, will be added.
    */
    create(attrs = null) {
      if (!attrs && this.instance)
        return this.instance;
      return new Mark(this, computeAttrs(this.attrs, attrs));
    }
    /**
    @internal
    */
    static compile(marks2, schema2) {
      let result = /* @__PURE__ */ Object.create(null), rank = 0;
      marks2.forEach((name, spec) => result[name] = new _MarkType(name, rank++, schema2, spec));
      return result;
    }
    /**
    When there is a mark of this type in the given set, a new set
    without it is returned. Otherwise, the input set is returned.
    */
    removeFromSet(set) {
      for (var i = 0; i < set.length; i++)
        if (set[i].type == this) {
          set = set.slice(0, i).concat(set.slice(i + 1));
          i--;
        }
      return set;
    }
    /**
    Tests whether there is a mark of this type in the given set.
    */
    isInSet(set) {
      for (let i = 0; i < set.length; i++)
        if (set[i].type == this)
          return set[i];
    }
    /**
    @internal
    */
    checkAttrs(attrs) {
      checkAttrs(this.attrs, attrs, "mark", this.name);
    }
    /**
    Queries whether a given mark type is
    [excluded](https://prosemirror.net/docs/ref/#model.MarkSpec.excludes) by this one.
    */
    excludes(other) {
      return this.excluded.indexOf(other) > -1;
    }
  };
  var Schema = class {
    /**
    Construct a schema from a schema [specification](https://prosemirror.net/docs/ref/#model.SchemaSpec).
    */
    constructor(spec) {
      this.linebreakReplacement = null;
      this.cached = /* @__PURE__ */ Object.create(null);
      let instanceSpec = this.spec = {};
      for (let prop in spec)
        instanceSpec[prop] = spec[prop];
      instanceSpec.nodes = dist_default.from(spec.nodes), instanceSpec.marks = dist_default.from(spec.marks || {}), this.nodes = NodeType.compile(this.spec.nodes, this);
      this.marks = MarkType.compile(this.spec.marks, this);
      let contentExprCache = /* @__PURE__ */ Object.create(null);
      for (let prop in this.nodes) {
        if (prop in this.marks)
          throw new RangeError(prop + " can not be both a node and a mark");
        let type = this.nodes[prop], contentExpr = type.spec.content || "", markExpr = type.spec.marks;
        type.contentMatch = contentExprCache[contentExpr] || (contentExprCache[contentExpr] = ContentMatch.parse(contentExpr, this.nodes));
        type.inlineContent = type.contentMatch.inlineContent;
        if (type.spec.linebreakReplacement) {
          if (this.linebreakReplacement)
            throw new RangeError("Multiple linebreak nodes defined");
          if (!type.isInline || !type.isLeaf)
            throw new RangeError("Linebreak replacement nodes must be inline leaf nodes");
          this.linebreakReplacement = type;
        }
        type.markSet = markExpr == "_" ? null : markExpr ? gatherMarks(this, markExpr.split(" ")) : markExpr == "" || !type.inlineContent ? [] : null;
      }
      for (let prop in this.marks) {
        let type = this.marks[prop], excl = type.spec.excludes;
        type.excluded = excl == null ? [type] : excl == "" ? [] : gatherMarks(this, excl.split(" "));
      }
      this.nodeFromJSON = (json) => Node2.fromJSON(this, json);
      this.markFromJSON = (json) => Mark.fromJSON(this, json);
      this.topNodeType = this.nodes[this.spec.topNode || "doc"];
      this.cached.wrappings = /* @__PURE__ */ Object.create(null);
    }
    /**
    Create a node in this schema. The `type` may be a string or a
    `NodeType` instance. Attributes will be extended with defaults,
    `content` may be a `Fragment`, `null`, a `Node`, or an array of
    nodes.
    */
    node(type, attrs = null, content, marks2) {
      if (typeof type == "string")
        type = this.nodeType(type);
      else if (!(type instanceof NodeType))
        throw new RangeError("Invalid node type: " + type);
      else if (type.schema != this)
        throw new RangeError("Node type from different schema used (" + type.name + ")");
      return type.createChecked(attrs, content, marks2);
    }
    /**
    Create a text node in the schema. Empty text nodes are not
    allowed.
    */
    text(text, marks2) {
      let type = this.nodes.text;
      return new TextNode(type, type.defaultAttrs, text, Mark.setFrom(marks2));
    }
    /**
    Create a mark with the given type and attributes.
    */
    mark(type, attrs) {
      if (typeof type == "string")
        type = this.marks[type];
      return type.create(attrs);
    }
    /**
    @internal
    */
    nodeType(name) {
      let found2 = this.nodes[name];
      if (!found2)
        throw new RangeError("Unknown node type: " + name);
      return found2;
    }
  };
  function gatherMarks(schema2, marks2) {
    let found2 = [];
    for (let i = 0; i < marks2.length; i++) {
      let name = marks2[i], mark = schema2.marks[name], ok = mark;
      if (mark) {
        found2.push(mark);
      } else {
        for (let prop in schema2.marks) {
          let mark2 = schema2.marks[prop];
          if (name == "_" || mark2.spec.group && mark2.spec.group.split(" ").indexOf(name) > -1)
            found2.push(ok = mark2);
        }
      }
      if (!ok)
        throw new SyntaxError("Unknown mark type: '" + marks2[i] + "'");
    }
    return found2;
  }
  function isTagRule(rule) {
    return rule.tag != null;
  }
  function isStyleRule(rule) {
    return rule.style != null;
  }
  var DOMParser = class _DOMParser {
    /**
    Create a parser that targets the given schema, using the given
    parsing rules.
    */
    constructor(schema2, rules) {
      this.schema = schema2;
      this.rules = rules;
      this.tags = [];
      this.styles = [];
      let matchedStyles = this.matchedStyles = [];
      rules.forEach((rule) => {
        if (isTagRule(rule)) {
          this.tags.push(rule);
        } else if (isStyleRule(rule)) {
          let prop = /[^=]*/.exec(rule.style)[0];
          if (matchedStyles.indexOf(prop) < 0)
            matchedStyles.push(prop);
          this.styles.push(rule);
        }
      });
      this.normalizeLists = !this.tags.some((r) => {
        if (!/^(ul|ol)\b/.test(r.tag) || !r.node)
          return false;
        let node = schema2.nodes[r.node];
        return node.contentMatch.matchType(node);
      });
    }
    /**
    Parse a document from the content of a DOM node.
    */
    parse(dom, options = {}) {
      let context = new ParseContext(this, options, false);
      context.addAll(dom, Mark.none, options.from, options.to);
      return context.finish();
    }
    /**
    Parses the content of the given DOM node, like
    [`parse`](https://prosemirror.net/docs/ref/#model.DOMParser.parse), and takes the same set of
    options. But unlike that method, which produces a whole node,
    this one returns a slice that is open at the sides, meaning that
    the schema constraints aren't applied to the start of nodes to
    the left of the input and the end of nodes at the end.
    */
    parseSlice(dom, options = {}) {
      let context = new ParseContext(this, options, true);
      context.addAll(dom, Mark.none, options.from, options.to);
      return Slice.maxOpen(context.finish());
    }
    /**
    @internal
    */
    matchTag(dom, context, after) {
      for (let i = after ? this.tags.indexOf(after) + 1 : 0; i < this.tags.length; i++) {
        let rule = this.tags[i];
        if (matches(dom, rule.tag) && (rule.namespace === void 0 || dom.namespaceURI == rule.namespace) && (!rule.context || context.matchesContext(rule.context))) {
          if (rule.getAttrs) {
            let result = rule.getAttrs(dom);
            if (result === false)
              continue;
            rule.attrs = result || void 0;
          }
          return rule;
        }
      }
    }
    /**
    @internal
    */
    matchStyle(prop, value, context, after) {
      for (let i = after ? this.styles.indexOf(after) + 1 : 0; i < this.styles.length; i++) {
        let rule = this.styles[i], style = rule.style;
        if (style.indexOf(prop) != 0 || rule.context && !context.matchesContext(rule.context) || // Test that the style string either precisely matches the prop,
        // or has an '=' sign after the prop, followed by the given
        // value.
        style.length > prop.length && (style.charCodeAt(prop.length) != 61 || style.slice(prop.length + 1) != value))
          continue;
        if (rule.getAttrs) {
          let result = rule.getAttrs(value);
          if (result === false)
            continue;
          rule.attrs = result || void 0;
        }
        return rule;
      }
    }
    /**
    @internal
    */
    static schemaRules(schema2) {
      let result = [];
      function insert(rule) {
        let priority = rule.priority == null ? 50 : rule.priority, i = 0;
        for (; i < result.length; i++) {
          let next = result[i], nextPriority = next.priority == null ? 50 : next.priority;
          if (nextPriority < priority)
            break;
        }
        result.splice(i, 0, rule);
      }
      for (let name in schema2.marks) {
        let rules = schema2.marks[name].spec.parseDOM;
        if (rules)
          rules.forEach((rule) => {
            insert(rule = copy(rule));
            if (!(rule.mark || rule.ignore || rule.clearMark))
              rule.mark = name;
          });
      }
      for (let name in schema2.nodes) {
        let rules = schema2.nodes[name].spec.parseDOM;
        if (rules)
          rules.forEach((rule) => {
            insert(rule = copy(rule));
            if (!(rule.node || rule.ignore || rule.mark))
              rule.node = name;
          });
      }
      return result;
    }
    /**
    Construct a DOM parser using the parsing rules listed in a
    schema's [node specs](https://prosemirror.net/docs/ref/#model.NodeSpec.parseDOM), reordered by
    [priority](https://prosemirror.net/docs/ref/#model.GenericParseRule.priority).
    */
    static fromSchema(schema2) {
      return schema2.cached.domParser || (schema2.cached.domParser = new _DOMParser(schema2, _DOMParser.schemaRules(schema2)));
    }
  };
  var blockTags = {
    address: true,
    article: true,
    aside: true,
    blockquote: true,
    canvas: true,
    dd: true,
    div: true,
    dl: true,
    fieldset: true,
    figcaption: true,
    figure: true,
    footer: true,
    form: true,
    h1: true,
    h2: true,
    h3: true,
    h4: true,
    h5: true,
    h6: true,
    header: true,
    hgroup: true,
    hr: true,
    li: true,
    noscript: true,
    ol: true,
    output: true,
    p: true,
    pre: true,
    section: true,
    table: true,
    tfoot: true,
    ul: true
  };
  var ignoreTags = {
    head: true,
    noscript: true,
    object: true,
    script: true,
    style: true,
    title: true
  };
  var listTags = { ol: true, ul: true };
  var OPT_PRESERVE_WS = 1;
  var OPT_PRESERVE_WS_FULL = 2;
  var OPT_OPEN_LEFT = 4;
  function wsOptionsFor(type, preserveWhitespace, base2) {
    if (preserveWhitespace != null)
      return (preserveWhitespace ? OPT_PRESERVE_WS : 0) | (preserveWhitespace === "full" ? OPT_PRESERVE_WS_FULL : 0);
    return type && type.whitespace == "pre" ? OPT_PRESERVE_WS | OPT_PRESERVE_WS_FULL : base2 & ~OPT_OPEN_LEFT;
  }
  var NodeContext = class {
    constructor(type, attrs, marks2, solid, match, options) {
      this.type = type;
      this.attrs = attrs;
      this.marks = marks2;
      this.solid = solid;
      this.options = options;
      this.content = [];
      this.activeMarks = Mark.none;
      this.match = match || (options & OPT_OPEN_LEFT ? null : type.contentMatch);
    }
    findWrapping(node) {
      if (!this.match) {
        if (!this.type)
          return [];
        let fill = this.type.contentMatch.fillBefore(Fragment.from(node));
        if (fill) {
          this.match = this.type.contentMatch.matchFragment(fill);
        } else {
          let start = this.type.contentMatch, wrap2;
          if (wrap2 = start.findWrapping(node.type)) {
            this.match = start;
            return wrap2;
          } else {
            return null;
          }
        }
      }
      return this.match.findWrapping(node.type);
    }
    finish(openEnd) {
      if (!(this.options & OPT_PRESERVE_WS)) {
        let last = this.content[this.content.length - 1], m;
        if (last && last.isText && (m = /[ \t\r\n\u000c]+$/.exec(last.text))) {
          let text = last;
          if (last.text.length == m[0].length)
            this.content.pop();
          else
            this.content[this.content.length - 1] = text.withText(text.text.slice(0, text.text.length - m[0].length));
        }
      }
      let content = Fragment.from(this.content);
      if (!openEnd && this.match)
        content = content.append(this.match.fillBefore(Fragment.empty, true));
      return this.type ? this.type.create(this.attrs, content, this.marks) : content;
    }
    inlineContext(node) {
      if (this.type)
        return this.type.inlineContent;
      if (this.content.length)
        return this.content[0].isInline;
      return node.parentNode && !blockTags.hasOwnProperty(node.parentNode.nodeName.toLowerCase());
    }
  };
  var ParseContext = class {
    constructor(parser, options, isOpen) {
      this.parser = parser;
      this.options = options;
      this.isOpen = isOpen;
      this.open = 0;
      this.localPreserveWS = false;
      let topNode = options.topNode, topContext;
      let topOptions = wsOptionsFor(null, options.preserveWhitespace, 0) | (isOpen ? OPT_OPEN_LEFT : 0);
      if (topNode)
        topContext = new NodeContext(topNode.type, topNode.attrs, Mark.none, true, options.topMatch || topNode.type.contentMatch, topOptions);
      else if (isOpen)
        topContext = new NodeContext(null, null, Mark.none, true, null, topOptions);
      else
        topContext = new NodeContext(parser.schema.topNodeType, null, Mark.none, true, null, topOptions);
      this.nodes = [topContext];
      this.find = options.findPositions;
      this.needsBlock = false;
    }
    get top() {
      return this.nodes[this.open];
    }
    // Add a DOM node to the content. Text is inserted as text node,
    // otherwise, the node is passed to `addElement` or, if it has a
    // `style` attribute, `addElementWithStyles`.
    addDOM(dom, marks2) {
      if (dom.nodeType == 3)
        this.addTextNode(dom, marks2);
      else if (dom.nodeType == 1)
        this.addElement(dom, marks2);
    }
    addTextNode(dom, marks2) {
      let value = dom.nodeValue;
      let top = this.top, preserveWS = top.options & OPT_PRESERVE_WS_FULL ? "full" : this.localPreserveWS || (top.options & OPT_PRESERVE_WS) > 0;
      if (preserveWS === "full" || top.inlineContext(dom) || /[^ \t\r\n\u000c]/.test(value)) {
        if (!preserveWS) {
          value = value.replace(/[ \t\r\n\u000c]+/g, " ");
          if (/^[ \t\r\n\u000c]/.test(value) && this.open == this.nodes.length - 1) {
            let nodeBefore = top.content[top.content.length - 1];
            let domNodeBefore = dom.previousSibling;
            if (!nodeBefore || domNodeBefore && domNodeBefore.nodeName == "BR" || nodeBefore.isText && /[ \t\r\n\u000c]$/.test(nodeBefore.text))
              value = value.slice(1);
          }
        } else if (preserveWS !== "full") {
          value = value.replace(/\r?\n|\r/g, " ");
        } else {
          value = value.replace(/\r\n?/g, "\n");
        }
        if (value)
          this.insertNode(this.parser.schema.text(value), marks2, !/\S/.test(value));
        this.findInText(dom);
      } else {
        this.findInside(dom);
      }
    }
    // Try to find a handler for the given tag and use that to parse. If
    // none is found, the element's content nodes are added directly.
    addElement(dom, marks2, matchAfter) {
      let outerWS = this.localPreserveWS, top = this.top;
      if (dom.tagName == "PRE" || /pre/.test(dom.style && dom.style.whiteSpace))
        this.localPreserveWS = true;
      let name = dom.nodeName.toLowerCase(), ruleID;
      if (listTags.hasOwnProperty(name) && this.parser.normalizeLists)
        normalizeList(dom);
      let rule = this.options.ruleFromNode && this.options.ruleFromNode(dom) || (ruleID = this.parser.matchTag(dom, this, matchAfter));
      out: if (rule ? rule.ignore : ignoreTags.hasOwnProperty(name)) {
        this.findInside(dom);
        this.ignoreFallback(dom, marks2);
      } else if (!rule || rule.skip || rule.closeParent) {
        if (rule && rule.closeParent)
          this.open = Math.max(0, this.open - 1);
        else if (rule && rule.skip.nodeType)
          dom = rule.skip;
        let sync, oldNeedsBlock = this.needsBlock;
        if (blockTags.hasOwnProperty(name)) {
          if (top.content.length && top.content[0].isInline && this.open) {
            this.open--;
            top = this.top;
          }
          sync = true;
          if (!top.type)
            this.needsBlock = true;
        } else if (!dom.firstChild) {
          this.leafFallback(dom, marks2);
          break out;
        }
        let innerMarks = rule && rule.skip ? marks2 : this.readStyles(dom, marks2);
        if (innerMarks)
          this.addAll(dom, innerMarks);
        if (sync)
          this.sync(top);
        this.needsBlock = oldNeedsBlock;
      } else {
        let innerMarks = this.readStyles(dom, marks2);
        if (innerMarks)
          this.addElementByRule(dom, rule, innerMarks, rule.consuming === false ? ruleID : void 0);
      }
      this.localPreserveWS = outerWS;
    }
    // Called for leaf DOM nodes that would otherwise be ignored
    leafFallback(dom, marks2) {
      if (dom.nodeName == "BR" && this.top.type && this.top.type.inlineContent)
        this.addTextNode(dom.ownerDocument.createTextNode("\n"), marks2);
    }
    // Called for ignored nodes
    ignoreFallback(dom, marks2) {
      if (dom.nodeName == "BR" && (!this.top.type || !this.top.type.inlineContent))
        this.findPlace(this.parser.schema.text("-"), marks2, true);
    }
    // Run any style parser associated with the node's styles. Either
    // return an updated array of marks, or null to indicate some of the
    // styles had a rule with `ignore` set.
    readStyles(dom, marks2) {
      let styles = dom.style;
      if (styles && styles.length)
        for (let i = 0; i < this.parser.matchedStyles.length; i++) {
          let name = this.parser.matchedStyles[i], value = styles.getPropertyValue(name);
          if (value)
            for (let after = void 0; ; ) {
              let rule = this.parser.matchStyle(name, value, this, after);
              if (!rule)
                break;
              if (rule.ignore)
                return null;
              if (rule.clearMark)
                marks2 = marks2.filter((m) => !rule.clearMark(m));
              else
                marks2 = marks2.concat(this.parser.schema.marks[rule.mark].create(rule.attrs));
              if (rule.consuming === false)
                after = rule;
              else
                break;
            }
        }
      return marks2;
    }
    // Look up a handler for the given node. If none are found, return
    // false. Otherwise, apply it, use its return value to drive the way
    // the node's content is wrapped, and return true.
    addElementByRule(dom, rule, marks2, continueAfter) {
      let sync, nodeType;
      if (rule.node) {
        nodeType = this.parser.schema.nodes[rule.node];
        if (!nodeType.isLeaf) {
          let inner = this.enter(nodeType, rule.attrs || null, marks2, rule.preserveWhitespace);
          if (inner) {
            sync = true;
            marks2 = inner;
          }
        } else if (!this.insertNode(nodeType.create(rule.attrs), marks2, dom.nodeName == "BR")) {
          this.leafFallback(dom, marks2);
        }
      } else {
        let markType = this.parser.schema.marks[rule.mark];
        marks2 = marks2.concat(markType.create(rule.attrs));
      }
      let startIn = this.top;
      if (nodeType && nodeType.isLeaf) {
        this.findInside(dom);
      } else if (continueAfter) {
        this.addElement(dom, marks2, continueAfter);
      } else if (rule.getContent) {
        this.findInside(dom);
        rule.getContent(dom, this.parser.schema).forEach((node) => this.insertNode(node, marks2, false));
      } else {
        let contentDOM = dom;
        if (typeof rule.contentElement == "string")
          contentDOM = dom.querySelector(rule.contentElement);
        else if (typeof rule.contentElement == "function")
          contentDOM = rule.contentElement(dom);
        else if (rule.contentElement)
          contentDOM = rule.contentElement;
        this.findAround(dom, contentDOM, true);
        this.addAll(contentDOM, marks2);
        this.findAround(dom, contentDOM, false);
      }
      if (sync && this.sync(startIn))
        this.open--;
    }
    // Add all child nodes between `startIndex` and `endIndex` (or the
    // whole node, if not given). If `sync` is passed, use it to
    // synchronize after every block element.
    addAll(parent, marks2, startIndex, endIndex) {
      let index = startIndex || 0;
      for (let dom = startIndex ? parent.childNodes[startIndex] : parent.firstChild, end = endIndex == null ? null : parent.childNodes[endIndex]; dom != end; dom = dom.nextSibling, ++index) {
        this.findAtPoint(parent, index);
        this.addDOM(dom, marks2);
      }
      this.findAtPoint(parent, index);
    }
    // Try to find a way to fit the given node type into the current
    // context. May add intermediate wrappers and/or leave non-solid
    // nodes that we're in.
    findPlace(node, marks2, cautious) {
      let route, sync;
      for (let depth = this.open, penalty = 0; depth >= 0; depth--) {
        let cx = this.nodes[depth];
        let found2 = cx.findWrapping(node);
        if (found2 && (!route || route.length > found2.length + penalty)) {
          route = found2;
          sync = cx;
          if (!found2.length)
            break;
        }
        if (cx.solid) {
          if (cautious)
            break;
          penalty += 2;
        }
      }
      if (!route)
        return null;
      this.sync(sync);
      for (let i = 0; i < route.length; i++)
        marks2 = this.enterInner(route[i], null, marks2, false);
      return marks2;
    }
    // Try to insert the given node, adjusting the context when needed.
    insertNode(node, marks2, cautious) {
      if (node.isInline && this.needsBlock && !this.top.type) {
        let block = this.textblockFromContext();
        if (block)
          marks2 = this.enterInner(block, null, marks2);
      }
      let innerMarks = this.findPlace(node, marks2, cautious);
      if (innerMarks) {
        this.closeExtra();
        let top = this.top;
        if (top.match)
          top.match = top.match.matchType(node.type);
        let nodeMarks = Mark.none;
        for (let m of innerMarks.concat(node.marks))
          if (top.type ? top.type.allowsMarkType(m.type) : markMayApply(m.type, node.type))
            nodeMarks = m.addToSet(nodeMarks);
        top.content.push(node.mark(nodeMarks));
        return true;
      }
      return false;
    }
    // Try to start a node of the given type, adjusting the context when
    // necessary.
    enter(type, attrs, marks2, preserveWS) {
      let innerMarks = this.findPlace(type.create(attrs), marks2, false);
      if (innerMarks)
        innerMarks = this.enterInner(type, attrs, marks2, true, preserveWS);
      return innerMarks;
    }
    // Open a node of the given type
    enterInner(type, attrs, marks2, solid = false, preserveWS) {
      this.closeExtra();
      let top = this.top;
      top.match = top.match && top.match.matchType(type);
      let options = wsOptionsFor(type, preserveWS, top.options);
      if (top.options & OPT_OPEN_LEFT && top.content.length == 0)
        options |= OPT_OPEN_LEFT;
      let applyMarks = Mark.none;
      marks2 = marks2.filter((m) => {
        if (top.type ? top.type.allowsMarkType(m.type) : markMayApply(m.type, type)) {
          applyMarks = m.addToSet(applyMarks);
          return false;
        }
        return true;
      });
      this.nodes.push(new NodeContext(type, attrs, applyMarks, solid, null, options));
      this.open++;
      return marks2;
    }
    // Make sure all nodes above this.open are finished and added to
    // their parents
    closeExtra(openEnd = false) {
      let i = this.nodes.length - 1;
      if (i > this.open) {
        for (; i > this.open; i--)
          this.nodes[i - 1].content.push(this.nodes[i].finish(openEnd));
        this.nodes.length = this.open + 1;
      }
    }
    finish() {
      this.open = 0;
      this.closeExtra(this.isOpen);
      return this.nodes[0].finish(!!(this.isOpen || this.options.topOpen));
    }
    sync(to2) {
      for (let i = this.open; i >= 0; i--) {
        if (this.nodes[i] == to2) {
          this.open = i;
          return true;
        } else if (this.localPreserveWS) {
          this.nodes[i].options |= OPT_PRESERVE_WS;
        }
      }
      return false;
    }
    get currentPos() {
      this.closeExtra();
      let pos = 0;
      for (let i = this.open; i >= 0; i--) {
        let content = this.nodes[i].content;
        for (let j2 = content.length - 1; j2 >= 0; j2--)
          pos += content[j2].nodeSize;
        if (i)
          pos++;
      }
      return pos;
    }
    findAtPoint(parent, offset) {
      if (this.find)
        for (let i = 0; i < this.find.length; i++) {
          if (this.find[i].node == parent && this.find[i].offset == offset)
            this.find[i].pos = this.currentPos;
        }
    }
    findInside(parent) {
      if (this.find)
        for (let i = 0; i < this.find.length; i++) {
          if (this.find[i].pos == null && parent.nodeType == 1 && parent.contains(this.find[i].node))
            this.find[i].pos = this.currentPos;
        }
    }
    findAround(parent, content, before) {
      if (parent != content && this.find)
        for (let i = 0; i < this.find.length; i++) {
          if (this.find[i].pos == null && parent.nodeType == 1 && parent.contains(this.find[i].node)) {
            let pos = content.compareDocumentPosition(this.find[i].node);
            if (pos & (before ? 2 : 4))
              this.find[i].pos = this.currentPos;
          }
        }
    }
    findInText(textNode) {
      if (this.find)
        for (let i = 0; i < this.find.length; i++) {
          if (this.find[i].node == textNode)
            this.find[i].pos = this.currentPos - (textNode.nodeValue.length - this.find[i].offset);
        }
    }
    // Determines whether the given context string matches this context.
    matchesContext(context) {
      if (context.indexOf("|") > -1)
        return context.split(/\s*\|\s*/).some(this.matchesContext, this);
      let parts = context.split("/");
      let option = this.options.context;
      let useRoot = !this.isOpen && (!option || option.parent.type == this.nodes[0].type);
      let minDepth = -(option ? option.depth + 1 : 0) + (useRoot ? 0 : 1);
      let match = (i, depth) => {
        for (; i >= 0; i--) {
          let part = parts[i];
          if (part == "") {
            if (i == parts.length - 1 || i == 0)
              continue;
            for (; depth >= minDepth; depth--)
              if (match(i - 1, depth))
                return true;
            return false;
          } else {
            let next = depth > 0 || depth == 0 && useRoot ? this.nodes[depth].type : option && depth >= minDepth ? option.node(depth - minDepth).type : null;
            if (!next || next.name != part && !next.isInGroup(part))
              return false;
            depth--;
          }
        }
        return true;
      };
      return match(parts.length - 1, this.open);
    }
    textblockFromContext() {
      let $context = this.options.context;
      if ($context)
        for (let d = $context.depth; d >= 0; d--) {
          let deflt = $context.node(d).contentMatchAt($context.indexAfter(d)).defaultType;
          if (deflt && deflt.isTextblock && deflt.defaultAttrs)
            return deflt;
        }
      for (let name in this.parser.schema.nodes) {
        let type = this.parser.schema.nodes[name];
        if (type.isTextblock && type.defaultAttrs)
          return type;
      }
    }
  };
  function normalizeList(dom) {
    for (let child = dom.firstChild, prevItem = null; child; child = child.nextSibling) {
      let name = child.nodeType == 1 ? child.nodeName.toLowerCase() : null;
      if (name && listTags.hasOwnProperty(name) && prevItem) {
        prevItem.appendChild(child);
        child = prevItem;
      } else if (name == "li") {
        prevItem = child;
      } else if (name) {
        prevItem = null;
      }
    }
  }
  function matches(dom, selector) {
    return (dom.matches || dom.msMatchesSelector || dom.webkitMatchesSelector || dom.mozMatchesSelector).call(dom, selector);
  }
  function copy(obj) {
    let copy2 = {};
    for (let prop in obj)
      copy2[prop] = obj[prop];
    return copy2;
  }
  function markMayApply(markType, nodeType) {
    let nodes2 = nodeType.schema.nodes;
    for (let name in nodes2) {
      let parent = nodes2[name];
      if (!parent.allowsMarkType(markType))
        continue;
      let seen = [], scan = (match) => {
        seen.push(match);
        for (let i = 0; i < match.edgeCount; i++) {
          let { type, next } = match.edge(i);
          if (type == nodeType)
            return true;
          if (seen.indexOf(next) < 0 && scan(next))
            return true;
        }
      };
      if (scan(parent.contentMatch))
        return true;
    }
  }
  var DOMSerializer = class _DOMSerializer {
    /**
    Create a serializer. `nodes` should map node names to functions
    that take a node and return a description of the corresponding
    DOM. `marks` does the same for mark names, but also gets an
    argument that tells it whether the mark's content is block or
    inline content (for typical use, it'll always be inline). A mark
    serializer may be `null` to indicate that marks of that type
    should not be serialized.
    */
    constructor(nodes2, marks2) {
      this.nodes = nodes2;
      this.marks = marks2;
    }
    /**
    Serialize the content of this fragment to a DOM fragment. When
    not in the browser, the `document` option, containing a DOM
    document, should be passed so that the serializer can create
    nodes.
    */
    serializeFragment(fragment, options = {}, target) {
      if (!target)
        target = doc(options).createDocumentFragment();
      let top = target, active = [];
      fragment.forEach((node) => {
        if (active.length || node.marks.length) {
          let keep = 0, rendered = 0;
          while (keep < active.length && rendered < node.marks.length) {
            let next = node.marks[rendered];
            if (!this.marks[next.type.name]) {
              rendered++;
              continue;
            }
            if (!next.eq(active[keep][0]) || next.type.spec.spanning === false)
              break;
            keep++;
            rendered++;
          }
          while (keep < active.length)
            top = active.pop()[1];
          while (rendered < node.marks.length) {
            let add3 = node.marks[rendered++];
            let markDOM = this.serializeMark(add3, node.isInline, options);
            if (markDOM) {
              active.push([add3, top]);
              top.appendChild(markDOM.dom);
              top = markDOM.contentDOM || markDOM.dom;
            }
          }
        }
        top.appendChild(this.serializeNodeInner(node, options));
      });
      return target;
    }
    /**
    @internal
    */
    serializeNodeInner(node, options) {
      let { dom, contentDOM } = renderSpec(doc(options), this.nodes[node.type.name](node), null, node.attrs);
      if (contentDOM) {
        if (node.isLeaf)
          throw new RangeError("Content hole not allowed in a leaf node spec");
        this.serializeFragment(node.content, options, contentDOM);
      }
      return dom;
    }
    /**
    Serialize this node to a DOM node. This can be useful when you
    need to serialize a part of a document, as opposed to the whole
    document. To serialize a whole document, use
    [`serializeFragment`](https://prosemirror.net/docs/ref/#model.DOMSerializer.serializeFragment) on
    its [content](https://prosemirror.net/docs/ref/#model.Node.content).
    */
    serializeNode(node, options = {}) {
      let dom = this.serializeNodeInner(node, options);
      for (let i = node.marks.length - 1; i >= 0; i--) {
        let wrap2 = this.serializeMark(node.marks[i], node.isInline, options);
        if (wrap2) {
          (wrap2.contentDOM || wrap2.dom).appendChild(dom);
          dom = wrap2.dom;
        }
      }
      return dom;
    }
    /**
    @internal
    */
    serializeMark(mark, inline, options = {}) {
      let toDOM = this.marks[mark.type.name];
      return toDOM && renderSpec(doc(options), toDOM(mark, inline), null, mark.attrs);
    }
    static renderSpec(doc3, structure, xmlNS = null, blockArraysIn) {
      return renderSpec(doc3, structure, xmlNS, blockArraysIn);
    }
    /**
    Build a serializer using the [`toDOM`](https://prosemirror.net/docs/ref/#model.NodeSpec.toDOM)
    properties in a schema's node and mark specs.
    */
    static fromSchema(schema2) {
      return schema2.cached.domSerializer || (schema2.cached.domSerializer = new _DOMSerializer(this.nodesFromSchema(schema2), this.marksFromSchema(schema2)));
    }
    /**
    Gather the serializers in a schema's node specs into an object.
    This can be useful as a base to build a custom serializer from.
    */
    static nodesFromSchema(schema2) {
      let result = gatherToDOM(schema2.nodes);
      if (!result.text)
        result.text = (node) => node.text;
      return result;
    }
    /**
    Gather the serializers in a schema's mark specs into an object.
    */
    static marksFromSchema(schema2) {
      return gatherToDOM(schema2.marks);
    }
  };
  function gatherToDOM(obj) {
    let result = {};
    for (let name in obj) {
      let toDOM = obj[name].spec.toDOM;
      if (toDOM)
        result[name] = toDOM;
    }
    return result;
  }
  function doc(options) {
    return options.document || window.document;
  }
  var suspiciousAttributeCache = /* @__PURE__ */ new WeakMap();
  function suspiciousAttributes(attrs) {
    let value = suspiciousAttributeCache.get(attrs);
    if (value === void 0)
      suspiciousAttributeCache.set(attrs, value = suspiciousAttributesInner(attrs));
    return value;
  }
  function suspiciousAttributesInner(attrs) {
    let result = null;
    function scan(value) {
      if (value && typeof value == "object") {
        if (Array.isArray(value)) {
          if (typeof value[0] == "string") {
            if (!result)
              result = [];
            result.push(value);
          } else {
            for (let i = 0; i < value.length; i++)
              scan(value[i]);
          }
        } else {
          for (let prop in value)
            scan(value[prop]);
        }
      }
    }
    scan(attrs);
    return result;
  }
  function renderSpec(doc3, structure, xmlNS, blockArraysIn) {
    if (typeof structure == "string")
      return { dom: doc3.createTextNode(structure) };
    if (structure.nodeType != null)
      return { dom: structure };
    if (structure.dom && structure.dom.nodeType != null)
      return structure;
    let tagName = structure[0], suspicious;
    if (typeof tagName != "string")
      throw new RangeError("Invalid array passed to renderSpec");
    if (blockArraysIn && (suspicious = suspiciousAttributes(blockArraysIn)) && suspicious.indexOf(structure) > -1)
      throw new RangeError("Using an array from an attribute object as a DOM spec. This may be an attempted cross site scripting attack.");
    let space = tagName.indexOf(" ");
    if (space > 0) {
      xmlNS = tagName.slice(0, space);
      tagName = tagName.slice(space + 1);
    }
    let contentDOM;
    let dom = xmlNS ? doc3.createElementNS(xmlNS, tagName) : doc3.createElement(tagName);
    let attrs = structure[1], start = 1;
    if (attrs && typeof attrs == "object" && attrs.nodeType == null && !Array.isArray(attrs)) {
      start = 2;
      for (let name in attrs)
        if (attrs[name] != null) {
          let space2 = name.indexOf(" ");
          if (space2 > 0)
            dom.setAttributeNS(name.slice(0, space2), name.slice(space2 + 1), attrs[name]);
          else if (name == "style" && dom.style)
            dom.style.cssText = attrs[name];
          else
            dom.setAttribute(name, attrs[name]);
        }
    }
    for (let i = start; i < structure.length; i++) {
      let child = structure[i];
      if (child === 0) {
        if (i < structure.length - 1 || i > start)
          throw new RangeError("Content hole must be the only child of its parent node");
        return { dom, contentDOM: dom };
      } else {
        let { dom: inner, contentDOM: innerContent } = renderSpec(doc3, child, xmlNS, blockArraysIn);
        dom.appendChild(inner);
        if (innerContent) {
          if (contentDOM)
            throw new RangeError("Multiple content holes");
          contentDOM = innerContent;
        }
      }
    }
    return { dom, contentDOM };
  }

  // node_modules/prosemirror-transform/dist/index.js
  var lower16 = 65535;
  var factor16 = Math.pow(2, 16);
  function makeRecover(index, offset) {
    return index + offset * factor16;
  }
  function recoverIndex(value) {
    return value & lower16;
  }
  function recoverOffset(value) {
    return (value - (value & lower16)) / factor16;
  }
  var DEL_BEFORE = 1;
  var DEL_AFTER = 2;
  var DEL_ACROSS = 4;
  var DEL_SIDE = 8;
  var MapResult = class {
    /**
    @internal
    */
    constructor(pos, delInfo, recover) {
      this.pos = pos;
      this.delInfo = delInfo;
      this.recover = recover;
    }
    /**
    Tells you whether the position was deleted, that is, whether the
    step removed the token on the side queried (via the `assoc`)
    argument from the document.
    */
    get deleted() {
      return (this.delInfo & DEL_SIDE) > 0;
    }
    /**
    Tells you whether the token before the mapped position was deleted.
    */
    get deletedBefore() {
      return (this.delInfo & (DEL_BEFORE | DEL_ACROSS)) > 0;
    }
    /**
    True when the token after the mapped position was deleted.
    */
    get deletedAfter() {
      return (this.delInfo & (DEL_AFTER | DEL_ACROSS)) > 0;
    }
    /**
    Tells whether any of the steps mapped through deletes across the
    position (including both the token before and after the
    position).
    */
    get deletedAcross() {
      return (this.delInfo & DEL_ACROSS) > 0;
    }
  };
  var StepMap = class _StepMap {
    /**
    Create a position map. The modifications to the document are
    represented as an array of numbers, in which each group of three
    represents a modified chunk as `[start, oldSize, newSize]`.
    */
    constructor(ranges, inverted = false) {
      this.ranges = ranges;
      this.inverted = inverted;
      if (!ranges.length && _StepMap.empty)
        return _StepMap.empty;
    }
    /**
    @internal
    */
    recover(value) {
      let diff = 0, index = recoverIndex(value);
      if (!this.inverted)
        for (let i = 0; i < index; i++)
          diff += this.ranges[i * 3 + 2] - this.ranges[i * 3 + 1];
      return this.ranges[index * 3] + diff + recoverOffset(value);
    }
    mapResult(pos, assoc = 1) {
      return this._map(pos, assoc, false);
    }
    map(pos, assoc = 1) {
      return this._map(pos, assoc, true);
    }
    /**
    @internal
    */
    _map(pos, assoc, simple) {
      let diff = 0, oldIndex = this.inverted ? 2 : 1, newIndex = this.inverted ? 1 : 2;
      for (let i = 0; i < this.ranges.length; i += 3) {
        let start = this.ranges[i] - (this.inverted ? diff : 0);
        if (start > pos)
          break;
        let oldSize = this.ranges[i + oldIndex], newSize = this.ranges[i + newIndex], end = start + oldSize;
        if (pos <= end) {
          let side = !oldSize ? assoc : pos == start ? -1 : pos == end ? 1 : assoc;
          let result = start + diff + (side < 0 ? 0 : newSize);
          if (simple)
            return result;
          let recover = pos == (assoc < 0 ? start : end) ? null : makeRecover(i / 3, pos - start);
          let del2 = pos == start ? DEL_AFTER : pos == end ? DEL_BEFORE : DEL_ACROSS;
          if (assoc < 0 ? pos != start : pos != end)
            del2 |= DEL_SIDE;
          return new MapResult(result, del2, recover);
        }
        diff += newSize - oldSize;
      }
      return simple ? pos + diff : new MapResult(pos + diff, 0, null);
    }
    /**
    @internal
    */
    touches(pos, recover) {
      let diff = 0, index = recoverIndex(recover);
      let oldIndex = this.inverted ? 2 : 1, newIndex = this.inverted ? 1 : 2;
      for (let i = 0; i < this.ranges.length; i += 3) {
        let start = this.ranges[i] - (this.inverted ? diff : 0);
        if (start > pos)
          break;
        let oldSize = this.ranges[i + oldIndex], end = start + oldSize;
        if (pos <= end && i == index * 3)
          return true;
        diff += this.ranges[i + newIndex] - oldSize;
      }
      return false;
    }
    /**
    Calls the given function on each of the changed ranges included in
    this map.
    */
    forEach(f) {
      let oldIndex = this.inverted ? 2 : 1, newIndex = this.inverted ? 1 : 2;
      for (let i = 0, diff = 0; i < this.ranges.length; i += 3) {
        let start = this.ranges[i], oldStart = start - (this.inverted ? diff : 0), newStart = start + (this.inverted ? 0 : diff);
        let oldSize = this.ranges[i + oldIndex], newSize = this.ranges[i + newIndex];
        f(oldStart, oldStart + oldSize, newStart, newStart + newSize);
        diff += newSize - oldSize;
      }
    }
    /**
    Create an inverted version of this map. The result can be used to
    map positions in the post-step document to the pre-step document.
    */
    invert() {
      return new _StepMap(this.ranges, !this.inverted);
    }
    /**
    @internal
    */
    toString() {
      return (this.inverted ? "-" : "") + JSON.stringify(this.ranges);
    }
    /**
    Create a map that moves all positions by offset `n` (which may be
    negative). This can be useful when applying steps meant for a
    sub-document to a larger document, or vice-versa.
    */
    static offset(n) {
      return n == 0 ? _StepMap.empty : new _StepMap(n < 0 ? [0, -n, 0] : [0, 0, n]);
    }
  };
  StepMap.empty = new StepMap([]);
  var Mapping = class _Mapping {
    /**
    Create a new mapping with the given position maps.
    */
    constructor(maps, mirror, from2 = 0, to2 = maps ? maps.length : 0) {
      this.mirror = mirror;
      this.from = from2;
      this.to = to2;
      this._maps = maps || [];
      this.ownData = !(maps || mirror);
    }
    /**
    The step maps in this mapping.
    */
    get maps() {
      return this._maps;
    }
    /**
    Create a mapping that maps only through a part of this one.
    */
    slice(from2 = 0, to2 = this.maps.length) {
      return new _Mapping(this._maps, this.mirror, from2, to2);
    }
    /**
    Add a step map to the end of this mapping. If `mirrors` is
    given, it should be the index of the step map that is the mirror
    image of this one.
    */
    appendMap(map2, mirrors) {
      if (!this.ownData) {
        this._maps = this._maps.slice();
        this.mirror = this.mirror && this.mirror.slice();
        this.ownData = true;
      }
      this.to = this._maps.push(map2);
      if (mirrors != null)
        this.setMirror(this._maps.length - 1, mirrors);
    }
    /**
    Add all the step maps in a given mapping to this one (preserving
    mirroring information).
    */
    appendMapping(mapping) {
      for (let i = 0, startSize = this._maps.length; i < mapping._maps.length; i++) {
        let mirr = mapping.getMirror(i);
        this.appendMap(mapping._maps[i], mirr != null && mirr < i ? startSize + mirr : void 0);
      }
    }
    /**
    Finds the offset of the step map that mirrors the map at the
    given offset, in this mapping (as per the second argument to
    `appendMap`).
    */
    getMirror(n) {
      if (this.mirror) {
        for (let i = 0; i < this.mirror.length; i++)
          if (this.mirror[i] == n)
            return this.mirror[i + (i % 2 ? -1 : 1)];
      }
    }
    /**
    @internal
    */
    setMirror(n, m) {
      if (!this.mirror)
        this.mirror = [];
      this.mirror.push(n, m);
    }
    /**
    Append the inverse of the given mapping to this one.
    */
    appendMappingInverted(mapping) {
      for (let i = mapping.maps.length - 1, totalSize = this._maps.length + mapping._maps.length; i >= 0; i--) {
        let mirr = mapping.getMirror(i);
        this.appendMap(mapping._maps[i].invert(), mirr != null && mirr > i ? totalSize - mirr - 1 : void 0);
      }
    }
    /**
    Create an inverted version of this mapping.
    */
    invert() {
      let inverse = new _Mapping();
      inverse.appendMappingInverted(this);
      return inverse;
    }
    /**
    Map a position through this mapping.
    */
    map(pos, assoc = 1) {
      if (this.mirror)
        return this._map(pos, assoc, true);
      for (let i = this.from; i < this.to; i++)
        pos = this._maps[i].map(pos, assoc);
      return pos;
    }
    /**
    Map a position through this mapping, returning a mapping
    result.
    */
    mapResult(pos, assoc = 1) {
      return this._map(pos, assoc, false);
    }
    /**
    @internal
    */
    _map(pos, assoc, simple) {
      let delInfo = 0;
      for (let i = this.from; i < this.to; i++) {
        let map2 = this._maps[i], result = map2.mapResult(pos, assoc);
        if (result.recover != null) {
          let corr = this.getMirror(i);
          if (corr != null && corr > i && corr < this.to) {
            i = corr;
            pos = this._maps[corr].recover(result.recover);
            continue;
          }
        }
        delInfo |= result.delInfo;
        pos = result.pos;
      }
      return simple ? pos : new MapResult(pos, delInfo, null);
    }
  };
  var stepsByID = /* @__PURE__ */ Object.create(null);
  var Step = class {
    /**
    Get the step map that represents the changes made by this step,
    and which can be used to transform between positions in the old
    and the new document.
    */
    getMap() {
      return StepMap.empty;
    }
    /**
    Try to merge this step with another one, to be applied directly
    after it. Returns the merged step when possible, null if the
    steps can't be merged.
    */
    merge(other) {
      return null;
    }
    /**
    Deserialize a step from its JSON representation. Will call
    through to the step class' own implementation of this method.
    */
    static fromJSON(schema2, json) {
      if (!json || !json.stepType)
        throw new RangeError("Invalid input for Step.fromJSON");
      let type = stepsByID[json.stepType];
      if (!type)
        throw new RangeError(`No step type ${json.stepType} defined`);
      return type.fromJSON(schema2, json);
    }
    /**
    To be able to serialize steps to JSON, each step needs a string
    ID to attach to its JSON representation. Use this method to
    register an ID for your step classes. Try to pick something
    that's unlikely to clash with steps from other modules.
    */
    static jsonID(id, stepClass) {
      if (id in stepsByID)
        throw new RangeError("Duplicate use of step JSON ID " + id);
      stepsByID[id] = stepClass;
      stepClass.prototype.jsonID = id;
      return stepClass;
    }
  };
  var StepResult = class _StepResult {
    /**
    @internal
    */
    constructor(doc3, failed) {
      this.doc = doc3;
      this.failed = failed;
    }
    /**
    Create a successful step result.
    */
    static ok(doc3) {
      return new _StepResult(doc3, null);
    }
    /**
    Create a failed step result.
    */
    static fail(message) {
      return new _StepResult(null, message);
    }
    /**
    Call [`Node.replace`](https://prosemirror.net/docs/ref/#model.Node.replace) with the given
    arguments. Create a successful result if it succeeds, and a
    failed one if it throws a `ReplaceError`.
    */
    static fromReplace(doc3, from2, to2, slice2) {
      try {
        return _StepResult.ok(doc3.replace(from2, to2, slice2));
      } catch (e) {
        if (e instanceof ReplaceError)
          return _StepResult.fail(e.message);
        throw e;
      }
    }
  };
  function mapFragment(fragment, f, parent) {
    let mapped = [];
    for (let i = 0; i < fragment.childCount; i++) {
      let child = fragment.child(i);
      if (child.content.size)
        child = child.copy(mapFragment(child.content, f, child));
      if (child.isInline)
        child = f(child, parent, i);
      mapped.push(child);
    }
    return Fragment.fromArray(mapped);
  }
  var AddMarkStep = class _AddMarkStep extends Step {
    /**
    Create a mark step.
    */
    constructor(from2, to2, mark) {
      super();
      this.from = from2;
      this.to = to2;
      this.mark = mark;
    }
    apply(doc3) {
      let oldSlice = doc3.slice(this.from, this.to), $from = doc3.resolve(this.from);
      let parent = $from.node($from.sharedDepth(this.to));
      let slice2 = new Slice(mapFragment(oldSlice.content, (node, parent2) => {
        if (!node.isAtom || !parent2.type.allowsMarkType(this.mark.type))
          return node;
        return node.mark(this.mark.addToSet(node.marks));
      }, parent), oldSlice.openStart, oldSlice.openEnd);
      return StepResult.fromReplace(doc3, this.from, this.to, slice2);
    }
    invert() {
      return new RemoveMarkStep(this.from, this.to, this.mark);
    }
    map(mapping) {
      let from2 = mapping.mapResult(this.from, 1), to2 = mapping.mapResult(this.to, -1);
      if (from2.deleted && to2.deleted || from2.pos >= to2.pos)
        return null;
      return new _AddMarkStep(from2.pos, to2.pos, this.mark);
    }
    merge(other) {
      if (other instanceof _AddMarkStep && other.mark.eq(this.mark) && this.from <= other.to && this.to >= other.from)
        return new _AddMarkStep(Math.min(this.from, other.from), Math.max(this.to, other.to), this.mark);
      return null;
    }
    toJSON() {
      return {
        stepType: "addMark",
        mark: this.mark.toJSON(),
        from: this.from,
        to: this.to
      };
    }
    /**
    @internal
    */
    static fromJSON(schema2, json) {
      if (typeof json.from != "number" || typeof json.to != "number")
        throw new RangeError("Invalid input for AddMarkStep.fromJSON");
      return new _AddMarkStep(json.from, json.to, schema2.markFromJSON(json.mark));
    }
  };
  Step.jsonID("addMark", AddMarkStep);
  var RemoveMarkStep = class _RemoveMarkStep extends Step {
    /**
    Create a mark-removing step.
    */
    constructor(from2, to2, mark) {
      super();
      this.from = from2;
      this.to = to2;
      this.mark = mark;
    }
    apply(doc3) {
      let oldSlice = doc3.slice(this.from, this.to);
      let slice2 = new Slice(mapFragment(oldSlice.content, (node) => {
        return node.mark(this.mark.removeFromSet(node.marks));
      }, doc3), oldSlice.openStart, oldSlice.openEnd);
      return StepResult.fromReplace(doc3, this.from, this.to, slice2);
    }
    invert() {
      return new AddMarkStep(this.from, this.to, this.mark);
    }
    map(mapping) {
      let from2 = mapping.mapResult(this.from, 1), to2 = mapping.mapResult(this.to, -1);
      if (from2.deleted && to2.deleted || from2.pos >= to2.pos)
        return null;
      return new _RemoveMarkStep(from2.pos, to2.pos, this.mark);
    }
    merge(other) {
      if (other instanceof _RemoveMarkStep && other.mark.eq(this.mark) && this.from <= other.to && this.to >= other.from)
        return new _RemoveMarkStep(Math.min(this.from, other.from), Math.max(this.to, other.to), this.mark);
      return null;
    }
    toJSON() {
      return {
        stepType: "removeMark",
        mark: this.mark.toJSON(),
        from: this.from,
        to: this.to
      };
    }
    /**
    @internal
    */
    static fromJSON(schema2, json) {
      if (typeof json.from != "number" || typeof json.to != "number")
        throw new RangeError("Invalid input for RemoveMarkStep.fromJSON");
      return new _RemoveMarkStep(json.from, json.to, schema2.markFromJSON(json.mark));
    }
  };
  Step.jsonID("removeMark", RemoveMarkStep);
  var AddNodeMarkStep = class _AddNodeMarkStep extends Step {
    /**
    Create a node mark step.
    */
    constructor(pos, mark) {
      super();
      this.pos = pos;
      this.mark = mark;
    }
    apply(doc3) {
      let node = doc3.nodeAt(this.pos);
      if (!node)
        return StepResult.fail("No node at mark step's position");
      let updated = node.type.create(node.attrs, null, this.mark.addToSet(node.marks));
      return StepResult.fromReplace(doc3, this.pos, this.pos + 1, new Slice(Fragment.from(updated), 0, node.isLeaf ? 0 : 1));
    }
    invert(doc3) {
      let node = doc3.nodeAt(this.pos);
      if (node) {
        let newSet = this.mark.addToSet(node.marks);
        if (newSet.length == node.marks.length) {
          for (let i = 0; i < node.marks.length; i++)
            if (!node.marks[i].isInSet(newSet))
              return new _AddNodeMarkStep(this.pos, node.marks[i]);
          return new _AddNodeMarkStep(this.pos, this.mark);
        }
      }
      return new RemoveNodeMarkStep(this.pos, this.mark);
    }
    map(mapping) {
      let pos = mapping.mapResult(this.pos, 1);
      return pos.deletedAfter ? null : new _AddNodeMarkStep(pos.pos, this.mark);
    }
    toJSON() {
      return { stepType: "addNodeMark", pos: this.pos, mark: this.mark.toJSON() };
    }
    /**
    @internal
    */
    static fromJSON(schema2, json) {
      if (typeof json.pos != "number")
        throw new RangeError("Invalid input for AddNodeMarkStep.fromJSON");
      return new _AddNodeMarkStep(json.pos, schema2.markFromJSON(json.mark));
    }
  };
  Step.jsonID("addNodeMark", AddNodeMarkStep);
  var RemoveNodeMarkStep = class _RemoveNodeMarkStep extends Step {
    /**
    Create a mark-removing step.
    */
    constructor(pos, mark) {
      super();
      this.pos = pos;
      this.mark = mark;
    }
    apply(doc3) {
      let node = doc3.nodeAt(this.pos);
      if (!node)
        return StepResult.fail("No node at mark step's position");
      let updated = node.type.create(node.attrs, null, this.mark.removeFromSet(node.marks));
      return StepResult.fromReplace(doc3, this.pos, this.pos + 1, new Slice(Fragment.from(updated), 0, node.isLeaf ? 0 : 1));
    }
    invert(doc3) {
      let node = doc3.nodeAt(this.pos);
      if (!node || !this.mark.isInSet(node.marks))
        return this;
      return new AddNodeMarkStep(this.pos, this.mark);
    }
    map(mapping) {
      let pos = mapping.mapResult(this.pos, 1);
      return pos.deletedAfter ? null : new _RemoveNodeMarkStep(pos.pos, this.mark);
    }
    toJSON() {
      return { stepType: "removeNodeMark", pos: this.pos, mark: this.mark.toJSON() };
    }
    /**
    @internal
    */
    static fromJSON(schema2, json) {
      if (typeof json.pos != "number")
        throw new RangeError("Invalid input for RemoveNodeMarkStep.fromJSON");
      return new _RemoveNodeMarkStep(json.pos, schema2.markFromJSON(json.mark));
    }
  };
  Step.jsonID("removeNodeMark", RemoveNodeMarkStep);
  var ReplaceStep = class _ReplaceStep extends Step {
    /**
    The given `slice` should fit the 'gap' between `from` and
    `to`—the depths must line up, and the surrounding nodes must be
    able to be joined with the open sides of the slice. When
    `structure` is true, the step will fail if the content between
    from and to is not just a sequence of closing and then opening
    tokens (this is to guard against rebased replace steps
    overwriting something they weren't supposed to).
    */
    constructor(from2, to2, slice2, structure = false) {
      super();
      this.from = from2;
      this.to = to2;
      this.slice = slice2;
      this.structure = structure;
    }
    apply(doc3) {
      if (this.structure && contentBetween(doc3, this.from, this.to))
        return StepResult.fail("Structure replace would overwrite content");
      return StepResult.fromReplace(doc3, this.from, this.to, this.slice);
    }
    getMap() {
      return new StepMap([this.from, this.to - this.from, this.slice.size]);
    }
    invert(doc3) {
      return new _ReplaceStep(this.from, this.from + this.slice.size, doc3.slice(this.from, this.to));
    }
    map(mapping) {
      let from2 = mapping.mapResult(this.from, 1), to2 = mapping.mapResult(this.to, -1);
      if (from2.deletedAcross && to2.deletedAcross)
        return null;
      return new _ReplaceStep(from2.pos, Math.max(from2.pos, to2.pos), this.slice, this.structure);
    }
    merge(other) {
      if (!(other instanceof _ReplaceStep) || other.structure || this.structure)
        return null;
      if (this.from + this.slice.size == other.from && !this.slice.openEnd && !other.slice.openStart) {
        let slice2 = this.slice.size + other.slice.size == 0 ? Slice.empty : new Slice(this.slice.content.append(other.slice.content), this.slice.openStart, other.slice.openEnd);
        return new _ReplaceStep(this.from, this.to + (other.to - other.from), slice2, this.structure);
      } else if (other.to == this.from && !this.slice.openStart && !other.slice.openEnd) {
        let slice2 = this.slice.size + other.slice.size == 0 ? Slice.empty : new Slice(other.slice.content.append(this.slice.content), other.slice.openStart, this.slice.openEnd);
        return new _ReplaceStep(other.from, this.to, slice2, this.structure);
      } else {
        return null;
      }
    }
    toJSON() {
      let json = { stepType: "replace", from: this.from, to: this.to };
      if (this.slice.size)
        json.slice = this.slice.toJSON();
      if (this.structure)
        json.structure = true;
      return json;
    }
    /**
    @internal
    */
    static fromJSON(schema2, json) {
      if (typeof json.from != "number" || typeof json.to != "number")
        throw new RangeError("Invalid input for ReplaceStep.fromJSON");
      return new _ReplaceStep(json.from, json.to, Slice.fromJSON(schema2, json.slice), !!json.structure);
    }
  };
  Step.jsonID("replace", ReplaceStep);
  var ReplaceAroundStep = class _ReplaceAroundStep extends Step {
    /**
    Create a replace-around step with the given range and gap.
    `insert` should be the point in the slice into which the content
    of the gap should be moved. `structure` has the same meaning as
    it has in the [`ReplaceStep`](https://prosemirror.net/docs/ref/#transform.ReplaceStep) class.
    */
    constructor(from2, to2, gapFrom, gapTo, slice2, insert, structure = false) {
      super();
      this.from = from2;
      this.to = to2;
      this.gapFrom = gapFrom;
      this.gapTo = gapTo;
      this.slice = slice2;
      this.insert = insert;
      this.structure = structure;
    }
    apply(doc3) {
      if (this.structure && (contentBetween(doc3, this.from, this.gapFrom) || contentBetween(doc3, this.gapTo, this.to)))
        return StepResult.fail("Structure gap-replace would overwrite content");
      let gap = doc3.slice(this.gapFrom, this.gapTo);
      if (gap.openStart || gap.openEnd)
        return StepResult.fail("Gap is not a flat range");
      let inserted = this.slice.insertAt(this.insert, gap.content);
      if (!inserted)
        return StepResult.fail("Content does not fit in gap");
      return StepResult.fromReplace(doc3, this.from, this.to, inserted);
    }
    getMap() {
      return new StepMap([
        this.from,
        this.gapFrom - this.from,
        this.insert,
        this.gapTo,
        this.to - this.gapTo,
        this.slice.size - this.insert
      ]);
    }
    invert(doc3) {
      let gap = this.gapTo - this.gapFrom;
      return new _ReplaceAroundStep(this.from, this.from + this.slice.size + gap, this.from + this.insert, this.from + this.insert + gap, doc3.slice(this.from, this.to).removeBetween(this.gapFrom - this.from, this.gapTo - this.from), this.gapFrom - this.from, this.structure);
    }
    map(mapping) {
      let from2 = mapping.mapResult(this.from, 1), to2 = mapping.mapResult(this.to, -1);
      let gapFrom = this.from == this.gapFrom ? from2.pos : mapping.map(this.gapFrom, -1);
      let gapTo = this.to == this.gapTo ? to2.pos : mapping.map(this.gapTo, 1);
      if (from2.deletedAcross && to2.deletedAcross || gapFrom < from2.pos || gapTo > to2.pos)
        return null;
      return new _ReplaceAroundStep(from2.pos, to2.pos, gapFrom, gapTo, this.slice, this.insert, this.structure);
    }
    toJSON() {
      let json = {
        stepType: "replaceAround",
        from: this.from,
        to: this.to,
        gapFrom: this.gapFrom,
        gapTo: this.gapTo,
        insert: this.insert
      };
      if (this.slice.size)
        json.slice = this.slice.toJSON();
      if (this.structure)
        json.structure = true;
      return json;
    }
    /**
    @internal
    */
    static fromJSON(schema2, json) {
      if (typeof json.from != "number" || typeof json.to != "number" || typeof json.gapFrom != "number" || typeof json.gapTo != "number" || typeof json.insert != "number")
        throw new RangeError("Invalid input for ReplaceAroundStep.fromJSON");
      return new _ReplaceAroundStep(json.from, json.to, json.gapFrom, json.gapTo, Slice.fromJSON(schema2, json.slice), json.insert, !!json.structure);
    }
  };
  Step.jsonID("replaceAround", ReplaceAroundStep);
  function contentBetween(doc3, from2, to2) {
    let $from = doc3.resolve(from2), dist = to2 - from2, depth = $from.depth;
    while (dist > 0 && depth > 0 && $from.indexAfter(depth) == $from.node(depth).childCount) {
      depth--;
      dist--;
    }
    if (dist > 0) {
      let next = $from.node(depth).maybeChild($from.indexAfter(depth));
      while (dist > 0) {
        if (!next || next.isLeaf)
          return true;
        next = next.firstChild;
        dist--;
      }
    }
    return false;
  }
  function addMark(tr, from2, to2, mark) {
    let removed = [], added = [];
    let removing, adding;
    tr.doc.nodesBetween(from2, to2, (node, pos, parent) => {
      if (!node.isInline)
        return;
      let marks2 = node.marks;
      if (!mark.isInSet(marks2) && parent.type.allowsMarkType(mark.type)) {
        let start = Math.max(pos, from2), end = Math.min(pos + node.nodeSize, to2);
        let newSet = mark.addToSet(marks2);
        for (let i = 0; i < marks2.length; i++) {
          if (!marks2[i].isInSet(newSet)) {
            if (removing && removing.to == start && removing.mark.eq(marks2[i]))
              removing.to = end;
            else
              removed.push(removing = new RemoveMarkStep(start, end, marks2[i]));
          }
        }
        if (adding && adding.to == start)
          adding.to = end;
        else
          added.push(adding = new AddMarkStep(start, end, mark));
      }
    });
    removed.forEach((s) => tr.step(s));
    added.forEach((s) => tr.step(s));
  }
  function removeMark(tr, from2, to2, mark) {
    let matched = [], step = 0;
    tr.doc.nodesBetween(from2, to2, (node, pos) => {
      if (!node.isInline)
        return;
      step++;
      let toRemove = null;
      if (mark instanceof MarkType) {
        let set = node.marks, found2;
        while (found2 = mark.isInSet(set)) {
          (toRemove || (toRemove = [])).push(found2);
          set = found2.removeFromSet(set);
        }
      } else if (mark) {
        if (mark.isInSet(node.marks))
          toRemove = [mark];
      } else {
        toRemove = node.marks;
      }
      if (toRemove && toRemove.length) {
        let end = Math.min(pos + node.nodeSize, to2);
        for (let i = 0; i < toRemove.length; i++) {
          let style = toRemove[i], found2;
          for (let j2 = 0; j2 < matched.length; j2++) {
            let m = matched[j2];
            if (m.step == step - 1 && style.eq(matched[j2].style))
              found2 = m;
          }
          if (found2) {
            found2.to = end;
            found2.step = step;
          } else {
            matched.push({ style, from: Math.max(pos, from2), to: end, step });
          }
        }
      }
    });
    matched.forEach((m) => tr.step(new RemoveMarkStep(m.from, m.to, m.style)));
  }
  function clearIncompatible(tr, pos, parentType, match = parentType.contentMatch, clearNewlines = true) {
    let node = tr.doc.nodeAt(pos);
    let replSteps = [], cur = pos + 1;
    for (let i = 0; i < node.childCount; i++) {
      let child = node.child(i), end = cur + child.nodeSize;
      let allowed = match.matchType(child.type);
      if (!allowed) {
        replSteps.push(new ReplaceStep(cur, end, Slice.empty));
      } else {
        match = allowed;
        for (let j2 = 0; j2 < child.marks.length; j2++)
          if (!parentType.allowsMarkType(child.marks[j2].type))
            tr.step(new RemoveMarkStep(cur, end, child.marks[j2]));
        if (clearNewlines && child.isText && parentType.whitespace != "pre") {
          let m, newline = /\r?\n|\r/g, slice2;
          while (m = newline.exec(child.text)) {
            if (!slice2)
              slice2 = new Slice(Fragment.from(parentType.schema.text(" ", parentType.allowedMarks(child.marks))), 0, 0);
            replSteps.push(new ReplaceStep(cur + m.index, cur + m.index + m[0].length, slice2));
          }
        }
      }
      cur = end;
    }
    if (!match.validEnd) {
      let fill = match.fillBefore(Fragment.empty, true);
      tr.replace(cur, cur, new Slice(fill, 0, 0));
    }
    for (let i = replSteps.length - 1; i >= 0; i--)
      tr.step(replSteps[i]);
  }
  function canCut(node, start, end) {
    return (start == 0 || node.canReplace(start, node.childCount)) && (end == node.childCount || node.canReplace(0, end));
  }
  function liftTarget(range) {
    let parent = range.parent;
    let content = parent.content.cutByIndex(range.startIndex, range.endIndex);
    for (let depth = range.depth; ; --depth) {
      let node = range.$from.node(depth);
      let index = range.$from.index(depth), endIndex = range.$to.indexAfter(depth);
      if (depth < range.depth && node.canReplace(index, endIndex, content))
        return depth;
      if (depth == 0 || node.type.spec.isolating || !canCut(node, index, endIndex))
        break;
    }
    return null;
  }
  function lift(tr, range, target) {
    let { $from, $to, depth } = range;
    let gapStart = $from.before(depth + 1), gapEnd = $to.after(depth + 1);
    let start = gapStart, end = gapEnd;
    let before = Fragment.empty, openStart = 0;
    for (let d = depth, splitting = false; d > target; d--)
      if (splitting || $from.index(d) > 0) {
        splitting = true;
        before = Fragment.from($from.node(d).copy(before));
        openStart++;
      } else {
        start--;
      }
    let after = Fragment.empty, openEnd = 0;
    for (let d = depth, splitting = false; d > target; d--)
      if (splitting || $to.after(d + 1) < $to.end(d)) {
        splitting = true;
        after = Fragment.from($to.node(d).copy(after));
        openEnd++;
      } else {
        end++;
      }
    tr.step(new ReplaceAroundStep(start, end, gapStart, gapEnd, new Slice(before.append(after), openStart, openEnd), before.size - openStart, true));
  }
  function findWrapping(range, nodeType, attrs = null, innerRange = range) {
    let around = findWrappingOutside(range, nodeType);
    let inner = around && findWrappingInside(innerRange, nodeType);
    if (!inner)
      return null;
    return around.map(withAttrs).concat({ type: nodeType, attrs }).concat(inner.map(withAttrs));
  }
  function withAttrs(type) {
    return { type, attrs: null };
  }
  function findWrappingOutside(range, type) {
    let { parent, startIndex, endIndex } = range;
    let around = parent.contentMatchAt(startIndex).findWrapping(type);
    if (!around)
      return null;
    let outer = around.length ? around[0] : type;
    return parent.canReplaceWith(startIndex, endIndex, outer) ? around : null;
  }
  function findWrappingInside(range, type) {
    let { parent, startIndex, endIndex } = range;
    let inner = parent.child(startIndex);
    let inside = type.contentMatch.findWrapping(inner.type);
    if (!inside)
      return null;
    let lastType = inside.length ? inside[inside.length - 1] : type;
    let innerMatch = lastType.contentMatch;
    for (let i = startIndex; innerMatch && i < endIndex; i++)
      innerMatch = innerMatch.matchType(parent.child(i).type);
    if (!innerMatch || !innerMatch.validEnd)
      return null;
    return inside;
  }
  function wrap(tr, range, wrappers) {
    let content = Fragment.empty;
    for (let i = wrappers.length - 1; i >= 0; i--) {
      if (content.size) {
        let match = wrappers[i].type.contentMatch.matchFragment(content);
        if (!match || !match.validEnd)
          throw new RangeError("Wrapper type given to Transform.wrap does not form valid content of its parent wrapper");
      }
      content = Fragment.from(wrappers[i].type.create(wrappers[i].attrs, content));
    }
    let start = range.start, end = range.end;
    tr.step(new ReplaceAroundStep(start, end, start, end, new Slice(content, 0, 0), wrappers.length, true));
  }
  function setBlockType(tr, from2, to2, type, attrs) {
    if (!type.isTextblock)
      throw new RangeError("Type given to setBlockType should be a textblock");
    let mapFrom = tr.steps.length;
    tr.doc.nodesBetween(from2, to2, (node, pos) => {
      let attrsHere = typeof attrs == "function" ? attrs(node) : attrs;
      if (node.isTextblock && !node.hasMarkup(type, attrsHere) && canChangeType(tr.doc, tr.mapping.slice(mapFrom).map(pos), type)) {
        let convertNewlines = null;
        if (type.schema.linebreakReplacement) {
          let pre = type.whitespace == "pre", supportLinebreak = !!type.contentMatch.matchType(type.schema.linebreakReplacement);
          if (pre && !supportLinebreak)
            convertNewlines = false;
          else if (!pre && supportLinebreak)
            convertNewlines = true;
        }
        if (convertNewlines === false)
          replaceLinebreaks(tr, node, pos, mapFrom);
        clearIncompatible(tr, tr.mapping.slice(mapFrom).map(pos, 1), type, void 0, convertNewlines === null);
        let mapping = tr.mapping.slice(mapFrom);
        let startM = mapping.map(pos, 1), endM = mapping.map(pos + node.nodeSize, 1);
        tr.step(new ReplaceAroundStep(startM, endM, startM + 1, endM - 1, new Slice(Fragment.from(type.create(attrsHere, null, node.marks)), 0, 0), 1, true));
        if (convertNewlines === true)
          replaceNewlines(tr, node, pos, mapFrom);
        return false;
      }
    });
  }
  function replaceNewlines(tr, node, pos, mapFrom) {
    node.forEach((child, offset) => {
      if (child.isText) {
        let m, newline = /\r?\n|\r/g;
        while (m = newline.exec(child.text)) {
          let start = tr.mapping.slice(mapFrom).map(pos + 1 + offset + m.index);
          tr.replaceWith(start, start + 1, node.type.schema.linebreakReplacement.create());
        }
      }
    });
  }
  function replaceLinebreaks(tr, node, pos, mapFrom) {
    node.forEach((child, offset) => {
      if (child.type == child.type.schema.linebreakReplacement) {
        let start = tr.mapping.slice(mapFrom).map(pos + 1 + offset);
        tr.replaceWith(start, start + 1, node.type.schema.text("\n"));
      }
    });
  }
  function canChangeType(doc3, pos, type) {
    let $pos = doc3.resolve(pos), index = $pos.index();
    return $pos.parent.canReplaceWith(index, index + 1, type);
  }
  function setNodeMarkup(tr, pos, type, attrs, marks2) {
    let node = tr.doc.nodeAt(pos);
    if (!node)
      throw new RangeError("No node at given position");
    if (!type)
      type = node.type;
    let newNode = type.create(attrs, null, marks2 || node.marks);
    if (node.isLeaf)
      return tr.replaceWith(pos, pos + node.nodeSize, newNode);
    if (!type.validContent(node.content))
      throw new RangeError("Invalid content for node type " + type.name);
    tr.step(new ReplaceAroundStep(pos, pos + node.nodeSize, pos + 1, pos + node.nodeSize - 1, new Slice(Fragment.from(newNode), 0, 0), 1, true));
  }
  function canSplit(doc3, pos, depth = 1, typesAfter) {
    let $pos = doc3.resolve(pos), base2 = $pos.depth - depth;
    let innerType = typesAfter && typesAfter[typesAfter.length - 1] || $pos.parent;
    if (base2 < 0 || $pos.parent.type.spec.isolating || !$pos.parent.canReplace($pos.index(), $pos.parent.childCount) || !innerType.type.validContent($pos.parent.content.cutByIndex($pos.index(), $pos.parent.childCount)))
      return false;
    for (let d = $pos.depth - 1, i = depth - 2; d > base2; d--, i--) {
      let node = $pos.node(d), index2 = $pos.index(d);
      if (node.type.spec.isolating)
        return false;
      let rest = node.content.cutByIndex(index2, node.childCount);
      let overrideChild = typesAfter && typesAfter[i + 1];
      if (overrideChild)
        rest = rest.replaceChild(0, overrideChild.type.create(overrideChild.attrs));
      let after = typesAfter && typesAfter[i] || node;
      if (!node.canReplace(index2 + 1, node.childCount) || !after.type.validContent(rest))
        return false;
    }
    let index = $pos.indexAfter(base2);
    let baseType = typesAfter && typesAfter[0];
    return $pos.node(base2).canReplaceWith(index, index, baseType ? baseType.type : $pos.node(base2 + 1).type);
  }
  function split(tr, pos, depth = 1, typesAfter) {
    let $pos = tr.doc.resolve(pos), before = Fragment.empty, after = Fragment.empty;
    for (let d = $pos.depth, e = $pos.depth - depth, i = depth - 1; d > e; d--, i--) {
      before = Fragment.from($pos.node(d).copy(before));
      let typeAfter = typesAfter && typesAfter[i];
      after = Fragment.from(typeAfter ? typeAfter.type.create(typeAfter.attrs, after) : $pos.node(d).copy(after));
    }
    tr.step(new ReplaceStep(pos, pos, new Slice(before.append(after), depth, depth), true));
  }
  function canJoin(doc3, pos) {
    let $pos = doc3.resolve(pos), index = $pos.index();
    return joinable2($pos.nodeBefore, $pos.nodeAfter) && $pos.parent.canReplace(index, index + 1);
  }
  function canAppendWithSubstitutedLinebreaks(a, b) {
    if (!b.content.size)
      a.type.compatibleContent(b.type);
    let match = a.contentMatchAt(a.childCount);
    let { linebreakReplacement } = a.type.schema;
    for (let i = 0; i < b.childCount; i++) {
      let child = b.child(i);
      let type = child.type == linebreakReplacement ? a.type.schema.nodes.text : child.type;
      match = match.matchType(type);
      if (!match)
        return false;
      if (!a.type.allowsMarks(child.marks))
        return false;
    }
    return match.validEnd;
  }
  function joinable2(a, b) {
    return !!(a && b && !a.isLeaf && canAppendWithSubstitutedLinebreaks(a, b));
  }
  function joinPoint(doc3, pos, dir = -1) {
    let $pos = doc3.resolve(pos);
    for (let d = $pos.depth; ; d--) {
      let before, after, index = $pos.index(d);
      if (d == $pos.depth) {
        before = $pos.nodeBefore;
        after = $pos.nodeAfter;
      } else if (dir > 0) {
        before = $pos.node(d + 1);
        index++;
        after = $pos.node(d).maybeChild(index);
      } else {
        before = $pos.node(d).maybeChild(index - 1);
        after = $pos.node(d + 1);
      }
      if (before && !before.isTextblock && joinable2(before, after) && $pos.node(d).canReplace(index, index + 1))
        return pos;
      if (d == 0)
        break;
      pos = dir < 0 ? $pos.before(d) : $pos.after(d);
    }
  }
  function join(tr, pos, depth) {
    let convertNewlines = null;
    let { linebreakReplacement } = tr.doc.type.schema;
    let $before = tr.doc.resolve(pos - depth), beforeType = $before.node().type;
    if (linebreakReplacement && beforeType.inlineContent) {
      let pre = beforeType.whitespace == "pre";
      let supportLinebreak = !!beforeType.contentMatch.matchType(linebreakReplacement);
      if (pre && !supportLinebreak)
        convertNewlines = false;
      else if (!pre && supportLinebreak)
        convertNewlines = true;
    }
    let mapFrom = tr.steps.length;
    if (convertNewlines === false) {
      let $after = tr.doc.resolve(pos + depth);
      replaceLinebreaks(tr, $after.node(), $after.before(), mapFrom);
    }
    if (beforeType.inlineContent)
      clearIncompatible(tr, pos + depth - 1, beforeType, $before.node().contentMatchAt($before.index()), convertNewlines == null);
    let mapping = tr.mapping.slice(mapFrom), start = mapping.map(pos - depth);
    tr.step(new ReplaceStep(start, mapping.map(pos + depth, -1), Slice.empty, true));
    if (convertNewlines === true) {
      let $full = tr.doc.resolve(start);
      replaceNewlines(tr, $full.node(), $full.before(), tr.steps.length);
    }
    return tr;
  }
  function insertPoint(doc3, pos, nodeType) {
    let $pos = doc3.resolve(pos);
    if ($pos.parent.canReplaceWith($pos.index(), $pos.index(), nodeType))
      return pos;
    if ($pos.parentOffset == 0)
      for (let d = $pos.depth - 1; d >= 0; d--) {
        let index = $pos.index(d);
        if ($pos.node(d).canReplaceWith(index, index, nodeType))
          return $pos.before(d + 1);
        if (index > 0)
          return null;
      }
    if ($pos.parentOffset == $pos.parent.content.size)
      for (let d = $pos.depth - 1; d >= 0; d--) {
        let index = $pos.indexAfter(d);
        if ($pos.node(d).canReplaceWith(index, index, nodeType))
          return $pos.after(d + 1);
        if (index < $pos.node(d).childCount)
          return null;
      }
    return null;
  }
  function dropPoint(doc3, pos, slice2) {
    let $pos = doc3.resolve(pos);
    if (!slice2.content.size)
      return pos;
    let content = slice2.content;
    for (let i = 0; i < slice2.openStart; i++)
      content = content.firstChild.content;
    for (let pass = 1; pass <= (slice2.openStart == 0 && slice2.size ? 2 : 1); pass++) {
      for (let d = $pos.depth; d >= 0; d--) {
        let bias = d == $pos.depth ? 0 : $pos.pos <= ($pos.start(d + 1) + $pos.end(d + 1)) / 2 ? -1 : 1;
        let insertPos = $pos.index(d) + (bias > 0 ? 1 : 0);
        let parent = $pos.node(d), fits = false;
        if (pass == 1) {
          fits = parent.canReplace(insertPos, insertPos, content);
        } else {
          let wrapping = parent.contentMatchAt(insertPos).findWrapping(content.firstChild.type);
          fits = wrapping && parent.canReplaceWith(insertPos, insertPos, wrapping[0]);
        }
        if (fits)
          return bias == 0 ? $pos.pos : bias < 0 ? $pos.before(d + 1) : $pos.after(d + 1);
      }
    }
    return null;
  }
  function replaceStep(doc3, from2, to2 = from2, slice2 = Slice.empty) {
    if (from2 == to2 && !slice2.size)
      return null;
    let $from = doc3.resolve(from2), $to = doc3.resolve(to2);
    if (fitsTrivially($from, $to, slice2))
      return new ReplaceStep(from2, to2, slice2);
    return new Fitter($from, $to, slice2).fit();
  }
  function fitsTrivially($from, $to, slice2) {
    return !slice2.openStart && !slice2.openEnd && $from.start() == $to.start() && $from.parent.canReplace($from.index(), $to.index(), slice2.content);
  }
  var Fitter = class {
    constructor($from, $to, unplaced) {
      this.$from = $from;
      this.$to = $to;
      this.unplaced = unplaced;
      this.frontier = [];
      this.placed = Fragment.empty;
      for (let i = 0; i <= $from.depth; i++) {
        let node = $from.node(i);
        this.frontier.push({
          type: node.type,
          match: node.contentMatchAt($from.indexAfter(i))
        });
      }
      for (let i = $from.depth; i > 0; i--)
        this.placed = Fragment.from($from.node(i).copy(this.placed));
    }
    get depth() {
      return this.frontier.length - 1;
    }
    fit() {
      while (this.unplaced.size) {
        let fit = this.findFittable();
        if (fit)
          this.placeNodes(fit);
        else
          this.openMore() || this.dropNode();
      }
      let moveInline = this.mustMoveInline(), placedSize = this.placed.size - this.depth - this.$from.depth;
      let $from = this.$from, $to = this.close(moveInline < 0 ? this.$to : $from.doc.resolve(moveInline));
      if (!$to)
        return null;
      let content = this.placed, openStart = $from.depth, openEnd = $to.depth;
      while (openStart && openEnd && content.childCount == 1) {
        content = content.firstChild.content;
        openStart--;
        openEnd--;
      }
      let slice2 = new Slice(content, openStart, openEnd);
      if (moveInline > -1)
        return new ReplaceAroundStep($from.pos, moveInline, this.$to.pos, this.$to.end(), slice2, placedSize);
      if (slice2.size || $from.pos != this.$to.pos)
        return new ReplaceStep($from.pos, $to.pos, slice2);
      return null;
    }
    // Find a position on the start spine of `this.unplaced` that has
    // content that can be moved somewhere on the frontier. Returns two
    // depths, one for the slice and one for the frontier.
    findFittable() {
      let startDepth = this.unplaced.openStart;
      for (let cur = this.unplaced.content, d = 0, openEnd = this.unplaced.openEnd; d < startDepth; d++) {
        let node = cur.firstChild;
        if (cur.childCount > 1)
          openEnd = 0;
        if (node.type.spec.isolating && openEnd <= d) {
          startDepth = d;
          break;
        }
        cur = node.content;
      }
      for (let pass = 1; pass <= 2; pass++) {
        for (let sliceDepth = pass == 1 ? startDepth : this.unplaced.openStart; sliceDepth >= 0; sliceDepth--) {
          let fragment, parent = null;
          if (sliceDepth) {
            parent = contentAt(this.unplaced.content, sliceDepth - 1).firstChild;
            fragment = parent.content;
          } else {
            fragment = this.unplaced.content;
          }
          let first = fragment.firstChild;
          for (let frontierDepth = this.depth; frontierDepth >= 0; frontierDepth--) {
            let { type, match } = this.frontier[frontierDepth], wrap2, inject = null;
            if (pass == 1 && (first ? match.matchType(first.type) || (inject = match.fillBefore(Fragment.from(first), false)) : parent && type.compatibleContent(parent.type)))
              return { sliceDepth, frontierDepth, parent, inject };
            else if (pass == 2 && first && (wrap2 = match.findWrapping(first.type)))
              return { sliceDepth, frontierDepth, parent, wrap: wrap2 };
            if (parent && match.matchType(parent.type))
              break;
          }
        }
      }
    }
    openMore() {
      let { content, openStart, openEnd } = this.unplaced;
      let inner = contentAt(content, openStart);
      if (!inner.childCount || inner.firstChild.isLeaf)
        return false;
      this.unplaced = new Slice(content, openStart + 1, Math.max(openEnd, inner.size + openStart >= content.size - openEnd ? openStart + 1 : 0));
      return true;
    }
    dropNode() {
      let { content, openStart, openEnd } = this.unplaced;
      let inner = contentAt(content, openStart);
      if (inner.childCount <= 1 && openStart > 0) {
        let openAtEnd = content.size - openStart <= openStart + inner.size;
        this.unplaced = new Slice(dropFromFragment(content, openStart - 1, 1), openStart - 1, openAtEnd ? openStart - 1 : openEnd);
      } else {
        this.unplaced = new Slice(dropFromFragment(content, openStart, 1), openStart, openEnd);
      }
    }
    // Move content from the unplaced slice at `sliceDepth` to the
    // frontier node at `frontierDepth`. Close that frontier node when
    // applicable.
    placeNodes({ sliceDepth, frontierDepth, parent, inject, wrap: wrap2 }) {
      while (this.depth > frontierDepth)
        this.closeFrontierNode();
      if (wrap2)
        for (let i = 0; i < wrap2.length; i++)
          this.openFrontierNode(wrap2[i]);
      let slice2 = this.unplaced, fragment = parent ? parent.content : slice2.content;
      let openStart = slice2.openStart - sliceDepth;
      let taken = 0, add3 = [];
      let { match, type } = this.frontier[frontierDepth];
      if (inject) {
        for (let i = 0; i < inject.childCount; i++)
          add3.push(inject.child(i));
        match = match.matchFragment(inject);
      }
      let openEndCount = fragment.size + sliceDepth - (slice2.content.size - slice2.openEnd);
      while (taken < fragment.childCount) {
        let next = fragment.child(taken), matches2 = match.matchType(next.type);
        if (!matches2)
          break;
        taken++;
        if (taken > 1 || openStart == 0 || next.content.size) {
          match = matches2;
          add3.push(closeNodeStart(next.mark(type.allowedMarks(next.marks)), taken == 1 ? openStart : 0, taken == fragment.childCount ? openEndCount : -1));
        }
      }
      let toEnd = taken == fragment.childCount;
      if (!toEnd)
        openEndCount = -1;
      this.placed = addToFragment(this.placed, frontierDepth, Fragment.from(add3));
      this.frontier[frontierDepth].match = match;
      if (toEnd && openEndCount < 0 && parent && parent.type == this.frontier[this.depth].type && this.frontier.length > 1)
        this.closeFrontierNode();
      for (let i = 0, cur = fragment; i < openEndCount; i++) {
        let node = cur.lastChild;
        this.frontier.push({ type: node.type, match: node.contentMatchAt(node.childCount) });
        cur = node.content;
      }
      this.unplaced = !toEnd ? new Slice(dropFromFragment(slice2.content, sliceDepth, taken), slice2.openStart, slice2.openEnd) : sliceDepth == 0 ? Slice.empty : new Slice(dropFromFragment(slice2.content, sliceDepth - 1, 1), sliceDepth - 1, openEndCount < 0 ? slice2.openEnd : sliceDepth - 1);
    }
    mustMoveInline() {
      if (!this.$to.parent.isTextblock)
        return -1;
      let top = this.frontier[this.depth], level;
      if (!top.type.isTextblock || !contentAfterFits(this.$to, this.$to.depth, top.type, top.match, false) || this.$to.depth == this.depth && (level = this.findCloseLevel(this.$to)) && level.depth == this.depth)
        return -1;
      let { depth } = this.$to, after = this.$to.after(depth);
      while (depth > 1 && after == this.$to.end(--depth))
        ++after;
      return after;
    }
    findCloseLevel($to) {
      scan: for (let i = Math.min(this.depth, $to.depth); i >= 0; i--) {
        let { match, type } = this.frontier[i];
        let dropInner = i < $to.depth && $to.end(i + 1) == $to.pos + ($to.depth - (i + 1));
        let fit = contentAfterFits($to, i, type, match, dropInner);
        if (!fit)
          continue;
        for (let d = i - 1; d >= 0; d--) {
          let { match: match2, type: type2 } = this.frontier[d];
          let matches2 = contentAfterFits($to, d, type2, match2, true);
          if (!matches2 || matches2.childCount)
            continue scan;
        }
        return { depth: i, fit, move: dropInner ? $to.doc.resolve($to.after(i + 1)) : $to };
      }
    }
    close($to) {
      let close2 = this.findCloseLevel($to);
      if (!close2)
        return null;
      while (this.depth > close2.depth)
        this.closeFrontierNode();
      if (close2.fit.childCount)
        this.placed = addToFragment(this.placed, close2.depth, close2.fit);
      $to = close2.move;
      for (let d = close2.depth + 1; d <= $to.depth; d++) {
        let node = $to.node(d), add3 = node.type.contentMatch.fillBefore(node.content, true, $to.index(d));
        this.openFrontierNode(node.type, node.attrs, add3);
      }
      return $to;
    }
    openFrontierNode(type, attrs = null, content) {
      let top = this.frontier[this.depth];
      top.match = top.match.matchType(type);
      this.placed = addToFragment(this.placed, this.depth, Fragment.from(type.create(attrs, content)));
      this.frontier.push({ type, match: type.contentMatch });
    }
    closeFrontierNode() {
      let open = this.frontier.pop();
      let add3 = open.match.fillBefore(Fragment.empty, true);
      if (add3.childCount)
        this.placed = addToFragment(this.placed, this.frontier.length, add3);
    }
  };
  function dropFromFragment(fragment, depth, count) {
    if (depth == 0)
      return fragment.cutByIndex(count, fragment.childCount);
    return fragment.replaceChild(0, fragment.firstChild.copy(dropFromFragment(fragment.firstChild.content, depth - 1, count)));
  }
  function addToFragment(fragment, depth, content) {
    if (depth == 0)
      return fragment.append(content);
    return fragment.replaceChild(fragment.childCount - 1, fragment.lastChild.copy(addToFragment(fragment.lastChild.content, depth - 1, content)));
  }
  function contentAt(fragment, depth) {
    for (let i = 0; i < depth; i++)
      fragment = fragment.firstChild.content;
    return fragment;
  }
  function closeNodeStart(node, openStart, openEnd) {
    if (openStart <= 0)
      return node;
    let frag = node.content;
    if (openStart > 1)
      frag = frag.replaceChild(0, closeNodeStart(frag.firstChild, openStart - 1, frag.childCount == 1 ? openEnd - 1 : 0));
    if (openStart > 0) {
      frag = node.type.contentMatch.fillBefore(frag).append(frag);
      if (openEnd <= 0)
        frag = frag.append(node.type.contentMatch.matchFragment(frag).fillBefore(Fragment.empty, true));
    }
    return node.copy(frag);
  }
  function contentAfterFits($to, depth, type, match, open) {
    let node = $to.node(depth), index = open ? $to.indexAfter(depth) : $to.index(depth);
    if (index == node.childCount && !type.compatibleContent(node.type))
      return null;
    let fit = match.fillBefore(node.content, true, index);
    return fit && !invalidMarks(type, node.content, index) ? fit : null;
  }
  function invalidMarks(type, fragment, start) {
    for (let i = start; i < fragment.childCount; i++)
      if (!type.allowsMarks(fragment.child(i).marks))
        return true;
    return false;
  }
  function definesContent(type) {
    return type.spec.defining || type.spec.definingForContent;
  }
  function replaceRange(tr, from2, to2, slice2) {
    if (!slice2.size)
      return tr.deleteRange(from2, to2);
    let $from = tr.doc.resolve(from2), $to = tr.doc.resolve(to2);
    if (fitsTrivially($from, $to, slice2))
      return tr.step(new ReplaceStep(from2, to2, slice2));
    let targetDepths = coveredDepths($from, tr.doc.resolve(to2));
    if (targetDepths[targetDepths.length - 1] == 0)
      targetDepths.pop();
    let preferredTarget = -($from.depth + 1);
    targetDepths.unshift(preferredTarget);
    for (let d = $from.depth, pos = $from.pos - 1; d > 0; d--, pos--) {
      let spec = $from.node(d).type.spec;
      if (spec.defining || spec.definingAsContext || spec.isolating)
        break;
      if (targetDepths.indexOf(d) > -1)
        preferredTarget = d;
      else if ($from.before(d) == pos)
        targetDepths.splice(1, 0, -d);
    }
    let preferredTargetIndex = targetDepths.indexOf(preferredTarget);
    let leftNodes = [], preferredDepth = slice2.openStart;
    for (let content = slice2.content, i = 0; ; i++) {
      let node = content.firstChild;
      leftNodes.push(node);
      if (i == slice2.openStart)
        break;
      content = node.content;
    }
    for (let d = preferredDepth - 1; d >= 0; d--) {
      let leftNode = leftNodes[d], def = definesContent(leftNode.type);
      if (def && !leftNode.sameMarkup($from.node(Math.abs(preferredTarget) - 1)))
        preferredDepth = d;
      else if (def || !leftNode.type.isTextblock)
        break;
    }
    for (let j2 = slice2.openStart; j2 >= 0; j2--) {
      let openDepth = (j2 + preferredDepth + 1) % (slice2.openStart + 1);
      let insert = leftNodes[openDepth];
      if (!insert)
        continue;
      for (let i = 0; i < targetDepths.length; i++) {
        let targetDepth = targetDepths[(i + preferredTargetIndex) % targetDepths.length], expand = true;
        if (targetDepth < 0) {
          expand = false;
          targetDepth = -targetDepth;
        }
        let parent = $from.node(targetDepth - 1), index = $from.index(targetDepth - 1);
        if (parent.canReplaceWith(index, index, insert.type, insert.marks))
          return tr.replace($from.before(targetDepth), expand ? $to.after(targetDepth) : to2, new Slice(closeFragment(slice2.content, 0, slice2.openStart, openDepth), openDepth, slice2.openEnd));
      }
    }
    let startSteps = tr.steps.length;
    for (let i = targetDepths.length - 1; i >= 0; i--) {
      tr.replace(from2, to2, slice2);
      if (tr.steps.length > startSteps)
        break;
      let depth = targetDepths[i];
      if (depth < 0)
        continue;
      from2 = $from.before(depth);
      to2 = $to.after(depth);
    }
  }
  function closeFragment(fragment, depth, oldOpen, newOpen, parent) {
    if (depth < oldOpen) {
      let first = fragment.firstChild;
      fragment = fragment.replaceChild(0, first.copy(closeFragment(first.content, depth + 1, oldOpen, newOpen, first)));
    }
    if (depth > newOpen) {
      let match = parent.contentMatchAt(0);
      let start = match.fillBefore(fragment).append(fragment);
      fragment = start.append(match.matchFragment(start).fillBefore(Fragment.empty, true));
    }
    return fragment;
  }
  function replaceRangeWith(tr, from2, to2, node) {
    if (!node.isInline && from2 == to2 && tr.doc.resolve(from2).parent.content.size) {
      let point = insertPoint(tr.doc, from2, node.type);
      if (point != null)
        from2 = to2 = point;
    }
    tr.replaceRange(from2, to2, new Slice(Fragment.from(node), 0, 0));
  }
  function deleteRange(tr, from2, to2) {
    let $from = tr.doc.resolve(from2), $to = tr.doc.resolve(to2);
    let covered = coveredDepths($from, $to);
    for (let i = 0; i < covered.length; i++) {
      let depth = covered[i], last = i == covered.length - 1;
      if (last && depth == 0 || $from.node(depth).type.contentMatch.validEnd)
        return tr.delete($from.start(depth), $to.end(depth));
      if (depth > 0 && (last || $from.node(depth - 1).canReplace($from.index(depth - 1), $to.indexAfter(depth - 1))))
        return tr.delete($from.before(depth), $to.after(depth));
    }
    for (let d = 1; d <= $from.depth && d <= $to.depth; d++) {
      if (from2 - $from.start(d) == $from.depth - d && to2 > $from.end(d) && $to.end(d) - to2 != $to.depth - d && $from.start(d - 1) == $to.start(d - 1) && $from.node(d - 1).canReplace($from.index(d - 1), $to.index(d - 1)))
        return tr.delete($from.before(d), to2);
    }
    tr.delete(from2, to2);
  }
  function coveredDepths($from, $to) {
    let result = [], minDepth = Math.min($from.depth, $to.depth);
    for (let d = minDepth; d >= 0; d--) {
      let start = $from.start(d);
      if (start < $from.pos - ($from.depth - d) || $to.end(d) > $to.pos + ($to.depth - d) || $from.node(d).type.spec.isolating || $to.node(d).type.spec.isolating)
        break;
      if (start == $to.start(d) || d == $from.depth && d == $to.depth && $from.parent.inlineContent && $to.parent.inlineContent && d && $to.start(d - 1) == start - 1)
        result.push(d);
    }
    return result;
  }
  var AttrStep = class _AttrStep extends Step {
    /**
    Construct an attribute step.
    */
    constructor(pos, attr, value) {
      super();
      this.pos = pos;
      this.attr = attr;
      this.value = value;
    }
    apply(doc3) {
      let node = doc3.nodeAt(this.pos);
      if (!node)
        return StepResult.fail("No node at attribute step's position");
      let attrs = /* @__PURE__ */ Object.create(null);
      for (let name in node.attrs)
        attrs[name] = node.attrs[name];
      attrs[this.attr] = this.value;
      let updated = node.type.create(attrs, null, node.marks);
      return StepResult.fromReplace(doc3, this.pos, this.pos + 1, new Slice(Fragment.from(updated), 0, node.isLeaf ? 0 : 1));
    }
    getMap() {
      return StepMap.empty;
    }
    invert(doc3) {
      return new _AttrStep(this.pos, this.attr, doc3.nodeAt(this.pos).attrs[this.attr]);
    }
    map(mapping) {
      let pos = mapping.mapResult(this.pos, 1);
      return pos.deletedAfter ? null : new _AttrStep(pos.pos, this.attr, this.value);
    }
    toJSON() {
      return { stepType: "attr", pos: this.pos, attr: this.attr, value: this.value };
    }
    static fromJSON(schema2, json) {
      if (typeof json.pos != "number" || typeof json.attr != "string")
        throw new RangeError("Invalid input for AttrStep.fromJSON");
      return new _AttrStep(json.pos, json.attr, json.value);
    }
  };
  Step.jsonID("attr", AttrStep);
  var DocAttrStep = class _DocAttrStep extends Step {
    /**
    Construct an attribute step.
    */
    constructor(attr, value) {
      super();
      this.attr = attr;
      this.value = value;
    }
    apply(doc3) {
      let attrs = /* @__PURE__ */ Object.create(null);
      for (let name in doc3.attrs)
        attrs[name] = doc3.attrs[name];
      attrs[this.attr] = this.value;
      let updated = doc3.type.create(attrs, doc3.content, doc3.marks);
      return StepResult.ok(updated);
    }
    getMap() {
      return StepMap.empty;
    }
    invert(doc3) {
      return new _DocAttrStep(this.attr, doc3.attrs[this.attr]);
    }
    map(mapping) {
      return this;
    }
    toJSON() {
      return { stepType: "docAttr", attr: this.attr, value: this.value };
    }
    static fromJSON(schema2, json) {
      if (typeof json.attr != "string")
        throw new RangeError("Invalid input for DocAttrStep.fromJSON");
      return new _DocAttrStep(json.attr, json.value);
    }
  };
  Step.jsonID("docAttr", DocAttrStep);
  var TransformError = class extends Error {
  };
  TransformError = function TransformError2(message) {
    let err = Error.call(this, message);
    err.__proto__ = TransformError2.prototype;
    return err;
  };
  TransformError.prototype = Object.create(Error.prototype);
  TransformError.prototype.constructor = TransformError;
  TransformError.prototype.name = "TransformError";
  var Transform = class {
    /**
    Create a transform that starts with the given document.
    */
    constructor(doc3) {
      this.doc = doc3;
      this.steps = [];
      this.docs = [];
      this.mapping = new Mapping();
    }
    /**
    The starting document.
    */
    get before() {
      return this.docs.length ? this.docs[0] : this.doc;
    }
    /**
    Apply a new step in this transform, saving the result. Throws an
    error when the step fails.
    */
    step(step) {
      let result = this.maybeStep(step);
      if (result.failed)
        throw new TransformError(result.failed);
      return this;
    }
    /**
    Try to apply a step in this transformation, ignoring it if it
    fails. Returns the step result.
    */
    maybeStep(step) {
      let result = step.apply(this.doc);
      if (!result.failed)
        this.addStep(step, result.doc);
      return result;
    }
    /**
    True when the document has been changed (when there are any
    steps).
    */
    get docChanged() {
      return this.steps.length > 0;
    }
    /**
    @internal
    */
    addStep(step, doc3) {
      this.docs.push(this.doc);
      this.steps.push(step);
      this.mapping.appendMap(step.getMap());
      this.doc = doc3;
    }
    /**
    Replace the part of the document between `from` and `to` with the
    given `slice`.
    */
    replace(from2, to2 = from2, slice2 = Slice.empty) {
      let step = replaceStep(this.doc, from2, to2, slice2);
      if (step)
        this.step(step);
      return this;
    }
    /**
    Replace the given range with the given content, which may be a
    fragment, node, or array of nodes.
    */
    replaceWith(from2, to2, content) {
      return this.replace(from2, to2, new Slice(Fragment.from(content), 0, 0));
    }
    /**
    Delete the content between the given positions.
    */
    delete(from2, to2) {
      return this.replace(from2, to2, Slice.empty);
    }
    /**
    Insert the given content at the given position.
    */
    insert(pos, content) {
      return this.replaceWith(pos, pos, content);
    }
    /**
    Replace a range of the document with a given slice, using
    `from`, `to`, and the slice's
    [`openStart`](https://prosemirror.net/docs/ref/#model.Slice.openStart) property as hints, rather
    than fixed start and end points. This method may grow the
    replaced area or close open nodes in the slice in order to get a
    fit that is more in line with WYSIWYG expectations, by dropping
    fully covered parent nodes of the replaced region when they are
    marked [non-defining as
    context](https://prosemirror.net/docs/ref/#model.NodeSpec.definingAsContext), or including an
    open parent node from the slice that _is_ marked as [defining
    its content](https://prosemirror.net/docs/ref/#model.NodeSpec.definingForContent).
    
    This is the method, for example, to handle paste. The similar
    [`replace`](https://prosemirror.net/docs/ref/#transform.Transform.replace) method is a more
    primitive tool which will _not_ move the start and end of its given
    range, and is useful in situations where you need more precise
    control over what happens.
    */
    replaceRange(from2, to2, slice2) {
      replaceRange(this, from2, to2, slice2);
      return this;
    }
    /**
    Replace the given range with a node, but use `from` and `to` as
    hints, rather than precise positions. When from and to are the same
    and are at the start or end of a parent node in which the given
    node doesn't fit, this method may _move_ them out towards a parent
    that does allow the given node to be placed. When the given range
    completely covers a parent node, this method may completely replace
    that parent node.
    */
    replaceRangeWith(from2, to2, node) {
      replaceRangeWith(this, from2, to2, node);
      return this;
    }
    /**
    Delete the given range, expanding it to cover fully covered
    parent nodes until a valid replace is found.
    */
    deleteRange(from2, to2) {
      deleteRange(this, from2, to2);
      return this;
    }
    /**
    Split the content in the given range off from its parent, if there
    is sibling content before or after it, and move it up the tree to
    the depth specified by `target`. You'll probably want to use
    [`liftTarget`](https://prosemirror.net/docs/ref/#transform.liftTarget) to compute `target`, to make
    sure the lift is valid.
    */
    lift(range, target) {
      lift(this, range, target);
      return this;
    }
    /**
    Join the blocks around the given position. If depth is 2, their
    last and first siblings are also joined, and so on.
    */
    join(pos, depth = 1) {
      join(this, pos, depth);
      return this;
    }
    /**
    Wrap the given [range](https://prosemirror.net/docs/ref/#model.NodeRange) in the given set of wrappers.
    The wrappers are assumed to be valid in this position, and should
    probably be computed with [`findWrapping`](https://prosemirror.net/docs/ref/#transform.findWrapping).
    */
    wrap(range, wrappers) {
      wrap(this, range, wrappers);
      return this;
    }
    /**
    Set the type of all textblocks (partly) between `from` and `to` to
    the given node type with the given attributes.
    */
    setBlockType(from2, to2 = from2, type, attrs = null) {
      setBlockType(this, from2, to2, type, attrs);
      return this;
    }
    /**
    Change the type, attributes, and/or marks of the node at `pos`.
    When `type` isn't given, the existing node type is preserved,
    */
    setNodeMarkup(pos, type, attrs = null, marks2) {
      setNodeMarkup(this, pos, type, attrs, marks2);
      return this;
    }
    /**
    Set a single attribute on a given node to a new value.
    The `pos` addresses the document content. Use `setDocAttribute`
    to set attributes on the document itself.
    */
    setNodeAttribute(pos, attr, value) {
      this.step(new AttrStep(pos, attr, value));
      return this;
    }
    /**
    Set a single attribute on the document to a new value.
    */
    setDocAttribute(attr, value) {
      this.step(new DocAttrStep(attr, value));
      return this;
    }
    /**
    Add a mark to the node at position `pos`.
    */
    addNodeMark(pos, mark) {
      this.step(new AddNodeMarkStep(pos, mark));
      return this;
    }
    /**
    Remove a mark (or all marks of the given type) from the node at
    position `pos`.
    */
    removeNodeMark(pos, mark) {
      let node = this.doc.nodeAt(pos);
      if (!node)
        throw new RangeError("No node at position " + pos);
      if (mark instanceof Mark) {
        if (mark.isInSet(node.marks))
          this.step(new RemoveNodeMarkStep(pos, mark));
      } else {
        let set = node.marks, found2, steps = [];
        while (found2 = mark.isInSet(set)) {
          steps.push(new RemoveNodeMarkStep(pos, found2));
          set = found2.removeFromSet(set);
        }
        for (let i = steps.length - 1; i >= 0; i--)
          this.step(steps[i]);
      }
      return this;
    }
    /**
    Split the node at the given position, and optionally, if `depth` is
    greater than one, any number of nodes above that. By default, the
    parts split off will inherit the node type of the original node.
    This can be changed by passing an array of types and attributes to
    use after the split (with the outermost nodes coming first).
    */
    split(pos, depth = 1, typesAfter) {
      split(this, pos, depth, typesAfter);
      return this;
    }
    /**
    Add the given mark to the inline content between `from` and `to`.
    */
    addMark(from2, to2, mark) {
      addMark(this, from2, to2, mark);
      return this;
    }
    /**
    Remove marks from inline nodes between `from` and `to`. When
    `mark` is a single mark, remove precisely that mark. When it is
    a mark type, remove all marks of that type. When it is null,
    remove all marks of any type.
    */
    removeMark(from2, to2, mark) {
      removeMark(this, from2, to2, mark);
      return this;
    }
    /**
    Removes all marks and nodes from the content of the node at
    `pos` that don't match the given new parent node type. Accepts
    an optional starting [content match](https://prosemirror.net/docs/ref/#model.ContentMatch) as
    third argument.
    */
    clearIncompatible(pos, parentType, match) {
      clearIncompatible(this, pos, parentType, match);
      return this;
    }
  };

  // node_modules/prosemirror-state/dist/index.js
  var classesById = /* @__PURE__ */ Object.create(null);
  var Selection = class {
    /**
    Initialize a selection with the head and anchor and ranges. If no
    ranges are given, constructs a single range across `$anchor` and
    `$head`.
    */
    constructor($anchor, $head, ranges) {
      this.$anchor = $anchor;
      this.$head = $head;
      this.ranges = ranges || [new SelectionRange($anchor.min($head), $anchor.max($head))];
    }
    /**
    The selection's anchor, as an unresolved position.
    */
    get anchor() {
      return this.$anchor.pos;
    }
    /**
    The selection's head.
    */
    get head() {
      return this.$head.pos;
    }
    /**
    The lower bound of the selection's main range.
    */
    get from() {
      return this.$from.pos;
    }
    /**
    The upper bound of the selection's main range.
    */
    get to() {
      return this.$to.pos;
    }
    /**
    The resolved lower  bound of the selection's main range.
    */
    get $from() {
      return this.ranges[0].$from;
    }
    /**
    The resolved upper bound of the selection's main range.
    */
    get $to() {
      return this.ranges[0].$to;
    }
    /**
    Indicates whether the selection contains any content.
    */
    get empty() {
      let ranges = this.ranges;
      for (let i = 0; i < ranges.length; i++)
        if (ranges[i].$from.pos != ranges[i].$to.pos)
          return false;
      return true;
    }
    /**
    Get the content of this selection as a slice.
    */
    content() {
      return this.$from.doc.slice(this.from, this.to, true);
    }
    /**
    Replace the selection with a slice or, if no slice is given,
    delete the selection. Will append to the given transaction.
    */
    replace(tr, content = Slice.empty) {
      let lastNode = content.content.lastChild, lastParent = null;
      for (let i = 0; i < content.openEnd; i++) {
        lastParent = lastNode;
        lastNode = lastNode.lastChild;
      }
      let mapFrom = tr.steps.length, ranges = this.ranges;
      for (let i = 0; i < ranges.length; i++) {
        let { $from, $to } = ranges[i], mapping = tr.mapping.slice(mapFrom);
        tr.replaceRange(mapping.map($from.pos), mapping.map($to.pos), i ? Slice.empty : content);
        if (i == 0)
          selectionToInsertionEnd(tr, mapFrom, (lastNode ? lastNode.isInline : lastParent && lastParent.isTextblock) ? -1 : 1);
      }
    }
    /**
    Replace the selection with the given node, appending the changes
    to the given transaction.
    */
    replaceWith(tr, node) {
      let mapFrom = tr.steps.length, ranges = this.ranges;
      for (let i = 0; i < ranges.length; i++) {
        let { $from, $to } = ranges[i], mapping = tr.mapping.slice(mapFrom);
        let from2 = mapping.map($from.pos), to2 = mapping.map($to.pos);
        if (i) {
          tr.deleteRange(from2, to2);
        } else {
          tr.replaceRangeWith(from2, to2, node);
          selectionToInsertionEnd(tr, mapFrom, node.isInline ? -1 : 1);
        }
      }
    }
    /**
    Find a valid cursor or leaf node selection starting at the given
    position and searching back if `dir` is negative, and forward if
    positive. When `textOnly` is true, only consider cursor
    selections. Will return null when no valid selection position is
    found.
    */
    static findFrom($pos, dir, textOnly = false) {
      let inner = $pos.parent.inlineContent ? new TextSelection($pos) : findSelectionIn($pos.node(0), $pos.parent, $pos.pos, $pos.index(), dir, textOnly);
      if (inner)
        return inner;
      for (let depth = $pos.depth - 1; depth >= 0; depth--) {
        let found2 = dir < 0 ? findSelectionIn($pos.node(0), $pos.node(depth), $pos.before(depth + 1), $pos.index(depth), dir, textOnly) : findSelectionIn($pos.node(0), $pos.node(depth), $pos.after(depth + 1), $pos.index(depth) + 1, dir, textOnly);
        if (found2)
          return found2;
      }
      return null;
    }
    /**
    Find a valid cursor or leaf node selection near the given
    position. Searches forward first by default, but if `bias` is
    negative, it will search backwards first.
    */
    static near($pos, bias = 1) {
      return this.findFrom($pos, bias) || this.findFrom($pos, -bias) || new AllSelection($pos.node(0));
    }
    /**
    Find the cursor or leaf node selection closest to the start of
    the given document. Will return an
    [`AllSelection`](https://prosemirror.net/docs/ref/#state.AllSelection) if no valid position
    exists.
    */
    static atStart(doc3) {
      return findSelectionIn(doc3, doc3, 0, 0, 1) || new AllSelection(doc3);
    }
    /**
    Find the cursor or leaf node selection closest to the end of the
    given document.
    */
    static atEnd(doc3) {
      return findSelectionIn(doc3, doc3, doc3.content.size, doc3.childCount, -1) || new AllSelection(doc3);
    }
    /**
    Deserialize the JSON representation of a selection. Must be
    implemented for custom classes (as a static class method).
    */
    static fromJSON(doc3, json) {
      if (!json || !json.type)
        throw new RangeError("Invalid input for Selection.fromJSON");
      let cls = classesById[json.type];
      if (!cls)
        throw new RangeError(`No selection type ${json.type} defined`);
      return cls.fromJSON(doc3, json);
    }
    /**
    To be able to deserialize selections from JSON, custom selection
    classes must register themselves with an ID string, so that they
    can be disambiguated. Try to pick something that's unlikely to
    clash with classes from other modules.
    */
    static jsonID(id, selectionClass) {
      if (id in classesById)
        throw new RangeError("Duplicate use of selection JSON ID " + id);
      classesById[id] = selectionClass;
      selectionClass.prototype.jsonID = id;
      return selectionClass;
    }
    /**
    Get a [bookmark](https://prosemirror.net/docs/ref/#state.SelectionBookmark) for this selection,
    which is a value that can be mapped without having access to a
    current document, and later resolved to a real selection for a
    given document again. (This is used mostly by the history to
    track and restore old selections.) The default implementation of
    this method just converts the selection to a text selection and
    returns the bookmark for that.
    */
    getBookmark() {
      return TextSelection.between(this.$anchor, this.$head).getBookmark();
    }
  };
  Selection.prototype.visible = true;
  var SelectionRange = class {
    /**
    Create a range.
    */
    constructor($from, $to) {
      this.$from = $from;
      this.$to = $to;
    }
  };
  var warnedAboutTextSelection = false;
  function checkTextSelection($pos) {
    if (!warnedAboutTextSelection && !$pos.parent.inlineContent) {
      warnedAboutTextSelection = true;
      console["warn"]("TextSelection endpoint not pointing into a node with inline content (" + $pos.parent.type.name + ")");
    }
  }
  var TextSelection = class _TextSelection extends Selection {
    /**
    Construct a text selection between the given points.
    */
    constructor($anchor, $head = $anchor) {
      checkTextSelection($anchor);
      checkTextSelection($head);
      super($anchor, $head);
    }
    /**
    Returns a resolved position if this is a cursor selection (an
    empty text selection), and null otherwise.
    */
    get $cursor() {
      return this.$anchor.pos == this.$head.pos ? this.$head : null;
    }
    map(doc3, mapping) {
      let $head = doc3.resolve(mapping.map(this.head));
      if (!$head.parent.inlineContent)
        return Selection.near($head);
      let $anchor = doc3.resolve(mapping.map(this.anchor));
      return new _TextSelection($anchor.parent.inlineContent ? $anchor : $head, $head);
    }
    replace(tr, content = Slice.empty) {
      super.replace(tr, content);
      if (content == Slice.empty) {
        let marks2 = this.$from.marksAcross(this.$to);
        if (marks2)
          tr.ensureMarks(marks2);
      }
    }
    eq(other) {
      return other instanceof _TextSelection && other.anchor == this.anchor && other.head == this.head;
    }
    getBookmark() {
      return new TextBookmark(this.anchor, this.head);
    }
    toJSON() {
      return { type: "text", anchor: this.anchor, head: this.head };
    }
    /**
    @internal
    */
    static fromJSON(doc3, json) {
      if (typeof json.anchor != "number" || typeof json.head != "number")
        throw new RangeError("Invalid input for TextSelection.fromJSON");
      return new _TextSelection(doc3.resolve(json.anchor), doc3.resolve(json.head));
    }
    /**
    Create a text selection from non-resolved positions.
    */
    static create(doc3, anchor, head = anchor) {
      let $anchor = doc3.resolve(anchor);
      return new this($anchor, head == anchor ? $anchor : doc3.resolve(head));
    }
    /**
    Return a text selection that spans the given positions or, if
    they aren't text positions, find a text selection near them.
    `bias` determines whether the method searches forward (default)
    or backwards (negative number) first. Will fall back to calling
    [`Selection.near`](https://prosemirror.net/docs/ref/#state.Selection^near) when the document
    doesn't contain a valid text position.
    */
    static between($anchor, $head, bias) {
      let dPos = $anchor.pos - $head.pos;
      if (!bias || dPos)
        bias = dPos >= 0 ? 1 : -1;
      if (!$head.parent.inlineContent) {
        let found2 = Selection.findFrom($head, bias, true) || Selection.findFrom($head, -bias, true);
        if (found2)
          $head = found2.$head;
        else
          return Selection.near($head, bias);
      }
      if (!$anchor.parent.inlineContent) {
        if (dPos == 0) {
          $anchor = $head;
        } else {
          $anchor = (Selection.findFrom($anchor, -bias, true) || Selection.findFrom($anchor, bias, true)).$anchor;
          if ($anchor.pos < $head.pos != dPos < 0)
            $anchor = $head;
        }
      }
      return new _TextSelection($anchor, $head);
    }
  };
  Selection.jsonID("text", TextSelection);
  var TextBookmark = class _TextBookmark {
    constructor(anchor, head) {
      this.anchor = anchor;
      this.head = head;
    }
    map(mapping) {
      return new _TextBookmark(mapping.map(this.anchor), mapping.map(this.head));
    }
    resolve(doc3) {
      return TextSelection.between(doc3.resolve(this.anchor), doc3.resolve(this.head));
    }
  };
  var NodeSelection = class _NodeSelection extends Selection {
    /**
    Create a node selection. Does not verify the validity of its
    argument.
    */
    constructor($pos) {
      let node = $pos.nodeAfter;
      let $end = $pos.node(0).resolve($pos.pos + node.nodeSize);
      super($pos, $end);
      this.node = node;
    }
    map(doc3, mapping) {
      let { deleted, pos } = mapping.mapResult(this.anchor);
      let $pos = doc3.resolve(pos);
      if (deleted)
        return Selection.near($pos);
      return new _NodeSelection($pos);
    }
    content() {
      return new Slice(Fragment.from(this.node), 0, 0);
    }
    eq(other) {
      return other instanceof _NodeSelection && other.anchor == this.anchor;
    }
    toJSON() {
      return { type: "node", anchor: this.anchor };
    }
    getBookmark() {
      return new NodeBookmark(this.anchor);
    }
    /**
    @internal
    */
    static fromJSON(doc3, json) {
      if (typeof json.anchor != "number")
        throw new RangeError("Invalid input for NodeSelection.fromJSON");
      return new _NodeSelection(doc3.resolve(json.anchor));
    }
    /**
    Create a node selection from non-resolved positions.
    */
    static create(doc3, from2) {
      return new _NodeSelection(doc3.resolve(from2));
    }
    /**
    Determines whether the given node may be selected as a node
    selection.
    */
    static isSelectable(node) {
      return !node.isText && node.type.spec.selectable !== false;
    }
  };
  NodeSelection.prototype.visible = false;
  Selection.jsonID("node", NodeSelection);
  var NodeBookmark = class _NodeBookmark {
    constructor(anchor) {
      this.anchor = anchor;
    }
    map(mapping) {
      let { deleted, pos } = mapping.mapResult(this.anchor);
      return deleted ? new TextBookmark(pos, pos) : new _NodeBookmark(pos);
    }
    resolve(doc3) {
      let $pos = doc3.resolve(this.anchor), node = $pos.nodeAfter;
      if (node && NodeSelection.isSelectable(node))
        return new NodeSelection($pos);
      return Selection.near($pos);
    }
  };
  var AllSelection = class _AllSelection extends Selection {
    /**
    Create an all-selection over the given document.
    */
    constructor(doc3) {
      super(doc3.resolve(0), doc3.resolve(doc3.content.size));
    }
    replace(tr, content = Slice.empty) {
      if (content == Slice.empty) {
        tr.delete(0, tr.doc.content.size);
        let sel = Selection.atStart(tr.doc);
        if (!sel.eq(tr.selection))
          tr.setSelection(sel);
      } else {
        super.replace(tr, content);
      }
    }
    toJSON() {
      return { type: "all" };
    }
    /**
    @internal
    */
    static fromJSON(doc3) {
      return new _AllSelection(doc3);
    }
    map(doc3) {
      return new _AllSelection(doc3);
    }
    eq(other) {
      return other instanceof _AllSelection;
    }
    getBookmark() {
      return AllBookmark;
    }
  };
  Selection.jsonID("all", AllSelection);
  var AllBookmark = {
    map() {
      return this;
    },
    resolve(doc3) {
      return new AllSelection(doc3);
    }
  };
  function findSelectionIn(doc3, node, pos, index, dir, text = false) {
    if (node.inlineContent)
      return TextSelection.create(doc3, pos);
    for (let i = index - (dir > 0 ? 0 : 1); dir > 0 ? i < node.childCount : i >= 0; i += dir) {
      let child = node.child(i);
      if (!child.isAtom) {
        let inner = findSelectionIn(doc3, child, pos + dir, dir < 0 ? child.childCount : 0, dir, text);
        if (inner)
          return inner;
      } else if (!text && NodeSelection.isSelectable(child)) {
        return NodeSelection.create(doc3, pos - (dir < 0 ? child.nodeSize : 0));
      }
      pos += child.nodeSize * dir;
    }
    return null;
  }
  function selectionToInsertionEnd(tr, startLen, bias) {
    let last = tr.steps.length - 1;
    if (last < startLen)
      return;
    let step = tr.steps[last];
    if (!(step instanceof ReplaceStep || step instanceof ReplaceAroundStep))
      return;
    let map2 = tr.mapping.maps[last], end;
    map2.forEach((_from, _to, _newFrom, newTo) => {
      if (end == null)
        end = newTo;
    });
    tr.setSelection(Selection.near(tr.doc.resolve(end), bias));
  }
  var UPDATED_SEL = 1;
  var UPDATED_MARKS = 2;
  var UPDATED_SCROLL = 4;
  var Transaction = class extends Transform {
    /**
    @internal
    */
    constructor(state) {
      super(state.doc);
      this.curSelectionFor = 0;
      this.updated = 0;
      this.meta = /* @__PURE__ */ Object.create(null);
      this.time = Date.now();
      this.curSelection = state.selection;
      this.storedMarks = state.storedMarks;
    }
    /**
    The transaction's current selection. This defaults to the editor
    selection [mapped](https://prosemirror.net/docs/ref/#state.Selection.map) through the steps in the
    transaction, but can be overwritten with
    [`setSelection`](https://prosemirror.net/docs/ref/#state.Transaction.setSelection).
    */
    get selection() {
      if (this.curSelectionFor < this.steps.length) {
        this.curSelection = this.curSelection.map(this.doc, this.mapping.slice(this.curSelectionFor));
        this.curSelectionFor = this.steps.length;
      }
      return this.curSelection;
    }
    /**
    Update the transaction's current selection. Will determine the
    selection that the editor gets when the transaction is applied.
    */
    setSelection(selection) {
      if (selection.$from.doc != this.doc)
        throw new RangeError("Selection passed to setSelection must point at the current document");
      this.curSelection = selection;
      this.curSelectionFor = this.steps.length;
      this.updated = (this.updated | UPDATED_SEL) & ~UPDATED_MARKS;
      this.storedMarks = null;
      return this;
    }
    /**
    Whether the selection was explicitly updated by this transaction.
    */
    get selectionSet() {
      return (this.updated & UPDATED_SEL) > 0;
    }
    /**
    Set the current stored marks.
    */
    setStoredMarks(marks2) {
      this.storedMarks = marks2;
      this.updated |= UPDATED_MARKS;
      return this;
    }
    /**
    Make sure the current stored marks or, if that is null, the marks
    at the selection, match the given set of marks. Does nothing if
    this is already the case.
    */
    ensureMarks(marks2) {
      if (!Mark.sameSet(this.storedMarks || this.selection.$from.marks(), marks2))
        this.setStoredMarks(marks2);
      return this;
    }
    /**
    Add a mark to the set of stored marks.
    */
    addStoredMark(mark) {
      return this.ensureMarks(mark.addToSet(this.storedMarks || this.selection.$head.marks()));
    }
    /**
    Remove a mark or mark type from the set of stored marks.
    */
    removeStoredMark(mark) {
      return this.ensureMarks(mark.removeFromSet(this.storedMarks || this.selection.$head.marks()));
    }
    /**
    Whether the stored marks were explicitly set for this transaction.
    */
    get storedMarksSet() {
      return (this.updated & UPDATED_MARKS) > 0;
    }
    /**
    @internal
    */
    addStep(step, doc3) {
      super.addStep(step, doc3);
      this.updated = this.updated & ~UPDATED_MARKS;
      this.storedMarks = null;
    }
    /**
    Update the timestamp for the transaction.
    */
    setTime(time) {
      this.time = time;
      return this;
    }
    /**
    Replace the current selection with the given slice.
    */
    replaceSelection(slice2) {
      this.selection.replace(this, slice2);
      return this;
    }
    /**
    Replace the selection with the given node. When `inheritMarks` is
    true and the content is inline, it inherits the marks from the
    place where it is inserted.
    */
    replaceSelectionWith(node, inheritMarks = true) {
      let selection = this.selection;
      if (inheritMarks)
        node = node.mark(this.storedMarks || (selection.empty ? selection.$from.marks() : selection.$from.marksAcross(selection.$to) || Mark.none));
      selection.replaceWith(this, node);
      return this;
    }
    /**
    Delete the selection.
    */
    deleteSelection() {
      this.selection.replace(this);
      return this;
    }
    /**
    Replace the given range, or the selection if no range is given,
    with a text node containing the given string.
    */
    insertText(text, from2, to2) {
      let schema2 = this.doc.type.schema;
      if (from2 == null) {
        if (!text)
          return this.deleteSelection();
        return this.replaceSelectionWith(schema2.text(text), true);
      } else {
        if (to2 == null)
          to2 = from2;
        to2 = to2 == null ? from2 : to2;
        if (!text)
          return this.deleteRange(from2, to2);
        let marks2 = this.storedMarks;
        if (!marks2) {
          let $from = this.doc.resolve(from2);
          marks2 = to2 == from2 ? $from.marks() : $from.marksAcross(this.doc.resolve(to2));
        }
        this.replaceRangeWith(from2, to2, schema2.text(text, marks2));
        if (!this.selection.empty)
          this.setSelection(Selection.near(this.selection.$to));
        return this;
      }
    }
    /**
    Store a metadata property in this transaction, keyed either by
    name or by plugin.
    */
    setMeta(key, value) {
      this.meta[typeof key == "string" ? key : key.key] = value;
      return this;
    }
    /**
    Retrieve a metadata property for a given name or plugin.
    */
    getMeta(key) {
      return this.meta[typeof key == "string" ? key : key.key];
    }
    /**
    Returns true if this transaction doesn't contain any metadata,
    and can thus safely be extended.
    */
    get isGeneric() {
      for (let _2 in this.meta)
        return false;
      return true;
    }
    /**
    Indicate that the editor should scroll the selection into view
    when updated to the state produced by this transaction.
    */
    scrollIntoView() {
      this.updated |= UPDATED_SCROLL;
      return this;
    }
    /**
    True when this transaction has had `scrollIntoView` called on it.
    */
    get scrolledIntoView() {
      return (this.updated & UPDATED_SCROLL) > 0;
    }
  };
  function bind(f, self2) {
    return !self2 || !f ? f : f.bind(self2);
  }
  var FieldDesc = class {
    constructor(name, desc, self2) {
      this.name = name;
      this.init = bind(desc.init, self2);
      this.apply = bind(desc.apply, self2);
    }
  };
  var baseFields = [
    new FieldDesc("doc", {
      init(config) {
        return config.doc || config.schema.topNodeType.createAndFill();
      },
      apply(tr) {
        return tr.doc;
      }
    }),
    new FieldDesc("selection", {
      init(config, instance) {
        return config.selection || Selection.atStart(instance.doc);
      },
      apply(tr) {
        return tr.selection;
      }
    }),
    new FieldDesc("storedMarks", {
      init(config) {
        return config.storedMarks || null;
      },
      apply(tr, _marks, _old, state) {
        return state.selection.$cursor ? tr.storedMarks : null;
      }
    }),
    new FieldDesc("scrollToSelection", {
      init() {
        return 0;
      },
      apply(tr, prev) {
        return tr.scrolledIntoView ? prev + 1 : prev;
      }
    })
  ];
  var Configuration = class {
    constructor(schema2, plugins) {
      this.schema = schema2;
      this.plugins = [];
      this.pluginsByKey = /* @__PURE__ */ Object.create(null);
      this.fields = baseFields.slice();
      if (plugins)
        plugins.forEach((plugin) => {
          if (this.pluginsByKey[plugin.key])
            throw new RangeError("Adding different instances of a keyed plugin (" + plugin.key + ")");
          this.plugins.push(plugin);
          this.pluginsByKey[plugin.key] = plugin;
          if (plugin.spec.state)
            this.fields.push(new FieldDesc(plugin.key, plugin.spec.state, plugin));
        });
    }
  };
  var EditorState = class _EditorState {
    /**
    @internal
    */
    constructor(config) {
      this.config = config;
    }
    /**
    The schema of the state's document.
    */
    get schema() {
      return this.config.schema;
    }
    /**
    The plugins that are active in this state.
    */
    get plugins() {
      return this.config.plugins;
    }
    /**
    Apply the given transaction to produce a new state.
    */
    apply(tr) {
      return this.applyTransaction(tr).state;
    }
    /**
    @internal
    */
    filterTransaction(tr, ignore = -1) {
      for (let i = 0; i < this.config.plugins.length; i++)
        if (i != ignore) {
          let plugin = this.config.plugins[i];
          if (plugin.spec.filterTransaction && !plugin.spec.filterTransaction.call(plugin, tr, this))
            return false;
        }
      return true;
    }
    /**
    Verbose variant of [`apply`](https://prosemirror.net/docs/ref/#state.EditorState.apply) that
    returns the precise transactions that were applied (which might
    be influenced by the [transaction
    hooks](https://prosemirror.net/docs/ref/#state.PluginSpec.filterTransaction) of
    plugins) along with the new state.
    */
    applyTransaction(rootTr) {
      if (!this.filterTransaction(rootTr))
        return { state: this, transactions: [] };
      let trs = [rootTr], newState = this.applyInner(rootTr), seen = null;
      for (; ; ) {
        let haveNew = false;
        for (let i = 0; i < this.config.plugins.length; i++) {
          let plugin = this.config.plugins[i];
          if (plugin.spec.appendTransaction) {
            let n = seen ? seen[i].n : 0, oldState = seen ? seen[i].state : this;
            let tr = n < trs.length && plugin.spec.appendTransaction.call(plugin, n ? trs.slice(n) : trs, oldState, newState);
            if (tr && newState.filterTransaction(tr, i)) {
              tr.setMeta("appendedTransaction", rootTr);
              if (!seen) {
                seen = [];
                for (let j2 = 0; j2 < this.config.plugins.length; j2++)
                  seen.push(j2 < i ? { state: newState, n: trs.length } : { state: this, n: 0 });
              }
              trs.push(tr);
              newState = newState.applyInner(tr);
              haveNew = true;
            }
            if (seen)
              seen[i] = { state: newState, n: trs.length };
          }
        }
        if (!haveNew)
          return { state: newState, transactions: trs };
      }
    }
    /**
    @internal
    */
    applyInner(tr) {
      if (!tr.before.eq(this.doc))
        throw new RangeError("Applying a mismatched transaction");
      let newInstance = new _EditorState(this.config), fields = this.config.fields;
      for (let i = 0; i < fields.length; i++) {
        let field = fields[i];
        newInstance[field.name] = field.apply(tr, this[field.name], this, newInstance);
      }
      return newInstance;
    }
    /**
    Start a [transaction](https://prosemirror.net/docs/ref/#state.Transaction) from this state.
    */
    get tr() {
      return new Transaction(this);
    }
    /**
    Create a new state.
    */
    static create(config) {
      let $config = new Configuration(config.doc ? config.doc.type.schema : config.schema, config.plugins);
      let instance = new _EditorState($config);
      for (let i = 0; i < $config.fields.length; i++)
        instance[$config.fields[i].name] = $config.fields[i].init(config, instance);
      return instance;
    }
    /**
    Create a new state based on this one, but with an adjusted set
    of active plugins. State fields that exist in both sets of
    plugins are kept unchanged. Those that no longer exist are
    dropped, and those that are new are initialized using their
    [`init`](https://prosemirror.net/docs/ref/#state.StateField.init) method, passing in the new
    configuration object..
    */
    reconfigure(config) {
      let $config = new Configuration(this.schema, config.plugins);
      let fields = $config.fields, instance = new _EditorState($config);
      for (let i = 0; i < fields.length; i++) {
        let name = fields[i].name;
        instance[name] = this.hasOwnProperty(name) ? this[name] : fields[i].init(config, instance);
      }
      return instance;
    }
    /**
    Serialize this state to JSON. If you want to serialize the state
    of plugins, pass an object mapping property names to use in the
    resulting JSON object to plugin objects. The argument may also be
    a string or number, in which case it is ignored, to support the
    way `JSON.stringify` calls `toString` methods.
    */
    toJSON(pluginFields) {
      let result = { doc: this.doc.toJSON(), selection: this.selection.toJSON() };
      if (this.storedMarks)
        result.storedMarks = this.storedMarks.map((m) => m.toJSON());
      if (pluginFields && typeof pluginFields == "object")
        for (let prop in pluginFields) {
          if (prop == "doc" || prop == "selection")
            throw new RangeError("The JSON fields `doc` and `selection` are reserved");
          let plugin = pluginFields[prop], state = plugin.spec.state;
          if (state && state.toJSON)
            result[prop] = state.toJSON.call(plugin, this[plugin.key]);
        }
      return result;
    }
    /**
    Deserialize a JSON representation of a state. `config` should
    have at least a `schema` field, and should contain array of
    plugins to initialize the state with. `pluginFields` can be used
    to deserialize the state of plugins, by associating plugin
    instances with the property names they use in the JSON object.
    */
    static fromJSON(config, json, pluginFields) {
      if (!json)
        throw new RangeError("Invalid input for EditorState.fromJSON");
      if (!config.schema)
        throw new RangeError("Required config field 'schema' missing");
      let $config = new Configuration(config.schema, config.plugins);
      let instance = new _EditorState($config);
      $config.fields.forEach((field) => {
        if (field.name == "doc") {
          instance.doc = Node2.fromJSON(config.schema, json.doc);
        } else if (field.name == "selection") {
          instance.selection = Selection.fromJSON(instance.doc, json.selection);
        } else if (field.name == "storedMarks") {
          if (json.storedMarks)
            instance.storedMarks = json.storedMarks.map(config.schema.markFromJSON);
        } else {
          if (pluginFields)
            for (let prop in pluginFields) {
              let plugin = pluginFields[prop], state = plugin.spec.state;
              if (plugin.key == field.name && state && state.fromJSON && Object.prototype.hasOwnProperty.call(json, prop)) {
                instance[field.name] = state.fromJSON.call(plugin, config, json[prop], instance);
                return;
              }
            }
          instance[field.name] = field.init(config, instance);
        }
      });
      return instance;
    }
  };
  function bindProps(obj, self2, target) {
    for (let prop in obj) {
      let val = obj[prop];
      if (val instanceof Function)
        val = val.bind(self2);
      else if (prop == "handleDOMEvents")
        val = bindProps(val, self2, {});
      target[prop] = val;
    }
    return target;
  }
  var Plugin = class {
    /**
    Create a plugin.
    */
    constructor(spec) {
      this.spec = spec;
      this.props = {};
      if (spec.props)
        bindProps(spec.props, this, this.props);
      this.key = spec.key ? spec.key.key : createKey("plugin");
    }
    /**
    Extract the plugin's state field from an editor state.
    */
    getState(state) {
      return state[this.key];
    }
  };
  var keys = /* @__PURE__ */ Object.create(null);
  function createKey(name) {
    if (name in keys)
      return name + "$" + ++keys[name];
    keys[name] = 0;
    return name + "$";
  }
  var PluginKey = class {
    /**
    Create a plugin key.
    */
    constructor(name = "key") {
      this.key = createKey(name);
    }
    /**
    Get the active plugin with this key, if any, from an editor
    state.
    */
    get(state) {
      return state.config.pluginsByKey[this.key];
    }
    /**
    Get the plugin's state from an editor state.
    */
    getState(state) {
      return state[this.key];
    }
  };

  // node_modules/prosemirror-view/dist/index.js
  var domIndex = function(node) {
    for (var index = 0; ; index++) {
      node = node.previousSibling;
      if (!node)
        return index;
    }
  };
  var parentNode = function(node) {
    let parent = node.assignedSlot || node.parentNode;
    return parent && parent.nodeType == 11 ? parent.host : parent;
  };
  var reusedRange = null;
  var textRange = function(node, from2, to2) {
    let range = reusedRange || (reusedRange = document.createRange());
    range.setEnd(node, to2 == null ? node.nodeValue.length : to2);
    range.setStart(node, from2 || 0);
    return range;
  };
  var clearReusedRange = function() {
    reusedRange = null;
  };
  var isEquivalentPosition = function(node, off, targetNode, targetOff) {
    return targetNode && (scanFor(node, off, targetNode, targetOff, -1) || scanFor(node, off, targetNode, targetOff, 1));
  };
  var atomElements = /^(img|br|input|textarea|hr)$/i;
  function scanFor(node, off, targetNode, targetOff, dir) {
    var _a;
    for (; ; ) {
      if (node == targetNode && off == targetOff)
        return true;
      if (off == (dir < 0 ? 0 : nodeSize(node))) {
        let parent = node.parentNode;
        if (!parent || parent.nodeType != 1 || hasBlockDesc(node) || atomElements.test(node.nodeName) || node.contentEditable == "false")
          return false;
        off = domIndex(node) + (dir < 0 ? 0 : 1);
        node = parent;
      } else if (node.nodeType == 1) {
        let child = node.childNodes[off + (dir < 0 ? -1 : 0)];
        if (child.nodeType == 1 && child.contentEditable == "false") {
          if ((_a = child.pmViewDesc) === null || _a === void 0 ? void 0 : _a.ignoreForSelection)
            off += dir;
          else
            return false;
        } else {
          node = child;
          off = dir < 0 ? nodeSize(node) : 0;
        }
      } else {
        return false;
      }
    }
  }
  function nodeSize(node) {
    return node.nodeType == 3 ? node.nodeValue.length : node.childNodes.length;
  }
  function textNodeBefore$1(node, offset) {
    for (; ; ) {
      if (node.nodeType == 3 && offset)
        return node;
      if (node.nodeType == 1 && offset > 0) {
        if (node.contentEditable == "false")
          return null;
        node = node.childNodes[offset - 1];
        offset = nodeSize(node);
      } else if (node.parentNode && !hasBlockDesc(node)) {
        offset = domIndex(node);
        node = node.parentNode;
      } else {
        return null;
      }
    }
  }
  function textNodeAfter$1(node, offset) {
    for (; ; ) {
      if (node.nodeType == 3 && offset < node.nodeValue.length)
        return node;
      if (node.nodeType == 1 && offset < node.childNodes.length) {
        if (node.contentEditable == "false")
          return null;
        node = node.childNodes[offset];
        offset = 0;
      } else if (node.parentNode && !hasBlockDesc(node)) {
        offset = domIndex(node) + 1;
        node = node.parentNode;
      } else {
        return null;
      }
    }
  }
  function isOnEdge(node, offset, parent) {
    for (let atStart = offset == 0, atEnd = offset == nodeSize(node); atStart || atEnd; ) {
      if (node == parent)
        return true;
      let index = domIndex(node);
      node = node.parentNode;
      if (!node)
        return false;
      atStart = atStart && index == 0;
      atEnd = atEnd && index == nodeSize(node);
    }
  }
  function hasBlockDesc(dom) {
    let desc;
    for (let cur = dom; cur; cur = cur.parentNode)
      if (desc = cur.pmViewDesc)
        break;
    return desc && desc.node && desc.node.isBlock && (desc.dom == dom || desc.contentDOM == dom);
  }
  var selectionCollapsed = function(domSel) {
    return domSel.focusNode && isEquivalentPosition(domSel.focusNode, domSel.focusOffset, domSel.anchorNode, domSel.anchorOffset);
  };
  function keyEvent(keyCode, key) {
    let event = document.createEvent("Event");
    event.initEvent("keydown", true, true);
    event.keyCode = keyCode;
    event.key = event.code = key;
    return event;
  }
  function deepActiveElement(doc3) {
    let elt = doc3.activeElement;
    while (elt && elt.shadowRoot)
      elt = elt.shadowRoot.activeElement;
    return elt;
  }
  function caretFromPoint(doc3, x, y) {
    if (doc3.caretPositionFromPoint) {
      try {
        let pos = doc3.caretPositionFromPoint(x, y);
        if (pos)
          return { node: pos.offsetNode, offset: Math.min(nodeSize(pos.offsetNode), pos.offset) };
      } catch (_2) {
      }
    }
    if (doc3.caretRangeFromPoint) {
      let range = doc3.caretRangeFromPoint(x, y);
      if (range)
        return { node: range.startContainer, offset: Math.min(nodeSize(range.startContainer), range.startOffset) };
    }
  }
  var nav = typeof navigator != "undefined" ? navigator : null;
  var doc2 = typeof document != "undefined" ? document : null;
  var agent = nav && nav.userAgent || "";
  var ie_edge = /Edge\/(\d+)/.exec(agent);
  var ie_upto10 = /MSIE \d/.exec(agent);
  var ie_11up = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(agent);
  var ie = !!(ie_upto10 || ie_11up || ie_edge);
  var ie_version = ie_upto10 ? document.documentMode : ie_11up ? +ie_11up[1] : ie_edge ? +ie_edge[1] : 0;
  var gecko = !ie && /gecko\/(\d+)/i.test(agent);
  gecko && +(/Firefox\/(\d+)/.exec(agent) || [0, 0])[1];
  var _chrome = !ie && /Chrome\/(\d+)/.exec(agent);
  var chrome2 = !!_chrome;
  var chrome_version = _chrome ? +_chrome[1] : 0;
  var safari = !ie && !!nav && /Apple Computer/.test(nav.vendor);
  var ios = safari && (/Mobile\/\w+/.test(agent) || !!nav && nav.maxTouchPoints > 2);
  var mac = ios || (nav ? /Mac/.test(nav.platform) : false);
  var windows = nav ? /Win/.test(nav.platform) : false;
  var android = /Android \d/.test(agent);
  var webkit = !!doc2 && "webkitFontSmoothing" in doc2.documentElement.style;
  var webkit_version = webkit ? +(/\bAppleWebKit\/(\d+)/.exec(navigator.userAgent) || [0, 0])[1] : 0;
  function windowRect(doc3) {
    let vp = doc3.defaultView && doc3.defaultView.visualViewport;
    if (vp)
      return {
        left: 0,
        right: vp.width,
        top: 0,
        bottom: vp.height
      };
    return {
      left: 0,
      right: doc3.documentElement.clientWidth,
      top: 0,
      bottom: doc3.documentElement.clientHeight
    };
  }
  function getSide(value, side) {
    return typeof value == "number" ? value : value[side];
  }
  function clientRect(node) {
    let rect = node.getBoundingClientRect();
    let scaleX = rect.width / node.offsetWidth || 1;
    let scaleY = rect.height / node.offsetHeight || 1;
    return {
      left: rect.left,
      right: rect.left + node.clientWidth * scaleX,
      top: rect.top,
      bottom: rect.top + node.clientHeight * scaleY
    };
  }
  function scrollRectIntoView(view2, rect, startDOM) {
    let scrollThreshold = view2.someProp("scrollThreshold") || 0, scrollMargin = view2.someProp("scrollMargin") || 5;
    let doc3 = view2.dom.ownerDocument;
    for (let parent = startDOM || view2.dom; ; ) {
      if (!parent)
        break;
      if (parent.nodeType != 1) {
        parent = parentNode(parent);
        continue;
      }
      let elt = parent;
      let atTop = elt == doc3.body;
      let bounding = atTop ? windowRect(doc3) : clientRect(elt);
      let moveX = 0, moveY = 0;
      if (rect.top < bounding.top + getSide(scrollThreshold, "top"))
        moveY = -(bounding.top - rect.top + getSide(scrollMargin, "top"));
      else if (rect.bottom > bounding.bottom - getSide(scrollThreshold, "bottom"))
        moveY = rect.bottom - rect.top > bounding.bottom - bounding.top ? rect.top + getSide(scrollMargin, "top") - bounding.top : rect.bottom - bounding.bottom + getSide(scrollMargin, "bottom");
      if (rect.left < bounding.left + getSide(scrollThreshold, "left"))
        moveX = -(bounding.left - rect.left + getSide(scrollMargin, "left"));
      else if (rect.right > bounding.right - getSide(scrollThreshold, "right"))
        moveX = rect.right - bounding.right + getSide(scrollMargin, "right");
      if (moveX || moveY) {
        if (atTop) {
          doc3.defaultView.scrollBy(moveX, moveY);
        } else {
          let startX = elt.scrollLeft, startY = elt.scrollTop;
          if (moveY)
            elt.scrollTop += moveY;
          if (moveX)
            elt.scrollLeft += moveX;
          let dX = elt.scrollLeft - startX, dY = elt.scrollTop - startY;
          rect = { left: rect.left - dX, top: rect.top - dY, right: rect.right - dX, bottom: rect.bottom - dY };
        }
      }
      let pos = atTop ? "fixed" : getComputedStyle(parent).position;
      if (/^(fixed|sticky)$/.test(pos))
        break;
      parent = pos == "absolute" ? parent.offsetParent : parentNode(parent);
    }
  }
  function storeScrollPos(view2) {
    let rect = view2.dom.getBoundingClientRect(), startY = Math.max(0, rect.top);
    let refDOM, refTop;
    for (let x = (rect.left + rect.right) / 2, y = startY + 1; y < Math.min(innerHeight, rect.bottom); y += 5) {
      let dom = view2.root.elementFromPoint(x, y);
      if (!dom || dom == view2.dom || !view2.dom.contains(dom))
        continue;
      let localRect = dom.getBoundingClientRect();
      if (localRect.top >= startY - 20) {
        refDOM = dom;
        refTop = localRect.top;
        break;
      }
    }
    return { refDOM, refTop, stack: scrollStack(view2.dom) };
  }
  function scrollStack(dom) {
    let stack = [], doc3 = dom.ownerDocument;
    for (let cur = dom; cur; cur = parentNode(cur)) {
      stack.push({ dom: cur, top: cur.scrollTop, left: cur.scrollLeft });
      if (dom == doc3)
        break;
    }
    return stack;
  }
  function resetScrollPos({ refDOM, refTop, stack }) {
    let newRefTop = refDOM ? refDOM.getBoundingClientRect().top : 0;
    restoreScrollStack(stack, newRefTop == 0 ? 0 : newRefTop - refTop);
  }
  function restoreScrollStack(stack, dTop) {
    for (let i = 0; i < stack.length; i++) {
      let { dom, top, left } = stack[i];
      if (dom.scrollTop != top + dTop)
        dom.scrollTop = top + dTop;
      if (dom.scrollLeft != left)
        dom.scrollLeft = left;
    }
  }
  var preventScrollSupported = null;
  function focusPreventScroll(dom) {
    if (dom.setActive)
      return dom.setActive();
    if (preventScrollSupported)
      return dom.focus(preventScrollSupported);
    let stored = scrollStack(dom);
    dom.focus(preventScrollSupported == null ? {
      get preventScroll() {
        preventScrollSupported = { preventScroll: true };
        return true;
      }
    } : void 0);
    if (!preventScrollSupported) {
      preventScrollSupported = false;
      restoreScrollStack(stored, 0);
    }
  }
  function findOffsetInNode(node, coords) {
    let closest, dxClosest = 2e8, coordsClosest, offset = 0;
    let rowBot = coords.top, rowTop = coords.top;
    let firstBelow, coordsBelow;
    for (let child = node.firstChild, childIndex = 0; child; child = child.nextSibling, childIndex++) {
      let rects;
      if (child.nodeType == 1)
        rects = child.getClientRects();
      else if (child.nodeType == 3)
        rects = textRange(child).getClientRects();
      else
        continue;
      for (let i = 0; i < rects.length; i++) {
        let rect = rects[i];
        if (rect.top <= rowBot && rect.bottom >= rowTop) {
          rowBot = Math.max(rect.bottom, rowBot);
          rowTop = Math.min(rect.top, rowTop);
          let dx = rect.left > coords.left ? rect.left - coords.left : rect.right < coords.left ? coords.left - rect.right : 0;
          if (dx < dxClosest) {
            closest = child;
            dxClosest = dx;
            coordsClosest = dx && closest.nodeType == 3 ? {
              left: rect.right < coords.left ? rect.right : rect.left,
              top: coords.top
            } : coords;
            if (child.nodeType == 1 && dx)
              offset = childIndex + (coords.left >= (rect.left + rect.right) / 2 ? 1 : 0);
            continue;
          }
        } else if (rect.top > coords.top && !firstBelow && rect.left <= coords.left && rect.right >= coords.left) {
          firstBelow = child;
          coordsBelow = { left: Math.max(rect.left, Math.min(rect.right, coords.left)), top: rect.top };
        }
        if (!closest && (coords.left >= rect.right && coords.top >= rect.top || coords.left >= rect.left && coords.top >= rect.bottom))
          offset = childIndex + 1;
      }
    }
    if (!closest && firstBelow) {
      closest = firstBelow;
      coordsClosest = coordsBelow;
      dxClosest = 0;
    }
    if (closest && closest.nodeType == 3)
      return findOffsetInText(closest, coordsClosest);
    if (!closest || dxClosest && closest.nodeType == 1)
      return { node, offset };
    return findOffsetInNode(closest, coordsClosest);
  }
  function findOffsetInText(node, coords) {
    let len = node.nodeValue.length;
    let range = document.createRange();
    for (let i = 0; i < len; i++) {
      range.setEnd(node, i + 1);
      range.setStart(node, i);
      let rect = singleRect(range, 1);
      if (rect.top == rect.bottom)
        continue;
      if (inRect(coords, rect))
        return { node, offset: i + (coords.left >= (rect.left + rect.right) / 2 ? 1 : 0) };
    }
    return { node, offset: 0 };
  }
  function inRect(coords, rect) {
    return coords.left >= rect.left - 1 && coords.left <= rect.right + 1 && coords.top >= rect.top - 1 && coords.top <= rect.bottom + 1;
  }
  function targetKludge(dom, coords) {
    let parent = dom.parentNode;
    if (parent && /^li$/i.test(parent.nodeName) && coords.left < dom.getBoundingClientRect().left)
      return parent;
    return dom;
  }
  function posFromElement(view2, elt, coords) {
    let { node, offset } = findOffsetInNode(elt, coords), bias = -1;
    if (node.nodeType == 1 && !node.firstChild) {
      let rect = node.getBoundingClientRect();
      bias = rect.left != rect.right && coords.left > (rect.left + rect.right) / 2 ? 1 : -1;
    }
    return view2.docView.posFromDOM(node, offset, bias);
  }
  function posFromCaret(view2, node, offset, coords) {
    let outsideBlock = -1;
    for (let cur = node, sawBlock = false; ; ) {
      if (cur == view2.dom)
        break;
      let desc = view2.docView.nearestDesc(cur, true), rect;
      if (!desc)
        return null;
      if (desc.dom.nodeType == 1 && (desc.node.isBlock && desc.parent || !desc.contentDOM) && // Ignore elements with zero-size bounding rectangles
      ((rect = desc.dom.getBoundingClientRect()).width || rect.height)) {
        if (desc.node.isBlock && desc.parent && !/^T(R|BODY|HEAD|FOOT)$/.test(desc.dom.nodeName)) {
          if (!sawBlock && rect.left > coords.left || rect.top > coords.top)
            outsideBlock = desc.posBefore;
          else if (!sawBlock && rect.right < coords.left || rect.bottom < coords.top)
            outsideBlock = desc.posAfter;
          sawBlock = true;
        }
        if (!desc.contentDOM && outsideBlock < 0 && !desc.node.isText) {
          let before = desc.node.isBlock ? coords.top < (rect.top + rect.bottom) / 2 : coords.left < (rect.left + rect.right) / 2;
          return before ? desc.posBefore : desc.posAfter;
        }
      }
      cur = desc.dom.parentNode;
    }
    return outsideBlock > -1 ? outsideBlock : view2.docView.posFromDOM(node, offset, -1);
  }
  function elementFromPoint(element, coords, box) {
    let len = element.childNodes.length;
    if (len && box.top < box.bottom) {
      for (let startI = Math.max(0, Math.min(len - 1, Math.floor(len * (coords.top - box.top) / (box.bottom - box.top)) - 2)), i = startI; ; ) {
        let child = element.childNodes[i];
        if (child.nodeType == 1) {
          let rects = child.getClientRects();
          for (let j2 = 0; j2 < rects.length; j2++) {
            let rect = rects[j2];
            if (inRect(coords, rect))
              return elementFromPoint(child, coords, rect);
          }
        }
        if ((i = (i + 1) % len) == startI)
          break;
      }
    }
    return element;
  }
  function posAtCoords(view2, coords) {
    let doc3 = view2.dom.ownerDocument, node, offset = 0;
    let caret = caretFromPoint(doc3, coords.left, coords.top);
    if (caret)
      ({ node, offset } = caret);
    let elt = (view2.root.elementFromPoint ? view2.root : doc3).elementFromPoint(coords.left, coords.top);
    let pos;
    if (!elt || !view2.dom.contains(elt.nodeType != 1 ? elt.parentNode : elt)) {
      let box = view2.dom.getBoundingClientRect();
      if (!inRect(coords, box))
        return null;
      elt = elementFromPoint(view2.dom, coords, box);
      if (!elt)
        return null;
    }
    if (safari) {
      for (let p = elt; node && p; p = parentNode(p))
        if (p.draggable)
          node = void 0;
    }
    elt = targetKludge(elt, coords);
    if (node) {
      if (gecko && node.nodeType == 1) {
        offset = Math.min(offset, node.childNodes.length);
        if (offset < node.childNodes.length) {
          let next = node.childNodes[offset], box;
          if (next.nodeName == "IMG" && (box = next.getBoundingClientRect()).right <= coords.left && box.bottom > coords.top)
            offset++;
        }
      }
      let prev;
      if (webkit && offset && node.nodeType == 1 && (prev = node.childNodes[offset - 1]).nodeType == 1 && prev.contentEditable == "false" && prev.getBoundingClientRect().top >= coords.top)
        offset--;
      if (node == view2.dom && offset == node.childNodes.length - 1 && node.lastChild.nodeType == 1 && coords.top > node.lastChild.getBoundingClientRect().bottom)
        pos = view2.state.doc.content.size;
      else if (offset == 0 || node.nodeType != 1 || node.childNodes[offset - 1].nodeName != "BR")
        pos = posFromCaret(view2, node, offset, coords);
    }
    if (pos == null)
      pos = posFromElement(view2, elt, coords);
    let desc = view2.docView.nearestDesc(elt, true);
    return { pos, inside: desc ? desc.posAtStart - desc.border : -1 };
  }
  function nonZero(rect) {
    return rect.top < rect.bottom || rect.left < rect.right;
  }
  function singleRect(target, bias) {
    let rects = target.getClientRects();
    if (rects.length) {
      let first = rects[bias < 0 ? 0 : rects.length - 1];
      if (nonZero(first))
        return first;
    }
    return Array.prototype.find.call(rects, nonZero) || target.getBoundingClientRect();
  }
  var BIDI = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/;
  function coordsAtPos(view2, pos, side) {
    let { node, offset, atom } = view2.docView.domFromPos(pos, side < 0 ? -1 : 1);
    let supportEmptyRange = webkit || gecko;
    if (node.nodeType == 3) {
      if (supportEmptyRange && (BIDI.test(node.nodeValue) || (side < 0 ? !offset : offset == node.nodeValue.length))) {
        let rect = singleRect(textRange(node, offset, offset), side);
        if (gecko && offset && /\s/.test(node.nodeValue[offset - 1]) && offset < node.nodeValue.length) {
          let rectBefore = singleRect(textRange(node, offset - 1, offset - 1), -1);
          if (rectBefore.top == rect.top) {
            let rectAfter = singleRect(textRange(node, offset, offset + 1), -1);
            if (rectAfter.top != rect.top)
              return flattenV(rectAfter, rectAfter.left < rectBefore.left);
          }
        }
        return rect;
      } else {
        let from2 = offset, to2 = offset, takeSide = side < 0 ? 1 : -1;
        if (side < 0 && !offset) {
          to2++;
          takeSide = -1;
        } else if (side >= 0 && offset == node.nodeValue.length) {
          from2--;
          takeSide = 1;
        } else if (side < 0) {
          from2--;
        } else {
          to2++;
        }
        return flattenV(singleRect(textRange(node, from2, to2), takeSide), takeSide < 0);
      }
    }
    let $dom = view2.state.doc.resolve(pos - (atom || 0));
    if (!$dom.parent.inlineContent) {
      if (atom == null && offset && (side < 0 || offset == nodeSize(node))) {
        let before = node.childNodes[offset - 1];
        if (before.nodeType == 1)
          return flattenH(before.getBoundingClientRect(), false);
      }
      if (atom == null && offset < nodeSize(node)) {
        let after = node.childNodes[offset];
        if (after.nodeType == 1)
          return flattenH(after.getBoundingClientRect(), true);
      }
      return flattenH(node.getBoundingClientRect(), side >= 0);
    }
    if (atom == null && offset && (side < 0 || offset == nodeSize(node))) {
      let before = node.childNodes[offset - 1];
      let target = before.nodeType == 3 ? textRange(before, nodeSize(before) - (supportEmptyRange ? 0 : 1)) : before.nodeType == 1 && (before.nodeName != "BR" || !before.nextSibling) ? before : null;
      if (target)
        return flattenV(singleRect(target, 1), false);
    }
    if (atom == null && offset < nodeSize(node)) {
      let after = node.childNodes[offset];
      while (after.pmViewDesc && after.pmViewDesc.ignoreForCoords)
        after = after.nextSibling;
      let target = !after ? null : after.nodeType == 3 ? textRange(after, 0, supportEmptyRange ? 0 : 1) : after.nodeType == 1 ? after : null;
      if (target)
        return flattenV(singleRect(target, -1), true);
    }
    return flattenV(singleRect(node.nodeType == 3 ? textRange(node) : node, -side), side >= 0);
  }
  function flattenV(rect, left) {
    if (rect.width == 0)
      return rect;
    let x = left ? rect.left : rect.right;
    return { top: rect.top, bottom: rect.bottom, left: x, right: x };
  }
  function flattenH(rect, top) {
    if (rect.height == 0)
      return rect;
    let y = top ? rect.top : rect.bottom;
    return { top: y, bottom: y, left: rect.left, right: rect.right };
  }
  function withFlushedState(view2, state, f) {
    let viewState = view2.state, active = view2.root.activeElement;
    if (viewState != state)
      view2.updateState(state);
    if (active != view2.dom)
      view2.focus();
    try {
      return f();
    } finally {
      if (viewState != state)
        view2.updateState(viewState);
      if (active != view2.dom && active)
        active.focus();
    }
  }
  function endOfTextblockVertical(view2, state, dir) {
    let sel = state.selection;
    let $pos = dir == "up" ? sel.$from : sel.$to;
    return withFlushedState(view2, state, () => {
      let { node: dom } = view2.docView.domFromPos($pos.pos, dir == "up" ? -1 : 1);
      for (; ; ) {
        let nearest = view2.docView.nearestDesc(dom, true);
        if (!nearest)
          break;
        if (nearest.node.isBlock) {
          dom = nearest.contentDOM || nearest.dom;
          break;
        }
        dom = nearest.dom.parentNode;
      }
      let coords = coordsAtPos(view2, $pos.pos, 1);
      for (let child = dom.firstChild; child; child = child.nextSibling) {
        let boxes;
        if (child.nodeType == 1)
          boxes = child.getClientRects();
        else if (child.nodeType == 3)
          boxes = textRange(child, 0, child.nodeValue.length).getClientRects();
        else
          continue;
        for (let i = 0; i < boxes.length; i++) {
          let box = boxes[i];
          if (box.bottom > box.top + 1 && (dir == "up" ? coords.top - box.top > (box.bottom - coords.top) * 2 : box.bottom - coords.bottom > (coords.bottom - box.top) * 2))
            return false;
        }
      }
      return true;
    });
  }
  var maybeRTL = /[\u0590-\u08ac]/;
  function endOfTextblockHorizontal(view2, state, dir) {
    let { $head } = state.selection;
    if (!$head.parent.isTextblock)
      return false;
    let offset = $head.parentOffset, atStart = !offset, atEnd = offset == $head.parent.content.size;
    let sel = view2.domSelection();
    if (!sel)
      return $head.pos == $head.start() || $head.pos == $head.end();
    if (!maybeRTL.test($head.parent.textContent) || !sel.modify)
      return dir == "left" || dir == "backward" ? atStart : atEnd;
    return withFlushedState(view2, state, () => {
      let { focusNode: oldNode, focusOffset: oldOff, anchorNode, anchorOffset } = view2.domSelectionRange();
      let oldBidiLevel = sel.caretBidiLevel;
      sel.modify("move", dir, "character");
      let parentDOM = $head.depth ? view2.docView.domAfterPos($head.before()) : view2.dom;
      let { focusNode: newNode, focusOffset: newOff } = view2.domSelectionRange();
      let result = newNode && !parentDOM.contains(newNode.nodeType == 1 ? newNode : newNode.parentNode) || oldNode == newNode && oldOff == newOff;
      try {
        sel.collapse(anchorNode, anchorOffset);
        if (oldNode && (oldNode != anchorNode || oldOff != anchorOffset) && sel.extend)
          sel.extend(oldNode, oldOff);
      } catch (_2) {
      }
      if (oldBidiLevel != null)
        sel.caretBidiLevel = oldBidiLevel;
      return result;
    });
  }
  var cachedState = null;
  var cachedDir = null;
  var cachedResult = false;
  function endOfTextblock(view2, state, dir) {
    if (cachedState == state && cachedDir == dir)
      return cachedResult;
    cachedState = state;
    cachedDir = dir;
    return cachedResult = dir == "up" || dir == "down" ? endOfTextblockVertical(view2, state, dir) : endOfTextblockHorizontal(view2, state, dir);
  }
  var NOT_DIRTY = 0;
  var CHILD_DIRTY = 1;
  var CONTENT_DIRTY = 2;
  var NODE_DIRTY = 3;
  var ViewDesc = class {
    constructor(parent, children, dom, contentDOM) {
      this.parent = parent;
      this.children = children;
      this.dom = dom;
      this.contentDOM = contentDOM;
      this.dirty = NOT_DIRTY;
      dom.pmViewDesc = this;
    }
    // Used to check whether a given description corresponds to a
    // widget/mark/node.
    matchesWidget(widget) {
      return false;
    }
    matchesMark(mark) {
      return false;
    }
    matchesNode(node, outerDeco, innerDeco) {
      return false;
    }
    matchesHack(nodeName) {
      return false;
    }
    // When parsing in-editor content (in domchange.js), we allow
    // descriptions to determine the parse rules that should be used to
    // parse them.
    parseRule() {
      return null;
    }
    // Used by the editor's event handler to ignore events that come
    // from certain descs.
    stopEvent(event) {
      return false;
    }
    // The size of the content represented by this desc.
    get size() {
      let size = 0;
      for (let i = 0; i < this.children.length; i++)
        size += this.children[i].size;
      return size;
    }
    // For block nodes, this represents the space taken up by their
    // start/end tokens.
    get border() {
      return 0;
    }
    destroy() {
      this.parent = void 0;
      if (this.dom.pmViewDesc == this)
        this.dom.pmViewDesc = void 0;
      for (let i = 0; i < this.children.length; i++)
        this.children[i].destroy();
    }
    posBeforeChild(child) {
      for (let i = 0, pos = this.posAtStart; ; i++) {
        let cur = this.children[i];
        if (cur == child)
          return pos;
        pos += cur.size;
      }
    }
    get posBefore() {
      return this.parent.posBeforeChild(this);
    }
    get posAtStart() {
      return this.parent ? this.parent.posBeforeChild(this) + this.border : 0;
    }
    get posAfter() {
      return this.posBefore + this.size;
    }
    get posAtEnd() {
      return this.posAtStart + this.size - 2 * this.border;
    }
    localPosFromDOM(dom, offset, bias) {
      if (this.contentDOM && this.contentDOM.contains(dom.nodeType == 1 ? dom : dom.parentNode)) {
        if (bias < 0) {
          let domBefore, desc;
          if (dom == this.contentDOM) {
            domBefore = dom.childNodes[offset - 1];
          } else {
            while (dom.parentNode != this.contentDOM)
              dom = dom.parentNode;
            domBefore = dom.previousSibling;
          }
          while (domBefore && !((desc = domBefore.pmViewDesc) && desc.parent == this))
            domBefore = domBefore.previousSibling;
          return domBefore ? this.posBeforeChild(desc) + desc.size : this.posAtStart;
        } else {
          let domAfter, desc;
          if (dom == this.contentDOM) {
            domAfter = dom.childNodes[offset];
          } else {
            while (dom.parentNode != this.contentDOM)
              dom = dom.parentNode;
            domAfter = dom.nextSibling;
          }
          while (domAfter && !((desc = domAfter.pmViewDesc) && desc.parent == this))
            domAfter = domAfter.nextSibling;
          return domAfter ? this.posBeforeChild(desc) : this.posAtEnd;
        }
      }
      let atEnd;
      if (dom == this.dom && this.contentDOM) {
        atEnd = offset > domIndex(this.contentDOM);
      } else if (this.contentDOM && this.contentDOM != this.dom && this.dom.contains(this.contentDOM)) {
        atEnd = dom.compareDocumentPosition(this.contentDOM) & 2;
      } else if (this.dom.firstChild) {
        if (offset == 0)
          for (let search = dom; ; search = search.parentNode) {
            if (search == this.dom) {
              atEnd = false;
              break;
            }
            if (search.previousSibling)
              break;
          }
        if (atEnd == null && offset == dom.childNodes.length)
          for (let search = dom; ; search = search.parentNode) {
            if (search == this.dom) {
              atEnd = true;
              break;
            }
            if (search.nextSibling)
              break;
          }
      }
      return (atEnd == null ? bias > 0 : atEnd) ? this.posAtEnd : this.posAtStart;
    }
    nearestDesc(dom, onlyNodes = false) {
      for (let first = true, cur = dom; cur; cur = cur.parentNode) {
        let desc = this.getDesc(cur), nodeDOM;
        if (desc && (!onlyNodes || desc.node)) {
          if (first && (nodeDOM = desc.nodeDOM) && !(nodeDOM.nodeType == 1 ? nodeDOM.contains(dom.nodeType == 1 ? dom : dom.parentNode) : nodeDOM == dom))
            first = false;
          else
            return desc;
        }
      }
    }
    getDesc(dom) {
      let desc = dom.pmViewDesc;
      for (let cur = desc; cur; cur = cur.parent)
        if (cur == this)
          return desc;
    }
    posFromDOM(dom, offset, bias) {
      for (let scan = dom; scan; scan = scan.parentNode) {
        let desc = this.getDesc(scan);
        if (desc)
          return desc.localPosFromDOM(dom, offset, bias);
      }
      return -1;
    }
    // Find the desc for the node after the given pos, if any. (When a
    // parent node overrode rendering, there might not be one.)
    descAt(pos) {
      for (let i = 0, offset = 0; i < this.children.length; i++) {
        let child = this.children[i], end = offset + child.size;
        if (offset == pos && end != offset) {
          while (!child.border && child.children.length) {
            for (let i2 = 0; i2 < child.children.length; i2++) {
              let inner = child.children[i2];
              if (inner.size) {
                child = inner;
                break;
              }
            }
          }
          return child;
        }
        if (pos < end)
          return child.descAt(pos - offset - child.border);
        offset = end;
      }
    }
    domFromPos(pos, side) {
      if (!this.contentDOM)
        return { node: this.dom, offset: 0, atom: pos + 1 };
      let i = 0, offset = 0;
      for (let curPos = 0; i < this.children.length; i++) {
        let child = this.children[i], end = curPos + child.size;
        if (end > pos || child instanceof TrailingHackViewDesc) {
          offset = pos - curPos;
          break;
        }
        curPos = end;
      }
      if (offset)
        return this.children[i].domFromPos(offset - this.children[i].border, side);
      for (let prev; i && !(prev = this.children[i - 1]).size && prev instanceof WidgetViewDesc && prev.side >= 0; i--) {
      }
      if (side <= 0) {
        let prev, enter = true;
        for (; ; i--, enter = false) {
          prev = i ? this.children[i - 1] : null;
          if (!prev || prev.dom.parentNode == this.contentDOM)
            break;
        }
        if (prev && side && enter && !prev.border && !prev.domAtom)
          return prev.domFromPos(prev.size, side);
        return { node: this.contentDOM, offset: prev ? domIndex(prev.dom) + 1 : 0 };
      } else {
        let next, enter = true;
        for (; ; i++, enter = false) {
          next = i < this.children.length ? this.children[i] : null;
          if (!next || next.dom.parentNode == this.contentDOM)
            break;
        }
        if (next && enter && !next.border && !next.domAtom)
          return next.domFromPos(0, side);
        return { node: this.contentDOM, offset: next ? domIndex(next.dom) : this.contentDOM.childNodes.length };
      }
    }
    // Used to find a DOM range in a single parent for a given changed
    // range.
    parseRange(from2, to2, base2 = 0) {
      if (this.children.length == 0)
        return { node: this.contentDOM, from: from2, to: to2, fromOffset: 0, toOffset: this.contentDOM.childNodes.length };
      let fromOffset = -1, toOffset = -1;
      for (let offset = base2, i = 0; ; i++) {
        let child = this.children[i], end = offset + child.size;
        if (fromOffset == -1 && from2 <= end) {
          let childBase = offset + child.border;
          if (from2 >= childBase && to2 <= end - child.border && child.node && child.contentDOM && this.contentDOM.contains(child.contentDOM))
            return child.parseRange(from2, to2, childBase);
          from2 = offset;
          for (let j2 = i; j2 > 0; j2--) {
            let prev = this.children[j2 - 1];
            if (prev.size && prev.dom.parentNode == this.contentDOM && !prev.emptyChildAt(1)) {
              fromOffset = domIndex(prev.dom) + 1;
              break;
            }
            from2 -= prev.size;
          }
          if (fromOffset == -1)
            fromOffset = 0;
        }
        if (fromOffset > -1 && (end > to2 || i == this.children.length - 1)) {
          to2 = end;
          for (let j2 = i + 1; j2 < this.children.length; j2++) {
            let next = this.children[j2];
            if (next.size && next.dom.parentNode == this.contentDOM && !next.emptyChildAt(-1)) {
              toOffset = domIndex(next.dom);
              break;
            }
            to2 += next.size;
          }
          if (toOffset == -1)
            toOffset = this.contentDOM.childNodes.length;
          break;
        }
        offset = end;
      }
      return { node: this.contentDOM, from: from2, to: to2, fromOffset, toOffset };
    }
    emptyChildAt(side) {
      if (this.border || !this.contentDOM || !this.children.length)
        return false;
      let child = this.children[side < 0 ? 0 : this.children.length - 1];
      return child.size == 0 || child.emptyChildAt(side);
    }
    domAfterPos(pos) {
      let { node, offset } = this.domFromPos(pos, 0);
      if (node.nodeType != 1 || offset == node.childNodes.length)
        throw new RangeError("No node after pos " + pos);
      return node.childNodes[offset];
    }
    // View descs are responsible for setting any selection that falls
    // entirely inside of them, so that custom implementations can do
    // custom things with the selection. Note that this falls apart when
    // a selection starts in such a node and ends in another, in which
    // case we just use whatever domFromPos produces as a best effort.
    setSelection(anchor, head, view2, force = false) {
      let from2 = Math.min(anchor, head), to2 = Math.max(anchor, head);
      for (let i = 0, offset = 0; i < this.children.length; i++) {
        let child = this.children[i], end = offset + child.size;
        if (from2 > offset && to2 < end)
          return child.setSelection(anchor - offset - child.border, head - offset - child.border, view2, force);
        offset = end;
      }
      let anchorDOM = this.domFromPos(anchor, anchor ? -1 : 1);
      let headDOM = head == anchor ? anchorDOM : this.domFromPos(head, head ? -1 : 1);
      let domSel = view2.root.getSelection();
      let selRange = view2.domSelectionRange();
      let brKludge = false;
      if ((gecko || safari) && anchor == head) {
        let { node, offset } = anchorDOM;
        if (node.nodeType == 3) {
          brKludge = !!(offset && node.nodeValue[offset - 1] == "\n");
          if (brKludge && offset == node.nodeValue.length) {
            for (let scan = node, after; scan; scan = scan.parentNode) {
              if (after = scan.nextSibling) {
                if (after.nodeName == "BR")
                  anchorDOM = headDOM = { node: after.parentNode, offset: domIndex(after) + 1 };
                break;
              }
              let desc = scan.pmViewDesc;
              if (desc && desc.node && desc.node.isBlock)
                break;
            }
          }
        } else {
          let prev = node.childNodes[offset - 1];
          brKludge = prev && (prev.nodeName == "BR" || prev.contentEditable == "false");
        }
      }
      if (gecko && selRange.focusNode && selRange.focusNode != headDOM.node && selRange.focusNode.nodeType == 1) {
        let after = selRange.focusNode.childNodes[selRange.focusOffset];
        if (after && after.contentEditable == "false")
          force = true;
      }
      if (!(force || brKludge && safari) && isEquivalentPosition(anchorDOM.node, anchorDOM.offset, selRange.anchorNode, selRange.anchorOffset) && isEquivalentPosition(headDOM.node, headDOM.offset, selRange.focusNode, selRange.focusOffset))
        return;
      let domSelExtended = false;
      if ((domSel.extend || anchor == head) && !brKludge) {
        domSel.collapse(anchorDOM.node, anchorDOM.offset);
        try {
          if (anchor != head)
            domSel.extend(headDOM.node, headDOM.offset);
          domSelExtended = true;
        } catch (_2) {
        }
      }
      if (!domSelExtended) {
        if (anchor > head) {
          let tmp = anchorDOM;
          anchorDOM = headDOM;
          headDOM = tmp;
        }
        let range = document.createRange();
        range.setEnd(headDOM.node, headDOM.offset);
        range.setStart(anchorDOM.node, anchorDOM.offset);
        domSel.removeAllRanges();
        domSel.addRange(range);
      }
    }
    ignoreMutation(mutation) {
      return !this.contentDOM && mutation.type != "selection";
    }
    get contentLost() {
      return this.contentDOM && this.contentDOM != this.dom && !this.dom.contains(this.contentDOM);
    }
    // Remove a subtree of the element tree that has been touched
    // by a DOM change, so that the next update will redraw it.
    markDirty(from2, to2) {
      for (let offset = 0, i = 0; i < this.children.length; i++) {
        let child = this.children[i], end = offset + child.size;
        if (offset == end ? from2 <= end && to2 >= offset : from2 < end && to2 > offset) {
          let startInside = offset + child.border, endInside = end - child.border;
          if (from2 >= startInside && to2 <= endInside) {
            this.dirty = from2 == offset || to2 == end ? CONTENT_DIRTY : CHILD_DIRTY;
            if (from2 == startInside && to2 == endInside && (child.contentLost || child.dom.parentNode != this.contentDOM))
              child.dirty = NODE_DIRTY;
            else
              child.markDirty(from2 - startInside, to2 - startInside);
            return;
          } else {
            child.dirty = child.dom == child.contentDOM && child.dom.parentNode == this.contentDOM && !child.children.length ? CONTENT_DIRTY : NODE_DIRTY;
          }
        }
        offset = end;
      }
      this.dirty = CONTENT_DIRTY;
    }
    markParentsDirty() {
      let level = 1;
      for (let node = this.parent; node; node = node.parent, level++) {
        let dirty = level == 1 ? CONTENT_DIRTY : CHILD_DIRTY;
        if (node.dirty < dirty)
          node.dirty = dirty;
      }
    }
    get domAtom() {
      return false;
    }
    get ignoreForCoords() {
      return false;
    }
    get ignoreForSelection() {
      return false;
    }
    isText(text) {
      return false;
    }
  };
  var WidgetViewDesc = class extends ViewDesc {
    constructor(parent, widget, view2, pos) {
      let self2, dom = widget.type.toDOM;
      if (typeof dom == "function")
        dom = dom(view2, () => {
          if (!self2)
            return pos;
          if (self2.parent)
            return self2.parent.posBeforeChild(self2);
        });
      if (!widget.type.spec.raw) {
        if (dom.nodeType != 1) {
          let wrap2 = document.createElement("span");
          wrap2.appendChild(dom);
          dom = wrap2;
        }
        dom.contentEditable = "false";
        dom.classList.add("ProseMirror-widget");
      }
      super(parent, [], dom, null);
      this.widget = widget;
      this.widget = widget;
      self2 = this;
    }
    matchesWidget(widget) {
      return this.dirty == NOT_DIRTY && widget.type.eq(this.widget.type);
    }
    parseRule() {
      return { ignore: true };
    }
    stopEvent(event) {
      let stop = this.widget.spec.stopEvent;
      return stop ? stop(event) : false;
    }
    ignoreMutation(mutation) {
      return mutation.type != "selection" || this.widget.spec.ignoreSelection;
    }
    destroy() {
      this.widget.type.destroy(this.dom);
      super.destroy();
    }
    get domAtom() {
      return true;
    }
    get ignoreForSelection() {
      return !!this.widget.type.spec.relaxedSide;
    }
    get side() {
      return this.widget.type.side;
    }
  };
  var CompositionViewDesc = class extends ViewDesc {
    constructor(parent, dom, textDOM, text) {
      super(parent, [], dom, null);
      this.textDOM = textDOM;
      this.text = text;
    }
    get size() {
      return this.text.length;
    }
    localPosFromDOM(dom, offset) {
      if (dom != this.textDOM)
        return this.posAtStart + (offset ? this.size : 0);
      return this.posAtStart + offset;
    }
    domFromPos(pos) {
      return { node: this.textDOM, offset: pos };
    }
    ignoreMutation(mut) {
      return mut.type === "characterData" && mut.target.nodeValue == mut.oldValue;
    }
  };
  var MarkViewDesc = class _MarkViewDesc extends ViewDesc {
    constructor(parent, mark, dom, contentDOM, spec) {
      super(parent, [], dom, contentDOM);
      this.mark = mark;
      this.spec = spec;
    }
    static create(parent, mark, inline, view2) {
      let custom = view2.nodeViews[mark.type.name];
      let spec = custom && custom(mark, view2, inline);
      if (!spec || !spec.dom)
        spec = DOMSerializer.renderSpec(document, mark.type.spec.toDOM(mark, inline), null, mark.attrs);
      return new _MarkViewDesc(parent, mark, spec.dom, spec.contentDOM || spec.dom, spec);
    }
    parseRule() {
      if (this.dirty & NODE_DIRTY || this.mark.type.spec.reparseInView)
        return null;
      return { mark: this.mark.type.name, attrs: this.mark.attrs, contentElement: this.contentDOM };
    }
    matchesMark(mark) {
      return this.dirty != NODE_DIRTY && this.mark.eq(mark);
    }
    markDirty(from2, to2) {
      super.markDirty(from2, to2);
      if (this.dirty != NOT_DIRTY) {
        let parent = this.parent;
        while (!parent.node)
          parent = parent.parent;
        if (parent.dirty < this.dirty)
          parent.dirty = this.dirty;
        this.dirty = NOT_DIRTY;
      }
    }
    slice(from2, to2, view2) {
      let copy2 = _MarkViewDesc.create(this.parent, this.mark, true, view2);
      let nodes2 = this.children, size = this.size;
      if (to2 < size)
        nodes2 = replaceNodes(nodes2, to2, size, view2);
      if (from2 > 0)
        nodes2 = replaceNodes(nodes2, 0, from2, view2);
      for (let i = 0; i < nodes2.length; i++)
        nodes2[i].parent = copy2;
      copy2.children = nodes2;
      return copy2;
    }
    ignoreMutation(mutation) {
      return this.spec.ignoreMutation ? this.spec.ignoreMutation(mutation) : super.ignoreMutation(mutation);
    }
    destroy() {
      if (this.spec.destroy)
        this.spec.destroy();
      super.destroy();
    }
  };
  var NodeViewDesc = class _NodeViewDesc extends ViewDesc {
    constructor(parent, node, outerDeco, innerDeco, dom, contentDOM, nodeDOM, view2, pos) {
      super(parent, [], dom, contentDOM);
      this.node = node;
      this.outerDeco = outerDeco;
      this.innerDeco = innerDeco;
      this.nodeDOM = nodeDOM;
    }
    // By default, a node is rendered using the `toDOM` method from the
    // node type spec. But client code can use the `nodeViews` spec to
    // supply a custom node view, which can influence various aspects of
    // the way the node works.
    //
    // (Using subclassing for this was intentionally decided against,
    // since it'd require exposing a whole slew of finicky
    // implementation details to the user code that they probably will
    // never need.)
    static create(parent, node, outerDeco, innerDeco, view2, pos) {
      let custom = view2.nodeViews[node.type.name], descObj;
      let spec = custom && custom(node, view2, () => {
        if (!descObj)
          return pos;
        if (descObj.parent)
          return descObj.parent.posBeforeChild(descObj);
      }, outerDeco, innerDeco);
      let dom = spec && spec.dom, contentDOM = spec && spec.contentDOM;
      if (node.isText) {
        if (!dom)
          dom = document.createTextNode(node.text);
        else if (dom.nodeType != 3)
          throw new RangeError("Text must be rendered as a DOM text node");
      } else if (!dom) {
        let spec2 = DOMSerializer.renderSpec(document, node.type.spec.toDOM(node), null, node.attrs);
        ({ dom, contentDOM } = spec2);
      }
      if (!contentDOM && !node.isText && dom.nodeName != "BR") {
        if (!dom.hasAttribute("contenteditable"))
          dom.contentEditable = "false";
        if (node.type.spec.draggable)
          dom.draggable = true;
      }
      let nodeDOM = dom;
      dom = applyOuterDeco(dom, outerDeco, node);
      if (spec)
        return descObj = new CustomNodeViewDesc(parent, node, outerDeco, innerDeco, dom, contentDOM || null, nodeDOM, spec, view2, pos + 1);
      else if (node.isText)
        return new TextViewDesc(parent, node, outerDeco, innerDeco, dom, nodeDOM, view2);
      else
        return new _NodeViewDesc(parent, node, outerDeco, innerDeco, dom, contentDOM || null, nodeDOM, view2, pos + 1);
    }
    parseRule() {
      if (this.node.type.spec.reparseInView)
        return null;
      let rule = { node: this.node.type.name, attrs: this.node.attrs };
      if (this.node.type.whitespace == "pre")
        rule.preserveWhitespace = "full";
      if (!this.contentDOM) {
        rule.getContent = () => this.node.content;
      } else if (!this.contentLost) {
        rule.contentElement = this.contentDOM;
      } else {
        for (let i = this.children.length - 1; i >= 0; i--) {
          let child = this.children[i];
          if (this.dom.contains(child.dom.parentNode)) {
            rule.contentElement = child.dom.parentNode;
            break;
          }
        }
        if (!rule.contentElement)
          rule.getContent = () => Fragment.empty;
      }
      return rule;
    }
    matchesNode(node, outerDeco, innerDeco) {
      return this.dirty == NOT_DIRTY && node.eq(this.node) && sameOuterDeco(outerDeco, this.outerDeco) && innerDeco.eq(this.innerDeco);
    }
    get size() {
      return this.node.nodeSize;
    }
    get border() {
      return this.node.isLeaf ? 0 : 1;
    }
    // Syncs `this.children` to match `this.node.content` and the local
    // decorations, possibly introducing nesting for marks. Then, in a
    // separate step, syncs the DOM inside `this.contentDOM` to
    // `this.children`.
    updateChildren(view2, pos) {
      let inline = this.node.inlineContent, off = pos;
      let composition = view2.composing ? this.localCompositionInfo(view2, pos) : null;
      let localComposition = composition && composition.pos > -1 ? composition : null;
      let compositionInChild = composition && composition.pos < 0;
      let updater = new ViewTreeUpdater(this, localComposition && localComposition.node, view2);
      iterDeco(this.node, this.innerDeco, (widget, i, insideNode) => {
        if (widget.spec.marks)
          updater.syncToMarks(widget.spec.marks, inline, view2);
        else if (widget.type.side >= 0 && !insideNode)
          updater.syncToMarks(i == this.node.childCount ? Mark.none : this.node.child(i).marks, inline, view2);
        updater.placeWidget(widget, view2, off);
      }, (child, outerDeco, innerDeco, i) => {
        updater.syncToMarks(child.marks, inline, view2);
        let compIndex;
        if (updater.findNodeMatch(child, outerDeco, innerDeco, i)) ;
        else if (compositionInChild && view2.state.selection.from > off && view2.state.selection.to < off + child.nodeSize && (compIndex = updater.findIndexWithChild(composition.node)) > -1 && updater.updateNodeAt(child, outerDeco, innerDeco, compIndex, view2)) ;
        else if (updater.updateNextNode(child, outerDeco, innerDeco, view2, i, off)) ;
        else {
          updater.addNode(child, outerDeco, innerDeco, view2, off);
        }
        off += child.nodeSize;
      });
      updater.syncToMarks([], inline, view2);
      if (this.node.isTextblock)
        updater.addTextblockHacks();
      updater.destroyRest();
      if (updater.changed || this.dirty == CONTENT_DIRTY) {
        if (localComposition)
          this.protectLocalComposition(view2, localComposition);
        renderDescs(this.contentDOM, this.children, view2);
        if (ios)
          iosHacks(this.dom);
      }
    }
    localCompositionInfo(view2, pos) {
      let { from: from2, to: to2 } = view2.state.selection;
      if (!(view2.state.selection instanceof TextSelection) || from2 < pos || to2 > pos + this.node.content.size)
        return null;
      let textNode = view2.input.compositionNode;
      if (!textNode || !this.dom.contains(textNode.parentNode))
        return null;
      if (this.node.inlineContent) {
        let text = textNode.nodeValue;
        let textPos = findTextInFragment(this.node.content, text, from2 - pos, to2 - pos);
        return textPos < 0 ? null : { node: textNode, pos: textPos, text };
      } else {
        return { node: textNode, pos: -1, text: "" };
      }
    }
    protectLocalComposition(view2, { node, pos, text }) {
      if (this.getDesc(node))
        return;
      let topNode = node;
      for (; ; topNode = topNode.parentNode) {
        if (topNode.parentNode == this.contentDOM)
          break;
        while (topNode.previousSibling)
          topNode.parentNode.removeChild(topNode.previousSibling);
        while (topNode.nextSibling)
          topNode.parentNode.removeChild(topNode.nextSibling);
        if (topNode.pmViewDesc)
          topNode.pmViewDesc = void 0;
      }
      let desc = new CompositionViewDesc(this, topNode, node, text);
      view2.input.compositionNodes.push(desc);
      this.children = replaceNodes(this.children, pos, pos + text.length, view2, desc);
    }
    // If this desc must be updated to match the given node decoration,
    // do so and return true.
    update(node, outerDeco, innerDeco, view2) {
      if (this.dirty == NODE_DIRTY || !node.sameMarkup(this.node))
        return false;
      this.updateInner(node, outerDeco, innerDeco, view2);
      return true;
    }
    updateInner(node, outerDeco, innerDeco, view2) {
      this.updateOuterDeco(outerDeco);
      this.node = node;
      this.innerDeco = innerDeco;
      if (this.contentDOM)
        this.updateChildren(view2, this.posAtStart);
      this.dirty = NOT_DIRTY;
    }
    updateOuterDeco(outerDeco) {
      if (sameOuterDeco(outerDeco, this.outerDeco))
        return;
      let needsWrap = this.nodeDOM.nodeType != 1;
      let oldDOM = this.dom;
      this.dom = patchOuterDeco(this.dom, this.nodeDOM, computeOuterDeco(this.outerDeco, this.node, needsWrap), computeOuterDeco(outerDeco, this.node, needsWrap));
      if (this.dom != oldDOM) {
        oldDOM.pmViewDesc = void 0;
        this.dom.pmViewDesc = this;
      }
      this.outerDeco = outerDeco;
    }
    // Mark this node as being the selected node.
    selectNode() {
      if (this.nodeDOM.nodeType == 1)
        this.nodeDOM.classList.add("ProseMirror-selectednode");
      if (this.contentDOM || !this.node.type.spec.draggable)
        this.dom.draggable = true;
    }
    // Remove selected node marking from this node.
    deselectNode() {
      if (this.nodeDOM.nodeType == 1) {
        this.nodeDOM.classList.remove("ProseMirror-selectednode");
        if (this.contentDOM || !this.node.type.spec.draggable)
          this.dom.removeAttribute("draggable");
      }
    }
    get domAtom() {
      return this.node.isAtom;
    }
  };
  function docViewDesc(doc3, outerDeco, innerDeco, dom, view2) {
    applyOuterDeco(dom, outerDeco, doc3);
    let docView = new NodeViewDesc(void 0, doc3, outerDeco, innerDeco, dom, dom, dom, view2, 0);
    if (docView.contentDOM)
      docView.updateChildren(view2, 0);
    return docView;
  }
  var TextViewDesc = class _TextViewDesc extends NodeViewDesc {
    constructor(parent, node, outerDeco, innerDeco, dom, nodeDOM, view2) {
      super(parent, node, outerDeco, innerDeco, dom, null, nodeDOM, view2, 0);
    }
    parseRule() {
      let skip = this.nodeDOM.parentNode;
      while (skip && skip != this.dom && !skip.pmIsDeco)
        skip = skip.parentNode;
      return { skip: skip || true };
    }
    update(node, outerDeco, innerDeco, view2) {
      if (this.dirty == NODE_DIRTY || this.dirty != NOT_DIRTY && !this.inParent() || !node.sameMarkup(this.node))
        return false;
      this.updateOuterDeco(outerDeco);
      if ((this.dirty != NOT_DIRTY || node.text != this.node.text) && node.text != this.nodeDOM.nodeValue) {
        this.nodeDOM.nodeValue = node.text;
        if (view2.trackWrites == this.nodeDOM)
          view2.trackWrites = null;
      }
      this.node = node;
      this.dirty = NOT_DIRTY;
      return true;
    }
    inParent() {
      let parentDOM = this.parent.contentDOM;
      for (let n = this.nodeDOM; n; n = n.parentNode)
        if (n == parentDOM)
          return true;
      return false;
    }
    domFromPos(pos) {
      return { node: this.nodeDOM, offset: pos };
    }
    localPosFromDOM(dom, offset, bias) {
      if (dom == this.nodeDOM)
        return this.posAtStart + Math.min(offset, this.node.text.length);
      return super.localPosFromDOM(dom, offset, bias);
    }
    ignoreMutation(mutation) {
      return mutation.type != "characterData" && mutation.type != "selection";
    }
    slice(from2, to2, view2) {
      let node = this.node.cut(from2, to2), dom = document.createTextNode(node.text);
      return new _TextViewDesc(this.parent, node, this.outerDeco, this.innerDeco, dom, dom, view2);
    }
    markDirty(from2, to2) {
      super.markDirty(from2, to2);
      if (this.dom != this.nodeDOM && (from2 == 0 || to2 == this.nodeDOM.nodeValue.length))
        this.dirty = NODE_DIRTY;
    }
    get domAtom() {
      return false;
    }
    isText(text) {
      return this.node.text == text;
    }
  };
  var TrailingHackViewDesc = class extends ViewDesc {
    parseRule() {
      return { ignore: true };
    }
    matchesHack(nodeName) {
      return this.dirty == NOT_DIRTY && this.dom.nodeName == nodeName;
    }
    get domAtom() {
      return true;
    }
    get ignoreForCoords() {
      return this.dom.nodeName == "IMG";
    }
  };
  var CustomNodeViewDesc = class extends NodeViewDesc {
    constructor(parent, node, outerDeco, innerDeco, dom, contentDOM, nodeDOM, spec, view2, pos) {
      super(parent, node, outerDeco, innerDeco, dom, contentDOM, nodeDOM, view2, pos);
      this.spec = spec;
    }
    // A custom `update` method gets to decide whether the update goes
    // through. If it does, and there's a `contentDOM` node, our logic
    // updates the children.
    update(node, outerDeco, innerDeco, view2) {
      if (this.dirty == NODE_DIRTY)
        return false;
      if (this.spec.update && (this.node.type == node.type || this.spec.multiType)) {
        let result = this.spec.update(node, outerDeco, innerDeco);
        if (result)
          this.updateInner(node, outerDeco, innerDeco, view2);
        return result;
      } else if (!this.contentDOM && !node.isLeaf) {
        return false;
      } else {
        return super.update(node, outerDeco, innerDeco, view2);
      }
    }
    selectNode() {
      this.spec.selectNode ? this.spec.selectNode() : super.selectNode();
    }
    deselectNode() {
      this.spec.deselectNode ? this.spec.deselectNode() : super.deselectNode();
    }
    setSelection(anchor, head, view2, force) {
      this.spec.setSelection ? this.spec.setSelection(anchor, head, view2.root) : super.setSelection(anchor, head, view2, force);
    }
    destroy() {
      if (this.spec.destroy)
        this.spec.destroy();
      super.destroy();
    }
    stopEvent(event) {
      return this.spec.stopEvent ? this.spec.stopEvent(event) : false;
    }
    ignoreMutation(mutation) {
      return this.spec.ignoreMutation ? this.spec.ignoreMutation(mutation) : super.ignoreMutation(mutation);
    }
  };
  function renderDescs(parentDOM, descs, view2) {
    let dom = parentDOM.firstChild, written = false;
    for (let i = 0; i < descs.length; i++) {
      let desc = descs[i], childDOM = desc.dom;
      if (childDOM.parentNode == parentDOM) {
        while (childDOM != dom) {
          dom = rm(dom);
          written = true;
        }
        dom = dom.nextSibling;
      } else {
        written = true;
        parentDOM.insertBefore(childDOM, dom);
      }
      if (desc instanceof MarkViewDesc) {
        let pos = dom ? dom.previousSibling : parentDOM.lastChild;
        renderDescs(desc.contentDOM, desc.children, view2);
        dom = pos ? pos.nextSibling : parentDOM.firstChild;
      }
    }
    while (dom) {
      dom = rm(dom);
      written = true;
    }
    if (written && view2.trackWrites == parentDOM)
      view2.trackWrites = null;
  }
  var OuterDecoLevel = function(nodeName) {
    if (nodeName)
      this.nodeName = nodeName;
  };
  OuterDecoLevel.prototype = /* @__PURE__ */ Object.create(null);
  var noDeco = [new OuterDecoLevel()];
  function computeOuterDeco(outerDeco, node, needsWrap) {
    if (outerDeco.length == 0)
      return noDeco;
    let top = needsWrap ? noDeco[0] : new OuterDecoLevel(), result = [top];
    for (let i = 0; i < outerDeco.length; i++) {
      let attrs = outerDeco[i].type.attrs;
      if (!attrs)
        continue;
      if (attrs.nodeName)
        result.push(top = new OuterDecoLevel(attrs.nodeName));
      for (let name in attrs) {
        let val = attrs[name];
        if (val == null)
          continue;
        if (needsWrap && result.length == 1)
          result.push(top = new OuterDecoLevel(node.isInline ? "span" : "div"));
        if (name == "class")
          top.class = (top.class ? top.class + " " : "") + val;
        else if (name == "style")
          top.style = (top.style ? top.style + ";" : "") + val;
        else if (name != "nodeName")
          top[name] = val;
      }
    }
    return result;
  }
  function patchOuterDeco(outerDOM, nodeDOM, prevComputed, curComputed) {
    if (prevComputed == noDeco && curComputed == noDeco)
      return nodeDOM;
    let curDOM = nodeDOM;
    for (let i = 0; i < curComputed.length; i++) {
      let deco = curComputed[i], prev = prevComputed[i];
      if (i) {
        let parent;
        if (prev && prev.nodeName == deco.nodeName && curDOM != outerDOM && (parent = curDOM.parentNode) && parent.nodeName.toLowerCase() == deco.nodeName) {
          curDOM = parent;
        } else {
          parent = document.createElement(deco.nodeName);
          parent.pmIsDeco = true;
          parent.appendChild(curDOM);
          prev = noDeco[0];
          curDOM = parent;
        }
      }
      patchAttributes(curDOM, prev || noDeco[0], deco);
    }
    return curDOM;
  }
  function patchAttributes(dom, prev, cur) {
    for (let name in prev)
      if (name != "class" && name != "style" && name != "nodeName" && !(name in cur))
        dom.removeAttribute(name);
    for (let name in cur)
      if (name != "class" && name != "style" && name != "nodeName" && cur[name] != prev[name])
        dom.setAttribute(name, cur[name]);
    if (prev.class != cur.class) {
      let prevList = prev.class ? prev.class.split(" ").filter(Boolean) : [];
      let curList = cur.class ? cur.class.split(" ").filter(Boolean) : [];
      for (let i = 0; i < prevList.length; i++)
        if (curList.indexOf(prevList[i]) == -1)
          dom.classList.remove(prevList[i]);
      for (let i = 0; i < curList.length; i++)
        if (prevList.indexOf(curList[i]) == -1)
          dom.classList.add(curList[i]);
      if (dom.classList.length == 0)
        dom.removeAttribute("class");
    }
    if (prev.style != cur.style) {
      if (prev.style) {
        let prop = /\s*([\w\-\xa1-\uffff]+)\s*:(?:"(?:\\.|[^"])*"|'(?:\\.|[^'])*'|\(.*?\)|[^;])*/g, m;
        while (m = prop.exec(prev.style))
          dom.style.removeProperty(m[1]);
      }
      if (cur.style)
        dom.style.cssText += cur.style;
    }
  }
  function applyOuterDeco(dom, deco, node) {
    return patchOuterDeco(dom, dom, noDeco, computeOuterDeco(deco, node, dom.nodeType != 1));
  }
  function sameOuterDeco(a, b) {
    if (a.length != b.length)
      return false;
    for (let i = 0; i < a.length; i++)
      if (!a[i].type.eq(b[i].type))
        return false;
    return true;
  }
  function rm(dom) {
    let next = dom.nextSibling;
    dom.parentNode.removeChild(dom);
    return next;
  }
  var ViewTreeUpdater = class {
    constructor(top, lock, view2) {
      this.lock = lock;
      this.view = view2;
      this.index = 0;
      this.stack = [];
      this.changed = false;
      this.top = top;
      this.preMatch = preMatch(top.node.content, top);
    }
    // Destroy and remove the children between the given indices in
    // `this.top`.
    destroyBetween(start, end) {
      if (start == end)
        return;
      for (let i = start; i < end; i++)
        this.top.children[i].destroy();
      this.top.children.splice(start, end - start);
      this.changed = true;
    }
    // Destroy all remaining children in `this.top`.
    destroyRest() {
      this.destroyBetween(this.index, this.top.children.length);
    }
    // Sync the current stack of mark descs with the given array of
    // marks, reusing existing mark descs when possible.
    syncToMarks(marks2, inline, view2) {
      let keep = 0, depth = this.stack.length >> 1;
      let maxKeep = Math.min(depth, marks2.length);
      while (keep < maxKeep && (keep == depth - 1 ? this.top : this.stack[keep + 1 << 1]).matchesMark(marks2[keep]) && marks2[keep].type.spec.spanning !== false)
        keep++;
      while (keep < depth) {
        this.destroyRest();
        this.top.dirty = NOT_DIRTY;
        this.index = this.stack.pop();
        this.top = this.stack.pop();
        depth--;
      }
      while (depth < marks2.length) {
        this.stack.push(this.top, this.index + 1);
        let found2 = -1;
        for (let i = this.index; i < Math.min(this.index + 3, this.top.children.length); i++) {
          let next = this.top.children[i];
          if (next.matchesMark(marks2[depth]) && !this.isLocked(next.dom)) {
            found2 = i;
            break;
          }
        }
        if (found2 > -1) {
          if (found2 > this.index) {
            this.changed = true;
            this.destroyBetween(this.index, found2);
          }
          this.top = this.top.children[this.index];
        } else {
          let markDesc = MarkViewDesc.create(this.top, marks2[depth], inline, view2);
          this.top.children.splice(this.index, 0, markDesc);
          this.top = markDesc;
          this.changed = true;
        }
        this.index = 0;
        depth++;
      }
    }
    // Try to find a node desc matching the given data. Skip over it and
    // return true when successful.
    findNodeMatch(node, outerDeco, innerDeco, index) {
      let found2 = -1, targetDesc;
      if (index >= this.preMatch.index && (targetDesc = this.preMatch.matches[index - this.preMatch.index]).parent == this.top && targetDesc.matchesNode(node, outerDeco, innerDeco)) {
        found2 = this.top.children.indexOf(targetDesc, this.index);
      } else {
        for (let i = this.index, e = Math.min(this.top.children.length, i + 5); i < e; i++) {
          let child = this.top.children[i];
          if (child.matchesNode(node, outerDeco, innerDeco) && !this.preMatch.matched.has(child)) {
            found2 = i;
            break;
          }
        }
      }
      if (found2 < 0)
        return false;
      this.destroyBetween(this.index, found2);
      this.index++;
      return true;
    }
    updateNodeAt(node, outerDeco, innerDeco, index, view2) {
      let child = this.top.children[index];
      if (child.dirty == NODE_DIRTY && child.dom == child.contentDOM)
        child.dirty = CONTENT_DIRTY;
      if (!child.update(node, outerDeco, innerDeco, view2))
        return false;
      this.destroyBetween(this.index, index);
      this.index++;
      return true;
    }
    findIndexWithChild(domNode) {
      for (; ; ) {
        let parent = domNode.parentNode;
        if (!parent)
          return -1;
        if (parent == this.top.contentDOM) {
          let desc = domNode.pmViewDesc;
          if (desc)
            for (let i = this.index; i < this.top.children.length; i++) {
              if (this.top.children[i] == desc)
                return i;
            }
          return -1;
        }
        domNode = parent;
      }
    }
    // Try to update the next node, if any, to the given data. Checks
    // pre-matches to avoid overwriting nodes that could still be used.
    updateNextNode(node, outerDeco, innerDeco, view2, index, pos) {
      for (let i = this.index; i < this.top.children.length; i++) {
        let next = this.top.children[i];
        if (next instanceof NodeViewDesc) {
          let preMatch2 = this.preMatch.matched.get(next);
          if (preMatch2 != null && preMatch2 != index)
            return false;
          let nextDOM = next.dom, updated;
          let locked = this.isLocked(nextDOM) && !(node.isText && next.node && next.node.isText && next.nodeDOM.nodeValue == node.text && next.dirty != NODE_DIRTY && sameOuterDeco(outerDeco, next.outerDeco));
          if (!locked && next.update(node, outerDeco, innerDeco, view2)) {
            this.destroyBetween(this.index, i);
            if (next.dom != nextDOM)
              this.changed = true;
            this.index++;
            return true;
          } else if (!locked && (updated = this.recreateWrapper(next, node, outerDeco, innerDeco, view2, pos))) {
            this.destroyBetween(this.index, i);
            this.top.children[this.index] = updated;
            if (updated.contentDOM) {
              updated.dirty = CONTENT_DIRTY;
              updated.updateChildren(view2, pos + 1);
              updated.dirty = NOT_DIRTY;
            }
            this.changed = true;
            this.index++;
            return true;
          }
          break;
        }
      }
      return false;
    }
    // When a node with content is replaced by a different node with
    // identical content, move over its children.
    recreateWrapper(next, node, outerDeco, innerDeco, view2, pos) {
      if (next.dirty || node.isAtom || !next.children.length || !next.node.content.eq(node.content) || !sameOuterDeco(outerDeco, next.outerDeco) || !innerDeco.eq(next.innerDeco))
        return null;
      let wrapper = NodeViewDesc.create(this.top, node, outerDeco, innerDeco, view2, pos);
      if (wrapper.contentDOM) {
        wrapper.children = next.children;
        next.children = [];
        for (let ch of wrapper.children)
          ch.parent = wrapper;
      }
      next.destroy();
      return wrapper;
    }
    // Insert the node as a newly created node desc.
    addNode(node, outerDeco, innerDeco, view2, pos) {
      let desc = NodeViewDesc.create(this.top, node, outerDeco, innerDeco, view2, pos);
      if (desc.contentDOM)
        desc.updateChildren(view2, pos + 1);
      this.top.children.splice(this.index++, 0, desc);
      this.changed = true;
    }
    placeWidget(widget, view2, pos) {
      let next = this.index < this.top.children.length ? this.top.children[this.index] : null;
      if (next && next.matchesWidget(widget) && (widget == next.widget || !next.widget.type.toDOM.parentNode)) {
        this.index++;
      } else {
        let desc = new WidgetViewDesc(this.top, widget, view2, pos);
        this.top.children.splice(this.index++, 0, desc);
        this.changed = true;
      }
    }
    // Make sure a textblock looks and behaves correctly in
    // contentEditable.
    addTextblockHacks() {
      let lastChild = this.top.children[this.index - 1], parent = this.top;
      while (lastChild instanceof MarkViewDesc) {
        parent = lastChild;
        lastChild = parent.children[parent.children.length - 1];
      }
      if (!lastChild || // Empty textblock
      !(lastChild instanceof TextViewDesc) || /\n$/.test(lastChild.node.text) || this.view.requiresGeckoHackNode && /\s$/.test(lastChild.node.text)) {
        if ((safari || chrome2) && lastChild && lastChild.dom.contentEditable == "false")
          this.addHackNode("IMG", parent);
        this.addHackNode("BR", this.top);
      }
    }
    addHackNode(nodeName, parent) {
      if (parent == this.top && this.index < parent.children.length && parent.children[this.index].matchesHack(nodeName)) {
        this.index++;
      } else {
        let dom = document.createElement(nodeName);
        if (nodeName == "IMG") {
          dom.className = "ProseMirror-separator";
          dom.alt = "";
        }
        if (nodeName == "BR")
          dom.className = "ProseMirror-trailingBreak";
        let hack = new TrailingHackViewDesc(this.top, [], dom, null);
        if (parent != this.top)
          parent.children.push(hack);
        else
          parent.children.splice(this.index++, 0, hack);
        this.changed = true;
      }
    }
    isLocked(node) {
      return this.lock && (node == this.lock || node.nodeType == 1 && node.contains(this.lock.parentNode));
    }
  };
  function preMatch(frag, parentDesc) {
    let curDesc = parentDesc, descI = curDesc.children.length;
    let fI = frag.childCount, matched = /* @__PURE__ */ new Map(), matches2 = [];
    outer: while (fI > 0) {
      let desc;
      for (; ; ) {
        if (descI) {
          let next = curDesc.children[descI - 1];
          if (next instanceof MarkViewDesc) {
            curDesc = next;
            descI = next.children.length;
          } else {
            desc = next;
            descI--;
            break;
          }
        } else if (curDesc == parentDesc) {
          break outer;
        } else {
          descI = curDesc.parent.children.indexOf(curDesc);
          curDesc = curDesc.parent;
        }
      }
      let node = desc.node;
      if (!node)
        continue;
      if (node != frag.child(fI - 1))
        break;
      --fI;
      matched.set(desc, fI);
      matches2.push(desc);
    }
    return { index: fI, matched, matches: matches2.reverse() };
  }
  function compareSide(a, b) {
    return a.type.side - b.type.side;
  }
  function iterDeco(parent, deco, onWidget, onNode) {
    let locals = deco.locals(parent), offset = 0;
    if (locals.length == 0) {
      for (let i = 0; i < parent.childCount; i++) {
        let child = parent.child(i);
        onNode(child, locals, deco.forChild(offset, child), i);
        offset += child.nodeSize;
      }
      return;
    }
    let decoIndex = 0, active = [], restNode = null;
    for (let parentIndex = 0; ; ) {
      let widget, widgets;
      while (decoIndex < locals.length && locals[decoIndex].to == offset) {
        let next = locals[decoIndex++];
        if (next.widget) {
          if (!widget)
            widget = next;
          else
            (widgets || (widgets = [widget])).push(next);
        }
      }
      if (widget) {
        if (widgets) {
          widgets.sort(compareSide);
          for (let i = 0; i < widgets.length; i++)
            onWidget(widgets[i], parentIndex, !!restNode);
        } else {
          onWidget(widget, parentIndex, !!restNode);
        }
      }
      let child, index;
      if (restNode) {
        index = -1;
        child = restNode;
        restNode = null;
      } else if (parentIndex < parent.childCount) {
        index = parentIndex;
        child = parent.child(parentIndex++);
      } else {
        break;
      }
      for (let i = 0; i < active.length; i++)
        if (active[i].to <= offset)
          active.splice(i--, 1);
      while (decoIndex < locals.length && locals[decoIndex].from <= offset && locals[decoIndex].to > offset)
        active.push(locals[decoIndex++]);
      let end = offset + child.nodeSize;
      if (child.isText) {
        let cutAt = end;
        if (decoIndex < locals.length && locals[decoIndex].from < cutAt)
          cutAt = locals[decoIndex].from;
        for (let i = 0; i < active.length; i++)
          if (active[i].to < cutAt)
            cutAt = active[i].to;
        if (cutAt < end) {
          restNode = child.cut(cutAt - offset);
          child = child.cut(0, cutAt - offset);
          end = cutAt;
          index = -1;
        }
      } else {
        while (decoIndex < locals.length && locals[decoIndex].to < end)
          decoIndex++;
      }
      let outerDeco = child.isInline && !child.isLeaf ? active.filter((d) => !d.inline) : active.slice();
      onNode(child, outerDeco, deco.forChild(offset, child), index);
      offset = end;
    }
  }
  function iosHacks(dom) {
    if (dom.nodeName == "UL" || dom.nodeName == "OL") {
      let oldCSS = dom.style.cssText;
      dom.style.cssText = oldCSS + "; list-style: square !important";
      window.getComputedStyle(dom).listStyle;
      dom.style.cssText = oldCSS;
    }
  }
  function findTextInFragment(frag, text, from2, to2) {
    for (let i = 0, pos = 0; i < frag.childCount && pos <= to2; ) {
      let child = frag.child(i++), childStart = pos;
      pos += child.nodeSize;
      if (!child.isText)
        continue;
      let str = child.text;
      while (i < frag.childCount) {
        let next = frag.child(i++);
        pos += next.nodeSize;
        if (!next.isText)
          break;
        str += next.text;
      }
      if (pos >= from2) {
        if (pos >= to2 && str.slice(to2 - text.length - childStart, to2 - childStart) == text)
          return to2 - text.length;
        let found2 = childStart < to2 ? str.lastIndexOf(text, to2 - childStart - 1) : -1;
        if (found2 >= 0 && found2 + text.length + childStart >= from2)
          return childStart + found2;
        if (from2 == to2 && str.length >= to2 + text.length - childStart && str.slice(to2 - childStart, to2 - childStart + text.length) == text)
          return to2;
      }
    }
    return -1;
  }
  function replaceNodes(nodes2, from2, to2, view2, replacement) {
    let result = [];
    for (let i = 0, off = 0; i < nodes2.length; i++) {
      let child = nodes2[i], start = off, end = off += child.size;
      if (start >= to2 || end <= from2) {
        result.push(child);
      } else {
        if (start < from2)
          result.push(child.slice(0, from2 - start, view2));
        if (replacement) {
          result.push(replacement);
          replacement = void 0;
        }
        if (end > to2)
          result.push(child.slice(to2 - start, child.size, view2));
      }
    }
    return result;
  }
  function selectionFromDOM(view2, origin = null) {
    let domSel = view2.domSelectionRange(), doc3 = view2.state.doc;
    if (!domSel.focusNode)
      return null;
    let nearestDesc = view2.docView.nearestDesc(domSel.focusNode), inWidget = nearestDesc && nearestDesc.size == 0;
    let head = view2.docView.posFromDOM(domSel.focusNode, domSel.focusOffset, 1);
    if (head < 0)
      return null;
    let $head = doc3.resolve(head), anchor, selection;
    if (selectionCollapsed(domSel)) {
      anchor = head;
      while (nearestDesc && !nearestDesc.node)
        nearestDesc = nearestDesc.parent;
      let nearestDescNode = nearestDesc.node;
      if (nearestDesc && nearestDescNode.isAtom && NodeSelection.isSelectable(nearestDescNode) && nearestDesc.parent && !(nearestDescNode.isInline && isOnEdge(domSel.focusNode, domSel.focusOffset, nearestDesc.dom))) {
        let pos = nearestDesc.posBefore;
        selection = new NodeSelection(head == pos ? $head : doc3.resolve(pos));
      }
    } else {
      if (domSel instanceof view2.dom.ownerDocument.defaultView.Selection && domSel.rangeCount > 1) {
        let min = head, max = head;
        for (let i = 0; i < domSel.rangeCount; i++) {
          let range = domSel.getRangeAt(i);
          min = Math.min(min, view2.docView.posFromDOM(range.startContainer, range.startOffset, 1));
          max = Math.max(max, view2.docView.posFromDOM(range.endContainer, range.endOffset, -1));
        }
        if (min < 0)
          return null;
        [anchor, head] = max == view2.state.selection.anchor ? [max, min] : [min, max];
        $head = doc3.resolve(head);
      } else {
        anchor = view2.docView.posFromDOM(domSel.anchorNode, domSel.anchorOffset, 1);
      }
      if (anchor < 0)
        return null;
    }
    let $anchor = doc3.resolve(anchor);
    if (!selection) {
      let bias = origin == "pointer" || view2.state.selection.head < $head.pos && !inWidget ? 1 : -1;
      selection = selectionBetween(view2, $anchor, $head, bias);
    }
    return selection;
  }
  function editorOwnsSelection(view2) {
    return view2.editable ? view2.hasFocus() : hasSelection(view2) && document.activeElement && document.activeElement.contains(view2.dom);
  }
  function selectionToDOM(view2, force = false) {
    let sel = view2.state.selection;
    syncNodeSelection(view2, sel);
    if (!editorOwnsSelection(view2))
      return;
    if (!force && view2.input.mouseDown && view2.input.mouseDown.allowDefault && chrome2) {
      let domSel = view2.domSelectionRange(), curSel = view2.domObserver.currentSelection;
      if (domSel.anchorNode && curSel.anchorNode && isEquivalentPosition(domSel.anchorNode, domSel.anchorOffset, curSel.anchorNode, curSel.anchorOffset)) {
        view2.input.mouseDown.delayedSelectionSync = true;
        view2.domObserver.setCurSelection();
        return;
      }
    }
    view2.domObserver.disconnectSelection();
    if (view2.cursorWrapper) {
      selectCursorWrapper(view2);
    } else {
      let { anchor, head } = sel, resetEditableFrom, resetEditableTo;
      if (brokenSelectBetweenUneditable && !(sel instanceof TextSelection)) {
        if (!sel.$from.parent.inlineContent)
          resetEditableFrom = temporarilyEditableNear(view2, sel.from);
        if (!sel.empty && !sel.$from.parent.inlineContent)
          resetEditableTo = temporarilyEditableNear(view2, sel.to);
      }
      view2.docView.setSelection(anchor, head, view2, force);
      if (brokenSelectBetweenUneditable) {
        if (resetEditableFrom)
          resetEditable(resetEditableFrom);
        if (resetEditableTo)
          resetEditable(resetEditableTo);
      }
      if (sel.visible) {
        view2.dom.classList.remove("ProseMirror-hideselection");
      } else {
        view2.dom.classList.add("ProseMirror-hideselection");
        if ("onselectionchange" in document)
          removeClassOnSelectionChange(view2);
      }
    }
    view2.domObserver.setCurSelection();
    view2.domObserver.connectSelection();
  }
  var brokenSelectBetweenUneditable = safari || chrome2 && chrome_version < 63;
  function temporarilyEditableNear(view2, pos) {
    let { node, offset } = view2.docView.domFromPos(pos, 0);
    let after = offset < node.childNodes.length ? node.childNodes[offset] : null;
    let before = offset ? node.childNodes[offset - 1] : null;
    if (safari && after && after.contentEditable == "false")
      return setEditable(after);
    if ((!after || after.contentEditable == "false") && (!before || before.contentEditable == "false")) {
      if (after)
        return setEditable(after);
      else if (before)
        return setEditable(before);
    }
  }
  function setEditable(element) {
    element.contentEditable = "true";
    if (safari && element.draggable) {
      element.draggable = false;
      element.wasDraggable = true;
    }
    return element;
  }
  function resetEditable(element) {
    element.contentEditable = "false";
    if (element.wasDraggable) {
      element.draggable = true;
      element.wasDraggable = null;
    }
  }
  function removeClassOnSelectionChange(view2) {
    let doc3 = view2.dom.ownerDocument;
    doc3.removeEventListener("selectionchange", view2.input.hideSelectionGuard);
    let domSel = view2.domSelectionRange();
    let node = domSel.anchorNode, offset = domSel.anchorOffset;
    doc3.addEventListener("selectionchange", view2.input.hideSelectionGuard = () => {
      if (domSel.anchorNode != node || domSel.anchorOffset != offset) {
        doc3.removeEventListener("selectionchange", view2.input.hideSelectionGuard);
        setTimeout(() => {
          if (!editorOwnsSelection(view2) || view2.state.selection.visible)
            view2.dom.classList.remove("ProseMirror-hideselection");
        }, 20);
      }
    });
  }
  function selectCursorWrapper(view2) {
    let domSel = view2.domSelection(), range = document.createRange();
    if (!domSel)
      return;
    let node = view2.cursorWrapper.dom, img = node.nodeName == "IMG";
    if (img)
      range.setStart(node.parentNode, domIndex(node) + 1);
    else
      range.setStart(node, 0);
    range.collapse(true);
    domSel.removeAllRanges();
    domSel.addRange(range);
    if (!img && !view2.state.selection.visible && ie && ie_version <= 11) {
      node.disabled = true;
      node.disabled = false;
    }
  }
  function syncNodeSelection(view2, sel) {
    if (sel instanceof NodeSelection) {
      let desc = view2.docView.descAt(sel.from);
      if (desc != view2.lastSelectedViewDesc) {
        clearNodeSelection(view2);
        if (desc)
          desc.selectNode();
        view2.lastSelectedViewDesc = desc;
      }
    } else {
      clearNodeSelection(view2);
    }
  }
  function clearNodeSelection(view2) {
    if (view2.lastSelectedViewDesc) {
      if (view2.lastSelectedViewDesc.parent)
        view2.lastSelectedViewDesc.deselectNode();
      view2.lastSelectedViewDesc = void 0;
    }
  }
  function selectionBetween(view2, $anchor, $head, bias) {
    return view2.someProp("createSelectionBetween", (f) => f(view2, $anchor, $head)) || TextSelection.between($anchor, $head, bias);
  }
  function hasFocusAndSelection(view2) {
    if (view2.editable && !view2.hasFocus())
      return false;
    return hasSelection(view2);
  }
  function hasSelection(view2) {
    let sel = view2.domSelectionRange();
    if (!sel.anchorNode)
      return false;
    try {
      return view2.dom.contains(sel.anchorNode.nodeType == 3 ? sel.anchorNode.parentNode : sel.anchorNode) && (view2.editable || view2.dom.contains(sel.focusNode.nodeType == 3 ? sel.focusNode.parentNode : sel.focusNode));
    } catch (_2) {
      return false;
    }
  }
  function anchorInRightPlace(view2) {
    let anchorDOM = view2.docView.domFromPos(view2.state.selection.anchor, 0);
    let domSel = view2.domSelectionRange();
    return isEquivalentPosition(anchorDOM.node, anchorDOM.offset, domSel.anchorNode, domSel.anchorOffset);
  }
  function moveSelectionBlock(state, dir) {
    let { $anchor, $head } = state.selection;
    let $side = dir > 0 ? $anchor.max($head) : $anchor.min($head);
    let $start = !$side.parent.inlineContent ? $side : $side.depth ? state.doc.resolve(dir > 0 ? $side.after() : $side.before()) : null;
    return $start && Selection.findFrom($start, dir);
  }
  function apply(view2, sel) {
    view2.dispatch(view2.state.tr.setSelection(sel).scrollIntoView());
    return true;
  }
  function selectHorizontally(view2, dir, mods) {
    let sel = view2.state.selection;
    if (sel instanceof TextSelection) {
      if (mods.indexOf("s") > -1) {
        let { $head } = sel, node = $head.textOffset ? null : dir < 0 ? $head.nodeBefore : $head.nodeAfter;
        if (!node || node.isText || !node.isLeaf)
          return false;
        let $newHead = view2.state.doc.resolve($head.pos + node.nodeSize * (dir < 0 ? -1 : 1));
        return apply(view2, new TextSelection(sel.$anchor, $newHead));
      } else if (!sel.empty) {
        return false;
      } else if (view2.endOfTextblock(dir > 0 ? "forward" : "backward")) {
        let next = moveSelectionBlock(view2.state, dir);
        if (next && next instanceof NodeSelection)
          return apply(view2, next);
        return false;
      } else if (!(mac && mods.indexOf("m") > -1)) {
        let $head = sel.$head, node = $head.textOffset ? null : dir < 0 ? $head.nodeBefore : $head.nodeAfter, desc;
        if (!node || node.isText)
          return false;
        let nodePos = dir < 0 ? $head.pos - node.nodeSize : $head.pos;
        if (!(node.isAtom || (desc = view2.docView.descAt(nodePos)) && !desc.contentDOM))
          return false;
        if (NodeSelection.isSelectable(node)) {
          return apply(view2, new NodeSelection(dir < 0 ? view2.state.doc.resolve($head.pos - node.nodeSize) : $head));
        } else if (webkit) {
          return apply(view2, new TextSelection(view2.state.doc.resolve(dir < 0 ? nodePos : nodePos + node.nodeSize)));
        } else {
          return false;
        }
      }
    } else if (sel instanceof NodeSelection && sel.node.isInline) {
      return apply(view2, new TextSelection(dir > 0 ? sel.$to : sel.$from));
    } else {
      let next = moveSelectionBlock(view2.state, dir);
      if (next)
        return apply(view2, next);
      return false;
    }
  }
  function nodeLen(node) {
    return node.nodeType == 3 ? node.nodeValue.length : node.childNodes.length;
  }
  function isIgnorable(dom, dir) {
    let desc = dom.pmViewDesc;
    return desc && desc.size == 0 && (dir < 0 || dom.nextSibling || dom.nodeName != "BR");
  }
  function skipIgnoredNodes(view2, dir) {
    return dir < 0 ? skipIgnoredNodesBefore(view2) : skipIgnoredNodesAfter(view2);
  }
  function skipIgnoredNodesBefore(view2) {
    let sel = view2.domSelectionRange();
    let node = sel.focusNode, offset = sel.focusOffset;
    if (!node)
      return;
    let moveNode, moveOffset, force = false;
    if (gecko && node.nodeType == 1 && offset < nodeLen(node) && isIgnorable(node.childNodes[offset], -1))
      force = true;
    for (; ; ) {
      if (offset > 0) {
        if (node.nodeType != 1) {
          break;
        } else {
          let before = node.childNodes[offset - 1];
          if (isIgnorable(before, -1)) {
            moveNode = node;
            moveOffset = --offset;
          } else if (before.nodeType == 3) {
            node = before;
            offset = node.nodeValue.length;
          } else
            break;
        }
      } else if (isBlockNode(node)) {
        break;
      } else {
        let prev = node.previousSibling;
        while (prev && isIgnorable(prev, -1)) {
          moveNode = node.parentNode;
          moveOffset = domIndex(prev);
          prev = prev.previousSibling;
        }
        if (!prev) {
          node = node.parentNode;
          if (node == view2.dom)
            break;
          offset = 0;
        } else {
          node = prev;
          offset = nodeLen(node);
        }
      }
    }
    if (force)
      setSelFocus(view2, node, offset);
    else if (moveNode)
      setSelFocus(view2, moveNode, moveOffset);
  }
  function skipIgnoredNodesAfter(view2) {
    let sel = view2.domSelectionRange();
    let node = sel.focusNode, offset = sel.focusOffset;
    if (!node)
      return;
    let len = nodeLen(node);
    let moveNode, moveOffset;
    for (; ; ) {
      if (offset < len) {
        if (node.nodeType != 1)
          break;
        let after = node.childNodes[offset];
        if (isIgnorable(after, 1)) {
          moveNode = node;
          moveOffset = ++offset;
        } else
          break;
      } else if (isBlockNode(node)) {
        break;
      } else {
        let next = node.nextSibling;
        while (next && isIgnorable(next, 1)) {
          moveNode = next.parentNode;
          moveOffset = domIndex(next) + 1;
          next = next.nextSibling;
        }
        if (!next) {
          node = node.parentNode;
          if (node == view2.dom)
            break;
          offset = len = 0;
        } else {
          node = next;
          offset = 0;
          len = nodeLen(node);
        }
      }
    }
    if (moveNode)
      setSelFocus(view2, moveNode, moveOffset);
  }
  function isBlockNode(dom) {
    let desc = dom.pmViewDesc;
    return desc && desc.node && desc.node.isBlock;
  }
  function textNodeAfter(node, offset) {
    while (node && offset == node.childNodes.length && !hasBlockDesc(node)) {
      offset = domIndex(node) + 1;
      node = node.parentNode;
    }
    while (node && offset < node.childNodes.length) {
      let next = node.childNodes[offset];
      if (next.nodeType == 3)
        return next;
      if (next.nodeType == 1 && next.contentEditable == "false")
        break;
      node = next;
      offset = 0;
    }
  }
  function textNodeBefore(node, offset) {
    while (node && !offset && !hasBlockDesc(node)) {
      offset = domIndex(node);
      node = node.parentNode;
    }
    while (node && offset) {
      let next = node.childNodes[offset - 1];
      if (next.nodeType == 3)
        return next;
      if (next.nodeType == 1 && next.contentEditable == "false")
        break;
      node = next;
      offset = node.childNodes.length;
    }
  }
  function setSelFocus(view2, node, offset) {
    if (node.nodeType != 3) {
      let before, after;
      if (after = textNodeAfter(node, offset)) {
        node = after;
        offset = 0;
      } else if (before = textNodeBefore(node, offset)) {
        node = before;
        offset = before.nodeValue.length;
      }
    }
    let sel = view2.domSelection();
    if (!sel)
      return;
    if (selectionCollapsed(sel)) {
      let range = document.createRange();
      range.setEnd(node, offset);
      range.setStart(node, offset);
      sel.removeAllRanges();
      sel.addRange(range);
    } else if (sel.extend) {
      sel.extend(node, offset);
    }
    view2.domObserver.setCurSelection();
    let { state } = view2;
    setTimeout(() => {
      if (view2.state == state)
        selectionToDOM(view2);
    }, 50);
  }
  function findDirection(view2, pos) {
    let $pos = view2.state.doc.resolve(pos);
    if (!(chrome2 || windows) && $pos.parent.inlineContent) {
      let coords = view2.coordsAtPos(pos);
      if (pos > $pos.start()) {
        let before = view2.coordsAtPos(pos - 1);
        let mid = (before.top + before.bottom) / 2;
        if (mid > coords.top && mid < coords.bottom && Math.abs(before.left - coords.left) > 1)
          return before.left < coords.left ? "ltr" : "rtl";
      }
      if (pos < $pos.end()) {
        let after = view2.coordsAtPos(pos + 1);
        let mid = (after.top + after.bottom) / 2;
        if (mid > coords.top && mid < coords.bottom && Math.abs(after.left - coords.left) > 1)
          return after.left > coords.left ? "ltr" : "rtl";
      }
    }
    let computed = getComputedStyle(view2.dom).direction;
    return computed == "rtl" ? "rtl" : "ltr";
  }
  function selectVertically(view2, dir, mods) {
    let sel = view2.state.selection;
    if (sel instanceof TextSelection && !sel.empty || mods.indexOf("s") > -1)
      return false;
    if (mac && mods.indexOf("m") > -1)
      return false;
    let { $from, $to } = sel;
    if (!$from.parent.inlineContent || view2.endOfTextblock(dir < 0 ? "up" : "down")) {
      let next = moveSelectionBlock(view2.state, dir);
      if (next && next instanceof NodeSelection)
        return apply(view2, next);
    }
    if (!$from.parent.inlineContent) {
      let side = dir < 0 ? $from : $to;
      let beyond = sel instanceof AllSelection ? Selection.near(side, dir) : Selection.findFrom(side, dir);
      return beyond ? apply(view2, beyond) : false;
    }
    return false;
  }
  function stopNativeHorizontalDelete(view2, dir) {
    if (!(view2.state.selection instanceof TextSelection))
      return true;
    let { $head, $anchor, empty: empty2 } = view2.state.selection;
    if (!$head.sameParent($anchor))
      return true;
    if (!empty2)
      return false;
    if (view2.endOfTextblock(dir > 0 ? "forward" : "backward"))
      return true;
    let nextNode = !$head.textOffset && (dir < 0 ? $head.nodeBefore : $head.nodeAfter);
    if (nextNode && !nextNode.isText) {
      let tr = view2.state.tr;
      if (dir < 0)
        tr.delete($head.pos - nextNode.nodeSize, $head.pos);
      else
        tr.delete($head.pos, $head.pos + nextNode.nodeSize);
      view2.dispatch(tr);
      return true;
    }
    return false;
  }
  function switchEditable(view2, node, state) {
    view2.domObserver.stop();
    node.contentEditable = state;
    view2.domObserver.start();
  }
  function safariDownArrowBug(view2) {
    if (!safari || view2.state.selection.$head.parentOffset > 0)
      return false;
    let { focusNode, focusOffset } = view2.domSelectionRange();
    if (focusNode && focusNode.nodeType == 1 && focusOffset == 0 && focusNode.firstChild && focusNode.firstChild.contentEditable == "false") {
      let child = focusNode.firstChild;
      switchEditable(view2, child, "true");
      setTimeout(() => switchEditable(view2, child, "false"), 20);
    }
    return false;
  }
  function getMods(event) {
    let result = "";
    if (event.ctrlKey)
      result += "c";
    if (event.metaKey)
      result += "m";
    if (event.altKey)
      result += "a";
    if (event.shiftKey)
      result += "s";
    return result;
  }
  function captureKeyDown(view2, event) {
    let code = event.keyCode, mods = getMods(event);
    if (code == 8 || mac && code == 72 && mods == "c") {
      return stopNativeHorizontalDelete(view2, -1) || skipIgnoredNodes(view2, -1);
    } else if (code == 46 && !event.shiftKey || mac && code == 68 && mods == "c") {
      return stopNativeHorizontalDelete(view2, 1) || skipIgnoredNodes(view2, 1);
    } else if (code == 13 || code == 27) {
      return true;
    } else if (code == 37 || mac && code == 66 && mods == "c") {
      let dir = code == 37 ? findDirection(view2, view2.state.selection.from) == "ltr" ? -1 : 1 : -1;
      return selectHorizontally(view2, dir, mods) || skipIgnoredNodes(view2, dir);
    } else if (code == 39 || mac && code == 70 && mods == "c") {
      let dir = code == 39 ? findDirection(view2, view2.state.selection.from) == "ltr" ? 1 : -1 : 1;
      return selectHorizontally(view2, dir, mods) || skipIgnoredNodes(view2, dir);
    } else if (code == 38 || mac && code == 80 && mods == "c") {
      return selectVertically(view2, -1, mods) || skipIgnoredNodes(view2, -1);
    } else if (code == 40 || mac && code == 78 && mods == "c") {
      return safariDownArrowBug(view2) || selectVertically(view2, 1, mods) || skipIgnoredNodes(view2, 1);
    } else if (mods == (mac ? "m" : "c") && (code == 66 || code == 73 || code == 89 || code == 90)) {
      return true;
    }
    return false;
  }
  function serializeForClipboard(view2, slice2) {
    view2.someProp("transformCopied", (f) => {
      slice2 = f(slice2, view2);
    });
    let context = [], { content, openStart, openEnd } = slice2;
    while (openStart > 1 && openEnd > 1 && content.childCount == 1 && content.firstChild.childCount == 1) {
      openStart--;
      openEnd--;
      let node = content.firstChild;
      context.push(node.type.name, node.attrs != node.type.defaultAttrs ? node.attrs : null);
      content = node.content;
    }
    let serializer = view2.someProp("clipboardSerializer") || DOMSerializer.fromSchema(view2.state.schema);
    let doc3 = detachedDoc(), wrap2 = doc3.createElement("div");
    wrap2.appendChild(serializer.serializeFragment(content, { document: doc3 }));
    let firstChild = wrap2.firstChild, needsWrap, wrappers = 0;
    while (firstChild && firstChild.nodeType == 1 && (needsWrap = wrapMap[firstChild.nodeName.toLowerCase()])) {
      for (let i = needsWrap.length - 1; i >= 0; i--) {
        let wrapper = doc3.createElement(needsWrap[i]);
        while (wrap2.firstChild)
          wrapper.appendChild(wrap2.firstChild);
        wrap2.appendChild(wrapper);
        wrappers++;
      }
      firstChild = wrap2.firstChild;
    }
    if (firstChild && firstChild.nodeType == 1)
      firstChild.setAttribute("data-pm-slice", `${openStart} ${openEnd}${wrappers ? ` -${wrappers}` : ""} ${JSON.stringify(context)}`);
    let text = view2.someProp("clipboardTextSerializer", (f) => f(slice2, view2)) || slice2.content.textBetween(0, slice2.content.size, "\n\n");
    return { dom: wrap2, text, slice: slice2 };
  }
  function parseFromClipboard(view2, text, html, plainText, $context) {
    let inCode = $context.parent.type.spec.code;
    let dom, slice2;
    if (!html && !text)
      return null;
    let asText = text && (plainText || inCode || !html);
    if (asText) {
      view2.someProp("transformPastedText", (f) => {
        text = f(text, inCode || plainText, view2);
      });
      if (inCode)
        return text ? new Slice(Fragment.from(view2.state.schema.text(text.replace(/\r\n?/g, "\n"))), 0, 0) : Slice.empty;
      let parsed = view2.someProp("clipboardTextParser", (f) => f(text, $context, plainText, view2));
      if (parsed) {
        slice2 = parsed;
      } else {
        let marks2 = $context.marks();
        let { schema: schema2 } = view2.state, serializer = DOMSerializer.fromSchema(schema2);
        dom = document.createElement("div");
        text.split(/(?:\r\n?|\n)+/).forEach((block) => {
          let p = dom.appendChild(document.createElement("p"));
          if (block)
            p.appendChild(serializer.serializeNode(schema2.text(block, marks2)));
        });
      }
    } else {
      view2.someProp("transformPastedHTML", (f) => {
        html = f(html, view2);
      });
      dom = readHTML(html);
      if (webkit)
        restoreReplacedSpaces(dom);
    }
    let contextNode = dom && dom.querySelector("[data-pm-slice]");
    let sliceData = contextNode && /^(\d+) (\d+)(?: -(\d+))? (.*)/.exec(contextNode.getAttribute("data-pm-slice") || "");
    if (sliceData && sliceData[3])
      for (let i = +sliceData[3]; i > 0; i--) {
        let child = dom.firstChild;
        while (child && child.nodeType != 1)
          child = child.nextSibling;
        if (!child)
          break;
        dom = child;
      }
    if (!slice2) {
      let parser = view2.someProp("clipboardParser") || view2.someProp("domParser") || DOMParser.fromSchema(view2.state.schema);
      slice2 = parser.parseSlice(dom, {
        preserveWhitespace: !!(asText || sliceData),
        context: $context,
        ruleFromNode(dom2) {
          if (dom2.nodeName == "BR" && !dom2.nextSibling && dom2.parentNode && !inlineParents.test(dom2.parentNode.nodeName))
            return { ignore: true };
          return null;
        }
      });
    }
    if (sliceData) {
      slice2 = addContext(closeSlice(slice2, +sliceData[1], +sliceData[2]), sliceData[4]);
    } else {
      slice2 = Slice.maxOpen(normalizeSiblings(slice2.content, $context), true);
      if (slice2.openStart || slice2.openEnd) {
        let openStart = 0, openEnd = 0;
        for (let node = slice2.content.firstChild; openStart < slice2.openStart && !node.type.spec.isolating; openStart++, node = node.firstChild) {
        }
        for (let node = slice2.content.lastChild; openEnd < slice2.openEnd && !node.type.spec.isolating; openEnd++, node = node.lastChild) {
        }
        slice2 = closeSlice(slice2, openStart, openEnd);
      }
    }
    view2.someProp("transformPasted", (f) => {
      slice2 = f(slice2, view2);
    });
    return slice2;
  }
  var inlineParents = /^(a|abbr|acronym|b|cite|code|del|em|i|ins|kbd|label|output|q|ruby|s|samp|span|strong|sub|sup|time|u|tt|var)$/i;
  function normalizeSiblings(fragment, $context) {
    if (fragment.childCount < 2)
      return fragment;
    for (let d = $context.depth; d >= 0; d--) {
      let parent = $context.node(d);
      let match = parent.contentMatchAt($context.index(d));
      let lastWrap, result = [];
      fragment.forEach((node) => {
        if (!result)
          return;
        let wrap2 = match.findWrapping(node.type), inLast;
        if (!wrap2)
          return result = null;
        if (inLast = result.length && lastWrap.length && addToSibling(wrap2, lastWrap, node, result[result.length - 1], 0)) {
          result[result.length - 1] = inLast;
        } else {
          if (result.length)
            result[result.length - 1] = closeRight(result[result.length - 1], lastWrap.length);
          let wrapped = withWrappers(node, wrap2);
          result.push(wrapped);
          match = match.matchType(wrapped.type);
          lastWrap = wrap2;
        }
      });
      if (result)
        return Fragment.from(result);
    }
    return fragment;
  }
  function withWrappers(node, wrap2, from2 = 0) {
    for (let i = wrap2.length - 1; i >= from2; i--)
      node = wrap2[i].create(null, Fragment.from(node));
    return node;
  }
  function addToSibling(wrap2, lastWrap, node, sibling, depth) {
    if (depth < wrap2.length && depth < lastWrap.length && wrap2[depth] == lastWrap[depth]) {
      let inner = addToSibling(wrap2, lastWrap, node, sibling.lastChild, depth + 1);
      if (inner)
        return sibling.copy(sibling.content.replaceChild(sibling.childCount - 1, inner));
      let match = sibling.contentMatchAt(sibling.childCount);
      if (match.matchType(depth == wrap2.length - 1 ? node.type : wrap2[depth + 1]))
        return sibling.copy(sibling.content.append(Fragment.from(withWrappers(node, wrap2, depth + 1))));
    }
  }
  function closeRight(node, depth) {
    if (depth == 0)
      return node;
    let fragment = node.content.replaceChild(node.childCount - 1, closeRight(node.lastChild, depth - 1));
    let fill = node.contentMatchAt(node.childCount).fillBefore(Fragment.empty, true);
    return node.copy(fragment.append(fill));
  }
  function closeRange(fragment, side, from2, to2, depth, openEnd) {
    let node = side < 0 ? fragment.firstChild : fragment.lastChild, inner = node.content;
    if (fragment.childCount > 1)
      openEnd = 0;
    if (depth < to2 - 1)
      inner = closeRange(inner, side, from2, to2, depth + 1, openEnd);
    if (depth >= from2)
      inner = side < 0 ? node.contentMatchAt(0).fillBefore(inner, openEnd <= depth).append(inner) : inner.append(node.contentMatchAt(node.childCount).fillBefore(Fragment.empty, true));
    return fragment.replaceChild(side < 0 ? 0 : fragment.childCount - 1, node.copy(inner));
  }
  function closeSlice(slice2, openStart, openEnd) {
    if (openStart < slice2.openStart)
      slice2 = new Slice(closeRange(slice2.content, -1, openStart, slice2.openStart, 0, slice2.openEnd), openStart, slice2.openEnd);
    if (openEnd < slice2.openEnd)
      slice2 = new Slice(closeRange(slice2.content, 1, openEnd, slice2.openEnd, 0, 0), slice2.openStart, openEnd);
    return slice2;
  }
  var wrapMap = {
    thead: ["table"],
    tbody: ["table"],
    tfoot: ["table"],
    caption: ["table"],
    colgroup: ["table"],
    col: ["table", "colgroup"],
    tr: ["table", "tbody"],
    td: ["table", "tbody", "tr"],
    th: ["table", "tbody", "tr"]
  };
  var _detachedDoc = null;
  function detachedDoc() {
    return _detachedDoc || (_detachedDoc = document.implementation.createHTMLDocument("title"));
  }
  var _policy = null;
  function maybeWrapTrusted(html) {
    let trustedTypes = window.trustedTypes;
    if (!trustedTypes)
      return html;
    if (!_policy)
      _policy = trustedTypes.defaultPolicy || trustedTypes.createPolicy("ProseMirrorClipboard", { createHTML: (s) => s });
    return _policy.createHTML(html);
  }
  function readHTML(html) {
    let metas = /^(\s*<meta [^>]*>)*/.exec(html);
    if (metas)
      html = html.slice(metas[0].length);
    let elt = detachedDoc().createElement("div");
    let firstTag = /<([a-z][^>\s]+)/i.exec(html), wrap2;
    if (wrap2 = firstTag && wrapMap[firstTag[1].toLowerCase()])
      html = wrap2.map((n) => "<" + n + ">").join("") + html + wrap2.map((n) => "</" + n + ">").reverse().join("");
    elt.innerHTML = maybeWrapTrusted(html);
    if (wrap2)
      for (let i = 0; i < wrap2.length; i++)
        elt = elt.querySelector(wrap2[i]) || elt;
    return elt;
  }
  function restoreReplacedSpaces(dom) {
    let nodes2 = dom.querySelectorAll(chrome2 ? "span:not([class]):not([style])" : "span.Apple-converted-space");
    for (let i = 0; i < nodes2.length; i++) {
      let node = nodes2[i];
      if (node.childNodes.length == 1 && node.textContent == "\xA0" && node.parentNode)
        node.parentNode.replaceChild(dom.ownerDocument.createTextNode(" "), node);
    }
  }
  function addContext(slice2, context) {
    if (!slice2.size)
      return slice2;
    let schema2 = slice2.content.firstChild.type.schema, array;
    try {
      array = JSON.parse(context);
    } catch (e) {
      return slice2;
    }
    let { content, openStart, openEnd } = slice2;
    for (let i = array.length - 2; i >= 0; i -= 2) {
      let type = schema2.nodes[array[i]];
      if (!type || type.hasRequiredAttrs())
        break;
      content = Fragment.from(type.create(array[i + 1], content));
      openStart++;
      openEnd++;
    }
    return new Slice(content, openStart, openEnd);
  }
  var handlers = {};
  var editHandlers = {};
  var passiveHandlers = { touchstart: true, touchmove: true };
  var InputState = class {
    constructor() {
      this.shiftKey = false;
      this.mouseDown = null;
      this.lastKeyCode = null;
      this.lastKeyCodeTime = 0;
      this.lastClick = { time: 0, x: 0, y: 0, type: "", button: 0 };
      this.lastSelectionOrigin = null;
      this.lastSelectionTime = 0;
      this.lastIOSEnter = 0;
      this.lastIOSEnterFallbackTimeout = -1;
      this.lastFocus = 0;
      this.lastTouch = 0;
      this.lastChromeDelete = 0;
      this.composing = false;
      this.compositionNode = null;
      this.composingTimeout = -1;
      this.compositionNodes = [];
      this.compositionEndedAt = -2e8;
      this.compositionID = 1;
      this.compositionPendingChanges = 0;
      this.domChangeCount = 0;
      this.eventHandlers = /* @__PURE__ */ Object.create(null);
      this.hideSelectionGuard = null;
    }
  };
  function initInput(view2) {
    for (let event in handlers) {
      let handler = handlers[event];
      view2.dom.addEventListener(event, view2.input.eventHandlers[event] = (event2) => {
        if (eventBelongsToView(view2, event2) && !runCustomHandler(view2, event2) && (view2.editable || !(event2.type in editHandlers)))
          handler(view2, event2);
      }, passiveHandlers[event] ? { passive: true } : void 0);
    }
    if (safari)
      view2.dom.addEventListener("input", () => null);
    ensureListeners(view2);
  }
  function setSelectionOrigin(view2, origin) {
    view2.input.lastSelectionOrigin = origin;
    view2.input.lastSelectionTime = Date.now();
  }
  function destroyInput(view2) {
    view2.domObserver.stop();
    for (let type in view2.input.eventHandlers)
      view2.dom.removeEventListener(type, view2.input.eventHandlers[type]);
    clearTimeout(view2.input.composingTimeout);
    clearTimeout(view2.input.lastIOSEnterFallbackTimeout);
  }
  function ensureListeners(view2) {
    view2.someProp("handleDOMEvents", (currentHandlers) => {
      for (let type in currentHandlers)
        if (!view2.input.eventHandlers[type])
          view2.dom.addEventListener(type, view2.input.eventHandlers[type] = (event) => runCustomHandler(view2, event));
    });
  }
  function runCustomHandler(view2, event) {
    return view2.someProp("handleDOMEvents", (handlers2) => {
      let handler = handlers2[event.type];
      return handler ? handler(view2, event) || event.defaultPrevented : false;
    });
  }
  function eventBelongsToView(view2, event) {
    if (!event.bubbles)
      return true;
    if (event.defaultPrevented)
      return false;
    for (let node = event.target; node != view2.dom; node = node.parentNode)
      if (!node || node.nodeType == 11 || node.pmViewDesc && node.pmViewDesc.stopEvent(event))
        return false;
    return true;
  }
  function dispatchEvent(view2, event) {
    if (!runCustomHandler(view2, event) && handlers[event.type] && (view2.editable || !(event.type in editHandlers)))
      handlers[event.type](view2, event);
  }
  editHandlers.keydown = (view2, _event) => {
    let event = _event;
    view2.input.shiftKey = event.keyCode == 16 || event.shiftKey;
    if (inOrNearComposition(view2, event))
      return;
    view2.input.lastKeyCode = event.keyCode;
    view2.input.lastKeyCodeTime = Date.now();
    if (android && chrome2 && event.keyCode == 13)
      return;
    if (event.keyCode != 229)
      view2.domObserver.forceFlush();
    if (ios && event.keyCode == 13 && !event.ctrlKey && !event.altKey && !event.metaKey) {
      let now = Date.now();
      view2.input.lastIOSEnter = now;
      view2.input.lastIOSEnterFallbackTimeout = setTimeout(() => {
        if (view2.input.lastIOSEnter == now) {
          view2.someProp("handleKeyDown", (f) => f(view2, keyEvent(13, "Enter")));
          view2.input.lastIOSEnter = 0;
        }
      }, 200);
    } else if (view2.someProp("handleKeyDown", (f) => f(view2, event)) || captureKeyDown(view2, event)) {
      event.preventDefault();
    } else {
      setSelectionOrigin(view2, "key");
    }
  };
  editHandlers.keyup = (view2, event) => {
    if (event.keyCode == 16)
      view2.input.shiftKey = false;
  };
  editHandlers.keypress = (view2, _event) => {
    let event = _event;
    if (inOrNearComposition(view2, event) || !event.charCode || event.ctrlKey && !event.altKey || mac && event.metaKey)
      return;
    if (view2.someProp("handleKeyPress", (f) => f(view2, event))) {
      event.preventDefault();
      return;
    }
    let sel = view2.state.selection;
    if (!(sel instanceof TextSelection) || !sel.$from.sameParent(sel.$to)) {
      let text = String.fromCharCode(event.charCode);
      let deflt = () => view2.state.tr.insertText(text).scrollIntoView();
      if (!/[\r\n]/.test(text) && !view2.someProp("handleTextInput", (f) => f(view2, sel.$from.pos, sel.$to.pos, text, deflt)))
        view2.dispatch(deflt());
      event.preventDefault();
    }
  };
  function eventCoords(event) {
    return { left: event.clientX, top: event.clientY };
  }
  function isNear(event, click) {
    let dx = click.x - event.clientX, dy = click.y - event.clientY;
    return dx * dx + dy * dy < 100;
  }
  function runHandlerOnContext(view2, propName, pos, inside, event) {
    if (inside == -1)
      return false;
    let $pos = view2.state.doc.resolve(inside);
    for (let i = $pos.depth + 1; i > 0; i--) {
      if (view2.someProp(propName, (f) => i > $pos.depth ? f(view2, pos, $pos.nodeAfter, $pos.before(i), event, true) : f(view2, pos, $pos.node(i), $pos.before(i), event, false)))
        return true;
    }
    return false;
  }
  function updateSelection(view2, selection, origin) {
    if (!view2.focused)
      view2.focus();
    if (view2.state.selection.eq(selection))
      return;
    let tr = view2.state.tr.setSelection(selection);
    if (origin == "pointer")
      tr.setMeta("pointer", true);
    view2.dispatch(tr);
  }
  function selectClickedLeaf(view2, inside) {
    if (inside == -1)
      return false;
    let $pos = view2.state.doc.resolve(inside), node = $pos.nodeAfter;
    if (node && node.isAtom && NodeSelection.isSelectable(node)) {
      updateSelection(view2, new NodeSelection($pos), "pointer");
      return true;
    }
    return false;
  }
  function selectClickedNode(view2, inside) {
    if (inside == -1)
      return false;
    let sel = view2.state.selection, selectedNode, selectAt;
    if (sel instanceof NodeSelection)
      selectedNode = sel.node;
    let $pos = view2.state.doc.resolve(inside);
    for (let i = $pos.depth + 1; i > 0; i--) {
      let node = i > $pos.depth ? $pos.nodeAfter : $pos.node(i);
      if (NodeSelection.isSelectable(node)) {
        if (selectedNode && sel.$from.depth > 0 && i >= sel.$from.depth && $pos.before(sel.$from.depth + 1) == sel.$from.pos)
          selectAt = $pos.before(sel.$from.depth);
        else
          selectAt = $pos.before(i);
        break;
      }
    }
    if (selectAt != null) {
      updateSelection(view2, NodeSelection.create(view2.state.doc, selectAt), "pointer");
      return true;
    } else {
      return false;
    }
  }
  function handleSingleClick(view2, pos, inside, event, selectNode) {
    return runHandlerOnContext(view2, "handleClickOn", pos, inside, event) || view2.someProp("handleClick", (f) => f(view2, pos, event)) || (selectNode ? selectClickedNode(view2, inside) : selectClickedLeaf(view2, inside));
  }
  function handleDoubleClick(view2, pos, inside, event) {
    return runHandlerOnContext(view2, "handleDoubleClickOn", pos, inside, event) || view2.someProp("handleDoubleClick", (f) => f(view2, pos, event));
  }
  function handleTripleClick(view2, pos, inside, event) {
    return runHandlerOnContext(view2, "handleTripleClickOn", pos, inside, event) || view2.someProp("handleTripleClick", (f) => f(view2, pos, event)) || defaultTripleClick(view2, inside, event);
  }
  function defaultTripleClick(view2, inside, event) {
    if (event.button != 0)
      return false;
    let doc3 = view2.state.doc;
    if (inside == -1) {
      if (doc3.inlineContent) {
        updateSelection(view2, TextSelection.create(doc3, 0, doc3.content.size), "pointer");
        return true;
      }
      return false;
    }
    let $pos = doc3.resolve(inside);
    for (let i = $pos.depth + 1; i > 0; i--) {
      let node = i > $pos.depth ? $pos.nodeAfter : $pos.node(i);
      let nodePos = $pos.before(i);
      if (node.inlineContent)
        updateSelection(view2, TextSelection.create(doc3, nodePos + 1, nodePos + 1 + node.content.size), "pointer");
      else if (NodeSelection.isSelectable(node))
        updateSelection(view2, NodeSelection.create(doc3, nodePos), "pointer");
      else
        continue;
      return true;
    }
  }
  function forceDOMFlush(view2) {
    return endComposition(view2);
  }
  var selectNodeModifier = mac ? "metaKey" : "ctrlKey";
  handlers.mousedown = (view2, _event) => {
    let event = _event;
    view2.input.shiftKey = event.shiftKey;
    let flushed = forceDOMFlush(view2);
    let now = Date.now(), type = "singleClick";
    if (now - view2.input.lastClick.time < 500 && isNear(event, view2.input.lastClick) && !event[selectNodeModifier] && view2.input.lastClick.button == event.button) {
      if (view2.input.lastClick.type == "singleClick")
        type = "doubleClick";
      else if (view2.input.lastClick.type == "doubleClick")
        type = "tripleClick";
    }
    view2.input.lastClick = { time: now, x: event.clientX, y: event.clientY, type, button: event.button };
    let pos = view2.posAtCoords(eventCoords(event));
    if (!pos)
      return;
    if (type == "singleClick") {
      if (view2.input.mouseDown)
        view2.input.mouseDown.done();
      view2.input.mouseDown = new MouseDown(view2, pos, event, !!flushed);
    } else if ((type == "doubleClick" ? handleDoubleClick : handleTripleClick)(view2, pos.pos, pos.inside, event)) {
      event.preventDefault();
    } else {
      setSelectionOrigin(view2, "pointer");
    }
  };
  var MouseDown = class {
    constructor(view2, pos, event, flushed) {
      this.view = view2;
      this.pos = pos;
      this.event = event;
      this.flushed = flushed;
      this.delayedSelectionSync = false;
      this.mightDrag = null;
      this.startDoc = view2.state.doc;
      this.selectNode = !!event[selectNodeModifier];
      this.allowDefault = event.shiftKey;
      let targetNode, targetPos;
      if (pos.inside > -1) {
        targetNode = view2.state.doc.nodeAt(pos.inside);
        targetPos = pos.inside;
      } else {
        let $pos = view2.state.doc.resolve(pos.pos);
        targetNode = $pos.parent;
        targetPos = $pos.depth ? $pos.before() : 0;
      }
      const target = flushed ? null : event.target;
      const targetDesc = target ? view2.docView.nearestDesc(target, true) : null;
      this.target = targetDesc && targetDesc.dom.nodeType == 1 ? targetDesc.dom : null;
      let { selection } = view2.state;
      if (event.button == 0 && targetNode.type.spec.draggable && targetNode.type.spec.selectable !== false || selection instanceof NodeSelection && selection.from <= targetPos && selection.to > targetPos)
        this.mightDrag = {
          node: targetNode,
          pos: targetPos,
          addAttr: !!(this.target && !this.target.draggable),
          setUneditable: !!(this.target && gecko && !this.target.hasAttribute("contentEditable"))
        };
      if (this.target && this.mightDrag && (this.mightDrag.addAttr || this.mightDrag.setUneditable)) {
        this.view.domObserver.stop();
        if (this.mightDrag.addAttr)
          this.target.draggable = true;
        if (this.mightDrag.setUneditable)
          setTimeout(() => {
            if (this.view.input.mouseDown == this)
              this.target.setAttribute("contentEditable", "false");
          }, 20);
        this.view.domObserver.start();
      }
      view2.root.addEventListener("mouseup", this.up = this.up.bind(this));
      view2.root.addEventListener("mousemove", this.move = this.move.bind(this));
      setSelectionOrigin(view2, "pointer");
    }
    done() {
      this.view.root.removeEventListener("mouseup", this.up);
      this.view.root.removeEventListener("mousemove", this.move);
      if (this.mightDrag && this.target) {
        this.view.domObserver.stop();
        if (this.mightDrag.addAttr)
          this.target.removeAttribute("draggable");
        if (this.mightDrag.setUneditable)
          this.target.removeAttribute("contentEditable");
        this.view.domObserver.start();
      }
      if (this.delayedSelectionSync)
        setTimeout(() => selectionToDOM(this.view));
      this.view.input.mouseDown = null;
    }
    up(event) {
      this.done();
      if (!this.view.dom.contains(event.target))
        return;
      let pos = this.pos;
      if (this.view.state.doc != this.startDoc)
        pos = this.view.posAtCoords(eventCoords(event));
      this.updateAllowDefault(event);
      if (this.allowDefault || !pos) {
        setSelectionOrigin(this.view, "pointer");
      } else if (handleSingleClick(this.view, pos.pos, pos.inside, event, this.selectNode)) {
        event.preventDefault();
      } else if (event.button == 0 && (this.flushed || // Safari ignores clicks on draggable elements
      safari && this.mightDrag && !this.mightDrag.node.isAtom || // Chrome will sometimes treat a node selection as a
      // cursor, but still report that the node is selected
      // when asked through getSelection. You'll then get a
      // situation where clicking at the point where that
      // (hidden) cursor is doesn't change the selection, and
      // thus doesn't get a reaction from ProseMirror. This
      // works around that.
      chrome2 && !this.view.state.selection.visible && Math.min(Math.abs(pos.pos - this.view.state.selection.from), Math.abs(pos.pos - this.view.state.selection.to)) <= 2)) {
        updateSelection(this.view, Selection.near(this.view.state.doc.resolve(pos.pos)), "pointer");
        event.preventDefault();
      } else {
        setSelectionOrigin(this.view, "pointer");
      }
    }
    move(event) {
      this.updateAllowDefault(event);
      setSelectionOrigin(this.view, "pointer");
      if (event.buttons == 0)
        this.done();
    }
    updateAllowDefault(event) {
      if (!this.allowDefault && (Math.abs(this.event.x - event.clientX) > 4 || Math.abs(this.event.y - event.clientY) > 4))
        this.allowDefault = true;
    }
  };
  handlers.touchstart = (view2) => {
    view2.input.lastTouch = Date.now();
    forceDOMFlush(view2);
    setSelectionOrigin(view2, "pointer");
  };
  handlers.touchmove = (view2) => {
    view2.input.lastTouch = Date.now();
    setSelectionOrigin(view2, "pointer");
  };
  handlers.contextmenu = (view2) => forceDOMFlush(view2);
  function inOrNearComposition(view2, event) {
    if (view2.composing)
      return true;
    if (safari && Math.abs(event.timeStamp - view2.input.compositionEndedAt) < 500) {
      view2.input.compositionEndedAt = -2e8;
      return true;
    }
    return false;
  }
  var timeoutComposition = android ? 5e3 : -1;
  editHandlers.compositionstart = editHandlers.compositionupdate = (view2) => {
    if (!view2.composing) {
      view2.domObserver.flush();
      let { state } = view2, $pos = state.selection.$to;
      if (state.selection instanceof TextSelection && (state.storedMarks || !$pos.textOffset && $pos.parentOffset && $pos.nodeBefore.marks.some((m) => m.type.spec.inclusive === false))) {
        view2.markCursor = view2.state.storedMarks || $pos.marks();
        endComposition(view2, true);
        view2.markCursor = null;
      } else {
        endComposition(view2, !state.selection.empty);
        if (gecko && state.selection.empty && $pos.parentOffset && !$pos.textOffset && $pos.nodeBefore.marks.length) {
          let sel = view2.domSelectionRange();
          for (let node = sel.focusNode, offset = sel.focusOffset; node && node.nodeType == 1 && offset != 0; ) {
            let before = offset < 0 ? node.lastChild : node.childNodes[offset - 1];
            if (!before)
              break;
            if (before.nodeType == 3) {
              let sel2 = view2.domSelection();
              if (sel2)
                sel2.collapse(before, before.nodeValue.length);
              break;
            } else {
              node = before;
              offset = -1;
            }
          }
        }
      }
      view2.input.composing = true;
    }
    scheduleComposeEnd(view2, timeoutComposition);
  };
  editHandlers.compositionend = (view2, event) => {
    if (view2.composing) {
      view2.input.composing = false;
      view2.input.compositionEndedAt = event.timeStamp;
      view2.input.compositionPendingChanges = view2.domObserver.pendingRecords().length ? view2.input.compositionID : 0;
      view2.input.compositionNode = null;
      if (view2.input.compositionPendingChanges)
        Promise.resolve().then(() => view2.domObserver.flush());
      view2.input.compositionID++;
      scheduleComposeEnd(view2, 20);
    }
  };
  function scheduleComposeEnd(view2, delay) {
    clearTimeout(view2.input.composingTimeout);
    if (delay > -1)
      view2.input.composingTimeout = setTimeout(() => endComposition(view2), delay);
  }
  function clearComposition(view2) {
    if (view2.composing) {
      view2.input.composing = false;
      view2.input.compositionEndedAt = timestampFromCustomEvent();
    }
    while (view2.input.compositionNodes.length > 0)
      view2.input.compositionNodes.pop().markParentsDirty();
  }
  function findCompositionNode(view2) {
    let sel = view2.domSelectionRange();
    if (!sel.focusNode)
      return null;
    let textBefore = textNodeBefore$1(sel.focusNode, sel.focusOffset);
    let textAfter = textNodeAfter$1(sel.focusNode, sel.focusOffset);
    if (textBefore && textAfter && textBefore != textAfter) {
      let descAfter = textAfter.pmViewDesc, lastChanged = view2.domObserver.lastChangedTextNode;
      if (textBefore == lastChanged || textAfter == lastChanged)
        return lastChanged;
      if (!descAfter || !descAfter.isText(textAfter.nodeValue)) {
        return textAfter;
      } else if (view2.input.compositionNode == textAfter) {
        let descBefore = textBefore.pmViewDesc;
        if (!(!descBefore || !descBefore.isText(textBefore.nodeValue)))
          return textAfter;
      }
    }
    return textBefore || textAfter;
  }
  function timestampFromCustomEvent() {
    let event = document.createEvent("Event");
    event.initEvent("event", true, true);
    return event.timeStamp;
  }
  function endComposition(view2, restarting = false) {
    if (android && view2.domObserver.flushingSoon >= 0)
      return;
    view2.domObserver.forceFlush();
    clearComposition(view2);
    if (restarting || view2.docView && view2.docView.dirty) {
      let sel = selectionFromDOM(view2), cur = view2.state.selection;
      if (sel && !sel.eq(cur))
        view2.dispatch(view2.state.tr.setSelection(sel));
      else if ((view2.markCursor || restarting) && !cur.$from.node(cur.$from.sharedDepth(cur.to)).inlineContent)
        view2.dispatch(view2.state.tr.deleteSelection());
      else
        view2.updateState(view2.state);
      return true;
    }
    return false;
  }
  function captureCopy(view2, dom) {
    if (!view2.dom.parentNode)
      return;
    let wrap2 = view2.dom.parentNode.appendChild(document.createElement("div"));
    wrap2.appendChild(dom);
    wrap2.style.cssText = "position: fixed; left: -10000px; top: 10px";
    let sel = getSelection(), range = document.createRange();
    range.selectNodeContents(dom);
    view2.dom.blur();
    sel.removeAllRanges();
    sel.addRange(range);
    setTimeout(() => {
      if (wrap2.parentNode)
        wrap2.parentNode.removeChild(wrap2);
      view2.focus();
    }, 50);
  }
  var brokenClipboardAPI = ie && ie_version < 15 || ios && webkit_version < 604;
  handlers.copy = editHandlers.cut = (view2, _event) => {
    let event = _event;
    let sel = view2.state.selection, cut = event.type == "cut";
    if (sel.empty)
      return;
    let data = brokenClipboardAPI ? null : event.clipboardData;
    let slice2 = sel.content(), { dom, text } = serializeForClipboard(view2, slice2);
    if (data) {
      event.preventDefault();
      data.clearData();
      data.setData("text/html", dom.innerHTML);
      data.setData("text/plain", text);
    } else {
      captureCopy(view2, dom);
    }
    if (cut)
      view2.dispatch(view2.state.tr.deleteSelection().scrollIntoView().setMeta("uiEvent", "cut"));
  };
  function sliceSingleNode(slice2) {
    return slice2.openStart == 0 && slice2.openEnd == 0 && slice2.content.childCount == 1 ? slice2.content.firstChild : null;
  }
  function capturePaste(view2, event) {
    if (!view2.dom.parentNode)
      return;
    let plainText = view2.input.shiftKey || view2.state.selection.$from.parent.type.spec.code;
    let target = view2.dom.parentNode.appendChild(document.createElement(plainText ? "textarea" : "div"));
    if (!plainText)
      target.contentEditable = "true";
    target.style.cssText = "position: fixed; left: -10000px; top: 10px";
    target.focus();
    let plain = view2.input.shiftKey && view2.input.lastKeyCode != 45;
    setTimeout(() => {
      view2.focus();
      if (target.parentNode)
        target.parentNode.removeChild(target);
      if (plainText)
        doPaste(view2, target.value, null, plain, event);
      else
        doPaste(view2, target.textContent, target.innerHTML, plain, event);
    }, 50);
  }
  function doPaste(view2, text, html, preferPlain, event) {
    let slice2 = parseFromClipboard(view2, text, html, preferPlain, view2.state.selection.$from);
    if (view2.someProp("handlePaste", (f) => f(view2, event, slice2 || Slice.empty)))
      return true;
    if (!slice2)
      return false;
    let singleNode = sliceSingleNode(slice2);
    let tr = singleNode ? view2.state.tr.replaceSelectionWith(singleNode, preferPlain) : view2.state.tr.replaceSelection(slice2);
    view2.dispatch(tr.scrollIntoView().setMeta("paste", true).setMeta("uiEvent", "paste"));
    return true;
  }
  function getText(clipboardData) {
    let text = clipboardData.getData("text/plain") || clipboardData.getData("Text");
    if (text)
      return text;
    let uris = clipboardData.getData("text/uri-list");
    return uris ? uris.replace(/\r?\n/g, " ") : "";
  }
  editHandlers.paste = (view2, _event) => {
    let event = _event;
    if (view2.composing && !android)
      return;
    let data = brokenClipboardAPI ? null : event.clipboardData;
    let plain = view2.input.shiftKey && view2.input.lastKeyCode != 45;
    if (data && doPaste(view2, getText(data), data.getData("text/html"), plain, event))
      event.preventDefault();
    else
      capturePaste(view2, event);
  };
  var Dragging = class {
    constructor(slice2, move, node) {
      this.slice = slice2;
      this.move = move;
      this.node = node;
    }
  };
  var dragCopyModifier = mac ? "altKey" : "ctrlKey";
  function dragMoves(view2, event) {
    let moves = view2.someProp("dragCopies", (test) => !test(event));
    return moves != null ? moves : !event[dragCopyModifier];
  }
  handlers.dragstart = (view2, _event) => {
    let event = _event;
    let mouseDown = view2.input.mouseDown;
    if (mouseDown)
      mouseDown.done();
    if (!event.dataTransfer)
      return;
    let sel = view2.state.selection;
    let pos = sel.empty ? null : view2.posAtCoords(eventCoords(event));
    let node;
    if (pos && pos.pos >= sel.from && pos.pos <= (sel instanceof NodeSelection ? sel.to - 1 : sel.to)) ;
    else if (mouseDown && mouseDown.mightDrag) {
      node = NodeSelection.create(view2.state.doc, mouseDown.mightDrag.pos);
    } else if (event.target && event.target.nodeType == 1) {
      let desc = view2.docView.nearestDesc(event.target, true);
      if (desc && desc.node.type.spec.draggable && desc != view2.docView)
        node = NodeSelection.create(view2.state.doc, desc.posBefore);
    }
    let draggedSlice = (node || view2.state.selection).content();
    let { dom, text, slice: slice2 } = serializeForClipboard(view2, draggedSlice);
    if (!event.dataTransfer.files.length || !chrome2 || chrome_version > 120)
      event.dataTransfer.clearData();
    event.dataTransfer.setData(brokenClipboardAPI ? "Text" : "text/html", dom.innerHTML);
    event.dataTransfer.effectAllowed = "copyMove";
    if (!brokenClipboardAPI)
      event.dataTransfer.setData("text/plain", text);
    view2.dragging = new Dragging(slice2, dragMoves(view2, event), node);
  };
  handlers.dragend = (view2) => {
    let dragging = view2.dragging;
    window.setTimeout(() => {
      if (view2.dragging == dragging)
        view2.dragging = null;
    }, 50);
  };
  editHandlers.dragover = editHandlers.dragenter = (_2, e) => e.preventDefault();
  editHandlers.drop = (view2, _event) => {
    let event = _event;
    let dragging = view2.dragging;
    view2.dragging = null;
    if (!event.dataTransfer)
      return;
    let eventPos = view2.posAtCoords(eventCoords(event));
    if (!eventPos)
      return;
    let $mouse = view2.state.doc.resolve(eventPos.pos);
    let slice2 = dragging && dragging.slice;
    if (slice2) {
      view2.someProp("transformPasted", (f) => {
        slice2 = f(slice2, view2);
      });
    } else {
      slice2 = parseFromClipboard(view2, getText(event.dataTransfer), brokenClipboardAPI ? null : event.dataTransfer.getData("text/html"), false, $mouse);
    }
    let move = !!(dragging && dragMoves(view2, event));
    if (view2.someProp("handleDrop", (f) => f(view2, event, slice2 || Slice.empty, move))) {
      event.preventDefault();
      return;
    }
    if (!slice2)
      return;
    event.preventDefault();
    let insertPos = slice2 ? dropPoint(view2.state.doc, $mouse.pos, slice2) : $mouse.pos;
    if (insertPos == null)
      insertPos = $mouse.pos;
    let tr = view2.state.tr;
    if (move) {
      let { node } = dragging;
      if (node)
        node.replace(tr);
      else
        tr.deleteSelection();
    }
    let pos = tr.mapping.map(insertPos);
    let isNode = slice2.openStart == 0 && slice2.openEnd == 0 && slice2.content.childCount == 1;
    let beforeInsert = tr.doc;
    if (isNode)
      tr.replaceRangeWith(pos, pos, slice2.content.firstChild);
    else
      tr.replaceRange(pos, pos, slice2);
    if (tr.doc.eq(beforeInsert))
      return;
    let $pos = tr.doc.resolve(pos);
    if (isNode && NodeSelection.isSelectable(slice2.content.firstChild) && $pos.nodeAfter && $pos.nodeAfter.sameMarkup(slice2.content.firstChild)) {
      tr.setSelection(new NodeSelection($pos));
    } else {
      let end = tr.mapping.map(insertPos);
      tr.mapping.maps[tr.mapping.maps.length - 1].forEach((_from, _to, _newFrom, newTo) => end = newTo);
      tr.setSelection(selectionBetween(view2, $pos, tr.doc.resolve(end)));
    }
    view2.focus();
    view2.dispatch(tr.setMeta("uiEvent", "drop"));
  };
  handlers.focus = (view2) => {
    view2.input.lastFocus = Date.now();
    if (!view2.focused) {
      view2.domObserver.stop();
      view2.dom.classList.add("ProseMirror-focused");
      view2.domObserver.start();
      view2.focused = true;
      setTimeout(() => {
        if (view2.docView && view2.hasFocus() && !view2.domObserver.currentSelection.eq(view2.domSelectionRange()))
          selectionToDOM(view2);
      }, 20);
    }
  };
  handlers.blur = (view2, _event) => {
    let event = _event;
    if (view2.focused) {
      view2.domObserver.stop();
      view2.dom.classList.remove("ProseMirror-focused");
      view2.domObserver.start();
      if (event.relatedTarget && view2.dom.contains(event.relatedTarget))
        view2.domObserver.currentSelection.clear();
      view2.focused = false;
    }
  };
  handlers.beforeinput = (view2, _event) => {
    let event = _event;
    if (chrome2 && android && event.inputType == "deleteContentBackward") {
      view2.domObserver.flushSoon();
      let { domChangeCount } = view2.input;
      setTimeout(() => {
        if (view2.input.domChangeCount != domChangeCount)
          return;
        view2.dom.blur();
        view2.focus();
        if (view2.someProp("handleKeyDown", (f) => f(view2, keyEvent(8, "Backspace"))))
          return;
        let { $cursor } = view2.state.selection;
        if ($cursor && $cursor.pos > 0)
          view2.dispatch(view2.state.tr.delete($cursor.pos - 1, $cursor.pos).scrollIntoView());
      }, 50);
    }
  };
  for (let prop in editHandlers)
    handlers[prop] = editHandlers[prop];
  function compareObjs(a, b) {
    if (a == b)
      return true;
    for (let p in a)
      if (a[p] !== b[p])
        return false;
    for (let p in b)
      if (!(p in a))
        return false;
    return true;
  }
  var WidgetType = class _WidgetType {
    constructor(toDOM, spec) {
      this.toDOM = toDOM;
      this.spec = spec || noSpec;
      this.side = this.spec.side || 0;
    }
    map(mapping, span, offset, oldOffset) {
      let { pos, deleted } = mapping.mapResult(span.from + oldOffset, this.side < 0 ? -1 : 1);
      return deleted ? null : new Decoration(pos - offset, pos - offset, this);
    }
    valid() {
      return true;
    }
    eq(other) {
      return this == other || other instanceof _WidgetType && (this.spec.key && this.spec.key == other.spec.key || this.toDOM == other.toDOM && compareObjs(this.spec, other.spec));
    }
    destroy(node) {
      if (this.spec.destroy)
        this.spec.destroy(node);
    }
  };
  var InlineType = class _InlineType {
    constructor(attrs, spec) {
      this.attrs = attrs;
      this.spec = spec || noSpec;
    }
    map(mapping, span, offset, oldOffset) {
      let from2 = mapping.map(span.from + oldOffset, this.spec.inclusiveStart ? -1 : 1) - offset;
      let to2 = mapping.map(span.to + oldOffset, this.spec.inclusiveEnd ? 1 : -1) - offset;
      return from2 >= to2 ? null : new Decoration(from2, to2, this);
    }
    valid(_2, span) {
      return span.from < span.to;
    }
    eq(other) {
      return this == other || other instanceof _InlineType && compareObjs(this.attrs, other.attrs) && compareObjs(this.spec, other.spec);
    }
    static is(span) {
      return span.type instanceof _InlineType;
    }
    destroy() {
    }
  };
  var NodeType2 = class _NodeType {
    constructor(attrs, spec) {
      this.attrs = attrs;
      this.spec = spec || noSpec;
    }
    map(mapping, span, offset, oldOffset) {
      let from2 = mapping.mapResult(span.from + oldOffset, 1);
      if (from2.deleted)
        return null;
      let to2 = mapping.mapResult(span.to + oldOffset, -1);
      if (to2.deleted || to2.pos <= from2.pos)
        return null;
      return new Decoration(from2.pos - offset, to2.pos - offset, this);
    }
    valid(node, span) {
      let { index, offset } = node.content.findIndex(span.from), child;
      return offset == span.from && !(child = node.child(index)).isText && offset + child.nodeSize == span.to;
    }
    eq(other) {
      return this == other || other instanceof _NodeType && compareObjs(this.attrs, other.attrs) && compareObjs(this.spec, other.spec);
    }
    destroy() {
    }
  };
  var Decoration = class _Decoration {
    /**
    @internal
    */
    constructor(from2, to2, type) {
      this.from = from2;
      this.to = to2;
      this.type = type;
    }
    /**
    @internal
    */
    copy(from2, to2) {
      return new _Decoration(from2, to2, this.type);
    }
    /**
    @internal
    */
    eq(other, offset = 0) {
      return this.type.eq(other.type) && this.from + offset == other.from && this.to + offset == other.to;
    }
    /**
    @internal
    */
    map(mapping, offset, oldOffset) {
      return this.type.map(mapping, this, offset, oldOffset);
    }
    /**
    Creates a widget decoration, which is a DOM node that's shown in
    the document at the given position. It is recommended that you
    delay rendering the widget by passing a function that will be
    called when the widget is actually drawn in a view, but you can
    also directly pass a DOM node. `getPos` can be used to find the
    widget's current document position.
    */
    static widget(pos, toDOM, spec) {
      return new _Decoration(pos, pos, new WidgetType(toDOM, spec));
    }
    /**
    Creates an inline decoration, which adds the given attributes to
    each inline node between `from` and `to`.
    */
    static inline(from2, to2, attrs, spec) {
      return new _Decoration(from2, to2, new InlineType(attrs, spec));
    }
    /**
    Creates a node decoration. `from` and `to` should point precisely
    before and after a node in the document. That node, and only that
    node, will receive the given attributes.
    */
    static node(from2, to2, attrs, spec) {
      return new _Decoration(from2, to2, new NodeType2(attrs, spec));
    }
    /**
    The spec provided when creating this decoration. Can be useful
    if you've stored extra information in that object.
    */
    get spec() {
      return this.type.spec;
    }
    /**
    @internal
    */
    get inline() {
      return this.type instanceof InlineType;
    }
    /**
    @internal
    */
    get widget() {
      return this.type instanceof WidgetType;
    }
  };
  var none = [];
  var noSpec = {};
  var DecorationSet = class _DecorationSet {
    /**
    @internal
    */
    constructor(local, children) {
      this.local = local.length ? local : none;
      this.children = children.length ? children : none;
    }
    /**
    Create a set of decorations, using the structure of the given
    document. This will consume (modify) the `decorations` array, so
    you must make a copy if you want need to preserve that.
    */
    static create(doc3, decorations) {
      return decorations.length ? buildTree(decorations, doc3, 0, noSpec) : empty;
    }
    /**
    Find all decorations in this set which touch the given range
    (including decorations that start or end directly at the
    boundaries) and match the given predicate on their spec. When
    `start` and `end` are omitted, all decorations in the set are
    considered. When `predicate` isn't given, all decorations are
    assumed to match.
    */
    find(start, end, predicate) {
      let result = [];
      this.findInner(start == null ? 0 : start, end == null ? 1e9 : end, result, 0, predicate);
      return result;
    }
    findInner(start, end, result, offset, predicate) {
      for (let i = 0; i < this.local.length; i++) {
        let span = this.local[i];
        if (span.from <= end && span.to >= start && (!predicate || predicate(span.spec)))
          result.push(span.copy(span.from + offset, span.to + offset));
      }
      for (let i = 0; i < this.children.length; i += 3) {
        if (this.children[i] < end && this.children[i + 1] > start) {
          let childOff = this.children[i] + 1;
          this.children[i + 2].findInner(start - childOff, end - childOff, result, offset + childOff, predicate);
        }
      }
    }
    /**
    Map the set of decorations in response to a change in the
    document.
    */
    map(mapping, doc3, options) {
      if (this == empty || mapping.maps.length == 0)
        return this;
      return this.mapInner(mapping, doc3, 0, 0, options || noSpec);
    }
    /**
    @internal
    */
    mapInner(mapping, node, offset, oldOffset, options) {
      let newLocal;
      for (let i = 0; i < this.local.length; i++) {
        let mapped = this.local[i].map(mapping, offset, oldOffset);
        if (mapped && mapped.type.valid(node, mapped))
          (newLocal || (newLocal = [])).push(mapped);
        else if (options.onRemove)
          options.onRemove(this.local[i].spec);
      }
      if (this.children.length)
        return mapChildren(this.children, newLocal || [], mapping, node, offset, oldOffset, options);
      else
        return newLocal ? new _DecorationSet(newLocal.sort(byPos), none) : empty;
    }
    /**
    Add the given array of decorations to the ones in the set,
    producing a new set. Consumes the `decorations` array. Needs
    access to the current document to create the appropriate tree
    structure.
    */
    add(doc3, decorations) {
      if (!decorations.length)
        return this;
      if (this == empty)
        return _DecorationSet.create(doc3, decorations);
      return this.addInner(doc3, decorations, 0);
    }
    addInner(doc3, decorations, offset) {
      let children, childIndex = 0;
      doc3.forEach((childNode, childOffset) => {
        let baseOffset = childOffset + offset, found2;
        if (!(found2 = takeSpansForNode(decorations, childNode, baseOffset)))
          return;
        if (!children)
          children = this.children.slice();
        while (childIndex < children.length && children[childIndex] < childOffset)
          childIndex += 3;
        if (children[childIndex] == childOffset)
          children[childIndex + 2] = children[childIndex + 2].addInner(childNode, found2, baseOffset + 1);
        else
          children.splice(childIndex, 0, childOffset, childOffset + childNode.nodeSize, buildTree(found2, childNode, baseOffset + 1, noSpec));
        childIndex += 3;
      });
      let local = moveSpans(childIndex ? withoutNulls(decorations) : decorations, -offset);
      for (let i = 0; i < local.length; i++)
        if (!local[i].type.valid(doc3, local[i]))
          local.splice(i--, 1);
      return new _DecorationSet(local.length ? this.local.concat(local).sort(byPos) : this.local, children || this.children);
    }
    /**
    Create a new set that contains the decorations in this set, minus
    the ones in the given array.
    */
    remove(decorations) {
      if (decorations.length == 0 || this == empty)
        return this;
      return this.removeInner(decorations, 0);
    }
    removeInner(decorations, offset) {
      let children = this.children, local = this.local;
      for (let i = 0; i < children.length; i += 3) {
        let found2;
        let from2 = children[i] + offset, to2 = children[i + 1] + offset;
        for (let j2 = 0, span; j2 < decorations.length; j2++)
          if (span = decorations[j2]) {
            if (span.from > from2 && span.to < to2) {
              decorations[j2] = null;
              (found2 || (found2 = [])).push(span);
            }
          }
        if (!found2)
          continue;
        if (children == this.children)
          children = this.children.slice();
        let removed = children[i + 2].removeInner(found2, from2 + 1);
        if (removed != empty) {
          children[i + 2] = removed;
        } else {
          children.splice(i, 3);
          i -= 3;
        }
      }
      if (local.length) {
        for (let i = 0, span; i < decorations.length; i++)
          if (span = decorations[i]) {
            for (let j2 = 0; j2 < local.length; j2++)
              if (local[j2].eq(span, offset)) {
                if (local == this.local)
                  local = this.local.slice();
                local.splice(j2--, 1);
              }
          }
      }
      if (children == this.children && local == this.local)
        return this;
      return local.length || children.length ? new _DecorationSet(local, children) : empty;
    }
    forChild(offset, node) {
      if (this == empty)
        return this;
      if (node.isLeaf)
        return _DecorationSet.empty;
      let child, local;
      for (let i = 0; i < this.children.length; i += 3)
        if (this.children[i] >= offset) {
          if (this.children[i] == offset)
            child = this.children[i + 2];
          break;
        }
      let start = offset + 1, end = start + node.content.size;
      for (let i = 0; i < this.local.length; i++) {
        let dec = this.local[i];
        if (dec.from < end && dec.to > start && dec.type instanceof InlineType) {
          let from2 = Math.max(start, dec.from) - start, to2 = Math.min(end, dec.to) - start;
          if (from2 < to2)
            (local || (local = [])).push(dec.copy(from2, to2));
        }
      }
      if (local) {
        let localSet = new _DecorationSet(local.sort(byPos), none);
        return child ? new DecorationGroup([localSet, child]) : localSet;
      }
      return child || empty;
    }
    /**
    @internal
    */
    eq(other) {
      if (this == other)
        return true;
      if (!(other instanceof _DecorationSet) || this.local.length != other.local.length || this.children.length != other.children.length)
        return false;
      for (let i = 0; i < this.local.length; i++)
        if (!this.local[i].eq(other.local[i]))
          return false;
      for (let i = 0; i < this.children.length; i += 3)
        if (this.children[i] != other.children[i] || this.children[i + 1] != other.children[i + 1] || !this.children[i + 2].eq(other.children[i + 2]))
          return false;
      return true;
    }
    /**
    @internal
    */
    locals(node) {
      return removeOverlap(this.localsInner(node));
    }
    /**
    @internal
    */
    localsInner(node) {
      if (this == empty)
        return none;
      if (node.inlineContent || !this.local.some(InlineType.is))
        return this.local;
      let result = [];
      for (let i = 0; i < this.local.length; i++) {
        if (!(this.local[i].type instanceof InlineType))
          result.push(this.local[i]);
      }
      return result;
    }
    forEachSet(f) {
      f(this);
    }
  };
  DecorationSet.empty = new DecorationSet([], []);
  DecorationSet.removeOverlap = removeOverlap;
  var empty = DecorationSet.empty;
  var DecorationGroup = class _DecorationGroup {
    constructor(members) {
      this.members = members;
    }
    map(mapping, doc3) {
      const mappedDecos = this.members.map((member) => member.map(mapping, doc3, noSpec));
      return _DecorationGroup.from(mappedDecos);
    }
    forChild(offset, child) {
      if (child.isLeaf)
        return DecorationSet.empty;
      let found2 = [];
      for (let i = 0; i < this.members.length; i++) {
        let result = this.members[i].forChild(offset, child);
        if (result == empty)
          continue;
        if (result instanceof _DecorationGroup)
          found2 = found2.concat(result.members);
        else
          found2.push(result);
      }
      return _DecorationGroup.from(found2);
    }
    eq(other) {
      if (!(other instanceof _DecorationGroup) || other.members.length != this.members.length)
        return false;
      for (let i = 0; i < this.members.length; i++)
        if (!this.members[i].eq(other.members[i]))
          return false;
      return true;
    }
    locals(node) {
      let result, sorted = true;
      for (let i = 0; i < this.members.length; i++) {
        let locals = this.members[i].localsInner(node);
        if (!locals.length)
          continue;
        if (!result) {
          result = locals;
        } else {
          if (sorted) {
            result = result.slice();
            sorted = false;
          }
          for (let j2 = 0; j2 < locals.length; j2++)
            result.push(locals[j2]);
        }
      }
      return result ? removeOverlap(sorted ? result : result.sort(byPos)) : none;
    }
    // Create a group for the given array of decoration sets, or return
    // a single set when possible.
    static from(members) {
      switch (members.length) {
        case 0:
          return empty;
        case 1:
          return members[0];
        default:
          return new _DecorationGroup(members.every((m) => m instanceof DecorationSet) ? members : members.reduce((r, m) => r.concat(m instanceof DecorationSet ? m : m.members), []));
      }
    }
    forEachSet(f) {
      for (let i = 0; i < this.members.length; i++)
        this.members[i].forEachSet(f);
    }
  };
  function mapChildren(oldChildren, newLocal, mapping, node, offset, oldOffset, options) {
    let children = oldChildren.slice();
    for (let i = 0, baseOffset = oldOffset; i < mapping.maps.length; i++) {
      let moved = 0;
      mapping.maps[i].forEach((oldStart, oldEnd, newStart, newEnd) => {
        let dSize = newEnd - newStart - (oldEnd - oldStart);
        for (let i2 = 0; i2 < children.length; i2 += 3) {
          let end = children[i2 + 1];
          if (end < 0 || oldStart > end + baseOffset - moved)
            continue;
          let start = children[i2] + baseOffset - moved;
          if (oldEnd >= start) {
            children[i2 + 1] = oldStart <= start ? -2 : -1;
          } else if (oldStart >= baseOffset && dSize) {
            children[i2] += dSize;
            children[i2 + 1] += dSize;
          }
        }
        moved += dSize;
      });
      baseOffset = mapping.maps[i].map(baseOffset, -1);
    }
    let mustRebuild = false;
    for (let i = 0; i < children.length; i += 3)
      if (children[i + 1] < 0) {
        if (children[i + 1] == -2) {
          mustRebuild = true;
          children[i + 1] = -1;
          continue;
        }
        let from2 = mapping.map(oldChildren[i] + oldOffset), fromLocal = from2 - offset;
        if (fromLocal < 0 || fromLocal >= node.content.size) {
          mustRebuild = true;
          continue;
        }
        let to2 = mapping.map(oldChildren[i + 1] + oldOffset, -1), toLocal = to2 - offset;
        let { index, offset: childOffset } = node.content.findIndex(fromLocal);
        let childNode = node.maybeChild(index);
        if (childNode && childOffset == fromLocal && childOffset + childNode.nodeSize == toLocal) {
          let mapped = children[i + 2].mapInner(mapping, childNode, from2 + 1, oldChildren[i] + oldOffset + 1, options);
          if (mapped != empty) {
            children[i] = fromLocal;
            children[i + 1] = toLocal;
            children[i + 2] = mapped;
          } else {
            children[i + 1] = -2;
            mustRebuild = true;
          }
        } else {
          mustRebuild = true;
        }
      }
    if (mustRebuild) {
      let decorations = mapAndGatherRemainingDecorations(children, oldChildren, newLocal, mapping, offset, oldOffset, options);
      let built = buildTree(decorations, node, 0, options);
      newLocal = built.local;
      for (let i = 0; i < children.length; i += 3)
        if (children[i + 1] < 0) {
          children.splice(i, 3);
          i -= 3;
        }
      for (let i = 0, j2 = 0; i < built.children.length; i += 3) {
        let from2 = built.children[i];
        while (j2 < children.length && children[j2] < from2)
          j2 += 3;
        children.splice(j2, 0, built.children[i], built.children[i + 1], built.children[i + 2]);
      }
    }
    return new DecorationSet(newLocal.sort(byPos), children);
  }
  function moveSpans(spans, offset) {
    if (!offset || !spans.length)
      return spans;
    let result = [];
    for (let i = 0; i < spans.length; i++) {
      let span = spans[i];
      result.push(new Decoration(span.from + offset, span.to + offset, span.type));
    }
    return result;
  }
  function mapAndGatherRemainingDecorations(children, oldChildren, decorations, mapping, offset, oldOffset, options) {
    function gather(set, oldOffset2) {
      for (let i = 0; i < set.local.length; i++) {
        let mapped = set.local[i].map(mapping, offset, oldOffset2);
        if (mapped)
          decorations.push(mapped);
        else if (options.onRemove)
          options.onRemove(set.local[i].spec);
      }
      for (let i = 0; i < set.children.length; i += 3)
        gather(set.children[i + 2], set.children[i] + oldOffset2 + 1);
    }
    for (let i = 0; i < children.length; i += 3)
      if (children[i + 1] == -1)
        gather(children[i + 2], oldChildren[i] + oldOffset + 1);
    return decorations;
  }
  function takeSpansForNode(spans, node, offset) {
    if (node.isLeaf)
      return null;
    let end = offset + node.nodeSize, found2 = null;
    for (let i = 0, span; i < spans.length; i++) {
      if ((span = spans[i]) && span.from > offset && span.to < end) {
        (found2 || (found2 = [])).push(span);
        spans[i] = null;
      }
    }
    return found2;
  }
  function withoutNulls(array) {
    let result = [];
    for (let i = 0; i < array.length; i++)
      if (array[i] != null)
        result.push(array[i]);
    return result;
  }
  function buildTree(spans, node, offset, options) {
    let children = [], hasNulls = false;
    node.forEach((childNode, localStart) => {
      let found2 = takeSpansForNode(spans, childNode, localStart + offset);
      if (found2) {
        hasNulls = true;
        let subtree = buildTree(found2, childNode, offset + localStart + 1, options);
        if (subtree != empty)
          children.push(localStart, localStart + childNode.nodeSize, subtree);
      }
    });
    let locals = moveSpans(hasNulls ? withoutNulls(spans) : spans, -offset).sort(byPos);
    for (let i = 0; i < locals.length; i++)
      if (!locals[i].type.valid(node, locals[i])) {
        if (options.onRemove)
          options.onRemove(locals[i].spec);
        locals.splice(i--, 1);
      }
    return locals.length || children.length ? new DecorationSet(locals, children) : empty;
  }
  function byPos(a, b) {
    return a.from - b.from || a.to - b.to;
  }
  function removeOverlap(spans) {
    let working = spans;
    for (let i = 0; i < working.length - 1; i++) {
      let span = working[i];
      if (span.from != span.to)
        for (let j2 = i + 1; j2 < working.length; j2++) {
          let next = working[j2];
          if (next.from == span.from) {
            if (next.to != span.to) {
              if (working == spans)
                working = spans.slice();
              working[j2] = next.copy(next.from, span.to);
              insertAhead(working, j2 + 1, next.copy(span.to, next.to));
            }
            continue;
          } else {
            if (next.from < span.to) {
              if (working == spans)
                working = spans.slice();
              working[i] = span.copy(span.from, next.from);
              insertAhead(working, j2, span.copy(next.from, span.to));
            }
            break;
          }
        }
    }
    return working;
  }
  function insertAhead(array, i, deco) {
    while (i < array.length && byPos(deco, array[i]) > 0)
      i++;
    array.splice(i, 0, deco);
  }
  function viewDecorations(view2) {
    let found2 = [];
    view2.someProp("decorations", (f) => {
      let result = f(view2.state);
      if (result && result != empty)
        found2.push(result);
    });
    if (view2.cursorWrapper)
      found2.push(DecorationSet.create(view2.state.doc, [view2.cursorWrapper.deco]));
    return DecorationGroup.from(found2);
  }
  var observeOptions = {
    childList: true,
    characterData: true,
    characterDataOldValue: true,
    attributes: true,
    attributeOldValue: true,
    subtree: true
  };
  var useCharData = ie && ie_version <= 11;
  var SelectionState = class {
    constructor() {
      this.anchorNode = null;
      this.anchorOffset = 0;
      this.focusNode = null;
      this.focusOffset = 0;
    }
    set(sel) {
      this.anchorNode = sel.anchorNode;
      this.anchorOffset = sel.anchorOffset;
      this.focusNode = sel.focusNode;
      this.focusOffset = sel.focusOffset;
    }
    clear() {
      this.anchorNode = this.focusNode = null;
    }
    eq(sel) {
      return sel.anchorNode == this.anchorNode && sel.anchorOffset == this.anchorOffset && sel.focusNode == this.focusNode && sel.focusOffset == this.focusOffset;
    }
  };
  var DOMObserver = class {
    constructor(view2, handleDOMChange) {
      this.view = view2;
      this.handleDOMChange = handleDOMChange;
      this.queue = [];
      this.flushingSoon = -1;
      this.observer = null;
      this.currentSelection = new SelectionState();
      this.onCharData = null;
      this.suppressingSelectionUpdates = false;
      this.lastChangedTextNode = null;
      this.observer = window.MutationObserver && new window.MutationObserver((mutations) => {
        for (let i = 0; i < mutations.length; i++)
          this.queue.push(mutations[i]);
        if (ie && ie_version <= 11 && mutations.some((m) => m.type == "childList" && m.removedNodes.length || m.type == "characterData" && m.oldValue.length > m.target.nodeValue.length))
          this.flushSoon();
        else
          this.flush();
      });
      if (useCharData) {
        this.onCharData = (e) => {
          this.queue.push({ target: e.target, type: "characterData", oldValue: e.prevValue });
          this.flushSoon();
        };
      }
      this.onSelectionChange = this.onSelectionChange.bind(this);
    }
    flushSoon() {
      if (this.flushingSoon < 0)
        this.flushingSoon = window.setTimeout(() => {
          this.flushingSoon = -1;
          this.flush();
        }, 20);
    }
    forceFlush() {
      if (this.flushingSoon > -1) {
        window.clearTimeout(this.flushingSoon);
        this.flushingSoon = -1;
        this.flush();
      }
    }
    start() {
      if (this.observer) {
        this.observer.takeRecords();
        this.observer.observe(this.view.dom, observeOptions);
      }
      if (this.onCharData)
        this.view.dom.addEventListener("DOMCharacterDataModified", this.onCharData);
      this.connectSelection();
    }
    stop() {
      if (this.observer) {
        let take = this.observer.takeRecords();
        if (take.length) {
          for (let i = 0; i < take.length; i++)
            this.queue.push(take[i]);
          window.setTimeout(() => this.flush(), 20);
        }
        this.observer.disconnect();
      }
      if (this.onCharData)
        this.view.dom.removeEventListener("DOMCharacterDataModified", this.onCharData);
      this.disconnectSelection();
    }
    connectSelection() {
      this.view.dom.ownerDocument.addEventListener("selectionchange", this.onSelectionChange);
    }
    disconnectSelection() {
      this.view.dom.ownerDocument.removeEventListener("selectionchange", this.onSelectionChange);
    }
    suppressSelectionUpdates() {
      this.suppressingSelectionUpdates = true;
      setTimeout(() => this.suppressingSelectionUpdates = false, 50);
    }
    onSelectionChange() {
      if (!hasFocusAndSelection(this.view))
        return;
      if (this.suppressingSelectionUpdates)
        return selectionToDOM(this.view);
      if (ie && ie_version <= 11 && !this.view.state.selection.empty) {
        let sel = this.view.domSelectionRange();
        if (sel.focusNode && isEquivalentPosition(sel.focusNode, sel.focusOffset, sel.anchorNode, sel.anchorOffset))
          return this.flushSoon();
      }
      this.flush();
    }
    setCurSelection() {
      this.currentSelection.set(this.view.domSelectionRange());
    }
    ignoreSelectionChange(sel) {
      if (!sel.focusNode)
        return true;
      let ancestors = /* @__PURE__ */ new Set(), container;
      for (let scan = sel.focusNode; scan; scan = parentNode(scan))
        ancestors.add(scan);
      for (let scan = sel.anchorNode; scan; scan = parentNode(scan))
        if (ancestors.has(scan)) {
          container = scan;
          break;
        }
      let desc = container && this.view.docView.nearestDesc(container);
      if (desc && desc.ignoreMutation({
        type: "selection",
        target: container.nodeType == 3 ? container.parentNode : container
      })) {
        this.setCurSelection();
        return true;
      }
    }
    pendingRecords() {
      if (this.observer)
        for (let mut of this.observer.takeRecords())
          this.queue.push(mut);
      return this.queue;
    }
    flush() {
      let { view: view2 } = this;
      if (!view2.docView || this.flushingSoon > -1)
        return;
      let mutations = this.pendingRecords();
      if (mutations.length)
        this.queue = [];
      let sel = view2.domSelectionRange();
      let newSel = !this.suppressingSelectionUpdates && !this.currentSelection.eq(sel) && hasFocusAndSelection(view2) && !this.ignoreSelectionChange(sel);
      let from2 = -1, to2 = -1, typeOver = false, added = [];
      if (view2.editable) {
        for (let i = 0; i < mutations.length; i++) {
          let result = this.registerMutation(mutations[i], added);
          if (result) {
            from2 = from2 < 0 ? result.from : Math.min(result.from, from2);
            to2 = to2 < 0 ? result.to : Math.max(result.to, to2);
            if (result.typeOver)
              typeOver = true;
          }
        }
      }
      if (gecko && added.length) {
        let brs = added.filter((n) => n.nodeName == "BR");
        if (brs.length == 2) {
          let [a, b] = brs;
          if (a.parentNode && a.parentNode.parentNode == b.parentNode)
            b.remove();
          else
            a.remove();
        } else {
          let { focusNode } = this.currentSelection;
          for (let br of brs) {
            let parent = br.parentNode;
            if (parent && parent.nodeName == "LI" && (!focusNode || blockParent(view2, focusNode) != parent))
              br.remove();
          }
        }
      }
      let readSel = null;
      if (from2 < 0 && newSel && view2.input.lastFocus > Date.now() - 200 && Math.max(view2.input.lastTouch, view2.input.lastClick.time) < Date.now() - 300 && selectionCollapsed(sel) && (readSel = selectionFromDOM(view2)) && readSel.eq(Selection.near(view2.state.doc.resolve(0), 1))) {
        view2.input.lastFocus = 0;
        selectionToDOM(view2);
        this.currentSelection.set(sel);
        view2.scrollToSelection();
      } else if (from2 > -1 || newSel) {
        if (from2 > -1) {
          view2.docView.markDirty(from2, to2);
          checkCSS(view2);
        }
        this.handleDOMChange(from2, to2, typeOver, added);
        if (view2.docView && view2.docView.dirty)
          view2.updateState(view2.state);
        else if (!this.currentSelection.eq(sel))
          selectionToDOM(view2);
        this.currentSelection.set(sel);
      }
    }
    registerMutation(mut, added) {
      if (added.indexOf(mut.target) > -1)
        return null;
      let desc = this.view.docView.nearestDesc(mut.target);
      if (mut.type == "attributes" && (desc == this.view.docView || mut.attributeName == "contenteditable" || // Firefox sometimes fires spurious events for null/empty styles
      mut.attributeName == "style" && !mut.oldValue && !mut.target.getAttribute("style")))
        return null;
      if (!desc || desc.ignoreMutation(mut))
        return null;
      if (mut.type == "childList") {
        for (let i = 0; i < mut.addedNodes.length; i++) {
          let node = mut.addedNodes[i];
          added.push(node);
          if (node.nodeType == 3)
            this.lastChangedTextNode = node;
        }
        if (desc.contentDOM && desc.contentDOM != desc.dom && !desc.contentDOM.contains(mut.target))
          return { from: desc.posBefore, to: desc.posAfter };
        let prev = mut.previousSibling, next = mut.nextSibling;
        if (ie && ie_version <= 11 && mut.addedNodes.length) {
          for (let i = 0; i < mut.addedNodes.length; i++) {
            let { previousSibling, nextSibling } = mut.addedNodes[i];
            if (!previousSibling || Array.prototype.indexOf.call(mut.addedNodes, previousSibling) < 0)
              prev = previousSibling;
            if (!nextSibling || Array.prototype.indexOf.call(mut.addedNodes, nextSibling) < 0)
              next = nextSibling;
          }
        }
        let fromOffset = prev && prev.parentNode == mut.target ? domIndex(prev) + 1 : 0;
        let from2 = desc.localPosFromDOM(mut.target, fromOffset, -1);
        let toOffset = next && next.parentNode == mut.target ? domIndex(next) : mut.target.childNodes.length;
        let to2 = desc.localPosFromDOM(mut.target, toOffset, 1);
        return { from: from2, to: to2 };
      } else if (mut.type == "attributes") {
        return { from: desc.posAtStart - desc.border, to: desc.posAtEnd + desc.border };
      } else {
        this.lastChangedTextNode = mut.target;
        return {
          from: desc.posAtStart,
          to: desc.posAtEnd,
          // An event was generated for a text change that didn't change
          // any text. Mark the dom change to fall back to assuming the
          // selection was typed over with an identical value if it can't
          // find another change.
          typeOver: mut.target.nodeValue == mut.oldValue
        };
      }
    }
  };
  var cssChecked = /* @__PURE__ */ new WeakMap();
  var cssCheckWarned = false;
  function checkCSS(view2) {
    if (cssChecked.has(view2))
      return;
    cssChecked.set(view2, null);
    if (["normal", "nowrap", "pre-line"].indexOf(getComputedStyle(view2.dom).whiteSpace) !== -1) {
      view2.requiresGeckoHackNode = gecko;
      if (cssCheckWarned)
        return;
      console["warn"]("ProseMirror expects the CSS white-space property to be set, preferably to 'pre-wrap'. It is recommended to load style/prosemirror.css from the prosemirror-view package.");
      cssCheckWarned = true;
    }
  }
  function rangeToSelectionRange(view2, range) {
    let anchorNode = range.startContainer, anchorOffset = range.startOffset;
    let focusNode = range.endContainer, focusOffset = range.endOffset;
    let currentAnchor = view2.domAtPos(view2.state.selection.anchor);
    if (isEquivalentPosition(currentAnchor.node, currentAnchor.offset, focusNode, focusOffset))
      [anchorNode, anchorOffset, focusNode, focusOffset] = [focusNode, focusOffset, anchorNode, anchorOffset];
    return { anchorNode, anchorOffset, focusNode, focusOffset };
  }
  function safariShadowSelectionRange(view2, selection) {
    if (selection.getComposedRanges) {
      let range = selection.getComposedRanges(view2.root)[0];
      if (range)
        return rangeToSelectionRange(view2, range);
    }
    let found2;
    function read(event) {
      event.preventDefault();
      event.stopImmediatePropagation();
      found2 = event.getTargetRanges()[0];
    }
    view2.dom.addEventListener("beforeinput", read, true);
    document.execCommand("indent");
    view2.dom.removeEventListener("beforeinput", read, true);
    return found2 ? rangeToSelectionRange(view2, found2) : null;
  }
  function blockParent(view2, node) {
    for (let p = node.parentNode; p && p != view2.dom; p = p.parentNode) {
      let desc = view2.docView.nearestDesc(p, true);
      if (desc && desc.node.isBlock)
        return p;
    }
    return null;
  }
  function parseBetween(view2, from_, to_) {
    let { node: parent, fromOffset, toOffset, from: from2, to: to2 } = view2.docView.parseRange(from_, to_);
    let domSel = view2.domSelectionRange();
    let find;
    let anchor = domSel.anchorNode;
    if (anchor && view2.dom.contains(anchor.nodeType == 1 ? anchor : anchor.parentNode)) {
      find = [{ node: anchor, offset: domSel.anchorOffset }];
      if (!selectionCollapsed(domSel))
        find.push({ node: domSel.focusNode, offset: domSel.focusOffset });
    }
    if (chrome2 && view2.input.lastKeyCode === 8) {
      for (let off = toOffset; off > fromOffset; off--) {
        let node = parent.childNodes[off - 1], desc = node.pmViewDesc;
        if (node.nodeName == "BR" && !desc) {
          toOffset = off;
          break;
        }
        if (!desc || desc.size)
          break;
      }
    }
    let startDoc = view2.state.doc;
    let parser = view2.someProp("domParser") || DOMParser.fromSchema(view2.state.schema);
    let $from = startDoc.resolve(from2);
    let sel = null, doc3 = parser.parse(parent, {
      topNode: $from.parent,
      topMatch: $from.parent.contentMatchAt($from.index()),
      topOpen: true,
      from: fromOffset,
      to: toOffset,
      preserveWhitespace: $from.parent.type.whitespace == "pre" ? "full" : true,
      findPositions: find,
      ruleFromNode,
      context: $from
    });
    if (find && find[0].pos != null) {
      let anchor2 = find[0].pos, head = find[1] && find[1].pos;
      if (head == null)
        head = anchor2;
      sel = { anchor: anchor2 + from2, head: head + from2 };
    }
    return { doc: doc3, sel, from: from2, to: to2 };
  }
  function ruleFromNode(dom) {
    let desc = dom.pmViewDesc;
    if (desc) {
      return desc.parseRule();
    } else if (dom.nodeName == "BR" && dom.parentNode) {
      if (safari && /^(ul|ol)$/i.test(dom.parentNode.nodeName)) {
        let skip = document.createElement("div");
        skip.appendChild(document.createElement("li"));
        return { skip };
      } else if (dom.parentNode.lastChild == dom || safari && /^(tr|table)$/i.test(dom.parentNode.nodeName)) {
        return { ignore: true };
      }
    } else if (dom.nodeName == "IMG" && dom.getAttribute("mark-placeholder")) {
      return { ignore: true };
    }
    return null;
  }
  var isInline = /^(a|abbr|acronym|b|bd[io]|big|br|button|cite|code|data(list)?|del|dfn|em|i|img|ins|kbd|label|map|mark|meter|output|q|ruby|s|samp|small|span|strong|su[bp]|time|u|tt|var)$/i;
  function readDOMChange(view2, from2, to2, typeOver, addedNodes) {
    let compositionID = view2.input.compositionPendingChanges || (view2.composing ? view2.input.compositionID : 0);
    view2.input.compositionPendingChanges = 0;
    if (from2 < 0) {
      let origin = view2.input.lastSelectionTime > Date.now() - 50 ? view2.input.lastSelectionOrigin : null;
      let newSel = selectionFromDOM(view2, origin);
      if (newSel && !view2.state.selection.eq(newSel)) {
        if (chrome2 && android && view2.input.lastKeyCode === 13 && Date.now() - 100 < view2.input.lastKeyCodeTime && view2.someProp("handleKeyDown", (f) => f(view2, keyEvent(13, "Enter"))))
          return;
        let tr = view2.state.tr.setSelection(newSel);
        if (origin == "pointer")
          tr.setMeta("pointer", true);
        else if (origin == "key")
          tr.scrollIntoView();
        if (compositionID)
          tr.setMeta("composition", compositionID);
        view2.dispatch(tr);
      }
      return;
    }
    let $before = view2.state.doc.resolve(from2);
    let shared = $before.sharedDepth(to2);
    from2 = $before.before(shared + 1);
    to2 = view2.state.doc.resolve(to2).after(shared + 1);
    let sel = view2.state.selection;
    let parse = parseBetween(view2, from2, to2);
    let doc3 = view2.state.doc, compare = doc3.slice(parse.from, parse.to);
    let preferredPos, preferredSide;
    if (view2.input.lastKeyCode === 8 && Date.now() - 100 < view2.input.lastKeyCodeTime) {
      preferredPos = view2.state.selection.to;
      preferredSide = "end";
    } else {
      preferredPos = view2.state.selection.from;
      preferredSide = "start";
    }
    view2.input.lastKeyCode = null;
    let change = findDiff(compare.content, parse.doc.content, parse.from, preferredPos, preferredSide);
    if (change)
      view2.input.domChangeCount++;
    if ((ios && view2.input.lastIOSEnter > Date.now() - 225 || android) && addedNodes.some((n) => n.nodeType == 1 && !isInline.test(n.nodeName)) && (!change || change.endA >= change.endB) && view2.someProp("handleKeyDown", (f) => f(view2, keyEvent(13, "Enter")))) {
      view2.input.lastIOSEnter = 0;
      return;
    }
    if (!change) {
      if (typeOver && sel instanceof TextSelection && !sel.empty && sel.$head.sameParent(sel.$anchor) && !view2.composing && !(parse.sel && parse.sel.anchor != parse.sel.head)) {
        change = { start: sel.from, endA: sel.to, endB: sel.to };
      } else {
        if (parse.sel) {
          let sel2 = resolveSelection(view2, view2.state.doc, parse.sel);
          if (sel2 && !sel2.eq(view2.state.selection)) {
            let tr = view2.state.tr.setSelection(sel2);
            if (compositionID)
              tr.setMeta("composition", compositionID);
            view2.dispatch(tr);
          }
        }
        return;
      }
    }
    if (view2.state.selection.from < view2.state.selection.to && change.start == change.endB && view2.state.selection instanceof TextSelection) {
      if (change.start > view2.state.selection.from && change.start <= view2.state.selection.from + 2 && view2.state.selection.from >= parse.from) {
        change.start = view2.state.selection.from;
      } else if (change.endA < view2.state.selection.to && change.endA >= view2.state.selection.to - 2 && view2.state.selection.to <= parse.to) {
        change.endB += view2.state.selection.to - change.endA;
        change.endA = view2.state.selection.to;
      }
    }
    if (ie && ie_version <= 11 && change.endB == change.start + 1 && change.endA == change.start && change.start > parse.from && parse.doc.textBetween(change.start - parse.from - 1, change.start - parse.from + 1) == " \xA0") {
      change.start--;
      change.endA--;
      change.endB--;
    }
    let $from = parse.doc.resolveNoCache(change.start - parse.from);
    let $to = parse.doc.resolveNoCache(change.endB - parse.from);
    let $fromA = doc3.resolve(change.start);
    let inlineChange = $from.sameParent($to) && $from.parent.inlineContent && $fromA.end() >= change.endA;
    let nextSel;
    if ((ios && view2.input.lastIOSEnter > Date.now() - 225 && (!inlineChange || addedNodes.some((n) => n.nodeName == "DIV" || n.nodeName == "P")) || !inlineChange && $from.pos < parse.doc.content.size && (!$from.sameParent($to) || !$from.parent.inlineContent) && !/\S/.test(parse.doc.textBetween($from.pos, $to.pos, "", "")) && (nextSel = Selection.findFrom(parse.doc.resolve($from.pos + 1), 1, true)) && nextSel.head > $from.pos) && view2.someProp("handleKeyDown", (f) => f(view2, keyEvent(13, "Enter")))) {
      view2.input.lastIOSEnter = 0;
      return;
    }
    if (view2.state.selection.anchor > change.start && looksLikeBackspace(doc3, change.start, change.endA, $from, $to) && view2.someProp("handleKeyDown", (f) => f(view2, keyEvent(8, "Backspace")))) {
      if (android && chrome2)
        view2.domObserver.suppressSelectionUpdates();
      return;
    }
    if (chrome2 && change.endB == change.start)
      view2.input.lastChromeDelete = Date.now();
    if (android && !inlineChange && $from.start() != $to.start() && $to.parentOffset == 0 && $from.depth == $to.depth && parse.sel && parse.sel.anchor == parse.sel.head && parse.sel.head == change.endA) {
      change.endB -= 2;
      $to = parse.doc.resolveNoCache(change.endB - parse.from);
      setTimeout(() => {
        view2.someProp("handleKeyDown", function(f) {
          return f(view2, keyEvent(13, "Enter"));
        });
      }, 20);
    }
    let chFrom = change.start, chTo = change.endA;
    let mkTr = (base2) => {
      let tr = base2 || view2.state.tr.replace(chFrom, chTo, parse.doc.slice(change.start - parse.from, change.endB - parse.from));
      if (parse.sel) {
        let sel2 = resolveSelection(view2, tr.doc, parse.sel);
        if (sel2 && !(chrome2 && view2.composing && sel2.empty && (change.start != change.endB || view2.input.lastChromeDelete < Date.now() - 100) && (sel2.head == chFrom || sel2.head == tr.mapping.map(chTo) - 1) || ie && sel2.empty && sel2.head == chFrom))
          tr.setSelection(sel2);
      }
      if (compositionID)
        tr.setMeta("composition", compositionID);
      return tr.scrollIntoView();
    };
    let markChange;
    if (inlineChange) {
      if ($from.pos == $to.pos) {
        if (ie && ie_version <= 11 && $from.parentOffset == 0) {
          view2.domObserver.suppressSelectionUpdates();
          setTimeout(() => selectionToDOM(view2), 20);
        }
        let tr = mkTr(view2.state.tr.delete(chFrom, chTo));
        let marks2 = doc3.resolve(change.start).marksAcross(doc3.resolve(change.endA));
        if (marks2)
          tr.ensureMarks(marks2);
        view2.dispatch(tr);
      } else if (
        // Adding or removing a mark
        change.endA == change.endB && (markChange = isMarkChange($from.parent.content.cut($from.parentOffset, $to.parentOffset), $fromA.parent.content.cut($fromA.parentOffset, change.endA - $fromA.start())))
      ) {
        let tr = mkTr(view2.state.tr);
        if (markChange.type == "add")
          tr.addMark(chFrom, chTo, markChange.mark);
        else
          tr.removeMark(chFrom, chTo, markChange.mark);
        view2.dispatch(tr);
      } else if ($from.parent.child($from.index()).isText && $from.index() == $to.index() - ($to.textOffset ? 0 : 1)) {
        let text = $from.parent.textBetween($from.parentOffset, $to.parentOffset);
        let deflt = () => mkTr(view2.state.tr.insertText(text, chFrom, chTo));
        if (!view2.someProp("handleTextInput", (f) => f(view2, chFrom, chTo, text, deflt)))
          view2.dispatch(deflt());
      }
    } else {
      view2.dispatch(mkTr());
    }
  }
  function resolveSelection(view2, doc3, parsedSel) {
    if (Math.max(parsedSel.anchor, parsedSel.head) > doc3.content.size)
      return null;
    return selectionBetween(view2, doc3.resolve(parsedSel.anchor), doc3.resolve(parsedSel.head));
  }
  function isMarkChange(cur, prev) {
    let curMarks = cur.firstChild.marks, prevMarks = prev.firstChild.marks;
    let added = curMarks, removed = prevMarks, type, mark, update;
    for (let i = 0; i < prevMarks.length; i++)
      added = prevMarks[i].removeFromSet(added);
    for (let i = 0; i < curMarks.length; i++)
      removed = curMarks[i].removeFromSet(removed);
    if (added.length == 1 && removed.length == 0) {
      mark = added[0];
      type = "add";
      update = (node) => node.mark(mark.addToSet(node.marks));
    } else if (added.length == 0 && removed.length == 1) {
      mark = removed[0];
      type = "remove";
      update = (node) => node.mark(mark.removeFromSet(node.marks));
    } else {
      return null;
    }
    let updated = [];
    for (let i = 0; i < prev.childCount; i++)
      updated.push(update(prev.child(i)));
    if (Fragment.from(updated).eq(cur))
      return { mark, type };
  }
  function looksLikeBackspace(old, start, end, $newStart, $newEnd) {
    if (
      // The content must have shrunk
      end - start <= $newEnd.pos - $newStart.pos || // newEnd must point directly at or after the end of the block that newStart points into
      skipClosingAndOpening($newStart, true, false) < $newEnd.pos
    )
      return false;
    let $start = old.resolve(start);
    if (!$newStart.parent.isTextblock) {
      let after = $start.nodeAfter;
      return after != null && end == start + after.nodeSize;
    }
    if ($start.parentOffset < $start.parent.content.size || !$start.parent.isTextblock)
      return false;
    let $next = old.resolve(skipClosingAndOpening($start, true, true));
    if (!$next.parent.isTextblock || $next.pos > end || skipClosingAndOpening($next, true, false) < end)
      return false;
    return $newStart.parent.content.cut($newStart.parentOffset).eq($next.parent.content);
  }
  function skipClosingAndOpening($pos, fromEnd, mayOpen) {
    let depth = $pos.depth, end = fromEnd ? $pos.end() : $pos.pos;
    while (depth > 0 && (fromEnd || $pos.indexAfter(depth) == $pos.node(depth).childCount)) {
      depth--;
      end++;
      fromEnd = false;
    }
    if (mayOpen) {
      let next = $pos.node(depth).maybeChild($pos.indexAfter(depth));
      while (next && !next.isLeaf) {
        next = next.firstChild;
        end++;
      }
    }
    return end;
  }
  function findDiff(a, b, pos, preferredPos, preferredSide) {
    let start = a.findDiffStart(b, pos);
    if (start == null)
      return null;
    let { a: endA, b: endB } = a.findDiffEnd(b, pos + a.size, pos + b.size);
    if (preferredSide == "end") {
      let adjust = Math.max(0, start - Math.min(endA, endB));
      preferredPos -= endA + adjust - start;
    }
    if (endA < start && a.size < b.size) {
      let move = preferredPos <= start && preferredPos >= endA ? start - preferredPos : 0;
      start -= move;
      if (start && start < b.size && isSurrogatePair(b.textBetween(start - 1, start + 1)))
        start += move ? 1 : -1;
      endB = start + (endB - endA);
      endA = start;
    } else if (endB < start) {
      let move = preferredPos <= start && preferredPos >= endB ? start - preferredPos : 0;
      start -= move;
      if (start && start < a.size && isSurrogatePair(a.textBetween(start - 1, start + 1)))
        start += move ? 1 : -1;
      endA = start + (endA - endB);
      endB = start;
    }
    return { start, endA, endB };
  }
  function isSurrogatePair(str) {
    if (str.length != 2)
      return false;
    let a = str.charCodeAt(0), b = str.charCodeAt(1);
    return a >= 56320 && a <= 57343 && b >= 55296 && b <= 56319;
  }
  var EditorView = class {
    /**
    Create a view. `place` may be a DOM node that the editor should
    be appended to, a function that will place it into the document,
    or an object whose `mount` property holds the node to use as the
    document container. If it is `null`, the editor will not be
    added to the document.
    */
    constructor(place, props) {
      this._root = null;
      this.focused = false;
      this.trackWrites = null;
      this.mounted = false;
      this.markCursor = null;
      this.cursorWrapper = null;
      this.lastSelectedViewDesc = void 0;
      this.input = new InputState();
      this.prevDirectPlugins = [];
      this.pluginViews = [];
      this.requiresGeckoHackNode = false;
      this.dragging = null;
      this._props = props;
      this.state = props.state;
      this.directPlugins = props.plugins || [];
      this.directPlugins.forEach(checkStateComponent);
      this.dispatch = this.dispatch.bind(this);
      this.dom = place && place.mount || document.createElement("div");
      if (place) {
        if (place.appendChild)
          place.appendChild(this.dom);
        else if (typeof place == "function")
          place(this.dom);
        else if (place.mount)
          this.mounted = true;
      }
      this.editable = getEditable(this);
      updateCursorWrapper(this);
      this.nodeViews = buildNodeViews(this);
      this.docView = docViewDesc(this.state.doc, computeDocDeco(this), viewDecorations(this), this.dom, this);
      this.domObserver = new DOMObserver(this, (from2, to2, typeOver, added) => readDOMChange(this, from2, to2, typeOver, added));
      this.domObserver.start();
      initInput(this);
      this.updatePluginViews();
    }
    /**
    Holds `true` when a
    [composition](https://w3c.github.io/uievents/#events-compositionevents)
    is active.
    */
    get composing() {
      return this.input.composing;
    }
    /**
    The view's current [props](https://prosemirror.net/docs/ref/#view.EditorProps).
    */
    get props() {
      if (this._props.state != this.state) {
        let prev = this._props;
        this._props = {};
        for (let name in prev)
          this._props[name] = prev[name];
        this._props.state = this.state;
      }
      return this._props;
    }
    /**
    Update the view's props. Will immediately cause an update to
    the DOM.
    */
    update(props) {
      if (props.handleDOMEvents != this._props.handleDOMEvents)
        ensureListeners(this);
      let prevProps = this._props;
      this._props = props;
      if (props.plugins) {
        props.plugins.forEach(checkStateComponent);
        this.directPlugins = props.plugins;
      }
      this.updateStateInner(props.state, prevProps);
    }
    /**
    Update the view by updating existing props object with the object
    given as argument. Equivalent to `view.update(Object.assign({},
    view.props, props))`.
    */
    setProps(props) {
      let updated = {};
      for (let name in this._props)
        updated[name] = this._props[name];
      updated.state = this.state;
      for (let name in props)
        updated[name] = props[name];
      this.update(updated);
    }
    /**
    Update the editor's `state` prop, without touching any of the
    other props.
    */
    updateState(state) {
      this.updateStateInner(state, this._props);
    }
    updateStateInner(state, prevProps) {
      var _a;
      let prev = this.state, redraw = false, updateSel = false;
      if (state.storedMarks && this.composing) {
        clearComposition(this);
        updateSel = true;
      }
      this.state = state;
      let pluginsChanged = prev.plugins != state.plugins || this._props.plugins != prevProps.plugins;
      if (pluginsChanged || this._props.plugins != prevProps.plugins || this._props.nodeViews != prevProps.nodeViews) {
        let nodeViews = buildNodeViews(this);
        if (changedNodeViews(nodeViews, this.nodeViews)) {
          this.nodeViews = nodeViews;
          redraw = true;
        }
      }
      if (pluginsChanged || prevProps.handleDOMEvents != this._props.handleDOMEvents) {
        ensureListeners(this);
      }
      this.editable = getEditable(this);
      updateCursorWrapper(this);
      let innerDeco = viewDecorations(this), outerDeco = computeDocDeco(this);
      let scroll = prev.plugins != state.plugins && !prev.doc.eq(state.doc) ? "reset" : state.scrollToSelection > prev.scrollToSelection ? "to selection" : "preserve";
      let updateDoc = redraw || !this.docView.matchesNode(state.doc, outerDeco, innerDeco);
      if (updateDoc || !state.selection.eq(prev.selection))
        updateSel = true;
      let oldScrollPos = scroll == "preserve" && updateSel && this.dom.style.overflowAnchor == null && storeScrollPos(this);
      if (updateSel) {
        this.domObserver.stop();
        let forceSelUpdate = updateDoc && (ie || chrome2) && !this.composing && !prev.selection.empty && !state.selection.empty && selectionContextChanged(prev.selection, state.selection);
        if (updateDoc) {
          let chromeKludge = chrome2 ? this.trackWrites = this.domSelectionRange().focusNode : null;
          if (this.composing)
            this.input.compositionNode = findCompositionNode(this);
          if (redraw || !this.docView.update(state.doc, outerDeco, innerDeco, this)) {
            this.docView.updateOuterDeco(outerDeco);
            this.docView.destroy();
            this.docView = docViewDesc(state.doc, outerDeco, innerDeco, this.dom, this);
          }
          if (chromeKludge && !this.trackWrites)
            forceSelUpdate = true;
        }
        if (forceSelUpdate || !(this.input.mouseDown && this.domObserver.currentSelection.eq(this.domSelectionRange()) && anchorInRightPlace(this))) {
          selectionToDOM(this, forceSelUpdate);
        } else {
          syncNodeSelection(this, state.selection);
          this.domObserver.setCurSelection();
        }
        this.domObserver.start();
      }
      this.updatePluginViews(prev);
      if (((_a = this.dragging) === null || _a === void 0 ? void 0 : _a.node) && !prev.doc.eq(state.doc))
        this.updateDraggedNode(this.dragging, prev);
      if (scroll == "reset") {
        this.dom.scrollTop = 0;
      } else if (scroll == "to selection") {
        this.scrollToSelection();
      } else if (oldScrollPos) {
        resetScrollPos(oldScrollPos);
      }
    }
    /**
    @internal
    */
    scrollToSelection() {
      let startDOM = this.domSelectionRange().focusNode;
      if (!startDOM || !this.dom.contains(startDOM.nodeType == 1 ? startDOM : startDOM.parentNode)) ;
      else if (this.someProp("handleScrollToSelection", (f) => f(this))) ;
      else if (this.state.selection instanceof NodeSelection) {
        let target = this.docView.domAfterPos(this.state.selection.from);
        if (target.nodeType == 1)
          scrollRectIntoView(this, target.getBoundingClientRect(), startDOM);
      } else {
        scrollRectIntoView(this, this.coordsAtPos(this.state.selection.head, 1), startDOM);
      }
    }
    destroyPluginViews() {
      let view2;
      while (view2 = this.pluginViews.pop())
        if (view2.destroy)
          view2.destroy();
    }
    updatePluginViews(prevState) {
      if (!prevState || prevState.plugins != this.state.plugins || this.directPlugins != this.prevDirectPlugins) {
        this.prevDirectPlugins = this.directPlugins;
        this.destroyPluginViews();
        for (let i = 0; i < this.directPlugins.length; i++) {
          let plugin = this.directPlugins[i];
          if (plugin.spec.view)
            this.pluginViews.push(plugin.spec.view(this));
        }
        for (let i = 0; i < this.state.plugins.length; i++) {
          let plugin = this.state.plugins[i];
          if (plugin.spec.view)
            this.pluginViews.push(plugin.spec.view(this));
        }
      } else {
        for (let i = 0; i < this.pluginViews.length; i++) {
          let pluginView = this.pluginViews[i];
          if (pluginView.update)
            pluginView.update(this, prevState);
        }
      }
    }
    updateDraggedNode(dragging, prev) {
      let sel = dragging.node, found2 = -1;
      if (this.state.doc.nodeAt(sel.from) == sel.node) {
        found2 = sel.from;
      } else {
        let movedPos = sel.from + (this.state.doc.content.size - prev.doc.content.size);
        let moved = movedPos > 0 && this.state.doc.nodeAt(movedPos);
        if (moved == sel.node)
          found2 = movedPos;
      }
      this.dragging = new Dragging(dragging.slice, dragging.move, found2 < 0 ? void 0 : NodeSelection.create(this.state.doc, found2));
    }
    someProp(propName, f) {
      let prop = this._props && this._props[propName], value;
      if (prop != null && (value = f ? f(prop) : prop))
        return value;
      for (let i = 0; i < this.directPlugins.length; i++) {
        let prop2 = this.directPlugins[i].props[propName];
        if (prop2 != null && (value = f ? f(prop2) : prop2))
          return value;
      }
      let plugins = this.state.plugins;
      if (plugins)
        for (let i = 0; i < plugins.length; i++) {
          let prop2 = plugins[i].props[propName];
          if (prop2 != null && (value = f ? f(prop2) : prop2))
            return value;
        }
    }
    /**
    Query whether the view has focus.
    */
    hasFocus() {
      if (ie) {
        let node = this.root.activeElement;
        if (node == this.dom)
          return true;
        if (!node || !this.dom.contains(node))
          return false;
        while (node && this.dom != node && this.dom.contains(node)) {
          if (node.contentEditable == "false")
            return false;
          node = node.parentElement;
        }
        return true;
      }
      return this.root.activeElement == this.dom;
    }
    /**
    Focus the editor.
    */
    focus() {
      this.domObserver.stop();
      if (this.editable)
        focusPreventScroll(this.dom);
      selectionToDOM(this);
      this.domObserver.start();
    }
    /**
    Get the document root in which the editor exists. This will
    usually be the top-level `document`, but might be a [shadow
    DOM](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Shadow_DOM)
    root if the editor is inside one.
    */
    get root() {
      let cached = this._root;
      if (cached == null)
        for (let search = this.dom.parentNode; search; search = search.parentNode) {
          if (search.nodeType == 9 || search.nodeType == 11 && search.host) {
            if (!search.getSelection)
              Object.getPrototypeOf(search).getSelection = () => search.ownerDocument.getSelection();
            return this._root = search;
          }
        }
      return cached || document;
    }
    /**
    When an existing editor view is moved to a new document or
    shadow tree, call this to make it recompute its root.
    */
    updateRoot() {
      this._root = null;
    }
    /**
    Given a pair of viewport coordinates, return the document
    position that corresponds to them. May return null if the given
    coordinates aren't inside of the editor. When an object is
    returned, its `pos` property is the position nearest to the
    coordinates, and its `inside` property holds the position of the
    inner node that the position falls inside of, or -1 if it is at
    the top level, not in any node.
    */
    posAtCoords(coords) {
      return posAtCoords(this, coords);
    }
    /**
    Returns the viewport rectangle at a given document position.
    `left` and `right` will be the same number, as this returns a
    flat cursor-ish rectangle. If the position is between two things
    that aren't directly adjacent, `side` determines which element
    is used. When < 0, the element before the position is used,
    otherwise the element after.
    */
    coordsAtPos(pos, side = 1) {
      return coordsAtPos(this, pos, side);
    }
    /**
    Find the DOM position that corresponds to the given document
    position. When `side` is negative, find the position as close as
    possible to the content before the position. When positive,
    prefer positions close to the content after the position. When
    zero, prefer as shallow a position as possible.
    
    Note that you should **not** mutate the editor's internal DOM,
    only inspect it (and even that is usually not necessary).
    */
    domAtPos(pos, side = 0) {
      return this.docView.domFromPos(pos, side);
    }
    /**
    Find the DOM node that represents the document node after the
    given position. May return `null` when the position doesn't point
    in front of a node or if the node is inside an opaque node view.
    
    This is intended to be able to call things like
    `getBoundingClientRect` on that DOM node. Do **not** mutate the
    editor DOM directly, or add styling this way, since that will be
    immediately overriden by the editor as it redraws the node.
    */
    nodeDOM(pos) {
      let desc = this.docView.descAt(pos);
      return desc ? desc.nodeDOM : null;
    }
    /**
    Find the document position that corresponds to a given DOM
    position. (Whenever possible, it is preferable to inspect the
    document structure directly, rather than poking around in the
    DOM, but sometimes—for example when interpreting an event
    target—you don't have a choice.)
    
    The `bias` parameter can be used to influence which side of a DOM
    node to use when the position is inside a leaf node.
    */
    posAtDOM(node, offset, bias = -1) {
      let pos = this.docView.posFromDOM(node, offset, bias);
      if (pos == null)
        throw new RangeError("DOM position not inside the editor");
      return pos;
    }
    /**
    Find out whether the selection is at the end of a textblock when
    moving in a given direction. When, for example, given `"left"`,
    it will return true if moving left from the current cursor
    position would leave that position's parent textblock. Will apply
    to the view's current state by default, but it is possible to
    pass a different state.
    */
    endOfTextblock(dir, state) {
      return endOfTextblock(this, state || this.state, dir);
    }
    /**
    Run the editor's paste logic with the given HTML string. The
    `event`, if given, will be passed to the
    [`handlePaste`](https://prosemirror.net/docs/ref/#view.EditorProps.handlePaste) hook.
    */
    pasteHTML(html, event) {
      return doPaste(this, "", html, false, event || new ClipboardEvent("paste"));
    }
    /**
    Run the editor's paste logic with the given plain-text input.
    */
    pasteText(text, event) {
      return doPaste(this, text, null, true, event || new ClipboardEvent("paste"));
    }
    /**
    Serialize the given slice as it would be if it was copied from
    this editor. Returns a DOM element that contains a
    representation of the slice as its children, a textual
    representation, and the transformed slice (which can be
    different from the given input due to hooks like
    [`transformCopied`](https://prosemirror.net/docs/ref/#view.EditorProps.transformCopied)).
    */
    serializeForClipboard(slice2) {
      return serializeForClipboard(this, slice2);
    }
    /**
    Removes the editor from the DOM and destroys all [node
    views](https://prosemirror.net/docs/ref/#view.NodeView).
    */
    destroy() {
      if (!this.docView)
        return;
      destroyInput(this);
      this.destroyPluginViews();
      if (this.mounted) {
        this.docView.update(this.state.doc, [], viewDecorations(this), this);
        this.dom.textContent = "";
      } else if (this.dom.parentNode) {
        this.dom.parentNode.removeChild(this.dom);
      }
      this.docView.destroy();
      this.docView = null;
      clearReusedRange();
    }
    /**
    This is true when the view has been
    [destroyed](https://prosemirror.net/docs/ref/#view.EditorView.destroy) (and thus should not be
    used anymore).
    */
    get isDestroyed() {
      return this.docView == null;
    }
    /**
    Used for testing.
    */
    dispatchEvent(event) {
      return dispatchEvent(this, event);
    }
    /**
    @internal
    */
    domSelectionRange() {
      let sel = this.domSelection();
      if (!sel)
        return { focusNode: null, focusOffset: 0, anchorNode: null, anchorOffset: 0 };
      return safari && this.root.nodeType === 11 && deepActiveElement(this.dom.ownerDocument) == this.dom && safariShadowSelectionRange(this, sel) || sel;
    }
    /**
    @internal
    */
    domSelection() {
      return this.root.getSelection();
    }
  };
  EditorView.prototype.dispatch = function(tr) {
    let dispatchTransaction = this._props.dispatchTransaction;
    if (dispatchTransaction)
      dispatchTransaction.call(this, tr);
    else
      this.updateState(this.state.apply(tr));
  };
  function computeDocDeco(view2) {
    let attrs = /* @__PURE__ */ Object.create(null);
    attrs.class = "ProseMirror";
    attrs.contenteditable = String(view2.editable);
    view2.someProp("attributes", (value) => {
      if (typeof value == "function")
        value = value(view2.state);
      if (value)
        for (let attr in value) {
          if (attr == "class")
            attrs.class += " " + value[attr];
          else if (attr == "style")
            attrs.style = (attrs.style ? attrs.style + ";" : "") + value[attr];
          else if (!attrs[attr] && attr != "contenteditable" && attr != "nodeName")
            attrs[attr] = String(value[attr]);
        }
    });
    if (!attrs.translate)
      attrs.translate = "no";
    return [Decoration.node(0, view2.state.doc.content.size, attrs)];
  }
  function updateCursorWrapper(view2) {
    if (view2.markCursor) {
      let dom = document.createElement("img");
      dom.className = "ProseMirror-separator";
      dom.setAttribute("mark-placeholder", "true");
      dom.setAttribute("alt", "");
      view2.cursorWrapper = { dom, deco: Decoration.widget(view2.state.selection.from, dom, { raw: true, marks: view2.markCursor }) };
    } else {
      view2.cursorWrapper = null;
    }
  }
  function getEditable(view2) {
    return !view2.someProp("editable", (value) => value(view2.state) === false);
  }
  function selectionContextChanged(sel1, sel2) {
    let depth = Math.min(sel1.$anchor.sharedDepth(sel1.head), sel2.$anchor.sharedDepth(sel2.head));
    return sel1.$anchor.start(depth) != sel2.$anchor.start(depth);
  }
  function buildNodeViews(view2) {
    let result = /* @__PURE__ */ Object.create(null);
    function add3(obj) {
      for (let prop in obj)
        if (!Object.prototype.hasOwnProperty.call(result, prop))
          result[prop] = obj[prop];
    }
    view2.someProp("nodeViews", add3);
    view2.someProp("markViews", add3);
    return result;
  }
  function changedNodeViews(a, b) {
    let nA = 0, nB = 0;
    for (let prop in a) {
      if (a[prop] != b[prop])
        return true;
      nA++;
    }
    for (let _2 in b)
      nB++;
    return nA != nB;
  }
  function checkStateComponent(plugin) {
    if (plugin.spec.state || plugin.spec.filterTransaction || plugin.spec.appendTransaction)
      throw new RangeError("Plugins passed directly to the view must not have a state component");
  }

  // node_modules/crelt/index.js
  function crelt() {
    var elt = arguments[0];
    if (typeof elt == "string") elt = document.createElement(elt);
    var i = 1, next = arguments[1];
    if (next && typeof next == "object" && next.nodeType == null && !Array.isArray(next)) {
      for (var name in next) if (Object.prototype.hasOwnProperty.call(next, name)) {
        var value = next[name];
        if (typeof value == "string") elt.setAttribute(name, value);
        else if (value != null) elt[name] = value;
      }
      i++;
    }
    for (; i < arguments.length; i++) add(elt, arguments[i]);
    return elt;
  }
  function add(elt, child) {
    if (typeof child == "string") {
      elt.appendChild(document.createTextNode(child));
    } else if (child == null) {
    } else if (child.nodeType != null) {
      elt.appendChild(child);
    } else if (Array.isArray(child)) {
      for (var i = 0; i < child.length; i++) add(elt, child[i]);
    } else {
      throw new RangeError("Unsupported child node: " + child);
    }
  }

  // node_modules/prosemirror-commands/dist/index.js
  var deleteSelection = (state, dispatch) => {
    if (state.selection.empty)
      return false;
    if (dispatch)
      dispatch(state.tr.deleteSelection().scrollIntoView());
    return true;
  };
  function atBlockStart(state, view2) {
    let { $cursor } = state.selection;
    if (!$cursor || (view2 ? !view2.endOfTextblock("backward", state) : $cursor.parentOffset > 0))
      return null;
    return $cursor;
  }
  var joinBackward = (state, dispatch, view2) => {
    let $cursor = atBlockStart(state, view2);
    if (!$cursor)
      return false;
    let $cut = findCutBefore($cursor);
    if (!$cut) {
      let range = $cursor.blockRange(), target = range && liftTarget(range);
      if (target == null)
        return false;
      if (dispatch)
        dispatch(state.tr.lift(range, target).scrollIntoView());
      return true;
    }
    let before = $cut.nodeBefore;
    if (deleteBarrier(state, $cut, dispatch, -1))
      return true;
    if ($cursor.parent.content.size == 0 && (textblockAt(before, "end") || NodeSelection.isSelectable(before))) {
      for (let depth = $cursor.depth; ; depth--) {
        let delStep = replaceStep(state.doc, $cursor.before(depth), $cursor.after(depth), Slice.empty);
        if (delStep && delStep.slice.size < delStep.to - delStep.from) {
          if (dispatch) {
            let tr = state.tr.step(delStep);
            tr.setSelection(textblockAt(before, "end") ? Selection.findFrom(tr.doc.resolve(tr.mapping.map($cut.pos, -1)), -1) : NodeSelection.create(tr.doc, $cut.pos - before.nodeSize));
            dispatch(tr.scrollIntoView());
          }
          return true;
        }
        if (depth == 1 || $cursor.node(depth - 1).childCount > 1)
          break;
      }
    }
    if (before.isAtom && $cut.depth == $cursor.depth - 1) {
      if (dispatch)
        dispatch(state.tr.delete($cut.pos - before.nodeSize, $cut.pos).scrollIntoView());
      return true;
    }
    return false;
  };
  function textblockAt(node, side, only = false) {
    for (let scan = node; scan; scan = side == "start" ? scan.firstChild : scan.lastChild) {
      if (scan.isTextblock)
        return true;
      if (only && scan.childCount != 1)
        return false;
    }
    return false;
  }
  var selectNodeBackward = (state, dispatch, view2) => {
    let { $head, empty: empty2 } = state.selection, $cut = $head;
    if (!empty2)
      return false;
    if ($head.parent.isTextblock) {
      if (view2 ? !view2.endOfTextblock("backward", state) : $head.parentOffset > 0)
        return false;
      $cut = findCutBefore($head);
    }
    let node = $cut && $cut.nodeBefore;
    if (!node || !NodeSelection.isSelectable(node))
      return false;
    if (dispatch)
      dispatch(state.tr.setSelection(NodeSelection.create(state.doc, $cut.pos - node.nodeSize)).scrollIntoView());
    return true;
  };
  function findCutBefore($pos) {
    if (!$pos.parent.type.spec.isolating)
      for (let i = $pos.depth - 1; i >= 0; i--) {
        if ($pos.index(i) > 0)
          return $pos.doc.resolve($pos.before(i + 1));
        if ($pos.node(i).type.spec.isolating)
          break;
      }
    return null;
  }
  function atBlockEnd(state, view2) {
    let { $cursor } = state.selection;
    if (!$cursor || (view2 ? !view2.endOfTextblock("forward", state) : $cursor.parentOffset < $cursor.parent.content.size))
      return null;
    return $cursor;
  }
  var joinForward = (state, dispatch, view2) => {
    let $cursor = atBlockEnd(state, view2);
    if (!$cursor)
      return false;
    let $cut = findCutAfter($cursor);
    if (!$cut)
      return false;
    let after = $cut.nodeAfter;
    if (deleteBarrier(state, $cut, dispatch, 1))
      return true;
    if ($cursor.parent.content.size == 0 && (textblockAt(after, "start") || NodeSelection.isSelectable(after))) {
      let delStep = replaceStep(state.doc, $cursor.before(), $cursor.after(), Slice.empty);
      if (delStep && delStep.slice.size < delStep.to - delStep.from) {
        if (dispatch) {
          let tr = state.tr.step(delStep);
          tr.setSelection(textblockAt(after, "start") ? Selection.findFrom(tr.doc.resolve(tr.mapping.map($cut.pos)), 1) : NodeSelection.create(tr.doc, tr.mapping.map($cut.pos)));
          dispatch(tr.scrollIntoView());
        }
        return true;
      }
    }
    if (after.isAtom && $cut.depth == $cursor.depth - 1) {
      if (dispatch)
        dispatch(state.tr.delete($cut.pos, $cut.pos + after.nodeSize).scrollIntoView());
      return true;
    }
    return false;
  };
  var selectNodeForward = (state, dispatch, view2) => {
    let { $head, empty: empty2 } = state.selection, $cut = $head;
    if (!empty2)
      return false;
    if ($head.parent.isTextblock) {
      if (view2 ? !view2.endOfTextblock("forward", state) : $head.parentOffset < $head.parent.content.size)
        return false;
      $cut = findCutAfter($head);
    }
    let node = $cut && $cut.nodeAfter;
    if (!node || !NodeSelection.isSelectable(node))
      return false;
    if (dispatch)
      dispatch(state.tr.setSelection(NodeSelection.create(state.doc, $cut.pos)).scrollIntoView());
    return true;
  };
  function findCutAfter($pos) {
    if (!$pos.parent.type.spec.isolating)
      for (let i = $pos.depth - 1; i >= 0; i--) {
        let parent = $pos.node(i);
        if ($pos.index(i) + 1 < parent.childCount)
          return $pos.doc.resolve($pos.after(i + 1));
        if (parent.type.spec.isolating)
          break;
      }
    return null;
  }
  var joinUp = (state, dispatch) => {
    let sel = state.selection, nodeSel = sel instanceof NodeSelection, point;
    if (nodeSel) {
      if (sel.node.isTextblock || !canJoin(state.doc, sel.from))
        return false;
      point = sel.from;
    } else {
      point = joinPoint(state.doc, sel.from, -1);
      if (point == null)
        return false;
    }
    if (dispatch) {
      let tr = state.tr.join(point);
      if (nodeSel)
        tr.setSelection(NodeSelection.create(tr.doc, point - state.doc.resolve(point).nodeBefore.nodeSize));
      dispatch(tr.scrollIntoView());
    }
    return true;
  };
  var lift2 = (state, dispatch) => {
    let { $from, $to } = state.selection;
    let range = $from.blockRange($to), target = range && liftTarget(range);
    if (target == null)
      return false;
    if (dispatch)
      dispatch(state.tr.lift(range, target).scrollIntoView());
    return true;
  };
  var newlineInCode = (state, dispatch) => {
    let { $head, $anchor } = state.selection;
    if (!$head.parent.type.spec.code || !$head.sameParent($anchor))
      return false;
    if (dispatch)
      dispatch(state.tr.insertText("\n").scrollIntoView());
    return true;
  };
  function defaultBlockAt(match) {
    for (let i = 0; i < match.edgeCount; i++) {
      let { type } = match.edge(i);
      if (type.isTextblock && !type.hasRequiredAttrs())
        return type;
    }
    return null;
  }
  var exitCode = (state, dispatch) => {
    let { $head, $anchor } = state.selection;
    if (!$head.parent.type.spec.code || !$head.sameParent($anchor))
      return false;
    let above = $head.node(-1), after = $head.indexAfter(-1), type = defaultBlockAt(above.contentMatchAt(after));
    if (!type || !above.canReplaceWith(after, after, type))
      return false;
    if (dispatch) {
      let pos = $head.after(), tr = state.tr.replaceWith(pos, pos, type.createAndFill());
      tr.setSelection(Selection.near(tr.doc.resolve(pos), 1));
      dispatch(tr.scrollIntoView());
    }
    return true;
  };
  var createParagraphNear = (state, dispatch) => {
    let sel = state.selection, { $from, $to } = sel;
    if (sel instanceof AllSelection || $from.parent.inlineContent || $to.parent.inlineContent)
      return false;
    let type = defaultBlockAt($to.parent.contentMatchAt($to.indexAfter()));
    if (!type || !type.isTextblock)
      return false;
    if (dispatch) {
      let side = (!$from.parentOffset && $to.index() < $to.parent.childCount ? $from : $to).pos;
      let tr = state.tr.insert(side, type.createAndFill());
      tr.setSelection(TextSelection.create(tr.doc, side + 1));
      dispatch(tr.scrollIntoView());
    }
    return true;
  };
  var liftEmptyBlock = (state, dispatch) => {
    let { $cursor } = state.selection;
    if (!$cursor || $cursor.parent.content.size)
      return false;
    if ($cursor.depth > 1 && $cursor.after() != $cursor.end(-1)) {
      let before = $cursor.before();
      if (canSplit(state.doc, before)) {
        if (dispatch)
          dispatch(state.tr.split(before).scrollIntoView());
        return true;
      }
    }
    let range = $cursor.blockRange(), target = range && liftTarget(range);
    if (target == null)
      return false;
    if (dispatch)
      dispatch(state.tr.lift(range, target).scrollIntoView());
    return true;
  };
  function splitBlockAs(splitNode) {
    return (state, dispatch) => {
      let { $from, $to } = state.selection;
      if (state.selection instanceof NodeSelection && state.selection.node.isBlock) {
        if (!$from.parentOffset || !canSplit(state.doc, $from.pos))
          return false;
        if (dispatch)
          dispatch(state.tr.split($from.pos).scrollIntoView());
        return true;
      }
      if (!$from.depth)
        return false;
      let types = [];
      let splitDepth, deflt, atEnd = false, atStart = false;
      for (let d = $from.depth; ; d--) {
        let node = $from.node(d);
        if (node.isBlock) {
          atEnd = $from.end(d) == $from.pos + ($from.depth - d);
          atStart = $from.start(d) == $from.pos - ($from.depth - d);
          deflt = defaultBlockAt($from.node(d - 1).contentMatchAt($from.indexAfter(d - 1)));
          let splitType = splitNode && splitNode($to.parent, atEnd, $from);
          types.unshift(splitType || (atEnd && deflt ? { type: deflt } : null));
          splitDepth = d;
          break;
        } else {
          if (d == 1)
            return false;
          types.unshift(null);
        }
      }
      let tr = state.tr;
      if (state.selection instanceof TextSelection || state.selection instanceof AllSelection)
        tr.deleteSelection();
      let splitPos = tr.mapping.map($from.pos);
      let can = canSplit(tr.doc, splitPos, types.length, types);
      if (!can) {
        types[0] = deflt ? { type: deflt } : null;
        can = canSplit(tr.doc, splitPos, types.length, types);
      }
      if (!can)
        return false;
      tr.split(splitPos, types.length, types);
      if (!atEnd && atStart && $from.node(splitDepth).type != deflt) {
        let first = tr.mapping.map($from.before(splitDepth)), $first = tr.doc.resolve(first);
        if (deflt && $from.node(splitDepth - 1).canReplaceWith($first.index(), $first.index() + 1, deflt))
          tr.setNodeMarkup(tr.mapping.map($from.before(splitDepth)), deflt);
      }
      if (dispatch)
        dispatch(tr.scrollIntoView());
      return true;
    };
  }
  var splitBlock = splitBlockAs();
  var selectParentNode = (state, dispatch) => {
    let { $from, to: to2 } = state.selection, pos;
    let same = $from.sharedDepth(to2);
    if (same == 0)
      return false;
    pos = $from.before(same);
    if (dispatch)
      dispatch(state.tr.setSelection(NodeSelection.create(state.doc, pos)));
    return true;
  };
  var selectAll = (state, dispatch) => {
    if (dispatch)
      dispatch(state.tr.setSelection(new AllSelection(state.doc)));
    return true;
  };
  function joinMaybeClear(state, $pos, dispatch) {
    let before = $pos.nodeBefore, after = $pos.nodeAfter, index = $pos.index();
    if (!before || !after || !before.type.compatibleContent(after.type))
      return false;
    if (!before.content.size && $pos.parent.canReplace(index - 1, index)) {
      if (dispatch)
        dispatch(state.tr.delete($pos.pos - before.nodeSize, $pos.pos).scrollIntoView());
      return true;
    }
    if (!$pos.parent.canReplace(index, index + 1) || !(after.isTextblock || canJoin(state.doc, $pos.pos)))
      return false;
    if (dispatch)
      dispatch(state.tr.join($pos.pos).scrollIntoView());
    return true;
  }
  function deleteBarrier(state, $cut, dispatch, dir) {
    let before = $cut.nodeBefore, after = $cut.nodeAfter, conn, match;
    let isolated = before.type.spec.isolating || after.type.spec.isolating;
    if (!isolated && joinMaybeClear(state, $cut, dispatch))
      return true;
    let canDelAfter = !isolated && $cut.parent.canReplace($cut.index(), $cut.index() + 1);
    if (canDelAfter && (conn = (match = before.contentMatchAt(before.childCount)).findWrapping(after.type)) && match.matchType(conn[0] || after.type).validEnd) {
      if (dispatch) {
        let end = $cut.pos + after.nodeSize, wrap2 = Fragment.empty;
        for (let i = conn.length - 1; i >= 0; i--)
          wrap2 = Fragment.from(conn[i].create(null, wrap2));
        wrap2 = Fragment.from(before.copy(wrap2));
        let tr = state.tr.step(new ReplaceAroundStep($cut.pos - 1, end, $cut.pos, end, new Slice(wrap2, 1, 0), conn.length, true));
        let $joinAt = tr.doc.resolve(end + 2 * conn.length);
        if ($joinAt.nodeAfter && $joinAt.nodeAfter.type == before.type && canJoin(tr.doc, $joinAt.pos))
          tr.join($joinAt.pos);
        dispatch(tr.scrollIntoView());
      }
      return true;
    }
    let selAfter = after.type.spec.isolating || dir > 0 && isolated ? null : Selection.findFrom($cut, 1);
    let range = selAfter && selAfter.$from.blockRange(selAfter.$to), target = range && liftTarget(range);
    if (target != null && target >= $cut.depth) {
      if (dispatch)
        dispatch(state.tr.lift(range, target).scrollIntoView());
      return true;
    }
    if (canDelAfter && textblockAt(after, "start", true) && textblockAt(before, "end")) {
      let at2 = before, wrap2 = [];
      for (; ; ) {
        wrap2.push(at2);
        if (at2.isTextblock)
          break;
        at2 = at2.lastChild;
      }
      let afterText = after, afterDepth = 1;
      for (; !afterText.isTextblock; afterText = afterText.firstChild)
        afterDepth++;
      if (at2.canReplace(at2.childCount, at2.childCount, afterText.content)) {
        if (dispatch) {
          let end = Fragment.empty;
          for (let i = wrap2.length - 1; i >= 0; i--)
            end = Fragment.from(wrap2[i].copy(end));
          let tr = state.tr.step(new ReplaceAroundStep($cut.pos - wrap2.length, $cut.pos + after.nodeSize, $cut.pos + afterDepth, $cut.pos + after.nodeSize - afterDepth, new Slice(end, wrap2.length, 0), 0, true));
          dispatch(tr.scrollIntoView());
        }
        return true;
      }
    }
    return false;
  }
  function selectTextblockSide(side) {
    return function(state, dispatch) {
      let sel = state.selection, $pos = side < 0 ? sel.$from : sel.$to;
      let depth = $pos.depth;
      while ($pos.node(depth).isInline) {
        if (!depth)
          return false;
        depth--;
      }
      if (!$pos.node(depth).isTextblock)
        return false;
      if (dispatch)
        dispatch(state.tr.setSelection(TextSelection.create(state.doc, side < 0 ? $pos.start(depth) : $pos.end(depth))));
      return true;
    };
  }
  var selectTextblockStart = selectTextblockSide(-1);
  var selectTextblockEnd = selectTextblockSide(1);
  function markApplies(doc3, ranges, type, enterAtoms) {
    for (let i = 0; i < ranges.length; i++) {
      let { $from, $to } = ranges[i];
      let can = $from.depth == 0 ? doc3.inlineContent && doc3.type.allowsMarkType(type) : false;
      doc3.nodesBetween($from.pos, $to.pos, (node, pos) => {
        if (can || !enterAtoms && node.isAtom && node.isInline && pos >= $from.pos && pos + node.nodeSize <= $to.pos)
          return false;
        can = node.inlineContent && node.type.allowsMarkType(type);
      });
      if (can)
        return true;
    }
    return false;
  }
  function removeInlineAtoms(ranges) {
    let result = [];
    for (let i = 0; i < ranges.length; i++) {
      let { $from, $to } = ranges[i];
      $from.doc.nodesBetween($from.pos, $to.pos, (node, pos) => {
        if (node.isAtom && node.content.size && node.isInline && pos >= $from.pos && pos + node.nodeSize <= $to.pos) {
          if (pos + 1 > $from.pos)
            result.push(new SelectionRange($from, $from.doc.resolve(pos + 1)));
          $from = $from.doc.resolve(pos + 1 + node.content.size);
          return false;
        }
      });
      if ($from.pos < $to.pos)
        result.push(new SelectionRange($from, $to));
    }
    return result;
  }
  function toggleMark(markType, attrs = null, options) {
    let removeWhenPresent = (options && options.removeWhenPresent) !== false;
    let enterAtoms = (options && options.enterInlineAtoms) !== false;
    let dropSpace = !(options && options.includeWhitespace);
    return function(state, dispatch) {
      let { empty: empty2, $cursor, ranges } = state.selection;
      if (empty2 && !$cursor || !markApplies(state.doc, ranges, markType, enterAtoms))
        return false;
      if (dispatch) {
        if ($cursor) {
          if (markType.isInSet(state.storedMarks || $cursor.marks()))
            dispatch(state.tr.removeStoredMark(markType));
          else
            dispatch(state.tr.addStoredMark(markType.create(attrs)));
        } else {
          let add3, tr = state.tr;
          if (!enterAtoms)
            ranges = removeInlineAtoms(ranges);
          if (removeWhenPresent) {
            add3 = !ranges.some((r) => state.doc.rangeHasMark(r.$from.pos, r.$to.pos, markType));
          } else {
            add3 = !ranges.every((r) => {
              let missing = false;
              tr.doc.nodesBetween(r.$from.pos, r.$to.pos, (node, pos, parent) => {
                if (missing)
                  return false;
                missing = !markType.isInSet(node.marks) && !!parent && parent.type.allowsMarkType(markType) && !(node.isText && /^\s*$/.test(node.textBetween(Math.max(0, r.$from.pos - pos), Math.min(node.nodeSize, r.$to.pos - pos))));
              });
              return !missing;
            });
          }
          for (let i = 0; i < ranges.length; i++) {
            let { $from, $to } = ranges[i];
            if (!add3) {
              tr.removeMark($from.pos, $to.pos, markType);
            } else {
              let from2 = $from.pos, to2 = $to.pos, start = $from.nodeAfter, end = $to.nodeBefore;
              let spaceStart = dropSpace && start && start.isText ? /^\s*/.exec(start.text)[0].length : 0;
              let spaceEnd = dropSpace && end && end.isText ? /\s*$/.exec(end.text)[0].length : 0;
              if (from2 + spaceStart < to2) {
                from2 += spaceStart;
                to2 -= spaceEnd;
              }
              tr.addMark(from2, to2, markType.create(attrs));
            }
          }
          dispatch(tr.scrollIntoView());
        }
      }
      return true;
    };
  }
  function chainCommands(...commands) {
    return function(state, dispatch, view2) {
      for (let i = 0; i < commands.length; i++)
        if (commands[i](state, dispatch, view2))
          return true;
      return false;
    };
  }
  var backspace = chainCommands(deleteSelection, joinBackward, selectNodeBackward);
  var del = chainCommands(deleteSelection, joinForward, selectNodeForward);
  var pcBaseKeymap = {
    "Enter": chainCommands(newlineInCode, createParagraphNear, liftEmptyBlock, splitBlock),
    "Mod-Enter": exitCode,
    "Backspace": backspace,
    "Mod-Backspace": backspace,
    "Shift-Backspace": backspace,
    "Delete": del,
    "Mod-Delete": del,
    "Mod-a": selectAll
  };
  var macBaseKeymap = {
    "Ctrl-h": pcBaseKeymap["Backspace"],
    "Alt-Backspace": pcBaseKeymap["Mod-Backspace"],
    "Ctrl-d": pcBaseKeymap["Delete"],
    "Ctrl-Alt-Backspace": pcBaseKeymap["Mod-Delete"],
    "Alt-Delete": pcBaseKeymap["Mod-Delete"],
    "Alt-d": pcBaseKeymap["Mod-Delete"],
    "Ctrl-a": selectTextblockStart,
    "Ctrl-e": selectTextblockEnd
  };
  for (let key in pcBaseKeymap)
    macBaseKeymap[key] = pcBaseKeymap[key];
  var mac2 = typeof navigator != "undefined" ? /Mac|iP(hone|[oa]d)/.test(navigator.platform) : typeof os != "undefined" && os.platform ? os.platform() == "darwin" : false;
  var baseKeymap = mac2 ? macBaseKeymap : pcBaseKeymap;

  // node_modules/rope-sequence/dist/index.js
  var GOOD_LEAF_SIZE = 200;
  var RopeSequence = function RopeSequence2() {
  };
  RopeSequence.prototype.append = function append(other) {
    if (!other.length) {
      return this;
    }
    other = RopeSequence.from(other);
    return !this.length && other || other.length < GOOD_LEAF_SIZE && this.leafAppend(other) || this.length < GOOD_LEAF_SIZE && other.leafPrepend(this) || this.appendInner(other);
  };
  RopeSequence.prototype.prepend = function prepend(other) {
    if (!other.length) {
      return this;
    }
    return RopeSequence.from(other).append(this);
  };
  RopeSequence.prototype.appendInner = function appendInner(other) {
    return new Append(this, other);
  };
  RopeSequence.prototype.slice = function slice(from2, to2) {
    if (from2 === void 0) from2 = 0;
    if (to2 === void 0) to2 = this.length;
    if (from2 >= to2) {
      return RopeSequence.empty;
    }
    return this.sliceInner(Math.max(0, from2), Math.min(this.length, to2));
  };
  RopeSequence.prototype.get = function get(i) {
    if (i < 0 || i >= this.length) {
      return void 0;
    }
    return this.getInner(i);
  };
  RopeSequence.prototype.forEach = function forEach(f, from2, to2) {
    if (from2 === void 0) from2 = 0;
    if (to2 === void 0) to2 = this.length;
    if (from2 <= to2) {
      this.forEachInner(f, from2, to2, 0);
    } else {
      this.forEachInvertedInner(f, from2, to2, 0);
    }
  };
  RopeSequence.prototype.map = function map(f, from2, to2) {
    if (from2 === void 0) from2 = 0;
    if (to2 === void 0) to2 = this.length;
    var result = [];
    this.forEach(function(elt, i) {
      return result.push(f(elt, i));
    }, from2, to2);
    return result;
  };
  RopeSequence.from = function from(values) {
    if (values instanceof RopeSequence) {
      return values;
    }
    return values && values.length ? new Leaf(values) : RopeSequence.empty;
  };
  var Leaf = /* @__PURE__ */ function(RopeSequence3) {
    function Leaf2(values) {
      RopeSequence3.call(this);
      this.values = values;
    }
    if (RopeSequence3) Leaf2.__proto__ = RopeSequence3;
    Leaf2.prototype = Object.create(RopeSequence3 && RopeSequence3.prototype);
    Leaf2.prototype.constructor = Leaf2;
    var prototypeAccessors = { length: { configurable: true }, depth: { configurable: true } };
    Leaf2.prototype.flatten = function flatten() {
      return this.values;
    };
    Leaf2.prototype.sliceInner = function sliceInner(from2, to2) {
      if (from2 == 0 && to2 == this.length) {
        return this;
      }
      return new Leaf2(this.values.slice(from2, to2));
    };
    Leaf2.prototype.getInner = function getInner(i) {
      return this.values[i];
    };
    Leaf2.prototype.forEachInner = function forEachInner(f, from2, to2, start) {
      for (var i = from2; i < to2; i++) {
        if (f(this.values[i], start + i) === false) {
          return false;
        }
      }
    };
    Leaf2.prototype.forEachInvertedInner = function forEachInvertedInner(f, from2, to2, start) {
      for (var i = from2 - 1; i >= to2; i--) {
        if (f(this.values[i], start + i) === false) {
          return false;
        }
      }
    };
    Leaf2.prototype.leafAppend = function leafAppend(other) {
      if (this.length + other.length <= GOOD_LEAF_SIZE) {
        return new Leaf2(this.values.concat(other.flatten()));
      }
    };
    Leaf2.prototype.leafPrepend = function leafPrepend(other) {
      if (this.length + other.length <= GOOD_LEAF_SIZE) {
        return new Leaf2(other.flatten().concat(this.values));
      }
    };
    prototypeAccessors.length.get = function() {
      return this.values.length;
    };
    prototypeAccessors.depth.get = function() {
      return 0;
    };
    Object.defineProperties(Leaf2.prototype, prototypeAccessors);
    return Leaf2;
  }(RopeSequence);
  RopeSequence.empty = new Leaf([]);
  var Append = /* @__PURE__ */ function(RopeSequence3) {
    function Append2(left, right) {
      RopeSequence3.call(this);
      this.left = left;
      this.right = right;
      this.length = left.length + right.length;
      this.depth = Math.max(left.depth, right.depth) + 1;
    }
    if (RopeSequence3) Append2.__proto__ = RopeSequence3;
    Append2.prototype = Object.create(RopeSequence3 && RopeSequence3.prototype);
    Append2.prototype.constructor = Append2;
    Append2.prototype.flatten = function flatten() {
      return this.left.flatten().concat(this.right.flatten());
    };
    Append2.prototype.getInner = function getInner(i) {
      return i < this.left.length ? this.left.get(i) : this.right.get(i - this.left.length);
    };
    Append2.prototype.forEachInner = function forEachInner(f, from2, to2, start) {
      var leftLen = this.left.length;
      if (from2 < leftLen && this.left.forEachInner(f, from2, Math.min(to2, leftLen), start) === false) {
        return false;
      }
      if (to2 > leftLen && this.right.forEachInner(f, Math.max(from2 - leftLen, 0), Math.min(this.length, to2) - leftLen, start + leftLen) === false) {
        return false;
      }
    };
    Append2.prototype.forEachInvertedInner = function forEachInvertedInner(f, from2, to2, start) {
      var leftLen = this.left.length;
      if (from2 > leftLen && this.right.forEachInvertedInner(f, from2 - leftLen, Math.max(to2, leftLen) - leftLen, start + leftLen) === false) {
        return false;
      }
      if (to2 < leftLen && this.left.forEachInvertedInner(f, Math.min(from2, leftLen), to2, start) === false) {
        return false;
      }
    };
    Append2.prototype.sliceInner = function sliceInner(from2, to2) {
      if (from2 == 0 && to2 == this.length) {
        return this;
      }
      var leftLen = this.left.length;
      if (to2 <= leftLen) {
        return this.left.slice(from2, to2);
      }
      if (from2 >= leftLen) {
        return this.right.slice(from2 - leftLen, to2 - leftLen);
      }
      return this.left.slice(from2, leftLen).append(this.right.slice(0, to2 - leftLen));
    };
    Append2.prototype.leafAppend = function leafAppend(other) {
      var inner = this.right.leafAppend(other);
      if (inner) {
        return new Append2(this.left, inner);
      }
    };
    Append2.prototype.leafPrepend = function leafPrepend(other) {
      var inner = this.left.leafPrepend(other);
      if (inner) {
        return new Append2(inner, this.right);
      }
    };
    Append2.prototype.appendInner = function appendInner2(other) {
      if (this.left.depth >= Math.max(this.right.depth, other.depth) + 1) {
        return new Append2(this.left, new Append2(this.right, other));
      }
      return new Append2(this, other);
    };
    return Append2;
  }(RopeSequence);
  var dist_default2 = RopeSequence;

  // node_modules/prosemirror-history/dist/index.js
  var max_empty_items = 500;
  var Branch = class _Branch {
    constructor(items, eventCount) {
      this.items = items;
      this.eventCount = eventCount;
    }
    // Pop the latest event off the branch's history and apply it
    // to a document transform.
    popEvent(state, preserveItems) {
      if (this.eventCount == 0)
        return null;
      let end = this.items.length;
      for (; ; end--) {
        let next = this.items.get(end - 1);
        if (next.selection) {
          --end;
          break;
        }
      }
      let remap, mapFrom;
      if (preserveItems) {
        remap = this.remapping(end, this.items.length);
        mapFrom = remap.maps.length;
      }
      let transform = state.tr;
      let selection, remaining;
      let addAfter = [], addBefore = [];
      this.items.forEach((item, i) => {
        if (!item.step) {
          if (!remap) {
            remap = this.remapping(end, i + 1);
            mapFrom = remap.maps.length;
          }
          mapFrom--;
          addBefore.push(item);
          return;
        }
        if (remap) {
          addBefore.push(new Item(item.map));
          let step = item.step.map(remap.slice(mapFrom)), map2;
          if (step && transform.maybeStep(step).doc) {
            map2 = transform.mapping.maps[transform.mapping.maps.length - 1];
            addAfter.push(new Item(map2, void 0, void 0, addAfter.length + addBefore.length));
          }
          mapFrom--;
          if (map2)
            remap.appendMap(map2, mapFrom);
        } else {
          transform.maybeStep(item.step);
        }
        if (item.selection) {
          selection = remap ? item.selection.map(remap.slice(mapFrom)) : item.selection;
          remaining = new _Branch(this.items.slice(0, end).append(addBefore.reverse().concat(addAfter)), this.eventCount - 1);
          return false;
        }
      }, this.items.length, 0);
      return { remaining, transform, selection };
    }
    // Create a new branch with the given transform added.
    addTransform(transform, selection, histOptions, preserveItems) {
      let newItems = [], eventCount = this.eventCount;
      let oldItems = this.items, lastItem = !preserveItems && oldItems.length ? oldItems.get(oldItems.length - 1) : null;
      for (let i = 0; i < transform.steps.length; i++) {
        let step = transform.steps[i].invert(transform.docs[i]);
        let item = new Item(transform.mapping.maps[i], step, selection), merged;
        if (merged = lastItem && lastItem.merge(item)) {
          item = merged;
          if (i)
            newItems.pop();
          else
            oldItems = oldItems.slice(0, oldItems.length - 1);
        }
        newItems.push(item);
        if (selection) {
          eventCount++;
          selection = void 0;
        }
        if (!preserveItems)
          lastItem = item;
      }
      let overflow = eventCount - histOptions.depth;
      if (overflow > DEPTH_OVERFLOW) {
        oldItems = cutOffEvents(oldItems, overflow);
        eventCount -= overflow;
      }
      return new _Branch(oldItems.append(newItems), eventCount);
    }
    remapping(from2, to2) {
      let maps = new Mapping();
      this.items.forEach((item, i) => {
        let mirrorPos = item.mirrorOffset != null && i - item.mirrorOffset >= from2 ? maps.maps.length - item.mirrorOffset : void 0;
        maps.appendMap(item.map, mirrorPos);
      }, from2, to2);
      return maps;
    }
    addMaps(array) {
      if (this.eventCount == 0)
        return this;
      return new _Branch(this.items.append(array.map((map2) => new Item(map2))), this.eventCount);
    }
    // When the collab module receives remote changes, the history has
    // to know about those, so that it can adjust the steps that were
    // rebased on top of the remote changes, and include the position
    // maps for the remote changes in its array of items.
    rebased(rebasedTransform, rebasedCount) {
      if (!this.eventCount)
        return this;
      let rebasedItems = [], start = Math.max(0, this.items.length - rebasedCount);
      let mapping = rebasedTransform.mapping;
      let newUntil = rebasedTransform.steps.length;
      let eventCount = this.eventCount;
      this.items.forEach((item) => {
        if (item.selection)
          eventCount--;
      }, start);
      let iRebased = rebasedCount;
      this.items.forEach((item) => {
        let pos = mapping.getMirror(--iRebased);
        if (pos == null)
          return;
        newUntil = Math.min(newUntil, pos);
        let map2 = mapping.maps[pos];
        if (item.step) {
          let step = rebasedTransform.steps[pos].invert(rebasedTransform.docs[pos]);
          let selection = item.selection && item.selection.map(mapping.slice(iRebased + 1, pos));
          if (selection)
            eventCount++;
          rebasedItems.push(new Item(map2, step, selection));
        } else {
          rebasedItems.push(new Item(map2));
        }
      }, start);
      let newMaps = [];
      for (let i = rebasedCount; i < newUntil; i++)
        newMaps.push(new Item(mapping.maps[i]));
      let items = this.items.slice(0, start).append(newMaps).append(rebasedItems);
      let branch = new _Branch(items, eventCount);
      if (branch.emptyItemCount() > max_empty_items)
        branch = branch.compress(this.items.length - rebasedItems.length);
      return branch;
    }
    emptyItemCount() {
      let count = 0;
      this.items.forEach((item) => {
        if (!item.step)
          count++;
      });
      return count;
    }
    // Compressing a branch means rewriting it to push the air (map-only
    // items) out. During collaboration, these naturally accumulate
    // because each remote change adds one. The `upto` argument is used
    // to ensure that only the items below a given level are compressed,
    // because `rebased` relies on a clean, untouched set of items in
    // order to associate old items with rebased steps.
    compress(upto = this.items.length) {
      let remap = this.remapping(0, upto), mapFrom = remap.maps.length;
      let items = [], events = 0;
      this.items.forEach((item, i) => {
        if (i >= upto) {
          items.push(item);
          if (item.selection)
            events++;
        } else if (item.step) {
          let step = item.step.map(remap.slice(mapFrom)), map2 = step && step.getMap();
          mapFrom--;
          if (map2)
            remap.appendMap(map2, mapFrom);
          if (step) {
            let selection = item.selection && item.selection.map(remap.slice(mapFrom));
            if (selection)
              events++;
            let newItem = new Item(map2.invert(), step, selection), merged, last = items.length - 1;
            if (merged = items.length && items[last].merge(newItem))
              items[last] = merged;
            else
              items.push(newItem);
          }
        } else if (item.map) {
          mapFrom--;
        }
      }, this.items.length, 0);
      return new _Branch(dist_default2.from(items.reverse()), events);
    }
  };
  Branch.empty = new Branch(dist_default2.empty, 0);
  function cutOffEvents(items, n) {
    let cutPoint;
    items.forEach((item, i) => {
      if (item.selection && n-- == 0) {
        cutPoint = i;
        return false;
      }
    });
    return items.slice(cutPoint);
  }
  var Item = class _Item {
    constructor(map2, step, selection, mirrorOffset) {
      this.map = map2;
      this.step = step;
      this.selection = selection;
      this.mirrorOffset = mirrorOffset;
    }
    merge(other) {
      if (this.step && other.step && !other.selection) {
        let step = other.step.merge(this.step);
        if (step)
          return new _Item(step.getMap().invert(), step, this.selection);
      }
    }
  };
  var HistoryState = class {
    constructor(done, undone, prevRanges, prevTime, prevComposition) {
      this.done = done;
      this.undone = undone;
      this.prevRanges = prevRanges;
      this.prevTime = prevTime;
      this.prevComposition = prevComposition;
    }
  };
  var DEPTH_OVERFLOW = 20;
  function applyTransaction(history2, state, tr, options) {
    let historyTr = tr.getMeta(historyKey), rebased;
    if (historyTr)
      return historyTr.historyState;
    if (tr.getMeta(closeHistoryKey))
      history2 = new HistoryState(history2.done, history2.undone, null, 0, -1);
    let appended = tr.getMeta("appendedTransaction");
    if (tr.steps.length == 0) {
      return history2;
    } else if (appended && appended.getMeta(historyKey)) {
      if (appended.getMeta(historyKey).redo)
        return new HistoryState(history2.done.addTransform(tr, void 0, options, mustPreserveItems(state)), history2.undone, rangesFor(tr.mapping.maps), history2.prevTime, history2.prevComposition);
      else
        return new HistoryState(history2.done, history2.undone.addTransform(tr, void 0, options, mustPreserveItems(state)), null, history2.prevTime, history2.prevComposition);
    } else if (tr.getMeta("addToHistory") !== false && !(appended && appended.getMeta("addToHistory") === false)) {
      let composition = tr.getMeta("composition");
      let newGroup = history2.prevTime == 0 || !appended && history2.prevComposition != composition && (history2.prevTime < (tr.time || 0) - options.newGroupDelay || !isAdjacentTo(tr, history2.prevRanges));
      let prevRanges = appended ? mapRanges(history2.prevRanges, tr.mapping) : rangesFor(tr.mapping.maps);
      return new HistoryState(history2.done.addTransform(tr, newGroup ? state.selection.getBookmark() : void 0, options, mustPreserveItems(state)), Branch.empty, prevRanges, tr.time, composition == null ? history2.prevComposition : composition);
    } else if (rebased = tr.getMeta("rebased")) {
      return new HistoryState(history2.done.rebased(tr, rebased), history2.undone.rebased(tr, rebased), mapRanges(history2.prevRanges, tr.mapping), history2.prevTime, history2.prevComposition);
    } else {
      return new HistoryState(history2.done.addMaps(tr.mapping.maps), history2.undone.addMaps(tr.mapping.maps), mapRanges(history2.prevRanges, tr.mapping), history2.prevTime, history2.prevComposition);
    }
  }
  function isAdjacentTo(transform, prevRanges) {
    if (!prevRanges)
      return false;
    if (!transform.docChanged)
      return true;
    let adjacent = false;
    transform.mapping.maps[0].forEach((start, end) => {
      for (let i = 0; i < prevRanges.length; i += 2)
        if (start <= prevRanges[i + 1] && end >= prevRanges[i])
          adjacent = true;
    });
    return adjacent;
  }
  function rangesFor(maps) {
    let result = [];
    for (let i = maps.length - 1; i >= 0 && result.length == 0; i--)
      maps[i].forEach((_from, _to, from2, to2) => result.push(from2, to2));
    return result;
  }
  function mapRanges(ranges, mapping) {
    if (!ranges)
      return null;
    let result = [];
    for (let i = 0; i < ranges.length; i += 2) {
      let from2 = mapping.map(ranges[i], 1), to2 = mapping.map(ranges[i + 1], -1);
      if (from2 <= to2)
        result.push(from2, to2);
    }
    return result;
  }
  function histTransaction(history2, state, redo2) {
    let preserveItems = mustPreserveItems(state);
    let histOptions = historyKey.get(state).spec.config;
    let pop = (redo2 ? history2.undone : history2.done).popEvent(state, preserveItems);
    if (!pop)
      return null;
    let selection = pop.selection.resolve(pop.transform.doc);
    let added = (redo2 ? history2.done : history2.undone).addTransform(pop.transform, state.selection.getBookmark(), histOptions, preserveItems);
    let newHist = new HistoryState(redo2 ? added : pop.remaining, redo2 ? pop.remaining : added, null, 0, -1);
    return pop.transform.setSelection(selection).setMeta(historyKey, { redo: redo2, historyState: newHist });
  }
  var cachedPreserveItems = false;
  var cachedPreserveItemsPlugins = null;
  function mustPreserveItems(state) {
    let plugins = state.plugins;
    if (cachedPreserveItemsPlugins != plugins) {
      cachedPreserveItems = false;
      cachedPreserveItemsPlugins = plugins;
      for (let i = 0; i < plugins.length; i++)
        if (plugins[i].spec.historyPreserveItems) {
          cachedPreserveItems = true;
          break;
        }
    }
    return cachedPreserveItems;
  }
  var historyKey = new PluginKey("history");
  var closeHistoryKey = new PluginKey("closeHistory");
  function history(config = {}) {
    config = {
      depth: config.depth || 100,
      newGroupDelay: config.newGroupDelay || 500
    };
    return new Plugin({
      key: historyKey,
      state: {
        init() {
          return new HistoryState(Branch.empty, Branch.empty, null, 0, -1);
        },
        apply(tr, hist, state) {
          return applyTransaction(hist, state, tr, config);
        }
      },
      config,
      props: {
        handleDOMEvents: {
          beforeinput(view2, e) {
            let inputType = e.inputType;
            let command = inputType == "historyUndo" ? undo : inputType == "historyRedo" ? redo : null;
            if (!command)
              return false;
            e.preventDefault();
            return command(view2.state, view2.dispatch);
          }
        }
      }
    });
  }
  function buildCommand(redo2, scroll) {
    return (state, dispatch) => {
      let hist = historyKey.getState(state);
      if (!hist || (redo2 ? hist.undone : hist.done).eventCount == 0)
        return false;
      if (dispatch) {
        let tr = histTransaction(hist, state, redo2);
        if (tr)
          dispatch(scroll ? tr.scrollIntoView() : tr);
      }
      return true;
    };
  }
  var undo = buildCommand(false, true);
  var redo = buildCommand(true, true);
  var undoNoScroll = buildCommand(false, false);
  var redoNoScroll = buildCommand(true, false);

  // node_modules/prosemirror-menu/dist/index.js
  var SVG = "http://www.w3.org/2000/svg";
  var XLINK = "http://www.w3.org/1999/xlink";
  var prefix$2 = "ProseMirror-icon";
  function hashPath(path) {
    let hash = 0;
    for (let i = 0; i < path.length; i++)
      hash = (hash << 5) - hash + path.charCodeAt(i) | 0;
    return hash;
  }
  function getIcon(root, icon) {
    let doc3 = (root.nodeType == 9 ? root : root.ownerDocument) || document;
    let node = doc3.createElement("div");
    node.className = prefix$2;
    if (icon.path) {
      let { path, width, height } = icon;
      let name = "pm-icon-" + hashPath(path).toString(16);
      if (!doc3.getElementById(name))
        buildSVG(root, name, icon);
      let svg = node.appendChild(doc3.createElementNS(SVG, "svg"));
      svg.style.width = width / height + "em";
      let use = svg.appendChild(doc3.createElementNS(SVG, "use"));
      use.setAttributeNS(XLINK, "href", /([^#]*)/.exec(doc3.location.toString())[1] + "#" + name);
    } else if (icon.dom) {
      node.appendChild(icon.dom.cloneNode(true));
    } else {
      let { text, css } = icon;
      node.appendChild(doc3.createElement("span")).textContent = text || "";
      if (css)
        node.firstChild.style.cssText = css;
    }
    return node;
  }
  function buildSVG(root, name, data) {
    let [doc3, top] = root.nodeType == 9 ? [root, root.body] : [root.ownerDocument || document, root];
    let collection = doc3.getElementById(prefix$2 + "-collection");
    if (!collection) {
      collection = doc3.createElementNS(SVG, "svg");
      collection.id = prefix$2 + "-collection";
      collection.style.display = "none";
      top.insertBefore(collection, top.firstChild);
    }
    let sym = doc3.createElementNS(SVG, "symbol");
    sym.id = name;
    sym.setAttribute("viewBox", "0 0 " + data.width + " " + data.height);
    let path = sym.appendChild(doc3.createElementNS(SVG, "path"));
    path.setAttribute("d", data.path);
    collection.appendChild(sym);
  }
  var prefix$1 = "ProseMirror-menu";
  var MenuItem = class {
    /**
    Create a menu item.
    */
    constructor(spec) {
      this.spec = spec;
    }
    /**
    Renders the icon according to its [display
    spec](https://prosemirror.net/docs/ref/#menu.MenuItemSpec.display), and adds an event handler which
    executes the command when the representation is clicked.
    */
    render(view2) {
      let spec = this.spec;
      let dom = spec.render ? spec.render(view2) : spec.icon ? getIcon(view2.root, spec.icon) : spec.label ? crelt("div", null, translate(view2, spec.label)) : null;
      if (!dom)
        throw new RangeError("MenuItem without icon or label property");
      if (spec.title) {
        const title = typeof spec.title === "function" ? spec.title(view2.state) : spec.title;
        dom.setAttribute("title", translate(view2, title));
      }
      if (spec.class)
        dom.classList.add(spec.class);
      if (spec.css)
        dom.style.cssText += spec.css;
      dom.addEventListener("mousedown", (e) => {
        e.preventDefault();
        if (!dom.classList.contains(prefix$1 + "-disabled"))
          spec.run(view2.state, view2.dispatch, view2, e);
      });
      function update(state) {
        if (spec.select) {
          let selected = spec.select(state);
          dom.style.display = selected ? "" : "none";
          if (!selected)
            return false;
        }
        let enabled = true;
        if (spec.enable) {
          enabled = spec.enable(state) || false;
          setClass(dom, prefix$1 + "-disabled", !enabled);
        }
        if (spec.active) {
          let active = enabled && spec.active(state) || false;
          setClass(dom, prefix$1 + "-active", active);
        }
        return true;
      }
      return { dom, update };
    }
  };
  function translate(view2, text) {
    return view2._props.translate ? view2._props.translate(text) : text;
  }
  var lastMenuEvent = { time: 0, node: null };
  function markMenuEvent(e) {
    lastMenuEvent.time = Date.now();
    lastMenuEvent.node = e.target;
  }
  function isMenuEvent(wrapper) {
    return Date.now() - 100 < lastMenuEvent.time && lastMenuEvent.node && wrapper.contains(lastMenuEvent.node);
  }
  function renderDropdownItems(items, view2) {
    let rendered = [], updates = [];
    for (let i = 0; i < items.length; i++) {
      let { dom, update } = items[i].render(view2);
      rendered.push(crelt("div", { class: prefix$1 + "-dropdown-item" }, dom));
      updates.push(update);
    }
    return { dom: rendered, update: combineUpdates(updates, rendered) };
  }
  function combineUpdates(updates, nodes2) {
    return (state) => {
      let something = false;
      for (let i = 0; i < updates.length; i++) {
        let up = updates[i](state);
        nodes2[i].style.display = up ? "" : "none";
        if (up)
          something = true;
      }
      return something;
    };
  }
  var DropdownSubmenu = class {
    /**
    Creates a submenu for the given group of menu elements. The
    following options are recognized:
    */
    constructor(content, options = {}) {
      this.options = options;
      this.content = Array.isArray(content) ? content : [content];
    }
    /**
    Renders the submenu.
    */
    render(view2) {
      let items = renderDropdownItems(this.content, view2);
      let win = view2.dom.ownerDocument.defaultView || window;
      let label = crelt("div", { class: prefix$1 + "-submenu-label" }, translate(view2, this.options.label || ""));
      let wrap2 = crelt("div", { class: prefix$1 + "-submenu-wrap" }, label, crelt("div", { class: prefix$1 + "-submenu" }, items.dom));
      let listeningOnClose = null;
      label.addEventListener("mousedown", (e) => {
        e.preventDefault();
        markMenuEvent(e);
        setClass(wrap2, prefix$1 + "-submenu-wrap-active", false);
        if (!listeningOnClose)
          win.addEventListener("mousedown", listeningOnClose = () => {
            if (!isMenuEvent(wrap2)) {
              wrap2.classList.remove(prefix$1 + "-submenu-wrap-active");
              win.removeEventListener("mousedown", listeningOnClose);
              listeningOnClose = null;
            }
          });
      });
      function update(state) {
        let inner = items.update(state);
        wrap2.style.display = inner ? "" : "none";
        return inner;
      }
      return { dom: wrap2, update };
    }
  };
  var icons = {
    join: {
      width: 800,
      height: 900,
      path: "M0 75h800v125h-800z M0 825h800v-125h-800z M250 400h100v-100h100v100h100v100h-100v100h-100v-100h-100z"
    },
    lift: {
      width: 1024,
      height: 1024,
      path: "M219 310v329q0 7-5 12t-12 5q-8 0-13-5l-164-164q-5-5-5-13t5-13l164-164q5-5 13-5 7 0 12 5t5 12zM1024 749v109q0 7-5 12t-12 5h-987q-7 0-12-5t-5-12v-109q0-7 5-12t12-5h987q7 0 12 5t5 12zM1024 530v109q0 7-5 12t-12 5h-621q-7 0-12-5t-5-12v-109q0-7 5-12t12-5h621q7 0 12 5t5 12zM1024 310v109q0 7-5 12t-12 5h-621q-7 0-12-5t-5-12v-109q0-7 5-12t12-5h621q7 0 12 5t5 12zM1024 91v109q0 7-5 12t-12 5h-987q-7 0-12-5t-5-12v-109q0-7 5-12t12-5h987q7 0 12 5t5 12z"
    },
    selectParentNode: { text: "\u2B1A", css: "font-weight: bold" },
    undo: {
      width: 1024,
      height: 1024,
      path: "M761 1024c113-206 132-520-313-509v253l-384-384 384-384v248c534-13 594 472 313 775z"
    },
    redo: {
      width: 1024,
      height: 1024,
      path: "M576 248v-248l384 384-384 384v-253c-446-10-427 303-313 509-280-303-221-789 313-775z"
    },
    strong: {
      width: 805,
      height: 1024,
      path: "M317 869q42 18 80 18 214 0 214-191 0-65-23-102-15-25-35-42t-38-26-46-14-48-6-54-1q-41 0-57 5 0 30-0 90t-0 90q0 4-0 38t-0 55 2 47 6 38zM309 442q24 4 62 4 46 0 81-7t62-25 42-51 14-81q0-40-16-70t-45-46-61-24-70-8q-28 0-74 7 0 28 2 86t2 86q0 15-0 45t-0 45q0 26 0 39zM0 950l1-53q8-2 48-9t60-15q4-6 7-15t4-19 3-18 1-21 0-19v-37q0-561-12-585-2-4-12-8t-25-6-28-4-27-2-17-1l-2-47q56-1 194-6t213-5q13 0 39 0t38 0q40 0 78 7t73 24 61 40 42 59 16 78q0 29-9 54t-22 41-36 32-41 25-48 22q88 20 146 76t58 141q0 57-20 102t-53 74-78 48-93 27-100 8q-25 0-75-1t-75-1q-60 0-175 6t-132 6z"
    },
    em: {
      width: 585,
      height: 1024,
      path: "M0 949l9-48q3-1 46-12t63-21q16-20 23-57 0-4 35-165t65-310 29-169v-14q-13-7-31-10t-39-4-33-3l10-58q18 1 68 3t85 4 68 1q27 0 56-1t69-4 56-3q-2 22-10 50-17 5-58 16t-62 19q-4 10-8 24t-5 22-4 26-3 24q-15 84-50 239t-44 203q-1 5-7 33t-11 51-9 47-3 32l0 10q9 2 105 17-1 25-9 56-6 0-18 0t-18 0q-16 0-49-5t-49-5q-78-1-117-1-29 0-81 5t-69 6z"
    },
    code: {
      width: 896,
      height: 1024,
      path: "M608 192l-96 96 224 224-224 224 96 96 288-320-288-320zM288 192l-288 320 288 320 96-96-224-224 224-224-96-96z"
    },
    link: {
      width: 951,
      height: 1024,
      path: "M832 694q0-22-16-38l-118-118q-16-16-38-16-24 0-41 18 1 1 10 10t12 12 8 10 7 14 2 15q0 22-16 38t-38 16q-8 0-15-2t-14-7-10-8-12-12-10-10q-18 17-18 41 0 22 16 38l117 118q15 15 38 15 22 0 38-14l84-83q16-16 16-38zM430 292q0-22-16-38l-117-118q-16-16-38-16-22 0-38 15l-84 83q-16 16-16 38 0 22 16 38l118 118q15 15 38 15 24 0 41-17-1-1-10-10t-12-12-8-10-7-14-2-15q0-22 16-38t38-16q8 0 15 2t14 7 10 8 12 12 10 10q18-17 18-41zM941 694q0 68-48 116l-84 83q-47 47-116 47-69 0-116-48l-117-118q-47-47-47-116 0-70 50-119l-50-50q-49 50-118 50-68 0-116-48l-118-118q-48-48-48-116t48-116l84-83q47-47 116-47 69 0 116 48l117 118q47 47 47 116 0 70-50 119l50 50q49-50 118-50 68 0 116 48l118 118q48 48 48 116z"
    },
    bulletList: {
      width: 768,
      height: 896,
      path: "M0 512h128v-128h-128v128zM0 256h128v-128h-128v128zM0 768h128v-128h-128v128zM256 512h512v-128h-512v128zM256 256h512v-128h-512v128zM256 768h512v-128h-512v128z"
    },
    orderedList: {
      width: 768,
      height: 896,
      path: "M320 512h448v-128h-448v128zM320 768h448v-128h-448v128zM320 128v128h448v-128h-448zM79 384h78v-256h-36l-85 23v50l43-2v185zM189 590c0-36-12-78-96-78-33 0-64 6-83 16l1 66c21-10 42-15 67-15s32 11 32 28c0 26-30 58-110 112v50h192v-67l-91 2c49-30 87-66 87-113l1-1z"
    },
    blockquote: {
      width: 640,
      height: 896,
      path: "M0 448v256h256v-256h-128c0 0 0-128 128-128v-128c0 0-256 0-256 256zM640 320v-128c0 0-256 0-256 256v256h256v-256h-128c0 0 0-128 128-128z"
    }
  };
  var joinUpItem = new MenuItem({
    title: "Join with above block",
    run: joinUp,
    select: (state) => joinUp(state),
    icon: icons.join
  });
  var liftItem = new MenuItem({
    title: "Lift out of enclosing block",
    run: lift2,
    select: (state) => lift2(state),
    icon: icons.lift
  });
  var selectParentNodeItem = new MenuItem({
    title: "Select parent node",
    run: selectParentNode,
    select: (state) => selectParentNode(state),
    icon: icons.selectParentNode
  });
  var undoItem = new MenuItem({
    title: "Undo last change",
    run: undo,
    enable: (state) => undo(state),
    icon: icons.undo
  });
  var redoItem = new MenuItem({
    title: "Redo last undone change",
    run: redo,
    enable: (state) => redo(state),
    icon: icons.redo
  });
  function setClass(dom, cls, on2) {
    if (on2)
      dom.classList.add(cls);
    else
      dom.classList.remove(cls);
  }

  // node_modules/prosemirror-schema-basic/dist/index.js
  var pDOM = ["p", 0];
  var blockquoteDOM = ["blockquote", 0];
  var hrDOM = ["hr"];
  var preDOM = ["pre", ["code", 0]];
  var brDOM = ["br"];
  var nodes = {
    /**
    NodeSpec The top level document node.
    */
    doc: {
      content: "block+"
    },
    /**
    A plain paragraph textblock. Represented in the DOM
    as a `<p>` element.
    */
    paragraph: {
      content: "inline*",
      group: "block",
      parseDOM: [{ tag: "p" }],
      toDOM() {
        return pDOM;
      }
    },
    /**
    A blockquote (`<blockquote>`) wrapping one or more blocks.
    */
    blockquote: {
      content: "block+",
      group: "block",
      defining: true,
      parseDOM: [{ tag: "blockquote" }],
      toDOM() {
        return blockquoteDOM;
      }
    },
    /**
    A horizontal rule (`<hr>`).
    */
    horizontal_rule: {
      group: "block",
      parseDOM: [{ tag: "hr" }],
      toDOM() {
        return hrDOM;
      }
    },
    /**
    A heading textblock, with a `level` attribute that
    should hold the number 1 to 6. Parsed and serialized as `<h1>` to
    `<h6>` elements.
    */
    heading: {
      attrs: { level: { default: 1, validate: "number" } },
      content: "inline*",
      group: "block",
      defining: true,
      parseDOM: [
        { tag: "h1", attrs: { level: 1 } },
        { tag: "h2", attrs: { level: 2 } },
        { tag: "h3", attrs: { level: 3 } },
        { tag: "h4", attrs: { level: 4 } },
        { tag: "h5", attrs: { level: 5 } },
        { tag: "h6", attrs: { level: 6 } }
      ],
      toDOM(node) {
        return ["h" + node.attrs.level, 0];
      }
    },
    /**
    A code listing. Disallows marks or non-text inline
    nodes by default. Represented as a `<pre>` element with a
    `<code>` element inside of it.
    */
    code_block: {
      content: "text*",
      marks: "",
      group: "block",
      code: true,
      defining: true,
      parseDOM: [{ tag: "pre", preserveWhitespace: "full" }],
      toDOM() {
        return preDOM;
      }
    },
    /**
    The text node.
    */
    text: {
      group: "inline"
    },
    /**
    An inline image (`<img>`) node. Supports `src`,
    `alt`, and `href` attributes. The latter two default to the empty
    string.
    */
    image: {
      inline: true,
      attrs: {
        src: { validate: "string" },
        alt: { default: null, validate: "string|null" },
        title: { default: null, validate: "string|null" }
      },
      group: "inline",
      draggable: true,
      parseDOM: [{ tag: "img[src]", getAttrs(dom) {
        return {
          src: dom.getAttribute("src"),
          title: dom.getAttribute("title"),
          alt: dom.getAttribute("alt")
        };
      } }],
      toDOM(node) {
        let { src, alt, title } = node.attrs;
        return ["img", { src, alt, title }];
      }
    },
    /**
    A hard line break, represented in the DOM as `<br>`.
    */
    hard_break: {
      inline: true,
      group: "inline",
      selectable: false,
      parseDOM: [{ tag: "br" }],
      toDOM() {
        return brDOM;
      }
    }
  };
  var emDOM = ["em", 0];
  var strongDOM = ["strong", 0];
  var codeDOM = ["code", 0];
  var marks = {
    /**
    A link. Has `href` and `title` attributes. `title`
    defaults to the empty string. Rendered and parsed as an `<a>`
    element.
    */
    link: {
      attrs: {
        href: { validate: "string" },
        title: { default: null, validate: "string|null" }
      },
      inclusive: false,
      parseDOM: [{ tag: "a[href]", getAttrs(dom) {
        return { href: dom.getAttribute("href"), title: dom.getAttribute("title") };
      } }],
      toDOM(node) {
        let { href, title } = node.attrs;
        return ["a", { href, title }, 0];
      }
    },
    /**
    An emphasis mark. Rendered as an `<em>` element. Has parse rules
    that also match `<i>` and `font-style: italic`.
    */
    em: {
      parseDOM: [
        { tag: "i" },
        { tag: "em" },
        { style: "font-style=italic" },
        { style: "font-style=normal", clearMark: (m) => m.type.name == "em" }
      ],
      toDOM() {
        return emDOM;
      }
    },
    /**
    A strong mark. Rendered as `<strong>`, parse rules also match
    `<b>` and `font-weight: bold`.
    */
    strong: {
      parseDOM: [
        { tag: "strong" },
        // This works around a Google Docs misbehavior where
        // pasted content will be inexplicably wrapped in `<b>`
        // tags with a font-weight normal.
        { tag: "b", getAttrs: (node) => node.style.fontWeight != "normal" && null },
        { style: "font-weight=400", clearMark: (m) => m.type.name == "strong" },
        { style: "font-weight", getAttrs: (value) => /^(bold(er)?|[5-9]\d{2,})$/.test(value) && null }
      ],
      toDOM() {
        return strongDOM;
      }
    },
    /**
    Code font mark. Represented as a `<code>` element.
    */
    code: {
      code: true,
      parseDOM: [{ tag: "code" }],
      toDOM() {
        return codeDOM;
      }
    }
  };
  var schema = new Schema({ nodes, marks });

  // node_modules/prosemirror-schema-list/dist/index.js
  var olDOM = ["ol", 0];
  var ulDOM = ["ul", 0];
  var liDOM = ["li", 0];
  var orderedList = {
    attrs: { order: { default: 1, validate: "number" } },
    parseDOM: [{ tag: "ol", getAttrs(dom) {
      return { order: dom.hasAttribute("start") ? +dom.getAttribute("start") : 1 };
    } }],
    toDOM(node) {
      return node.attrs.order == 1 ? olDOM : ["ol", { start: node.attrs.order }, 0];
    }
  };
  var bulletList = {
    parseDOM: [{ tag: "ul" }],
    toDOM() {
      return ulDOM;
    }
  };
  var listItem = {
    parseDOM: [{ tag: "li" }],
    toDOM() {
      return liDOM;
    },
    defining: true
  };
  function add2(obj, props) {
    let copy2 = {};
    for (let prop in obj)
      copy2[prop] = obj[prop];
    for (let prop in props)
      copy2[prop] = props[prop];
    return copy2;
  }
  function addListNodes(nodes2, itemContent, listGroup) {
    return nodes2.append({
      ordered_list: add2(orderedList, { content: "list_item+", group: listGroup }),
      bullet_list: add2(bulletList, { content: "list_item+", group: listGroup }),
      list_item: add2(listItem, { content: itemContent })
    });
  }

  // node_modules/w3c-keyname/index.js
  var base = {
    8: "Backspace",
    9: "Tab",
    10: "Enter",
    12: "NumLock",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    44: "PrintScreen",
    45: "Insert",
    46: "Delete",
    59: ";",
    61: "=",
    91: "Meta",
    92: "Meta",
    106: "*",
    107: "+",
    108: ",",
    109: "-",
    110: ".",
    111: "/",
    144: "NumLock",
    145: "ScrollLock",
    160: "Shift",
    161: "Shift",
    162: "Control",
    163: "Control",
    164: "Alt",
    165: "Alt",
    173: "-",
    186: ";",
    187: "=",
    188: ",",
    189: "-",
    190: ".",
    191: "/",
    192: "`",
    219: "[",
    220: "\\",
    221: "]",
    222: "'"
  };
  var shift = {
    48: ")",
    49: "!",
    50: "@",
    51: "#",
    52: "$",
    53: "%",
    54: "^",
    55: "&",
    56: "*",
    57: "(",
    59: ":",
    61: "+",
    173: "_",
    186: ":",
    187: "+",
    188: "<",
    189: "_",
    190: ">",
    191: "?",
    192: "~",
    219: "{",
    220: "|",
    221: "}",
    222: '"'
  };
  var mac3 = typeof navigator != "undefined" && /Mac/.test(navigator.platform);
  var ie2 = typeof navigator != "undefined" && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent);
  for (i = 0; i < 10; i++) base[48 + i] = base[96 + i] = String(i);
  var i;
  for (i = 1; i <= 24; i++) base[i + 111] = "F" + i;
  var i;
  for (i = 65; i <= 90; i++) {
    base[i] = String.fromCharCode(i + 32);
    shift[i] = String.fromCharCode(i);
  }
  var i;
  for (code in base) if (!shift.hasOwnProperty(code)) shift[code] = base[code];
  var code;
  function keyName(event) {
    var ignoreKey = mac3 && event.metaKey && event.shiftKey && !event.ctrlKey && !event.altKey || ie2 && event.shiftKey && event.key && event.key.length == 1 || event.key == "Unidentified";
    var name = !ignoreKey && event.key || (event.shiftKey ? shift : base)[event.keyCode] || event.key || "Unidentified";
    if (name == "Esc") name = "Escape";
    if (name == "Del") name = "Delete";
    if (name == "Left") name = "ArrowLeft";
    if (name == "Up") name = "ArrowUp";
    if (name == "Right") name = "ArrowRight";
    if (name == "Down") name = "ArrowDown";
    return name;
  }

  // node_modules/prosemirror-keymap/dist/index.js
  var mac4 = typeof navigator != "undefined" && /Mac|iP(hone|[oa]d)/.test(navigator.platform);
  var windows2 = typeof navigator != "undefined" && /Win/.test(navigator.platform);
  function normalizeKeyName(name) {
    let parts = name.split(/-(?!$)/), result = parts[parts.length - 1];
    if (result == "Space")
      result = " ";
    let alt, ctrl, shift2, meta;
    for (let i = 0; i < parts.length - 1; i++) {
      let mod = parts[i];
      if (/^(cmd|meta|m)$/i.test(mod))
        meta = true;
      else if (/^a(lt)?$/i.test(mod))
        alt = true;
      else if (/^(c|ctrl|control)$/i.test(mod))
        ctrl = true;
      else if (/^s(hift)?$/i.test(mod))
        shift2 = true;
      else if (/^mod$/i.test(mod)) {
        if (mac4)
          meta = true;
        else
          ctrl = true;
      } else
        throw new Error("Unrecognized modifier name: " + mod);
    }
    if (alt)
      result = "Alt-" + result;
    if (ctrl)
      result = "Ctrl-" + result;
    if (meta)
      result = "Meta-" + result;
    if (shift2)
      result = "Shift-" + result;
    return result;
  }
  function normalize(map2) {
    let copy2 = /* @__PURE__ */ Object.create(null);
    for (let prop in map2)
      copy2[normalizeKeyName(prop)] = map2[prop];
    return copy2;
  }
  function modifiers(name, event, shift2 = true) {
    if (event.altKey)
      name = "Alt-" + name;
    if (event.ctrlKey)
      name = "Ctrl-" + name;
    if (event.metaKey)
      name = "Meta-" + name;
    if (shift2 && event.shiftKey)
      name = "Shift-" + name;
    return name;
  }
  function keymap(bindings) {
    return new Plugin({ props: { handleKeyDown: keydownHandler(bindings) } });
  }
  function keydownHandler(bindings) {
    let map2 = normalize(bindings);
    return function(view2, event) {
      let name = keyName(event), baseName, direct = map2[modifiers(name, event)];
      if (direct && direct(view2.state, view2.dispatch, view2))
        return true;
      if (name.length == 1 && name != " ") {
        if (event.shiftKey) {
          let noShift = map2[modifiers(name, event, false)];
          if (noShift && noShift(view2.state, view2.dispatch, view2))
            return true;
        }
        if ((event.altKey || event.metaKey || event.ctrlKey) && // Ctrl-Alt may be used for AltGr on Windows
        !(windows2 && event.ctrlKey && event.altKey) && (baseName = base[event.keyCode]) && baseName != name) {
          let fromCode = map2[modifiers(baseName, event)];
          if (fromCode && fromCode(view2.state, view2.dispatch, view2))
            return true;
        }
      }
      return false;
    };
  }

  // node_modules/prosemirror-dropcursor/dist/index.js
  function dropCursor(options = {}) {
    return new Plugin({
      view(editorView) {
        return new DropCursorView(editorView, options);
      }
    });
  }
  var DropCursorView = class {
    constructor(editorView, options) {
      var _a;
      this.editorView = editorView;
      this.cursorPos = null;
      this.element = null;
      this.timeout = -1;
      this.width = (_a = options.width) !== null && _a !== void 0 ? _a : 1;
      this.color = options.color === false ? void 0 : options.color || "black";
      this.class = options.class;
      this.handlers = ["dragover", "dragend", "drop", "dragleave"].map((name) => {
        let handler = (e) => {
          this[name](e);
        };
        editorView.dom.addEventListener(name, handler);
        return { name, handler };
      });
    }
    destroy() {
      this.handlers.forEach(({ name, handler }) => this.editorView.dom.removeEventListener(name, handler));
    }
    update(editorView, prevState) {
      if (this.cursorPos != null && prevState.doc != editorView.state.doc) {
        if (this.cursorPos > editorView.state.doc.content.size)
          this.setCursor(null);
        else
          this.updateOverlay();
      }
    }
    setCursor(pos) {
      if (pos == this.cursorPos)
        return;
      this.cursorPos = pos;
      if (pos == null) {
        this.element.parentNode.removeChild(this.element);
        this.element = null;
      } else {
        this.updateOverlay();
      }
    }
    updateOverlay() {
      let $pos = this.editorView.state.doc.resolve(this.cursorPos);
      let isBlock = !$pos.parent.inlineContent, rect;
      let editorDOM = this.editorView.dom, editorRect = editorDOM.getBoundingClientRect();
      let scaleX = editorRect.width / editorDOM.offsetWidth, scaleY = editorRect.height / editorDOM.offsetHeight;
      if (isBlock) {
        let before = $pos.nodeBefore, after = $pos.nodeAfter;
        if (before || after) {
          let node = this.editorView.nodeDOM(this.cursorPos - (before ? before.nodeSize : 0));
          if (node) {
            let nodeRect = node.getBoundingClientRect();
            let top = before ? nodeRect.bottom : nodeRect.top;
            if (before && after)
              top = (top + this.editorView.nodeDOM(this.cursorPos).getBoundingClientRect().top) / 2;
            let halfWidth = this.width / 2 * scaleY;
            rect = { left: nodeRect.left, right: nodeRect.right, top: top - halfWidth, bottom: top + halfWidth };
          }
        }
      }
      if (!rect) {
        let coords = this.editorView.coordsAtPos(this.cursorPos);
        let halfWidth = this.width / 2 * scaleX;
        rect = { left: coords.left - halfWidth, right: coords.left + halfWidth, top: coords.top, bottom: coords.bottom };
      }
      let parent = this.editorView.dom.offsetParent;
      if (!this.element) {
        this.element = parent.appendChild(document.createElement("div"));
        if (this.class)
          this.element.className = this.class;
        this.element.style.cssText = "position: absolute; z-index: 50; pointer-events: none;";
        if (this.color) {
          this.element.style.backgroundColor = this.color;
        }
      }
      this.element.classList.toggle("prosemirror-dropcursor-block", isBlock);
      this.element.classList.toggle("prosemirror-dropcursor-inline", !isBlock);
      let parentLeft, parentTop;
      if (!parent || parent == document.body && getComputedStyle(parent).position == "static") {
        parentLeft = -pageXOffset;
        parentTop = -pageYOffset;
      } else {
        let rect2 = parent.getBoundingClientRect();
        let parentScaleX = rect2.width / parent.offsetWidth, parentScaleY = rect2.height / parent.offsetHeight;
        parentLeft = rect2.left - parent.scrollLeft * parentScaleX;
        parentTop = rect2.top - parent.scrollTop * parentScaleY;
      }
      this.element.style.left = (rect.left - parentLeft) / scaleX + "px";
      this.element.style.top = (rect.top - parentTop) / scaleY + "px";
      this.element.style.width = (rect.right - rect.left) / scaleX + "px";
      this.element.style.height = (rect.bottom - rect.top) / scaleY + "px";
    }
    scheduleRemoval(timeout) {
      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => this.setCursor(null), timeout);
    }
    dragover(event) {
      if (!this.editorView.editable)
        return;
      let pos = this.editorView.posAtCoords({ left: event.clientX, top: event.clientY });
      let node = pos && pos.inside >= 0 && this.editorView.state.doc.nodeAt(pos.inside);
      let disableDropCursor = node && node.type.spec.disableDropCursor;
      let disabled = typeof disableDropCursor == "function" ? disableDropCursor(this.editorView, pos, event) : disableDropCursor;
      if (pos && !disabled) {
        let target = pos.pos;
        if (this.editorView.dragging && this.editorView.dragging.slice) {
          let point = dropPoint(this.editorView.state.doc, target, this.editorView.dragging.slice);
          if (point != null)
            target = point;
        }
        this.setCursor(target);
        this.scheduleRemoval(5e3);
      }
    }
    dragend() {
      this.scheduleRemoval(20);
    }
    drop() {
      this.scheduleRemoval(20);
    }
    dragleave(event) {
      if (!this.editorView.dom.contains(event.relatedTarget))
        this.setCursor(null);
    }
  };

  // node_modules/prosemirror-gapcursor/dist/index.js
  var GapCursor = class _GapCursor extends Selection {
    /**
    Create a gap cursor.
    */
    constructor($pos) {
      super($pos, $pos);
    }
    map(doc3, mapping) {
      let $pos = doc3.resolve(mapping.map(this.head));
      return _GapCursor.valid($pos) ? new _GapCursor($pos) : Selection.near($pos);
    }
    content() {
      return Slice.empty;
    }
    eq(other) {
      return other instanceof _GapCursor && other.head == this.head;
    }
    toJSON() {
      return { type: "gapcursor", pos: this.head };
    }
    /**
    @internal
    */
    static fromJSON(doc3, json) {
      if (typeof json.pos != "number")
        throw new RangeError("Invalid input for GapCursor.fromJSON");
      return new _GapCursor(doc3.resolve(json.pos));
    }
    /**
    @internal
    */
    getBookmark() {
      return new GapBookmark(this.anchor);
    }
    /**
    @internal
    */
    static valid($pos) {
      let parent = $pos.parent;
      if (parent.isTextblock || !closedBefore($pos) || !closedAfter($pos))
        return false;
      let override = parent.type.spec.allowGapCursor;
      if (override != null)
        return override;
      let deflt = parent.contentMatchAt($pos.index()).defaultType;
      return deflt && deflt.isTextblock;
    }
    /**
    @internal
    */
    static findGapCursorFrom($pos, dir, mustMove = false) {
      search: for (; ; ) {
        if (!mustMove && _GapCursor.valid($pos))
          return $pos;
        let pos = $pos.pos, next = null;
        for (let d = $pos.depth; ; d--) {
          let parent = $pos.node(d);
          if (dir > 0 ? $pos.indexAfter(d) < parent.childCount : $pos.index(d) > 0) {
            next = parent.child(dir > 0 ? $pos.indexAfter(d) : $pos.index(d) - 1);
            break;
          } else if (d == 0) {
            return null;
          }
          pos += dir;
          let $cur = $pos.doc.resolve(pos);
          if (_GapCursor.valid($cur))
            return $cur;
        }
        for (; ; ) {
          let inside = dir > 0 ? next.firstChild : next.lastChild;
          if (!inside) {
            if (next.isAtom && !next.isText && !NodeSelection.isSelectable(next)) {
              $pos = $pos.doc.resolve(pos + next.nodeSize * dir);
              mustMove = false;
              continue search;
            }
            break;
          }
          next = inside;
          pos += dir;
          let $cur = $pos.doc.resolve(pos);
          if (_GapCursor.valid($cur))
            return $cur;
        }
        return null;
      }
    }
  };
  GapCursor.prototype.visible = false;
  GapCursor.findFrom = GapCursor.findGapCursorFrom;
  Selection.jsonID("gapcursor", GapCursor);
  var GapBookmark = class _GapBookmark {
    constructor(pos) {
      this.pos = pos;
    }
    map(mapping) {
      return new _GapBookmark(mapping.map(this.pos));
    }
    resolve(doc3) {
      let $pos = doc3.resolve(this.pos);
      return GapCursor.valid($pos) ? new GapCursor($pos) : Selection.near($pos);
    }
  };
  function closedBefore($pos) {
    for (let d = $pos.depth; d >= 0; d--) {
      let index = $pos.index(d), parent = $pos.node(d);
      if (index == 0) {
        if (parent.type.spec.isolating)
          return true;
        continue;
      }
      for (let before = parent.child(index - 1); ; before = before.lastChild) {
        if (before.childCount == 0 && !before.inlineContent || before.isAtom || before.type.spec.isolating)
          return true;
        if (before.inlineContent)
          return false;
      }
    }
    return true;
  }
  function closedAfter($pos) {
    for (let d = $pos.depth; d >= 0; d--) {
      let index = $pos.indexAfter(d), parent = $pos.node(d);
      if (index == parent.childCount) {
        if (parent.type.spec.isolating)
          return true;
        continue;
      }
      for (let after = parent.child(index); ; after = after.firstChild) {
        if (after.childCount == 0 && !after.inlineContent || after.isAtom || after.type.spec.isolating)
          return true;
        if (after.inlineContent)
          return false;
      }
    }
    return true;
  }
  function gapCursor() {
    return new Plugin({
      props: {
        decorations: drawGapCursor,
        createSelectionBetween(_view, $anchor, $head) {
          return $anchor.pos == $head.pos && GapCursor.valid($head) ? new GapCursor($head) : null;
        },
        handleClick,
        handleKeyDown,
        handleDOMEvents: { beforeinput }
      }
    });
  }
  var handleKeyDown = keydownHandler({
    "ArrowLeft": arrow("horiz", -1),
    "ArrowRight": arrow("horiz", 1),
    "ArrowUp": arrow("vert", -1),
    "ArrowDown": arrow("vert", 1)
  });
  function arrow(axis, dir) {
    const dirStr = axis == "vert" ? dir > 0 ? "down" : "up" : dir > 0 ? "right" : "left";
    return function(state, dispatch, view2) {
      let sel = state.selection;
      let $start = dir > 0 ? sel.$to : sel.$from, mustMove = sel.empty;
      if (sel instanceof TextSelection) {
        if (!view2.endOfTextblock(dirStr) || $start.depth == 0)
          return false;
        mustMove = false;
        $start = state.doc.resolve(dir > 0 ? $start.after() : $start.before());
      }
      let $found = GapCursor.findGapCursorFrom($start, dir, mustMove);
      if (!$found)
        return false;
      if (dispatch)
        dispatch(state.tr.setSelection(new GapCursor($found)));
      return true;
    };
  }
  function handleClick(view2, pos, event) {
    if (!view2 || !view2.editable)
      return false;
    let $pos = view2.state.doc.resolve(pos);
    if (!GapCursor.valid($pos))
      return false;
    let clickPos = view2.posAtCoords({ left: event.clientX, top: event.clientY });
    if (clickPos && clickPos.inside > -1 && NodeSelection.isSelectable(view2.state.doc.nodeAt(clickPos.inside)))
      return false;
    view2.dispatch(view2.state.tr.setSelection(new GapCursor($pos)));
    return true;
  }
  function beforeinput(view2, event) {
    if (event.inputType != "insertCompositionText" || !(view2.state.selection instanceof GapCursor))
      return false;
    let { $from } = view2.state.selection;
    let insert = $from.parent.contentMatchAt($from.index()).findWrapping(view2.state.schema.nodes.text);
    if (!insert)
      return false;
    let frag = Fragment.empty;
    for (let i = insert.length - 1; i >= 0; i--)
      frag = Fragment.from(insert[i].createAndFill(null, frag));
    let tr = view2.state.tr.replace($from.pos, $from.pos, new Slice(frag, 0, 0));
    tr.setSelection(TextSelection.near(tr.doc.resolve($from.pos + 1)));
    view2.dispatch(tr);
    return false;
  }
  function drawGapCursor(state) {
    if (!(state.selection instanceof GapCursor))
      return null;
    let node = document.createElement("div");
    node.className = "ProseMirror-gapcursor";
    return DecorationSet.create(state.doc, [Decoration.widget(state.selection.head, node, { key: "gapcursor" })]);
  }

  // node_modules/prosemirror-inputrules/dist/index.js
  var InputRule = class {
    /**
    Create an input rule. The rule applies when the user typed
    something and the text directly in front of the cursor matches
    `match`, which should end with `$`.
    
    The `handler` can be a string, in which case the matched text, or
    the first matched group in the regexp, is replaced by that
    string.
    
    Or a it can be a function, which will be called with the match
    array produced by
    [`RegExp.exec`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec),
    as well as the start and end of the matched range, and which can
    return a [transaction](https://prosemirror.net/docs/ref/#state.Transaction) that describes the
    rule's effect, or null to indicate the input was not handled.
    */
    constructor(match, handler, options = {}) {
      this.match = match;
      this.match = match;
      this.handler = typeof handler == "string" ? stringHandler(handler) : handler;
      this.undoable = options.undoable !== false;
      this.inCode = options.inCode || false;
      this.inCodeMark = options.inCodeMark !== false;
    }
  };
  function stringHandler(string) {
    return function(state, match, start, end) {
      let insert = string;
      if (match[1]) {
        let offset = match[0].lastIndexOf(match[1]);
        insert += match[0].slice(offset + match[1].length);
        start += offset;
        let cutOff = start - end;
        if (cutOff > 0) {
          insert = match[0].slice(offset - cutOff, offset) + insert;
          start = end;
        }
      }
      return state.tr.insertText(insert, start, end);
    };
  }
  var MAX_MATCH = 500;
  function inputRules({ rules }) {
    let plugin = new Plugin({
      state: {
        init() {
          return null;
        },
        apply(tr, prev) {
          let stored = tr.getMeta(this);
          if (stored)
            return stored;
          return tr.selectionSet || tr.docChanged ? null : prev;
        }
      },
      props: {
        handleTextInput(view2, from2, to2, text) {
          return run(view2, from2, to2, text, rules, plugin);
        },
        handleDOMEvents: {
          compositionend: (view2) => {
            setTimeout(() => {
              let { $cursor } = view2.state.selection;
              if ($cursor)
                run(view2, $cursor.pos, $cursor.pos, "", rules, plugin);
            });
          }
        }
      },
      isInputRules: true
    });
    return plugin;
  }
  function run(view2, from2, to2, text, rules, plugin) {
    if (view2.composing)
      return false;
    let state = view2.state, $from = state.doc.resolve(from2);
    let textBefore = $from.parent.textBetween(Math.max(0, $from.parentOffset - MAX_MATCH), $from.parentOffset, null, "\uFFFC") + text;
    for (let i = 0; i < rules.length; i++) {
      let rule = rules[i];
      if (!rule.inCodeMark && $from.marks().some((m) => m.type.spec.code))
        continue;
      if ($from.parent.type.spec.code) {
        if (!rule.inCode)
          continue;
      } else if (rule.inCode === "only") {
        continue;
      }
      let match = rule.match.exec(textBefore);
      let tr = match && match[0].length >= text.length && rule.handler(state, match, from2 - (match[0].length - text.length), to2);
      if (!tr)
        continue;
      if (rule.undoable)
        tr.setMeta(plugin, { transform: tr, from: from2, to: to2, text });
      view2.dispatch(tr);
      return true;
    }
    return false;
  }
  var emDash = new InputRule(/--$/, "\u2014", { inCodeMark: false });
  var ellipsis = new InputRule(/\.\.\.$/, "\u2026", { inCodeMark: false });
  var openDoubleQuote = new InputRule(/(?:^|[\s\{\[\(\<'"\u2018\u201C])(")$/, "\u201C", { inCodeMark: false });
  var closeDoubleQuote = new InputRule(/"$/, "\u201D", { inCodeMark: false });
  var openSingleQuote = new InputRule(/(?:^|[\s\{\[\(\<'"\u2018\u201C])(')$/, "\u2018", { inCodeMark: false });
  var closeSingleQuote = new InputRule(/'$/, "\u2019", { inCodeMark: false });
  function wrappingInputRule(regexp, nodeType, getAttrs = null, joinPredicate) {
    return new InputRule(regexp, (state, match, start, end) => {
      let attrs = getAttrs instanceof Function ? getAttrs(match) : getAttrs;
      let tr = state.tr.delete(start, end);
      let $start = tr.doc.resolve(start), range = $start.blockRange(), wrapping = range && findWrapping(range, nodeType, attrs);
      if (!wrapping)
        return null;
      tr.wrap(range, wrapping);
      let before = tr.doc.resolve(start - 1).nodeBefore;
      if (before && before.type == nodeType && canJoin(tr.doc, start - 1) && (!joinPredicate || joinPredicate(match, before)))
        tr.join(start - 1);
      return tr;
    });
  }
  function textblockTypeInputRule(regexp, nodeType, getAttrs = null) {
    return new InputRule(regexp, (state, match, start, end) => {
      let $start = state.doc.resolve(start);
      let attrs = getAttrs instanceof Function ? getAttrs(match) : getAttrs;
      if (!$start.node(-1).canReplaceWith($start.index(-1), $start.indexAfter(-1), nodeType))
        return null;
      return state.tr.delete(start, end).setBlockType(start, start, nodeType, attrs);
    });
  }

  // script/sideBar/prosemirror.js
  var DOMPurify = window.DOMPurify;
  function get_hmtl() {
    const fragment = DOMSerializer.fromSchema(view.state.schema).serializeFragment(
      view.state.doc.content
    );
    const wrapper = document.createElement("div");
    wrapper.appendChild(fragment);
    const html = DOMPurify.sanitize(wrapper.innerHTML, { USE_PROFILES: { html: true } });
    console.log("html", html);
    return html;
  }
  function init_notes_html(json_string) {
    const state = setup_prosemirror();
    const doc3 = Node2.fromJSON(state.schema, JSON.parse(json_string));
    state.doc = doc3;
    const fragment = DOMSerializer.fromSchema(state.schema).serializeFragment(state.doc.content);
    const wrapper = document.createElement("div");
    wrapper.appendChild(fragment);
    const html = DOMPurify.sanitize(wrapper.innerHTML, { USE_PROFILES: { html: true } });
    console.log("html", html);
    return html;
  }
  function get_doc_json() {
    const doc3 = window.view.state.doc;
    const json = doc3.toJSON();
    console.log("json", json);
    const jsonString = JSON.stringify(json);
    return jsonString;
  }
  function retrive_doc_json(json_string, state) {
    const doc3 = Node2.fromJSON(state.schema, JSON.parse(json_string));
    console.log("doc", doc3);
    return doc3;
  }
  function initProsemirror_without_notes() {
    const state = setup_prosemirror();
    window.view = new EditorView(document.querySelector("#editor"), { state });
    return window.view;
  }
  function initProsemirror_with_notes(note) {
    const state = setup_prosemirror();
    state.doc = retrive_doc_json(note, state);
    window.view = new EditorView(document.querySelector("#editor"), { state });
    return window.view;
  }
  function setup_prosemirror() {
    const mySchema = new Schema({
      nodes: addListNodes(schema.spec.nodes, "paragraph block*", "block"),
      marks: schema.spec.marks
    });
    let state = EditorState.create({
      schema: mySchema,
      plugins: [
        history(),
        keymap(baseKeymap),
        keymap({ "Mod-z": undo, "Mod-y": redo }),
        dropCursor(),
        gapCursor(),
        buildMarkdownInputRules(mySchema)
      ]
    });
    return state;
  }
  function setup_prosemirror_with_decorations() {
    const state = setup_prosemirror();
    let purplePlugin = new Plugin({
      props: {
        decorations(state2) {
          return DecorationSet.create(state2.doc, [
            Decoration.inline(0, state2.doc.content.size, { style: "color: white !important" })
          ]);
        }
      }
    });
    state.plugins.push(purplePlugin);
    return state;
  }
  function initProsemirror_without_notes_white() {
    const editor = document.querySelector("#editor");
    const state = setup_prosemirror_with_decorations();
    window.view = new EditorView(editor, { state });
    return window.view;
  }
  function initProsemirror_with_notes_white(note) {
    const editor = document.querySelector("#editor");
    const state = setup_prosemirror_with_decorations();
    state.doc = retrive_doc_json(note, state);
    window.view = new EditorView(editor, { state });
    return window.view;
  }
  function buildMarkdownInputRules(schema2) {
    const rules = [];
    const { heading, bullet_list, ordered_list, blockquote, code_block } = schema2.nodes;
    if (heading) {
      rules.push(textblockTypeInputRule(/^(#{1,6})\s$/, heading, (m) => ({ level: m[1].length })));
    }
    if (blockquote) {
      rules.push(wrappingInputRule(/^\s*>\s$/, blockquote));
    }
    if (bullet_list) {
      rules.push(wrappingInputRule(/^\s*([-+*])\s$/, bullet_list));
    }
    if (ordered_list) {
      rules.push(wrappingInputRule(/^(\d+)\.\s$/, ordered_list, (match) => ({ order: +match[1] })));
    }
    if (code_block) {
      rules.push(textblockTypeInputRule(/^```$/, code_block));
    }
    return inputRules({ rules });
  }
  function setup_markdown_input_rules() {
    const markdown_button_list = create_markdown_button_list();
    const markdown_dropdownSubmenu = new DropdownSubmenu(markdown_button_list);
    const note_card_editor = document.querySelector(".note-card-editor");
    if (!note_card_editor) {
      console.error("note_card_editor not found");
      return;
    }
    const markdown_dropdownSubmenu_dom = markdown_dropdownSubmenu.render(window.view).dom;
    markdown_dropdownSubmenu_dom.className = "markdown-btn";
    markdown_dropdownSubmenu_dom.style.backgroundColor = "black";
    note_card_editor.appendChild(markdown_dropdownSubmenu_dom);
    return markdown_dropdownSubmenu;
  }
  function create_markdown_button_list() {
    const schema2 = window.view.state.schema;
    const strong_button = new MenuItem({
      title: "Toggle bold",
      label: "Bold",
      enable: (state) => toggleMark(schema2.marks.strong)(state),
      run: toggleMark(schema2.marks.strong)
    });
    const italic_button = new MenuItem({
      title: "Toggle italic",
      label: "Italic",
      enable: (state) => toggleMark(schema2.marks.em)(state),
      run: toggleMark(schema2.marks.em)
    });
    const underline_button = new MenuItem({
      title: "Toggle underline",
      label: "Underline",
      enable: (state) => toggleMark(schema2.marks.underline)(state),
      run: toggleMark(schema2.marks.underline)
    });
    const strikethrough_button = new MenuItem({
      title: "Toggle strikethrough",
      label: "Strikethrough",
      enable: (state) => toggleMark(schema2.marks.strikethrough)(state),
      run: toggleMark(schema2.marks.strikethrough)
    });
    const code_button = new MenuItem({
      title: "Toggle code",
      label: "Code",
      enable: (state) => toggleMark(schema2.marks.code)(state),
      run: toggleMark(schema2.marks.code)
    });
    const link_button = new MenuItem({
      title: "Toggle link",
      label: "Link",
      enable: (state) => toggleMark(schema2.marks.link)(state),
      run: toggleMark(schema2.marks.link)
    });
    const image_button = new MenuItem({
      title: "Toggle image",
      label: "Image",
      enable: (state) => toggleMark(schema2.marks.image)(state),
      run: toggleMark(schema2.marks.image)
    });
    const bullet_list_button = new MenuItem({
      title: "Toggle bullet list",
      label: "Bullet List",
      enable: (state) => toggleMark(schema2.marks.bullet_list)(state),
      run: toggleMark(schema2.marks.bullet_list)
    });
    const ordered_list_button = new MenuItem({
      title: "Toggle ordered list",
      label: "Ordered List",
      enable: (state) => toggleMark(schema2.marks.ordered_list)(state),
      run: toggleMark(schema2.marks.ordered_list)
    });
    const code_block_button = new MenuItem({
      title: "Toggle code block",
      label: "Code Block",
      enable: (state) => toggleMark(schema2.marks.code_block)(state),
      run: toggleMark(schema2.marks.code_block)
    });
    const heading1_button = new MenuItem({
      title: "Toggle heading 1",
      label: "Heading 1",
      enable: (state) => toggleMark(schema2.marks.heading1)(state),
      run: toggleMark(schema2.marks.heading1)
    });
    const heading2_button = new MenuItem({
      title: "Toggle heading 2",
      label: "Heading 2",
      enable: (state) => toggleMark(schema2.marks.heading2)(state),
      run: toggleMark(schema2.marks.heading2)
    });
    const heading3_button = new MenuItem({
      title: "Toggle heading 3",
      label: "Heading 3",
      enable: (state) => toggleMark(schema2.marks.heading3)(state),
      run: toggleMark(schema2.marks.heading3)
    });
    const heading4_button = new MenuItem({
      title: "Toggle heading 4",
      label: "Heading 4",
      enable: (state) => toggleMark(schema2.marks.heading4)(state),
      run: toggleMark(schema2.marks.heading4)
    });
    return [strong_button, italic_button, underline_button, strikethrough_button, code_button, link_button, image_button, bullet_list_button, ordered_list_button, code_block_button, heading1_button, heading2_button, heading3_button, heading4_button];
  }

  // script/editor.js
  function showNoteEditor(highlightElement2, groupId, mouseEvent) {
    document.querySelectorAll(".note-editor").forEach((el) => el.remove());
    chrome.runtime.sendMessage({
      type: "remove_mindmap_editor"
    });
    let currentNote = highlightElement2.getAttribute("data-note") || "";
    let tagsString = highlightElement2.getAttribute("data-tags") || "";
    if (groupId) {
      const first = document.querySelector('.html-note-highlight[data-group-id="' + groupId + '"]');
      if (first) currentNote = first.getAttribute("data-note") || "";
      if (first) tagsString = first.getAttribute("data-tags") || "";
    }
    function createTagBubble(tagText, tagsBar2, highlightElement3, groupId2) {
      const tagBubble = document.createElement("div");
      tagBubble.className = "tag-bubble";
      tagBubble.innerHTML = tagText;
      const deleteBtn = document.createElement("button");
      deleteBtn.className = "tag-delete-btn";
      deleteBtn.title = "\u5220\u9664\u6807\u7B7E";
      deleteBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        tagBubble.remove();
        const currentPageUrl2 = window.location.href;
        const currentTags = tagsString ? tagsString.split(",").filter((tag) => tag.trim() !== "") : [];
        const tagIndex = currentTags.indexOf(tagText);
        if (tagIndex > -1) {
          currentTags.splice(tagIndex, 1);
          tagsString = currentTags.join(",");
          if (groupId2) {
            document.querySelectorAll('.html-note-highlight[data-group-id="' + groupId2 + '"]').forEach((span) => {
              span.setAttribute("data-tags", tagsString);
            });
          } else {
            highlightElement3.setAttribute("data-tags", tagsString);
          }
          if (currentTags.length > 0) {
            saveTagsToStorage(currentPageUrl2, currentTags);
          } else {
            const storageKey = `html_note_tags_${currentPageUrl2}`;
            chrome.storage.local.remove([storageKey]);
          }
        }
      });
      tagBubble.appendChild(deleteBtn);
      return tagBubble;
    }
    const editor = document.createElement("div");
    editor.className = "note-editor";
    editor.setAttribute("data-group-id", groupId);
    if (currentNote == "") {
      if (tagsString == "") {
        editor.innerHTML = `
      <div class="note-editor-header" >
        <input type="text" class="note-editor-tags" placeholder="Tags" />
      </div>
      <div class="note-editor-textarea"></div>
    `;
      } else {
        editor.innerHTML = `
      <div class="note-editor-header" >
        <input type="text" class="note-editor-tags" placeholder="Tags" />
      </div>
      <div class="note-editor-textarea" ></div>
    `;
        const tagsBar2 = editor.querySelector(".note-editor-header");
        tagsString.split(",").forEach((tag) => {
          if (tag.trim() !== "") {
            const tagBubble = createTagBubble(tag.trim(), tagsBar2, highlightElement2, groupId);
            tagsBar2.insertBefore(tagBubble, tagsBar2.firstChild);
          }
        });
      }
    } else {
      if (tagsString == "") {
        editor.innerHTML = `
      <div class="note-editor-header" >
        <input type="text" class="note-editor-tags" placeholder="Tags" />
      </div>
      <div class="note-editor-textarea"></div>
    `;
      } else {
        editor.innerHTML = `
      <div class="note-editor-header" >
        <input type="text" class="note-editor-tags" placeholder="Tags" />
      </div>
      <div class="note-editor-textarea" ></div>
    `;
        const tagsBar2 = editor.querySelector(".note-editor-header");
        tagsString.split(",").forEach((tag) => {
          if (tag.trim() !== "") {
            const tagBubble = createTagBubble(tag.trim(), tagsBar2, highlightElement2, groupId);
            tagsBar2.insertBefore(tagBubble, tagsBar2.firstChild);
          }
        });
      }
    }
    const rect = highlightElement2.getBoundingClientRect();
    const scrollX = window.pageXOffset || document.documentElement.scrollLeft;
    const scrollY = window.pageYOffset || document.documentElement.scrollTop;
    let left, top;
    if (mouseEvent) {
      left = mouseEvent.clientX + scrollX - 170;
      top = mouseEvent.clientY + scrollY + 15;
    } else {
      left = rect.left + scrollX + rect.width / 2 - 170;
      top = rect.bottom + scrollY + 10;
    }
    editor.style.left = `${left}px`;
    editor.style.top = `${top}px`;
    editor.style.position = "absolute";
    document.body.appendChild(editor);
    const textArea = editor.querySelector(".note-editor-textarea");
    textArea.id = "editor";
    if (currentNote != "") {
      initProsemirror_with_notes_white(currentNote);
    } else {
      initProsemirror_without_notes_white();
    }
    requestAnimationFrame(() => {
      editor.classList.add("show");
    });
    const tags = editor.querySelector(".note-editor-tags");
    tags.addEventListener("mousedown", (ev) => {
      ev.stopPropagation();
    });
    const currentPageUrl = window.location.href;
    tags.addEventListener("click", (ev) => {
      const tagsBar2 = editor.querySelector(".note-editor-header");
      const tagsInput = tagsBar2.querySelector(".note-editor-tags");
      tagsInput.focus();
      tagsInput.addEventListener("keydown", (ev2) => {
        if (ev2.key === "Enter") {
          const tagsValue = tagsInput.value.trim();
          if (tagsValue) {
            if (tagsString == "") {
              const tagBubble = createTagBubble(tagsValue, tagsBar2, highlightElement2, groupId);
              tagsBar2.insertBefore(tagBubble, tagsBar2.firstChild);
            } else {
              const previousTag = tagsBar2.querySelector(".tag-bubble");
              const tagBubble = createTagBubble(tagsValue, tagsBar2, highlightElement2, groupId);
              tagsBar2.insertBefore(tagBubble, previousTag.nextSibling);
            }
            const currentTags = tagsString ? tagsString.split(",").filter((tag) => tag.trim() !== "") : [];
            currentTags.push(tagsValue);
            tagsString = currentTags.join(",");
            saveTagsToStorage(currentPageUrl, tagsValue);
            highlightElement2.setAttribute("data-tags", tagsString);
            tagsInput.value = "";
          }
        }
      });
    });
    tags.onblur = () => {
      if (textArea._inputHandler) {
        textArea.removeEventListener("input", textArea._inputHandler);
      }
      textArea._inputHandler = () => {
        textArea.style.height = "auto";
        textArea.style.height = textArea.scrollHeight + "px";
      };
      textArea.addEventListener("input", textArea._inputHandler);
      if (currentNote != "") {
        textArea.style.height = "auto";
        textArea.style.height = textArea.scrollHeight + "px";
      }
    };
    textArea.onblur = () => {
      setTimeout(() => {
        const activeElement = document.activeElement;
        if (activeElement && activeElement.classList.contains("note-editor-tags")) {
          return;
        }
        const note = document.querySelectorAll('.html-note-highlight[data-group-id="' + groupId + '"]')[0].querySelector(".markdown-temp").getAttribute("mardown-data");
        const tagsValue = tags.value.trim();
        if (tagsValue) {
          const tagsArray = tagsValue.split(",").map((tag) => tag.trim()).filter(Boolean);
          saveTagsToStorage(currentPageUrl, tagsArray);
        }
        if (groupId) {
          if (note.length > 0) {
            console.log(`[debug] note in onblur: ${note}`);
            document.querySelectorAll('.html-note-highlight[data-group-id="' + groupId + '"]').forEach((span) => {
              const notes = get_doc_json();
              console.log(`[debug] notes in onblur: ${notes}`);
              span.setAttribute("data-note", notes);
            });
          }
        }
        if (typeof cleanupMarkdownListeners === "function") {
          cleanupMarkdownListeners(textArea);
        }
        editor.remove();
        document.removeEventListener("mousedown", onDocMouseDown);
      }, 10);
    };
    function onDocMouseDown(ev) {
      if (ev.target.classList.contains("note-editor-tags") || ev.target.classList.contains("tag-delete-btn")) {
        return;
      }
      const isInToolbar = ev.target.closest(".html-note-toolbar-float");
      const isInColorPicker = ev.target.closest(".color-picker-float");
      if (!editor.contains(ev.target) && !isInToolbar && !isInColorPicker) {
        console.log("[debug] if it can chekc the editor");
        saveNotesContent(textArea, tags, groupId, currentPageUrl);
        editor.remove();
        document.removeEventListener("mousedown", onDocMouseDown);
      }
    }
    document.addEventListener("mousedown", onDocMouseDown);
    textArea.focus();
    textArea.onfocus = () => {
      try {
        const range = document.createRange();
        const selection = window.getSelection();
        if (textArea.childNodes.length > 0) {
          const lastChild = textArea.lastChild;
          if (lastChild.nodeType === Node.TEXT_NODE) {
            range.setStart(lastChild, lastChild.textContent.length);
          } else {
            range.setStartAfter(lastChild);
          }
        } else {
          range.setStart(textArea, 0);
        }
        range.collapse(true);
        selection.removeAllRanges();
        selection.addRange(range);
      } catch (error) {
        console.warn("\u8BBE\u7F6E\u7126\u70B9\u4F4D\u7F6E\u5931\u8D25:", error);
      }
    };
    const tagsBar = editor.querySelector(".note-editor-header");
  }
  function saveTagsToStorage(pageUrl, tags) {
    if (!pageUrl || !tags || !Array.isArray(tags)) {
      console.error("saveTagsToStorage: \u53C2\u6570\u65E0\u6548");
      return;
    }
    const storageKey = `html_note_tags_${pageUrl}`;
    const tagsData = {
      url: pageUrl,
      tags,
      timestamp: Date.now()
    };
    chrome.storage.local.set({ [storageKey]: tagsData }, () => {
      if (chrome.runtime.lastError) {
        console.error("\u4FDD\u5B58tags\u5931\u8D25:", chrome.runtime.lastError);
      } else {
        console.log("tags\u5DF2\u4FDD\u5B58\u5230\u672C\u5730\u5B58\u50A8:", tags);
      }
    });
  }
  function saveNotesContent(textArea, tags, groupId, currentPageUrl) {
    setTimeout(() => {
      const activeElement = document.activeElement;
      if (activeElement && activeElement.classList.contains("note-editor-tags")) {
        return;
      }
      const note = get_doc_json();
      const tagsValue = tags.value.trim();
      if (tagsValue) {
        const tagsArray = tagsValue.split(",").map((tag) => tag.trim()).filter(Boolean);
        saveTagsToStorage(currentPageUrl, tagsArray);
      }
      if (groupId) {
        if (note != "") {
          document.querySelectorAll('.html-note-highlight[data-group-id="' + groupId + '"]').forEach((span) => {
            span.setAttribute("data-note", get_doc_json());
            update_storage_note(groupId);
          });
        }
      } else {
        if (note != "") {
          highlightElement.setAttribute("data-note", get_doc_json());
          update_storage_note(groupId);
        }
      }
      removeListener(textArea);
    }, 10);
  }
  function removeListener(textArea) {
    const allChildren = textArea.querySelectorAll("markdown-temp");
    allChildren.forEach((child) => {
      child.removeEventListener("keydown", (e) => {
      });
      child.removeEventListener("click", (e) => {
      });
    });
  }
  function update_storage_note(groupId) {
    console.log(`[debug] update_storage_note: ${get_doc_json()}`);
    chrome.storage.local.get(groupId, function(result) {
      if (result) {
        result[groupId].note = get_doc_json();
        chrome.runtime.sendMessage({
          type: "update_storage_note",
          groupId,
          note: get_doc_json()
        });
        chrome.storage.local.set({
          [groupId]: result[groupId]
        });
      }
    });
  }

  // script/content.js
  var import_crypto_js_min = __toESM(require_crypto_js_min());

  // node_modules/mind-elixir/dist/MindElixir.js
  var at = Object.defineProperty;
  var dt = (e, t, n) => t in e ? at(e, t, { enumerable: true, configurable: true, writable: true, value: n }) : e[t] = n;
  var V = (e, t, n) => (dt(e, typeof t != "symbol" ? t + "" : t, n), n);
  var me = {
    name: "Latte",
    type: "light",
    palette: ["#dd7878", "#ea76cb", "#8839ef", "#e64553", "#fe640b", "#df8e1d", "#40a02b", "#209fb5", "#1e66f5", "#7287fd"],
    cssVar: {
      "--node-gap-x": "30px",
      "--node-gap-y": "10px",
      "--main-gap-x": "65px",
      "--main-gap-y": "45px",
      "--root-radius": "30px",
      "--main-radius": "20px",
      "--root-color": "#ffffff",
      "--root-bgcolor": "#4c4f69",
      "--root-border-color": "rgba(0, 0, 0, 0)",
      "--main-color": "#444446",
      "--main-bgcolor": "#ffffff",
      "--topic-padding": "3px",
      "--color": "#777777",
      "--bgcolor": "#f6f6f6",
      "--selected": "#4dc4ff",
      "--panel-color": "#444446",
      "--panel-bgcolor": "#ffffff",
      "--panel-border-color": "#eaeaea",
      "--map-padding": "50px"
    }
  };
  var ve = {
    name: "Dark",
    type: "dark",
    palette: ["#848FA0", "#748BE9", "#D2F9FE", "#4145A5", "#789AFA", "#706CF4", "#EF987F", "#775DD5", "#FCEECF", "#DA7FBC"],
    cssVar: {
      "--node-gap-x": "30px",
      "--node-gap-y": "10px",
      "--main-gap-x": "65px",
      "--main-gap-y": "45px",
      "--root-radius": "30px",
      "--main-radius": "20px",
      "--root-color": "#ffffff",
      "--root-bgcolor": "#2d3748",
      "--root-border-color": "rgba(255, 255, 255, 0.1)",
      "--main-color": "#ffffff",
      "--main-bgcolor": "#4c4f69",
      "--topic-padding": "3px",
      "--color": "#cccccc",
      "--bgcolor": "#252526",
      "--selected": "#4dc4ff",
      "--panel-color": "#ffffff",
      "--panel-bgcolor": "#2d3748",
      "--panel-border-color": "#696969",
      "--map-padding": "50px 80px"
    }
  };
  function ne(e) {
    return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/"/g, "&quot;");
  }
  var oe = function(e, t) {
    if (t.id === e)
      return t;
    if (t.children && t.children.length) {
      for (let n = 0; n < t.children.length; n++) {
        const o = oe(e, t.children[n]);
        if (o)
          return o;
      }
      return null;
    } else
      return null;
  };
  var j = (e, t) => {
    if (e.parent = t, e.children)
      for (let n = 0; n < e.children.length; n++)
        j(e.children[n], e);
  };
  var q = (e, t, n) => {
    if (e.expanded = t, e.children)
      if (n === void 0 || n > 0) {
        const o = n !== void 0 ? n - 1 : void 0;
        e.children.forEach((i) => {
          q(i, t, o);
        });
      } else
        e.children.forEach((o) => {
          q(o, false);
        });
  };
  function be(e) {
    if (e.id = K(), e.children)
      for (let t = 0; t < e.children.length; t++)
        be(e.children[t]);
  }
  function ie3(e, t, n, o) {
    const i = o - t, s = e - n;
    let r = Math.atan(Math.abs(i) / Math.abs(s)) / 3.14 * 180;
    if (isNaN(r))
      return;
    s < 0 && i > 0 && (r = 180 - r), s < 0 && i < 0 && (r = 180 + r), s > 0 && i < 0 && (r = 360 - r);
    const c = 12, l = 30, d = r + l, f = r - l;
    return {
      x1: n + Math.cos(Math.PI * d / 180) * c,
      y1: o - Math.sin(Math.PI * d / 180) * c,
      x2: n + Math.cos(Math.PI * f / 180) * c,
      y2: o - Math.sin(Math.PI * f / 180) * c
    };
  }
  function K() {
    return ((/* @__PURE__ */ new Date()).getTime().toString(16) + Math.random().toString(16).substr(2)).substr(2, 16);
  }
  var ht = function() {
    const e = K();
    return {
      topic: this.newTopicName,
      id: e
    };
  };
  function ye(e) {
    return JSON.parse(
      JSON.stringify(e, (n, o) => {
        if (n !== "parent")
          return o;
      })
    );
  }
  var H = (e, t) => {
    let n = 0, o = 0;
    for (; t && t !== e; )
      n += t.offsetLeft, o += t.offsetTop, t = t.offsetParent;
    return { offsetLeft: n, offsetTop: o };
  };
  var N = (e, t) => {
    for (const n in t)
      e.setAttribute(n, t[n]);
  };
  var he = (e) => e ? e.tagName === "ME-TPC" : false;
  var le = (e) => e.filter((t) => t.nodeObj.parent).filter((t, n, o) => {
    for (let i = 0; i < o.length; i++) {
      if (t === o[i])
        continue;
      const { parent: s } = t.nodeObj;
      if (s === o[i].nodeObj)
        return false;
    }
    return true;
  });
  var Ge = (e) => {
    const t = /translate\(([^,]+),\s*([^)]+)\)/, n = e.match(t);
    return n ? { x: parseFloat(n[1]), y: parseFloat(n[2]) } : { x: 0, y: 0 };
  };
  var we = function(e) {
    for (let t = 0; t < e.length; t++) {
      const { dom: n, evt: o, func: i } = e[t];
      n.addEventListener(o, i);
    }
    return function() {
      for (let n = 0; n < e.length; n++) {
        const { dom: o, evt: i, func: s } = e[n];
        o.removeEventListener(i, s);
      }
    };
  };
  var M = /* @__PURE__ */ ((e) => (e.LHS = "lhs", e.RHS = "rhs", e))(M || {});
  var ut = (e) => {
    const t = e.map.querySelectorAll(".lhs>me-wrapper>me-parent>me-tpc");
    e.selectNode(t[Math.ceil(t.length / 2) - 1]);
  };
  var ft = (e) => {
    const t = e.map.querySelectorAll(".rhs>me-wrapper>me-parent>me-tpc");
    e.selectNode(t[Math.ceil(t.length / 2) - 1]);
  };
  var pt = (e) => {
    e.selectNode(e.map.querySelector("me-root>me-tpc"));
  };
  var gt = function(e, t) {
    const n = t.parentElement.parentElement.parentElement.previousSibling;
    if (n) {
      const o = n.firstChild;
      e.selectNode(o);
    }
  };
  var mt = function(e, t) {
    const n = t.parentElement.nextSibling;
    if (n && n.firstChild) {
      const o = n.firstChild.firstChild.firstChild;
      e.selectNode(o);
    }
  };
  var Te = function(e, t) {
    var s, r;
    const n = e.currentNode || ((s = e.currentNodes) == null ? void 0 : s[0]);
    if (!n)
      return;
    const o = n.nodeObj, i = n.offsetParent.offsetParent.parentElement;
    o.parent ? i.className === t ? mt(e, n) : (r = o.parent) != null && r.parent ? gt(e, n) : pt(e) : t === M.LHS ? ut(e) : ft(e);
  };
  var Le = function(e, t) {
    const n = e.currentNode;
    if (!n || !n.nodeObj.parent)
      return;
    const i = t + "Sibling", s = n.parentElement.parentElement[i];
    s ? e.selectNode(s.firstChild.firstChild) : e.selectNode(n);
  };
  var se = function(e, t, n) {
    const { scaleVal: o, scaleSensitivity: i } = e;
    switch (t) {
      case "in":
        e.scale(o + i, n);
        break;
      case "out":
        e.scale(o - i, n);
    }
  };
  function vt(e, t) {
    t = t === true ? {} : t;
    const n = () => {
      e.currentArrow ? e.removeArrow() : e.currentSummary ? e.removeSummary(e.currentSummary.summaryObj.id) : e.currentNodes && e.removeNodes(e.currentNodes);
    };
    let o = false, i = null;
    const s = (c) => {
      const l = e.nodeData;
      if (c.key === "0")
        for (const d of l.children)
          q(d, false);
      if (c.key === "=")
        for (const d of l.children)
          q(d, true);
      if (["1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(c.key))
        for (const d of l.children)
          q(d, true, Number(c.key) - 1);
      e.refresh(), e.toCenter(), o = false, i && (clearTimeout(i), i = null, e.container.removeEventListener("keydown", s));
    }, r = {
      Enter: (c) => {
        c.shiftKey ? e.insertSibling("before") : c.ctrlKey || c.metaKey ? e.insertParent() : e.insertSibling("after");
      },
      Tab: () => {
        e.addChild();
      },
      F1: () => {
        e.toCenter();
      },
      F2: () => {
        e.beginEdit();
      },
      ArrowUp: (c) => {
        if (c.altKey)
          e.moveUpNode();
        else {
          if (c.metaKey || c.ctrlKey)
            return e.initSide();
          Le(e, "previous");
        }
      },
      ArrowDown: (c) => {
        c.altKey ? e.moveDownNode() : Le(e, "next");
      },
      ArrowLeft: (c) => {
        if (c.metaKey || c.ctrlKey)
          return e.initLeft();
        Te(e, M.LHS);
      },
      ArrowRight: (c) => {
        if (c.metaKey || c.ctrlKey)
          return e.initRight();
        Te(e, M.RHS);
      },
      PageUp: () => e.moveUpNode(),
      PageDown: () => {
        e.moveDownNode();
      },
      c: (c) => {
        (c.metaKey || c.ctrlKey) && (e.waitCopy = e.currentNodes);
      },
      x: (c) => {
        (c.metaKey || c.ctrlKey) && (e.waitCopy = e.currentNodes, n());
      },
      v: (c) => {
        !e.waitCopy || !e.currentNode || (c.metaKey || c.ctrlKey) && (e.waitCopy.length === 1 ? e.copyNode(e.waitCopy[0], e.currentNode) : e.copyNodes(e.waitCopy, e.currentNode));
      },
      "=": (c) => {
        (c.metaKey || c.ctrlKey) && se(e, "in");
      },
      "-": (c) => {
        (c.metaKey || c.ctrlKey) && se(e, "out");
      },
      0: (c) => {
        if (c.metaKey || c.ctrlKey) {
          if (o)
            return;
          e.scale(1);
        }
      },
      k: (c) => {
        (c.metaKey || c.ctrlKey) && (o = true, i && (clearTimeout(i), e.container.removeEventListener("keydown", s)), i = window.setTimeout(() => {
          o = false, i = null;
        }, 2e3), e.container.addEventListener("keydown", s));
      },
      Delete: n,
      Backspace: n,
      ...t
    };
    e.container.onkeydown = (c) => {
      if (c.preventDefault(), !e.editable)
        return;
      const l = r[c.key];
      l && l(c);
    };
  }
  function bt(e) {
    const { dragMoveHelper: t } = e, n = (u) => {
      var m, v, b;
      if (u.button !== 0)
        return;
      if ((m = e.helper1) != null && m.moved) {
        e.helper1.clear();
        return;
      }
      if ((v = e.helper2) != null && v.moved) {
        e.helper2.clear();
        return;
      }
      if (t.moved) {
        t.clear();
        return;
      }
      const a = u.target;
      if (a.tagName === "ME-EPD")
        u.ctrlKey || u.metaKey ? e.expandNodeAll(a.previousSibling) : e.expandNode(a.previousSibling);
      else if (a.tagName === "ME-TPC" && e.currentNodes.length > 1)
        e.selectNode(a);
      else if (!e.editable)
        return;
      const p = (b = a.parentElement) == null ? void 0 : b.parentElement;
      p.getAttribute("class") === "topiclinks" ? e.selectArrow(a.parentElement) : p.getAttribute("class") === "summary" && e.selectSummary(a.parentElement);
    }, o = (u) => {
      var m;
      if (!e.editable)
        return;
      const a = u.target;
      he(a) && e.beginEdit(a);
      const p = (m = a.parentElement) == null ? void 0 : m.parentElement;
      p.getAttribute("class") === "topiclinks" ? e.editArrowLabel(a.parentElement) : p.getAttribute("class") === "summary" && e.editSummary(a.parentElement);
    };
    let i = 0;
    const s = (u) => {
      if (u.pointerType === "mouse")
        return;
      const a = (/* @__PURE__ */ new Date()).getTime(), p = a - i;
      p < 300 && p > 0 && o(u), i = a;
    }, r = (u) => {
      t.moved = false;
      const a = e.mouseSelectionButton === 0 ? 2 : 0;
      if (u.button !== a && u.pointerType === "mouse")
        return;
      t.x = u.clientX, t.y = u.clientY;
      const p = u.target;
      p.className !== "circle" && p.contentEditable !== "plaintext-only" && (t.mousedown = true, p.setPointerCapture(u.pointerId));
    }, c = (u) => {
      if (u.target.contentEditable !== "plaintext-only") {
        const a = u.clientX - t.x, p = u.clientY - t.y;
        t.onMove(a, p);
      }
      t.x = u.clientX, t.y = u.clientY;
    }, l = (u) => {
      const a = e.mouseSelectionButton === 0 ? 2 : 0;
      if (u.button !== a && u.pointerType === "mouse")
        return;
      const p = u.target;
      p.hasPointerCapture && p.hasPointerCapture(u.pointerId) && p.releasePointerCapture(u.pointerId), t.clear();
    }, d = (u) => {
      if (u.preventDefault(), u.button !== 2 || !e.editable)
        return;
      const a = u.target;
      he(a) && !a.classList.contains("selected") && e.selectNode(a), setTimeout(() => {
        e.dragMoveHelper.moved || e.bus.fire("showContextMenu", u);
      }, 200);
    }, f = (u) => {
      u.stopPropagation(), u.preventDefault(), u.ctrlKey || u.metaKey ? u.deltaY < 0 ? se(e, "in", e.dragMoveHelper) : e.scaleVal - e.scaleSensitivity > 0 && se(e, "out", e.dragMoveHelper) : u.shiftKey ? e.move(-u.deltaY, 0) : e.move(-u.deltaX, -u.deltaY);
    }, { container: h } = e;
    return we([
      { dom: h, evt: "pointerdown", func: r },
      { dom: h, evt: "pointermove", func: c },
      { dom: h, evt: "pointerup", func: l },
      { dom: h, evt: "pointerup", func: s },
      { dom: h, evt: "click", func: n },
      { dom: h, evt: "dblclick", func: o },
      { dom: h, evt: "contextmenu", func: d },
      { dom: h, evt: "wheel", func: typeof e.handleWheel == "function" ? e.handleWheel : f }
    ]);
  }
  function yt() {
    return {
      handlers: {},
      addListener: function(e, t) {
        this.handlers[e] === void 0 && (this.handlers[e] = []), this.handlers[e].push(t);
      },
      fire: function(e, ...t) {
        if (this.handlers[e] instanceof Array) {
          const n = this.handlers[e];
          for (let o = 0; o < n.length; o++)
            n[o](...t);
        }
      },
      removeListener: function(e, t) {
        if (!this.handlers[e])
          return;
        const n = this.handlers[e];
        if (!t)
          n.length = 0;
        else if (n.length)
          for (let o = 0; o < n.length; o++)
            n[o] === t && this.handlers[e].splice(o, 1);
      }
    };
  }
  var re = document;
  var wt = function() {
    this.nodes.innerHTML = "";
    const e = this.createTopic(this.nodeData);
    xe(e, this.nodeData), e.draggable = false;
    const t = re.createElement("me-root");
    t.appendChild(e);
    const n = this.nodeData.children || [];
    if (this.direction === 2) {
      let o = 0, i = 0;
      n.map((s) => {
        s.direction === 0 ? o += 1 : s.direction === 1 ? i += 1 : o <= i ? (s.direction = 0, o += 1) : (s.direction = 1, i += 1);
      });
    }
    xt(this, n, t);
  };
  var xt = function(e, t, n) {
    const o = re.createElement("me-main");
    o.className = M.LHS;
    const i = re.createElement("me-main");
    i.className = M.RHS;
    for (let s = 0; s < t.length; s++) {
      const r = t[s], { grp: c } = e.createWrapper(r);
      e.direction === 2 ? r.direction === 0 ? o.appendChild(c) : i.appendChild(c) : e.direction === 0 ? o.appendChild(c) : i.appendChild(c);
    }
    e.nodes.appendChild(o), e.nodes.appendChild(n), e.nodes.appendChild(i), e.nodes.appendChild(e.lines);
  };
  var Et = function(e, t) {
    const n = re.createElement("me-children");
    for (let o = 0; o < t.length; o++) {
      const i = t[o], { grp: s } = e.createWrapper(i);
      n.appendChild(s);
    }
    return n;
  };
  var T = document;
  var qe = function(e, t) {
    const o = (this != null && this.el ? this.el : t || document).querySelector(`[data-nodeid="me${e}"]`);
    if (!o)
      throw new Error(`FindEle: Node ${e} not found, maybe it's collapsed.`);
    return o;
  };
  var xe = function(e, t) {
    if (e.innerHTML = "", t.style) {
      const n = t.style;
      for (const o in n)
        e.style[o] = n[o];
    }
    if (t.dangerouslySetInnerHTML) {
      e.innerHTML = t.dangerouslySetInnerHTML;
      return;
    }
    if (t.image) {
      const n = t.image;
      if (n.url && n.width && n.height) {
        const o = T.createElement("img");
        o.src = n.url, o.style.width = n.width + "px", o.style.height = n.height + "px", n.fit && (o.style.objectFit = n.fit), e.appendChild(o), e.image = o;
      }
    } else
      e.image && (e.image = void 0);
    {
      const n = T.createElement("span");
      n.className = "text", n.textContent = t.topic, e.appendChild(n), e.text = n;
    }
    if (t.hyperLink) {
      const n = T.createElement("a");
      n.className = "hyper-link", n.target = "_blank", n.innerText = "\u{1F517}", n.href = t.hyperLink, e.appendChild(n), e.link = n;
    } else
      e.link && (e.link = void 0);
    if (t.icons && t.icons.length) {
      const n = T.createElement("span");
      n.className = "icons", n.innerHTML = t.icons.map((o) => `<span>${ne(o)}</span>`).join(""), e.appendChild(n), e.icons = n;
    } else
      e.icons && (e.icons = void 0);
    if (t.tags && t.tags.length) {
      const n = T.createElement("div");
      n.className = "tags", n.innerHTML = t.tags.map((o) => `<span>${ne(o)}</span>`).join(""), e.appendChild(n), e.tags = n;
    } else
      e.tags && (e.tags = void 0);
  };
  var Ct = function(e, t) {
    const n = T.createElement("me-wrapper"), { p: o, tpc: i } = this.createParent(e);
    if (n.appendChild(o), !t && e.children && e.children.length > 0) {
      const s = Ee(e.expanded);
      if (o.appendChild(s), e.expanded !== false) {
        const r = Et(this, e.children);
        n.appendChild(r);
      }
    }
    return { grp: n, top: o, tpc: i };
  };
  var St = function(e) {
    const t = T.createElement("me-parent"), n = this.createTopic(e);
    return xe(n, e), t.appendChild(n), { p: t, tpc: n };
  };
  var Nt = function(e) {
    const t = T.createElement("me-children");
    return t.append(...e), t;
  };
  var kt = function(e) {
    const t = T.createElement("me-tpc");
    return t.nodeObj = e, t.dataset.nodeid = "me" + e.id, t.draggable = this.draggable, t;
  };
  function ze(e) {
    const t = T.createRange();
    t.selectNodeContents(e);
    const n = window.getSelection();
    n && (n.removeAllRanges(), n.addRange(t));
  }
  var _t = function(e) {
    if (!e)
      return;
    const t = T.createElement("div"), n = e.text.textContent;
    e.appendChild(t), t.id = "input-box", t.textContent = n, t.contentEditable = "plaintext-only", t.spellcheck = false;
    const o = getComputedStyle(e);
    t.style.cssText = `min-width:${e.offsetWidth - 8}px;
  color:${o.color};
  padding:${o.padding};
  margin:${o.margin};
  font:${o.font};
  background-color:${o.backgroundColor !== "rgba(0, 0, 0, 0)" && o.backgroundColor};
  border-radius:${o.borderRadius};`, this.direction === 0 && (t.style.right = "0"), ze(t), this.bus.fire("operation", {
      name: "beginEdit",
      obj: e.nodeObj
    }), t.addEventListener("keydown", (i) => {
      i.stopPropagation();
      const s = i.key;
      if (s === "Enter" || s === "Tab") {
        if (i.shiftKey)
          return;
        i.preventDefault(), t.blur(), this.container.focus();
      }
    }), t.addEventListener("blur", () => {
      var r;
      if (!t)
        return;
      const i = e.nodeObj, s = ((r = t.textContent) == null ? void 0 : r.trim()) || "";
      s === "" ? i.topic = n : i.topic = s, t.remove(), s !== n && (e.text.textContent = i.topic, this.linkDiv(), this.bus.fire("operation", {
        name: "finishEdit",
        obj: i,
        origin: n
      }));
    });
  };
  var Ee = function(e) {
    const t = T.createElement("me-epd");
    return t.expanded = e !== false, t.className = e !== false ? "minus" : "", t;
  };
  var I = document;
  var L = "http://www.w3.org/2000/svg";
  var ue = function(e, t, n, o = {}) {
    const { anchor: i = "middle", color: s, dataType: r } = o, c = document.createElementNS(L, "text");
    return N(c, {
      "text-anchor": i,
      x: t + "",
      y: n + "",
      fill: s || (i === "middle" ? "rgb(235, 95, 82)" : "#666")
    }), r && (c.dataset.type = r), c.innerHTML = e, c;
  };
  var Ve = function(e, t, n) {
    const o = I.createElementNS(L, "path");
    return N(o, {
      d: e,
      stroke: t || "#666",
      fill: "none",
      "stroke-width": n
    }), o;
  };
  var X = function(e) {
    const t = I.createElementNS(L, "svg");
    return t.setAttribute("class", e), t.setAttribute("overflow", "visible"), t;
  };
  var Ae = function() {
    const e = I.createElementNS(L, "line");
    return e.setAttribute("stroke", "#4dc4ff"), e.setAttribute("fill", "none"), e.setAttribute("stroke-width", "2"), e.setAttribute("opacity", "0.45"), e;
  };
  var Tt = function(e, t, n, o) {
    const i = I.createElementNS(L, "g");
    return [
      {
        name: "line",
        d: e
      },
      {
        name: "arrow1",
        d: t
      },
      {
        name: "arrow2",
        d: n
      }
    ].forEach((r, c) => {
      const l = r.d, d = I.createElementNS(L, "path"), f = {
        d: l,
        stroke: (o == null ? void 0 : o.stroke) || "rgb(235, 95, 82)",
        fill: "none",
        "stroke-linecap": (o == null ? void 0 : o.strokeLinecap) || "cap",
        "stroke-width": String((o == null ? void 0 : o.strokeWidth) || "2")
      };
      (o == null ? void 0 : o.opacity) !== void 0 && (f.opacity = String(o.opacity)), N(d, f), c === 0 && d.setAttribute("stroke-dasharray", (o == null ? void 0 : o.strokeDasharray) || "8,2");
      const h = I.createElementNS(L, "path");
      N(h, {
        d: l,
        stroke: "transparent",
        fill: "none",
        "stroke-width": "15"
      }), i.appendChild(h), i.appendChild(d), i[r.name] = d;
    }), i;
  };
  var Ue = function(e, t, n) {
    if (!t)
      return;
    const o = I.createElement("div");
    e.nodes.appendChild(o);
    const i = t.innerHTML;
    o.id = "input-box", o.textContent = i, o.contentEditable = "plaintext-only", o.spellcheck = false;
    const s = t.getBBox();
    o.style.cssText = `
    min-width:${Math.max(88, s.width)}px;
    position:absolute;
    left:${s.x}px;
    top:${s.y}px;
    padding: 2px 4px;
    margin: -2px -4px; 
  `, ze(o), e.scrollIntoView(o), o.addEventListener("keydown", (r) => {
      r.stopPropagation();
      const c = r.key;
      if (c === "Enter" || c === "Tab") {
        if (r.shiftKey)
          return;
        r.preventDefault(), o.blur(), e.container.focus();
      }
    }), o.addEventListener("blur", () => {
      var c;
      if (!o)
        return;
      const r = ((c = o.textContent) == null ? void 0 : c.trim()) || "";
      r === "" ? n.label = i : n.label = r, o.remove(), r !== i && (t.innerHTML = n.label, e.linkDiv(), "parent" in n ? e.bus.fire("operation", {
        name: "finishEditSummary",
        obj: n
      }) : e.bus.fire("operation", {
        name: "finishEditArrowLabel",
        obj: n
      }));
    });
  };
  var Lt = function(e) {
    const t = this.map.querySelector("me-root"), n = t.offsetTop, o = t.offsetLeft, i = t.offsetWidth, s = t.offsetHeight, r = this.map.querySelectorAll("me-main > me-wrapper");
    this.lines.innerHTML = "";
    for (let c = 0; c < r.length; c++) {
      const l = r[c], d = l.querySelector("me-tpc"), { offsetLeft: f, offsetTop: h } = H(this.nodes, d), g = d.offsetWidth, u = d.offsetHeight, a = l.parentNode.className, p = this.generateMainBranch({ pT: n, pL: o, pW: i, pH: s, cT: h, cL: f, cW: g, cH: u, direction: a, containerHeight: this.nodes.offsetHeight }), m = this.theme.palette, v = d.nodeObj.branchColor || m[c % m.length];
      if (d.style.borderColor = v, this.lines.appendChild(Ve(p, v, "3")), e && e !== l)
        continue;
      const b = X("subLines"), x = l.lastChild;
      x.tagName === "svg" && x.remove(), l.appendChild(b), Xe(this, b, v, l, a, true);
    }
    this.renderArrow(), this.renderSummary(), this.bus.fire("linkDiv");
  };
  var Xe = function(e, t, n, o, i, s) {
    const r = o.firstChild, c = o.children[1].children;
    if (c.length === 0)
      return;
    const l = r.offsetTop, d = r.offsetLeft, f = r.offsetWidth, h = r.offsetHeight;
    for (let g = 0; g < c.length; g++) {
      const u = c[g], a = u.firstChild, p = a.offsetTop, m = a.offsetLeft, v = a.offsetWidth, b = a.offsetHeight, x = a.firstChild.nodeObj.branchColor || n, C = e.generateSubBranch({ pT: l, pL: d, pW: f, pH: h, cT: p, cL: m, cW: v, cH: b, direction: i, isFirst: s });
      t.appendChild(Ve(C, x, "2"));
      const k = a.children[1];
      if (k) {
        if (!k.expanded)
          continue;
      } else
        continue;
      Xe(e, t, x, u, i);
    }
  };
  var Me = {
    addChild: "\u63D2\u5165\u5B50\u8282\u70B9",
    addParent: "\u63D2\u5165\u7236\u8282\u70B9",
    addSibling: "\u63D2\u5165\u540C\u7EA7\u8282\u70B9",
    removeNode: "\u5220\u9664\u8282\u70B9",
    focus: "\u4E13\u6CE8",
    cancelFocus: "\u53D6\u6D88\u4E13\u6CE8",
    moveUp: "\u4E0A\u79FB",
    moveDown: "\u4E0B\u79FB",
    link: "\u8FDE\u63A5",
    linkBidirectional: "\u53CC\u5411\u8FDE\u63A5",
    clickTips: "\u8BF7\u70B9\u51FB\u76EE\u6807\u8282\u70B9",
    summary: "\u6458\u8981"
  };
  var De = {
    cn: Me,
    zh_CN: Me,
    zh_TW: {
      addChild: "\u63D2\u5165\u5B50\u7BC0\u9EDE",
      addParent: "\u63D2\u5165\u7236\u7BC0\u9EDE",
      addSibling: "\u63D2\u5165\u540C\u7D1A\u7BC0\u9EDE",
      removeNode: "\u522A\u9664\u7BC0\u9EDE",
      focus: "\u5C08\u6CE8",
      cancelFocus: "\u53D6\u6D88\u5C08\u6CE8",
      moveUp: "\u4E0A\u79FB",
      moveDown: "\u4E0B\u79FB",
      link: "\u9023\u63A5",
      linkBidirectional: "\u96D9\u5411\u9023\u63A5",
      clickTips: "\u8ACB\u9EDE\u64CA\u76EE\u6A19\u7BC0\u9EDE",
      summary: "\u6458\u8981"
    },
    en: {
      addChild: "Add child",
      addParent: "Add parent",
      addSibling: "Add sibling",
      removeNode: "Remove node",
      focus: "Focus Mode",
      cancelFocus: "Cancel Focus Mode",
      moveUp: "Move up",
      moveDown: "Move down",
      link: "Link",
      linkBidirectional: "Bidirectional Link",
      clickTips: "Please click the target node",
      summary: "Summary"
    },
    ru: {
      addChild: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0434\u043E\u0447\u0435\u0440\u043D\u0438\u0439 \u044D\u043B\u0435\u043C\u0435\u043D\u0442",
      addParent: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0440\u043E\u0434\u0438\u0442\u0435\u043B\u044C\u0441\u043A\u0438\u0439 \u044D\u043B\u0435\u043C\u0435\u043D\u0442",
      addSibling: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043D\u0430 \u044D\u0442\u043E\u043C \u0443\u0440\u043E\u0432\u043D\u0435",
      removeNode: "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0443\u0437\u0435\u043B",
      focus: "\u0420\u0435\u0436\u0438\u043C \u0444\u043E\u043A\u0443\u0441\u0438\u0440\u043E\u0432\u043A\u0438",
      cancelFocus: "\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C \u0440\u0435\u0436\u0438\u043C \u0444\u043E\u043A\u0443\u0441\u0438\u0440\u043E\u0432\u043A\u0438",
      moveUp: "\u041F\u043E\u0434\u043D\u044F\u0442\u044C \u0432\u044B\u0448\u0435",
      moveDown: "\u041E\u043F\u0443\u0441\u0442\u0438\u0442\u044C \u043D\u0438\u0436\u0435",
      link: "\u0421\u0441\u044B\u043B\u043A\u0430",
      linkBidirectional: "\u0414\u0432\u0443\u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043D\u0430\u044F \u0441\u0441\u044B\u043B\u043A\u0430",
      clickTips: "\u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u043D\u0430\u0436\u043C\u0438\u0442\u0435 \u043D\u0430 \u0446\u0435\u043B\u0435\u0432\u043E\u0439 \u0443\u0437\u0435\u043B",
      summary: "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435"
    },
    ja: {
      addChild: "\u5B50\u30CE\u30FC\u30C9\u3092\u8FFD\u52A0\u3059\u308B",
      addParent: "\u89AA\u30CE\u30FC\u30C9\u3092\u8FFD\u52A0\u3057\u307E\u3059",
      addSibling: "\u5144\u5F1F\u30CE\u30FC\u30C9\u3092\u8FFD\u52A0\u3059\u308B",
      removeNode: "\u30CE\u30FC\u30C9\u3092\u524A\u9664",
      focus: "\u96C6\u4E2D",
      cancelFocus: "\u96C6\u4E2D\u89E3\u9664",
      moveUp: "\u4E0A\u3078\u79FB\u52D5",
      moveDown: "\u4E0B\u3078\u79FB\u52D5",
      link: "\u30B3\u30CD\u30AF\u30C8",
      linkBidirectional: "\u53CC\u65B9\u5411\u30EA\u30F3\u30AF",
      clickTips: "\u30BF\u30FC\u30B2\u30C3\u30C8\u30CE\u30FC\u30C9\u3092\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u304F\u3060\u3055\u3044",
      summary: "\u6982\u8981"
    },
    pt: {
      addChild: "Adicionar item filho",
      addParent: "Adicionar item pai",
      addSibling: "Adicionar item irmao",
      removeNode: "Remover item",
      focus: "Modo Foco",
      cancelFocus: "Cancelar Modo Foco",
      moveUp: "Mover para cima",
      moveDown: "Mover para baixo",
      link: "Link",
      linkBidirectional: "Link bidirecional",
      clickTips: "Favor clicar no item alvo",
      summary: "Resumo"
    },
    it: {
      addChild: "Aggiungi figlio",
      addParent: "Aggiungi genitore",
      addSibling: "Aggiungi fratello",
      removeNode: "Rimuovi nodo",
      focus: "Modalit\xE0 Focus",
      cancelFocus: "Annulla Modalit\xE0 Focus",
      moveUp: "Sposta su",
      moveDown: "Sposta gi\xF9",
      link: "Collega",
      linkBidirectional: "Collegamento bidirezionale",
      clickTips: "Si prega di fare clic sul nodo di destinazione",
      summary: "Unisci nodi"
    },
    es: {
      addChild: "Agregar hijo",
      addParent: "Agregar padre",
      addSibling: "Agregar hermano",
      removeNode: "Eliminar nodo",
      focus: "Modo Enfoque",
      cancelFocus: "Cancelar Modo Enfoque",
      moveUp: "Mover hacia arriba",
      moveDown: "Mover hacia abajo",
      link: "Enlace",
      linkBidirectional: "Enlace bidireccional",
      clickTips: "Por favor haga clic en el nodo de destino",
      summary: "Resumen"
    },
    fr: {
      addChild: "Ajout enfant",
      addParent: "Ajout parent",
      addSibling: "Ajout voisin",
      removeNode: "Supprimer",
      focus: "Cibler",
      cancelFocus: "Retour",
      moveUp: "Monter",
      moveDown: "Descendre",
      link: "Lier",
      linkBidirectional: "Lien bidirectionnel",
      clickTips: "Cliquer sur le noeud cible",
      summary: "Annoter"
    },
    ko: {
      addChild: "\uC790\uC2DD \uCD94\uAC00",
      addParent: "\uBD80\uBAA8 \uCD94\uAC00",
      addSibling: "\uD615\uC81C \uCD94\uAC00",
      removeNode: "\uB178\uB4DC \uC0AD\uC81C",
      focus: "\uD3EC\uCEE4\uC2A4 \uBAA8\uB4DC",
      cancelFocus: "\uD3EC\uCEE4\uC2A4 \uBAA8\uB4DC \uCDE8\uC18C",
      moveUp: "\uC704\uB85C \uC774\uB3D9",
      moveDown: "\uC544\uB798\uB85C \uC774\uB3D9",
      link: "\uC5F0\uACB0",
      linkBidirectional: "\uC591\uBC29\uD5A5 \uC5F0\uACB0",
      clickTips: "\uB300\uC0C1 \uB178\uB4DC\uB97C \uD074\uB9AD\uD558\uC2ED\uC2DC\uC624",
      summary: "\uC694\uC57D"
    }
  };
  function At(e, t) {
    t = t === true ? {
      focus: true,
      link: true
    } : t;
    const n = (y) => {
      const w = document.createElement("div");
      return w.innerText = y, w.className = "tips", w;
    }, o = (y, w, E) => {
      const S = document.createElement("li");
      return S.id = y, S.innerHTML = `<span>${ne(w)}</span><span ${E ? 'class="key"' : ""}>${ne(E)}</span>`, S;
    }, i = De[e.locale] ? e.locale : "en", s = De[i], r = o("cm-add_child", s.addChild, "Tab"), c = o("cm-add_parent", s.addParent, "Ctrl + Enter"), l = o("cm-add_sibling", s.addSibling, "Enter"), d = o("cm-remove_child", s.removeNode, "Delete"), f = o("cm-fucus", s.focus, ""), h = o("cm-unfucus", s.cancelFocus, ""), g = o("cm-up", s.moveUp, "PgUp"), u = o("cm-down", s.moveDown, "Pgdn"), a = o("cm-link", s.link, ""), p = o("cm-link-bidirectional", s.linkBidirectional, ""), m = o("cm-summary", s.summary, ""), v = document.createElement("ul");
    if (v.className = "menu-list", v.appendChild(r), v.appendChild(c), v.appendChild(l), v.appendChild(d), t.focus && (v.appendChild(f), v.appendChild(h)), v.appendChild(g), v.appendChild(u), v.appendChild(m), t.link && (v.appendChild(a), v.appendChild(p)), t && t.extend)
      for (let y = 0; y < t.extend.length; y++) {
        const w = t.extend[y], E = o(w.name, w.name, w.key || "");
        v.appendChild(E), E.onclick = (S) => {
          w.onclick(S);
        };
      }
    const b = document.createElement("div");
    b.className = "context-menu", b.appendChild(v), b.hidden = true, e.container.append(b);
    let x = true;
    const C = (y) => {
      const w = y.target;
      if (he(w)) {
        w.parentElement.tagName === "ME-ROOT" ? x = true : x = false, x ? (f.className = "disabled", g.className = "disabled", u.className = "disabled", c.className = "disabled", l.className = "disabled", d.className = "disabled") : (f.className = "", g.className = "", u.className = "", c.className = "", l.className = "", d.className = ""), b.hidden = false, v.style.top = "", v.style.bottom = "", v.style.left = "", v.style.right = "";
        const E = v.getBoundingClientRect(), S = v.offsetHeight, P = v.offsetWidth, B = y.clientY - E.top, R = y.clientX - E.left;
        S + B > window.innerHeight ? (v.style.top = "", v.style.bottom = "0px") : (v.style.bottom = "", v.style.top = B + 15 + "px"), P + R > window.innerWidth ? (v.style.left = "", v.style.right = "0px") : (v.style.right = "", v.style.left = R + 10 + "px");
      }
    };
    e.bus.addListener("showContextMenu", C), b.onclick = (y) => {
      y.target === b && (b.hidden = true);
    }, r.onclick = () => {
      e.addChild(), b.hidden = true;
    }, c.onclick = () => {
      e.insertParent(), b.hidden = true;
    }, l.onclick = () => {
      x || (e.insertSibling("after"), b.hidden = true);
    }, d.onclick = () => {
      x || (e.removeNodes(e.currentNodes || []), b.hidden = true);
    }, f.onclick = () => {
      x || (e.focusNode(e.currentNode), b.hidden = true);
    }, h.onclick = () => {
      e.cancelFocus(), b.hidden = true;
    }, g.onclick = () => {
      x || (e.moveUpNode(), b.hidden = true);
    }, u.onclick = () => {
      x || (e.moveDownNode(), b.hidden = true);
    };
    const k = (y) => {
      b.hidden = true;
      const w = e.currentNode, E = n(s.clickTips);
      e.container.appendChild(E), e.map.addEventListener(
        "click",
        (S) => {
          S.preventDefault(), E.remove();
          const P = S.target;
          (P.parentElement.tagName === "ME-PARENT" || P.parentElement.tagName === "ME-ROOT") && e.createArrow(w, P, y);
        },
        {
          once: true
        }
      );
    };
    return a.onclick = () => k(), p.onclick = () => k({ bidirectional: true }), m.onclick = () => {
      b.hidden = true, e.createSummary(), e.unselectNodes(e.currentNodes);
    }, () => {
      r.onclick = null, c.onclick = null, l.onclick = null, d.onclick = null, f.onclick = null, h.onclick = null, g.onclick = null, u.onclick = null, a.onclick = null, m.onclick = null, b.onclick = null, e.container.oncontextmenu = null;
    };
  }
  var fe = document;
  var Mt = function(e, t) {
    if (!t)
      return pe(e), e;
    let n = e.querySelector(".insert-preview");
    const o = `insert-preview ${t} show`;
    return n || (n = fe.createElement("div"), e.appendChild(n)), n.className = o, e;
  };
  var pe = function(e) {
    if (!e)
      return;
    const t = e.querySelectorAll(".insert-preview");
    for (const n of t || [])
      n.remove();
  };
  var Pe = function(e, t) {
    for (const n of t) {
      const o = n.parentElement.parentElement.contains(e);
      if (!(e && e.tagName === "ME-TPC" && e !== n && !o && e.nodeObj.parent))
        return false;
    }
    return true;
  };
  var Dt = function(e) {
    const t = document.createElement("div");
    return t.className = "mind-elixir-ghost", e.container.appendChild(t), t;
  };
  var Pt = class {
    constructor(t) {
      V(this, "mind");
      V(this, "isMoving", false);
      V(this, "interval", null);
      V(this, "speed", 20);
      this.mind = t;
    }
    move(t, n) {
      this.isMoving || (this.isMoving = true, this.interval = setInterval(() => {
        this.mind.move(t * this.speed * this.mind.scaleVal, n * this.speed * this.mind.scaleVal);
      }, 100));
    }
    stop() {
      this.isMoving = false, clearInterval(this.interval);
    }
  };
  function $t(e) {
    let t = null, n = null;
    const o = Dt(e), i = new Pt(e), s = (d) => {
      e.selection.cancel();
      const f = d.target;
      if ((f == null ? void 0 : f.tagName) !== "ME-TPC") {
        d.preventDefault();
        return;
      }
      let h = e.currentNodes;
      h != null && h.includes(f) || (e.selectNode(f), h = e.currentNodes), e.dragged = h, h.length > 1 ? o.innerHTML = h.length + "" : o.innerHTML = f.innerHTML;
      for (const g of h)
        g.parentElement.parentElement.style.opacity = "0.5";
      d.dataTransfer.setDragImage(o, 0, 0), d.dataTransfer.dropEffect = "move", e.dragMoveHelper.clear();
    }, r = (d) => {
      const { dragged: f } = e;
      if (!f)
        return;
      i.stop();
      for (const g of f)
        g.parentElement.parentElement.style.opacity = "1";
      const h = d.target;
      h.style.opacity = "", n && (pe(n), t === "before" ? e.moveNodeBefore(f, n) : t === "after" ? e.moveNodeAfter(f, n) : t === "in" && e.moveNodeIn(f, n), e.dragged = null, o.innerHTML = "");
    }, c = (d) => {
      d.preventDefault();
      const f = 12 * e.scaleVal, { dragged: h } = e;
      if (!h)
        return;
      const g = e.container.getBoundingClientRect();
      d.clientX < g.x + 50 ? i.move(1, 0) : d.clientX > g.x + g.width - 50 ? i.move(-1, 0) : d.clientY < g.y + 50 ? i.move(0, 1) : d.clientY > g.y + g.height - 50 ? i.move(0, -1) : i.stop(), pe(n);
      const u = fe.elementFromPoint(d.clientX, d.clientY - f);
      if (Pe(u, h)) {
        n = u;
        const a = u.getBoundingClientRect(), p = a.y;
        d.clientY > p + a.height ? t = "after" : t = "in";
      } else {
        const a = fe.elementFromPoint(d.clientX, d.clientY + f), p = a.getBoundingClientRect();
        if (Pe(a, h)) {
          n = a;
          const m = p.y;
          d.clientY < m ? t = "before" : t = "in";
        } else
          t = n = null;
      }
      n && Mt(n, t);
    };
    return we([
      { dom: e.map, evt: "dragstart", func: s },
      { dom: e.map, evt: "dragend", func: r },
      { dom: e.map, evt: "dragover", func: c }
    ]);
  }
  var Ot = function(e) {
    return ["createSummary", "removeSummary", "finishEditSummary"].includes(e.name) ? {
      type: "summary",
      value: e.obj.id
    } : ["createArrow", "removeArrow", "finishEditArrowLabel"].includes(e.name) ? {
      type: "arrow",
      value: e.obj.id
    } : ["removeNodes", "copyNodes", "moveNodeBefore", "moveNodeAfter", "moveNodeIn"].includes(e.name) ? {
      type: "nodes",
      value: e.objs.map((t) => t.id)
    } : {
      type: "nodes",
      value: [e.obj.id]
    };
  };
  function jt(e) {
    let t = [], n = -1, o = e.getData(), i = [];
    e.undo = function() {
      if (n > -1) {
        const l = t[n];
        o = l.prev, e.refresh(l.prev);
        try {
          l.currentTarget.type === "nodes" && (l.operation === "removeNodes" ? e.selectNodes(l.currentTarget.value.map((d) => this.findEle(d))) : e.selectNodes(l.currentSelected.map((d) => this.findEle(d))));
        } catch {
        } finally {
          n--;
        }
      }
    }, e.redo = function() {
      if (n < t.length - 1) {
        n++;
        const l = t[n];
        o = l.next, e.refresh(l.next);
        try {
          l.currentTarget.type === "nodes" && (l.operation === "removeNodes" ? e.selectNodes(l.currentSelected.map((d) => this.findEle(d))) : e.selectNodes(l.currentTarget.value.map((d) => this.findEle(d))));
        } catch {
        }
      }
    };
    const s = function(l) {
      if (l.name === "beginEdit")
        return;
      t = t.slice(0, n + 1);
      const d = e.getData(), f = {
        prev: o,
        operation: l.name,
        currentSelected: i.map((h) => h.id),
        currentTarget: Ot(l),
        next: d
      };
      t.push(f), o = d, n = t.length - 1;
    }, r = function(l) {
      (l.metaKey || l.ctrlKey) && (l.shiftKey && l.key === "Z" || l.key === "y") ? e.redo() : (l.metaKey || l.ctrlKey) && l.key === "z" && e.undo();
    }, c = function(l) {
      i = e.currentNodes.map((d) => d.nodeObj);
    };
    return e.bus.addListener("operation", s), e.bus.addListener("selectNodes", c), e.container.addEventListener("keydown", r), () => {
      e.bus.removeListener("operation", s), e.bus.removeListener("selectNodes", c), e.container.removeEventListener("keydown", r);
    };
  }
  var Ht = '<?xml version="1.0" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg t="1750169394918" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2021" xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="200"><path d="M851.91168 328.45312c-59.97056 0-108.6208 48.47104-108.91264 108.36992l-137.92768 38.4a109.14304 109.14304 0 0 0-63.46752-46.58688l1.39264-137.11872c47.29344-11.86816 82.31936-54.66624 82.31936-105.64096 0-60.15488-48.76288-108.91776-108.91776-108.91776s-108.91776 48.76288-108.91776 108.91776c0 49.18784 32.60928 90.75712 77.38368 104.27392l-1.41312 138.87488a109.19936 109.19936 0 0 0-63.50336 48.55808l-138.93632-39.48544 0.01024-0.72704c0-60.15488-48.76288-108.91776-108.91776-108.91776s-108.91776 48.75776-108.91776 108.91776c0 60.15488 48.76288 108.91264 108.91776 108.91264 39.3984 0 73.91232-20.92032 93.03552-52.2496l139.19232 39.552-0.00512 0.2304c0 25.8304 9.00096 49.5616 24.02816 68.23424l-90.14272 132.63872a108.7488 108.7488 0 0 0-34.2528-5.504c-60.15488 0-108.91776 48.768-108.91776 108.91776 0 60.16 48.76288 108.91776 108.91776 108.91776 60.16 0 108.92288-48.75776 108.92288-108.91776 0-27.14624-9.9328-51.968-26.36288-71.04l89.04704-131.03104a108.544 108.544 0 0 0 37.6832 6.70208 108.672 108.672 0 0 0 36.48512-6.272l93.13792 132.57216a108.48256 108.48256 0 0 0-24.69888 69.0688c0 60.16 48.768 108.92288 108.91776 108.92288 60.16 0 108.91776-48.76288 108.91776-108.92288 0-60.14976-48.75776-108.91776-108.91776-108.91776a108.80512 108.80512 0 0 0-36.69504 6.3488l-93.07136-132.48a108.48768 108.48768 0 0 0 24.79616-72.22784l136.09984-37.888c18.99008 31.93856 53.84192 53.3504 93.69088 53.3504 60.16 0 108.92288-48.75776 108.92288-108.91264-0.00512-60.15488-48.77312-108.92288-108.92288-108.92288z" p-id="2022"></path></svg>';
  var Bt = '<?xml version="1.0" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg t="1750169375313" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1775" xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="200"><path d="M639 463.30000001L639 285.1c0-36.90000001-26.4-68.5-61.3-68.5l-150.2 0c-1.5 0-3 0.1-4.5 0.3-10.2-38.7-45.5-67.3-87.5-67.3-50 0-90.5 40.5-90.5 90.5s40.5 90.5 90.5 90.5c42 0 77.3-28.6 87.5-67.39999999 1.4 0.3 2.9 0.4 4.5 0.39999999L577.7 263.6c6.8 0 14.3 8.9 14.3 21.49999999l0 427.00000001c0 12.7-7.40000001 21.5-14.30000001 21.5l-150.19999999 0c-1.5 0-3 0.2-4.5 0.4-10.2-38.8-45.5-67.3-87.5-67.3-50 0-90.5 40.5-90.5 90.4 0 49.9 40.5 90.6 90.5 90.59999999 42 0 77.3-28.6 87.5-67.39999999 1.4 0.2 2.9 0.4 4.49999999 0.4L577.7 780.7c34.80000001 0 61.3-31.6 61.3-68.50000001L639 510.3l79.1 0c10.4 38.5 45.49999999 67 87.4 67 50 0 90.5-40.5 90.5-90.5s-40.5-90.5-90.5-90.5c-41.79999999 0-77.00000001 28.4-87.4 67L639 463.30000001z" fill="currentColor" p-id="1776"></path></svg>';
  var Rt = '<?xml version="1.0" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg t="1750169667709" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3037" xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="200"><path d="M385 560.69999999L385 738.9c0 36.90000001 26.4 68.5 61.3 68.5l150.2 0c1.5 0 3-0.1 4.5-0.3 10.2 38.7 45.5 67.3 87.5 67.3 50 0 90.5-40.5 90.5-90.5s-40.5-90.5-90.5-90.5c-42 0-77.3 28.6-87.5 67.39999999-1.4-0.3-2.9-0.4-4.5-0.39999999L446.3 760.4c-6.8 0-14.3-8.9-14.3-21.49999999l0-427.00000001c0-12.7 7.40000001-21.5 14.30000001-21.5l150.19999999 0c1.5 0 3-0.2 4.5-0.4 10.2 38.8 45.5 67.3 87.5 67.3 50 0 90.5-40.5 90.5-90.4 0-49.9-40.5-90.6-90.5-90.59999999-42 0-77.3 28.6-87.5 67.39999999-1.4-0.2-2.9-0.4-4.49999999-0.4L446.3 243.3c-34.80000001 0-61.3 31.6-61.3 68.50000001L385 513.7l-79.1 0c-10.4-38.5-45.49999999-67-87.4-67-50 0-90.5 40.5-90.5 90.5s40.5 90.5 90.5 90.5c41.79999999 0 77.00000001-28.4 87.4-67L385 560.69999999z" fill="currentColor" p-id="3038"></path></svg>';
  var Ft = '<?xml version="1.0" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg t="1750169402629" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2170" xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="200"><path d="M639.328 416c8.032 0 16.096-3.008 22.304-9.056l202.624-197.184-0.8 143.808c-0.096 17.696 14.144 32.096 31.808 32.192 0.064 0 0.128 0 0.192 0 17.6 0 31.904-14.208 32-31.808l1.248-222.208c0-0.672-0.352-1.248-0.384-1.92 0.032-0.512 0.288-0.896 0.288-1.408 0.032-17.664-14.272-32-31.968-32.032L671.552 96l-0.032 0c-17.664 0-31.968 14.304-32 31.968C639.488 145.632 653.824 160 671.488 160l151.872 0.224-206.368 200.8c-12.672 12.32-12.928 32.608-0.64 45.248C622.656 412.736 630.976 416 639.328 416z" p-id="2171"></path><path d="M896.032 639.552 896.032 639.552c-17.696 0-32 14.304-32.032 31.968l-0.224 151.872-200.832-206.4c-12.32-12.64-32.576-12.96-45.248-0.64-12.672 12.352-12.928 32.608-0.64 45.248l197.184 202.624-143.808-0.8c-0.064 0-0.128 0-0.192 0-17.6 0-31.904 14.208-32 31.808-0.096 17.696 14.144 32.096 31.808 32.192l222.24 1.248c0.064 0 0.128 0 0.192 0 0.64 0 1.12-0.32 1.76-0.352 0.512 0.032 0.896 0.288 1.408 0.288l0.032 0c17.664 0 31.968-14.304 32-31.968L928 671.584C928.032 653.952 913.728 639.584 896.032 639.552z" p-id="2172"></path><path d="M209.76 159.744l143.808 0.8c0.064 0 0.128 0 0.192 0 17.6 0 31.904-14.208 32-31.808 0.096-17.696-14.144-32.096-31.808-32.192L131.68 95.328c-0.064 0-0.128 0-0.192 0-0.672 0-1.248 0.352-1.888 0.384-0.448 0-0.8-0.256-1.248-0.256 0 0-0.032 0-0.032 0-17.664 0-31.968 14.304-32 31.968L96 352.448c-0.032 17.664 14.272 32 31.968 32.032 0 0 0.032 0 0.032 0 17.664 0 31.968-14.304 32-31.968l0.224-151.936 200.832 206.4c6.272 6.464 14.624 9.696 22.944 9.696 8.032 0 16.096-3.008 22.304-9.056 12.672-12.32 12.96-32.608 0.64-45.248L209.76 159.744z" p-id="2173"></path><path d="M362.368 617.056l-202.624 197.184 0.8-143.808c0.096-17.696-14.144-32.096-31.808-32.192-0.064 0-0.128 0-0.192 0-17.6 0-31.904 14.208-32 31.808l-1.248 222.24c0 0.704 0.352 1.312 0.384 2.016 0 0.448-0.256 0.832-0.256 1.312-0.032 17.664 14.272 32 31.968 32.032L352.448 928c0 0 0.032 0 0.032 0 17.664 0 31.968-14.304 32-31.968s-14.272-32-31.968-32.032l-151.936-0.224 206.4-200.832c12.672-12.352 12.96-32.608 0.64-45.248S375.008 604.704 362.368 617.056z" p-id="2174"></path></svg>';
  var Wt = '<?xml version="1.0" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg t="1750169573443" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2883" xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="200"><path d="M514.133333 488.533333m-106.666666 0a106.666667 106.666667 0 1 0 213.333333 0 106.666667 106.666667 0 1 0-213.333333 0Z" fill="currentColor" p-id="2884"></path><path d="M512 64C264.533333 64 64 264.533333 64 512c0 236.8 183.466667 428.8 416 445.866667v-134.4c-53.333333-59.733333-200.533333-230.4-200.533333-334.933334 0-130.133333 104.533333-234.666667 234.666666-234.666666s234.666667 104.533333 234.666667 234.666666c0 61.866667-49.066667 153.6-145.066667 270.933334l-59.733333 68.266666V960C776.533333 942.933333 960 748.8 960 512c0-247.466667-200.533333-448-448-448z" fill="currentColor" p-id="2885"></path></svg>';
  var It = '<?xml version="1.0" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg t="1750169419447" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2480" xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="200"><path d="M863.328 482.56l-317.344-1.12L545.984 162.816c0-17.664-14.336-32-32-32s-32 14.336-32 32l0 318.4L159.616 480.064c-0.032 0-0.064 0-0.096 0-17.632 0-31.936 14.24-32 31.904C127.424 529.632 141.728 544 159.392 544.064l322.592 1.152 0 319.168c0 17.696 14.336 32 32 32s32-14.304 32-32l0-318.944 317.088 1.12c0.064 0 0.096 0 0.128 0 17.632 0 31.936-14.24 32-31.904C895.264 496.992 880.96 482.624 863.328 482.56z" p-id="2481"></path></svg>';
  var Kt = '<?xml version="1.0" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg t="1750169426515" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2730" xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="200"><path d="M863.744 544 163.424 544c-17.664 0-32-14.336-32-32s14.336-32 32-32l700.32 0c17.696 0 32 14.336 32 32S881.44 544 863.744 544z" p-id="2731"></path></svg>';
  var Yt = {
    side: Ht,
    left: Bt,
    right: Rt,
    full: Ft,
    living: Wt,
    zoomin: It,
    zoomout: Kt
  };
  var W = (e, t) => {
    const n = document.createElement("span");
    return n.id = e, n.innerHTML = Yt[t], n;
  };
  function Gt(e) {
    const t = document.createElement("div"), n = W("fullscreen", "full"), o = W("toCenter", "living"), i = W("zoomout", "zoomout"), s = W("zoomin", "zoomin"), r = document.createElement("span");
    return r.innerText = "100%", t.appendChild(n), t.appendChild(o), t.appendChild(i), t.appendChild(s), t.className = "mind-elixir-toolbar rb", n.onclick = () => {
      document.fullscreenElement === e.el ? document.exitFullscreen() : e.el.requestFullscreen();
    }, o.onclick = () => {
      e.toCenter();
    }, i.onclick = () => {
      e.scale(e.scaleVal - e.scaleSensitivity);
    }, s.onclick = () => {
      e.scale(e.scaleVal + e.scaleSensitivity);
    }, t;
  }
  function qt(e) {
    const t = document.createElement("div"), n = W("tbltl", "left"), o = W("tbltr", "right"), i = W("tblts", "side");
    return t.appendChild(n), t.appendChild(o), t.appendChild(i), t.className = "mind-elixir-toolbar lt", n.onclick = () => {
      e.initLeft();
    }, o.onclick = () => {
      e.initRight();
    }, i.onclick = () => {
      e.initSide();
    }, t;
  }
  function zt(e) {
    e.container.append(Gt(e)), e.container.append(qt(e));
  }
  var Vt = class {
    constructor() {
      this._listeners = /* @__PURE__ */ new Map(), this.on = this.addEventListener, this.off = this.removeEventListener, this.emit = this.dispatchEvent;
    }
    addEventListener(t, n) {
      const o = this._listeners.get(t) ?? /* @__PURE__ */ new Set();
      return this._listeners.set(t, o), o.add(n), this;
    }
    removeEventListener(t, n) {
      var o;
      return (o = this._listeners.get(t)) == null || o.delete(n), this;
    }
    dispatchEvent(t, ...n) {
      let o = true;
      for (const i of this._listeners.get(t) ?? [])
        o = i(...n) !== false && o;
      return o;
    }
    unbindAllListeners() {
      this._listeners.clear();
    }
  };
  var $e = (e, t = "px") => typeof e == "number" ? e + t : e;
  var $ = ({ style: e }, t, n) => {
    if (typeof t == "object")
      for (const [o, i] of Object.entries(t))
        i !== void 0 && (e[o] = $e(i));
    else
      n !== void 0 && (e[t] = $e(n));
  };
  var Oe = (e = 0, t = 0, n = 0, o = 0) => {
    const i = { x: e, y: t, width: n, height: o, top: t, left: e, right: e + n, bottom: t + o };
    return { ...i, toJSON: () => JSON.stringify(i) };
  };
  var Ut = (e) => {
    let t, n = -1, o = false;
    return {
      next: (...i) => {
        t = i, o || (o = true, n = requestAnimationFrame(() => {
          e(...t), o = false;
        }));
      },
      cancel: () => {
        cancelAnimationFrame(n), o = false;
      }
    };
  };
  var je = (e, t, n = "touch") => {
    switch (n) {
      case "center": {
        const o = t.left + t.width / 2, i = t.top + t.height / 2;
        return o >= e.left && o <= e.right && i >= e.top && i <= e.bottom;
      }
      case "cover":
        return t.left >= e.left && t.top >= e.top && t.right <= e.right && t.bottom <= e.bottom;
      case "touch":
        return e.right >= t.left && e.left <= t.right && e.bottom >= t.top && e.top <= t.bottom;
    }
  };
  var Xt = () => matchMedia("(hover: none), (pointer: coarse)").matches;
  var Jt = () => "safari" in window;
  var ge = (e) => Array.isArray(e) ? e : [e];
  var Je = (e) => (t, n, o, i = {}) => {
    (t instanceof HTMLCollection || t instanceof NodeList) && (t = Array.from(t)), n = ge(n), t = ge(t);
    for (const s of t)
      if (s)
        for (const r of n)
          s[e](r, o, { capture: false, ...i });
  };
  var O = Je("addEventListener");
  var A = Je("removeEventListener");
  var Z = (e) => {
    var t;
    const { clientX: n, clientY: o, target: i } = ((t = e.touches) == null ? void 0 : t[0]) ?? e;
    return { x: n, y: o, target: i };
  };
  var Y = (e, t = document) => ge(e).map(
    (n) => typeof n == "string" ? Array.from(t.querySelectorAll(n)) : n instanceof Element ? n : null
  ).flat().filter(Boolean);
  var Zt = (e, t) => t.some((n) => typeof n == "number" ? e.button === n : typeof n == "object" ? n.button !== e.button ? false : n.modifiers.every((o) => {
    switch (o) {
      case "alt":
        return e.altKey;
      case "ctrl":
        return e.ctrlKey || e.metaKey;
      case "shift":
        return e.shiftKey;
    }
  }) : false);
  var { abs: F, max: He, min: Be, ceil: Re } = Math;
  var Fe = (e = []) => ({
    stored: e,
    selected: [],
    touched: [],
    changed: { added: [], removed: [] }
  });
  var Ze = class extends Vt {
    constructor(t) {
      var n, o, i, s, r;
      super(), this._selection = Fe(), this._targetBoundaryScrolled = true, this._selectables = [], this._areaLocation = { y1: 0, x2: 0, y2: 0, x1: 0 }, this._areaRect = Oe(), this._singleClick = true, this._scrollAvailable = true, this._scrollingActive = false, this._scrollSpeed = { x: 0, y: 0 }, this._scrollDelta = { x: 0, y: 0 }, this._lastMousePosition = { x: 0, y: 0 }, this.enable = this._toggleStartEvents, this.disable = this._toggleStartEvents.bind(this, false), this._options = {
        selectionAreaClass: "selection-area",
        selectionContainerClass: void 0,
        selectables: [],
        document: window.document,
        startAreas: ["html"],
        boundaries: ["html"],
        container: "body",
        ...t,
        behaviour: {
          overlap: "invert",
          intersect: "touch",
          triggers: [0],
          ...t.behaviour,
          startThreshold: (n = t.behaviour) != null && n.startThreshold ? typeof t.behaviour.startThreshold == "number" ? t.behaviour.startThreshold : { x: 10, y: 10, ...t.behaviour.startThreshold } : { x: 10, y: 10 },
          scrolling: {
            speedDivider: 10,
            manualSpeed: 750,
            ...(o = t.behaviour) == null ? void 0 : o.scrolling,
            startScrollMargins: {
              x: 0,
              y: 0,
              ...(s = (i = t.behaviour) == null ? void 0 : i.scrolling) == null ? void 0 : s.startScrollMargins
            }
          }
        },
        features: {
          range: true,
          touch: true,
          deselectOnBlur: false,
          ...t.features,
          singleTap: {
            allow: true,
            intersect: "native",
            ...(r = t.features) == null ? void 0 : r.singleTap
          }
        }
      };
      for (const f of Object.getOwnPropertyNames(Object.getPrototypeOf(this)))
        typeof this[f] == "function" && (this[f] = this[f].bind(this));
      const { document: c, selectionAreaClass: l, selectionContainerClass: d } = this._options;
      this._area = c.createElement("div"), this._clippingElement = c.createElement("div"), this._clippingElement.appendChild(this._area), this._area.classList.add(l), d && this._clippingElement.classList.add(d), $(this._area, {
        willChange: "top, left, bottom, right, width, height",
        top: 0,
        left: 0,
        position: "fixed"
      }), $(this._clippingElement, {
        overflow: "hidden",
        position: "fixed",
        transform: "translate3d(0, 0, 0)",
        // https://stackoverflow.com/a/38268846
        pointerEvents: "none",
        zIndex: "1"
      }), this._frame = Ut((f) => {
        this._recalculateSelectionAreaRect(), this._updateElementSelection(), this._emitEvent("move", f), this._redrawSelectionArea();
      }), this.enable();
    }
    _toggleStartEvents(t = true) {
      const { document: n, features: o } = this._options, i = t ? O : A;
      i(n, "mousedown", this._onTapStart), o.touch && i(n, "touchstart", this._onTapStart, { passive: false });
    }
    _onTapStart(t, n = false) {
      const { x: o, y: i, target: s } = Z(t), { document: r, startAreas: c, boundaries: l, features: d, behaviour: f } = this._options, h = s.getBoundingClientRect();
      if (t instanceof MouseEvent && !Zt(t, f.triggers))
        return;
      const g = Y(c, r), u = Y(l, r);
      this._targetElement = u.find(
        (v) => je(v.getBoundingClientRect(), h)
      );
      const a = t.composedPath(), p = g.find((v) => a.includes(v));
      if (this._targetBoundary = u.find((v) => a.includes(v)), !this._targetElement || !p || !this._targetBoundary || !n && this._emitEvent("beforestart", t) === false)
        return;
      this._areaLocation = { x1: o, y1: i, x2: 0, y2: 0 };
      const m = r.scrollingElement ?? r.body;
      this._scrollDelta = { x: m.scrollLeft, y: m.scrollTop }, this._singleClick = true, this.clearSelection(false, true), O(r, ["touchmove", "mousemove"], this._delayedTapMove, { passive: false }), O(r, ["mouseup", "touchcancel", "touchend"], this._onTapStop), O(r, "scroll", this._onScroll), d.deselectOnBlur && (this._targetBoundaryScrolled = false, O(this._targetBoundary, "scroll", this._onStartAreaScroll));
    }
    _onSingleTap(t) {
      const { singleTap: { intersect: n }, range: o } = this._options.features, i = Z(t);
      let s;
      if (n === "native")
        s = i.target;
      else if (n === "touch") {
        this.resolveSelectables();
        const { x: c, y: l } = i;
        s = this._selectables.find((d) => {
          const { right: f, left: h, top: g, bottom: u } = d.getBoundingClientRect();
          return c < f && c > h && l < u && l > g;
        });
      }
      if (!s)
        return;
      for (this.resolveSelectables(); !this._selectables.includes(s); )
        if (s.parentElement)
          s = s.parentElement;
        else {
          this._targetBoundaryScrolled || this.clearSelection();
          return;
        }
      const { stored: r } = this._selection;
      if (this._emitEvent("start", t), t.shiftKey && o && this._latestElement) {
        const c = this._latestElement, [l, d] = c.compareDocumentPosition(s) & 4 ? [s, c] : [c, s], f = [...this._selectables.filter(
          (h) => h.compareDocumentPosition(l) & 4 && h.compareDocumentPosition(d) & 2
        ), l, d];
        this.select(f), this._latestElement = c;
      } else
        r.includes(s) && (r.length === 1 || t.ctrlKey || r.every((c) => this._selection.stored.includes(c))) ? this.deselect(s) : (this.select(s), this._latestElement = s);
    }
    _delayedTapMove(t) {
      const { container: n, document: o, behaviour: { startThreshold: i } } = this._options, { x1: s, y1: r } = this._areaLocation, { x: c, y: l } = Z(t);
      if (
        // Single number for both coordinates
        typeof i == "number" && F(c + l - (s + r)) >= i || // Different x and y threshold
        typeof i == "object" && F(c - s) >= i.x || F(l - r) >= i.y
      ) {
        if (A(o, ["mousemove", "touchmove"], this._delayedTapMove, { passive: false }), this._emitEvent("beforedrag", t) === false) {
          A(o, ["mouseup", "touchcancel", "touchend"], this._onTapStop);
          return;
        }
        O(o, ["mousemove", "touchmove"], this._onTapMove, { passive: false }), $(this._area, "display", "block"), Y(n, o)[0].appendChild(this._clippingElement), this.resolveSelectables(), this._singleClick = false, this._targetRect = this._targetElement.getBoundingClientRect(), this._scrollAvailable = this._targetElement.scrollHeight !== this._targetElement.clientHeight || this._targetElement.scrollWidth !== this._targetElement.clientWidth, this._scrollAvailable && (O(this._targetElement, "wheel", this._wheelScroll, { passive: false }), O(this._options.document, "keydown", this._keyboardScroll, { passive: false }), this._selectables = this._selectables.filter((d) => this._targetElement.contains(d))), this._setupSelectionArea(), this._emitEvent("start", t), this._onTapMove(t);
      }
      this._handleMoveEvent(t);
    }
    _setupSelectionArea() {
      const { _clippingElement: t, _targetElement: n, _area: o } = this, i = this._targetRect = n.getBoundingClientRect();
      this._scrollAvailable ? ($(t, {
        top: i.top,
        left: i.left,
        width: i.width,
        height: i.height
      }), $(o, {
        marginTop: -i.top,
        marginLeft: -i.left
      })) : ($(t, {
        top: 0,
        left: 0,
        width: "100%",
        height: "100%"
      }), $(o, {
        marginTop: 0,
        marginLeft: 0
      }));
    }
    _onTapMove(t) {
      const { _scrollSpeed: n, _areaLocation: o, _options: i, _frame: s } = this, { speedDivider: r } = i.behaviour.scrolling, c = this._targetElement, { x: l, y: d } = Z(t);
      if (o.x2 = l, o.y2 = d, this._lastMousePosition.x = l, this._lastMousePosition.y = d, this._scrollAvailable && !this._scrollingActive && (n.y || n.x)) {
        this._scrollingActive = true;
        const f = () => {
          if (!n.x && !n.y) {
            this._scrollingActive = false;
            return;
          }
          const { scrollTop: h, scrollLeft: g } = c;
          n.y && (c.scrollTop += Re(n.y / r), o.y1 -= c.scrollTop - h), n.x && (c.scrollLeft += Re(n.x / r), o.x1 -= c.scrollLeft - g), s.next(t), requestAnimationFrame(f);
        };
        requestAnimationFrame(f);
      } else
        s.next(t);
      this._handleMoveEvent(t);
    }
    _handleMoveEvent(t) {
      const { features: n } = this._options;
      (n.touch && Xt() || this._scrollAvailable && Jt()) && t.preventDefault();
    }
    _onScroll() {
      const { _scrollDelta: t, _options: { document: n } } = this, { scrollTop: o, scrollLeft: i } = n.scrollingElement ?? n.body;
      this._areaLocation.x1 += t.x - i, this._areaLocation.y1 += t.y - o, t.x = i, t.y = o, this._setupSelectionArea(), this._frame.next(null);
    }
    _onStartAreaScroll() {
      this._targetBoundaryScrolled = true, A(this._targetElement, "scroll", this._onStartAreaScroll);
    }
    _wheelScroll(t) {
      const { manualSpeed: n } = this._options.behaviour.scrolling, o = t.deltaY ? t.deltaY > 0 ? 1 : -1 : 0, i = t.deltaX ? t.deltaX > 0 ? 1 : -1 : 0;
      this._scrollSpeed.y += o * n, this._scrollSpeed.x += i * n, this._onTapMove(t), t.preventDefault();
    }
    _keyboardScroll(t) {
      const { manualSpeed: n } = this._options.behaviour.scrolling, o = t.key === "ArrowLeft" ? -1 : t.key === "ArrowRight" ? 1 : 0, i = t.key === "ArrowUp" ? -1 : t.key === "ArrowDown" ? 1 : 0;
      this._scrollSpeed.x += Math.sign(o) * n, this._scrollSpeed.y += Math.sign(i) * n, t.preventDefault(), this._onTapMove({
        clientX: this._lastMousePosition.x,
        clientY: this._lastMousePosition.y,
        preventDefault: () => {
        }
      });
    }
    _recalculateSelectionAreaRect() {
      const { _scrollSpeed: t, _areaLocation: n, _targetElement: o, _options: i } = this, { scrollTop: s, scrollHeight: r, clientHeight: c, scrollLeft: l, scrollWidth: d, clientWidth: f } = o, h = this._targetRect, { x1: g, y1: u } = n;
      let { x2: a, y2: p } = n;
      const { behaviour: { scrolling: { startScrollMargins: m } } } = i;
      a < h.left + m.x ? (t.x = l ? -F(h.left - a + m.x) : 0, a = a < h.left ? h.left : a) : a > h.right - m.x ? (t.x = d - l - f ? F(h.left + h.width - a - m.x) : 0, a = a > h.right ? h.right : a) : t.x = 0, p < h.top + m.y ? (t.y = s ? -F(h.top - p + m.y) : 0, p = p < h.top ? h.top : p) : p > h.bottom - m.y ? (t.y = r - s - c ? F(h.top + h.height - p - m.y) : 0, p = p > h.bottom ? h.bottom : p) : t.y = 0;
      const v = Be(g, a), b = Be(u, p), x = He(g, a), C = He(u, p);
      this._areaRect = Oe(v, b, x - v, C - b);
    }
    _redrawSelectionArea() {
      const { x: t, y: n, width: o, height: i } = this._areaRect, { style: s } = this._area;
      s.left = `${t}px`, s.top = `${n}px`, s.width = `${o}px`, s.height = `${i}px`;
    }
    _onTapStop(t, n) {
      var o;
      const { document: i, features: s } = this._options, { _singleClick: r } = this;
      A(this._targetElement, "scroll", this._onStartAreaScroll), A(i, ["mousemove", "touchmove"], this._delayedTapMove), A(i, ["touchmove", "mousemove"], this._onTapMove), A(i, ["mouseup", "touchcancel", "touchend"], this._onTapStop), A(i, "scroll", this._onScroll), this._keepSelection(), t && r && s.singleTap.allow ? this._onSingleTap(t) : !r && !n && (this._updateElementSelection(), this._emitEvent("stop", t)), this._scrollSpeed.x = 0, this._scrollSpeed.y = 0, A(this._targetElement, "wheel", this._wheelScroll, { passive: true }), A(this._options.document, "keydown", this._keyboardScroll, { passive: true }), this._clippingElement.remove(), (o = this._frame) == null || o.cancel(), $(this._area, "display", "none");
    }
    _updateElementSelection() {
      const { _selectables: t, _options: n, _selection: o, _areaRect: i } = this, { stored: s, selected: r, touched: c } = o, { intersect: l, overlap: d } = n.behaviour, f = d === "invert", h = [], g = [], u = [];
      for (let p = 0; p < t.length; p++) {
        const m = t[p];
        if (je(i, m.getBoundingClientRect(), l)) {
          if (r.includes(m))
            s.includes(m) && !c.includes(m) && c.push(m);
          else if (f && s.includes(m)) {
            u.push(m);
            continue;
          } else
            g.push(m);
          h.push(m);
        }
      }
      f && g.push(...s.filter((p) => !r.includes(p)));
      const a = d === "keep";
      for (let p = 0; p < r.length; p++) {
        const m = r[p];
        !h.includes(m) && !// Check if the user wants to keep previously selected elements, e.g.,
        // not make them part of the current selection as soon as they're touched.
        (a && s.includes(m)) && u.push(m);
      }
      o.selected = h, o.changed = { added: g, removed: u }, this._latestElement = void 0;
    }
    _emitEvent(t, n) {
      return this.emit(t, {
        event: n,
        store: this._selection,
        selection: this
      });
    }
    _keepSelection() {
      const { _options: t, _selection: n } = this, { selected: o, changed: i, touched: s, stored: r } = n, c = o.filter((l) => !r.includes(l));
      switch (t.behaviour.overlap) {
        case "drop": {
          n.stored = [
            ...c,
            ...r.filter((l) => !s.includes(l))
            // Elements not touched
          ];
          break;
        }
        case "invert": {
          n.stored = [
            ...c,
            ...r.filter((l) => !i.removed.includes(l))
            // Elements not removed from selection
          ];
          break;
        }
        case "keep": {
          n.stored = [
            ...r,
            ...o.filter((l) => !r.includes(l))
            // Newly added
          ];
          break;
        }
      }
    }
    /**
     * Manually triggers the start of a selection
     * @param evt A MouseEvent / TouchEvent-like object
     * @param silent If beforestart should be fired
     */
    trigger(t, n = true) {
      this._onTapStart(t, n);
    }
    /**
     * Can be used if during a selection elements have been added
     * Will update everything that can be selected
     */
    resolveSelectables() {
      this._selectables = Y(this._options.selectables, this._options.document);
    }
    /**
     * Same as deselecting, but for all elements currently selected
     * @param includeStored If the store should also get cleared
     * @param quiet If move / stop events should be fired
     */
    clearSelection(t = true, n = false) {
      const { selected: o, stored: i, changed: s } = this._selection;
      s.added = [], s.removed.push(
        ...o,
        ...t ? i : []
      ), n || (this._emitEvent("move", null), this._emitEvent("stop", null)), this._selection = Fe(t ? [] : i);
    }
    /**
     * @returns {Array} Selected elements
     */
    getSelection() {
      return this._selection.stored;
    }
    /**
     * @returns {HTMLElement} The selection area element
     */
    getSelectionArea() {
      return this._area;
    }
    /**
     * @returns {Element[]} Available selectable elements for current selection
     */
    getSelectables() {
      return this._selectables;
    }
    /**
     * Set the location of the selection area
     * @param location A partial AreaLocation object
     */
    setAreaLocation(t) {
      Object.assign(this._areaLocation, t), this._redrawSelectionArea();
    }
    /**
     * @returns {AreaLocation} The current location of the selection area
     */
    getAreaLocation() {
      return this._areaLocation;
    }
    /**
     * Cancel the current selection process, pass true to fire a stop event after cancel
     * @param keepEvent If a stop event should be fired
     */
    cancel(t = false) {
      this._onTapStop(null, !t);
    }
    /**
     * Unbinds all events and removes the area-element.
     */
    destroy() {
      this.cancel(), this.disable(), this._clippingElement.remove(), super.unbindAllListeners();
    }
    /**
     * Adds elements to the selection
     * @param query CSS Query, can be an array of queries
     * @param quiet If this should not trigger the move event
     */
    select(t, n = false) {
      const { changed: o, selected: i, stored: s } = this._selection, r = Y(t, this._options.document).filter(
        (c) => !i.includes(c) && !s.includes(c)
      );
      return s.push(...r), i.push(...r), o.added.push(...r), o.removed = [], this._latestElement = void 0, n || (this._emitEvent("move", null), this._emitEvent("stop", null)), r;
    }
    /**
     * Removes a particular element from the selection
     * @param query CSS Query, can be an array of queries
     * @param quiet If this should not trigger the move event
     */
    deselect(t, n = false) {
      const { selected: o, stored: i, changed: s } = this._selection, r = Y(t, this._options.document).filter(
        (c) => o.includes(c) || i.includes(c)
      );
      this._selection.stored = i.filter((c) => !r.includes(c)), this._selection.selected = o.filter((c) => !r.includes(c)), this._selection.changed.added = [], this._selection.changed.removed.push(
        ...r.filter((c) => !s.removed.includes(c))
      ), this._latestElement = void 0, n || (this._emitEvent("move", null), this._emitEvent("stop", null));
    }
  };
  Ze.version = "3.9.0";
  var Qt = Ze;
  function en(e) {
    const t = e.mouseSelectionButton === 2 ? [2] : [0], n = new Qt({
      selectables: [".map-container me-tpc"],
      boundaries: [e.container],
      container: e.selectionContainer,
      features: {
        // deselectOnBlur: true,
        touch: false
      },
      behaviour: {
        triggers: t,
        // Scroll configuration.
        scrolling: {
          // On scrollable areas the number on px per frame is devided by this amount.
          // Default is 10 to provide a enjoyable scroll experience.
          speedDivider: 10,
          // Browsers handle mouse-wheel events differently, this number will be used as
          // numerator to calculate the mount of px while scrolling manually: manualScrollSpeed / scrollSpeedDivider.
          manualSpeed: 750,
          // This property defines the virtual inset margins from the borders of the container
          // component that, when crossed by the mouse/touch, trigger the scrolling. Useful for
          // fullscreen containers.
          startScrollMargins: { x: 10, y: 10 }
        }
      }
    }).on("beforestart", ({ event: o }) => {
      var r;
      const i = o.target;
      if (i.id === "input-box" || i.className === "circle" || (r = e.container.querySelector(".context-menu")) != null && r.contains(i))
        return false;
      if (!o.ctrlKey && !o.metaKey) {
        if (i.tagName === "ME-TPC" && i.classList.contains("selected"))
          return false;
        e.clearSelection();
      }
      const s = n.getSelectionArea();
      return s.style.background = "#4f90f22d", s.style.border = "1px solid #4f90f2", s.parentElement && (s.parentElement.style.zIndex = "9999"), true;
    }).on(
      "move",
      ({
        store: {
          changed: { added: o, removed: i }
        }
      }) => {
        if (o.length > 0 || i.length > 0, o.length > 0) {
          for (const s of o)
            s.className = "selected";
          e.currentNodes = [...e.currentNodes, ...o], e.bus.fire(
            "selectNodes",
            o.map((s) => s.nodeObj)
          );
        }
        if (i.length > 0) {
          for (const s of i)
            s.classList.remove("selected");
          e.currentNodes = e.currentNodes.filter((s) => !(i != null && i.includes(s))), e.bus.fire(
            "unselectNodes",
            i.map((s) => s.nodeObj)
          );
        }
      }
    );
    e.selection = n;
  }
  var tn = function(e, t = true) {
    this.theme = e;
    const o = {
      ...(e.type === "dark" ? ve : me).cssVar,
      ...e.cssVar
    }, i = Object.keys(o);
    for (let s = 0; s < i.length; s++) {
      const r = i[s];
      this.container.style.setProperty(r, o[r]);
    }
    t && this.refresh();
  };
  var z = (e) => {
    var o;
    const t = (o = e.parent) == null ? void 0 : o.children, n = (t == null ? void 0 : t.indexOf(e)) ?? 0;
    return { siblings: t, index: n };
  };
  function nn(e) {
    const { siblings: t, index: n } = z(e);
    if (t === void 0)
      return;
    const o = t[n];
    n === 0 ? (t[n] = t[t.length - 1], t[t.length - 1] = o) : (t[n] = t[n - 1], t[n - 1] = o);
  }
  function on(e) {
    const { siblings: t, index: n } = z(e);
    if (t === void 0)
      return;
    const o = t[n];
    n === t.length - 1 ? (t[n] = t[0], t[0] = o) : (t[n] = t[n + 1], t[n + 1] = o);
  }
  function Qe(e) {
    const { siblings: t, index: n } = z(e);
    return t === void 0 ? 0 : (t.splice(n, 1), t.length);
  }
  function sn(e, t, n) {
    const { siblings: o, index: i } = z(n);
    o !== void 0 && (t === "before" ? o.splice(i, 0, e) : o.splice(i + 1, 0, e));
  }
  function rn(e, t) {
    const { siblings: n, index: o } = z(e);
    n !== void 0 && (n[o] = t, t.children = [e]);
  }
  function et(e, t, n) {
    var o;
    if (Qe(t), (o = n.parent) != null && o.parent || (t.direction = n.direction), e === "in")
      n.children ? n.children.push(t) : n.children = [t];
    else {
      t.direction !== void 0 && (t.direction = n.direction);
      const { siblings: i, index: s } = z(n);
      if (i === void 0)
        return;
      e === "before" ? i.splice(s, 0, t) : i.splice(s + 1, 0, t);
    }
  }
  var cn = function({ map: e, direction: t }, n) {
    var o, i;
    if (t === 0)
      return 0;
    if (t === 1)
      return 1;
    if (t === 2) {
      const s = ((o = e.querySelector(".lhs")) == null ? void 0 : o.childElementCount) || 0, r = ((i = e.querySelector(".rhs")) == null ? void 0 : i.childElementCount) || 0;
      return s <= r ? (n.direction = 0, 0) : (n.direction = 1, 1);
    }
  };
  var tt = function(e, t, n) {
    var s, r;
    const o = n.children[0].children[0], i = t.parentElement;
    if (i.tagName === "ME-PARENT") {
      if (J(o), i.children[1])
        i.nextSibling.appendChild(n);
      else {
        const c = e.createChildren([n]);
        i.appendChild(Ee(true)), i.insertAdjacentElement("afterend", c);
      }
      e.linkDiv(n.offsetParent);
    } else
      i.tagName === "ME-ROOT" && (cn(e, o.nodeObj) === 0 ? (s = e.container.querySelector(".lhs")) == null || s.appendChild(n) : (r = e.container.querySelector(".rhs")) == null || r.appendChild(n), e.linkDiv());
  };
  var ln = function(e, t) {
    const n = e.parentNode;
    if (t === 0) {
      const o = n.parentNode.parentNode;
      o.tagName !== "ME-MAIN" && (o.previousSibling.children[1].remove(), o.remove());
    }
    n.parentNode.remove();
  };
  var nt = {
    before: "beforebegin",
    after: "afterend"
  };
  var J = function(e) {
    const n = e.parentElement.parentElement.lastElementChild;
    (n == null ? void 0 : n.tagName) === "svg" && (n == null || n.remove());
  };
  var an = function(e, t) {
    const n = e.nodeObj, o = ye(n);
    o.style && t.style && (t.style = Object.assign(o.style, t.style));
    const i = Object.assign(n, t);
    xe(e, i), this.linkDiv(), this.bus.fire("operation", {
      name: "reshapeNode",
      obj: i,
      origin: o
    });
  };
  var Ce = function(e, t, n) {
    if (!t)
      return null;
    const o = t.nodeObj;
    o.expanded === false && (e.expandNode(t, true), t = e.findEle(o.id));
    const i = n || e.generateNewObj();
    o.children ? o.children.push(i) : o.children = [i], j(e.nodeData);
    const { grp: s, top: r } = e.createWrapper(i);
    return tt(e, t, s), { newTop: r, newNodeObj: i };
  };
  var dn = function(e, t, n) {
    var d, f, h, g;
    const o = t || this.currentNode;
    if (!o)
      return;
    const i = o.nodeObj;
    if (i.parent) {
      if (!((d = i.parent) != null && d.parent) && ((h = (f = i.parent) == null ? void 0 : f.children) == null ? void 0 : h.length) === 1 && this.direction === 2) {
        this.addChild(this.findEle(i.parent.id), n);
        return;
      }
    } else {
      this.addChild();
      return;
    }
    const s = n || this.generateNewObj();
    if (!((g = i.parent) != null && g.parent)) {
      const u = o.closest("me-main").className === M.LHS ? 0 : 1;
      s.direction = u;
    }
    sn(s, e, i), j(this.nodeData);
    const r = o.parentElement, { grp: c, top: l } = this.createWrapper(s);
    r.parentElement.insertAdjacentElement(nt[e], c), this.linkDiv(c.offsetParent), n || this.editTopic(l.firstChild), this.bus.fire("operation", {
      name: "insertSibling",
      type: e,
      obj: s
    }), this.selectNode(l.firstChild, true);
  };
  var hn = function(e, t) {
    const n = e || this.currentNode;
    if (!n)
      return;
    J(n);
    const o = n.nodeObj;
    if (!o.parent)
      return;
    const i = t || this.generateNewObj();
    rn(o, i), j(this.nodeData);
    const s = n.parentElement.parentElement, { grp: r, top: c } = this.createWrapper(i, true);
    c.appendChild(Ee(true)), s.insertAdjacentElement("afterend", r);
    const l = this.createChildren([s]);
    c.insertAdjacentElement("afterend", l), this.linkDiv(), t || this.editTopic(c.firstChild), this.selectNode(c.firstChild, true), this.bus.fire("operation", {
      name: "insertParent",
      obj: i
    });
  };
  var un = function(e, t) {
    const n = e || this.currentNode;
    if (!n)
      return;
    const o = Ce(this, n, t);
    if (!o)
      return;
    const { newTop: i, newNodeObj: s } = o;
    this.bus.fire("operation", {
      name: "addChild",
      obj: s
    }), t || this.editTopic(i.firstChild), this.selectNode(i.firstChild, true);
  };
  var fn = function(e, t) {
    const n = ye(e.nodeObj);
    be(n);
    const o = Ce(this, t, n);
    if (!o)
      return;
    const { newNodeObj: i } = o;
    this.selectNode(this.findEle(i.id)), this.bus.fire("operation", {
      name: "copyNode",
      obj: i
    });
  };
  var pn = function(e, t) {
    e = le(e);
    const n = [];
    for (let o = 0; o < e.length; o++) {
      const i = e[o], s = ye(i.nodeObj);
      be(s);
      const r = Ce(this, t, s);
      if (!r)
        return;
      const { newNodeObj: c } = r;
      n.push(c);
    }
    this.unselectNodes(this.currentNodes), this.selectNodes(n.map((o) => this.findEle(o.id))), this.bus.fire("operation", {
      name: "copyNodes",
      objs: n
    });
  };
  var gn = function(e) {
    const t = e || this.currentNode;
    if (!t)
      return;
    const n = t.nodeObj;
    nn(n);
    const o = t.parentNode.parentNode;
    o.parentNode.insertBefore(o, o.previousSibling), this.linkDiv(), this.bus.fire("operation", {
      name: "moveUpNode",
      obj: n
    });
  };
  var mn = function(e) {
    const t = e || this.currentNode;
    if (!t)
      return;
    const n = t.nodeObj;
    on(n);
    const o = t.parentNode.parentNode;
    o.nextSibling ? o.nextSibling.insertAdjacentElement("afterend", o) : o.parentNode.prepend(o), this.linkDiv(), this.bus.fire("operation", {
      name: "moveDownNode",
      obj: n
    });
  };
  var vn = function(e) {
    if (e.length === 0)
      return;
    e = le(e);
    for (const n of e) {
      const o = n.nodeObj, i = Qe(o);
      ln(n, i);
    }
    const t = e[e.length - 1];
    this.selectNode(this.findEle(t.nodeObj.parent.id)), this.linkDiv(), this.bus.fire("operation", {
      name: "removeNodes",
      objs: e.map((n) => n.nodeObj)
    });
  };
  var bn = function(e, t) {
    e = le(e);
    const n = t.nodeObj;
    n.expanded === false && (this.expandNode(t, true), t = this.findEle(n.id));
    for (const o of e) {
      const i = o.nodeObj;
      et("in", i, n), j(this.nodeData);
      const s = o.parentElement;
      tt(this, t, s.parentElement);
    }
    this.linkDiv(), this.bus.fire("operation", {
      name: "moveNodeIn",
      objs: e.map((o) => o.nodeObj),
      toObj: n
    });
  };
  var ot = (e, t, n, o) => {
    e = le(e), t === "after" && (e = e.reverse());
    const i = n.nodeObj, s = [];
    for (const r of e) {
      const c = r.nodeObj;
      et(t, c, i), j(o.nodeData), J(r);
      const l = r.parentElement.parentNode;
      s.includes(l.parentElement) || s.push(l.parentElement), n.parentElement.parentNode.insertAdjacentElement(nt[t], l);
    }
    for (const r of s)
      r.childElementCount === 0 && r.tagName !== "ME-MAIN" && (r.previousSibling.children[1].remove(), r.remove());
    o.linkDiv(), o.bus.fire("operation", {
      name: t === "before" ? "moveNodeBefore" : "moveNodeAfter",
      objs: e.map((r) => r.nodeObj),
      toObj: i
    });
  };
  var yn = function(e, t) {
    ot(e, "before", t, this);
  };
  var wn = function(e, t) {
    ot(e, "after", t, this);
  };
  var xn = function(e) {
    const t = e || this.currentNode;
    t && (t.nodeObj.dangerouslySetInnerHTML || this.editTopic(t));
  };
  var En = function(e, t) {
    e.text.textContent = t, e.nodeObj.topic = t, this.linkDiv();
  };
  var it = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    addChild: un,
    beginEdit: xn,
    copyNode: fn,
    copyNodes: pn,
    insertParent: hn,
    insertSibling: dn,
    moveDownNode: mn,
    moveNodeAfter: wn,
    moveNodeBefore: yn,
    moveNodeIn: bn,
    moveUpNode: gn,
    removeNodes: vn,
    reshapeNode: an,
    rmSubline: J,
    setNodeTopic: En
  }, Symbol.toStringTag, { value: "Module" }));
  function Cn(e) {
    return {
      nodeData: e.isFocusMode ? e.nodeDataBackup : e.nodeData,
      arrows: e.arrows,
      summaries: e.summaries,
      direction: e.direction,
      theme: e.theme
    };
  }
  var Sn = function(e) {
    const t = this.container, n = e.getBoundingClientRect(), o = t.getBoundingClientRect();
    if (n.top > o.bottom || n.bottom < o.top || n.left > o.right || n.right < o.left) {
      const s = n.left + n.width / 2, r = n.top + n.height / 2, c = o.left + o.width / 2, l = o.top + o.height / 2, d = s - c, f = r - l;
      this.move(-d, -f, true);
    }
  };
  var Nn = function(e, t, n) {
    this.clearSelection(), this.scrollIntoView(e), this.selection.select(e), t && this.bus.fire("selectNewNode", e.nodeObj);
  };
  var kn = function(e) {
    this.selection.select(e);
  };
  var _n = function(e) {
    this.selection.deselect(e);
  };
  var Tn = function() {
    this.unselectNodes(this.currentNodes), this.unselectSummary(), this.unselectArrow();
  };
  var Ln = function() {
    const e = Cn(this);
    return JSON.stringify(e, (t, n) => {
      if (!(t === "parent" && typeof n != "string"))
        return n;
    });
  };
  var An = function() {
    return JSON.parse(this.getDataString());
  };
  var Mn = function() {
    this.editable = true;
  };
  var Dn = function() {
    this.editable = false;
  };
  var Pn = function(e, t = { x: 0, y: 0 }) {
    if (e < this.scaleMin || e > this.scaleMax)
      return;
    const n = this.container.getBoundingClientRect(), o = t.x ? t.x - n.left - n.width / 2 : 0, i = t.y ? t.y - n.top - n.height / 2 : 0, { dx: s, dy: r } = st(this), c = this.map.style.transform, { x: l, y: d } = Ge(c), f = l - s, h = d - r, g = this.scaleVal, u = (-o + f) * (1 - e / g), a = (-i + h) * (1 - e / g);
    this.map.style.transform = `translate(${l - u}px, ${d - a}px) scale(${e})`, this.scaleVal = e, this.bus.fire("scale", e);
  };
  var $n = function() {
    const e = this.nodes.offsetHeight / this.container.offsetHeight, t = this.nodes.offsetWidth / this.container.offsetWidth, n = 1 / Math.max(1, Math.max(e, t));
    this.scaleVal = n, this.map.style.transform = "scale(" + n + ")", this.bus.fire("scale", n);
  };
  var On = function(e, t, n = false) {
    const { map: o, scaleVal: i, bus: s } = this, r = o.style.transform;
    let { x: c, y: l } = Ge(r);
    c += e, l += t, n && (o.style.transition = "transform 0.3s", setTimeout(() => {
      o.style.transition = "none";
    }, 300)), o.style.transform = `translate(${c}px, ${l}px) scale(${i})`, s.fire("move", { dx: e, dy: t });
  };
  var st = (e) => {
    const { container: t, map: n, nodes: o } = e, i = n.querySelector("me-root"), s = i.offsetTop, r = i.offsetLeft, c = i.offsetWidth, l = i.offsetHeight;
    let d, f;
    return e.alignment === "root" ? (d = t.offsetWidth / 2 - r - c / 2, f = t.offsetHeight / 2 - s - l / 2, n.style.transformOrigin = `${r + c / 2}px 50%`) : (d = (t.offsetWidth - o.offsetWidth) / 2, f = (t.offsetHeight - o.offsetHeight) / 2, n.style.transformOrigin = "50% 50%"), { dx: d, dy: f };
  };
  var jn = function() {
    const { map: e } = this, { dx: t, dy: n } = st(this);
    e.style.transform = `translate(${t}px, ${n}px) scale(${this.scaleVal})`;
  };
  var Hn = function(e) {
    e(this);
  };
  var Bn = function(e) {
    e.nodeObj.parent && (this.clearSelection(), this.tempDirection === null && (this.tempDirection = this.direction), this.isFocusMode || (this.nodeDataBackup = this.nodeData, this.isFocusMode = true), this.nodeData = e.nodeObj, this.initRight(), this.toCenter());
  };
  var Rn = function() {
    this.isFocusMode = false, this.tempDirection !== null && (this.nodeData = this.nodeDataBackup, this.direction = this.tempDirection, this.tempDirection = null, this.refresh(), this.toCenter());
  };
  var Fn = function() {
    this.direction = 0, this.refresh(), this.toCenter();
  };
  var Wn = function() {
    this.direction = 1, this.refresh(), this.toCenter();
  };
  var In = function() {
    this.direction = 2, this.refresh(), this.toCenter();
  };
  var Kn = function(e) {
    this.locale = e, this.refresh();
  };
  var Yn = function(e, t) {
    const n = e.nodeObj;
    typeof t == "boolean" ? n.expanded = t : n.expanded !== false ? n.expanded = false : n.expanded = true;
    const o = e.getBoundingClientRect(), i = {
      x: o.left,
      y: o.top
    }, s = e.parentNode, r = s.children[1];
    if (r.expanded = n.expanded, r.className = n.expanded ? "minus" : "", J(e), n.expanded) {
      const h = this.createChildren(
        n.children.map((g) => this.createWrapper(g).grp)
      );
      s.parentNode.appendChild(h);
    } else
      s.parentNode.children[1].remove();
    this.linkDiv(e.closest("me-main > me-wrapper"));
    const c = e.getBoundingClientRect(), l = {
      x: c.left,
      y: c.top
    }, d = i.x - l.x, f = i.y - l.y;
    this.move(d, f), this.bus.fire("expandNode", n);
  };
  var Gn = function(e, t) {
    const n = e.nodeObj, o = e.getBoundingClientRect(), i = {
      x: o.left,
      y: o.top
    };
    q(n, t ?? !n.expanded), this.refresh();
    const s = this.findEle(n.id).getBoundingClientRect(), r = {
      x: s.left,
      y: s.top
    }, c = i.x - r.x, l = i.y - r.y;
    this.move(c, l);
  };
  var qn = function(e) {
    this.clearSelection(), e && (e = JSON.parse(JSON.stringify(e)), this.nodeData = e.nodeData, this.arrows = e.arrows || [], this.summaries = e.summaries || [], e.theme && this.changeTheme(e.theme)), j(this.nodeData), this.layout(), this.linkDiv();
  };
  var zn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    cancelFocus: Rn,
    clearSelection: Tn,
    disableEdit: Dn,
    enableEdit: Mn,
    expandNode: Yn,
    expandNodeAll: Gn,
    focusNode: Bn,
    getData: An,
    getDataString: Ln,
    initLeft: Fn,
    initRight: Wn,
    initSide: In,
    install: Hn,
    move: On,
    refresh: qn,
    scale: Pn,
    scaleFit: $n,
    scrollIntoView: Sn,
    selectNode: Nn,
    selectNodes: kn,
    setLocale: Kn,
    toCenter: jn,
    unselectNodes: _n
  }, Symbol.toStringTag, { value: "Module" }));
  var Vn = function(e) {
    return {
      dom: e,
      moved: false,
      // differentiate click and move
      pointerdown: false,
      lastX: 0,
      lastY: 0,
      handlePointerMove(t) {
        if (this.pointerdown) {
          this.moved = true;
          const n = t.clientX - this.lastX, o = t.clientY - this.lastY;
          this.lastX = t.clientX, this.lastY = t.clientY, this.cb && this.cb(n, o);
        }
      },
      handlePointerDown(t) {
        t.button === 0 && (this.pointerdown = true, this.lastX = t.clientX, this.lastY = t.clientY, this.dom.setPointerCapture(t.pointerId));
      },
      handleClear(t) {
        this.pointerdown = false, t.pointerId !== void 0 && this.dom.releasePointerCapture(t.pointerId);
      },
      cb: null,
      init(t, n) {
        this.cb = n, this.handleClear = this.handleClear.bind(this), this.handlePointerMove = this.handlePointerMove.bind(this), this.handlePointerDown = this.handlePointerDown.bind(this), this.destroy = we([
          { dom: t, evt: "pointermove", func: this.handlePointerMove },
          { dom: t, evt: "pointerleave", func: this.handleClear },
          { dom: t, evt: "pointerup", func: this.handleClear },
          { dom: this.dom, evt: "pointerdown", func: this.handlePointerDown }
        ]);
      },
      destroy: null,
      clear() {
        this.moved = false, this.pointerdown = false;
      }
    };
  };
  var We = {
    create: Vn
  };
  var Un = "#4dc4ff";
  function rt(e, t, n, o, i, s, r, c) {
    return {
      x: e / 8 + n * 3 / 8 + i * 3 / 8 + r / 8,
      y: t / 8 + o * 3 / 8 + s * 3 / 8 + c / 8
    };
  }
  function Xn(e, t, n) {
    N(e, {
      x: t + "",
      y: n + ""
    });
  }
  function Q(e, t, n, o, i) {
    N(e, {
      x1: t + "",
      y1: n + "",
      x2: o + "",
      y2: i + ""
    });
  }
  function Ie(e, t, n, o, i, s, r, c, l, d) {
    var u;
    if (e.line.setAttribute("d", `M ${t} ${n} C ${o} ${i} ${s} ${r} ${c} ${l}`), d.style) {
      const a = d.style;
      a.stroke && e.line.setAttribute("stroke", a.stroke), a.strokeWidth && e.line.setAttribute("stroke-width", String(a.strokeWidth)), a.strokeDasharray && e.line.setAttribute("stroke-dasharray", a.strokeDasharray), a.strokeLinecap && e.line.setAttribute("stroke-linecap", a.strokeLinecap), a.opacity !== void 0 && e.line.setAttribute("opacity", String(a.opacity));
    }
    const f = ie3(s, r, c, l);
    if (f && (e.arrow1.setAttribute("d", `M ${f.x1} ${f.y1} L ${c} ${l} L ${f.x2} ${f.y2}`), d.style)) {
      const a = d.style;
      a.stroke && e.arrow1.setAttribute("stroke", a.stroke), a.strokeWidth && e.arrow1.setAttribute("stroke-width", String(a.strokeWidth)), a.strokeLinecap && e.arrow1.setAttribute("stroke-linecap", a.strokeLinecap), a.opacity !== void 0 && e.arrow1.setAttribute("opacity", String(a.opacity));
    }
    if (d.bidirectional) {
      const a = ie3(o, i, t, n);
      if (a && (e.arrow2.setAttribute("d", `M ${a.x1} ${a.y1} L ${t} ${n} L ${a.x2} ${a.y2}`), d.style)) {
        const p = d.style;
        p.stroke && e.arrow2.setAttribute("stroke", p.stroke), p.strokeWidth && e.arrow2.setAttribute("stroke-width", String(p.strokeWidth)), p.strokeLinecap && e.arrow2.setAttribute("stroke-linecap", p.strokeLinecap), p.opacity !== void 0 && e.arrow2.setAttribute("opacity", String(p.opacity));
      }
    }
    const { x: h, y: g } = rt(t, n, o, i, s, r, c, l);
    Xn(e.label, h, g), (u = d.style) != null && u.labelColor && e.label.setAttribute("fill", d.style.labelColor), io(e);
  }
  function ce(e, t, n) {
    const { offsetLeft: o, offsetTop: i } = H(e.nodes, t), s = t.offsetWidth, r = t.offsetHeight, c = o + s / 2, l = i + r / 2, d = c + n.x, f = l + n.y;
    return {
      w: s,
      h: r,
      cx: c,
      cy: l,
      ctrlX: d,
      ctrlY: f
    };
  }
  function G(e) {
    let t, n;
    const o = (e.cy - e.ctrlY) / (e.ctrlX - e.cx);
    return o > e.h / e.w || o < -e.h / e.w ? e.cy - e.ctrlY < 0 ? (t = e.cx - e.h / 2 / o, n = e.cy + e.h / 2) : (t = e.cx + e.h / 2 / o, n = e.cy - e.h / 2) : e.cx - e.ctrlX < 0 ? (t = e.cx + e.w / 2, n = e.cy - e.w * o / 2) : (t = e.cx - e.w / 2, n = e.cy + e.w * o / 2), {
      x: t,
      y: n
    };
  }
  var Se = function(e, t, n, o, i) {
    var w;
    if (!t || !n)
      return;
    const s = ce(e, t, o.delta1), r = ce(e, n, o.delta2), { x: c, y: l } = G(s), { ctrlX: d, ctrlY: f } = s, { ctrlX: h, ctrlY: g } = r, { x: u, y: a } = G(r), p = ie3(h, g, u, a);
    if (!p)
      return;
    const m = `M ${p.x1} ${p.y1} L ${u} ${a} L ${p.x2} ${p.y2}`;
    let v = "";
    if (o.bidirectional) {
      const E = ie3(d, f, c, l);
      if (!E)
        return;
      v = `M ${E.x1} ${E.y1} L ${c} ${l} L ${E.x2} ${E.y2}`;
    }
    const b = Tt(`M ${c} ${l} C ${d} ${f} ${h} ${g} ${u} ${a}`, m, v, o.style), { x, y: C } = rt(c, l, d, f, h, g, u, a), k = (w = o.style) == null ? void 0 : w.labelColor, y = ue(o.label, x, C, {
      anchor: "middle",
      color: k,
      dataType: "custom-link"
    });
    b.appendChild(y), b.label = y, b.arrowObj = o, b.dataset.linkid = o.id, e.linkSvgGroup.appendChild(b), i || (e.arrows.push(o), e.currentArrow = b, ct(e, o, s, r));
  };
  var Jn = function(e, t, n = {}) {
    const o = {
      id: K(),
      label: "Custom Link",
      from: e.nodeObj.id,
      to: t.nodeObj.id,
      delta1: {
        x: e.offsetWidth / 2 + 100,
        y: 0
      },
      delta2: {
        x: t.offsetWidth / 2 + 100,
        y: 0
      },
      ...n
    };
    Se(this, e, t, o), this.bus.fire("operation", {
      name: "createArrow",
      obj: o
    });
  };
  var Zn = function(e) {
    ae(this);
    const t = { ...e, id: K() };
    Se(this, this.findEle(t.from), this.findEle(t.to), t), this.bus.fire("operation", {
      name: "createArrow",
      obj: t
    });
  };
  var Qn = function(e) {
    let t;
    if (e ? t = e : t = this.currentArrow, !t)
      return;
    ae(this);
    const n = t.arrowObj.id;
    this.arrows = this.arrows.filter((o) => o.id !== n), t.remove(), this.bus.fire("operation", {
      name: "removeArrow",
      obj: {
        id: n
      }
    });
  };
  var eo = function(e) {
    this.currentArrow = e;
    const t = e.arrowObj, n = this.findEle(t.from), o = this.findEle(t.to), i = ce(this, n, t.delta1), s = ce(this, o, t.delta2);
    ct(this, t, i, s);
  };
  var to = function() {
    ae(this), this.currentArrow = null;
  };
  var de = function(e, t) {
    const n = document.createElementNS(L, "path");
    return N(n, {
      d: e,
      stroke: t,
      fill: "none",
      "stroke-width": "6",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    }), n;
  };
  var no = function(e, t) {
    const n = document.createElementNS(L, "g");
    n.setAttribute("class", "arrow-highlight"), n.setAttribute("opacity", "0.45");
    const o = de(e.line.getAttribute("d"), t);
    n.appendChild(o);
    const i = de(e.arrow1.getAttribute("d"), t);
    if (n.appendChild(i), e.arrow2.getAttribute("d")) {
      const s = de(e.arrow2.getAttribute("d"), t);
      n.appendChild(s);
    }
    e.insertBefore(n, e.firstChild);
  };
  var oo = function(e) {
    const t = e.querySelector(".arrow-highlight");
    t && t.remove();
  };
  var io = function(e) {
    const t = e.querySelector(".arrow-highlight");
    if (!t)
      return;
    const n = t.querySelectorAll("path");
    n.length >= 1 && n[0].setAttribute("d", e.line.getAttribute("d")), n.length >= 2 && n[1].setAttribute("d", e.arrow1.getAttribute("d")), n.length >= 3 && e.arrow2.getAttribute("d") && n[2].setAttribute("d", e.arrow2.getAttribute("d"));
  };
  var ae = function(e) {
    var t, n;
    (t = e.helper1) == null || t.destroy(), (n = e.helper2) == null || n.destroy(), e.linkController.style.display = "none", e.P2.style.display = "none", e.P3.style.display = "none", e.currentArrow && oo(e.currentArrow);
  };
  var ct = function(e, t, n, o) {
    const { linkController: i, P2: s, P3: r, line1: c, line2: l, nodes: d, map: f, currentArrow: h, bus: g } = e;
    if (!h)
      return;
    i.style.display = "initial", s.style.display = "initial", r.style.display = "initial", d.appendChild(i), d.appendChild(s), d.appendChild(r), no(h, Un);
    let { x: u, y: a } = G(n), { ctrlX: p, ctrlY: m } = n, { ctrlX: v, ctrlY: b } = o, { x, y: C } = G(o);
    s.style.cssText = `top:${m}px;left:${p}px;`, r.style.cssText = `top:${b}px;left:${v}px;`, Q(c, u, a, p, m), Q(l, v, b, x, C), e.helper1 = We.create(s), e.helper2 = We.create(r), e.helper1.init(f, (k, y) => {
      p = p + k / e.scaleVal, m = m + y / e.scaleVal;
      const w = G({ ...n, ctrlX: p, ctrlY: m });
      u = w.x, a = w.y, s.style.top = m + "px", s.style.left = p + "px", Ie(h, u, a, p, m, v, b, x, C, t), Q(c, u, a, p, m), t.delta1.x = p - n.cx, t.delta1.y = m - n.cy, g.fire("updateArrowDelta", t);
    }), e.helper2.init(f, (k, y) => {
      v = v + k / e.scaleVal, b = b + y / e.scaleVal;
      const w = G({ ...o, ctrlX: v, ctrlY: b });
      x = w.x, C = w.y, r.style.top = b + "px", r.style.left = v + "px", Ie(h, u, a, p, m, v, b, x, C, t), Q(l, v, b, x, C), t.delta2.x = v - o.cx, t.delta2.y = b - o.cy, g.fire("updateArrowDelta", t);
    });
  };
  function so() {
    this.linkSvgGroup.innerHTML = "";
    for (let e = 0; e < this.arrows.length; e++) {
      const t = this.arrows[e];
      try {
        Se(this, this.findEle(t.from), this.findEle(t.to), t, true);
      } catch {
      }
    }
    this.nodes.appendChild(this.linkSvgGroup);
  }
  function ro(e) {
    if (ae(this), !e)
      return;
    const t = e.label;
    Ue(this, t, e.arrowObj);
  }
  function co() {
    this.arrows = this.arrows.filter((e) => oe(e.from, this.nodeData) && oe(e.to, this.nodeData));
  }
  var lo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    createArrow: Jn,
    createArrowFrom: Zn,
    editArrowLabel: ro,
    removeArrow: Qn,
    renderArrow: so,
    selectArrow: eo,
    tidyArrow: co,
    unselectArrow: to
  }, Symbol.toStringTag, { value: "Module" }));
  var ao = function(e) {
    var l, d;
    if (e.length === 0)
      throw new Error("No selected node.");
    if (e.length === 1) {
      const f = e[0].nodeObj, h = e[0].nodeObj.parent;
      if (!h)
        throw new Error("Can not select root node.");
      const g = h.children.findIndex((u) => f === u);
      return {
        parent: h.id,
        start: g,
        end: g
      };
    }
    let t = 0;
    const n = e.map((f) => {
      let h = f.nodeObj;
      const g = [];
      for (; h.parent; ) {
        const u = h.parent, a = u.children, p = a == null ? void 0 : a.indexOf(h);
        h = u, g.unshift({ node: h, index: p });
      }
      return g.length > t && (t = g.length), g;
    });
    let o = 0;
    e:
      for (; o < t; o++) {
        const f = (l = n[0][o]) == null ? void 0 : l.node;
        for (let h = 1; h < n.length; h++)
          if (((d = n[h][o]) == null ? void 0 : d.node) !== f)
            break e;
      }
    if (!o)
      throw new Error("Can not select root node.");
    const i = n.map((f) => f[o - 1].index).sort(), s = i[0] || 0, r = i[i.length - 1] || 0, c = n[0][o - 1].node;
    if (!c.parent)
      throw new Error("Please select nodes in the same main topic.");
    return {
      parent: c.id,
      start: s,
      end: r
    };
  };
  var ho = function(e) {
    const t = document.createElementNS(L, "g");
    return t.setAttribute("id", e), t;
  };
  var Ke = function(e, t) {
    const n = document.createElementNS(L, "path");
    return N(n, {
      d: e,
      stroke: t || "#666",
      fill: "none",
      "stroke-linecap": "round",
      "stroke-width": "2"
    }), n;
  };
  var uo = (e) => e.parentElement.parentElement;
  var fo = function(e, { parent: t, start: n }) {
    const o = e.findEle(t), i = o.nodeObj;
    let s;
    return i.parent ? s = o.closest("me-main").className : s = e.findEle(i.children[n].id).closest("me-main").className, s;
  };
  var Ne = function(e, t) {
    var E;
    const { id: n, label: o, parent: i, start: s, end: r } = t, { nodes: c, theme: l, summarySvg: d } = e, h = e.findEle(i).nodeObj, g = fo(e, t);
    let u = 1 / 0, a = 0, p = 0, m = 0;
    for (let S = s; S <= r; S++) {
      const P = (E = h.children) == null ? void 0 : E[S];
      if (!P)
        return e.removeSummary(n), null;
      const B = uo(e.findEle(P.id)), { offsetLeft: R, offsetTop: ke } = H(c, B), _e = s === r ? 10 : 20;
      S === s && (p = ke + _e), S === r && (m = ke + B.offsetHeight - _e), R < u && (u = R), B.offsetWidth + R > a && (a = B.offsetWidth + R);
    }
    let v, b;
    const x = p + 10, C = m + 10, k = (x + C) / 2, y = l.cssVar["--color"];
    g === M.LHS ? (v = Ke(`M ${u + 10} ${x} c -5 0 -10 5 -10 10 L ${u} ${C - 10} c 0 5 5 10 10 10 M ${u} ${k} h -10`, y), b = ue(o, u - 20, k + 6, { anchor: "end", color: y })) : (v = Ke(`M ${a - 10} ${x} c 5 0 10 5 10 10 L ${a} ${C - 10} c 0 5 -5 10 -10 10 M ${a} ${k} h 10`, y), b = ue(o, a + 20, k + 6, { anchor: "start", color: y }));
    const w = ho("s-" + n);
    return w.appendChild(v), w.appendChild(b), w.summaryObj = t, d.appendChild(w), w;
  };
  var po = function() {
    if (!this.currentNodes)
      return;
    const { currentNodes: e, summaries: t, bus: n } = this, { parent: o, start: i, end: s } = ao(e), r = { id: K(), parent: o, start: i, end: s, label: "summary" }, c = Ne(this, r);
    t.push(r), this.editSummary(c), n.fire("operation", {
      name: "createSummary",
      obj: r
    });
  };
  var go = function(e) {
    const t = K(), n = { ...e, id: t };
    Ne(this, n), this.summaries.push(n), this.bus.fire("operation", {
      name: "createSummary",
      obj: n
    });
  };
  var mo = function(e) {
    var n;
    const t = this.summaries.findIndex((o) => o.id === e);
    t > -1 && (this.summaries.splice(t, 1), (n = document.querySelector("#s-" + e)) == null || n.remove()), this.bus.fire("operation", {
      name: "removeSummary",
      obj: { id: e }
    });
  };
  var vo = function(e) {
    const t = e.children[1].getBBox(), n = 6, o = 3, i = document.createElementNS(L, "rect");
    N(i, {
      x: t.x - n + "",
      y: t.y - n + "",
      width: t.width + n * 2 + "",
      height: t.height + n * 2 + "",
      rx: o + "",
      stroke: this.theme.cssVar["--selected"] || "#4dc4ff",
      "stroke-width": "2",
      fill: "none"
    }), e.appendChild(i), this.currentSummary = e;
  };
  var bo = function() {
    var e, t;
    (t = (e = this.currentSummary) == null ? void 0 : e.querySelector("rect")) == null || t.remove(), this.currentSummary = null;
  };
  var yo = function() {
    this.summarySvg.innerHTML = "", this.summaries.forEach((e) => {
      try {
        Ne(this, e);
      } catch {
      }
    }), this.nodes.insertAdjacentElement("beforeend", this.summarySvg);
  };
  var wo = function(e) {
    if (!e)
      return;
    const t = e.childNodes[1];
    Ue(this, t, e.summaryObj);
  };
  var xo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    createSummary: po,
    createSummaryFrom: go,
    editSummary: wo,
    removeSummary: mo,
    renderSummary: yo,
    selectSummary: vo,
    unselectSummary: bo
  }, Symbol.toStringTag, { value: "Module" }));
  var _ = "http://www.w3.org/2000/svg";
  function Eo(e, t) {
    const n = document.createElementNS(_, "svg");
    return N(n, {
      version: "1.1",
      xmlns: _,
      height: e,
      width: t
    }), n;
  }
  function Co(e, t) {
    return (parseInt(e) - parseInt(t)) / 2;
  }
  function So(e, t, n, o) {
    const i = document.createElementNS(_, "g");
    let s = "";
    return e.text ? s = e.text.textContent : s = e.childNodes[0].textContent, s.split(`
`).forEach((c, l) => {
      const d = document.createElementNS(_, "text");
      N(d, {
        x: n + parseInt(t.paddingLeft) + "",
        y: o + parseInt(t.paddingTop) + Co(t.lineHeight, t.fontSize) * (l + 1) + parseFloat(t.fontSize) * (l + 1) + "",
        "text-anchor": "start",
        "font-family": t.fontFamily,
        "font-size": `${t.fontSize}`,
        "font-weight": `${t.fontWeight}`,
        fill: `${t.color}`
      }), d.innerHTML = c, i.appendChild(d);
    }), i;
  }
  function No(e, t, n, o) {
    var c;
    let i = "";
    (c = e.nodeObj) != null && c.dangerouslySetInnerHTML ? i = e.nodeObj.dangerouslySetInnerHTML : e.text ? i = e.text.textContent : i = e.childNodes[0].textContent;
    const s = document.createElementNS(_, "foreignObject");
    N(s, {
      x: n + parseInt(t.paddingLeft) + "",
      y: o + parseInt(t.paddingTop) + "",
      width: t.width,
      height: t.height
    });
    const r = document.createElement("div");
    return N(r, {
      xmlns: "http://www.w3.org/1999/xhtml",
      style: `font-family: ${t.fontFamily}; font-size: ${t.fontSize}; font-weight: ${t.fontWeight}; color: ${t.color}; white-space: pre-wrap;`
    }), r.innerHTML = i, s.appendChild(r), s;
  }
  function ko(e, t) {
    const n = getComputedStyle(t), { offsetLeft: o, offsetTop: i } = H(e.nodes, t), s = document.createElementNS(_, "rect");
    return N(s, {
      x: o + "",
      y: i + "",
      rx: n.borderRadius,
      ry: n.borderRadius,
      width: n.width,
      height: n.height,
      fill: n.backgroundColor,
      stroke: n.borderColor,
      "stroke-width": n.borderWidth
    }), s;
  }
  function ee(e, t, n = false) {
    const o = getComputedStyle(t), { offsetLeft: i, offsetTop: s } = H(e.nodes, t), r = document.createElementNS(_, "rect");
    N(r, {
      x: i + "",
      y: s + "",
      rx: o.borderRadius,
      ry: o.borderRadius,
      width: o.width,
      height: o.height,
      fill: o.backgroundColor,
      stroke: o.borderColor,
      "stroke-width": o.borderWidth
    });
    const c = document.createElementNS(_, "g");
    c.appendChild(r);
    let l;
    return n ? l = No(t, o, i, s) : l = So(t, o, i, s), c.appendChild(l), c;
  }
  function _o(e, t) {
    const n = getComputedStyle(t), { offsetLeft: o, offsetTop: i } = H(e.nodes, t), s = document.createElementNS(_, "a"), r = document.createElementNS(_, "text");
    return N(r, {
      x: o + "",
      y: i + parseInt(n.fontSize) + "",
      "text-anchor": "start",
      "font-family": n.fontFamily,
      "font-size": `${n.fontSize}`,
      "font-weight": `${n.fontWeight}`,
      fill: `${n.color}`
    }), r.innerHTML = t.textContent, s.appendChild(r), s.setAttribute("href", t.href), s;
  }
  function To(e, t) {
    const n = getComputedStyle(t), { offsetLeft: o, offsetTop: i } = H(e.nodes, t), s = document.createElementNS(_, "image");
    return N(s, {
      x: o + "",
      y: i + "",
      width: n.width + "",
      height: n.height + "",
      href: t.src
    }), s;
  }
  var te = 100;
  var Lo = '<?xml version="1.0" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">';
  var Ao = (e, t = false) => {
    var h, g, u;
    const n = e.nodes, o = n.offsetHeight + te * 2, i = n.offsetWidth + te * 2, s = Eo(o + "px", i + "px"), r = document.createElementNS(_, "svg"), c = document.createElementNS(_, "rect");
    N(c, {
      x: "0",
      y: "0",
      width: `${i}`,
      height: `${o}`,
      fill: e.theme.cssVar["--bgcolor"]
    }), s.appendChild(c), n.querySelectorAll(".subLines").forEach((a) => {
      const p = a.cloneNode(true), { offsetLeft: m, offsetTop: v } = H(n, a.parentElement);
      p.setAttribute("x", `${m}`), p.setAttribute("y", `${v}`), r.appendChild(p);
    });
    const l = (h = n.querySelector(".lines")) == null ? void 0 : h.cloneNode(true);
    l && r.appendChild(l);
    const d = (g = n.querySelector(".topiclinks")) == null ? void 0 : g.cloneNode(true);
    d && r.appendChild(d);
    const f = (u = n.querySelector(".summary")) == null ? void 0 : u.cloneNode(true);
    return f && r.appendChild(f), n.querySelectorAll("me-tpc").forEach((a) => {
      a.nodeObj.dangerouslySetInnerHTML ? r.appendChild(ee(e, a, !t)) : (r.appendChild(ko(e, a)), r.appendChild(ee(e, a.text, !t)));
    }), n.querySelectorAll(".tags > span").forEach((a) => {
      r.appendChild(ee(e, a));
    }), n.querySelectorAll(".icons > span").forEach((a) => {
      r.appendChild(ee(e, a));
    }), n.querySelectorAll(".hyper-link").forEach((a) => {
      r.appendChild(_o(e, a));
    }), n.querySelectorAll("img").forEach((a) => {
      r.appendChild(To(e, a));
    }), N(r, {
      x: te + "",
      y: te + "",
      overflow: "visible"
    }), s.appendChild(r), s;
  };
  var Mo = (e, t) => (t && e.insertAdjacentHTML("afterbegin", "<style>" + t + "</style>"), Lo + e.outerHTML);
  function Do(e) {
    return new Promise((t, n) => {
      const o = new FileReader();
      o.onload = (i) => {
        t(i.target.result);
      }, o.onerror = (i) => {
        n(i);
      }, o.readAsDataURL(e);
    });
  }
  var Po = function(e = false, t) {
    const n = Ao(this, e), o = Mo(n, t);
    return new Blob([o], { type: "image/svg+xml" });
  };
  var $o = async function(e = false, t) {
    const n = this.exportSvg(e, t), o = await Do(n);
    return new Promise((i, s) => {
      const r = new Image();
      r.setAttribute("crossOrigin", "anonymous"), r.onload = () => {
        const c = document.createElement("canvas");
        c.width = r.width, c.height = r.height, c.getContext("2d").drawImage(r, 0, 0), c.toBlob(i, "image/png", 1);
      }, r.src = o, r.onerror = s;
    });
  };
  var Oo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    exportPng: $o,
    exportSvg: Po
  }, Symbol.toStringTag, { value: "Module" }));
  function jo(e, t) {
    return async function(...n) {
      const o = this.before[t];
      o && !await o.apply(this, n) || e.apply(this, n);
    };
  }
  var Ye = Object.keys(it);
  var lt = {};
  for (let e = 0; e < Ye.length; e++) {
    const t = Ye[e];
    lt[t] = jo(it[t], t);
  }
  var Ho = {
    getObjById: oe,
    generateNewObj: ht,
    layout: wt,
    linkDiv: Lt,
    editTopic: _t,
    createWrapper: Ct,
    createParent: St,
    createChildren: Nt,
    createTopic: kt,
    findEle: qe,
    changeTheme: tn,
    ...zn,
    ...lt,
    ...lo,
    ...xo,
    ...Oo,
    init(e) {
      if (e = JSON.parse(JSON.stringify(e)), !e || !e.nodeData)
        return new Error("MindElixir: `data` is required");
      e.direction !== void 0 && (this.direction = e.direction), this.changeTheme(e.theme || this.theme, false), this.nodeData = e.nodeData, j(this.nodeData), this.arrows = e.arrows || [], this.summaries = e.summaries || [], this.tidyArrow(), this.toolBar && zt(this), this.keypress && vt(this, this.keypress), this.editable && en(this), this.contextMenu && this.disposable.push(At(this, this.contextMenu)), this.draggable && this.disposable.push($t(this)), this.allowUndo && this.disposable.push(jt(this)), this.layout(), this.linkDiv(), this.toCenter();
    },
    destroy() {
      var e;
      this.disposable.forEach((t) => t()), this.el && (this.el.innerHTML = ""), this.el = void 0, this.nodeData = void 0, this.arrows = void 0, this.summaries = void 0, this.currentArrow = void 0, this.currentNodes = void 0, this.currentSummary = void 0, this.waitCopy = void 0, this.theme = void 0, this.direction = void 0, this.bus = void 0, this.container = void 0, this.map = void 0, this.lines = void 0, this.linkController = void 0, this.linkSvgGroup = void 0, this.P2 = void 0, this.P3 = void 0, this.line1 = void 0, this.line2 = void 0, this.nodes = void 0, (e = this.selection) == null || e.destroy(), this.selection = void 0;
    }
  };
  function Bo({ pT: e, pL: t, pW: n, pH: o, cT: i, cL: s, cW: r, cH: c, direction: l, containerHeight: d }) {
    let f = t + n / 2;
    const h = e + o / 2;
    let g;
    l === M.LHS ? g = s + r : g = s;
    const u = i + c / 2, p = (1 - Math.abs(u - h) / d) * 0.25 * (n / 2);
    return l === M.LHS ? f = f - n / 10 - p : f = f + n / 10 + p, `M ${f} ${h} Q ${f} ${u} ${g} ${u}`;
  }
  function Ro({ pT: e, pL: t, pW: n, pH: o, cT: i, cL: s, cW: r, cH: c, direction: l, isFirst: d }) {
    const f = parseInt(this.container.style.getPropertyValue("--node-gap-x"));
    let h = 0, g = 0;
    d ? h = e + o / 2 : h = e + o;
    const u = i + c;
    let a = 0, p = 0, m = 0;
    const v = Math.abs(h - u) / 300 * f;
    return l === M.LHS ? (m = t, a = m + f, p = m - f, g = s + f, `M ${a} ${h} C ${m} ${h} ${m + v} ${u} ${p} ${u} H ${g}`) : (m = t + n, a = m - f, p = m + f, g = s + r - f, `M ${a} ${h} C ${m} ${h} ${m - v} ${u} ${p} ${u} H ${g}`);
  }
  var Fo = "5.0.6";
  function Wo(e) {
    return {
      x: 0,
      y: 0,
      moved: false,
      // diffrentiate click and move
      mousedown: false,
      onMove(t, n) {
        this.mousedown && (this.moved = true, e.move(t, n));
      },
      clear() {
        this.mousedown = false;
      }
    };
  }
  var U = document;
  function D({
    el: e,
    direction: t,
    locale: n,
    draggable: o,
    editable: i,
    contextMenu: s,
    toolBar: r,
    keypress: c,
    mouseSelectionButton: l,
    selectionContainer: d,
    before: f,
    newTopicName: h,
    allowUndo: g,
    generateMainBranch: u,
    generateSubBranch: a,
    overflowHidden: p,
    theme: m,
    alignment: v,
    scaleSensitivity: b,
    scaleMax: x,
    scaleMin: C,
    handleWheel: k
  }) {
    let y = null;
    const w = Object.prototype.toString.call(e);
    if (w === "[object HTMLDivElement]" ? y = e : w === "[object String]" && (y = document.querySelector(e)), !y)
      throw new Error("MindElixir: el is not a valid element");
    y.style.position = "relative", y.innerHTML = "", this.el = y, this.disposable = [], this.before = f || {}, this.locale = n || "en", this.newTopicName = h || "New Node", this.contextMenu = s ?? true, this.toolBar = r ?? true, this.keypress = c ?? true, this.mouseSelectionButton = l ?? 0, this.direction = t ?? 1, this.draggable = o ?? true, this.editable = i ?? true, this.allowUndo = g ?? true, this.scaleSensitivity = b ?? 0.1, this.scaleMax = x ?? 1.4, this.scaleMin = C ?? 0.2, this.generateMainBranch = u || Bo, this.generateSubBranch = a || Ro, this.overflowHidden = p ?? false, this.alignment = v ?? "root", this.handleWheel = k ?? true, this.currentNodes = [], this.currentArrow = null, this.scaleVal = 1, this.tempDirection = null, this.dragMoveHelper = Wo(this), this.bus = yt(), this.container = U.createElement("div"), this.selectionContainer = d || this.container, this.container.className = "map-container";
    const E = window.matchMedia("(prefers-color-scheme: dark)");
    this.theme = m || (E.matches ? ve : me);
    const S = U.createElement("div");
    S.className = "map-canvas", this.map = S, this.container.setAttribute("tabindex", "0"), this.container.appendChild(this.map), this.el.appendChild(this.container), this.nodes = U.createElement("me-nodes"), this.lines = X("lines"), this.summarySvg = X("summary"), this.linkController = X("linkcontroller"), this.P2 = U.createElement("div"), this.P3 = U.createElement("div"), this.P2.className = this.P3.className = "circle", this.P2.style.display = this.P3.style.display = "none", this.line1 = Ae(), this.line2 = Ae(), this.linkController.appendChild(this.line1), this.linkController.appendChild(this.line2), this.linkSvgGroup = X("topiclinks"), this.map.appendChild(this.nodes), this.overflowHidden ? this.container.style.overflow = "hidden" : this.disposable.push(bt(this));
  }
  D.prototype = Ho;
  Object.defineProperty(D.prototype, "currentNode", {
    get() {
      return this.currentNodes[this.currentNodes.length - 1];
    },
    enumerable: true
  });
  D.LEFT = 0;
  D.RIGHT = 1;
  D.SIDE = 2;
  D.THEME = me;
  D.DARK_THEME = ve;
  D.version = Fo;
  D.E = qe;
  D.new = (e) => ({
    nodeData: {
      id: K(),
      topic: e || "new topic",
      children: []
    }
  });

  // script/mindMap.js
  var _mind = null;
  var _pageUrl = null;
  var _nodeEle = null;
  function setMind(mindInstance) {
    _mind = mindInstance;
  }
  function setPageUrl(pageUrl) {
    _pageUrl = pageUrl;
  }
  function getMind() {
    return _mind;
  }
  function getPageUrl() {
    return _pageUrl;
  }
  function setNodeEle(nodeEle) {
    _nodeEle = nodeEle;
  }
  function getNodeEle() {
    return _nodeEle;
  }
  document.addEventListener("DOMContentLoaded", function() {
    chrome.runtime.sendMessage({ type: "side_panel_ready" }, (response) => {
      console.log("response:", response);
    });
  });
  document.addEventListener("mousedown", (event) => {
    const note_card_editor = document.querySelector(".note-card-editor");
    const panel = document.querySelector("#map");
    if (note_card_editor) {
      if (note_card_editor.contains(event.target)) {
        return;
      } else {
        hideNoteCardEditor(panel, note_card_editor, getNodeEle(), getMind(), getPageUrl());
      }
    }
  });
  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === "init_mindmap") {
      console.log("message:", message);
      setPageUrl(message.pageUrl);
      showMindMapPanel(message.pageUrl);
    }
    if (message.type === "add_noteCard_to_mindMap") {
      add_noteCard_to_mindMap(message.pageUrl, message.groupId);
    }
    if (message.type === "sync_mindMap_data_ready") {
      console.log("message:", message);
      loadNoteCard(message.pageUrl, getMind(), getMind().getData());
      storage_mindMap_data();
    }
    if (message.type === "update_storage_note") {
      sync_note_card_notes(message.groupId, message.note);
    }
    if (message.type === "remove_mindmap_editor") {
      const note_card_editor = document.querySelector(".note-card-editor");
      const panel = document.querySelector("#map");
      if (note_card_editor) {
        hideNoteCardEditor(panel, note_card_editor, getNodeEle(), getMind(), getPageUrl());
      }
    }
  });
  function showMindMapPanel(pageUrl) {
    const panel = document.querySelector("#map");
    console.log("MindElixir:", D);
    if (!panel) {
      console.error("panel not found");
      return;
    }
    create_mindMap_toolbar(panel);
    const mind = initMindMap(D, pageUrl, null);
    (function overide_node_edit(mind2) {
      console.log("overide_node_edit:");
      if (!mind2 || typeof mind2.beginEdit !== "function") return;
      const _beginEdit = mind2.beginEdit.bind(mind2);
      mind2.beginEdit = function(el) {
        const nodeEle = el || mind2.currentNode;
        if (!nodeEle) return;
        if (nodeEle.nodeObj.dangerouslySetInnerHTML) {
          console.log("overide_node_edit:");
          showNoteCardEditor(nodeEle, panel, getMind(), pageUrl);
          return;
        }
        return _beginEdit(el);
      };
    })(mind);
    mind.nodeData.children_list = ["root"];
    mind.bus.addListener("operation", (operation) => {
      console.log("operation:", operation);
      if (operation.name == "removeNodes") {
        console.log("removeNodes:", operation);
        const children_list = mind.getData().nodeData.children_list;
        const affected_nodes = operation.objs;
        affected_nodes.forEach((node) => {
          children_list.splice(children_list.indexOf(node.id), 1);
        });
        const new_data = mind.getData();
        new_data.nodeData.children_list = children_list;
        mind.refresh(new_data);
      }
      console.log(operation);
      storage_mindMap_data();
    });
    get_mindMap_data(pageUrl, getMind());
  }
  function initMindMap(MindElixir, pageUrl, init_data) {
    let options = {
      el: "#map",
      // or HTMLDivElement
      direction: MindElixir.LEFT,
      draggable: true,
      // default true
      contextMenu: true,
      // default true
      toolBar: true,
      // default true
      nodeMenu: true,
      // default true
      keypress: true,
      // default true
      locale: "en",
      // [zh_CN,zh_TW,en,ja,pt,ru] waiting for PRs
      overflowHidden: false,
      // default false
      mainLinkStyle: 2,
      // [1,2] default 1
      mouseSelectionButton: 0,
      // 0 for left button, 2 for right button, default 0
      contextMenuOption: {
        focus: true,
        link: true,
        extend: [
          {
            name: "Node edit",
            onclick: () => {
              alert("extend menu");
            }
          }
        ]
      },
      before: {
        insertSibling(type, obj) {
          return true;
        }
      }
    };
    let mind = new MindElixir(options);
    const data = init_data || initNoteCard(pageUrl);
    mind.init(data);
    setMind(mind);
    return mind;
  }
  function loadNoteCard(pageUrl, mind, root_noteCard) {
    chrome.storage.local.get(pageUrl, (result) => {
      const groupId_list = result[pageUrl];
      if (groupId_list) {
        groupId_list.forEach((groupId) => {
          chrome.storage.local.get(groupId, (result2) => {
            const highlightElement_structure = result2[groupId];
            if (highlightElement_structure) {
              console.log("highlightElement_structure:", highlightElement_structure);
              const color = highlightElement_structure.color;
              const quote = find_quotes(highlightElement_structure.highlightElements);
              const notes = highlightElement_structure.note;
              const title = "";
              const data = generate_children_noteCard(title, quote, notes, color, groupId);
              if (data) {
                refresh_NoteCard(initNoteCard(pageUrl), data, getMind());
              } else {
                window.alert("No note card found");
              }
            }
          });
        });
      }
    });
  }
  function find_quotes(highlightElement2) {
    console.log("highlightElement:", highlightElement2);
    let quotes = "";
    highlightElement2.forEach((element) => {
      quotes += element.highlightElement_text;
    });
    return quotes;
  }
  function initNoteCard(pageUrl) {
    const data = {
      nodeData: {
        id: "root",
        topic: "root",
        hyperLink: pageUrl,
        children_list: ["root"],
        expanded: true,
        root: true
      }
    };
    return data;
  }
  function refresh_NoteCard(root_noteCard, children_noteCard, mind) {
    if (!getMind()) {
      console.error("mind not found");
      return;
    }
    console.log("mind.getData():", getMind().getData());
    if (children_noteCard) {
      let children_noteCard_list = getMind().getData().nodeData.children;
      if (children_noteCard_list) {
        console.log("children_noteCard:", children_noteCard);
        const children_list = getMind().getData().nodeData.children_list;
        if (!children_list.includes(children_noteCard.id)) {
          children_list.push(children_noteCard.id);
          root_noteCard.nodeData.children_list = children_list;
          children_noteCard_list.push(children_noteCard);
          root_noteCard.nodeData.children = children_noteCard_list;
        } else {
          root_noteCard.nodeData.children_list = children_list;
          root_noteCard.nodeData.children = children_noteCard_list;
        }
      } else {
        const children_list = root_noteCard.nodeData.children_list;
        children_list.push(children_noteCard.id);
        root_noteCard.nodeData.children_list = children_list;
        root_noteCard.nodeData.children = [children_noteCard];
      }
    }
    console.log("root_noteCard:", root_noteCard);
    getMind().refresh(root_noteCard);
    console.log("mind.getData():", getMind().getData());
    console.log("mind.getData().nodeData.children:", getMind().getData().nodeData.children);
    return root_noteCard;
  }
  function generate_children_noteCard(title, quote, note, color, groupId) {
    if (!check_empty_container(title) && !check_empty_container(quote) && !check_empty_container(note)) {
      return null;
    }
    const child_noteCard = {
      direction: 0,
      id: groupId,
      topic: quote || title || note,
      dangerouslySetInnerHTML: createDangerousHtml(title, quote, note, color),
      dataset: {
        title,
        quote,
        note,
        color
      }
      // className: 'custom-note-card',
      // parent:'root',
    };
    return child_noteCard;
  }
  function createDangerousHtml(title, quote, notes, color) {
    const temp_html = document.createElement("div");
    const note_card = create_note_card(title, quote, notes, color);
    temp_html.appendChild(note_card);
    return temp_html.innerHTML;
  }
  function create_notes_container(notes) {
    const notes_container = document.createElement("div");
    notes_container.className = "notes-container";
    const notes_style = document.createElement("p");
    notes_style.className = "notes-style";
    notes_style.innerHTML = init_notes_html(notes);
    notes_container.appendChild(notes_style);
    return notes_container;
  }
  function create_note_card(title, quote, notes, color) {
    const note_card = document.createElement("div");
    note_card.className = "note-card";
    if (!check_empty_container(title)) {
      const title_container = create_title_container(quote, "note-card-title-container");
      note_card.appendChild(title_container);
      title_container.style.backgroundColor = color;
    } else {
      const title_container = create_title_container(title, "note-card-title-container");
      note_card.appendChild(title_container);
      const quote_container = create_quote_container(quote, "note-card-quote-container");
      note_card.appendChild(quote_container);
      quote_container.style.backgroundColor = "white";
      title_container.style.backgroundColor = color;
    }
    if (!check_empty_container(notes)) {
    } else {
      const notes_container = create_notes_container(notes);
      note_card.appendChild(notes_container);
    }
    note_card.style.backgroundColor = color;
    return note_card;
  }
  function create_title_container(text, className) {
    const title_container = document.createElement("div");
    title_container.className = className;
    const title_style = document.createElement("h3");
    title_style.className = "title-style";
    title_style.innerHTML = text;
    title_container.appendChild(title_style);
    return title_container;
  }
  function create_quote_container(text, className) {
    const quote_container = document.createElement("div");
    quote_container.className = className;
    const quote_style = document.createElement("p");
    quote_style.className = "quote-style";
    quote_style.innerHTML = text;
    quote_container.appendChild(quote_style);
    return quote_container;
  }
  function showNoteCardEditor(nodeEle, panel, mind, pageUrl) {
    console.log("showNoteCardEditor:", nodeEle);
    chrome.runtime.sendMessage({
      type: "remove_content_editor"
    });
    const title = nodeEle.nodeObj.dataset.title;
    const quote = nodeEle.nodeObj.dataset.quote;
    const note = nodeEle.nodeObj.dataset.note;
    console.log("note:", note);
    const note_card_editor = document.createElement("div");
    note_card_editor.className = "note-card-editor";
    if (!check_empty_container(title)) {
      const title_container = create_title_container("<br>", "note-card-editor-title-container");
      title_container.contentEditable = "true";
      note_card_editor.appendChild(title_container);
    } else {
      const title_container = create_title_container(title, "note-card-editor-title-container");
      title_container.contentEditable = "true";
      note_card_editor.appendChild(title_container);
    }
    const quote_container = document.createElement("div");
    quote_container.className = "note-card-editor-quote-container";
    quote_container.contentEditable = "true";
    const quote_style = document.createElement("p");
    quote_style.className = "quote-style";
    quote_style.innerHTML = quote;
    quote_style.contentEditable = "true";
    quote_container.appendChild(quote_style);
    note_card_editor.appendChild(quote_container);
    const notes_container = document.createElement("div");
    notes_container.className = "note-card-editor-notes-container";
    note_card_editor.appendChild(notes_container);
    notes_container.id = "editor";
    panel.appendChild(note_card_editor);
    console.log("note:", note);
    if (note != "<br>" && note != "<br/>" && note != "") {
      const editorView = initProsemirror_with_notes(note);
    } else {
      const contentDiv = document.createElement("div");
      contentDiv.id = "content";
      contentDiv.style.display = "none";
      const h3 = document.createElement("h3");
      h3.textContent = "Hello ProseMirror";
      contentDiv.appendChild(h3);
      const p1 = document.createElement("p");
      p1.textContent = "This is editable text. You can focus it and start typing.";
      contentDiv.appendChild(p1);
      const p2 = document.createElement("p");
      p2.innerHTML = 'To apply styling, you can select a piece of text and manipulate its styling from the menu. The basic schema supports <em>emphasis</em>, <strong>strong text</strong>, <a href="http://marijnhaverbeke.nl/blog">links</a>, <code>code font</code>, and images.';
      contentDiv.appendChild(p2);
      const p3 = document.createElement("p");
      p3.textContent = "Block-level structure can be manipulated with key bindings (try ctrl-shift-2 to create a level 2 heading, or enter in an empty textblock to exit the parent block), or through the menu.";
      contentDiv.appendChild(p3);
      const p4 = document.createElement("p");
      p4.textContent = 'Try using the "list" item in the menu to wrap this paragraph in a numbered list.';
      contentDiv.appendChild(p4);
      contentDiv.style.display = "none";
      note_card_editor.appendChild(contentDiv);
      const editorView = initProsemirror_without_notes();
      if (editorView) {
        console.log("ProseMirror editor initialized successfully");
        console.log("Editor view:", editorView);
        console.log("Container HTML after:", notes_container.innerHTML);
      } else {
        console.error("initProsemirror returned null/undefined");
      }
    }
    setNodeEle(nodeEle);
    setup_menu_botton();
  }
  function hideNoteCardEditor(panel, note_card_editor, nodeEle, mind, pageUrl) {
    console.log("hideNoteCardEditor:", note_card_editor);
    if (note_card_editor) {
      updateNoteCard(nodeEle, panel, note_card_editor, mind, pageUrl);
      note_card_editor.remove();
    }
  }
  function updateNoteCard(nodeEle, panel, note_card_editor, mind, pageUrl) {
    console.log("updateNoteCard:", note_card_editor);
    const title = note_card_editor.querySelector(".title-style").innerHTML;
    const quote = note_card_editor.querySelector(".quote-style").innerHTML;
    const note = get_doc_json();
    const note_html = get_hmtl();
    if (!check_empty_container(title) && !check_empty_container(quote) && !check_empty_container(note_html)) {
      console.log("remove nodeEle:", nodeEle);
      getMind().removeNodes([getMind().currentNode]);
      remove_storage_mindMap_data(pageUrl);
      return;
    }
    nodeEle.nodeObj.dataset.title = title;
    nodeEle.nodeObj.dataset.quote = quote;
    nodeEle.nodeObj.dataset.note = note;
    const id = nodeEle.nodeObj.id;
    const color = nodeEle.nodeObj.dataset.color;
    nodeEle.nodeObj.dangerouslySetInnerHTML = createDangerousHtml(title, quote, note, color);
    nodeEle.nodeObj.topic = id;
    console.log("nodeEle.nodeObj:", nodeEle.nodeObj);
    console.log("mind.getData():", getMind().getData());
    const currentdata = getMind().getData();
    console.log("currentdata:", currentdata);
    getMind().refresh(currentdata);
    storage_mindMap_data();
  }
  function check_empty_container(text) {
    if (text == "" || text == null || text == void 0 || text == "<br>" || text == "<br/>") {
      return false;
    }
    return true;
  }
  function storage_mindMap_data() {
    console.log("storage_mindMap_data:", getMind().getData());
    const data = getMind().getData();
    console.log("data:", data);
    const pageUrl = data.nodeData.hyperLink;
    const key_mindMap = "mindMap" + pageUrl;
    console.log("key_mindMap:", key_mindMap);
    chrome.storage.local.set({ [key_mindMap]: data });
  }
  function get_mindMap_data(pageUrl, mind) {
    const key_mindMap = "mindMap" + pageUrl;
    chrome.storage.local.get(key_mindMap, (result) => {
      const data_mindMap = result[key_mindMap];
      console.log("data_mindMap:", data_mindMap);
      if (data_mindMap) {
        console.log("data_mindMap:", data_mindMap);
        getMind().init(data_mindMap);
      } else {
        const root_noteCard = getMind().getData();
        loadNoteCard(pageUrl, getMind(), root_noteCard);
        storage_mindMap_data();
      }
    });
  }
  function remove_storage_mindMap_data(pageUrl) {
    const key_mindMap = "mindMap" + pageUrl;
    chrome.storage.local.remove(key_mindMap);
  }
  function add_noteCard_to_mindMap(pageUrl, groupId) {
    const key_mindMap = "mindMap" + pageUrl;
    chrome.storage.local.get(key_mindMap, (result) => {
      const data_mindMap = result[key_mindMap];
      if (data_mindMap) {
        chrome.storage.local.get(groupId, (result2) => {
          const data = convertHightlightElementToNoteCard(result2[groupId]);
          if (data_mindMap.nodeData.children) {
            data_mindMap.nodeData.children.push(data);
          } else {
            data_mindMap.nodeData.children = [data];
          }
          chrome.storage.local.set({ [key_mindMap]: data_mindMap }, () => {
            if (!check_if_panel_exist()) {
              return;
            }
            refresh_NoteCard(data_mindMap, data, getMind());
          });
        });
      }
    });
  }
  function convertHightlightElementToNoteCard(highlightElement_structure) {
    const groupId = highlightElement_structure.groupId;
    const color = highlightElement_structure.color;
    const quote = find_quotes(highlightElement_structure.highlightElements);
    const notes = highlightElement_structure.note;
    const title = highlightElement_structure.title;
    const data = generate_children_noteCard(title, quote, notes, color, groupId);
    return data;
  }
  function check_if_panel_exist() {
    if (document.querySelector("#mindmap-panel")) {
      return true;
    }
    return false;
  }
  function create_sync_btn() {
    const syncBtn = document.createElement("button");
    syncBtn.className = "toolbar-btn sync-btn";
    syncBtn.title = "Sync Mind Map";
    syncBtn.innerHTML = '<svg width="16" height="16" viewBox="0 0 16 16"><path d="M8 3a5 5 0 0 0-5 5H1l3.5 3.5L7.5 8H6a2 2 0 1 1 2 2v2a4 4 0 1 0-4-4H2a6 6 0 1 1 6 6v-2a4 4 0 0 0 0-8z" fill="currentColor"/></svg>';
    syncBtn.addEventListener("click", () => {
      chrome.runtime.sendMessage({ type: "sync_mindMap_data" });
    });
    return syncBtn;
  }
  function create_fullscreen_btn() {
    const fullscreenBtn = document.createElement("button");
    fullscreenBtn.className = "toolbar-btn fullscreen-btn";
    fullscreenBtn.title = "Toggle Fullscreen";
    fullscreenBtn.innerHTML = '<svg width="16" height="16" viewBox="0 0 16 16"><path d="M1.5 1.5v3.5h1v-2.5h2.5v-1h-3.5zm0 8.5v3.5h3.5v-1h-2.5v-2.5h-1zm8.5-8.5h-1v2.5h-2.5v1h3.5v-3.5zm0 8.5v-1h-2.5v-2.5h-1v3.5h3.5z" fill="currentColor"/></svg>';
    fullscreenBtn.addEventListener("click", () => {
      chrome.runtime.sendMessage({ type: "toggle_fullscreen" });
      window.close();
    });
    return fullscreenBtn;
  }
  function create_convert_btn() {
    const convertBtn = document.createElement("button");
    convertBtn.className = "toolbar-btn convert-btn";
    convertBtn.title = "Convert to Note List";
    convertBtn.innerHTML = '<svg width="16" height="16" viewBox="0 0 16 16"><path d="M2 2h12v2H2V2zm0 4h12v2H2V6zm0 4h12v2H2v-2zm0 4h8v2H2v-2z" fill="currentColor"/></svg>';
    convertBtn.addEventListener("click", () => {
      show_note_list();
    });
    return convertBtn;
  }
  function create_mindMap_toolbar() {
    const mindMap_container = document.querySelector("#mindmap-container");
    if (!mindMap_container) {
      console.error("mindMap_container not found");
      return;
    }
    const toolbar = document.createElement("div");
    toolbar.className = "mindmap-toolbar";
    const syncBtn = create_sync_btn();
    const fullscreenBtn = create_fullscreen_btn();
    const convertBtn = create_convert_btn();
    toolbar.appendChild(syncBtn);
    toolbar.appendChild(fullscreenBtn);
    toolbar.appendChild(convertBtn);
    mindMap_container.appendChild(toolbar);
  }
  function show_note_list() {
    storage_mindMap_data();
    const panel = document.querySelector("#map");
    if (!panel) {
      console.error("panel not found");
      return;
    }
    panel.remove();
    const mindMap_container = document.querySelector("#mindmap-container");
    if (!mindMap_container) {
      console.error("mindMap_container not found");
      return;
    }
    const note_list = document.createElement("div");
    note_list.className = "note-list";
    mindMap_container.appendChild(note_list);
    const toolbar = document.querySelector(".mindmap-toolbar");
    if (!toolbar) {
      console.error("toolbar not found");
      return;
    }
    update_note_list_toolbar();
    create_note_list();
  }
  function update_note_list_toolbar() {
    const toolbar = document.querySelector(".mindmap-toolbar");
    if (!toolbar) {
      console.error("toolbar not found");
      return;
    }
    const convertBtn = toolbar.querySelector(".convert-btn");
    if (!convertBtn) {
      console.error("convertBtn not found");
      return;
    }
    const convertBtn_to_mindMap = document.createElement("button");
    convertBtn_to_mindMap.className = "toolbar-btn convert-btn-to-mindMap";
    convertBtn_to_mindMap.title = "Convert to Mind Map";
    convertBtn_to_mindMap.innerHTML = '<svg width="16" height="16" viewBox="0 0 16 16"><rect x="5" y="1" width="6" height="4" fill="currentColor"/><rect x="0" y="11" width="6" height="4" fill="currentColor"/><rect x="10" y="11" width="6" height="4" fill="currentColor"/><line x1="3" y1="3" x2="5" y2="3" stroke="currentColor" stroke-width="0.5"/><line x1="13" y1="3" x2="11" y2="3" stroke="currentColor" stroke-width="0.5"/><path d="M3 3L2 3L2 11L3 11L4 11L4 3L3 3Z" fill="currentColor"/><path d="M13 3L14 3L14 11L13 11L12 11L12 3L13 3Z" fill="currentColor"/></svg>';
    convertBtn_to_mindMap.addEventListener("click", () => {
      const note_list = document.querySelector(".note-list");
      if (!note_list) {
        console.error("note_list not found");
        return;
      }
      note_list.remove();
      const map2 = document.createElement("div");
      map2.id = "map";
      const mindMap_container = document.querySelector("#mindmap-container");
      if (!mindMap_container) {
        console.error("mindMap_container not found");
        return;
      }
      mindMap_container.appendChild(map2);
      map2.style.width = "100%";
      map2.style.height = "100%";
      map2.style.position = "fixed";
      map2.style.top = "0";
      showMindMapPanel(getPageUrl());
      toolbar.remove();
    });
    toolbar.replaceChild(convertBtn_to_mindMap, convertBtn);
  }
  function create_note_list() {
    const note_list = document.querySelector(".note-list");
    if (!note_list) {
      console.error("note_list not found");
      return;
    }
    chrome.storage.local.get("mindMap" + getPageUrl(), (result) => {
      const data_mindMap = result["mindMap" + getPageUrl()];
      if (data_mindMap) {
        const note_data = data_mindMap.nodeData.children;
        console.log("note_data:", note_data);
        note_data.forEach((note) => {
          const note_data_set = note.dataset;
          if (!note_data_set) {
            console.error("note_data_set not found");
            return;
          }
          const note_card = create_note_card(note_data_set.title, note_data_set.quote, note_data_set.note, note_data_set.color);
          note_card.style.width = "100%";
          note_list.appendChild(note_card);
          console.log("note_list:", note_list);
        });
      }
    });
  }
  function setup_menu_botton() {
    const markdown_dropdownSubmenu = setup_markdown_input_rules();
  }
  function sync_note_card_notes(groupId, note) {
    const update_data = getMind().getData();
    const nodeData = update_data.nodeData;
    const children = nodeData.children;
    const children_list = nodeData.children_list;
    if (!children) {
      return;
    }
    if (!children_list) {
      return;
    }
    if (!children_list.includes(groupId)) {
      return;
    }
    for (let i = 0; i < children.length; i++) {
      if (children[i].id == groupId) {
        children[i].dataset.note = note;
        const title = children[i].dataset.title;
        const quote = children[i].dataset.quote;
        const color = children[i].dataset.color;
        children[i].dangerouslySetInnerHTML = createDangerousHtml(title, quote, note, color);
        break;
      }
    }
    nodeData.children = children;
    console.log("update_data:", update_data);
    getMind().refresh(update_data);
    storage_mindMap_data();
  }

  // script/fullScreenMindMap/mindMapFullscreen.js
  function toggleFullscreen(pageUrl) {
    if (document.querySelector("#mindmap-panel")) return;
    const panel = document.createElement("div");
    panel.id = "mindmap-panel";
    panel.innerHTML = `<div id="mindmap-container">
  
  <div id="map"></div>
<style>
#map {
  height: 500px;
  width: 100%;
}
</style>
  </div>`;
    document.body.appendChild(panel);
    showMindMapPanel(pageUrl);
  }

  // script/content.js
  var HTMLNoteHighlighter = class {
    constructor() {
      this.isActive = false;
      this.noteCounter = 0;
      this.highlightButton = null;
      this.defaultColor = getDefaultColor();
      this.init();
    }
    init() {
      this.setupEventListeners();
      this.restoreHighlights();
      load_groupId_list(window.location.href);
      show_loose_highlightElement(window.location.href);
    }
    /**
     * 设置默认颜色并保存到localStorage
     * @param {string} color - 要设置的默认颜色
     */
    setDefaultColor(color) {
      this.defaultColor = color;
      localStorage.setItem("html-note-default-color", color);
    }
    setupEventListeners() {
      document.addEventListener("selectionchange", () => {
        this.showHighlightButtonForSelection();
      });
      document.addEventListener("click", (e) => {
        if (e.target.classList.contains("html-note-highlight")) {
          const groupId = e.target.getAttribute("data-group-id");
          if (groupId) {
            const allSpans = document.querySelectorAll('.html-note-highlight[data-group-id="' + groupId + '"]');
            this.showToolbarForHighlight(allSpans[0], groupId, e);
            showNoteEditor(allSpans[0], groupId, e);
          } else {
            this.showToolbarForHighlight(e.target, void 0, e);
            showNoteEditor(e.target, void 0, e);
          }
        } else {
        }
      });
      document.addEventListener("mouseover", (e) => {
        highlightElement_mouseOverHandler(e);
      });
      document.addEventListener("mouseout", (e) => {
        highlightElement_mouseOutHandler(e);
      });
      chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
        console.log("message:", message);
        if (message.type === "sync_mindMap_data") {
          chrome.runtime.sendMessage({ type: "sync_mindMap_data_ready", pageUrl: window.location.href });
        }
        if (message.type === "toggle_fullscreen") {
          toggleFullscreen(window.location.href);
        }
        if (message.type == "context_menu_item_clicked") {
          chrome.runtime.sendMessage({ type: "open_side_panel" });
        }
        if (message.type === "side_panel_ready") {
          console.log("pageurl:", window.location.href);
          chrome.runtime.sendMessage({ type: "init_mindmap", pageUrl: window.location.href });
        }
        if (message.type === "remove_content_editor") {
          remove_content_editor();
        }
      });
    }
    showHighlightButtonForSelection() {
      if (this.highlightButton) {
        this.highlightButton.remove();
        this.highlightButton = null;
      }
      const selection = window.getSelection();
      if (!selection.rangeCount || selection.isCollapsed) return;
      const range = selection.getRangeAt(0);
      const rect = range.getBoundingClientRect();
      if (rect.width === 0 && rect.height === 0) return;
      const btn = createhighlightBotton(rect);
      this.highlightButton = btn;
      btn.onclick = () => {
        this.highlightSelectionWithDefaultColor();
        btn.remove();
        this.highlightButton = null;
      };
    }
    highlightSelectionWithDefaultColor() {
      try {
        const selection = window.getSelection();
        if (!selection || !selection.rangeCount || selection.isCollapsed) {
          console.log("[debug] \u6CA1\u6709\u6709\u6548\u7684\u9009\u533A");
          return;
        }
        const range = selection.getRangeAt(0);
        const selectedText = selection.toString().trim();
        if (selectedText.length === 0) return;
        if (this.isAlreadyHighlighted(range)) {
          this.showNotification("\u8BE5\u6587\u672C\u5DF2\u7ECF\u9AD8\u4EAE\u8FC7\u4E86");
          selection.removeAllRanges();
          return;
        }
        const groupId = "note-group-" + Date.now() + "-" + Math.floor(Math.random() * 1e4);
        this._currentHighlightGroupId = groupId;
        this.wrapRangeWithSpan(range, this.createHighlightSpan(groupId));
        selection.removeAllRanges();
        const highlightElement2 = document.querySelector('.html-note-highlight[data-group-id="' + groupId + '"]');
        if (highlightElement2) {
          storageHighlight(highlightElement2, window.location.href);
        } else {
          console.error(`highlightElement is null for groupId: ${groupId}`);
        }
      } catch (error) {
        console.error("\u9AD8\u4EAE\u6587\u672C\u65F6\u51FA\u9519:", error);
        this.showNotification("\u9AD8\u4EAE\u5931\u8D25\uFF08\u53EF\u80FD\u9009\u4E2D\u5185\u5BB9\u7ED3\u6784\u590D\u6742\uFF09");
      }
    }
    /**
     * 创建高亮span元素（使用默认颜色）
     * @param {string} groupId - 高亮组的ID，用于批量操作
     * @returns {HTMLElement} 创建的高亮span元素
     */
    createHighlightSpan(groupId) {
      const highlightSpan = document.createElement("span");
      highlightSpan.className = "html-note-highlight";
      highlightSpan.setAttribute("data-note-id", `note-${++this.noteCounter}`);
      highlightSpan.setAttribute("data-note", "");
      highlightSpan.setAttribute("data-timestamp", Date.now().toString());
      const color = getDefaultColor();
      highlightSpan.style.backgroundColor = color;
      highlightSpan.setAttribute("data-color", color);
      if (groupId) highlightSpan.setAttribute("data-group-id", groupId);
      return highlightSpan;
    }
    wrapRangeWithSpan(range, highlightSpan) {
      try {
        const groupId = highlightSpan.getAttribute("data-group-id");
        if (this.isCrossBlockSelection(range)) {
          const color = highlightSpan.getAttribute("data-color") || getDefaultColor();
          this.wrapCrossBlockSelection(range, color, groupId);
        } else {
          const contents = range.extractContents();
          highlightSpan.appendChild(contents);
          range.insertNode(highlightSpan);
        }
        this.cleanupEmptyNodes(highlightSpan);
      } catch (error) {
        console.error("wrapRangeWithSpan \u62A5\u9519:", error);
        throw error;
      }
    }
    isCrossBlockSelection(range) {
      const startContainer = range.startContainer;
      const endContainer = range.endContainer;
      if (startContainer === endContainer) {
        return false;
      }
      const nodes2 = [];
      let node = startContainer;
      while (node && node !== endContainer.nextSibling) {
        if (node.nodeType === Node.ELEMENT_NODE) {
          nodes2.push(node);
        }
        node = this.getNextNode(node, endContainer);
      }
      const blockElements = nodes2.filter(
        (node2) => this.isBlockElement(node2)
      );
      if (blockElements.length === 1) {
        const blockElement = blockElements[0];
        const startNode = range.startContainer;
        const endNode = range.endContainer;
        if (startNode !== endNode) {
          return true;
        }
      }
      return blockElements.length > 1;
    }
    isBlockElement(element) {
      const blockTags2 = ["DIV", "P", "H1", "H2", "H3", "H4", "H5", "H6", "SECTION", "ARTICLE", "HEADER", "FOOTER", "MAIN", "ASIDE", "NAV", "BLOCKQUOTE", "PRE", "LI", "DT", "DD"];
      return blockTags2.includes(element.tagName);
    }
    getNextNode(node, endNode) {
      if (node === endNode) return null;
      if (node.firstChild) {
        return node.firstChild;
      }
      while (node) {
        if (node.nextSibling) {
          return node.nextSibling;
        }
        node = node.parentNode;
      }
      return null;
    }
    wrapCrossBlockSelection(range, color = null, groupId) {
      if (!color) {
        color = getDefaultColor();
      }
      console.log("[debug] wrapCrossBlockSelection \u7528\u7684 color:", color);
      try {
        const textNodes = this.getTextNodesInRange(range);
        if (textNodes.length === 0) {
          this.fallbackHighlight(range, color);
          return;
        }
        const highlightSpans = [];
        textNodes.forEach(({ node, startOffset, endOffset }) => {
          if (startOffset === endOffset) return;
          const textContent = node.textContent;
          const selectedText = textContent.substring(startOffset, endOffset);
          if (selectedText.trim()) {
            const highlightSpan = createHighlightSpanWithColor(color, groupId, ++this.noteCounter);
            highlightSpan.textContent = selectedText;
            const beforeText = textContent.substring(0, startOffset);
            const afterText = textContent.substring(endOffset);
            if (beforeText) {
              const beforeNode = document.createTextNode(beforeText);
              node.parentNode.insertBefore(beforeNode, node);
            }
            node.parentNode.insertBefore(highlightSpan, node.nextSibling);
            highlightSpans.push(highlightSpan);
            if (afterText) {
              const afterNode = document.createTextNode(afterText);
              node.parentNode.insertBefore(afterNode, highlightSpan.nextSibling);
            }
            node.parentNode.removeChild(node);
          }
        });
        this.mergeAdjacentHighlights(highlightSpans);
      } catch (error) {
        console.error("\u8DE8\u5757\u7EA7\u5143\u7D20\u9AD8\u4EAE\u5931\u8D25\uFF0C\u5C1D\u8BD5\u5907\u7528\u65B9\u6CD5:", error);
        this.fallbackHighlight(range, color);
      }
    }
    getTextNodesInRange(range) {
      const textNodes = [];
      const { startContainer, endContainer, startOffset, endOffset } = range;
      const ancestor = range.commonAncestorContainer;
      const walker = document.createTreeWalker(
        ancestor.nodeType === 1 ? ancestor : ancestor.parentNode,
        NodeFilter.SHOW_TEXT,
        {
          acceptNode: (node2) => {
            if (!node2.textContent.trim()) return NodeFilter.FILTER_REJECT;
            const nodeRange = document.createRange();
            nodeRange.selectNodeContents(node2);
            if (nodeRange.compareBoundaryPoints(Range.END_TO_START, range) <= 0 && nodeRange.compareBoundaryPoints(Range.START_TO_END, range) >= 0) {
              return NodeFilter.FILTER_ACCEPT;
            }
            return NodeFilter.FILTER_REJECT;
          }
        },
        false
      );
      let node;
      while (node = walker.nextNode()) {
        let nodeStart = 0;
        let nodeEnd = node.textContent.length;
        if (node === startContainer) nodeStart = startOffset;
        if (node === endContainer) nodeEnd = endOffset;
        if (nodeStart < nodeEnd) {
          textNodes.push({ node, startOffset: nodeStart, endOffset: nodeEnd });
        }
      }
      return textNodes;
    }
    getAllTextNodes(element) {
      const textNodes = [];
      const walker = document.createTreeWalker(
        element,
        NodeFilter.SHOW_TEXT,
        null,
        false
      );
      let node;
      while (node = walker.nextNode()) {
        textNodes.push(node);
      }
      return textNodes;
    }
    fallbackHighlight(range, color) {
      const selectedText = range.toString();
      if (!selectedText.trim()) return;
      if (!color) {
        color = getDefaultColor();
      }
      const textNode = document.createTextNode(selectedText);
      const highlightSpan = createHighlightSpanWithColor(color, this._currentHighlightGroupId, ++this.noteCounter);
      highlightSpan.appendChild(textNode);
      range.deleteContents();
      range.insertNode(highlightSpan);
    }
    getNodesInRange(range) {
      const nodes2 = [];
      const startContainer = range.startContainer;
      const endContainer = range.endContainer;
      if (startContainer === endContainer) {
        nodes2.push(startContainer);
        return nodes2;
      }
      let node = startContainer;
      const endNode = endContainer.nextSibling;
      while (node && node !== endNode) {
        nodes2.push(node);
        node = this.getNextNode(node, endContainer);
      }
      return nodes2;
    }
    mergeAdjacentHighlights(highlightSpans) {
      for (let i = 0; i < highlightSpans.length - 1; i++) {
        const current = highlightSpans[i];
        const next = highlightSpans[i + 1];
        if (current.nextSibling === next) {
          current.appendChild(next);
          next.parentNode.removeChild(next);
          highlightSpans.splice(i + 1, 1);
          i--;
        }
      }
    }
    cleanupEmptyNodes(element) {
      const walker = document.createTreeWalker(
        element,
        NodeFilter.SHOW_TEXT,
        null,
        false
      );
      const nodesToRemove = [];
      let node;
      while (node = walker.nextNode()) {
        if (node.textContent.trim() === "") {
          nodesToRemove.push(node);
        }
      }
      nodesToRemove.forEach((node2) => {
        if (node2.parentNode) {
          node2.parentNode.removeChild(node2);
        }
      });
    }
    isAlreadyHighlighted(range) {
      let node = range.startContainer;
      while (node && node !== range.endContainer) {
        if (node.nodeType === Node.ELEMENT_NODE && node.classList && node.classList.contains("html-note-highlight")) {
          return true;
        }
        node = node.nextSibling || node.parentNode;
      }
      return false;
    }
    /**
     * 为高亮元素显示工具栏
     * @param {HTMLElement} highlightElement - 要高亮显示的元素
     * @param {string} groupId - 高亮组的ID，用于批量操作同组高亮
     */
    showToolbarForHighlight(highlightElement2, groupId, mouseEvent) {
      document.querySelectorAll(".html-note-toolbar-float, .note-editor, .color-picker-float").forEach((el) => el.remove());
      const toolbar = document.createElement("div");
      toolbar.className = "html-note-toolbar-float";
      let left, top;
      const rect = highlightElement2.getBoundingClientRect();
      const scrollX = window.pageXOffset || document.documentElement.scrollLeft;
      const scrollY = window.pageYOffset || document.documentElement.scrollTop;
      if (mouseEvent) {
        left = mouseEvent.clientX + scrollX - 90;
        top = mouseEvent.clientY + scrollY - 50;
      } else {
        left = rect.left + scrollX + rect.width / 2 - 90;
        top = rect.top + scrollY - 50;
      }
      toolbar.style.left = `${left}px`;
      toolbar.style.top = `${top}px`;
      document.body.appendChild(toolbar);
      requestAnimationFrame(() => {
        toolbar.classList.add("show");
      });
      const colorBtn = document.createElement("button");
      colorBtn.className = "toolbar-float-btn";
      colorBtn.title = "\u66F4\u6539\u989C\u8272";
      colorBtn.innerHTML = '<svg width="22" height="22" viewBox="0 0 22 22"><rect x="3" y="3" width="16" height="16" rx="5" fill="' + (highlightElement2.getAttribute("data-color") || this.defaultColor) + '"/></svg>';
      colorBtn.onclick = (ev) => {
        ev.stopPropagation();
        this.showColorPickerForHighlight(highlightElement2, toolbar);
      };
      const copyBtn = document.createElement("button");
      copyBtn.className = "toolbar-float-btn";
      copyBtn.title = "\u590D\u5236\u6587\u672C";
      copyBtn.innerHTML = '<svg width="22" height="22" viewBox="0 0 22 22"><rect x="6" y="6" width="10" height="10" rx="2" fill="#fff" stroke="#bfc4d1" stroke-width="1.5"/><rect x="3" y="3" width="10" height="10" rx="2" fill="none" stroke="#bfc4d1" stroke-width="1.5"/></svg>';
      copyBtn.onclick = (ev) => {
        ev.stopPropagation();
        let text = "";
        if (groupId) {
          document.querySelectorAll('.html-note-highlight[data-group-id="' + groupId + '"]').forEach((span) => {
            text += span.textContent;
          });
        } else {
          text = highlightElement2.textContent;
        }
        navigator.clipboard.writeText(text);
        this.showNotification("\u5DF2\u590D\u5236\u9AD8\u4EAE\u6587\u672C");
      };
      const noteBtn = document.createElement("button");
      noteBtn.className = "toolbar-float-btn";
      noteBtn.title = "\u6DFB\u52A0/\u7F16\u8F91\u7B14\u8BB0";
      noteBtn.innerHTML = '<svg width="22" height="22" viewBox="0 0 22 22"><rect x="4" y="4" width="14" height="14" rx="4" fill="#fff" stroke="#bfc4d1" stroke-width="1.5"/><text x="11" y="16" text-anchor="middle" font-size="12" fill="#bfc4d1">"</text></svg>';
      noteBtn.onclick = (ev) => {
        ev.stopPropagation();
        chrome.runtime.sendMessage({
          type: "add_noteCard_to_mindMap",
          pageUrl: window.location.href,
          groupId
        });
      };
      const delBtn = document.createElement("button");
      delBtn.className = "toolbar-float-btn";
      delBtn.title = "\u5220\u9664\u9AD8\u4EAE";
      delBtn.innerHTML = '<svg width="22" height="22" viewBox="0 0 22 22"><rect x="5" y="5" width="12" height="12" rx="3" fill="#fff" stroke="#e57373" stroke-width="1.5"/><line x1="8" y1="8" x2="14" y2="14" stroke="#e57373" stroke-width="2"/><line x1="14" y1="8" x2="8" y2="14" stroke="#e57373" stroke-width="2"/></svg>';
      delBtn.onclick = (ev) => {
        ev.stopPropagation();
        if (groupId) {
          document.querySelectorAll('.html-note-highlight[data-group-id="' + groupId + '"]').forEach((span) => {
            this.removeHighlight(span);
          });
        } else {
          this.removeHighlight(highlightElement2);
        }
        toolbar.remove();
        document.querySelectorAll(".note-editor").forEach((el) => el.remove());
        document.querySelectorAll(".color-picker-float").forEach((el) => el.remove());
        if (this._toolbarCloseHandler) {
          document.removeEventListener("mousedown", this._toolbarCloseHandler);
          this._toolbarCloseHandler = null;
        }
        this.showNotification("\u9AD8\u4EAE\u5DF2\u5220\u9664");
      };
      toolbar.append(colorBtn, copyBtn, noteBtn, delBtn);
      if (this._toolbarCloseHandler) {
        document.removeEventListener("mousedown", this._toolbarCloseHandler);
      }
      this._toolbarCloseHandler = (ev) => {
        const isInToolbar = toolbar.contains(ev.target);
        const isInEditor = ev.target.closest(".note-editor");
        const isInColorPicker = ev.target.closest(".color-picker-float");
        if (!isInToolbar && !isInEditor && !isInColorPicker) {
          toolbar.remove();
          document.querySelectorAll(".note-editor").forEach((el) => el.remove());
          console.log(`[debug] fuck u ')}`);
          document.querySelectorAll(".color-picker-float").forEach((el) => el.remove());
          document.removeEventListener("mousedown", this._toolbarCloseHandler);
          this._toolbarCloseHandler = null;
        }
      };
      document.addEventListener("mousedown", this._toolbarCloseHandler);
    }
    /**
     * 显示颜色选择器浮窗
     * @param {HTMLElement} highlightElement - 要高亮显示的元素
     * @param {HTMLElement} toolbar - 工具栏元素，用于定位颜色选择器
     */
    showColorPickerForHighlight(highlightElement2, toolbar) {
      document.querySelectorAll(".color-picker-float").forEach((el) => el.remove());
      const picker = document.createElement("div");
      picker.className = "color-picker-float";
      console.log("[debug] showColorPickerForHighlight \u7528\u7684 toolbar:");
      picker.style.left = toolbar.style.left;
      picker.style.top = `${parseInt(toolbar.style.top) - 56}px`;
      const colors = ["#f7c2d6", "#ffeb3b", "#b2f7ef", "#ffd6e0", "#c2e9fb", "#fff9c4"];
      const groupId = highlightElement2.getAttribute("data-group-id");
      colors.forEach((color) => {
        const swatch = document.createElement("div");
        swatch.className = "color-swatch-float";
        swatch.style.background = color;
        if (highlightElement2.getAttribute("data-color") === color) {
          swatch.style.outline = "2px solid #333";
        }
        if (color === this.defaultColor) {
          const checkmark = document.createElement("div");
          checkmark.style.position = "absolute";
          checkmark.style.top = "2px";
          checkmark.style.right = "2px";
          checkmark.style.width = "8px";
          checkmark.style.height = "8px";
          checkmark.style.background = "#333";
          checkmark.style.borderRadius = "50%";
          checkmark.style.display = "flex";
          checkmark.style.alignItems = "center";
          checkmark.style.justifyContent = "center";
          checkmark.innerHTML = "\u2713";
          checkmark.style.color = "#fff";
          checkmark.style.fontSize = "6px";
          checkmark.style.fontWeight = "bold";
          swatch.style.position = "relative";
          swatch.appendChild(checkmark);
        }
        swatch.onclick = (ev) => {
          ev.stopPropagation();
          if (groupId) {
            changeColorbyGroupId(color, groupId);
          } else {
            highlightElement2.style.setProperty("background-color", color, "important");
            highlightElement2.setAttribute("data-color", color);
          }
          picker.remove();
          const colorBtnSvg = toolbar.querySelector("button.toolbar-float-btn:first-child svg rect");
          if (colorBtnSvg) {
            colorBtnSvg.setAttribute("fill", color);
          }
        };
        let hoverTimer;
        const setDefaultBtn = document.createElement("div");
        setDefaultBtn.className = "set-default-btn";
        setDefaultBtn.innerHTML = "\u2713";
        setDefaultBtn.addEventListener("mouseenter", () => {
          clearTimeout(hoverTimer);
        });
        setDefaultBtn.addEventListener("mouseleave", () => {
          hoverTimer = setTimeout(() => {
            if (swatch.contains(setDefaultBtn)) {
              swatch.removeChild(setDefaultBtn);
            }
          }, 100);
        });
        swatch.addEventListener("mouseenter", () => {
          if (!swatch.contains(setDefaultBtn)) {
            swatch.appendChild(setDefaultBtn);
          }
          clearTimeout(hoverTimer);
        });
        swatch.addEventListener("mouseleave", () => {
          hoverTimer = setTimeout(() => {
            if (swatch.contains(setDefaultBtn)) {
              swatch.removeChild(setDefaultBtn);
            }
          }, 100);
        });
        setDefaultBtn.onclick = (ev) => {
          ev.stopPropagation();
          this.setDefaultColor(color);
          this.showNotification("\u5DF2\u8BBE\u4E3A\u9ED8\u8BA4\u989C\u8272");
          picker.remove();
          swatch.removeChild(setDefaultBtn);
        };
        picker.appendChild(swatch);
      });
      document.body.appendChild(picker);
      setTimeout(() => {
        document.addEventListener("mousedown", function closePicker(ev) {
          const isInPicker = picker.contains(ev.target);
          const isInToolbar = ev.target.closest(".html-note-toolbar-float");
          const isInEditor = ev.target.closest(".note-editor");
          if (!isInPicker && !isInToolbar && !isInEditor) {
            picker.remove();
            document.removeEventListener("mousedown", closePicker);
          }
        });
      }, 10);
    }
    removeHighlight(highlightElement2) {
      const contents = [];
      let child = highlightElement2.firstChild;
      while (child) {
        const nextChild = child.nextSibling;
        contents.push(child);
        child = nextChild;
      }
      const parent = highlightElement2.parentNode;
      contents.forEach((node) => {
        parent.insertBefore(node, highlightElement2);
      });
      parent.removeChild(highlightElement2);
      this.normalizeTextNodes(parent);
      if (this._toolbarCloseHandler) {
        document.removeEventListener("mousedown", this._toolbarCloseHandler);
        this._toolbarCloseHandler = null;
      }
      remove_all_highlightElementStorage(window.location.href);
    }
    normalizeTextNodes(element) {
      const walker = document.createTreeWalker(
        element,
        NodeFilter.SHOW_TEXT,
        null,
        false
      );
      const textNodes = [];
      let node;
      while (node = walker.nextNode()) {
        textNodes.push(node);
      }
      for (let i = 0; i < textNodes.length - 1; i++) {
        const current = textNodes[i];
        const next = textNodes[i + 1];
        if (current.parentNode === next.parentNode && current.nextSibling === next) {
          current.textContent += next.textContent;
          next.parentNode.removeChild(next);
          textNodes.splice(i + 1, 1);
          i--;
        }
      }
    }
    restoreHighlights() {
      const highlights = document.querySelectorAll(".html-note-highlight");
      highlights.forEach((highlight) => {
        const note = highlight.getAttribute("data-note");
        if (note) {
          highlight.title = note;
        }
      });
    }
    updateToolbarStatus() {
      const toggleBtn = document.querySelector(".toggle-btn");
      if (toggleBtn) {
        if (this.isActive) {
          toggleBtn.classList.add("active");
          toggleBtn.querySelector(".toolbar-text").textContent = "\u9AD8\u4EAE\u5F00\u542F";
        } else {
          toggleBtn.classList.remove("active");
          toggleBtn.querySelector(".toolbar-text").textContent = "\u9AD8\u4EAE\u6A21\u5F0F";
        }
      }
    }
    // showStats() {
    //   const highlights = document.querySelectorAll('.html-note-highlight');
    //   const notes = Array.from(highlights).filter(h => h.getAttribute('data-note'));
    //   const stats = `
    //     总高亮数: ${highlights.length}
    //     有笔记的高亮: ${notes.length}
    //     无笔记的高亮: ${highlights.length - notes.length}
    //   `;
    //   alert(stats);
    // }
    showNotification(message) {
      const existingNotification = document.querySelector(".html-note-notification");
      if (existingNotification) {
        existingNotification.remove();
      }
      const notification = document.createElement("div");
      notification.className = "html-note-notification";
      notification.textContent = message;
      document.body.appendChild(notification);
      setTimeout(() => {
        if (notification.parentNode) {
          notification.remove();
        }
      }, 3e3);
    }
  };
  var highlighter = new HTMLNoteHighlighter();
  window.HTMLNoteHighlighter = highlighter;
  window.HTMLNoteHighlighter.showToolbarForHighlight = highlighter.showToolbarForHighlight.bind(highlighter);
  function createHighlightSpanWithColor(color, groupId, noteCounter) {
    if (!color) {
      color = getDefaultColor();
    }
    const highlightSpan = document.createElement("span");
    highlightSpan.className = "html-note-highlight";
    highlightSpan.setAttribute("data-note-id", `note-${noteCounter}`);
    highlightSpan.setAttribute("data-note", "");
    highlightSpan.setAttribute("data-timestamp", Date.now().toString());
    highlightSpan.style.backgroundColor = color;
    highlightSpan.setAttribute("data-color", color);
    if (groupId) highlightSpan.setAttribute("data-group-id", groupId);
    return highlightSpan;
  }
  function changeColorbyGroupId(color, groupId) {
    const highlightElements = document.querySelectorAll(`.html-note-highlight[data-group-id="${groupId}"]`);
    if (highlightElements.length === 0) {
      console.warn(`\u672A\u627E\u5230groupId\u4E3A"${groupId}"\u7684\u9AD8\u4EAE\u5143\u7D20`);
      return;
    }
    highlightElements.forEach((highlightElement2) => {
      highlightElement2.style.setProperty("background-color", color, "important");
      highlightElement2.setAttribute("data-color", color);
    });
    update_storage_color(groupId, color);
  }
  function createhighlightBotton(rect) {
    const btn = document.createElement("button");
    btn.className = "html-note-highlight-btn";
    btn.title = "\u9AD8\u4EAE\u6240\u9009\u6587\u672C";
    btn.innerHTML = '<svg width="20" height="20" viewBox="0 0 20 20"><rect x="3" y="14" width="14" height="3" rx="1.5" fill="#f7c2d6"/><rect x="6" y="3" width="8" height="10" rx="2" fill="#333"/></svg>';
    btn.style.position = "fixed";
    btn.style.left = `${rect.left + rect.width / 2 - 16}px`;
    btn.style.top = `${rect.top - 36}px`;
    btn.style.zIndex = 10010;
    btn.style.background = "#fff";
    btn.style.border = "1px solid #eee";
    btn.style.borderRadius = "6px";
    btn.style.boxShadow = "0 2px 8px rgba(0,0,0,0.12)";
    btn.style.padding = "4px";
    btn.style.cursor = "pointer";
    btn.style.display = "flex";
    btn.style.alignItems = "center";
    btn.style.justifyContent = "center";
    btn.style.transition = "box-shadow 0.2s";
    btn.onmouseenter = () => btn.style.boxShadow = "0 4px 16px rgba(0,0,0,0.18)";
    btn.onmouseleave = () => btn.style.boxShadow = "0 2px 8px rgba(0,0,0,0.12)";
    document.body.appendChild(btn);
    return btn;
  }
  function highlightElement_mouseOverHandler(e) {
    if (e.target.classList.contains("html-note-highlight")) {
      const groupId = e.target.getAttribute("data-group-id");
      if (groupId) {
        const highlightElements = document.querySelectorAll(`.html-note-highlight[data-group-id="${groupId}"]`);
        highlightElements.forEach((highlightElement2) => {
          highlightElement2.classList.add("html-note-highlight-hover");
        });
      }
    }
  }
  function highlightElement_mouseOutHandler(e) {
    if (e.target.classList.contains("html-note-highlight")) {
      const groupId = e.target.getAttribute("data-group-id");
      if (groupId) {
        const highlightElements = document.querySelectorAll(`.html-note-highlight[data-group-id="${groupId}"]`);
        highlightElements.forEach((highlightElement2) => {
          highlightElement2.classList.remove("html-note-highlight-hover");
        });
      }
    }
  }
  function storageHighlight(highlightElement2, pageUrl) {
    const groupId = highlightElement2.getAttribute("data-group-id");
    const highlightElement_data2 = highlightElement_dataStructure(highlightElement2);
    if (!highlightElement_data2) {
      console.log(`highlightElement_dataStructure is null for highlightElement: ${highlightElement2}`);
      return;
    }
    chrome.storage.local.get(pageUrl, function(result) {
      let groupId_list = result[pageUrl];
      if (!groupId_list) {
        groupId_list = [groupId];
        console.log(`[debug] can not group id list : ${groupId_list}`);
      } else {
        groupId_list = update_groupId_list(groupId_list, groupId);
      }
      chrome.storage.local.set({
        [groupId]: highlightElement_data2,
        [pageUrl]: groupId_list
      });
    });
  }
  function highlightElement_data_hash(element) {
    const hash = import_crypto_js_min.default.SHA256(element.innerText).toString();
    return hash;
  }
  function highlightElement_data(highlightElement2) {
    const parentNode2 = highlightElement2.parentNode;
    if (parentNode2) {
      console.log(`[debug] parentNode: ${parentNode2.innerText}`);
      const hash_parentNode = highlightElement_data_hash(parentNode2);
      const hash_highlightElement = highlightElement_data_hash(highlightElement2);
      const index_highlightElement = parentNode2.innerText.indexOf(highlightElement2.innerText);
      console.log(`[debug] parentNode.innerText.26:${parentNode2.innerText.substring(index_highlightElement, index_highlightElement + highlightElement2.innerText.length)}`);
      console.log(`[debug] index_highlightElement: ${index_highlightElement}`);
      const color = highlightElement2.getAttribute("data-color") || getDefaultColor();
      return {
        hash_parentNode,
        index_highlightElement,
        highlightElement_text: highlightElement2.innerText,
        length: highlightElement2.innerText.length,
        highlightElement_tag: highlightElement2.tagName,
        parentNode_tag: parentNode2.tagName
      };
    } else {
      console.log(`[debug] parentNode is null for highlightElement: ${highlightElement2}`);
    }
  }
  function highlightElement_dataStructure(highlightElement2) {
    const groupId = highlightElement2.getAttribute("data-group-id");
    const highlightElements_group = [];
    if (groupId) {
      const highlightElements = document.querySelectorAll(`.html-note-highlight[data-group-id="${groupId}"]`);
      if (!highlightElements) {
        return null;
      }
      const note = highlightElements[0].getAttribute("data-note");
      highlightElements.forEach((highlightElement3) => {
        highlightElements_group.push(highlightElement_data(highlightElement3));
      });
      console.log(`[debug] type of highlightElements_group: ${Array.isArray(highlightElements_group)}`);
      console.log(`[debug] highlightElements_group: ${highlightElements_group}`);
      const color = highlightElements[0].getAttribute("data-color") || getDefaultColor();
      return {
        groupId,
        highlightElements: highlightElements_group,
        note,
        color
      };
    }
    return null;
  }
  function update_groupId_list(groupId_list, groupId) {
    console.log(`update_groupId_list: ${groupId_list}, ${groupId}`);
    if (!groupId_list) {
      return null;
    }
    if (groupId_list.length === 0) {
      groupId_list = [groupId];
      return groupId_list;
    }
    if (groupId_list.includes(groupId)) {
      return groupId_list;
    } else {
      groupId_list.push(groupId);
    }
    return groupId_list;
  }
  function load_groupId_list(pageUrl) {
    chrome.storage.local.get(pageUrl, function(result) {
      const groupId_list = result[pageUrl];
      if (groupId_list) {
        console.log(`load_groupId_list: ${groupId_list}`);
        load_groupId_list_Handler(groupId_list, pageUrl);
      } else {
        console.log(`load_groupId_list failed: ${pageUrl}`);
        return null;
      }
    });
  }
  function load_highilightElement_data_Structure(groupId, pageUrl) {
    console.log(`load_highlightElement_data_Structure:`);
    chrome.storage.local.get(groupId, function(result) {
      console.log(`[debug] length of result[groupId].highlightElements: ${result[groupId].highlightElements.length}`);
      for (const highlightElement_dataSet of result[groupId].highlightElements) {
        console.log(`[debug] highlightElement_dataSet: ${highlightElement_dataSet}`);
        const loose_flag = searchAndInsertHighlightElement(groupId, highlightElement_dataSet, result[groupId].note, result[groupId].color, null);
        if (!loose_flag) {
          console.log(`[debug] storage_loose_highlightElement: ${loose_flag}`);
          storage_loose_highlightElement(pageUrl, 1);
          break;
        }
      }
    });
  }
  function load_groupId_list_Handler(groupId_list, pageUrl) {
    if (groupId_list) {
      console.log(`[debug] groupId_list: ${groupId_list}`);
      groupId_list.forEach((groupId) => {
        load_highilightElement_data_Structure(groupId, pageUrl);
      });
    }
    show_loose_highlightElement(pageUrl);
  }
  function searchAndInsertHighlightElement(groupId, highlightElement_dataSet, note, color, next_priority_parentNode) {
    console.log(`[debug] load_highilightElement_data_Handler: ${highlightElement_dataSet}`);
    const parent_tag = highlightElement_dataSet.parentNode_tag;
    const all_elements = document.querySelectorAll(parent_tag);
    if (all_elements.length === 0) {
      console.log(`[debug] all_elements is empty for parent_tag: ${parent_tag}`);
      return false;
    }
    for (const element of all_elements) {
      const element_hash = highlightElement_data_hash(element);
      if (element_hash === highlightElement_dataSet.hash_parentNode) {
        const index_highlightElement = highlightElement_dataSet.index_highlightElement;
        const highlightElement_length = highlightElement_dataSet.length;
        const target_text = highlightElement_dataSet.highlightElement_text;
        console.log(`[debug] element.outerHTML: ${element.outerHTML}`);
        console.log(`[debug] target_text: ${target_text}`);
        if (element.innerText.substring(index_highlightElement, index_highlightElement + highlightElement_length).includes(target_text)) {
          for (const node of element.childNodes) {
            const target_node2 = find_textNode(node, target_text);
            if (target_node2 === null) {
              console.error(`[debug] target_node is null`);
              return false;
            }
            if (target_node2.textContent.includes(target_text)) {
              console.log(`[debug] target_node.textContent: ${target_node2.textContent}`);
              const index_target_text = target_node2.textContent.indexOf(target_text);
              insert_highlightElement(target_text, index_target_text, target_node2.textContent.length - index_target_text, color, groupId, target_node2, note);
              console.log(`[debug] target_node.textContent: ${target_node2.textContent}`);
              return true;
            } else {
              continue;
            }
          }
          const string_content = element.innerText;
          const text_node = document.createTextNode(string_content);
          for (const node of element.childNodes) {
            element.removeChild(node);
          }
          element.innerHTML = "";
          element.appendChild(text_node);
          console.log(`target_text in searchAndInsertHighlightElement: ${target_text}`);
          insert_highlightElement(target_text, text_node.textContent.indexOf(target_text), target_text.length, color, groupId, text_node, note);
          return true;
        } else {
          console.log(`[debug] target text :${target_text}`);
          console.error(`[debug] target_node.textContent.substring(index_highlightElement,index_highlightElement+highlightElement_length) is not equal to target_text: ${target_node.textContent.substring(index_highlightElement, index_highlightElement + highlightElement_length)}`);
          return false;
        }
      } else {
      }
    }
  }
  function getDefaultColor() {
    const storedColor = localStorage.getItem("html-note-default-color");
    return storedColor || "#ffeb3b";
  }
  function find_textNode(element, text) {
    if (!element) {
      return null;
    }
    if (element.nodeType === Node.TEXT_NODE) {
      return element;
    }
    const nodes2 = Array.from(element.childNodes);
    if (nodes2.length === 0) {
      return null;
    }
    for (const node of nodes2) {
      const found_node2 = find_textNode(node, text);
      if (found_node2) {
        return found_node2;
      }
    }
    return null;
  }
  function insert_highlightElement(target_text, index_highlightElement, highlightElement_length, color, groupId, target_node2, note) {
    const highlightSpan = createHighlightSpanWithColor(color, groupId, 0);
    highlightSpan.textContent = target_text;
    highlightSpan.setAttribute("data-note", note);
    console.log(`[debug] highlightSpan.getAttribute('data-note'): ${highlightSpan.getAttribute("data-note")}`);
    const element = target_node2.parentNode;
    if (!element) {
      console.error(`[debug] element is null`);
      return;
    }
    console.log(`[debug] element.querySelectorAll('data-group-id').length: ${element.querySelectorAll("data-group-id").length}`);
    if (index_highlightElement > 0 && element.querySelectorAll("data-group-id").length === 0) {
      const before_text = target_node2.textContent.substring(0, index_highlightElement);
      const before_node = document.createTextNode(before_text);
      element.insertBefore(before_node, target_node2);
    }
    highlightSpan.setAttribute("data-group-id", groupId);
    element.insertBefore(highlightSpan, target_node2);
    if (target_node2.textContent.indexOf(target_text) + target_text.length < target_node2.textContent.length) {
      const after_text = target_node2.textContent.substring(target_node2.textContent.indexOf(target_text) + target_text.length);
      const after_node = document.createTextNode(after_text);
      element.insertBefore(after_node, highlightSpan.nextSibling);
    }
    element.removeChild(target_node2);
  }
  function remove_all_highlightElementStorage(pageUrl) {
    chrome.storage.local.get(pageUrl, function(result) {
      if (result) {
        const groupId_list = result[pageUrl];
        if (groupId_list) {
          groupId_list.forEach((groupId) => {
            chrome.storage.local.remove(groupId, function(result2) {
              if (result2) {
                console.log(`[debug] remove_all_highlightElementStorage: ${result2}`);
              }
            });
          });
        }
      }
    });
    chrome.storage.local.remove(pageUrl, function(result) {
      if (result) {
        console.log(`[debug] remove_all_highlightElementStorage: ${result}`);
      }
    });
  }
  function storage_loose_highlightElement(pageUrl, loose_amount) {
    const string_loose_key = "loose_highlightElement" + pageUrl;
    chrome.storage.local.get(string_loose_key, function(result) {
      if (result) {
        const current_loose_amount = result[string_loose_key] + loose_amount;
        chrome.storage.local.set({
          [string_loose_key]: current_loose_amount
        });
      } else {
        chrome.storage.local.set({
          [string_loose_key]: 0
        });
      }
    });
  }
  function show_loose_highlightElement(pageUrl) {
    const string_loose_key = "loose_highlightElement" + pageUrl;
    chrome.storage.local.get(string_loose_key, function(result) {
      if (result) {
        if (result[string_loose_key] > 0) {
          console.log(`[debug] show_loose_highlightElement: ${result[string_loose_key]}`);
          window.showNotification(`[debug] show_loose_highlightElement: ${result[string_loose_key]}`);
        }
      }
    });
  }
  function update_storage_color(groupId, color) {
    chrome.storage.local.get(groupId, function(result) {
      if (result) {
        result[groupId].color = color;
        chrome.storage.local.set({
          [groupId]: result[groupId]
        });
      }
    });
  }
  function remove_content_editor() {
    const content_editor = document.querySelector(".note-editor");
    if (!content_editor) {
      return;
    }
    const groupId = content_editor.getAttribute("data-group-id");
    const textArea = document.querySelector("#editor");
    if (!textArea) {
      return;
    }
    const highlightElement2 = document.querySelector('.html-note-highlight[data-group-id="' + groupId + '"]');
    if (!highlightElement2) {
      return;
    }
    const tags = document.querySelector(".note-editor-tags");
    saveNotesContent(textArea, tags, groupId, window.location.href);
    document.querySelectorAll(".html-note-toolbar-float, .note-editor, .color-picker-float").forEach((el) => el.remove());
  }
})();
/*! Bundled license information:

mind-elixir/dist/MindElixir.js:
  (*! @viselect/vanilla v3.9.0 MIT | https://github.com/Simonwep/selection/tree/master/packages/vanilla *)
*/
