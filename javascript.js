"use strict;"
var planets = [];
var ships = [];
var people = [];
var data = { people, planets, ships };

var numberOfDisplayingCards = 12;

var ratio = Math.ceil(numberOfDisplayingCards / 10);


function createFirstView(iconName, sectionNumber) {

    var section = document.getElementById("section" + sectionNumber);
    if (sectionNumber == "1") {
        numberOfDisplayingCards
            = Math.min(Math.max(parseInt(numberOfDisplayingCards), 1), 87);
        for (i = 0; i < numberOfDisplayingCards
            ; i++) {
            var div = document.createElement("div")
            var icon = document.createElement("i");
            var table = document.createElement("table");
            table.setAttribute("id", "section_" + sectionNumber + "_tableNumber_" + i)
            table.className = 'table-condensed table-hover ';
            div.className = "card col-lg-3 col-sm-6 col-md-4 col-12";
            icon.className = "fa " + iconName + " fa-4x";
            div.setAttribute("id", "section_" + sectionNumber + "_icon_" + i);
            div.appendChild(icon);
            div.appendChild(table);
            section.appendChild(div);
        }
    }
    else if (sectionNumber == "2") {
        numberOfDisplayingCards
            = Math.min(Math.max(parseInt(numberOfDisplayingCards), 1), 61);
        for (i = 0; i < numberOfDisplayingCards
            ; i++) {
            var div = document.createElement("div")
            var icon = document.createElement("i");
            var table = document.createElement("table");
            table.setAttribute("id", "section_" + sectionNumber + "_tableNumber_" + i)
            table.className = 'table-condensed table-hover ';
            div.className = "card col-lg-3 col-sm-6 col-md-4 col-12";
            icon.className = "fa " + iconName + " fa-4x";
            div.setAttribute("id", "section_" + sectionNumber + "_icon_" + i);
            div.appendChild(icon);
            div.appendChild(table);
            section.appendChild(div);
        }
    }
    else {
        numberOfDisplayingCards
            = Math.min(Math.max(parseInt(numberOfDisplayingCards), 1), 37);
        for (i = 0; i < numberOfDisplayingCards
            ; i++) {
            var div = document.createElement("div")
            var icon = document.createElement("i");
            var table = document.createElement("table");
            table.setAttribute("id", "section_" + sectionNumber + "_tableNumber_" + i)
            table.className = 'table-condensed table-hover ';
            div.className = "card col-lg-3 col-sm-6 col-md-4 col-12";
            icon.className = "fa " + iconName + " fa-4x";
            div.setAttribute("id", "section_" + sectionNumber + "_icon_" + i);
            div.appendChild(icon);
            div.appendChild(table);
            section.appendChild(div);
        }
    }
};


function getCardsData(objectName, pageNumber, sectionNumber, iconName) {
    openModal();
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
              
            var cardsData = JSON.parse(this.responseText);
            if (objectName == "people") {
               data.people = data.people.concat(cardsData.results);
                if(data.people.length>=numberOfDisplayingCards){
                    
                    /* createFirstView("fa-user-o", "1");*/
                    var peopleData= getRelatedData(data.people);
                       for (x in peopleData){
                  createViewAfterRecievedData("fa-user-o", "1", peopleData);
                  for(k in peopleData[x]){
                      fillTable(peopleData,"1");
                }
                 

                }
                   
                }
           
            }
            else if (objectName == "planets") {
                data.planets = data.planets.concat(cardsData.results);
                if(data.planets.length>=numberOfDisplayingCards){
                    
                 /* createFirstView("fa-sun-o", "2");*/
                  var planetsData=getRelatedData(data.planets);
                  for (x in planetsData){
                  createViewAfterRecievedData("fa-sun-o", "2", planetsData);
                   for(k in planetsData[x]){
                      fillTable(planetsData,"2");
                }
                }
                }
            
          
                    }
            else {
                data.ships = data.ships.concat(cardsData.results);
                if(data.ships.length>=numberOfDisplayingCards){
                   
                     /*createFirstView("fa-anchor", "3");*/
                     var shipsData= getRelatedData(data.ships);
                        for (x in shipsData){
                  createViewAfterRecievedData("fa-anchor", "3" ,shipsData);
                    for(k in shipsData[x]){
                      fillTable(shipsData,"3");
                }
                }
                  
                }
            
                   
            }
           closeModal();   
        }
    }
    xmlhttp.open("GET", "https://swapi.co/api/" + objectName + "/?page=" + pageNumber, true);
    xmlhttp.send();
}

