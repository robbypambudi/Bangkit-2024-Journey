- [Google Cloud Computing Foundations](#google-cloud-computing-foundations)
  - [So what's the cloud anyway?](#so-whats-the-cloud-anyway)
    - [Star with a platform](#star-with-a-platform)
    - [Resources and Projects](#resources-and-projects)
    - [Folder](#folder)
    - [Cloud SDK](#cloud-sdk)
    - [Cloud Shell](#cloud-shell)
    - [Google Cloud Computing Foundations: Getting Started](#google-cloud-computing-foundations-getting-started)
    - [Google Cloud CLI](#google-cloud-cli)
      - [Set Region](#set-region)
      - [Finding project information](#finding-project-information)
      - [Setting environment variables](#setting-environment-variables)
      - [Creating a virtual machine with the gcloud tool](#creating-a-virtual-machine-with-the-gcloud-tool)
      - [Filtering command-line output](#filtering-command-line-output)
    - [Quiz](#quiz)
  - [Google Cloud Computing Foundations: Cloud Computing Fundamentals](#google-cloud-computing-foundations-cloud-computing-fundamentals)
    - [Compute Options in the Cloud](#compute-options-in-the-cloud)
    - [Infrastructure as a Service (IaaS)](#infrastructure-as-a-service-iaas)
    - [Create a Virtual Machine](#create-a-virtual-machine)
    - [Configuring Elastic Apps with Autoscaling](#configuring-elastic-apps-with-autoscaling)
    - [Exploring PaaS with App Engine](#exploring-paas-with-app-engine)
    - [Cloud Functions](#cloud-functions)
    - [Google Kubernates Engine](#google-kubernates-engine)
      - [Lab - Getting Started with Google Kubernetes Engine](#lab---getting-started-with-google-kubernetes-engine)
      - [Deploying a containerized application to GKE](#deploying-a-containerized-application-to-gke)
      - [Deleting the cluster](#deleting-the-cluster)
    - [Maneged Serverless Computing with Cloud Run](#maneged-serverless-computing-with-cloud-run)

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

### Exploring PaaS with App Engine

- App Engine is a fully managed, serverless platform for developing and hosting web applications at scale.
- Two types of App Engine Environment: **Standard** and **Flexible**.
- Standar
  - Peristent storage with queries, sorting, and transactions.
  - Automatic scaling and load balancing.
  - Java, Python, PHP, Go, Node.js, and Ruby.
- Flexible
  - Microservices architecture.
  - Authorization
  - SQL and NoSQL databases.

`gcloud app deploy` - Deploy the app to App Engine.
`gcloud app browse` - Open the app in a web browser.
`dev_appserver.py app.yaml` - Run the app locally. gcloud app

### Cloud Functions

- Serverless logic that can be triggered by HTTP requests, Cloud Storage, Cloud Pub/Sub, and Firebase.

- `gsutil mb -p [PROJECT_ID] gs://[BUCKET_NAME]` - Create a Cloud Storage bucket.
- `gcloud functions deploy helloWorld \
  --stage-bucket qwiklabs-gcp-01-06f1e691a25c \
  --trigger-topic hello_world \
  --runtime nodejs20
  ` - Deploy a Cloud Function.

### Google Kubernates Engine

- Kubernetes is an open-source platform designed to automate deploying, scaling, and operating application containers.

#### Lab - Getting Started with Google Kubernetes Engine

- `gcloud container clusters create --machine-type=e2-medium --zone=us-east4-c lab-cluster`
  - Create a Kubernetes cluster.
  - `gcloud container clusters get-credentials lab-cluster --zone us-east4-c` - Get authentication credentials for the cluster.
- `gcloud container clusters get-credentials lab-cluster` - Get authentication credentials for the cluster.

#### Deploying a containerized application to GKE

- `kubectl create deployment hello-server --image=gcr.io/google-samples/hello-app:1.0`
  - Create a deployment.
- `kubectl expose deployment hello-server --type=LoadBalancer --port 8080` - Expose the deployment.

#### Deleting the cluster

- `gcloud container clusters delete lab-cluster` - Delete the cluster.

### Maneged Serverless Computing with Cloud Run

- Cloud Run is a fully managed compute platform that automatically scales stateless containers.
- Built on Knative, an open-source project that extends Kubernetes to provide a set of middleware components (build, serving, eventing) for modern, source-centric, and container-based applications.
