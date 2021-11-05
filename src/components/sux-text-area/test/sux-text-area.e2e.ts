import { newE2EPage } from '@stencil/core/testing';

describe('sux-text-area', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<sux-text-area></sux-text-area>');

    const element = await page.find('sux-text-area');
    expect(element).toHaveClass('hydrated');
  });
});
