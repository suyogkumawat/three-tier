// Add interactivity
function refreshData() {
    const dataElement = document.getElementById('backendData');
    const originalText = dataElement.textContent;
    
    // Show loading state
    dataElement.innerHTML = '<span class="loading"></span> Loading...';
    
    // You can replace this with an actual fetch call to your Flask route
    // Example:
    // fetch('/api/refresh')
    //     .then(response => response.json())
    //     .then(data => {
    //         dataElement.textContent = data.message;
    //         showSuccessAnimation(dataElement);
    //     })
    //     .catch(error => {
    //         console.error('Error:', error);
    //         dataElement.textContent = 'Error loading data';
    //     });
    
    // Simulate API call (remove this when implementing real API)
    setTimeout(() => {
        dataElement.textContent = originalText;
        showSuccessAnimation(dataElement);
    }, 1500);
}

function showSuccessAnimation(element) {
    // Add success animation
    element.style.transform = 'scale(1.05)';
    element.style.transition = 'transform 0.2s ease';
    setTimeout(() => {
        element.style.transform = 'scale(1)';
    }, 200);
}

function showDetails() {
    // You can replace this with navigation to another Flask route
    // Example: window.location.href = '/details';
    alert('This would typically open a detailed view or navigate to another page with more comprehensive data visualization.');
}

// Add subtle animations on load
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.status-card');
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'all 0.5s ease';
            
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 100);
        }, index * 150);
    });
});

// Example Flask integration functions
function fetchDataFromFlask() {
    fetch('/api/data')
        .then(response => response.json())
        .then(data => {
            document.getElementById('backendData').textContent = data.message;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

// You can call this function to update data dynamically
// fetchDataFromFlask();
