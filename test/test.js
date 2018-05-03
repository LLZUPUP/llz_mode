window.onload = function() {
    highlightRows();
}

function highlightRows() {
    if(!document.getElementsByTagName) return false;
    var rows = document.getElementsByTagName("tr");
    var thead = document.getElementsByTagName("th");
    console.log(rows);
    console.log(thead);
    for(var i =0;i<rows.length;i++) {
        rows[i].onmouseover = function() {
            this.style.fontWeight = "bold";
        }
        rows[i].onmouseout = function() {
            this.style.fontWeight = "normal";
        }
    }
    for(var i = 0;i<thead.length;i++) {
        thead[i].onmouseover = function() {
            this.style.fontWeight = "bold";
        }
        thead[i].onmouseout = function() {
            this.style.fontWeight = "normal";
        }
    }
}