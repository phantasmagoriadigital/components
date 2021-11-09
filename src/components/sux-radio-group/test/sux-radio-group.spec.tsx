import { newSpecPage } from '@stencil/core/testing';
import { SuxRadioGroup } from '../sux-radio-group';

describe('sux-radio-group', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SuxRadioGroup],
      html: `<sux-radio-group></sux-radio-group>`,
    });
    expect(page.root).toEqualHtml(`
      <sux-radio-group>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </sux-radio-group>
    `);
  });
});
