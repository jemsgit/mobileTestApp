import React, {Component} from 'react'
import textEncoder from 'text-encoding'

let TextDecoder = textEncoder.TextDecoder

export default class DataComponent extends Component{
  state = {}

  componentDidMount(){
    this.getDataFromServer();
  }

  serverUrl = 'https://query.yahooapis.com/v1/public/yql?q=select+*+from+yahoo.finance.xchange+where+pair+=+%22USDRUB,EURRUB%22&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys'
  dataIsLoaded = false;
  getDataFromServer(){
    if(this.dataIsLoaded){
      return;
    }
    fetch(this.serverUrl).then((res) => {
      console.log(res.body);
      let reader = res.body.getReader();
      let data = reader.read();
      data.then((de) => {
        var str = new TextDecoder("utf-8").decode(de);
        console.log(str)})
      this.dataIsLoaded = true;
      this.setState({data: res})
      console.log(this.state)
    })
  }
  render(){
    console.log(this.state.data)
    return (<div>{this.state.data ? this.state.data.status : '12321'}</div>)
  }
}
