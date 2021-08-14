import Parser from 'rss-parser'
import Head from 'next/head'
import { useEffect } from 'react'
import Slidebar1 from '../../components/organisms/slidebar_1'
import Slidebar2 from '../../components/organisms/slidebar_2'
import CSSModuleTest from '../../components/organisms/CSSModuleTest'
import UserCards from '../../components/organisms/usercards'
const CORS_PROXY = "https://cors-anywhere.herokuapp.com/"
const parser = new Parser();
const url = CORS_PROXY + "http://ino.xrea.jp/hinatazaka46/?id=18"
const sampleurl = CORS_PROXY + "https://zenn.dev/hiro/feed"


export default function Hinata() {
    return (
        <div>
            <UserCards></UserCards>
            <Slidebar2></Slidebar2>
        </div>
    )
}