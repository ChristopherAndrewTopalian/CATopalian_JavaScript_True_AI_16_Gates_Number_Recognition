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
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

