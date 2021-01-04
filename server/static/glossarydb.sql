drop table if exists terms;
drop table if exists contributors;
drop table if exists admins;

CREATE TABLE terms (
  id       SERIAL PRIMARY KEY,
  term     VARCHAR(30) NOT NULL,
  definitions TEXT NOT NULL,
  links  TEXT[],
  admin_id INT,
  programming_language VARCHAR(20),
  contributor_id INT,
  creation_date DATE,
  last_edit_date DATE
);

CREATE TABLE contributors (
  id       SERIAL PRIMARY KEY,
  contributor_name     VARCHAR(120) NOT NULL,
  region    VARCHAR(20) NOT NULL,
  email VARCHAR(30)
);

CREATE TABLE admins (
  id            SERIAL PRIMARY KEY,
  admin_name   VARCHAR(100) NOT NULL,
  email      VARCHAR(100),
  admin_password  VARCHAR(30)
);

INSERT INTO admins (admin_name, email, admin_password) VALUES ('Tina', 'Tina@email', 'Funny');
INSERT INTO admins (admin_name, email, admin_password) VALUES ('Frank', 'F@google', 'Star');
INSERT INTO admins (admin_name, email, admin_password) VALUES ('Claire', 'Claire@yahoo.com', 'Time');

INSERT INTO terms (term, definitions, links, admin_id, programming_language, contributor_id) VALUES ('Class','HTML elements can have one or more classes, separated by spaces. You can style elements using CSS by selecting them with their classes.', '{"https://www.youtube.com/watch?v=wXUhTZpF_HQ", "https://www.youtube.com/watch?v=UB1O30fR-EE", "https://www.w3schools.com/html/html_classes.asp", "https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/class"}', 1,'HTML', 2);
INSERT INTO terms (term, definitions, links, admin_id, programming_language, contributor_id) VALUES ('Body','The body is the container for all of a page’s content. Comes after the <head> tag, within the overall <html> tag.', '{"https://www.youtube.com/watch?v=RgwEVLoExGQ", "https://www.youtube.com/watch?v=mNRzWMH5xK0", "https://www.w3schools.com/tags/tag_body.asp", "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/body"}', 2,'HTML', 1);
INSERT INTO terms (term, definitions, links, admin_id, programming_language, contributor_id) VALUES ('Id','An HTML element can have an id attribute to identify it. id elements should always be unique to that single element, and each element should never have more than one id.', '{"https://www.youtube.com/watch?v=wXUhTZpF_HQ", "https://www.youtube.com/watch?v=-voQMXA_H6s", "https://www.w3schools.com/html/html_id.asp", "https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id"}',3,'HTML', 1);
INSERT INTO terms (term, definitions, links, admin_id, programming_language, contributor_id) VALUES ('Header','Heading elements like <h1>, <h2>, <h3>, … allow you to use six levels of document headings, ranging from largest to smallest, breaking up the document into logical sections. For example, the word ‘Headings’ above is wrapped in a <h2> tag.', '{"https://www.youtube.com/watch?v=H519o8BvpQA", "https://www.youtube.com/watch?v=Pq9DkCt4fqI", "https://www.w3schools.com/html/html_headings.asp", "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements"}',2,'HTML', 3);
INSERT INTO terms (term, definitions, links, admin_id, programming_language, contributor_id) VALUES ('href','Links tell the browser where to go using an href attribute, which stores a URL.', '{"https://www.youtube.com/watch?v=tK4nF_TPQyo", "https://www.youtube.com/watch?v=GxwHXxumdQk", "https://www.w3schools.com/tags/att_a_href.asp", "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a"}',1,'HTML',2);
INSERT INTO terms (term, definitions, links, admin_id, programming_language, contributor_id) VALUES ('align-items','The CSS align-items property sets the align-self value on all direct children as a group. In Flexbox, it controls the alignment of items on the Cross Axis. In Grid Layout, it controls the alignment of items on the Block Axis within their grid area.', '{"https://www.youtube.com/watch?v=BUNsmd17YB4", "https://www.youtube.com/watch?v=XIJZjhqs7m0", "https://www.w3schools.com/cssref/css3_pr_align-items.asp", "https://developer.mozilla.org/en-US/docs/Web/CSS/align-items"}',2,'CSS',1);
INSERT INTO terms (term, definitions, links, admin_id, programming_language, contributor_id) VALUES ('flex','The flex CSS shorthand property sets how a flex item will grow or shrink to fit the space available in its flex container.', '{"https://www.youtube.com/watch?v=fYq5PXgSsbE", "https://www.youtube.com/watch?v=fqNPSSoMO9Y", "https://www.w3schools.com/cssref/css3_pr_flex.asp", "https://developer.mozilla.org/en-US/docs/Web/CSS/flex"}',2,'CSS',2);
INSERT INTO terms (term, definitions, links, admin_id, programming_language, contributor_id) VALUES ('Grid','To specify the number of columns of the grid and the widths of each column, the CSS property grid-template-columns is used on the grid container. The number of width values determines the number of columns and each width value can be either in pixels(px) or percentages(%).', '{"https://www.youtube.com/watch?v=9zBsdzdE4sM", "https://www.youtube.com/watch?v=EFafSYg-PkI", "https://www.w3schools.com/cssref/pr_grid.asp", "https://developer.mozilla.org/en-US/docs/Glossary/Grid"}',3,'CSS',3);
INSERT INTO terms (term, definitions, links, admin_id, programming_language, contributor_id) VALUES ('Margin','The margin property sets the margins for an element, and is a shorthand property for the following properties:margin-top,margin-right,margin-bottom,margin-left.', '{"https://www.youtube.com/watch?v=EhbZGV2dqZ4", "https://www.youtube.com/watch?v=Azfj1efPAH0", "https://www.w3schools.com/cssref/pr_margin.asp", "https://developer.mozilla.org/en-US/docs/Web/CSS/margin"}',1,'CSS',2);
INSERT INTO terms (term, definitions, links, admin_id, programming_language, contributor_id) VALUES ('text-align','The text-align property specifies the horizontal alignment of text in an element.', '{"https://www.youtube.com/watch?v=sLAunIX5RXw", "https://www.youtube.com/watch?v=4Y1XlQ7bsCI", "https://www.w3schools.com/cssref/pr_text_text-align.asp", "https://developer.mozilla.org/en-US/docs/Web/CSS/text-align"}',2,'CSS',1);
INSERT INTO terms (term, definitions, links, admin_id, programming_language, contributor_id) VALUES ('Variable','JavaScript variables are containers for storing data values.', '{"https://www.youtube.com/watch?v=edlFjlzxkSI", "https://www.youtube.com/watch?v=u0Mq3FzpsmI", "https://www.w3schools.com/js/js_variables.asp", "https://developer.mozilla.org/en-US/docs/Glossary/Variable"}',1,'Javascript',2);
INSERT INTO terms (term, definitions, links, admin_id, programming_language, contributor_id) VALUES ('Loop','Loops can execute a block of code a number of times.', '{"https://www.youtube.com/watch?v=s9wW2PpJsmQ", "https://www.youtube.com/watch?v=24Wpg6njlYI", "https://www.w3schools.com/js/js_loop_for.asp", "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code"}',3,'Javascript',1);
INSERT INTO terms (term, definitions, links, admin_id, programming_language, contributor_id) VALUES ('Boolean','A JavaScript Boolean represents one of two values: true or false.', '{"https://www.youtube.com/watch?v=yVJR6QyF2uk", "https://www.youtube.com/watch?v=Rk-_syQluvc", "https://www.w3schools.com/js/js_booleans.asp", "https://developer.mozilla.org/en-US/docs/Glossary/Boolean"}', 1,'Javascript', 2);
INSERT INTO terms (term, definitions, links, admin_id, programming_language, contributor_id) VALUES ('Array','An array is a special variable, which can hold more than one value at a time.','{"https://www.youtube.com/watch?v=R8rmfD9Y5-c", "https://www.youtube.com/watch?v=orAS-MBh5f4", "https://www.w3schools.com/js/js_arrays.asp", "https://developer.mozilla.org/en-US/docs/Glossary/array"}',1, 'Javascript',1);
INSERT INTO terms (term, definitions, links, admin_id, programming_language, contributor_id) VALUES ('Object','The Object class represents one of JavaScripts data types. It is used to store various keyed collections and more complex entities.','{"https://www.youtube.com/watch?v=PFmuCDHHpwk", "https://www.youtube.com/watch?v=X0ipw1k7ygU", "https://www.w3schools.com/js/js_objects.asp", "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object"}',2, 'Javascript',3);


INSERT INTO contributors (contributor_name, region, email) VALUES ('Paul', 'West Midlands', 'Paul@com');
INSERT INTO contributors (contributor_name, region, email) VALUES ('Sunayna', 'West Midlans', 'Sunayna@com');
INSERT INTO contributors (contributor_name, region, email) VALUES ('Kevin', 'London', 'Kevin@com');



