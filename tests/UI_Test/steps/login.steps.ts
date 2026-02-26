import {expect} from '@playwright/test';
import { createBdd } from 'playwright-bdd';

const { Given, When, Then } = createBdd();

Given('I navigate to {string}', async ({page}, arg) => {
  console.log("test")
});

Given('I click on My account', async ({page}) => {
  console.log("test")
});

Given('I enter E-Mail Address {string}', async ({page}, arg) => {
  console.log("test")
});

Given('I enter password {string}', async ({page}, arg) => {
 console.log("test")
});

When('I click on submit button', async ({page}) => {
  console.log("test")
});

Then('I should verify url contains {string}', async ({page}, arg) => {
  console.log("test")
});

Then('I should verify user is not able to login and url contains {string}', async ({page}, arg) => {
 console.log("test")
});