create database valorant;
use valorant;

create table usuario (
idUsuario int primary key auto_increment,
nickname varchar(45),
email varchar(45),
senha varchar(45));

create table quiz (
idQuiz int default 1,
respostas_certas int,
duracao int,
momento datetime default current_timestamp,
fkUsuario int,
foreign key (fkUsuario) references usuario(idUsuario),
primary key (idQuiz, fkUsuario));

create table feedback (
idFeedback int auto_increment,
estrela int,
fkUsuario int unique,
foreign key (fkUsuario) references usuario(idUsuario),
primary key (idFeedback, fkUsuario));