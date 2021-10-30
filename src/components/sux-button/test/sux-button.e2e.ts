import { newE2EPage } from '@stencil/core/testing';

describe('sux-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<sux-button></sux-button>');

    const element = await page.find('sux-button');
    expect(element).toHaveClass('hydrated');
  });
});
