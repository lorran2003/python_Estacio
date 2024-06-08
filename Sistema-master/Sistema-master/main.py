### Import das operações
from tkinter import *
from tkinter import ttk
import sqlite3 
from PIL import Image, ImageTk
import yagmail
import pandas as pd
import datetime

### Classe das Funções
class Funcs():
    ### função limpa campo aba locatarios
    def clean_fields_loc(self):
        self.input_nome.delete(0, END) 

    ### função limpa campos aba cadastro
    def clean_fields(self):
        self.input_nameprop.delete(0, END)
        self.input_name.delete(0, END)
        self.input_address.delete(0, END)
        self.input_cpf.delete(0, END)
        self.input_start.delete(0, END)
        self.input_renew.delete(0, END)
        self.input_end.delete(0, END)

    ### função para o botao levar para a aba cadastro
    def switch_to_cadastro_tab(self):
        self.page.select(self.page3)
        self.show_frame_2 = False  # Oculta o frame ao mudar para a aba "cadastro"
        self.frame_2.place_forget()  # Oculta o frame_2
    
    ### função para botao levar para aba de locatarios
    def switch_to_locatarios_tab(self):
        self.page.select(self.page2)
        self.show_frame_2 = True  # Mostra o frame ao voltar para a aba "Locatarios"
        self.frame_2.place(relx=0.02, rely=0.5, relwidth=0.97, relheight=0.46)
    
    ### função para levar para aba inicial 
    def switch_to_initial_tab(self):
        self.page.select(self.page1)
        self.show_frame_2 = False  
        self.frame_2.place.forget()   
    
    ### função para conecetar ao banco de dados
    def db_connect(self):
        self.conn = sqlite3.connect("bancoslx.db")
        self.cursor = self.conn.cursor(); print("conectado ao banco")

    ### função para desconectar ao banco de dados 
    def db_disconect(self):
        self.conn.close(); print("desconectado ao banco")

    ### função para criar o banco de dados
    def db_create(self):
        self.db_connect()
        self.cursor.execute("""CREATE TABLE IF NOT EXISTS clientes (
                            cod INTEGER PRIMARY KEY AUTOINCREMENT, 
                            nome_proprietario CHAR(40) NOT NULL,
                            nome_cliente CHAR(40) NOT NULL,
                            endereço CHAR(40) NOT NULL,
                            cpf VARCHAR(40) NOT NULL,
                            inicio_contrato VARCHAR(50) NOT NULL, 
                            aniversario_contrato VARCHAR(50) NOT NULL,
                            fim_contrato VARCHAR(50) NOT NULL

                                );
                            """)
        self.conn.commit()
        self.db_disconect() 

    ### função adiocionar novo cliente no banco de dados
    def add_new_client(self):
        self.nameprop = self.input_nameprop.get()
        self.name = self.input_name.get()
        self.address = self.input_address.get()
        self.cpf = ''.join(filter(str.isdigit, cpf))
        self.start = self.input_start.get()
        self.renew = self.input_renew.get()
        self.end = self.input_end.get()
        try:
            self.start = datetime.datetime.strptime(self.start, '%d/%m/%Y').date()
            self.renew = datetime.datetime.strptime(self.renew, '%d/%m/%Y').date()
            self.end = datetime.datetime.strptime(self.end, '%d/%m/%Y').date()
        except ValueError:
            print("Formato de data inválido. Utilize o formato dd/mm/aaaa.")
        self.db_connect()
        try:
            self.cursor.execute("""INSERT INTO clientes (nome_proprietario, nome_cliente, endereço,  cpf, inicio_contrato,
                                     aniversario_contrato, fim_contrato)
                                    VALUES (?,?, ?, ?, ?, ?, ?)""", 
                                (self.nameprop, self.name, self.address, self.cpf, self.start, self.renew, self.end))
            self.conn.commit()
            print("Novo cliente adicionado com sucesso.")
            self.list_select()
            self.clean_fields()
        except sqlite3.Error as e:
            print("Erro ao adicionar novo cliente:", e)
        finally:
            self.db_disconect()

    ### função para selecionar na lista e aparecer no frame 2 
    def list_select(self):
        self.list_bd.delete(*self.list_bd.get_children())
        self.db_connect()
        
        lista = self.cursor.execute(""" SELECT cod,nome_proprietario, nome_cliente, endereço, cpf, inicio_contrato, aniversario_contrato, fim_contrato FROM clientes
        ORDER BY nome_cliente ASC; """)

        for i in lista:
            self.list_bd.insert("", END, value= i)  

        self.db_disconect() 

    ### função para quando der duplo clique no nome do frame 2 leva para aba cadastro e preenche os inputs
    def fill_fields_from_list(self, values):
        self.input_nameprop.delete(0, END)
        self.input_name.delete(0, END)
        self.input_address.delete(0, END)
        self.input_cpf.delete(0, END)
        self.input_start.delete(0, END)
        self.input_renew.delete(0, END)
        self.input_end.delete(0, END)
        
        self.input_nameprop.insert(END, values[1])
        self.input_name.insert(END, values[2])
        self.input_address.insert(END, values[3])
        self.input_cpf.insert(END, values[4])
        self.input_start.insert(END, values[5])
        self.input_renew.insert(END, values[6])
        self.input_end.insert(END, values[7])

    ### função para o duplo clique
    def OnDoubleClick(self, event):
        selected_item = self.list_bd.selection()[0]
        values = self.list_bd.item(selected_item, 'values')
        self.fill_fields_from_list(values)
        self.switch_to_cadastro_tab()

    ### função para deletar o cliente do banco de dados 
    def client_delete(self):     
        selected_item = self.list_bd.selection()[0]
        values = self.list_bd.item(selected_item, 'values')
        self.db_connect()
        try:
            self.cursor.execute("DELETE FROM clientes WHERE nome_proprietario = ?", (values[1],))
            self.conn.commit()
            print("Cliente excluído com sucesso.")
            self.list_select()
            self.clean_fields()
        except sqlite3.Error as e:
            print("Erro ao excluir cliente:", e)
        finally:
            self.db_disconect()

    ### função para dar editar o cliente no banco de dados 
    def update_client(self):

        selected_item = self.list_bd.selection()
        if not selected_item:
            print("Nenhum cliente selecionado para atualização.")
            return

        values = self.list_bd.item(selected_item[0], 'values')
        if not values:
            print("Valores do cliente selecionado não encontrados.")
            return

        self.db_connect()
        new_name = self.input_name.get()
        new_address = self.input_address.get()
        new_cpf = self.input_cpf.get()
        new_start = self.input_start.get()
        new_renew = self.input_renew.get()
        new_end = self.input_end.get()

        try:
            self.cursor.execute(
                """UPDATE clientes SET nome_cliente = ?, endereço = ?, cpf = ?, inicio_contrato = ?, 
                aniversario_contrato = ?, fim_contrato = ? WHERE cod = ?""",
                (new_name, new_address, new_cpf, new_start, new_renew, new_end, values[0]))
            self.conn.commit()
            print("Cliente atualizado com sucesso")
            self.list_select()
            self.clean_fields()
        except sqlite3.Error as e:
            print("Erro ao atualizar cliente", e)
        finally:
            self.db_disconect()

    ### função a para salvar a planilha no banco de dados
    def save_to_database(self, df):
        try:
            self.db_connect()

            for index, row in df.iterrows():
                prop = row['LOCADOR']
                name = row['LOCATARIO']
                address = row['ENDEREÇO']
                cpf = str(row['CPF'])
                start = row['INICIO']
                renew = row['ANIVERSARIO']
                end = row['TERMINO']
            
                if pd.isna(start) or pd.isna(renew) or pd.isna(end):
                    continue  

            self.cursor.execute("""
                INSERT INTO clientes (nome_proprietario, nome_cliente, endereço, cpf, inicio_contrato, aniversario_contrato, fim_contrato)
                VALUES (?, ?, ?, ?, ?, ?, ?)
            """, (prop, name, address, cpf, start, renew, end))

            self.conn.commit()
            print("Dados salvos no banco de dados com sucesso.")
        except sqlite3.Error as e:
            print("Erro ao salvar dados no banco de dados:", e)
        finally:
            self.db_disconect()

    ### função para importar do excel 
    def import_from_excel(self, excel_file):
        try:
            df = pd.read_excel(excel_file, sheet_name="Plan1")
            self.save_to_database(df)
        except Exception as e:
            print("Erro ao importar dados:", e)

    ### funçao para mandar pro email
    def email(self):
        yag = yagmail.SMTP('sistema.slxadm@gmail.com', '8520147we')

        data_atual = datetime.date.today()
        prazo_vencimento = self.end - datetime.timedelta(days=45)
        if data_atual >= prazo_vencimento:
            assunto = f'Vencimento do contrato de {self.name} se aproximando'
            mensagem = f"O contrato de {self.nameprop} proprietario de {self.name} está prestes a vencer em {self.end}."
            yag.send('contato.slxadm@gmail.com', assunto, mensagem)

            prazo_aniversario = self.renew - datetime.timedelta(days=45)
        if data_atual >= prazo_aniversario:
            assunto = f'Aniversário de contrato de {self.name} se aproximando'
            mensagem = f"O aniversário do contrato de {self.nameprop} proprietario de {self.name} está prestes a chegar em {self.renew}."
            yag.send('contato.slxadm@gmail.com', assunto, mensagem)  
    
