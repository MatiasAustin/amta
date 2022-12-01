//tooltipHoverBooth1
$(document).ready(function() {
	
	var changeTooltipPosition = function(event) {
	  var tooltipX = event.pageX - 8;
	  var tooltipY = event.pageY + 8;
	  $('div.tooltip').css({top: tooltipY, left: tooltipX});
	};

	var showTooltip = function(event) {
	  $('div.tooltip').remove();
	  $('<div class="tooltip">\
            <div id="tooltip-booth1">\
                <div id=tooltip-logo>\
                    <img src="tool_tip/{{ $toolTip_1 }}" style="width:150px; height: auto;">\
                </div>\
                <span id="line-break">___________________</span>\
                <h5 id=tooltip-title style="margin-top: 10px;">\
				  {{ $company_1 }} \
                </h5>\
                <p id="tooltip-desc" style="margin-top: 10px; font-size: 10px; font-weight: 300; letter-spacing: 0.3px; line-break: normal;">\
					{{{ $desc_1 }}}\
                </p>\
            </div>\
        </div>')
            .appendTo('body');
	  changeTooltipPosition(event);
	};

	var hideTooltip = function() {
	   $('div.tooltip').remove();
	};

	$("div#booth1 a").bind({
	   mousemove : changeTooltipPosition,
	   mouseenter : showTooltip,
	   mouseleave: hideTooltip
	});
});

//tooltipHoverBooth2
$(document).ready(function() {
	
	var changeTooltipPosition = function(event) {
	  var tooltipX = event.pageX - 8;
	  var tooltipY = event.pageY + 8;
	  $('div.tooltip').css({top: tooltipY, left: tooltipX});
	};

	var showTooltip = function(event) {
	  $('div.tooltip').remove();
	  $('<div class="tooltip">\
            <div id="tooltip-booth1">\
                <div id=tooltip-logo>\
                    <img src="img/partner logo.png" style="width:150px; height: auto;">\
                </div>\
                <span id="line-break">___________________</span>\
                <h5 id=tooltip-title style="margin-top: 10px;">\
                    Lorem ipsum\
                </h5>\
                <p id="tooltip-desc" style="margin-top: 10px; font-size: 10px; font-weight: 300; letter-spacing: 0.3px; line-break: normal;">\
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec faucibus accumsan neque, cursus mattis urna laoreet nec. Etiam ullamcorper egestas lacus a lobortis.\
                </p>\
            </div>\
        </div>')
            .appendTo('body');
	  changeTooltipPosition(event);
	};

	var hideTooltip = function() {
	   $('div.tooltip').remove();
	};

	$("div#booth2 a").bind({
	   mousemove : changeTooltipPosition,
	   mouseenter : showTooltip,
	   mouseleave: hideTooltip
	});
});


//tooltipHoverBooth3
$(document).ready(function() {
	
	var changeTooltipPosition = function(event) {
	  var tooltipX = event.pageX - 8;
	  var tooltipY = event.pageY + 8;
	  $('div.tooltip').css({top: tooltipY, left: tooltipX});
	};

	var showTooltip = function(event) {
	  $('div.tooltip').remove();
	  $('<div class="tooltip">\
            <div id="tooltip-booth1">\
                <div id=tooltip-logo>\
                    <img src="img/partner logo.png" style="width:150px; height: auto;">\
                </div>\
                <span id="line-break">___________________</span>\
                <h5 id=tooltip-title style="margin-top: 10px;">\
                    Lorem ipsum\
                </h5>\
                <p id="tooltip-desc" style="margin-top: 10px; font-size: 10px; font-weight: 300; letter-spacing: 0.3px; line-break: normal;">\
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec faucibus accumsan neque, cursus mattis urna laoreet nec. Etiam ullamcorper egestas lacus a lobortis.\
                </p>\
            </div>\
        </div>')
            .appendTo('body');
	  changeTooltipPosition(event);
	};

	var hideTooltip = function() {
	   $('div.tooltip').remove();
	};

	$("div#booth3 a").bind({
	   mousemove : changeTooltipPosition,
	   mouseenter : showTooltip,
	   mouseleave: hideTooltip
	});
});

//tooltipHoverBooth4
$(document).ready(function() {
	
	var changeTooltipPosition = function(event) {
	  var tooltipX = event.pageX - 8;
	  var tooltipY = event.pageY + 8;
	  $('div.tooltip').css({top: tooltipY, left: tooltipX});
	};

	var showTooltip = function(event) {
	  $('div.tooltip').remove();
	  $('<div class="tooltip">\
            <div id="tooltip-booth1">\
                <div id=tooltip-logo>\
                    <img src="img/partner logo.png" style="width:150px; height: auto;">\
                </div>\
                <span id="line-break">___________________</span>\
                <h5 id=tooltip-title style="margin-top: 10px;">\
                    Lorem ipsum\
                </h5>\
                <p id="tooltip-desc" style="margin-top: 10px; font-size: 10px; font-weight: 300; letter-spacing: 0.3px; line-break: normal;">\
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec faucibus accumsan neque, cursus mattis urna laoreet nec. Etiam ullamcorper egestas lacus a lobortis.\
                </p>\
            </div>\
        </div>')
            .appendTo('body');
	  changeTooltipPosition(event);
	};

	var hideTooltip = function() {
	   $('div.tooltip').remove();
	};

	$("div#booth4 a").bind({
	   mousemove : changeTooltipPosition,
	   mouseenter : showTooltip,
	   mouseleave: hideTooltip
	});
});


