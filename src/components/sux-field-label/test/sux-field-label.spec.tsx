import { newSpecPage } from '@stencil/core/testing';
import { SuxFieldLabel } from '../sux-field-label';

describe('sux-field-label', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SuxFieldLabel],
      html: `<sux-field-label></sux-field-label>`,
    });
    expect(page.root).toEqualHtml(`
      <sux-field-label>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </sux-field-label>
    `);
  });
});
