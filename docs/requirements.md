# DevEx Engineer Coding Exercise

## Scenario

My name is Emma and I live in Stockholm. Winter is not getting over anytime soon and I need a vacation. I do not have any specific place in mind, but I would love to unwind at a beach in some warm country.
When I check the vacation options on the web, I get overwhelmed, as there are so many options, and I don’t know which ones to go with. I am planning to spend 1 week, and the below factors are important to me:

- Comfort and convenience
- A warm country and a nice beach Location
- Cost is not very important but at the same time I don’t want to break my bank
  So, could you help me build a custom itinerary for my vacation at a perfect location along with the flight options?

## Problem Statement:

Create a web-based Travel Planner which takes in the travelers preference and provides an optimal travel itinerary which includes :

- Several destination choices and a summary of why the destination is the optimal choice for the traveler
- Flight options to and from the destination along with suggestions on accommodation and activities

## Requirements:

(Mandatory)

1. Frontend: A simple UI that allows the traveler to login, accepts the search criteria and displays the results.

2. Backend: A server side component that performs the business logic based on the search criteria and returns the results. You can use dummy data hardcoded in your code but preference will be given if you are able to use open source API’s to get the mock data

3. Deployment: The website should be publicly accessible and deployed on any Azure service(ie., Azure WebApp, Azure Kubernetes Services etc.,). Use GitHub Actions to automate the build and deploy process.

4. Infrastructure: The infrastructure required to run the application should be created using Terraform which should also be part of the GitHub repo.

(Bonus)

Along with the mandatory requirements, we encourage you to improve the Travel Planner with as much creative use of the latest DevOps best practices, adding new features and improving on the mandatory features etc.,

Some ideas which will add weighage to your solution are:

- Use any modern UI Frameworks such as (React, Angular etc., )
- Ensure proper handling of user authentication, including password hashing for security
- Responsive Design : Optimize the interface for various devices (desktop, tablet, mobile)
- Implement microservices architecture(ie., a flight search api, a hotel search api etc.,)
- Use a mono repo configuration for all the different micro services
- Use a PaaS database to store the info and be able to fetch the results on the traveler's next login
- Have the ability to register new users
- Use proper error handling and validation techniques, both on the frontend and backend.

**Goal:** This exercise is to evaluate several things, but the focus is going to be Coding + Cloud + Best Practices in the chosen Technology.
There are no right or wrong answers, just solutions which might be more / less elegant.

## Before You Start:

- This test involves a series of tasks. There is no time limit for the test but please try to complete it earliest so we can proceed with the next steps in the interview process.
- Use your Azure subscription or create subscription using free tier.
- Use your GitHub account to create repo and store the code for the exercises. Share the the GitHub repo URL and the publicly accessible URL of the deployed site.
- Organize your code into separate modules or components for better maintainability.
- Please maintain git code commit history.

## Notes:

- Mention any pre-requisites in the README.md at the root of your repo.
- The evaluator will proceed by going over the steps mentioned in the README.
- Demonstrate the complete workflow & execution in the next Face to Face discussion.
