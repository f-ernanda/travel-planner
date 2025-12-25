# Technical Roadmap

## Project Structure

### Front End

- [x] **Responsive Design**: The application is already responsive across various devices and screen sizes.
- [x] **Unit Testing**: Unit tests are in place to ensure the reliability of the front-end components.
- [x] **Accessibility**: The application complies with accessibility standards to ensure usability for people with disabilities.
- [x] **Storybook**: Utilizing Storybook for documenting and developing UI components in isolation.
- [x] **Input Validation**: The form already has minimum validation to ensure data integrity and is also providing feedback on user inputs.
- [ ] **Design System Expansion**: Expand the existing design system to cover more components and ensure consistency throughout the application.
- [ ] **Advanced Next.js Features**: Explore and study the latest features introduced in Next.js 14 for potential enhancements and optimizations.
- [ ] **GraphQL Implementation**: Integrate GraphQL into the front end using Apollo Client to provide a more flexible and efficient data querying mechanism.
- [ ] **End-to-End Testing**: Implement end-to-end tests to ensure the overall functionality and reliability of the application.

### Back End

- [x] **Next.js API**: The application is utilizing Next.js backend features to set up the current API.
- [x] **Database Setup**: The application uses a MongoDB Atlas setup to maintain data.
- [ ] **Transition to Nest.js**: Study and transition the existing API from Next.js to Nest.js, leveraging its features for better structure and maintainability.
- [ ] **Microservices Architecture**: Refactor the application into microservices to enhance scalability, maintainability, and deployment flexibility.
- [ ] **GraphQL Implementation**: Integrate GraphQL into the API using Apollo Server to provide a more flexible and efficient data querying mechanism.
- [ ] **Authentication and Authorization**: Implement authentication and authorization mechanisms to secure access to backend resources and endpoints.
- [ ] **Database Migration to Azure**: Migrate the MongoDB Atlas setup to Azure while maintaining data integrity and availability.
- [ ] **Unit Testing**: Implement unit tests for backend services to ensure code reliability and facilitate future development.
- [ ] **End-to-End Testing**: Implement end-to-end tests to ensure the overall functionality and reliability of the application.

### Deployment

- [x] **Docker Containerization**: Using a Dockerfile to containerize the application for consistent deployment and scalability.
- [x] **GitHub Actions Deployment**: Utilizing GitHub Actions to deploy the application automatically to the Azure WebApp.
- [ ] **Multiple Environment Setup**: Create additional environments such as development, staging, and testing environments to separate production code from ongoing development and testing efforts.
- [ ] **Scalability and Availability Strategies**: Study and implement strategies for scalability and availability, such as auto-scaling, redundancy, and load balancing, to ensure optimal performance and uptime.
- [ ] **Continuous Monitoring and Optimization**: Research and implement tools and practices for continuous monitoring and optimization of the deployed application to identify and address performance bottlenecks and ensure efficient resource utilization.

### Infrastructure

- [x] **Terraform WebApp Deployment**: Using Terraform to provision the Azure WebApp for hosting the application, but it requires improvements.
- [ ] **Terraform Workflow Enhancement**: Research and implement a workflow for setting up Terraform, including a storage solution inside Azure, to automate infrastructure provisioning and management.
- [ ] **Monitoring and Logging Solution**: Study and implement a monitoring and logging solution, such as Prometheus, to track application performance, detect issues, and troubleshoot errors effectively.
- [ ] **Security Measures Implementation**: Research and implement additional security measures to protect the infrastructure and application, such as encryption, firewall rules, and regular security audits.
- [ ] **Backup and Disaster Recovery**: Develop and implement a backup and disaster recovery plan to ensure data integrity and business continuity, considering options like regular backups and redundancy strategies.
