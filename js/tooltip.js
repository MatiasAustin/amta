
const toolTip = document.querySelector('div.tooltip');

const booth1 = document.querySelector('div#booth1 a');

booth1.addEventListener('mouseenter', show);

function show() {
    
    toolTip.style.display = "none";

    const getStyle = toolTip.style;

    console.log(getStyle);
}

booth1.addEventListener('mouseleave', show);

function show() {
    
    toolTip.style.display = "none";

    const getStyle = toolTip.style;

    console.log(getStyle);
}




var urlPath =  '/engagements/{{campaign->id}}/get-campaigns-report-chart-data'; 
        var request = $.ajax( {
            method = 'POST',
            url = urlPath,
            data = reference = campaign->score, 
            dataType = "json",
            } 
        );