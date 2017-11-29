import React, { Component } from 'react'
import { connect } from 'react-redux'
import Select from "../components/Selectpage"


class App extends Component {
	constructor() {
		super();

		this.state =
			{
				currentPage: 1,
				measuresPerPage: 2
			}

	}

	handleClick = (event) => {
		this.setState({
			currentPage: Number(event.target.id)
		});
	}
	render() {

		const { data, currentPage, measuresPerPage } = this.state;
		const { measures, dataset } = this.props;
		const indexOfLastmeasure = currentPage * measuresPerPage;
		const indexOfFirstmeasure = indexOfLastmeasure - measuresPerPage;
		const datasets = this.props.measures.datas;
		
		const currentmeasures = datasets.slice(indexOfFirstmeasure, indexOfLastmeasure);
		console.log(currentmeasures)
		// const currentmeasures = data.slice(indexOfFirstmeasure, indexOfLastmeasure);
		// console.log(currentmeasures)

		if (currentmeasures && currentmeasures.length > 0) {
			const rendermeasures = currentmeasures.map((measure, index) => {

				return <div id="Content" key={index}><input type="radio" /> &nbsp; &nbsp;
         <b> {measure.Datasets} </b>
					&nbsp; &nbsp; &nbsp; &nbsp;
          Last executed on - &nbsp;
          <span id="Period"> {measure.Durations} </span>;
            </div>;

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

		return (
			<div>


				<Select input={this.props.measures.text}
					rendermeasures={rendermeasures} renderPageNumbers={renderPageNumbers}

				/>
				
			
			</div>
		)

	}
	else{
		return <div>GO to first page</div>
	}
}

}



const mapStateToProps = (state) => ({
	measures: state.measures,
	dataset: state.dataset
})

const Selects = connect(
	mapStateToProps
)(App)

export default Selects