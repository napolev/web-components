import '../../stencil.core';
import { EventEmitter } from '../../stencil.core';
export declare class MyComponent {
    el: HTMLStencilElement;
    thumb: string;
    name: string;
    buttonText: string;
    buttonClicked: EventEmitter;
    scale: number;
    render(): JSX.Element[];
    togglePopup(e: any): void;
    emitbuttonClicked(e: any): void;
}
