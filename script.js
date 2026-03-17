//your JS code here. If required.
const circles = document.querySelectorAll('.circle');
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');

let currentActive = 1;

// NEXT button click
nextBtn.addEventListener('click', () => {
    if (currentActive < circles.length) {
        currentActive++;
        update();
    }
});

// PREVIOUS button click
prevBtn.addEventListener('click', () => {
    if (currentActive > 1) {
        currentActive--;
        update();
    }
});

function update() {
    circles.forEach((circle, index) => {
        if (index < currentActive) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    });

    // Enable/Disable buttons
    if (currentActive === 1) {
        prevBtn.disabled = true;
    } else if (currentActive === circles.length) {
        nextBtn.disabled = true;
    } else {
        prevBtn.disabled = false;
        nextBtn.disabled = false;
    }

    // Update progress line (optional if you have a progress div)
    const progress = document.getElementById('progress');
    if (progress) {
        const percent = ((currentActive - 1) / (circles.length - 1)) * 100;
        progress.style.width = percent + "%";
    }
}