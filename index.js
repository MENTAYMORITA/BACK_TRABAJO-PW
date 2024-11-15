import app from './app.js'
import sequelize from './src/config/dataBase.js'

async function main() {
<<<<<<< HEAD
    try  {

        const init = process.argv[2]

=======
    try {
        const init =  process.argv[2];
        console.log({init})
>>>>>>> 5cfcf1867ff4048498f64e1f885f32b276bcea9d
        if (init)
            await sequelize.sync({force: true})
        else 
            await sequelize.sync({force: false})
<<<<<<< HEAD
=======

        console.log('se logró la conexión pal acarreo')
        
        app.listen(3001)
>>>>>>> 5cfcf1867ff4048498f64e1f885f32b276bcea9d

        console.log('conexión exitosa!')

        const port = process.env.PORT || 3001

        app.listen(port, () => {
            console.log('Servidor iniciado. Escuchando en puerto ' + port)
        })

    } catch(err) {
        console.error(err)
    }
<<<<<<< HEAD
=======
    catch(err) {
        console.error('triste pq no funca el acarreo: ', err)
    }
>>>>>>> 5cfcf1867ff4048498f64e1f885f32b276bcea9d
}

main();

