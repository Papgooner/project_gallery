import styles from "./homePage.module.css";
import ItemList from "../components/itemList";
import NavBar from "../components/navBar";
import { Text } from "@geist-ui/core";
import Profile from "../components/profile";

function HomePage() {
    let profileName = "Papgooner";
    
    return (
        <div>
            <header className={styles.header}>
                <Text className={styles.title}>Part Selector</Text>
                <Profile profileName={profileName} />
                <div className={styles.NavBarDiv}>
                    <NavBar />
                </div>
            </header >
            <section className={styles.titleSection}>
                <Text className={styles.sectionHeader}>Parts</Text>
            </section>
            <section className={styles.itemSection}>
            </section>
            <footer>
            </footer>
        </div >
    )
}

export default HomePage;