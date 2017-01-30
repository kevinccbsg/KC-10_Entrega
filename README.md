# Entrega Modulo 10 Master KeepCoding

Para instalar la base de datos ejecutar:

```
npm run installDB
```

Ejecutar el linter:

```
npm run linter
```

Ejecutar el proyecto

```
npm start
```

Para hacer peticiones autenticado es necesario solicitar un token y usarlo como cabecera Authorization.

Para el cambiar el lenguaje de las respuesta de error hay que configurar la cabecera de Accept-Language.

## Endpoints

#### Listar anuncios

```
GET /anuncios
Ejemplo
http://localhost:3000/apiv1/anuncios?tag=Entretaiment&venta=false&precio=5-500&start=0&limit=2&sort=precio&nombre=Plays

POST /usuarios/authenticate

POST /usuarios/register
```

## Configuration

La configuración se realizará en el directorío config/dev, en el se encuantran los parámetros de configuración de base de datos servidor etc.
