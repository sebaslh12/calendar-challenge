# Calendar Challenge

React calendar demo which shows the reminders for each day and the forecast for the city of the reminder. Reminders can be created, updated, and deleted. These are the restrictions and some considerations for this demo:
- It doesn't have a backend so the data doesn't persist (be careful when you reload the page).
- The days before today are disabled, it doesn't make sense to create a reminder for a day that has already passed.
- There are 2 ways to delete a day's reminders, after you add reminder a new button will appear on the top left of the day, the other way is in the modal that shows all the day's reminders at the bottom it has a button to delete them all.
- The cities are fixed because the weather API requires the city's latituted and longitude which is something that most people doesn't know.
- Since I'm using the free version of the weather API, I'm unable to set forecast information that are further than 7 days from today.
- The calendar supports every single month of the current year (After December it loops back to January 2020).

## Completed Bonuses
- [x] Expand the calendar to support more than the current month.
- [x] Properly handle overflow when multiple reminders appear on the same date.
- [x] Functionality to delete one or ALL the reminders for a specific day

[You can check it out here](https://nostalgic-ride-c3ab0d.netlify.app/)

## Getting started

This project was created using CRA, if you clone this project you'll need NodeJs version 12 or higher you can download it [here](https://nodejs.org/en/). See sections below to more details about running, testing and deployment.

## Installing

Get into the project's folder and run: `npm i`. **This is required if you want to run, test or re-deploy this project**.

## Running

Run `npm run start` this will launch your browser with app running.

## Testing

Run `npm run test`.

## Deployment

The easiest way to deploy this app is to use [Netlify](https://www.netlify.com/), you'll need an account before trying to deploy the project, it has free a plan.

If you already have an account then run `npm run build` this command will create a `build` folder and you only need to drag it to the netlify's dashboard and it will create the project and deployed.

## Authors

* [**Sebastian Lozano Herrera**](https://github.com/sebaslh12)

Contact information: sebaslh12@gmail.com.

## License

This project is licensed under the Apache 2.0 License - see the [LICENSE.md](LICENSE.md) file for details.
