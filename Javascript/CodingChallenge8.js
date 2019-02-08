
(function setupHTML()
{
    let requestURL = 'https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/example.json';
    let request = new XMLHttpRequest();

    request.open('GET', requestURL);

    request.responseType = 'json';

    request.send();

    request.onload = function()
    {
        let supers = request.response;
        let elementList = [];
        let heroList = [];
        let powerList = [];

        for(let element in supers)
        {
            elementList.push(element + " : " + supers[element]);
        }
        for(let hero of supers['members'])
        {
            heroList.push("Name: " + hero.name + ", Age: " + hero.age);
            powerList.push(hero['powers']);
        }

        elementList[5] = "Member List: ";
        heroList[0].powers = "Their Powers List: ";

        createElement('h1', elementList[0], "0", "headers", "name");

        let lastIndex = elementList.length-1;
        createMultiElements('h2', "headers", "name", 1, lastIndex, elementList);
        createElement('h3', elementList[lastIndex], (lastIndex) + "", "headers", "name");   
        create2dElements(heroList, powerList, 'ol', 'li', lastIndex, "powers ", "heros", "powers ");
    }
})();

function create2dElements(listOne, listTwo, tagOne, tagTwo, idOne, idTwo, classNameOne, classNameTwo)
{
        console.log(listOne.length);
       for(let i = 0; i < listOne.length; i++)
        {         
            createElement(tagOne, listOne[i], (i+1) + idOne + "", classNameOne, "" + idOne);
            
            for(let u = 0; u < listTwo[i].length; u++)
            {
                createElement(tagTwo, listTwo[i][u],  + idTwo + i, classNameTwo, "" + ((i+1) + idOne));
            }
        }
}

function createMultiElements(tagElement, cName, parentId, startIndex, endIndex, list)
{
    for(let i = startIndex; i < endIndex; i++)
    {
        createElement(tagElement, list[i], i + "", cName, parentId);
    }
}

function createMultiElementsSimple(tagElement, cName, parentId, list)
{
    for(let i = 0; i < list.length; i++)
    {
        createElement(tagElement, list[i], i + "", cName, parentId);
    }
}

function createElement(tagElement, text, identifer, cName, parentId)
{
    let element = document.createElement(tagElement);
    element.textContent = text;
    element.id = identifer;
    element.className = cName;
    if(tagElement == "li")  element.style = "list-style-type:none";
    document.getElementById(parentId).appendChild(element);
}