import { SvgButton } from "./atoms/SvgButton";
import { DownloadIcon } from "../icons/DownloadIcon";

export const DownloadButton = () => {
    return (
        <SvgButton active={false}>
            <DownloadIcon />
        </SvgButton>
    )
}
