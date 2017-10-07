import React, {Component} from 'react';

export default class GraphComponent extends Component{

  state={
    usdSelected: null,
    eurSelected: null
  }

  handleUSDOptionChange(changeEvent){
    this.setState({usdSelected: changeEvent.target.value})
  }

  handleEUROptionChange(changeEvent){
    this.setState({eurSelected: changeEvent.target.value})
  }

	render () {
    
  	return (<form>
    	<div className='bid-wrapper'>
      <div className='bid-usd'>
        <p><input name="usd" type="radio" value="Up" selected={this.state.usdSelected === 'Up'}
        onChange={this.handleUSDOptionChange.bind(this)} />Поднимется</p>
        <p><input name="usd" type="radio" value="Down" selected={this.state.usdSelected === 'Down'}
        onChange={this.handleUSDOptionChange.bind(this)} /> Упадет</p>
      </div>
      <div className='bid-eur'>
        <p><input name="eur" type="radio" value="Up" selected={this.state.eurSelected === 'Up'}
        onChange={this.handleEUROptionChange.bind(this)} />Поднимется</p>
        <p><input name="eur" type="radio" value="Down" selected={this.state.eurSelected === 'Down'}
        onChange={this.handleEUROptionChange.bind(this)} /> Упадет</p>
      </div>
      </div>
      <input type='button' value='Make bid' onClick={() => { localStorage.setItem('vanga', JSON.stringify({data: new Date(),
        eur: this.state.eurSelected,
        usd: this.state.usdSelected}))}} />
      </form>
    );
  }

}
