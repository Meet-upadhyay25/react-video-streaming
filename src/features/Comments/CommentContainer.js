import React from "react";
import useVideoComment from "../../services/hooks/useVideoComment";
import { Comment } from "../../components";
import { useSearchParams } from "react-router-dom";

const CommentContainer = () => {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  const comment = useVideoComment(videoId);
  if (!comment) return null;

//   console.log(comment);
  return (
    <div className="mt-5">
        {comment.map((comment)=>(
            <Comment key={comment.id} comment={comment} />
        ))}
    </div>
  );
};

export default CommentContainer;
