# HALAL JIBIKA

## [Live Link](https://halal-jibika.netlify.app/)

Welcome to HALAL JIBIKA! This is a web application where users can find jobs, add them to favorites, and apply for them. Admins have access to a dashboard where they can manage job listings by adding, deleting, or editing them. Users are required to log in to access features such as adding favorites or applying for jobs.

## Technologies Used

- React
- React Router DOM
- React Hook Form
- Firebase Authentication
- JSON API
- React Toastify

## Features

- **User Authentication**: Users are required to log in to access certain features such as adding favorites or applying for jobs.
- **Job Listings**: Users can browse through a list of job listings.
- **Favorite Jobs**: Users can add jobs to their favorites list for easy access later.
- **Job Applications**: Users can apply for jobs directly through the website.
- **Admin Dashboard**: Admins have access to a dashboard where they can manage job listings.
- **Add/Delete/Edit Jobs**: Admins can add new job listings, delete existing ones, and edit job details.

## Installation

1. Clone the repository:

   ```
   git clone https://github.com/devRezaulKarim/halal-jibika.git
   ```

2. Install dependencies:

   ```
   npm install
   ```

3. Create a Firebase project and set up Authentication (API if you want to use your personal data).

4. Update Firebase configuration in `src/firebase/firebase.init.js`.

5. Run the application:

   ```
   npm run dev
   ```

6. Open [http://localhost:5173/](http://localhost:5173/) to view it in the browser.

## Usage

1. Register or log in to the website.
2. Browse through job listings on the homepage.
3. Click on a job to view details.
4. Add jobs to favorites by clicking the heart icon.
5. Apply for jobs by clicking the apply button.
6. Admins can access the dashboard by navigating to `/admin`.
7. In the dashboard, admins can add, delete, or edit job listings.

