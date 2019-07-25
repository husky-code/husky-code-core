import Reflux from 'reflux';
import { login, register } from '../endpoints';

const Actions = Reflux.createActions({
	login: {children: ['completed', 'failed']},
	register: {children: ['completed']}
});

Actions.login.listen((credentials) => {
	return login(credentials).then(this.completed).catch(this.failed);
});

Actions.register.listen((credentials) => {
	this.progressed();
	return register(credentials).then(this.completed).catch(this.completed);
});

export default Actions;