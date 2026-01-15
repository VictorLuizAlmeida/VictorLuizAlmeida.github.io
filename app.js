// Load profile data
function loadProfile() {
    document.getElementById('name').textContent = profileData.name;
    document.getElementById('title').textContent = profileData.title;
    document.getElementById('location').textContent = profileData.location;
    document.getElementById('about').textContent = profileData.about;
    document.getElementById('profileImage').src = profileData.profileImage;
    document.getElementById('linkedinLink').href = profileData.contact.linkedin;
    document.getElementById('emailLink').href = profileData.contact.email;

    const skillsContainer = document.getElementById('skillsContainer');
    profileData.skills.forEach(skill => {
        const tag = document.createElement('span');
        tag.className = 'skill-tag';
        tag.textContent = skill;
        skillsContainer.appendChild(tag);
    });
}

// Load projects
function loadProjects() {
    const projectsGrid = document.getElementById('projectsGrid');
    projectsGrid.innerHTML = '';

    projectsData.forEach(project => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.onclick = () => openProjectModal(project.id);

        card.innerHTML = `
            <div class="project-image">${project.image}</div>
            <h3 class="project-title">${project.title}</h3>
            <div class="project-keywords">
                ${project.keywords.map(kw => `<span class="project-keyword">${kw}</span>`).join('')}
            </div>
            <p class="project-description">${project.description}</p>
            <a class="read-more">Read more →</a>
        `;

        projectsGrid.appendChild(card);
    });
}

// Load experience
function loadExperience() {
    const timeline = document.getElementById('experienceTimeline');
    timeline.innerHTML = '';

    experienceData.forEach(exp => {
        const item = document.createElement('div');
        item.className = 'timeline-item';

        item.innerHTML = `
            <div class="timeline-header">
                <div>
                    <div class="timeline-title">${exp.title}</div>
                    <div class="timeline-company">${exp.company}</div>
                </div>
                <div class="timeline-period">${exp.period}</div>
            </div>
            <p class="timeline-description">${exp.description}</p>
            <div class="timeline-skills">
                ${exp.skills.map(skill => `<span class="timeline-skill">${skill}</span>`).join('')}
            </div>
        `;

        timeline.appendChild(item);
    });
}

// Load education
function loadEducation() {
    const timeline = document.getElementById('educationTimeline');
    timeline.innerHTML = '';

    educationData.forEach(edu => {
        const item = document.createElement('div');
        item.className = 'timeline-item';

        item.innerHTML = `
            <div class="timeline-header">
                <div>
                    <div class="timeline-title">${edu.degree}</div>
                    <div class="timeline-company">${edu.institution}</div>
                </div>
                <div class="timeline-period">${edu.period}</div>
            </div>
            <p class="timeline-description">${edu.description}</p>
        `;

        timeline.appendChild(item);
    });
}

// Tab switching
document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = button.getAttribute('data-tab');

            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // Add active class to clicked button and corresponding content
            button.classList.add('active');
            document.getElementById(`${targetTab}-tab`).classList.add('active');
        });
    });
});

// Project modal
function openProjectModal(projectId) {
    const project = projectsData.find(p => p.id === projectId);
    if (!project) return;

    const modal = document.getElementById('projectModal');
    const detail = document.getElementById('projectDetail');

    detail.innerHTML = `
        <h2 class="project-detail-title">${project.title}</h2>
        <div class="project-detail-keywords">
            ${project.keywords.map(kw => `<span class="project-detail-keyword">${kw}</span>`).join('')}
        </div>
        
        <div class="star-section">
            <h3>Situation</h3>
            <p>${project.star.situation}</p>
        </div>
        
        <div class="star-section">
            <h3>Task</h3>
            <p>${project.star.task}</p>
        </div>
        
        <div class="star-section">
            <h3>Action</h3>
            <p>${project.star.action}</p>
        </div>
        
        <div class="star-section">
            <h3>Result</h3>
            <p>${project.star.result}</p>
        </div>
    `;

    modal.style.display = 'block';
}

// Close modal
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('projectModal');
    const closeBtn = document.querySelector('.close');

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadProfile();
    loadProjects();
    loadExperience();
    loadEducation();
});

