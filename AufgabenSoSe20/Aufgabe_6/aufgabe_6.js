"use strict";
//Emissions World 
var weltgesamt = 31116.50;
document.querySelector(".chartWrapper .chart").setAttribute("style", "height: 0%");
//Functions
window.addEventListener("load", function () {
    //Emmissions Europe
    function europe() {
        var europe2018 = 4209.3;
        var europe2008 = 4965.7;
        var europeRelativ = Math.round(europe2018 * 100 / weltgesamt);
        var europeGrowthRate = 1 - europe2018 / europe2008;
        var europeGrowthRate1 = Math.round(100 * europeGrowthRate);
        var europeGrowthRate2 = Math.round(europe2008 - europe2018);
        document.querySelector(".button_europe").addEventListener("click", function europe() {
            document.querySelector(".h1").innerHTML = "in Europe";
            document.querySelector(".emission2018zahl").innerHTML = europe2018 + " kg";
            document.querySelector(".emission2018text").innerHTML = "Emission absolute of Europe in 2018";
            document.querySelector(".relativW").innerHTML = europeRelativ + "%";
            document.querySelector(".GrowthRate1proz").innerHTML = "-" + europeGrowthRate1 + "%";
            document.querySelector(".GrowthRate2kg").innerHTML = "-" + europeGrowthRate2 + " kg";
            document.querySelector(".chartWrapper .chart").setAttribute("style", "height: 14%");
        });
    }
    europe();
    //Emmissions Northamerica
    function northamerica() {
        var northamerica2018 = 6035.6;
        var northamerica2008 = 6600.4;
        var northamericaRelativ = Math.round(northamerica2018 * 100 / weltgesamt);
        var northamericaGrowthRate = 1 - northamerica2018 / northamerica2008;
        var northamericaGrowthRate1 = Math.round(100 * northamericaGrowthRate);
        var northamericaGrowthRate2 = Math.round(northamerica2018 - northamerica2008);
        document.querySelector(".button_northamerica").addEventListener("click", function northamerica() {
            document.querySelector(".h1").innerHTML = "in Northamerica";
            document.querySelector(".emission2018zahl").innerHTML = northamerica2018 + " kg";
            document.querySelector(".emission2018text").innerHTML = "Emission absolute of Northamerica in 2018";
            document.querySelector(".relativW").innerHTML = northamericaRelativ + "%";
            document.querySelector(".GrowthRate1proz").innerHTML = northamericaGrowthRate1 + "%";
            document.querySelector(".GrowthRate2kg").innerHTML = northamericaGrowthRate2 + " kg";
            document.querySelector(".chartWrapper .chart").setAttribute("style", "height: 19%");
        });
    }
    northamerica();
    //Emmissions Southamerica
    function southamerica() {
        var southamerica2018 = 1261.5;
        var southamerica2008 = 1132.6;
        var southamericaRelativ = Math.round(southamerica2018 * 100 / weltgesamt);
        var southamericaGrowthRate = 1 - southamerica2018 / southamerica2008;
        var southamericaGrowthRate1 = Math.round(100 * southamericaGrowthRate);
        var southamericaGrowthRate2 = Math.round(southamerica2018 - southamerica2008);
        document.querySelector(".button_southamerica").addEventListener("click", function southamerica() {
            document.querySelector(".h1").innerHTML = "in Southamerica";
            document.querySelector(".emission2018zahl").innerHTML = southamerica2018 + " kg";
            document.querySelector(".emission2018text").innerHTML = "Emission absolute of Southamerica in 2018";
            document.querySelector(".relativW").innerHTML = southamericaRelativ + "%";
            document.querySelector(".GrowthRate1proz").innerHTML = southamericaGrowthRate1 + "%";
            document.querySelector(".GrowthRate2kg").innerHTML = southamericaGrowthRate2 + " kg";
            document.querySelector(".chartWrapper .chart").setAttribute("style", "height: 4%");
        });
    }
    southamerica();
    //Emmissions Africa
    function africa() {
        var africa2018 = 1235.5;
        var africa2008 = 1028;
        var africaRelativ = Math.round(africa2018 * 100 / weltgesamt);
        var africaGrowthRate = 1 - africa2018 / africa2008;
        var africaGrowthRate1 = Math.round(100 * africaGrowthRate);
        var africaGrowthRate2 = Math.round(africa2018 - africa2008);
        document.querySelector(".button_africa").addEventListener("click", function africa() {
            document.querySelector(".h1").innerHTML = "in Africa";
            document.querySelector(".emission2018zahl").innerHTML = africa2018 + " kg";
            document.querySelector(".emission2018text").innerHTML = "Emission absolute of Africa in 2018";
            document.querySelector(".relativW").innerHTML = africaRelativ + "%";
            document.querySelector(".GrowthRate1proz").innerHTML = africaGrowthRate1 + "%";
            document.querySelector(".GrowthRate2kg").innerHTML = "-" + africaGrowthRate2 + " kg";
            document.querySelector(".chartWrapper .chart").setAttribute("style", "height: 4%");
        });
    }
    africa();
    //Emmissions Asia
    function asia() {
        var asia2018 = 16274.1;
        var asia2008 = 12954.4;
        var asiaRelativ = Math.round(asia2018 * 100 / weltgesamt);
        var asiaGrowthRate = 1 - asia2018 / asia2008;
        var asiaGrowthRate1 = Math.round(100 * asiaGrowthRate);
        var asiaGrowthRate2 = Math.round(asia2018 - asia2008);
        document.querySelector(".button_asia").addEventListener("click", function asia() {
            document.querySelector(".h1").innerHTML = "in Asia";
            document.querySelector(".emission2018zahl").innerHTML = asia2018 + " kg";
            document.querySelector(".emission2018text").innerHTML = "Emission absolute of Asia in 2018";
            document.querySelector(".relativW").innerHTML = asiaRelativ + "%";
            document.querySelector(".GrowthRate1proz").innerHTML = asiaGrowthRate1 + "%";
            document.querySelector(".GrowthRate2kg").innerHTML = asiaGrowthRate2 + " kg";
            document.querySelector(".chartWrapper .chart").setAttribute("style", "height: 52%");
        });
    }
    asia();
    //Emmissions Australia
    function australia() {
        var australia2018 = 2100.5;
        var australia2008 = 1993;
        var australiaRelativ = Math.round(australia2018 * 100 / weltgesamt);
        var australiaGrowthRate = 1 - australia2018 / australia2008;
        var australiaGrowthRate1 = Math.round(100 * australiaGrowthRate);
        var australiaGrowthRate2 = Math.round(australia2018 - australia2008);
        document.querySelector(".button_australia").addEventListener("click", function australia() {
            document.querySelector(".h1").innerHTML = "in Australia";
            document.querySelector(".emission2018zahl").innerHTML = australia2018 + " kg";
            document.querySelector(".emission2018text").innerHTML = "Emission absolute of Australia in 2018";
            document.querySelector(".relativW").innerHTML = australiaRelativ + "%";
            document.querySelector(".GrowthRate1proz").innerHTML = australiaGrowthRate1 + "%";
            document.querySelector(".GrowthRate2kg").innerHTML = australiaGrowthRate2 + " kg";
            document.querySelector(".chartWrapper .chart").setAttribute("style", "height: 7%");
        });
    }
    australia();
});
//# sourceMappingURL=aufgabe_6.js.map