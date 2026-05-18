const express = require('express');
const mysql = require('mysql2/promise');
const bcrypt = require('bcrypt');
const path = require('path');
const session = require('express-session');
const app = express();
const PORT = process.env.PORT || 3000;
const dbConfig = {
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'vet_admin',
    password: process.env.DB_PASSWORD || 'vet_password',
    database: process.env.DB_NAME || 'pawscross',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
};
const pool = mysql.createPool(dbConfig);
app.use(session({
    secret: 'clave_secreta_paws_and_cross_aragon',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false, maxAge: 1000 * 60 * 60 * 24 }
}));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

function isAuthenticated(req, res, next) {
    if (req.session && req.session.veterinario) {
        return next();
    }
    res.redirect('/login.html');
}

app.get('/', (req, res) => {
    if (req.session && req.session.veterinario) {
        return res.redirect('/dashboard');
    }
    res.redirect('/login.html');
});

app.get('/login.html', (req, res, next) => {
    if (req.session && req.session.veterinario) {
        return res.redirect('/dashboard');
    }
    next();
});

app.get('/dashboard', isAuthenticated, (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'dashboard.html'));
});

app.get('/pacientes', isAuthenticated, (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'pacientes.html'));
});

app.get('/pacientes/nuevo', isAuthenticated, (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'nuevo-paciente.html'));
});

app.get('/historial', isAuthenticated, (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'historial.html'));
});

app.get('/agenda', isAuthenticated, (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'agenda.html'));
});

app.get('/api/v1/usuarios/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/login.html');
});

app.get('/api/v1/usuarios/me', isAuthenticated, (req, res) => {
    res.json(req.session.veterinario);
});

app.post('/api/v1/pacientes/nuevo', isAuthenticated, async (req, res) => {
    const { nombre, raza, edad, peso, historial, hora_cita } = req.body;
    try {
        const query = `INSERT INTO pacientes (nombre, raza, edad, peso, historial_medico, hora_cita, estado) VALUES (?, ?, ?, ?, ?, ?, 'CITA_PROGRAMADA')`;
        await pool.query(query, [nombre, raza, edad, peso, historial || null, hora_cita || null]);
        res.redirect('/pacientes');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al guardar al paciente.');
    }
});

app.get('/api/v1/pacientes', isAuthenticated, async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM pacientes ORDER BY fecha_ingreso DESC');
        res.json(rows);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener pacientes' });
    }
});

app.delete('/api/v1/pacientes/:id', isAuthenticated, async (req, res) => {
    try {
        await pool.query('DELETE FROM pacientes WHERE id = ?', [req.params.id]);
        res.json({ success: true });
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar' });
    }
});

app.put('/api/v1/pacientes/:id', isAuthenticated, async (req, res) => {
    const { id } = req.params;
    const { historial_medico, hora_cita, estado } = req.body;

    try {
        const fechaFormateada = hora_cita ? hora_cita.replace('T', ' ') : null;
        const query = `
        UPDATE pacientes
        SET historial_medico = ?, hora_cita = ?, estado = ?
        WHERE id = ?
        `;
        await pool.query(query, [historial_medico, fechaFormateada, estado, id]);
        res.json({ success: true });
    } catch (error) {
        console.error("Error al actualizar el paciente:", error);
        res.status(500).json({ error: 'Error al actualizar la información en la base de datos.' });
    }
});

app.post('/api/v1/usuarios/register', async (req, res) => {
    const { nombre, apellidos, edad, telefono, carrera, especialidad, email, password, confirmarPassword } = req.body;

    if (password !== confirmarPassword) {
        return res.send('Las contraseñas no coinciden. <a href="/logindto.html">Volver</a>');
    }

    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        await pool.query('INSERT INTO veterinarios (nombre, apellidos, edad, telefono, carrera, especialidad, email, password) VALUES (?, ?, ?, ?, ?, ?, ?, ?)', [nombre, apellidos, edad, telefono, carrera, especialidad || null, email, hashedPassword]);

        res.redirect('/login.html');

    } catch (error) {
        console.error(error);
        res.status(500).send('Error al registrar.');
    }
});

app.post('/api/v1/usuarios/login', async (req, res) => {
    const { email, password, recordar } = req.body;

    try {
        const [rows] = await pool.query('SELECT * FROM veterinarios WHERE email = ?', [email]);
        if (rows.length === 0) return res.send('Usuario no encontrado. <a href="/login.html">Volver</a>');

        const validPassword = await bcrypt.compare(password, rows[0].password);
        if (!validPassword) return res.send('Contraseña incorrecta. <a href="/login.html">Volver</a>');

        req.session.veterinario = { id: rows[0].id, nombre: rows[0].nombre, email: rows[0].email };

        if (recordar) {
            req.session.cookie.maxAge = 1000 * 60 * 60 * 24 * 30;
        } else {
            req.session.cookie.expires = false;
        }

        res.redirect('/dashboard');
    } catch (error) {
        res.status(500).send('Error interno.');
    }
});

app.listen(PORT, () => {
    console.log(`Servidor Paws & Cross corriendo en puerto ${PORT}`);
});
