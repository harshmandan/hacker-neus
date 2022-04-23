import React from 'react'
import Link from 'next/link'
import cs from 'clsx'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)

interface HNPost {
  by?: string
  descendants?: number
  id?: number
  kids?: number[]
  score?: number
  time?: number
  title?: string
  type?: string
  url?: string
}

const Posts: React.FC<{ posts: any }> = ({ posts }) => {
  return (
    <div>
      {posts &&
        posts.map((post: HNPost) => {
          return (
            <div key={post.id} className="my-2">
              <div className="flex flex-row">
                {post.url ? (
                  <a
                    href={post.url}
                    rel="noreferrer"
                    className="text-gray-300"
                    target="_blank">
                    {post.title}{' '}
                    <span className="text-gray-500 text-sm">
                      ({new URL(post.url).hostname.replace('www.', '')})
                    </span>
                  </a>
                ) : (
                  <Link href={`/post/${post.id}`}>
                    <a className="text-gray-300">
                      {post.title}{' '}
                      <span className="text-gray-700 text-sm">(self)</span>
                    </a>
                  </Link>
                )}
              </div>

              <div className="flex flex-row text-xs text-gray-500">
                <p
                  className={cs('mr-1', {
                    'text-orange-500': post.score && post.score > 300,
                  })}>
                  {post.score} points
                </p>
                <p className="mr-1">by {post?.by ?? ''}</p>
                <p className="mr-1 ">
                  {post.time && dayjs.unix(post.time).fromNow()} |
                </p>
                <Link href={`/post/${post.id}`}>
                  <a
                    className={cs(
                      'mr-1 text-gray-300',
                      post.descendants &&
                        post.descendants > 100 &&
                        '!text-orange-500',
                    )}>
                    <span>{post.descendants || 0}</span>
                    {` comment${post.descendants === 1 ? '' : 's'}`}
                  </a>
                </Link>
              </div>
            </div>
          )
        })}
    </div>
  )
}

export default Posts
