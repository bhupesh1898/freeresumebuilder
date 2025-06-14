// Handle form submission
document.getElementById('resumeForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Collect form data
    const resumeData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        linkedin: document.getElementById('linkedin').value,
        city: document.getElementById('city').value,
        website: document.getElementById('website').value,
        summary: document.getElementById('summary').value,
        experience: [],
        education: [],
        skills: [],
        certifications: [],
        projects: [],
        volunteer: [],
        awards: [],
        affiliations: []
    };

    // Collect experience entries
    document.querySelectorAll('.experience-entry').forEach(entry => {
        resumeData.experience.push({
            jobTitle: entry.querySelector('.job-title').value,
            company: entry.querySelector('.company').value,
            location: entry.querySelector('.location').value,
            startDate: entry.querySelector('.start-date').value,
            endDate: entry.querySelector('.end-date').value,
            description: entry.querySelector('.description').value
        });
    });

    // Collect education entries
    document.querySelectorAll('.education-entry').forEach(entry => {
        resumeData.education.push({
            degree: entry.querySelector('.degree').value,
            institution: entry.querySelector('.institution').value,
            gradYear: entry.querySelector('.grad-year').value,
            gpa: entry.querySelector('.gpa').value
        });
    });

    // Collect skills
    document.querySelectorAll('.skill-entry').forEach(entry => {
        const skill = entry.querySelector('.skill').value;
        if (skill) resumeData.skills.push(skill);
    });

    // Collect certifications
    document.querySelectorAll('.certification-entry').forEach(entry => {
        resumeData.certifications.push({
            certTitle: entry.querySelector('.cert-title').value,
            issuer: entry.querySelector('.issuer').value,
            certDate: entry.querySelector('.cert-date').value
        });
    });

    // Collect projects
    document.querySelectorAll('.project-entry').forEach(entry => {
        resumeData.projects.push({
            projectTitle: entry.querySelector('.project-title').value,
            projectDescription: entry.querySelector('.project-description').value
        });
    });

    // Collect volunteer work
    document.querySelectorAll('.volunteer-entry').forEach(entry => {
        resumeData.volunteer.push({
            volunteerRole: entry.querySelector('.volunteer-role').value,
            organization: entry.querySelector('.organization').value,
            volunteerStartDate: entry.querySelector('.volunteer-start-date').value,
            volunteerEndDate: entry.querySelector('.volunteer-end-date').value,
            volunteerDescription: entry.querySelector('.volunteer-description').value
        });
    });

    // Collect awards
    document.querySelectorAll('.award-entry').forEach(entry => {
        resumeData.awards.push({
            awardTitle: entry.querySelector('.award-title').value,
            awardIssuer: entry.querySelector('.award-issuer').value,
            awardDate: entry.querySelector('.award-date').value
        });
    });

    // Collect affiliations
    document.querySelectorAll('.affiliation-entry').forEach(entry => {
        resumeData.affiliations.push({
            affiliationName: entry.querySelector('.affiliation-name').value,
            affiliationRole: entry.querySelector('.affiliation-role').value,
            affiliationStartDate: entry.querySelector('.affiliation-start-date').value,
            affiliationEndDate: entry.querySelector('.affiliation-end-date').value
        });
    });

    // Store data in localStorage
    localStorage.setItem('resumeData', JSON.stringify(resumeData));

    // Redirect to preview page
    window.location.href = 'preview.html';
});

// Add experience entry
document.getElementById('addExperience').addEventListener('click', function () {
    const experienceSection = document.getElementById('experienceSection');
    const newEntry = document.createElement('div');
    newEntry.classList.add('experience-entry', 'card', 'p-3', 'mb-3');
    newEntry.innerHTML = `
        <div class="row g-3">
            <div class="col-md-6">
                <input type="text" class="form-control job-title" placeholder="Job Title">
            </div>
            <div class="col-md-6">
                <input type="text" class="form-control company" placeholder="Company Name">
            </div>
            <div class="col-md-6">
                <input type="text" class="form-control location" placeholder="Location">
            </div>
            <div class="col-md-3">
                <input type="month" class="form-control start-date" placeholder="Start Date">
            </div>
            <div class="col-md-3">
                <input type="month" class="form-control end-date" placeholder="End Date">
            </div>
            <div class="col-12">
                <textarea class="form-control description" placeholder="Key Responsibilities and Achievements" rows="4"></textarea>
            </div>
            <div class="col-12">
                <button type="button" class="btn btn-danger remove-btn">Remove</button>
            </div>
        </div>
    `;
    experienceSection.insertBefore(newEntry, document.getElementById('addExperience'));
});

