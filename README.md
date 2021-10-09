# Número de grupo en Whatsapp

Grupo 3 (Equipo Lambda)

# Integrantes activos
Juan Camilo Caicedo (1143871845); 
Juan Sebastián Lindo (1020746091); 
Jasmin Fuquen (1075685565); 
Mauricio Rivas (1014296110); 
Andrés García (1116238326); 
Victoria Andrea Vasquez (25102981); 

# Link de trello
https://trello.com/b/KQu7KE77/lambda

# Documento Proceso Proyecto
https://docs.google.com/document/d/1uVkItL69uf04zv56t0uB2hQkX2kA2QvYOLFD1ol654U/edit?usp=sharing

# Descripción general del Sprint 2: Duración de 2 semanas

Durante la primera semana se aprendió sobre HTML y progresivamente se realizó la base de la entrega en Angular como estaba incialmente planteado. En la segunda semana se nos informó del cambio del proyecto hacia React, esto nos retrasó un poco y también nos dejó un poco perdidos al tener que cambiar nuestro plan de trabajo. Debido a estos cambios y a factores personales, durante el proceso dos integrantes del grupo original desertaron y esto provocó problemas en cuanto a la repartición de tareas; decidimos entonces buscar nuevos integrantes y, apoyados en el documento que enviaron del área de permanencia, formamos un nuevo grupo de 7 personas (jueves 30 de septiembre) dado que varias compañeros se encontraban sin grupo o en grupos desintegrados. Con esto, dimos una introducción a nuestros nuevos compañeros para que entendieran nuestra metodología de trabajo y el proyecto en sí, para proceder finalmente a repartir nuevamente las tareas pendientes y poder terminar el Sprint 2. 

# Funcionamiento general del proyecto Lambda

Después de que el usuario ingrese a la aplicación a través de la interfaz de LOGIN, podrá visualizar la interfaz de PANEL BÁSICO que, dependiendo del tipo de usuario (vendedor o administrador) tendrá algunas áreas restringidas a través de permisos, es decir, los vendedores sólo podrán acceder a parte del módulo de ventas (REGISTRAR VENTA y LISTAR VENTAS) y parte del módulo de productos (LISTAR PRODUCTOS); mientras que los administradores podrán acceder a los 4 módulos: ventas (REGISTRAR VENTA, EDITAR VENTA, LISTAR VENTAS), usuarios (CREAR USUARIO, EDITAR USUARIO, LISTAR USUARIOS), productos (CREAR PRODUCTO, EDITAR PRODUCTO, LISTAR PRODUCTOS) y roles (CREAR ROL, EDITAR ROL, LISTAR ROLES).

Tal y como se tiene el proyecto actualmente, la creación de usuarios tendría que realizarse por un administrador tras haber ingresado al aplicativo; sin embargo, podría adicionarse un enlace desde el LOGIN para que lleve al usuario a CREAR USUARIO y él mismo pueda crear su cuenta quedando pendiente de autorización posterior por parte de un administrador.

# Descripción de interfaces finales en React

-Interfaz de Login a cargo de Victoria Andrea Vasquez (React) 

Se crea la interfaz del login inicialmente en Angula utilizando HTML, CSS y JS, esta interfaz se utilizara para darle entrada a la aplicacion dependiendo la autenticacion con su respectivo rol.

-Interfaz del Panel básico a cargo de Juan Sebastián Lindo

Descripción: Diseño en Angular, con Css en Html, basado en una plantilla que ofrece un menú desplegable, modificaciones en labels y habilitación de nuevos botones para rutas futuras. Se procede a hacer el traspaso a React, tomando en cuenta que la transcripción requeriere del replanteamiento de lineas de código, se ajustan parámetros para facilitar el ensamble futuro de las demás interfaces del proyecto, se busca una experiencia de navegación sencilla y que reduzca tiempos de búsqueda por parte del usuario, se plantea un enfoque estético basado en ambiente antiguo y sobrio para que  funcione con temas laborales tradicionales.


-Interfaz de Crear Usuario a cargo de Andrés García (React)

Se crea la interfaz para crear un nuevo usuario teniendo en cuenta los requerimientos del Sprint 2. Las interfaces contienen toda la información necesaria en cuanto a atributos obligatorios. Aún queda la posibilidad de ocultar algunos atributos como las contraseñas de la creación de usuario en caso de que se decida realizar la autenticación únicamente con Gmail como se plantea en el proyecto; de igual manera, en cuanto al funcionamiento interno del estado del usuario, se podría dejar la opción de asignarla durante la creación del usuario en caso de que la realice un administrador o de ocultar esta parte y dejarla por defecto como "pendiente de autorización".

La creación de la interfaz en React se basó en la interfaz que ya tenía creada Juan Camilo Caicedo en Angular. posteriormente se migra esta interfaz por parte de Andrés García ajustando el código requerido por React manteniendo su diseño y sus funcionalidades, la migración del código base desarrollado para ser ejecutado en Angular a React se realizó sin inconvenientes mayores a excepción de alguna propiedad html como el color de los iconos o alguna característica particular de la sintaxis de cada framework

-Interfaz de Editar Usuario a cargo de Mauricio Rivas (React) 

