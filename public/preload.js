console.log('Im from the preload!');

document.addEventListener('DOMContentLoaded', () => {
    console.log('Im logged on DOMContentLoaded success');
    document.body.setAttribute('class', 'green');
});