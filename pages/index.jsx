import Head from 'next/head'
import About from '../components/home/About'
import Hero from '../components/home/Hero'
import LastTemplate from '../components/home/LastTemplate'
import RecentPosts from '../components/home/RecentPosts'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Welcome to Codersei</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />

      <div className='container max-w-5xl mx-auto'>

        <RecentPosts />

        <span className='block my-16'></span>
        
        <LastTemplate />
      </div>
      
    </div>
  )
}