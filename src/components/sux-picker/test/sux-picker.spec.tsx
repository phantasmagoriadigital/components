import { newSpecPage } from '@stencil/core/testing';
import { SuxPicker } from '../sux-picker';

describe('sux-picker', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SuxPicker],
      html: `<sux-picker></sux-picker>`,
    });
    expect(page.root).toEqualHtml(`
      <sux-picker>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </sux-picker>
    `);
  });
});
