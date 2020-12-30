import React from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import axios from '../../utils/api'
import { useEffect, useState } from 'react'

const DynamicComponent = dynamic(import('./second.js'))
// const DynamicComponent = dynamic(() => {
//     import('./second.js').then((mod) => mod.Second)
//     // import('../../components/hello')
// })
function Home({posts}) {
    console.log(posts)
    let [curValue, setCurValue] = useState({
        name: 'test'
    })
    useEffect(async () => {
        let res = await axios.get('http://127.0.0.1:3000/getInfo')
        setCurValue((value) => ({
            ...value,
            ...res
        }))
    }, [])
    var getInfo = async function () {
        console.log('执行')
        let r = await axios.get('http://127.0.0.1:3000/getInfo')
    }
    return (
        <div>
            <ul>
                {posts.map((ele, index) => (
                    <li key={ele.id}>
                        <Link href={ele.name}>
                            <a>{ele.name}</a>
                        </Link>
                    </li>
                ))}
            </ul>
            <DynamicComponent />
            <div>homes</div>
            <div>
                {curValue.username || '-'}
            </div>
            <button onClick={() => getInfo()}>请求getInfo</button>
        </div>
    )
}

export async function getStaticProps() {
    const posts = [
        {
            name: '/home/about',
            id: 1
        },
        {
            name: '/home/second',
            id: 2
        }
    ]
    return {
        props: {
            posts
        }
    }
}

export default Home