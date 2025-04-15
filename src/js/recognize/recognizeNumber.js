// recognizeNumber.js

function recognizeNumber(inputPattern)
{
    let highestScore = -1;
    let recognizedDigit = -1;

    for (let i = 0; i < digitPatterns5x5.length; i++)
    {
        let score = comparePatterns(inputPattern, digitPatterns5x5[i]);

        if (score > highestScore)
        {
            highestScore = score;
            recognizedDigit = i;
        }
    }

    console.log('Best match score:', highestScore);

    return recognizedDigit;
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

