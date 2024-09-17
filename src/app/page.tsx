import Image from 'next/image';

export default function Home() {
  return (
    <div className='relative h-full lg:h-[140vh]'>
      <main className='relative pb-24 pl-4 lg:space-y-24 lg:pl-16'>
        <div className='flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12'>
          <div className='absolute left-0 top-0 -z-10 flex h-[95vh] w-screen flex-col bg-black'></div>
          <h1 className='text-2xl font-bold md:text-4xl lg:text-7xl'>
            The Wicher
          </h1>
          <p className='max-w-xs drop-shadow-md md:max-w-lg md:text-lg lg:max-w-2xl'>
            Geralt of rivia, a solitary monster hunter, struggles to find his
            place in a world where people often prove more wicked than beasts.
          </p>
        </div>
        <button className='w-24 rounded-full bg-white px-4 py-2 font-bold text-black md:w-32 lg:w-40'>
          Play
        </button>
      </main>
    </div>
  );
}
