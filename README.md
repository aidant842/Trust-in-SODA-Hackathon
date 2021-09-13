# space4ALL

Click [here](https://space4all-4d0b1.web.app/) for the deployed site.

![Image of Website Across Devices](/space4all/src/static/images/readme-images/websiteexample.png)

## Table of Contents
 
- About
- Planning
    - Choosing a Topic
    - Team Roles
    - Polls and Wireframes
- UX
    - User Stories
    - Design
    - Features
- Future Implementations
- Technologies used
- Testing
- Deployment
- Credits / Acknowledgements

## About
This project was created as part of the ‘Trust in SODA’ hackathon held in partnership with Code Institute. “The main goal of the project was to create a tool that helps employers create a truly accessible workspace, or improve their recruitment and onboarding experience for every person”. 

### Project Goals
Team Goals
* Gain experience in working in an Agile software development team.
* Learn new coding techniques and methods in existing and new languages.
* Increase confidence in coding ability.
* Work together in a team well and communicate effectively.
* Broaden perspective of the software development process.
* Gain knowledge in matters of inclusion, diversity and equality in the software and workforce environment.

Site Goals
* Provide information on what inclusion, diversity and equality are.
* Ensure the site content is accessible for all with sufficient navigation techniques for screen readers and tabbing, suitable colour palettes for those with colour vision deficiencies, and having multiple different formats for content including audio and visual guidance. 
* Showcase the benefits of having a diverse workforce to employers/companies.
* Provide information regarding the variety of ways an inclusive and accessible workforce can be created.
* Provide good and bad office space comparison examples for companies and employees to be able to visualise the different ways of creating an inclusive workplace.
* Provide companies/employers with a platform to engage with interactive content to test whether their office space is accessible enough.
* Provide information about other accessories and products that are available in the market to help different people based on their additional and/or unique needs.


## Planning
### Choosing a Topic / Focus
We used Slack as a platform to create group and put forward potential ideas. All of the team put forward multiple ideas, talking about each one and tweaking until a final decision was made that the entire team was happy with, confirmed by a poll. We decided that we wanted to focus on what an accessible and inclusive office / workspace could include, and some accessories that could assist in making the working environment as accessible as possible.

It was important to us that this did not just focus on physical disabilities, but all matters of diversity and disability: Age, gender, sex, ethnicity, race, religion, criminal history, military status, age, parental status, marriage status, visible and invisible disabilities and so much more.

### Team Roles
Within the team there were a variety of different skill sets, expertise and experience, so we wanted to make sure that everyone was valued equally and had a part to play. We started by creating a poll to highlight the programming languages that everyone felt comfortable with, and then decided on a SCRUM master to help organise the project (Aidan). Roles and responsibilities were then divided across the team into multiple areas including (but not exclusive to): React JS coding, image creations, wireframe creations, page creations, git version control, research and documentation with team members often working together in multiple areas to complete a single task and ensure more than one perspective was captured. 

### Polls and Wireframes
Once the topic had been chosen, we created a rough outline of the page contents and mock ups were first created by pen and paper. Where there were multiple layout options and considerations, polls were undertaken and discussion had to come up with a final decision.

![Paper and Pen Mockups](/space4all/src/static/images/readme-images/mockup.jpg)

Once the final decision had been made on the mock ups that most closely resembled the layout and design of the website, more hi-fi mock ups were created in word documents to allow the team to edit them, then a final wireframe was created in Balsamiq. Some changes were made along the way but these were our main guidelines.

* Page 1 Wireframe  
![Page 1 Wireframe](/space4all/src/static/images/readme-images/page1wireframe.jpg)

* Page 2 Wireframe  
![Page 2 Wireframe](/space4all/src/static/images/readme-images/page2wireframe.jpg)

* Page 3 Wireframe  
![Page 3 Wireframe](/space4all/src/static/images/readme-images/page3wireframe.jpg)

* Page 4 Wireframe  
![Page 4 Wireframe](/space4all/src/static/images/readme-images/page4wireframe.jpg)


## UX

### User Stories
* As an employee who is disabled, I want to find examples of adjustments that can be made in an office to suit my disability, so that I can remain at my current role and perform to my best ability.
* As an employer/company who is seeking to diversify my workforce, I want to know the benefits of a diverse workforce, so that I can use this information to tailor my recruitment campaigns and methodologies.
* As an employer/company that has a disabled employee, I want to find information on office space and accessories, so that I can put in place adjustments to help my employee.

### Design
It was important to ensure that the website was incredibly accessible considering the nature of the topic and the likely user. Therefore it was important to design it ensuring it was clear and concise throughout. We ensured there was always a 1/3 style layout in three columns for consistency, whilst allowing these elements to stack on one another if the screen size was smaller. 

Colour was also an incredibly important part of the design considerations considering there are people with colour vision deficiencies. An inclusive colour palette was used that had been tested against various online resources listed in the credits below and was seen to be appropriate for the four types of colour vision deficiencies.

![Colour Palette](/space4all/src/static/images/readme-images/palette.jpg)

### Features
* Logo - The custom logo of the project displays in the top left hands side of the header and the bottom left of the footer.  Numerous different logos were created, at different sizes dependent on usage. A play was made on the word ‘space’ intentionally making it wider with a larger kerring/spacing value. The icon is made up of wheelchair symbol, the eye for visual and with the head of the person is a settings icon to recognise neuro. The font used is Atkinson Hyperlegible from the Braille Institute. Colour palette based on colour blind reaseach.

![Logo Without Text](/space4all/src/static/images/logo.png)  

![Logo Header](/space4all/src/static/images/logo-title.png)  

![Logo With Text Throughout](/space4all/src/static/images/logo-lg-text.png)  

![Logo With Text Beneath](/space4all/src/static/images/logo-lg-icon.png)  

* Header/Nav Bar - A persistant header that contains the navbar. The NavBar contains a list of all the available pages on the site which hihlights the current page with an underline animation.

![Header](/space4all/src/static/images/readme-images/header.png) 

* Footer (LinkedIn, GitHub, Logo) - The names of the contributors of this repo that creates a new tab with the linkedn profile of the corresponding contributor. The central github icon in the footer then creates a new tab directed to the repo of the project. 

![Footer](/space4all/src/static/images/readme-images/footer.png) 

* Mobile Nav - On medium and small screen the navbar logo changes to take up more real estate on the header and the list changes the a hamburger icon. When pressed the hamburger reveals a dropdown menu with the list of pages vertically.  

![Mobile Nav Bar](/space4all/src/static/images/readme-images/mobile-header.png)  
![Mobile Nav Bar With Dropdown](/space4all/src/static/images/readme-images/mobile-header-dropdown.png)  

* Accessibility Icon - Button for the user to adjust the the font size, highlight links and increase the size of the cursor.  

![Accessibility Icon](/space4all/src/static/images/readme-images/accessibility-icon.png)   
![Accessibility Menu](/space4all/src/static/images/readme-images/accessibility-menu.png)  

* Back to Top Button - Returns the user to the the top of the page. This button remains at the bottom right of the page at all times.  

![Back To Top Button](/space4all/src/static/images/readme-images/back-to-top.png)

### Pages
* Home - The home page consists of generic **information and definitions** about inclusion, diversity and equality. The introduction starts with information about what they are and why **it is important** followed by a sectionw tih regards to the **benefits of having a diverse workforce**. Beneath this there is a list of bullet points highlighting the **ways companies can create an inclusive working environment** other than the physical design of the office space as investigated in the second page.  
* Design - This page addressed the **physical design considerations** that companies should look at to ensure they are creating an accessible and inclusive working environment. In the place of **good vs bad images** there would be large interactive images of good and bad office design **highlighting elements** when a user hovered over them. However due to the time constraints of the project, this could not be achieved. The page then scrolls down to list **12 different physical design considerations** within the office such as lighting, floor space and lifts.  
* Checklist - This page is for companies to utilise as an **interactive tool** to check to see if their office space and working environment is inclusive to the **8 types of disabilities** listed below it. It would be nice to expand this page in the future using dropdowns to provide examples of disabilities in each category as well as the different dfesign considerations that could help make it accessible for those users.  
* Accessories - This page starts with an **accessories header image** which contians mini icons of some of the accessories listed below. Whilst page 2 consisted of physical design ideas, the Accessories page looks at the **accessories and furniture** that could make an office space more inclusive for someone. Each product is within a highlighted box to improvie legibility. In the future, it would be nice if these **linked to online stores** for purchasing. 

## Future Implementations
* Interactive office map - drag and drop to design own office.
* Good versus bad office image that could be hovered over and highlight good and bad elements that are on display in the image.
* Create a shop with online resources so that accessible proucts could be bought on the site on the Accessories page.

## Technologies used

Below is listed the programming languages, technologies, frameworks and resources used for this project.

-   **HTML5**
-   **CSS3**
-   **Vanilla JS**
-   **J Query**
-   **Markdown**
-   **Git** for version control.
-   **[Github](https://github.com/)** to hold my project.
-   **[FontAwesome](https://fontawesome.com/)** for icons.
-   **Google Chrome/FireFox/Edge/Safari**
-   **Developer tools for chrome/FireFox/Edge**
-   **[Amiresponsive](http://ami.responsivedesign.is/)**
-   **[W3Schools](https://www.w3schools.com/)** for help with some issues i ran into
-   **[StackOverFlow](https://stackoverflow.com/)** for help with some issues i ran into
-   **[Slack](https://slack.com/)**
-   **[Grammarly](https://www.grammarly.com/)** to correct grammar and spelling mistakes.

## Testing

-   [HTML validator](https://validator.w3.org/#validate_by_input)
-   [CSS validator](https://jigsaw.w3.org/css-validator/#validate_by_input)
-   [JsHint](https://jshint.com)
-   Testing [checklist](https://geteasyqa.com/qa/test-website/)
-   [pep8](http://pep8online.com/)


## Deployment

### Local Deployment

## Credits / Acknowledgements
* Colour Palette Creation - [Allana Bailey's Colour-Blind-Project](https://github.com/allanabailey/color-blind-project1)
    * Medium Article by Allie Ofisher - Informative website on inclusive design with suggested colour palettes which inspired the use of the two main colours for the scheme of this project.
    * palett - Inclusive colour palette generator.
    * Adobe Color - Used to check the contrast and accessibility of colours in a palette.
    * coolors - Identify the hex and rgb values of the palette created and check its appearance as per type of colour blindness.
* Types of Disability
    * [Disabled World](www.disabled-world.com/disability/types)
    * [Changing Paces](https://changingpaces.com/6-general-types-of-disabilities/)
* Benefits of a Diverse Workplace
    * [Wonolo Article](www.wonolo.com/blog/6-benefits-of-having-a-diverse-workforce/)
* Types of Diversity 
    * [Diverstiy Article, builtin](https://builtin.com/diversity-inclusion/types-of-diversity-in-the-workplace)
* General Research
    * [People Management](https://www.peoplemanagement.co.uk/voices/comment/how-to-use-braille-signs-improve-accessibility-workplace#gref)
    * [Anuprayaas](https://anuprayaas.org/8-ways-to-make-a-workplace-accessible-disability-friendly/)
    * [Oxford Dictionary](https://www.oxfordlearnersdictionaries.com/)



[Back to top ↑]()
