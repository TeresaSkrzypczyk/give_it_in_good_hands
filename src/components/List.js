import React, {Component} from "react";
import axios from 'axios';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            government: true,
            foundation: false,
            local: false,
            governmentJson: [],
            foundationJson: [],
            localJson: [],
            currentPage: 1,
            listPerPage: 3
        }
        this.handlePageChange=this.handlePageChange.bind(this);
    }

    handleClickOne () {
        this.setState(state => ({
            //foundation: !state.foundation
            foundation: true,
            government: false,
            local: false
        }))
    }

    handleClickTwo () {
        this.setState(state => ({
            //government: !state.government
            foundation: false,
            government: true,
            local: false
        }))
    }

    handleClickThree () {
        this.setState(state => ({
            //local: !state.local
            foundation: false,
            government: false,
            local: true
        }))
    }

    componentDidMount() {
        const urlGoverments = 'http://localhost:3001/goverments';
        axios.get(urlGoverments).then(response => response.data)
        .then((data) => {
            this.setState({ governmentJson: data })
            console.log(this.state.governmentJson)
        })

        const urlFoundations = 'http://localhost:3001/foundations';
        axios.get(urlFoundations).then(response => response.data) 
        .then((data)=> {
            this.setState({ foundationJson: data })
            console.log(this.state.foundationJson)
        })

        const urlLocales = 'http://localhost:3001/locales';
        axios.get(urlLocales).then(response => response.data) 
        .then((data)=> {
            this.setState({ localJson: data })
            console.log(this.state.localJson)
        })
    }

    componentWillReceiveProps() {
        this.setState({
          currentPage: 1,
        })
      }

    //for pagination all records
    handlePageChange(event) {
        this.setState({
            currentPage: Number(event.target.id)
        });
    }

    render() {
        //for pagination all records
        const { foundationJson, localJson,governmentJson, currentPage, listPerPage} = this.state;

        const indexOfLast = currentPage * listPerPage;
        const indexOfFirst = indexOfLast - listPerPage;

        const currentListGovernment = governmentJson.slice(indexOfFirst, indexOfLast);
        const currentListFoundation = foundationJson.slice(indexOfFirst, indexOfLast);
        const currentListLocal = localJson.slice(indexOfFirst, indexOfLast);

        //for pagination government
        const renderListGovernment = currentListGovernment.map((govern, index) => {
            return (
            <div className="col-12 list-help government">

                <div className="col-6">
                    <h2 className="main-element">{govern.mainName}</h2>
                    <p className="left-column">{govern.detailName}</p>
                    <hr />
                </div>
                <div className="col-6">
                    <p className="right-column text-one">{govern.rightName}</p>
                    <hr className="line-right-column"/>
                </div>

            </div>
             )})

        const pageNumbersGovernment = [];
            for (let i = 1; i <= Math.ceil(governmentJson.length / listPerPage); i++) {
            pageNumbersGovernment.push(i);
            }

        const renderPageNumbersGovernment = pageNumbersGovernment.map(number => {
            return (
                <li
                    key={number}
                    id={number}
                    onClick={this.handlePageChange}
                    activeClass="active"
                >
                {number}
                </li>
            );
        });  

        //for pagination foundation
        const renderListFoundation = currentListFoundation.map((found, index) => {
            return (
            <div className="col-12 list-help foundation">

                <div className="col-6">
                    <h2 className="main-element">{found.mainName}</h2>
                    <p className="left-column">{found.detailName}</p>
                    <hr />
                </div>
                <div className="col-6">
                    <p className="right-column text-one">{found.rightName}</p>
                    <hr className="line-right-column"/>
                </div>

            </div>
            )})

        const pageNumbersFoundation = [];
            for (let i = 1; i <= Math.ceil(foundationJson.length / listPerPage); i++) {
            pageNumbersFoundation.push(i);
            }

        const renderPageNumbersFoundation = pageNumbersFoundation.map(number => {
                return (
                    <li
                        key={number}
                        id={number}
                        onClick={this.handlePageChange}
                        activeClass="active"
                    >
                    {number}
                    </li>
                );
        });  

        //for pagination local
        const renderListLocal = currentListLocal.map((loc, index) => {
            return (
            <div className="col-12 list-help local">

                <div className="col-6">
                    <h2 className="main-element">{loc.mainName}</h2>
                    <p className="left-column">{loc.detailName}</p>
                    <hr />
                </div>
                <div className="col-6">
                    <p className="right-column text-one">{loc.rightName}</p>
                    <hr className="line-right-column"/>
                </div>

            </div>
            )})

        const pageNumbersLocal = [];
            for (let i = 1; i <= Math.ceil(localJson.length / listPerPage); i++) {
            pageNumbersLocal.push(i);
            }

        const renderPageNumbersLocal = pageNumbersLocal.map(number => {
                return (
                    <li
                        key={number}
                        id={number}
                        onClick={this.handlePageChange}
                        activeClass="active"
                    >
                    {number}
                    </li>
                );
        });  

        return (
                <>
                    <div className="col-12 organization">
                        <div className="col-3">
                            <button className='btn list' onClick={e => this.handleClickOne(e)}>Fundacjom</button></div>
                        <div className="col-3">
                            <button className='btn list' onClick={e => this.handleClickTwo(e)}>Organizacjom<br />pozarządowym</button></div>
                        <div className="col-3">
                            <button className='btn list' onClick={e => this.handleClickThree(e)}>Lokalnym<br />zbiórkom</button></div>
                    </div>

                    <div className="col-12 organization">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed<br />do eiusmod tempor incididunt ut labore et dolore magna<br />aliqua. Ut enim ad minima veniam, quis nostrum exercitation.</p>
                    </div>


                            {this.state.government ?
                            <>
                                {renderListGovernment}
                                
                                <div className="col-12 page">
                                    <ul id="page-numbers">
                                        {renderPageNumbersGovernment}
                                    </ul>
                                </div>
                            </> : null }

                            
                            {this.state.foundation ?
                            <>
                                {renderListFoundation}
                                
                                <div className="col-12 page">
                                    <ul id="page-numbers">
                                        {renderPageNumbersFoundation}
                                    </ul>
                                </div>
                            </> : null }

                                
                            {this.state.local ?
                            <>
                                {renderListLocal}
                                
                                <div className="col-12 page">
                                    <ul id="page-numbers">
                                        {renderPageNumbersLocal}
                                    </ul>
                                </div>
                            </> : null }

                </>
            );
    }
}

export default List;