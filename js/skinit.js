/* 
 * Copyright (C) 2015 mautematico
 *
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of the GNU General Public License
 * as published by the Free Software Foundation; either version 2
 * of the License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program; if not, write to the Free Software
 * Foundation, Inc., 59 Temple Place - Suite 330, Boston, MA  02111-1307, USA.
 */

/* global JSS */
/* global images */
function createStyle(css) {
    var head = document.getElementsByTagName("head")[0];
    var style_el = document.createElement("style");
    head.appendChild(style_el);

    if (style_el.styleSheet) { // IE
        style_el.styleSheet.cssText = css;
    } else { // w3c
        var style_content = document.createTextNode(css);
        style_el.appendChild(style_content);
    }
}

var css = JSS.toCSS({
    ".tile-inner": {
        font_size:              "0 !important",
        background_size:        "80% 80% !important",
        background_repeat:      "no-repeat !important",
        background_position:    "center !important"
    }
});
createStyle(css);

skin = {};

for (i=2; i<= 2048;){
    skin[i] = 'url("' + images[i] + '") !important' ;
    i*=2;
}

var css = JSS.toCSS({
    ".tile-2 .tile-inner": {
        background:    skin[2],
	background_size: "90% 90% !important",
	background_repeat: "no-repeat !important",
	background_position: "center !important"
    }
});
createStyle(css);
var css = JSS.toCSS({
    ".tile-4 .tile-inner": {
        background:    skin[4],
	background_size: "90% 90% !important",
	background_repeat: "no-repeat !important",
	background_position: "center !important"
    }
});
createStyle(css);
var css = JSS.toCSS({
    ".tile-8 .tile-inner": {
        background:    skin[8],
	background_size: "90% 90% !important",
	background_repeat: "no-repeat !important",
	background_position: "center !important"
    }
});
createStyle(css);
var css = JSS.toCSS({
    ".tile-16 .tile-inner": {
        background:    skin[16],
	background_size: "90% 90% !important",
	background_repeat: "no-repeat !important",
	background_position: "center !important"
    }
});
createStyle(css);
var css = JSS.toCSS({
    ".tile-32 .tile-inner": {
        background:    skin[32],
	background_size: "90% 90% !important",
	background_repeat: "no-repeat !important",
	background_position: "center !important"
    }
});
createStyle(css);
var css = JSS.toCSS({
    ".tile-64 .tile-inner": {
        background:    skin[64],
	background_size: "90% 90% !important",
	background_repeat: "no-repeat !important",
	background_position: "center !important"
    }
});
createStyle(css);
var css = JSS.toCSS({
    ".tile-128 .tile-inner": {
        background:    skin[128],
	background_size: "90% 90% !important",
	background_repeat: "no-repeat !important",
	background_position: "center !important"
    }
});
createStyle(css);
var css = JSS.toCSS({
    ".tile-256 .tile-inner": {
        background:    skin[256],
	background_size: "90% 90% !important",
	background_repeat: "no-repeat !important",
	background_position: "center !important"
    }
});
createStyle(css);
var css = JSS.toCSS({
    ".tile-512 .tile-inner": {
        background:    skin[512],
	background_size: "90% 90% !important",
	background_repeat: "no-repeat !important",
	background_position: "center !important"
    }
});
createStyle(css);
var css = JSS.toCSS({
    ".tile-1024 .tile-inner": {
        background:    skin[1024],
	background_size: "90% 90% !important",
	background_repeat: "no-repeat !important",
	background_position: "center !important"
    }
});
createStyle(css);
var css = JSS.toCSS({
    ".tile-2048 .tile-inner": {
        background:    skin[2048],
	background_size: "90% 90% !important",
	background_repeat: "no-repeat !important",
	background_position: "center !important"
    }
});
createStyle(css);
