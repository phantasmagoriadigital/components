import { newE2EPage } from '@stencil/core/testing';

describe('sux-tag', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<sux-tag></sux-tag>');

    const element = await page.find('sux-tag');
    expect(element).toHaveClass('hydrated');
  });
});
