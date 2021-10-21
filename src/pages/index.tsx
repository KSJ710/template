/* eslint-disable tailwindcss/no-custom-classname */
import Link from 'next/link';

export default function Index() {
  return (
    <div className="container mx-auto w-full h-screen bg-@006e54">
      <div className="flex justify-center items-center w-auto h-full">
        <Link href="/template">
          <a className="btn btn--orange btn--radius">クリック</a>
        </Link>
      </div>
      <style jsx>{``}</style>
    </div>
  );
}
