# Rubric-file-structure
File structure for iX Full stack Project 

## Project Setup

### Create Project Via CLI

Navigate to the project file

```bash
cd Rubric-file-structure
cd Admin Panel
```
Create project

```bash
ng new admin-panel
```
Do the same for projects:

Consumer Mobile App

```bash
ionic start consumer-mobile-app
```

Provider Mobile App

```bash
ionic start provider-mobile-app
```

API

Create file structure with server.js located in a folder called api

```bash
mkdir api
cd api 
npm init
```

### Project Structure 

Generate a mark down table similar to the one in root directory of this project. The following website can be used to do https://www.tablesgenerator.com/markdown_tables or edit the Project File Structure.txt file in the root directory

Only files included in this mark down table with be marked!

Ensure that the files included in the mark down table related the sections specified in the table.

Please include the mark down table in the README.md file in the root directory of the project.

### Example of Project Structure 

| PROJECT             | COMPONENT          | FILE NAMES                                                                                                                                                                              |
|---------------------|--------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Consumer mobile app | Login              | eg. Rubric-file-structure\consumer-mobile-app\consumer-mobile-app\src\pages\login & eg. Rubric-file-structure\consumer-mobile-app\consumer-mobile-app\src\providers\login               |
| Consumer mobile app | Registration       | eg. Rubric-file-structure\consumer-mobile-app\consumer-mobile-app\src\pages\registration & eg. Rubric-file-structure\consumer-mobile-app\consumer-mobile-app\src\providers\registration |
| Consumer mobile app | User Profile       | eg. Rubric-file-structure\consumer-mobile-app\consumer-mobile-app\src\pages\user & eg. Rubric-file-structure\consumer-mobile-app\consumer-mobile-app\src\providers\user                 |
| Consumer mobile app | List of Properties | eg. Rubric-file-structure\consumer-mobile-app\consumer-mobile-app\src\pages\properties & eg. Rubric-file-structure\consumer-mobile-app\consumer-mobile-app\src\providers\properties     |
| Provider mobile app | Login              | eg. Rubric-file-structure\provider-mobile-app\provider-mobile-app\src\pages\login & eg. Rubric-file-structure\provider-mobile-app\provider-mobile-app\src\providers\login               |
| Provider mobile app | Registration       | eg. Rubric-file-structure\provider-mobile-app\provider-mobile-app\src\pages\registration & eg. Rubric-file-structure\provider-mobile-app\provider-mobile-app\src\providers\registration |
| Provider mobile app | User Profile       | eg. Rubric-file-structure\provider-mobile-app\provider-mobile-app\src\pages\user & eg. Rubric-file-structure\provider-mobile-app\provider-mobile-app\src\providers\user                 |
| Provider mobile app | List of Properties | eg. Rubric-file-structure\provider-mobile-app\provider-mobile-app\src\pages\properties & eg. Rubric-file-structure\provider-mobile-app\provider-mobile-app\src\providers\properties     |
| Provider mobile app | List of Bookings   | eg. Rubric-file-structure\provider-mobile-app\provider-mobile-app\src\pages\bookings & eg. Rubric-file-structure\provider-mobile-app\provider-mobile-app\src\providers\bookings         |
| Admin Panel         | Users              | eg. Rubric-file-structure\admin-panel\admin-panel\src\app\components\users & eg. Rubric-file-structure\admin-panel\admin-panel\src\app\services\users                                   |
| Admin Panel         | Bookings           | eg. Rubric-file-structure\admin-panel\admin-panel\src\pages\bookings & eg. Rubric-file-structure\admin-panel\admin-panel\src\src\app\services\bookings                                  |
| API                 | Users              | eg. Rubric-file-structure\API\api\src\pages\users & eg. Rubric-file-structure\api\api\provider-mobile-app\src\api\users                                                                 |
| API                 | Bookings           | eg. Rubric-file-structure\API\api\src\pages\bookings & eg. Rubric-file-structure\api\api\provider-mobile-app\src\api\bookings                                                           |

### Change Git Remote URL

Create new repository on GitHub.

Change the git URL associated with the project 

```bash
git remote set-url origin < new URL of your GitHub project (click 'Clone or download' button on GitHub site to see URL) >
```

Ensure that the git URL has been updated.

```bash
git remote -v
```

