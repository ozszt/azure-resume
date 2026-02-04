/*
    JS code for the My Skills section and tab content switching.
*/

document.addEventListener('DOMContentLoaded', () => {
    const skillBtns = document.querySelectorAll('.skill-btns .button');
    const skillContents = document.querySelectorAll('.skill-content');

    skillBtns.forEach(btn => {
        btn.addEventListener('click', e => {
            // Prevent page jump when clicking due to href
            e.preventDefault();

            /* // Remove active from all buttons and add it to the clicked button
            skillBtns.forEach(button => button.classList.remove('active'));
            btn.classList.add('active'); */

            // Hide other content sections
            skillContents.forEach(content => content.classList.remove('active'));

            // Show selected content
            const target = btn.getAttribute('data-target');
            document.getElementById(target).classList.add('active');
        })
    })
})