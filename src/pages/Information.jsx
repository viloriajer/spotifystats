import React, { useState, useEffect } from "react";

export const Information = () => {
	const [topArtists, setTopArtists] = useState();
	const [topSongsShort, setTopSongsShort] = useState();


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
	console.log(topArtists);

	useEffect(async () => {
		const unsubscribe = await fetch(
			"https://api.spotify.com/v1/me/top/artists?limit=10",
			{ headers: { Authorization: `Bearer ${token}` } }
		)
			.then((res) => {
				return res.json();
			})
			.then((data) => setTopArtists(data.items));

		return unsubscribe;
	}, []);

    useEffect(async () => {
		const unsubscribe = await fetch(
			"https://api.spotify.com/v1/me/top/tracks?time_range=short_term&limit=10",
			{ headers: { Authorization: `Bearer ${token}` } }
		)
			.then((res) => {
				return res.json();
			})
			.then((data) => setTopSongsShort(data.items));

		return unsubscribe;
	}, []);

   console.log(topSongsShort);


	return (
		<>
			<div>
				<h1 style={{ textAlign: "center" }}>View your top artists</h1>
			</div>
			<div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
				<div
					style={{
						display: "flex",
						flexWrap: "wrap",
						width: "75%",
						justifyContent: "space-between",
					}}
				>
					{topArtists?.map((item, idx) => {
						return (
							<div
								key={idx}
								style={{
									display: "flex",
									flexDirection: "column",
									width: 150,
									marginBottom: 20,
									border: "1px",
									borderRadius: 15,
									boxShadow: "5px 10px 10px #888888",
								}}
							>
								<img
									style={{
										width: "100%",
										height: 125,
										objectFit: "cover",
										borderRadius: 5,
									}}
									src={item.images[0].url}
									alt=""
								/>
								<h4
									style={{
										marginTop: 5,
										marginBottom: 10,
										textAlign: "center",
									}}
								>
									{item.name}
								</h4>
							</div>
						);
					})}

				</div>
			</div>
		</>
	);
};
