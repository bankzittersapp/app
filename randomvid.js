function generateRandomNumber() {
    // Generate a random number between 1 and 10
    var randomNumber = Math.floor(Math.random() * 405) + 1;

    // Fetch the data from the text file
    fetch('https://banzitersapp.github.io/bankzittersappp.github.io/data.txt')
        .then(response => response.text())
        .then(data => {
            // Parse the data
            var lines = data.split('\n');
            var numberList = {};

            // Build the number list object
            lines.forEach(line => {
                var parts = line.split(',');
                var number = parseInt(parts[0]);
                numberList[number] = {
                    name: parts[1],
                    sentence: parts[2],
                    videoUrl: parts[3]
                };
            });

            // Get the popup elements
            var popupNumber = document.getElementById("popup-number");
            var popupName = document.getElementById("popup-name");
            var popupVideo = document.getElementById("popup-video");
            var popup = document.getElementById("popup");

            // Check if the generated number exists in the list
            if (randomNumber in numberList) {
                // Display the number, name, and video in the popup
                popupNumber.textContent = randomNumber;
                popupName.textContent = numberList[randomNumber].name;
                popupVideo.src = numberList[randomNumber].videoUrl;
                popup.style.display = "block"; // Show the popup
            } else {
                // Handle the case if the number is not in the list
                popupNumber.textContent = randomNumber;
                popupName.textContent = "";
                popupVideo.src = "";
                popup.style.display = "block"; // Show the popup
            }
        })
        .catch(error => {
            console.log('Error:', error);
        });
}

function closePopup() {
    // Hide the popup
    var popup = document.getElementById("popup");
    popup.style.display = "none";
}