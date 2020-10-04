describe('webdriver.io page', () => {
    it('vk is vk', () => {
        browser.url('https://vk.com')
        expect(browser).toHaveTitle('Welcome! | VK');
    })
})