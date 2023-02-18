import { useState } from "react";
import { SvgButton } from "./SvgButton";
import { HeartIcon } from "../icons/HeartIcon";

type LikeButtonProps = {
    liked: boolean;
    handleLikeClick: () => void;
}

export const LikeButton = (): JSX.Element => {
    const [liked, setLiked] = useState(false);

    const handleLikeClick = (): void => {
        setLiked(!liked);
    };

    return (
        <SvgButton active={liked} onClick={handleLikeClick} isHeart>
            <HeartIcon />
        </SvgButton>
    );
};