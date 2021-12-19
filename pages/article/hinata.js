import Head from 'next/head'
import { useEffect, useState } from 'react'
import Slidebar2 from '../../components/organisms/slidebar_2'
import UserCards from '../../components/organisms/usercards'

export default function Hinata() {
    return (
        <div>
            <UserCards></UserCards>
            <Slidebar2></Slidebar2>
        </div>
    )
}