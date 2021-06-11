import React, { useState, useEffect } from "react";
import {
	Container,
	AppBar,
	Typography,
	Grow,
	Grid,
	Button,
} from "@material-ui/core";
import useStyles from "./styles";
export const Information = () => {
	const [topArtistsShort, setTopArtistsShort] = useState();
	const [topArtistsMed, setTopArtistsMed] = useState();
	const [topArtistsAllTime, setTopArtistsAllTime] = useState();


	const [topSongsShort, setTopSongsShort] = useState();
	const [topSongsMed, setTopSongsMed] = useState();
	const [topSongsAllTime, setTopSongsAllTime] = useState();


	const [chosenArtistLength, setChosenArtistLength] = useState();
	const [chosenSongsLength, setChosenSongsLength] = useState(); 
	const classes = useStyles();

	function getHashParams() {
		var hashParams = {};
		var e,
			r = /([^&;=]+)=?([^&;]*)/g,
			q = window.location.hash.substring(1);
		while ((e = r.exec(q))) {
			hashParams[e[1]] = decodeURIComponent(e[2]);
		}
		return hashParams;
	}
	var params = getHashParams();

	const token = params.access_token;

	useEffect(async () => {
		const short_term = await fetch(
			"https://api.spotify.com/v1/me/top/artists?time_range=short_term&limit=10",
			{ headers: { Authorization: `Bearer ${token}` } }
		)
			.then((res) => {
				return res.json();
			})
			.then((data) => setTopArtistsShort(data.items));

		const medium_term = await fetch(
			"https://api.spotify.com/v1/me/top/artists?time_range=medium_term&limit=10",
			{ headers: { Authorization: `Bearer ${token}` } }
		)
			.then((res) => {
				return res.json();
			})
			.then((data) => setTopArtistsMed(data.items));

			const all_time = await fetch(
				"https://api.spotify.com/v1/me/top/artists?time_range=long_term&limit=10",
				{ headers: { Authorization: `Bearer ${token}` } }
			)
				.then((res) => {
					return res.json();
				})
				.then((data) => setTopArtistsAllTime(data.items));

		return short_term,medium_term, all_time;
	}, []);

	useEffect(async () => {
		const short_term = await fetch(
			"https://api.spotify.com/v1/me/top/tracks?time_range=short_term&limit=10",
			{ headers: { Authorization: `Bearer ${token}` } }
		)
			.then((res) => {
				return res.json();
			})
			.then((data) => setTopSongsShort(data.items));
		const medium_term = await fetch(
				"https://api.spotify.com/v1/me/top/tracks?time_range=medium_term&limit=10",
				{ headers: { Authorization: `Bearer ${token}` } }
			)
				.then((res) => {
					return res.json();
				})
				.then((data) => setTopSongsMed(data.items));

			const long_term = await fetch(
				"https://api.spotify.com/v1/me/top/tracks?time_range=long_term&limit=10",
				{ headers: { Authorization: `Bearer ${token}` } }
			)
				.then((res) => {
					return res.json();
				})
				.then((data) => setTopSongsAllTime(data.items));

		return short_term,medium_term,long_term;
	}, []);

	return (
		<>
			<Container>
				<div
					style={{
						background: "red",
						display: "flex",
						alignItems: "center",
						flexDirection: "column",
						paddingBottom: 25,
					}}
				>
					<h3>Choose between 3 time periods to view</h3>
					<div
						className={classes.topButtons}
						style={{
							display: "flex",
							width: "35%",
							justifyContent: "space-between",
						}}
					>
						<Button
							variant="contained"
							color="primary"
							onClick={() => {
								setChosenArtistLength(topArtistsShort)
								setChosenSongsLength(topSongsShort)
							}}
						>
							Last Month
						</Button>
						<Button
							variant="contained"
							color="primary"
							onClick={() => {
								setChosenArtistLength(topArtistsMed)
								setChosenSongsLength(topSongsMed)

							}}
						>
							Last 6 Months
						</Button>
						<Button
							variant="contained"
							color="primary"
							onClick={() => {
								setChosenArtistLength(topArtistsAllTime)
								setChosenSongsLength(topSongsAllTime)
							}}
						>
							All Time
						</Button>
					</div>
				</div>
				<div>
					<h1 style={{ textAlign: "left" }}>Your Top Artists</h1>
				</div>
				<Grid
					className={classes.mainContainer}
					container
					alignItems="stretch"
					justify="space-around"
					spacing={3}
				>
					{chosenArtistLength &&
						chosenArtistLength?.map((item, idx) => {
							return (
								<div key={idx} className={classes.artistDiv}>
									<h3 className={classes.number}>{idx + 1}</h3>
									<img
										className={classes.img}
										src={item.images[0].url}
										alt=""
									/>
									<h4 className={classes.artistName}>{item.name}</h4>
								</div>
							);
						})}
				</Grid>
			</Container>
			{/* Container for top songs */}
			<Container>
				<div>
					<h1 style={{ textAlign: "left" }}>Your Top Songs</h1>
				</div>
				{chosenSongsLength &&
					topSongsShort?.map((song) => {
						return (
							<div style={{ width: "80%", border: "2px solid black" }}>
								{/* <img src={song?.images[0].url} /> */}
								<div>{song.name}</div>
							</div>
						);
					})}
			</Container>
		</>
	);
};
