import { newE2EPage } from '@stencil/core/testing';

describe('sux-checkbox', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<sux-checkbox></sux-checkbox>');

    const element = await page.find('sux-checkbox');
    expect(element).toHaveClass('hydrated');
  });
});
