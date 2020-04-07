var initialState = [
    {
        id: 1,
        name: 'iphone6',
        price: 534500,
        status: true
    },
    {
        id: 2,
        name: 'iphosdfsdne6',
        price: 5454300,
        status: true
    },
    {
        id: 3,
        name: 'iphonefdsdf6',
        price: 534500,
        status: true
    }
];
const products = (state = initialState, action) => {
    switch(action.type) {
        default: return [...state];
    }
}

export default products;