import React, {Component} from 'react';
import GraphComponent from '../graphComponent/graphComponent';

const data2= [
      {name: '2017-10-06', EUR: 65.20, USD: 59.45},
      {name: '2017-10-07', EUR: 65.29, USD: 54.45},
      {name: '2017-10-08', EUR: 68.20, USD: 55.45},
      {name: '2017-10-09', EUR: 62.20, USD: 53.45},
      {name: '2017-10-10', EUR: 63.20, USD: 54.45},
];

export default class DataComponent extends Component{
  state = {
    data: []
  }

  componentDidMount(){
    this.getDataFromServer();
  }

  serverUrl = 'http://api.fixer.io/latest?base=RUB&date=2017-06-10'
  dataIsLoaded = false;

  getDataFromServer(){
    if(this.dataIsLoaded){
      return;
    }
    fetch(this.serverUrl).then((res) => {
      return res.json();
    }).then((data)=>{
      let {rates} = data;
      let usd = (1/rates.USD).toFixed(2);
      let eur = (1/rates.EUR).toFixed(2);
      this.dataIsLoaded = true;
      this.setState({data: data2})
      console.log(data)
    })
  }


  render(){
    console.log(this.state.data)
    return (<GraphComponent data={this.state.data} />)
  }
}