//tooltipHoverBooth5
$(document).ready(function() {
	
	var changeTooltipPosition = function(event) {
	  var tooltipX = event.pageX - 8;
	  var tooltipY = event.pageY + 8;
	  $('div.tooltip').css({top: tooltipY, left: tooltipX});
	};

	var showTooltip = function(event) {
	  $('div.tooltip').remove();
	  $('<div class="tooltip">\
            <div id="tooltip-booth1">\
                <div id=tooltip-logo>\
                    <img src="img/partner logo.png" style="width:150px; height: auto;">\
                </div>\
                <span id="line-break">___________________</span>\
                <h5 id=tooltip-title style="margin-top: 10px;">\
                    Lorem ipsum\
                </h5>\
                <p id="tooltip-desc" style="margin-top: 10px; font-size: 10px; font-weight: 300; letter-spacing: 0.3px; line-break: normal;">\
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec faucibus accumsan neque, cursus mattis urna laoreet nec. Etiam ullamcorper egestas lacus a lobortis.\
                </p>\
            </div>\
        </div>')
            .appendTo('body');
	  changeTooltipPosition(event);
	};

	var hideTooltip = function() {
	   $('div.tooltip').remove();
	};

	$("div#booth5 a").bind({
	   mousemove : changeTooltipPosition,
	   mouseenter : showTooltip,
	   mouseleave: hideTooltip
	});
});


//tooltipHoverBooth6
$(document).ready(function() {
	
	var changeTooltipPosition = function(event) {
	  var tooltipX = event.pageX - 8;
	  var tooltipY = event.pageY + 8;
	  $('div.tooltip').css({top: tooltipY, left: tooltipX});
	};

	var showTooltip = function(event) {
	  $('div.tooltip').remove();
	  $('<div class="tooltip">\
            <div id="tooltip-booth1">\
                <div id=tooltip-logo>\
                    <img src="img/partner logo.png" style="width:150px; height: auto;">\
                </div>\
                <span id="line-break">___________________</span>\
                <h5 id=tooltip-title style="margin-top: 10px;">\
                    Lorem ipsum\
                </h5>\
                <p id="tooltip-desc" style="margin-top: 10px; font-size: 10px; font-weight: 300; letter-spacing: 0.3px; line-break: normal;">\
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec faucibus accumsan neque, cursus mattis urna laoreet nec. Etiam ullamcorper egestas lacus a lobortis.\
                </p>\
            </div>\
        </div>')
            .appendTo('body');
	  changeTooltipPosition(event);
	};

	var hideTooltip = function() {
	   $('div.tooltip').remove();
	};

	$("div#booth6 a").bind({
	   mousemove : changeTooltipPosition,
	   mouseenter : showTooltip,
	   mouseleave: hideTooltip
	});
});

//tooltipHoverBooth7
$(document).ready(function() {
	
	var changeTooltipPosition = function(event) {
	  var tooltipX = event.pageX - 8;
	  var tooltipY = event.pageY + 8;
	  $('div.tooltip').css({top: tooltipY, left: tooltipX});
	};

	var showTooltip = function(event) {
	  $('div.tooltip').remove();
	  $('<div class="tooltip">\
            <div id="tooltip-booth1">\
                <div id=tooltip-logo>\
                    <img src="img/partner logo.png" style="width:150px; height: auto;">\
                </div>\
                <span id="line-break">___________________</span>\
                <h5 id=tooltip-title style="margin-top: 10px;">\
                    Lorem ipsum\
                </h5>\
                <p id="tooltip-desc" style="margin-top: 10px; font-size: 10px; font-weight: 300; letter-spacing: 0.3px; line-break: normal;">\
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec faucibus accumsan neque, cursus mattis urna laoreet nec. Etiam ullamcorper egestas lacus a lobortis.\
                </p>\
            </div>\
        </div>')
            .appendTo('body');
	  changeTooltipPosition(event);
	};

	var hideTooltip = function() {
	   $('div.tooltip').remove();
	};

	$("div#booth7 a").bind({
	   mousemove : changeTooltipPosition,
	   mouseenter : showTooltip,
	   mouseleave: hideTooltip
	});
});


//tooltipHoverBooth8
$(document).ready(function() {
	
	var changeTooltipPosition = function(event) {
	  var tooltipX = event.pageX - 8;
	  var tooltipY = event.pageY + 8;
	  $('div.tooltip').css({top: tooltipY, left: tooltipX});
	};

	var showTooltip = function(event) {
	  $('div.tooltip').remove();
	  $('<div class="tooltip">\
            <div id="tooltip-booth1">\
                <div id=tooltip-logo>\
                    <img src="img/partner logo.png" style="width:150px; height: auto;">\
                </div>\
                <span id="line-break">___________________</span>\
                <h5 id=tooltip-title style="margin-top: 10px;">\
                    Lorem ipsum\
                </h5>\
                <p id="tooltip-desc" style="margin-top: 10px; font-size: 10px; font-weight: 300; letter-spacing: 0.3px; line-break: normal;">\
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec faucibus accumsan neque, cursus mattis urna laoreet nec. Etiam ullamcorper egestas lacus a lobortis.\
                </p>\
            </div>\
        </div>')
            .appendTo('body');
	  changeTooltipPosition(event);
	};

	var hideTooltip = function() {
	   $('div.tooltip').remove();
	};

	$("div#booth8 a").bind({
	   mousemove : changeTooltipPosition,
	   mouseenter : showTooltip,
	   mouseleave: hideTooltip
	});
});


