import sqlite3

def buscar_aluno_por_matricula(matricula):
    try:
        conn = sqlite3.connect("notas_alunos.db")
        cursor = conn.cursor()
        cursor.execute("SELECT * FROM alunos WHERE matricula = ?", (matricula,))
        aluno = cursor.fetchone()
        if aluno:
            print("Dados do aluno:")
            print(f"Matrícula: {aluno[0]}")
            print(f"Nome: {aluno[1]}")
            print(f"Curso: {aluno[2]}")
        else:
            print("Aluno não encontrado.")
    except sqlite3.Error as error:
        print("Erro ao buscar aluno:", error)
    finally:
        if conn:
            conn.close()

def listar_alunos_por_curso(curso):
    try:
        conn = sqlite3.connect("notas_alunos.db")
        cursor = conn.cursor()
        cursor.execute("SELECT * FROM alunos WHERE curso = ?", (curso,))
        alunos = cursor.fetchall()
        if alunos:
            print(f"Alunos do curso '{curso}':")
            for aluno in alunos:
                print(f"Matrícula: {aluno[0]}, Nome: {aluno[1]}")
        else:
            print(f"Não há alunos cadastrados no curso '{curso}'.")
    except sqlite3.Error as error:
        print("Erro ao listar alunos por curso:", error)
    finally:
        if conn:
            conn.close()

def mostrar_notas_alunos_ordenados():
    try:
        conn = sqlite3.connect("notas_alunos.db")
        cursor = conn.cursor()
        cursor.execute("SELECT * FROM alunos ORDER BY nome")
        alunos = cursor.fetchall()
        if alunos:
            print("Notas dos alunos (ordenados pelo nome):")
            for aluno in alunos:
                print(f"Nome: {aluno[1]}, Notas: {aluno[3]}")
        else:
            print("Não há alunos cadastrados.")
    except sqlite3.Error as error:
        print("Erro ao mostrar notas dos alunos:", error)
    finally:
        if conn:
            conn.close()

buscar_aluno_por_matricula(123)
print()
listar_alunos_por_curso("Engenharia")
print()
mostrar_notas_alunos_ordenados()
