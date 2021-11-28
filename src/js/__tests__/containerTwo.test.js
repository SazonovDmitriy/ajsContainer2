import ErrorRepository from '../containerTwo';

test('test error', () => {
    const err = new ErrorRepository();

    expect(err.translate('400')).toBe('Bad Request');
});

test('test error', () => {
    const err = new ErrorRepository();

    expect(err.translate('404')).toBe('Unknown error');
});