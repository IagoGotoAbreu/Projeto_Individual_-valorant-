create database valorant;
drop database valorant;
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

select * from quiz;
select * from usuario;

insert into usuario values
(default, 'goto', 'goto@gmail.com', 'mgtu6965');

insert into quiz values
(1, '7', '32', default, 1);

select respostas_certas from quiz where fkUsuario = 1;
select respostas_certas from quiz where fkUsuario <> 1 order by momento desc limit 7;
select count(*) as pontos_rad from quiz where respostas_certas = 10;
select count(*) as tempo_rapido from quiz where duracao <= 60;


