// TODO
var GroceryList = () => (
  //<h3> My Grocery List </h3>
  <GroceryListItems items={['Toast', 'Ham', 'Bread']}/>

);

/*
 * Previous implementation without classes
var GroceryListItems = (props) => {
  // Create an event handler

  var onListItemClick = (event) => {
    console.log('You clicked me => ', event);
  };

  return (
    <ul>
      <li>{props.items[0]}</li>
      <li>{props.items[1]}</li>
      <li>{props.items[2]}</li>
    </ul>
  );
};
 */

var GroceryListItems = (props) => (
  <ul>
    {props.items.map(item =>
      <GroceryListItem item={item} />
    )}
  </ul>
);

class GroceryListItem extends React.Component {
  // Constructor that call the super class
  constructor(props) {
    super(props);
    // Add a state to a component
    this.state = {
      done: false
    };
  }

  // Add a click event
  onListItemMouseOver() {
    this.setState({
      done: !this.state.done
    });
  }

  // Every class component must have a `render` method
  // Stateless functional components are pretty much just this method
  render() {
    // Change the style on a specific state
    var style = {
      'font-weight': this.state.done ? 'bold' : 'normal'
    };

    // props is now a method on the class
    return (
        <li style={style} onMouseOver={this.onListItemMouseOver.bind(this)}>
          {this.props.item}
        </li>
    );
  }
}

ReactDOM.render(<GroceryList />, document.getElementById("app"));