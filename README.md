# NSO Website

## Introduction

The Nepali Student Organization (NSO) at JSU is dedicated to providing essential information and resources to current and prospective Nepali students. This platform serves as a comprehensive guide, covering a wide array of topics relevant to the student community from Nepal.

## Technology Stack

- **Backbone**: Built using [Next.js](https://nextjs.org/), a powerful React framework.
- **Routing**: Utilizes Next.js's App Router. (Learn more about Next.js routing [here](https://nextjs.org/docs/app/building-your-application/routing)).
- **Styling**: Styled with [TailwindCSS](https://tailwindcss.com/), with support for SCSS for advanced styling needs.

## Project Structure

- **`/public`**: This directory contains publicly hosted files/images.
- **`/src/app`**: We use the Next.js App Router, offering efficient and easy-to-manage routing capabilities.
- **`/src/components`**: This directory stores reusable React components, aiding in maintaining a clean and modular codebase.
- **`/src/global.scss`**: This file contains global styles for further customization.

## Setup and Running the Project

1. **Clone the Repository**

   ```bash
   git clone https://github.com/karuifeather/nso
   ```

2. **Install Dependencies**
   Navigate to the project directory and install the required dependencies.

   ```bash
   cd nso
   npm install
   ```

3. **Run the Development Server**
   ```bash
   npm run dev
   ```
   Access the website at `http://localhost:3000`.

## Contributing

We warmly welcome contributions to the NSO website. To maintain the quality and consistency of our codebase, please follow these guidelines:

### Setting Up for Contribution

1. **Fork the Repository**: Start by forking the repository to your GitHub account.

2. **Clone Your Forked Repository**

   ```bash
   git clone https://github.com/karuifeather/nso
   cd nso
   ```

3. **Create a New Branch**
   Create a new branch for your feature or fix.
   ```bash
   git checkout -b feature/your-feature-name
   ```

### Making Changes and Submitting a Pull Request

1. **Commit Your Changes**
   After making your changes, commit them with a clear and concise commit message.

   ```bash
   git add .
   git commit -m "this fixes #issue-id"
   ```

2. **Push to Your Fork**
   Push the changes to your forked repository.

   ```bash
   git push origin feature/your-feature-name
   ```

3. **Create a Pull Request**
   Go to the original repository on GitHub and create a pull request from your branch. Please provide a clear description of the changes and any relevant issue numbers.

### Review and Merge

Our team will review your pull request. If there are any changes to be made, we will provide feedback. Once approved, your changes will be merged into the main branch.

## Contact

For any inquiries, suggestions, or contributions, please feel free to reach out to us. You can contact the NSO team via:

- **Email**: [nso@jsu.edu](mailto:nso@jsu.edu)
- **GitHub Issues**: For technical issues or feature requests, please use the [GitHub Issues](https://github.com/karuifeather/nso/issues) page.

We look forward to hearing from you and appreciate your interest in improving the NSO website at JSU.
