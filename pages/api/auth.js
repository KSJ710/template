import Amplify, { Auth } from 'aws-amplify';
import awsconfig from '../../../src/aws-exports';
Amplify.configure(awsconfig);

async function signUp(username, password, email) {
  try {
    const user = await Auth.signUp({
      username,
      password,
      attributes: {
        email
      }
    })
    console.log({ user });
  } catch (error) {
    console.log('error signing up:', error);
  }
}

export default (req, res) => {
  signUp(req.body.username, req.body.password, req.body.email)

  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify({ name: req.body.username }))
}