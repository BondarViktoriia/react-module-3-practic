import PropTypes from 'prop-types';


export const VideoList = ({ videos, onSelect }) => {
    return (
        <ul>
            {videos.map(video => (<li key={video.id} onClick={() => onSelect(video.link)}>{video.link}  </li>))}
        </ul>
    );
}

VideoList.propTypes = {
    videos: PropTypes.string.isRequired,
    onSelect:PropTypes.func.isRequired,
}