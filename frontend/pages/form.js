import axios from 'axios';
import {useState} from 'react'

function Form() {
    const [formStatus, setFormStatus] = useState(false);
    const [query, setQuery] = useState({
        email: "",
        password: "",
    });

    const handleChange = () => (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setQuery((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8080/auth/email", {
                email: query.email,
                password: query.password
            },
            {headers: {'Content-Type': 'application/json;charset=UTF-8'}}
            )
            .then(function (response) {
                setFormStatus(true);
                setQuery({
                    email: "",
                    password: ""
                });
                console.log(response);
                console.log('res')
                console.log(response.data)
                localStorage.setItem("token", response.data)
            })
            .catch(function (error) {
                console.log(error);
                console.log('err')
            });
    };
    return (
        <div>
            <form
                acceptCharset="UTF-8"
                method="POST"
                id="ajaxForm"
                onSubmit={handleSubmit}
            >
                <div>
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input
                        type="email"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                        required
                        name="email"
                        value={query.email}
                        onChange={handleChange()}
                    />
                </div>
                <div>
                    <label htmlFor="exampleInputPass">Password</label>
                    <input
                        type="password"
                        id="exampleInputPass"
                        placeholder="Enter your password"
                        required
                        name="password"
                        value={query.password}
                        onChange={handleChange()}
                    />
                </div>
                {formStatus ? (
                    <div>
                        Your message has been sent.
                    </div>
                ) : (
                    ""
                )}
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Form