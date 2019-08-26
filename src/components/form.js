import React, {Component} from "react";
import axios from 'axios';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            text: "",
            nameError: "",
            emailError: "",
            textError: "",
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

        // const data=this.state;
        // console.log(data);

        if (this.validate()) {
            this.setState({send: true})
        }
        
        // axios({
        //     method: 'post',
        //     url: 'https://fer-api.coderslab.pl/v1/portfolio/contact',
        //     data: data,
        //     config: { headers: {'Content-Type': 'application/json' }}
        // })
        // .then (function (response) {
        //         console.log(response);
        // })
        // .catch (function (error) {
        //         console.log(error);
        // });

    }

    validate() {
        let nameError = "";
        let emailError = "";
        let textError = "";

        if (this.state.name === "" && this.state.name.indexOf(" ") === -1) {
            nameError ='Podane imię jest nieprawidłowe!';
        }
        if (this.state.email.length < 3 && this.state.email.indexOf("@") === -1) {
            emailError ='Podany email jest nierpawidłowy!';
        }
        if (this.state.text.length < 120) {
            textError = 'Wiadomość musi mieć conajmniej 120 znaków!';
        }
        this.setState({nameError, emailError, textError});
        return false;
    }

    render() {

        const form = (
            <form onSubmit={e => this.handleSubmit(e)}>

                <div className="col-12">

                    <div className="col-12 contact-form">
                        <div className="col-6 name">
                        <label><span>Wpisz swoje imię</span><br />
                        <input className={this.state.nameError ? "inputWithError" : "inputWithoutError" } type="text" placeholder="Krzysztof" name="name" value={this.state.name} onChange={e => this.handleChange(e)} /><br />
                        </label>
                        <div className="errors-form not-last contact-form">
                            {this.state.nameError}
                        </div>
                        </div>

                        <div className="col-6 email">
                        <label><span>Wpisz swój email</span><br />
                        <input className={this.state.emailError ? "inputWithError" : "inputWithoutError" } type="email" placeholder="abc@xyz.pl" name="email" value={this.state.email} onChange={e => this.handleChange(e)} /><br />
                        </label>
                        <div className="errors-form not-last contact-form">
                            {this.state.emailError}
                        </div>
                        </div>
                    </div>

                    <div className="col-12">
                    <label><span>Wpisz swoją wiadomość</span><br />
                    <textarea className={this.state.textError ? "inputWithError" : "inputWithoutError" } type="text" placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur" name="text" value={this.state.text} onChange={e => this.handleChange(e)} /><br />
                    </label>
                    <div className="errors-form not-last contact-form">
                        {this.state.textError}
                    </div>
                    </div>

                    <div className="col-12 button">
                    <button className="btn" type="submit">Wyślij</button>
                    </div>
                </div>

            </form>
        );

        const thanks = (<h3 className="text-form">Wiadomość została wysłana!<br />Wkrótce się skontaktujemy.<br /></h3>);

        return (
            <>
                    {this.state.send ? <>{thanks}{form}</>: form}
            </>
        );
    }
}

export default Form;