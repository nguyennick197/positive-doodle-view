import { Text } from "@mantine/core";

type TagProps = {
    tag: string;
    handleTagClick: (tag: string) => void;
}

export const Tag = ({
    tag,
    handleTagClick,
}: TagProps) => {
    return (
        <Text
            color="blue"
            onClick={() => handleTagClick(tag)}
            style={{ cursor: "pointer" }}
        >
            #{tag}
        </Text>
    )
}