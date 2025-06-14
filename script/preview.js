// Run when DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Retrieve resume data from localStorage
    const resumeData = JSON.parse(localStorage.getItem('resumeData'));

    if (resumeData) {
        // Populate contact information
        document.getElementById('name').textContent = resumeData.name || 'Your Name';
        document.getElementById('contact').textContent = [
            resumeData.email,
            resumeData.phone,
            resumeData.linkedin,
            resumeData.city,
            resumeData.website
        ].filter(Boolean).join(' | ');

        // Populate summary
        if (resumeData.summary) {
            document.getElementById('summaryText').textContent = resumeData.summary;
        } else {
            document.getElementById('summary').style.display = 'none';
        }

        // Populate experience
        const experienceList = document.getElementById('experienceList');
        if (resumeData.experience.length > 0 && resumeData.experience.some(e => e.jobTitle || e.company)) {
            resumeData.experience.forEach(exp => {
                if (exp.jobTitle || exp.company) {
                    const expItem = document.createElement('div');
                    expItem.classList.add('experience-item');
                    const dateRange = [exp.startDate, exp.endDate].filter(Boolean).join(' - ');
                    expItem.innerHTML = `
                        <h3>${exp.jobTitle || ''} | ${exp.company || ''}</h3>
                        <p>${exp.location || ''} | ${dateRange}</p>
                        <ul contenteditable="true">${exp.description ? exp.description.split('\n').map(line => `<li>${line}</li>`).join('') : ''}</ul>
                    `;
                    experienceList.appendChild(expItem);
                }
            });
        } else {
            document.getElementById('experience').style.display = 'none';
        }

        // Populate education
        const educationList = document.getElementById('educationList');
        if (resumeData.education.length > 0 && resumeData.education.some(e => e.degree || e.institution)) {
            resumeData.education.forEach(edu => {
                if (edu.degree || edu.institution) {
                    const eduItem = document.createElement('div');
                    eduItem.classList.add('education-item');
                    eduItem.innerHTML = `
                        <h3>${edu.degree || ''}</h3>
                        <p>${edu.institution || ''} | ${edu.gradYear || ''}${edu.gpa ? ` | GPA: ${edu.gpa}` : ''}</p>
                    `;
                    educationList.appendChild(eduItem);
                }
            });
        } else {
            document.getElementById('education').style.display = 'none';
        }

        // Populate skills
        const skillsList = document.getElementById('skillsList');
        if (resumeData.skills.length > 0) {
            resumeData.skills.forEach(skill => {
                if (skill) {
                    const li = document.createElement('li');
                    li.textContent = skill;
                    skillsList.appendChild(li);
                }
            });
        } else {
            document.getElementById('skills').style.display = 'none';
        }

        // Populate certifications
        const certificationsList = document.getElementById('certificationsList');
        if (resumeData.certifications.length > 0 && resumeData.certifications.some(c => c.certTitle || c.issuer)) {
            resumeData.certifications.forEach(cert => {
                if (cert.certTitle || cert.issuer) {
                    const certItem = document.createElement('li');
                    certItem.classList.add('certification-item');
                    certItem.textContent = `${cert.certTitle || ''} - ${cert.issuer || ''} | ${cert.certDate || ''}`;
                    certificationsList.appendChild(certItem);
                }
            });
        } else {
            document.getElementById('certifications').style.display = 'none';
        }

        // Populate projects
        const projectsList = document.getElementById('projectsList');
        if (resumeData.projects.length > 0 && resumeData.projects.some(p => p.projectTitle || p.projectDescription)) {
            resumeData.projects.forEach(project => {
                if (project.projectTitle || project.projectDescription) {
                    const projectItem = document.createElement('div');
                    projectItem.classList.add('project-item');
                    projectItem.innerHTML = `
                        <h3>${project.projectTitle || ''}</h3>
                        <ul contenteditable="true">${project.projectDescription ? project.projectDescription.split('\n').map(line => `<li>${line}</li>`).join('') : ''}</ul>
                    `;
                    projectsList.appendChild(projectItem);
                }
            });
        } else {
            document.getElementById('projects').style.display = 'none';
        }

        // Populate volunteer work
        const volunteerList = document.getElementById('volunteerList');
        if (resumeData.volunteer.length > 0 && resumeData.volunteer.some(v => v.volunteerRole || v.organization)) {
            resumeData.volunteer.forEach(vol => {
                if (vol.volunteerRole || vol.organization) {
                    const volItem = document.createElement('div');
                    volItem.classList.add('volunteer-item');
                    const dateRange = [vol.volunteerStartDate, vol.volunteerEndDate].filter(Boolean).join(' - ');
                    volItem.innerHTML = `
                        <h3>${vol.volunteerRole || ''} | ${vol.organization || ''}</h3>
                        <p>${dateRange}</p>
                        <ul contenteditable="true">${vol.volunteerDescription ? vol.volunteerDescription.split('\n').map(line => `<li>${line}</li>`).join('') : ''}</ul>
                    `;
                    volunteerList.appendChild(volItem);
                }
            });
        } else {
            document.getElementById('volunteer').style.display = 'none';
        }

        // Populate awards
        const awardsList = document.getElementById('awardsList');
        if (resumeData.awards.length > 0 && resumeData.awards.some(a => a.awardTitle || a.awardIssuer)) {
            resumeData.awards.forEach(award => {
                if (award.awardTitle || award.awardIssuer) {
                    const awardItem = document.createElement('li');
                    awardItem.classList.add('award-item');
                    awardItem.textContent = `${award.awardTitle || ''} - ${award.awardIssuer || ''} | ${award.awardDate || ''}`;
                    awardsList.appendChild(awardItem);
                }
            });
        } else {
            document.getElementById('awards').style.display = 'none';
        }

        // Populate affiliations
        const affiliationsList = document.getElementById('affiliationsList');
        if (resumeData.affiliations.length > 0 && resumeData.affiliations.some(a => a.affiliationName || a.affiliationRole)) {
            resumeData.affiliations.forEach(aff => {
                if (aff.affiliationName || aff.affiliationRole) {
                    const affItem = document.createElement('li');
                    affItem.classList.add('affiliation-item');
                    const dateRange = [aff.affiliationStartDate, aff.affiliationEndDate].filter(Boolean).join(' - ');
                    affItem.textContent = `${aff.affiliationName || ''} - ${aff.affiliationRole || ''} | ${dateRange}`;
                    affiliationsList.appendChild(affItem);
                }
            });
        } else {
            document.getElementById('affiliations').style.display = 'none';
        }
    }

    // Handle PDF export
    document.getElementById('exportPDF').addEventListener('click', function () {
        const element = document.getElementById('resumePreview');
        const opt = {
            margin: 0.5,
            filename: `${resumeData.name || 'resume'}.pdf`,
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
        };
        html2pdf().set(opt).from(element).save();
    });

    // Handle back to form navigation
    document.getElementById('backToForm').addEventListener('click', function () {
        window.location.href = 'index.html';
    });
});