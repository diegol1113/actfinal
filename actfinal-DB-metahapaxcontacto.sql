use metahapaxcontacto;

create table tipoDeContacto(
id_TipoDeContacto tinyint unsigned not null auto_increment,
tipoDeContacto varchar(200) not null,
nombreEncargado varchar(50) not null,
apellidoEncargado varchar(100) not null,
mailDeContacto varchar(210) not null,
primary key(id_TipoDeContacto)
);

create table contacto(
id_Contacto int unsigned not null auto_increment,
fechaDeContacto date,
nombre varchar(50) not null,
apellido varchar(100) not null,
tipoDeContacto tinyint unsigned not null,
institucion varchar(200),
telefono int unsigned not null,
mailDeContacto varchar(210) not null,
primary key(id_Contacto),
foreign key(tipoDeContacto) references tipoDeContacto(id_TipoDeContacto)
);

-- Cargamos Datos en la Tabla tipoDeContacto --
insert into tipoDeContacto values (null, "Contratación para evento", "Clara", "Piergentili", "clarapiergentili@hotmail.com");
insert into tipoDeContacto values (null, "Propuesta de colaboración", "Diego", "Cornago", "diegojosecornago@gmail.com");
insert into tipoDeContacto values (null, "Otros", "Federico", "Cornago", "federicocornago@gmail.com");