//tooltipHoverBooth9
$(document).ready(function() {
	
	var changeTooltipPosition = function(event) {
	  var tooltipX = event.pageX - 8;
	  var tooltipY = event.pageY + 8;
	  $('div.tooltip').css({top: tooltipY, left: tooltipX});
	};

	var showTooltip = function(event) {
	  $('div.tooltip').remove();
	  $('<div class="tooltip">\
            <div id="tooltip-booth1">\
                <div id=tooltip-logo>\
                    <img src="img/partner logo.png" style="width:150px; height: auto;">\
                </div>\
                <span id="line-break">___________________</span>\
                <h5 id=tooltip-title style="margin-top: 10px;">\
                    Lorem ipsum\
                </h5>\
                <p id="tooltip-desc" style="margin-top: 10px; font-size: 10px; font-weight: 300; letter-spacing: 0.3px; line-break: normal;">\
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec faucibus accumsan neque, cursus mattis urna laoreet nec. Etiam ullamcorper egestas lacus a lobortis.\
                </p>\
            </div>\
        </div>')
            .appendTo('body');
	  changeTooltipPosition(event);
	};

	var hideTooltip = function() {
	   $('div.tooltip').remove();
	};

	$("div#booth9 a").bind({
	   mousemove : changeTooltipPosition,
	   mouseenter : showTooltip,
	   mouseleave: hideTooltip
	});
});


//tooltipHoverBooth10
$(document).ready(function() {
	
	var changeTooltipPosition = function(event) {
	  var tooltipX = event.pageX - 8;
	  var tooltipY = event.pageY + 8;
	  $('div.tooltip').css({top: tooltipY, left: tooltipX});
	};

	var showTooltip = function(event) {
	  $('div.tooltip').remove();
	  $('<div class="tooltip">\
            <div id="tooltip-booth1">\
                <div id=tooltip-logo>\
                    <img src="img/partner logo.png" style="width:150px; height: auto;">\
                </div>\
                <span id="line-break">___________________</span>\
                <h5 id=tooltip-title style="margin-top: 10px;">\
                    Lorem ipsum\
                </h5>\
                <p id="tooltip-desc" style="margin-top: 10px; font-size: 10px; font-weight: 300; letter-spacing: 0.3px; line-break: normal;">\
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec faucibus accumsan neque, cursus mattis urna laoreet nec. Etiam ullamcorper egestas lacus a lobortis.\
                </p>\
            </div>\
        </div>')
            .appendTo('body');
	  changeTooltipPosition(event);
	};

	var hideTooltip = function() {
	   $('div.tooltip').remove();
	};

	$("div#booth10 a").bind({
	   mousemove : changeTooltipPosition,
	   mouseenter : showTooltip,
	   mouseleave: hideTooltip
	});
});

//tooltipHoverBooth11
$(document).ready(function() {
	
	var changeTooltipPosition = function(event) {
	  var tooltipX = event.pageX - 8;
	  var tooltipY = event.pageY + 8;
	  $('div.tooltip').css({top: tooltipY, left: tooltipX});
	};

	var showTooltip = function(event) {
	  $('div.tooltip').remove();
	  $('<div class="tooltip">\
            <div id="tooltip-booth1">\
                <div id=tooltip-logo>\
                    <img src="img/partner logo.png" style="width:150px; height: auto;">\
                </div>\
                <span id="line-break">___________________</span>\
                <h5 id=tooltip-title style="margin-top: 10px;">\
                    Lorem ipsum\
                </h5>\
                <p id="tooltip-desc" style="margin-top: 10px; font-size: 10px; font-weight: 300; letter-spacing: 0.3px; line-break: normal;">\
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec faucibus accumsan neque, cursus mattis urna laoreet nec. Etiam ullamcorper egestas lacus a lobortis.\
                </p>\
            </div>\
        </div>')
            .appendTo('body');
	  changeTooltipPosition(event);
	};

	var hideTooltip = function() {
	   $('div.tooltip').remove();
	};

	$("div#booth11 a").bind({
	   mousemove : changeTooltipPosition,
	   mouseenter : showTooltip,
	   mouseleave: hideTooltip
	});
});


//tooltipHoverBooth12
$(document).ready(function() {
	
	var changeTooltipPosition = function(event) {
	  var tooltipX = event.pageX - 8;
	  var tooltipY = event.pageY + 8;
	  $('div.tooltip').css({top: tooltipY, left: tooltipX});
	};

	var showTooltip = function(event) {
	  $('div.tooltip').remove();
	  $('<div class="tooltip">\
            <div id="tooltip-booth1">\
                <div id=tooltip-logo>\
                    <img src="img/partner logo.png" style="width:150px; height: auto;">\
                </div>\
                <span id="line-break">___________________</span>\
                <h5 id=tooltip-title style="margin-top: 10px;">\
                    Lorem ipsum\
                </h5>\
                <p id="tooltip-desc" style="margin-top: 10px; font-size: 10px; font-weight: 300; letter-spacing: 0.3px; line-break: normal;">\
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec faucibus accumsan neque, cursus mattis urna laoreet nec. Etiam ullamcorper egestas lacus a lobortis.\
                </p>\
            </div>\
        </div>')
            .appendTo('body');
	  changeTooltipPosition(event);
	};

	var hideTooltip = function() {
	   $('div.tooltip').remove();
	};

	$("div#booth12 a").bind({
	   mousemove : changeTooltipPosition,
	   mouseenter : showTooltip,
	   mouseleave: hideTooltip
	});
});


