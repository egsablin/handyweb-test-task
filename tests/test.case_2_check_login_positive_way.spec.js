import { test, expect } from "@playwright/test"
import { LoginPage } from "../page-objects/LoginPage.js"

test('Test-case #2 Checking login in a positive way', async ({ page }) => {

  const loginPage = new LoginPage(page)
  await loginPage.visit()
  await loginPage.checkRightLogin()
});
