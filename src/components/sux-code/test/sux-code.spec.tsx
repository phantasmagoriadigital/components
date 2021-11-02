import { newSpecPage } from '@stencil/core/testing';
import { SuxCode } from '../sux-code';

describe('sux-code', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SuxCode],
      html: `<sux-code></sux-code>`,
    });
    expect(page.root).toEqualHtml(`
      <sux-code>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </sux-code>
    `);
  });
});
