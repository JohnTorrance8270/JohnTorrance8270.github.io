let myPTag;

function foo()
{
    'use strict';

    myPTag = document.createElement('p');

    myPTag.textContent = "good morning";

    document.getElementById('words').appendChild(myPTag);
}

function updateField()
{
    //gets text box
    let box = document.getElementById("taskTwo");
    //creates new para
    let para = document.createElement('p');
    para.className = "placeHolder";
    para.innerHTML = box.value;
    document.getElementById("name").appendChild(para);
}

function changeText()
{
    let objectToDelete = document.getElementsByClassName("placeHolder");

    let box = document.getElementById("taskTwo");

    for(let x = 0; x < objectToDelete.length; x++)
    {
        objectToDelete[x].innerHTML = box.value;
    }
}

function deleteTag()
{
    let objectToDelete = document.getElementsByClassName("placeHolder");
    let lengthy = objectToDelete.length;
    for(let x = 0; x < lengthy; x++)
    {
        objectToDelete[0].remove();
    }
}