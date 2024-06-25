
export interface Computadoras { //Interface para definir las propiedades de una computadora

    id: string;
    /*

    id

    -Identificador único de la computadora

    -"PC123456789"
    
    */

    procesador: string;
    /*

    procesador

    -Información del procesador
    -Ejemplo:
    -Marca: AMD
    -Modelo: Ryzen 7 5800X
    -Tipo: 8 núcleos, 16 hilos, velocidad base de 3.8 GHz, hasta 4.7 GHz

    -"AMD Ryzen 7 5800X"
    
    */

    placa_grafica: string;
    /*
     
    placa_grafica

    -Información de la tarjeta gráfica
    -Ejemplo:
    -Marca: NVIDIA
    -Modelo: GeForce RTX 3070
    -Tipo: RTX, 8GB de memoria GDDR6
    -Características adicionales: Ray Tracing, DLSS, HDMI 2.1, PCIe 4.0

    -"NVIDIA GeForce RTX 3070, 8GB GDDR6"
    
    */

    ram: string;
    /**
    
    ram

    -Información de la RAM
    -Ejemplo:
    -Tipo: DDR4
    -Capacidad: 32GB
    -Frecuencia: 3200MHz
    -Configuración: 2 módulos de 16GB para aprovechar el dual channel

    -"32GB DDR4 3200MHz"
    
    */
    fuente_de_poder: number;
    /*

    fuente_de_poder

    -Potencia de la fuente de poder en vatios
    -Ejemplo:
    -Potencia: 1000w
    -Certificación: 80 Plus Gold
    -Modularidad: Semi-modular

    -1000w 80 Plus Gold Semi-modular
    
    */

    placa_madre: string;
    /*

    placa_madre

    -Información de la placa madre
    -Ejemplo:
    -Marca: ASUS
    -Modelo: ROG Strix B550-F Gaming
    -Chipset: AMD B550
    -Soporte: Socket AM4, PCIe 4.0, DDR4 hasta 128GB
    -"ASUS ROG Strix B550-F Gaming"
    
    */

    almacenamiento: string;
    /*

    almacenamiento
    
     -Información del almacenamiento
     -Ejemplo:
     -Marca: Samsung
     -Modelo: 970 EVO Plus
     -Tipo: NVMe SSD
     -Capacidad: 1TB
     -Velocidad: Lectura hasta 3500 MB/s, escritura hasta 3300 MB/s
     -"Samsung 970 EVO Plus 1TB NVMe SSD"
     
     */
}
