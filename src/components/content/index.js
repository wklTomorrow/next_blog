import Footer from './footer/index';
import styles from  './index.module.scss';
import ContentBody from './ContentBody';

function Content() {
    return (
        <div className={styles.main}>
            <ContentBody></ContentBody>
            <Footer></Footer>
        </div>
    )
}

export default Content;