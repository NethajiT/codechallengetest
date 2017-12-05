import React, { Component } from 'react'
import { connect } from 'react-redux'
import ReactDOM from 'react-dom';
import Select from "../components/Selectpage"
import {
	DataTable,
	TableHeader,
	TableBody,
	TableRow,
	TableColumn,
	TableFooter,
	Chip
} from 'react-md';
import { Dataset } from '../utils/Dataset';
class App extends Component {
	constructor() {
		super();

		this.state =
			{
				currentPage: 1,
				measuresPerPage: 5,
				chipdata: []
			}

	}

	handleClick = (event) => {
		document.getElementById("0").checked = false;

		alert("aa")
		this.setState({
			currentPage: Number(event.target.id)
		});
	}

	check = (value, id) => {
		var box = document.getElementById(id);
		if (ReactDOM.findDOMNode(box).checked) {
			ReactDOM.findDOMNode(box).classList.remove("unchecked")
			ReactDOM.findDOMNode(box).classList.add("checked")
			var newChipdata = this.state.chipdata
			newChipdata.push(value)
			this.setState({ chipdata: newChipdata })
		}
		else {
			ReactDOM.findDOMNode(box).classList.remove("checked")
			ReactDOM.findDOMNode(box).classList.add("unchecked")
			var newChipdata = this.state.chipdata
			var index = newChipdata.indexOf(value)
			newChipdata.splice(index, 1)
			this.setState({ chipdata: newChipdata })
		}
	}
	

	chipclick = (value, id) => {
			console.log(value)
			 var x = document.getElementsByTagName("input");
			 var searchText =value;
			 for (var i = 0; i < x.length; i++)
				   {  if (x[i].value == searchText)
						 {  document.getElementsByTagName("input")[i].checked=false 
						  }
				   }
		//console.log("value")
			var newChipdata = this.state.chipdata
			var index = newChipdata.indexOf(value)
			newChipdata.splice(index, 1)
			this.setState({ chipdata: newChipdata })

	}
	render() {

		const { data, currentPage, measuresPerPage } = this.state;
		const { measures, dataset } = this.props;
		const indexOfLastmeasure = currentPage * measuresPerPage;
		const indexOfFirstmeasure = indexOfLastmeasure - measuresPerPage;
		const datasets = this.props.measures.datas;
		const currentmeasures = datasets.slice(indexOfFirstmeasure, indexOfLastmeasure);
		//console.log(currentmeasures)
		// const currentmeasures = data.slice(indexOfFirstmeasure, indexOfLastmeasure);
		// console.log(currentmeasures)

		if (currentmeasures && currentmeasures.length > 0) {
			const rendermeasures = currentmeasures.map((measure, index) => {

				return (
					<DataTable plain>
						<TableBody>
							<TableRow key={index} >
								<TableColumn ><input type='checkbox' value={measure.Datasets} id={index}
									onClick={e => this.check(e.target.value, e.target.id)} className="unchecked" />
									<b >{measure.Datasets}</b></TableColumn>
								<TableColumn >	Last executed on -<span id="Period">{measure.Durations}</span></TableColumn>
							</TableRow>
						</TableBody>
					</DataTable>
				)
			});


			const pageNumbers = [];
			for (let i = 1; i <= Math.ceil(datasets.length / measuresPerPage); i++) {
				pageNumbers.push(i);
			}

			const renderPageNumbers = pageNumbers.map(number => {
				return (


					<span className="Page"
						key={number}
						id={number}
						onClick={this.handleClick}
					>
						{number} &nbsp;
            </span>
				);
			});

			const chips = this.state.chipdata.map((c, i) => {
				return (
					<Chip label={c}  value={c} onClick={e => this.chipclick(c, { i })} />
				)
			})


			return (
				<div>


					<Select input={this.props.measures.text}
						rendermeasures={rendermeasures} renderPageNumbers={renderPageNumbers} chips={chips}
					/>
					{/*				
		     <DataTable baseId="simple-selectable-table" indeterminate>
    <TableBody>
      {Dataset.map((Data,i) => (
        <TableRow key={i}>
          <TableColumn>{Data.Datasets}</TableColumn>
          <TableColumn>{Data.Durations}</TableColumn>
        </TableRow>
      ))}
    </TableBody>
  </DataTable>*/}

				</div>
			)
		}

		else {
			return <div>GO to first page</div>
		}
	}

}



const mapStateToProps = (state) => {
	return {
		measures: state.measures
	}

}

const Selects = connect(
	mapStateToProps
)(App)

export default Selects