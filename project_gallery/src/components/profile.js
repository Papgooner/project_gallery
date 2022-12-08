import { Circle } from "@geist-ui/icons";
import { useTheme, Text } from "@geist-ui/core";
import styles from "./profile.module.css";
function Profile(props) {
    const { palette } = useTheme()
    return (
        <div className={styles.ProfileDiv}>
            <Circle color="green" className={`${styles.block} ${styles.circ}`} />
            <div className={styles.block}>
            <Text>{props.profileName}</Text>
            </div>
        </div>
    )
}

export default Profile;