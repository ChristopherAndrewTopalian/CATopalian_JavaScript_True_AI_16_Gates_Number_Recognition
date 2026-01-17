// comparePatterns.js

function comparePatterns(patternA, patternB)
{
    let matches = 0;

    for (let i = 0; i < patternA.length; i++)
    {
        if (patternA[i] == patternB[i])
        {
            matches++;
        }
    }

    let percent = matches / patternA.length;

    return percent;
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

