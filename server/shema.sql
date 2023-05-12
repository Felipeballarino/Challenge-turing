CREATE DATABASE turing_proyect;

USE turing_proyect;

CREATE TABLE users(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255)
);

CREATE TABLE todos(
    id INT AUTO_INCREMENT PRIMARY KEY,
    fecha VARCHAR(255),
    descripcion VARCHAR(255),
    completed BOOLEAN DEFAULT false,
    user_id INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);


INSERT INTO users(name,email,password) VALUES ('felipe', "user1@example.com", '123456');
INSERT INTO users(name,email,password) VALUES ('user2', "user2@example.com", '123456');


INSERT INTO todos (fecha, descripcion, completed, user_id) 
VALUES 
('2008-11-11','Salir a correr',false,1),
('2008-11-11','Salir con amigos',false,1),
('2008-11-11','Entregar trabajo',false,1),
('2008-11-11','Ir al gym',false,1);



