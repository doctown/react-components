// TODO
var GroceryList = (props) => (
  <ul>
    <Ham />
    <Eggs />
  </ul>
);

var Ham = () => (
  <li>Ham</li>
);

var Eggs = () => (
  <li>Eggs</li>
);

ReactDOM.render(<GroceryList />, document.getElementById("app"));