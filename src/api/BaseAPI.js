import { expect } from '@playwright/test';

export class BaseAPI {
  constructor(request, baseURL) {
    this.request = request;
    this.baseURL = baseURL;
  }

  async get(url, stepName) {
    return await step(stepName, async () => {
      const response = await this.request.get(`${this.baseURL}${url}`);
      expect(response.ok()).toBeTruthy();
      return response;
    });
  }
}
