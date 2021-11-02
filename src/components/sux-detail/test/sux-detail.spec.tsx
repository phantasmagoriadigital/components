import { newSpecPage } from '@stencil/core/testing';
import { SuxDetail } from '../sux-detail';

describe('sux-detail', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SuxDetail],
      html: `<sux-detail></sux-detail>`,
    });
    expect(page.root).toEqualHtml(`
      <sux-detail>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </sux-detail>
    `);
  });
});
