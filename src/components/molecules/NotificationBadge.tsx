import styled from "@emotion/styled";

const BadgeContainer = styled.div`
    position: absolute;
    top: -0.5rem;
    right: -0.5rem;
    border-radius: 50%;
    background-color: red;
    height: 20px;
    width: 20px;
    font-size: 12px;
    padding: 1px;
    text-align: center;
    & > p {
        color: white;
        font-weight: 600;
    }
`

export const NotificationBadge = ({
    count
}: { count: number }) => {
    return (
        <BadgeContainer>
            <p>{count}</p>
        </BadgeContainer>
    )
}