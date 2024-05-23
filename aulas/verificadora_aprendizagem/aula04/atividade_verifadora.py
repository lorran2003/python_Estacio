import os

def validar_nome(nome):
    if not nome:
        raise ValueError("O nome do aluno não pode ser vazio.")
    if any(char.isdigit() for char in nome):
        raise ValueError("O nome do aluno não pode conter números.")
    return nome

def validar_matricula(matricula):
    if not matricula.isdigit():
        raise ValueError("A matrícula deve ser numérica.")
    return matricula

def validar_notas(notas):
    if not notas:
        raise ValueError("As notas não podem ser vazias.")
    for nota in notas:
        if not isinstance(nota, int) or nota < 0 or nota > 100:
            raise ValueError("Cada nota deve ser um número inteiro entre 0 e 100.")
    return notas

def inserir_nota(filename, aluno, matricula, notas):
    try:
        aluno = validar_nome(aluno)
        matricula = validar_matricula(matricula)
        notas = validar_notas(notas)
        
        with open(filename, "a") as file:
            notas_str = ",".join(map(str, notas))
            file.write(f"{aluno},{matricula},{notas_str}\n")
        print(f"Notas de {aluno} inseridas com sucesso.")
    except IOError as e:
        print(f"Erro ao acessar o arquivo: {e}")
    except ValueError as e:
        print(f"Erro de validação: {e}")
    except Exception as e:
        print(f"Um erro inesperado ocorreu: {e}")

def ler_notas(filename):
    try:
        if not os.path.exists(filename):
            raise FileNotFoundError(f"O arquivo '{filename}' não existe.")
        
        with open(filename, "r") as file:
            linhas = file.readlines()
            if not linhas:
                print("O arquivo está vazio.")
                return
            for linha in linhas:
                dados = linha.strip().split(",")
                aluno = dados[0]
                matricula = dados[1]
                notas = list(map(int, dados[2:]))
                print(f"Aluno: {aluno}, Matrícula: {matricula}, Notas: {notas}")
    except FileNotFoundError as e:
        print(f"Erro: {e}")
    except IOError as e:
        print(f"Erro ao ler o arquivo: {e}")
    except ValueError as e:
        print(f"Erro de formatação nos dados: {e}")
    except Exception as e:
        print(f"Um erro inesperado ocorreu: {e}")

filename = "notas_alunos.txt"

inserir_nota(filename, "Alice", "12345", [85, 90, 78])
inserir_nota(filename, "Bob", "67890", [72, 88, 91])
inserir_nota(filename, "Carol", "A1234", [95, 80, 85])  # Erro de validação

print("\nNotas dos alunos:")
ler_notas(filename)
