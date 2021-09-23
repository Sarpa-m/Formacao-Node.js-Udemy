/* criar tabela */
CREATE TABLE Usuarios(
    nome varchar(255),
    email varchar(255),
    idade int
);
/* inserir dados na tabala */
insert into Usuarios(nome, email, idade)
values(
        'mauricio sarpa',
        'test1234@test.com',
        18
    );
insert into Usuarios(nome, email, idade)
values(
        'mauricio sarpa1',
        'test12341@test.com',
        182
    );
insert into Usuarios(nome, email, idade)
values(
        'mauricio sarpa12',
        'test12@test.com',
        1823
    );
insert into Usuarios(nome, email, idade)
values(
        'mauricio sarpa123',
        'test12@test.com',
        18234
    );
/* ler dados da tebale */
select *
from Usuarios;
select nome
from Usuarios;
select email
from Usuarios;
select *
from Usuarios
where idade > 18;
select *
from Usuarios
where name = 'maurico sarpa';

/* apagar dados  da tabela*/
delete FROM Usuarios WHERE nome = 'mauricio sarpa';




-- atualizar dasdos da tabela CREATE

UPDATE Usuarios set nome = "nome de teste" WHERE nome = "mauricio sarpa1";