// Add education entry
document.getElementById('addEducation').addEventListener('click', function () {
    const educationSection = document.getElementById('educationSection');
    const newEntry = document.createElement('div');
    newEntry.classList.add('education-entry', 'card', 'p-3', 'mb-3');
    newEntry.innerHTML = `
        <div class="row g-3">
            <div class="col-md-6">
                <input type="text" class="form-control degree" placeholder="Degree">
            </div>
            <div class="col-md-6">
                <input type="text" class="form-control institution" placeholder="Institution Name">
            </div>
            <div class="col-md-6">
                <input type="number" class="form-control grad-year" placeholder="Graduation Year" min="1900" max="2100">
            </div>
            <div class="col-md-6">
                <input type="text" class="form-control gpa" placeholder="GPA (optional)">
            </div>
            <div class="col-12">
                <button type="button" class="btn btn-danger remove-btn">Remove</button>
            </div>
        </div>
    `;
    educationSection.insertBefore(newEntry, document.getElementById('addEducation'));
});

// Add skill entry
document.getElementById('addSkill').addEventListener('click', function () {
    const skillsSection = document.getElementById('skillsSection');
    const newEntry = document.createElement('div');
    newEntry.classList.add('skill-entry', 'card', 'p-3', 'mb-3');
    newEntry.innerHTML = `
        <div class="row g-3 align-items-center">
            <div class="col-md-10">
                <input type="text" class="form-control skill" placeholder="Skill (e.g., Python, Communication)">
            </div>
            <div class="col-md-2">
                <button type="button" class="btn btn-danger remove-btn">Remove</button>
            </div>
        </div>
    `;
    skillsSection.insertBefore(newEntry, document.getElementById('addSkill'));
});

// Add certification entry
document.getElementById('addCertification').addEventListener('click', function () {
    const certificationsSection = document.getElementById('certificationsSection');
    const newEntry = document.createElement('div');
    newEntry.classList.add('certification-entry', 'card', 'p-3', 'mb-3');
    newEntry.innerHTML = `
        <div class="row g-3">
            <div class="col-md-6">
                <input type="text" class="form-control cert-title" placeholder="Certification Title">
            </div>
            <div class="col-md-6">
                <input type="text" class="form-control issuer" placeholder="Issuing Organization">
            </div>
            <div class="col-md-6">
                <input type="month" class="form-control cert-date" placeholder="Date Earned">
            </div>
            <div class="col-12">
                <button type="button" class="btn btn-danger remove-btn">Remove</button>
            </div>
        </div>
    `;
    certificationsSection.insertBefore(newEntry, document.getElementById('addCertification'));
});

// Add project entry
document.getElementById('addProject').addEventListener('click', function () {
    const projectsSection = document.getElementById('projectsSection');
    const newEntry = document.createElement('div');
    newEntry.classList.add('project-entry', 'card', 'p-3', 'mb-3');
    newEntry.innerHTML = `
        <div class="row g-3">
            <div class="col-12">
                <input type="text" class="form-control project-title" placeholder="Project Title">
            </div>
            <div class="col-12">
                <textarea class="form-control project-description" placeholder="Project Description and Outcomes" rows="4"></textarea>
            </div>
            <div class="col-12">
                <button type="button" class="btn btn-danger remove-btn">Remove</button>
            </div>
        </div>
    `;
    projectsSection.insertBefore(newEntry, document.getElementById('addProject'));
});

