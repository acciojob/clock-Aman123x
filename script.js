//your JS code here. If required.
function updateTimer(){
	const timerElement=document.getElementById('timer');
	const currentDate=new Date();

	const formattedDate=currentDate.toLocaleDateString();
    const formattedTime = currentDate.toLocaleTimeString();

	timerElement.textContent = `${formattedDate} ${formattedTime}`;
}
	updateTimer();

	// Update the timer every second
	setInterval(updateTimer, 1000);