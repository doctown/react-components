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
  }

  // Every class component must have a `render` method
  // Stateless functional components are pretty much just this method
  render() {
    // props is now a method on the class
    return (
        <li>{this.props.item}</li>
    );
  }
}

ReactDOM.render(<GroceryList />, document.getElementById("app"));