










function tabFunction() {
  var nameArray = ["Homer", "Lisa", "Bart", "Marge", "Batman",
  "TheTeletubbies", "Elmo", "Peter", "Spiderman", "Spongebob",
  "Scooby", "Squidward", "AdamSandler", "ThePowerPuffGirls","NedFlanders"];
  var verbArray = ["Eats", "Devours", "Licks", "ChokesOn", "NibblesOn",
  "BreathesIn", "Inhales", "Absorbs", "Ingests", "FeastsUpon",
  "Demolishes", "Craves", "GetsTurnsAbout", "SleepsOn","DancesOn"];
  var objectArray = ["Dirt", "Lemons", "Rainbows", "DangerousNails", "SomeonesSoul",
  "LittleChildren", "MethaneGas", "HairFollicles", "ToeNails", "SustainableEnergy",
  "Chapstick", "Dorthy", "Windex", "Mayonnaise","ABeeHive"];
  var randomIndex = Math.floor(Math.random() * nameArray.length);
  var randomElement = nameArray[randomIndex];
  var random2Index = Math.floor(Math.random() * nameArray.length);
  var random2Element = verbArray[random2Index];
  var random3Index = Math.floor(Math.random() * nameArray.length);
  var random3Element = objectArray[random2Index];
  document.getElementById("go").innerHTML = randomElement + "_" + random2Element + "_" + random3Element;
}


function oluFunction(){}

function derFunction(){}

var pastNames =[];



function spaceCheck(){
  var str = document.getElementById("myText").value; // get value from t-field
  var n = str.includes(" ");  //check input for spaces
  var found = pastNames.includes(str); //check array for previous value
  if (found===true){                    //value found
    document.getElementById("flu").innerHTML = "Word has been used";
  }else {                               // orginial value
    if (n === true){            // there were spaces
      document.getElementById("rap").innerHTML = "Spaces are not accepted"; //cannot enter it
    }else{                      // there were no spaces
      document.getElementById("go").innerHTML = str;  //display name
      pastNames.push(str);      // add word to array
  }
  }
}
