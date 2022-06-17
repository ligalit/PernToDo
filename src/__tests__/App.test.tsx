import React from 'react';
import App from '../App';
import {cleanup, render, screen} from "@testing-library/react";
import renderer from 'react-test-renderer';

afterEach(cleanup);

describe('App component', () => {
    test("render app elem", () => {
        const tree = renderer.create(<App/>).toJSON();
        expect(tree).toMatchSnapshot();
    });
    test("render h1 elem", () => {
        render(<App/>);
        const h1_todos = screen.getByTestId("h1-todos");
        expect(h1_todos).toBeInTheDocument();
    });
    test("render ToDoForm elem", () => {
        render(<App/>);
        const testToDoForm = screen.getByTestId("testToDoForm");
        expect(testToDoForm).toBeInTheDocument();
    });
    test("render ToDoList elem", () => {
        render(<App/>);
        const testToDoList = screen.getByTestId("testToDoList");
        expect(testToDoList).toBeInTheDocument();
    });
});
