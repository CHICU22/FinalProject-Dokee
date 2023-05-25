        // Configurações da conexão com o banco de dados
        const config = {
            host: 'localhost',
            user: 'root',
            password: 'sua-senha',
            database: 'nome-do-banco-de-dados'
        };

        // Conexão com o banco de dados
        const connection = new MySQL.createConnection(config);

        // Execução de consultas SQL
        connection.query('SELECT * FROM tabela', (error, results, fields) => {
            if (error) {
                console.error('Erro ao executar a consulta:', error);
            } else {
                console.log('Resultados:', results);
            }
        });

        // Fechamento da conexão com o banco de dados
        connection.end();