// College Details JavaScript

// Get college ID from URL parameters
function getCollegeId() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id');
}

// Sample college data
const collegeData = {
    'coep': {
        name: 'College of Engineering Pune (COEP)',
        type: 'Government',
        location: 'Pune, Maharashtra',
        university: 'Savitribai Phule Pune University',
        established: '1854',
        rating: 4.5,
        image: 'https://via.placeholder.com/600x300',
        description: 'College of Engineering Pune is one of the oldest and most prestigious engineering colleges in India.',
        facilities: ['Library', 'Hostels', 'Sports Complex', 'Cafeteria', 'Labs', 'Auditorium'],
        branches: [
            { name: 'Computer Engineering', intake: 120, fees: '₹1,50,000' },
            { name: 'Information Technology', intake: 60, fees: '₹1,50,000' },
            { name: 'Mechanical Engineering', intake: 120, fees: '₹1,50,000' },
            { name: 'Electrical Engineering', intake: 90, fees: '₹1,50,000' },
            { name: 'Civil Engineering', intake: 90, fees: '₹1,50,000' }
        ],
        contact: {
            phone: '+91-20-2507-2000',
            email: 'info@coep.ac.in',
            website: 'www.coep.ac.in',
            address: 'Wellesley Road, Shivajinagar, Pune - 411005'
        },
        placements: {
            averagePackage: '₹8.5 LPA',
            highestPackage: '₹45 LPA',
            placementRate: '95%',
            topRecruiters: ['TCS', 'Infosys', 'Microsoft', 'Google', 'Amazon']
        }
    }
};

// Load college details
function loadCollegeDetails() {
    const college = JSON.parse(localStorage.getItem('selectedCollege'));
    
    if (!college) {
        document.getElementById('collegeDetailContainer').innerHTML = '<div class="error-message"><h2>College not found</h2><p>Please go back and select a valid college.</p></div>';
        return;
    }
    
    const image = 'https://images.unsplash.com/photo-1562774053-701939374585?w=600&h=300&fit=crop';

    const detailsHTML = `
        <div class="college-detail-header">
            <img src="${image}" alt="${college.name}" class="college-image">
            <div class="college-basic-info">
                <h1>${college.name}</h1>
                <div class="college-meta">
                    <span class="college-type">${college.type}</span>
                    <span class="college-location">📍 ${college.location}</span>
                    <span class="college-rating">⭐ ${college.rating}/5</span>
                </div>
                <p class="college-description">Established in ${college.established}, this is a ${college.type} institution affiliated with ${college.affiliation}. ${college.ranking}</p>
            </div>
        </div>

        <div class="detail-sections">
            <section class="detail-section">
                <h2>📚 Branches & Intake</h2>
                <div class="branches-detail-grid">
                    ${Object.entries(college.branches).map(([branchName, intake]) => `
                        <div class="branch-detail-card">
                            <h3>${branchName}</h3>
                            <p><strong>Intake:</strong> ${intake} students</p>
                            <p><strong>Annual Fees:</strong> ${college.fees}</p>
                        </div>
                    `).join('')}
                </div>
            </section>

            <section class="detail-section">
                <h2>🏢 College Information</h2>
                <div class="info-grid">
                    <div class="info-item">
                        <strong>University:</strong> ${college.affiliation}
                    </div>
                    <div class="info-item">
                        <strong>Established:</strong> ${college.established}
                    </div>
                    <div class="info-item">
                        <strong>Type:</strong> ${college.type}
                    </div>
                    <div class="info-item">
                        <strong>Ranking:</strong> ${college.ranking}
                    </div>
                </div>
            </section>

            <section class="detail-section">
                <h2>🏆 Placements</h2>
                <div class="placement-stats">
                    <div class="stat-card">
                        <h3>${college.placement.average}</h3>
                        <p>Average Package</p>
                    </div>
                    <div class="stat-card">
                        <h3>${college.placement.highest}</h3>
                        <p>Highest Package</p>
                    </div>
                    <div class="stat-card">
                        <h3>${college.placement.rate}</h3>
                        <p>Placement Rate</p>
                    </div>
                </div>
            </section>

            <section class="detail-section">
                <h2>🏫 Facilities</h2>
                <div class="facilities-grid">
                    ${college.facilities.map(facility => `<div class="facility-item clickable" onclick="showFacilityDetails('${facility}')">
                        ✓ ${facility}
                        <span class="facility-arrow">→</span>
                    </div>`).join('')}
                </div>
            </section>

            <section class="detail-section">
                <h2>📞 Contact Information</h2>
                <div class="contact-info">
                    <p><strong>Phone:</strong> ${college.phone}</p>
                    <p><strong>Email:</strong> ${college.email}</p>
                    <p><strong>Website:</strong> <a href="${college.website}" target="_blank">${college.website}</a></p>
                    <p><strong>Location:</strong> ${college.location}</p>
                    <p><strong>CET Code:</strong> ${college.cetCode}</p>
                </div>
            </section>
        </div>
    `;

    document.getElementById('collegeDetailContainer').innerHTML = detailsHTML;
}

