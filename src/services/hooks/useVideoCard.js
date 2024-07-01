import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const useVideoCard = () => {
  const [videos, setVideos] = useState(null);
  const searchQuery = useSelector((store) => store.searchQuery.searchQuery);
 
  const fetchData = async () => {
    const url = "https://www.googleapis.com/youtube/v3/search";
    const params = new URLSearchParams({
      part: "snippet",
      q: searchQuery,
      key: process.env.REACT_APP_YOUTUBE_API_KEY,
      maxResults: 25,
      type: "video",
    });

    try {
      const response = await fetch(`${url}?${params.toString()}`);
      const data = await response.json();
      setVideos(data.items);
    } catch (error) {
      console.error("Error fetching data from YouTube API:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [searchQuery]);

  return videos;
};

export default useVideoCard;
