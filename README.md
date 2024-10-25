# Administrative Platform for Job Vacancies and Companies

## Description

We have been tasked with developing an administrative platform that allows for the management of job vacancies and companies. This platform must offer functionalities to add, edit, and delete both job vacancies and companies, with an intuitive, modular, and scalable interface.

## Approach

The project will be developed using **Next.js** and will follow the **Atomic Design** approach, allowing the interface to be divided into reusable and scalable components. This methodology will facilitate the maintainability and future extension of the system, ensuring that the project structure is clear and organized.

## Project Structure

The project structure will be divided into different levels following the modular philosophy of Atomic Design:

- **Atoms:** Basic components such as buttons, text inputs, and labels.
- **Molecules:** Combinations of atoms that form more complex components, such as form fields.
- **Organisms:** Groupings of molecules and atoms that form complete sections of the interface.
- **Templates:** Design structures that define how organisms are organized on a page.
- **Pages:** Complete views that combine templates and present the final content.

## Features

The interface will include:

1. **Admin Panel:** A panel with tabs to switch between the view of job vacancies and companies.
2. **Modal Forms:** Forms for adding and editing both job vacancies and companies, ensuring a smooth user experience.
3. **Listings of Vacancies and Companies:** Cards displaying the details of each vacancy and company, with options to edit and delete.

## Technologies Used

- **Next.js:** A React framework for building fast and scalable web applications.
- **Styled-components:** A library for handling styles in components dynamically.
- **TypeScript:** A language that adds types to JavaScript, improving code quality.
- **Atomic Design:** A methodology for interface design that promotes the reuse of components.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your_username/repository_name.git
   cd repository_name

2. Install the dependencies:
    ```bash
   npm install

3. Start the development server:
   ```bash
   npm run dev

4. Open http://localhost:3000 in your browser

