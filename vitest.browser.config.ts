import { defineConfig } from "vitest/config";
import { playwright } from "@vitest/browser-playwright";

export default defineConfig({
    test: {
        include: ["**/*visual.test.ts"],
        browser: {
            provider: playwright(),
            enabled: true,
            instances: [{ browser: "chromium" }],
        },
        reporters: [
            'default',
            ['@flakiness/vitest', {
                flakinessProject: 'geloosa/check-out-vitest',
            }],
        ],
    },
});
