import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import App from '../lib/app';


it('renders correctly', () => {
  const app = renderer.create(
    <App />
  );
});