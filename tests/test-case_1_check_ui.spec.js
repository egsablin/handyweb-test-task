import { test } from "@playwright/test"
import { LoginPage } from "../page-objects/LoginPage.js"

test('Test-case #1 Checking UI Elements to be Visible', async ({ page }) => {

  const loginPage = new LoginPage(page)
  await loginPage.visit()
  await loginPage.checkUI()
});
