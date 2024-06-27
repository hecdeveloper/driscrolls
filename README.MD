# Driscrolls SPA Project

This is a Single Page Application (SPA) built with React and TypeScript, with a Node.js/Express backend and MongoDB database.

## Project Structure

- `frontend/`: React TypeScript frontend
- `backend/`: Node.js/Express TypeScript backend

## Prerequisites

Before you begin, ensure you have met the following requirements:
* You have installed the latest version of [Node.js and npm](https://nodejs.org/)
* You have a Windows/Linux/Mac machine.
* You have read this guide.
* You have [MongoDB](https://www.mongodb.com/try/download/community) installed and running.

## Installing and Running My SPA Project

To install and run My SPA Project, follow these steps:

1. Clone the repository

2. Install dependencies

cd driscrolls && npm install
cd ../backend && npm install

3. Set up environment variables
- In the `backend` folder, create a `.env` file with the following content:
  ```
  PORT=5000
  MONGODB_URI=your_mongodb_connection_string
  JWT_SECRET=your_jwt_secret
  NODE_ENV=development
  ```
- In the `frontend` folder, create a `.env` file with:
  ```
  VITE_API_URL=http://localhost:5000/api
  VITE_APP_ENV=development
  ```

4. Start the backend server

cd backend
npm run dev

5. In a new terminal, start the frontend development server

cd frontend
npm run dev

6. Open your browser and visit `http://localhost:5173` (or the port Vite is running on)

## Features

- User management (view, create, edit, delete)
- News management (view list and details)
- Multi-language support (English and Spanish)

## Technologies Used

- Frontend: React, TypeScript, Vite
- Backend: Node.js, Express, TypeScript
- Database: MongoDB
- State Management: [Your choice, e.g., Redux, Context API]
- Internationalization: i18next

## Contributing

Contributions to the My SPA Project are welcome. Please adhere to this project's `code of conduct`.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project uses the following license: [MIT License](https://opensource.org/licenses/MIT).

## Contact

If you want to contact me you can reach me at <your_email@example.com>.