def inserir_nota(filename, aluno, notas):
    with open(filename, "a") as file:
        notas_str = ",".join(map(str, notas))
        file.write(f"{aluno},{notas_str}\n")
    print(f"Notas de {aluno} inseridas com sucesso.")

def ler_notas(filename):
    with open(filename, "r") as file:
        linhas = file.readlines()
        for linha in linhas:
            dados = linha.strip().split(",")
            aluno = dados[0]
            notas = list(map(int, dados[1:]))
            print(f"Aluno: {aluno}, Notas: {notas}")

filename = "notas_alunos.txt"

inserir_nota(filename, "Alice", [85, 90, 78])
inserir_nota(filename, "Bob", [72, 88, 91])

print("\nNotas dos alunos:")
ler_notas(filename)
