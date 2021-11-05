import { newSpecPage } from '@stencil/core/testing';
import { SuxSwitch } from '../sux-switch';

describe('sux-switch', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SuxSwitch],
      html: `<sux-switch></sux-switch>`,
    });
    expect(page.root).toEqualHtml(`
      <sux-switch>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </sux-switch>
    `);
  });
});
