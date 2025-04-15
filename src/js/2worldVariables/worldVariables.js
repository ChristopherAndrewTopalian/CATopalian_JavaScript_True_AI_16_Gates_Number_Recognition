// worldVariables.js

let gridSize = 5;

let digitCellCount = gridSize * gridSize;

/* defines a list of how each digit, 0-9 appears on a 5x5 pixel grid, using only binary values:
    1 means pixel is on, black filled
    0 means pixel is off , white empty
*/

let digitPatterns5x5 =
[
    // 0
    [
        0, 1, 1, 1, 0,
        1, 0, 0, 0, 1,
        1, 0, 0, 0, 1,
        1, 0, 0, 0, 1,
        0, 1, 1, 1, 0
    ],
    // 1
    [
        0, 0, 1, 0, 0,
        0, 1, 1, 0, 0,
        1, 0, 1, 0, 0,
        0, 0, 1, 0, 0,
        1, 1, 1, 1, 1
    ],
    // 2
    [
        0, 1, 1, 1, 0,
        1, 0, 0, 0, 1,
        0, 0, 0, 1, 0,
        0, 0, 1, 0, 0,
        1, 1, 1, 1, 1
    ],
    // 3
    [
        1, 1, 1, 1, 0,
        0, 0, 0, 0, 1,
        0, 0, 1, 1, 0,
        0, 0, 0, 0, 1,
        1, 1, 1, 1, 0
    ],
    // 4
    [
        0, 0, 0, 1, 0,
        0, 0, 1, 1, 0,
        0, 1, 0, 1, 0,
        1, 1, 1, 1, 1,
        0, 0, 0, 1, 0
    ],
    // 5
    [
        1, 1, 1, 1, 1,
        1, 0, 0, 0, 0,
        1, 1, 1, 1, 0,
        0, 0, 0, 0, 1,
        1, 1, 1, 1, 0
    ],
    // 6
    [
        0, 1, 1, 1, 0,
        1, 0, 0, 0, 0,
        1, 1, 1, 1, 0,
        1, 0, 0, 0, 1,
        0, 1, 1, 1, 0
    ],
    // 7
    [
        1, 1, 1, 1, 1,
        0, 0, 0, 1, 0,
        0, 0, 1, 0, 0,
        0, 1, 0, 0, 0,
        1, 0, 0, 0, 0
    ],
    // 8
    [
        0, 1, 1, 1, 0,
        1, 0, 0, 0, 1,
        0, 1, 1, 1, 0,
        1, 0, 0, 0, 1,
        0, 1, 1, 1, 0
    ],
    // 9
    [
        0, 1, 1, 1, 0,
        1, 0, 0, 0, 1,
        0, 1, 1, 1, 1,
        0, 0, 0, 0, 1,
        0, 1, 1, 1, 0
    ]
];

// define 3x3 binary patterns for digits 0-9
/* defines a list of how each digit, 0-9 appears on a 3x3 pixel grid, using only binary values:
    1 means pixel is on, black filled
    0 means pixel is off , white empty
*/

let digitPatterns3x3 =
[
    // 0
    [
        1, 1, 1,
        1, 0, 1,
        1, 1, 1
    ],
    // 1
    [
        0, 1, 0,
        0, 1, 0,
        0, 1, 0
    ],
    // 2
    [
        1, 1, 1,
        0, 1, 1,
        1, 1, 0
    ],
    // 3
    [
        1, 1, 1,
        0, 1, 1,
        1, 1, 1
    ],
    // 4
    [
        1, 0, 1,
        1, 1, 1,
        0, 0, 1
    ],
    // 5
    [
        1, 1, 1,
        1, 1, 0,
        0, 1, 1
    ],
    // 6
    [
        1, 1, 1,
        1, 1, 0,
        1, 1, 1
    ],
    // 7
    [
        1, 1, 0,
        0, 1, 0,
        0, 1, 0
    ],
    // 8
    [
        1, 1, 1,
        1, 1, 1,
        1, 1, 1
    ],
    // 9
    [
        1, 1, 1,
        1, 1, 1,
        0, 1, 1
    ]
];

//----//

// sample input pattern to test
// number 7
let inputPattern =
// 7
[
    1, 1, 1, 1, 1,
    0, 0, 0, 1, 0,
    0, 0, 1, 0, 0,
    0, 1, 0, 0, 0,
    1, 0, 0, 0, 0
];

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

