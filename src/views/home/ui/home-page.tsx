import { siteConfig } from '@/shared/config'
import { Container } from '@/shared/ui/Container'

export function HomePage() {
  return (
    <Container>
      <div className="flex flex-1 flex-col items-center justify-center">
        <main className="flex w-full max-w-3xl flex-1 flex-col items-center justify-between px-16 py-32 sm:items-start">
          <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
            <p className="text-sm font-medium tracking-wide uppercase">سلام</p>
            <h1 className="max-w-md text-3xl leading-10 font-semibold tracking-tight">
              {siteConfig.name}
            </h1>
            <p className="max-w-md text-lg leading-8">
              A clean Next.js boilerplate with Bun, linting, formatting, Git hooks, and an FSD-ready
              folder structure.
            </p>
          </div>
        </main>
      </div>
    </Container>
  )
}
