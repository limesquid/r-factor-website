import React from 'react';
import Jumbotron from 'reactstrap/lib/Jumbotron';
import Feature from './feature';

const reduxFeatures = [
  {
    id: 'connect-with-map-dispatch',
    name: 'Connect component with mapDispatchToProps',
    description: 'Connects a component to redux store and generates mapDispatchToProps.'
  },
  {
    id: 'connect-with-map-state',
    name: 'Connect component with mapStateToProps',
    description: 'Connects a component to redux store and generates mapStateToProps.'
  },
  {
    id: 'connect-with-map-dispatch-and-map-state',
    name: 'Connect component with mapDispatchToProps & mapStateToProps',
    description: 'Connects a component to redux store and generates both mapStateToProps & mapDispatchToProps.'
  },
  {
    id: 'disconnect',
    name: 'Disconnect component',
    description: 'Disconnects a component from redux store and removes both mapStateToProps & mapDispatchToProps.'
  }
];

const reactFeatures = [
  {
    id: 'add-classname',
    name: 'Add className prop',
    description: 'Adds className prop to a component and applies it for its root JSX element. Uses classNames if necessary.'
  },
  {
    id: 'convert-to-class-component',
    name: 'Convert to class component',
    description: 'Turns a functional component into a class component.'
  },
  {
    id: 'convert-to-functional-component',
    name: 'Convert to functional component',
    description: 'Turns a class component into a functional component.'
  },
  {
    id: 'generate-prop-types',
    name: 'Generate component propTypes',
    description: 'Adds missing propTypes definitions for every prop used in component.'
  },
  {
    id: 'move-default-props-out-of-class',
    name: 'Move defaultProps out of class',
    description: 'Moves static defaultProps definition out of a class component.'
  },
  {
    id: 'move-prop-types-out-of-class',
    name: 'Move propTypes out of class',
    description: 'Moves static propTypes definition out of a class component.'
  },
  {
    id: 'move-default-props-to-class',
    name: 'Move defaultProps to class',
    description: 'Turns a plain defaultProps assignment into a static property in a class component.'
  },
  {
    id: 'move-prop-types-to-class',
    name: 'Move propTypes to class',
    description: 'Turns a plain propTypes assignment into a static property in a class component.'
  },
  {
    id: 'sort-attributes',
    name: 'Sort attributes in objects',
    description: 'Sorts attributes of every object literal in a selection alphabetically. Attributes prefixed with "on" will appear at the end.'
  },
  {
    id: 'sort-imports',
    name: 'Sort imports',
    description: 'Sorts import statements according to an order defined in settings. You can choose an alphabetic order or specify a fixed order.'
  }
];

const HomePage = () => (
  <div>
    <Jumbotron>
      <h1>R-Factor</h1>
      <p>R-Factor - React & Redux Refactoring Tools for Sublime Text 3</p>
    </Jumbotron>


    <h2>React refactorings</h2>
    {reactFeatures.map((feature) => (<Feature key={feature.id} {...feature} />))}

    <h2>Redux refactorings</h2>
    {reduxFeatures.map((feature) => (<Feature key={feature.id} {...feature} />))}
  </div>
);

export default HomePage;
