import { ThemeToggle } from '@/components/ui/theme-toggle'

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-6 bg-white text-slate-900 dark:bg-slate-900 dark:text-slate-100 transition-colors duration-200">
            {/* Header with theme toggle */}
            <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
                <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-slate-900/80 pb-6 pt-8 backdrop-blur-2xl lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-50 dark:lg:bg-slate-800 lg:p-4">
                    Welcome to&nbsp;
                    <code className="font-mono font-bold text-blue-600 dark:text-blue-400">agree2disagree.org</code>
                </p>
                <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white dark:from-slate-900 via-white dark:via-slate-900 lg:static lg:h-auto lg:w-auto lg:bg-none">
                    <ThemeToggle />
                </div>
            </div>

            {/* Hero section */}
            <div className="relative flex place-items-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-balance sm:text-5xl lg:text-6xl text-slate-900 dark:text-slate-100">
                        Can you{' '}
                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                            agree to disagree
                        </span>
                        ?
                    </h1>
                    <p className="mt-6 text-lg text-slate-600 dark:text-slate-300 max-w-2xl">
                        A platform for structured video conversations between people with differing viewpoints, 
                        fostering understanding and productive dialogue across ideological divides.
                    </p>
                </div>
            </div>

            {/* Feature cards */}
            <div className="mb-32 grid gap-6 text-center lg:mb-0 lg:grid-cols-3 lg:text-left lg:gap-8">
                <div className="group rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-slate-800 p-6 transition-all duration-200 hover:border-blue-300 dark:hover:border-blue-600 hover:bg-blue-50 dark:hover:bg-slate-700 hover:shadow-lg">
                    <h2 className="mb-3 text-2xl font-semibold text-slate-900 dark:text-slate-100">
                        Connect{' '}
                        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none text-blue-600 dark:text-blue-400">
                            →
                        </span>
                    </h2>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                        Get matched with someone who has different views on topics that matter to you.
                    </p>
                </div>

                <div className="group rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-slate-800 p-6 transition-all duration-200 hover:border-blue-300 dark:hover:border-blue-600 hover:bg-blue-50 dark:hover:bg-slate-700 hover:shadow-lg">
                    <h2 className="mb-3 text-2xl font-semibold text-slate-900 dark:text-slate-100">
                        Discuss{' '}
                        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none text-blue-600 dark:text-blue-400">
                            →
                        </span>
                    </h2>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                        Engage in structured video conversations designed for respectful dialogue.
                    </p>
                </div>

                <div className="group rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-slate-800 p-6 transition-all duration-200 hover:border-blue-300 dark:hover:border-blue-600 hover:bg-blue-50 dark:hover:bg-slate-700 hover:shadow-lg">
                    <h2 className="mb-3 text-2xl font-semibold text-slate-900 dark:text-slate-100">
                        Understand{' '}
                        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none text-blue-600 dark:text-blue-400">
                            →
                        </span>
                    </h2>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                        Learn from different perspectives and find common ground through meaningful conversation.
                    </p>
                </div>
            </div>

            {/* CTA section */}
            <div className="flex flex-col items-center gap-4 sm:flex-row">
                <button className="rounded-lg bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 px-6 py-3 font-semibold text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-slate-900">
                    Start a Conversation
                </button>
                <button className="rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-800 hover:bg-gray-50 dark:hover:bg-slate-700 px-6 py-3 font-semibold text-slate-900 dark:text-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-600 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-slate-900">
                    Learn More
                </button>
            </div>
        </main>
    )
}
