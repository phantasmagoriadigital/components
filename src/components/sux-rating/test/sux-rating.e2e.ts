import { newE2EPage } from '@stencil/core/testing';

describe('sux-rating', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<sux-rating></sux-rating>');

    const element = await page.find('sux-rating');
    expect(element).toHaveClass('hydrated');
  });
});
