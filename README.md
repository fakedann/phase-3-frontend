# Phase-3 Project
## _Restaurant Handler_

## Features

- Showcase how databases/servers and frontend frameworks can be combined to succesfully create a robust application
- Create and store your own data by using tools provided by Ruby/Sinatra
- Enable a smooth communication between local servers/APIS and your application
- Introduce the well-rounded advantages of working with Object-Oriented programming

A lot of developers focus on frontend before understanding the concepts of backend. In order to do this, most aplications tend to either replicate the "real" behavior of a local server/database or they choose to interact with APIS that have already been set up in order to manage data. By reaching Phase-3 in Flatiron's School, you are handed the tools to create and manage the data yourself with local servers, SQL techniques, Ruby frameworks, etc. This project will focus on the creation and management of said data and how it can be merged with a frontend framework such as React.

## Setup

### Requirements

The project relies on npm and node.js capabilities. [ First install these components ](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) if you have not already. This application takes advantage of Toast's library. Follow these instructions in order for the app to function properly: https://www.npmjs.com/package/react-toastify.

Additionally, you need to install some features that will manage the backend side of things. Mac users tend to count with built-ins Ruby interpreters, but here's a guide for Microsoft users and outdated versions of Ruby: https://www.ruby-lang.org/en/downloads/. After updating your Ruby interpreter, you must also download the following gems/packages:

- Active Record: https://rubygems.org/gems/activerecord/versions/5.0.0.1.
- Sinatra: https://sinatrarb.com/intro.html.
- Rake: https://github.com/ruby/rake.

Once everything is succesfully set up, open the terminal where you downloaded this repository and type in the following command:

```sh
 npm start
```
This will enable the frontend part of the application. However, in order for the database/server and thus the whole application to function, you must [download this repo into your computer as well  ](https://github.com/fakedann/phase-3-sinatra-react-project). It contains all of the components necessary to run the backend features. After doing so, go to the terminal where you saved this repo and type the following:
```sh
bundle exec rake server
```

Now you are ready to navigate the application.

## Usage

**Main page**
On this page you can select to either create a new Restaurant *class* or to manage an already existing one. If you select to create a new Restaurant, you will be prompted into a form that will require you to insert basic information about the company. It must be noted that the Restaurant's name and the food type fields will only accept letters and spaces. The phone number field will only accept numbers, while the address field will accept letters, spaces, and numbers. On the other hand, if you chose to manage a Restaurant, you will be redirected to a list of existing Restaurants. Choose the one that you aim to further manage.

**After choosing a Restaurant**
Once you have selected a Restaurant, the application will allow you to use four features. These are the following:
- Add employee: By creating a new employee into the system, our application will essentially generate an instance from the Employee class and a new data entry into our SQL table. Before doing so, you must correctly fill all of the fields. Some of the fields like name, address, and phone behave in the same way that they have been described previously. The DOB field signals the correct format. Finally, the position field must be filled with one of the following options: server, host, cook, or manager. If you fill every field correctly, the application will go back to the Management Menu and will notify you that the action has been completed succesfully.
- Find an Employee: This feature works as a basic search for existing employees. It will work based on partial matches, so use caution and specificity if required. If an employee is found, all of his information will be displayed. The main user has the ability to fire the employee at this point if they desire, which will basically delete all of this data.
- Make Changes to an Employee: This section will allow the user to update an employee's information. In order to use this feature effectively, you must first input a valid employee name. Furthermore, after selecting the category or field that you wish to change, you must also enter a valid input for the field. Once again, if for example, you try to enter numbers into the name field, the application will deny the operation. Toast notifications will be enabled to alert the user of said errors.
- Restaurant's Information: In this section you can find basic information about the Restaurant. An additional feature that is enabled in here is the ability to obtain a list of all of the existing employees. Lastly, you can also choose to fire an employee if you desire.

At the very bottom, there will be a "Back to Main Menu" button that will bring you back to the Main Page.

#### Contributing
Suggestions are welcome in terms of the application's performance or presentation. For direct contact, use the following email address: daniel07escalona@gmail.com. 

#### Authors and Acknowledgment
**Author: Daniel Escalona. Student at [Flatiron School.](https://flatironschool.com/welcome-to-flatiron-school/?utm_source=Google&utm_medium=ppc&utm_campaign=12728169833&utm_content=127574232664&utm_term=flatiron&uqaid=513799628630&CjwKCAiA4KaRBhBdEiwAZi1zzgCEBEdI6285I6gmLUyI5Pw_8YNLXh1P1oRIGf8t0fXozErvGMW5FRoCG1MQAvD_BwE&gclid=CjwKCAiA4KaRBhBdEiwAZi1zzgCEBEdI6285I6gmLUyI5Pw_8YNLXh1P1oRIGf8t0fXozErvGMW5FRoCG1MQAvD_BwE)**
**This project would not have been possible without the following resources:**

https://react-hot-toast.com/
https://flatironschool.com/courses/coding-bootcamp/

## License

MIT