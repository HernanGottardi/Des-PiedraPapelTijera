// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"aHFy6":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "5c1b77e3b71e74eb";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        if (e.message) console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"h7u1C":[function(require,module,exports) {
var _state = require("./state");
var _texto = require("./components/texto");
var _boton = require("./components/boton");
var _lista = require("./components/lista");
var _rooterEjem = require("./routes/rooterEjem");
(function() {
    (0, _texto.initText)();
    (0, _boton.initBoton)();
    (0, _lista.initLista)();
    (0, _state.state).init();
    const contenedor = document.querySelector(".contenedorPrincipal");
    (0, _rooterEjem.initRouter)(contenedor);
})();

},{"./state":"1Yeju","./components/texto":"IRQVu","./components/boton":"iHb4h","./components/lista":"4BaDc","./routes/rooterEjem":"ADYG8"}],"1Yeju":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "state", ()=>state);
const state = {
    data: {
        history: []
    },
    listeners: [],
    conteo: {
        contadorGanadas: 0,
        contadorPerdidas: 0
    },
    init () {
        const localData = localStorage.getItem("historial-juego");
        if (localData === null) {
            console.log("El Historial NO existia");
            localStorage.setItem("historial-juego", JSON.stringify(this.data.history));
        } else {
            console.log("El Historial existia");
            const parsedHistory = JSON.parse(localData);
            this.data.history = parsedHistory;
        }
    },
    init_history (localStorage1) {
        console.log(localStorage1);
    },
    getConteo () {
        return this.conteo;
    },
    getHistory () {
        return this.data.history;
    },
    setHistory (play) {
        const currenHistory = this.getHistory();
        currenHistory.push(play);
        this.data.history = currenHistory;
        localStorage.setItem("historial-juego", JSON.stringify(currenHistory));
        this.ActualizarContadores();
        for (const cb of this.listeners)cb();
    },
    suscribe (callback) {
        this.listeners.push(callback);
    },
    ActualizarContadores () {
        let contadorGanadasActual = 0;
        let contadorPerdidasActual = 0;
        for (const h of this.data.history){
            // Caso ganar
            if (h.myPlay === "Papel" && h.computerPlay === "Piedra" || h.myPlay === "Piedra" && h.computerPlay === "Tijera" || h.myPlay === "Tijera" && h.computerPlay === "Papel") contadorGanadasActual++;
            else if (h.myPlay === "Piedra" && h.computerPlay === "Papel" || h.myPlay === "Tijera" && h.computerPlay === "Piedra" || h.myPlay === "Papel" && h.computerPlay === "Tijera") contadorPerdidasActual++;
        }
        this.conteo = {
            contadorGanadas: contadorGanadasActual,
            contadorPerdidas: contadorPerdidasActual
        };
    },
    ultimoGanador () {
        const partidas = state.getHistory();
        const cantidadPartidas = partidas.length;
        const ganador = partidas[cantidadPartidas - 1];
        if (ganador.myPlay === "Papel" && ganador.computerPlay === "Piedra" || ganador.myPlay === "Piedra" && ganador.computerPlay === "Tijera" || ganador.myPlay === "Tijera" && ganador.computerPlay === "Papel") return "Jugador";
        else if (ganador.myPlay === "Piedra" && ganador.computerPlay === "Papel" || ganador.myPlay === "Tijera" && ganador.computerPlay === "Piedra" || ganador.myPlay === "Papel" && ganador.computerPlay === "Tijera") return "Maquina";
        else return "Maquina";
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"IRQVu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initText", ()=>initText);
function initText() {
    class Text extends HTMLElement {
        constructor(){
            super();
            this.tags = [
                "h1",
                "p"
            ];
            this.tag = "p";
            this.shadow = this.attachShadow({
                mode: "open"
            });
            this.tag = this.getAttribute("tag") || this.tag;
            this.render();
        }
        render() {
            const rootEl = document.createElement(this.tag);
            const style = document.createElement("style");
            style.innerHTML = `
                
                h1 
                { 
                    width: 308px;
                    font-size: 80px;
                    color: orange;
                    font-family: "Anta", sans-serif;
                    font-weight: 700;
                    font-style: normal;
                    margin: 0 auto;
                    margin-top: 50px;
                    text-align: center;
                    text-shadow: 3px 3px 4px rgba(0, 0, 0, 0.5); /* Definici\xf3n de la sombra */
                }

                h4
                {
                    width: 308px;
                    font-size: 40px;
                    color: red;
                    font-family: "Anta", sans-serif;
                    font-weight: 700;
                    font-style: normal;
                    margin: 0 auto;
                    margin-top: 50px;
                    text-align: center;
                    text-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5); /* Definici\xf3n de la sombra */
                }

                img 
                {
                    margin: 0 auto;
                }

                @media screen and (min-width: 1000px) {
                    h1 {
                        width: 750px;
                        margin-top: 130px;
                        text-shadow: 0.5vw 0.5vw 1vw rgba(0, 0, 0, 0.5);
                    }

                    h4 {
                        width: 750px;
                        margin-top: 5vh;
                        text-shadow: 0.7vw 0.7vw 1vw rgba(0, 0, 0, 0.5);
                    }

                    img {
                        width: 10%;
                    }
                }
            `;
            rootEl.textContent = this.textContent;
            this.shadow.appendChild(style);
            this.shadow.appendChild(rootEl);
        }
    }
    customElements.define("my-text", Text);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iHb4h":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initBoton", ()=>initBoton);
function initBoton() {
    class Boton extends HTMLElement {
        constructor(){
            super();
            this.render();
        }
        render() {
            const shadow = this.attachShadow({
                mode: "open"
            });
            const contenedor = document.createElement("div");
            const boton = document.createElement("button");
            boton.setAttribute("class", "botoncito");
            const style = document.createElement("style");
            style.innerHTML = `

                div 
                {
                    display: flex;
                    justify-content: center;  
                }

                .botoncito 
                {

                    background-color: #006CFC;
                    border: 10px solid #001997;
                    border-radius: 5px;

                    margin-top: 50px;
                    width: 300px;
                    padding: 15px 60px;

                    font-family: "Odibee Sans", sans-serif;
                    font-weight: 400;
                    font-style: normal;
                    color: white;
                    font-size: 45px;
                }

                @media screen and (min-width: 1000px) {
                    .botoncito 
                    {
                        width: 500px;
                    }
                }
            `;
            boton.textContent = this.textContent;
            contenedor.appendChild(boton);
            contenedor.appendChild(style);
            shadow.appendChild(contenedor);
        }
    }
    customElements.define("my-boton", Boton);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4BaDc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initLista", ()=>initLista);
var _state = require("../../src/state");
const ganar = require("fb484340dc5cb1e6");
const perder = require("bc3d439000794fa5");
function initLista() {
    class Lista extends HTMLElement {
        constructor(){
            super();
            this.shadow = this.attachShadow({
                mode: "open"
            });
        }
        connectedCallback() {
            (0, _state.state).suscribe(()=>{
                this.render();
            });
        }
        render() {
            const ganador = (0, _state.state).ultimoGanador();
            let r = "";
            if (ganador == "Jugador") r = ganar;
            else r = perder;
            const contadores = (0, _state.state).getConteo();
            console.log(contadores);
            const style = document.createElement("style");
            const div = document.createElement("div");
            div.setAttribute("class", "contenedor");
            style.innerHTML = `

                div
                {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }

                .cuadro 
                {
                    border: 7px solid white;
                    border-radius: 5px;
                    color:white;

                    font-family: "Odibee Sans", sans-serif;
                    font-weight: 400;
                    font-style: normal;
                    font-size: 45px;

                    width: 295px;
                }

                ul
                {
                    display: flex;
                    justify-content: flex-end;
                    flex-direction: column;
                }

                li 
                {
                    text-align: rigth;
                }

                .titulo
                {
                    text-align: center;
                }

                .imagenResultado
                {
                    width: 200px;
                    height: 200px;
                }

                @media screen and (min-width: 1000px)
                {
                    .cuadro 
                    {
                        width: 485px;
                    }

                    .imagenResultado
                    {
                        width: 250px;
                        height: 250px;
                    }
                }
                
            `;
            div.innerHTML = `
                    <img class="imagenResultado" src="${r}"/>
                    <div class="cuadro">
                        <my-text class="titulo" tag="h4">Score</my-text>
                        <ul>
                            <li> Vos: ${contadores.contadorGanadas} </li>           
                            <li> Maquina: ${contadores.contadorPerdidas} </li> 
                        </ul>
                    <div>
                              
            `;
            this.shadow.appendChild(style);
            this.shadow.appendChild(div);
        }
    }
    customElements.define("my-list", Lista);
}

},{"../../src/state":"1Yeju","fb484340dc5cb1e6":"4Epuu","bc3d439000794fa5":"aKG7X","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4Epuu":[function(require,module,exports) {
module.exports = require("b926531b5955de37").getBundleURL("7UhFu") + "ganar.f20393eb.png" + "?" + Date.now();

},{"b926531b5955de37":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
}
// TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"aKG7X":[function(require,module,exports) {
module.exports = require("76aa3e9f7deaa2f0").getBundleURL("7UhFu") + "perder.796acbdf.png" + "?" + Date.now();

},{"76aa3e9f7deaa2f0":"lgJ39"}],"ADYG8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// Container es un elemento HTML que le pase a la hora de invocarlo.
parcelHelpers.export(exports, "initRouter", ()=>initRouter);
var _inicio = require("../pages/inicio/inicio");
var _welcome = require("../pages/welcome/welcome");
var _partida = require("../pages/partida/partida");
var _resultado = require("../pages/resultado/resultado");
// Collection de rutas.
const routes = [
    {
        path: /\/bienvenida/,
        component: (0, _welcome.initPageWelcome)
    },
    {
        path: /\/inicio/,
        component: (0, _inicio.initPageInicio)
    },
    {
        path: /\/resultado/,
        component: (0, _resultado.initPagRes)
    },
    {
        path: /\/partida/,
        component: (0, _partida.initPagePartida)
    }
];
function initRouter(container) {
    // Cambia URL sin hacer refresh
    function goTo(path) {
        history.pushState({}, "", path);
        handlerRoute(path);
    }
    function handlerRoute(pathRecibida) {
        for (const r of routes)if (r.path.test(pathRecibida)) {
            const el = r.component({
                goTo: goTo
            });
            if (container != null) {
                if (container.firstChild) container.firstChild.remove();
                if (el != null) container.appendChild(el);
            }
        }
    }
    if (location.pathname == "/") goTo("/bienvenida");
    else goTo(location.pathname);
}

},{"../pages/inicio/inicio":"esR3G","../pages/welcome/welcome":"haaqF","../pages/partida/partida":"c1YJA","../pages/resultado/resultado":"jNV5B","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"esR3G":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initPageInicio", ()=>initPageInicio);
const papel = require("fdf7b736e4369d86");
const piedra = require("6801e04299d50567");
const tijera = require("eeb05be3836ab719");
function initPageInicio(params) {
    const div = document.createElement("div");
    div.setAttribute("class", "contenedorPrin");
    const style = document.createElement("style");
    style.innerHTML = `

        
        .contenedorImagenes
        {
            display:flex;
            justify-content: center;
        }

        .imgMov
        {
            width: 100px;
            heigth: 100px;
            margin-top: 50px;
            padding: 0 20px;
        }

        
        @media screen and (min-width: 1000px)
        {
            .contenedorImagenes 
            {
                max-width: 1000px; 
            }

            .imgMov
            {
                width: 150px;
            }

            .contenedorPrin
            {
                margin-top: 50px;
            }
        }


    `;
    div.innerHTML = `
        <my-text tag="h4">Presion\xe1 jugar
        y eleg\xed: piedra, papel o tijera antes de que pasen los 3 segundos.</my-text>
        <my-boton class="BotonJugar">\xa1Jugar!</my-boton>

        <div class="contenedorImagenes"> 
            <img class= "imgMov papel" src="${papel}" alt="Movimientos "/>
            <img class= "imgMov piedra" src="${piedra}" alt="Movimientos"/>
            <img class= "imgMov tijera" src="${tijera}" alt="Movimientos"/>
        </div>

    `;
    const boton = div.querySelector(".BotonJugar");
    if (boton != null) boton.addEventListener("click", ()=>{
        params.goTo("/partida");
    });
    div.appendChild(style);
    return div;
}

},{"fdf7b736e4369d86":"brq0R","6801e04299d50567":"ahMbM","eeb05be3836ab719":"5RLXy","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"brq0R":[function(require,module,exports) {
module.exports = require("c82aa9887ea8991b").getBundleURL("7UhFu") + "papel.7e4765e7.png" + "?" + Date.now();

},{"c82aa9887ea8991b":"lgJ39"}],"ahMbM":[function(require,module,exports) {
module.exports = require("5060a788af7d1f1").getBundleURL("7UhFu") + "piedra.dbe546e3.png" + "?" + Date.now();

},{"5060a788af7d1f1":"lgJ39"}],"5RLXy":[function(require,module,exports) {
module.exports = require("aed99fcb0fa27c3b").getBundleURL("7UhFu") + "tijera.d3d2f5f9.png" + "?" + Date.now();

},{"aed99fcb0fa27c3b":"lgJ39"}],"haaqF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initPageWelcome", ()=>initPageWelcome);
const papel = require("2c8a71afdcff552f");
const piedra = require("58fb6d745fc5b8a7");
const tijera = require("b774c1eadca1e9a0");
function initPageWelcome(params) {
    const div = document.createElement("div");
    div.setAttribute("class", "contenedor");
    const style = document.createElement("style");
    style.innerHTML = `
        .contenedor {
            wdith: 600px;
            margin: 0 auto;
            padding: 0 20px;
        }

        my-text
        {
            text-align: center;
        }

        .imgMov
        {
            width: 100px;
            heigth: 100px;
            margin-top: 50px;
            padding: 0 20px;
        }

        .imagenes
        {
            display:flex;
            justify-content: center;
        }

        @media screen and (min-width: 1000px)
            .contenedor {
                max-width: 1000px; 
            }
        }

    `;
    div.innerHTML = `

        <my-text tag="h1">Piedra, Papel o Tijera</my-text>
        <my-boton class="boton">Empezar</my-boton>

        <div class="imagenes">
            <img class= "imgMov" src="${papel}" alt="Movimientos"/>
            <img class= "imgMov" src="${piedra}" alt="Movimientos"/>
            <img class= "imgMov" src="${tijera}" alt="Movimientos"/>
        <div>
    `;
    const boton = div.querySelector(".boton");
    if (boton != null) boton.addEventListener("click", ()=>{
        params.goTo("/inicio");
    });
    div.appendChild(style);
    return div;
}

},{"2c8a71afdcff552f":"brq0R","58fb6d745fc5b8a7":"ahMbM","b774c1eadca1e9a0":"5RLXy","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"c1YJA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initPagePartida", ()=>initPagePartida);
var _state = require("../../../src/state");
const papel = require("951eafa61547f7ba");
const piedra = require("192f1d6b275a9776");
const tijera = require("9324d8a369c2b841");
function initPagePartida(params) {
    let contador = 3;
    const div = document.createElement("div");
    div.setAttribute("class", "contenedorPrin");
    const style = document.createElement("style");
    style.innerHTML = `

        
        .contenedorImagenes
        {
            display: flex;
            justify-content: center;
        }

        .imgMov
        {
            width: 100px;
            heigth: 100px;
            margin-top: 50px;
            padding: 0 20px;
        }

        
        @media screen and (min-width: 1000px)
        {
            .contenedorImagenes 
            {
                max-width: 1000px; 
            }

            .imgMov
            {
                width: 200px;
            }
        }


    `;
    div.innerHTML = `

        <h1 class="titulo" style="font-size: 70px; color: white; display: flex; justify-content: center; margin: 0px;">Tu turno</h1>
        <h1 class="informar" style="color: white; margin-top: 0px; font-size:80px; display: flex; justify-content: center;"> </h1>

        <div class="contenedorImagenes">
            <img class="movMaquina" style="display: none;"/>
            <img class= "imgMov Papel" src="${papel}" alt="Movimientos"/>
            <img class= "imgMov Piedra" src="${piedra}" alt="Movimientos"/>
            <img class= "imgMov Tijera" src="${tijera}" alt="Movimientos"/>
        </div>

    `;
    div.appendChild(style);
    const contenedorInforme = div.querySelector(".informar");
    const imgPapel = div.querySelector(".Papel");
    const imgPiedra = div.querySelector(".Piedra");
    const imgTijera = div.querySelector(".Tijera");
    const movs = [
        "Piedra",
        "Papel",
        "Tijera"
    ];
    const ganador = function(jugador, maquina) {
        return new Promise((resolve)=>{
            if (contenedorInforme != null) {
                const titulo = div.querySelector(".titulo");
                if (titulo != null) titulo.textContent = "";
                // Ganaste.
                if (jugador == "Papel" && maquina == "Piedra") contenedorInforme.textContent = "Ganaste!";
                if (jugador == "Piedra" && maquina == "Tijera") contenedorInforme.textContent = "Ganaste!";
                if (jugador == "Tijera" && maquina == "Papel") contenedorInforme.textContent = "Ganaste!";
                // Perdiste.
                if (maquina == "Papel" && jugador == "Piedra") contenedorInforme.textContent = "Perdiste!";
                if (maquina == "Piedra" && jugador == "Tijera") contenedorInforme.textContent = "Perdiste!";
                if (maquina == "Tijera" && jugador == "Papel") contenedorInforme.textContent = "Perdiste!";
                // Empate
                if (maquina == jugador) contenedorInforme.textContent = "Empate!";
                resolve("");
            }
        });
    };
    const resMaquina = function() {
        const numeroRandom = Math.floor(Math.random() * 3);
        return movs[numeroRandom];
    };
    const seleccionMaquina = function() {
        let maquina = "";
        const titulo = div.querySelector(".titulo");
        if (titulo != null) titulo.textContent = "Turno maquina";
        maquina = resMaquina();
        const imgMaquina = div.querySelector(".movMaquina");
        if (imgMaquina != null) {
            if (maquina == "Papel") {
                imgMaquina.setAttribute("src", papel);
                imgMaquina.style.display = "initial";
                imgMaquina.style.width = "200px";
                return "Papel";
            } else if (maquina == "Piedra") {
                imgMaquina.setAttribute("src", piedra);
                imgMaquina.style.display = "initial";
                imgMaquina.style.width = "200px";
                return "Piedra";
            } else if (maquina == "Tijera") {
                imgMaquina.setAttribute("src", tijera);
                imgMaquina.style.display = "initial";
                imgMaquina.style.width = "200px";
                return "Tijera";
            }
        }
    };
    const mostrarResultados = function() {
        params.goTo("/resultado");
    };
    const seleccion_jugador = async function(contenedor_informar) {
        return new Promise((resolve)=>{
            if (contenedor_informar != null) {
                const titulo = div.querySelector(".titulo");
                if (titulo != null) titulo.textContent = "Tu turno";
                // Le damos el tiempo al usuario para que elija.
                const intervalo = setInterval(()=>{
                    // Actualizo el informe/contador.
                    contenedor_informar.textContent = contador.toString();
                    const handleClick = (e)=>{
                        const imgPapel = div.querySelector(".Papel");
                        const imgPiedra = div.querySelector(".Piedra");
                        const imgTijera = div.querySelector(".Tijera");
                        const contenedorImg = div.querySelector(".contenedorImagenes");
                        const clase = e.target.classList.value;
                        if (clase.includes("Papel")) {
                            imgPiedra.style.display = "none";
                            imgTijera.style.display = "none";
                            imgPapel.style.width = "200px";
                            contenedorImg.style.flexDirection = "column";
                            contenedorImg.style.justifyContent = "center";
                            contenedorImg.style.alignItems = "center";
                            resolve("Papel");
                        } else if (clase.includes("Piedra")) {
                            imgPapel.style.display = "none";
                            imgTijera.style.display = "none";
                            imgPiedra.style.width = "200px";
                            contenedorImg.style.flexDirection = "column";
                            contenedorImg.style.justifyContent = "center";
                            contenedorImg.style.alignItems = "center";
                            resolve("Piedra");
                        } else if (clase.includes("Tijera")) {
                            imgPapel.style.display = "none";
                            imgPiedra.style.display = "none";
                            imgTijera.style.width = "200px";
                            contenedorImg.style.flexDirection = "column";
                            contenedorImg.style.justifyContent = "center";
                            contenedorImg.style.alignItems = "center";
                            resolve("Tijera");
                        }
                        clearInterval(intervalo);
                    };
                    // Agregar evento clic a cada imagen
                    imgPapel?.addEventListener("click", handleClick);
                    imgPiedra?.addEventListener("click", handleClick);
                    imgTijera?.addEventListener("click", handleClick);
                    if (contador === 0) {
                        clearInterval(intervalo);
                        params.goTo("/inicio");
                    }
                    contador--;
                }, 1000);
            }
        });
    };
    const movimientoJugador = seleccion_jugador(contenedorInforme);
    movimientoJugador.then((resJugador)=>{
        const resMaquina = seleccionMaquina();
        setTimeout(()=>{
            ganador(resJugador, resMaquina).then(()=>{
                mostrarResultados();
                (0, _state.state).setHistory({
                    computerPlay: resMaquina,
                    myPlay: resJugador
                });
            });
        }, 3000);
    });
    return div;
}

},{"../../../src/state":"1Yeju","951eafa61547f7ba":"brq0R","192f1d6b275a9776":"ahMbM","9324d8a369c2b841":"5RLXy","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jNV5B":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initPagRes", ()=>initPagRes);
const papel = require("f0a4e23f39b9353d");
const piedra = require("f1daffb41ce135e");
const tijera = require("feb653aeee225a69");
function initPagRes(params) {
    const div = document.createElement("div");
    div.innerHTML = `
        <my-list></my-list>
        <my-boton class="volverAJugar"> Volver a Jugar </my-boton>
    `;
    const boton = div.querySelector(".volverAJugar");
    boton?.addEventListener("click", ()=>{
        params.goTo("/partida");
    });
    return div;
}

},{"f0a4e23f39b9353d":"brq0R","f1daffb41ce135e":"ahMbM","feb653aeee225a69":"5RLXy","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["aHFy6","h7u1C"], "h7u1C", "parcelRequirec1dc")

//# sourceMappingURL=index.b71e74eb.js.map
