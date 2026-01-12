// shortcuts.js

function ge(whichId)
{
    let result = document.getElementById(whichId);
    return result;
}

function ce(whichType)
{
    let result = document.createElement(whichType);
    return result;
}

function ba(whichElement)
{
    let result = document.body.append(whichElement);
    return result;
}

function cl(whichMessage)
{
    let result = console.log(whichMessage);
    return result;
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

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

// makeInterface.js

function makeInterface()
{
    let resultDiv = ce('div');
    resultDiv.textContent = 'Result';
    resultDiv.id = 'resultDiv';
    ba(resultDiv);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

// makeNumberChoices.js

function makeNumberChoices()
{
    let whichArray = digitPatterns5x5;

    let numberContainer = ce('div');
    numberContainer.id = 'numberChoices';
    numberContainer.style.display = 'flex';
    numberContainer.style.flexWrap = 'wrap';
    numberContainer.style.gap = '10px';
    numberContainer.style.marginTop = '10px';
    ba(numberContainer);

    for (let i = 0; i < whichArray.length; i++)
    {
        let digitDiv = ce('div');
        digitDiv.className = 'digitChoice';
        digitDiv.style.display = 'grid';
        digitDiv.style.gridTemplateColumns = 'repeat(5, 20px)';
        digitDiv.style.gridTemplateRows = 'repeat(5, 20px)';
        digitDiv.style.gap = '2px';
        digitDiv.style.cursor = 'pointer';
        digitDiv.style.border = '2px solid white';
        digitDiv.style.padding = '5px';

        digitDiv.dataset.index = i;

        for (let j = 0; j < whichArray[i].length; j++)
        {
            let cell = ce('div');
            cell.style.width = '20px';
            cell.style.height = '20px';

            let color;

            if (whichArray[i][j] == 1)
            {
                color = 'white';
            }
            else
            {
                color = 'black';
            }

            cell.style.backgroundColor = color;
            digitDiv.append(cell);
        }

        digitDiv.onclick = function()
        {
            clickSound();

            let selectedPattern = whichArray[parseInt(this.dataset.index)];

            let result = recognizeNumber(selectedPattern);

            ge('resultDiv').textContent = 'This looks like a ' + result;
        };

        numberContainer.append(digitDiv);
    }
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

// makeTitleOfApp.js

function makeTitleOfApp()
{
    let mainDiv = ce('div');
    mainDiv.style.position = 'absolute';
    mainDiv.style.right = 8 + 'px';
    mainDiv.style.top = 4 + 'px';
    ba(mainDiv);

    //-//

    let theTitle = ce('a');
    theTitle.id = 'theTitle';
    theTitle.href = 'https://github.com/ChristopherAndrewTopalian/CATopalian_JavaScript_True_AI_16_Gates_Number_Recognition';
    theTitle.target = '_blank';
    theTitle.textContent = 'CATopalian JavaScript True AI 16 Gates Number Recognition';
    theTitle.style.fontSize = '14px';
    theTitle.style.fontWeight = 'bold';
    theTitle.style.textAlign = 'right';
    theTitle.style.lineHeight = 15 + 'px';
    theTitle.style.textDecoration = 'none';
    mainDiv.append(theTitle);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

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
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

// logicGates.js

// gateAnd.js

function gateAnd(a, b)
{
    if (a == 1 && b == 1)
    {
        return 1;
    }
    else
    {
        return 0;
    }
}

/*
AND
0001
Both True

A  B
0  0  =  0
0  1  =  0
1  0  =  0
1  1  =  1

Opposite: NAND
*/

//----//

// gateNand.js

function gateNand(a, b)
{
    if (a == 0 || b == 0)
    {
        return 1
    }
    else
    {
        return 0;
    }
}

/*
NAND
1110
Both False or A True or B True

A  B
0  0  =  1
0  1  =  1
1  0  =  1
1  1  =  0

Opposite: AND
*/

//----//

// gateOr.js

function gateOr(a, b)
{
    if (a == 1 || b == 1)
    {
        return 1;
    }
    else
    {
        return 0;
    }
}

/*
OR
0111
One or Both True

A B
0  0  =  0
0  1  =  1
1  0  =  1
1  1  =  1

Opposite: NOR
*/

//----//

// gateNor.js

function gateNor(a, b)
{
    if (a == 0 && b == 0)
    {
        return 1;
    }
    else
    {
        return 0;
    }
}

/*
NOR
1000
Both False

A B
0  0  =  1
0  1  =  0
1  0  =  0
1  1  =  0

Opposite: OR
*/

//----//

// gateXor.js

function gateXor(a, b)
{
    if ((a == 1 && b == 0) ||
        (a == 0 && b == 1))
    {
        return 1;
    }
    else
    {
        return 0;
    }
}

/*
XOR
0110
A True or B True

A B
0  0  =  0
0  1  =  1
1  0  =  1
1  1  =  0

Opposite: XNOR
*/

//----//

// gateXnor.js

function gateXnor(a, b)
{
    if ((a == 0 && b == 0) ||
        (a == 1 && b == 1))
    {
        return 1;
    }
    else
    {
        return 0;
    }
}

/*
XNOR
1001
Both False or Both True

A  B
0  0  =  1
0  1  =  0
1  0  =  0
1  1  =  1

Opposite: XOR
*/

//----//

// gateCi.js

function gateCi(a, b)
{
    if (a == 1 || b == 0)
    {
        return 1;
    }
    else
    {
        return 0;
    }
}

/*
CI
1011
Both False or A True or Both True

A B
0  0  =  1
0  1  =  0
1  0  =  1
1  1  =  1

Opposite: CNI
*/

//----//

// gateCni.js

function gateCni(a, b)
{
    if (a == 0 && b == 1)
    {
        return 1;
    }
    else
    {
        return 0;
    }
}

/*
CNI
0100
B True

A B
0  0  =  0
0  1  =  1
1  0  =  0
1  1  =  0

Opposite: CI
*/

//----//

// gateMi.js

function gateMi(a, b)
{
    if (a == 0 || b == 1)
    {
        return 1;
    }
    else
    {
        return 0;
    }
}

/*
MI
1101
Both False or B True or Both True

A  B
0  0  =  1
0  1  =  1
1  0  =  0
1  1  =  1

Opposite: MNI
*/

//----//

// gateMni.js

function gateMni(a, b)
{
    if (a == 1 && b == 0)
    {
        return 1;
    }
    else
    {
        return 0;
    }
}

/*
MNI
0010
A True

A B
0  0  =  0
0  1  =  0
1  0  =  1
1  1  =  0

Opposite: MI
*/

//----//

// gateRp.js

function gateRp(a, b)
{
    if ((a == 0 && b == 1) ||
        (a == 1 && b == 1))
    {
        return 1;
    }
    else
    {
        return 0;
    }
}

/*
RP
0101
B True or Both True

A  B
0  0  =  0
0  1  =  1
1  0  =  0
1  1  =  1

Opposite: RC
*/

//----//

// gateRc.js

function gateRc(a, b)
{
    if ((a == 0 && b == 0) ||
        (a == 1 && b == 0))
    {
        return 1;
    }
    else
    {
        return 0;
    }
}

/*
RC
1010
Both False or A True

A B
0  0  =  1
0  1  =  0
1  0  =  1
1  1  =  0

Opposite: RP
*/

//----//

// gateLp.js

function gateLp(a, b)
{
    if (a == 1)
    {
        return 1;
    }
    else
    {
        return 0;
    }
}

/*
LP
0011
A True or Both True

A  B
0  0  =  0
0  1  =  0
1  0  =  1
1  1  =  1

Opposite: LC
*/

//----//

// gateLc.js

function gateLc(a, b)
{
    if (a == 0)
    {
        return 1;
    }
    else
    {
        return 0;
    }
}

/*
LC
1100
Both False or B True

A B
0  0  =  1
0  1  =  1
1  0  =  0
1  1  =  0

Opposite: LP
*/

//----//

// gateTautology.js

function gateTautology(a, b)
{
    if ((a == 0 && b == 0) ||
        (a == 0 && b == 1) ||
        (a == 1 && b == 0) ||
        (a == 1 && b == 1))
    {
        return 1;
    }
    else
    {
        return 0;
    }
}

/*
TAUTOLOGY
1111
One or Both False or True

A  B
0  0  =  1
0  1  =  1
1  0  =  1
1  1  =  1

Opposite: CONTRADICTION
*/

//----//

// gateContradiction.js

function gateContradiction(a, b)
{
    if ((a == 0 && b == 0) ||
        (a == 0 && b == 1) ||
        (a == 1 && b == 0) ||
        (a == 1 && b == 1))
    {
        return 1;
    }
    else
    {
        return 0;
    }
}

/*
CONTRADICTION
0000
One or Both False or True.

A B
0  0  =  0
0  1  =  0
1  0  =  0
1  1  =  0

Opposite: TAUTOLOGY
*/

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

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

// sound.js

let audioCtx = new (window.AudioContext || window.webkitAudioContext)();

function playTone(frequency, duration, waveType, volume, detune, attackTime, releaseTime, panValue)
{
    let oscillator = audioCtx.createOscillator();
    // 'sine', 'square', 'sawtooth', 'triangle'
    oscillator.type = waveType;
    oscillator.frequency.setValueAtTime(frequency, audioCtx.currentTime);
    oscillator.detune.setValueAtTime(detune, audioCtx.currentTime);

    let gainNode = audioCtx.createGain();
    let pannerNode = audioCtx.createStereoPanner();
    
    oscillator.connect(gainNode);
    gainNode.connect(pannerNode);
    pannerNode.connect(audioCtx.destination);

    gainNode.gain.setValueAtTime(0, audioCtx.currentTime);

    // attack
    gainNode.gain.linearRampToValueAtTime(volume, audioCtx.currentTime + attackTime);
    gainNode.gain.linearRampToValueAtTime(0, 

    // release
    audioCtx.currentTime + duration / 1000 - releaseTime);

    pannerNode.pan.setValueAtTime(panValue, audioCtx.currentTime);

    oscillator.start();
    oscillator.stop(audioCtx.currentTime + duration / 1000);
}

function hoverSound()
{
    playTone(
        300,     // frequency
        100,     // duration
        'triangle',  // waveType
        0.05,    // volume
        0,         // detune
        0.05,    // attackTime
        0.05,    // releaseTime
        0.0      // panValue -0.5 is left
    );
}

function hoverSound2()
{
    playTone(
        300,     // frequency
        500,     // duration
        'sine',  // waveType
        0.05,      // volume
        50,       // detune
        0.2,      // attackTime
        0.2,      // releaseTime
        -0.5      // panValue -0.5 is left
    );
}

function hoverSound2()
{
    playTone(
        300,     // frequency
        300,     // duration
        'triangle',  // waveType
        0.08,    // volume
        -200,    // detune
        0.1,      // attackTime
        0.1,      // releaseTime
        0.0       // panValue -0.5 is left
    );
}

function clickSound()
{
    playTone(
        400,     // frequency
        500,     // duration
        'sine',  // waveType
        0.04,      // volume
        0,       // detune
        0.1,      // attackTime
        0.1,      // releaseTime
        0.0      // panValue -0.5 is left
    );
}

//--//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

// whenLoaded.js

function whenLoaded()
{
    makeInterface();

    makeNumberChoices();

    makeTitleOfApp();

    ge('resultDiv').textContent = 'This looks like a ' + recognizeNumber(inputPattern);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

