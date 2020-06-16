## COVID 19 Community Care System
The project is for designing the user interface of COVID 19 Community care system to give users the look and feel of the web pages

* *Date Created*: 14 Jun 2020
* *Last Modification Date*: 15 Jun 2020

## Authors
* [Ram prasath Meganathan](rm507817@dal.ca) - Developer

## Designed pages
This website is created for the donation managment of masks and gloves for COVID- 19. the website  has 4  defined roles , admin, donor, requestor and volunteer. 

Admin - who manages the process of donation and material requests
Donor - who wants to donate the masks and gloves
Requestors - who will request for masks and gloves
Volunteers - who will volunteer delivery of masks and gloves

Pages created
1. Landing.js - which contains a carousel built using react bootstrap. It also has 4 cards which will provide the user visiting the page to choose over 4 different roles to go to their respective login pages.

2. User profile management pages 
Login.js - where different roles can click identify themselves using their credentials
Forgotpassword.js - where all the roles can reset their passwords

3. AboutUs.js - contains information about the website( has lorem ipsum text for the web pages for now)

4. Feedback.js - where registerd or unregistered users can provide their feedbacks with their name, email and comments

5.Notfound.js - where users will be redirected if the page is not found because of a invalid url

6.NotBuilt.js - for pages that is yet to built and are part of the application

6. Other pages created
1. Navbar.js,Footer.js - For header and footer where the user menu, title and the links to other pages will be available.It is responsive and will be common across all pages . code is referenced from [Navbar] but modified the design to my specification., changed the look and feel.It has a default template from bootstrap.

2. ControlledCarousel.js  
  Took the code from this reference and modified it to my specification for building a auto image slider in the Landing page (Reference name [Carousel])

## Prerequisites

Software used extensively are 
               1. React
               2. CSS
               3. HTML
               4. Bootstrap

## Installing

1. Go to the gitlab repository '' and access the code from there 
2. clone it to your local and run 'npm install' it should take care of all the depenencies.

## Running the tests
For testing, The code is already deployed in this url https://advancedwebassignment2.herokuapp.com/
For local testing, please follow the steps as in the ### Installing above.

## Break down into end to end tests
The application front end UI is built along with validations and other success messsages that will be displayed on both valid and invalid form scenarios.
In addition, smoke testing is done to navigate between pages and ensured that the transition is smooth

## And coding style tests
1. Have tested the application with W3C and ensured that is is compliant.
2. Have used HTML5 semantics and ensured that is compliant on the standard.
2. Have tested the application and ensured that dom errors are not there in the browser console.
3. Have tested the application in different browsers and ensured that it works perfectly fine.
4. Have modularized the application into proper modules and ensured that the application folders work properly
5. Ensured that the url's in the application works properly.

## Best practices followed 
1. modularized the application
2. Ensured that users get only valid error messages
3. Ensured that page styling is responsive enough for the devices of the specified devices
4. Aligned all the contents of the pages with proper indentation
5. Added appropriate comments wherever necessary
6. Ensured that code doesn't break through smoke testing and validation testing
7. Ensured that the website is cross browser compliant

## Deployment
The application is deployed on Heroku and the deployed url is https://advancedwebassignment2.herokuapp.com/

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

6. Bootstrap
purpose - used for styling the components and aligning them
version used - 4.0.0
Link - https://getbootstrap.com/docs/4.0/getting-started/introduction/

## Sources Used

### ControlledCarousel.js

*Lines 5-38*

My code
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

The code above was created by adapting the code in [Carousel]https://react-bootstrap.github.io/components/carousel/ as shown below: 

Referred code
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

