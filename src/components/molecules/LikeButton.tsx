import { useState } from "react";
import { SvgButton } from "../atoms/SvgButton";
import { HeartIcon } from "../../icons/HeartIcon";

type LikeButtonProps = {
    liked: boolean;
    handleClick: () => void;
}

export const LikeButton = ({
    liked,
    handleClick
}: LikeButtonProps): JSX.Element => {

    const handleLikeClick = () => {
        handleClick && handleClick();
    }

    return (
        <SvgButton active={liked} onClick={handleLikeClick} isHeart>
            <HeartIcon />
        </SvgButton>
    );
};