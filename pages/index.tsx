import Link from "next/link"

export default function Index() {
  return (
    <div className='container mx-auto w-full h-screen bg-yellow-300'>
      <div className='flex justify-center items-center w-auto h-full'>
        <Link href='/user'>
          <a className='btn btn--orange btn--radius'>クリック</a>
        </Link>
      </div>
      <style jsx>{`
        .btn--orange,
        .btn--orange {
          color: #fff;
          background-color: #eb6100;
        }
        .btn--orange:hover,
        .btn--orange:hover {
          color: #fff;
          background: #f56500;
        }

        .btn--radius {
          padding: 5px 30px;
          border-radius: 100vh;
          display: inline-block;
          text-align: center;
        }
      `}</style>
    </div>
  )
}
