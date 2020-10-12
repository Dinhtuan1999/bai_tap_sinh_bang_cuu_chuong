let sout = "";
sout = '<table border="1" width="1000" height="600" cespancing="0" cellspadding="1">';
for (let i = 1; i <= 9; i++) {
    sout += "<tr>";
    for ( let j = 2; j <= 9; j++) {
        sout += "<td>" + j + "x" + i  + "=" + j * i + "</td>";
    }sout += "</tr>";
}
sout += "</table>";
document.write(sout)