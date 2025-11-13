/**
 * Menu Item Image Loader
 * This script automatically loads images for menu items from the images/menu-items folder
 * 
 * Naming Convention:
 * - shorshe-ilish.jpg -> Shorshe Ilish
 * - chicken-rezala.jpg -> Chicken Rezala
 * - etc.
 */

// Map of menu items to their image file names
const menuItemImages = {
  'shorshe-ilish': 'shorshe-ilish',
  'chicken-rezala': 'chicken-rezala',
  'chingri-malai-curry': 'chingri-malai-curry',
  'kacchi-biryani': 'kacchi-biryani',
  'chicken-tehari': 'chicken-tehari',
  'beef-kala-bhuna': 'beef-kala-bhuna',
  'chicken-roast': 'chicken-roast',
  'beef-rezala': 'beef-rezala',
  'chicken-curry': 'chicken-curry',
  'vegetable-khichuri': 'vegetable-khichuri',
  'fuchka': 'fuchka',
  'chicken-lollipop': 'chicken-lollipop',
  'shingara': 'shingara',
  'kabab-skewers': 'kabab-skewers',
  'pakora-platter': 'pakora-platter',
  'egg-roll': 'egg-roll',
  'roti-naan': 'roti-naan',
  'paratha': 'paratha',
  'boiled-egg': 'boiled-egg',
  'fried-egg': 'fried-egg',
  'green-salad': 'green-salad',
  'raita': 'raita',
  'achar': 'achar',
  'firni': 'firni',
  'roshmalai': 'roshmalai',
  'gulab-jamun': 'gulab-jamun',
  'borhani': 'borhani',
  'mango-lassi': 'mango-lassi',
  'masala-chai': 'masala-chai',
  'soft-drinks': 'soft-drinks'
};

// Supported image extensions to try
const imageExtensions = ['.jpg', '.jpeg', '.png', '.webp'];

/**
 * Try to load an image and return true if successful
 */
function imageExists(url) {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
    img.src = url;
  });
}

/**
 * Find and replace menu item placeholders with actual images
 */
async function loadMenuImages() {
  const menuItems = document.querySelectorAll('.menu-item');
  
  menuItems.forEach(async (item) => {
    const title = item.querySelector('h3')?.textContent.trim().toLowerCase();
    const placeholder = item.querySelector('.menu-placeholder');
    
    if (!placeholder || !title) return;
    
    // Find matching image key
    let imageKey = null;
    for (const key in menuItemImages) {
      if (title.includes(key) || key.includes(title.split('(')[0].trim())) {
        imageKey = key;
        break;
      }
    }
    
    if (!imageKey) return;
    
    // Try each image extension
    for (const ext of imageExtensions) {
      const imagePath = `images/menu-items/${menuItemImages[imageKey]}${ext}`;
      const exists = await imageExists(imagePath);
      
      if (exists) {
        // Replace placeholder with image
        const img = document.createElement('img');
        img.src = imagePath;
        img.alt = title;
        img.style.cssText = `
          width: 100%;
          height: 220px;
          object-fit: cover;
          border-radius: 14px 14px 0 0;
          border: 3px solid rgba(0, 216, 79, 0.3);
          transition: all 0.4s ease;
          position: relative;
          z-index: 2;
        `;
        
        placeholder.replaceWith(img);
        
        // Add hover effect
        item.addEventListener('mouseenter', function() {
          img.style.transform = 'scale(1.08) translateY(-2px)';
          img.style.filter = 'brightness(1.1)';
          img.style.boxShadow = '0 8px 20px rgba(0, 216, 79, 0.25)';
          img.style.borderColor = 'rgba(0, 216, 79, 0.5)';
        });
        
        item.addEventListener('mouseleave', function() {
          img.style.transform = 'scale(1) translateY(0)';
          img.style.filter = 'brightness(1)';
          img.style.boxShadow = '0 4px 12px rgba(0, 216, 79, 0.15)';
          img.style.borderColor = 'rgba(0, 216, 79, 0.3)';
        });
        
        break;
      }
    }
  });
}

// Load images when DOM is ready
document.addEventListener('DOMContentLoaded', loadMenuImages);

// Also run after a short delay to catch dynamically loaded content
setTimeout(loadMenuImages, 1000);
