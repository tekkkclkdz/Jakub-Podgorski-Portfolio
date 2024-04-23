import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex justify-center  items-center h-100% py-16 bg-black">
      <main className="flex flex-col items-center">
        <h1 className="text-2xl font-bold font-light text-white">jpodgorskix@gmail.com</h1>
        <Link href="https://www.instagram.com/tujacob_witam/" className="text-white text-2xl py-12 font-light">@tujacob_witam</Link>
        <h1 className="text-2xl font-bold font-light text-white">+48 696 282 865</h1>
      </main>
    </div>
  );
}