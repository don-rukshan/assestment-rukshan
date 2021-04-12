import React from "react";

const LoadingPage = () => {
  return (
    <div style={styles.container}>
      <div>
        {/* need to add a spinner image */}
        <span style={styles.loadingText}>{`Loading,\nPlease wait...`}</span>
      </div>
    </div>
  );
};

const styles = {
  loadingText: {
    fontSize: 18,
    padding: 25,
  },
  container: {
    display: "flex",
    height: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
};

export default LoadingPage;
