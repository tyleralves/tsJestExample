import * as React from 'react';

const styles = require('./styles.css');

export class MainContainer extends React.Component<any, any> {
  constructor() {
    super();
    this.state = {
      name: 'Tyler'
    };
  }

  handleDivClick = () => {
    console.log('click!');
    this.setState({
      name: 'John'
    });
  }

  render() {
    // TODO: remove copy (for hot reloading)
    const handleDivClick1 = () => {
      console.log('click!');
      this.setState({
        name: 'John'
      });
    };
    return (
      // TODO: replace onClick with class member (for hot reloading)
      <div className={styles.color} onClick={this.handleDivClick}>{`Name: ${this.state.name}`}</div>
    );
  }
}
