import { expect } from 'chai';
import { Cat } from './cat';

describe('the cat module', () => {
	it('should instantiate a cat', () => {
		var cat = new Cat('Bugsy');
		expect(cat.meow()).to.equal('Bugsy: Youx gotta be kidding that I\'ll obey you, right?');
	});
});