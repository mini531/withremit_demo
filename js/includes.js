// Load HTML includes
function loadIncludes() {
    // Load sidebar
    const sidebarContainer = document.getElementById('sidebarContainer');
    if (sidebarContainer) {
        fetch('includes/sidebar.html')
            .then(response => response.text())
            .then(data => {
                sidebarContainer.innerHTML = data;
                // Mark active navigation
                const currentPage = window.location.pathname.split('/').pop();
                if (currentPage === 'notice_list.html' || currentPage === 'notice_detail.html') {
                    const navNotice = document.getElementById('navNotice');
                    if (navNotice) {
                        navNotice.classList.add('active');
                    }
                }
            })
            .catch(error => console.error('Error loading sidebar:', error));
    }

    // Load contact
    const contactContainer = document.getElementById('contactContainer');
    if (contactContainer) {
        fetch('includes/contact.html')
            .then(response => response.text())
            .then(data => {
                contactContainer.innerHTML = data;
            })
            .catch(error => console.error('Error loading contact:', error));
    }

    // Load footer
    const footerContainer = document.getElementById('footerContainer');
    if (footerContainer) {
        fetch('includes/footer.html')
            .then(response => response.text())
            .then(data => {
                footerContainer.innerHTML = data;
            })
            .catch(error => console.error('Error loading footer:', error));
    }
}

// Load includes when DOM is ready
document.addEventListener('DOMContentLoaded', loadIncludes);
