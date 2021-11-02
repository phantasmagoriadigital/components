import { newSpecPage } from '@stencil/core/testing';
import { SuxHelpText } from '../sux-help-text';

describe('sux-help-text', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SuxHelpText],
      html: `<sux-help-text></sux-help-text>`,
    });
    expect(page.root).toEqualHtml(`
      <sux-help-text>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </sux-help-text>
    `);
  });
});
