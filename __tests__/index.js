import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';


import Header from '../lib/components/header';



describe('El componente Header', () => {

  it('deberia ser renderizado', () => {
    const component = renderer.create(<Header />);
  });

});
