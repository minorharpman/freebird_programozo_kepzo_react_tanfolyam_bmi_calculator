
import React, { Component } from 'react';
import './App.css';


class App extends Component {


  constructor(props) {
    super(props);
    this.state = {
      weight: null,
      height: null,
      finalBmi: null,
      meaning: ''
    };

    this.calculateBMI = this.calculateBMI.bind(this);
    this.changeHandler = this.changeHandler.bind(this);

  }

  changeHandler(event) {
    let myname = event.target.name;
    console.log('myname: ' + myname);
    let myvalue = event.target.value;
    console.log('myvalue: ' + myvalue);
    this.setState({ [myname]: myvalue });


  }

  calculateBMI() {
    let weight = this.state.weight;
    var height = this.state.height;
    if (weight > 0 && height > 0) {
      let finalBmi = weight / (height / 100 * height / 100);
      let meaning = '';

      this.setState({ finalBmi: finalBmi });

      if (finalBmi < 18.5) {
        meaning = "That you are too thin."
      }
      if (finalBmi > 18.5 && finalBmi < 25) {
        meaning = "That you are healthy."
      }
      if (finalBmi > 25) {
        meaning = "That you have overweight."
      }

      this.setState({ meaning: meaning });
    }
    else {
      alert("Please Fill in everything correctly")
    }
  };

  render() {
    return (
      <div className="container" >
        <div className="row mt-4">
          <div className="col-sm-12 ">
            <h2>Body Mass Index Calculator</h2>
            <label>Your Weight(kg): </label> <input type="text" name="weight" onChange={this.changeHandler} /><br />
            <label>Your Height(cm): </label><input type="text" name="height" onChange={this.changeHandler} /><br /><br />
            <button onClick={this.calculateBMI} className="btn btn-primary" >Calculate BMI</button><br />
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-sm-12">
            <p>Your BMI: {this.state.finalBmi}</p> <br />
            <p>This Means: {this.state.meaning}</p> <br />
          </div>
        </div>

      </div>
    );
  }
}

export default App;
