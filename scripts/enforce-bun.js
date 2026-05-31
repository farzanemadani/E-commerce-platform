const userAgent = process.env.npm_config_user_agent || ''
const execPath = process.env.npm_execpath || ''

const lowerUserAgent = userAgent.toLowerCase()
const lowerExecPath = execPath.toLowerCase()

const isBun = lowerUserAgent.includes('bun/') || lowerExecPath.includes('bun')

if (isBun) {
  process.exit(0)
}

const managerFromUserAgent = lowerUserAgent.split('/')[0]

let manager = managerFromUserAgent

if (!manager) {
  if (lowerExecPath.includes('yarn')) manager = 'yarn'
  else if (lowerExecPath.includes('pnpm')) manager = 'pnpm'
  else if (lowerExecPath.includes('npm')) manager = 'npm'
  else manager = 'unknown'
}

console.error('')
console.error(`This project only supports Bun for installs. Detected: ${manager}`)
console.error('Use: bun install')
console.error('')
process.exit(1)
