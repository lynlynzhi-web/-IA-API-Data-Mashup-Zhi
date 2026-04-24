const form = document.getElementById("leadForm");
const status = document.getElementById("status");
const button = document.getElementById("submitBtn");

form.addEventListener("submit", async (event) => {
    event.preventDefault();

    status.innerText = "Sending...";
    button.disabled = true;

    const data = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };

    try {
        const response = await fetch("/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();

        if (result.success) {
            status.innerText = "Sent successfully!";
            form.reset();

            setTimeout(() => {
                status.innerText = "";
            }, 3000);
        } else {
            status.innerText = "Failed to send data";
        }
    } catch (error) {
        console.error(error);
        status.innerText = "Server error";
    }

    button.disabled = false;
});