//tooltipHoverBooth13
$(document).ready(function() {
	
	var changeTooltipPosition = function(event) {
	  var tooltipX = event.pageX - 8;
	  var tooltipY = event.pageY + 8;
	  $('div.tooltip').css({top: tooltipY, left: tooltipX});
	};

	var showTooltip = function(event) {
	  $('div.tooltip').remove();
	  $('<div class="tooltip">\
            <div id="tooltip-booth1">\
                <div id=tooltip-logo>\
                    <img src="img/partner logo.png" style="width:150px; height: auto;">\
                </div>\
                <span id="line-break">___________________</span>\
                <h5 id=tooltip-title style="margin-top: 10px;">\
                    Lorem ipsum\
                </h5>\
                <p id="tooltip-desc" style="margin-top: 10px; font-size: 10px; font-weight: 300; letter-spacing: 0.3px; line-break: normal;">\
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec faucibus accumsan neque, cursus mattis urna laoreet nec. Etiam ullamcorper egestas lacus a lobortis.\
                </p>\
            </div>\
        </div>')
            .appendTo('body');
	  changeTooltipPosition(event);
	};

	var hideTooltip = function() {
	   $('div.tooltip').remove();
	};

	$("div#booth13 a").bind({
	   mousemove : changeTooltipPosition,
	   mouseenter : showTooltip,
	   mouseleave: hideTooltip
	});
});


//tooltipHoverBooth14
$(document).ready(function() {
	
	var changeTooltipPosition = function(event) {
	  var tooltipX = event.pageX - 8;
	  var tooltipY = event.pageY + 8;
	  $('div.tooltip').css({top: tooltipY, left: tooltipX});
	};

	var showTooltip = function(event) {
	  $('div.tooltip').remove();
	  $('<div class="tooltip">\
            <div id="tooltip-booth1">\
                <div id=tooltip-logo>\
                    <img src="img/partner logo.png" style="width:150px; height: auto;">\
                </div>\
                <span id="line-break">___________________</span>\
                <h5 id=tooltip-title style="margin-top: 10px;">\
                    Lorem ipsum\
                </h5>\
                <p id="tooltip-desc" style="margin-top: 10px; font-size: 10px; font-weight: 300; letter-spacing: 0.3px; line-break: normal;">\
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec faucibus accumsan neque, cursus mattis urna laoreet nec. Etiam ullamcorper egestas lacus a lobortis.\
                </p>\
            </div>\
        </div>')
            .appendTo('body');
	  changeTooltipPosition(event);
	};

	var hideTooltip = function() {
	   $('div.tooltip').remove();
	};

	$("div#booth14 a").bind({
	   mousemove : changeTooltipPosition,
	   mouseenter : showTooltip,
	   mouseleave: hideTooltip
	});
});



//tooltipHoverBooth15
$(document).ready(function() {
	
	var changeTooltipPosition = function(event) {
	  var tooltipX = event.pageX - 8;
	  var tooltipY = event.pageY + 8;
	  $('div.tooltip').css({top: tooltipY, left: tooltipX});
	};

	var showTooltip = function(event) {
	  $('div.tooltip').remove();
	  $('<div class="tooltip">\
            <div id="tooltip-booth1">\
                <div id=tooltip-logo>\
                    <img src="img/partner logo.png" style="width:150px; height: auto;">\
                </div>\
                <span id="line-break">___________________</span>\
                <h5 id=tooltip-title style="margin-top: 10px;">\
                    Lorem ipsum\
                </h5>\
                <p id="tooltip-desc" style="margin-top: 10px; font-size: 10px; font-weight: 300; letter-spacing: 0.3px; line-break: normal;">\
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec faucibus accumsan neque, cursus mattis urna laoreet nec. Etiam ullamcorper egestas lacus a lobortis.\
                </p>\
            </div>\
        </div>')
            .appendTo('body');
	  changeTooltipPosition(event);
	};

	var hideTooltip = function() {
	   $('div.tooltip').remove();
	};

	$("div#booth15 a").bind({
	   mousemove : changeTooltipPosition,
	   mouseenter : showTooltip,
	   mouseleave: hideTooltip
	});
});


//tooltipHoverBooth16
$(document).ready(function() {
	
	var changeTooltipPosition = function(event) {
	  var tooltipX = event.pageX - 8;
	  var tooltipY = event.pageY + 8;
	  $('div.tooltip').css({top: tooltipY, left: tooltipX});
	};

	var showTooltip = function(event) {
	  $('div.tooltip').remove();
	  $('<div class="tooltip">\
            <div id="tooltip-booth1">\
                <div id=tooltip-logo>\
                    <img src="img/partner logo.png" style="width:150px; height: auto;">\
                </div>\
                <span id="line-break">___________________</span>\
                <h5 id=tooltip-title style="margin-top: 10px;">\
                    Lorem ipsum\
                </h5>\
                <p id="tooltip-desc" style="margin-top: 10px; font-size: 10px; font-weight: 300; letter-spacing: 0.3px; line-break: normal;">\
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec faucibus accumsan neque, cursus mattis urna laoreet nec. Etiam ullamcorper egestas lacus a lobortis.\
                </p>\
            </div>\
        </div>')
            .appendTo('body');
	  changeTooltipPosition(event);
	};

	var hideTooltip = function() {
	   $('div.tooltip').remove();
	};

	$("div#booth16 a").bind({
	   mousemove : changeTooltipPosition,
	   mouseenter : showTooltip,
	   mouseleave: hideTooltip
	});
});


