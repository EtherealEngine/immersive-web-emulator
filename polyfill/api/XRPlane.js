
// type XRPlaneOrientation = 'horizontal' | 'vertical'
import { mat4 } from 'gl-matrix';
import XRSpace from "webxr-polyfill/src/api/XRSpace";

export const PRIVATE = Symbol('@@webxr-polyfill/XRPlane');

export default class XRPlane {
    constructor(orientation = 'horizontal', polygon = [], lastChangedTime = 0) {
        const planeSpace = new XRSpace();
        planeSpace._baseMatrix = mat4.create();
        this[PRIVATE] = {
            planeSpace,
            orientation,
            polygon,
            lastChangedTime
        };
    }

    get planeSpace() {
        return this[PRIVATE].planeSpace;
    }

    get orientation() {
        return this[PRIVATE].orientation;
    }

    get polygon() {
        return this[PRIVATE].polygon;
    }

    get lastChangedTime() {
        return this[PRIVATE].lastChangedTime;
    }
}

