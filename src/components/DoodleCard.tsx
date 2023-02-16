import { Image, Card, Group, Text } from '@mantine/core';
import { LikeButton } from './LikeButton';

type DoodleCardProps = {
    id: number;
    tags: string;
    url: string;
}

export const DoodleCard = ({
    id,
    url,
    tags
}: DoodleCardProps) => {
    const splitTags = tags.split(",");
    // const tagString = useMemo(() => {
    //     s
    // })

    return (
        <Card id={`${id}`} shadow="sm" p="lg" radius="md" withBorder>
            <Card.Section>
                <Image
                    alt="Positive Doodle"
                    src={url}
                    withPlaceholder
                    width={360}
                    height={200}
                />
            </Card.Section>
            <Group position="apart" mt="md" mb="xs" style={{position: "relative"}}>
                <div style={{maxWidth: 300, display: "flex", gap: 6, flexWrap: "wrap"}}>
                    {splitTags.map(tag => (
                        <Text weight={400}> #{tag} </Text>
                    ))}
                </div>
                <LikeButton />
            </Group>

        </Card>
    )
}