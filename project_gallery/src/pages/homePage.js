import styles from "./homePage.module.css";
import TabSelect from "../components/TabSelect";
import { Text } from "@geist-ui/core";

function HomePage() {
    let profileName = "Papgooner";
    
    return (
        <div>
            <header className={styles.header}>
                <Text className={styles.title}>My Projects</Text>
                <div className={styles.NavBarDiv}>
                    <TabSelect />
                </div>
            </header >
            <section className={styles.titleSection}>
                <Text className={styles.sectionHeader}>thing</Text>
            </section>
            <section className={styles.itemSection}>
            </section>
            <footer>
            </footer>
        </div >
    )
}

export default HomePage;