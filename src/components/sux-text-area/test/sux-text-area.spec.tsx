import { newSpecPage } from '@stencil/core/testing';
import { SuxTextArea } from '../sux-text-area';

describe('sux-text-area', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SuxTextArea],
      html: `<sux-text-area></sux-text-area>`,
    });
    expect(page.root).toEqualHtml(`
      <sux-text-area>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </sux-text-area>
    `);
  });
});
