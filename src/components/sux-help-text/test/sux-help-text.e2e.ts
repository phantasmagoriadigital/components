import { newE2EPage } from '@stencil/core/testing';

describe('sux-help-text', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<sux-help-text></sux-help-text>');

    const element = await page.find('sux-help-text');
    expect(element).toHaveClass('hydrated');
  });
});
