# Google Cloud Computing Foundations: Cloud Computing Fundamentals

## So what's the cloud anyway?

- IaasS offering provide raw compute, storage, and networking capabilities, organized virtually into resources that are similar to physical data centers.
- PaaS offerign bind code to libraries that provide access to the infrastructure, and are optimized for developer productivity.
- SASS like email
- Cloud computing is a way of using information technology (IT) that has these five equally important traits: on-demand self-service, broad network access, resource pooling, rapid elasticity, and measured service.

## Star with a platform

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