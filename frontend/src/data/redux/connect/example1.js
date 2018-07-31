const input = `export class Button extends Component {
  render() {
    const { value } = this.props;

    return (
      <button>{value}</button>
    );
  }
}
`;

const output = `import { connect } from 'react-redux';

class ButtonComponent extends Component {
  render() {
    const { value } = this.props;

    return (
      <button>{value}</button>
    );
  }
}

const mapStateToProps = (state) => ({
  
});

const mapDispatchToProps = {
  
};

export const Button = connect(mapStateToProps, mapDispatchToProps)(ButtonComponent);
`;

export default {
  name: 'Connect named class component',
  input,
  output
};
