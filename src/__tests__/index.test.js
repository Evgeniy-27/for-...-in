
import { obj, orderByProps } from '../index';

test(' function orderByProps', () => {
    const expected = [
        { key: 'name', value: 'мечник' },
        { key: 'level', value: 2 },
        { key: 'attack', value: 80 },
        { key: 'defence', value: 40 },
        { key: 'health', value: 10 }
    ];
    const received = orderByProps(obj, ['name', 'level']);

    expect(received).toEqual(expected);
});