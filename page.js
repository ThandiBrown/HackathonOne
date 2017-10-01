


function tabFunction() {
  var nameArray = ["Homer", "Lisa", "Bart", "Marge", "Batman",
  "TheTeletubbies", "Elmo", "Peter", "Spiderman", "Spongebob",
  "Scooby", "Squidward", "AdamSandler", "ThePowerPuffGirls","NedFlanders"];
  var verbArray = ["Eats", "Devours", "Licks", "ChokesOn", "NibblesOn",
  "BreathesIn", "Inhales", "Absorbs", "Ingests", "FeastsUpon",
  "Demolishes", "Craves", "GetsTurntAbout", "SleepsOn","DancesOn"];
  var objectArray = ["Dirt", "Lemons", "Rainbows", "DangerousNails", "SomeonesSoul",
  "LittleChildren", "MethaneGas", "HairFollicles", "ToeNails", "SustainableEnergy",
  "Chapstick", "Dorthy", "Windex", "Mayonnaise","ABeeHive"];
  var randomIndex = Math.floor(Math.random() * (nameArray.length - 1));
  var randomElement = nameArray[randomIndex];
  var random2Index = Math.floor(Math.random() * (verbArray.length - 1));
  var random2Element = verbArray[random2Index];
  var random3Index = Math.floor(Math.random() * (objectArray.length - 1));
  var random3Element = objectArray[random3Index];
  document.getElementById("go").innerHTML = randomElement + "_" + random2Element + "_" + random3Element;

}

function oluFunction(){
var  names = ["Ricky","Chris", "Omar", "Devon", "Evan",
" Filne","Drake","Luchi","Stevie","Batman",
"Clark_Kent", "Adele", "Trump", "Obama","BillClinton"];

var action = ["slapped", "punched", "kissed", "stabbed", "harassed",
"challenged","trapped","fought","smacked","killed",
"yelled_at","cherished", " cleaned ", "headbutted", " kneed ","choked"];

var random = ["_a_cheecks", "_a_butt", "_an_elephant", "_a_chicken", "_the_bottom_of_his_shoe",
"_a_snicker", "_a_water_bottle", "_a_mirror", "_a_fidget_spinner", "_grasshopper",
"_a_professor", "_uno_cards", "_eyebrow", "_a_cashier", "_stop_sign"];

var randomIndex = Math.floor(Math.random() * (names.length - 1));
var randomElement = names[randomIndex];
var random2Index = Math.floor(Math.random() * (action.length - 1));
var random2Element = action[random2Index];
var random3Index = Math.floor(Math.random() * (random.length - 1));
var random3Element = random[random3Index];
document.getElementById("go").innerHTML = randomElement + "_" + random2Element + random3Element;

}

function derFunction(){
  var pokemonName1 = ["Gengar", "Dragonite", "Lucario", "Alakazam", "Arcanine",
                 "Azumarill", "Bellossom", "Charmander", "Charizard",
                 "Combusken", "Corphish", "Cyndaquil", "Greninja","Gyarados",
                 "Haunter"];
  var actionWord = ["Hit","Attacked","Dodged","Defended","Used","Burned",
                         "Poinoned","Threw", "Punched", "Grabbed", "Punched",
                         "Kicked", "Faught", "Beat", "Froze", "Paralyzed"];
  var pokemonName2 = ["Sudowoodo", "Steelix", "Starmie", "Squirtle", "Spiritomb",
                 "Spoink", "Snorlax", "Slowbro", "Scatterbug",
                 "Sandslash", "Rayquaza", "Raticate", "Raichu","Plusle",
                 "Onix"];
 var randomIndex = Math.floor(Math.random() * (pokemonName1.length- 1));
 var randomElement = pokemonName1[randomIndex];
 var random2Index = Math.floor(Math.random() * (actionWord.length- 1));
 var random2Element = actionWord[random2Index];
 var random3Index = Math.floor(Math.random() * (pokemonName2.length- 1));
 var random3Element = pokemonName2[random3Index];
 document.getElementById("go").innerHTML = randomElement + "_" + random2Element + "_" + random3Element;

}

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
