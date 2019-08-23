import React, {Component} from "react";

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            text: "",
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

        if (this.state.name === "" && this.state.name.indexOf(" ") === -1) {
            errors.push('Imię powinno być jednym wrazem');
        }
        if (this.state.email.length < 3 && this.state.email.indexOf("@") === -1) {
            errors.push('Pole email musi zawierać znak @ i co najmniej 3 znaki')
        }
        if (this.state.text.length < 120) {
            errors.push('Wiadomość musi mieć conajmniej 120 znaków');
        }
        this.setState({errors});
        return errors.length === 0;
    }

    render() {

        const form = (
            <form onSubmit={e => this.handleSubmit(e)} method="POST">

                <div className="col-12">
                    <div className="col-12 contact-form">
                        <div className="col-6 name">
                        Wpisz swoje imię<input type="text" placeholder="Krzysztof" name="name" value={this.state.name} onChange={e => this.handleChange(e)} /><br />
                        <hr />
                        </div>
                        <div className="col-6 email">
                        Wpisz swój email<input type="email" placeholder="abc@xyz.pl" name="email" value={this.state.email} onChange={e => this.handleChange(e)} /><br />
                        <hr />
                        </div>
                    </div>
                    <div className="col-12">
                    Wpisz swoją wiadomość<br /><textarea type="text" placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur" name="text" value={this.state.text} onChange={e => this.handleChange(e)} /><br />
                    <hr />
                    </div>
                    <div className="col-12 button">
                    <button className="btn" type="submit">Wyślij</button>
                    </div>
                </div>

            </form>
        );

        return (
            <>
                <div>
                    <ul className="main-errors-list">{this.state.errors.map((error, index) => <li key={index}>{error}</li>)}</ul>
                    {this.state.send ? <h3>Dzięujemy</h3> : form}
                </div>
            </>
        );
    }
}

export default Form;