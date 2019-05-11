import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  decimalHandler = () => {
    var decimal = new Number(this.refs.decimal.value)
    this.refs.hexadecimal.value = decimal.toString(16)
    this.refs.octal.value = decimal.toString(8)
    this.refs.binary.value = decimal.toString(2)
  }
  hexadecimalHandler = () => {
    var hexadecimal = new Number(this.refs.hexadecimal.value)
    this.refs.decimal.value = hexadecimal.toString(10)
    this.refs.octal.value = hexadecimal.toString(8)
    this.refs.binary.value = hexadecimal.toString(2)
  }
  render() {
    return(
      <div className="bg-secondary" style={{height:"720px", marginTop:"-17px"}}>
      <div className="container">
                <div className="row justify-content-center ml-auto mr-auto mt-3">
                    <form className="border mb-3 mt-5" style={{padding : '20px', borderRadius : '5%'}}>
                        <fieldset>
                            <legend>Number Conversion</legend>
                            <div className="form-group row">
                                <label className="col-sm-4 col-form-label" >Decimal(10)</label>
                                <div className="col-sm-8">
                                    <input type="text" ref="decimal" className="form-control" onChange={this.decimalHandler}/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-4 col-form-label">Hexadecimal(16)</label>
                                <div className="col-sm-8">
                                    <input type="text" ref="hexadecimal" className="form-control" onChange={this.hexadecimalHandler}/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-4 col-form-label">Octal(8)</label>
                                <div className="col-sm-8">
                                    <input type="text" ref="octal" className="form-control" disabled/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-4 col-form-label">Binary(2)</label>
                                <div className="col-sm-8">
                                    <input type="text" ref="binary" className="form-control" disabled/>
                                </div>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </div>
            </div>
    )
  }
}

export default App;
