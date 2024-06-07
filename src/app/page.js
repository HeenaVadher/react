'use client'
import Navbar from "@/components/Navbar";
import CardSlider from "@/components/CardSlider";
import Footer from "@/components/Footer";
// import { useRouter } from 'next/router';
import { useRouter } from 'next/navigation';
import { Fade, Slide } from "react-awesome-reveal";

export default function Home() {

  const router = useRouter();

  return (
    <main className="flex min-h-screen flex-col font-Manrope">

      <Navbar />
      {/*----------Main Starts- ------------- */}
      <div className="md:no-scrollbar sm:px-8 px-4 sm:py-7 py-5 bg-snowpink cursor-default">
        <section className="">
          <div className="grid sm:grid-cols-2   place-content-between xl:-space-x-4   sm:space-y-0 space-y-4">
            <Slide>

              <div className="flex transition transform flex-col sm:mt-10 mt-5 sm:pl-5 xl:gap-y-5 gap-y-2 justify-center align-middle">
                <h3 className="text-fireRed  font-extrabold lg:text-[22px] tracking-wider ">WELCOME TO FETISHFINDER</h3>
                <h1 className="text-darkBlue lg:leading-[68px] opacity-[80%] lg:text-[39px] md:text-[28px] text-[20px] font-extrabold tracking-normal">Embrace Your Desires, <br />Connect Without Judgment</h1>
                <p className="text-spanishGray font-Manrope font-normal md:ml-[6px] text-left md:mt-[1px] tracking-wider text-[14px] leading-7 md:leading-[30px] xl:w-[520px] md:w-[95%] w-full">We believe that everyone deserves a safe and accepting space to connect with like-minded individuals.  We understand that people with fetishes often face stigma and judgment in traditional dating environments, which is why we created FetishFinder.</p>
                <div className="sm:flex hidden md:gap-6 gap-2 px-1 py-3">
                  <button type="button" onClick={() => router.push('/login')} className="lg:px-20 px-10 py-2 md:py-[14px] leading-6 bg-fireRed border-[1px] border-fireRed text-white font-medium text-lg rounded-full">Login</button>
                  <button type="button" onClick={() => router.push('/register')} className="lg:px-16 px-8 py-2 md:py-[14px] leading-6 border-[1px] border-fireRed text-fireRed rounded-full text-lg font-medium ">Register</button>
                </div>
                <div className="flex sm:hidden justify-center lg:gap-6 gap-2 px-1 py-3">
                  <button type="button" onClick={() => router.push('/login')} className="md:px-20 px-10 py-2 md:py-[14px] leading-6 border-[1px] border-[#FFE0E0] text-black font-[500] text-lg rounded-full" >Login</button>
                  <button type="button" onClick={() => router.push('/register')} className="md:px-16 px-8 py-2 md:py-[14px] leading-6 border-[1px] bg-fireRed border-fireRed text-white rounded-full text-lg font-[500] ">Signup</button>
                </div>
              </div>
            </Slide>
            <Slide direction="down">
              <div className="grid grid-cols-2  lg:gap-6 gap-4  ">
                <img src="/Images/main_img1.png" alt="Mobile 1" className="  w-full h-full" />
                <img src="/Images/main_img2.png" alt="Mobile 2" className="  w-full h-full" />
              </div>
            </Slide>
          </div>
        </section>
      </div>
      {/* ----------Slider---------- */}
      <div className="mt-5 ">
        <h1 className="text-darkBlue opacity-[80%] font-extrabold text-[22px] sm:text-[44px] text-center tracking-[0.025rem]">What is Fetish Finder?</h1>
        <CardSlider />
      </div>

      {/* -----------Page----------- */}

      <div className="bg-lightGray pt-8 pb-12 grid gap-y-6 items-center sm:justify-center px-4 sm:px-8 md:px-10">
        <h1 className="text-darkBlue  opacity-[80%] font-extrabold text-[22px] sm:text-[46px] text-center tracking-[0.025rem]">Our Social Media</h1>
        <div className="grid sm:grid-cols-2 sm:gap-x-4 gap-y-3">
          <Slide direction="up" duration="1000">
            <div className="xl:px-24 lg:px-20 md:px-10 px-2 xl:py-4 py-2 border-[0.5px] border-[#0000001A] bg-fireRed items-center text-white justify-center flex rounded-lg  lg:gap-x-8 gap-x-4 shadow-[0_3px_20px_-2px_rgba(0,0,0,0.5)] shadow-slate-400">
              <span><img src="/Images/Insta.png" className="w-[40px] h-[40px] lg:w-full lg:h-full" /></span>
              <h1 className="xl:text-[22px] text-base md:leading-8 font-semibold">CHECK OUR INSTAGRAM</h1>
            </div>
            <div className="xl:px-24 lg:px-20 md:px-10 px-2 xl:py-4 py-2  border border-[#000000] items-center text-black justify-center flex rounded-lg lg:gap-x-8 gap-x-4 shadow-[0_3px_20px_-2px_rgba(0,0,0,0.5)] shadow-slate-400">
              <span><img src="/Images/Original.svg" className="w-[40px] h-[40px] lg:w-full lg:h-full" /></span>
              <h1 className="xl:text-[22px] text-base md:leading-8 font-semibold">CHECK OUR TWITTER</h1>
            </div>
          </Slide>
        </div>
      </div>
      <Footer />
    </main>
  );
}


//   <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
{/* <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
Get started by editing&nbsp;
<code className="font-mono font-bold">src/app/page.js</code>
</p>
<div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
<a
  className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
  href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
  target="_blank"
  rel="noopener noreferrer"
>
  By{" "}
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

<div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
<Image
className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
src="/next.svg"
alt="Next.js Logo"
width={180}
height={37}
priority
/>
</div>

<div className="mb-32 grid text-center lg:max-w-5xl  lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
<a
href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
target="_blank"
rel="noopener noreferrer"
>
<h2 className={`mb-3 text-2xl font-semibold`}>
  Docs{" "}
  <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
    -&gt;
  </span>
</h2>
<p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
  Find in-depth information about Next.js features and API.
</p>
</a>

<a
href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
target="_blank"
rel="noopener noreferrer"
>
<h2 className={`mb-3 text-2xl font-semibold`}>
  Learn{" "}
  <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
    -&gt;
  </span>
</h2>
<p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
  Learn about Next.js in an interactive course with&nbsp;quizzes!
</p>
</a>

<a
href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
target="_blank"
rel="noopener noreferrer"
>
<h2 className={`mb-3 text-2xl font-semibold`}>
  Templates{" "}
  <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
    -&gt;
  </span>
</h2>
<p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
  Explore starter templates for Next.js.
</p>
</a>

<a
href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
target="_blank"
rel="noopener noreferrer"
>
<h2 className={`mb-3 text-2xl font-semibold`}>
  Deploy{" "}
  <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
    -&gt;
  </span>
</h2>
<p className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance`}>
  Instantly deploy your Next.js site to a shareable URL with Vercel.
</p>
</a>
</div> */}