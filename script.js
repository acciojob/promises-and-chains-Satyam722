//your JS code here. If required.
document.getElementById('votingForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const age = document.getElementById('age').value;
    const name = document.getElementById('name').value.trim();
    
    // Validation - check if inputs are empty
    if (!name || !age) {
        alert('Please enter valid details');
        return;
    }
    
    const ageNumber = parseInt(age);
    
    // Create promise with 4-second delay
    const votingPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (ageNumber > 18) {
                resolve(`Welcome, ${name}. You can vote.`);
            } else {
                reject(`Oh sorry ${name}. You aren't old enough.`);
            }
        }, 4000);
    });
    
    // Handle promise results
    votingPromise
        .then(message => {
            alert(message);
        })
        .catch(error => {
            alert(error);
        });
});