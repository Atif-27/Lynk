export default function Landing() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col">
      <header className="border-b border-neutral-800/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-gradient-to-br from-emerald-400 to-cyan-500" />
            <span className="text-lg font-semibold tracking-tight">Lynk</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-neutral-300">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a href="#" className="hover:text-white">Login</a>
            <a href="#" className="ml-2 rounded-md bg-white/10 hover:bg-white/20 text-white px-3 py-1.5">Get Started</a>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <section className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1000px_500px_at_50%_-20%,rgba(16,185,129,0.15),transparent)]" />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
            <div className="max-w-3xl">
              <p className="inline-flex items-center rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-emerald-300 text-xs mb-4">New • Analytics built‑in</p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight">
                Shorten URLs. <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Expand reach.</span>
              </h1>
              <p className="mt-5 text-neutral-300 text-lg">
                Lynk makes sharing links effortless. Create beautiful, reliable short links with real‑time analytics and custom domains.
              </p>

              <form onSubmit={handleSubmit} className="mt-8">
                <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
                  <input
                    type="url"
                    required
                    placeholder="Paste a long URL to shorten…"
                    className="w-full rounded-md bg-neutral-900 border border-neutral-800 focus:border-emerald-500 focus:outline-none px-4 py-3 text-neutral-100 placeholder-neutral-500"
                  />
                  <button
                    type="submit"
                    className="whitespace-nowrap rounded-md bg-gradient-to-r from-emerald-500 to-cyan-500 px-6 py-3 font-medium text-neutral-950 hover:opacity-90"
                    aria-label="Shorten URL"
                  >
                    Shorten
                  </button>
                </div>
                <p className="mt-2 text-xs text-neutral-400">No signup required. Free plan available.</p>
              </form>
            </div>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6" id="features">
              <div className="rounded-lg border border-neutral-800 bg-neutral-900/40 p-6">
                <div className="h-9 w-9 rounded-md bg-emerald-500/20 text-emerald-300 flex items-center justify-center">1</div>
                <h3 className="mt-4 text-lg font-medium">Instant shortening</h3>
                <p className="mt-2 text-sm text-neutral-400">Turn long, unwieldy links into clean Lynks that are easy to share everywhere.</p>
              </div>
              <div className="rounded-lg border border-neutral-800 bg-neutral-900/40 p-6">
                <div className="h-9 w-9 rounded-md bg-cyan-500/20 text-cyan-300 flex items-center justify-center">2</div>
                <h3 className="mt-4 text-lg font-medium">Real‑time analytics</h3>
                <p className="mt-2 text-sm text-neutral-400">Track clicks, referrers, devices, and geography to understand your audience.</p>
              </div>
              <div className="rounded-lg border border-neutral-800 bg-neutral-900/40 p-6">
                <div className="h-9 w-9 rounded-md bg-fuchsia-500/20 text-fuchsia-300 flex items-center justify-center">3</div>
                <h3 className="mt-4 text-lg font-medium">Custom domains</h3>
                <p className="mt-2 text-sm text-neutral-400">Bring your brand with you by connecting your own domain to your Lynks.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-neutral-800/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between text-sm text-neutral-400">
          <span>© {new Date().getFullYear()} Lynk</span>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-neutral-200">Privacy</a>
            <a href="#" className="hover:text-neutral-200">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}


