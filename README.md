# Food-Traveler
----------------

### Application Story
 Welcome to _Food Traveler_, an application that allows users to plan where to eat before and/or while they travel.  This idea came aboute while I was pondering how to combine two of my favorite things...food and travel.  Users can create an account, log in, and create a "ToEat List" for their upcoming travels.  If needed the user can also edit or delete the lists.  What may be the most useful tool is on the map page, where users can view and search locations, restaurants, etc...  This is a great tool to get ideas for popular restaurants to try.  The application can be viewed here [Food-Traveler] (https://foodtraveler.herokuapp.com/).
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

### Unsolved Problems / Next Steps
- Using the Yelp Fusion API.  I would like to try to implement it into this application.
- Allow users to share lists with each other.
- Log in / log out conditional.

### Hurdles
- Styling with Bulma and I would like to learn more features.
- Learning how to use different features in Google Map's API.
- Deployment - I need to make sure to keep the frontend and backend repositories separate.  Also carefully review the URLs to make sure the backend is properly connected to the frontend.



### Application Views
----------------------
![Welcome Page]()

![Register]()

![Add New ToEat List]()

![ToEat List Details]()

![ToEat List Edit Page]()

![Map Page]()


### Resources
- ![MDN](https://developer.mozilla.org/en-US/)
- ![GeeksforGeeks](https://www.geeksforgeeks.org/)
- ![React Docs](https://reactjs.org/)
- ![Bulma Docs](https://bulma.io/)
- ![Bootstrap Docs](https://react-bootstrap.github.io/)
- ![Leigh Halliday - YouTube](https://www.youtube.com/)



### Wireframes
![Map Wireframe](https://media.git.generalassemb.ly/user/38857/files/7d9bac00-a4b6-11ec-8986-636d8089dfb8)

![ToEat List Wireframe](https://media.git.generalassemb.ly/user/38857/files/31516b80-a4b8-11ec-91da-e81b2d9ad395)



