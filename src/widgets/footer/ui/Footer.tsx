import Link from 'next/link'

export function Footer() {
  return (
    <footer className="border-t px-6 py-8">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <span className="text-sm font-semibold">لوگو</span>

        {/* Links */}
        <nav className="flex gap-6">
          <Link href="/about" className="text-sm text-gray-500 hover:text-black">
            درباره ما
          </Link>
          <Link href="/contact" className="text-sm text-gray-500 hover:text-black">
            تماس با ما
          </Link>
        </nav>

        {/* Copyright */}
        <p className="text-sm text-gray-400">© {new Date().getFullYear()}</p>
      </div>
    </footer>
  )
}
