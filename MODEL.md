# ESG Dashboard Model

## Project Overview

This project is an ESG dashboard built using React and Django.  
The main goal of the project is to collect and display ESG-related data from different sources in one dashboard.

The project uses CSV files as sample enterprise data and shows them in table format through a web dashboard.

---

## Data Categories

The project contains three main ESG categories:

### Electricity Data
This dataset represents electricity consumption data.  
It is treated as Scope 2 emissions because it is related to purchased electricity usage.

### Fuel Data
This dataset represents fuel procurement information.  
It is treated as Scope 1 emissions because it involves direct fuel usage.

### Travel Data
This dataset represents employee travel information.  
It is treated as Scope 3 emissions because it is indirect organizational activity.

---

## How the System Works

1. CSV files are stored in the backend
2. Django reads the CSV files using pandas
3. The backend converts the data into JSON format
4. React fetches the API data
5. Data is displayed in tables in the dashboard

---

## Technologies Used

Frontend:
- React.js

Backend:
- Django

Data Handling:
- pandas

Deployment:
- Vercel
- Render

---

## Features Implemented

- ESG dashboard
- Multiple tabs
- Search functionality
- Upload button
- Review button
- Dynamic table rendering
- edit button
- delete button

---

## Future Improvements

Some features can be improved in the future:
- Database integration
- Better file upload system
- User authentication
- Mobile responsiveness
- Advanced analytics