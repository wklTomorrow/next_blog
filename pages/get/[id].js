export function getStaticPaths() {
    return {
        paths: [
            {params: {id: '1'}},
            {params: {id: '2'}},
        ],
        fallback: false
    }
}

export function getStaticProps({params}) {
    return {
        props: {
            post: {
                id: params.id
            }
        }
    }
}

function Get({post}) {
    console.log(post.id)
    return (
        <div>{post.id}
            hello {post.id}
        </div>
    )
}

export default Get