import { newE2EPage } from '@stencil/core/testing';

describe('sux-detail', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<sux-detail></sux-detail>');

    const element = await page.find('sux-detail');
    expect(element).toHaveClass('hydrated');
  });
});
