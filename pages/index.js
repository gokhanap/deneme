import Layout from '../components/layout'
import Head from 'next/head'
import Link from 'next/link'
import slug from 'slug'

function HomePage({ characters }) {
  // console.log(characters)
  return (<Layout>
    <Head>
      <title>Anasayfa</title>
    </Head>
    <h1>Merhaba! Anasayfaya hosgeldin.</h1>
    <ul>
      {characters.results.map(character => (
        <li key={character.id}>
          <Link href="/character/[slug]"
            as={`/character/${slug(character.name)}-${character.id}`}>
            <a>{character.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  </Layout>)
}

export async function getStaticProps(context) {
  const data = await fetch("https://rickandmortyapi.com/api/character")
    .then(res => res.json())

  return {
    props: {
      characters: data
    }
  }
}
export default HomePage