for (var i = 1; i < ratio + 1; i++) {
    getCardsData("people", i);
    getCardsData("planets", i);
    getCardsData("starships", i);
}

function getRelatedData(array){
    var relatedData = array.slice(0,numberOfDisplayingCards);
    return relatedData;
}
function getDataUrlNumber(singleData) {
    var singleDataUrl = singleData.url;
    var r = /\d+/g;
    var k = singleDataUrl.match(r);
    return k[0];
}

function createViewAfterRecievedData(iconName, sectionNumber, dataName) {

    var section = document.getElementById("section" + sectionNumber);
    if (sectionNumber == "1") {
        numberOfDisplayingCards
            = Math.min(Math.max(parseInt(numberOfDisplayingCards), 1), 87);
            var y= getDataUrlNumber(dataName[x])
            console.log(y)
            var div = document.createElement("div")
            var icon = document.createElement("i");
            var table = document.createElement("table");
            table.setAttribute("id", "section_" + sectionNumber + "_tableNumber_" + y)
            table.className = 'table-condensed table-hover ';
            div.className = "card col-lg-3 col-sm-6 col-md-4 col-12";
            icon.className = "fa " + iconName + " fa-4x";
            div.setAttribute("id", "section_" + sectionNumber + "_icon_" + y);
            div.appendChild(icon);
            div.appendChild(table);
            section.appendChild(div);
        
    }
    else if (sectionNumber == "2") {
        numberOfDisplayingCards
            = Math.min(Math.max(parseInt(numberOfDisplayingCards), 1), 61);
        var y= getDataUrlNumber(dataName[x])
         
            
            var div = document.createElement("div")
            var icon = document.createElement("i");
            var table = document.createElement("table");
            table.setAttribute("id", "section_" + sectionNumber + "_tableNumber_" + y)
            table.className = 'table-condensed table-hover ';
            div.className = "card col-lg-3 col-sm-6 col-md-4 col-12";
            icon.className = "fa " + iconName + " fa-4x";
            div.setAttribute("id", "section_" + sectionNumber + "_icon_" + y);
            div.appendChild(icon);
            div.appendChild(table);
            section.appendChild(div);
        
    }
    else {
        numberOfDisplayingCards
            = Math.min(Math.max(parseInt(numberOfDisplayingCards), 1), 37);
       
          var y= getDataUrlNumber(dataName[x])
            
            var div = document.createElement("div")
            var icon = document.createElement("i");
            var table = document.createElement("table");
            table.setAttribute("id", "section_" + sectionNumber + "_tableNumber_" + y)
            table.className = 'table-condensed table-hover ';
            div.className = "card col-lg-3 col-sm-6 col-md-4 col-12";
            icon.className = "fa " + iconName + " fa-4x";
            div.setAttribute("id", "section_" + sectionNumber + "_icon_" + y);
            div.appendChild(icon);
            div.appendChild(table);
            section.appendChild(div);
        
    }
};

function openModal() {
        document.getElementById('modal').style.display = 'block';
        
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
  
}

function fillTable(dataName,sectionNumber){
      var y= getDataUrlNumber(dataName[x])
                   var txtObjectNameKeys = document.createTextNode(k.replace(/_/g, " ")+":");
                 
                var txtObjectNameValues = document.createTextNode(dataName[x][k]);
                var tr = document.createElement("tr");
                var td_keys = document.createElement("td")
                var td_values = document.createElement("td")
                var table = document.getElementById("section_" + sectionNumber + "_tableNumber_" + y);
                
                tr.appendChild(td_keys);
                td_keys.appendChild(txtObjectNameKeys);
                table.appendChild(tr);
               
                tr.appendChild(td_values);
                td_values.appendChild(txtObjectNameValues);
                 table.appendChild(tr);
}























