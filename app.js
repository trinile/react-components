// // // TODO
var GroceryList = () => (
  <div>
    <h2>Grocery List</h2>
    <GroceryListItem groceryItems={['cucumber', 'kale', 'tomatoe']}/>
    <Cucumber/>
    <Kale/>
  </div>
);
var GroceryListItem = (props) => {

  return (
    <ul> 
      { props.groceryItems.map((item) => {
        return <li> { item } is part of GroceryListItem Component</li>
      }) }
    </ul>
  )
};

var Cucumber = () => (
  <li>Cucumber is a component</li>
);

var Kale = () => (
  <li>Kale is  component</li>
);



ReactDOM.render(<GroceryList />, document.getElementById('app'));
