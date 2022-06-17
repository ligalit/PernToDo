import React from 'react';

const Select = (props: React.HTMLProps<HTMLSelectElement>) => {
    return (
        <select {...props}>
            <option disabled value="">Choose from list</option>
            <option value="all">All</option>
            <option value="active">Active</option>
            <option value="completed">Completed</option>
        </select>
    );
};

export default Select;