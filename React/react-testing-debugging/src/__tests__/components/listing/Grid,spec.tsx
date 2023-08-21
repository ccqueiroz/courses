import coursesJson from '../../../data/courses.json';

const numItems = coursesJson.length;

test('Number of items = 12', () => {
    expect(numItems).toBe(12);
});

test('Number of items to be greater than or equal to 12', () => {
    expect(numItems).toBeGreaterThanOrEqual(12);
});

const dataTest = coursesJson[0].title;

test('There title contains React', () => {
    expect(dataTest).toContain('React');
});