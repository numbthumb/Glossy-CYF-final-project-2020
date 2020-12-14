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

INSERT INTO terms (term, definitions, links, admin_id, programming_language, contributor_id) VALUES ('Variable','Variables are things', '{"www.wikipedia.com"}', 1,'Javascript', 2);
INSERT INTO terms (term, definitions, links, admin_id, programming_language, contributor_id) VALUES ('Element','Elements are bits', '{"www.wikipedia.com"}',1,'HTML', 2);
INSERT INTO terms (term, definitions, links, admin_id, programming_language, contributor_id) VALUES ('Function','Functions do stuff', '{"www.wikipedia.com"}',1,'Javascript',2);
INSERT INTO terms (term, definitions, links, admin_id, programming_language, contributor_id) VALUES ('Tag','Tags are nice', '{"www.wikipedia.com"}', 1,'HTML', 2);
INSERT INTO terms (term, definitions, links, admin_id, programming_language, contributor_id) VALUES ('Array','Arrays are too hard to describe right now','{"www.wikipedia.com"}',1, 'Javascript',2);


INSERT INTO contributors (contributor_name, region, email) VALUES ('Paul', 'West Midlands', 'Paul@com');
INSERT INTO contributors (contributor_name, region, email) VALUES ('Sunayna', 'West Midlans', 'Sunayna@com');
INSERT INTO contributors (contributor_name, region, email) VALUES ('Kevin', 'London', 'Kevin@com');



