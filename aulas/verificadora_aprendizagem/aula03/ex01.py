# Define the filename
filename = "crescente.txt"

numbers = list(range(1, 101))

numbers_string = ";".join(map(str, numbers))

with open(filename, "w") as file:
    file.write(numbers_string)

print(f"The file '{filename}' has been created with numbers from 1 to 100 separated by ';'.")
