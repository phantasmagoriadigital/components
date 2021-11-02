// import { EventEmitter } from '@stencil/core';
//   let defaultMode: Mode;
// export const getIonMode = (ref?: any): Mode => {
//   return (ref && getMode(ref)) || defaultMode;
// };
export const hasShadowDom = (el) => {
  return !!el.shadowRoot && !!el.attachShadow;
};
export const findItemLabel = (componentEl) => {
  const itemEl = componentEl.closest('ion-item');
  if (itemEl) {
    return itemEl.querySelector('ion-label');
  }
  return null;
};
export const renderHiddenInput = (always, container, name, value, disabled) => {
  if (always || hasShadowDom(container)) {
    let input = container.querySelector('input.aux-input');
    if (!input) {
      input = container.ownerDocument.createElement('input');
      input.type = 'hidden';
      input.classList.add('aux-input');
      container.appendChild(input);
    }
    input.disabled = disabled;
    input.name = name;
    input.value = value || '';
  }
};
/**
* This method is used for Ionic's input components that use Shadow DOM. In
* order to properly label the inputs to work with screen readers, we need
* to get the text content of the label outside of the shadow root and pass
* it to the input inside of the shadow root.
*
* Referencing label elements by id from outside of the component is
* impossible due to the shadow boundary, read more here:
* https://developer.salesforce.com/blogs/2020/01/accessibility-for-web-components.html
*
* @param componentEl The shadow element that needs the aria label
* @param inputId The unique identifier for the input
*/
export const getAriaLabel = (componentEl, inputId) => {
  let labelText;
  // If the user provides their own label via the aria-labelledby attr
  // we should use that instead of looking for an ion-label
  const labelledBy = componentEl.getAttribute('aria-labelledby');
  // Grab the id off of the component in case they are using
  // a custom label using the label element
  const componentId = componentEl.id;
  let labelId = labelledBy !== null && labelledBy.trim() !== ''
    ? labelledBy
    : inputId + '-lbl';
  let label = labelledBy !== null && labelledBy.trim() !== ''
    ? document.getElementById(labelledBy)
    : findItemLabel(componentEl);
  if (label) {
    if (labelledBy === null) {
      label.id = labelId;
    }
    labelText = label.textContent;
    label.setAttribute('aria-hidden', 'true');
    // if there is no label, check to see if the user has provided
    // one by setting an id on the component and using the label element
  }
  else if (componentId.trim() !== '') {
    label = document.querySelector(`label[for="${componentId}"]`);
    if (label) {
      if (label.id !== '') {
        labelId = label.id;
      }
      else {
        label.id = labelId = `${componentId}-lbl`;
      }
      labelText = label.textContent;
    }
  }
  return { label, labelId, labelText };
};
