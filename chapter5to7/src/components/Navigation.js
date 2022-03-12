import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Navigation.module.css"

function Navigation() {
	return (
		<div className={styles.container}>
			<Link to="/" className={styles.link}>
				<div className={styles.div}>home</div>
			</Link>
			<Link to="/about" className={styles.link}>
				<div className={styles.div}>about</div>
			</Link>
		</div>
	);
}

export default Navigation;
