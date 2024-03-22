import React from "react";
import { Stack, Box } from "@mui/material";
import { CCard, VideoCard } from "./";

const Videos = ({ videos, direction }) => {
  if (!videos?.length) return "Loading..";
  return (
    <Stack
      direction={direction || "row"}
      flexWrap="wrap"
      justifyContent="start"
      alignItems="start"
      gap={2}
    >
      {videos.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <CCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
