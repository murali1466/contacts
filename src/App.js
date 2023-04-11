import { Component } from "react";
import "./App.css";
import ContactItem from "./components/ContactItem";
const ContactsList = [
  {
    name: "Murali",
    number: 9398432568,
  },
  {
    name: "Vamsi",
    number: 9642183057,
  },
];
class App extends Component {
  state = { ContactsList: ContactsList, name: "", number: "" };
  addName = (event) => {
    return this.setState({ name: event.target.value });
  };
  addNumber = (event) => {
    return this.setState({ number: event.target.value });
  };
  onAddContact = (event) => {
    event.preventDefault();
    const { name, number } = this.state;
    const newContact = {
      name: name,
      number: number,
    };
    this.setState((prevState) => ({
      ContactsList: [...prevState.ContactsList, newContact],
    }));
  };
  render() {
    const { ContactsList } = this.state;
    return (
      <>
        <div className="main-container">
          <h1 className="heading">Contacts</h1>
          <div className="form">
            <div>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                placeholder="name"
                onChange={this.addName}
              />
            </div>
            <div>
              <label htmlFor="number">Number</label>
              <input
                type="text"
                id="number"
                placeholder="mobile number"
                onChange={this.addNumber}
              />
            </div>
            <div>
              <button type="submit" onClick={this.onAddContact}>
                Add Contact
              </button>
            </div>
          </div>
          <div className="contactList">
            <table>
              <tr>
                <th>Name</th>
                <th>Contact</th>
              </tr>
              {ContactsList.map((eachContact, index) => (
                <ContactItem contactDetails={eachContact} key={index} />
              ))}
            </table>
          </div>
        </div>
      </>
    );
  }
}

export default App;

