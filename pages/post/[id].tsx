import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import CommentsView from '../../components/Comments'
import HomeLayout from '../../components/layouts/HomeLayout'
import PostInfo from '../../components/PostInfo'
import { getItemById } from '../../utils/hackernews-api'

const Item: React.FC<{ item: any }> = ({ item }) => {
  return (
    <HomeLayout>
      <PostInfo item={item} />
      <CommentsView item={item} />
    </HomeLayout>
  )
}

export default Item

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext,
) => {
  const post = await getItemById(context?.params?.id)

  return {
    props: {
      item: post,
    },
  }
}
