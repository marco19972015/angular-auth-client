// Is a common place where we keep our application settings. Rather than hardcoding our settings in the components, pipe or any typescript 
// files in Angular, having the application settings in the environment file will give us great benefit in that we can have 
// different settings i different application environments.
export const environment = {
    // get better understanding of the props below 
    production: false,
    api: 'http://localhost:8002/api'
};
