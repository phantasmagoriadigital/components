import { newE2EPage } from '@stencil/core/testing';

describe('sux-field-label', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<sux-field-label></sux-field-label>');

    const element = await page.find('sux-field-label');
    expect(element).toHaveClass('hydrated');
  });
});
