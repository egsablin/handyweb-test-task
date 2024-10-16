import { expect } from "@playwright/test"

export class LoginPage {
    constructor(page) {
        this.page = page
        this.inputContainers = page.locator('[class="_input_container_1b25p_18"]')
        this.formTitle = page.getByText('Просто нажмите "Войти"')
        this.emailInput = page.locator('input[name="email"]')
        this.passwordInput = page.locator('input[name="password"]')
        this.formButton = page.locator('button[type="submit"]')
    }

    visit = async () => {
        await this.page.goto("/login")
    }

    checkUI = async () => {
        await this.formTitle.waitFor()
        await expect(this.formTitle).toBeVisible()
        await expect(this.emailInput).toBeVisible()
        await expect(this.passwordInput).toBeVisible()
        await expect(this.formButton).toBeVisible()
        await expect(this.formButton).toHaveText('Войти')
        await this.inputContainers.first().waitFor()
        const inputEmailLabel = await this.inputContainers.nth(0).locator('[class="_text_1b25p_25"]').innerText()
        expect(inputEmailLabel).toBe('Почта')
        const emailIcon = this.inputContainers.nth(0).locator('svg')
        await expect(emailIcon).toBeVisible()
        const inputPasswordLabel = await this.inputContainers.nth(1).locator('[class="_text_1b25p_25"]').innerText()
        expect(inputPasswordLabel).toBe('Пароль')
        const passwordIcon = this.inputContainers.nth(1).locator('svg')
        await expect(passwordIcon).toBeVisible()
    }

    checkRightLogin = async () => {
        await this.emailInput.waitFor()
        const emailInputValue = await this.emailInput.inputValue()
        const passwordInputValut = await this.passwordInput.inputValue()
        if ( emailInputValue === 'demo@example.com' &&  passwordInputValut === '123321') {
            await this.formButton.waitFor()
            await this.formButton.click()
        }
        await this.page.waitForURL(/\/account/)
    }
}