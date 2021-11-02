import { newSpecPage } from '@stencil/core/testing';
import { SuxTag } from '../sux-tag';

describe('sux-tag', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SuxTag],
      html: `<sux-tag></sux-tag>`,
    });
    expect(page.root).toEqualHtml(`
      <sux-tag>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </sux-tag>
    `);
  });
});
