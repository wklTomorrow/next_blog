import {useRouter} from 'next/router'
import { useEffect } from 'react';
function ContentBody() {
    const router = useRouter();
    const clickThis = () => {
        router.push({
            pathname: '/views',
            query: {
                id: 10
            }
        })
    }
    return (
        <div>
            hello world
            <button onClick={clickThis}>点我</button>
        </div>
    )
}

export default ContentBody;