import coursesJson from '../../../data/courses.json';


describe('Numbers test', () => {
    const numItems = coursesJson.length;
    it('Number of items = 12', () => {
        expect(numItems).toBe(12);
    });

    it('Number of items to be greater than or equal to 12', () => {
        expect(numItems).toBeGreaterThanOrEqual(12);
    });
});

describe('String test', () => {
    const dataTest = coursesJson[0].title;

    it('There title contains React', () => {
        expect(dataTest).toContain('React');
    });
    
});

describe('Arrays and Object test', () => {
    // Arrays 
    //use arrayContaining
    const dataArray = ['React Native', 'React'];

    it('The list of courses contains React and React', () => {
        expect(['React Native', 'React', 'MeteorJS']).toEqual(expect.arrayContaining(dataArray));
    });

    //Objects
    it('The first couse to have a property title', () => {
        expect(coursesJson[0]).toHaveProperty('title')
    });

    //toHaveProperty(property, value)
    it('The first couse to have a property title and value of 31,266', () => {
        expect(coursesJson[0]).toHaveProperty('views', '31,266')
    });
});
