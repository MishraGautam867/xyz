document.addEventListener('click', (e) => {
    const circleElem = document.createElement('div');
    circleElem.style.top = e.clientY + 'px';
    circleElem.style.left = e.clientX + 'px';
    circleElem.classList.add('circle');
    container.append(circleElem);

    // Remove circle after animation completes
    setTimeout(() => {
        circleElem.remove();
    }, 600); // Match the animation duration
});
