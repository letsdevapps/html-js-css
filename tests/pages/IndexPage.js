export class IndexPage {
  constructor(page) {
    this.page = page;
    this.title = page.locator('title');
  }

  async open() {
    await this.page.goto('/');
  }
}