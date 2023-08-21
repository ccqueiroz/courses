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

// Arrays 
//use arrayContaining
const dataArray = ['React Native', 'React'];

test('The list of courses contains React and React', () => {
    expect(['React Native', 'React', 'MeteorJS']).toEqual(expect.arrayContaining(dataArray));
});

//Objects
test('The first couse to have a property title', () => {
    expect(coursesJson[0]).toHaveProperty('title')
});

//toHaveProperty(property, value)
test('The first couse to have a property title and value of 31,266', () => {
    expect(coursesJson[0]).toHaveProperty('views', '31,266')
});