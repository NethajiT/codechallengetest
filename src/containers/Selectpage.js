import React, { Component } from 'react'
import { connect } from 'react-redux'
//import ReactDOM from 'react-dom';
import Select from "../components/Selectpage"
import {
	DataTable,
	TableBody,
	TableRow,
	TableColumn,
	Chip
} from 'react-md';
//import { Dataset } from '../utils/Dataset';
import { createChip,removeChip } from '../store/Chipdata/action'
import { dropdownValues } from '../store/Dropdown/action'
class App extends Component {
	constructor() {
		super();

		this.state =
			{
				currentPage: 1,
				measuresPerPage: 5,
				chipdata: [],			
			}
	}

	handleClick = (event) => {
		this.setState({
			currentPage: Number(event.target.id)
		});
        
	}
    

	check = (value, id) => {
		if (document.getElementById(id).checked) {
			this.props.dispatch(createChip(value));
			var newChipdata = this.state.chipdata
			newChipdata.push(value)
			this.setState({ chipdata: newChipdata })
		}
		else {
			 newChipdata = this.state.chipdata
			var index = newChipdata.indexOf(value)
			newChipdata.splice(index, 1)
			this.setState({ chipdata: newChipdata })
			this.props.dispatch(removeChip(value));
		}
	}


	chipclick = (value) => {
		 this.props.dispatch(removeChip(value));
		// console.log(value)
		//  var x = document.getElementsByTagName("input");
		//  var searchText =value;
		//  for (var i = 0; i < x.length; i++)
		// 	   {  if (x[i].value == searchText)
		// 			 {  document.getElementsByTagName("input")[i].checked=false 
		// 			  }
		// 	   }
		//console.log("value")

		var newChipdata = this.state.chipdata
		var id = value.substr(8);
		document.getElementById(id).checked = false
		var index = newChipdata.indexOf(value)
		newChipdata.splice(index, 1)
		this.setState({ chipdata: newChipdata })
       
	}

	selectvalue=()=>{
		 var indexValue = document.getElementById("Dropdown").selectedIndex;
         var dropdownValue = document.getElementById("Dropdown").options[indexValue].value;
		 this.props.dispatch(dropdownValues(dropdownValue))
		
	}

	refine=()=>{
		 this.props.history.push("/Refinedataset")
	}
	render() {

		const {  currentPage, measuresPerPage } = this.state;
		//const {  dataset } = this.props;
		const indexOfLastmeasure = currentPage * measuresPerPage;
		const indexOfFirstmeasure = indexOfLastmeasure - measuresPerPage;
		const datasets = this.props.measures.datas;
		const currentmeasures = datasets.slice(indexOfFirstmeasure, indexOfLastmeasure);

		if (currentmeasures && currentmeasures.length > 0) {
			
			const rendermeasures = currentmeasures.map((measure, index) => {
				//id={index} for TableColumn
				return (
					<DataTable plain key={index}>
						<TableBody>
							<TableRow key={index} >
								<TableColumn ><input type='checkbox' value={measure.Datasets} id={measure.Datasets.substr(8)}
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
			
			const chips = this.props.chipdatas.map((c, i) => {			
				return (	
					<div  key={i}>			
					<Chip label={c} value={c} onClick={e => this.chipclick(c, c.substr(8))} /></div>
				)
			})

           const dropdowns = () => {
            return (

                    <div>
                    <select id="Dropdown" onChange={this.selectvalue}>
                        {this.props.chipdatas.map((Data, i) => (
                            <option value={Data} key={i}>{Data}</option>))}
                    </select>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </div>
            )
        }

		const Field=()=>{
			this.props.chipdatas.map((c,i)=>{
				return(<div>{c}</div>)
			})
			
		}

		const {  dropdownval, dropdownfields } = this.props;
			return (
				<div>
					
					<Select input={this.props.measures.text}
						rendermeasures={rendermeasures} renderPageNumbers={renderPageNumbers} chips={chips} refine={this.refine}
						dropdowns={dropdowns} dropdownval={dropdownfields.map((c,i)=>{return(<div>{c}</div>)})}
					/>
					<div>{dropdownval}</div>
					<div>{dropdownfields.map((c,i)=>{return(<div>{c}</div>)})}</div>
				</div>
		
			)
		}

		else {
			return <div>GO to first page</div>
		}
	}

}

const mapStateToProps = (state) => {
	console.log(state.dropdown.fields)
	 if(state.chips.chipdata.length>0){
        return {			
		measures: state.measures,
		chipdatas:state.chips.chipdata,
		dropdownval:state.dropdown.dropdownValue,
		dropdownfields:state.dropdown.fields
	}
}
else{
 	return {			
		 measures: state.measures,
		chipdatas:[],
		dropdownfields:[]
	}  
}
}

const Selects = connect(
	mapStateToProps
)(App)

export default Selects