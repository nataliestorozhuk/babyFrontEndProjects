// Assume the JSON data is stored in a variable called 'featuredJobsData'

// Get a reference to the section where the featured jobs will be displayed
const featuredJobsSection = document.querySelector('jobs-data');

// Iterate through the 'featuredJobs' array in the JSON data
for (let i = 0; i < featuredJobsData.featuredJobs.length; i++) {
  const job = featuredJobsData.featuredJobs[i];

  // Create HTML elements for the job title, company, location, and apply link
  const jobTitle = document.createElement('h2');
  jobTitle.textContent = job.title;
  const jobCompany = document.createElement('p');
  jobCompany.textContent = `Company: ${job.company}`;
  const jobLocation = document.createElement('p');
  jobLocation.textContent = `Location: ${job.location}`;
  const jobType = document.createElement('p');
  jobType.textContent = `Type: ${job.type}`;
  const applyLink = document.createElement('a');
  applyLink.textContent = 'Apply';
  applyLink.href = job.applyLink;

  // Create a container element for the job
  const jobContainer = document.createElement('div');
  jobContainer.appendChild(jobTitle);
  jobContainer.appendChild(jobCompany);
  jobContainer.appendChild(jobLocation);
  jobContainer.appendChild(jobType);
  jobContainer.appendChild(applyLink);

  // Add the job container element to the featured jobs section
  featuredJobsSection.appendChild(jobContainer);
}
