import { newE2EPage } from '@stencil/core/testing';

describe('sux-code', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<sux-code></sux-code>');

    const element = await page.find('sux-code');
    expect(element).toHaveClass('hydrated');
  });
});
