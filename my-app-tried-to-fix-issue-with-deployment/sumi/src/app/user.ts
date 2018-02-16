import { Profile } from './profile';

export class User {
	id: number;
	username: string;
	password: string;
	first_name: string;
	last_name: string;
	email: string;
	profile: Profile[];
}
