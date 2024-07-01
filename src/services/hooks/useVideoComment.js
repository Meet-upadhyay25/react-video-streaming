import { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API_KEY } from "../../utils/constant";

const useVideoComment = (videoId) => {
  const [comment, setComment] = useState(null)

  const fetchData = async () => {
    try {
      const data = await fetch(
        `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${videoId}&key=${YOUTUBE_VIDEO_API_KEY}`
      );
      const json = await data.json();
      setComment(json.items);
    } catch (error) {
        setComment(null);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

    return comment;
};

export default useVideoComment;
