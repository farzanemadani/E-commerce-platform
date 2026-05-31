import { siteConfig } from '@/shared/config/site'

export function HomePage() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex w-full max-w-3xl flex-1 flex-col items-center justify-between bg-white px-16 py-32 sm:items-start dark:bg-black">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <p className="text-sm font-medium tracking-wide text-zinc-500 uppercase dark:text-zinc-400">
            سلام
          </p>
          <h1 className="max-w-md text-3xl leading-10 font-semibold tracking-tight text-black dark:text-zinc-50">
            {siteConfig.name}
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            A clean Next.js boilerplate with Bun, linting, formatting, Git hooks, and an FSD-ready
            folder structure.
          </p>
        </div>
      </main>
    </div>
  )
}
