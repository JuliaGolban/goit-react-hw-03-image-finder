import { Button } from "./Button.styled";

const LoadMoreBtn = ({label,onLoadMore}) => {
    return (
        <Button type="button" onClick={onLoadMore}>{label}</Button>
    )
}

export default LoadMoreBtn;