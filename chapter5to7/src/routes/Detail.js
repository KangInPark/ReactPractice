import { useParams } from "react-router-dom";
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
		<div
			className={styles.container}
			style={{
				backgroundImage: `radial-gradient(circle at right , rgba(0,0,0,0) 0%, rgba(0,0,0,1) 70%, rgba(0,0,0,1) 100%), url("${movie.background_image}")`,
			}}
		>
			<h1 className={styles.title}>{movie.title}</h1>
			<img src={movie.large_cover_image} alt="" className={styles.img} />
			<div className={styles.items}>
				<div className={styles.attr}>year: {movie.year}</div>
				<div className={styles.attr}>rating: {movie.rating}</div>
				<div className={styles.attr}>
					download_count: {movie.download_count}
				</div>
				<div className={styles.attr}>like_count: {movie.like_count}</div>
			</div>
			<div className={styles.div}>{movie.description_full}</div>
		</div>
	);
}
export default Detail;
