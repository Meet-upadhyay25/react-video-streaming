import React from "react";
import VideoDetails from "../features/Videos/VideoDetails";
import { CommentContainer } from "../features";

const Watch = () => {
  return (
    <section>
      <div className="w-3/4">
        <VideoDetails />
        <CommentContainer />
      </div>
    </section>
  );
};

export default Watch;
