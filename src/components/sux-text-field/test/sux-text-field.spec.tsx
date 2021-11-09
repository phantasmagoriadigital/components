import { newSpecPage } from '@stencil/core/testing';
import { SuxTextField } from '../sux-text-field';

describe('sux-text-field', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SuxTextField],
      html: `<sux-text-field></sux-text-field>`,
    });
    expect(page.root).toEqualHtml(`
      <sux-text-field>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </sux-text-field>
    `);
  });
});
