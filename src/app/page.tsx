import Image from 'next/image'
import NavBar from '@/components/layout/head/NavBar'

export default function Home() {
  return (
    <>
      {/* <main className="flex min-h-screen flex-col items-center justify-between p-0">
        <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
          Some Content Here..
        </div>
      </main> */}
      <NavBar />
      
      <main className="main-container flex min-h-screen flex-col items-center justify-between px-32 py-8">
        <div className="main-wrapper z-10 w-full max-w-5xl items-center justify-between font-mono text-md lg:flex">
          <div>Home page</div>
        </div>
      </main>
    </>
  )
}
