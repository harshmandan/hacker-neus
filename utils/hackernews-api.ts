import paginate from './paginate'

const BASE = 'https://hacker-news.firebaseio.com/v0/'
const TOP = 'topstories.json'
const PRETTY = '?print=pretty'

export const getTopPostsByPage = async (page: number, pagination = 30) => {
  const res: any = await fetch(`${BASE}${TOP}${PRETTY}`).then(async (res) => {
    const resData: any = await res.json()
    return Promise.all(
      paginate(resData, pagination, page).map(async (postId) => {
        let res = await fetch(`${BASE}item/${postId}.json${PRETTY}`)
        const resData: any = await res.json()
        return resData
      }),
    )
  })
  return res
}

export const getItemById = async (id: any) => {
  const res: any = await fetch(`${BASE}item/${id}.json${PRETTY}`)
  const resData = await res.json()
  return resData
}