The code in [1](https://react-bootstrap.github.io/components/carousel/.) was implemented in the React site itself as it is a component in react bootstrap
[1](https://react-bootstrap.github.io/components/carousel/.)'s Code was used because it is a predefined component in react bootstrap and can't be implemented in any other way
[1](https://react-bootstrap.github.io/components/carousel/.)'s code is modified by Ram prasath Meganthan for web assignment 2 submission

### Navbar

*Lines 10-18

Mycode 
<button className="navbar-toggler navbar-toggler-right navbar-dark"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbar1"
                    aria-controls="navbar1"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

modified code

The code above was created by adapting the code in [Navbar](https://getbootstrap.com/docs/4.0/components/navbar/) as shown below: 

Referred code 
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

The code in [3](https://getbootstrap.com/docs/4.0/components/navbar/.) was a default template in bootstrap site and can't be implemented in any other way.
[3](https://getbootstrap.com/docs/4.0/components/navbar/.)'s Code was used because it is a default code that should be used for implementing  navbar
[3](https://getbootstrap.com/docs/4.0/components/navbar/.)'s code is modified by Ram prasath Meganthan for web assignment 2 submission

### App.css

Template design for login page

*Lines 83-99*

My code
.login {
  width: 360px;
  margin: 55px auto;
}
.login form {
  margin-bottom: 20px;
  background: #f7f7f7;
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.3);
  padding: 35px;
}
.login h2 {
  margin: 0 0 20px;
}
.form-control, .button {
  min-height: 38px;
  border-radius: 2px;
}

The code above was created by adapting the code in [6]- https://www.tutorialrepublic.com/codelab.php?topic=bootstrap&file=simple-login-form as shown below: 

Referred code

.login-form {
		width: 340px;
    	margin: 50px auto;
	}
    .login-form form {
    	margin-bottom: 15px;
        background: #f7f7f7;
        box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
        padding: 30px;
    }
    .login-form h2 {
        margin: 0 0 15px;
    }
    .form-control, .btn {
        min-height: 38px;
        border-radius: 2px;
    }


The code in [6](https://www.tutorialrepublic.com/codelab.php?topic=bootstrap&file=simple-login-form.) was a sample styling template used for alignment. since this is a css style attribute only values could be change. 
[6](https://www.tutorialrepublic.com/codelab.php?topic=bootstrap&file=simple-login-form.)'s Code was used to align the contents for this page and it was necessary for establishing the initial design of the page.
[6](https://www.tutorialrepublic.com/codelab.php?topic=bootstrap&file=simple-login-form.)'s code is modified by Ram prasath Meganthan for web assignment 2 submission


## References and Attributions
[1] - “Menu,” Github.io, 2020. [Online]. Available: https://react-bootstrap.github.io/components/carousel/. [Accessed: 15-Jun-2020] -built a image slider with this component
[2] - “Menu,” Github.io, 2020. [Online]. Available: https://react-bootstrap.github.io/components/cards/. [Accessed: 15-Jun-2020]
‌- Default card layout and built in component in react
[3] - M. Otto, “Navbar,” Getbootstrap.com, 2020. [Online]. Available: https://getbootstrap.com/docs/4.0/components/navbar/. [Accessed: 15-Jun-2020] - took the navbar implementation from this and modified it to my specification.
[4] - M. Otto, “Buttons,” Getbootstrap.com, 2020. [Online]. Available: https://getbootstrap.com/docs/4.0/components/buttons/. [Accessed: 15-Jun-2020] - for all boostrap components 
[5] - “Getting Started – React,” Reactjs.org, 2020. [Online]. Available: https://reactjs.org/docs/getting-started.html. [Accessed: 15-Jun-2020] ‌- for all react components
[6] - “Bootstrap Simple Login Form,” Tutorialrepublic.com, 2020. [Online]. Available: https://www.tutorialrepublic.com/codelab.php?topic=bootstrap&file=simple-login-form. [Accessed: 15-Jun-2020] - css template for login page
‌

## Image and icon refereneces and attributions
Since our project is based on a issue that occurs now. could collect appropriate images from real time sources only. Following are the references for them.

[1] - PhotoAuthor or Link author : superoke/iStockphoto - “‘Stop the Spread’: Emergency physicians release COVID-19 guide for the public,” Safetyandhealthmagazine.com, 18-Mar-2020. [Online]. Available: https://www.safetyandhealthmagazine.com/articles/19590-stop-the-spread-emergency-physicians-release-covid-19-guide-for-the-public. [Accessed: 15-Jun-2020]
‌
[2] - Photo or link author - Liz Kingston -L. Kingston, “Why using gloves in public is ‘largely futile’ against the virus,” RTE.ie, Apr. 2020 [Online]. Available: https://www.rte.ie/brainstorm/2020/0402/1128061-coronavirus-gloves/. [Accessed: 15-Jun-2020]
‌
[3] - “Donations of Masks, Gloves and Other Protective Equipment – Haliburton, Kawartha, Pine Ridge District Health Unit,” Hkpr.on.ca, 06-Apr-2020. [Online]. Available: https://www.hkpr.on.ca/2020/04/06/covid-19-donations-of-masks-gloves-and-other-protective-equipment/. [Accessed: 15-Jun-2020]
‌
