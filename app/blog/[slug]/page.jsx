import { GET_POST_BY_SLUG } from '../../../queries';
import client from '../../../apollo-client';
import { notFound } from 'next/navigation';
import parse from 'html-react-parser';
import Link from 'next/link';

async function getPostData(slug) {
  try {
    const { data } = await client.query({
      query: GET_POST_BY_SLUG,
      variables: { id: slug },
    });
    if (!data || !data.post) {
      return null;
    }
    return data.post;
  } catch (error) {
    console.error("Erreur lors de la récupération de l'article :", error);
    return null;
  }
}

export default async function Post({ params }) {
  const post = await getPostData(params.slug);

  if (!post) {
    notFound(); // Affiche une page 404 si l'article n'est pas trouvé
  }

  return (
    <div className="container mx-auto p-4">
      <section className='max-w-6xl w-full mx-auto px-2 text-center flex flex-col gap-3 justify-center items-center h-40 rounded-xl mt-4 bg-blue-700 text-white'>

        <h1 className='text-4xl font-bold'>{post.title}</h1>
      </section>
      <section className='max-w-6xl w-full mx-auto mt-10 grid lg:grid-cols-3 gap-6 px-2 grid-cols-1' >
        <div className=' lg:col-span-2 col-span-1'>{parse(post.content)}</div>
        <div className='w-ful h-full  border-l border-blue-950 text-right px-3'>
          <h3 className='font-semibold text-xl underline text-blue-700'>Autres Articles</h3>
        </div>

      </section>
    </div>
  );
}