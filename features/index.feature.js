const { FizzBuzz } = require('../spec/spec.helper')
const BrowserHelpers = require('e2e_training_wheels')
const browser = new BrowserHelpers()

describe('User can input a value and get FizzBuzz results', () => {
  before(async () => {
    await browser.init()
    await browser.visitPage('http://localhost:8080/')
  });

  beforeEach(async () => {
    await browser.page.reload();
  });

  after(async () => {
    await browser.close();
  });

  it('clicking on the "Check" button, receive Fizz', async () => {
    await browser.fillIn("input[id='value']", { with: "3" })
    await browser.clickOnButton("input[value='Check']")
    let content = await browser.getContent("[id='display_answer']")
    expect(content).to.eql('Fizz');
  });

  it('clicking on the "Check" button, receive Buzz', async () => {
    await browser.fillIn("input[id='value']", { with: "5" })
    await browser.clickOnButton("input[value='Check']")
    let content = await browser.getContent("[id='display_answer']")
    expect(content).to.eql('Buzz');
  });

  it('clicking on the "Check" button, receive FizzBuzz', async () => {
    await browser.fillIn("input[id='value']", { with: "30" })
    await browser.clickOnButton("input[value='Check']")
    let content = await browser.getContent("[id='display_answer']")
    expect(content).to.eql('FizzBuzz');
  });

  it('clicking on the "Check" button, receive input number', async () => {
    await browser.fillIn("input[id='value']", { with: "1" })
    await browser.clickOnButton("input[value='Check']")
    let content = await browser.getContent("[id='display_answer']")
    expect(content).to.eql('1');
  });


});