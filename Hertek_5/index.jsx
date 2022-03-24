class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    let date_ = new Date();
    let mon = date_.getMonth();
    let day = date_.getDate();
    let months = [
        'Jan', 'Feb', 'Mar', "Apr", 
        "May", 'Jun', 'Jul', 'Aug',
        'Sep', 'Oct', 'Nov', 'Dec'
    ]
    return (
      <div class="container-fluid">
        <div class="dat">
            <h3>{months[mon-1]} {day}st</h3>
            <p>Good Day to Manage Your Deals!</p>
        </div>
        <div class="todo">
            <h3>TODO</h3>
            <TodoList items={this.state.items} />
            <form onSubmit={this.handleSubmit}>
            <label htmlFor="new-todo">
                What needs to be done?
            </label>
            <input
                id="new-todo"
                onChange={this.handleChange}
                value={this.state.text}
                class="inp"
            />
            <button class="btn">
                SUBMIT
            </button>
            </form>
        </div>
      </div>
    );
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.text.length === 0) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now()
    };
    this.setState(state => ({
      items: state.items.concat(newItem),
      text: ''
    }));
  }
}

class TodoList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.items.map(item => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    );
  }
}

ReactDOM.render(
  <TodoApp/>,
  document.getElementById('app')
);
