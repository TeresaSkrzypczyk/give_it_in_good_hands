import React, {Component} from "react";
import axios from 'axios';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            government: true,
            foundation: false,
            local: false,
            everyOrganization: []
        }
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
        let url = 'http://localhost:3001'
        
        axios.get(url).then(response => response.data)
        .then((data) => {
            this.setState({ everyOrganization: data })
            console.log(this.state.everyOrganization)
        });
    }

    render() {
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
                    <div className="col-12 list-help government">
                        <div className="col-6">
                            <h2 className="main-element">Organizacja "Lorem Ipsum 1"</h2>
                            <p className="left-column">Quis varius quam quisque id diam vel quam elementum pulvinar.</p>
                            <hr />
                            <h2 className="main-element">Organizacja "Lorem Ipsum 2"</h2>
                            <p className="left-column">Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.</p>
                            <hr />
                            <h2 className="main-element">Organizacja "Lorem Ipsum 3"</h2>
                            <p className="left-column">Scelerisque in dictum non consectetur a erat nam.</p>
                        </div>
                        <div className="col-6">
                            <p className="right-column text-one">Egestas, sed, tempus</p>
                            <hr className="line-right-column"/>
                            <p className="right-column text-two">Ut, aliquam, purus, sit, amet</p>
                            <hr />
                            <p className="right-column text-three">Mi, quis, hendrerit, dolor</p>
                        </div>
                    </div>
                    </> : null }

                    {this.state.foundation ?
                        <>
                    <div className="col-12 list-help foundation">
                        <div className="col-6">
                            <h2 className="main-element">Fundacja "Dbam o Zdrowie"</h2>
                            <p className="left-column">Cel i mijsa: Pomoc osobom znajdującym się w studnej sytuacji życiowej.</p>
                            <hr />
                            <h2 className="main-element">Fundacja "Dla dzieci"</h2>
                            <p className="left-column">Cel i misja: Pomoc dzieciom z ubogich rodzin.</p>
                            <hr />
                            <h2 className="main-element">Fundacja "Bez domu"</h2>
                            <p className="left-column">Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.</p>
                        </div>
                        <div className="col-6">
                            <p className="right-column text-one">ubrania, jedzenie, sprzęt AGD, meble, zabawki</p>
                            <hr className="line-right-column"/>
                            <p className="right-column text-two">ubrania, meble, zabawki</p>
                            <hr />
                            <p className="right-column text-three">ubrania, jedzenie, ciepłe koce</p>
                        </div>
                    </div>
                        </> : null }

                    {this.state.local ?
                        <>
                    <div className="col-12 list-help local">
                        <div className="col-6">
                            <h2 className="main-element">Zbiórka "Lorem Ipsum 1"</h2>
                            <p className="left-column">Quis varius quam quisque id diam vel quam elementum pulvinar.</p>
                            <hr />
                            <h2 className="main-element">Zbiórka "Lorem Ipsum 2"</h2>
                            <p className="left-column">Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.</p>
                            <hr />
                            <h2 className="main-element">Zbiórka "Lorem Ipsum 3"</h2>
                            <p className="left-column">Scelerisque in dictum non consectetur a erat nam.</p>
                        </div>
                        <div className="col-6">
                            <p className="right-column text-one">Egestas, sed, tempus</p>
                            <hr className="line-right-column"/>
                            <p className="right-column text-two">Ut, aliquam, purus, sit, amet</p>
                            <hr />
                            <p className="right-column text-three">Mi, quis, hendrerit, dolor</p>
                        </div>
                    </div>
                        </> : null }
                </>
            );
    }
}

export default List;