import 'react-native';
import React from 'react';
import {Text} from 'react-native';

import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';

import Header from '../lib/components/header';



describe('El componente Header', () => {

  describe('Al importarlo y utilizarlo', () => {
    it('deberia ser renderizado sin problemas', () => {
      const component = renderer.create(<Header />);
    });
  });

  describe('Cuando lo instanciamos con prop "title"', () => {
    it('deberia disponer de la propiedad "title" correcta', () => {
      const component = shallow(<Header title="titulo" />);
      // primero chequeamos que reciba dicha propiedad
      expect( component.unrendered.props ).toHaveProperty("title", "titulo");
      // luego buscamos el componente y chequeamos que tenga dicho valor
      expect( component.find(Text).props() ).toHaveProperty("children", "titulo");
    });
  });

  describe('Generando un snapshot de Header', () => {
    it('deberia guardarse y mantener consistencia en diferentes configuraciones', () => {
      const component = shallow(<Header />);
      expect( component ).toMatchSnapshot();
      component.setProps({ 'title': 'titulo' });
      expect( component ).toMatchSnapshot();
    });
  });

});
