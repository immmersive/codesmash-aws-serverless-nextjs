import Image from 'next/image'
import Link from 'next/link';

export default function About() {
    return (
        <main className="flex flex-col items-center justify-between p-24">
            <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
                <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
                    Get started by editing&nbsp;
                    <code className="font-mono font-bold">pages/about.tsx</code>
                </p>
            </div>
            <div className='h-20'></div>
            <div>
                <Link href="/">
                    <h1>Go back</h1>
                </Link>
            </div>
        </main>
    )
}
