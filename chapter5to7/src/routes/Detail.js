import { Link, useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import styles from "./Detail.module.css";
import Loading from "../components/Loading";

function Detail() {
	const { id } = useParams();
	const [loading, setLoading] = useState(true);
	const [movie, setMovie] = useState({});
	const getDetail = async () => {
		const json = await (
			await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
		).json();
		setMovie(json.data.movie);
		setLoading(false);
	};
	useEffect(() => {
		getDetail();
	}, []);
	return loading ? (
		<Loading />
	) : (
		<div>
			<h1 className={styles.title}>{movie.title}</h1>
			<img
				src={movie.large_cover_image}
				style={{
					display: "block",
					margin: "30px 5px",
				}}
			/>
			<span className={styles.attr}>year: {movie.year}</span>
			<span className={styles.attr}>rating: {movie.rating}</span>
			<span className={styles.attr}>
				download_count: {movie.download_count}
			</span>
			<span className={styles.attr}>like_count: {movie.like_count}</span>
			<br />
			<br />
			<div className={styles.div}>{movie.description_full}</div>
			<Link to="/">
				<button className={styles.btn}>Return</button>
			</Link>
		</div>
	);
}
export default Detail;
