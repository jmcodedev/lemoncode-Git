# Laboratorio de Git

En este documento se detallan los primeros pasos a la hora de trabajar con repositorios de Git y repositorios en línea como Github.

_15 de Noviembre de 2023_


## Objetivos
**1. Crear un repositorio local**

- Inciamos un Git Bash en la ruta donde queremos crear el repositorio, inicializamos y nos introducimos en el.

![Paso 1](1.png)
---
**2. Creamos el repositorio remoto (GitHub)**
- En GitHub creamos un repositorio.

![Creando repo remoto](3.PNG)

- Copiamos el enlace del mismo. En este caso se ha utilizado SSH.

![Alt text](4.PNG)
---
**3. Subiendo archivos y staging**

- Creamos un archivo
- Añadimos ruta remota de nuestro repositorio GitHub
![Ruta remota](5.PNG)![Check remote](6.png)
- Añadimos archivo al _staging_
![Git add](7.PNG)
- Ejecutamos _commit_ con mensaje.
![Commit](8.PNG)
- Subimos cambios con _push_
![Push](9.PNG)
---
**4. Jugando con las ramas**
1. Creamos rama _development_ y nos movemos a ella

![Ramas](10.PNG)

2. Hacemos cambios en ___index.html___ y los subimos a la nueva rama
![Cambios](11.PNG)
---
**5. Fusionando cambios**

1. Volvemos a la rama **master**.
2. Ejecutamos _merge_ de **development** a **master**.
3. _Commit_ para subir cambios a repositorio local.
4. _Push_ con los cambios a remoto.
---
![Merge](12.PNG)
---