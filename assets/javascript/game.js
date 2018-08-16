let rick = {            // Object with Rick's stats
    HP: 120,
    Attack: 8,
    CounterAttack: 10
};

let morty = {           // Object with Morty's stats
    HP: 100,
    Attack: 11,
    CounterAttack: 5
};

let krom = {            // Object with Krombopulos' stats
    HP: 150,
    Attack: 8,
    CounterAttack: 20
};

let lucius = {          // Object with Lucius' stats
    HP: 180,
    Attack: 9,
    CounterAttacks: 25
};

let move1 = 0;          // Variable to identify which character was moved
let yourChar = {};      // Object to hold Your Character's stats
let yourDefend = {};    // Object to hold the current Defender's stats
let deleteMe = 0;       // Variable to identify which character to delete after they have been defeated
let tracker = false;    // Variable to determine if a Defender has been selected
let tracker2 = false;   // Variable to determine if the Defender has been defeated
let countWin = 0;       // Variable to determine how many opponents you've defeated

$(document).ready(function(){
    
    function statPush() {                                                               // Function to push stats of chosen characters
        let pushYou = JSON.stringify(yourChar).slice(1, -1).replace(/\"/g, " ");        // Format your characters stats
        let pushThey = JSON.stringify(yourDefend).slice(1, -1).replace(/\"/g, " ");     // Format the Defenders stats
        $(".yourStats").html("Your Stats: <br>" + pushYou);                             // Push your characters stats to the HTML
        $("defenderStats").html("Enemy Stats: <br>" + pushThey);                        // Push the Defenders stats to HTML
    }

    function hpPush() {                             // Function to push HP values to the HTML
        $(".HP1").html("HP: " + (rick.HP));         // Push Rick's HP to the HTML
        $(".HP2").html("HP: " + (morty.HP));        // Push Morty's HP to the HTML
        $(".HP3").html("HP: " + (krom.HP));         // Push Krombopulos' HP to the HTML
        $(".HP4").html("HP: " + (lucius.HP));       // Push Lucius' HP to the HTML
    }

    hpPush();                                       // Call the hpPush function to push the HP values to the HTML

    $(".flasher2").hide();                          // Hide the 'choose defender' flashers
    $(".attackButton").hide();                      // Hide the 'attack' button

    function rick1() {
        if (tracker2 === true) {                    // If var tracker2 is true
            alert("One Enemy At A Time!");          // There is already an enemy selected, so alert this
        } else if (move1 === 0) {                   // Else if var move1 is 0
            move1 = 1234;                           // Set var move1 to 1234
            $(".flasher1").hide();                  // Hide the 'choose your character; flashers
            $(".flasher2").show();                  // Show the 'choose your defender; flashers
            $(".pos11").css({                       // Make these CSS changes to Rick
                "background-color": "lightblue",
                "color": "white"
            });
            $(".chooseDefend").append($(".pos12, .pos13, .pos14"));             // Move the other three characters down on the page
            $(".pos12, .pos13, .pos14").addClass("pos2").removeClass("pos1");   // Change div class 'pos1' to 'pos2' for the three Defenders
                yourChar = rick;                                                // Set var yourChar to Rick's stats
                tracker = true;                                                 // Set var tracker to True (no opponent has been selected)
        } else if (move1 === 1234) {                                            // Else if this is the second time Rick has been clicked
            alert("I'm Pickle Rick!!!");                                        // Alert this
        } else if ((move1 === 2134 || move1 === 3124 || move1 === 4123)) {      // Else If Rick is picked as a defender
            tracker2 = true;                                                    // Set var tracker2 to true
            $(".attackButton").show();                                          // Show the 'Attack' button
            $(".flasher2").hide();                                              // Hide the 'choose your defender' flashers
            $(".defender").append($(".pos11"));                                 // Move Rick down on the page
            $(".pos11").css({                                                   // Make these CSS changes to Rick
                "background-color": "red",
                "color": "yellow",
                "border-color": "white"
            });
        }
        yourDefend = rick;                          // Set var yourDefend to Rick's stats
        deleteMe = 1234;                            // Set Rick as the character to delete if defeated
        tracker = false;                            // Set tracker to fasle to indicatge an opponent has been selected
    };

    function morty1() {
        if (tracker2 === true) {                    // IF var tracker2 is true
            alert("One Enemy At A Time!");          // There is already an enemy selected, alert this
        } else if (move1 === 0) {                   // Else If var move1 is 0
            move1 = 2134;                           // Set var move1 to 2134
            $(".flasher1").hide();                  // Hide the 'choose your character' flashers
            $(".flasher2").show();                  // Show the 'choose your defender' flashers
            $(".pos12").css({                       // Make these CSS changes to Morty
                "background-color": "lightblue",
                "color": "white"
            });
            $(".chooseDefend").append($(".pos11, .pos13, .pos14"));             // Move the other three characters down on the page
            $(".pos11, .pos13, .pos14").addClass("pos2").removeClass("pos1");   // Change div class 'pos1' to 'pos2' for the three Defenders
            yourChar = morty;                                                   // Set var yourChar to Morty's stats
            tracker = true;                                                     // Set var tracker to true (no opponent has been selected)
        } else if (move1 === 2134) {                                            // Else If this is the second time Morty has been clicked
            alert("Nobody exists on purpose, nobody belongs anywhere, wer are all going to die...");    // Alert this
        } else if ((move1 === 1234 || move1 === 3124 || move1 ===4123)) {       // Else If Morty is picked as Defender
            tracker2 = true;                                                    // Set var tracker2 to true
            $(".attackButton").show();                                          // Show the attack button
            $(".flasher2").hide();                                              // Hide the 'choose your defender' flashers
            $(".defender").append($(".pos12"));                                 // Move Morty down on the page
            $(".pos12").css({                                                   // Make these CSS changes to Morty
                "background-color": "red",
                "color": "yellow",
                "border-color": "white"
            });
        }
            yourDefend = morty;         // Set var yourDefend to Morty's stats
            deleteMe = 2134;            // Set Morty as the character to delete if defeated
            tracker = false;            //  Set tracker to fasle to indicatge an opponent has been selected
    };

    function krom1() {
        if (tracker2 === true) {                    // If var tracker2 is true
            alert("One Enemy At A Time!");          // There is already an enemy selected
        } else if (move1 === 0) {                   // Else If var move1 is 0
        move1 = 3124;                               // Set var move1 to 3124
        $(".flasher1").hide();                      // Hide the 'choose your character' flashers
        $(".flasher2").show();                      // Show the 'choose your defender' flashers
        $(".pos13").css({                           // Make these CSS changes to Krombopulos
            "background-color": "lightblue",
            "color": "white"
        });
        $(".chooseDefend").append($(".pos11, .pos12, .pos14"));                 // Move the other three characters down on the page
        $(".pos11, .pos12, .pos14").addClass("pos2").removeClass("pos1");       // Change div class pos1 to pos2 for the three that were moved
        move1 = 3124;                                                           // Set var move1 to alert if Krombopulos is clicked again
        yourChar = krom;                                                        // Set var yourChar to Krombopulos' stats
        tracker = true;                                                         // Set var tracker to true (no opponent has been selected)
        } else if (move1 === 3124) {                                            // Else if this is the second time Krombopulos has been clicked
            alert("Here I go killing again");                                   // Alert this
        } else if ((move1 === 1234) || (move1 === 2134) || (move1 === 4123)) {  // Else if someone else is in postion 1, move Krombopulos from
            tracker2 = true;                                                    // Set var tracker2 to true
            $(".attackButton").show();                                          // Show the attack button
            $(".flasher2").hide();                                              // Hide the 'choose your defender' flashers
            $(".defender").append($(".pos13"));                                 // Move Krombopulos down on the page
            $(".pos13").css({                                                   // Make these CSS changes to Krombopulos
                "background-color": "red",
                "color": "yellow",
                "border-color": "white"
            });
        }
            yourDefend = krom;          // Set var yourDefend to Krombopulos' stats
            deleteMe = 3124;            // Set Krombopulos as the character to delete if defeated
            tracker = false;            //  Set tracker to fasle to indicatge an opponent has been selected
    };
    
    function luc1() {
        if (tracker2 === true) {                    // If var tracker2 is true
            alert("One Enemy At A Time!");          // There is already an enemy selected
        } else if (move1 === 0) {                   // Else If var move1 is 0
        move1 = 4123;                               // Set var move1 to 4123
        $(".flasher1").hide();                      // Hide the 'choose your character' flashers 
        $(".flasher2").show();                      // Show the 'choose your defender' flashers
        $(".pos14").css({                           // Make these CSS changes to Lucius
            "background-color": "lightblue",
            "color": "white"
        });
        $(".chooseDefend").append($(".pos11, .pos12, .pos13"));                 // Move the other three characters down on the page 
        $(".pos11, .pos12, .pos13").addClass("pos2").removeClass("pos1");       // Change div class pos1 to pos2 for the three that were moved
        move1 = 4123;                                                           // Set var move1 to alert if Lucius is clicked again
        yourChar = lucius;                                                      // Set var yourChar to Lucius' stats
        tracker = true;                                                         // Set var tracker to true (no opponent has been selected)
        } else if (move1 === 4123) {                                            // Else if this is the second time Lucius has been clicked
            alert("I just want to go back to hell, where everyone thinks I'm smart and funny"); // Alert this
        } else if ((move1 === 1234) || (move1 === 2134) || (move1 === 3124)) {  // Else if someone else is in postion 1, move Lucius from 
            tracker2 = true;                                                    // Set var tracker2 to true
            $(".attackButton").show();                                          // Show the attack button
            $(".flasher2").hide();                                              // Hide the 'choose your defender' flashers
            $(".defender").append($(".pos14"));                                 // Move Lucius down on the page
            $(".pos14").css({                                                   // Make these CSS changes to Lucius
                "background-color": "red",
                "color": "yellow",
                "border-color": "white"
            });
        }
        yourDefend = lucius;            // Set var yourDefend to Lucius' stats
        deleteMe = 4123;                // Set Lucius as the character to delete if defeated
        tracker = false;                //  Set tracker to fasle to indicatge an opponent has been selected
    };
    
    $(".pos11").on("click", function() {            // Click event handler for Rick
        rick1();                                    // Call the rick1 function
    });

    $(".pos12").on("click", function() {            // Click event handler for Morty                                   
        morty1();                                   // Call the morty1 function   
    });

    $(".pos13").on("click", function() {            // Click event handler for Krombopulos                                   
        krom1();                                    // Call the krom1 function    
    });
              
    $(".pos14").on("click", function() {            // Click event handler for Lucius                     
        luc1();                                     // Call the luc1 function 
    });

    function attackerFu() {                                                 // Function for what happens when you attack
        if (yourChar.HP <= 1) {                                             // If your HP is less than 1, lose condition
            alert("You have lost the game");                                // Alert this
            location.reload();                                              // Reload the page
        } else if (yourDefend.HP <= 1) {                                    // Else If your opponent's HP is less than 1, win condition
            if (countWin === 2) {                                           // If var 'countWIn' is already at 2 (this is your 3rd win) you win the game
                alert("YOU WIN");                                           // Alert this
                location.reload();                                          // Reload the page
            } else if (deleteMe === 555) {                                  // Else if var 'deleteMe' has been set to 555, no opponent is active
                $("infoDiv").html("Enemy Defeated - Choose Another Opponent");  // Alert this
            } else {                                                        // Else
                tracker2 = false;                                           // Set var 'tracker2' to false
                $("infoDiv").html("Enemy Defeated");                        // Alert this
                countWin++                                                  // Increment countWin by 1
                yourChar.Attack = yourChar.Attack + yourChar.Attack;        // Increase your character's attack power by itself
                hpPush();                                                   // Call the htmlPush function to update the HP in the HTML
                seeWhoGo();                                                 // Call the seeWhoGo function to delete the defeated character
            }
        } else {                                                            // Else alert this
            $(".infoDiv").html("What's going down: You Attacked for " + yourChar.Attack + " damage, you were Counter Attacked for " + yourDefend.CounterAttack);
            yourChar.Attack = yourChar.Attack + yourChar.Attack;            // Else do the math for the attack, increate your attack by itself
            hpPush();                                                       // Call the htmlPush function to update the HP in the HTML
        }
    };

    function seeWhoGo() {
        if (deleteMe === 1234) {                // If var deleteMe has Rick's code
            $(".pos11").remove();               // Delete Rick
            deleteMe = 555;                     // Set deleteMe to 555 (no opponent selected)
        } else if (deleteMe === 2134) {         // If var deleteMe has Morty's code
            $(".pos12").remove();               // Delete Morty
            deleteMe = 555;                     // Set deleteMe to 555 (no opponent selected)
        } else if (deleteMe === 3124) {         // If var deleteMe has Krombopulos' code
            $(".pos13").remove();               // Delete Krombopulos
            deleteMe = 555;                     // Set deleteMe to 555 (no opponent selected)
        } else if (deleteMe === 4123) {         // If var deleteMe has Lucius' code
            $(".pos14").remove();               // Delete Lucius
            deleteMe = 555;                     // Set deleteMe to 555 (no opponent selected)
        }
    };

    $(".attackButton").on("click", function() {                     // Attack button click event handler
        if ((tracker === true) || (deleteMe = 555)) {               // If var 'tracker' is true or var 'deleteMe' is 555 no opponent has been chosen
            $("infoDiv").html(" Choose an opponent first - are you attacking yourself?");   // Alert this
        } else if (tracker === false) {                             // Else if var 'tracker' is false
            yourDefend.HP = yourDefend.HP - yourChar.Attack;        // Subtract your attack power from the Defender's HP
            yourChar.HP = yourChar.HP - yourDefend.CounterAttack;   // Subtract the Defender's attack power from your HP
            attackerFu();                                           // Call the attackerFu function
        }
    })

    $(".resetButton").on("click", function() {
        location.reload();                      // Reload the page when the reset button is clicked
    });
});