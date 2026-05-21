#Javascript class from Hardvardx

JavaScript nos permite trabajar con el Document Object Module (DOM) que permite manipular los elemeentos del HTML de la página web.

Las etiquetas para poder incluir JavaScript en el HTML son

<script>
    alert('hello, world')
</script>

Para implementar interacción de forma simple con elementos del HTML, se puede incluir atributos en la etiqueta de apertura del elemento, por ejemplo:

<button onclick="hello()">Click Here</button>

//esto es para correr "hello()" function gracias al atributo "onclick".

También podemos cambiar el contenido de un elemento de HTML, utilizando los comandos:

<script>
            function hello(){
                document.querySelector('h1').innerHTML='Goodbye!'
                /*La lectura sería: dentro del documento. haremos una selección del elemento 'h1'. Luego haremos un cambio del contenido de dicho elemento por = 'Goodbye!' */
            }

        </script>
