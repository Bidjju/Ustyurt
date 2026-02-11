// Map Gallery Data Structure
// TO ADD NEW MAPS: Add image paths to the appropriate category array
const mapGalleries = {
    location: [
        // Add your location map image paths here
        // Example: 'images/maps/location/map1.jpg',
        // Example: 'images/maps/location/map2.jpg',
    ],
    boundary: [
        // Add your boundary map image paths here
        // Example: 'images/maps/boundary/map1.jpg',
    ],
    buffer: [
        // Add your buffer zone map image paths here
        // Example: 'images/maps/buffer/map1.jpg',
    ],
    topographic: [
        // Add your topographic map image paths here
        // Example: 'images/maps/topographic/map1.jpg',
    ],
    cultural: [
        // Add your cultural features map image paths here
        // Example: 'images/maps/cultural/map1.jpg',
    ],
    satellite: [
        // Add your satellite imagery paths here
        // Example: 'images/maps/satellite/map1.jpg',
    ]
};

// Category titles for display
const categoryTitles = {
    location: 'Location Maps',
    boundary: 'Boundary Maps',
    buffer: 'Buffer Zone Maps',
    topographic: 'Topographic Maps',
    cultural: 'Cultural Features',
    satellite: 'Satellite Imagery'
};

// Open gallery for specific category
function openMapGallery(category) {
    const modal = document.getElementById('mapGalleryModal');
    const title = document.getElementById('galleryTitle');
    const grid = document.getElementById('galleryGrid');
    
    // Set title
    title.textContent = categoryTitles[category];
    
    // Clear previous content
    grid.innerHTML = '';
    
    // Get maps for this category
    const maps = mapGalleries[category];
    
    if (maps.length === 0) {
        grid.innerHTML = '<p class="no-maps-message">No maps available yet. Maps will be added soon.</p>';
    } else {
        // Create gallery items
        maps.forEach((mapPath, index) => {
            const item = document.createElement('div');
            item.className = 'gallery-item';
            item.innerHTML = `
                <img src="${mapPath}" alt="${categoryTitles[category]} ${index + 1}" onclick="viewMapFullscreen('${mapPath}')">
                <p class="map-caption">Map ${index + 1}</p>
            `;
            grid.appendChild(item);
        });
    }
    
    // Show modal
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

// Close gallery
function closeMapGallery() {
    const modal = document.getElementById('mapGalleryModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// View map in fullscreen (optional enhancement)
function viewMapFullscreen(imagePath) {
    // Open image in new tab or create a fullscreen viewer
    window.open(imagePath, '_blank');
}

// Close modal when clicking outside
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('mapGalleryModal');
    
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeMapGallery();
        }
    });
    
    // Close on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeMapGallery();
        }
    });
});
