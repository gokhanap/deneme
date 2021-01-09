import Layout from '../../components/layout'
import Head from 'next/head'
import slug from 'slug'

function CharacterDetail({ character }) {
  return (
    <Layout>
      <Head>
        <title>Character</title>
      </Head>
    <div>{character.name}</div>
    <figure>
      <img src={character.image} alt={character.name}/>
    </figure>
    </Layout>
  )
}

export async function getStaticPaths() {
  const data = await fetch("https://rickandmortyapi.com/api/character").then(res => res.json())
  return {
    paths: data.results.map(character => {
      return { params: { slug: `${slug(character.name)}-${character.id}` } }
    }),
    fallback: false // See the "fallback" section below
  };
}

export async function getStaticProps({params}) {
  const id = params.slug.split('-').slice(-1)[0]
  const data = await fetch("https://rickandmortyapi.com/api/character/" + id)
    .then(res => res.json())
  return {
    props: {
      character: data
    }
  }
}
export default CharacterDetail