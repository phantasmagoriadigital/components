import { newE2EPage } from '@stencil/core/testing';

describe('sux-body', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<sux-body></sux-body>');

    const element = await page.find('sux-body');
    expect(element).toHaveClass('hydrated');
  });
});
