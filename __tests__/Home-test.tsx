import { render, screen, fireEvent } from '@testing-library/react-native';
import React from "react";
import { Provider } from 'react-redux';
import HomeScreen from "../App";
import { store } from '../redux/store';

test('Home increase test: integration test', () => {
    const allQuestions = ['q1', 'q2'];
    const mockFn = jest.fn();

    render(<HomeScreen navigation={undefined} />);
    const counter = screen.getByTestId('counter');
    fireEvent.press(screen.getByTestId('incrementButton'));
    //console.log(counter.props);
    expect(counter.props.children).toBe(1);
});

// https://callstack.github.io/react-native-testing-library/docs/react-navigation/#example-tests

test('Home increase from redux store', () => {
    const reduxStore = store;

    const homeComponent = (
        <Provider store={store}>
            <HomeScreen />
        </Provider>
    );

    render(homeComponent);

    const counter = screen.getByTestId('counter');
    expect(counter).toBeTruthy();

    const incrementButton = screen.getByTestId('incrementButton');
    expect(incrementButton).toBeTruthy();

    const currentCountValue = store.getState().count.count;
    fireEvent.press(incrementButton);
    const counterState = store.getState().count.count;
    expect(counterState).toBe(currentCountValue + 1);
});