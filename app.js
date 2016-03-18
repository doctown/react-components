// TODO
var GroceryList = () => (
  //<h3> My Grocery List </h3>
  <GroceryListItems items={['Eggs', 'Ham', 'Bread']} />
);

var GroceryListItems = (props) => (
  <ul>
    <li>{props.items[0]}</li>
    <li>{props.items[1]}</li>
    <li>{props.items[2]}</li>
  </ul>
);

ReactDOM.render(<GroceryList />, document.getElementById("app"));