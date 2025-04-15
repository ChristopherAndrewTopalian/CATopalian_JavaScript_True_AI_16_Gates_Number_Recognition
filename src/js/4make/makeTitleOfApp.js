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

