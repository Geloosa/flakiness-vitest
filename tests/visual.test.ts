import { page } from 'vitest/browser';
import { afterEach, expect, it } from 'vitest';

function mountCounter() {
  document.body.innerHTML = `
    <main>
      <h1>Visual smoke test</h1>
      <button type="button" id="counter">Count: 0</button>
    </main>
  `;

  let count = 0;
  const button = document.getElementById('counter');

  button?.addEventListener('click', () => {
    count += 1;
    button.textContent = `Count: ${count}`;
  });
}

afterEach(() => {
  document.body.innerHTML = '';
});

it('should increment counter on each click', async () => {
  mountCounter();

  const button = page.getByRole('button', { name: 'Count: 0' });

  await expect.element(button).toBeVisible();
  await expect.element(document.body).toMatchScreenshot("counter is 0");

  await button.click();
  await expect.element(document.body).toMatchScreenshot("counter is 1");
});