//tooltipHoverBooth17
$(document).ready(function() {
	
	var changeTooltipPosition = function(event) {
	  var tooltipX = event.pageX - 8;
	  var tooltipY = event.pageY + 8;
	  $('div.tooltip').css({top: tooltipY, left: tooltipX});
	};

	var showTooltip = function(event) {
	  $('div.tooltip').remove();
	  $('<div class="tooltip">\
            <div id="tooltip-booth1">\
                <div id=tooltip-logo>\
                    <img src="img/partner logo.png" style="width:150px; height: auto;">\
                </div>\
                <span id="line-break">___________________</span>\
                <h5 id=tooltip-title style="margin-top: 10px;">\
                    Lorem ipsum\
                </h5>\
                <p id="tooltip-desc" style="margin-top: 10px; font-size: 10px; font-weight: 300; letter-spacing: 0.3px; line-break: normal;">\
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec faucibus accumsan neque, cursus mattis urna laoreet nec. Etiam ullamcorper egestas lacus a lobortis.\
                </p>\
            </div>\
        </div>')
            .appendTo('body');
	  changeTooltipPosition(event);
	};

	var hideTooltip = function() {
	   $('div.tooltip').remove();
	};

	$("div#booth17 a").bind({
	   mousemove : changeTooltipPosition,
	   mouseenter : showTooltip,
	   mouseleave: hideTooltip
	});
});


//tooltipHoverBooth18
$(document).ready(function() {
	
	var changeTooltipPosition = function(event) {
	  var tooltipX = event.pageX - 8;
	  var tooltipY = event.pageY + 8;
	  $('div.tooltip').css({top: tooltipY, left: tooltipX});
	};

	var showTooltip = function(event) {
	  $('div.tooltip').remove();
	  $('<div class="tooltip">\
            <div id="tooltip-booth1">\
                <div id=tooltip-logo>\
                    <img src="img/partner logo.png" style="width:150px; height: auto;">\
                </div>\
                <span id="line-break">___________________</span>\
                <h5 id=tooltip-title style="margin-top: 10px;">\
                    Lorem ipsum\
                </h5>\
                <p id="tooltip-desc" style="margin-top: 10px; font-size: 10px; font-weight: 300; letter-spacing: 0.3px; line-break: normal;">\
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec faucibus accumsan neque, cursus mattis urna laoreet nec. Etiam ullamcorper egestas lacus a lobortis.\
                </p>\
            </div>\
        </div>')
            .appendTo('body');
	  changeTooltipPosition(event);
	};

	var hideTooltip = function() {
	   $('div.tooltip').remove();
	};

	$("div#booth18 a").bind({
	   mousemove : changeTooltipPosition,
	   mouseenter : showTooltip,
	   mouseleave: hideTooltip
	});
});


//tooltipHoverBooth19
$(document).ready(function() {
	
	var changeTooltipPosition = function(event) {
	  var tooltipX = event.pageX - 8;
	  var tooltipY = event.pageY + 8;
	  $('div.tooltip').css({top: tooltipY, left: tooltipX});
	};

	var showTooltip = function(event) {
	  $('div.tooltip').remove();
	  $('<div class="tooltip">\
            <div id="tooltip-booth1">\
                <div id=tooltip-logo>\
                    <img src="img/partner logo.png" style="width:150px; height: auto;">\
                </div>\
                <span id="line-break">___________________</span>\
                <h5 id=tooltip-title style="margin-top: 10px;">\
                    Lorem ipsum\
                </h5>\
                <p id="tooltip-desc" style="margin-top: 10px; font-size: 10px; font-weight: 300; letter-spacing: 0.3px; line-break: normal;">\
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec faucibus accumsan neque, cursus mattis urna laoreet nec. Etiam ullamcorper egestas lacus a lobortis.\
                </p>\
            </div>\
        </div>')
            .appendTo('body');
	  changeTooltipPosition(event);
	};

	var hideTooltip = function() {
	   $('div.tooltip').remove();
	};

	$("div#booth19 a").bind({
	   mousemove : changeTooltipPosition,
	   mouseenter : showTooltip,
	   mouseleave: hideTooltip
	});
});


//tooltipHoverBooth20
$(document).ready(function() {
	
	var changeTooltipPosition = function(event) {
	  var tooltipX = event.pageX - 8;
	  var tooltipY = event.pageY + 8;
	  $('div.tooltip').css({top: tooltipY, left: tooltipX});
	};

	var showTooltip = function(event) {
	  $('div.tooltip').remove();
	  $('<div class="tooltip">\
            <div id="tooltip-booth1">\
                <div id=tooltip-logo>\
                    <img src="img/partner logo.png" style="width:150px; height: auto;">\
                </div>\
                <span id="line-break">___________________</span>\
                <h5 id=tooltip-title style="margin-top: 10px;">\
                    Lorem ipsum\
                </h5>\
                <p id="tooltip-desc" style="margin-top: 10px; font-size: 10px; font-weight: 300; letter-spacing: 0.3px; line-break: normal;">\
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec faucibus accumsan neque, cursus mattis urna laoreet nec. Etiam ullamcorper egestas lacus a lobortis.\
                </p>\
            </div>\
        </div>')
            .appendTo('body');
	  changeTooltipPosition(event);
	};

	var hideTooltip = function() {
	   $('div.tooltip').remove();
	};

	$("div#booth20 a").bind({
	   mousemove : changeTooltipPosition,
	   mouseenter : showTooltip,
	   mouseleave: hideTooltip
	});
});


