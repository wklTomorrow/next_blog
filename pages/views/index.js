import { useRouter } from 'next/router'
function ViewPages({posts}) {
    const router = useRouter()
    const query = router.query;
    console.log(query)
    const goBack = () => {
        router.push('/')
    }
    return (
        <div>
            views-pages
            <div>
                {posts[0]}
            </div>
            <button onClick={goBack}>回退</button>
        </div>
    )
}

// // 此函数在构建时被调用
// export async function getStaticPaths(params) {
//     console.log(params)
//     return {
//         paths: [
//             {params: {id: 1}},
//             {params: {id: 2}}
//         ],
//         fallback: false
//     }
// }

// 此函数在构建时被调用
export async function getStaticProps({params}) {
    console.log(params)
    const posts = [
        10
    ]
    return {
      props: {
        posts,
      },
      revalidate: 1
    }
}

export default ViewPages;
