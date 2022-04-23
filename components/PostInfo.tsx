import cs from 'clsx'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import Link from 'next/link'
dayjs.extend(relativeTime)

const PostInfo: React.FC<{ item: any }> = ({ item }) => {
  return (
    <div key={item.id} className="mt-2 text-gray-400">
      <div className="flex flex-row">
        <a href={item.url} rel="noreferrer" target="_blank">
          {item.title}{' '}
          <span className="text-gray-500 text-sm">
            (
            {item.url ? new URL(item.url).hostname.replace('www.', '') : 'self'}
            )
          </span>
        </a>
      </div>
      <div className="flex flex-row text-xs text-gray-500">
        <p className={cs('mr-1', { 'text-orange-500': item.score > 300 })}>
          {item.score + ' '}
          points
        </p>
        <p className="mr-1">{item?.by ? `by ${item.by}` : ''}</p>
        <p className="mr-1">{dayjs.unix(item.time).fromNow()} |</p>

        <Link href={`/post/${item.id}`}>
          <a
            className={cs('mr-1', {
              'text-orange-500': item.descendants > 100,
            })}>
            {item.descendants || 0}
            {` comment${item.descendants === 1 ? '' : 's'}`}
          </a>
        </Link>
      </div>
    </div>
  )
}

export default PostInfo
