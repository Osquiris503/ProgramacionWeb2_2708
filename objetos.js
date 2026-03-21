const alumno = {
    Papellido:'Huerta',
    Sapellido:'Pliego',
    nombres: "Oscar Francisco",
    Ncuenta:321067443,
    edad: 20,
    titulado: false,
    egresado:{
        estado: false,
    },
    carrera: "Ingeniería en computación",
    domicilio: {
        calle: {
            ampliacion: "Ampliación",
            nombre: "Calle 5 de febrero",
            lote:2
        },
        numero: 123,
        colonia: "Colonia Centro",
        alcaldia: "Cuauhtémoc",
        ciudad: "CDMX",
        estado: "CDMX",
        pais: "México"
    },

    mostrarInfo: function() {
        console.log(`Nombres: ${this.nombres}`);
        console.log('Apellidos: ' + this.Papellido + ' ' + this.Sapellido);
        console.log(`Edad: ${this.edad}`);
        console.log(`Carrera: ${this.carrera}`);
        console.log('Egresado: ' + (this.egresado.estado ? 'Sí' : 'No'));
        console.log(`Domicilio: ${this.domicilio.calle.nombre}, ${this.domicilio.calle.numero}`);
        console.log(`Colonia: ${this.domicilio.colonia}`);
        console.log(`Alcaldía: ${this.domicilio.alcaldia}`);
        console.log(`Ciudad: ${this.domicilio.ciudad}`);
        console.log(`Estado: ${this.domicilio.estado}`);
        console.log(`País: ${this.domicilio.pais}`);
    }
};
alumno.mostrarInfo();