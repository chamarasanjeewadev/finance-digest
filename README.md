# Finance-digest

Finance-digest is a mobile application built with React Native and Expo, designed to provide financial insights and information.

## 🚀 Getting Started

### Prerequisites

- Node.js (LTS version recommended)
- Yarn package manager
- Expo CLI (`npm install -g expo-cli`)

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/your-username/Finance-digest.git
   cd Finance-digest
   ```

2. Install dependencies:
   ```
   yarn install
   ```

## 🛠️ Development

### Running the app

- For iOS:
  ```
  yarn ios
  ```

- For Android:
  ```
  yarn android
  ```

- For web:
  ```
  yarn web
  ```

- To start the Expo development server:
  ```
  yarn start
  ```

### Scripts

- `yarn prebuild`: Run Expo prebuild
- `yarn lint`: Run ESLint and Prettier checks
- `yarn format`: Run ESLint and Prettier fixes

## 🧰 Tech Stack

- React Native
- Expo
- React Navigation
- React Query (TanStack Query)
- Axios
- NativeWind (TailwindCSS for React Native)
- React Hook Form
- Zod (for schema validation)
- Zustand (for state management)

## 📚 Additional Libraries

- date-fns
- react-native-reanimated
- react-native-svg
- expo-notifications

## 🧪 Testing

This project uses Jest for testing. Run tests with:

```
yarn test
```

Jest is configured to work with TypeScript using ts-jest. You can find the Jest configuration in the `package.json` file under the "jest" key (if present) or in a separate `jest.config.js` file.

To run tests with coverage information, you can use:

```
yarn test --coverage
```

This will generate a coverage report, showing which parts of your code are covered by tests.
