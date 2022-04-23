import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import React from 'react'
import Comment from './Comment'
dayjs.extend(relativeTime)

const Comments: React.FC<{ item: any }> = ({ item }) => {
  return (
    <div>
      {item.text && (
        <div
          className="text-sm text-gray-400 mb-4"
          dangerouslySetInnerHTML={{ __html: item.text }}></div>
      )}

      <div className={`${item.text ? 'ml-6' : 'my-6'}`}>
        {item.kids &&
          item.kids.map((comment: any) => {
            return <Comment key={comment} cId={comment} className="" />
          })}
      </div>
    </div>
  )
}

export default Comments
