let InterL, InterB, InterM, InterR, InterT;

function preload() {
    console.log('preload');
    InterL = loadFont('assets/Inter-Light.ttf');
    InterB = loadFont('assets/Inter-Bold.ttf');
    InterM = loadFont('assets/Inter-Medium.ttf');
    InterR = loadFont('assets/Inter-Regular.ttf');
    InterT = loadFont('assets/Inter-Thin.ttf');
}

function setup() {
    let c = createCanvas(828, 1792);
    background(245);
    textAlign(LEFT, TOP);
    c.hide();
}

function doFunction() {
    console.log("FIRE!");
    //Firstname+Nickname+Lastname
    textFont(InterL);
    textSize(30);
    text(document.getElementById("firstName").value + " " + document.getElementById("lastName").value, 37, 65);

    //Handle
    textFont(InterM);
    textSize(20);
    text('@' + document.getElementById("handle").value, 37, 110);

    //Gender and Orientation
    textFont(InterR);
    textSize(25);
    text(document.getElementById("gender").value + ' & ' + document.getElementById("sexOrient").value, 37, 154);

    //Current Status
    textFont(InterB);
    textSize(15);
    text('Current Status', 37, 214);
    textFont(InterL);
    textSize(25);
    text(document.getElementById("currentStatus").value, 37, 235, 37 + 372, 235 + 30);

    //Desired Status
    textFont(InterB);
    textSize(15);
    text('Desired Status', 419, 214);
    textFont(InterL);
    textSize(25);
    text(document.getElementById("desiredStatus").value, 419, 235, 419 + 372, 235 + 30);

    //Reasons to Engage
    textFont(InterB);
    textSize(15);
    text('Reasons to engage with me', 37, 306);
    textFont(InterL);
    textSize(20);
    text(document.getElementById("reason1").value, 37, 334, 37 + 372, 334 + 85);
    text(document.getElementById("reason2").value, 37, 429, 37 + 372, 429 + 85);
    text(document.getElementById("reason3").value, 37, 524, 37 + 372, 524 + 85);

    //Reasons NOT to Engage
    textFont(InterB);
    textSize(15);
    text('Reasons NOT to engage with me', 419, 306);
    textFont(InterL);
    textSize(20);
    text(document.getElementById("nreason1").value, 419, 334, 419 + 372, 334 + 85);
    text(document.getElementById("nreason2").value, 419, 429, 419 + 372, 429 + 85);
    text(document.getElementById("nreason3").value, 419, 524, 419 + 372, 524 + 85);

    //Dealmakers
    textFont(InterB);
    textSize(15);
    text('Dealmakers', 37, 619);
    textFont(InterL);
    textSize(20);
    text(document.getElementById("dealm1").value, 37, 647, 37 + 372, 647 + 85);
    text(document.getElementById("dealm2").value, 37, 742, 37 + 372, 742 + 85);
    text(document.getElementById("dealm3").value, 37, 837, 37 + 372, 837 + 85);

    //Dealbreakers
    textFont(InterB);
    textSize(15);
    text('Dealbreakers', 419, 619);
    textFont(InterL);
    textSize(20);
    text(document.getElementById("dealb1").value, 419, 647, 419 + 372, 647 + 85);
    text(document.getElementById("dealb2").value, 419, 742, 419 + 372, 742 + 85);
    text(document.getElementById("dealb3").value, 419, 837, 419 + 372, 837 + 85);

    //Relationship History
    textFont(InterM);
    textSize(25);
    text('Relationship History', 37, 932);

    //Relationship #1
    textFont(InterB);
    textSize(15);
    text('Relationship #1', 37, 993);
    //Relationship Type
    textFont(InterB);
    textSize(15);
    text('Relationship Type', 37, 1032, 37 + 372, 1032 + 24);
    textFont(InterL);
    textSize(20);
    
    text(document.getElementById("position1").value, 37, 1056, 37 + 372, 1056 + 24);
    //Relationship Length
    textFont(InterB);
    textSize(15);
    text('Length of Relationship', 37, 1100);
    textFont(InterL);
    textSize(20);
    text(document.getElementById("years1").value + ' Years ' + document.getElementById("months1").value + ' Months ' + document.getElementById("weeks1").value + ' Weeks', 37, 1124, 37 + 372, 1124 + 24);
    //Partner Details
    textFont(InterB);
    textSize(15);
    text('Partner Detail', 37, 1168);
    textFont(InterL);
    textSize(20);
    text(document.getElementById("description1").value, 37, 1192, 37 + 372, 1192 + 24);
    //Termination
    textFont(InterB);
    textSize(15);
    text('Cause for Termination', 37, 1236);
    textFont(InterL);
    textSize(20);
    text(document.getElementById("termination1").value, 37, 1260, 37 + 372, 1260 + 24);
    //Current Inter-personal status
    textFont(InterB);
    textSize(15);
    text('Current Inter-Personal Status', 37, 1304);
    textFont(InterL);
    textSize(20);
    text(document.getElementById("interpstatus1").value, 37, 1328, 37 + 372, 1328 + 24);


    //if (document.getElementById("position2").value.length >1) 
    if (document.getElementById("position2")=="position2") {
        console.log("not empty");

        //Relationship #2
        textFont(InterB);
        textSize(15);
        text('Relationship #2', 419, 993);
        //Relationship Type
        textFont(InterB);
        textSize(15);
        text('Relationship Type', 419, 1032);
        textFont(InterL);
        textSize(20);
        text(document.getElementById("position2").value, 419, 1056, 419 + 372, 1056 + 24);
        //Relationship Length
        textFont(InterB);
        textSize(15);
        text('Length of Relationship', 419, 1100);
        textFont(InterL);
        textSize(20);
        text(document.getElementById("years2").value + ' Years ' + document.getElementById("months2").value + ' Months ' + document.getElementById("weeks2").value + ' Weeks', 419, 1124, 419 + 372, 1124 + 24);
        //Partner Details
        textFont(InterB);
        textSize(15);
        text('Partner Detail', 419, 1168);
        textFont(InterL);
        textSize(20);
        text(document.getElementById("description2").value, 419, 1192, 419 + 372, 1192 + 24);
        //Termination
        textFont(InterB);
        textSize(15);
        text('Cause for Termination', 419, 1236);
        textFont(InterL);
        textSize(20);
        text(document.getElementById("termination2").value, 419, 1260, 419 + 372, 1260 + 24);
        //Current Inter-personal status
        textFont(InterB);
        textSize(15);
        text('Current Inter-Personal Status', 419, 1304);
        textFont(InterL);
        textSize(20);
        text(document.getElementById("interpstatus2").value, 419, 1328, 419 + 372, 1328 + 24);
    }


    //NFSW Section
    textFont(InterM);
    textSize(25);
    text('NFSW Section', 37, 1402);
    textFont(InterL);
    textSize(20);
    text(document.getElementById("ns1").value, 37, 1475, 37 + 372, 1475 + 24);
    text(document.getElementById("ns2").value, 37, 1573, 37 + 372, 1573 + 24);
    text(document.getElementById("ns3").value, 37, 1670, 37 + 372, 1670 + 24);
    
    saveCanvas('Relationship CV', 'png');
    background(245);
}
