import { AiOutlineReload } from "react-icons/ai";
import styles from "./Loading.module.css";

function Loading() {
	return (
		<div className={styles.container}>
			<AiOutlineReload className={styles.load} />
            <h1>Now Loading...</h1>
		</div>
	);
}
export default Loading;
