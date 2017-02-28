body,
div,
ul,
li,
p,
h1,
h2,
h3,
h4,
h5,
h6 {
    padding: 0;
    margin: 0;
    font-family: "Roboto", sans-serif;
}

body {
    margin-top: 40px;
    font-size: 16px;
}

.clear-fix {
    overflow: auto;
}

.education-entry,
.work-entry,
.project-entry {
    padding: 0 5%;
}

h1 {
    font-size: 40px;
    color: #f5a623;
    line-height: 48px;
    display: inline;
}

h2 {
    font-weight: bold;
    font-size: 24px;
    color: #191970;
    line-height: 29px;
    padding: 10px;
}

h3 {
    font-style: italic;
    font-size: 20px;
    color: #000;
    line-height: 22px;
}

h4 {
    font-weight: bold;
    font-size: 14px;
    color: #4a4a4a;
    line-height: 17px;
}

h2,
h3,
h4,
h5 {
    padding: 10px 5%;
}

h3 {
    padding-left: 0;
}

.date-text {
    font-style: italic;
    font-size: 14px;
    color: #999;
    line-height: 16px;
    float: left;
}

.location-text {
    font-style: italic;
    font-size: 14px;
    color: #999;
    line-height: 16px;
    float: right;
}

p {
    font-size: 14px;
    color: #333;
    line-height: 21px;
}

a {
    color: #1199c3;
    text-decoration: none;
    margin-top: 10px;
    display: block;
}

.welcome-message {
    font-style: italic;
    font-size: 18px;
    color: #f3f3f3;
    line-height: 28px;
}

#skills-h3 {
    color: #f5ae23;
    display: none;
}

.orange {
    background-color: #f5ae23;
}

.orange-text {
    color: #f5ae23;
    font-weight: bold;
}

.white-text {
    font-weight: bold;
    color: white;
}

.ghost-white {
    background-color: #F8F8FF;
    padding-bottom: 10px;
    clear: both;
}

.midnight-blue {
    background-color: #191970;
}

/* TODO: Replace with image later */
#header {
    background: url("../images/desk.jpg") no-repeat;
    background-size: cover;
}

.flex-box {
    display: -webkit-flex;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 10px;
}

.flex-column {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    padding: 10px;
}

.center-content {
    padding: 2.5% 5%;
}

ul {
    list-style-type: none;
}

.biopic {
    float: left;
    padding: 10px;
    width: 200px;
    display: none;
}

img {
    padding: 10px;
}

span {
    padding: 5px;
}

#lets-connect {
    text-align: center;
}

/*new styles*/
.style-role {
    font-size: 1.7em;
    font-weight: bold;
    margin-left: 10px;
    color: #202020;
}

.navbar-toggle .icon-bar {
    padding: 0;
}

.navbar-default {
    background-color: #191970;
}

.navbar-default .navbar-nav>li>a {
    color: white;
}

.navbar-default .navbar-nav>li>a:hover {
    color: #f5ae23;
}

#inter-button {
    padding-top: 21px;
}

/* Media queries to handle various device widths */

@media only screen and (max-width: 1024px) {
    #lets-connect {
        margin-top: 5%;
    };
}

@media only screen and (max-width:900px) {
    .biopic {
        width: 175px;
    };
}

@media only screen and (max-width: 750px) {
    #lets-connect {
        margin-top: 10%;
    }

    .biopic {
        width: 150px;
    }

    .welcome-message {
        display: none;
    };
}

#map {
    display: block;
    height: 100%;
    margin: 0 5%;
}

#mapDiv {
    height: 400px;
    width: 100%;
    padding-bottom: 5%;
}

@media only screen and (min-width: 750px) {
    #skills-h3,
  .biopic {
        display: block;
    };
}
