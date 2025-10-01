// Gaming Application JavaScript

// Application Data
const appData = {
    "user": {
      "name": "GamerPro",
      "level": 42,
      "xp": 15840,
      "totalPlaytime": "1,247 hours",
      "gamesOwned": 156,
      "achievementsUnlocked": 342,
      "avatar": "https://via.placeholder.com/100x100/6366f1/white?text=GP"
    },
    "games": [
      {
        "id": 1,
        "title": "Apex Legends",
        "genre": "Battle Royale",
        "cover": "https://picfiles.alphacoders.com/631/631913.jpg",
        "rating": 4.8,
        "price": "Free",
        "playtime": "245 hours",
        "completion": 67,
        "lastPlayed": "2 hours ago"
      },
      {
        "id": 2,
        "title": "Valorant",
        "genre": "FPS",
        "cover": "https://images5.alphacoders.com/136/1360655.png",
        "rating": 4.7,
        "price": "Free",
        "playtime": "189 hours",
        "completion": 45,
        "lastPlayed": "1 day ago"
      },
      {
        "id": 3,
        "title": "Cyberpunk 2077",
        "genre": "RPG",
        "cover": "https://images6.alphacoders.com/133/thumb-1920-1336181.png",
        "rating": 4.2,
        "price": "$29.99",
        "playtime": "78 hours",
        "completion": 89,
        "lastPlayed": "3 days ago"
      },
      {
        "id": 4,
        "title": "Red Dead Redemption 2",
        "genre": "Open World",
        "cover": "https://images7.alphacoders.com/105/thumb-1920-1054152.jpg",
        "rating": 4.9,
        "price": "$39.99",
        "playtime": "156 hours",
        "completion": 92,
        "lastPlayed": "1 week ago"
      },
      {
        "id": 5,
        "title": "God of War",
        "genre": "Action",
        "cover": "https://images3.alphacoders.com/925/thumb-1920-925329.jpg",
        "rating": 4.8,
        "price": "$19.99",
        "playtime": "45 hours",
        "completion": 100,
        "lastPlayed": "2 weeks ago"
      },
      {
        "id": 6,
        "title": "Genshin Impact",
        "genre": "RPG",
        "cover": "https://images3.alphacoders.com/131/thumb-1920-1311019.jpg",
        "rating": 4.5,
        "price": "Free",
        "playtime": "234 hours",
        "completion": 78,
        "lastPlayed": "Yesterday"
      }
    ],
    "achievements": [
      {
        "name": "First Victory",
        "description": "Win your first match",
        "icon": "🏆",
        "unlocked": true,
        "rarity": "Common"
      },
      {
        "name": "Sharpshooter",
        "description": "Get 100 headshots",
        "icon": "🎯",
        "unlocked": true,
        "rarity": "Rare"
      },
      {
        "name": "Marathon Gamer",
        "description": "Play for 1000+ hours",
        "icon": "⏰",
        "unlocked": true,
        "rarity": "Epic"
      },
      {
        "name": "Completionist",
        "description": "100% completion in 5 games",
        "icon": "💎",
        "unlocked": false,
        "rarity": "Legendary"
      }
    ],
    "leaderboards": [
      {
        "rank": 1,
        "player": "ProGamer2024",
        "score": 15840,
        "avatar": "https://via.placeholder.com/50x50/f59e0b/white?text=P1"
      },
      {
        "rank": 2,
        "player": "EliteSniper",
        "score": 14750,
        "avatar": "https://via.placeholder.com/50x50/ef4444/white?text=E2"
      },
      {
        "rank": 3,
        "player": "GamerPro",
        "score": 13920,
        "avatar": "https://via.placeholder.com/50x50/6366f1/white?text=GP"
      },
      {
        "rank": 4,
        "player": "NinjaPlayer",
        "score": 12880,
        "avatar": "https://via.placeholder.com/50x50/8b5cf6/white?text=N4"
      },
      {
        "rank": 5,
        "player": "RapidFire",
        "score": 11650,
        "avatar": "https://via.placeholder.com/50x50/059669/white?text=R5"
      }
    ],
    "featuredGames": [
      {
        "title": "Call of Duty: Warzone",
        "description": "The ultimate battle royale experience",
        "image": "https://images7.alphacoders.com/131/1318438.jpeg",
        "price": "Free"
      },
      {
        "title": "Destiny 2",
        "description": "Guardian adventures await",
        "image": "https://images4.alphacoders.com/817/thumb-1920-817281.jpg",
        "price": "Free"
      },
      {
        "title": "Watch Dogs Legion",
        "description": "Hack the system in near-future London",
        "image": "https://artfiles.alphacoders.com/819/thumb-1920-81986.jpg",
        "price": "$24.99"
      }
    ],
    "genres": ["FPS", "RPG", "Battle Royale", "Open World", "Action", "Strategy", "Racing", "Sports", "Indie", "Simulation"],
    "news": [
      {
        "title": "Major Update Released for Apex Legends",
        "summary": "New character and map changes",
        "time": "2 hours ago"
      },
      {
        "title": "Valorant Championship Series Begins",
        "summary": "Watch the best teams compete",
        "time": "1 day ago"
      },
      {
        "title": "Gaming Hardware Sale This Weekend",
        "summary": "Up to 50% off on premium gear",
        "time": "2 days ago"
      }
    ]
  };
  
  // Application State
  let currentPage = 'home';
  let filteredGames = [...appData.games];
  let currentSearchTerm = '';
  let currentGenreFilter = '';
  let currentSortOption = 'recent';
  
  // DOM Elements
  const navButtons = document.querySelectorAll('.nav-btn');
  const pages = document.querySelectorAll('.page');
  const gameModal = document.getElementById('game-modal');
  const modalOverlay = document.getElementById('modal-overlay');
  const modalClose = document.getElementById('modal-close');
  const modalBody = document.getElementById('modal-body');
  
  // Initialize Application
  document.addEventListener('DOMContentLoaded', function() {
      initializeNavigation();
      populateHomePage();
      populateLibraryPage();
      populateStorePage();
      populateProfilePage();
      populateLeaderboardsPage();
      setupSettingsTabs();
      setupModal();
      setupSearch();
      setupAnimations();
      
      // Animate user name on load
      animateWelcomeText();
  });
  
  // Navigation System
  function initializeNavigation() {
      navButtons.forEach(button => {
          button.addEventListener('click', function() {
              const targetPage = this.dataset.page;
              navigateToPage(targetPage);
          });
      });
  }
  
  function navigateToPage(pageName) {
      // Update navigation buttons
      navButtons.forEach(btn => btn.classList.remove('active'));
      document.querySelector(`[data-page="${pageName}"]`).classList.add('active');
      
      // Update pages
      pages.forEach(page => page.classList.remove('active'));
      document.getElementById(`${pageName}-page`).classList.add('active');
      
      currentPage = pageName;
      
      // Add page transition effect
      const activePage = document.getElementById(`${pageName}-page`);
      activePage.style.opacity = '0';
      activePage.style.transform = 'translateY(20px)';
      
      setTimeout(() => {
          activePage.style.transition = 'all 0.5s ease';
          activePage.style.opacity = '1';
          activePage.style.transform = 'translateY(0)';
      }, 50);
  }
  
  // Home Page Population
  function populateHomePage() {
      populateFeaturedCarousel();
      populateActivityFeed();
      populateNewsGrid();
  }
  
  function populateFeaturedCarousel() {
      const carousel = document.getElementById('featured-carousel');
      carousel.innerHTML = '';
      
      appData.featuredGames.forEach((game, index) => {
          const gameCard = createFeaturedGameCard(game, index);
          carousel.appendChild(gameCard);
      });
  }
  
  function createFeaturedGameCard(game, index) {
      const card = document.createElement('div');
      card.className = 'featured-card';
      card.style.animationDelay = `${index * 0.2}s`;
      
      card.innerHTML = `
          <img src="${game.image}" alt="${game.title}" class="featured-image">
          <div class="featured-info">
              <h3 class="featured-title">${game.title}</h3>
              <p class="featured-description">${game.description}</p>
              <p class="featured-price">${game.price}</p>
          </div>
      `;
      
      card.addEventListener('click', () => showGameModal(game));
      
      return card;
  }
  
  function populateActivityFeed() {
      const feed = document.getElementById('activity-feed');
      feed.innerHTML = '';
      
      const activities = [
          { title: "Achievement Unlocked!", description: "Earned 'Sharpshooter' in Valorant", time: "2 hours ago" },
          { title: "New High Score!", description: "Beat your best score in Apex Legends", time: "1 day ago" },
          { title: "Game Completed", description: "Finished God of War with 100% completion", time: "2 weeks ago" }
      ];
      
      activities.forEach((activity, index) => {
          const item = document.createElement('div');
          item.className = 'activity-item';
          item.style.animationDelay = `${index * 0.1}s`;
          
          item.innerHTML = `
              <div class="activity-title">${activity.title}</div>
              <div class="activity-description">${activity.description}</div>
              <div class="activity-time">${activity.time}</div>
          `;
          
          feed.appendChild(item);
      });
  }
  
  function populateNewsGrid() {
      const grid = document.getElementById('news-grid');
      grid.innerHTML = '';
      
      appData.news.forEach((newsItem, index) => {
          const item = document.createElement('div');
          item.className = 'news-item';
          item.style.animationDelay = `${index * 0.15}s`;
          
          item.innerHTML = `
              <h3 class="news-title">${newsItem.title}</h3>
              <p class="news-summary">${newsItem.summary}</p>
              <span class="news-time">${newsItem.time}</span>
          `;
          
          grid.appendChild(item);
      });
  }
  
  // Library Page Population
  function populateLibraryPage() {
      populateGenreFilter();
      updateGamesGrid();
  }
  
  function populateGenreFilter() {
      const genreFilter = document.getElementById('genre-filter');
      const uniqueGenres = [...new Set(appData.games.map(game => game.genre))];
      
      uniqueGenres.forEach(genre => {
          const option = document.createElement('option');
          option.value = genre;
          option.textContent = genre;
          genreFilter.appendChild(option);
      });
  }
  
  function updateGamesGrid() {
      const grid = document.getElementById('games-grid');
      grid.innerHTML = '';
      
      filteredGames.forEach((game, index) => {
          const gameCard = createGameCard(game, index);
          grid.appendChild(gameCard);
      });
  }
  
  function createGameCard(game, index) {
      const card = document.createElement('div');
      card.className = 'game-card';
      card.style.animationDelay = `${index * 0.1}s`;
      
      const stars = '★'.repeat(Math.floor(game.rating)) + '☆'.repeat(5 - Math.floor(game.rating));
      
      card.innerHTML = `
          <img src="${game.cover}" alt="${game.title}" class="game-cover">
          <div class="game-info">
              <h3 class="game-title">${game.title}</h3>
              <p class="game-genre">${game.genre}</p>
              <div class="game-stats">
                  <div class="game-rating">
                      <span>${stars}</span>
                      <span>${game.rating}</span>
                  </div>
                  <span class="game-playtime">${game.playtime}</span>
              </div>
              <div class="progress-bar">
                  <div class="progress-fill" style="width: ${game.completion}%"></div>
              </div>
              <div class="completion-text">${game.completion}% Complete</div>
          </div>
      `;
      
      card.addEventListener('click', () => showGameModal(game));
      
      return card;
  }
  
  // Store Page Population
  function populateStorePage() {
      populateStoreCarousel();
      populateGenresGrid();
  }
  
  function populateStoreCarousel() {
      const carousel = document.getElementById('store-carousel');
      carousel.innerHTML = '';
      
      appData.featuredGames.forEach((game, index) => {
          const gameCard = createFeaturedGameCard(game, index);
          carousel.appendChild(gameCard);
      });
  }
  
  function populateGenresGrid() {
      const grid = document.getElementById('genres-grid');
      grid.innerHTML = '';
      
      appData.genres.forEach((genre, index) => {
          const genreCard = document.createElement('div');
          genreCard.className = 'genre-card';
          genreCard.style.animationDelay = `${index * 0.1}s`;
          
          genreCard.innerHTML = `
              <h3 class="genre-name">${genre}</h3>
          `;
          
          genreCard.addEventListener('click', () => {
              navigateToPage('library');
              setTimeout(() => {
                  document.getElementById('genre-filter').value = genre;
                  filterGames();
              }, 100);
          });
          
          grid.appendChild(genreCard);
      });
  }
  
  // Profile Page Population
  function populateProfilePage() {
      populateAchievements();
      animateProgressBars();
  }
  
  function populateAchievements() {
      const grid = document.getElementById('achievements-grid');
      grid.innerHTML = '';
      
      appData.achievements.forEach((achievement, index) => {
          const card = document.createElement('div');
          card.className = `achievement-card ${achievement.unlocked ? 'unlocked' : ''}`;
          card.style.animationDelay = `${index * 0.1}s`;
          
          card.innerHTML = `
              <div class="achievement-icon">${achievement.icon}</div>
              <div class="achievement-info">
                  <h4>${achievement.name}</h4>
                  <p>${achievement.description}</p>
                  <span class="achievement-rarity">${achievement.rarity}</span>
              </div>
          `;
          
          grid.appendChild(card);
      });
  }
  
  function animateProgressBars() {
      setTimeout(() => {
          const progressBars = document.querySelectorAll('.progress-fill');
          progressBars.forEach(bar => {
              const width = bar.style.width;
              bar.style.width = '0%';
              setTimeout(() => {
                  bar.style.width = width;
              }, 100);
          });
      }, 500);
  }
  
  // Leaderboards Page Population
  function populateLeaderboardsPage() {
      const container = document.getElementById('leaderboard-container');
      container.innerHTML = '';
      
      appData.leaderboards.forEach((player, index) => {
          const item = document.createElement('div');
          item.className = `leaderboard-item ${player.player === 'GamerPro' ? 'current-user' : ''}`;
          item.style.animationDelay = `${index * 0.1}s`;
          
          item.innerHTML = `
              <div class="rank-number ${player.rank <= 3 ? 'top-3' : ''}">#${player.rank}</div>
              <img src="${player.avatar}" alt="${player.player}" class="player-avatar">
              <div class="player-info">
                  <div class="player-name">${player.player}</div>
              </div>
              <div class="player-score">${player.score.toLocaleString()}</div>
          `;
          
          container.appendChild(item);
      });
  }
  
  // Settings Tabs
  function setupSettingsTabs() {
      const tabButtons = document.querySelectorAll('.tab-btn');
      const tabContents = document.querySelectorAll('.tab-content');
      
      tabButtons.forEach(button => {
          button.addEventListener('click', function() {
              const targetTab = this.dataset.tab;
              
              // Update tab buttons
              tabButtons.forEach(btn => btn.classList.remove('active'));
              this.classList.add('active');
              
              // Update tab contents
              tabContents.forEach(content => content.classList.remove('active'));
              document.getElementById(`${targetTab}-tab`).classList.add('active');
          });
      });
      
      // Setup sliders
      setupSliders();
  }
  
  function setupSliders() {
      const sliders = document.querySelectorAll('.slider');
      sliders.forEach(slider => {
          const updateValue = () => {
              const valueSpan = slider.nextElementSibling;
              if (valueSpan && valueSpan.classList.contains('slider-value')) {
                  if (slider.parentElement.querySelector('label').textContent.includes('Volume')) {
                      valueSpan.textContent = slider.value + '%';
                  } else if (slider.parentElement.querySelector('label').textContent.includes('Quality')) {
                      const qualities = ['Low', 'Medium', 'High', 'Very High', 'Ultra'];
                      valueSpan.textContent = qualities[slider.value - 1];
                  }
              }
          };
          
          slider.addEventListener('input', updateValue);
          updateValue(); // Initialize
      });
  }
  
  // Modal System
  function setupModal() {
      modalOverlay.addEventListener('click', closeModal);
      modalClose.addEventListener('click', closeModal);
      
      document.addEventListener('keydown', function(e) {
          if (e.key === 'Escape' && !gameModal.classList.contains('hidden')) {
              closeModal();
          }
      });
  }
  
  function showGameModal(game) {
      const stars = '★'.repeat(Math.floor(game.rating)) + '☆'.repeat(5 - Math.floor(game.rating));
      
      modalBody.innerHTML = `
          <img src="${game.cover || game.image}" alt="${game.title}" style="width: 100%; height: 300px; object-fit: cover; border-radius: 8px; margin-bottom: 20px;">
          <h2 style="color: var(--text-primary); margin-bottom: 16px;">${game.title}</h2>
          <p style="color: var(--text-secondary); margin-bottom: 16px;">${game.description || `Experience the ultimate ${game.genre} adventure!`}</p>
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
              <div style="display: flex; align-items: center; gap: 8px;">
                  <span style="color: var(--neon-orange);">${stars}</span>
                  <span style="color: var(--text-primary);">${game.rating || '4.5'}</span>
              </div>
              <span style="font-size: 18px; font-weight: bold; color: var(--neon-cyan);">${game.price}</span>
          </div>
          ${game.playtime ? `
          <div style="margin-bottom: 20px;">
              <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                  <span style="color: var(--text-secondary);">Playtime: ${game.playtime}</span>
                  <span style="color: var(--text-secondary);">Last played: ${game.lastPlayed}</span>
              </div>
              <div style="background: rgba(255, 255, 255, 0.1); height: 6px; border-radius: 3px; overflow: hidden;">
                  <div style="height: 100%; background: var(--gradient-accent); width: ${game.completion}%;"></div>
              </div>
              <span style="color: var(--text-muted); font-size: 12px;">${game.completion}% Complete</span>
          </div>` : ''}
          <button class="btn btn--primary" style="width: 100%; margin-top: 20px;" onclick="closeModal()">
              ${game.playtime ? 'Play Now' : 'Add to Library'}
          </button>
      `;
      
      gameModal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
  }
  
  function closeModal() {
      gameModal.classList.add('hidden');
      document.body.style.overflow = 'auto';
  }
  
  // Search and Filter System
  function setupSearch() {
      const gameSearch = document.getElementById('game-search');
      const genreFilter = document.getElementById('genre-filter');
      const sortFilter = document.getElementById('sort-filter');
      const storeSearch = document.getElementById('store-search');
      
      if (gameSearch) {
          gameSearch.addEventListener('input', function() {
              currentSearchTerm = this.value.toLowerCase();
              filterGames();
          });
      }
      
      if (genreFilter) {
          genreFilter.addEventListener('change', function() {
              currentGenreFilter = this.value;
              filterGames();
          });
      }
      
      if (sortFilter) {
          sortFilter.addEventListener('change', function() {
              currentSortOption = this.value;
              filterGames();
          });
      }
      
      if (storeSearch) {
          storeSearch.addEventListener('input', function() {
              // Store search functionality could be implemented here
              console.log('Store search:', this.value);
          });
      }
  }
  
  function filterGames() {
      filteredGames = appData.games.filter(game => {
          const matchesSearch = game.title.toLowerCase().includes(currentSearchTerm) || 
                              game.genre.toLowerCase().includes(currentSearchTerm);
          const matchesGenre = currentGenreFilter === '' || game.genre === currentGenreFilter;
          return matchesSearch && matchesGenre;
      });
      
      // Sort games
      switch (currentSortOption) {
          case 'alphabetical':
              filteredGames.sort((a, b) => a.title.localeCompare(b.title));
              break;
          case 'playtime':
              filteredGames.sort((a, b) => parseInt(b.playtime) - parseInt(a.playtime));
              break;
          case 'completion':
              filteredGames.sort((a, b) => b.completion - a.completion);
              break;
          case 'recent':
          default:
              // Keep original order for recent
              break;
      }
      
      updateGamesGrid();
  }
  
  // Animation System
  function setupAnimations() {
      // Intersection Observer for scroll animations
      const observerOptions = {
          threshold: 0.1,
          rootMargin: '0px 0px -50px 0px'
      };
      
      const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  entry.target.style.opacity = '1';
                  entry.target.style.transform = 'translateY(0)';
              }
          });
      }, observerOptions);
      
      // Observe elements that should animate on scroll
      const animateElements = document.querySelectorAll('.game-card, .featured-card, .stat-box, .achievement-card, .news-item, .genre-card');
      animateElements.forEach(el => {
          el.style.opacity = '0';
          el.style.transform = 'translateY(20px)';
          el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
          observer.observe(el);
      });
  }
  
  function animateWelcomeText() {
      const userName = document.querySelector('.user-name');
      if (userName) {
          userName.style.opacity = '0';
          setTimeout(() => {
              userName.style.transition = 'opacity 1s ease';
              userName.style.opacity = '1';
          }, 500);
      }
  }
  
  // Utility Functions
  function createRippleEffect(element, event) {
      const ripple = document.createElement('span');
      const rect = element.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = event.clientX - rect.left - size / 2;
      const y = event.clientY - rect.top - size / 2;
      
      ripple.style.width = ripple.style.height = size + 'px';
      ripple.style.left = x + 'px';
      ripple.style.top = y + 'px';
      ripple.classList.add('ripple');
      
      element.appendChild(ripple);
      
      setTimeout(() => {
          ripple.remove();
      }, 600);
  }
  
  // Add ripple effect to buttons
  document.addEventListener('click', function(e) {
      if (e.target.classList.contains('btn') || e.target.classList.contains('nav-btn')) {
          createRippleEffect(e.target, e);
      }
  });
  
  // Add hover effects to cards
  document.addEventListener('DOMContentLoaded', function() {
      const cards = document.querySelectorAll('.game-card, .featured-card, .genre-card');
      cards.forEach(card => {
          card.addEventListener('mouseenter', function() {
              this.style.transform = 'translateY(-10px) scale(1.02)';
          });
          
          card.addEventListener('mouseleave', function() {
              this.style.transform = 'translateY(0) scale(1)';
          });
      });
  });
  
  // Smooth scrolling for internal navigation
  document.addEventListener('click', function(e) {
      if (e.target.tagName === 'A' && e.target.getAttribute('href').startsWith('#')) {
          e.preventDefault();
          const targetId = e.target.getAttribute('href').substring(1);
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
              targetElement.scrollIntoView({ behavior: 'smooth' });
          }
      }
  });
  
  // Performance optimization: Lazy loading for images
  function setupLazyLoading() {
      const images = document.querySelectorAll('img[data-src]');
      const imageObserver = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  const img = entry.target;
                  img.src = img.dataset.src;
                  img.removeAttribute('data-src');
                  imageObserver.unobserve(img);
              }
          });
      });
      
      images.forEach(img => imageObserver.observe(img));
  }
  
  // Initialize lazy loading
  document.addEventListener('DOMContentLoaded', setupLazyLoading);
  
  // Add CSS for ripple effect
  const rippleCSS = `
      .ripple {
          position: absolute;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.3);
          transform: scale(0);
          animation: ripple-animation 0.6s linear;
          pointer-events: none;
      }
      
      @keyframes ripple-animation {
          to {
              transform: scale(4);
              opacity: 0;
          }
      }
  `;
  
  const style = document.createElement('style');
  style.textContent = rippleCSS;
  document.head.appendChild(style);
  
  // Console welcome message
  console.log(`
  🎮 Welcome to GameHub Pro! 🎮
  ============================
  Ready to dominate the gaming world?
  Application loaded successfully!
  `);
  
  // Error handling
  window.addEventListener('error', function(e) {
      console.error('Application error:', e.error);
  });
  
  // Prevent context menu on production
  document.addEventListener('contextmenu', function(e) {
      e.preventDefault();
  });