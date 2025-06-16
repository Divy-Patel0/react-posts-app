import { ThumbsUp, ThumbsDown, Eye, Hash } from 'lucide-react';
import { useEffect, useState } from 'react';

const Reactions = ({ reactions, views }) => {
    const [likes, setLikes] = useState(reactions.likes)
    const [liked, setLiked] = useState(false)
    const [viewcount, setViewcount] = useState(views)
    const [dislikes, setDislikes] = useState(reactions.dislikes)
    const [disliked, setDisliked] = useState(false)

    useEffect(() => {
        setViewcount(prev => prev + 1);
    }, [])

    const handlelike = () => {
        if (!liked) {
            setLikes(prev => prev + 1);
            setLiked(true)
            if (disliked) {
                setDislikes(prev => prev - 1)
                setDisliked(false)
            }
        } else {
            setLikes(prev => prev - 1)
            setLiked(false)
        }
    }

    const handleDislike = () => {
        if (!disliked) {
            setDislikes((prev) => prev + 1);
            setDisliked(true);
            if (liked) {
                setLikes((prev) => prev - 1);
                setLiked(false);
            }
        } else {
            setDislikes((prev) => prev - 1);
            setDisliked(false);
        }
    };

    return (
        <>
            <div className='flex flex-wrap items-center gap-2 text-sm sm:text-base text-gray-700'>
                <button className={`hover:cursor-pointer hover:scale-110 transition ${liked ? 'text-blue-600' : ''}`}
                    onClick={handlelike}>
                    <ThumbsUp size={18} fill={liked ? 'currentColor' : 'none'} />
                </button>
                <span>
                    {reactions.likes}
                </span>
                <button className={`hover:cursor-pointer hover:scale-110 transition ${disliked ? 'text-red-500' : ''}`}
                    onClick={handleDislike}>
                    <ThumbsDown size={18} fill={disliked ? 'currentColor' : 'none'} />
                </button>
                <span>
                    {reactions.dislikes}
                </span>
                <Eye size={18} />
                <span>{views}</span>
            </div></>
    )
}

export default Reactions