import Amplify, { Auth } from 'aws-amplify';
import awsconfig from '../../src/aws-exports';
Amplify.configure(awsconfig);

async function signUp(username, password, email) {
  try {
    const user = await Auth.signUp({
      username,
      password,
      attributes: {
        email,
      },
    });
    console.log(user);
  } catch (error) {
    console.log('error signing up:', error);
  }
}

export default (req, res) => {
  signUp(req.body.username, req.body.password, req.body.email);
  res.statusCode = 302;
  res.setHeader('Location', `${process.env.host}/auth/auth_result?user_name=${req.body.username}`);
  res.end();
};
