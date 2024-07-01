import React from "react";
import { useSearchParams } from "react-router-dom";
import useVideoDetail from "../../services/hooks/useVideoDetail";
import { like } from "../../assets";
import { formatViews, timeAgo } from "../../utils/helper";

const VideoDetails = () => {
  const [searchParams] = useSearchParams();

  const videoId = searchParams.get("v");
  const video = useVideoDetail(videoId);
  if (!video) return null;
  const { channelId, channelTitle, title, publishedAt } = video[0]?.snippet;
  const { likeCount, viewCount } = video[0]?.statistics;

  return (
    <section className="">
      <div>
        <iframe
          width="680"
          height="400"
          src={`https://www.youtube.com/embed/${videoId}?si=rIardJjiD9sAh2hr`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <div className="mt-2">
          <h1 className="font-bold text-xl">{title}</h1>
          <div className="flex justify-between items-center mt-1">
            <div>
              <span className="font-bold text-gray-800">{channelTitle}</span>
            </div>
            <div className="flex items-center">
              <img className="w-5" src={like} />
              <span>{formatViews(likeCount)}</span>
            </div>
          </div>
          <div>
            <span className="mr-5">{formatViews(viewCount)}</span>
            <span>{timeAgo(publishedAt)}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoDetails;
