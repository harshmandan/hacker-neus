import type {
  GetServerSideProps,
  GetServerSidePropsContext,
  NextPage,
} from 'next'
import { getTopPostsByPage } from '../utils/hackernews-api'
import HomeLayout from '../components/layouts/HomeLayout'
import Posts from '../components/Posts'
import Navigation from '../components/Navigation'

const Home: NextPage<{ posts: any }> = ({ posts }) => {
  return (
    <HomeLayout>
      <Posts posts={posts} />
      <Navigation />
    </HomeLayout>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext,
) => {
  const page = context?.params?.pageId || 1
  const res = await getTopPostsByPage(Number(page))

  return {
    props: {
      posts: res,
    },
  }
}
