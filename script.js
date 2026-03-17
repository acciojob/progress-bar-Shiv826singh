document.addEventListener("DOMContentLoaded", function () {

    const circles = document.querySelectorAll('.circle');
    const nextBtn = document.getElementById('next');
    const prevBtn = document.getElementById('prev');
    const progress = document.getElementById('progress');

    let currentActive = 1;

    nextBtn.addEventListener('click', () => {
        if (currentActive < circles.length) {
            currentActive++;
            update();
        }
    });

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

        // Buttons
        prevBtn.disabled = currentActive === 1;
        nextBtn.disabled = currentActive === circles.length;

        // Progress bar
        const percent = ((currentActive - 1) / (circles.length - 1)) * 100;
        progress.style.width = percent + "%";
    }

});