import Head from 'next/head'
import { useRouter } from 'next/router'

export default function NotionTemplates() {

    const router = useRouter()
    const { templateId } = router.query
    
    return (
    <div>
        <Head>
        <title>Template Name | Codersei.me</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className='container max-w-5xl mx-auto'>
            <h1 className='my-8 text-3xl font-bold dark:text-cyan-500'>Notion Templates</h1>

        <p className="mb-8 font-normal text-gray-500 dark:text-gray-300">
            {templateId}
        </p>
            
        </div>
    </div>
    )
}