//tooltipHoverBooth21
$(document).ready(function() {
	
	var changeTooltipPosition = function(event) {
	  var tooltipX = event.pageX - 8;
	  var tooltipY = event.pageY + 8;
	  $('div.tooltip').css({top: tooltipY, left: tooltipX});
	};

	var showTooltip = function(event) {
	  $('div.tooltip').remove();
	  $('<div class="tooltip">\
            <div id="tooltip-booth1">\
                <div id=tooltip-logo>\
                    <img src="img/partner logo.png" style="width:150px; height: auto;">\
                </div>\
                <span id="line-break">___________________</span>\
                <h5 id=tooltip-title style="margin-top: 10px;">\
                    Lorem ipsum\
                </h5>\
                <p id="tooltip-desc" style="margin-top: 10px; font-size: 10px; font-weight: 300; letter-spacing: 0.3px; line-break: normal;">\
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec faucibus accumsan neque, cursus mattis urna laoreet nec. Etiam ullamcorper egestas lacus a lobortis.\
                </p>\
            </div>\
        </div>')
            .appendTo('body');
	  changeTooltipPosition(event);
	};

	var hideTooltip = function() {
	   $('div.tooltip').remove();
	};

	$("div#booth21 a").bind({
	   mousemove : changeTooltipPosition,
	   mouseenter : showTooltip,
	   mouseleave: hideTooltip
	});
});


//tooltipHoverBooth22
$(document).ready(function() {
	
	var changeTooltipPosition = function(event) {
	  var tooltipX = event.pageX - 8;
	  var tooltipY = event.pageY + 8;
	  $('div.tooltip').css({top: tooltipY, left: tooltipX});
	};

	var showTooltip = function(event) {
	  $('div.tooltip').remove();
	  $('<div class="tooltip">\
            <div id="tooltip-booth1">\
                <div id=tooltip-logo>\
                    <img src="img/partner logo.png" style="width:150px; height: auto;">\
                </div>\
                <span id="line-break">___________________</span>\
                <h5 id=tooltip-title style="margin-top: 10px;">\
                    Lorem ipsum\
                </h5>\
                <p id="tooltip-desc" style="margin-top: 10px; font-size: 10px; font-weight: 300; letter-spacing: 0.3px; line-break: normal;">\
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec faucibus accumsan neque, cursus mattis urna laoreet nec. Etiam ullamcorper egestas lacus a lobortis.\
                </p>\
            </div>\
        </div>')
            .appendTo('body');
	  changeTooltipPosition(event);
	};

	var hideTooltip = function() {
	   $('div.tooltip').remove();
	};

	$("div#booth22 a").bind({
	   mousemove : changeTooltipPosition,
	   mouseenter : showTooltip,
	   mouseleave: hideTooltip
	});
});


//tooltipHoverBooth23
$(document).ready(function() {
	
	var changeTooltipPosition = function(event) {
	  var tooltipX = event.pageX - 8;
	  var tooltipY = event.pageY + 8;
	  $('div.tooltip').css({top: tooltipY, left: tooltipX});
	};

	var showTooltip = function(event) {
	  $('div.tooltip').remove();
	  $('<div class="tooltip">\
            <div id="tooltip-booth1">\
                <div id=tooltip-logo>\
                    <img src="img/partner logo.png" style="width:150px; height: auto;">\
                </div>\
                <span id="line-break">___________________</span>\
                <h5 id=tooltip-title style="margin-top: 10px;">\
                    Lorem ipsum\
                </h5>\
                <p id="tooltip-desc" style="margin-top: 10px; font-size: 10px; font-weight: 300; letter-spacing: 0.3px; line-break: normal;">\
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec faucibus accumsan neque, cursus mattis urna laoreet nec. Etiam ullamcorper egestas lacus a lobortis.\
                </p>\
            </div>\
        </div>')
            .appendTo('body');
	  changeTooltipPosition(event);
	};

	var hideTooltip = function() {
	   $('div.tooltip').remove();
	};

	$("div#booth23 a").bind({
	   mousemove : changeTooltipPosition,
	   mouseenter : showTooltip,
	   mouseleave: hideTooltip
	});
});


//tooltipHoverBooth24
$(document).ready(function() {
	
	var changeTooltipPosition = function(event) {
	  var tooltipX = event.pageX - 8;
	  var tooltipY = event.pageY + 8;
	  $('div.tooltip').css({top: tooltipY, left: tooltipX});
	};

	var showTooltip = function(event) {
	  $('div.tooltip').remove();
	  $('<div class="tooltip">\
            <div id="tooltip-booth1">\
                <div id=tooltip-logo>\
                    <img src="img/partner logo.png" style="width:150px; height: auto;">\
                </div>\
                <span id="line-break">___________________</span>\
                <h5 id=tooltip-title style="margin-top: 10px;">\
                    Lorem ipsum\
                </h5>\
                <p id="tooltip-desc" style="margin-top: 10px; font-size: 10px; font-weight: 300; letter-spacing: 0.3px; line-break: normal;">\
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec faucibus accumsan neque, cursus mattis urna laoreet nec. Etiam ullamcorper egestas lacus a lobortis.\
                </p>\
            </div>\
        </div>')
            .appendTo('body');
	  changeTooltipPosition(event);
	};

	var hideTooltip = function() {
	   $('div.tooltip').remove();
	};

	$("div#booth24 a").bind({
	   mousemove : changeTooltipPosition,
	   mouseenter : showTooltip,
	   mouseleave: hideTooltip
	});
});


