from flask import Flask, make_response, jsonify, request
from bd import dbParams
from bd import carros
import psycopg2

app = Flask(__name__)
app.config['JSON_SORT_KEY'] = False

mydb = psycopg2.connect(**dbParams)

@app.route('/carros', methods=['GET'])
def getCarros():
    myCurson = mydb.cursor()
    myCurson.execute('SELECT * FROM cliente')
    meusDados = myCurson.fetchall()

    dados = list()
    for dado in meusDados:
        dados.append(
            {
                'id':dado[0],
                'nome':dado[1],
                'email':dado[2],
                'senha':dado[3]
            }
        )

    return make_response( jsonify(dados) )

@app.route('/register', methods=['POST'])
def createCarro():
    login = request.json

    myCurson = mydb.cursor()

    sql = f"INSERT INTO cliente (nome, email, senha) VALUES ('{login['nome']}','{login['email']}','{login['senha']}')"

    myCurson.execute(sql)
    mydb.commit()

    return make_response(jsonify(
        menssange='Carro registrado com sucesso',
        carro=login
    ))

app.run()
