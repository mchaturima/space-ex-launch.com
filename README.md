Simple React JS Project

This Project is a Simple ReactJS Project which demonstrates the following:

1. Creating a component in react.
2. Fetching an Api data using fetch().
3. Rendering the fetched data to the root.
4. Basic Css styling and Html has been used for development.

Live Application URL:
https://mchaturima.github.io/Publicis-Sapient/

Below are the screenshots of the website developed according to the requirements:

#Requirement.No.1: Display all the launches on page load.

![pageLoadLaunch](https://user-images.githubusercontent.com/50954235/90982377-720b2c00-e584-11ea-83e6-8b61dc002cb8.png)

#Requirement.No.2: When a filter is selected change the api fetch and display data without page refresh.
  #Requirement.No.2.1: When a Launch year is selected the following appears:

![Screenshot (40)](https://user-images.githubusercontent.com/50954235/90982833-9f0d0e00-e587-11ea-8139-0b839c66ded1.png)

 #Requirement.No.2.2: When a successful launch true is selected the following appears:

![Screenshot (43)](https://user-images.githubusercontent.com/50954235/90982902-01660e80-e588-11ea-8d17-431cce97d118.png)

 #Requirement.No.2.3: When a successful landing true is selected the following appears:

![Screenshot (45)](https://user-images.githubusercontent.com/50954235/90982946-4b4ef480-e588-11ea-83bf-395475a2e14b.png)

 #Requirement.No.2.4: When a year is selected with success launch true and success land true the following appears:

![Screenshot (47)](https://user-images.githubusercontent.com/50954235/90983054-f495ea80-e588-11ea-97e0-8f985e8b8ca4.png)

#Requirement.No.3: Desktop view with 4 columns:

![pageLoadLaunch](https://user-images.githubusercontent.com/50954235/90982377-720b2c00-e584-11ea-83e6-8b61dc002cb8.png)

#Requirement.No.4: Tablet view with two columns:

![Screenshot (49)](https://user-images.githubusercontent.com/50954235/90983236-3c694180-e58a-11ea-9925-7e67b4c0d859.png)

#Requirement.No.5: Mobile view with one column:

![Screenshot (51)](https://user-images.githubusercontent.com/50954235/90983295-a386f600-e58a-11ea-8e72-7b0ffd61ee40.png)

![Screenshot (53)](https://user-images.githubusercontent.com/50954235/90983350-0e383180-e58b-11ea-97bd-076bd606a4c7.png)

Unit Test Cases:

1. On page load all the launches have to be displayed.
   Expected Output: All the launches are supposed to be displayed in 4 columns.
   Actual Output: All the launches are displayed in 4 columns.

2. If user clicks on any year button without clicking on successful buttons and landing buttons.
    Expected Output: Launches regarding that particular year have to appear.
    Actual Output: Launches regarding that particular year are appearing.

3. If user clicks on only successful true without clicking on a launch year button and landing buttons.
    Expected Output: Launches that are successful true in entire data have to appear.
    Actual Output: Launches that are successful true in entire data are appearing.

4. If user clicks on only successful false without clicking on a launch year button and landing buttons.
    Expected Output: Launches that are successful false in entire data have to appear.
    Actual Output: Launches that are successful false in entire data are appearing.

5. If user clicks on only landing true without clicking on a launch year button and successful buttons.
    Expected Output: Launches that are landing true in entire data have to appear.
    Actual Output: Launches that are landing true in entire data are appearing.

6. If user clicks on only landing false without clicking on a launch year button and successful buttons.
    Expected Output: Launches that are landing falsein entire data have to appear.
    Actual Output: Launches that are landing false in entire data are appearing.

7. If user selects all the three filters.
    Expected Output: Launches matching that particular filter have to appear.
    Actual Output: Launches matching that filter are appearing.

8. If any of the filters are selected, reset filters button appears.
    Expected Output: If filters are selected, reset filters button should appear.
    Actual Output: If filters are selected, reset filters button are appearing.

8. If user clicks on reset filters button, filters should be cleared and all the launches should appear.
    Expected Output: Filters should be cleared and all the launches should appear.
    Actual Output: Filters are cleared and all the launches are appearing.













