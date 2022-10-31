/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';
import { render, screen, fireEvent } from '@testing-library/react-native';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<App />);
});

test('clicking on one item takes you to the details screen', async () => {
  const component = (
    <App />
  );

  render(component);
  const toClick = await screen.findByText('Go to Details');

  fireEvent.press(toClick);
  const detailScreenText = await screen.findByText('Details Screen');

  expect(detailScreenText).toBeTruthy();
});