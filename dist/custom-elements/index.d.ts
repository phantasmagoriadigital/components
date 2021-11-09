/* SubstrateDs custom elements bundle */

import type { Components, JSX } from "../types/components";

interface SuxBody extends Components.SuxBody, HTMLElement {}
export const SuxBody: {
  prototype: SuxBody;
  new (): SuxBody;
};

interface SuxButton extends Components.SuxButton, HTMLElement {}
export const SuxButton: {
  prototype: SuxButton;
  new (): SuxButton;
};

interface SuxCheckbox extends Components.SuxCheckbox, HTMLElement {}
export const SuxCheckbox: {
  prototype: SuxCheckbox;
  new (): SuxCheckbox;
};

interface SuxCode extends Components.SuxCode, HTMLElement {}
export const SuxCode: {
  prototype: SuxCode;
  new (): SuxCode;
};

interface SuxDetail extends Components.SuxDetail, HTMLElement {}
export const SuxDetail: {
  prototype: SuxDetail;
  new (): SuxDetail;
};

interface SuxFieldLabel extends Components.SuxFieldLabel, HTMLElement {}
export const SuxFieldLabel: {
  prototype: SuxFieldLabel;
  new (): SuxFieldLabel;
};

interface SuxHeading extends Components.SuxHeading, HTMLElement {}
export const SuxHeading: {
  prototype: SuxHeading;
  new (): SuxHeading;
};

interface SuxHelpText extends Components.SuxHelpText, HTMLElement {}
export const SuxHelpText: {
  prototype: SuxHelpText;
  new (): SuxHelpText;
};

interface SuxIcon extends Components.SuxIcon, HTMLElement {}
export const SuxIcon: {
  prototype: SuxIcon;
  new (): SuxIcon;
};

interface SuxMenuItem extends Components.SuxMenuItem, HTMLElement {}
export const SuxMenuItem: {
  prototype: SuxMenuItem;
  new (): SuxMenuItem;
};

interface SuxPicker extends Components.SuxPicker, HTMLElement {}
export const SuxPicker: {
  prototype: SuxPicker;
  new (): SuxPicker;
};

interface SuxRadio extends Components.SuxRadio, HTMLElement {}
export const SuxRadio: {
  prototype: SuxRadio;
  new (): SuxRadio;
};

interface SuxRadioGroup extends Components.SuxRadioGroup, HTMLElement {}
export const SuxRadioGroup: {
  prototype: SuxRadioGroup;
  new (): SuxRadioGroup;
};

interface SuxSwitch extends Components.SuxSwitch, HTMLElement {}
export const SuxSwitch: {
  prototype: SuxSwitch;
  new (): SuxSwitch;
};

interface SuxTag extends Components.SuxTag, HTMLElement {}
export const SuxTag: {
  prototype: SuxTag;
  new (): SuxTag;
};

interface SuxTextArea extends Components.SuxTextArea, HTMLElement {}
export const SuxTextArea: {
  prototype: SuxTextArea;
  new (): SuxTextArea;
};

interface SuxTextField extends Components.SuxTextField, HTMLElement {}
export const SuxTextField: {
  prototype: SuxTextField;
  new (): SuxTextField;
};

/**
 * Utility to define all custom elements within this package using the tag name provided in the component's source. 
 * When defining each custom element, it will also check it's safe to define by:
 *
 * 1. Ensuring the "customElements" registry is available in the global context (window).
 * 2. The component tag name is not already defined.
 *
 * Use the standard [customElements.define()](https://developer.mozilla.org/en-US/docs/Web/API/CustomElementRegistry/define) 
 * method instead to define custom elements individually, or to provide a different tag name.
 */
export declare const defineCustomElements: (opts?: any) => void;

/**
 * Used to manually set the base path where assets can be found.
 * If the script is used as "module", it's recommended to use "import.meta.url",
 * such as "setAssetPath(import.meta.url)". Other options include
 * "setAssetPath(document.currentScript.src)", or using a bundler's replace plugin to
 * dynamically set the path at build time, such as "setAssetPath(process.env.ASSET_PATH)".
 * But do note that this configuration depends on how your script is bundled, or lack of
 * bunding, and where your assets can be loaded from. Additionally custom bundling
 * will have to ensure the static assets are copied to its build directory.
 */
export declare const setAssetPath: (path: string) => void;

export interface SetPlatformOptions {
  raf?: (c: FrameRequestCallback) => number;
  ael?: (el: EventTarget, eventName: string, listener: EventListenerOrEventListenerObject, options: boolean | AddEventListenerOptions) => void;
  rel?: (el: EventTarget, eventName: string, listener: EventListenerOrEventListenerObject, options: boolean | AddEventListenerOptions) => void;
  ce?: (eventName: string, opts?: any) => CustomEvent;
}
export declare const setPlatformOptions: (opts: SetPlatformOptions) => void;

export type { Components, JSX };

export * from '../types';
