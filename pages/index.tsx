import Image from 'next/image'
import Link from 'next/link';

export default function Index() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
                <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
                    Get started by editing&nbsp;
                    <code className="font-mono font-bold">pages/index.tsx</code>
                </p>
                <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
                    <a
                        className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
                        href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        By

                        <Image
                            src="/vercel.svg"
                            alt="Vercel Logo"
                            className="dark:invert"
                            width={100}
                            height={24}
                            priority
                        />
                    </a>
                </div>
            </div>

            <div className="relative flex flex-col place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
                <Image
                    className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                    src="/next.svg"
                    alt="Next.js Logo"
                    width={180}
                    height={37}
                    priority
                />

                <div className='pt-5'>
                    <Image
                        className="relative"
                        src="/codesmash.png"
                        alt="CodeSmash Logo"
                        width={400}
                        height={100}
                        priority
                    />
                </div>
            </div>
            <Link href="/about">
                <h1>Get Started</h1>
            </Link>

            <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
                <a
                    href="https://codesmash.studio"
                    className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <div className={`flex items-center h-12`}>
                        <h2 className={`text-2xl font-semibold mr-2`}>CodeSmash</h2>
                        <Image
                            src="/arrow.svg"
                            alt="Out arrow"
                            className="dark:invert"
                            width={10}
                            height={10}
                            priority />
                    </div>
                    <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                        CodeSmash is a platform where you can deploy apps to your private AWS account.
                    </p>
                </a>

                <a
                    href="https://codesmash.studio/deploy/codesmash-aws-serverless-web"
                    className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <div className={`flex items-center h-12`}>
                        <h2 className={`text-2xl font-semibold mr-2`}>Web Hosting</h2>
                        <Image
                            src="/arrow.svg"
                            alt="Out arrow"
                            className="dark:invert"
                            width={10}
                            height={10}
                            priority />
                    </div>
                    <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                        Deploy a Serverless Web Hosting for your Next.js website with CodeSmash.
                    </p>
                </a>

                <a
                    href="https://codesmash.studio/deploy/codesmash-aws-serverless-api"
                    className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                    target="_blank"
                    rel="noopener noreferrer"
                >                    
                    <div className={`flex items-center h-12`}>
                        <h2 className={`text-2xl font-semibold mr-2`}>REST API</h2>
                        <Image
                            src="/arrow.svg"
                            alt="Out arrow"
                            className="dark:invert"
                            width={10}
                            height={10}
                            priority />
                    </div>
                    <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                        Deploy a Serverless REST API for your Next.js website with CodeSmash.
                    </p>
                </a>

                <a
                    href="https://codesmash.studio/deploy/codesmash-aws-serverless-nextjs"
                    className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <div className={`flex items-center h-12`}>
                        <h2 className={`text-2xl font-semibold mr-2`}>Deploy</h2>
                        <Image
                            src="/arrow.svg"
                            alt="Out arrow"
                            className="dark:invert"
                            width={10}
                            height={10}
                            priority />
                    </div>
                    <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                        Deploy your Next.js boilerplate with CodeSmash.
                    </p>
                </a>
            </div>
        </main>
    )
}
