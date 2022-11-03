import React from 'react';
import PropTypes from 'prop-types';
import { Button } from './Button.styled';

const LoadMoreBtn = ({label,onLoadMore}) => {
    return (
        <Button type="button" onClick={onLoadMore}>{label}</Button>
    )
}

LoadMoreBtn.propTypes = {
    label: PropTypes.string,
    onLoadMore: PropTypes.func,
}

export default LoadMoreBtn;