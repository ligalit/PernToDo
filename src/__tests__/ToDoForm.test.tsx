import {fireEvent, render, screen} from "@testing-library/react";
import App from "../App";
import React from "react";

describe("ToDoForm component", () => {
    test("Input change", () => {
        render(<App/>);
        const input = screen.getByTestId("input");
        fireEvent.input(input, {
            target: {value: "clean room"},
        })
        expect(input).toHaveValue("clean room")
    });
    test("Select change", () => {
        render(<App/>);
        const select = screen.getByTestId("testSelect");
        fireEvent.change(select, {
            target: {value: "all"},
        })
        expect(select).toHaveValue("all")
        fireEvent.change(select, {
            target: {value: "active"},
        })
        expect(select).toHaveValue("active")
        fireEvent.change(select, {
            target: {value: "completed"},
        })
        expect(select).toHaveValue("completed")
    });
    test("Add todo", () => {
        render(<App/>);
        const input = screen.getByTestId("input");
        fireEvent.input(input, {
            target: {value: "clean room"},
        });
        const addButton = screen.getByTestId("add-button");
        fireEvent.click(addButton);
        expect(screen.queryAllByTestId("testToDoItem")).toHaveLength(2);
    });
    test("Add whitespaces todo", () => {
        render(<App/>);
        const input = screen.getByTestId("input");
        fireEvent.input(input, {
            target: {value: "     "},
        });
        const addButton = screen.getByTestId("add-button");
        fireEvent.click(addButton);
        expect(screen.queryAllByTestId("testToDoItem")).not.toHaveLength(2);
    });
    test("Check all todos", () => {
        render(<App/>);
        const select = screen.getByTestId("testSelect");
        fireEvent.change(select, {
            target: {value: "all"},
        })
        expect(screen.queryAllByTestId("testToDoItem")).toHaveLength(1);
    });
    test("Check active todos", () => {
        render(<App/>);
        const select = screen.getByTestId("testSelect");
        fireEvent.change(select, {
            target: {value: "active"},
        })
        expect(screen.queryAllByTestId("testToDoItem")).toHaveLength(1);
    });
    test("Check completed todos", () => {
        render(<App/>);
        const select = screen.getByTestId("testSelect");
        fireEvent.change(select, {
            target: {value: "completed"},
        })
        expect(screen.queryAllByTestId("testToDoItem")).toHaveLength(0);
    });
    test("Click Complete", () => {
        render(<App/>);
        const select = screen.getByTestId("testSelect");
        const button = screen.getByTestId("complete-button-1");
        fireEvent.click(button);
        fireEvent.change(select, {
            target: {value: "completed"},
        })
        expect(screen.queryAllByTestId("testToDoItem")).toHaveLength(1);
    });
    test("Clear Completed", () => {
        render(<App/>);
        const select = screen.getByTestId("testSelect");
        const completeButton = screen.getByTestId("complete-button-1");
        const clearButton = screen.getByTestId("clear-button");
        fireEvent.click(completeButton);
        fireEvent.change(select, {
            target: {value: "completed"},
        })
        fireEvent.click(clearButton);
        expect(screen.queryAllByTestId("testToDoItem")).toHaveLength(0);
    });
})