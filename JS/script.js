function reasonForContact(){
    var reason=prompt(
        "what is your reason for contact:\n1.projects \n2. job\n3. meeting \n4. other   "
    );
    reason= reason.toLowerCase();
    if (reason=="project"||reason=="1")
    {
        alert("contact: zaheen.abrar.1234@gmail.com");
    }

    else if(reason=="job"||reason=="2"){
        alert("call--> 01971222447");
    }
     else if(reason=="meet"||reason=="3"){
        alert("Visit uttara H-13");
    }
     else if(reason=="other"||reason=="4"){
        alert("call--> 01971222447");
    }
    else {
    alert("Reason not recognized.");
}

}