// Add volunteer entry
document.getElementById('addVolunteer').addEventListener('click', function () {
    const volunteerSection = document.getElementById('volunteerSection');
    const newEntry = document.createElement('div');
    newEntry.classList.add('volunteer-entry', 'card', 'p-3', 'mb-3');
    newEntry.innerHTML = `
        <div class="row g-3">
            <div class="col-md-6">
                <input type="text" class="form-control volunteer-role" placeholder="Role/Position">
            </div>
            <div class="col-md-6">
                <input type="text" class="form-control organization" placeholder="Organization Name">
            </div>
            <div class="col-md-6">
                <input type="month" class="form-control volunteer-start-date" placeholder="Start Date">
            </div>
            <div class="col-md-6">
                <input type="month" class="form-control volunteer-end-date" placeholder="End Date">
            </div>
            <div class="col-12">
                <textarea class="form-control volunteer-description" placeholder="Description of Contributions" rows="4"></textarea>
            </div>
            <div class="col-12">
                <button type="button" class="btn btn-danger remove-btn">Remove</button>
            </div>
        </div>
    `;
    volunteerSection.insertBefore(newEntry, document.getElementById('addVolunteer'));
});

// Add award entry
document.getElementById('addAward').addEventListener('click', function () {
    const awardsSection = document.getElementById('awardsSection');
    const newEntry = document.createElement('div');
    newEntry.classList.add('award-entry', 'card', 'p-3', 'mb-3');
    newEntry.innerHTML = `
        <div class="row g-3">
            <div class="col-md-6">
                <input type="text" class="form-control award-title" placeholder="Award Title">
            </div>
            <div class="col-md-6">
                <input type="text" class="form-control award-issuer" placeholder="Issuing Organization">
            </div>
            <div class="col-md-6">
                <input type="month" class="form-control award-date" placeholder="Date Received">
            </div>
            <div class="col-12">
                <button type="button" class="btn btn-danger remove-btn">Remove</button>
            </div>
        </div>
    `;
    awardsSection.insertBefore(newEntry, document.getElementById('addAward'));
});

// Add affiliation entry
document.getElementById('addAffiliation').addEventListener('click', function () {
    const affiliationsSection = document.getElementById('affiliationsSection');
    const newEntry = document.createElement('div');
    newEntry.classList.add('affiliation-entry', 'card', 'p-3', 'mb-3');
    newEntry.innerHTML = `
        <div class="row g-3">
            <div class="col-md-6">
                <input type="text" class="form-control affiliation-name" placeholder="Organization Name">
            </div>
            <div class="col-md-6">
                <input type="text" class="form-control affiliation-role" placeholder="Role (e.g., Member, President)">
            </div>
            <div class="col-md-6">
                <input type="month" class="form-control affiliation-start-date" placeholder="Start Date">
            </div>
            <div class="col-md-6">
                <input type="month" class="form-control affiliation-end-date" placeholder="End Date">
            </div>
            <div class="col-12">
                <button type="button" class="btn btn-danger remove-btn">Remove</button>
            </div>
        </div>
    `;
    affiliationsSection.insertBefore(newEntry, document.getElementById('addAffiliation'));
});

// Remove entry functionality
document.addEventListener('click', function (e) {
    if (e.target.classList.contains('remove-btn')) {
        e.target.closest('.card').remove();
    }
});

// Handle theme toggle
const themes = ['light', 'dark', 'wood'];
const themeIcons = ['bi-sun-fill', 'bi-moon-stars-fill', 'bi-tree-fill'];
let currentThemeIndex = 0;
document.getElementById('themeToggle').addEventListener('click', function () {
    currentThemeIndex = (currentThemeIndex + 1) % themes.length;
    const newTheme = themes[currentThemeIndex];
    const newIcon = themeIcons[currentThemeIndex];
    document.body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    this.querySelector('i').className = `bi ${newIcon}`;
});

// Load saved theme
window.addEventListener('load', function () {
    const savedTheme = localStorage.getItem('theme') || 'light';
    currentThemeIndex = themes.indexOf(savedTheme);
    document.body.setAttribute('data-theme', savedTheme);
    document.getElementById('themeToggle').querySelector('i').className = `bi ${themeIcons[currentThemeIndex]}`;
});

// Smooth scroll for navbar links
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});