import React from "react";
import { Link } from "react-router-dom";
import { Card } from "../../components";
import useVideoCard from "../../services/hooks/useVideoCard";
import { useSelector } from "react-redux";

const VideoContainer = () => {

  const videos = useVideoCard();

  if (!videos) return null;
  return (
    <section className="">
      <div className="flex flex-wrap gap-5">
        {videos.map((video) => (
          <Link to={"/watch?v=" + video.id.videoId} key={video.id.videoId}>
            <Card video={video} />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default VideoContainer;
