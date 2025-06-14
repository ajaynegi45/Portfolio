export function initContactForm() {
    const form = document.getElementById("form");
    const result = document.getElementById("result");
    const inputs = form?.querySelectorAll("input, textarea");

    if (!form || !result || !inputs) return;

    let pinged = false;

    inputs.forEach((el) => {
        el.addEventListener("focus", () => {
            if (!pinged) {
                pinged = true;
                fetch("https://0u6n608iw4.execute-api.ap-south-1.amazonaws.com/formmailly/api/contact", {
                    method: "GET",
                    mode: "no-cors",
                }).catch(() => {});
            }
        }, { once: true });
    });

    form.addEventListener("submit", async (e) => {
        e.preventDefault();
        form.classList.add("was-validated");

        if (!form.checkValidity()) {
            form.querySelector(":invalid")?.focus();
            return;
        }

        const formData = new FormData(form);
        const payload = {
            name: formData.get("name"),
            email: formData.get("email"),
            reason: formData.get("reason"),
            message: formData.get("message"),
        };

        result.innerHTML = "⏳ Sending your message...";
        result.style.background = "#d4d4d8";
        result.style.color = "#111";

        try {
            const res = await fetch("https://0u6n608iw4.execute-api.ap-south-1.amazonaws.com/formmailly/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });

            if (!res.ok) throw new Error(`Server error: ${res.status}`);
            const data = await res.json();

            result.innerHTML = `✅ ${data.message || "Message sent successfully!"}`;
            result.style.background = "#22C55E";
            form.reset();
        } catch (err) {
            console.error("Error submitting form:", err);
            result.innerHTML = "❌ Failed to send message. Please try again.";
            result.style.background = "#ef4444";
            result.style.color = "#fff";
        }
    });
}
