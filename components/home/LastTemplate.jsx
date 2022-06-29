import Link from "next/link";

const LastTemplate = () => {

    return ( 
        <section className="container max-w-5xl mx-auto my-5">
            <div>
                <h2 className="mb-5 text-3xl font-bold text-left dark:text-cyan-500">Last Notion Template</h2>
                <div className="items-center p-10 mx-auto bg-gray-100 rounded-md dark:bg-slate-800 md:flex space-between dark:ring-1 dark:ring-white/10 dark:ring-inset">
                    <div className="p-5 md:w-1/2">
                        <h2 className="mb-4 text-3xl font-semibold dark:text-gray-200">Bullet Journal</h2>
                        <p className="mb-4 text-gray-600 dark:text-gray-400">
                            Starting with the ‘Cover’ it goes through creating a month, week and day which the user sets up goals at each phase.
                        </p>
                        <Link href="/">
                            <a className="px-8 btn is-primary">Get it FREE</a>
                        </Link>
                        <Link href="/notion/templates">
                            <a className="px-8 btn hover:underline dark:text-gray-200">
                                More templates
                                <svg xmlns="http://www.w3.org/2000/svg" className="inline-block w-6 h-6 ml-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>
                        </Link>
                    </div>
                    <div className="md:w-1/2">
                        <img className="block w-1/2 h-auto mx-auto md:w-full " src="/images/notion/templates/bullet-journal.png" alt="" />
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default LastTemplate;