"use strict";
//Emissions World 
var weltgesamt: number = 31116.50;
document.querySelector(".chartWrapper .chart").setAttribute("style", "height: 0%");

//Functions
window.addEventListener("load", function(): void {
    //Emmissions Europe
    function europe(): void {
        var europe2018: number = 4209.3;
        var europe2008: number = 4965.7;
        var europeRelativ: number = Math.round(europe2018 * 100 / weltgesamt);
        var europeGrowthRate: number = 1 - europe2018 / europe2008;
        var europeGrowthRate1: number = Math.round(100 * europeGrowthRate);
        var europeGrowthRate2: number = Math.round(europe2008 - europe2018);
        document.querySelector(".button_europe").addEventListener("click", function europe (): void {
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
    function northamerica(): void {
        var northamerica2018: number = 6035.6;
        var northamerica2008: number = 6600.4;
        var northamericaRelativ: number = Math.round(northamerica2018 * 100 / weltgesamt);
        var northamericaGrowthRate: number = 1 - northamerica2018 / northamerica2008;
        var northamericaGrowthRate1: number = Math.round(100 * northamericaGrowthRate); 
        var northamericaGrowthRate2: number = Math.round(northamerica2018 - northamerica2008);
        document.querySelector(".button_northamerica").addEventListener("click", function northamerica(): void {
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
    function southamerica(): void {
        var southamerica2018: number = 1261.5;
        var southamerica2008: number = 1132.6; 
        var southamericaRelativ: number = Math.round(southamerica2018 * 100 / weltgesamt);
        var southamericaGrowthRate: number = 1 - southamerica2018 / southamerica2008;
        var southamericaGrowthRate1: number = Math.round(100 * southamericaGrowthRate); 
        var southamericaGrowthRate2: number = Math.round(southamerica2018 - southamerica2008);
        document.querySelector(".button_southamerica").addEventListener("click", function southamerica(): void {
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
    function africa(): void {
        var africa2018: number = 1235.5;
        var africa2008: number = 1028;
        var africaRelativ: number = Math.round(africa2018 * 100 / weltgesamt);
        var africaGrowthRate: number = 1 - africa2018 / africa2008;
        var africaGrowthRate1: number = Math.round(100 * africaGrowthRate); 
        var africaGrowthRate2: number = Math.round(africa2018 - africa2008);
        document.querySelector(".button_africa").addEventListener("click", function africa (): void {
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
    function asia(): void {
        var asia2018: number = 16274.1;
        var asia2008: number = 12954.4;
        var asiaRelativ: number = Math.round(asia2018 * 100 / weltgesamt);
        var asiaGrowthRate: number = 1 - asia2018 / asia2008;
        var asiaGrowthRate1: number = Math.round(100 * asiaGrowthRate); 
        var asiaGrowthRate2: number = Math.round(asia2018 - asia2008);
        document.querySelector(".button_asia").addEventListener("click", function asia(): void {
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
    function australia(): void {
        var australia2018: number = 2100.5;
        var australia2008: number = 1993;
        var australiaRelativ: number = Math.round(australia2018 * 100 / weltgesamt);
        var australiaGrowthRate: number = 1 - australia2018 / australia2008;
        var australiaGrowthRate1: number = Math.round(100 * australiaGrowthRate); 
        var australiaGrowthRate2: number = Math.round(australia2018 - australia2008); 
        document.querySelector(".button_australia").addEventListener("click", function australia (): void {
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