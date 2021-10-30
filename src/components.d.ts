/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
    interface SuxButton {
        /**
          * is the button disabled
         */
        "disabled"?: boolean;
        /**
          * optionally pass an icon to display at the end of a button - accepts ui icon names
         */
        "iconEnd"?: string;
        /**
          * optionally pass an icon to display at the start of a button - accepts ui icon names
         */
        "iconStart"?: string;
        /**
          * optionally add a sux-loader component to the button, disabling interaction.
         */
        "isLoading"?: boolean;
        /**
          * The name attribute to apply to the button
         */
        "name"?: string;
        /**
          * The type attribute to apply to the button
         */
        "type"?: string;
    }
}
declare global {
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLSuxButtonElement extends Components.SuxButton, HTMLStencilElement {
    }
    var HTMLSuxButtonElement: {
        prototype: HTMLSuxButtonElement;
        new (): HTMLSuxButtonElement;
    };
    interface HTMLElementTagNameMap {
        "my-component": HTMLMyComponentElement;
        "sux-button": HTMLSuxButtonElement;
    }
}
declare namespace LocalJSX {
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface SuxButton {
        /**
          * is the button disabled
         */
        "disabled"?: boolean;
        /**
          * optionally pass an icon to display at the end of a button - accepts ui icon names
         */
        "iconEnd"?: string;
        /**
          * optionally pass an icon to display at the start of a button - accepts ui icon names
         */
        "iconStart"?: string;
        /**
          * optionally add a sux-loader component to the button, disabling interaction.
         */
        "isLoading"?: boolean;
        /**
          * The name attribute to apply to the button
         */
        "name"?: string;
        /**
          * The type attribute to apply to the button
         */
        "type"?: string;
    }
    interface IntrinsicElements {
        "my-component": MyComponent;
        "sux-button": SuxButton;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
            "sux-button": LocalJSX.SuxButton & JSXBase.HTMLAttributes<HTMLSuxButtonElement>;
        }
    }
}