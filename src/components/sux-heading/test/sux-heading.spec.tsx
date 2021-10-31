import { newSpecPage } from '@stencil/core/testing';
import { SuxHeading } from '../sux-heading';

describe('sux-heading', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SuxHeading],
      html: `<sux-heading></sux-heading>`,
    });
    expect(page.root).toEqualHtml(`
      <sux-heading>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </sux-heading>
    `);
  });
});
