import { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API_KEY } from "../../utils/constant";

const useVideoDetail = (videoId) => {
  const [video, setVideo] = useState(null);

  const fetchData = async () => {
    const data = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${YOUTUBE_VIDEO_API_KEY}`
    );
    const json = await data.json();
    // console.log(json);
    setVideo(json.items)
  };

  useEffect(() => {
    fetchData();
  }, []);

  return video;
};

export default useVideoDetail;
