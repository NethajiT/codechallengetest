import React, { Component } from 'react'
import { connect } from 'react-redux'
import Select from "../components/Selectpage"

const Show = ({ id, text }) => (
    <span>
        &nbsp;&nbsp;
    {text}
    </span>
)

class App extends Component {
    constructor() {
        super();

        this.state = {
            data: [
                {
                    Dataset: 'Dataset 1',
                    Duration: 'Jan 2014'
                },
                {
                    Dataset: 'Dataset 2',
                    Duration: 'Jan 2014'
                },
                {
                    Dataset: 'Dataset 3',
                    Duration: 'Jan 2014'
                },
                {
                    Dataset: 'Dataset 4',
                    Duration: 'Jan 2014'
                },
                {
                    Dataset: 'Dataset 5',
                    Duration: 'Jan 2014'
                }
            ],
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

        const indexOfLastmeasure = currentPage * measuresPerPage;
        const indexOfFirstmeasure = indexOfLastmeasure - measuresPerPage;
        const currentmeasures = data.slice(indexOfFirstmeasure, indexOfLastmeasure);

        const rendermeasures = currentmeasures.map((measure, index) => {

            return <div id="Content" key={index}><input type="radio" /> &nbsp; &nbsp;
         <b> {measure.Dataset} </b>
                &nbsp; &nbsp; &nbsp; &nbsp;
          Last executed on - &nbsp;
          <span id="Period"> {measure.Duration} </span>;
            </div>;
        });

        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(data.length / measuresPerPage); i++) {
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

            <Select input={this.props.measures.map(measure => <Show key={measure.id}  {...measure} />)}
                rendermeasures={rendermeasures} renderPageNumbers={renderPageNumbers}
            />
        )
    }
}

const mapStateToProps = (state) => ({
    measures: state.measures
})

const Selects = connect(
    mapStateToProps
)(App)

export default Selects