// // // TODO
var App = () => (
  <div>
    <h2>Grocery List</h2>
    <GroceryList groceryItems={['cucumber', 'kale', 'tomatoe', 'potatoes', 'lemons']}/>
    <Cucumber/>
    <Kale/>
  </div>
);

// var GroceryList = (props) => {

//   return (
//     <ul> 
//       { props.groceryItems.map((item) => {
//         return <li> { item } is part of GroceryListItem Component</li>
//       }) }
//     </ul>
//   )
// };


// creating Grocery List item as a component
var Cucumber = () => (
  <li>Cucumber is a component</li>
);

var Kale = () => (
  <li>Kale is  component</li>
);


class GroceryListItem extends React.Component {
    // A `constructor` method is expected on all ES6 classes
  // When React instantiates the component,
  // it will pass `props` to the constructor
  constructor(props) {
      // Equivalent to ES5's React.Component.call(this, props)
      super(props);
      this.state = {
        mouseOver: false,
        click: false,
      };
  }
  //create a state , state is just an object literal
  // Every class component must have a `render` method
  // Stateless functional components are pretty much just this method
  // onListItemClick() {
  //   click: !this.state.click
  //   });
  // }
  onListItemHover() {
    this.setState({
      mouseOver: true
    });
  }
  onListItemLeave() {
    this.setState({
      mouseOver: false
    });
  }
  render() {
    // `props` is no longer passed as an argument,
    // but instead accessed with `this.props`
     var style = {
      'fontWeight' : this.state.mouseOver ? 'bold' : 'normal'
    };
    return (
      <li style={style} onMouseOver={this.onListItemHover.bind(this)} onMouseLeave={this.onListItemLeave.bind(this)}>{this.props.groceryItems} is an instance of class GroceryListItem</li>
    );

  }

}

var GroceryList = (props) => (
  <ul>
    {props.groceryItems.map((item) =>
      <GroceryListItem groceryItems={item}/>
    )}
  </ul>
);
//renders on the page
ReactDOM.render(<App />, document.getElementById('app'));
