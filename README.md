# Flask, MongoDB & Angular
Ejemplo de visualizar, crear, editar y eliminar un usuario usando Flask y MongoDB como backend y Angular como Frontend.
Se necesita tener MongoDB, Python y Node.JS instalados.

## Ejecutar MongoDB
Normalmente MongoDB ya se inicia como servicio automáticamente al encender el computador, pero si no es así solo ejecutar el comando:
```console
$ mongod
```
## Ejecutar el server Flask
Como primer paso debemos entrar al entorno virtual, desde la carpeta raíz del repositorio nos movemos hasta "backend/venv/Scripts" y luego ejecutamos el siguiente comando:
```console
$ activate
```
Importante: Si estás usando Visual Studio Code no es necesario hacer el paso anterior, ya que automáticamente entra al entorno virtual.

# Ejecutar el server del frontend
Entramos a la carpeta "frontend" y ejecutamos:
```console
$ ng serve --o
```
"--o" nos abrirá automáticamente una pestaña con el server de Angular.
