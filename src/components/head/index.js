import Head from 'next/head';

function IndexHead() {
    return (
        <div>
            <Head>
                <title>my next_study</title>
                <meta property="og:title" content="My page title" key="title" charSet="utf-8"></meta>
            </Head>
        </div>
    )
}

export default IndexHead;
