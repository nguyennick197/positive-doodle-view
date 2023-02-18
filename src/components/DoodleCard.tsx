import { useMemo, useContext } from 'react';
import { Image, Card, Group, Text } from '@mantine/core';
import { LikeButton } from './LikeButton';
import { FilterContext } from '../contexts/FilterContext';

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

    const splitTags = tags.split(",");

    const backgroundColor = useMemo(() => {
        if (background_color) {
            const [red, green, blue] = background_color;
            return `rgb(${red},${green},${blue})`;
        }
        return "#fff";
    }, [background_color]);

    const handleTagClick = (tag: string) => {
        setPage(1);
        setTag(tag);
    }

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
                <div style={{ display: "flex", gap: 8, justifyContent: "end", width: "100%"}}>
                    {/* <DownloadButton /> */}
                    <LikeButton />
                </div>
            </Group>
            <div style={{ maxWidth: 280, display: "flex", gap: 6, flexWrap: "wrap" }}>
                {splitTags.map(tag => (
                    <Text
                        color="blue"
                        key={tag}
                        onClick={() => handleTagClick(tag)}
                    > 
                        #{tag}
                    </Text>
                ))}
            </div>
        </Card>
    )
}