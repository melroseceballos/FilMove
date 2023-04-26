import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { signUp, logIn } from "../../../utils/backend"


function AuthFormPage() {
    const { formType } = useParams()
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleInputChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    // Execute auth logic on form submit
async function handleSubmit(event) {
    // prevent the page from refreshing when the form is submitted
    event.preventDefault()
    // check what the URL parameter is to determine what request to make
    if (formType === 'login') {
        const { token } = await logIn(formData)
        localStorage.setItem('userToken', token)
    } else {
        const { token } = await signUp(formData)
        localStorage.setItem('userToken', token)
    }
    // redirect to the home page after signing/logging in
    navigate('/')
}


    let actionText
formType === 'login' ? actionText = 'Log In' : actionText = 'Sign Up'


    return (
        <div>
            <div>
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            placeholder="Email address"
                            value={formData.email}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            minLength="6"
                            required
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                    <button type="submit">{actionText}</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AuthFormPage