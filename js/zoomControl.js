// zoom control button

const zoomStyleZoomOut = document.querySelector("div#zoom-control .zoomOut");
zoomStyleZoomOut.addEventListener("mouseover", getValueZoomStyle);

const zoomStyleZoomIn = document.querySelector("div#zoom-control .zoomIn");
zoomStyleZoomIn.addEventListener("mouseover", getValueZoomStyle);

const zoomStyleCss = document.querySelector("div#maps-image #frame-dragable-image-fairhall #dragable-image img");
zoomStyleCss.addEventListener("transitionrun", getValueZoomStyle);



function getValueZoomStyle () {
    
    //object zoom
    const getFrom = document.querySelector("div#maps-image #frame-dragable-image-fairhall #dragable-image img");
    const zoomStyleWidth = getFrom.style.width;
    const zoomStyleHeight = getFrom.style.height;

    //convert value to number
    const convertwidth = parseFloat(zoomStyleWidth);
    const convertheight = parseFloat(zoomStyleHeight);
    // console.log(convertwidth);
    // console.log(convertheight);
    // zoomStyleCss.addEventListener("click", clearValue)

    // function clearValue () {
    //     
    //     // delete convertheight;
    //     // delete convertwidth;
    // }

    // console.log(convertwidth);
    // console.log(convertheight);

    //ALT Var Func (ERROR CODE *GET VALUE OF LAST USE SCRIPT FILE)
    //get attribute href & script
    // const lastZoom = document.getElementById("button-maps");
    // lastZoom.addEventListener("mouseover", getlastZoom);


    // function getlastZoom () {
    // const lastHrefValue = document.getElementById("zoom-style");
    // const lastScriptValue = document.querySelector("script#nav-arrow");
    
    // const resultHrefValue = lastHrefValue.getAttribute("href");
    // const resultScriptValue = lastScriptValue.getAttribute("src");

   

    // const styleCollection = (["style/partner-booth-layout-zoom0.css"], ["style/partner-booth-layout-zoom1.css"], ["style/partner-booth-layout-zoom2.css"]);

    // // preview lastZoom value
    // console.log(resultHrefValue);
    // console.log(resultScriptValue);
    // }

    //swap href value function
    // function swapStyleSheet(sheet) {
    //     document.getElementById("zoom-style").setAttribute("href", sheet);  
    // }

    
    //reload script (ERROR CODE)
    // function reloadScript() {
     
    // $( "script#nav-arrow" ).load(location.href + "script#nav-arrow" );
    // }

    //swap script value function (ERROR CODE = BECOUSE NEED TO RELOAD PAGE TO WORKIN ON THE NEW SCRIPT)
    // function swapScript(script) {
    //     document.querySelector("script#nav-arrow").setAttribute("src", script)
    // }
    
    

    //zoom object
    const zoomObject = document.querySelector("div#maps-image #frame-dragable-image-fairhall #dragable-image img");

    //zoom object 2
    const zoomObject2 = document.getElementById("dragable-image");

    //reposition partner booth (parent DIV)
    const parentBooth = document.getElementById("partner-booth");
    
    //reposition column (child DIV)
    const column1 = document.getElementById("column1");
    const column2 = document.getElementById("column2");
    const column3 = document.getElementById("column3");
    const column4 = document.getElementById("column4");


    /////////////////////////////

    //reposition booth

    //reposition booth C1
    const r1b1 = document.getElementById("booth1");
    const r1b2 = document.getElementById("booth2");
    const r1b3 = document.getElementById("booth3");
    const r1b4 = document.getElementById("booth4");
    const r1b5 = document.getElementById("booth5");
    const r1b6 = document.getElementById("booth6");
    const r1b7 = document.getElementById("booth7");
    const r1b8 = document.getElementById("booth8");

    //reposition booth C2
    const r2b9 = document.getElementById("booth9");
    const r2b10 = document.getElementById("booth10");
    const r2b11 = document.getElementById("booth11");
    const r2b12 = document.getElementById("booth12");
    const r2b13 = document.getElementById("booth13");
    const r2b14 = document.getElementById("booth14");
    const r2b15 = document.getElementById("booth15");
    const r2b16 = document.getElementById("booth16");

    //reposition booth C3
    const r3b17 = document.getElementById("booth17");
    const r3b18 = document.getElementById("booth18");
    const r3b19 = document.getElementById("booth19");
    const r3b20 = document.getElementById("booth20");
    const r3b21 = document.getElementById("booth21");
    const r3b22 = document.getElementById("booth22");
    const r3b23 = document.getElementById("booth23");
    

    //reposition booth C4
    const r4b24 = document.getElementById("booth24");
    const r4b25 = document.getElementById("booth25");
    const r4b26 = document.getElementById("booth26");
    const r4b27 = document.getElementById("booth27");
    const r4b28 = document.getElementById("booth28");
    const r4b29 = document.getElementById("booth29");
    const r4b30 = document.getElementById("booth30");
    const r4b31 = document.getElementById("booth31");
    const r4b32 = document.getElementById("booth32");

    ////////////////////////

    //img resize object C1
    const C1b1 = document.querySelector("div#partner-booth #column1 #booth1 img");
    const C1b2 = document.querySelector("div#partner-booth #column1 #booth2 img");
    const C1b3 = document.querySelector("div#partner-booth #column1 #booth3 img");
    const C1b4 = document.querySelector("div#partner-booth #column1 #booth4 img");
    const C1b5 = document.querySelector("div#partner-booth #column1 #booth5 img");
    const C1b6 = document.querySelector("div#partner-booth #column1 #booth6 img");
    const C1b7 = document.querySelector("div#partner-booth #column1 #booth7 img");
    const C1b8 = document.querySelector("div#partner-booth #column1 #booth8 img");

    //img resize object C2
    const C2b9 = document.querySelector("div#partner-booth #column2 #booth9 img");
    const C2b10 = document.querySelector("div#partner-booth #column2 #booth10 img");
    const C2b11 = document.querySelector("div#partner-booth #column2 #booth11 img");
    const C2b12 = document.querySelector("div#partner-booth #column2 #booth12 img");
    const C2b13 = document.querySelector("div#partner-booth #column2 #booth13 img");
    const C2b14 = document.querySelector("div#partner-booth #column2 #booth14 img");
    const C2b15 = document.querySelector("div#partner-booth #column2 #booth15 img");
    const C2b16 = document.querySelector("div#partner-booth #column2 #booth16 img");

    //img resize object C3
    const C3b17 = document.querySelector("div#partner-booth #column3 #booth17 img");
    const C3b18 = document.querySelector("div#partner-booth #column3 #booth18 img");
    const C3b19 = document.querySelector("div#partner-booth #column3 #booth19 img");
    const C3b20 = document.querySelector("div#partner-booth #column3 #booth20 img");
    const C3b21 = document.querySelector("div#partner-booth #column3 #booth21 img");
    const C3b22 = document.querySelector("div#partner-booth #column3 #booth22 img");
    const C3b23 = document.querySelector("div#partner-booth #column3 #booth23 img");
    

    //img resize object C4
    const C4b24 = document.querySelector("div#partner-booth #column4 #booth24 img");
    const C4b25 = document.querySelector("div#partner-booth #column4 #booth25 img");
    const C4b26 = document.querySelector("div#partner-booth #column4 #booth26 img");
    const C4b27 = document.querySelector("div#partner-booth #column4 #booth27 img");
    const C4b28 = document.querySelector("div#partner-booth #column4 #booth28 img");
    const C4b29 = document.querySelector("div#partner-booth #column4 #booth29 img");
    const C4b30 = document.querySelector("div#partner-booth #column4 #booth30 img");
    const C4b31 = document.querySelector("div#partner-booth #column4 #booth31 img");
    const C4b32 = document.querySelector("div#partner-booth #column4 #booth32 img");


     //stylesheet var
    //  const zoom0 = "style/partner-booth-layout-zoom0.css";
    //  const zoom1 = "style/partner-booth-layout-zoom1.css";
    //  const zoom2 = "style/partner-booth-layout-zoom2.css";  

    //  //script var
    //  const nav0 = "eventNavArrow-zoom0.js";
    //  const nav1 = "eventNavArrow-zoom1.js";
    //  const nav2 = "eventNavArrow-zoom2.js";

     //last value result
     let lastWidthValue = convertwidth;
     let lastHeightValue = convertheight;
    //  let lastColumn1W = resultColumn1W;
    //  let lastColumn1H = resultColumn1H;

    //zoom out button
    const zoomOutButton = document.querySelector("div#button-maps #zoom-control .zoomOut");
    zoomOutButton.addEventListener("click", zoomOut);

        function zoomOut () {
        //zoom out 1
        ///////////////////////////////////
        if ( lastWidthValue == 3500 && lastHeightValue == 1763.21 ) {
            // swapStyleSheet(zoom1);
            //reposition partner booth
            parentBooth.style.top = 105 + "px";
            parentBooth.style.left = 940 + "px";
            parentBooth.style.transition = "1s";

            //reposition column booth
            //column1
            column1.style.gap = 0 + "px";
            column1.style.marginTop = 0 + "px";
            column1.style.marginLeft = 0 + "px";
            column1.style.transition = "1s";
            //column2
            column2.style.gap = 5 + "px";
            column2.style.marginTop = -80 + "px";
            column2.style.marginLeft = -180 + "px";
            column2.style.transition = "1s";
            //column3
            column3.style.gap = 20 + "px";
            column3.style.marginTop = -60 + "px";
            column3.style.marginLeft = -370 + "px";
            //column4
            column4.style.gap = 20 + "px";
            column4.style.marginTop = -75 + "px";
            column4.style.marginLeft = -610 + "px";
            column2.style.transition = "1s";

            //////////////////////////////////////
            //reposition booth

            //reposition booth C1
            r1b1.style.marginTop = 0 + "px";
            r1b1.style.marginLeft = 0 + "px";
            r1b1.style.transition = "1";
            r1b1.style.width = 88 + "px";
            r1b1.style.height = 49 + "px";
            r1b2.style.marginTop = 20 + "px";
            r1b2.style.marginLeft = 0 + "px";
            r1b2.style.transition = "1s";
            r1b2.style.width = 88 + "px";
            r1b2.style.height = 49 + "px";
            r1b3.style.marginTop = 45 + "px";
            r1b3.style.marginLeft = 0 + "px";
            r1b3.style.transition = "1s";
            r1b3.style.width = 88 + "px";
            r1b3.style.height = 49 + "px";
            r1b4.style.marginTop = 75 + "px";
            r1b4.style.marginLeft = 0 + "px";
            r1b4.style.transition = "1s";
            r1b4.style.width = 88 + "px";
            r1b4.style.height = 49 + "px";
            r1b5.style.marginTop = 170 + "px";
            r1b5.style.marginLeft = -50 + "px";
            r1b5.style.transition = "1s";
            r1b5.style.width = 88 + "px";
            r1b5.style.height = 49 + "px";
            r1b6.style.marginTop = 110 + "px";
            r1b6.style.marginLeft = 0 + "px";
            r1b6.style.transition = "1s";
            r1b6.style.width = 88 + "px";
            r1b6.style.height = 49 + "px";
            r1b7.style.marginTop = 135 + "px";
            r1b7.style.marginLeft = 0 + "px";
            r1b7.style.transition = "1s";
            r1b7.style.width = 88 + "px";
            r1b7.style.height = 49 + "px";
            r1b8.style.marginTop = 160 + "px";
            r1b8.style.marginLeft = 0 + "px";
            r1b8.style.transition = "1s";
            r1b8.style.width = 88 + "px";
            r1b8.style.height = 49 + "px";

            //reposition booth C2
            r2b9.style.marginTop = 0 + "px";
            r2b9.style.marginLeft = 0 + "px";
            r2b9.style.transition = "1s";
            r2b9.style.width = 88 + "px";
            r2b9.style.height = 49 + "px";
            r2b10.style.marginTop = 20 + "px";
            r2b10.style.marginLeft = 0 + "px";
            r2b10.style.transition = "1s";
            r2b10.style.width = 88 + "px";
            r2b10.style.height = 49 + "px";
            r2b11.style.marginTop = 50 + "px";
            r2b11.style.marginLeft = -20 + "px";
            r2b11.style.transition = "1s";
            r2b11.style.width = 88 + "px";
            r2b11.style.height = 49 + "px";
            r2b12.style.marginTop = 75 + "px";
            r2b12.style.marginLeft = -20 + "px";
            r2b12.style.transition = "1s";
            r2b12.style.width = 88 + "px";
            r2b12.style.height = 49 + "px";
            r2b13.style.marginTop = 100 + "px";
            r2b13.style.marginLeft = -20 + "px";
            r2b13.style.transition = "1s";
            r2b13.style.width = 88 + "px";
            r2b13.style.height = 49 + "px";
            r2b14.style.marginTop = 125 + "px";
            r2b14.style.marginLeft = -10 + "px";
            r2b14.style.transition = "1s";
            r2b14.style.width = 88 + "px";
            r2b14.style.height = 49 + "px";
            r2b15.style.marginTop = 150 + "px";
            r2b15.style.marginLeft = -10 + "px";
            r2b15.style.transition = "1s";
            r2b15.style.width = 88 + "px";
            r2b15.style.height = 49 + "px";
            r2b16.style.marginTop = 185 + "px";
            r2b16.style.marginLeft = 10 + "px";
            r2b16.style.transition = "1s";
            r2b16.style.width = 88 + "px";
            r2b16.style.height = 49 + "px";

            //reposition booth C3
            r3b17.style.marginTop = 0 + "px";
            r3b17.style.marginLeft = 0 + "px";
            r3b17.style.transition = "1s";
            r3b17.style.width = 88 + "px";
            r3b17.style.height = 49 + "px";
            r3b18.style.marginTop = 35 + "px";
            r3b18.style.marginLeft = -0 + "px";
            r3b18.style.transition = "1s";
            r3b18.style.width = 88 + "px";
            r3b18.style.height = 49 + "px";
            r3b19.style.marginTop = 70 + "px";
            r3b19.style.marginLeft = -15 + "px";
            r3b19.style.transition = "1s";
            r3b19.style.width = 88 + "px";
            r3b19.style.height = 49 + "px";
            r3b20.style.marginTop = 110 + "px";
            r3b20.style.marginLeft = -10 + "px";
            r3b20.style.transition = "1s";
            r3b20.style.width = 88 + "px";
            r3b20.style.height = 49 + "px";
            r3b21.style.marginTop = 150 + "px";
            r3b21.style.marginLeft = 0 + "px";
            r3b21.style.transition = "1s";
            r3b21.style.width = 88 + "px";
            r3b21.style.height = 49 + "px";
            r3b22.style.marginTop = 195 + "px";
            r3b22.style.marginLeft = 10 + "px";
            r3b22.style.transition = "1s";
            r3b22.style.width = 88 + "px";
            r3b22.style.height = 49 + "px";
            r3b23.style.marginTop = 240 + "px";
            r3b23.style.marginLeft = 0 + "px";
            r3b23.style.transition = "1s";
            r3b23.style.width = 88 + "px";
            r3b23.style.height = 49 + "px";

            //reposition booth C4
            r4b24.style.marginTop = 0 + "px";
            r4b24.style.marginLeft = 0 + "px";
            r4b24.style.transition = "1s";
            r4b24.style.width = 88 + "px";
            r4b24.style.height = 49 + "px";
            r4b25.style.marginTop = 45 + "px";
            r4b25.style.marginLeft = -10 + "px";
            r4b25.style.transition = "1s";
            r4b25.style.width = 88 + "px";
            r4b25.style.height = 49 + "px";
            r4b26.style.marginTop = 80 + "px";
            r4b26.style.marginLeft = -20 + "px";
            r4b26.style.transition = "1s";
            r4b26.style.width = 88 + "px";
            r4b26.style.height = 49 + "px";
            r4b27.style.marginTop = 210 + "px";
            r4b27.style.marginLeft = -60 + "px";
            r4b27.style.transition = "1s";
            r4b27.style.width = 88 + "px";
            r4b27.style.height = 49 + "px";
            r4b28.style.marginTop = 155 + "px";
            r4b28.style.marginLeft = 10 + "px";
            r4b28.style.transition = "1s";
            r4b28.style.width = 88 + "px";
            r4b28.style.height = 49 + "px";
            r4b29.style.marginTop = 210 + "px";
            r4b29.style.marginLeft = 0 + "px";
            r4b29.style.transition = "1s";
            r4b29.style.width = 88 + "px";
            r4b29.style.height = 49 + "px";
            r4b30.style.marginTop = 255 + "px";
            r4b30.style.marginLeft = 0 + "px";
            r4b30.style.transition = "1s";
            r4b30.style.width = 88 + "px";
            r4b30.style.height = 49 + "px";
            r4b31.style.marginTop = 300 + "px";
            r4b31.style.marginLeft = 0 + "px";
            r4b31.style.transition = "1s";
            r4b31.style.width = 88 + "px";
            r4b31.style.height = 49 + "px";
            r4b32.style.marginTop = 350 + "px";
            r4b32.style.marginLeft = 20 + "px";
            r4b32.style.transition = "1s";
            r4b32.style.width = 88 + "px";
            r4b32.style.height = 49 + "px";

            /////////////////////////////////
            //swapC1
            C1b1.style.width = 88 + "px";
            C1b1.style.height = 49 + "px";
            C1b1.style.transition = "1s";
            C1b2.style.width = 88 + "px";
            C1b2.style.height = 49 + "px";
            C1b2.style.transition = "1s";
            C1b3.style.width = 88 + "px";
            C1b3.style.height = 49 + "px";
            C1b3.style.transition = "1s";
            C1b4.style.width = 88 + "px";
            C1b4.style.height = 49 + "px";
            C1b4.style.transition = "1s";
            C1b5.style.width = 88 + "px";
            C1b5.style.height = 49 + "px";
            C1b5.style.transition = "1s";
            C1b6.style.width = 88 + "px";
            C1b6.style.height = 49 + "px";
            C1b6.style.transition = "1s";
            C1b7.style.width = 88 + "px";
            C1b7.style.height = 49 + "px";
            C1b7.style.transition = "1s";
            C1b8.style.width = 88 + "px";
            C1b8.style.height = 49 + "px";
            C1b8.style.transition = "1s";
            
            //swapC2
            C2b9.style.width = 88 + "px";
            C2b9.style.height = 49 + "px";
            C2b9.style.transition = "1s";
            C2b10.style.width = 88 + "px";
            C2b10.style.height = 49 + "px";
            C2b10.style.transition = "1s";
            C2b11.style.width = 88 + "px";
            C2b11.style.height = 49 + "px";
            C2b11.style.transition = "1s";
            C2b12.style.width = 88 + "px";
            C2b12.style.height = 49 + "px";
            C2b12.style.transition = "1s";
            C2b13.style.width = 88 + "px";
            C2b13.style.height = 49 + "px";
            C2b13.style.transition = "1s";
            C2b14.style.width = 88 + "px";
            C2b14.style.height = 49 + "px";
            C2b14.style.transition = "1s";
            C2b15.style.width = 88 + "px";
            C2b15.style.height = 49 + "px";
            C2b15.style.transition = "1s";
            C2b16.style.width = 88 + "px";
            C2b16.style.height = 49 + "px";
            C2b16.style.transition = "1s";

            //swapC3
            C3b17.style.width = 88 + "px";
            C3b17.style.height = 49 + "px";
            C3b17.style.transition = "1s";
            C3b18.style.width = 88 + "px";
            C3b18.style.height = 49 + "px";
            C3b18.style.transition = "1s";
            C3b19.style.width = 88 + "px";
            C3b19.style.height = 49 + "px";
            C3b19.style.transition = "1s";
            C3b20.style.width = 88 + "px";
            C3b20.style.height = 49 + "px";
            C3b20.style.transition = "1s";
            C3b21.style.width = 88 + "px";
            C3b21.style.height = 49 + "px";
            C3b21.style.transition = "1s";
            C3b22.style.width = 88 + "px";
            C3b22.style.height = 49 + "px";
            C3b22.style.transition = "1s";
            C3b23.style.width = 88 + "px";
            C3b23.style.height = 49 + "px";
            C3b23.style.transition = "1s";

            //swapC4
            C4b24.style.width = 88 + "px";
            C4b24.style.height = 49 + "px";
            C4b24.style.transition = "1s";
            C4b25.style.width = 88 + "px";
            C4b25.style.height = 49 + "px";
            C4b25.style.transition = "1s";
            C4b26.style.width = 88 + "px";
            C4b26.style.height = 49 + "px";
            C4b26.style.transition = "1s";
            C4b27.style.width = 88 + "px";
            C4b27.style.height = 49 + "px";
            C4b27.style.transition = "1s";
            C4b28.style.width = 88 + "px";
            C4b28.style.height = 49 + "px";
            C4b28.style.transition = "1s";
            C4b29.style.width = 88 + "px";
            C4b29.style.height = 49 + "px";
            C4b29.style.transition = "1s";
            C4b30.style.width = 88 + "px";
            C4b30.style.height = 49 + "px";
            C4b30.style.transition = "1s";
            C4b31.style.width = 88 + "px";
            C4b31.style.height = 49 + "px";
            C4b31.style.transition = "1s";
            C4b32.style.width = 88 + "px";
            C4b32.style.height = 49 + "px";
            C4b32.style.transition = "1s";

            // swapScript(nav1);
            zoomObject.style.transition = "1s" ;
            zoomObject.style.width = 2500 + "px";
            zoomObject.style.height = 1259.66 + "px";
            zoomObject2.style.transition = "1s";
            zoomObject2.style.left = -500 + "px";
            zoomObject2.style.top = -100 + "px";
            }

        //zoom out 2
        ///////////////////////////////////
        else if ( lastWidthValue == 2500 && lastHeightValue == 1259.66) {
            // swapStyleSheet(zoom0);
            //reposition partner booth
            parentBooth.style.top = 55 + "px";
            parentBooth.style.left = 560 + "px";
            parentBooth.style.transition = "1s";
            
            //reposition column booth
            //column1
            column1.style.gap = 0 + "px";
            column1.style.marginTop = 0 + "px";
            column1.style.marginLeft = 0 + "px";
            column1.style.transition = "1s";
            //column2
            column2.style.gap = 5 + "px";
            column2.style.marginTop = -70 + "px";
            column2.style.marginLeft = -110 + "px";
            column2.style.transition = "1s";
            //column3
            column3.style.gap = 0 + "px";
            column3.style.marginTop = -45 + "px";
            column3.style.marginLeft = -225 + "px";
            column3.style.transition = "1s";
            //column4
            column4.style.gap = 0 + "px";
            column4.style.marginTop = -58 + "px";
            column4.style.marginLeft = -375 + "px";
            column4.style.transition = "1s";

            //////////////////////////////////////
            //reposition booth

            //reposition booth C1
            r1b1.style.marginTop = 0 + "px";
            r1b1.style.marginLeft = 0 + "px";
            r1b1.style.transition = "1s";
            r1b1.style.width = 68 + "px";
            r1b1.style.height = 39 + "px";
            r1b2.style.marginTop = 13 + "px";
            r1b2.style.marginLeft = -15 + "px";
            r1b2.style.transition = "1s";
            r1b2.style.width = 68 + "px";
            r1b2.style.height = 39 + "px";
            r1b3.style.marginTop = 27 + "px";
            r1b3.style.marginLeft = -20 + "px";
            r1b3.style.transition = "1s";
            r1b3.style.width = 68 + "px";
            r1b3.style.height = 39 + "px";
            r1b4.style.marginTop = 45 + "px";
            r1b4.style.marginLeft = -13 + "px";
            r1b4.style.transition = "1s";
            r1b4.style.width = 68 + "px";
            r1b4.style.height = 39 + "px";
            r1b5.style.marginTop = 110 + "px";
            r1b5.style.marginLeft = -40 + "px";
            r1b5.style.transition = "1s";
            r1b5.style.width = 68 + "px";
            r1b5.style.height = 39 + "px";
            r1b6.style.marginTop = 65 + "px";
            r1b6.style.marginLeft = -18 + "px";
            r1b6.style.transition = "1s";
            r1b6.style.width = 68 + "px";
            r1b6.style.height = 39 + "px";
            r1b7.style.marginTop = 80 + "px";
            r1b7.style.marginLeft = -20 + "px";
            r1b7.style.transition = "1s";
            r1b7.style.width = 68 + "px";
            r1b7.style.height = 39 + "px";
            r1b8.style.marginTop = 95 + "px";
            r1b8.style.marginLeft = -13 + "px";
            r1b8.style.transition = "1s";
            r1b8.style.width = 68 + "px";
            r1b8.style.height = 39 + "px";

            //reposition booth C2
            r2b9.style.marginTop = 0 + "px";
            r2b9.style.marginLeft = 0 + "px";
            r2b9.style.transition = "1s";
            r2b9.style.width = 68 + "px";
            r2b9.style.height = 39 + "px";
            r2b10.style.marginTop = 15 + "px";
            r2b10.style.marginLeft = -20 + "px";
            r2b10.style.transition = "1s";
            r2b10.style.width = 68 + "px";
            r2b10.style.height = 39 + "px";
            r2b11.style.marginTop = 33 + "px";
            r2b11.style.marginLeft = -27 + "px";
            r2b11.style.transition = "1s";
            r2b11.style.width = 68 + "px";
            r2b11.style.height = 39 + "px";
            r2b12.style.marginTop = 47 + "px";
            r2b12.style.marginLeft = -27 + "px";
            r2b12.style.transition = "1s";
            r2b12.style.width = 68 + "px";
            r2b12.style.height = 39 + "px";
            r2b13.style.marginTop = 60 + "px";
            r2b13.style.marginLeft = -35 + "px";
            r2b13.style.transition = "1s";
            r2b13.style.width = 68 + "px";
            r2b13.style.height = 39 + "px";
            r2b14.style.marginTop = 73 + "px";
            r2b14.style.marginLeft = -28 + "px";
            r2b14.style.transition = "1s";
            r2b14.style.width = 68 + "px";
            r2b14.style.height = 39 + "px";
            r2b15.style.marginTop = 92 + "px";
            r2b15.style.marginLeft = -18 + "px";
            r2b15.style.transition = "1s";
            r2b15.style.width = 68 + "px";
            r2b15.style.height = 39 + "px";
            r2b16.style.marginTop = 115 + "px";
            r2b16.style.marginLeft = -8 + "px";
            r2b16.style.transition = "1s";
            r2b16.style.width = 68 + "px";
            r2b16.style.height = 39 + "px";

            //reposition booth C3
            r3b17.style.marginTop = 0 + "px";
            r3b17.style.marginLeft = 0 + "px";
            r3b17.style.transition = "1s";
            r3b17.style.width = 68 + "px";
            r3b17.style.height = 39 + "px";
            r3b18.style.marginTop = 20 + "px";
            r3b18.style.marginLeft = -10 + "px";
            r3b18.style.transition = "1s";
            r3b18.style.width = 68 + "px";
            r3b18.style.height = 39 + "px";
            r3b19.style.marginTop = 40 + "px";
            r3b19.style.marginLeft = -8 + "px";
            r3b19.style.transition = "1s";
            r3b19.style.width = 68 + "px";
            r3b19.style.height = 39 + "px";
            r3b20.style.marginTop = 60 + "px";
            r3b20.style.marginLeft = -10 + "px";
            r3b20.style.transition = "1s";
            r3b20.style.width = 68 + "px";
            r3b20.style.height = 39 + "px";
            r3b21.style.marginTop = 87 + "px";
            r3b21.style.marginLeft = -5 + "px";
            r3b21.style.transition = "1s";
            r3b21.style.width = 68 + "px";
            r3b21.style.height = 39 + "px";
            r3b22.style.marginTop = 115 + "px";
            r3b22.style.marginLeft = 0 + "px";
            r3b22.style.transition = "1s";
            r3b22.style.width = 68 + "px";
            r3b22.style.height = 39 + "px";
            r3b23.style.marginTop = 140 + "px";
            r3b23.style.marginLeft = 0 + "px";
            r3b23.style.transition = "1s";
            r3b23.style.width = 68 + "px";
            r3b23.style.height = 39 + "px";

            //reposition booth C4
            r4b24.style.marginTop = 0 + "px";
            r4b24.style.marginLeft = 0 + "px";
            r4b24.style.transition = "1s";
            r4b24.style.width = 68 + "px";
            r4b24.style.height = 39 + "px";
            r4b25.style.marginTop = 30 + "px";
            r4b25.style.marginLeft = -5 + "px";
            r4b25.style.transition = "1s";
            r4b25.style.width = 68 + "px";
            r4b25.style.height = 39 + "px";
            r4b26.style.marginTop = 50 + "px";
            r4b26.style.marginLeft = -15 + "px";
            r4b26.style.transition = "1s";
            r4b26.style.width = 68 + "px";
            r4b26.style.height = 39 + "px";
            r4b27.style.marginTop = 135 + "px";
            r4b27.style.marginLeft = -40 + "px";
            r4b27.style.transition = "1s";
            r4b27.style.width = 68 + "px";
            r4b27.style.height = 39 + "px";
            r4b28.style.marginTop = 95 + "px";
            r4b28.style.marginLeft = 0 + "px";
            r4b28.style.transition = "1s";
            r4b28.style.width = 68 + "px";
            r4b28.style.height = 39 + "px";
            r4b29.style.marginTop = 127 + "px";
            r4b29.style.marginLeft = 0 + "px";
            r4b29.style.transition = "1s";
            r4b29.style.width = 68 + "px";
            r4b29.style.height = 39 + "px";
            r4b30.style.marginTop = 153 + "px";
            r4b30.style.marginLeft = -5 + "px";
            r4b30.style.transition = "1s";
            r4b30.style.width = 68 + "px";
            r4b30.style.height = 39 + "px";
            r4b31.style.marginTop = 180 + "px";
            r4b31.style.marginLeft = 0 + "px";
            r4b31.style.transition = "1s";
            r4b31.style.width = 68 + "px";
            r4b31.style.height = 39 + "px";
            r4b32.style.marginTop = 212 + "px";
            r4b32.style.marginLeft = 0 + "px";
            r4b32.style.transition = "1s";
            r4b32.style.width = 68 + "px";
            r4b32.style.height = 39 + "px";
            
            /////////////////////////////////////
            //swapC1
            C1b1.style.width = 68 + "px";
            C1b1.style.height = 39 + "px";
            C1b1.style.transition = "1s";
            C1b2.style.width = 68 + "px";
            C1b2.style.height = 39 + "px";
            C1b2.style.transition = "1s";
            C1b3.style.width = 68 + "px";
            C1b3.style.height = 39 + "px";
            C1b3.style.transition = "1s";
            C1b4.style.width = 68 + "px";
            C1b4.style.height = 39 + "px";
            C1b4.style.transition = "1s";
            C1b5.style.width = 68 + "px";
            C1b5.style.height = 39 + "px";
            C1b5.style.transition = "1s";
            C1b6.style.width = 68 + "px";
            C1b6.style.height = 39 + "px";
            C1b6.style.transition = "1s";
            C1b7.style.width = 68 + "px";
            C1b7.style.height = 39 + "px";
            C1b7.style.transition = "1s";
            C1b8.style.width = 68 + "px";
            C1b8.style.height = 39 + "px";
            C1b8.style.transition = "1s";

            //swapC2
            C2b9.style.width = 68 + "px";
            C2b9.style.height = 39 + "px";
            C2b9.style.transition = "1s";
            C2b10.style.width = 68 + "px";
            C2b10.style.height = 39 + "px";
            C2b10.style.transition = "1s";
            C2b11.style.width = 68 + "px";
            C2b11.style.height = 39 + "px";
            C2b11.style.transition = "1s";
            C2b12.style.width = 68 + "px";
            C2b12.style.height = 39 + "px";
            C2b12.style.transition = "1s";
            C2b13.style.width = 68 + "px";
            C2b13.style.height = 39 + "px";
            C2b13.style.transition = "1s";
            C2b14.style.width = 68 + "px";
            C2b14.style.height = 39 + "px";
            C2b14.style.transition = "1s";
            C2b15.style.width = 68 + "px";
            C2b15.style.height = 39 + "px";
            C2b15.style.transition = "1s";
            C2b16.style.width = 68 + "px";
            C2b16.style.height = 39 + "px";
            C2b16.style.transition = "1s";

            //swapC3
            C3b17.style.width = 68 + "px";
            C3b17.style.height = 39 + "px";
            C3b17.style.transition = "1s";
            C3b18.style.width = 68 + "px";
            C3b18.style.height = 39 + "px";
            C3b18.style.transition = "1s";
            C3b19.style.width = 68 + "px";
            C3b19.style.height = 39 + "px";
            C3b19.style.transition = "1s";
            C3b20.style.width = 68 + "px";
            C3b20.style.height = 39 + "px";
            C3b20.style.transition = "1s";
            C3b21.style.width = 68 + "px";
            C3b21.style.height = 39 + "px";
            C3b21.style.transition = "1s";
            C3b22.style.width = 68 + "px";
            C3b22.style.height = 39 + "px";
            C3b22.style.transition = "1s";
            C3b23.style.width = 68 + "px";
            C3b23.style.height = 39 + "px";
            C3b23.style.transition = "1s";

            //swapC4
            C4b24.style.width = 68 + "px";
            C4b24.style.height = 39 + "px";
            C4b24.style.transition = "1s";
            C4b25.style.width = 68 + "px";
            C4b25.style.height = 39 + "px";
            C4b25.style.transition = "1s";
            C4b26.style.width = 68 + "px";
            C4b26.style.height = 39 + "px";
            C4b26.style.transition = "1s";
            C4b27.style.width = 68 + "px";
            C4b27.style.height = 39 + "px";
            C4b27.style.transition = "1s";
            C4b28.style.width = 68 + "px";
            C4b28.style.height = 39 + "px";
            C4b28.style.transition = "1s";
            C4b29.style.width = 68 + "px";
            C4b29.style.height = 39 + "px";
            C4b29.style.transition = "1s";
            C4b30.style.width = 68 + "px";
            C4b30.style.height = 39 + "px";
            C4b30.style.transition = "1s";
            C4b31.style.width = 68 + "px";
            C4b31.style.height = 39 + "px";
            C4b31.style.transition = "1s";
            C4b32.style.width = 68 + "px";
            C4b32.style.height = 39 + "px";
            C4b32.style.transition = "1s";


            // swapScript(nav0);
            zoomObject.style.transition = "1s" ;
            zoomObject.style.width = 1500 + "px";
            zoomObject.style.height = 755.66 + "px";
            zoomObject2.style.transition = "1s";
            zoomObject2.style.left = -100 + "px";
            zoomObject2.style.top = 0 + "px";
            }
        }

    ///////////////////////////////////////////
    //zoom In button
    const zoomInButton = document.querySelector("div#button-maps #zoom-control .zoomIn");
    zoomInButton.addEventListener("click", zoomIn);

    function zoomIn () {
        //zoom in 1
        //////////////////////////////
        if ( lastWidthValue == 1500 && lastHeightValue == 755.66 ) {
            // swapStyleSheet(zoom1);
            //reposition partner booth
            parentBooth.style.top = 105 + "px";
            parentBooth.style.left = 940 + "px";
            parentBooth.style.transition = "1s";

            ////////////////////////////////////
            //reposition column booth
            //column1
            column1.style.gap = 0 + "px";
            column1.style.marginTop = 0 + "px";
            column1.style.marginLeft = 0 + "px";
            column1.style.transition = "1s";
            //column2
            column2.style.gap = 5 + "px";
            column2.style.marginTop = -80 + "px";
            column2.style.marginLeft = -180 + "px";
            column2.style.transition = "1s";
            //column3
            column3.style.gap = 20 + "px";
            column3.style.marginTop = -60 + "px";
            column3.style.marginLeft = -370 + "px";
            column3.style.transition = "1s";
            //column4
            column4.style.gap = 20 + "px";
            column4.style.marginTop = -75 + "px";
            column4.style.marginLeft = -610 + "px";
            column4.style.transition = "1s";

            //////////////////////////////////////
            //reposition booth

            //reposition booth C1
            r1b1.style.marginTop = 0 + "px";
            r1b1.style.marginLeft = 0 + "px";
            r1b1.style.transition = "1s";
            r1b1.style.width = 88 + "px";
            r1b1.style.height = 49 + "px";
            r1b2.style.marginTop = 20 + "px";
            r1b2.style.marginLeft = 0 + "px";
            r1b2.style.transition = "1s";
            r1b2.style.width = 88 + "px";
            r1b2.style.height = 49 + "px";
            r1b3.style.marginTop = 45 + "px";
            r1b3.style.marginLeft = 0 + "px";
            r1b3.style.transition = "1s";
            r1b3.style.width = 88 + "px";
            r1b3.style.height = 49 + "px";
            r1b4.style.marginTop = 75 + "px";
            r1b4.style.marginLeft = 0 + "px";
            r1b4.style.transition = "1s";
            r1b4.style.width = 88 + "px";
            r1b4.style.height = 49 + "px";
            r1b5.style.marginTop = 170 + "px";
            r1b5.style.marginLeft = -50 + "px";
            r1b5.style.transition = "1s";
            r1b5.style.width = 88 + "px";
            r1b5.style.height = 49 + "px";
            r1b6.style.marginTop = 110 + "px";
            r1b6.style.marginLeft = 0 + "px";
            r1b6.style.transition = "1s";
            r1b6.style.width = 88 + "px";
            r1b6.style.height = 49 + "px";
            r1b7.style.marginTop = 135 + "px";
            r1b7.style.marginLeft = 0 + "px";
            r1b7.style.transition = "1s";
            r1b7.style.width = 88 + "px";
            r1b7.style.height = 49 + "px";
            r1b8.style.marginTop = 160 + "px";
            r1b8.style.marginLeft = 0 + "px";
            r1b8.style.transition = "1s";
            r1b8.style.width = 88 + "px";
            r1b8.style.height = 49 + "px";

            //reposition booth C2
            r2b9.style.marginTop = 0 + "px";
            r2b9.style.marginLeft = 0 + "px";
            r2b9.style.transition = "1s";
            r2b9.style.width = 88 + "px";
            r2b9.style.height = 49 + "px";
            r2b10.style.marginTop = 20 + "px";
            r2b10.style.marginLeft = 0 + "px";
            r2b10.style.transition = "1s";
            r2b10.style.width = 88 + "px";
            r2b10.style.height = 49 + "px";
            r2b11.style.marginTop = 50 + "px";
            r2b11.style.marginLeft = -20 + "px";
            r2b11.style.transition = "1s";
            r2b11.style.width = 88 + "px";
            r2b11.style.height = 49 + "px";
            r2b12.style.marginTop = 75 + "px";
            r2b12.style.marginLeft = -20 + "px";
            r2b12.style.transition = "1s";
            r2b12.style.width = 88 + "px";
            r2b12.style.height = 49 + "px";
            r2b13.style.marginTop = 100 + "px";
            r2b13.style.marginLeft = -20 + "px";
            r2b13.style.transition = "1s";
            r2b13.style.width = 88 + "px";
            r2b13.style.height = 49 + "px";
            r2b14.style.marginTop = 125 + "px";
            r2b14.style.marginLeft = -10 + "px";
            r2b14.style.transition = "1s";
            r2b14.style.width = 88 + "px";
            r2b14.style.height = 49 + "px";
            r2b15.style.marginTop = 150 + "px";
            r2b15.style.marginLeft = -10 + "px";
            r2b15.style.transition = "1s";
            r2b15.style.width = 88 + "px";
            r2b15.style.height = 49 + "px";
            r2b16.style.marginTop = 185 + "px";
            r2b16.style.marginLeft = 10 + "px";
            r2b16.style.transition = "1s";
            r2b16.style.width = 88 + "px";
            r2b16.style.height = 49 + "px";

            //reposition booth C3
            r3b17.style.marginTop = 0 + "px";
            r3b17.style.marginLeft = 0 + "px";
            r3b17.style.transition = "1s";
            r3b17.style.width = 88 + "px";
            r3b17.style.height = 49 + "px";
            r3b18.style.marginTop = 35 + "px";
            r3b18.style.marginLeft = -0 + "px";
            r3b18.style.transition = "1s";
            r3b18.style.width = 88 + "px";
            r3b18.style.height = 49 + "px";
            r3b19.style.marginTop = 70 + "px";
            r3b19.style.marginLeft = -15 + "px";
            r3b19.style.transition = "1s";
            r3b19.style.width = 88 + "px";
            r3b19.style.height = 49 + "px";
            r3b20.style.marginTop = 110 + "px";
            r3b20.style.marginLeft = -10 + "px";
            r3b20.style.transition = "1s";
            r3b20.style.width = 88 + "px";
            r3b20.style.height = 49 + "px";
            r3b21.style.marginTop = 150 + "px";
            r3b21.style.marginLeft = 0 + "px";
            r3b21.style.transition = "1s";
            r3b21.style.width = 88 + "px";
            r3b21.style.height = 49 + "px";
            r3b22.style.marginTop = 195 + "px";
            r3b22.style.marginLeft = 10 + "px";
            r3b22.style.transition = "1s";
            r3b22.style.width = 88 + "px";
            r3b22.style.height = 49 + "px";
            r3b23.style.marginTop = 240 + "px";
            r3b23.style.marginLeft = 0 + "px";
            r3b23.style.transition = "1s";
            r3b23.style.width = 88 + "px";
            r3b23.style.height = 49 + "px";

            //reposition booth C4
            r4b24.style.marginTop = 0 + "px";
            r4b24.style.marginLeft = 0 + "px";
            r4b24.style.transition = "1s";
            r4b24.style.width = 88 + "px";
            r4b24.style.height = 49 + "px";
            r4b25.style.marginTop = 45 + "px";
            r4b25.style.marginLeft = -10 + "px";
            r4b25.style.transition = "1s";
            r4b25.style.width = 88 + "px";
            r4b25.style.height = 49 + "px";
            r4b26.style.marginTop = 80 + "px";
            r4b26.style.marginLeft = -20 + "px";
            r4b26.style.transition = "1s";
            r4b26.style.width = 88 + "px";
            r4b26.style.height = 49 + "px";
            r4b27.style.marginTop = 210 + "px";
            r4b27.style.marginLeft = -60 + "px";
            r4b27.style.transition = "1s";
            r4b27.style.width = 88 + "px";
            r4b27.style.height = 49 + "px";
            r4b28.style.marginTop = 155 + "px";
            r4b28.style.marginLeft = 10 + "px";
            r4b28.style.transition = "1s";
            r4b28.style.width = 88 + "px";
            r4b28.style.height = 49 + "px";
            r4b29.style.marginTop = 210 + "px";
            r4b29.style.marginLeft = 0 + "px";
            r4b29.style.transition = "1s";
            r4b29.style.width = 88 + "px";
            r4b29.style.height = 49 + "px";
            r4b30.style.marginTop = 255 + "px";
            r4b30.style.marginLeft = 0 + "px";
            r4b30.style.transition = "1s";
            r4b30.style.width = 88 + "px";
            r4b30.style.height = 49 + "px";
            r4b31.style.marginTop = 300 + "px";
            r4b31.style.marginLeft = 0 + "px";
            r4b31.style.transition = "1s";
            r4b31.style.width = 88 + "px";
            r4b31.style.height = 49 + "px";
            r4b32.style.marginTop = 350 + "px";
            r4b32.style.marginLeft = 20 + "px";
            r4b32.style.transition = "1s";
            r4b32.style.width = 88 + "px";
            r4b32.style.height = 49 + "px";
            

            /////////////////////////////
            //swapC1
            C1b1.style.width = 88 + "px";
            C1b1.style.height = 49 + "px";
            C1b1.style.transition = "1s";
            C1b2.style.width = 88 + "px";
            C1b2.style.height = 49 + "px";
            C1b2.style.transition = "1s";
            C1b3.style.width = 88 + "px";
            C1b3.style.height = 49 + "px";
            C1b3.style.transition = "1s";
            C1b4.style.width = 88 + "px";
            C1b4.style.height = 49 + "px";
            C1b4.style.transition = "1s";
            C1b5.style.width = 88 + "px";
            C1b5.style.height = 49 + "px";
            C1b5.style.transition = "1s";
            C1b6.style.width = 88 + "px";
            C1b6.style.height = 49 + "px";
            C1b6.style.transition = "1s";
            C1b7.style.width = 88 + "px";
            C1b7.style.height = 49 + "px";
            C1b7.style.transition = "1s";
            C1b8.style.width = 88 + "px";
            C1b8.style.height = 49 + "px";
            C1b8.style.transition = "1s";

            //swapC2
            C2b9.style.width = 88 + "px";
            C2b9.style.height = 49 + "px";
            C2b9.style.transition = "1s";
            C2b10.style.width = 88 + "px";
            C2b10.style.height = 49 + "px";
            C2b10.style.transition = "1s";
            C2b11.style.width = 88 + "px";
            C2b11.style.height = 49 + "px";
            C2b11.style.transition = "1s";
            C2b12.style.width = 88 + "px";
            C2b12.style.height = 49 + "px";
            C2b12.style.transition = "1s";
            C2b13.style.width = 88 + "px";
            C2b13.style.height = 49 + "px";
            C2b13.style.transition = "1s";
            C2b14.style.width = 88 + "px";
            C2b14.style.height = 49 + "px";
            C2b14.style.transition = "1s";
            C2b15.style.width = 88 + "px";
            C2b15.style.height = 49 + "px";
            C2b15.style.transition = "1s";
            C2b16.style.width = 88 + "px";
            C2b16.style.height = 49 + "px";
            C2b16.style.transition = "1s";

            //swapC3
            C3b17.style.width = 88 + "px";
            C3b17.style.height = 49 + "px";
            C3b17.style.transition = "1s";
            C3b18.style.width = 88 + "px";
            C3b18.style.height = 49 + "px";
            C3b18.style.transition = "1s";
            C3b19.style.width = 88 + "px";
            C3b19.style.height = 49 + "px";
            C3b19.style.transition = "1s";
            C3b20.style.width = 88 + "px";
            C3b20.style.height = 49 + "px";
            C3b20.style.transition = "1s";
            C3b21.style.width = 88 + "px";
            C3b21.style.height = 49 + "px";
            C3b21.style.transition = "1s";
            C3b22.style.width = 88 + "px";
            C3b22.style.height = 49 + "px";
            C3b22.style.transition = "1s";
            C3b23.style.width = 88 + "px";
            C3b23.style.height = 49 + "px";
            C3b23.style.transition = "1s";

            //swapC4
            C4b24.style.width = 88 + "px";
            C4b24.style.height = 49 + "px";
            C4b24.style.transition = "1s";
            C4b25.style.width = 88 + "px";
            C4b25.style.height = 49 + "px";
            C4b25.style.transition = "1s";
            C4b26.style.width = 88 + "px";
            C4b26.style.height = 49 + "px";
            C4b26.style.transition = "1s";
            C4b27.style.width = 88 + "px";
            C4b27.style.height = 49 + "px";
            C4b27.style.transition = "1s";
            C4b28.style.width = 88 + "px";
            C4b28.style.height = 49 + "px";
            C4b28.style.transition = "1s";
            C4b29.style.width = 88 + "px";
            C4b29.style.height = 49 + "px";
            C4b29.style.transition = "1s";
            C4b30.style.width = 88 + "px";
            C4b30.style.height = 49 + "px";
            C4b30.style.transition = "1s";
            C4b31.style.width = 88 + "px";
            C4b31.style.height = 49 + "px";
            C4b31.style.transition = "1s";
            C4b32.style.width = 88 + "px";
            C4b32.style.height = 49 + "px";
            C4b32.style.transition = "1s";

            // swapScript(nav1);
            zoomObject.style.transition = "1s" ;
            zoomObject.style.width = 2500 + "px";
            zoomObject.style.height = 1259.66 + "px";
            zoomObject2.style.transition = "1s";
            zoomObject2.style.left = -500 + "px";
            zoomObject2.style.top = -100 + "px";
            }

        //zoom in 2
        /////////////////////////////
        else if ( lastWidthValue == 2500 && lastHeightValue == 1259.66) {
            // swapStyleSheet(zoom2);
            //reposition partner booth
            parentBooth.style.top = 145 + "px";
            parentBooth.style.left = 1315 + "px";
            parentBooth.style.transition = "1s";

            ////////////////////////////////////
            //reposition column booth
            //column1
            column1.style.gap = 0 + "px";
            column1.style.marginTop = 0 + "px";
            column1.style.marginLeft = 0 + "px";
            column1.style.transition = "1s";
            //column2
            column2.style.gap = 0 + "px";
            column2.style.marginTop = -110 + "px";
            column2.style.marginLeft = -250 + "px";
            column2.style.transition = "1s";
            //column3
            column3.style.gap = 20 + "px";
            column3.style.marginTop = -80 + "px";
            column3.style.marginLeft = -510 + "px";
            column3.style.transition = "1s";
            //column4
            column4.style.gap = 20 + "px";
            column4.style.marginTop = -105 + "px";
            column4.style.marginLeft = -860 + "px";
            column4.style.transition = "1s";

            //////////////////////////////////////
            //reposition booth

            //reposition booth C1
            r1b1.style.marginTop = 0 + "px";
            r1b1.style.marginLeft = 0 + "px";
            r1b1.style.transition = "1s";
            r1b1.style.width = 128 + "px";
            r1b1.style.height = 69 + "px";

            r1b2.style.marginTop = 30 + "px";
            r1b2.style.marginLeft = -10 + "px";
            r1b2.style.transition = "1s";
            r1b2.style.width = 128 + "px";
            r1b2.style.height = 69 + "px";
            
            r1b3.style.marginTop = 65 + "px";
            r1b3.style.marginLeft = 0 + "px";
            r1b3.style.transition = "1s";
            r1b3.style.width = 128 + "px";
            r1b3.style.height = 69 + "px";

            r1b4.style.marginTop = 105 + "px";
            r1b4.style.marginLeft = 0 + "px";
            r1b4.style.transition = "1s";
            r1b4.style.width = 128 + "px";
            r1b4.style.height = 69 + "px";
            
            r1b5.style.marginTop = 235 + "px";
            r1b5.style.marginLeft = -50 + "px";
            r1b5.style.transition = "1s";
            r1b5.style.width = 128 + "px";
            r1b5.style.height = 69 + "px";
            r1b6.style.marginTop = 155 + "px";
            r1b6.style.marginLeft = -30 + "px";
            r1b6.style.transition = "1s";
            r1b6.style.width = 128 + "px";
            r1b6.style.height = 69 + "px";
            r1b7.style.marginTop = 190 + "px";
            r1b7.style.marginLeft = -15 + "px";
            r1b7.style.transition = "1s";
            r1b7.style.width = 128 + "px";
            r1b7.style.height = 69 + "px";
            r1b8.style.marginTop = 220 + "px";
            r1b8.style.marginLeft = 10 + "px";
            r1b8.style.transition = "1s";
            r1b8.style.width = 128 + "px";
            r1b8.style.height = 69 + "px";

            //reposition booth C2
            r2b9.style.marginTop = 0 + "px";
            r2b9.style.marginLeft = 0 + "px";
            r2b9.style.transition = "1s";
            r2b9.style.width = 128 + "px";
            r2b9.style.height = 69 + "px";
            r2b10.style.marginTop = 30 + "px";
            r2b10.style.marginLeft = -10 + "px";
            r2b10.style.transition = "1s";
            r2b10.style.width = 128 + "px";
            r2b10.style.height = 69 + "px";
            r2b11.style.marginTop = 70 + "px";
            r2b11.style.marginLeft = -20 + "px";
            r2b11.style.transition = "1s";
            r2b11.style.width = 128 + "px";
            r2b11.style.height = 69 + "px";
            r2b12.style.marginTop = 105 + "px";
            r2b12.style.marginLeft = -20 + "px";
            r2b12.style.transition = "1s";
            r2b12.style.width = 128 + "px";
            r2b12.style.height = 69 + "px";
            r2b13.style.marginTop = 140 + "px";
            r2b13.style.marginLeft = -30 + "px";
            r2b13.style.transition = "1s";
            r2b13.style.width = 128 + "px";
            r2b13.style.height = 69 + "px";
            r2b14.style.marginTop = 175 + "px";
            r2b14.style.marginLeft = -15 + "px";
            r2b14.style.transition = "1s";
            r2b14.style.width = 128 + "px";
            r2b14.style.height = 69 + "px";
            r2b15.style.marginTop = 215 + "px";
            r2b15.style.marginLeft = -10 + "px";
            r2b15.style.transition = "1s";
            r2b15.style.width = 128 + "px";
            r2b15.style.height = 69 + "px";
            r2b16.style.marginTop = 265 + "px";
            r2b16.style.marginLeft = 10 + "px";
            r2b16.style.transition = "1s";
            r2b16.style.width = 128 + "px";
            r2b16.style.height = 69 + "px";

            //reposition booth C3
            r3b17.style.marginTop = 0 + "px";
            r3b17.style.marginLeft = 0 + "px";
            r3b17.style.transition = "1s";
            r3b17.style.width = 128 + "px";
            r3b17.style.height = 69 + "px";
            r3b18.style.marginTop = 45 + "px";
            r3b18.style.marginLeft = -10 + "px";
            r3b18.style.transition = "1s";
            r3b18.style.width = 128 + "px";
            r3b18.style.height = 69 + "px";
            r3b19.style.marginTop = 95 + "px";
            r3b19.style.marginLeft = -25 + "px";
            r3b19.style.transition = "1s";
            r3b19.style.width = 128 + "px";
            r3b19.style.height = 69 + "px";
            r3b20.style.marginTop = 145 + "px";
            r3b20.style.marginLeft = -5 + "px";
            r3b20.style.transition = "1s";
            r3b20.style.width = 128 + "px";
            r3b20.style.height = 69 + "px";
            r3b21.style.marginTop = 205 + "px";
            r3b21.style.marginLeft = 0 + "px";
            r3b21.style.transition = "1s";
            r3b21.style.width = 128 + "px";
            r3b21.style.height = 69 + "px";
            r3b22.style.marginTop = 265 + "px";
            r3b22.style.marginLeft = 10 + "px";
            r3b22.style.transition = "1s";
            r3b22.style.width = 128 + "px";
            r3b22.style.height = 69 + "px";
            r3b23.style.marginTop = 330 + "px";
            r3b23.style.marginLeft = 10 + "px";
            r3b23.style.transition = "1s";
            r3b23.style.width = 128 + "px";
            r3b23.style.height = 69 + "px";

            //reposition booth C4
            r4b24.style.marginTop = 0 + "px";
            r4b24.style.marginLeft = 0 + "px";
            r4b24.style.transition = "1s";
            r4b24.style.width = 128 + "px";
            r4b24.style.height = 69 + "px";
            r4b25.style.marginTop = 65 + "px";
            r4b25.style.marginLeft = -10 + "px";
            r4b25.style.transition = "1s";
            r4b25.style.width = 128 + "px";
            r4b25.style.height = 69 + "px";
            r4b26.style.marginTop = 115 + "px";
            r4b26.style.marginLeft = -20 + "px";
            r4b26.style.transition = "1s";
            r4b26.style.width = 128 + "px";
            r4b26.style.height = 69 + "px";
            r4b27.style.marginTop = 295 + "px";
            r4b27.style.marginLeft = -70 + "px";
            r4b27.style.transition = "1s";
            r4b27.style.width = 128 + "px";
            r4b27.style.height = 69 + "px";
            r4b28.style.marginTop = 220 + "px";
            r4b28.style.marginLeft = -10 + "px";
            r4b28.style.transition = "1s";
            r4b28.style.width = 128 + "px";
            r4b28.style.height = 69 + "px";
            r4b29.style.marginTop = 290 + "px";
            r4b29.style.marginLeft = 10 + "px";
            r4b29.style.transition = "1s";
            r4b29.style.width = 128 + "px";
            r4b29.style.height = 69 + "px";
            r4b30.style.marginTop = 355 + "px";
            r4b30.style.marginLeft = 0 + "px";
            r4b30.style.transition = "1s";
            r4b30.style.width = 128 + "px";
            r4b30.style.height = 69 + "px";
            r4b31.style.marginTop = 420 + "px";
            r4b31.style.marginLeft = 0 + "px";
            r4b31.style.transition = "1s";
            r4b31.style.width = 128 + "px";
            r4b31.style.height = 69 + "px";
            r4b32.style.marginTop = 490 + "px";
            r4b32.style.marginLeft = 20 + "px";
            r4b32.style.transition = "1s";
            r4b32.style.width = 128 + "px";
            r4b32.style.height = 69 + "px";

            /////////////////////////////
            //swapC1
            C1b1.style.width = 128 + "px";
            C1b1.style.height = 69 + "px";
            C1b1.style.transition = "1s";
            C1b2.style.width = 128 + "px";
            C1b2.style.height = 69 + "px";
            C1b2.style.transition = "1s";
            C1b3.style.width = 128 + "px";
            C1b3.style.height = 69 + "px";
            C1b3.style.transition = "1s";
            C1b4.style.width = 128 + "px";
            C1b4.style.height = 69 + "px";
            C1b4.style.transition = "1s";
            C1b5.style.width = 128 + "px";
            C1b5.style.height = 69 + "px";
            C1b5.style.transition = "1s";
            C1b6.style.width = 128 + "px";
            C1b6.style.height = 69 + "px";
            C1b6.style.transition = "1s";
            C1b7.style.width = 128 + "px";
            C1b7.style.height = 69 + "px";
            C1b7.style.transition = "1s";
            C1b8.style.width = 128 + "px";
            C1b8.style.height = 69 + "px";
            C1b8.style.transition = "1s";

            //swapC2
            C2b9.style.width = 128 + "px";
            C2b9.style.height = 69 + "px";
            C2b9.style.transition = "1s";
            C2b10.style.width = 128 + "px";
            C2b10.style.height = 69 + "px";
            C2b10.style.transition = "1s";
            C2b11.style.width = 128 + "px";
            C2b11.style.height = 69 + "px";
            C2b11.style.transition = "1s";
            C2b12.style.width = 128 + "px";
            C2b12.style.height = 69 + "px";
            C2b12.style.transition = "1s";
            C2b13.style.width = 128 + "px";
            C2b13.style.height = 69 + "px";
            C2b13.style.transition = "1s";
            C2b14.style.width = 128 + "px";
            C2b14.style.height = 69 + "px";
            C2b14.style.transition = "1s";
            C2b15.style.width = 128 + "px";
            C2b15.style.height = 69 + "px";
            C2b15.style.transition = "1s";
            C2b16.style.width = 128 + "px";
            C2b16.style.height = 69 + "px";
            C2b16.style.transition = "1s";

            //swapC3
            C3b17.style.width = 128 + "px";
            C3b17.style.height = 69 + "px";
            C3b17.style.transition = "1s";
            C3b18.style.width = 128 + "px";
            C3b18.style.height = 69 + "px";
            C3b18.style.transition = "1s";
            C3b19.style.width = 128 + "px";
            C3b19.style.height = 69 + "px";
            C3b19.style.transition = "1s";
            C3b20.style.width = 128 + "px";
            C3b20.style.height = 69 + "px";
            C3b20.style.transition = "1s";
            C3b21.style.width = 128 + "px";
            C3b21.style.height = 69 + "px";
            C3b21.style.transition = "1s";
            C3b22.style.width = 128 + "px";
            C3b22.style.height = 69 + "px";
            C3b22.style.transition = "1s";
            C3b23.style.width = 128 + "px";
            C3b23.style.height = 69 + "px";
            C3b23.style.transition = "1s";


            //swapC4
            C4b24.style.width = 128 + "px";
            C4b24.style.height = 69 + "px";
            C4b24.style.transition = "1s";
            C4b25.style.width = 128 + "px";
            C4b25.style.height = 69 + "px";
            C4b25.style.transition = "1s";
            C4b26.style.width = 128 + "px";
            C4b26.style.height = 69 + "px";
            C4b26.style.transition = "1s";
            C4b27.style.width = 128 + "px";
            C4b27.style.height = 69 + "px";
            C4b27.style.transition = "1s";
            C4b28.style.width = 128 + "px";
            C4b28.style.height = 69 + "px";
            C4b28.style.transition = "1s";
            C4b29.style.width = 128 + "px";
            C4b29.style.height = 69 + "px";
            C4b29.style.transition = "1s";
            C4b30.style.width = 128 + "px";
            C4b30.style.height = 69 + "px";
            C4b30.style.transition = "1s";
            C4b31.style.width = 128 + "px";
            C4b31.style.height = 69 + "px";
            C4b31.style.transition = "1s";
            C4b32.style.width = 128 + "px";
            C4b32.style.height = 69 + "px";
            C4b32.style.transition = "1s";

            // swapScript(nav2);
            zoomObject.style.transition = "1s" ;
            zoomObject.style.width = 3500 + "px";
            zoomObject.style.height = 1763.21 + "px";
            zoomObject2.style.transition = "1s";
            zoomObject2.style.left = -900 + "px";
            zoomObject2.style.top = -300 + "px";
            }
        }
}