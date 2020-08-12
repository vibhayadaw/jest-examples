import ask from '../../src/Api';

describe('API Caller', () => {
    it('should call YesNo API', () => {
        const fetchSpy = jest.spyOn(global, 'fetch');

        return ask()
            .then(() => {
                expect(fetchSpy).toHaveBeenCalledWith('https://yesno.wtf/api/');
            });
    });

    it('should call YesNo API mockImplementation success', () => {
        const fetchSpy = jest.spyOn(global, 'fetch')
            .mockImplementation(() => Promise.resolve({
                json: () => {},
            }));
    
        return ask()
            .then(() => {
                expect(fetchSpy).toHaveBeenCalledWith('https://yesno.wtf/api/');
            });
    });
    it('should return YesNo response in JSON format', () => {
        const fetchSpy = jest.spyOn(global, 'fetch')
            .mockImplementation(() => Promise.resolve({
                json: () => ({ foo: 'bar' }),
            }));
    
        console.log(fetchSpy.mock.calls); // <----
    
        return ask()
            .then(response => {
                expect(response).toEqual({ foo: 'bar' });
            });
    });
});