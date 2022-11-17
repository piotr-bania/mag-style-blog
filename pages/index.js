import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h1>The main title goes here, header 1</h1>
      <h2>Article number, narrow, heder 2</h2>
      <h3>Subtitle of an article, narrow, header 3</h3>
      <h4>Smaller subtitle, also narrow, header 4</h4>
      <p>This is a paragraph. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero numquam dolore, voluptate praesentium magnam enim distinctio quasi nemo molestias inventore!</p>
      <Link href="/subscribe">This is a link</Link>
    </div>
  )
}
