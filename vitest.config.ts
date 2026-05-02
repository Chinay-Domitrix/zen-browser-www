/// <reference types="vitest/config" />
import { getViteConfig } from 'astro/config'

export default getViteConfig({
  test: {
    coverage: {
      provider: 'istanbul',
    },
    include: ['src/tests/**/*.test.ts'],
    setupFiles: ['src/tests/vitest.setup.ts'],
  },
})
