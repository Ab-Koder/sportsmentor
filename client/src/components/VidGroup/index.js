import React from 'react';
import VidItem from '../VidItem';

const VidGroup = ({videos , handleVideoSelect}) => {
    const renderedVideos =  videos.map((video) => {
        return <VidItem key={video.id} video={video} handleVideoSelect={handleVideoSelect} />
        // console.log(video.id);
    });

    return <div className='ui relaxed divided list'>{renderedVideos}</div>;
};
export default VidGroup;