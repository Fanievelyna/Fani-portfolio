// Add event listener to the Home link
document.getElementById('homeLink').addEventListener('click', function(event) {
    event.preventDefault();
    console.log('Home Link Clicked');
    document.getElementById('homePage').classList.remove('hidden');
    document.getElementById('worksPage').classList.add('hidden');
    document.getElementById('blenderPage').classList.add('hidden');
    document.getElementById('traditionalPage').classList.add('hidden');
    document.getElementById('othersPage').classList.add('hidden');
});

// Add event listener to the Works link
document.getElementById('worksLink').addEventListener('click', function(event) {
    event.preventDefault();
    console.log('Works Link Clicked');
    document.getElementById('homePage').classList.add('hidden');
    document.getElementById('worksPage').classList.remove('hidden');
    document.getElementById('blenderPage').classList.add('hidden');
    document.getElementById('traditionalPage').classList.add('hidden');
    document.getElementById('othersPage').classList.add('hidden');
});

// Add event listener to the Blender link
document.getElementById('blenderLink').addEventListener('click', function(event) {
    event.preventDefault();
    console.log('Blender Link Clicked');
    document.getElementById('homePage').classList.add('hidden');
    document.getElementById('worksPage').classList.add('hidden');
    document.getElementById('blenderPage').classList.remove('hidden');
    document.getElementById('traditionalPage').classList.add('hidden');
    document.getElementById('othersPage').classList.add('hidden');
});

// Add event listener to the Traditional link
document.getElementById('traditionalLink').addEventListener('click', function(event) {
    event.preventDefault();
    console.log('Traditional Link Clicked');
    document.getElementById('homePage').classList.add('hidden');
    document.getElementById('worksPage').classList.add('hidden');
    document.getElementById('blenderPage').classList.add('hidden');
    document.getElementById('traditionalPage').classList.remove('hidden');
    document.getElementById('othersPage').classList.add('hidden');
});

// Add event listener to the Others link
document.getElementById('othersLink').addEventListener('click', function(event) {
    event.preventDefault();
    console.log('Others Link Clicked');
    document.getElementById('homePage').classList.add('hidden');
    document.getElementById('worksPage').classList.add('hidden');
    document.getElementById('blenderPage').classList.add('hidden');
    document.getElementById('traditionalPage').classList.add('hidden');
    document.getElementById('othersPage').classList.remove('hidden');
});

// Scroll Reveal
const sr = ScrollReveal ({
    origin: 'top',
    distance: '40px',
    duration: 1500,
    reset: true
});

sr.reveal('.content-image, .content-text, .content-contacts, .contacts-info, .image-container, image-container-traditional',{interval:200})
