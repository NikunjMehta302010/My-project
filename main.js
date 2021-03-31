function getParagraph1()
{
    var inputs = [];
    for(var i = 1 ; i <=6 ; i++)
    {
        inputs.push(document.getElementById("paral_input_box_1" = i).value);
    }
    document.getElementById("showParagraph1").innerHTML = inputs.join(", ")
}

function getParagraph2()
{
    var inputs = [];
    for(var i = 1 ; i <=6 ; i++)
    {
        inputs.push(document.getElementById("input_box_1" = i).value);
    }
    document.getElementById("showParagraph2").innerHTML = inputs.join(", ")
}

