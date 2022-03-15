import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import styles from "./About.module.css";
import { FaGithubSquare } from "react-icons/fa";

function About() {
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		setLoading(false);
	}, []);
	return loading ? (
		<Loading />
	) : (
		<div className={styles.container}>
			<h1 className={styles.title}>About Me</h1>
			<div className={styles.item}>Name : KangIn Park</div>
			<div className={styles.item}>BirthDay : 1996.07.23</div>
			<div className={styles.item}>Email : pkihome@naver.com</div>
			<div className={styles.item}>
				<a href="https://github.com/KangInPark">
					<FaGithubSquare className={styles.icon} />
				</a>
			</div>
		</div>
	);
}
export default About;
