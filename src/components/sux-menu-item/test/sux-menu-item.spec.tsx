import { newSpecPage } from '@stencil/core/testing';
import { SuxMenuItem } from '../sux-menu-item';

describe('sux-menu-item', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SuxMenuItem],
      html: `<sux-menu-item></sux-menu-item>`,
    });
    expect(page.root).toEqualHtml(`
      <sux-menu-item>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </sux-menu-item>
    `);
  });
});
