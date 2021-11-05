import { newE2EPage } from '@stencil/core/testing';

describe('sux-picker', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<sux-picker></sux-picker>');

    const element = await page.find('sux-picker');
    expect(element).toHaveClass('hydrated');
  });
});
