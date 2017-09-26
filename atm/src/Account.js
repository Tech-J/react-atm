import React, { Component } from 'react';

class Account extends Component {
  constructor (props) {
    super(props);
    this.state = {
      checking: 0,
      savings: 0,
      input:''
    };
}
//update the state of the input
  updateInputValue(evt) {
    this.setState({
      input: evt.target.value
    });

  }
  //update the state of the what account you want
    updateSelectionValue(evt) {
    this.setState({
      selection: evt.target.value
    });
  }
//update the checking Account value
    updateCheckingAccount(value) {
      console.log(this.state.input)
    this.setState({
      checking: value,
       input: ''
    });
  }
//update the savings Account value
    updateSavingsAccount(value) {
        console.log(this.state.input)
    this.setState({
      savings: value,
      input:''
    });
  }

//function for deposit
  ////////////////////////////////////////////
    deposit (amount, account){
            if (account === "checking" && amount !== '') {
                const newbalance = this.state.checking + parseInt(amount)
                this.updateCheckingAccount(newbalance)
                // accounts.checking = newbalance
                // accountUpdate()
            } else if (account === "savings" && amount !== '') {
                 const newbalance = this.state.savings + parseInt(amount)
                this.updateSavingsAccount(newbalance)
            }
            else{
              alert('Please Select Your Account')
            }
        }
        ////////////////////////////////////////////////////////////////

    //function for withdrawal
    ////////////////////////////////////////////////////////////////
    withdrawal(amount, account){
            if (account === "checking" && amount !== '') {
                parseInt(amount) > this.state.checking ? alert("Amout greater than balance") :  this.updateCheckingAccount((this.state.checking -parseInt(amount)))
            } else if (account === "savings" && amount !== '') {
               parseInt(amount) > this.state.savings ? alert("Amount greater than balance") : this.updateSavingsAccount(this.state.savings - parseInt(amount))
          }
          else{
             alert('Please Select Your Account')
          }
        }
    ///////////////////////////////////////////////////////////

  render() {
    return (
 <div id="container">
        <div id="row1">
            <div className="accounts">
                <h1>Checking</h1>
                <h2 id="checking">{this.state.checking}</h2>
            </div>
            <div className="accounts">
                <h1>Savings</h1>
                <h2 id="savings">{this.state.savings}</h2>
            </div>
        </div>
        <div id="row2">
            <label>*Enter amounts in incriments of $20</label>
                <input type="number" onChange={(e)=>this.updateInputValue(e)} value={this.state.input}/>
             <p>  Account: <select onChange={(e)=>this.updateSelectionValue(e)}>
                    <option value="selection">Selection</option>
                    <option value="savings">Savings</option>
                    <option value="checking">Checking</option>
                </select> </p>
                <button id="deposit" onClick={ (e) => this.state.input%20 === 0  ? this.deposit(this.state.input, this.state.selection) : alert("Please a value in incriments of $20")}>Deposit</button>
                <button id="withdrawal" onClick={ (e) => this.state.input%20 === 0  ?  this.withdrawal(this.state.input, this.state.selection) : alert("Please a value in incriments of $20")}>Withdrawal</button>
        </div>
    </div>
    );
  }
}

export default Account;