//tooltipHoverBooth25
$(document).ready(function() {
	
	var changeTooltipPosition = function(event) {
	  var tooltipX = event.pageX - 8;
	  var tooltipY = event.pageY + 8;
	  $('div.tooltip').css({top: tooltipY, left: tooltipX});
	};

	var showTooltip = function(event) {
	  $('div.tooltip').remove();
	  $('<div class="tooltip">\
            <div id="tooltip-booth1">\
                <div id=tooltip-logo>\
                    <img src="img/partner logo.png" style="width:150px; height: auto;">\
                </div>\
                <span id="line-break">___________________</span>\
                <h5 id=tooltip-title style="margin-top: 10px;">\
                    Lorem ipsum\
                </h5>\
                <p id="tooltip-desc" style="margin-top: 10px; font-size: 10px; font-weight: 300; letter-spacing: 0.3px; line-break: normal;">\
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec faucibus accumsan neque, cursus mattis urna laoreet nec. Etiam ullamcorper egestas lacus a lobortis.\
                </p>\
            </div>\
        </div>')
            .appendTo('body');
	  changeTooltipPosition(event);
	};

	var hideTooltip = function() {
	   $('div.tooltip').remove();
	};

	$("div#booth25 a").bind({
	   mousemove : changeTooltipPosition,
	   mouseenter : showTooltip,
	   mouseleave: hideTooltip
	});
});


//tooltipHoverBooth26
$(document).ready(function() {
	
	var changeTooltipPosition = function(event) {
	  var tooltipX = event.pageX - 8;
	  var tooltipY = event.pageY + 8;
	  $('div.tooltip').css({top: tooltipY, left: tooltipX});
	};

	var showTooltip = function(event) {
	  $('div.tooltip').remove();
	  $('<div class="tooltip">\
            <div id="tooltip-booth1">\
                <div id=tooltip-logo>\
                    <img src="img/partner logo.png" style="width:150px; height: auto;">\
                </div>\
                <span id="line-break">___________________</span>\
                <h5 id=tooltip-title style="margin-top: 10px;">\
                    Lorem ipsum\
                </h5>\
                <p id="tooltip-desc" style="margin-top: 10px; font-size: 10px; font-weight: 300; letter-spacing: 0.3px; line-break: normal;">\
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec faucibus accumsan neque, cursus mattis urna laoreet nec. Etiam ullamcorper egestas lacus a lobortis.\
                </p>\
            </div>\
        </div>')
            .appendTo('body');
	  changeTooltipPosition(event);
	};

	var hideTooltip = function() {
	   $('div.tooltip').remove();
	};

	$("div#booth26 a").bind({
	   mousemove : changeTooltipPosition,
	   mouseenter : showTooltip,
	   mouseleave: hideTooltip
	});
});


//tooltipHoverBooth27
$(document).ready(function() {
	
	var changeTooltipPosition = function(event) {
	  var tooltipX = event.pageX - 8;
	  var tooltipY = event.pageY + 8;
	  $('div.tooltip').css({top: tooltipY, left: tooltipX});
	};

	var showTooltip = function(event) {
	  $('div.tooltip').remove();
	  $('<div class="tooltip">\
            <div id="tooltip-booth1">\
                <div id=tooltip-logo>\
                    <img src="img/partner logo.png" style="width:150px; height: auto;">\
                </div>\
                <span id="line-break">___________________</span>\
                <h5 id=tooltip-title style="margin-top: 10px;">\
                    Lorem ipsum\
                </h5>\
                <p id="tooltip-desc" style="margin-top: 10px; font-size: 10px; font-weight: 300; letter-spacing: 0.3px; line-break: normal;">\
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec faucibus accumsan neque, cursus mattis urna laoreet nec. Etiam ullamcorper egestas lacus a lobortis.\
                </p>\
            </div>\
        </div>')
            .appendTo('body');
	  changeTooltipPosition(event);
	};

	var hideTooltip = function() {
	   $('div.tooltip').remove();
	};

	$("div#booth27 a").bind({
	   mousemove : changeTooltipPosition,
	   mouseenter : showTooltip,
	   mouseleave: hideTooltip
	});
});


//tooltipHoverBooth28
$(document).ready(function() {
	
	var changeTooltipPosition = function(event) {
	  var tooltipX = event.pageX - 8;
	  var tooltipY = event.pageY + 8;
	  $('div.tooltip').css({top: tooltipY, left: tooltipX});
	};

	var showTooltip = function(event) {
	  $('div.tooltip').remove();
	  $('<div class="tooltip">\
            <div id="tooltip-booth1">\
                <div id=tooltip-logo>\
                    <img src="img/partner logo.png" style="width:150px; height: auto;">\
                </div>\
                <span id="line-break">___________________</span>\
                <h5 id=tooltip-title style="margin-top: 10px;">\
                    Lorem ipsum\
                </h5>\
                <p id="tooltip-desc" style="margin-top: 10px; font-size: 10px; font-weight: 300; letter-spacing: 0.3px; line-break: normal;">\
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec faucibus accumsan neque, cursus mattis urna laoreet nec. Etiam ullamcorper egestas lacus a lobortis.\
                </p>\
            </div>\
        </div>')
            .appendTo('body');
	  changeTooltipPosition(event);
	};

	var hideTooltip = function() {
	   $('div.tooltip').remove();
	};

	$("div#booth28 a").bind({
	   mousemove : changeTooltipPosition,
	   mouseenter : showTooltip,
	   mouseleave: hideTooltip
	});
});


