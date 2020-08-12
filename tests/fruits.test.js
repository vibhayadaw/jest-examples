import fruit from '../src/fruits';

describe('the fruit function', () => {

    it('default action positive scenario', () => {
        const defaultresponse = fruit();
        expect(defaultresponse).toBe('I like to eat apple');
    });
    it('default action negative scenario', () => {
        const defaultresponse = fruit();
        expect(defaultresponse).not.toBe('I like to eat banana');
    });
    it('pass on parameter action negative scenario', () => {
        const defaultresponse = fruit('grapes');
        expect(defaultresponse).toBe('I like to eat grapes');
    });
});