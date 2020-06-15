## COVID 19 Community Care System
The project is for designing the user interface of COVID 19 Community care system to give users the look and feel of the web pages

* *Date Created*: 14 Jun 2020
* *Last Modification Date*: 14 Jun 2020

## Authors
* [Ram prasath Meganathan](rm507817@dal.ca) - Developer

## Designed pages
This website is created for the donation managment of masks and gloves for COVID- 19. we have 4 roles defined, admin, donor, requestor and volunteer. 

Admin - who manages the process of donation and requests
Donor - who wants to donate the masks and gloves
Requestors - who will request for masks and gloves
Volunteers - who will volunteer request of masks and gloves

Pages created
1. Landing.js - which contains a carousel which is built using react bootstrap. It also has 4 cards which will provide the user visiting the page to choose over 4 different roles to go to their respective login pages.

2. User profile management pages 
Login.js - where different roles can click identify themselves using their credentials
Forgotpassword.js - where all the roles can reset their passwords

3. AboutUs.js - contains information of lorem ipsum text for the web pages for now 

4. Feedback.js - where registerd or unregistered users can provide their feedbacks with their name, email and comments

5.Notfound.js - where users will be redirected if the page is yet to not found because of a invalid url

6.NotBuilt.js - for pages that is yet to built and are part of the application

6. Other pages created
1. Navbar.js,Footer.js - For header and footer where the user menu, title and the links to other pages will be available.It is responsive and will be common across all pages . code is referenced fro [5] but modified to include my own pages, changed the look and feel.It has a default template from bootstrap.

2. ControlledCarousel.js  
  Took the code from this reference and modified it to my specification for building a auto image slider in the project

## Prerequisites

Software used: 1. React
               2. CSS
               3. HTML

## Installing

1. Go to the gitlab repository '' and access the code from there 
2. clone it to your local and run 'npm install' it should take care of all the depenencies.


## Running the tests
For testing, The code is already deployed in this url '' 
For local testing, please follow the steps as in the ### Installing above.


## Break down into end to end tests
The application front end UI is built along with validations and other success messsages on a valid form. 
In addition, smoke testing is done to navigate between pages

## And coding style tests
1. Have tested the application with W3C and ensured that is is compliant
2. Have tested the application and ensured that dom errors are not there in the browser console
3. Have tested the application in different browsers and ensured that it works perfectly fine.
4. Have modularized the application into proper modules and ensured that the application folders work properly
5. Ensured that the url's in the application works properly.

## Deployment
The application is deployed on Heroku and the deployed url is ''

## Built With

The application is built with react which will contain most of the libraries needed for development. However following are the main libraries used their versions and purpose

1. React
purpose - for building the website
Link - https://reactjs.org/docs/getting-started.html
version used -  16.13.1

2. Create React app 
purpose - for initializing the react app template
This project was bootstrapped with 
Link - https://github.com/facebook/create-react-app

3. react-bootstrap
purpose - used for styling components in react
 https://react-bootstrap.github.io/getting-started/introduction
version used - 1.0.1

4. react-dom
purpose - used to provide methods the dom for the react component pages
version used - 16.13.1
Link - https://reactjs.org/docs/react-dom.html

5. react-router-dom
purpose - used for providing the routing facility of the website
version used - 5.2.0 
Link -  https://www.npmjs.com/package/react-router-dom


## Sources Used

If in completing your lab / assignment / project you used any interpretation of someone else's code, then provide a list of where the code was implement, how it was implemented, why it was implemented, and how it was modified. See the sections below for more details.

### ControlledCarousel.js

*Lines 5-38*

```
const  ControlledCarousel =() => 
{
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
    const getWindowWidth = () => window.innerWidth
    return (
      <Carousel activeIndex={index} onSelect={handleSelect} style={{ width:getWindowWidth()}}>
        <Carousel.Item className="h-75">
          <img
            className="d-block w-100"
            src="https://www.safetyandhealthmagazine.com/ext/resources/images/news/words/glove-stop-coronavirus.jpg?1584626830&auto=format&w=512&q=75&resize=width:50px,height:50px"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item className="h-75">
          <img
            className="d-block w-100"
            src="https://img.rasset.ie/00140c52-800.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item className="h-75">
          <img
            className="d-block w-100"
            src="https://www.hkpr.on.ca/wp-content/uploads/2020/04/GettyImages-1203224882-800x533.jpg?w=600&auto=format&crop=fit&q=85"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    );
    }

```

The code above was created by adapting the code in [Carousel]https://react-bootstrap.github.io/components/carousel/ as shown below: 

```
function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=First slide&bg=373940"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Second slide&bg=282c34"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=20232a"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}


```
The code in [Carousel](https://react-bootstrap.github.io/components/carousel/) was implemented in the React site itself as it is a component in react bootstrap
[Carousel](https://react-bootstrap.github.io/components/carousel/)'s Code was used because it is a predefined component in react bootstrap and can't be implemented in any other way

### Navbar

*Lines ## - ##*

```
Copy and paste your code on lines mentioned 

```

The code above was created by adapting the code in [NAME](link) as shown below: 

```
Copy and paste the snippet of code you are referencing

```

- <!---How---> The code in [NAME](link) was implemented by...
- <!---Why---> [NAME](link)'s Code was used because...
- <!---How---> [NAME](link)'s Code was modified by...

*Repeat as needed*

### File Name

*Lines 10-18

```
<button className="navbar-toggler navbar-toggler-right navbar-dark"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbar1"
                    aria-controls="navbar1"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

```

The code above was created by adapting the code in [Navbar](https://getbootstrap.com/docs/4.0/components/navbar/) as shown below: 

```
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

```
The code in [Navbar](https://getbootstrap.com/docs/4.0/components/navbar/) was a default template in bootstrap site
[Navbar](https://getbootstrap.com/docs/4.0/components/navbar/)'s Code was used because it is a deafult cod that should be used for implementing navbar



## Acknowledgments

* Hat tip to anyone whose code was used
* Inspiration
* etc


## References and Attributions
[Carousel] -  https://react-bootstrap.github.io/components/carousel/
[Cards]- https://react-bootstrap.github.io/components/cards/ - Default card layout and built in component in react
[Navbar] - https://getbootstrap.com/docs/4.0/components/navbar/ - took the navbar implementation from this and modified it to my specification.
[Bootstrap components] - https://getbootstrap.com/docs/4.0/components/buttons/ - for all boostrap components 
[React components] - https://reactjs.org/docs/getting-started.html - for all react components

## Image and icon refereneces and attributions

[1] -  https://www.safetyandhealthmagazine.com/articles/19590-stop-the-spread-emergency-physicians-release-covid-19-guide-for-the-public

[2] - https://www.rte.ie/brainstorm/2020/0402/1128061-coronavirus-gloves/

[3] - http://www.guillermomaldonado.org/blog/community-resources


## Image Attributions 
 [1] 'https://www.safetyandhealthmagazine.com/ext/resources/images/news/words/glove-stop-coronavirus.jpg?1584626830&auto=format&w=512&q=75&resize=width:50px,height:50px'
 [2] 'https://img.rasset.ie/00140c52-800.jpg'
 [3] - 'https://www.hkpr.on.ca/wp-content/uploads/2020/04/GettyImages-1203224882-800x533.jpg?w=600&auto=format&crop=fit&q=85'
 [4] - 'http://s3.amazonaws.com/content-kingjesus/wp-content/uploads/sites/7/2020/04/08194836/resources_read.png'

