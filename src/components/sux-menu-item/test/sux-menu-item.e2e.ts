import { newE2EPage } from '@stencil/core/testing';

describe('sux-menu-item', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<sux-menu-item></sux-menu-item>');

    const element = await page.find('sux-menu-item');
    expect(element).toHaveClass('hydrated');
  });
});
