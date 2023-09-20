# Anythink Solutions Website
This is the website for Anythink Solutions, a software solutions provider that specializes in software architecture, software development, and technology advising.

## Deployment
This site is deployed on firebase hosting. To update, run `yarn build`, then use the Firebase CLI to deploy.

First check the current firebase project with `firebase projects:list`. This will show the list of projects, and the currently selected project. If necessary, switch to the right project with `firebase use [project name]`.

Next, deploy the site to hosting with `firebase deploy --only hosting`. This will push a new version of the site to the firebase hosting service.

## Functions
The project uses a Firebase Function to generate and send email messages when the user fills out the contact form. Details to come on building and deploying the firebase functions...