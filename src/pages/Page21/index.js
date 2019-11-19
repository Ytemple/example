import React, { Component } from 'react';
import SimpleStep from './components/SimpleStep';
import StepForm from './components/StepForm';

export default class Page21 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="page21-page">
        <SimpleStep />

        <StepForm />
      </div>
    );
  }
}
