export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-8 max-w-5xl mx-auto w-full">
      <div className="text-center max-w-3xl mb-16">
        <h1 className="text-5xl font-bold tracking-tight mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Bulletproof Your Soroban Smart Contracts
        </h1>
        <p className="text-xl leading-8 text-zinc-600 dark:text-zinc-400">
          An advanced fuzzing and mutation testing framework designed to discover elusive edge cases in Stellar's Soroban ecosystem.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
        {/* Card 1 */}
        <div className="border border-black/[.08] dark:border-white/[.145] rounded-xl p-8 bg-white dark:bg-zinc-950 shadow-sm transition-all hover:shadow-md">
          <div className="h-12 w-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-6">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-3">Intelligent Mutation</h3>
          <p className="text-zinc-600 dark:text-zinc-400">
            Automatically mutate transaction envelopes and inputs to explore complex state transitions specific to Soroban.
          </p>
        </div>

        {/* Card 2 */}
        <div className="border border-black/[.08] dark:border-white/[.145] rounded-xl p-8 bg-white dark:bg-zinc-950 shadow-sm transition-all hover:shadow-md">
          <div className="h-12 w-12 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400 mb-6">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-3">Invariant Testing</h3>
          <p className="text-zinc-600 dark:text-zinc-400">
            Define robust invariants and property assertions. We run permutations to ensure they hold up under stress.
          </p>
        </div>

        {/* Card 3 */}
        <div className="border border-black/[.08] dark:border-white/[.145] rounded-xl p-8 bg-white dark:bg-zinc-950 shadow-sm transition-all hover:shadow-md">
          <div className="h-12 w-12 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400 mb-6">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-3">Actionable Reports</h3>
          <p className="text-zinc-600 dark:text-zinc-400">
            Get actionable, detailed execution traces when our fuzzer detects a crash, panic, or invariant breach.
          </p>
        </div>
      </div>

      <div className="mt-16 text-center border-t border-black/[.08] dark:border-white/[.145] pt-12 w-full">
        <h2 className="text-2xl font-bold mb-4">Stellar Wave 3 is Open!</h2>
        <p className="text-zinc-600 dark:text-zinc-400 mb-8 max-w-2xl mx-auto">
          We are actively looking for contributors. Check out our open issues to build the future of Soroban dev tooling with us.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="https://github.com/SorobanCrashLab/soroban-crashlab/issues?q=is%3Aissue+is%3Aopen+label%3Awave3"
            className="flex items-center justify-center h-12 px-6 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            Browse Wave 3 Issues
          </a>
          <a
            href="https://github.com/SorobanCrashLab/soroban-crashlab"
            className="flex items-center justify-center h-12 px-6 rounded-full border border-black/[.15] dark:border-white/[.15] font-medium hover:bg-black/[.04] dark:hover:bg-white/[.04] transition dark:hover:text-black dark:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            Star the Repo
          </a>
        </div>
      </div>
    </div>
  );
}
