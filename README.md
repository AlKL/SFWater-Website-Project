# SFWater Website Project

To-do:
- Complete middleware/logger/errorHandler
- - Unknown endpoint should forward to an error page

Next steps:
- Backend: validate e-mail address 
- Backend: handle errors
- Frontend: validate entry to show proper errors
- Backend: fixed unknown errors

- Ensure Mongo does what you want it to do - text/email notifications?
- Do frontend styling and unknown errors styling
- remove ping

git subtree push --prefix backend heroku main 
// pushes to Heroku
// only need to deploy when finished



Brainstorm:
- you just use Node.js to send the e-mail. 1. Send comment to database 2. Send comment in e-mail template to inbox
    - use nodemailer for this
- Host on Heroku and use apps to keep it awake/add CC/choose time to sleep if necessary
- Think of good domain name