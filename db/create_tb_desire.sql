create table tb_desire(
 id serial PRIMARY KEY NOT NULL,
 users_id int,
 desire varchar(255),
 description varchar(255),
 is_active boolean,
 create_at TIMESTAMP,
 update_at TIMESTAMP,
 constraint fk_tb_users
 foreign KEY (users_id)
 references tb_users(id)

);