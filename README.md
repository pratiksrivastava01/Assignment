---

# Data Fetching in React Application

This README provides an overview of how data fetching is implemented in a React application using custom hooks and components.

## Overview

In a React application, fetching data from an API is a common task. It involves making asynchronous HTTP requests to retrieve data, which is then used to update the UI. In this example, we'll discuss how data fetching is implemented in a React application using custom hooks and components.

## Components and Hooks

### App Component

The `App` component is the main component of the application. It orchestrates the data fetching process and renders child components based on the fetched data and loading status.

#### Data Fetching Process

- The `App` component uses a custom hook called `useDataFetching` to fetch data from an API.
- This hook manages the state related to data fetching, including `data`, `error`, and `isLoading`.
- When the user triggers a fetch action (e.g., by clicking a button), the `fetchData` method provided by the hook is called.
- The `fetchData` method makes an asynchronous HTTP request to the API using Axios.
- Upon successful response, the fetched data is stored in the `data` state.
- If an error occurs during the request, the `error` state is updated with the error message.
- After the request is completed (whether successful or failed), the `isLoading` state is updated accordingly.

#### Rendered Components

- **SearchInput**: A component for searching users. It receives props for value, onChange, isLoading, and onClick.
- **StatusMessage**: A component to display loading status or error messages. It receives props for isLoading, error, and dataLength.
- **UserTable**: A component to display the list of users. It receives props for the filtered data.

### useDataFetching Hook

The `useDataFetching` hook is a custom hook responsible for fetching data from an API. It encapsulates the logic for data fetching and manages the related state.

#### State Management

- `data`: Stores the fetched data from the API.
- `error`: Stores any error that occurs during the data fetching process.
- `isLoading`: Indicates whether data fetching is in progress.

#### fetchData Method

- The `fetchData` method triggers the data fetching process.
- It makes an asynchronous HTTP request to the API using Axios.
- Upon completion of the request, it updates the `data`, `error`, and `isLoading` states accordingly.

## Conclusion

In summary, data fetching in a React application involves managing the state related to data fetching using custom hooks and rendering UI components based on the fetched data and loading status. By encapsulating the data fetching logic in custom hooks, we can create reusable and modular code that enhances the maintainability and scalability of the application.

---
