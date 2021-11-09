export function format(first: string, middle: string, last: string): string {
  return (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '');
}

export const hasShadowDom = (el: HTMLElement) => {
  return !!el.shadowRoot && !!(el as any).attachShadow
}

export const renderHiddenInput = (
  always: boolean,
  container: HTMLElement,
  name: string,
  value: string | undefined | null,
  disabled: boolean,
  checked?: boolean
) => {
  let input = container.querySelector(
      'input.aux-input'
  ) as HTMLInputElement | null
  if (always || hasShadowDom(container)) {
      if (checked || checked == undefined) {
          if (!input) {
              input = container.ownerDocument!.createElement('input')
              input.type = 'hidden'
              input.classList.add('aux-input')
              container.appendChild(input)
          }
          input.disabled = disabled
          input.name = name
          input.value = value || ''
      } else {
          if (input) {
              input.remove()
          }
      }
  }
}

export function hasSlot(el: HTMLElement, name?: string): boolean {
  // Look for a named slot
  if (name) {
      return el.querySelector(`[slot="${name}"]`) !== null
  }

  // // Look for a default slot
  // return [...el.childNodes].some((node) => {
  //     //If node is text and not an empy string return true
  //     if (
  //         node.nodeType === node.TEXT_NODE &&
  //         node?.textContent?.trim() !== ''
  //     ) {
  //         return true
  //     }

  //     //If node is an element with a slot attribute return true
  //     if (node.nodeType === node.ELEMENT_NODE) {
  //         const el = node as HTMLElement
  //         if (!el.hasAttribute('slot')) {
  //             return true
  //         }
  //     }

  //     return false
  // })
}

