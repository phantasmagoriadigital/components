import { newSpecPage } from '@stencil/core/testing';
import { SuxBody } from '../sux-body';

describe('sux-body', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SuxBody],
      html: `<sux-body></sux-body>`,
    });
    expect(page.root).toEqualHtml(`
      <sux-body>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </sux-body>
    `);
  });
});
