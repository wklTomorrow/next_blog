import {useRouter} from 'next/router'
function About() {
    const router = useRouter();
    return (
        <div onClick={() => router.push('/home')}>about</div>
    );
}

export default About;
