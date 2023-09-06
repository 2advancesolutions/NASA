## Setup

This is a public repository and you are free to submit merge requests directly to this repository.  If you would perfer your participation not be public, feel free to fork this repository into your own private space and complete the updates there. (Just make sure you give us access when you are done).

## Source Control

##### Baseline
- Connect this Gitlab repository to your local git instance using SSH key authentication
  - More info: [https://docs.gitlab.com/ee/user/ssh.html](https://docs.gitlab.com/ee/user/ssh.html)
- Create your own working branch off of the master branch. Please make all of your changes within the new branch
  - Use Angular commit formatting for all of your commit messages
- Once you're ready, create an MR for your branch to merge into master

> Bonus points for frequent commits

##### Intermediate
- Use feature branches off of your working branch to logically organize your work

##### Advanced
- Set up `semantic-release` and set up a new or existing pipeline that creates a `release` job
   - Include commits to increment `Breaking`, `Feature` and `Fix` versions, as well as a commit that increments nothing
   - More info: [https://github.com/semantic-release/semantic-release](https://github.com/semantic-release/semantic-release)


## Application

For this section, you are free to use any external packages that you wish. Material design your fave? More of a Bootstrap kind of person? As long as the final result stays within the following constraints, use what you're comfortable with:

- All external packages must be strongly typed, whether natively or by using a DefinitelyTyped package (or by creating your own, you brave soul)
- Use SASS for all styling
  - The project is initially set up to use SCSS syntax, but feel free to use indented SASS instead
- Some base assets have been included in the assets directory. Please incorporate them into your design as you see fit
  - Including external resources in addition to what has been provided is fine
- Ensure all work is at least WCAG 2.1 AA compliant

##### Baseline
- Create a main page that includes a table to display a result set
- Request data from our Open API and use the response to populate your table
  - Our Swagger documentation can be found at [https://ntrs.nasa.gov/api/openapi/#/](https://ntrs.nasa.gov/api/openapi/#/)
  - Please use the `Citations` endpoint and only pull `public` records
- Provide the user with a means to explore "More Info" about an individual record, i.e. "Item Details" that are accessible from an "Item List"
- This will be a public facing site, so visual design is of utmost importance to the client 

##### Intermediate
- Assume that SEO is a primary concern of your stakeholders, and plan the project accordingly

##### Advanced
- Utilize Angular's built-in features to implement transclusion somewhere within the app
- Ensure all work is at least WCAG 2.1 AAA compliant
