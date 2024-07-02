import React from 'react';

type TTitleProps = {
    title: string;
    size?: 'sm' | 'md' | 'lg';
    className?: string;
};

const Title = ({ size = 'lg', title, className = '' }: TTitleProps) => {
    const mainClassName = ` ${className} `;
    let mainSize = 'text-3xl';
    switch (size) {
        case 'sm':
            mainSize = 'text-1xl';
            break;
        case 'md':
            mainSize = 'text-2xl';
            break;
        case 'lg':
        default:
            mainSize = 'text-3xl';
            break;
    }
    return (
        <div>
            <h1 className={`${mainClassName} ${mainSize}`}>{title}</h1>
        </div>
    );
};

export default Title;
