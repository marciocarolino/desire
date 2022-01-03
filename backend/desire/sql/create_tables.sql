-- CREATE TABLE USER
CREATE TABLE IF NOT EXISTS users(
     
    id INT NOT NULL, 
    name varchar(250) NOT NULL,
    city varchar(20) NOT NULL,
    state varchar(20) NOT NULL,
    phone varchar(15) NOT NULL,
    email varchar(50) NOT NULL,
    PRIMARY KEY(id)
);