import Head from 'next/head'
import Link from 'next/link'
import Date from '../components/date'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import { useEffect, useState } from 'react'
import Slidebar2 from '../components/organisms/slidebar_2'
import HomeSlider from '../components/organisms/HomeSlider'


export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {
  return (
    /*
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Slidebar2></Slidebar2>
      <section className={utilStyles.headingMd}>
        <p>日向坂46ファースト写真集</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
            <Link href={`/posts/${id}`}>
              <a>{title}</a>
            </Link>
            <br />
            <small className={utilStyles.lightText}>
              <Date dateString={date} />
            </small>
          </li>
          ))}
        </ul>
        <p>
        <Link href='https://www.hinatazaka46.com/'>
          <a>日向坂46</a>
        </Link>
        </p>
        <p>
          <Link href='/article/hinata'>
            <a>推しメンページ</a>
          </Link>
        </p>
        <p>
        <Link href='https://www.hinatazaka46.com/s/official/diary/member/list?ima=0000&ct=18'>
          <a>松田好花</a>
        </Link>
        </p>
        {FEEDS.map((feed) => (
          <Link key={feed.slug} href={`/feeds/${feed.slug}`}>
            <a className="p-4 border border-gray-200 hover:border-gray-500 rounded-lg">
              {feed.title}
              <br />
            </a>
          </Link>
        ))}
      </section>
    </Layout>
    */
    <div>
      <Slidebar2 />
      <HomeSlider />
    </div>
  )
}