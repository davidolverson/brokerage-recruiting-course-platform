import { defineConfig } from 'vitest/config'
import path from 'path'

export default defineConfig({
  test: {
    environment: 'node',
    include: ['src/**/*.test.ts'],
    // Vitest does not clear vi.fn() call history between tests by default,
    // so mocked modules (vi.mock) leak call counts/args across `it` blocks
    // in the same file (e.g. campaign-sender.test.ts asserting
    // toHaveBeenCalledTimes(5) would otherwise see prior tests' calls too).
    clearMocks: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
