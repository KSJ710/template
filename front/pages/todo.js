import Amplify, { Auth, graphqlOperation } from 'aws-amplify';
import awsconfig from '../public/aws-exports';
import { createTodo, updateTodo, deleteTodo } from './graphql/mutations';

Amplify.configure(awsconfig);

const todo = { name: "My first todo", description: "Hello world!" };

/* create a todo */
await API.graphql(graphqlOperation(createTodo, { input: todo }));

/* update a todo */
await API.graphql(graphqlOperation(updateTodo, { input: { id: todoId, name: "Updated todo info" } }));

/* delete a todo */
await API.graphql(graphqlOperation(deleteTodo, { input: { id: todoId } }));