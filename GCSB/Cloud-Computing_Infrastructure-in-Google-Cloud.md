# Google Cloud Computing Foundations: Cloud Computing Infrastructure in Google Cloud

## Storage Option in Google Cloud

- Cloud Storage
- Relational Database
  - Cloud SQL
  - Cloud Spanner
- No SQL Database
  - Firestore
  - Cloud Bigtable

## Structured and Unstructured Data Storage

### Unstructured - Cloud Storage

- Documents
- Images
- Videos
- Audio

### Structured - Relational Database

- Tables
- Rows
- Columns

### Structured Data Storage Options

- Transactional Workloads
  - Cloud SQL
  - Cloud Spanner
- Analytical Workloads
  - BigQuery
  - Cloud Bigtable

### Unstructured storage using Cloud Storage

- Common use to save BLOB (Binary Large Object)
- Type of file storage
  - File Storage: Store files in a hierarchical structure
  - Block Storage: Store data in blocks
  - Object Storage: Store data as objects
- Four basic storage classes
  - Standard Storage - Hot data (frequently accessed)
  - Nearline Storage - Warm data (accessed once a month)
  - Coldline Storage - Cold data (accessed every 90 days)
  - Archive Storage - Very cold data (accessed once a year)
- Cloud storage object are stored in buckets
- Cloud storage object are immutable
  
### Qwik Start - CLI/SDK

- `gsutil` is a command-line tool that allows you to interact with Cloud Storage
- `gsutil mb gs://<YOUR-BUCKET-NAME>` to create a bucket
- `gsutil cp <FILE> gs://<YOUR-BUCKET-NAME>` to copy a file to a bucket
- `gsutil ls gs://<YOUR-BUCKET-NAME>` to list the contents of a bucket
- `gsutil cp gs://<YOUR-BUCKET-NAME>/<FILE> <DESTINATION>` to copy a file from a bucket
- `gsutil rm gs://<YOUR-BUCKET-NAME>/<FILE>` to remove a file from a bucket

#### Make Public Accessible

- `gsutil acl ch -u AllUsers:R gs://<YOUR-BUCKET-NAME>/<FILE>` to make a file public
- `gsutil acl ch -d AllUsers gs://<YOUR-BUCKET-NAME>/<FILE>` to remove public access

### Cloud Spanner as a managed service

- Cloud Spanner is a fully managed relational database service that scales horizontally, is strongly consistent, and speaks SQL.

### Bigtable as a NoSQL options

- Work with more than 1TB of semi-strucutred data
- Data is fast with high throughput, or it's rapidly changing
- Work with NoSQL data
- Data is a time-series or has natural semantic ordering

## There's an API for that

### The Purpose of APIs

- A software service’s implementation can be complex and changeable.

### Cloud Enpoints

- Cloud Endpoints is a distributed API management system that uses a distributed Extensible Service Proxy, which is a service proxy that runs in its own Docker container.
- Cloud Endpoints supports applications running in App Engine, Google Kubernetes Engine, and Compute Engine.
- Cloud Endpoints supports the Open API specification and gRPC API specification.
- Cloud Endpoints also supports service-to-service authentication and user authentication with **Firebase, Auth0, and Google authentication**.

### Pub/Sub

- Pub/Sub is a messaging service that allows you to send and receive messages between independent applications.
- Pub/Sub is short for publish/subscribe.
- Pub/Sub supports many different inputs and outputs, and you can even publish a Pub/Sub event from one topic to another.

#### Labs Pub/Sub - Python

##### Task 1: Create a virtual environment

1. `sudo apt-get install -y virtualenv`
   1. Install the virtualenv package.
2. `python3 -m venv venv`
   1. Build the virtual environment.
3. `source venv/bin/activate`
   1. Activate the virtual environment.
  
##### Task 2: Install the Pub/Sub client library

1. `pip install --upgrade google-cloud-pubsub` - Install the Pub/Sub client library.
2. `git clone https://github.com/googleapis/python-pubsub.git` - Clone the Python Pub/Sub repository.
3. `cd python-pubsub/samples/snippets` - Change to the snippets directory.

##### Task 3: Pub/Sub - the Basics

1. `python publisher.py $GOOGLE_CLOUD_PROJECT create MyTopic` - Create a topic.
2. `python publisher.py $GOOGLE_CLOUD_PROJECT list` - List the topics.