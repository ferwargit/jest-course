test.skip('asignación de propiedades a un objeto', () => {
    const data = { one: 1 };
    data['two'] = 2;
    expect(data).toEqual({ one: 1, two: 2 });
});

/*
+ Crear un objeto inicial con una propiedad
+ Añadir una nueva propiedad dinámicamente
+ Verificar que el objeto tiene las propiedades esperadas
*/