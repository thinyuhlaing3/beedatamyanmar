interface Config {
    apiBaseUrl: string;
}

export const config: Config = {
    apiBaseUrl: process.env.REACT_APP_API_BASE_URL || ""
};
// "http://localhost:3500"
// process.env.REACT_APP_API_BASE_URL || ""