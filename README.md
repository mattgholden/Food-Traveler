# Food-Traveler
----------------

### Application Story
 Welcome to _Food Traveler_, an application that allows users to plan where to eat before and/or while they travel.  This idea came about while I was pondering how to combine two of my favorite things...food and travel.  Users can create an account, log in, and create a "ToEat List" for their upcoming travels.  If needed the user can also edit or delete the lists.  What may be the most useful tool is on the map page, where users can view and search locations, restaurants, etc...  This is a great tool to get ideas for popular restaurants to try.  The application can be viewed here [Food Traveler](https://foodtraveler.herokuapp.com/mapview).
 [Backend Repo](https://github.com/mattgholden/Food-Traveler-Backend)

### Technologies
-----------------
Frontend: 
- React
- Google Maps API
- Bulma & Bootstrap for styling

Backend: 
- Node.js
- Express Framework

Database: 
- MongoDB
- Mongoose

### Models and their properties
**User**
- Username/email
- Password

**ToEatList**
- Destination
- Start Date of Travel
- End Date of Travel
- Duration
- Restaurant Name
- Owner

### React Component Hierarchy

- Register
- AllLists
- EditList
- ListDetail
- Login
- MapView
- NavBar
- NewList
- Register
- Welcome

### Next Steps
- Using the Yelp Fusion API.  I would like to try to implement it into this application.
- Allow users to share lists with each other.

### Hurdles
- Styling with Bulma and I would like to learn more features.
- Learning how to use different features in Google Map's API.
- Deployment - I need to make sure to keep the frontend and backend repositories separate.  Also carefully review the URLs to make sure the backend is properly connected to the frontend.



### Application Views
----------------------

![Welcome Page](https://user-images.githubusercontent.com/91032366/161655944-2e6824b1-2aab-4012-8a7f-23adf651a755.png)

![Register](https://user-images.githubusercontent.com/91032366/161656187-03ceb4d7-5625-413c-8ce3-576b37e05278.png)

![Add New ToEat List](https://user-images.githubusercontent.com/91032366/161656288-0b64c268-6165-4778-817b-56565204eb22.png)

![ToEat List Details](https://user-images.githubusercontent.com/91032366/161656462-9199171f-7a7f-406a-8a51-a1bd8a0c59e4.png)

![ToEat List Edit Page](https://user-images.githubusercontent.com/91032366/161656539-191f9899-ae6e-4537-857d-6e97e123dfd2.png)

![Map Page](https://user-images.githubusercontent.com/91032366/161656120-b0bd8095-c7f6-4fd8-8f18-b155c97df7ef.png)



### Resources
- [MDN](https://developer.mozilla.org/en-US/)
- [GeeksforGeeks](https://www.geeksforgeeks.org/)
- [React Docs](https://reactjs.org/)
- [Bulma Docs](https://bulma.io/)
- [Bootstrap Docs](https://react-bootstrap.github.io/)
- [Leigh Halliday - YouTube](https://www.youtube.com/)

