import Parser from 'rss-parser'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import Slidebar1 from '../../components/organisms/slidebar_1'
import Slidebar2 from '../../components/organisms/slidebar_2'
import UserCards from '../../components/organisms/usercards'

/* export async function getStaticProps() {
  const url = '../data.json'
  const [data, setData] = useState({ GroupName: '', Member: [] })

  fetch(url)
      .then(res => res.json())
      .then(res => setData(res))

  return{
      props:{
          data
      }
  } 
}
 */

export default function Hinata() {
    return (
        <div>
            <UserCards></UserCards>
            <Slidebar2></Slidebar2>
        </div>
    )
}