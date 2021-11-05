import { newE2EPage } from '@stencil/core/testing';

describe('sux-text-field', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<sux-text-field></sux-text-field>');

    const element = await page.find('sux-text-field');
    expect(element).toHaveClass('hydrated');
  });
});
