import React from 'react';
import { Link } from 'react-router-dom';
import Magnetic from '../Magnetic';
import PropTypes from 'prop-types';

/**
 * Reusable Button Component
 * - Wraps content in <Magnetic> for interaction
 * - Handles internal <Link> vs external <a> vs <button>
 * - Supports 'primary' and 'secondary' variants
 */
const Button = ({
    children,
    to,
    href,
    onClick,
    variant = 'primary',
    className = '',
    icon: Icon,
    ...props
}) => {

    // Base class
    const baseClass = variant === 'primary' ? 'button-primary' : 'button-secondary';
    const combinedClass = `${baseClass} ${className}`;

    // Content with optional icon
    const content = (
        <>
            {children}
            {Icon && <Icon className="button-icon" />}
        </>
    );

    // 1. Internal Link (React Router)
    if (to) {
        return (
            <Magnetic>
                <Link to={to} className={combinedClass} {...props}>
                    {content}
                </Link>
            </Magnetic>
        );
    }

    // 2. External Link (Anchor)
    if (href) {
        return (
            <Magnetic>
                <a href={href} className={combinedClass} {...props}>
                    {content}
                </a>
            </Magnetic>
        );
    }

    // 3. Standard Button
    return (
        <Magnetic>
            <button onClick={onClick} className={combinedClass} {...props}>
                {content}
            </button>
        </Magnetic>
    );
};

Button.propTypes = {
    children: PropTypes.node.isRequired,
    to: PropTypes.string,
    href: PropTypes.string,
    onClick: PropTypes.func,
    variant: PropTypes.oneOf(['primary', 'secondary']),
    className: PropTypes.string,
    icon: PropTypes.elementType,
};

export default Button;
