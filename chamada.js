const nome = ['Adriano Noviski Gomes Dos Santos', 'Emilly Crisanto Da Cruz Freire', 'Emilly Priscila Macedo Vieira', 'Felipe De Souza Motta', 'Guilherme De Vito Gebing',
'Henrique Luiz Camilo Pradi', 'Izabella Malucelli', 'Kauã Dhyego Prado França', 'Kauan José Viola Marcelino', 'Lauana Da Rosa Quadros', 'Livia Bicalho Dos Santos', 
'Luan Carlos Moreira', 'Maria Helena Dos Santos Mucci Daniel', 'Nicole Gabriele Miranda Lobato', 'Julya', 'Renato Souza Alves Junior', 'Kauã Moura De Souza',
'Lucas Da Silva Salvador'];

const numero = [1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 13, 14, 16, 17, 32, 19, 21, 22];

nome.splice(15,1, 'Raquel Ester Cruz Pacheco');
numero.splice(15,1, 18);

for (let i = 0; i < nome.length; i++) {
        console.log(nome[i] + " . " + numero[i]);
}