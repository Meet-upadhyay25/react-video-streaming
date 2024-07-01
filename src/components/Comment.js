import React from "react";
import { formatViews, timeAgo } from "../utils/helper";

const Comment = ({ comment }) => {
  const {
    authorChannelId,
    authorDisplayName,
    authorProfileImageUrl,
    likeCount,
    textDisplay,
    publishedAt,
    updatedAt,
  } = comment?.snippet?.topLevelComment?.snippet;

  return (
    <div className="flex mb-4 gap-2">
      <img className="rounded-full" src={authorProfileImageUrl} alt="" />
      <div className="flex flex-col ml-2">
        <span>{authorDisplayName}</span>
        <span className="mt-1">{textDisplay}</span>
      </div>
      <span>{timeAgo(publishedAt)}</span>
    </div>
  );
};

export default Comment;