El codigo correspondiente a esta interfaz de edicion de usuario fue realizado por Daniel Garay en el framework angular en principio, esta interfaz se creo segun requesitos del sprint 2 , basandose en la descripcion de historias de usuario, esta interfaz es muy similar a la anterior, Crear Usario, manteniendo los datos requeridos por esto anadiendo las funciones de edicion y seleccion de tipo de usuario. Todo el codigo de esta interfaz fue migrado a React sin inconvenientes mayores, se trabajo a manera dede componente manteniendo su apariencia y propiedades con cambios en la sintaxis de algunas etiquetas html.

-Interfaz de Listar Usuarios a cargo de Jasmin Fuquen

Se crea la interfaz listar usuarios paa que el administrador pueda tener un panorama general de los usuarios creados y en que estado se encuentran, en primera instancia el compañero Robert Buitrago realizo la interfaz Angular, despues la compañera Jasmin Fuquen realizo unos cambios pertinentes, ya por ultimo el compañero Mauricio Rivas realizo la migracion de la interfaz a React.

-Interfaz de Crear Producto a cargo de Juan Camilo Caicedo

Se crea la interfaz para crear un nuevo producto teniendo en cuenta los requerimientos del Sprint 2. Las interfaces contienen toda la información necesaria en cuanto a atributos obligatorios. Aún queda la posibilidad de ocultar algunos atributos como el ID del producto en caso de que se decida asignarlo automáticamente durante la creación y que no se tenga que ingresar manualmente. La interfaz fue realizada inicialmente en Angular y luego se migró a React.

-Interfaz de Editar Producto a cargo de Karen González

Se crea Interfaz para editar los productos deseados, dependiendo del ID del producto seleccionado.

-Interfaz de Listar Productos a cargo de Jasmin Fuquen

Se crea la interfaz listar usuarios para que cualquiera de los dos roles (vendedor o administrador) pueda tener un panorama general de los productos creados y en que estado se encuentran, en primera instancia el compañero Robert Buitrago realizo la interfaz Angular, despues la compañera Jasmin Fuquen realizo unos cambios pertinentes, ya por ultimo el compañero Mauricio Rivas realizo la migracion de la interfaz a React.

-Interfaz de Crear Venta a cargo de Juan Camilo Caicedo

Se crea la interfaz para registrar ventas teniendo en cuenta los requerimientos del Sprint 2. La interfaz contiene toda la información necesaria del vendedor, el cliente y atributos de la venta como la fecha y el ID, este último lo más probable es que se asigne automáticamente pero decidimos dejarlo visible por ahora para demostrar que se tuvo en cuenta como lo requiere el Sprint. También se incluye una tabla para registrar los productos requeridos por el cliente de manera que a través del precio unitario y la cantidad de unidades se calcule el total por producto. Al final, se incluye un campo para mostrar el total de la venta y un botón para terminar el registro de la venta. La interfaz fue realizada inicialmente en Angular y luego se migró a React.

-Interfaz de Editar Venta a cargo de Juan Camilo Caicedo

Se crea la interfaz para editar ventas tomando como base la que se realizó para crear ventas. Lo único que se debe destacar es que existen campos que no se pueden editar como la fecha o el ID de la venta.

-Interfaz de Listar Ventas a cargo de Andrés García

Se crea la interfaz listar ventas para que cualquiera de los dos roles (vendedor o administrador) pueda tener un panorama general de las ventas realizadas y el valor total

-Interfaz de Crear Rol a cargo de Andrés García (React) 

Inicialmente Jasmin Fuquen crea en Angular la interfaz para Crear un nuevo rol teniendo en cuenta los requerimientos del Sprint 2. Las interfaz contienen toda la información necesaria en cuanto a atributos para ingresar un nuevo rol y su respectiva descripción, posteriormente se migra esta interfaz por parte de Andrés García ajustando el código requerido por React manteniendo su diseño y sus funcionalidades, la migración del código base desarrollado para ser ejecutado en Angular a React se realizó sin inconvenientes mayores a excepción de alguna propiedad html como el color de los iconos o alguna característica particular de la sintaxis de cada framework

-Interfaz de Editar Rol a cargo de Mauricio Rivas (React) 

En primera instancia la creacion de la interfaz de edicion de rol fue realizada por Jasmin Fuquen en el framework Angular, se crea esta interfaz segun requerimentos del sprint 2 , basandose en historias de usuario, esta interfaz se basa en la interfaz crear rol anterior con las funcionaliades anadidas de editar usuario, label de estado, campo de descripcion del rol y el boton de cancelar. Todo el codigo de esta interfaz fue migrado a React a manera de componente manteniendo su apariencia y propiedades con cambios en la sintaxis de algunas etiquetas html.

-Interfaz de Listar Roles a cargo de Jasmin Fuquen

Se crea el listar roles para verificar el nombre y su estado para relacionarlo a los usuarios.

-Conexión interfaces graficas de usuario (Andrés García)

Se realiza conexión entre las interfaces graficas de usuario con el panel principal y realizando el CRUD de usuario, quedando integrado el usuario con las acciones para Listar, Crear, Editar y Eliminar y se establece conexión con el panel de control 

