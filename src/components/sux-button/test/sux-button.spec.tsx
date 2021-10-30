import { newSpecPage } from '@stencil/core/testing';
import { SuxButton } from '../sux-button';

describe('sux-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SuxButton],
      html: `<sux-button></sux-button>`,
    });
    expect(page.root).toEqualHtml(`
      <sux-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </sux-button>
    `);
  });
});
