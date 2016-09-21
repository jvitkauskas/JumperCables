import { HammerGestureConfig } from '@angular/platform-browser';
import {HammerInstance} from "@angular/platform-browser/src/dom/events/hammer_gestures";

//For mobile events
export class HammerConfig extends HammerGestureConfig {

    options: any = {
        preventDefault: false
    };

    buildHammer(element: HTMLElement): HammerInstance {
        var mc = new Hammer(element, this.options);

        return mc;
    }
}