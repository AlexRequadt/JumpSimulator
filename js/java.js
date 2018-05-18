function JumpSimulator() {


	var jump = prompt("Please input your jump below... Use proper jump descriptions as shown below");

	var factor = prompt("Please input desired grade of execution from 3 to-3");

	var b = getBaseScore(jump);
	var story = "Your Score for this jump is: " + b + " points!!!"; 
	document.getElementById("FinalScore").innerHTML = story;








	
function getBaseScore( j )
{

	if( j == "1A") {
		return 1.1 + factor*0.2;
	}
	if( j == "1T") {
		return 0.4 + factor*0.2;
	}
	if( j == "1S") {
		return 0.4 + factor*0.2;
	}
	if( j == "1Lo") {
		return 0.5 + factor*0.2;
	}
	if( j == "1F") {
		return 0.5 + factor*0.2;
	}
	if( j == "1Lz") {
		return 0.6 + factor*0.2;
	}
	if( j == "2T") {
		return 1.3 + factor*0.2;
	}
	if( j == "2S") {
		return 1.3 + factor*0.2;
	}
	if( j == "2Lo") {
		return 1.8 + factor*0.3;
	}
	if( j == "2F") {
		return 1.8 + factor*0.3;
	}
	if( j == "2Lz") {
		return 2.1 + factor*0.3;
	}
	if( j == "2A") {
		return 3.3 + factor*0.5;
	}
	if( j == "3T") {
		return 4.1 + factor*0.7;
	}
	if( j == "3S") {
		return 4.2 + factor*0.7;
	}
	if( j == "3Lo") {
		return 5.1 + factor*0.7;
	}
	if( j == "3F") {
		return 5.3 + factor*0.7;
	}
	if( j == "3Lz") {
		return 6.0 + factor*0.7;
	}
	if( j == "3A") {
		return 8.5 + factor*1.0;
	}
	if( j == "4T") {
		return 10.3 + factor*1.0;
	}
	if( j == "4S") {
		return 10.5 + factor*1.0;
	}
	if( j == "4Lo") {
		return 12.0 + factor*1.0;
	}
	if( j == "4F") {
		return 12.3 + factor*1.0;
	}
	if( j == "4Lz") {
		return 13.6 + factor*1.0; 
	}
	if( j == "4A") {
		return 15.0 + factor*1.5;
	}

	return 0;
}
	
	
	
	
	
	
	
	
	
	
	



	

}


