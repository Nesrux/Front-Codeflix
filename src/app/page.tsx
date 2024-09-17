import Image from 'next/image';

export default function Home() {
  return (
    <div className='relative h-full lg:h-[140vh]'>
      <main className='relative pb-24 pl-4 lg:space-y-24 lg:pl-16'>
        <div className='flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12'>
          <div className='left-0 top-0 -z-10 flex h-[95vh] w-screen flex-col bg-black'></div>
        </div>
      </main>
    </div>
  );
}
