import Layout from '../components/Layout';
import Link from 'next/link'
import SignupComponent from '../components/auth/SignupComponent'
const SignUp = () => {

    return <Layout>
        <h2>SignUp page</h2>
        <SignupComponent/>
    </Layout>
}

export default SignUp