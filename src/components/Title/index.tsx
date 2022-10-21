import React, { ReactNode } from 'react';
import { CommonProps } from '../../global-types';

type TitleProps = {
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    children?: ReactNode
} & CommonProps;

const Title = ({as = 'h1', children, style, className}: TitleProps) => {
    const Tag = as as keyof JSX.IntrinsicElements;
    
    return (
        <Tag style={style} className={className}>
            {children}
        </Tag>
    );
};

export default Title;
