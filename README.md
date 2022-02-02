
<br />
<p align="center">
  <h3 align="center">Course-Booking-System</h3>
</p>

<!-- TABLE OF CONTENTS -->
## Table of Contents

* [About the Project](#about-the-project)
  * [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [Usage](#usage)

<!-- ABOUT THE PROJECT -->
## About The Project

**Course-Booking-System** is a smart solution to book a slot for a particular course or can cancel their booking and the leftover slot given to the first person in the waiting list.

### Built With

* [Node](https://nodejs.org/en/)
* [Mongoose](https://www.npmjs.com/package/mongoose)



<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.

### Installation
 
1. Clone the repo
```sh
git clone https://github.com/Vaibhav2801/Course-booking-system.git
```
2. Install NPM packages
```sh
npm install
```
<!-- USAGE EXAMPLES -->
## Usage

To run this project locally, you can run the following command. 


#### Using npm
```sh
npm run server
```

## API Endpoints

|Request Type| Route | Function |
|:-----------:|:------:|:---------:|
| POST | /courses/register |  Register Course|
| POST | /users/register | Register  users |
| DELETE | /users/slots/:_id | Delete users |

**Note:**  
1. While Registering Course in start_time format should be like YYYY-MM-DDTHH:MM:SSZ
2. In /config/keys.js file enter your Mongo Atlas user password and database name.

