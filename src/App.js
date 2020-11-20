import './App.css';
import {Component} from 'react';
import {BrowserRouter,Route} from 'react-router-dom';

class App extends Component{
    

    render() {
	return (
		<div className="App">
		<form action="/uploadfile" enctype="multipart/form-data" method="POST"> 
		<input type="file" name="myFile" />
		<input type="submit" value="Upload a file"/>
		</form>
		</div>
	);
    }
}


export default App;
