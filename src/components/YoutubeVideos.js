import React, { useEffect, useState } from "react";
import "../components/YoutubeVideos..css";

function YoutubeVideos() {
	const [YouTubeVideos, setVideos] = useState([]);
	const apikey = process.env.REACT_APP_YOUTUBE_APIKEY;

	useEffect(() => {
		fetch(
			"https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCE_M8A5yxnLfW0KghEeajjw&maxResults=9&order=date&key=AIzaSyBoOeYgphd8ld890k82sZota3T43h0zuWo"
		)
			.then((response) => {
				console.log(response);
				return response.json();
			})
			.then((data) => {
				console.log(data);
				const YouTubeVideosData = data.items;

				setVideos(YouTubeVideosData);
			});
	}, []);
	console.log(YouTubeVideos);
	return (
		<div className="allVideosWrapeer">
			<div className="container">
				<div className="row jusstify-content-center text-center">
					<div className="col-12">
						<div className="title-wrapper"></div>
					</div>
					{YouTubeVideos?.map((singleVideo) => {
						let vidId = singleVideo.id.videoId;
						let vidLink = `https://www.youtube.com/watch?v=${vidId}`;

						let videoWrapper = (
							<div key={vidId} className="col-sm-12 col-md-6">
								<div className="singleVideoWrapper">
									<div className="<div></div>ideoThumbnail">
										<a href={vidLink} target="blank">
											<img src={singleVideo.snippet.thumbnails.high.url} />
										</a>
									</div>
									<div className="videoInfoWrapper">
										<div className="videoTitle">
											<a her={vidLink} target="blank" />
											{singleVideo.snippet.title}
										</div>
									</div>
									<div className="videoDesc">
										{singleVideo.snippet.description}
									</div>
								</div>
							</div>
						);
						return videoWrapper;
					})}
				</div>
			</div>
		</div>
	);
}

export default YoutubeVideos;
