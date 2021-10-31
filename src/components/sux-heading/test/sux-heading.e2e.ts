import { newE2EPage } from '@stencil/core/testing';

describe('sux-heading', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<sux-heading></sux-heading>');

    const element = await page.find('sux-heading');
    expect(element).toHaveClass('hydrated');
  });
});
