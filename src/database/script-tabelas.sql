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

create table feedback (
idFeedback int auto_increment,
estrela int,
fkUsuario int unique,
foreign key (fkUsuario) references usuario(idUsuario),
primary key (idFeedback, fkUsuario));

select * from quiz;
select * from usuario;
select * from feedback;

 select respostas_certas, nickname from quiz join usuario on fkUsuario = idUsuario where fkUsuario = 1;
 select respostas_certas, nickname from quiz join usuario on fkUsuario = idUsuario where fkUsuario <> 1 order by momento desc limit 7;

select sum(case when estrela = 1 then 1 else 0 end) as uma_estrelas, 
	sum(case when estrela = 2 then 1 else 0 end) as duas_estrelas,
	sum(case when estrela = 3 then 1 else 0 end) as tres_estrelas,
	sum(case when estrela = 4 then 1 else 0 end) as quatro_estrelas,
	sum(case when estrela = 5 then 1 else 0 end) as cinco_estrelas 
from feedback;

select count(*) as pontos_rad from quiz where respostas_certas = 10;
select count(*) as tempo_rapido from quiz where duracao <= 60;

select count(estrela) as feedbackFeito from feedback join usuario on fkUsuario = idUsuario where fkUsuario = 5;