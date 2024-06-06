import psycopg2
carros = [
		{
			"ano": 1999,
			"id": "1",
			"marca": "Fiat",
			"modelo": "Marea"
		},
		{
			"ano": 1999,
			"id": "2",
			"marca": "Ford",
			"modelo": "Focus"
		},
		{
			"ano": 1999,
			"id": "3",
			"marca": "Chevy",
			"modelo": "Astra"
		},
		{
			"ano": "2012",
			"id": 4,
			"marca": "Hunday",
			"modelo": "Tucson"
		}
	]

dbParams = {
    'dbname': 'vipColection',  # Corrigido de 'dbName' para 'dbname'
    'user': 'postgres',
    'password': '2003',  # Senha como string
    'host': 'localhost',
    'port': 5432
}

try:
    # Conectando ao banco de dados
    conn = psycopg2.connect(**dbParams)
    cursor = conn.cursor()
    print("Conexão feita com sucesso")

    # Definindo a query para criar a tabela cliente
    create_table_query = '''
    CREATE TABLE cliente (
        id SERIAL PRIMARY KEY,
        nome VARCHAR(100) NOT NULL,
        email VARCHAR(100) UNIQUE NOT NULL,
        senha VARCHAR(100) NOT NULL
    );
    '''

    # Executando a query para criar a tabela
    cursor.execute(create_table_query)
    conn.commit()
    print("Tabela 'cliente' criada com sucesso")

except Exception as e:
    print(f"Ocorreu um erro: {e}")

finally:
    # Fechando a conexão
    if 'cursor' in locals():
        cursor.close()
    if 'conn' in locals():
        conn.close()
    print("Encerrando conexão")
