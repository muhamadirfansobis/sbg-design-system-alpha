
# Sobatbisnis Group Design System Library

![image](https://res.cloudinary.com/dakonxtdt/image/upload/v1746002456/Logo_SEMENTARA_omkbus_1_oot0gc.svg)

Welcome to the **Sobatbisnis Group Design System Library**! This library is built using **React**, **Vite**, and **Tailwind CSS** to provide a robust and efficient design system for your projects.

[![forthebadge](https://forthebadge.com/images/badges/built-by-developers.svg)](https://forthebadge.com)

![image](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) ![image](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E) ![image](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

## Tech Stack

- **React**: A JavaScript library for building user interfaces.
- **Vite**: A fast build tool and development server.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.

## Features

- **Component-Based Architecture**: Build reusable and maintainable components.
- **Fast Development**: Leverage Vite for quick builds and hot module replacement.
- **Customizable Styles**: Use Tailwind CSS for flexible and responsive design.

## Installation

To get started, clone the repository and install the dependencies using PNPM:

```bash
git clone https://github.com/yourusername/sobatbisnis-design-system-library.git
cd sobatbisnis-design-system-library
pnpm install
```

## Usage

Import the components you need and start building your UI:

```jsx
import { ThemeProvider, Button } from 'sbg-design-system-alpha';

function App() {
  return (
    <div className="App">
      // Theme data available : "default" | "akasia-365"
      <ThemeProvider themeData="default">
        <Button>Click Me</Button>
      </ThemeProvider>
    </div>
  );
}

export default App;
```

## Contributing

We welcome contributions! Please read our Contributing Guide to learn how you can help.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.

## Contact

For any questions or feedback, please reach out to us at hello@sobatbisnis.com.

## NPM Package

You can find the NPM package here: https://www.npmjs.com/package/sbg-design-system-alpha

---

Thank you for using the Sobatbisnis Group Design System Library! 🎉