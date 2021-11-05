import { newE2EPage } from '@stencil/core/testing';

describe('sux-icon', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<sux-icon></sux-icon>');

    const element = await page.find('sux-icon');
    expect(element).toHaveClass('hydrated');
  });
});
