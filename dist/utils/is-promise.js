"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isPromise(instance) {
    return !!instance &&
        typeof instance.then === 'function' &&
        typeof instance.catch === 'function';
}
exports.isPromise = isPromise;
//# sourceMappingURL=is-promise.js.map