class Application(Funcs):

    ### função de iniciar o aplicativo e as funções a cima
    def __init__(self):
        self.root = Tk()
        self.screen()
        self.widgets()
        self.buttons_frame1()
        self.list_frame2()
        self.db_create()
        self.list_select()
        excel_file_path = "C:\\Users\\Carlos Alberto\\Desktop\\coisas daniel\\Sistema\\controle.xlsx"
        self.import_from_excel(excel_file_path)
        self.root.mainloop()

    ### config do tkinter tamanho do aplicativo
    def screen(self):
        self.root.title("SISTEMA SLX")
        self.root.configure(background="#D3D3D3")
        self.root.geometry("{0}x{1}+0+0".format(self.root.winfo_screenwidth(), self.root.winfo_screenheight()))
        self.root.resizable(True, True)

    ### config dos frames
    def widgets(self):
        self.frame_1 = Frame(self.root, bd=4, bg="white", 
                             highlightbackground="#D3D3D3", highlightthickness=2)
        self.frame_1.place(relx=0.02, rely=0.02, relwidth=0.97, relheight=0.46)

        self.frame_2 = Frame(self.root, bd=4, bg="white", 
                             highlightbackground="#D3D3D3", highlightthickness=2)
        self.frame_2.place(relx=0.02, rely=0.5, relwidth=0.97, relheight=0.46)

    ### config dos botoes do frame 1 
    def buttons_frame1(self):
        ### Paginas e configuração
        self.page = ttk.Notebook(self.frame_1)
        self.page1 = Frame(self.page)
        self.page2 = Frame(self.page)
        self.page3 = Frame(self.page)

        self.page1.configure(background="white")
        self.page2.configure(background="white")
        self.page3.configure(background="white")

        self.page.add(self.page1, text="Inicio")
        self.page.add(self.page2, text="Locatarios")
        self.page.add(self.page3, text="cadastro")
        
        self.page.place(relx=0, rely=0, relwidth=0.98, relheight=0.98)
         
        ### Pagina Inicial 

        self.bt_locatarios = Button(self.page1, text="Locatarios", bd=2, bg="black", fg="white",
                                font=('verdana', 10, 'bold'), command= self.switch_to_locatarios_tab)
        self.bt_locatarios.place(relx=0.01, rely=0.25, relwidth=0.07, relheight=0.15) 

        self.bt_cadastro = Button(self.page1, text="Cadastro", bd=2, bg="black", fg="white",
                                font=('verdana', 10, 'bold'), command= self.switch_to_cadastro_tab)
        self.bt_cadastro.place(relx=0.01, rely=0.45, relwidth=0.07, relheight=0.15) 

        ### Botões Pagina de Locatarios
       
        ### Botão Busca
        self.bt_search = Button(self.page2, text="Buscar", bd=2, bg="black", fg="white",
                                font=('verdana', 10, 'bold'))
        self.bt_search.place(relx=0.01, rely=0.25, relwidth=0.1, relheight=0.15)    
        
        ### Botão Limpar
        self.bt_clean = Button(self.page2, text="Limpar", bd=2, bg="black", fg="white",
                               font=('verdana', 10, 'bold'), command= self.clean_fields_loc)
        self.bt_clean.place(relx=0.12, rely=0.25, relwidth=0.1, relheight=0.15)

        ### Botão Novo
        self.bt_new = Button(self.page2, text="Novo", bd=2, bg="black", fg="white",
                             font=('verdana', 10, 'bold'), command=self.switch_to_cadastro_tab)
        self.bt_new.place(relx=0.77, rely=0.07, relwidth=0.1, relheight=0.15)
        
        ### Botão Excluir
        self.bt_delete = Button(self.page2, text="Excluir", bd=2, bg="black", fg="white",
                                font=('verdana', 10, 'bold'), command= self.client_delete)
        self.bt_delete.place(relx=0.88, rely=0.07, relwidth=0.1, relheight=0.15)

        ### Botão Nome
        self.lb_busca = Label(self.page2, text="Nome:", bg="White", fg="black",
                                                font=('verdana', 10, 'bold'))
        self.lb_busca.place(relx=0.01, rely=0.02)

        ### Barra de Digitação 
        self.input_nome = Entry(self.page2, bg="white", 
                             highlightbackground="black", highlightthickness=1, fg="black",
                             font=("verdana", 10, "bold"))
        self.input_nome.place(relx=0.01, rely=0.1, relwidth=0.4, relheight=0.09)       
        
        ### Botão voltar para inicial
        self.bt_return = Button(self.page2, text="Voltar", bd=2, bg="black", fg="white",
                                font=('verdana', 10, 'bold'), command= self.switch_to_initial_tab)
        self.bt_return.place(relx= 0.92, rely=0.87, relwidth=0.08, relheight=0.12)
         
        ### Pagina Cadastro 
    
        ### Botão Salvar Cadastro   
        self.bt_save = Button(self.page3, text="Salvar", bd=2, bg="black", fg="white",
                                font=('verdana', 10, 'bold'), command= self.add_new_client)
        self.bt_save.place(relx=0.62, rely=0.87, relwidth=0.08, relheight=0.12)
        
        ### Botão Limpar Cadastro
        self.bt_clean = Button(self.page3, text="Limpar", bd=2, bg="black", fg="white",
                               font=('verdana', 10, 'bold'), command=self.clean_fields)
        self.bt_clean.place(relx=0.72, rely=0.87, relwidth=0.08, relheight=0.12)

        ### Botão Editar
        self.bt_edit = Button(self.page3, text="Editar", bd=2, bg="black", fg="white",
                              font=('verdana', 10, 'bold'), command= self.update_client)
        self.bt_edit.place(relx=0.82, rely=0.87, relwidth=0.08, relheight=0.12)

        ### Botão Voltar Aba Locatarios
        self.bt_return = Button(self.page3, text="Voltar", bd=2, bg="black", fg="white",
                                font=('verdana', 10, 'bold'), command= self.switch_to_locatarios_tab)
        self.bt_return.place(relx= 0.92, rely=0.87, relwidth=0.08, relheight=0.12)
        
        ### Proprietario

        self.lb_nameprop = Label(self.page3, text="Proprietario:", bg="White", fg="black",
                                                font=('verdana', 10, 'bold'))
        self.lb_nameprop.place(relx=0.01, rely=0.02)

        self.input_nameprop = Entry(self.page3, bg="white", 
                             highlightbackground="black", highlightthickness=1, fg="black",
                             font=("verdana", 10, "bold"))
        self.input_nameprop.place(relx=0.01, rely=0.1, relwidth=0.25, relheight=0.09)

        ### Nome
        self.lb_name = Label(self.page3, text="Nome:", bg="White", fg="black",
                                                font=('verdana', 10, 'bold'))
        self.lb_name.place(relx=0.01, rely=0.2)

        self.input_name = Entry(self.page3, bg="white", 
                             highlightbackground="black", highlightthickness=1, fg="black",
                             font=("verdana", 10, "bold"))
        self.input_name.place(relx=0.01, rely=0.3, relwidth=0.25, relheight=0.09)
        
        ### Endereço
        self.lb_address = Label(self.page3, text="Endereço:", bg="White", fg="black",
                                font=('verdana', 10, 'bold'))
        self.lb_address.place(relx=0.01, rely=0.4)

        self.input_address = Entry(self.page3, bg="white", 
                             highlightbackground="black", highlightthickness=1, fg="black",
                             font=("verdana", 10, "bold"))
        self.input_address.place(relx=0.01, rely=0.48, relwidth=0.25, relheight=0.09)
        
        ### CPF
        self.lb_cpf = Label(self.page3, text="CPF:", bg="White", fg="black",
                                font=('verdana', 10, 'bold'))
        self.lb_cpf.place(relx=0.01, rely=0.6)

        self.input_cpf = Entry(self.page3, bg="white", 
                             highlightbackground="black", highlightthickness=1, fg="black",
                             font=("verdana", 10, "bold"))
        self.input_cpf.place(relx=0.01, rely=0.68, relwidth=0.15, relheight=0.09)

        ### Inicio
        self.lb_start = Label(self.page3, text="Inicio Contrato:", bg="White", fg="black",
                                font=('verdana', 10, 'bold'))
        self.lb_start.place(relx=0.3, rely=0.02)

        self.input_start = Entry(self.page3, bg="white", 
                             highlightbackground="black", highlightthickness=1, fg="black",
                             font=("verdana", 10, "bold"))
        self.input_start.place(relx=0.3, rely=0.1, relwidth=0.08, relheight=0.09)
        
        ### Aniversario
        self.lb_renew = Label(self.page3, text="Aniversario Contrato:", bg="White", fg="black",
                                font=('verdana', 10, 'bold'))
        self.lb_renew.place(relx=0.4, rely=0.13)

        self.input_renew = Entry(self.page3, bg="white", 
                             highlightbackground="black", highlightthickness=1, fg="black",
                             font=("verdana", 10, "bold"))
        self.input_renew.place(relx=0.4, rely=0.2, relwidth=0.08, relheight=0.09)
        
        ### Fim

        self.lb_end = Label(self.page3, text="Fim Contrato:", bg="White", fg="black",
                                font=('verdana', 10, 'bold'))
        self.lb_end.place(relx=0.3, rely=0.2)
        
        self.input_end = Entry(self.page3, bg="white", 
                             highlightbackground="black", highlightthickness=1, fg="black",
                             font=("verdana", 10, "bold"))
        self.input_end.place(relx=0.3, rely=0.28, relwidth=0.08, relheight=0.09)

    ### lista do banco de dados frame 2 
    def list_frame2(self):
        self.show_frame_2 = True
        self.list_bd = ttk.Treeview(self.frame_2, height=3, column=("col1", "col2", "col3", "col4", "col5", "col6", "col7", "col8"))
        self.list_bd.heading("#0", text="")
        self.list_bd.heading("#1", text="Codigo")
        self.list_bd.heading("#2", text="Proprietario")
        self.list_bd.heading("#3", text="Locatario")
        self.list_bd.heading("#4", text="Endereço")
        self.list_bd.heading("#5", text="CPF")          
        self.list_bd.heading("#6", text="Inicio")
        self.list_bd.heading("#7", text="Aniversário")
        self.list_bd.heading("#8", text="Fim")

        self.list_bd.column("#0", width=1)
        self.list_bd.column("#1", width=50)
        self.list_bd.column("#2", width=150)
        self.list_bd.column("#3", width=150)
        self.list_bd.column("#4", width=250)
        self.list_bd.column("#5", width=180)
        self.list_bd.column("#6", width=100)
        self.list_bd.column("#7", width=100)
        self.list_bd.column("#8", width=100)
        
        self.list_bd.place(relx=0.01, rely=0.01, relwidth=0.95, relheight=0.85)

        self.scrool_list = Scrollbar(self.frame_2, orient="vertical")
        self.list_bd.configure(yscroll=self.scrool_list.set)
        self.scrool_list.place(relx=0.96, rely=0.01, relwidth=0.02, relheight=0.85)

        
        self.page3.bind("<<NotebookTabChanged>>", lambda event: self.switch_to_locatarios_tab())
        self.page1.bind("<<NotebookTabChanged>>", lambda event: self.switch_to_initial_tab())
        self.list_bd.bind("<Double-1>", lambda event: self.OnDoubleClick(event))
Application()   
