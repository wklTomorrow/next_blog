function ViewPages({posts}) {
    return (
        <div>
            views-pages
            <div>
                {posts[0]}
            </div>
        </div>
    )
}

// // 此函数在构建时被调用
// export async function getStaticPaths() {
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
