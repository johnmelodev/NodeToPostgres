// ASSOCIACAO 1 PARA 1
// belongsTo: Um registro de uma tabela esta associado a apenas um registro de outra tabela

// ASSOCIACAO 1 PARA N
// HasMany: Um registro de um modelo está associado a varios registros em outro modelo

// ASSOCIACAO N PARA N
// BelongsToMany: Um relacionamento muitos-para-muitos entre 2 modelos.


// Utilize o modelo da nota dentro de uma função ou conjunto

const Nota = sequelize.define('notas', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    tipo: DataTypes.STRING,
    valor: DataTypes.INTEGER,
    descricao: DataTypes.STRING,
});

// Como exemplo vamos utilizar uma tabela de Notas, onde um
// usuário pode ter várias notas, mas uma nota só possui um
// usuário.
Usuario.hasMany(Nota);
Nota.belongsTo(Usuario);


// Consulta para obter um usuário com suas notas
Usuario.findByPk(1, {
    include: Nota, // Especifica a inclusão do modelo de Nota
}).then((usuario) => {
    if (usuario) {
        console.log('Usuário:', usuario.toJSON());
        console.log('Notas do usuário:');
        usuario.Notas.forEach((nota) => {
            console.log('Disciplina:', nota.disciplina, 'Valor:', nota.valor);
        });
    } else {
        console.log('Usuário não encontrado.');
    }
});
