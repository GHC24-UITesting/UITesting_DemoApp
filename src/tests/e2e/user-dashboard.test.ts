/* eslint-disable testing-library/prefer-screen-queries */

import { test, chromium } from "@playwright/test";
import * as dotenv from 'dotenv';
dotenv.config();

const userEmail = process.env.USER_EMAIL;
const userPassword = process.env.USER_PASSWORD;

test("Onboard a user to specific tasks", async () => {
  // launch chromium browser
  const browser = await chromium.launch(); 
  const context = await browser.newContext();
  const page = await context.newPage();

  // go to landing page and enter usename, password and then click sigin
  await page.goto("http://localhost:3000");
  await page.getByPlaceholder("Email, phone, or Skype").click();
  await page
    .getByPlaceholder("Email, phone, or Skype")
    .fill(userEmail);
  await page.getByRole("button", { name: "Next" }).click();
  await page.locator("#i0118").fill(userPassword);
  await page.getByRole("button", { name: "Sign in" }).click();

  // Wait until the URL changes to the specified URL
  await page.waitForURL(
    "https://login.microsoftonline.com/common/SAS/ProcessAuth"
  );
  await page.getByText("Don't show this again").click();
  await page.getByRole("button", { name: "Yes" }).click();

  // select all the tasks you want the use to onboard
  await page.locator("#checkbox-r3").check();
  await page.getByRole("img", { name: "Presentation Preview" }).nth(1).click();
  await page.getByRole("img", { name: "Presentation Preview" }).nth(2).click();
  await page.getByRole("img", { name: "Presentation Preview" }).nth(3).click();
  await page.getByRole("img", { name: "Presentation Preview" }).nth(4).click();
  await page.getByRole("button", { name: "Onboard 5 services" }).click();

  // select events page and search for events in seattle
  await page
    .locator("div")
    .filter({ hasText: /^EventsView$/ })
    .getByRole("button")
    .click();
  await page.getByPlaceholder("Enter city").click();
  await page.getByPlaceholder("Enter city").fill("seattle");
  await page.getByText("any").click();
  await page.getByRole("option", { name: "Today" }).click();
  await page.getByRole("button", { name: "Search" }).click();
});
