import Link from "next/link";

const LastTemplate = () => {

    return ( 
        <section className="container max-w-5xl mx-auto my-5">
            <div>
                <h2 className="mb-5 text-3xl font-bold text-left">Last Notion Template</h2>
                <div className="items-center p-10 mx-auto bg-gray-100 rounded-md md:flex space-between">
                    <div className="p-5 md:w-1/2">
                        <h2 className="mb-4 text-3xl font-semibold">Finance Tracker</h2>
                        <p className="mb-4 text-gray-600">A complete digital system to capture & organize all your knowledge, projects, notes, goals, and more.</p>
                        <Link href="/">
                            <a className="px-8 btn is-primary">Get it FREE</a>
                        </Link>
                        <Link href="/templates">
                            <a className="px-8 btn hover:underline">
                                More templates
                                <svg xmlns="http://www.w3.org/2000/svg" className="inline-block w-6 h-6 ml-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>
                        </Link>
                    </div>
                    <div className="md:w-1/2">
                        <img className="block w-1/2 h-auto mx-auto md:w-full " src="https://easlo.co/_next/image?url=https%3A%2F%2Fsuper-static-assets.s3.amazonaws.com%2Fd37dd8cb-6016-41ee-9ab3-55921f50416f%2Fimages%2Ff644c0ea-b366-41ae-8844-7fcac48796b2.png&w=640&q=80" alt="" />
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default LastTemplate;