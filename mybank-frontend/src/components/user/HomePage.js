import styles from "./HomePage.module.css";
import SpaceDiv from "../UI/SpaceDiv";

function HomePage() {
    return <div className={`${styles.mainDiv} flex-fill`}>
        <SpaceDiv height={5}/>
        <h6 className={styles.title}>This is Sai Eswar,Hareendra,Faizan</h6>
        <h1 className={styles.title}>Welcome to MyBank</h1>
        <p className={styles.subtitle}> Welcome to our bank, where we are committed to providing exceptional financial services to individuals,
            businesses,
            and communities. Our bank is built on a foundation of trust and reliability and with a team of
            professionals.
        </p>
    </div>;
}

export default HomePage;