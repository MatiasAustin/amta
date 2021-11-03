// responsive zoom data
// const zoomStyleResponsive = document.querySelector("div#maps-image #frame-dragable-image-fairhall #dragable-image img");
// zoomStyleResponsive.addEventListener("transitionrun", getValueZoomStyle);

const upArrow = document.querySelector("div#vertical .up");
upArrow.addEventListener("mouseover", getValueZoomStyle);
const downArrow = document.querySelector("div#vertical .down");
downArrow.addEventListener("mouseover", getValueZoomStyle);
const leftArrow = document.querySelector("div#horizontal .left");
leftArrow.addEventListener("mouseover", getValueZoomStyle);
const rightArrow = document.querySelector("div#horizontal .right");
rightArrow.addEventListener("mouseover", getValueZoomStyle);

// const zoomStyleResponsiveOnMouse = document.getElementById("button-maps");
// zoomStyleResponsiveOnMouse.addEventListener("mouseover", getValueZoomStyle);

function getValueZoomStyle () {
    const getFrom = document.querySelector("div#maps-image #frame-dragable-image-fairhall #dragable-image img");
    const zoomStyleWidth = getFrom.style.width;
    const zoomStyleHeight = getFrom.style.height;

    //convert value to number
    const convertwidth = parseFloat(zoomStyleWidth);
    const convertheight = parseFloat(zoomStyleHeight);

    //preview result zoomStyle value
    // console.log(convertwidth);
    // console.log(convertheight);

    // zoomStyleResponsive.addEventListener("transitionstart", clearValue)

    // function clearValue () {
    //     console.clear(convertwidth);
    //     console.clear(convertheight);
    //     delete convertheight;
    //     delete convertwidth;
    // }

//last value zoom for responsive nav-arrow
let lastZoomWidth = convertwidth;
let lastZoomHeight = convertheight;


    
    if (lastZoomWidth == 1500 && lastZoomHeight == 755.66) {
        // Vertical Button
        // get top css value onchange
        const verticalStyleMouse = document.getElementById("button-maps");
        verticalStyleMouse.addEventListener("mouseover", getValueVertical);

        const verticalStyleCss = document.getElementById("dragable-image");
        verticalStyleCss.addEventListener("transitionrun", getValueVertical);

        //last value for nav-arrow
        function getValueVertical() {
        const getValueVertical = document.getElementById("dragable-image");
        const verticalValue = getValueVertical.style.top;

        // const convert = parseFloat(getValue);
        const convertVertical = parseFloat(verticalValue);

        // preview convert
        //console.log(convertVertical);

            // move Up button
            const upObject = document.getElementById("dragable-image");
            const upButton = document.querySelector("div#vertical .up");

            upButton.addEventListener("click", moveUp);

            let upValue = convertVertical;
            function moveUp(e) {
            if ( convertVertical < 0 ) {
                upValue += 100;
                upObject.style.position = "absolute";
                upObject.style.transition = "top 1s";
                upObject.style.top = + upValue + "px";
                e.preventDefault();     //prevents the page from redirecting
                }
            //stop up
            else {
                upValue = 0;
                upObject.style.position = "absolute";
                upObject.style.transition = "top 1s";
                upObject.style.top = + upValue + "px";
                e.preventDefault();     //prevents the page from redirecting
                }
            }


            // move down button
            const downObject = document.getElementById("dragable-image");
            const downButton = document.querySelector("div#vertical .down");

            downButton.addEventListener("click", moveDown);

            let downValue = convertVertical;
            function moveDown(e) {
            if ( convertVertical > -100 ) {
                downValue -= 100;
                downObject.style.position = "absolute";
                downObject.style.transition = "top 1s";
                downObject.style.top = + downValue + "px";
                e.preventDefault();     //prevents the page from redirecting
                } 
            //stop down
            else {
                downValue -= 0;
                downObject.style.position = "absolute";
                downObject.style.transition = "top 1s";
                downObject.style.top = + downValue + "px";
                e.preventDefault();     //prevents the page from redirecting
                } 
            }
        }



        // Horizontal Button
        // get left css value onchange
        const horizontalStyleMouse = document.getElementById("button-maps");
        horizontalStyleMouse.addEventListener("mouseover", getValueHorizontal);

        const horizontalStyleCss = document.getElementById("dragable-image");
        horizontalStyleCss.addEventListener("transitionrun", getValueHorizontal);
            
        function getValueHorizontal() {
        const getValueHorizontal = document.getElementById("dragable-image");
        const horizontalValue = getValueHorizontal.style.left;


        // const convert = parseFloat(getValue);
        const convertHorizontal = parseFloat(horizontalValue);

        // preview convert
        //console.log(convertHorizontal);



            // move left button
            const leftObject = document.getElementById("dragable-image");
            const leftButton = document.querySelector("div#horizontal .left");

            leftButton.addEventListener("click", moveLeft);

            let leftValue = convertHorizontal;
            function moveLeft(e) {
            if ( convertHorizontal < 0 ) {
                leftValue += 100;
                leftObject.style.position = "absolute";
                leftObject.style.transition = "left 1s";
                leftObject.style.left = + leftValue + "px";
                e.preventDefault();     //prevents the page from redirecting
                }
            //stop left
            else {
                leftValue += 0;
                leftObject.style.position = "absolute";
                leftObject.style.transition = "left 1s";
                leftObject.style.left = + leftValue + "px";
                e.preventDefault();     //prevents the page from redirecting
                }
            }

            // move rigt button
            const rightObject = document.getElementById("dragable-image");
            const rightButton = document.querySelector("div#horizontal .right");

            rightButton.addEventListener("click", moveRight);

            let rightValue = convertHorizontal;
            function moveRight(e) {
            if ( convertHorizontal > -200 ) {
                rightValue -= 100;
                rightObject.style.position = "absolute";
                rightObject.style.transition = "left 1s";
                rightObject.style.left = + rightValue + "px";
                e.preventDefault();     //prevents the page from redirecting
                }
            // stop right
            else {
                rightValue -= 0;
                rightObject.style.position = "absolute";
                rightObject.style.transition = "left 1s";
                rightObject.style.left = + rightValue + "px";
                e.preventDefault();     //prevents the page from redirecting
                }
            }
        }
    }



    else if (lastZoomWidth == 2500 && lastZoomHeight == 1259.66) {
        // Vertical Button
        // get top css value onchange
        const verticalStyleMouse = document.getElementById("button-maps");
        verticalStyleMouse.addEventListener("mouseover", getValueVertical);

        const verticalStyleCss = document.getElementById("dragable-image");
        verticalStyleCss.addEventListener("transitionrun", getValueVertical);

        //last value for nav-arrow
        function getValueVertical() {
        const getValueVertical = document.getElementById("dragable-image");
        const verticalValue = getValueVertical.style.top;

        // const convert = parseFloat(getValue);
        const convertVertical = parseFloat(verticalValue);

        // preview convert
        //console.log(convertVertical);

            // move Up button
            const upObject = document.getElementById("dragable-image");
            const upButton = document.querySelector("div#vertical .up");

            upButton.addEventListener("click", moveUp);

            let upValue = convertVertical;
            function moveUp(e) {
            if ( convertVertical < 0 ) {
                upValue += 100;
                upObject.style.position = "absolute";
                upObject.style.transition = "top 1s";
                upObject.style.top = + upValue + "px";
                e.preventDefault();     //prevents the page from redirecting
                }
            //stop up
            else {
                upValue = 0;
                upObject.style.position = "absolute";
                upObject.style.transition = "top 1s";
                upObject.style.top = + upValue + "px";
                e.preventDefault();     //prevents the page from redirecting
                }
            }


            // move down button
            const downObject = document.getElementById("dragable-image");
            const downButton = document.querySelector("div#vertical .down");

            downButton.addEventListener("click", moveDown);

            let downValue = convertVertical;
            function moveDown(e) {
            if ( convertVertical > -600 ) {
                downValue -= 100;
                downObject.style.position = "absolute";
                downObject.style.transition = "top 1s";
                downObject.style.top = + downValue + "px";
                e.preventDefault();     //prevents the page from redirecting
                } 
            //stop down
            else {
                downValue -= 0;
                downObject.style.position = "absolute";
                downObject.style.transition = "top 1s";
                downObject.style.top = + downValue + "px";
                e.preventDefault();     //prevents the page from redirecting
                } 
            }
        }



        // Horizontal Button
        // get left css value onchange
        const horizontalStyleMouse = document.getElementById("button-maps");
        horizontalStyleMouse.addEventListener("mouseover", getValueHorizontal);

        const horizontalStyleCss = document.getElementById("dragable-image");
        horizontalStyleCss.addEventListener("transitionrun", getValueHorizontal);
            
        function getValueHorizontal() {
        const getValueHorizontal = document.getElementById("dragable-image");
        const horizontalValue = getValueHorizontal.style.left;


        // const convert = parseFloat(getValue);
        const convertHorizontal = parseFloat(horizontalValue);

        // preview convert
        //console.log(convertHorizontal);



            // move left button
            const leftObject = document.getElementById("dragable-image");
            const leftButton = document.querySelector("div#horizontal .left");

            leftButton.addEventListener("click", moveLeft);

            let leftValue = convertHorizontal;
            function moveLeft(e) {
            if ( convertHorizontal < 0 ) {
                leftValue += 100;
                leftObject.style.position = "absolute";
                leftObject.style.transition = "left 1s";
                leftObject.style.left = + leftValue + "px";
                e.preventDefault();     //prevents the page from redirecting
                }
            //stop left
            else {
                leftValue += 0;
                leftObject.style.position = "absolute";
                leftObject.style.transition = "left 1s";
                leftObject.style.left = + leftValue + "px";
                e.preventDefault();     //prevents the page from redirecting
                }
            }

            // move rigt button
            const rightObject = document.getElementById("dragable-image");
            const rightButton = document.querySelector("div#horizontal .right");

            rightButton.addEventListener("click", moveRight);

            let rightValue = convertHorizontal;
            function moveRight(e) {
            if ( convertHorizontal > -1200 ) {
                rightValue -= 100;
                rightObject.style.position = "absolute";
                rightObject.style.transition = "left 1s";
                rightObject.style.left = + rightValue + "px";
                e.preventDefault();     //prevents the page from redirecting
                }
            // stop right
            else {
                rightValue -= 0;
                rightObject.style.position = "absolute";
                rightObject.style.transition = "left 1s";
                rightObject.style.left = + rightValue + "px";
                e.preventDefault();     //prevents the page from redirecting
                }
            }
        }
    }


    else if (lastZoomWidth == 3500 && lastZoomHeight == 1763.21) {
        // Vertical Button
        // get top css value onchange
        const verticalStyleMouse = document.getElementById("button-maps");
        verticalStyleMouse.addEventListener("mouseover", getValueVertical);

        const verticalStyleCss = document.getElementById("dragable-image");
        verticalStyleCss.addEventListener("transitionrun", getValueVertical);

        //last value for nav-arrow
        function getValueVertical() {
        const getValueVertical = document.getElementById("dragable-image");
        const verticalValue = getValueVertical.style.top;

        // const convert = parseFloat(getValue);
        const convertVertical = parseFloat(verticalValue);

        // preview convert
        //console.log(convertVertical);

            // move Up button
            const upObject = document.getElementById("dragable-image");
            const upButton = document.querySelector("div#vertical .up");

            upButton.addEventListener("click", moveUp);

            let upValue = convertVertical;
            function moveUp(e) {
            if ( convertVertical < 0 ) {
                upValue += 100;
                upObject.style.position = "absolute";
                upObject.style.transition = "top 1s";
                upObject.style.top = + upValue + "px";
                e.preventDefault();     //prevents the page from redirecting
                }
            //stop up
            else {
                upValue = 0;
                upObject.style.position = "absolute";
                upObject.style.transition = "top 1s";
                upObject.style.top = + upValue + "px";
                e.preventDefault();     //prevents the page from redirecting
                }
            }


            // move down button
            const downObject = document.getElementById("dragable-image");
            const downButton = document.querySelector("div#vertical .down");

            downButton.addEventListener("click", moveDown);

            let downValue = convertVertical;
            function moveDown(e) {
            if ( convertVertical > -1100 ) {
                downValue -= 100;
                downObject.style.position = "absolute";
                downObject.style.transition = "top 1s";
                downObject.style.top = + downValue + "px";
                e.preventDefault();     //prevents the page from redirecting
                } 
            //stop down
            else {
                downValue -= 0;
                downObject.style.position = "absolute";
                downObject.style.transition = "top 1s";
                downObject.style.top = + downValue + "px";
                e.preventDefault();     //prevents the page from redirecting
                } 
            }
        }



        // Horizontal Button
        // get left css value onchange
        const horizontalStyleMouse = document.getElementById("button-maps");
        horizontalStyleMouse.addEventListener("mouseover", getValueHorizontal);

        const horizontalStyleCss = document.getElementById("dragable-image");
        horizontalStyleCss.addEventListener("transitionrun", getValueHorizontal);
            
        function getValueHorizontal() {
        const getValueHorizontal = document.getElementById("dragable-image");
        const horizontalValue = getValueHorizontal.style.left;


        // const convert = parseFloat(getValue);
        const convertHorizontal = parseFloat(horizontalValue);

        // preview convert
        //console.log(convertHorizontal);



            // move left button
            const leftObject = document.getElementById("dragable-image");
            const leftButton = document.querySelector("div#horizontal .left");

            leftButton.addEventListener("click", moveLeft);

            let leftValue = convertHorizontal;
            function moveLeft(e) {
            if ( convertHorizontal < 0 ) {
                leftValue += 100;
                leftObject.style.position = "absolute";
                leftObject.style.transition = "left 1s";
                leftObject.style.left = + leftValue + "px";
                e.preventDefault();     //prevents the page from redirecting
                }
            //stop left
            else {
                leftValue += 0;
                leftObject.style.position = "absolute";
                leftObject.style.transition = "left 1s";
                leftObject.style.left = + leftValue + "px";
                e.preventDefault();     //prevents the page from redirecting
                }
            }

            // move rigt button
            const rightObject = document.getElementById("dragable-image");
            const rightButton = document.querySelector("div#horizontal .right");

            rightButton.addEventListener("click", moveRight);

            let rightValue = convertHorizontal;
            function moveRight(e) {
            if ( convertHorizontal > -2200 ) {
                rightValue -= 100;
                rightObject.style.position = "absolute";
                rightObject.style.transition = "left 1s";
                rightObject.style.left = + rightValue + "px";
                e.preventDefault();     //prevents the page from redirecting
                }
            // stop right
            else {
                rightValue -= 0;
                rightObject.style.position = "absolute";
                rightObject.style.transition = "left 1s";
                rightObject.style.left = + rightValue + "px";
                e.preventDefault();     //prevents the page from redirecting
                }
            }
        }
    }





} //parent function close