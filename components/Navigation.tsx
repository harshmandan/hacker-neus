import Link from 'next/link'
import { useRouter } from 'next/router'

const Navigation: React.FC<{}> = () => {
  const router = useRouter()
  return (
    <div className="text-orange-500 w-full flex justify-between py-4">
      {router.asPath != '/' && (
        <Link
          href={`/${
            router.asPath === ('/2' || '/1')
              ? ''
              : parseInt(router.asPath.replace('/', '')) - 1
          }`}>
          <a className="mr-6">&lt; Back</a>
        </Link>
      )}

      <Link
        href={`/${
          router.asPath === '/'
            ? '2'
            : parseInt(router.asPath.replace('/', '')) + 1
        }`}>
        <a>Next &gt;</a>
      </Link>
    </div>
  )
}

export default Navigation
