import { newE2EPage } from '@stencil/core/testing';

describe('sux-radio', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<sux-radio></sux-radio>');

    const element = await page.find('sux-radio');
    expect(element).toHaveClass('hydrated');
  });
});
