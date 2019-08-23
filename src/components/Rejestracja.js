import React, {Component} from "react";
import Menu from "./Menu";
import {Link} from "react-router-dom";

class Sign extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            passwordConfirm: "",
            errors: [],
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
        const errors = [];

        if (this.state.email.length < 3 && this.state.email.indexOf("@") === -1) {
            errors.push('Pole email musi zawierać znak @ i co najmniej 3 znaki')
        }
        if (this.state.password.length < 6) {
            errors.push('Hasło musi zawierać conajmniej 6 znaków');
        }
        if (this.state.passwordConfirm.length < 6 && this.state.password === this.state.passwordConfirm) {
            errors.push('Haslo musi zawierać conajmniej 6 znaków i być identyczne jak pierwsze hasło')
        }
        this.setState({errors});
        return errors.length === 0;
    }

    render() {
        const form = (
            <form onSubmit={e => this.handleSubmit(e)}>
                <div className="log-form">
                    <label><span>Email</span><br /><input type="email" name="email" value={this.state.email} onChange={e => this.handleChange(e)} /><br /> <hr className="log-line"/> </label>
                    <label><span>Hasło</span><br /><input type="password" name="password" value={this.state.password} onChange={e => this.handleChange(e)} /><br /> <hr className="log-line"/></label>
                    <label><span>Powtórz hasło</span><br /><input type="password" name="passwordConfirm" value={this.state.passwordConfirm} onChange={e => this.handleChange(e)} /><br /> <hr className="log-line"/></label>
                </div>
                <div className="log-button">
                    <button className="btn"><Link to="/logowanie">Zaloguj się</Link></button>
                    <button className="btn" type="submit">Załóż konto</button>
                </div>
            </form>
        );

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
                            <p className="text-steps" >Załóż konto</p>
                            <div className="decoration log-image">
                            </div>

                            <div>
                                <ul className="main-errors-list">{this.state.errors.map((error, index) => <li key={index}>{error}</li>)}</ul>
                                {this.state.send ? <h3>Dzięujemy</h3> : form}
                            </div>

                        </div>

                        <div className="col-4">
                        </div>

                    </div>
                </div>
            </div>);
    }
}
export default Sign