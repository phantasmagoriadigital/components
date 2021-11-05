import { newE2EPage } from '@stencil/core/testing';

describe('sux-switch', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<sux-switch></sux-switch>');

    const element = await page.find('sux-switch');
    expect(element).toHaveClass('hydrated');
  });
});
