# Student Enrollment Form

This repository contains a simple **Student Enrollment Form** built using HTML, Bootstrap, and jQuery. It integrates with a **JSONPowerDB (JPDB)** backend to perform basic Create, Read, and Update operations for student records.

## Overview

The form allows you to:
- Enter a student's Roll No. (ID).
- Fetch and display the details of an existing student (if found) from JPDB.
- Create a new student record if the Roll No. does not exist in JPDB.
- Update an existing student record if the Roll No. exists.
- Reset the form to its initial state.

## Key Features

1. **Form Validation:**  
   The form requires all fields (Roll No., Full Name, Class, DOB, Address, and Enrollment Date) to be filled before saving or updating a record.

2. **Dynamic Button States:**  
   - **Save Button:** Enabled when a new Roll No. is entered and the form is filled out.
   - **Change Button:** Enabled when an existing student's details are fetched for modification.
   - **Reset Button:** Enabled when either new data is entered or existing data is fetched.

3. **Database Operations:**  
   This form uses the JPDB REST APIs:
   - **GET_BY_KEY** to fetch a record by its Roll No.
   - **PUT** to create a new record.
   - **UPDATE** to change an existing record.

## Prerequisites

- A working account/token for **JSONPowerDB**.
- A configured **JPDB base URL**, token, database name, and relation (table) name.
- Basic knowledge of HTML, CSS (Bootstrap), JavaScript, and AJAX.

## Setup and Installation
1. **Clone the Repository:**
   ```bash
   git clone https://github.com/rituparna-sarkar/JPDB-Student-Enrollment-Form.git

