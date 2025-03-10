$(document).ready(function() {
    var envelope = $("#envelope");
    var btnOpen = $("#open");
    var btnReset = $("#reset");

    // Open the envelope and display hearts
    function openEnvelope() {
        envelope.addClass("open").removeClass("close");
        createHearts();
    }

    // Close the envelope and remove hearts
    function closeEnvelope() {
        envelope.addClass("close").removeClass("open");
        $(".hearts").empty();
    }

    // Generate hearts that float upwards, centered in the middle of the letter
    function createHearts() {
        let heartsContainer = $(".hearts");
        heartsContainer.empty();

        // Create and add 5 hearts to the container
        for (let i = 0; i < 5; i++) {
            let heart = $("<div class='heart'></div>");
            heart.css({
                left: Math.random() * 80 + 10 + "%", // Random horizontal positioning between 10% and 90%
                animationDelay: "0s" // Remove delays so they appear instantly
            });

            // Add the heart to the container
            heartsContainer.append(heart);

            setTimeout(() => {
                heart.remove(); // Remove the heart after it disappears
            }, 2500); // Lifespan of each heart (shorter duration)
        }
    }

    // Events for opening and resetting the envelope
    btnOpen.click(function() {
        openEnvelope();
    });
    btnReset.click(function() {
        closeEnvelope();
    });
});

// Add hearts to the cursor
document.addEventListener("mousemove", function(e) {
    let heart = document.createElement("div");
    heart.classList.add("cursor-heart");

    heart.style.left = e.clientX + "px";
    heart.style.top = e.clientY + "px";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove(); // Remove the cursor heart after 1 second
    }, 1000);
});