import {useState} from 'react';

const SignupComponent = () => {

    const [values, setValues] = useState({
        name: 'saju',
        email: 'saku@daju.co',
        password: 'pwd',
        error: '',
        loading: false,
        message: '',
        showForm: true
    });

    const {name, email, password, error, loading, message, showForm} = values;
    const handleSubmit = (e) => {
        e.preventDefault();
        console.table({name, email, password, error, loading, message, showForm})
    }

    const handleChange = name => e => {
        setValues({...values, error: false, [name]: e.target.value})
    }

    const signupForm = () => {
        return (
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input value={name}
                           type="text"
                           className="form-control"
                           placeholder="Type your name"
                           onChange={handleChange('name')}/>
                </div>

                <div className="form-group">
                    <input value={email}
                           type="email"
                           className="form-control"
                           placeholder="Type your email"
                           onChange={handleChange('email')}/>
                </div>

                <div className="form-group">
                    <input value={password}
                           type="password"
                           className="form-control"
                           placeholder="Type your password"
                           onChange={handleChange('password')}/>
                </div>
                <div>
                    <button className="btn btn-primary">Sign up</button>
                </div>
            </form>
        )
    }

    return (
        <React.Fragment>
            {signupForm()}
        </React.Fragment>

    )
}

export default SignupComponent;