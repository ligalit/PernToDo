import React from 'react';
import renderer from 'react-test-renderer';
import Button from "../components/UI/Button";


describe('App component', () => {
    const tree = renderer.create(<Button/>);
    test('should render correctly', () => {
        expect(tree.toJSON()).toMatchSnapshot();
    });
    test('should contain class', () => {
        // @ts-ignore
        expect(tree.toJSON()?.props.className).toBe("btn");
    });
});
