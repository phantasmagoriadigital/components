import { newSpecPage } from '@stencil/core/testing';
import { SuxIcon } from '../sux-icon';

describe('sux-icon', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SuxIcon],
      html: `<sux-icon></sux-icon>`,
    });
    expect(page.root).toEqualHtml(`
      <sux-icon>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </sux-icon>
    `);
  });
});
