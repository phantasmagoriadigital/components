import { newE2EPage } from '@stencil/core/testing';

describe('sux-radio-group', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<sux-radio-group></sux-radio-group>');

    const element = await page.find('sux-radio-group');
    expect(element).toHaveClass('hydrated');
  });
});
