import React, { useState } from "react";
import { useDataFetching } from "./hooks/useDataFetching";
import SearchInput from "./components/SearchInput";
import StatusMessage from "./utils/StatusMessage";
import UserTable from "./components/UserTable";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const { data, error, isLoading, fetchData } = useDataFetching();

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleFetchData = () => {
    fetchData();
  };

  const filteredData = data
    ? data.filter(
        (user) =>
          user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          user.username.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  return (
    <div className="container mx-auto mt-8 p-4">
      <SearchInput
        value={searchQuery}
        onChange={handleSearchChange}
        isLoading={isLoading}
        onClick={handleFetchData}
      />
      <StatusMessage
        isLoading={isLoading}
        error={error}
        dataLength={filteredData.length}
      />
      {filteredData.length > 0 && <UserTable data={filteredData} />}
    </div>
  );
}

export default App;
