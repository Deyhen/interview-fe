<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Frontend - Country Info App</title>
</head>
<body>
    <h1>Country Info App - Frontend</h1>
    <p>
        This is the frontend part of the Country Info App built using <strong>Next.js</strong> and styled with <strong>Tailwind CSS</strong>. 
        It fetches country data from the backend and displays information such as population over time, neighboring countries, and country flags.
    </p>
    <h2>Features</h2>
    <ul>
        <li>Responsive design using Tailwind CSS.</li>
        <li>Displays population data over time using Victory charts.</li>
        <li>Interactive tooltips for population charts.</li>
        <li>Fetches data from the backend to display country borders, flags, and population details.</li>
    </ul>
    <h2>Tech Stack</h2>
    <ul>
        <li><strong>Framework:</strong> Next.js (React)</li>
        <li><strong>Styling:</strong> Tailwind CSS</li>
        <li><strong>Charts:</strong> Victory Charts</li>
        <li><strong>API Requests:</strong> Axios</li>
    </ul>
    <h2>Installation</h2>
    <p>Follow these steps to set up the frontend part of the application:</p>
    <h3>1. Clone the Repository</h3>
    <pre><code>git clone https://github.com/your-username/country-info-app.git
cd country-info-app/frontend
    </code></pre>
    <h3>2. Install Dependencies</h3>
    <p>In the <code>frontend</code> directory, install the required dependencies:</p>
    <pre><code>npm install</code></pre>
    <h3>3. Create the <code>.env.local</code> File</h3>
    <p>Create an <code>.env.local</code> file in the <code>frontend</code> directory and add the following environment variables:</p>
    <pre><code>NEXT_PUBLIC_BACKEND_URL=http://localhost:4000
    </code></pre>
    <h2>Running the Frontend</h2>
    <h3>1. Start the Development Server</h3>
    <p>To start the Next.js development server, run:</p>
    <pre><code>npm run dev</code></pre>
    <p>This will start the frontend at <code>http://localhost:3000</code>.</p>
    <h2>Project Structure</h2>
    <p>Here’s the structure of the frontend folder:</p>
    <pre><code>frontend/
├── components/                  # React components (CountryList, CountryDetails)
├── pages/                       # Next.js pages (Home, Country Info)
├── styles/                      # Global and custom styles
├── public/                      # Public assets (static files, images)
├── .env.local                   # Environment variables
├── .gitignore                   # Git ignore file
├── tailwind.config.js           # Tailwind configuration
├── package.json                 # Project dependencies and scripts
└── README.html                  # This file
    </code></pre>
    <h2>Code Formatting and Linting</h2>
    <p>We recommend setting up ESLint and Prettier to maintain code quality and consistency across the project.</p>
    <h2>Key Frontend Features</h2>
    <ul>
        <li><strong>Interactive Charts:</strong> Victory charts are used to display population data, with interactive tooltips showing the population by year.</li>
        <li><strong>Dynamic Routing:</strong> The app uses Next.js dynamic routing for displaying detailed information about each country.</li>
    </ul>
    <h2>Contributing</h2>
    <p>If you want to contribute to this project, feel free to fork the repository and submit a pull request. We welcome contributions of all kinds!</p>
</body>
</html>
