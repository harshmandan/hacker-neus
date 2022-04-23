import React, { useEffect, useState } from 'react'
import { getItemById } from '../utils/hackernews-api'
import Link from 'next/link'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)

interface HNComment {
  by?: string
  id?: number
  kids?: number[]
  parent?: number
  text?: string
  time?: number
  type?: string
}

const Comment: React.FC<{ cId: number; className: string }> = ({
  cId,
  className,
}) => {
  let [comment, setComment] = useState<HNComment>({})

  async function fetchComment(cId: number) {
    await getItemById(cId).then((res) => {
      setComment(res)
    })
  }

  useEffect(() => {
    fetchComment(cId)
  }, [cId])

  const nestedComments = ((comment && comment.kids) || []).map((comment) => {
    return <Comment className={`ml-6`} key={comment} cId={comment} />
  })

  return (
    <div className={`text-sm ${className}`}>
      <div>
        <p className="text-xs text-gray-600">
          {`${comment?.by ?? ''} `}
          <Link href={`/post/${comment.id}`}>
            <a>
              {comment?.time ? dayjs.unix(comment.time ?? 0).fromNow() : ''}
            </a>
          </Link>
        </p>
      </div>
      <div
        className="mb-4 text-gray-400"
        dangerouslySetInnerHTML={{ __html: comment.text ?? '' }}></div>
      {nestedComments}
    </div>
  )
}

export default Comment
