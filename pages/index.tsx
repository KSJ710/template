import Link from "next/link"

export default function Index() {
  return (
    <div className='w-48 h-screen mx-auto bg-red-200'>
      <div className='w-auto h-full flex justify-center items-center'>
        <Link href='/template'>
          <a className='btn btn--orange btn--radius'>開始</a>
        </Link>
      </div>
      <style jsx>{``}</style>
    </div>
  )
}
