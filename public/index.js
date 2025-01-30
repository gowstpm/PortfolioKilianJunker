function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
// Get the navbar
const navbar = document.getElementById('navbar');

// Function to handle the sticky effect
window.onscroll = function() {
    if (window.pageYOffset > 0) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
};

// Smooth scrolling function
function scrollToSection(elementId) {
    document.getElementById(elementId).scrollIntoView({ behavior: 'smooth' });
}

// Add event listeners to navigation links
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const targetId = link.getAttribute('href').substring(1); // Remove the '#'
        scrollToSection(targetId);
    });
});


// Fonction pour charger les informations GitHub de base
function loadGitHubInfo() {
  const username = 'gowstpm';
  const userApiUrl = `https://api.github.com/users/${username}`;

  fetch(userApiUrl)
      .then(response => response.json())
      .then(userData => {
          const userInfoContainer = document.getElementById('github-user-info');
          userInfoContainer.innerHTML = `
              <div>
                  <img src="${userData.avatar_url}" alt="${userData.login}" class="rounded-circle" width="100">
                  <h3 class="mt-2">${userData.login}</h3>
                  <p>${userData.location || 'Localisation non spécifiée'}</p>
                  <a href="${userData.html_url}" target="_blank" class="btn btn-outline-primary">Voir le profil GitHub</a>
              </div>
          `;
      })
      .catch(error => {
          console.error('Erreur lors du chargement des informations GitHub:', error);
          document.getElementById('github-user-info').innerHTML = '<p>Impossible de charger les informations GitHub pour le moment.</p>';
      });
}

// Charger les informations GitHub au chargement de la page
window.addEventListener('load', loadGitHubInfo);

