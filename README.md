# Wanderlust

## Project Description

Wanderlust is a clone of the Airbnb website, built using Node.js, Express.js, MongoDB, EJS, HTML, and CSS. It incorporates RESTful APIs and the MVC framework. The project features user authentication using the Passport library, image storage via Cloudinary, map integration with Mapbox, cloud data storage with MongoDB Atlas, and is deployed on Render.

## Table of Contents

1. [Installation](#installation)
2. [Usage](#usage)
3. [Credits](#credits)
4. [License](#license)
5. [Contributing](#contributing)

## Installation

To get a local copy up and running, follow these steps:

1. Clone the repository:

   ```sh
   git clone https://github.com/your-username/wanderlust.git
   cd wanderlust
   ```

2. Install NPM packages:

   ```sh
   npm install
   ```

3. Create a `.env` file in the root directory and add your environment variables:

   ```
   ATLASDB_URL=your_mongodb_atlas_url
   CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
   CLOUDINARY_KEY=your_cloudinary_key
   CLOUDINARY_SECRET=your_cloudinary_secret
   MAP_TOKEN=your_mapbox_token
   SECRET=your_session_secret
   ```

4. Start the server:
   ```sh
   node app.js
   ```

## Usage

1. Open your browser and go to `http://localhost:8080`.
2. Register or log in to access all features.
3. Browse and search listings, view details, and leave reviews.

## Credits

- **Node.js**: [https://nodejs.org/](https://nodejs.org/)
- **Express.js**: [https://expressjs.com/](https://expressjs.com/)
- **MongoDB**: [https://www.mongodb.com/](https://www.mongodb.com/)
- **Passport.js**: [http://www.passportjs.org/](http://www.passportjs.org/)
- **Cloudinary**: [https://cloudinary.com/](https://cloudinary.com/)
- **Mapbox**: [https://www.mapbox.com/](https://www.mapbox.com/)
- **Render**: [https://render.com/](https://render.com/)

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
