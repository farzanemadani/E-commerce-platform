const quoteFiles = (filenames) =>
  filenames.map((filename) => `'${filename.replaceAll("'", "'\\''")}'`).join(' ')

const lintAndFormat = (filenames) => {
  const files = quoteFiles(filenames)

  return [`bunx eslint ${files}`, `bunx prettier --check ${files}`]
}

const lintStagedConfig = {
  '**/*.{ts,tsx}': (filenames) => ['bun run typecheck', ...lintAndFormat(filenames)],

  '**/*.{js,jsx,mjs,cjs}': lintAndFormat,

  '**/*.{css,scss,json,md,mdx,yml,yaml}': (filenames) => {
    const files = quoteFiles(filenames)
    return `bunx prettier --check ${files}`
  },
}

export default lintStagedConfig
