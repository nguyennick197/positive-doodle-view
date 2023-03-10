import { useMemo, useContext } from 'react';
import { Image, Card, Group, Flex } from '@mantine/core';
import { LikeButton } from '../molecules/LikeButton';
import { FilterContext } from '../../contexts/FilterContext';
import { FavoritesContext } from '../../contexts/FavoritesContext';
import { SavedDoodle } from '../../utils/types';
import { Tag } from '../atoms/Tag';

type DoodleCardProps = {
    id: number;
    tags: string;
    tumblr_image_url: string;
    background_color: number[];
}

export const DoodleCard = ({
    id,
    tags,
    tumblr_image_url,
    background_color
}: DoodleCardProps) => {
    const { setTag, setPage } = useContext(FilterContext);
    const { favorites, addToFavorites, removeFromFavorites } = useContext(FavoritesContext);

    const backgroundColor = useMemo(() => {
        if (background_color) {
            const [red, green, blue] = background_color;
            return `rgb(${red},${green},${blue})`;
        }
        return "#fff";
    }, [background_color]);

    const isFavorite = useMemo(() => {
        return favorites.some((doodle: SavedDoodle)=> doodle.id === id);
    }, [favorites])

    const handleLikeClick = () => {
        if (!isFavorite) addToFavorites(id);
        else removeFromFavorites(id);
    }

    const handleTagClick = (tag: string) => {
        setPage(1);
        setTag(tag);
    }

    const splitTags = tags.split(",");

    return (
        <Card id={`${id}`} shadow="sm" style={{width: 320}}>
            <Card.Section style={{ backgroundColor }}>
                <Image
                    alt="Positive Doodle"
                    src={tumblr_image_url}
                    withPlaceholder
                    fit="contain"
                    width={320}
                    height={180}
                />
            </Card.Section>
            <Group position="apart" mt="md" mb="xs" style={{ position: "relative" }}>
                <Flex gap={8} justify="end" style={{ width: "100%"}}>
                    {/* <DownloadButton /> */}
                    <LikeButton handleClick={handleLikeClick} liked={isFavorite} />
                </Flex>
            </Group>
            <Flex wrap="wrap" gap={6} style={{ maxWidth: 280 }}>
                {splitTags.map(tag => (
                    <Tag
                        key={`${id}-${tag}`}
                        tag={tag}
                        handleTagClick={handleTagClick}
                    />
                ))}
            </Flex>
        </Card>
    )
}