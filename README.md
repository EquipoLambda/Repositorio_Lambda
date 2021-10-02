# Número de grupo en Whatsapp

Grupo 3 (Equipo Lambda)

# Integrantes activos
Juan Camilo Caicedo (1143871845); 
Juan Sebastián Lindo (1020746091); 
Jasmin Fuquen (1075685565); 
Mauricio Rivas (1014296110); 
Karen González (52973086); 
Andrés García (1116238326); 
Victoria Andrea Vasquez (25102981); 

# Link de trello
https://trello.com/b/KQu7KE77/lambda

# Descripción general del Sprint 2: Duración de 2 semanas

Durante la primera semana se aprendió sobre HTML y progresivamente se realizó la base de la entrega en Angular como estaba incialmente planteado. En la segunda semana se nos informó del cambio del proyecto hacia React, esto nos retrasó un poco y también nos dejó un poco perdidos al tener que cambiar nuestro plan de trabajo. Debido a estos cambios y a factores personales, durante el proceso dos integrantes del grupo original desertaron y esto provocó problemas en cuanto a la repartición de tareas; decidimos entonces buscar nuevos integrantes y, apoyados en el documento que enviaron del área de permanencia, formamos un nuevo grupo de 7 personas (jueves 30 de septiembre) dado que varias compañeros se encontraban sin grupo o en grupos desintegrados. Con esto, dimos una introducción a nuestros nuevos compañeros para que entendieran nuestra metodología de trabajo y el proyecto en sí, para proceder finalmente a repartir nuevamente las tareas pendientes y poder terminar el Sprint 2. 

# Funcionamiento general del proyecto Lambda

Después de que el usuario ingrese a la aplicación a través de la interfaz de LOGIN, podrá visualizar la interfaz de PANEL BÁSICO que, dependiendo del tipo de usuario (vendedor o administrador) tendrá algunas áreas restringidas a través de permisos, es decir, los vendedores sólo podrán acceder a parte del módulo de ventas (REGISTRAR VENTA y LISTAR VENTAS) y parte del módulo de productos (LISTAR PRODUCTOS); mientras que los administradores podrán acceder a los 4 módulos: ventas (REGISTRAR VENTA, EDITAR VENTA, LISTAR VENTAS), usuarios (CREAR USUARIO, EDITAR USUARIO, LISTAR USUARIOS), productos (CREAR PRODUCTO, EDITAR PRODUCTO, LISTAR PRODUCTOS) y roles (CREAR ROL, EDITAR ROL, LISTAR ROLES).

Tal y como se tiene el proyecto actualmente, la creación de usuarios tendría que realizarse por un administrador tras haber ingresado al aplicativo; sin embargo, podría adicionarse un enlace desde el LOGIN para que lleve al usuario a CREAR USUARIO y él mismo pueda crear su cuenta quedando pendiente de autorización posterior por parte de un administrador.

# Descripción de interfaces finales en React

-Interfaz de Login a cargo de Victoria Andrea Vasquez (React)  COPIAR QUE LA BASE DE ANGULAR LA REALIZÓ JASMIN FUQUEN

-Interfaz del Panel básico a cargo de Juan Sebastián Lindo

-Interfaz de Crear Usuario a cargo de Andrés García (React)

Se crea la interfaz para crear un nuevo usuario teniendo en cuenta los requerimientos del Sprint 2. Las interfaces contienen toda la información necesaria en cuanto a atributos obligatorios. Aún queda la posibilidad de ocultar algunos atributos como las contraseñas de la creación de usuario en caso de que se decida realizar la autenticación únicamente con Gmail como se plantea en el proyecto; de igual manera, en cuanto al funcionamiento interno del estado del usuario, se podría dejar la opción de asignarla durante la creación del usuario en caso de que la realice un administrador o de ocultar esta parte y dejarla por defecto como "pendiente de autorización".

La creación de la interfaz en React se basó en la interfaz que ya tenía creada Juan Camilo Caicedo en Angular. La migración se realizó...

-Interfaz de Editar Usuario a cargo de Mauricio Rivas (React) COPIAR QUE LA BASE DE ANGULAR LA REALIZÓ DANIEL GARAY (DESERTOR)

-Interfaz de Listar Usuarios a cargo de Jasmin Fuquen COPIAR QUE PARTE DE LA BASE DE ANGULAR LA REALIZÓ ROBERT BUITRAGO (DESERTOR)

-Interfaz de Crear Producto a cargo de Juan Camilo Caicedo

Se crea la interfaz para crear un nuevo producto teniendo en cuenta los requerimientos del Sprint 2. Las interfaces contienen toda la información necesaria en cuanto a atributos obligatorios. Aún queda la posibilidad de ocultar algunos atributos como el ID del producto en caso de que se decida asignarlo automáticamente durante la creación y que no se tenga que ingresar manualmente. La interfaz fue realizada inicialmente en Angular y luego se migró a React.

-Interfaz de Editar Producto a cargo de Karen González

-Interfaz de Listar Productos a cargo de Jasmin Fuquen COPIAR QUE PARTE DE LA BASE DE ANGULAR LA REALIZÓ ROBERT BUITRAGO (DESERTOR)

-Interfaz de Crear Venta a cargo de Juan Camilo Caicedo

Se crea la interfaz para registrar ventas teniendo en cuenta los requerimientos del Sprint 2. La interfaz contiene toda la información necesaria del vendedor, el cliente y atributos de la venta como la fecha y el ID, este último lo más probable es que se asigne automáticamente pero decidimos dejarlo visible por ahora para demostrar que se tuvo en cuenta como lo requiere el Sprint. También se incluye una tabla para registrar los productos requeridos por el cliente de manera que a través del precio unitario y la cantidad de unidades se calcule el total por producto. Al final, se incluye un campo para mostrar el total de la venta y un botón para terminar el registro de la venta. La interfaz fue realizada inicialmente en Angular y luego se migró a React.

-Interfaz de Editar Venta a cargo de Juan Camilo Caicedo

Se crea la interfaz para editar ventas tomando como base la que se realizó para crear ventas. Lo único que se debe destacar es que existen campos que no se pueden editar como la fecha o el ID de la venta.

-Interfaz de Listar Ventas a cargo de Jasmin Fuquen

-Interfaz de Crear Rol a cargo de Andrés García (React) COPIAR QUE LA BASE DE ANGULAR LA REALIZÓ JASMIN FUQUEN

-Interfaz de Editar Rol a cargo de Mauricio Rivas (React) COPIAR QUE LA BASE DE ANGULAR LA REALIZÓ JASMIN FUQUEN

-Interfaz de Listar Roles a cargo de Jasmin Fuquen

