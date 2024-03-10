# Google Cloud Computing Foundations

## So what's the cloud anyway?

- IaasS offering provide raw compute, storage, and networking capabilities, organized virtually into resources that are similar to physical data centers.
- PaaS offerign bind code to libraries that provide access to the infrastructure, and are optimized for developer productivity.
- SASS like email
- Cloud computing is a way of using information technology (IT) that has these five equally important traits: on-demand self-service, broad network access, resource pooling, rapid elasticity, and measured service.

### Star with a platform

- Interacting with the cloud : Google Cloud console, the Cloud SDK and Cloud Shell, the APIs, and the Cloud Mobile App.
- **The console** is used to access and use resources.
- **Resources** are organized in projects.

### Resources and Projects

- These represent virtual machines, Cloud Storage buckets, tables in BigQuery, or anything else in Google Cloud.
- Resources are organized into projects, which sit on the second level.
- Projects can be organized into folders, or even subfolders.
- Projects can have different owners and users, because they’re billed and managed separately.
- three identifying attributes: **a project ID**, **a project name**, and a **project number**

### Folder

- The third level of the Google Cloud resource hierarchy is folders.
- You can use folders to group projects under an organization in a hierarchy.
- Folders give teams the ability to delegate administrative rights so that they can work independently.

### Cloud SDK

- gcloud CLI, gsutil, and bq command-line tools.

### Cloud Shell

- Cloud Shell provides command-line access to cloud resources directly from a browser.
- It’s a **Debian-based** virtual machine with a persistent 5-GB home directory, which makes it easy to manage Google Cloud projects and resources.

### Google Cloud Computing Foundations: Getting Started

- **The Dialogflow API** allows you to build rich conversational applications (e.g., for Google Assistant) without having to understand the underlying machine learning and natural language schema.

### Google Cloud CLI

`gcloud auth list` - List the accounts whose credentials are stored locally.

#### Set Region

`gcloud config set compute/region us-west1` - Set the default compute region.
`gcloud config get-value compute/region` - Get the default compute region.

#### Finding project information

`gcloud config get-value project` - Get the current project ID.
`gcloud compute project-info describe --project $(gcloud config get-value project)` - Get the detail project's information.

#### Setting environment variables

`export PROJECT_ID=$(gcloud config get-value project)` - Set the environment variable `PROJECT_ID` to the current project ID.
`export ZONE=$(gcloud config get-value compute/zone)` - Set the environment variable `ZONE` to the current compute zone.

#### Creating a virtual machine with the gcloud tool

`gcloud compute instances create gcelab2 --machine-type e2-medium --zone $ZONE` - Create a virtual machine with the gcloud tool.

#### Filtering command-line output

`gcloud compute instances list` - List the virtual machines in the current project.
`gcloud compute instances list --filter="name=('gcelab2')" --format="table(name:label=NAME,zone:label=ZONE,status)"` - List the virtual machines in the current project, filtering the output to show only the `gcelab2` instance.

### Quiz

1. Which project identifier does not need to be globally unique? **Project name**
2. What is the purpose of APIs offered by various Google Cloud services? **APIs allow code to be written to control Google Cloud services.**
3. In the Google Cloud resource hierarchy, into which entity are resources organized? **Projects**
4. Which billing tool is designed to prevent the over-consumption of resources due to an error or a malicious attack? **Quotas**
5. Which command line tool is part of the Cloud SDK? **gsutil**

## Google Cloud Computing Foundations: Cloud Computing Fundamentals

### Compute Options in the Cloud

- **Compute Engine**: Infrastructure as a Service (IaaS) preferred for large-scale, high-performance computing workloads.
- **App Engine**: Platform as a Service (PaaS) preferred for web applications and mobile backends.
- **Cloud Functions**: Serverless computing preferred for event-driven applications and microservices.
- **Google Kubernetes Engine**: Container as a Service (CaaS) preferred for containerized applications.
- **Cloud Run**:  serverless platform that lets you develop and deploy highly scalable containerized applications.

### Infrastructure as a Service (IaaS)

- Can be configured of full-fladged virtual machines.
- Compute Engine bills by the second with a one-minute minimum, and sustained-use discounts start to apply automatically to virtual machines the longer they run.

### Create a Virtual Machine

- Create with the `gcloud` command-line tool.

### Configuring Elastic Apps with Autoscaling

- Autoscaling, where VMs can be added to or subtracted from an application based on load metrics.
- Google’s Virtual Private Cloud (VPC) supports several different kinds of load balancing, which we’ll explore shortly.
- Specs for currently available VM machine types are at cloud.google.com/compute/docs/machine-types