// Navigation functions
function goBack() {
    window.history.back();
}

function goHome() {
    window.location.href = 'maharashtra-colleges.html';
}

// Dashboard functionality
// Show facility details
function showFacilityDetails(facilityName) {
    const facilityDetails = {
        'World-class Labs': 'State-of-the-art laboratories equipped with latest technology and equipment for hands-on learning and research.',
        'Research Centers': 'Dedicated research facilities with advanced equipment for cutting-edge research in various engineering fields.',
        'International Programs': 'Student exchange programs, international collaborations, and global exposure opportunities.',
        'Alumni Network': 'Strong network of successful alumni providing mentorship, internships, and career opportunities.',
        'Sports Complex': 'Modern sports facilities including gymnasium, swimming pool, courts for various sports and fitness activities.',
        'Hostels': 'Comfortable accommodation facilities with modern amenities for outstation students.',
        'Advanced Labs': 'Well-equipped laboratories with modern instruments and software for practical learning.',
        'Innovation Center': 'Dedicated space for innovation, entrepreneurship, and startup incubation activities.',
        'Industry Partnerships': 'Collaborations with leading companies for internships, projects, and placement opportunities.',
        'Central Library': 'Extensive collection of books, journals, digital resources, and study spaces for students.',
        'Modern Labs': 'Updated laboratory facilities with contemporary equipment and technology.',
        'Library': 'Well-stocked library with academic resources, research materials, and digital access.',
        'Placement Cell': 'Dedicated team for career guidance, skill development, and placement assistance.',
        'Computer Centers': 'High-speed internet, latest software, and computing facilities for students.',
        'Workshop': 'Practical training facilities for hands-on experience in engineering applications.',
        'Auditorium': 'Modern auditorium for seminars, conferences, cultural events, and academic presentations.',
        'Sports Facilities': 'Various indoor and outdoor sports facilities for physical fitness and recreation.',
        'Canteen': 'Hygienic food facilities providing nutritious meals and snacks for students and staff.',
        'Sports Ground': 'Open spaces for outdoor sports activities and physical education.',
        'Engineering Labs': 'Specialized laboratories for different engineering disciplines and practical training.',
        'Training & Placement': 'Comprehensive training programs and placement assistance for career development.',
        'Student Development': 'Programs focused on overall personality development and skill enhancement.',
        'Modern Infrastructure': 'Contemporary buildings, classrooms, and facilities with latest amenities.',
        'Student Activities': 'Various clubs, societies, and extracurricular activities for holistic development.',
        'Cultural Activities': 'Events, festivals, and programs promoting arts, culture, and creativity.',
        'Incubation Center': 'Support for student startups and entrepreneurial ventures.',
        'Innovation Hub': 'Collaborative space for innovation, research, and technology development.',
        'Innovation Labs': 'Specialized labs for innovation projects and research activities.',
        'International Exchange': 'Programs for student exchange with international universities.',
        'Global Programs': 'International exposure through various global academic programs.',
        'University Campus': 'Part of larger university campus with shared facilities and resources.',
        'Heritage Campus': 'Historic campus with traditional architecture and modern facilities.',
        'Heritage Institution': 'Institution with rich history and legacy in education.',
        'Medical College Campus': 'Shared campus with medical college providing interdisciplinary opportunities.',
        'Hill Station Campus': 'Campus located in scenic hill station providing peaceful learning environment.',
        'Adventure Sports': 'Facilities for adventure activities like trekking, rock climbing, and outdoor sports.',
        'Rural Engineering Labs': 'Specialized labs focusing on rural technology and agricultural engineering.',
        'Agriculture Research': 'Research facilities for agricultural technology and rural development.',
        'Coastal Engineering Labs': 'Specialized labs for coastal and marine engineering research.',
        'Marine Research': 'Research facilities for marine technology and oceanographic studies.',
        'Transport': 'Transportation facilities for students including bus services.',
        ' Best Campus': 'Well-maintained campus with excellent facilities and infrastructure.'
    };
    
    const description = facilityDetails[facilityName] || 'This facility provides essential support for student learning and development.';
    
    alert(`${facilityName}\n\n${description}`);
}

document.addEventListener('DOMContentLoaded', function() {
    loadCollegeDetails();
    
    const dashboardIcon = document.getElementById('dashboardIcon');
    const dashboardDropdown = document.getElementById('dashboardDropdown');

    dashboardIcon.addEventListener('click', function() {
        dashboardIcon.classList.toggle('active');
        dashboardDropdown.classList.toggle('show');
    });

    document.addEventListener('click', function(event) {
        if (!dashboardIcon.contains(event.target) && !dashboardDropdown.contains(event.target)) {
            dashboardIcon.classList.remove('active');
            dashboardDropdown.classList.remove('show');
        }
    });
});