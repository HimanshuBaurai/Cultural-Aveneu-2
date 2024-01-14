// import * as React from 'react';
// import { useTheme } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import IconButton from '@mui/material/IconButton';
// import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
// import PlayArrowIcon from '@mui/icons-material/PlayArrow';
// import SkipNextIcon from '@mui/icons-material/SkipNext';
// import { images } from '../../constants';

// export default function MediaControlCard({ image_, title, audioPath }) {
//     const [isPlaying, setIsPlaying] = React.useState(false);
//     const audio = new Audio(audioPath);
//     const theme = useTheme(); 

//     return (
//         <div onMouseOver={() => audio.play()} onMouseLeave={() => { audio.pause(); audio.currentTime = 0; }}>
//             <Card sx={{ display: 'flex' }}>
//                 <Box sx={{ display: 'flex', flexDirection: 'column', width: '120px', height: '100px' }}>
//                     <CardContent sx={{ flex: '1 0 auto' }}>
//                         <Typography component="div" variant="h6">
//                             {title}
//                         </Typography>
//                         <Typography variant="subtitle1" color="text.secondary" component="div">
//                             Mac Miller
//                         </Typography>
//                     </CardContent>
//                     <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }} >
//                         <IconButton aria-label="previous">
//                             {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
//                         </IconButton>
//                         <IconButton aria-label="play/pause">
//                             <PlayArrowIcon sx={{ height: 38, width: 38 }} />
//                         </IconButton>
//                         <IconButton aria-label="next">
//                             {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
//                         </IconButton>
//                     </Box>
//                 </Box>
//                 <CardMedia
//                     component="img"
//                     sx={{ width: 120 }}
//                     image={image_}
//                     alt={title}
//                 />
//             </Card>
//         </div>
//     );
// } 

import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';

export default function MediaControlCard({ image_, title, audioPath }) {
    const [isPlaying, setIsPlaying] = React.useState(false);
    const audio = React.useRef(new Audio(audioPath)); // Use ref to persist the audio object

    React.useEffect(() => {
        return () => {
            // Clean up when component unmounts
            audio.current.pause();
            audio.current.currentTime = 0;
        };
    }, []);

    const handlePlayPause = () => {
        if (isPlaying) {
            audio.current.pause();
        } else {
            audio.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <Card sx={{ display: 'flex' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', width: '120px', height: '150px' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h6">
                        {title}
                    </Typography>
                </CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                    <IconButton aria-label="play/pause" onClick={handlePlayPause}>
                        {isPlaying ? (
                            <PauseIcon sx={{ height: 38, width: 38 }} />
                        ) : (
                            <PlayArrowIcon sx={{ height: 38, width: 38 }} />
                        )}
                    </IconButton>
                </Box>
            </Box>
            <CardMedia component="img" sx={{ width: 120 }} image={image_} alt={title} />
        </Card>
    );
}
