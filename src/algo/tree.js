const tree = {
    value: 1,
    children: [
        {
            value: 2,
            children: [
                {value:3}
            ]
        },
        {
            value: 4,
            children: [
                {value: 5},
                {value: 6}
            ]
        }
    ]
};

function getTreeValues(tree) {
    //todo
}

console.log(getTreeValues(tree)); // [1, 2, 3, 4, 5, 6]