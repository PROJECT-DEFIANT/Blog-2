# Application architecture

## Layers

The application has three layers:

1. Client-Layer - used to store the Blog-Layer and Admin-Layer
2. Server-Layer - used to store the server, APIs
3. DataBase-Layer - used to store the database and its handlers

### 1. Client-Layer

Layer for the front of the application. Splitted into two sub-layers:

1. Admin-Layer - CMS like feature to store the data of the blog and login shell
2. Blog-Layer - Front for the portfolio and blog
