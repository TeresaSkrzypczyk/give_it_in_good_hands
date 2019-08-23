import React, {Component} from "react";
import Menu from "./Menu";
import {Link} from "react-router-dom";

class Log extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            emailError: "",
            passwordError: "",
            send: false
        }
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        if (this.validate()) {
            this.setState({send: true})
        }
    }

    validate() {
        let emailError = "";
        let passwordError = "";
        //const errors = "";

        if (this.state.email.length < 3 && this.state.email.indexOf("@") === -1) {
            emailError = 'Pole email musi zawierać znak @ i co najmniej 3 znaki';
        }
        if (this.state.password.length < 6) {
            passwordError = 'Hasło musi musi zawierać conajmniej 6 znaków';
        }
        this.setState({emailError, passwordError });
        return false;
    }

    render() {
        return (
                <div className="wrapper-text">
                    <div className="row">

                        <div className="col-12">
                            <Menu />
                        </div>

                        <div className="col-12 log">
                            <div className="col-4">
                            </div>
                            <div className="col-4 log-text">
                                <p className="text-steps" >Zaloguj się</p>
                                <div className="decoration log-image">
                                </div>

                                <div>
                                    <form onSubmit={e => this.handleSubmit(e)}>
                                        <div className="log-form">
                                            <label>
                                                <span>Email</span><br />
                                                <input type="email" name="email" value={this.state.email} onChange={e => this.handleChange(e)} /><br /> <hr className="log-line"/> </label>
                                            <div style={{ fontSize: 12, color: "red" }}>
                                                {this.state.emailError}
                                            </div>
                                            <label><span>Hasło</span><br /><input type="password" name="password" value={this.state.password} onChange={e => this.handleChange(e)} /><br /> <hr className="log-line"/></label>
                                            <div style={{ fontSize: 12, color: "red" }}>
                                                {this.state.passwordError}
                                            </div>
                                        </div>
                                        <div className="log-button">
                                            <button className="btn"><Link to="/rejestracja"> Załóż konto</Link></button>
                                            <button className="btn" type="submit">Zaloguj się</button>
                                        </div>
                                    </form>
                                </div>

                            </div>

                            <div className="col-4">
                            </div>

                        </div>
                    </div>
                </div>);
    }
}
export default Log