//tooltipHoverBooth29
$(document).ready(function() {
	
	var changeTooltipPosition = function(event) {
	  var tooltipX = event.pageX - 8;
	  var tooltipY = event.pageY + 8;
	  $('div.tooltip').css({top: tooltipY, left: tooltipX});
	};

	var showTooltip = function(event) {
	  $('div.tooltip').remove();
	  $('<div class="tooltip">\
            <div id="tooltip-booth1">\
                <div id=tooltip-logo>\
                    <img src="img/partner logo.png" style="width:150px; height: auto;">\
                </div>\
                <span id="line-break">___________________</span>\
                <h5 id=tooltip-title style="margin-top: 10px;">\
                    Lorem ipsum\
                </h5>\
                <p id="tooltip-desc" style="margin-top: 10px; font-size: 10px; font-weight: 300; letter-spacing: 0.3px; line-break: normal;">\
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec faucibus accumsan neque, cursus mattis urna laoreet nec. Etiam ullamcorper egestas lacus a lobortis.\
                </p>\
            </div>\
        </div>')
            .appendTo('body');
	  changeTooltipPosition(event);
	};

	var hideTooltip = function() {
	   $('div.tooltip').remove();
	};

	$("div#booth29 a").bind({
	   mousemove : changeTooltipPosition,
	   mouseenter : showTooltip,
	   mouseleave: hideTooltip
	});
});


//tooltipHoverBooth30
$(document).ready(function() {
	
	var changeTooltipPosition = function(event) {
	  var tooltipX = event.pageX - 8;
	  var tooltipY = event.pageY + 8;
	  $('div.tooltip').css({top: tooltipY, left: tooltipX});
	};

	var showTooltip = function(event) {
	  $('div.tooltip').remove();
	  $('<div class="tooltip">\
            <div id="tooltip-booth1">\
                <div id=tooltip-logo>\
                    <img src="img/partner logo.png" style="width:150px; height: auto;">\
                </div>\
                <span id="line-break">___________________</span>\
                <h5 id=tooltip-title style="margin-top: 10px;">\
                    Lorem ipsum\
                </h5>\
                <p id="tooltip-desc" style="margin-top: 10px; font-size: 10px; font-weight: 300; letter-spacing: 0.3px; line-break: normal;">\
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec faucibus accumsan neque, cursus mattis urna laoreet nec. Etiam ullamcorper egestas lacus a lobortis.\
                </p>\
            </div>\
        </div>')
            .appendTo('body');
	  changeTooltipPosition(event);
	};

	var hideTooltip = function() {
	   $('div.tooltip').remove();
	};

	$("div#booth30 a").bind({
	   mousemove : changeTooltipPosition,
	   mouseenter : showTooltip,
	   mouseleave: hideTooltip
	});
});


//tooltipHoverBooth31
$(document).ready(function() {
	
	var changeTooltipPosition = function(event) {
	  var tooltipX = event.pageX - 8;
	  var tooltipY = event.pageY + 8;
	  $('div.tooltip').css({top: tooltipY, left: tooltipX});
	};

	var showTooltip = function(event) {
	  $('div.tooltip').remove();
	  $('<div class="tooltip">\
            <div id="tooltip-booth1">\
                <div id=tooltip-logo>\
                    <img src="img/partner logo.png" style="width:150px; height: auto;">\
                </div>\
                <span id="line-break">___________________</span>\
                <h5 id=tooltip-title style="margin-top: 10px;">\
                    Lorem ipsum\
                </h5>\
                <p id="tooltip-desc" style="margin-top: 10px; font-size: 10px; font-weight: 300; letter-spacing: 0.3px; line-break: normal;">\
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec faucibus accumsan neque, cursus mattis urna laoreet nec. Etiam ullamcorper egestas lacus a lobortis.\
                </p>\
            </div>\
        </div>')
            .appendTo('body');
	  changeTooltipPosition(event);
	};

	var hideTooltip = function() {
	   $('div.tooltip').remove();
	};

	$("div#booth31 a").bind({
	   mousemove : changeTooltipPosition,
	   mouseenter : showTooltip,
	   mouseleave: hideTooltip
	});
});


//tooltipHoverBooth32
$(document).ready(function() {
	
	var changeTooltipPosition = function(event) {
	  var tooltipX = event.pageX - 8;
	  var tooltipY = event.pageY + 8;
	  $('div.tooltip').css({top: tooltipY, left: tooltipX});
	};

	var showTooltip = function(event) {
	  $('div.tooltip').remove();
	  $('<div class="tooltip">\
            <div id="tooltip-booth1">\
                <div id=tooltip-logo>\
                    <img src="img/partner logo.png" style="width:150px; height: auto;">\
                </div>\
                <span id="line-break">___________________</span>\
                <h5 id=tooltip-title style="margin-top: 10px;">\
                    Lorem ipsum\
                </h5>\
                <p id="tooltip-desc" style="margin-top: 10px; font-size: 10px; font-weight: 300; letter-spacing: 0.3px; line-break: normal;">\
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec faucibus accumsan neque, cursus mattis urna laoreet nec. Etiam ullamcorper egestas lacus a lobortis.\
                </p>\
            </div>\
        </div>')
            .appendTo('body');
	  changeTooltipPosition(event);
	};

	var hideTooltip = function() {
	   $('div.tooltip').remove();
	};

	$("div#booth32 a").bind({
	   mousemove : changeTooltipPosition,
	   mouseenter : showTooltip,
	   mouseleave: hideTooltip
	});
});