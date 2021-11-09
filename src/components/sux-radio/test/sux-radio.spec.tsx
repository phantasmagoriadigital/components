import { newSpecPage } from '@stencil/core/testing';
import { SuxRadio } from '../sux-radio';

describe('sux-radio', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SuxRadio],
      html: `<sux-radio></sux-radio>`,
    });
    expect(page.root).toEqualHtml(`
      <sux-radio>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </sux-radio>
    `);
  });
});
