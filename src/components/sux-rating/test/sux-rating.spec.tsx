import { newSpecPage } from '@stencil/core/testing';
import { SuxRating } from '../sux-rating';

describe('sux-rating', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SuxRating],
      html: `<sux-rating></sux-rating>`,
    });
    expect(page.root).toEqualHtml(`
      <sux-rating>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </sux-rating>
    `);
  });
});
