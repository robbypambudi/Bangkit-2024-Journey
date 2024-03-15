# Google Cloud's Compute

## Different Between Cointer and VM

## Google Cloud COmpute Options

1. Compute Engine, Google Kubernetes Engine, CLoud Run, App Engine, CLoud Functions.

### Compute Engine

1. Compute Engine: Infrastructure as a Service (IaaS)
2. Cocok untuk beban kerja yang memerlukan kontrol yang tinggi dan kustomisasi.
3. Predefined Mechine Type :
   1. General Purpose
   2. Compute Optimized
   3. Memory Optimized
   4. Accelerated Computing

### Google Kubernetes Engine

1. GKE meneges the underlying infrastructure such as node, and the container orchestration.

### App Engine

- A serverless platform designed for the development and hosting of web application on a large scale.
- App Engine Enviroments:
  - Standard Environment
  - Flexible Environment

### Cloud Functions

- A serverless platform for building event-driven applications.
- Cloud Functions are triggered by events such as changes in data, messages, or the actions of users.

### Cloud Run

- Provides a platform for running containerized applications.

## You can't secure the cloud, right?

### Security in the cloud

- The simplest option is Google Cloud default encryption, followed by customer-managed encryption keys (CMEK), and the option that provides the most control: customer-supplied encryption keys (CSEK).

- Cloud KMS lets you both rotate keys manually and automate the rotation of keys on a time-based interval.
- Cloud KMS also supports both symmetric keys and asymmetric keys for encryption and signing.googgooglgoogl