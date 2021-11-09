import { newSpecPage } from '@stencil/core/testing';
import { SuxCheckbox } from '../sux-checkbox';

describe('sux-checkbox', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SuxCheckbox],
      html: `<sux-checkbox></sux-checkbox>`,
    });
    expect(page.root).toEqualHtml(`
      <sux-checkbox>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </sux-checkbox>
    `);
  });
});
