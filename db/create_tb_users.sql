create table tb_users(
 id serial PRIMARY KEY NOT NULL, 
 name varchar(255) not null,
 sex char(1),
 email varchar(150),
 cell varchar(50),
 city varchar(80) not null,
 state varchar(50) not null,
 password varchar(255) not null,
 is_active boolean,
 create_at TIMESTAMP,
 update_at TIMESTAMP  
);

//PostGreSQL