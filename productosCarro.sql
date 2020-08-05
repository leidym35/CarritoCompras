CREATE SCHEMA ecommerce;
USE ecommerce;

CREATE TABLE productos(
id int primary key AUTO_INCREMENT,
imagen varchar(100),
nombre varchar (30),
precio int,
categoria varchar(30),
carrito boolean,
cantidadCar int
);

insert into productos (imagen, nombre, precio,categoria,carrito,cantidadCar) values ('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTBT4gf4QuqsINYa_OSdBQ1jJVMo4A0l1oOkQ&usqp=CAU','camisa',50000,'vestuario',true,1);
insert into productos (imagen, nombre, precio,categoria,carrito,cantidadCar) values ('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTJGzL3w8U8p6naIl2znuTAhNaDE5-yxwR_cQ&usqp=CAU','vestido rosa',60000,'vestuario',false,0);
insert into productos (imagen, nombre, precio,categoria,carrito,cantidadCar) values ('https://images-na.ssl-images-amazon.com/images/I/61r5DXslqWL._AC_SY395_.jpg','tenis hombre',10000,'vestuario',false,0);
insert into productos (imagen, nombre, precio,categoria,carrito,cantidadCar) values ('https://cnet2.cbsistatic.com/img/aqHGyQKI-ngVJaahqLUW-Ys8aPA=/940x0/2020/06/11/e553ea17-26bf-4ab4-a393-d4eea1b9a12f/image-7.png','play station5',3000000,'Game',false,0);
insert into productos (imagen, nombre, precio,categoria,carrito,cantidadCar) values ('https://hipertextual.com/files/2010/12/ps31.jpg','play station4',1000000,'Game',true,1);

